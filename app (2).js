/* Kim Cun học đi · phiên bản giáo trình */
(function(){
"use strict";

const PASS = 0.8;
const LANGS = {
  en:{name:"Tiếng Anh", badge:"EN", lessons:window.EN_LESSONS||[], plan:window.EN_PLAN||[], tts:"en-GB", mins:30},
  zh:{name:"Tiếng Trung", badge:"中", lessons:window.ZH_LESSONS||[], plan:window.ZH_PLAN||[], tts:"zh-CN", mins:20}
};
const MOCKS = window.MOCKS||[];
const INTERVAL = {1:1,2:3,3:7,4:14,5:30};
const STORE = "kc-hoc-di-v2";
const SYNC = "kc-hoc-di-sync";
const GIST_FILE = "kimcun-hoc-di-v2.json";
const app = document.getElementById("app");

/* ---------- Tiện ích ---------- */
const pad=n=>String(n).padStart(2,"0");
const fmt=d=>d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
const today=()=>fmt(new Date());
function addDays(s,n){const [y,m,d]=s.split("-").map(Number);const t=new Date(y,m-1,d);t.setDate(t.getDate()+n);return fmt(t);}
const WD=["CN","T2","T3","T4","T5","T6","T7"];
function wd(s){const [y,m,d]=s.split("-").map(Number);return WD[new Date(y,m-1,d).getDay()];}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
const enc=s=>encodeURIComponent(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function toast(m){const t=document.getElementById("toast");t.textContent=m;t.classList.add("show");clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove("show"),2400);}
const I_SAY='<svg viewBox="0 0 24 24"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a9 9 0 0 1 0 14"/></svg>';
const I_BACK='<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>';
const I_FLAME='<svg viewBox="0 0 24 24"><path d="M12 2c1 3.5-1.5 5-1.5 7.5 0 1.4 1 2.5 2.3 2.5 1.6 0 2.4-1.4 2.2-3.2C17.6 10.6 19 13 19 15.5 19 19.1 15.9 22 12 22s-7-2.9-7-6.5C5 10.4 9.5 7.6 12 2z"/></svg>';
const I_MIC='<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>';
function sayBtn(text,lang,sm,label){return `<button class="say${sm?" sm":""}${label?" lbl":""}" type="button" data-say="${enc(text)}" data-lang="${lang}" aria-label="Nghe">${I_SAY}${label?`<span>${label}</span>`:""}</button>`;}

/* ---------- Đọc to ---------- */
function speak(text,lang,onend,pitch){
  if(!("speechSynthesis" in window)){toast("Thiết bị này chưa hỗ trợ đọc to");return;}
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  u.lang=lang; u.rate=lang.startsWith("zh")?0.8:0.92; if(pitch)u.pitch=pitch;
  const vs=speechSynthesis.getVoices();
  const v=vs.find(v=>v.lang.replace("_","-")===lang)||vs.find(v=>v.lang.replace("_","-").startsWith(lang.slice(0,2)));
  if(v)u.voice=v;
  if(onend)u.onend=onend;
  speechSynthesis.speak(u);
}
function speakLines(lines,lang){
  let i=0;
  const next=()=>{if(i>=lines.length)return;const l=lines[i++];speak(l.t,lang,()=>setTimeout(next,450),l.who==="W"?1.25:l.who==="M"?0.85:1);};
  next();
}
if("speechSynthesis" in window)speechSynthesis.getVoices();

/* ---------- Lưu trữ ---------- */
function blank(){return {v:2,done:{en:{},zh:{}},checked:{en:{},zh:{}},srs:{},best:{},mock:{},score:{},updated:0};}
function load(){try{const s=JSON.parse(localStorage.getItem(STORE));if(s&&s.done)return Object.assign(blank(),s);}catch(e){}return blank();}
let S=load();
function save(silent){S.updated=Date.now();try{localStorage.setItem(STORE,JSON.stringify(S));}catch(e){}if(!silent)Sync.schedule();}
function syncCfg(){try{return JSON.parse(localStorage.getItem(SYNC))||{};}catch(e){return {};}}
function setSyncCfg(c){try{localStorage.setItem(SYNC,JSON.stringify(c));}catch(e){}}

/* ---------- Chuẩn hóa đáp án ---------- */
const NUM={zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,fifteen:15,twenty:20,fifty:50,hundred:100};
function normEn(s){
  s=String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[’‘`´]/g,"'");
  s=s.replace(/can't/g,"cannot").replace(/won't/g,"will not").replace(/n't/g," not").replace(/'ve/g," have").replace(/'re/g," are").replace(/'ll/g," will").replace(/'m/g," am").replace(/'d/g," would").replace(/'s been/g," has been");
  s=s.replace(/[.,!?;:"“”()$]/g," ").replace(/\s+/g," ").trim();
  s=s.split(" ").map(w=>NUM[w]!==undefined?String(NUM[w]):w).join(" ");
  s=s.replace(/\b(\d+)(st|nd|rd|th)\b/g,"$1").replace(/\bforty 5\b/g,"45").replace(/\b9 100\b/g,"900");
  return s;
}
function normZh(s){return String(s).replace(/[\s.,!?;:"“”。，！？；：、…]/g,"");}
const TONE={"ā":"a1","á":"a2","ǎ":"a3","à":"a4","ē":"e1","é":"e2","ě":"e3","è":"e4","ī":"i1","í":"i2","ǐ":"i3","ì":"i4","ō":"o1","ó":"o2","ǒ":"o3","ò":"o4","ū":"u1","ú":"u2","ǔ":"u3","ù":"u4","ǖ":"v1","ǘ":"v2","ǚ":"v3","ǜ":"v4"};
function normPy(s){return String(s).toLowerCase().replace(/ü|u:/g,"v").replace(/[\s'’]/g,"").replace(/5/g,"");}
function pyMarkedToBare(s){return String(s).toLowerCase().replace(/[\s'’]/g,"").replace(/./g,c=>TONE[c]?TONE[c][0]:c);}
function isRight(item,val){
  if(item.type==="pinyin"){
    const v=normPy(val); if(item.ans.some(a=>normPy(a)===v)) return true;
    // chấp nhận viết có dấu thanh đúng y hệt
    return item.show && String(val).replace(/\s/g,"").toLowerCase()===item.show.replace(/\s/g,"").toLowerCase();
  }
  if(item.zh) return item.ans.some(a=>normZh(a)===normZh(val));
  return item.ans.some(a=>normEn(a)===normEn(val));
}

/* ---------- Từ vựng và kho ôn tập ---------- */
const WORDS={};
["en","zh"].forEach(l=>LANGS[l].lessons.forEach(ls=>(ls.vocab||[]).forEach(v=>{WORDS[l+":"+v.id]={lang:l,day:ls.day,v};})));
function recallItems(lang,vocab){
  return vocab.map(v=>lang==="en"
    ? {type:"type", q:`Gõ từ tiếng Anh nghĩa là <b>${esc(v.vi)}</b><br><span class="hintx">Gợi ý: ${v.w[0]}${"_".repeat(Math.max(1,v.w.length-1))} (${v.w.length} chữ cái)</span>`, ans:[v.w], why:`${v.w} ${v.ipa}: ${v.vi}`, key:"en:"+v.id}
    : {type:"hanzi", q:`Viết chữ Hán của: <b>${esc(v.vi)}</b> <span class="hintx">(${v.py})</span>`, chars:v.h, key:"zh:"+v.id, why:`${v.h} ${v.py}: ${v.vi}`});
}

/* ---------- Tiến độ ---------- */
function maxDone(l){return Object.keys(S.done[l]).reduce((m,d)=>Math.max(m,+d),0);}
function status(l){
  const m=maxDone(l),t=today();
  if(m>0&&S.done[l][m]===t)return {day:m,state:"doneToday"};
  const day=m+1;
  if(!LANGS[l].lessons.find(x=>x.day===day))return {day,state:"soon"};
  return {day,state:"open"};
}
function bothDates(){const a=new Set(Object.values(S.done.en)),b=new Set(Object.values(S.done.zh));return new Set([...a].filter(d=>b.has(d)));}
function streak(){
  const both=bothDates();let cur=today(),s=0;
  if(!both.has(cur))cur=addDays(cur,-1);
  while(both.has(cur)){s++;cur=addDays(cur,-1);}
  let best=0,run=0,prev=null;[...both].sort().forEach(d=>{run=(prev&&addDays(prev,1)===d)?run+1:1;best=Math.max(best,run);prev=d;});
  return {cur:s,best};
}
const dueKeys=()=>{const t=today();return Object.keys(S.srs).filter(k=>WORDS[k]&&S.srs[k].due<=t);};

/* ---------- Đồng bộ Gist ---------- */
const Sync={
  timer:null,busy:false,last:"",
  on(){const c=syncCfg();return !!(c.token&&c.gistId);},
  api(path,opt){const c=syncCfg();return fetch("https://api.github.com"+path,Object.assign({headers:{"Authorization":"Bearer "+c.token,"Accept":"application/vnd.github+json","Content-Type":"application/json"}},opt||{})).then(r=>{if(!r.ok)throw new Error("GitHub trả lỗi "+r.status);return r.json();});},
  merge(a,b){
    const r=JSON.parse(JSON.stringify(a));
    ["en","zh"].forEach(l=>{
      Object.entries((b.done||{})[l]||{}).forEach(([d,dt])=>{if(!r.done[l][d]||dt<r.done[l][d])r.done[l][d]=dt;});
      Object.entries((b.checked||{})[l]||{}).forEach(([d,v])=>{if(v)r.checked[l][d]=true;});
    });
    Object.entries(b.srs||{}).forEach(([k,v])=>{if(!r.srs[k]||(v.t||0)>(r.srs[k].t||0))r.srs[k]=v;});
    Object.entries(b.best||{}).forEach(([k,v])=>{if(!r.best[k]||v<r.best[k])r.best[k]=v;});
    Object.entries(b.score||{}).forEach(([k,v])=>{if(r.score[k]===undefined||v>r.score[k])r.score[k]=v;});
    Object.entries(b.mock||{}).forEach(([k,arr])=>{const have=new Set((r.mock[k]||[]).map(x=>x.at));r.mock[k]=(r.mock[k]||[]).concat(arr.filter(x=>!have.has(x.at))).sort((x,y)=>x.at-y.at);});
    r.updated=Math.max(a.updated||0,b.updated||0);return r;
  },
  async pull(){const c=syncCfg(),g=await this.api("/gists/"+c.gistId);const f=g.files&&g.files[GIST_FILE];if(!f)return null;let t=f.content;if(f.truncated)t=await fetch(f.raw_url).then(r=>r.text());try{return JSON.parse(t);}catch(e){return null;}},
  async push(){const c=syncCfg();await this.api("/gists/"+c.gistId,{method:"PATCH",body:JSON.stringify({files:{[GIST_FILE]:{content:JSON.stringify(S)}}})});},
  async run(){
    if(!this.on()||this.busy)return;this.busy=true;
    try{const rm=await this.pull();if(rm&&rm.done){S=this.merge(S,rm);save(true);}await this.push();this.last="Đã đồng bộ lúc "+new Date().toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"});const c=syncCfg();c.lastOk=Date.now();setSyncCfg(c);}
    catch(e){this.last="Chưa đồng bộ được: "+e.message;}
    this.busy=false;refreshSoft();
  },
  schedule(){if(!this.on())return;clearTimeout(this.timer);this.timer=setTimeout(()=>this.run(),1500);},
  async connect(token){
    setSyncCfg({token});
    const list=await this.api("/gists?per_page=100");
    const f=list.find(g=>g.files&&g.files[GIST_FILE]);let id;
    if(f)id=f.id;else{const g=await this.api("/gists",{method:"POST",body:JSON.stringify({description:"Tiến độ học của Kim Cun",public:false,files:{[GIST_FILE]:{content:JSON.stringify(S)}}})});id=g.id;}
    setSyncCfg({token,gistId:id});await this.run();
  }
};
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&!L)Sync.run();});

/* ---------- Router ---------- */
let L=null;
function route(){
  stopAll();
  const p=(location.hash.replace(/^#\/?/,"")||"").split("/");
  document.body.classList.remove("lesson-mode");
  document.querySelectorAll(".tabbar a").forEach(a=>a.classList.toggle("on",a.dataset.nav===(p[0]||"home")));
  window.scrollTo(0,0);
  L=null;
  if(p[0]==="learn"&&LANGS[p[1]])return openLesson(p[1],p[2]);
  if(p[0]==="mock"&&p[1])return openMock(p[1]);
  if(p[0]==="review")return openReview();
  if(p[0]==="extra")return renderExtra();
  if(p[0]==="roadmap")return renderRoadmap(p[1]||"en");
  if(p[0]==="settings")return renderSettings();
  renderHome();
}
function refreshSoft(){if(L)return;const p=(location.hash.replace(/^#\/?/,"")||"").split("/")[0];if(!p||p==="home")renderHome();if(p==="settings")renderSettings();}
window.addEventListener("hashchange",route);
function stopAll(){
  try{speechSynthesis.cancel();}catch(e){}
  if(L&&L.timer)clearInterval(L.timer);
  if(L&&L.rec&&L.rec.state==="recording")L.rec.stop();
}

/* ---------- Trang chủ ---------- */
function greeting(){const h=new Date().getHours();return h<11?"Chào buổi sáng":h<14?"Chào buổi trưa":h<18?"Chào buổi chiều":"Chào buổi tối";}
function renderHome(){
  const st=streak(),t=today(),en=new Set(Object.values(S.done.en)),zh=new Set(Object.values(S.done.zh));
  let week="";for(let i=6;i>=0;i--){const d=addDays(t,-i),a=en.has(d),b=zh.has(d);week+=`<div class="dayc">${wd(d)}<div class="dot ${a&&b?"full":(a||b)?"half":""} ${d===t?"today":""}">${+d.slice(8)}</div></div>`;}
  const card=l=>{
    const Lg=LANGS[l],s=status(l);let pill,title,href=`#/learn/${l}`;
    if(s.state==="open"){const ls=Lg.lessons.find(x=>x.day===s.day);pill=`<span class="pill">${Lg.mins} phút</span>`;title=ls.title;}
    else if(s.state==="doneToday"){pill=`<span class="pill ok">Xong hôm nay</span>`;title=`Mai học ngày ${s.day+1}`;href=`#/learn/${l}/${s.day}`;}
    else{pill=`<span class="pill lock">Đang soạn</span>`;title=`Bài ngày ${s.day} sẽ sớm có`;}
    return `<a class="card lesson-card" href="${href}"><div class="ic">${Lg.badge}</div><div class="meta"><div class="k">${Lg.name} · Ngày ${s.day}</div><div class="t">${title}</div></div>${pill}</a>`;
  };
  const due=dueKeys().length, done=en.has(t)&&zh.has(t);
  app.innerHTML=`<header class="hero"><div class="wrap">
    <p class="hello">${greeting()}, KC</p>
    <h1>${done?"Hôm nay KC học xong rồi, giỏi quá!":"Kỷ luật hôm nay, tự do ngày mai"}</h1>
    <div class="streak"><div class="flame ${st.cur?"":"off"}">${I_FLAME}</div><div style="flex:1"><div class="big">${st.cur} ngày</div><div class="sub">Chuỗi học liên tiếp · Kỷ lục ${st.best} ngày</div></div></div>
    <div class="week">${week}</div>
    ${Sync.on()?"":`<div class="banner"><span>Bật đồng bộ để học liền mạch trên điện thoại, iPad và máy tính.</span><a href="#/settings">Thiết lập</a></div>`}
  </div></header>
  <main class="wrap">
    <div class="sec">Bài hôm nay</div>
    <div class="two-col">${card("en")}${card("zh")}</div>
    <div class="sec">Ôn tập và luyện thêm</div>
    <div class="two-col">
      <a class="card lesson-card" href="#/review"><div class="ic">${due}</div><div class="meta"><div class="k">Lặp lại ngắt quãng</div><div class="t">${due?due+" từ đến hạn ôn":"Chưa có từ đến hạn"}</div></div><span class="pill">${due?"Ôn ngay":"Nghỉ"}</span></a>
      <a class="card lesson-card" href="#/extra"><div class="ic">+</div><div class="meta"><div class="k">Khi có thêm thời gian</div><div class="t">Đề rút gọn đủ 4 kỹ năng</div></div><span class="pill">Luyện thêm</span></a>
    </div>
    <p class="small" style="margin-top:18px">Chuỗi ngày tính khi học xong cả hai thứ tiếng trong cùng ngày. Mỗi phần phải đạt từ 80% trở lên mới qua.</p>
  </main>`;
}

/* ---------- Bộ máy bài học ---------- */
function prepSteps(lang,data,extra){
  const steps=[];
  (extra||[]).forEach(s=>steps.push(s));
  data.steps.forEach(s=>{
    if(s.type==="drill"&&s.auto==="vocab") steps.push(Object.assign({},s,{items:recallItems(lang,data.vocab||[])}));
    else steps.push(s);
  });
  steps.push({type:"finish",name:"Hoàn thành"});
  return steps.map(s=>Object.assign({},s,{st:initStep(s)}));
}
function initStep(s){
  if(s.type==="drill"){
    const items=s.items.map(it=>it.type==="mcq"?shuffleMcq(it):it.type==="order"?Object.assign({},it,{tiles:shuffle(it.words.map((w,i)=>({w,i})))}):it);
    return {items,queue:items.map((_,i)=>i),first:{},cur:null,fb:null,round:1,passed:false,score:null,plays:0,sel:[],hz:null,started:Date.now()};
  }
  if(s.type==="write")return {text:"",shown:false};
  if(s.type==="book")return {ok:false};
  if(s.type==="game")return {done:false};
  return {};
}
function shuffleMcq(it){const ord=shuffle(it.o.map((_,i)=>i));return Object.assign({},it,{o:ord.map(i=>it.o[i]),a:ord.indexOf(it.a)});}

function openLesson(lang,dayParam){
  const Lg=LANGS[lang],s=status(lang);let day,mode;
  if(dayParam){day=+dayParam;if(S.done[lang][day])mode="replay";else if(s.state==="open"&&day===s.day)mode="normal";else{location.hash="#/learn/"+lang;return;}}
  else{if(s.state!=="open")return gate(lang,s);day=s.day;mode="normal";}
  const data=Lg.lessons.find(x=>x.day===day);
  const extra=[];
  const prev=Lg.lessons.find(x=>x.day===day-1);
  if(mode==="normal"&&prev&&S.done[lang][day-1]&&!S.checked[lang][day-1]&&prev.vocab&&prev.vocab.length)
    extra.push({type:"drill",name:"Kiểm tra bài hôm qua",intro:`Nhớ lại từ của ngày ${day-1} mà không nhìn lại. Câu sai sẽ được ôn lại sớm.`,items:recallItems(lang,prev.vocab),isCheck:true,checkDay:day-1});
  if(mode==="normal"&&data.review)extra.push({type:"drill",name:"Ôn ngữ pháp bài trước",intro:"3 câu nhanh để nối mạch với bài hôm qua.",items:data.review});
  L={kind:"lesson",lang,day,mode,data,steps:prepSteps(lang,data,extra),idx:0};
  render();
}
function openMock(id){
  const m=MOCKS.find(x=>x.id===id);if(!m){location.hash="#/extra";return;}
  L={kind:"mock",lang:m.lang,mock:m,data:{steps:m.steps,vocab:[]},steps:prepSteps(m.lang,{steps:m.steps},[]),idx:0,mode:"mock"};
  render();
}
function openReview(){
  const keys=shuffle(dueKeys());
  if(!keys.length){
    const nx=Object.values(S.srs).map(v=>v.due).filter(d=>d>today()).sort();
    app.innerHTML=`<header class="hero"><div class="wrap"><p class="hello">Lặp lại ngắt quãng</p><h1>Ôn tập</h1></div></header><main class="wrap"><div class="card"><p style="margin:0;font-weight:600">Hôm nay chưa có từ nào đến hạn ôn.</p><p class="small">Kho ôn tập có ${Object.keys(S.srs).length} từ.${nx.length?" Lần ôn tiếp theo: "+nx[0].split("-").reverse().join("/")+".":""} Từ mới vào kho sau buổi kiểm tra hôm sau. Nhớ thì giãn dần 3, 7, 14, 30 ngày; quên thì quay lại ngày mai.</p></div></main>`;
    return;
  }
  const items=keys.map(k=>{const w=WORDS[k];return recallItems(w.lang,[w.v])[0];});
  const step={type:"drill",name:"Ôn tập",intro:"Tự nhớ lại, không đoán. Kết quả lần đầu quyết định lịch ôn tiếp theo.",items,isReview:true};
  L={kind:"review",lang:"en",data:{steps:[]},steps:[Object.assign({},step,{st:initStep(step)}),{type:"finish",name:"Xong",st:{}}],idx:0,mode:"review"};
  render();
}
function gate(lang,s){
  const Lg=LANGS[lang];
  const doneT=s.state==="doneToday";
  app.innerHTML=`<main class="wrap"><div class="done-hero"><div class="big">${Lg.badge}</div><h2>${doneT?"Hôm nay học xong rồi":"Bài đang được soạn"}</h2><p class="small">${doneT?`KC đã hoàn thành ngày ${s.day}. Mai mở bài ngày ${s.day+1}. Muốn học thêm, vào Luyện thêm làm đề rút gọn.`:`Ngày ${s.day} của ${Lg.name} sẽ sớm có.`}</p></div>
  ${doneT?`<a class="btn ghost block" href="#/learn/${lang}/${s.day}">Xem lại bài hôm nay</a>`:""}<a class="btn block" href="#/extra" style="margin-top:10px">Luyện thêm</a><p style="text-align:center"><a href="#/">Về trang chủ</a></p></main>`;
}

/* ---------- Hiển thị một bước ---------- */
function render(){
  document.body.classList.add("lesson-mode");
  const step=L.steps[L.idx],n=L.steps.length-1,i=Math.min(L.idx,n);
  if(step.type==="finish")finish();
  const label=L.kind==="mock"?L.mock.title:L.kind==="review"?"Ôn tập":`${LANGS[L.lang].badge} · Ngày ${L.day}`;
  const ready=stepReady(step);
  const foot=step.type==="finish"?"":`<div class="footer-act"><button class="btn block" id="next" ${ready?"":"disabled"}>${L.idx===n-1?"Hoàn thành":"Tiếp tục"}</button></div>`;
  app.innerHTML=`<div class="topbar"><div class="wrap row"><a class="back" href="#/" aria-label="Thoát">${I_BACK}</a><div class="bar"><i style="width:${(i/n)*100}%"></i></div><span class="step-label">${label}</span></div></div>
  <main class="wrap step"><div class="stepname">${step.name}</div>${stepHtml(step)}${foot}</main>`;
  mount(step);
}
function stepReady(s){
  if(s.type==="drill")return s.st.passed;
  if(s.type==="write")return wordCount(s.st.text,L.lang)>=s.min;
  if(s.type==="book")return s.st.ok;
  if(s.type==="game")return s.st.done;
  return true;
}
function refreshNext(){const b=document.getElementById("next");if(b)b.disabled=!stepReady(L.steps[L.idx]);}
function wordCount(t,lang){t=t.trim();if(!t)return 0;return lang==="zh"?t.replace(/[\s\p{P}]/gu,"").length:t.split(/\s+/).length;}

function stepHtml(s){
  const lang=L.lang,tts=LANGS[lang].tts;
  if(s.type==="explain"){
    const b=s.blocks.map(bl=>{
      if(bl.h)return `<div class="card prose"><h3>${bl.h}</h3>${bl.p.map(p=>`<p>${p}</p>`).join("")}</div>`;
      if(bl.table)return `<div class="card tbl"><table><thead><tr>${bl.table.head.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${bl.table.rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
      if(bl.ex)return `<div class="sec">Ví dụ</div><div class="ex-list">${bl.ex.map(e=>`<div class="ex-item"><div class="txt"><div class="${lang==="zh"?"zh":"en"}">${e.t}</div>${e.py?`<div class="py">${e.py}</div>`:""}<div class="vi">${e.vi}</div></div>${sayBtn(e.t,tts,true)}</div>`).join("")}</div>`;
      if(bl.trap)return `<div class="sec">Lỗi hay gặp</div>${bl.trap.map(t=>`<div class="card trap"><div class="bad-l"><b>Sai:</b> <span class="${lang==="zh"?"zh":""}">${t[0]}</span></div><div class="good-l"><b>Đúng:</b> <span class="${lang==="zh"?"zh":""}">${t[1]}</span></div><div class="small">${t[2]}</div></div>`).join("")}`;
      if(bl.tip)return `<div class="banner tipb"><span>${bl.tip}</span></div>`;
      if(bl.book)return `<div class="bookref">${bl.book}</div>`;
      return "";
    }).join("");
    return `<h2>${s.title}</h2>${b}`;
  }
  if(s.type==="vocab"){
    return `<p class="lead">${s.intro}</p>`+L.data.vocab.map(v=>`<div class="card word"><div class="body"><div class="w">${v.w}</div><div class="ipa">${v.ipa}</div><div class="vi">${v.vi}</div><div class="ex">${v.ex}<div class="exv">${v.exVi}</div></div></div><div class="col">${sayBtn(v.w,tts)}${sayBtn(v.ex,tts,true)}</div></div>`).join("");
  }
  if(s.type==="hanzi"){
    return `<p class="lead">${s.intro}</p>`+L.data.vocab.map((v,vi)=>`<div class="card word zhw"><div class="body">
      <div class="row-c"><div class="w zh">${v.h}</div>${sayBtn(v.h,tts)}</div>
      <div class="ipa">${v.py}</div><div class="vi">${v.vi}</div>
      <div class="chars">${[...v.h].map((c,ci)=>`<button class="mini" data-anim="${vi}-${ci}" data-c="${c}"><span class="zh">${c}</span></button>`).join("")}</div>
      <div class="mini-box" id="mb-${vi}"></div>
      ${(v.parts||[]).map(p=>`<div class="part"><span class="zh pc">${p.c}</span><span>${p.m}</span></div>`).join("")}
      <div class="ex"><span class="zh" style="font-size:18px">${v.ex}</span> ${sayBtn(v.ex,tts,true)}<div class="ipa">${v.exPy}</div><div class="exv">${v.exVi}</div></div>
    </div></div>`).join("");
  }
  if(s.type==="drill")return drillHtml(s);
  if(s.type==="write"){
    const st=s.st,wc=wordCount(st.text,lang),ok=wc>=s.min;
    const tbl=s.table?`<div class="card tbl"><table><thead><tr>${s.table.head.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${s.table.rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`:"";
    return `<h2>${s.title}</h2><div class="card prose"><p>${s.prompt}</p></div>${tbl}
      <textarea class="field area" id="wr" placeholder="Viết bài ở đây (gõ hoặc viết tay bằng bút)">${esc(st.text)}</textarea>
      <div class="wc"><span id="wcn">${wc}</span> / ${s.min} ${lang==="zh"?"chữ":"từ"}</div>
      <div id="wr-after" style="${ok?"":"display:none"}">
        <div class="sec">Tự chấm</div><div class="card">${s.checklist.map((c,i)=>`<label class="chk"><input type="checkbox"><span>${c}</span></label>`).join("")}</div>
        <div class="sec">Bài mẫu</div><div class="ex-item"><div class="txt">${s.model}</div>${sayBtn(s.model,tts,true)}</div>
        <button class="btn ghost block" data-copy="1" style="margin-top:12px">Sao chép bài gửi Claude chấm</button>
      </div>`;
  }
  if(s.type==="speak"){
    const sl=s.lang==="zh"?"zh-CN":"en-GB";
    return `<p class="lead">${s.intro}</p>`+s.items.map((q,qi)=>{
      const sents=(q.model.match(lang==="zh"||s.lang==="zh"?/[^。！？]+[。！？]?/g:/[^.!?]+[.!?]?/g)||[q.model]).map(x=>x.trim()).filter(Boolean);
      return `<div class="card sp"><p class="spq ${s.lang==="zh"?"zh":""}">${q.q}</p>
        ${q.prep?`<button class="btn ghost" data-prep="${qi}" data-sec="${q.prep}">Bắt đầu ${q.prep} giây chuẩn bị</button> <span class="cd" id="cd-${qi}"></span>`:""}
        <div class="rec"><button class="btn" data-rec="${qi}">${I_MIC}<span>Ghi âm</span></button><audio id="au-${qi}" controls style="display:none"></audio></div>
        <details><summary>Câu trả lời mẫu và nói đuổi</summary>
          <div class="shadow">${sents.map(x=>`<div class="sh"><span class="${s.lang==="zh"?"zh":""}">${x}</span>${sayBtn(x,sl,true)}</div>`).join("")}</div>
          ${sayBtn(q.model,sl,false,"Nghe cả bài")}
        </details></div>`;
    }).join("");
  }
  if(s.type==="callig"){
    return `<h2>Chữ hôm nay: <span class="zh">${s.char}</span> ${s.py}</h2><p class="lead">Nghĩa: ${s.vi}</p><div class="card prose"><p>${s.note}</p></div>
      <div class="writer-box"><div class="grid-bg big">${gridSvg()}<div class="hw" id="hwc"></div></div>
      <div class="btns"><button class="btn" data-cg="anim">Xem thứ tự nét</button><button class="btn ghost" data-cg="quiz">Viết theo</button><button class="btn ghost" data-cg="free">Viết không chữ mờ</button></div>
      <p class="small" id="cg-msg" style="text-align:center">Xem 2 lần, viết theo 1 lần, rồi viết không chữ mờ 2 lần.</p></div>
      <div class="bookref">${s.paper}</div>`;
  }
  if(s.type==="book"){
    return `<h2>Làm trong sách</h2><div class="card prose"><p>${s.text}</p></div><label class="chk big"><input type="checkbox" id="bk" ${s.st.ok?"checked":""}><span>Đã làm xong phần trong sách</span></label>`;
  }
  if(s.type==="game"){
    const best=S.best[gameKey()];
    return `<p class="lead">${s.intro} ${best?`Kỷ lục: <b>${(best/1000).toFixed(1)} giây</b>.`:""}</p><div class="game-top"><span id="gtime">0.0 giây</span><button class="btn ghost sm" data-game="restart">Chơi lại</button></div><div class="game" id="game"></div>`;
  }
  if(s.type==="finish")return finishHtml();
  return "";
}
function gridSvg(){return `<svg class="gl" viewBox="0 0 100 100" preserveAspectRatio="none"><g stroke="var(--blue-line)" stroke-width=".6" stroke-dasharray="2 2"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/><line x1="50" y1="0" x2="50" y2="100"/><line x1="0" y1="50" x2="100" y2="50"/></g></svg>`;}

/* ---------- Drill ---------- */
function drillHtml(s){
  const st=s.st,lang=L.lang,tts=LANGS[lang].tts;
  let head="";
  if(s.head&&s.head.audio){
    const done=st.passed||st.queue.length===0;
    const left=Math.max(0,(s.head.max||3)-st.plays);
    head=`<div class="card audio"><button class="btn" data-play="1" ${left?"":"disabled"}>${I_SAY}<span>Nghe đoạn ${left?`(còn ${left} lượt)`:"(hết lượt)"}</span></button>
      ${st.passed?`<details open><summary>Lời bài nghe</summary>${s.head.audio.map(l=>`<p class="${s.head.lang==="zh"?"zh":""}">${l.who?`<b>${l.who==="W"?"Woman":"Man"}:</b> `:""}${l.t}${l.py?`<br><span class="py">${l.py}</span>`:""}</p>`).join("")}</details>`:""}</div>`;
  }
  if(s.head&&s.head.passage){
    head=`<div class="card passage"><div class="ph"><b>${s.head.title}</b><span class="timer" id="timer"></span></div>${s.head.passage.map((p,i)=>`<p><span class="pn">${i+1}</span>${p}</p>`).join("")}</div>`;
  }
  if(st.cur===null&&st.queue.length){st.cur=st.queue.shift();st.fb=null;st.sel=[];st.hz=null;}
  const total=st.items.length, firstDone=Object.keys(st.first).length, firstOk=Object.values(st.first).filter(Boolean).length;
  const prog=`<div class="dprog"><span>Câu ${Math.min(firstDone+(st.cur!==null&&st.first[st.cur]===undefined?1:0),total)||1}/${total}${st.round>1?` · Lượt ${st.round}`:""}</span><span>${firstDone?Math.round(firstOk/firstDone*100):0}% đúng</span></div>`;
  if(st.queue.length===0&&st.cur===null){
    const pct=Math.round(firstOk/total*100);
    return `${head}<div class="card result ${st.passed?"ok":"no"}"><div class="big">${pct}%</div><p>${st.passed?"Đạt chuẩn, sang phần tiếp theo nhé.":"Chưa đạt 80%. Làm lại cả phần này để nhớ chắc hơn."}</p>${st.passed?"":`<button class="btn block" data-redo="1">Làm lại phần này</button>`}</div>`;
  }
  if(st.cur===null){st.cur=st.queue.shift();st.fb=null;st.sel=[];st.hz=null;}
  const it=st.items[st.cur];
  return `${s.intro&&firstDone===0&&!st.fb?`<p class="lead">${s.intro}</p>`:""}${head}${prog}<div class="card q" id="qcard">${itemHtml(it,st)}</div>`;
}
function itemHtml(it,st){
  const lang=L.lang,tts=it.zh||lang==="zh"?"zh-CN":"en-GB";
  const say=it.say?`<div class="sayrow">${sayBtn(it.say,lang==="zh"||it.zh?"zh-CN":"en-GB",false,"Nghe")}</div>`:"";
  const fb=st.fb;
  let body="";
  if(it.type==="mcq"){
    body=`<div class="opts">${it.o.map((o,i)=>{let c="";if(fb){if(i===it.a)c="right";else if(i===fb.val)c="wrong";}return `<button class="opt ${c}" data-mcq="${i}" ${fb?"disabled":""}>${o}</button>`;}).join("")}</div>`;
  }else if(it.type==="order"){
    const used=new Set(st.sel);
    body=`<div class="order-ans" id="oans">${st.sel.map((ti,k)=>`<button class="tile on" data-unsel="${k}" ${fb?"disabled":""}>${it.tiles[ti].w}</button>`).join("")||'<span class="small">Chạm các ô bên dưới theo đúng thứ tự</span>'}</div>
      <div class="tiles">${it.tiles.map((t,ti)=>used.has(ti)?"":`<button class="tile ${it.zh?"zh":""}" data-sel="${ti}" ${fb?"disabled":""}>${t.w}</button>`).join("")}</div>
      ${fb?"":`<button class="btn block" data-check="order" ${st.sel.length===it.tiles.length?"":"disabled"}>Kiểm tra</button>`}`;
  }else if(it.type==="hanzi"){
    body=`<div class="writer-box"><div class="hz-prog" id="hzp"></div><div class="grid-bg">${gridSvg()}<div class="hw" id="hwq"></div></div><p class="small" id="hz-msg" style="text-align:center">Viết từng chữ theo đúng thứ tự nét.</p>${fb?"":`<button class="btn ghost sm" data-hzhint="1">Xem gợi ý chữ này</button>`}</div>`;
  }else{
    const ph=it.type==="pinyin"?"ví dụ: ni3hao3":it.zh?"Viết chữ Hán":it.type==="correct"?"Viết lại cả câu đúng":"Câu trả lời";
    body=`<input class="field ans ${it.zh?"zh":""}" id="ans" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${ph}" value="${fb?esc(fb.val):""}" ${fb?"disabled":""}>
      ${it.type==="pinyin"&&!fb?`<div class="tones">${[1,2,3,4].map(n=>`<button class="tone" data-tone="${n}">${n}</button>`).join("")}<span class="small">chạm để thêm số thanh</span></div>`:""}
      ${fb?"":`<button class="btn block" data-check="text">Kiểm tra</button>`}`;
  }
  const q=it.type==="correct"?`<p class="prompt"><span class="tagc">Sửa lỗi sai</span><br>${it.q}</p>`:`<p class="prompt">${it.q}</p>`;
  let fbh="";
  if(fb){
    const right=it.ans?it.ans[0]:it.type==="mcq"?it.o[it.a]:it.chars||"";
    fbh=`<div class="fb ${fb.ok?"ok":"no"}"><b>${fb.ok?"Chính xác!":"Chưa đúng."}</b>${!fb.ok&&it.type!=="mcq"?` Đáp án: <span class="${it.zh||it.type==="hanzi"?"zh":""}">${it.type==="pinyin"?(it.show||right):right}</span>`:""}${it.why?`<div>${it.why}</div>`:""}${!fb.ok?`<div class="small">Câu này sẽ quay lại cuối phần.</div>`:""}</div>
      <button class="btn block" data-nextq="1">Câu tiếp</button>`;
  }
  return q+say+body+fbh;
}
function answer(ok,val){
  const s=L.steps[L.idx],st=s.st;
  if(st.first[st.cur]===undefined)st.first[st.cur]=ok;
  st.fb={ok,val};
  if(!ok)st.queue.push(st.cur);
  rerenderDrill();
}
function nextQ(){
  const s=L.steps[L.idx],st=s.st;st.cur=null;st.fb=null;
  if(st.queue.length===0){
    const total=st.items.length,ok=Object.values(st.first).filter(Boolean).length;
    st.score=ok/total;st.passed=st.score>=PASS;
    if(st.passed){
      if(s.isCheck||s.isReview)applySrs(s);
      if(L.kind==="mock"){L.scores=L.scores||{};L.scores[s.name]=Math.round(st.score*100);}
    }
  }
  rerenderDrill();
}
function redo(){const s=L.steps[L.idx],st=s.st;const keep={plays:st.plays,round:st.round+1};s.st=Object.assign(initStep(s),keep);rerenderDrill();}
function rerenderDrill(){const s=L.steps[L.idx];const m=document.querySelector("main.step");m.innerHTML=`<div class="stepname">${s.name}</div>${stepHtml(s)}<div class="footer-act"><button class="btn block" id="next" ${stepReady(s)?"":"disabled"}>${L.idx===L.steps.length-2?"Hoàn thành":"Tiếp tục"}</button></div>`;mount(s);}
function applySrs(s){
  const t=today(),st=s.st;
  st.items.forEach((it,i)=>{
    if(!it.key)return;
    const ok=st.first[i]===true,cur=S.srs[it.key];
    let box;
    if(s.isReview)box=ok?Math.min(5,((cur&&cur.box)||1)+1):1;
    else box=ok?2:1;
    S.srs[it.key]={box,due:addDays(t,INTERVAL[box]),t:Date.now()};
  });
  if(s.isCheck)S.checked[L.lang][s.checkDay]=true;
  save();
}

/* ---------- Gắn hành vi sau khi vẽ ---------- */
let writer=null;
function hwOpts(size,outline){
  const blue=getComputedStyle(document.documentElement).getPropertyValue("--blue-strong").trim()||"#4f8fc9";
  return {width:size,height:size,padding:14,showOutline:outline,showCharacter:false,strokeColor:blue,drawingColor:blue,outlineColor:"rgba(120,150,190,.25)",highlightColor:"#f2a65a",strokeAnimationSpeed:0.9,delayBetweenStrokes:250,showHintAfterMisses:2,drawingWidth:Math.round(size/14)};
}
function boxSize(){return Math.min(280,window.innerWidth-80);}
function mount(s){
  if(s.type==="drill"){
    const st=s.st;
    if(s.head&&s.head.passage&&!st.passed){
      if(!st.tStart)st.tStart=Date.now();
      const lim=s.head.minutes*60000,el=()=>document.getElementById("timer");
      if(L.timer)clearInterval(L.timer);
      const tick=()=>{const left=lim-(Date.now()-st.tStart);const e=el();if(!e)return;if(left<=0){e.textContent="Hết giờ";e.classList.add("over");}else{e.textContent=Math.floor(left/60000)+":"+pad(Math.floor(left%60000/1000));}};
      tick();L.timer=setInterval(tick,1000);
    }
    const it=st.cur!==null?st.items[st.cur]:null;
    if(it&&it.type==="hanzi"&&!st.fb)startHanzi(it,st);
    const inp=document.getElementById("ans");
    if(inp){inp.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();checkText();}});}
  }
  if(s.type==="write"){
    const ta=document.getElementById("wr");
    ta.addEventListener("input",()=>{s.st.text=ta.value;const wc=wordCount(ta.value,L.lang);document.getElementById("wcn").textContent=wc;document.getElementById("wr-after").style.display=wc>=s.min?"":"none";refreshNext();});
  }
  if(s.type==="callig"&&window.HanziWriter){writer=HanziWriter.create(document.getElementById("hwc"),s.char,Object.assign(hwOpts(boxSize(),true),{showCharacter:true}));}
  if(s.type==="book"){document.getElementById("bk").addEventListener("change",e=>{s.st.ok=e.target.checked;refreshNext();});}
  if(s.type==="game")startGame(s);
}
function startHanzi(it,st){
  const el=document.getElementById("hwq"),msg=document.getElementById("hz-msg"),pg=document.getElementById("hzp");
  if(!window.HanziWriter){msg.textContent="Cần mạng để tải nét chữ.";return;}
  const chars=[...it.chars];
  st.hz=st.hz||{k:0,miss:0};
  const draw=()=>{
    pg.innerHTML=chars.map((c,i)=>`<span class="hzc ${i<st.hz.k?"done":i===st.hz.k?"now":""}">${i<st.hz.k?c:"?"}</span>`).join("");
    el.innerHTML="";
    writer=HanziWriter.create(el,chars[st.hz.k],hwOpts(boxSize(),false));
    writer.quiz({
      onMistake:()=>{st.hz.miss++;msg.textContent="Sai nét, thử lại. Sai 2 lần sẽ có gợi ý.";},
      onComplete:()=>{st.hz.k++;if(st.hz.k<chars.length){msg.textContent="Tốt, chữ tiếp theo.";setTimeout(draw,500);}else{const ok=st.hz.miss<=chars.length*2;answer(ok,"");}}
    });
  };
  draw();
}
function checkText(){
  const s=L.steps[L.idx],it=s.st.items[s.st.cur],v=(document.getElementById("ans").value||"").trim();
  if(!v){toast("KC nhập câu trả lời trước nhé");return;}
  answer(isRight(it,v),v);
}

/* ---------- Trò chơi ghép cặp ---------- */
function gameKey(){return L.kind+":"+L.lang+":"+(L.day||L.mock&&L.mock.id);}
function startGame(s){
  const pairs=s.pairs==="vocab"?L.data.vocab.map(v=>[v.w||v.h,v.vi]):s.pairs;
  const tiles=shuffle(pairs.flatMap((p,i)=>[{t:p[0],i,side:0},{t:p[1],i,side:1}]));
  const g=document.getElementById("game"),tm=document.getElementById("gtime");
  let first=null,start=null,left=pairs.length,tick=null;
  g.innerHTML=tiles.map((t,k)=>`<button class="gt ${t.side===0&&L.lang==="zh"?"zh":""}" data-k="${k}">${t.t}</button>`).join("");
  g.onclick=e=>{
    const b=e.target.closest(".gt");if(!b||b.classList.contains("ok"))return;
    if(!start){start=Date.now();tick=setInterval(()=>{tm.textContent=((Date.now()-start)/1000).toFixed(1)+" giây";},100);L.timer=tick;}
    const t=tiles[+b.dataset.k];
    if(!first){first={b,t};b.classList.add("sel");return;}
    if(first.b===b){b.classList.remove("sel");first=null;return;}
    if(first.t.i===t.i&&first.t.side!==t.side){first.b.classList.remove("sel");first.b.classList.add("ok");b.classList.add("ok");left--;
      if(!left){clearInterval(tick);const ms=Date.now()-start;tm.textContent=(ms/1000).toFixed(1)+" giây";const k=gameKey();const rec=!S.best[k]||ms<S.best[k];if(rec){S.best[k]=ms;save();}toast(rec?"Kỷ lục mới!":"Hoàn thành!");s.st.done=true;refreshNext();}}
    else{const a=first.b;b.classList.add("bad");a.classList.add("bad");setTimeout(()=>{a.classList.remove("bad","sel");b.classList.remove("bad");},400);}
    first=null;
  };
}

/* ---------- Ghi âm ---------- */
async function toggleRec(qi,btn){
  if(L.rec&&L.rec.state==="recording"){L.rec.stop();return;}
  if(!navigator.mediaDevices||!window.MediaRecorder){toast("Thiết bị chưa hỗ trợ ghi âm trên trình duyệt");return;}
  try{
    const stream=await navigator.mediaDevices.getUserMedia({audio:true});
    const rec=new MediaRecorder(stream),chunks=[];
    rec.ondataavailable=e=>chunks.push(e.data);
    rec.onstop=()=>{stream.getTracks().forEach(t=>t.stop());const au=document.getElementById("au-"+qi);if(au){au.src=URL.createObjectURL(new Blob(chunks,{type:rec.mimeType||"audio/mp4"}));au.style.display="block";}btn.classList.remove("live");btn.querySelector("span").textContent="Ghi âm lại";};
    rec.start();L.rec=rec;btn.classList.add("live");btn.querySelector("span").textContent="Dừng ghi âm";
  }catch(e){toast("KC cho phép dùng micro để ghi âm nhé");}
}

/* ---------- Hoàn thành ---------- */
function finish(){
  if(L.finished)return;L.finished=true;
  if(L.kind==="lesson"&&L.mode==="normal"&&!S.done[L.lang][L.day]){
    S.done[L.lang][L.day]=today();
    const sc=L.steps.filter(x=>x.type==="drill"&&x.st.score!==null).map(x=>x.st.score);
    if(sc.length)S.score[L.lang+":"+L.day]=Math.round(sc.reduce((a,b)=>a+b,0)/sc.length*100);
    save();
  }
  if(L.kind==="mock"){S.mock[L.mock.id]=(S.mock[L.mock.id]||[]).concat([{at:Date.now(),date:today(),scores:L.scores||{}}]);save();}
}
function finishHtml(){
  if(L.kind==="review")return `<div class="done-hero"><div class="big">Xong</div><h2>Ôn tập xong</h2><p class="small">Lịch ôn tiếp theo đã được cập nhật.</p></div><a class="btn block" href="#/">Về trang chủ</a>`;
  if(L.kind==="mock"){const sc=L.scores||{};return `<div class="done-hero"><div class="big">Xong đề</div><h2>${L.mock.title}</h2></div><div class="card">${Object.entries(sc).map(([k,v])=>`<div class="srow"><span>${k}</span><b>${v}%</b></div>`).join("")||'<p class="small">Không có phần chấm tự động.</p>'}<p class="small">Phần Viết và Nói: bấm sao chép bài viết gửi Claude để được chấm theo tiêu chí IELTS.</p></div><a class="btn block" href="#/extra" style="margin-top:12px">Về Luyện thêm</a>`;}
  const st=streak(),other=L.lang==="en"?"zh":"en",os=status(other),sc=S.score[L.lang+":"+L.day];
  return `<div class="done-hero"><div class="big">${st.cur} ngày</div><h2>${L.mode==="normal"?"Xong ngày "+L.day+"!":"Đã xem lại ngày "+L.day}</h2>${sc!==undefined?`<p>Điểm trung bình các phần: <b>${sc}%</b></p>`:""}<p class="small">Từ mới hôm nay sẽ được kiểm tra ở đầu buổi học ngày mai.</p></div>
    ${L.mode==="normal"&&os.state==="open"?`<a class="btn block" href="#/learn/${other}">Học tiếp ${LANGS[other].name}</a>`:""}<a class="btn ghost block" href="#/" style="margin-top:10px">Về trang chủ</a>`;
}

/* ---------- Luyện thêm ---------- */
function renderExtra(){
  app.innerHTML=`<header class="hero"><div class="wrap"><p class="hello">Khi có thêm thời gian</p><h1>Luyện thêm</h1></div></header><main class="wrap">
  <p class="small">Đề rút gọn đủ kỹ năng, chỉ dùng kiến thức đã học. Làm bao nhiêu lần cũng được, không ảnh hưởng bài hằng ngày.</p>
  ${["en","zh"].map(l=>`<div class="sec">${LANGS[l].name}</div>`+MOCKS.filter(m=>m.lang===l).map(m=>{
    const hist=S.mock[m.id]||[],lock=maxDone(l)<m.need;
    const last=hist.length?hist[hist.length-1]:null;
    return `<${lock?"div":"a"} class="card lesson-card ${lock?"locked":""}" ${lock?"":`href="#/mock/${m.id}"`}><div class="ic">${m.minutes}'</div><div class="meta"><div class="k">${m.desc}</div><div class="t">${m.title}</div>${last?`<div class="small">Lần gần nhất ${last.date.split("-").reverse().join("/")}: ${Object.entries(last.scores).map(([k,v])=>k+" "+v+"%").join(" · ")}</div>`:""}</div><span class="pill ${lock?"lock":""}">${lock?`Mở sau ngày ${m.need}`:hist.length?`Đã làm ${hist.length} lần`:"Làm đề"}</span></${lock?"div":"a"}>`;
  }).join("")).join("")}
  <p class="small" style="margin-top:16px">Đề mới sẽ được thêm dần theo tiến độ bài học.</p></main>`;
}

/* ---------- Lộ trình ---------- */
function renderRoadmap(l){
  const Lg=LANGS[l];
  const rows=l==="en"
    ? Lg.plan.map(p=>{const d=S.done.en[p.day],has=Lg.lessons.find(x=>x.day===p.day);return `<${d?"a":"div"} class="dl ${d?"done":""}" ${d?`href="#/learn/en/${p.day}"`:""}><span class="n">${p.day}</span><span class="tt">${p.title}<br><span class="small">${p.book}</span></span>${d?`<span class="pill ok">${S.score["en:"+p.day]!==undefined?S.score["en:"+p.day]+"%":"Đã học"}</span>`:has?"":'<span class="pill lock">Đang soạn</span>'}</${d?"a":"div"}>`;}).join("")
    : Lg.plan.map(p=>`<div class="dl"><span class="n">${String(p.lesson).replace("Ôn ","Ô")}</span><span class="tt"><span class="zh">${p.title}</span><br><span class="small">${p.vi}</span></span></div>`).join("");
  const intro=l==="en"?"Bám theo sách Achieve IELTS Grammar and Vocabulary, đối chiếu Grammar in Use. Mỗi ngày 30 phút: ngữ pháp, thực hành, từ vựng, Nghe, Đọc, Viết, Nói, bài trong sách, trò chơi."
    :"Bám theo sách Luyện nói tiếng Trung Quốc cấp tốc (Tiền trung cấp). Mỗi ngày 20 phút, 3 từ mới học kỹ: chiết tự, viết tay, pinyin, mẫu câu, nghe, nói, thư pháp.";
  app.innerHTML=`<header class="hero"><div class="wrap"><p class="hello">Giáo trình</p><h1>Lộ trình</h1></div></header><main class="wrap">
  <div class="seg"><button class="${l==="en"?"on":""}" data-rm="en">Tiếng Anh</button><button class="${l==="zh"?"on":""}" data-rm="zh">Tiếng Trung</button></div>
  <p class="small">${intro}</p><div class="card">${rows}</div><a class="btn ghost block" href="test.html" style="margin-top:14px">Bài kiểm tra đầu vào</a></main>`;
}

/* ---------- Cài đặt ---------- */
function renderSettings(){
  const c=syncCfg(),on=Sync.on();
  const last=Sync.last||(c.lastOk?"Lần đồng bộ gần nhất: "+new Date(c.lastOk).toLocaleString("vi-VN"):"");
  app.innerHTML=`<header class="hero"><div class="wrap"><p class="hello">Đồng bộ và cài đặt</p><h1>Cài đặt</h1></div></header><main class="wrap">
  <div class="sec">Đồng bộ giữa các thiết bị</div><div class="card">
    <div class="status ${on?"on":""}"><i></i>${on?"Đang bật đồng bộ":"Chưa bật đồng bộ"}</div>${last?`<p class="small">${last}</p>`:""}
    ${on?`<div class="btns left"><button class="btn" data-set="sync">Đồng bộ ngay</button><button class="btn ghost" data-set="off">Tắt trên máy này</button></div>`:`
    <p class="small">Tiến độ được lưu vào một ghi chú bí mật (Gist) trong tài khoản GitHub của KC. Mỗi thiết bị dán mã truy cập một lần.</p>
    <ol class="steps"><li>Mở <a href="https://github.com/settings/tokens/new?scopes=gist&description=Kim%20Cun%20hoc%20di" target="_blank" rel="noopener">trang tạo mã truy cập</a> (đã đăng nhập tài khoản Kimcunworld).</li><li>Expiration chọn thời hạn KC muốn, chỉ tick quyền <b>gist</b>.</li><li>Bấm Generate token, sao chép mã bắt đầu bằng ghp_ và dán vào ô dưới đây.</li><li>Trên iPad và điện thoại, dán lại đúng mã đó một lần.</li></ol>
    <input class="field" id="tok" type="password" placeholder="Dán mã truy cập vào đây" autocomplete="off"><button class="btn block" data-set="connect">Bật đồng bộ</button>
    <p class="small">Mã chỉ lưu trên thiết bị này và chỉ có quyền đọc ghi ghi chú.</p>`}
  </div>
  <div class="sec">Viết tay bằng bút trên iPad</div><div class="card prose small"><p>Vào Cài đặt của iPad, mục Apple Pencil, bật <b>Scribble</b> (Viết tay). Khi đó KC viết trực tiếp vào mọi ô trả lời. Muốn viết tay chữ Hán vào ô, thêm bàn phím Tiếng Trung giản thể trong Cài đặt, Bàn phím.</p></div>
  <div class="sec">Cài lên màn hình chính</div><div class="card prose small"><p><b>iPhone, iPad:</b> mở bằng Safari, bấm Chia sẻ, chọn “Thêm vào MH chính”.</p><p><b>Máy tính:</b> mở bằng Chrome, bấm biểu tượng cài đặt ở cuối thanh địa chỉ.</p></div>
  <div class="sec">Khác</div><div class="card"><a href="test.html">Làm lại bài kiểm tra đầu vào</a><p class="small" style="margin-bottom:0">Đã học: tiếng Anh ${maxDone("en")} ngày, tiếng Trung ${maxDone("zh")} ngày · ${Object.keys(S.srs).length} từ trong kho ôn tập.</p></div>
  </main>`;
}

/* ---------- Sự kiện ---------- */
document.addEventListener("click",async e=>{
  const say=e.target.closest("[data-say]");if(say){speak(decodeURIComponent(say.dataset.say),say.dataset.lang);return;}
  if(e.target.id==="next"&&L){stopAll();if(L.timer)clearInterval(L.timer);L.idx=Math.min(L.idx+1,L.steps.length-1);render();window.scrollTo(0,0);return;}
  if(L){
    const s=L.steps[L.idx],st=s.st;
    const mc=e.target.closest("[data-mcq]");if(mc&&!st.fb){const it=st.items[st.cur],v=+mc.dataset.mcq;answer(v===it.a,v);return;}
    const ck=e.target.closest("[data-check]");
    if(ck){if(ck.dataset.check==="text")checkText();else{const it=st.items[st.cur];const val=st.sel.map(ti=>it.tiles[ti].w).join(it.zh?"":" ");answer(isRight(it,val),val);}return;}
    const sel=e.target.closest("[data-sel]");if(sel){st.sel.push(+sel.dataset.sel);rerenderDrill();return;}
    const uns=e.target.closest("[data-unsel]");if(uns){st.sel.splice(+uns.dataset.unsel,1);rerenderDrill();return;}
    if(e.target.closest("[data-nextq]")){nextQ();return;}
    if(e.target.closest("[data-redo]")){redo();return;}
    const tn=e.target.closest("[data-tone]");if(tn){const i=document.getElementById("ans");i.value+=tn.dataset.tone;i.focus();return;}
    if(e.target.closest("[data-hzhint]")&&writer){writer.highlightStroke&&writer.showOutline();setTimeout(()=>writer&&writer.hideOutline(),1200);if(st.hz)st.hz.miss+=1;return;}
    if(e.target.closest("[data-play]")){const max=s.head.max||3;if(st.plays>=max)return;st.plays++;const lang=s.head.lang==="zh"?"zh-CN":"en-GB";speakLines(s.head.audio,lang);const b=e.target.closest("[data-play]");const left=max-st.plays;b.querySelector("span").textContent=left?`Nghe đoạn (còn ${left} lượt)`:"Nghe đoạn (hết lượt)";if(!left)b.disabled=true;return;}
    const an=e.target.closest("[data-anim]");
    if(an&&window.HanziWriter){const vi=an.dataset.anim.split("-")[0],box=document.getElementById("mb-"+vi);box.innerHTML="";box.classList.add("open");const w=HanziWriter.create(box,an.dataset.c,Object.assign(hwOpts(150,true),{showCharacter:false}));w.animateCharacter();return;}
    const cg=e.target.closest("[data-cg]");
    if(cg&&writer){const m=document.getElementById("cg-msg");writer.cancelQuiz&&writer.cancelQuiz();
      if(cg.dataset.cg==="anim"){writer.showOutline();writer.animateCharacter();m.textContent="Quan sát hướng đi và độ dài từng nét.";}
      else{if(cg.dataset.cg==="free")writer.hideOutline();else writer.showOutline();writer.hideCharacter();writer.quiz({onComplete:d=>{m.textContent=d.totalMistakes?`Xong, sai ${d.totalMistakes} nét. Viết thêm một lượt nhé.`:"Đẹp lắm, đúng hết các nét!";}});m.textContent=cg.dataset.cg==="free"?"Viết không có chữ mờ.":"Viết theo chữ mờ.";}
      return;}
    const rc=e.target.closest("[data-rec]");if(rc){toggleRec(rc.dataset.rec,rc);return;}
    const pr=e.target.closest("[data-prep]");
    if(pr){let left=+pr.dataset.sec;const cd=document.getElementById("cd-"+pr.dataset.prep);pr.disabled=true;cd.textContent=left+" giây";const t=setInterval(()=>{left--;cd.textContent=left>0?left+" giây":"Bắt đầu nói và ghi âm!";if(left<=0){clearInterval(t);const b=document.querySelector(`[data-rec="${pr.dataset.prep}"]`);if(b)toggleRec(pr.dataset.prep,b);}},1000);return;}
    if(e.target.closest("[data-copy]")){const txt=`Claude chấm giúp KC bài viết này theo tiêu chí IELTS (Task Achievement, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy), chỉ ra lỗi và sửa:\n\nĐề: ${s.prompt.replace(/<[^>]+>/g,"")}\n\nBài của KC:\n${st.text}`;
      try{await navigator.clipboard.writeText(txt);toast("Đã sao chép, KC dán vào chat với Claude nhé");}catch(err){prompt("Sao chép đoạn này:",txt);}return;}
    if(e.target.closest("[data-game]")){startGame(s);document.getElementById("gtime").textContent="0.0 giây";return;}
  }
  const rm=e.target.closest("[data-rm]");if(rm){location.hash="#/roadmap/"+rm.dataset.rm;return;}
  const se=e.target.closest("[data-set]");
  if(se){
    if(se.dataset.set==="connect"){const tok=(document.getElementById("tok").value||"").trim();if(!tok){toast("KC dán mã truy cập trước nhé");return;}se.disabled=true;se.textContent="Đang kết nối";try{await Sync.connect(tok);toast("Đã bật đồng bộ");renderSettings();}catch(err){setSyncCfg({});toast("Không kết nối được, KC kiểm tra lại mã");se.disabled=false;se.textContent="Bật đồng bộ";}}
    else if(se.dataset.set==="sync"){toast("Đang đồng bộ");await Sync.run();toast(Sync.last||"Xong");}
    else if(se.dataset.set==="off"){setSyncCfg({});Sync.last="";renderSettings();toast("Đã tắt đồng bộ trên máy này");}
  }
});

if("serviceWorker" in navigator&&location.protocol==="https:")navigator.serviceWorker.register("sw.js").catch(()=>{});
window.__kc={get L(){return L;},answer:(ok)=>answer(ok,"")};
route();
Sync.run();
})();
