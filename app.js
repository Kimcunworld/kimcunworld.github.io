/* Kim Cun world · học tiếng Anh và tiếng Trung mỗi ngày */
(function(){
"use strict";

const PASS = 0.8;
const MODES = {
  en:{key:"en", name:"English", vn:"Tiếng Anh", badge:"EN", mascot:"tem", pet:"Tem", lessons:window.EN_LESSONS||[], plan:window.EN_PLAN||[], tts:"en-GB", mins:20, sub:"Nền tảng lên IELTS 7.5"},
  zh:{key:"zh", name:"中文", vn:"Tiếng Trung", badge:"中", mascot:"bap", pet:"Bắp", lessons:window.ZH_LESSONS||[], plan:window.ZH_PLAN||[], tts:"zh-CN", mins:15, sub:"HSK1 · Giao tiếp và thư pháp"}
};
const LANGS = MODES;
const MOCKS = window.MOCKS||[];
const M = window.MASCOT||{};
const INTERVAL = {1:1,2:3,3:7,4:14,5:30};
const STORE_BASE = "kc-hoc-di-v3", OLD = "kc-hoc-di-v2";
const SYNC_BASE = "kc-hoc-di-sync";
const GIST_FILE = "kimcun-world-v3.json";
const app = document.getElementById("app"), tabbar = document.getElementById("tabbar");

/* ---------- Tiện ích ---------- */
const pad=n=>String(n).padStart(2,"0");
const fmt=d=>d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
const today=()=>fmt(new Date());
function addDays(s,n){const [y,m,d]=s.split("-").map(Number);const t=new Date(y,m-1,d);t.setDate(t.getDate()+n);return fmt(t);}
const WD=["CN","T2","T3","T4","T5","T6","T7"];
function wd(s){const [y,m,d]=s.split("-").map(Number);return WD[new Date(y,m-1,d).getDay()];}
function weekStart(){const d=new Date();const k=(d.getDay()+6)%7;d.setDate(d.getDate()-k);return fmt(d);}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
const pick=(a,n)=>shuffle(a).slice(0,n);
const enc=s=>encodeURIComponent(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const dmy=s=>s.split("-").reverse().join("/");
function toast(m){const t=document.getElementById("toast");t.textContent=m;t.classList.add("show");clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove("show"),2400);}
const I_SAY='<svg viewBox="0 0 24 24"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a9 9 0 0 1 0 14"/></svg>';
const I_BACK='<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>';
const I_MIC='<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>';
function sayBtn(text,lang,sm,label){return `<button class="say${sm?" sm":""}${label?" lbl":""}" type="button" data-say="${enc(text)}" data-lang="${lang}" aria-label="Nghe">${I_SAY}${label?`<span>${label}</span>`:""}</button>`;}
const mascot=(name,cls)=>`<div class="mascot ${cls||""}">${M[name]||""}</div>`;

/* ---------- Thay tên KC bằng tên người học ---------- */
function nameFix(){if(NAME!=="KC"){
  const fix=root=>{const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while((n=w.nextNode()))if(n.nodeValue.includes("KC"))n.nodeValue=n.nodeValue.replace(/KC/g,NAME);};
  new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(x=>{if(x.nodeType===1)fix(x);else if(x.nodeType===3&&x.nodeValue.includes("KC"))x.nodeValue=x.nodeValue.replace(/KC/g,NAME);}))).observe(document.body,{childList:true,subtree:true,characterData:false});
}}

/* ---------- Đọc to ---------- */
let speakRate=1;
function speak(text,lang,onend,pitch){
  if(!("speechSynthesis" in window)){toast("Thiết bị này chưa hỗ trợ đọc to");return;}
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  u.lang=lang; u.rate=(lang.startsWith("zh")?0.8:0.92)*speakRate; if(pitch)u.pitch=pitch;
  const vs=speechSynthesis.getVoices();
  const v=vs.find(v=>v.lang.replace("_","-")===lang)||vs.find(v=>v.lang.replace("_","-").startsWith(lang.slice(0,2)));
  if(v)u.voice=v; if(onend)u.onend=onend;
  speechSynthesis.speak(u);
}
function speakLines(lines,lang){let i=0;const next=()=>{if(i>=lines.length)return;const l=lines[i++];speak(l.t,lang,()=>setTimeout(next,450),l.who==="W"?1.25:l.who==="M"?0.85:1);};next();}
if("speechSynthesis" in window)speechSynthesis.getVoices();

/* ---------- Hồ sơ người học ---------- */
const PROFILES="kc-world-profiles",CURP="kc-world-current";
const LEVELS={en:["4.5","5.5","6.5","7.5","8.0"],zh:["HSK1","HSK2","HSK3","HSK4","HSK5"]};
function loadProfiles(){let l=null;try{l=JSON.parse(localStorage.getItem(PROFILES));}catch(e){}if(!Array.isArray(l)||!l.length)l=[{id:"KC",name:"KC",pin:"",lv:{en:1,zh:1},owner:true}];l.forEach(p=>{if(p.owner&&!p.lv2){p.lv={en:1,zh:1};p.lv2=1;}});return l;}
let PROFS=loadProfiles();
let P=PROFS.find(x=>x.id===(localStorage.getItem(CURP)||"KC"))||PROFS[0];
const NAME=P.name;
function saveProfiles(){try{localStorage.setItem(PROFILES,JSON.stringify(PROFS));localStorage.setItem(CURP,P.id);}catch(e){}}
saveProfiles();nameFix();
const pkey=k=>P.owner?k:k+":"+P.id;

/* ---------- Lưu trữ ---------- */
const CUR=2;
function resetCur(x){x.done={en:{},zh:{}};x.checked={en:{},zh:{}};x.srs={};x.score={};x.mist={};x.hzOk={};x.cur=CUR;return x;}
function blank(){return {v:3,cur:CUR,done:{en:{},zh:{}},checked:{en:{},zh:{}},srs:{},best:{},mock:{},score:{},log:[],mist:{},seen:{},hzBad:{},updated:0};}
const STORE=pkey(STORE_BASE),SYNC=pkey(SYNC_BASE);
function load(){
  try{const s=JSON.parse(localStorage.getItem(STORE));if(s&&s.done){const n=Object.assign(blank(),s);if(s.cur!==CUR)resetCur(n);return n;}}catch(e){}
  if(P.owner)try{const o=JSON.parse(localStorage.getItem(OLD));if(o&&o.done){const n=Object.assign(blank(),o);n.v=3;
    Object.entries(o.done).forEach(([l,days])=>Object.entries(days).forEach(([d,dt])=>n.log.push({at:Date.parse(dt)+Number(d),date:dt,mode:l,kind:"lesson",skill:"lesson",score:(o.score||{})[l+":"+d]||100,xp:60})));return resetCur(n);}}catch(e){}
  return blank();
}
let S=load();
function save(silent){S.updated=Date.now();try{localStorage.setItem(STORE,JSON.stringify(S));}catch(e){}if(!silent)Sync.schedule();}
function syncCfg(){try{return JSON.parse(localStorage.getItem(SYNC))||{};}catch(e){return {};}}
function setSyncCfg(c){try{localStorage.setItem(SYNC,JSON.stringify(c));}catch(e){}}

/* ---------- Nhật ký, điểm, chuỗi ---------- */
function logAct(mode,kind,skill,score,xp){
  S.log.push({at:Date.now(),date:today(),mode,kind,skill,score:Math.round(score),xp:Math.round(xp)});
  if(S.log.length>3000)S.log=S.log.slice(-3000);
  save(); checkBadges();
}
const xpOf=m=>S.log.filter(x=>!m||x.mode===m).reduce((a,b)=>a+(b.xp||0),0);
function streakOf(m){
  const days=new Set(S.log.filter(x=>x.mode===m&&x.kind!=="game").map(x=>x.date));
  let cur=today(),s=0; if(!days.has(cur))cur=addDays(cur,-1);
  while(days.has(cur)){s++;cur=addDays(cur,-1);}
  let best=0,run=0,prev=null;[...days].sort().forEach(d=>{run=(prev&&addDays(prev,1)===d)?run+1:1;best=Math.max(best,run);prev=d;});
  return {cur:s,best,today:days.has(today())};
}
const learnedVocab=m=>MODES[m].lessons.filter(l=>S.done[m][l.day]).flatMap(l=>(l.vocab||[]).map(v=>Object.assign({lesson:l.day},v)));
const knownCount=()=>Object.values(S.srs).filter(v=>v.box>=3).length;
function weekly(){
  const ws=weekStart(),L=S.log.filter(x=>x.date>=ws);
  const prac=L.filter(x=>x.kind==="practice"||x.kind==="mock").length;
  const hz=L.filter(x=>x.mode==="zh").reduce((a,b)=>a+(b.hz||0),0)+L.filter(x=>x.mode==="zh"&&x.kind!=="game").length*3;
  const days=[...new Set(L.map(x=>x.date))].filter(d=>L.some(x=>x.date===d&&x.mode==="en"&&x.kind!=="game")&&L.some(x=>x.date===d&&x.mode==="zh"&&x.kind!=="game")).length;
  const g=[{label:"bài luyện",v:prac,t:8},{label:"lượt luyện chữ Hán",v:hz,t:50},{label:"ngày đủ cả hai thứ tiếng",v:days,t:5}];
  const pct=Math.round(g.reduce((a,x)=>a+Math.min(1,x.v/x.t),0)/g.length*100);
  return {g,pct};
}

/* ---------- Huy hiệu ---------- */
const BADGES=[
  {id:"first",ic:"🌱",name:"Ngày đầu",ok:()=>S.log.some(x=>x.kind!=="game")},
  {id:"s3",ic:"🔥",name:"Chuỗi 3",ok:()=>Math.max(streakOf("en").best,streakOf("zh").best)>=3},
  {id:"s7",ic:"🏅",name:"Chuỗi 7",ok:()=>Math.max(streakOf("en").best,streakOf("zh").best)>=7},
  {id:"s30",ic:"👑",name:"Chuỗi 30",ok:()=>Math.max(streakOf("en").best,streakOf("zh").best)>=30},
  {id:"hz50",ic:"✍️",name:"50 chữ Hán",ok:()=>Object.keys(S.hzOk||{}).length>=50},
  {id:"w100",ic:"📚",name:"100 từ thuộc",ok:()=>knownCount()>=100},
  {id:"mock80",ic:"💯",name:"Đề 80%",ok:()=>S.log.some(x=>x.kind==="mock"&&x.score>=80)},
  {id:"game10",ic:"🎮",name:"10 ván game",ok:()=>S.log.filter(x=>x.kind==="game").length>=10},
  {id:"xp1000",ic:"⭐",name:"1000 điểm",ok:()=>xpOf()>=1000}
];
function checkBadges(){
  const fresh=BADGES.filter(b=>!S.seen[b.id]&&b.ok());
  if(!fresh.length)return;
  fresh.forEach(b=>S.seen[b.id]=today()); save(true);
  setTimeout(()=>celebrate(fresh[0].ic+" "+fresh[0].name,"KC vừa nhận huy hiệu mới!","co"),400);
}
function celebrate(title,sub,who){
  const o=document.createElement("div");o.className="celebrate";
  o.innerHTML=`<div class="cbox">${mascot(who||"co","jump")}<h2>${title}</h2><p>${sub}</p><button class="btn block" data-close="1">Tuyệt vời!</button></div>${Array.from({length:24},(_,i)=>`<i style="left:${Math.random()*100}%;animation-delay:${Math.random()*0.6}s;background:${["#f2a65a","#4f8fc9","#8573cf","#6cc3b0","#f2a7c0"][i%5]}"></i>`).join("")}`;
  document.body.appendChild(o);
  o.addEventListener("click",e=>{if(e.target.closest("[data-close]")||e.target===o)o.remove();});
}

/* ---------- Chuẩn hóa đáp án ---------- */
const NUM={zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,fifteen:15,twenty:20,fifty:50,hundred:100};
function normEn(s){
  s=String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[’‘`´]/g,"'");
  s=s.replace(/can't/g,"cannot").replace(/won't/g,"will not").replace(/n't/g," not").replace(/'ve/g," have").replace(/'re/g," are").replace(/'ll/g," will").replace(/'m/g," am").replace(/'d/g," would").replace(/'s been/g," has been");
  s=s.replace(/[.,!?;:"“”()$]/g," ").replace(/\s+/g," ").trim();
  s=s.split(" ").map(w=>NUM[w]!==undefined?String(NUM[w]):w).join(" ");
  return s.replace(/\b(\d+)(st|nd|rd|th)\b/g,"$1").replace(/\bforty 5\b/g,"45").replace(/\b9 100\b/g,"900");
}
const normZh=s=>String(s).replace(/[\s.,!?;:"“”。，！？；：、…]/g,"");
const normPy=s=>String(s).toLowerCase().replace(/ü|u:/g,"v").replace(/[\s'’]/g,"").replace(/5/g,"");
function isRight(it,val){
  if(it.type==="pinyin"){const v=normPy(val);if(it.ans.some(a=>normPy(a)===v))return true;return it.show&&String(val).replace(/\s/g,"").toLowerCase()===it.show.replace(/\s/g,"").toLowerCase();}
  if(it.zh)return it.ans.some(a=>normZh(a)===normZh(val));
  return it.ans.some(a=>normEn(a)===normEn(val));
}

/* ---------- Từ vựng và kho ôn ---------- */
const WORDS={};
["en","zh"].forEach(l=>MODES[l].lessons.forEach(ls=>(ls.vocab||[]).forEach(v=>{WORDS[l+":"+v.id]={lang:l,day:ls.day,v};})));
function recallItems(lang,vocab){
  return vocab.map(v=>lang==="en"
    ?{type:"type",q:`Gõ từ tiếng Anh nghĩa là <b>${esc(v.vi)}</b><br><span class="hintx">Gợi ý: ${v.w[0]}${"_".repeat(Math.max(1,v.w.length-1))} (${v.w.length} chữ cái)</span>`,ans:[v.w],why:`${v.w} ${v.ipa}: ${v.vi}`,key:"en:"+v.id}
    :{type:"hanzi",q:`Viết chữ Hán của: <b>${esc(v.vi)}</b> <span class="hintx">(${v.py})</span>`,chars:v.h,key:"zh:"+v.id,why:`${v.h} ${v.py}: ${v.vi}`});
}
const dueKeys=m=>{const t=today();return Object.keys(S.srs).filter(k=>WORDS[k]&&(!m||WORDS[k].lang===m)&&S.srs[k].due<=t);};
function gamePool(m){
  const learned=learnedVocab(m).map(v=>m==="en"?{a:v.w,b:v.vi,p:v.ipa}:{a:v.h,b:v.vi,p:v.py});
  const want=P.lv[m]||3;const base=(m==="en"?window.EN_POOL:window.ZH_POOL||[]).filter(v=>Math.abs((v.lv||3)-want)<=1).map(v=>m==="en"?{a:v.w,b:v.vi,p:v.ipa}:{a:v.h,b:v.vi,p:v.py});
  const seen=new Set();return learned.concat(base).filter(x=>!seen.has(x.a)&&seen.add(x.a));
}

/* ---------- Cấp độ ---------- */
function lvPick(arr,m){
  const want=P.lv[m]||3;const lvOf=x=>x.lv||3;
  let best=null;arr.forEach(x=>{const d=Math.abs(lvOf(x)-want);if(best===null||d<best)best=d;});
  const items=arr.filter(x=>Math.abs(lvOf(x)-want)===best);
  return {items,exact:best===0,lv:items.length?lvOf(items[0]):want};
}
const lvName=(m,lv)=>LEVELS[m][(lv||3)-1];

/* ---------- Đồng bộ Gist ---------- */
const Sync={
  timer:null,busy:false,last:"",
  on(){const c=syncCfg();return !!(c.token&&c.gistId);},
  api(path,opt){const c=syncCfg();return fetch("https://api.github.com"+path,Object.assign({headers:{"Authorization":"Bearer "+c.token,"Accept":"application/vnd.github+json","Content-Type":"application/json"}},opt||{})).then(r=>{if(!r.ok)throw new Error("GitHub trả lỗi "+r.status);return r.json();});},
  merge(a,b){
    const r=JSON.parse(JSON.stringify(a));r.cur=CUR;
    if(b.cur!==CUR)b=Object.assign({},b,{done:{},checked:{},srs:{},score:{},mist:{},hzOk:{}});
    ["en","zh"].forEach(l=>{
      Object.entries((b.done||{})[l]||{}).forEach(([d,dt])=>{if(!r.done[l][d]||dt<r.done[l][d])r.done[l][d]=dt;});
      Object.entries((b.checked||{})[l]||{}).forEach(([d,v])=>{if(v)r.checked[l][d]=true;});
    });
    Object.entries(b.srs||{}).forEach(([k,v])=>{if(!r.srs[k]||(v.t||0)>(r.srs[k].t||0))r.srs[k]=v;});
    Object.entries(b.best||{}).forEach(([k,v])=>{if(r.best[k]===undefined)r.best[k]=v;else r.best[k]=k.startsWith("t:")?Math.min(r.best[k],v):Math.max(r.best[k],v);});
    Object.entries(b.score||{}).forEach(([k,v])=>{if(r.score[k]===undefined||v>r.score[k])r.score[k]=v;});
    Object.entries(b.mist||{}).forEach(([k,v])=>{if(!r.mist[k]||(v.at||0)>(r.mist[k].at||0))r.mist[k]=v;});
    Object.assign(r.seen,b.seen||{});r.hzOk=Object.assign({},b.hzOk||{},r.hzOk||{});
    const have=new Set(r.log.map(x=>x.at+x.kind));(b.log||[]).forEach(x=>{if(!have.has(x.at+x.kind))r.log.push(x);});r.log.sort((x,y)=>x.at-y.at);
    r.updated=Math.max(a.updated||0,b.updated||0);return r;
  },
  async pull(){const c=syncCfg(),g=await this.api("/gists/"+c.gistId);const f=g.files&&g.files[GIST_FILE];if(!f)return null;let t=f.content;if(f.truncated)t=await fetch(f.raw_url).then(r=>r.text());try{return JSON.parse(t);}catch(e){return null;}},
  async push(){const c=syncCfg();await this.api("/gists/"+c.gistId,{method:"PATCH",body:JSON.stringify({files:{[GIST_FILE]:{content:JSON.stringify(S)}}})});},
  async run(){
    if(!this.on()||this.busy)return;this.busy=true;
    try{const rm=await this.pull();if(rm&&rm.done){S=this.merge(S,rm);save(true);}await this.push();this.last="Đã đồng bộ lúc "+new Date().toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"});const c=syncCfg();c.lastOk=Date.now();setSyncCfg(c);}
    catch(e){this.last="Chưa đồng bộ được: "+e.message;}
    this.busy=false;if(!L&&!G)route(true);
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
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&!L&&!G)Sync.run();});

/* ---------- Router ---------- */
let L=null,G=null,MODE=null;
function route(soft){
  if(!soft)stopAll();
  const p=(location.hash.replace(/^#\/?/,"")||"").split("/");
  document.body.classList.remove("lesson-mode");
  L=null; if(G&&G.stop)G.stop(); G=null;
  if(!soft)window.scrollTo(0,0);
  if(MODES[p[0]]){
    MODE=p[0];document.body.dataset.mode=MODE;
    const sec=p[1]||"home";
    if(sec==="learn")return openLesson(MODE,p[2]);
    if(sec==="mock")return openMock(p[2]);
    if(sec==="review")return openReview(MODE);
    if(sec==="mistakes")return openMistakes(MODE);
    if(sec==="drill")return openPractice(MODE,p[2],p[3]);
    if(sec==="play")return openGame(MODE,p[2]);
    drawTabbar(sec);
    if(sec==="practice")return renderPractice(MODE);
    if(sec==="game")return renderGames(MODE);
    if(sec==="notes")return renderNotes(MODE);
    if(sec==="progress")return renderProgress(MODE);
    if(sec==="roadmap")return renderRoadmap(MODE);
    return renderModeHome(MODE);
  }
  MODE=null;delete document.body.dataset.mode;
  if(p[0]==="settings"){drawTabbar(null);return renderSettings();}
  if(p[0]==="profiles"){drawTabbar(null);return renderProfiles(p[1]);}
  drawTabbar(null);renderLanding();
}
window.addEventListener("hashchange",()=>route());
function stopAll(){try{speechSynthesis.cancel();}catch(e){}if(L&&L.timer)clearInterval(L.timer);if(L&&L.rec&&L.rec.state==="recording")L.rec.stop();}
function drawTabbar(sec){
  if(!MODE){tabbar.innerHTML="";tabbar.style.display="none";return;}
  tabbar.style.display="";
  const items=[["home","🏠","Hôm nay"],["practice","🎯","Luyện tập"],["game","🎮","Game"],["notes","📒","Sổ tay"],["progress","📈","Tiến độ"]];
  tabbar.innerHTML=items.map(([k,ic,t])=>`<a href="#/${MODE}${k==="home"?"":"/"+k}" class="${sec===k?"on":""}"><span class="ti">${ic}</span><span>${t}</span></a>`).join("");
}
function modeHeader(m,title){
  const o=m==="en"?"zh":"en";
  return `<div class="mhead"><a class="back" href="#/" aria-label="Trang chào">${I_BACK}</a><div class="mtitle"><span class="mb">${MODES[m].badge}</span>${title}</div><div class="sw"><a href="#/en" class="${m==="en"?"on":""}">EN</a><a href="#/zh" class="${m==="zh"?"on":""} zh">中</a></div></div>`;
}

/* ---------- Trang chào ---------- */
function greeting(){const h=new Date().getHours();return h<11?"Chào buổi sáng":h<14?"Chào buổi trưa":h<18?"Chào buổi chiều":"Chào buổi tối";}
function renderLanding(){
  const w=weekly(),se=streakOf("en"),sz=streakOf("zh");
  const card=m=>{const s=m==="en"?se:sz,Md=MODES[m],st=status(m);
    return `<a class="modecard ${m}" href="#/${m}">${mascot(Md.mascot,"mc")}<div class="mi"><div class="mt">${Md.name}</div><div class="ms">${P.owner?Md.sub:"Cấp "+lvName(m,P.lv[m])} · ${st.state==="doneToday"?"Đã học hôm nay":"Ngày "+st.day}</div></div><div class="mf">🔥 ${s.cur}<small>ngày</small></div></a>`;};
  app.innerHTML=`<header class="hero land"><div class="wrap">
    <div class="landtop"><div><div class="logo"><span>K</span>Kim Cun world <a class="pchip" href="#/profiles">👤 ${esc(P.name)} · Đổi</a></div><h1>${greeting()}, ${esc(P.name)}</h1><p class="hello">Hôm nay học gì nào?</p></div>${mascot("co","wave big")}</div>
    <div class="stats"><div class="stc"><b>${xpOf().toLocaleString("vi-VN")}</b><span>Tổng điểm</span></div><div class="stc"><b>${knownCount()}</b><span>Từ đã thuộc</span></div><div class="stc"><b>${Object.keys(S.seen).length}</b><span>Huy hiệu</span></div></div>
  </div></header>
  <main class="wrap">
    ${card("en")}${card("zh")}
    <div class="card goal"><div class="donut" style="--p:${w.pct}"><span>${w.pct}%</span></div><div><b>Mục tiêu tuần</b>${w.g.map(x=>`<div class="small">${Math.min(x.v,x.t)}/${x.t} ${x.label}</div>`).join("")}</div></div>
    <div class="sec">Huy hiệu</div>
    <div class="badges">${BADGES.map(b=>`<div class="bd ${S.seen[b.id]?"":"off"}" title="${b.name}"><b>${b.ic}</b>${b.name}</div>`).join("")}</div>
    ${Sync.on()||!P.owner?"":`<div class="banner"><span>Bật đồng bộ để học liền mạch trên điện thoại, iPad và máy tính.</span><a href="#/settings">Thiết lập</a></div>`}
    <p style="text-align:center;margin-top:18px"><a href="#/settings">Cài đặt</a></p>
  </main>`;
}

/* ---------- Trang chủ của mode ---------- */
function status(l){
  const m=Object.keys(S.done[l]).reduce((a,d)=>Math.max(a,+d),0),t=today();
  if(m>0&&S.done[l][m]===t)return {day:m,state:"doneToday"};
  const day=m+1;if(!MODES[l].lessons.find(x=>x.day===day))return {day,state:"soon"};
  return {day,state:"open"};
}
function renderModeHome(m){
  const Md=MODES[m],st=status(m),s=streakOf(m);
  const ls=Md.lessons.find(x=>x.day===st.day);
  const today_=st.state==="open"?`<a class="today" href="#/${m}/learn"><div class="k">Bài hôm nay · Ngày ${st.day} · ${ls.book} · ${Md.mins} phút</div><div class="t">${ls.title}</div><span class="go">Bắt đầu học</span></a>`
    :st.state==="doneToday"?`<div class="today done"><div class="k">Bài hôm nay · Ngày ${st.day}</div><div class="t">Xong rồi! Mai học ngày ${st.day+1}</div><a class="go" href="#/${m}/learn/${st.day}">Xem lại bài</a></div>`
    :`<div class="today done"><div class="k">Bài ngày ${st.day}</div><div class="t">Bài đang được soạn</div><a class="go" href="#/${m}/practice">Vào luyện tập</a></div>`;
  const due=dueKeys(m).length,mist=Object.values(S.mist).filter(x=>x.mode===m&&!x.fixed).length;
  app.innerHTML=`<div class="wrap">${modeHeader(m,Md.name)}
    <div class="greet">${mascot(Md.mascot,s.today?"jump":"idle")}<div class="bubble">${s.today?`Hôm nay mình học rồi, chuỗi ${s.cur} ngày! Luyện thêm chút nữa không KC?`:s.cur?`Giữ chuỗi ${s.cur} ngày nào KC ơi!`:`${Md.pet} đợi KC học cùng nè!`}</div></div>
    ${today_}
    <div class="sec">Nhanh</div>
    <div class="grid2">
      <a class="tile2" href="#/${m}/review"><span class="ic">🔁</span><b>Ôn tập</b><span class="small">${due?due+" từ đến hạn":"Chưa có từ đến hạn"}</span></a>
      <a class="tile2" href="#/${m}/mistakes"><span class="ic">🩹</span><b>Ôn lỗi sai</b><span class="small">${mist} câu cần làm lại</span></a>
      <a class="tile2" href="#/${m}/practice"><span class="ic">🎯</span><b>Luyện tập</b><span class="small">${m==="en"?"Nghe, Đọc, Viết, Nói":"Mặt chữ, viết, ghép câu"}</span></a>
      <a class="tile2" href="#/${m}/game"><span class="ic">🎮</span><b>Game</b><span class="small">Chơi cho vui</span></a>
    </div>
    <p style="text-align:center;margin-top:18px"><a href="#/${m}/roadmap">Xem lộ trình giáo trình</a></p></div>`;
}

/* ---------- Luyện tập ---------- */
const PRACTICE={
  en:[
    {sec:"Nghe 🎧"},
    {id:"chinh-ta",ic:"🎧",t:"Chép chính tả",d:"Nghe câu, viết lại từng từ",ready:true,skill:"listening"},
    {id:"toc-ky",ic:"📝",t:"Nghe tốc ký",d:"Ghi chú bằng ký hiệu rồi trả lời",ready:true,skill:"listening"},
    {sec:"Đọc 📖"},
    {id:"xe-cau",ic:"✂️",t:"Đọc xé câu",d:"Chia cụm, gắn nhãn S, V, O, trạng ngữ",ready:true,skill:"reading"},
    {id:"doc-dang",ic:"📖",t:"Đọc theo dạng câu hỏi",d:"TRUE FALSE NOT GIVEN, tiêu đề, điền từ, ý ở đoạn nào",ready:true,skill:"reading"},
    {sec:"Viết ✍️"},
    {id:"viet-khoi",ic:"✍️",t:"Viết theo khối",d:"Mở bài, tổng quan, thân bài, kết bài",ready:true,skill:"writing"},
    {id:"svo",ic:"🔤",t:"Dịch SVO",d:"Tách S, V, O rồi dịch, nâng cấp từ vựng",ready:true,skill:"writing"},
    {sec:"Nói 🎙️"},
    {id:"shadow",ic:"🗣️",t:"Shadowing",d:"Nghe từng câu, nói đuổi theo, ghi âm so sánh",ready:true,skill:"speaking"},
    {id:"noi-5",ic:"🎙️",t:"Nói 5 phút mỗi ngày",d:"Part 1, 2, 3 có ghi âm",ready:true,skill:"speaking"},
    {sec:"Nền tảng ⚡"},
    {id:"tu-vung",ic:"📚",t:"Từ vựng",d:"Nhớ lại và gõ từ đã học",ready:true,skill:"vocab"},
    {id:"phan-xa",ic:"⚡",t:"Phản xạ ngữ pháp 60 giây",d:"Chọn đáp án đúng nhanh nhất có thể",ready:true,skill:"grammar"}
  ],
  zh:[
    {sec:"Mặt chữ 字"},
    {id:"mat-chu",ic:"字",t:"Ôn mặt chữ",d:"Từ, cụm, câu lặp lại nhiều dạng",ready:true,skill:"hanzi"},
    {id:"luyen-viet",ic:"✍️",t:"Luyện viết",d:"Viết tay, ưu tiên chữ hay sai",ready:true,skill:"hanzi"},
    {sec:"Câu 句"},
    {id:"ghep-cau",ic:"🧩",t:"Ghép câu",d:"Xếp từ, điền từ, dịch",ready:true,skill:"grammar"},
    {id:"xe-cau",ic:"✂️",t:"Xé câu tiếng Trung",d:"Chủ ngữ, trạng ngữ, động từ, bổ ngữ",ready:true,skill:"reading"},
    {id:"svo",ic:"🔤",t:"Dịch SVO",d:"Luyện trật tự câu tiếng Trung",ready:true,skill:"writing"},
    {sec:"Nghe nói 听说"},
    {id:"shadow",ic:"🗣️",t:"Shadowing",d:"Nghe từng câu, nói đuổi theo, ghi âm so sánh",ready:true,skill:"speaking"},
    {id:"thanh-dieu",ic:"🎵",t:"Thanh điệu",d:"Nghe phân biệt thanh, biến điệu",ready:true,skill:"speaking"}
  ]
};
function renderPractice(m){
  const mocks=MOCKS.filter(x=>x.lang===m);
  const lastScore=id=>{const l=S.log.filter(x=>x.mode===m&&x.skill===id).slice(-1)[0];return l?l.score:null;};
  app.innerHTML=`<div class="wrap">${modeHeader(m,"Luyện tập")}
  <div class="lvbar"><span>Cấp độ</span>${LEVELS[m].map((t,i)=>`<button class="lvc ${P.lv[m]===i+1?"on":""}" data-lv="${i+1}">${t}</button>`).join("")}</div>
  <p class="small">Bài luyện lọc theo cấp đã chọn. Mỗi lượt luyện giữ chuỗi ngày và cộng điểm theo % đúng. Dưới 50% sẽ vào danh sách cần làm lại.</p>
  ${PRACTICE[m].map(p=>p.sec?`<div class="sec">${p.sec}</div>`:p.ready
    ?`<a class="card prow" href="#/${m}/drill/${p.id}"><span class="pic ${m==="zh"&&p.ic==="字"?"zh":""}">${p.ic}</span><div class="meta"><b>${p.t}</b><div class="small">${p.d}</div></div><span class="pill">Luyện</span></a>`
    :`<div class="card prow soon"><span class="pic">${p.ic}</span><div class="meta"><b>${p.t}</b><div class="small">${p.d}</div></div><span class="pill lock">Sắp có</span></div>`).join("")}
  <div class="sec">Đề rút gọn 📋</div>
  ${mocks.map(x=>{const lock=Object.keys(S.done[m]).length<x.need,h=S.mock[x.id]||[];return `<${lock?"div":"a"} class="card prow ${lock?"soon":""}" ${lock?"":`href="#/${m}/mock/${x.id}"`}><span class="pic">📋</span><div class="meta"><b>${x.title}</b><div class="small">${x.desc} · ${x.minutes} phút</div></div><span class="pill ${lock?"lock":""}">${lock?"Mở sau ngày "+x.need:h.length?"Đã làm "+h.length+" lần":"Làm đề"}</span></${lock?"div":"a"}>`;}).join("")}
  </div>`;
}
function startPractice(m,p,steps,extra){
  L=Object.assign({kind:"practice",lang:m,pid:p.id,skill:p.skill,title:p.t,data:{steps:[]},steps:steps.concat([{type:"finish",name:"Xong"}]).map(s=>Object.assign({},s,{st:s.st||initStep(s)})),idx:0,mode:"practice"},extra||{});
  render();
}
function lvNote(m,r){return r.exact?"":`<div class="banner"><span>Cấp ${lvName(m,P.lv[m])} đang được soạn, tạm dùng bài cấp ${lvName(m,r.lv)}.</span></div>`;}
function chooser(m,p,list,sub){
  drawTabbar(null);
  app.innerHTML=`<div class="wrap">${modeHeader(m,p.t)}<p class="small">${p.d}</p>${list.map(x=>`<a class="card prow" href="#/${m}/drill/${p.id}/${x.id}"><span class="pic">${p.ic}</span><div class="meta"><b>${x.t}</b><div class="small">${x.lv?"Cấp "+lvName(m,x.lv):""}${x.formula?x.formula.slice(0,70)+"…":""}</div></div><span class="pill">Làm</span></a>`).join("")}</div>`;
}
function openPractice(m,id,sub){
  const p=PRACTICE[m].find(x=>x.id===id);if(!p||!p.ready){location.hash="#/"+m+"/practice";return;}
  if(id==="toc-ky"){const r=lvPick(window.EN_TOCKY,m),set=pick(r.items,1)[0];
    return startPractice(m,p,[{type:"drill",name:"Nghe tốc ký",intro:"Chỉ được nghe 2 lần. Vừa nghe vừa ghi chú bằng ký hiệu vào ô ghi chú, rồi trả lời dựa trên ghi chú.",head:{audio:set.audio,max:2,notes:true,title:set.title},items:set.items}]);}
  if(id==="xe-cau"){const d=m==="en"?window.EN_XECAU:window.ZH_XECAU;const steps=[{type:"xecau",name:"Xé câu",data:d}];
    if(d.items)steps.push({type:"drill",name:"Câu hỏi đọc hiểu",intro:"Trả lời dựa trên đoạn vừa xé.",head:{title:d.title,minutes:5,passage:[d.sents.map(x=>x.c.map(c=>c[0]).join(" ")).join(" ")]},items:d.items});
    return startPractice(m,p,steps);}
  if(id==="doc-dang"){const list=window.EN_DOCDANG;if(!sub)return chooser(m,p,list);const d=list.find(x=>x.id===sub);if(!d)return chooser(m,p,list);
    return startPractice(m,p,[{type:"explain",name:"Mẹo làm bài",title:d.t,blocks:[{h:"Mẹo làm bài",p:d.tips}]},{type:"drill",name:"Đọc · "+d.t,head:{title:d.title,minutes:d.minutes,passage:d.passage},items:d.items}],{title:d.t});}
  if(id==="viet-khoi"){const list=window.EN_VIETKHOI;if(!sub)return chooser(m,p,list);const d=list.find(x=>x.id===sub);if(!d)return chooser(m,p,list);
    return startPractice(m,p,[{type:"explain",name:"Công thức",title:d.t,blocks:[{h:"Công thức",p:[d.formula]},{h:"Mẹo",p:d.tips}]},{type:"write",name:"Viết",title:d.t,prompt:d.prompt,min:d.min,table:d.table,checklist:d.checklist,model:d.model,bank:((window.WRITE_HELP||{})[d.id]||{}).bank,frames:((window.WRITE_HELP||{})[d.id]||{}).frames}],{title:d.t});}
  if(id==="svo"){const r=lvPick(m==="en"?window.EN_SVO:window.ZH_SVO,m);
    return startPractice(m,p,[{type:"svo",name:"Dịch SVO",items:pick(r.items,Math.min(4,r.items.length)),note:lvNote(m,r)}]);}
  if(id==="noi-5"){const S_=window.EN_SPEAK;const items=pick(S_.p1,3).concat(pick(S_.p2,1),pick(S_.p3,1));
    return startPractice(m,p,[{type:"speak",name:"Nói 5 phút",intro:"3 câu Part 1, 1 bài Part 2 có 1 phút chuẩn bị, 1 câu Part 3. Ghi âm từng câu, nghe lại, rồi mở câu mẫu để so sánh.",items}]);}
  if(id==="phan-xa")return openReflex(m,p);
  if(id==="ghep-cau"){const sents=pick(window.ZH_SENT,8),words=window.ZH_SENT.flatMap(x=>x.w);
    const items=sents.slice(0,5).map(x=>({type:"order",q:`Sắp xếp thành câu: <i>${x.vi}</i>`,words:x.w,ans:[x.w.join("")],zh:true,why:x.w.join(""),say:x.w.join("")}))
      .concat(sents.slice(5,7).map(x=>{const k=Math.floor(Math.random()*x.w.length),right=x.w[k];const opts=[right].concat(pick(words.filter(w=>w!==right),3));return {type:"mcq",q:`Điền từ còn thiếu: <span class="zh big2">${x.w.map((w,i)=>i===k?"___":w).join("")}</span><br><i>${x.vi}</i>`,o:opts.map(o=>`<span class='zh'>${o}</span>`),a:0,why:x.w.join("")};}))
      .concat(sents.slice(7).map(x=>({type:"type",q:`Dịch sang tiếng Trung: <b>${x.vi}</b>`,ans:[x.w.join("")],zh:true,why:x.w.join("")})));
    return startPractice(m,p,[{type:"drill",name:"Ghép câu",intro:"Xếp từ, điền từ và dịch. Viết chữ Hán bằng Scribble hoặc bàn phím.",items}]);}
  if(id==="thanh-dieu"){const marks=["ā","á","ǎ","à"];
    const items=pick(window.ZH_TONES,6).map(x=>({type:"mcq",q:"Nghe và chọn thanh điệu",say:x.h,o:marks.map((mk,i)=>mk+" Thanh "+(i+1)),a:x.t-1,why:`${x.h} ${x.py}: thanh ${x.t}`})).concat(pick(window.ZH_SANDHI,4).map(x=>Object.assign({type:"mcq"},x)));
    return startPractice(m,p,[{type:"drill",name:"Thanh điệu",intro:"Nghe kỹ, có thể bấm nghe nhiều lần.",items}]);}
  if(id==="shadow"){const sents=shadowSents(m);const step={type:"shadow",name:p.t,items:sents};
    L={kind:"practice",lang:m,pid:id,skill:p.skill,title:p.t,data:{steps:[]},steps:[Object.assign({},step,{st:{rec:{},hide:false}}),{type:"finish",name:"Xong",st:{}}],idx:0,mode:"practice"};render();return;}
  const items=genPractice(m,id);
  if(!items.length){app.innerHTML=`<div class="wrap">${modeHeader(m,p.t)}<div class="card"><p>Chưa đủ dữ liệu để luyện, KC học bài hôm nay trước nhé.</p></div></div>`;return;}
  const step={type:"drill",name:p.t,intro:p.d,items};
  L={kind:"practice",lang:m,pid:id,skill:p.skill,title:p.t,data:{steps:[]},steps:[Object.assign({},step,{st:initStep(step)}),{type:"finish",name:"Xong",st:{}}],idx:0,mode:"practice"};
  render();
}
function shadowSents(m){
  const out=[];
  MODES[m].lessons.filter(l=>S.done[m][l.day]||l.day===1).forEach(l=>l.steps.forEach(st=>{
    (st.blocks||[]).forEach(b=>(b.ex||[]).forEach(e=>out.push({t:e.t,py:e.py,vi:e.vi})));
    (st.items||[]).forEach(q=>{if(q.model)(q.model.match(m==="zh"?/[^。！？]+[。！？]?/g:/[^.!?]+[.!?]?/g)||[]).forEach(x=>{x=x.trim();if(x.length>8)out.push({t:x});});});
    if(st.head&&st.head.audio)st.head.audio.forEach(a=>out.push({t:a.t,py:a.py}));
  }));
  const extra=m==="en"?["I've been working in hospitality for several years.","To be honest, it depends on the situation.","What I enjoy most is meeting new people.","The number of visitors has increased significantly."].map(t=>({t}))
    :[{t:"你好，很高兴认识你。",py:"Nǐ hǎo, hěn gāoxìng rènshi nǐ.",vi:"Xin chào, rất vui được làm quen."},{t:"请问，这个多少钱？",py:"Qǐngwèn, zhège duōshao qián?",vi:"Xin hỏi, cái này bao nhiêu tiền?"},{t:"我们店晚上很忙。",py:"Wǒmen diàn wǎnshang hěn máng.",vi:"Quán chúng tôi buổi tối rất bận."}];
  const seen=new Set();return pick(out.concat(extra).filter(x=>!seen.has(x.t)&&seen.add(x.t)),6);
}
function genPractice(m,id){
  const vocab=learnedVocab(m);
  if(id==="tu-vung"){
    const base=pick(lvPick(window.EN_POOL,"en").items,8-Math.min(4,vocab.length));
    const pool=window.EN_POOL.concat(vocab);
    return shuffle(recallItems("en",pick(vocab,4)).concat(base.map(v=>({type:"mcq",q:`<b>${v.w}</b> <span class="hintx">${v.ipa}</span> nghĩa là gì?`,say:v.w,o:[v.vi].concat(pick(pool.filter(x=>x.vi!==v.vi),3).map(x=>x.vi)),a:0,why:`${v.w}: ${v.vi}`}))));
  }
  if(id==="chinh-ta"){
    const sents=[];MODES.en.lessons.filter(l=>S.done.en[l.day]).forEach(l=>{(l.vocab||[]).forEach(v=>sents.push(v.ex));l.steps.forEach(s=>(s.blocks||[]).forEach(b=>(b.ex||[]).forEach(e=>sents.push(e.t))));});
    const extra=["The figure has almost tripled since 2018.","Customer complaints have fallen significantly.","Prices have been rising steadily this year.","A growing proportion of people work from home."];
    return pick(sents.concat(extra),6).map(t=>({type:"dictation",q:"Nghe và chép lại câu:",say:t,ans:[t],why:t}));
  }
  if(id==="mat-chu"){
    const words=pick(vocab,3).concat(pick(lvPick(window.ZH_POOL,"zh").items.filter(x=>!vocab.some(v=>v.h===x.h)),Math.max(3,6-vocab.length)));
    const all=window.ZH_POOL.concat(vocab);
    const rounds=[];
    words.forEach((w,i)=>{
      const others=n=>pick(all.filter(x=>x.h!==w.h),n);
      const set=[
        {type:"mcq",q:`Chữ này nghĩa là gì?<br><span class="zh big">${w.h}</span>`,o:[w.vi].concat(others(3).map(x=>x.vi)),a:0,why:`${w.h} ${w.py}: ${w.vi}`},
        {type:"mcq",q:"Nghe và chọn chữ đúng",say:w.h,o:[w.h].concat(others(3).map(x=>x.h)).map(x=>`<span class='zh'>${x}</span>`),a:0,why:`${w.h} ${w.py}`},
        {type:"mcq",q:`Chọn pinyin đúng của <span class="zh big">${w.h}</span>`,o:[w.py].concat(others(3).map(x=>x.py)),a:0,why:`${w.h}: ${w.py}`},
        {type:"mcq",q:`Chữ nào nghĩa là “${esc(w.vi)}”?`,o:[w.h].concat(others(3).map(x=>x.h)).map(x=>`<span class='zh'>${x}</span>`),a:0,why:`${w.h} ${w.py}: ${w.vi}`}
      ];
      if(w.ex)set.push({type:"mcq",q:"Nghe câu và chọn nghĩa đúng",say:w.ex,o:[w.exVi].concat(pick(vocab.filter(x=>x.ex&&x.h!==w.h),3).map(x=>x.exVi).concat(["Tôi không biết","Hôm nay trời đẹp","Bạn đi đâu vậy"]).slice(0,3)),a:0,why:`${w.ex} ${w.exPy}`});
      if(w.id)set.push(recallItems("zh",[w])[0]);
      set.forEach((it,k)=>rounds.push({k,i,it}));
    });
    rounds.sort((a,b)=>a.k-b.k||a.i-b.i);
    return rounds.map(r=>r.it).slice(0,18);
  }
  if(id==="luyen-viet"){
    const chars=new Set();
    Object.entries(S.hzBad||{}).sort((a,b)=>b[1]-a[1]).forEach(([c])=>chars.add(c));
    vocab.forEach(v=>[...v.h].forEach(c=>chars.add(c)));
    pick(lvPick(window.ZH_POOL,"zh").items,6).forEach(v=>[...v.h].forEach(c=>chars.add(c)));
    const all=window.ZH_POOL.concat(vocab);
    return [...chars].slice(0,8).map(c=>{const w=all.find(x=>x.h.includes(c));return {type:"hanzi",q:`Viết chữ <b>${c}</b> trong từ <span class="zh">${w?w.h:c}</span> ${w?`(${w.vi})`:""}`,chars:c,outline:false};});
  }
  return [];
}

/* ---------- Bộ máy bài học ---------- */
function prepSteps(lang,data,extra){
  const steps=[];(extra||[]).forEach(s=>steps.push(s));
  data.steps.forEach(s=>{if(s.type==="book")return;if(s.type==="drill"&&s.auto==="vocab")steps.push(Object.assign({},s,{items:recallItems(lang,data.vocab||[])}));else steps.push(s);});
  steps.push({type:"finish",name:"Hoàn thành"});
  return steps.map(s=>Object.assign({},s,{st:initStep(s)}));
}
function initStep(s){
  if(s.type==="drill"){
    const items=s.items.map(it=>it.type==="mcq"?shuffleMcq(it):it.type==="order"?Object.assign({},it,{tiles:shuffle(it.words.map((w,i)=>({w,i})))}):it);
    return {items,queue:items.map((_,i)=>i),first:{},cur:null,fb:null,round:1,passed:false,score:null,plays:0,sel:[],hz:null};
  }
  if(s.type==="write")return {text:"",score:null,peek:false};
  if(s.type==="xecau")return {i:0,cuts:{},lab:{},sel:null,checked:false,scores:[],done:false,score:null};
  if(s.type==="svo")return {i:0,lab:{},sel:null,phase:1,labScore:0,shown:false,scores:[],done:false,score:null,osel:[],tiles:null};
  if(s.type==="book")return {ok:false};
  if(s.type==="game")return {done:false};
  return {};
}
function shuffleMcq(it){const ord=shuffle(it.o.map((_,i)=>i));return Object.assign({},it,{o:ord.map(i=>it.o[i]),a:ord.indexOf(it.a)});}
function openLesson(lang,dayParam){
  const Md=MODES[lang],s=status(lang);let day,mode;
  if(dayParam){day=+dayParam;if(S.done[lang][day])mode="replay";else if(s.state==="open"&&day===s.day)mode="normal";else{location.hash="#/"+lang;return;}}
  else{if(s.state!=="open"){location.hash="#/"+lang;return;}day=s.day;mode="normal";}
  const data=Md.lessons.find(x=>x.day===day),extra=[],prev=Md.lessons.find(x=>x.day===day-1);
  if(mode==="normal"&&prev&&S.done[lang][day-1]&&!S.checked[lang][day-1]&&prev.vocab&&prev.vocab.length)
    extra.push({type:"drill",name:"Kiểm tra bài hôm qua",intro:`Nhớ lại từ của ngày ${day-1} mà không nhìn lại. Câu sai sẽ được ôn lại sớm.`,items:recallItems(lang,prev.vocab),isCheck:true,checkDay:day-1});
  if(mode==="normal"&&data.review)extra.push({type:"drill",name:"Ôn ngữ pháp bài trước",intro:"3 câu nhanh để nối mạch với bài hôm qua.",items:data.review});
  L={kind:"lesson",lang,day,mode,data,steps:prepSteps(lang,data,extra),idx:0};
  render();
}
function openMock(id){
  const m=MOCKS.find(x=>x.id===id);if(!m){location.hash="#/"+MODE+"/practice";return;}
  L={kind:"mock",lang:m.lang,mock:m,data:{steps:m.steps,vocab:[]},steps:prepSteps(m.lang,{steps:m.steps},[]),idx:0,mode:"mock"};
  render();
}
function openReview(m){
  const keys=shuffle(dueKeys(m));
  if(!keys.length){drawTabbar(null);
    const nx=Object.entries(S.srs).filter(([k])=>WORDS[k]&&WORDS[k].lang===m).map(([,v])=>v.due).filter(d=>d>today()).sort();
    app.innerHTML=`<div class="wrap">${modeHeader(m,"Ôn tập")}<div class="greet">${mascot(MODES[m].mascot,"idle")}<div class="bubble">Hôm nay chưa có từ nào đến hạn ôn.${nx.length?" Lần ôn tiếp theo: "+dmy(nx[0])+".":""}</div></div><p class="small">Từ mới vào kho sau buổi kiểm tra hôm sau. Nhớ thì giãn dần 3, 7, 14, 30 ngày; quên thì quay lại ngày mai.</p><a class="btn block" href="#/${m}/practice">Vào Luyện tập</a></div>`;return;}
  const items=keys.map(k=>{const w=WORDS[k];return recallItems(w.lang,[w.v])[0];});
  const step={type:"drill",name:"Ôn tập",intro:"Tự nhớ lại, không đoán. Kết quả lần đầu quyết định lịch ôn tiếp theo.",items,isReview:true};
  L={kind:"practice",skill:"review",title:"Ôn tập",lang:m,data:{steps:[]},steps:[Object.assign({},step,{st:initStep(step)}),{type:"finish",name:"Xong",st:{}}],idx:0,mode:"practice"};
  render();
}
function openMistakes(m){
  const list=Object.entries(S.mist).filter(([,v])=>v.mode===m&&!v.fixed).slice(-15);
  if(!list.length){drawTabbar(null);app.innerHTML=`<div class="wrap">${modeHeader(m,"Ôn lỗi sai")}<div class="greet">${mascot(MODES[m].mascot,"jump")}<div class="bubble">Sổ lỗi sai đang trống, KC giỏi quá!</div></div></div>`;return;}
  const items=list.map(([k,v])=>Object.assign({},v.item,{mkey:k}));
  const step={type:"drill",name:"Ôn lỗi sai",intro:"Các câu KC từng làm sai. Làm đúng ở lần đầu thì câu đó được gạch khỏi sổ.",items,isMist:true};
  L={kind:"practice",skill:"mistakes",title:"Ôn lỗi sai",lang:m,data:{steps:[]},steps:[Object.assign({},step,{st:initStep(step)}),{type:"finish",name:"Xong",st:{}}],idx:0,mode:"practice"};
  render();
}

/* ---------- Hiển thị một bước ---------- */
function render(){
  document.body.classList.add("lesson-mode");drawTabbar(null);tabbar.style.display="none";
  const step=L.steps[L.idx],n=L.steps.length-1,i=Math.min(L.idx,n);
  if(step.type==="finish")finish();
  const label=L.kind==="mock"?L.mock.title:L.kind==="practice"?L.title:`${MODES[L.lang].badge} · Ngày ${L.day}`;
  const foot=step.type==="finish"?"":`<div class="footer-act"><button class="btn block" id="next" ${stepReady(step)?"":"disabled"}>${L.idx===n-1?"Hoàn thành":"Tiếp tục"}</button></div>`;
  app.innerHTML=`<div class="topbar"><div class="wrap row"><a class="back" href="#/${L.lang}" aria-label="Thoát">${I_BACK}</a><div class="bar"><i style="width:${(i/n)*100}%"></i></div><span class="step-label">${label}</span><div class="mini-m" id="mm">${M[MODES[L.lang].mascot]||""}</div></div></div>
  <main class="wrap step"><div class="stepname">${step.name}</div>${stepHtml(step)}${foot}</main>`;
  mount(step);
}
function mood(c){const el=document.getElementById("mm");if(!el)return;el.className="mini-m "+c;clearTimeout(mood._t);mood._t=setTimeout(()=>{el.className="mini-m";},900);}
function stepReady(s){
  if(s.type==="drill")return s.st.passed||(L.kind==="practice"&&s.st.queue.length===0&&s.st.cur===null);
  if(s.type==="write")return wordCount(s.st.text,L.lang)>=s.min||!!s.st.peek;
  if(s.type==="book")return s.st.ok;
  if(s.type==="game")return s.st.done;
  if(s.type==="xecau"||s.type==="svo")return s.st.done;
  return true;
}
function refreshNext(){const b=document.getElementById("next");if(b)b.disabled=!stepReady(L.steps[L.idx]);}
function wordCount(t,lang){t=t.trim();if(!t)return 0;return lang==="zh"?t.replace(/[\s\p{P}]/gu,"").length:t.split(/\s+/).length;}
function gridSvg(){return `<svg class="gl" viewBox="0 0 100 100" preserveAspectRatio="none"><g stroke="var(--blue-line)" stroke-width=".6" stroke-dasharray="2 2"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/><line x1="50" y1="0" x2="50" y2="100"/><line x1="0" y1="50" x2="100" y2="50"/></g></svg>`;}
function tableHtml(t){return `<div class="card tbl"><table><thead><tr>${t.head.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${t.rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;}

function stepHtml(s){
  const lang=L.lang,tts=MODES[lang].tts;
  if(s.type==="explain"){
    return `<h2>${s.title}</h2>`+s.blocks.map(bl=>{
      if(bl.h)return `<div class="card prose"><h3>${bl.h}</h3>${bl.p.map(p=>`<p>${p}</p>`).join("")}</div>`;
      if(bl.table)return tableHtml(bl.table);
      if(bl.ex)return `<div class="sec">Ví dụ</div><div class="ex-list">${bl.ex.map(e=>`<div class="ex-item"><div class="txt"><div class="${lang==="zh"?"zh":"en"}">${e.t}</div>${e.py?`<div class="py">${e.py}</div>`:""}<div class="vi">${e.vi}</div></div>${sayBtn(e.t,tts,true)}</div>`).join("")}</div>`;
      if(bl.trap)return `<div class="sec">Lỗi hay gặp</div>${bl.trap.map(t=>`<div class="card trap"><div class="bad-l"><b>Sai:</b> <span class="${lang==="zh"?"zh":""}">${t[0]}</span></div><div class="good-l"><b>Đúng:</b> <span class="${lang==="zh"?"zh":""}">${t[1]}</span></div><div class="small">${t[2]}</div></div>`).join("")}`;
      if(bl.tip)return `<div class="banner tipb"><span>${bl.tip}</span></div>`;
      if(bl.book)return `<div class="bookref">${bl.book}</div>`;
      return "";}).join("");
  }
  if(s.type==="vocab")return `<p class="lead">${s.intro}</p>`+L.data.vocab.map(v=>`<div class="card word"><div class="body"><div class="w">${v.w}</div><div class="ipa">${v.ipa}</div><div class="vi">${v.vi}</div><div class="ex">${v.ex}<div class="exv">${v.exVi}</div></div></div><div class="col">${sayBtn(v.w,tts)}${sayBtn(v.ex,tts,true)}</div></div>`).join("");
  if(s.type==="hanzi")return `<p class="lead">${s.intro}</p>`+L.data.vocab.map((v,vi)=>`<div class="card word zhw"><div class="body">
      <div class="row-c"><div class="w zh">${v.h}</div>${sayBtn(v.h,tts)}</div><div class="ipa">${v.py}</div><div class="vi">${v.vi}</div>
      <div class="chars">${[...v.h].map((c,ci)=>`<button class="mini" data-anim="${vi}-${ci}" data-c="${c}"><span class="zh">${c}</span></button>`).join("")}</div>
      <div class="mini-box" id="mb-${vi}"></div>
      ${(v.parts||[]).map(p=>`<div class="part"><span class="zh pc">${p.c}</span><span>${p.m}</span></div>`).join("")}
      <div class="ex"><span class="zh" style="font-size:18px">${v.ex}</span> ${sayBtn(v.ex,tts,true)}<div class="ipa">${v.exPy}</div><div class="exv">${v.exVi}</div></div></div></div>`).join("");
  if(s.type==="drill")return drillHtml(s);
  if(s.type==="write"){
    const st=s.st,wc=wordCount(st.text,lang),ok=wc>=s.min;
    const bank=s.bank||[],frames=s.frames||[];
    const help=bank.length||frames.length?`<details class="card hint" open><summary>💡 Gợi ý từ vựng và khung câu</summary>
      ${bank.length?`<div class="wchips">${bank.map(b=>`<button class="wchip" data-ins="${enc(b[0].includes("...")?b[0].replace(/\.\.\./g,"___"):b[0])}"><b>${b[0]}</b><span>${b[1]}</span></button>`).join("")}</div>`:""}
      ${frames.length?`<div class="small" style="margin:10px 0 6px">Khung câu, chạm để chèn rồi điền vào chỗ ___</div>${frames.map(f=>`<button class="frame" data-ins="${enc(f)}">${f}</button>`).join("")}`:""}</details>`:"";
    return `<h2>${s.title}</h2><div class="card prose"><p>${s.prompt}</p></div>${s.table?tableHtml(s.table):""}${help}
      <textarea class="field area" id="wr" placeholder="Viết bài ở đây (gõ hoặc viết tay bằng bút)">${esc(st.text)}</textarea>
      <div class="wc"><span id="wcn">${wc}</span> / ${s.min} ${lang==="zh"?"chữ":"từ"}</div>
      <div class="btns left">${lang==="en"?`<button class="btn sm" data-wcheck="1">✨ Chấm nhanh</button>`:""}${ok||st.peek?"":`<button class="btn ghost sm" data-wpeek="1">Bí quá? Xem bài mẫu để học</button>`}</div>
      <div id="wfb">${st.fb||""}</div>
      <div id="wr-after" style="${ok||st.peek?"":"display:none"}"><div class="sec">Tự chấm</div><div class="card" id="wchk">${s.checklist.map(c=>`<label class="chk"><input type="checkbox"><span>${c}</span></label>`).join("")}</div>
      <div class="sec">Bài mẫu</div><div class="ex-item"><div class="txt">${s.model}</div>${sayBtn(s.model,tts,true)}</div>
      <button class="btn ghost block" data-copy="1" style="margin-top:12px">Gửi Claude sửa chi tiết (tùy chọn)</button></div>`;
  }
  if(s.type==="speak"){
    const zh=s.lang==="zh",sl=zh?"zh-CN":"en-GB";
    return `<p class="lead">${s.intro}</p>`+s.items.map((q,qi)=>{
      const sents=(q.model.match(zh?/[^。！？]+[。！？]?/g:/[^.!?]+[.!?]?/g)||[q.model]).map(x=>x.trim()).filter(Boolean);
      return `<div class="card sp"><p class="spq ${zh?"zh":""}">${q.q}</p>
        ${q.prep?`<button class="btn ghost" data-prep="${qi}" data-sec="${q.prep}">Bắt đầu ${q.prep} giây chuẩn bị</button> <span class="cd" id="cd-${qi}"></span>`:""}
        <div class="rec"><button class="btn" data-rec="${qi}">${I_MIC}<span>Ghi âm</span></button><audio id="au-${qi}" controls style="display:none"></audio></div>
        <details><summary>Câu trả lời mẫu và nói đuổi</summary><div class="shadow">${sents.map(x=>`<div class="sh"><span class="${zh?"zh":""}">${x}</span>${sayBtn(x,sl,true)}</div>`).join("")}</div>${sayBtn(q.model,sl,false,"Nghe cả bài")}</details></div>`;
    }).join("");
  }
  if(s.type==="shadow"){const zh=lang==="zh";
    return `<p class="lead">Mỗi câu: nghe mẫu, nói đuổi theo 3 lần (lần đầu nhìn chữ, lần sau ẩn chữ), rồi ghi âm và nghe lại để so với giọng mẫu.</p>
    <label class="chk"><input type="checkbox" id="shide" ${s.st.hide?"checked":""}><span>Ẩn chữ, chỉ nghe (khó hơn)</span></label>
    ${s.items.map((x,i)=>`<div class="card sp shd ${s.st.hide?"hid":""}"><div class="shn">${i+1}</div><p class="sht ${zh?"zh":""}">${x.t}</p>${x.py?`<p class="py">${x.py}</p>`:""}${x.vi?`<p class="small">${x.vi}</p>`:""}
      <div class="btns left">${sayBtn(x.t,tts,false,"Nghe")}<button class="btn ghost sm" data-slow="${enc(x.t)}">🐢 Chậm</button><button class="btn sm ${s.st.rec[i]?"done":""}" data-rec="${i}">${I_MIC}<span>${s.st.rec[i]?"Ghi âm lại":"Ghi âm"}</span></button></div><audio id="au-${i}" controls style="display:none"></audio></div>`).join("")}`;}
  if(s.type==="xecau")return xecauHtml(s);
  if(s.type==="svo")return svoHtml(s);
  if(s.type==="callig")return `<h2>Chữ hôm nay: <span class="zh">${s.char}</span> ${s.py}</h2><p class="lead">Nghĩa: ${s.vi}</p><div class="card prose"><p>${s.note}</p></div>
      <div class="writer-box"><div class="grid-bg big">${gridSvg()}<div class="hw" id="hwc"></div></div>
      <div class="btns"><button class="btn" data-cg="anim">Xem thứ tự nét</button><button class="btn ghost" data-cg="quiz">Viết theo</button><button class="btn ghost" data-cg="free">Viết không chữ mờ</button></div>
      <p class="small" id="cg-msg" style="text-align:center">Xem 2 lần, viết theo 1 lần, rồi viết không chữ mờ 2 lần.</p></div><div class="bookref">${s.paper}</div>`;
  if(s.type==="book")return `<h2>Làm trong sách</h2><div class="card prose"><p>${s.text}</p></div><label class="chk big"><input type="checkbox" id="bk" ${s.st.ok?"checked":""}><span>Đã làm xong phần trong sách</span></label>`;
  if(s.type==="game"){const best=S.best["t:lesson:"+L.lang+":"+L.day];return `<p class="lead">${s.intro} ${best?`Kỷ lục: <b>${(best/1000).toFixed(1)} giây</b>.`:""}</p><div class="game-top"><span id="gtime">0.0 giây</span><button class="btn ghost sm" data-lgame="1">Chơi lại</button></div><div class="game" id="game"></div>`;}
  if(s.type==="finish")return finishHtml();
  return "";
}

/* ---------- Drill ---------- */
function drillHtml(s){
  const st=s.st;let head="";
  if(s.head&&s.head.audio){
    const left=Math.max(0,(s.head.max||3)-st.plays);
    head=`<div class="card audio"><button class="btn" data-play="1" ${left?"":"disabled"}>${I_SAY}<span>Nghe đoạn ${left?`(còn ${left} lượt)`:"(hết lượt)"}</span></button>
      ${st.passed?`<details open><summary>Lời bài nghe</summary>${s.head.audio.map(l=>`<p class="${s.head.lang==="zh"?"zh":""}">${l.who?`<b>${l.who==="W"?"Woman":"Man"}:</b> `:""}${l.t}${l.py?`<br><span class="py">${l.py}</span>`:""}</p>`).join("")}</details>`:""}</div>`;
  }
  if(s.head&&s.head.notes)head+=`<details class="card legend"><summary>Bảng ký hiệu tốc ký</summary><div class="lg">${(window.TOCKY_LEGEND||[]).map(x=>`<span><b>${x[0]}</b> ${x[1]}</span>`).join("")}</div></details><textarea class="field area notes" id="notes" placeholder="Ghi chú tốc ký ở đây (viết bằng bút hoặc gõ)">${esc(st.notes||"")}</textarea>`;
  if(s.head&&s.head.passage)head=`<div class="card passage"><div class="ph"><b>${s.head.title}</b><span class="timer" id="timer"></span></div>${s.head.passage.map((p,i)=>`<p><span class="pn">${i+1}</span>${p}</p>`).join("")}</div>`;
  if(st.cur===null&&st.queue.length){st.cur=st.queue.shift();st.fb=null;st.sel=[];st.hz=null;}
  const total=st.items.length,firstDone=Object.keys(st.first).length,firstOk=Object.values(st.first).filter(Boolean).length;
  if(st.queue.length===0&&st.cur===null){
    const pct=Math.round(firstOk/total*100),prac=L.kind==="practice";
    return `${head}<div class="card result ${st.passed||prac&&pct>=50?"ok":"no"}">${mascot(MODES[L.lang].mascot,pct>=80?"jump":"idle")}<div class="big">${pct}%</div><p>${st.passed?"Đạt chuẩn, sang phần tiếp theo nhé.":prac?(pct>=50?"Chưa tới 80%, luyện lại lần nữa sẽ chắc hơn.":"Dưới 50%, phần này đã vào danh sách cần làm lại."):"Chưa đạt 80%. Làm lại cả phần này để nhớ chắc hơn."}</p>${st.passed?"":`<button class="btn ${prac?"ghost":""} block" data-redo="1">Làm lại phần này</button>`}</div>`;
  }
  const it=st.items[st.cur];
  const prog=`<div class="dprog"><span>Câu ${Math.min(firstDone+(st.first[st.cur]===undefined?1:0),total)}/${total}${st.round>1?` · Lượt ${st.round}`:""}</span><span>${firstDone?Math.round(firstOk/firstDone*100):0}% đúng</span></div>`;
  return `${s.intro&&firstDone===0&&!st.fb?`<p class="lead">${s.intro}</p>`:""}${head}${prog}<div class="card q" id="qcard">${itemHtml(it,st)}</div>`;
}
function itemHtml(it,st){
  const lang=L.lang,zh=it.zh||lang==="zh",fb=st.fb;
  const say=it.say?`<div class="sayrow">${sayBtn(it.say,zh?"zh-CN":"en-GB",false,"Nghe")}</div>`:"";
  let body="";
  if(it.type==="mcq")body=`<div class="opts">${it.o.map((o,i)=>{let c="";if(fb){if(i===it.a)c="right";else if(i===fb.val)c="wrong";}return `<button class="opt ${c}" data-mcq="${i}" ${fb?"disabled":""}>${o}</button>`;}).join("")}</div>`;
  else if(it.type==="order"){const used=new Set(st.sel);
    body=`<div class="order-ans">${st.sel.map((ti,k)=>`<button class="tile on ${it.zh?"zh":""}" data-unsel="${k}" ${fb?"disabled":""}>${it.tiles[ti].w}</button>`).join("")||'<span class="small">Chạm các ô bên dưới theo đúng thứ tự</span>'}</div>
      <div class="tiles">${it.tiles.map((t,ti)=>used.has(ti)?"":`<button class="tile ${it.zh?"zh":""}" data-sel="${ti}" ${fb?"disabled":""}>${t.w}</button>`).join("")}</div>
      ${fb?"":`<button class="btn block" data-check="order" ${st.sel.length===it.tiles.length?"":"disabled"}>Kiểm tra</button>`}`;}
  else if(it.type==="hanzi")body=`<div class="writer-box"><div class="hz-prog" id="hzp"></div><div class="grid-bg">${gridSvg()}<div class="hw" id="hwq"></div></div><p class="small" id="hz-msg" style="text-align:center">Viết từng chữ theo đúng thứ tự nét.</p>${fb?"":`<button class="btn ghost sm" data-hzhint="1">Xem gợi ý chữ này</button>`}</div>`;
  else{const ph=it.type==="pinyin"?"ví dụ: ni3hao3":it.zh?"Viết chữ Hán":it.type==="correct"?"Viết lại cả câu đúng":"Câu trả lời";
    body=`<input class="field ans ${it.zh?"zh":""}" id="ans" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${ph}" value="${fb?esc(fb.val):""}" ${fb?"disabled":""}>
      ${it.type==="pinyin"&&!fb?`<div class="tones">${[1,2,3,4].map(n=>`<button class="tone" data-tone="${n}">${n}</button>`).join("")}<span class="small">chạm để thêm số thanh</span></div>`:""}
      ${fb?"":`<button class="btn block" data-check="text">Kiểm tra</button>`}`;}
  const q=it.type==="correct"?`<p class="prompt"><span class="tagc">Sửa lỗi sai</span><br>${it.q}</p>`:`<p class="prompt">${it.q}</p>`;
  let fbh="";
  if(fb){const right=it.ans?it.ans[0]:it.type==="mcq"?it.o[it.a]:it.chars||"";
    fbh=`<div class="fb ${fb.ok?"ok":"no"}"><b>${fb.ok?"Chính xác!":"Chưa đúng."}</b>${!fb.ok&&it.type!=="mcq"?` Đáp án: <span class="${zh||it.type==="hanzi"?"zh":""}">${it.type==="pinyin"?(it.show||right):right}</span>`:""}${it.why?`<div>${it.why}</div>`:""}${!fb.ok?`<div class="small">Câu này sẽ quay lại cuối phần và được ghi vào sổ lỗi sai.</div>`:""}</div><button class="btn block" data-nextq="1">Câu tiếp</button>`;}
  return q+say+body+fbh;
}
function itemKey(it){return (it.q||"")+"|"+(it.chars||"")+"|"+(it.say||"");}
function answer(ok,val){
  const s=L.steps[L.idx],st=s.st,it=st.items[st.cur];
  const firstTime=st.first[st.cur]===undefined;
  if(firstTime){
    st.first[st.cur]=ok;
    if(!ok&&!s.isMist){const k=L.lang+":"+itemKey(it);S.mist[k]={mode:L.lang,item:Object.assign({},it,{tiles:undefined}),at:Date.now(),fixed:false};save(true);}
    if(it.type==="hanzi"){[...it.chars].forEach(c=>{if(ok){S.hzOk=S.hzOk||{};S.hzOk[c]=1;if(S.hzBad[c])S.hzBad[c]=Math.max(0,S.hzBad[c]-1);}else S.hzBad[c]=(S.hzBad[c]||0)+1;});}
  }
  st.fb={ok,val};if(!ok)st.queue.push(st.cur);
  mood(ok?"happy":"sad");
  rerenderDrill();
}
function nextQ(){
  const s=L.steps[L.idx],st=s.st;st.cur=null;st.fb=null;
  if(st.queue.length===0){
    const total=st.items.length,ok=Object.values(st.first).filter(Boolean).length;
    st.score=ok/total;st.passed=st.score>=PASS;
    if(s.isCheck||s.isReview)applySrs(s);
    if(s.isMist){st.items.forEach((it,i)=>{if(st.first[i]&&S.mist[it.mkey]){S.mist[it.mkey].fixed=true;S.mist[it.mkey].at=Date.now();}});save(true);}
    if(L.kind==="mock"){L.scores=L.scores||{};L.scores[s.name]=Math.round(st.score*100);}
  }
  rerenderDrill();
}
function redo(){const s=L.steps[L.idx],st=s.st;s.st=Object.assign(initStep(s),{plays:st.plays,round:st.round+1});rerenderDrill();}
function rerenderDrill(){const s=L.steps[L.idx],m=document.querySelector("main.step");m.innerHTML=`<div class="stepname">${s.name}</div>${stepHtml(s)}<div class="footer-act"><button class="btn block" id="next" ${stepReady(s)?"":"disabled"}>${L.idx===L.steps.length-2?"Hoàn thành":"Tiếp tục"}</button></div>`;mount(s);}
function applySrs(s){
  const t=today(),st=s.st;
  st.items.forEach((it,i)=>{if(!it.key)return;const ok=st.first[i]===true,cur=S.srs[it.key];
    const box=s.isReview?(ok?Math.min(5,((cur&&cur.box)||1)+1):1):(ok?2:1);
    S.srs[it.key]={box,due:addDays(t,INTERVAL[box]),t:Date.now()};});
  if(s.isCheck)S.checked[L.lang][s.checkDay]=true;
  save();
}

/* ---------- Gắn hành vi ---------- */
let writer=null;
function hwOpts(size,outline){
  const c=getComputedStyle(document.documentElement).getPropertyValue("--blue-strong").trim()||"#4f8fc9";
  return {width:size,height:size,padding:14,showOutline:outline,showCharacter:false,strokeColor:c,drawingColor:c,outlineColor:"rgba(120,150,190,.25)",highlightColor:"#f2a65a",strokeAnimationSpeed:0.9,delayBetweenStrokes:250,showHintAfterMisses:2,drawingWidth:Math.round(size/14)};
}
const boxSize=()=>Math.min(280,window.innerWidth-80);
function mount(s){
  if(s.type==="drill"){
    const st=s.st;
    if(s.head&&s.head.passage&&!st.passed){
      if(!st.tStart)st.tStart=Date.now();
      const lim=s.head.minutes*60000;if(L.timer)clearInterval(L.timer);
      const tick=()=>{const e=document.getElementById("timer");if(!e)return;const left=lim-(Date.now()-st.tStart);if(left<=0){e.textContent="Hết giờ";e.classList.add("over");}else e.textContent=Math.floor(left/60000)+":"+pad(Math.floor(left%60000/1000));};
      tick();L.timer=setInterval(tick,1000);
    }
    const it=st.cur!==null?st.items[st.cur]:null;
    if(it&&it.type==="hanzi"&&!st.fb)startHanzi(it,st);
    const nt=document.getElementById("notes");if(nt)nt.addEventListener("input",()=>{st.notes=nt.value;});
    const inp=document.getElementById("ans");if(inp)inp.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();checkText();}});
  }
  if(s.type==="write"){const wc=document.getElementById("wchk");if(wc)wc.addEventListener("change",()=>{const a=wc.querySelectorAll("input"),n=[...a].filter(x=>x.checked).length;s.st.score=n/a.length;});const ta=document.getElementById("wr");ta.addEventListener("input",()=>{s.st.text=ta.value;const wc=wordCount(ta.value,L.lang);document.getElementById("wcn").textContent=wc;document.getElementById("wr-after").style.display=wc>=s.min?"":"none";refreshNext();});}
  if(s.type==="callig"&&window.HanziWriter)writer=HanziWriter.create(document.getElementById("hwc"),s.char,Object.assign(hwOpts(boxSize(),true),{showCharacter:true}));
  if(s.type==="book")document.getElementById("bk").addEventListener("change",e=>{s.st.ok=e.target.checked;refreshNext();});
  if(s.type==="game")lessonMatch(s);
}
function startHanzi(it,st){
  const el=document.getElementById("hwq"),msg=document.getElementById("hz-msg"),pg=document.getElementById("hzp");
  if(!window.HanziWriter){msg.textContent="Cần mạng để tải nét chữ.";return;}
  const chars=[...it.chars];st.hz=st.hz||{k:0,miss:0};
  const draw=()=>{
    pg.innerHTML=chars.map((c,i)=>`<span class="hzc ${i<st.hz.k?"done":i===st.hz.k?"now":""}">${i<st.hz.k?c:"?"}</span>`).join("");
    const cur=L.steps[L.idx],outline=it.outline!==undefined?it.outline:(L.kind==="lesson"&&!cur.isCheck);
    msg.textContent=outline?"Tô theo chữ mờ, đúng thứ tự nét.":"Tự viết, không có chữ mờ. Sai 2 lần sẽ có gợi ý.";
    el.innerHTML="";writer=HanziWriter.create(el,chars[st.hz.k],hwOpts(boxSize(),outline));
    writer.quiz({onMistake:()=>{st.hz.miss++;msg.textContent="Sai nét, thử lại. Sai 2 lần sẽ có gợi ý.";mood("sad");},
      onComplete:()=>{st.hz.k++;if(st.hz.k<chars.length){msg.textContent="Tốt, chữ tiếp theo.";mood("happy");setTimeout(draw,500);}else answer(st.hz.miss<=chars.length*2,"");}});
  };draw();
}
function checkText(){const s=L.steps[L.idx],it=s.st.items[s.st.cur],v=(document.getElementById("ans").value||"").trim();if(!v){toast("KC nhập câu trả lời trước nhé");return;}answer(isRight(it,v),v);}
function lessonMatch(s){
  const pairs=s.pairs==="vocab"?L.data.vocab.map(v=>[v.w||v.h,v.vi]):s.pairs;
  const tiles=shuffle(pairs.flatMap((p,i)=>[{t:p[0],i,side:0},{t:p[1],i,side:1}]));
  const g=document.getElementById("game"),tm=document.getElementById("gtime");let first=null,start=null,left=pairs.length,tick=null;
  g.innerHTML=tiles.map((t,k)=>`<button class="gt ${t.side===0&&L.lang==="zh"?"zh":""}" data-k="${k}">${t.t}</button>`).join("");
  g.onclick=e=>{const b=e.target.closest(".gt");if(!b||b.classList.contains("ok"))return;
    if(!start){start=Date.now();tick=setInterval(()=>{tm.textContent=((Date.now()-start)/1000).toFixed(1)+" giây";},100);L.timer=tick;}
    const t=tiles[+b.dataset.k];if(!first){first={b,t};b.classList.add("sel");return;}
    if(first.b===b){b.classList.remove("sel");first=null;return;}
    if(first.t.i===t.i&&first.t.side!==t.side){first.b.classList.remove("sel");first.b.classList.add("ok");b.classList.add("ok");left--;mood("happy");
      if(!left){clearInterval(tick);const ms=Date.now()-start,k="t:lesson:"+L.lang+":"+L.day;tm.textContent=(ms/1000).toFixed(1)+" giây";if(!S.best[k]||ms<S.best[k]){S.best[k]=ms;save();toast("Kỷ lục mới!");}s.st.done=true;refreshNext();}}
    else{const a=first.b;b.classList.add("bad");a.classList.add("bad");mood("sad");setTimeout(()=>{a.classList.remove("bad","sel");b.classList.remove("bad");},400);}
    first=null;};
}

/* ---------- Ghi âm ---------- */
async function toggleRec(qi,btn){
  if(L.rec&&L.rec.state==="recording"){L.rec.stop();return;}
  if(!navigator.mediaDevices||!window.MediaRecorder){toast("Thiết bị chưa hỗ trợ ghi âm trên trình duyệt");return;}
  try{const stream=await navigator.mediaDevices.getUserMedia({audio:true});const rec=new MediaRecorder(stream),chunks=[];
    rec.ondataavailable=e=>chunks.push(e.data);
    rec.onstop=()=>{stream.getTracks().forEach(t=>t.stop());const au=document.getElementById("au-"+qi);if(au){au.src=URL.createObjectURL(new Blob(chunks,{type:rec.mimeType||"audio/mp4"}));au.style.display="block";}btn.classList.remove("live");btn.querySelector("span").textContent="Ghi âm lại";L.recs=(L.recs||0)+1;const sst=L.steps[L.idx];if(sst.type==="shadow"){sst.st.rec[qi]=1;btn.classList.add("done");}};
    rec.start();L.rec=rec;btn.classList.add("live");btn.querySelector("span").textContent="Dừng ghi âm";
  }catch(e){toast("KC cho phép dùng micro để ghi âm nhé");}
}

/* ---------- Hoàn thành ---------- */
function skillOf(name){name=name.toLowerCase();if(name.includes("nghe"))return "listening";if(name.includes("đọc"))return "reading";if(name.includes("viết chữ")||name.includes("pinyin"))return "hanzi";if(name.includes("viết"))return "writing";if(name.includes("nói"))return "speaking";if(name.includes("từ vựng"))return "vocab";if(name.includes("ngữ pháp")||name.includes("mẫu câu"))return "grammar";return "other";}
function finish(){
  if(L.finished)return;L.finished=true;
  const drills=L.steps.filter(x=>x.st&&x.st.score!==null&&x.st.score!==undefined&&x.type!=="finish");
  let avg=drills.length?Math.round(drills.reduce((a,b)=>a+b.st.score,0)/drills.length*100):100;
  const sp=L.steps.find(x=>x.type==="speak");if(L.kind==="practice"&&sp&&!drills.length)avg=Math.min(100,Math.round((L.recs||0)/sp.items.length*100));
  if(L.kind==="lesson"&&L.mode==="normal"&&!S.done[L.lang][L.day]){
    S.done[L.lang][L.day]=today();S.score[L.lang+":"+L.day]=avg;
    drills.forEach(d=>S.log.push({at:Date.now()+Math.random(),date:today(),mode:L.lang,kind:"skill",skill:skillOf(d.name),score:Math.round(d.st.score*100),xp:0}));
    logAct(L.lang,"lesson","lesson",avg,50+Math.round(avg/2));
    const s=streakOf(L.lang);setTimeout(()=>celebrate(`🔥 Chuỗi ${s.cur} ngày`,`Xong bài ngày ${L.day} · điểm trung bình ${avg}%`,MODES[L.lang].mascot),300);
  }
  if(L.kind==="practice"&&L.pid==="shadow"){const sst=L.steps[0];L.avg=Math.round(Object.keys(sst.st.rec).length/sst.items.length*100);logAct(L.lang,"practice","speaking",L.avg,Math.round(L.avg/10)*2+5);return;}
  if(L.kind==="practice"){L.avg=avg;logAct(L.lang,"practice",L.skill||"other",avg,Math.round(avg/10)*2+5);}
  if(L.kind==="mock"){S.mock[L.mock.id]=(S.mock[L.mock.id]||[]).concat([{at:Date.now(),date:today(),scores:L.scores||{}}]);const v=Object.values(L.scores||{});logAct(L.lang,"mock","mock",v.length?v.reduce((a,b)=>a+b,0)/v.length:0,40);}
}
function finishHtml(){
  const Md=MODES[L.lang];
  if(L.kind==="practice")return `<div class="done-hero">${mascot(Md.mascot,L.avg>=80?"jump":"idle")}<div class="big">${L.avg}%</div><h2>${L.title}</h2><p class="small">${L.avg>=80?"Xuất sắc!":L.avg>=50?"Khá lắm, luyện thêm lần nữa nhé.":"Phần này đã vào danh sách cần làm lại."} +${Math.round(L.avg/10)*2+5} điểm</p></div><a class="btn block" href="#/${L.lang}/practice">Về Luyện tập</a><a class="btn ghost block" href="#/${L.lang}" style="margin-top:10px">Về trang chủ ${Md.name}</a>`;
  if(L.kind==="mock"){const sc=L.scores||{};return `<div class="done-hero">${mascot(Md.mascot,"jump")}<h2>${L.mock.title}</h2></div><div class="card">${Object.entries(sc).map(([k,v])=>`<div class="srow"><span>${k}</span><b>${v}%</b></div>`).join("")||'<p class="small">Không có phần chấm tự động.</p>'}<p class="small">Phần Viết và Nói: bấm sao chép bài viết gửi Claude để được chấm theo tiêu chí IELTS.</p></div><a class="btn block" href="#/${L.lang}/practice" style="margin-top:12px">Về Luyện tập</a>`;}
  const s=streakOf(L.lang),o=L.lang==="en"?"zh":"en",os=status(o),sc=S.score[L.lang+":"+L.day];
  return `<div class="done-hero">${mascot(Md.mascot,"jump")}<div class="big">🔥 ${s.cur}</div><h2>${L.mode==="normal"?"Xong ngày "+L.day+"!":"Đã xem lại ngày "+L.day}</h2>${sc!==undefined?`<p>Điểm trung bình các phần: <b>${sc}%</b></p>`:""}<p class="small">Từ mới hôm nay sẽ được kiểm tra ở đầu buổi học ngày mai.</p></div>
    ${L.mode==="normal"&&os.state==="open"?`<a class="btn block" href="#/${o}/learn">Học tiếp ${MODES[o].vn}</a>`:""}<a class="btn ghost block" href="#/${L.lang}" style="margin-top:10px">Về trang chủ ${Md.name}</a>`;
}

/* ---------- Game ---------- */
const GAMES={
  en:[{id:"flip",ic:"🃏",t:"Lật thẻ",d:"Lật hai thẻ trùng cặp từ và nghĩa",c:"#5b9bd5"},{id:"rain",ic:"🌧️",t:"Mưa từ",d:"Chạm nghĩa đúng trước khi từ chạm đáy",c:"#6cc3b0"},{id:"stress",ic:"🎯",t:"Trọng âm",d:"Chạm âm tiết được nhấn",c:"#e9a24a"},{id:"link",ic:"🔗",t:"Nối từ",d:"Nối từ với nghĩa hoặc phiên âm",c:"#8573cf"}],
  zh:[{id:"flip",ic:"🃏",t:"Lật thẻ",d:"Lật hai thẻ trùng cặp chữ và nghĩa",c:"#8573cf"},{id:"rain",ic:"🌧️",t:"Mưa chữ",d:"Chạm nghĩa đúng trước khi chữ chạm đáy",c:"#6cc3b0"},{id:"tone",ic:"🎵",t:"Thanh điệu",d:"Nghe và chọn đúng thanh",c:"#e9a24a"},{id:"link",ic:"🔗",t:"Nối từ",d:"Nối chữ Hán với nghĩa hoặc pinyin",c:"#5b9bd5"}]
};
function bestTxt(m,id){const t=S.best["t:"+m+":"+id],sc=S.best["s:"+m+":"+id];return t?`Kỷ lục ${(t/1000).toFixed(1)} giây`:sc!==undefined?`Điểm cao ${sc}`:"Chưa chơi";}
function renderGames(m){
  app.innerHTML=`<div class="wrap">${modeHeader(m,"Game")}<div class="greet">${mascot(MODES[m].mascot,"wave")}<div class="bubble">Chơi cho vui thôi KC, mỗi ván cộng 5 điểm!</div></div>
  <div class="ggrid">${GAMES[m].map(g=>`<a class="gcard" href="#/${m}/play/${g.id}" style="--gc:${g.c}"><span class="gi">${g.ic}</span><b>${g.t}</b><span class="gd">${g.d}</span><span class="gb">${bestTxt(m,g.id)}</span></a>`).join("")}</div></div>`;
}
function gameShell(m,g,inner){
  tabbar.style.display="none";document.body.classList.add("lesson-mode");
  app.innerHTML=`<div class="topbar"><div class="wrap row"><a class="back" href="#/${m}/game">${I_BACK}</a><b style="flex:1">${g.ic} ${g.t}</b><span class="step-label" id="gstat"></span><div class="mini-m" id="mm">${M[MODES[m].mascot]||""}</div></div></div><main class="wrap" id="gmain">${inner}</main>`;
}
function gameOver(m,id,{ms,score,label}){
  logAct(m,"game","game",100,5);
  let rec=false;
  if(ms!==undefined){const k="t:"+m+":"+id;if(!S.best[k]||ms<S.best[k]){S.best[k]=ms;rec=true;}}
  if(score!==undefined){const k="s:"+m+":"+id;if(S.best[k]===undefined||score>S.best[k]){S.best[k]=score;rec=true;}}
  save();
  document.getElementById("gmain").innerHTML=`<div class="done-hero">${mascot(MODES[m].mascot,"jump")}<div class="big">${label}</div><h2>${rec?"Kỷ lục mới!":"Hoàn thành!"}</h2><p class="small">${bestTxt(m,id)} · +5 điểm</p></div><button class="btn block" data-replay="${id}">Chơi lại</button><a class="btn ghost block" href="#/${m}/game" style="margin-top:10px">Chọn game khác</a>`;
}
function openGame(m,id){
  const g=GAMES[m].find(x=>x.id===id);if(!g){location.hash="#/"+m+"/game";return;}
  G={m,id,stop:null};
  const pool=gamePool(m),zh=m==="zh",tts=MODES[m].tts;
  if(id==="flip"){
    const pairs=pick(pool,6),cards=shuffle(pairs.flatMap((p,i)=>[{t:p.a,i,s:0},{t:p.b,i,s:1}]));
    gameShell(m,g,`<p class="small">Lật hai thẻ: một ${zh?"chữ Hán":"từ tiếng Anh"} và nghĩa của nó.</p><div class="flip">${cards.map((c,k)=>`<button class="fc" data-k="${k}"><span class="fb">?</span><span class="ff ${c.s===0&&zh?"zh":""}">${c.t}</span></button>`).join("")}</div>`);
    let open=[],left=6,start=Date.now(),moves=0,lock=false;const stat=document.getElementById("gstat");
    const t=setInterval(()=>{stat.textContent=((Date.now()-start)/1000).toFixed(0)+" giây · "+moves+" lượt";},300);G.stop=()=>clearInterval(t);
    document.querySelector(".flip").onclick=e=>{const b=e.target.closest(".fc");if(!b||lock||b.classList.contains("open"))return;b.classList.add("open");open.push(b);
      const c=cards[+b.dataset.k];if(c.s===0)speak(c.t,tts);
      if(open.length===2){moves++;const [x,y]=open.map(o=>cards[+o.dataset.k]);
        if(x.i===y.i&&x.s!==y.s){open.forEach(o=>o.classList.add("ok"));open=[];left--;mood("happy");if(!left){clearInterval(t);setTimeout(()=>gameOver(m,id,{ms:Date.now()-start,label:((Date.now()-start)/1000).toFixed(1)+" giây"}),500);}}
        else{lock=true;mood("sad");setTimeout(()=>{open.forEach(o=>o.classList.remove("open"));open=[];lock=false;},800);}}};
  }
  if(id==="rain"){
    gameShell(m,g,`<div class="rain" id="rain"><div class="drop ${zh?"zh":""}" id="drop"></div></div><div class="ropts" id="ropts"></div>`);
    let score=0,hearts=3,speed=0.18,y=0,cur=null,raf=null,last=0;const drop=document.getElementById("drop"),area=document.getElementById("rain"),opts=document.getElementById("ropts"),stat=document.getElementById("gstat");
    const upd=()=>{stat.textContent="❤️".repeat(hearts)+" · "+score+" điểm";};
    const next=()=>{cur=pick(pool,1)[0];y=0;drop.textContent=cur.a;drop.style.left=(10+Math.random()*50)+"%";const o=shuffle([cur].concat(pick(pool.filter(x=>x.a!==cur.a),3)));opts.innerHTML=o.map(x=>`<button class="ro" data-a="${esc(x.a)}">${x.b}</button>`).join("");upd();};
    const lose=()=>{hearts--;mood("sad");area.classList.add("hit");setTimeout(()=>area.classList.remove("hit"),300);if(hearts<=0){cancelAnimationFrame(raf);gameOver(m,id,{score,label:score+" điểm"});return false;}next();return true;};
    const loop=ts=>{if(!last)last=ts;const dt=ts-last;last=ts;y+=speed*dt/16;drop.style.top=y+"px";if(y>area.clientHeight-40){if(!lose())return;}raf=requestAnimationFrame(loop);};
    opts.onclick=e=>{const b=e.target.closest(".ro");if(!b)return;if(b.dataset.a===cur.a){score++;speed+=0.03;mood("happy");if(zh)speak(cur.a,tts);next();}else lose();};
    G.stop=()=>cancelAnimationFrame(raf);next();raf=requestAnimationFrame(loop);
  }
  if(id==="stress"||id==="tone"){
    const rounds=pick(id==="stress"?window.EN_STRESS:window.ZH_TONES,10);let r=0,score=0;
    gameShell(m,g,`<div class="card q" id="sq"></div>`);
    const stat=document.getElementById("gstat"),box=document.getElementById("sq");
    const show=()=>{stat.textContent=`${r+1}/10 · ${score} đúng`;const x=rounds[r];
      if(id==="stress"){box.innerHTML=`<p class="prompt">Âm tiết nào được nhấn?</p><div class="sayrow">${sayBtn(x.w,tts,false,"Nghe")}</div><div class="syls">${x.syl.map((s,i)=>`<button class="syl" data-i="${i}">${s}</button>`).join("")}</div><div id="sfb"></div>`;speak(x.w,tts);}
      else{box.innerHTML=`<p class="prompt">Nghe và chọn thanh điệu</p><div class="sayrow">${sayBtn(x.h,tts,false,"Nghe")}</div><div class="tonebtn">${["ā Thanh 1","á Thanh 2","ǎ Thanh 3","à Thanh 4"].map((t,i)=>`<button class="syl" data-i="${i+1}">${t}</button>`).join("")}</div><div id="sfb"></div>`;speak(x.h,tts);}};
    box.onclick=e=>{const b=e.target.closest(".syl");if(!b||box.dataset.lock)return;const x=rounds[r],v=+b.dataset.i,ok=id==="stress"?v===x.s:v===x.t;
      if(ok){score++;mood("happy");}else mood("sad");
      box.dataset.lock=1;box.querySelectorAll(".syl").forEach(s=>{const i=+s.dataset.i;if(id==="stress"?i===x.s:i===x.t)s.classList.add("right");else if(s===b)s.classList.add("wrong");});
      document.getElementById("sfb").innerHTML=`<p class="small" style="text-align:center">${id==="stress"?x.syl.map((s,i)=>i===x.s?`<b>${s.toUpperCase()}</b>`:s).join(" · "):`<span class="zh" style="font-size:28px">${x.h}</span> ${x.py}`}</p>`;
      setTimeout(()=>{delete box.dataset.lock;r++;if(r<10)show();else gameOver(m,id,{score,label:score+"/10"});},1100);};
    show();
  }
  if(id==="link"){
    let modeK="b";
    const build=()=>{
      const pairs=pick(pool,5),L1=shuffle(pairs),R1=shuffle(pairs);
      gameShell(m,g,`<div class="seg"><button class="${modeK==="b"?"on":""}" data-lk="b">Nghĩa</button><button class="${modeK==="p"?"on":""}" data-lk="p">${zh?"Pinyin":"Phiên âm"}</button></div><div class="link" id="link"><svg id="lsvg"></svg><div class="lc">${L1.map(p=>`<button class="lt ${zh?"zh":""}" data-a="${esc(p.a)}" data-side="0">${p.a}</button>`).join("")}</div><div class="lc">${R1.map(p=>`<button class="lt" data-a="${esc(p.a)}" data-side="1">${p[modeK]}</button>`).join("")}</div></div>`);
      const area=document.getElementById("link"),svg=document.getElementById("lsvg"),stat=document.getElementById("gstat");let sel=null,left=5,start=Date.now();
      const t=setInterval(()=>{stat.textContent=((Date.now()-start)/1000).toFixed(0)+" giây";},300);G.stop=()=>clearInterval(t);
      area.onclick=e=>{const b=e.target.closest(".lt");if(!b||b.classList.contains("ok"))return;
        if(!sel||sel.dataset.side===b.dataset.side){if(sel)sel.classList.remove("sel");sel=b;b.classList.add("sel");if(b.dataset.side==="0")speak(b.dataset.a,tts);return;}
        if(sel.dataset.a===b.dataset.a){const ar=area.getBoundingClientRect(),a=sel.getBoundingClientRect(),c=b.getBoundingClientRect();const l=a.left<c.left?[a,c]:[c,a];
          svg.insertAdjacentHTML("beforeend",`<line x1="${l[0].right-ar.left}" y1="${l[0].top+l[0].height/2-ar.top}" x2="${l[1].left-ar.left}" y2="${l[1].top+l[1].height/2-ar.top}"/>`);
          sel.classList.remove("sel");sel.classList.add("ok");b.classList.add("ok");sel=null;left--;mood("happy");
          if(!left){clearInterval(t);setTimeout(()=>gameOver(m,id,{ms:Date.now()-start,label:((Date.now()-start)/1000).toFixed(1)+" giây"}),600);}}
        else{const a=sel;a.classList.add("bad");b.classList.add("bad");mood("sad");setTimeout(()=>{a.classList.remove("bad","sel");b.classList.remove("bad");},400);sel=null;}};
      document.querySelectorAll("[data-lk]").forEach(x=>x.onclick=()=>{modeK=x.dataset.lk;clearInterval(t);build();});
    };
    build();
  }
}

/* ---------- Chấm nhanh bài viết ---------- */
function quickCheck(s,text){
  const out=[],t=text.trim();if(!t)return `<div class="fb no">KC viết vài câu rồi bấm chấm nhé.</div>`;
  const sents=t.split(/(?<=[.!?])\s+/).filter(Boolean),words=t.split(/\s+/).length;
  const good=(ok,msg)=>out.push(`<li class="${ok?"g":"w"}">${ok?"✅":"⚠️"} ${msg}</li>`);
  good(words>=s.min,`Độ dài: ${words}/${s.min} từ`);
  const lowStart=sents.filter(x=>/^[a-z]/.test(x)).length;good(!lowStart,lowStart?`${lowStart} câu chưa viết hoa chữ cái đầu`:"Các câu đều viết hoa chữ cái đầu");
  good(/[.!?]$/.test(t),/[.!?]$/.test(t)?"Có dấu chấm kết câu":"Câu cuối chưa có dấu chấm");
  if(s.table){const nums=new Set(s.table.rows.flat().filter(x=>/^\d/.test(x)));const used=[...nums].filter(n=>t.includes(n));good(used.length>=2,`Dùng ${used.length} số liệu trong bảng${used.length<2?", nên đưa ít nhất 2 con số":""}`);}
  if(s.bank&&s.bank.length){const used=s.bank.filter(b=>t.toLowerCase().includes(b[0].split(" / ")[0].replace(/\.\.\./g,"").trim().toLowerCase())).length;good(used>=2,`Dùng ${used} từ trong kho gợi ý${used<2?", thử dùng thêm":""}`);}
  (s.need||[]).forEach(([re,msg])=>good(new RegExp(re,"i").test(t),msg));
  const errs=[[/\bsince\s+\d+\s+(years?|months?|weeks?|days?)\b/i,"since đi với mốc thời gian; khoảng thời gian dùng for"],[/\b[A-Z]\s+city\b/,"Viết City X, không viết X city"],[/(^|[.!?]\s+|\s)i\s/,"Đại từ I luôn viết hoa"],[/\bmore\s+(better|bigger|higher|lower|faster)\b/i,"Không dùng more trước so sánh hơn có đuôi er"],[/\b(is|are|was|were)\s+increase\b/i,"Sau to be cần increasing hoặc increased"],[/\bhave\s+went\b/i,"have went sai, đúng là have gone"],[/\b(people|visits)\s+has\b/i,"Chủ ngữ số nhiều đi với have"],[/\b(I|you|we|they)\s+(busy|happy|tired|friendly|a|an)\b/i,"Thiếu am hoặc are trước tính từ, danh từ"],[/\b(he|she|it)\s+(go|have|work|start|finish|like|live)\b/i,"He, She, It: động từ cần thêm s hoặc es"],[/\b(doesn't|don't|didn't)\s+\w+(s|ed)\b(?<!\bdoes)/i,"Sau don't, doesn't, didn't dùng động từ nguyên mẫu"],[/\b(he|she|it)\s+are\b/i,"He, She, It đi với is"]];
  errs.forEach(([re,msg])=>{if(re.test(t))out.push(`<li class="w">⚠️ ${msg}</li>`);});
  const warn=out.filter(x=>x.includes("⚠️")).length;
  return `<div class="card qc"><b>${warn?`Có ${warn} điểm cần xem lại`:"Bài ổn rồi! 🎉"}</b><ul>${out.join("")}</ul><p class="small">Chấm nhanh chỉ bắt các lỗi phổ biến. Muốn sửa kỹ từng câu, bấm gửi Claude.</p></div>`;
}

/* ---------- Xé câu ---------- */
function xsTokens(sent){const toks=[],gold=[];sent.c.forEach(([txt,lab])=>{const w=txt.split(" ").filter(Boolean),st=toks.length;w.forEach(x=>toks.push(x));gold.push([st,toks.length-1,lab]);});return {toks,gold};}
function xsChunks(n,cuts){const out=[];let st=0;for(let k=0;k<n;k++){if(cuts[k]||k===n-1){out.push([st,k]);st=k+1;}}return out;}
function labIdx(m,l){return (window.XECAU_LABELS[m]||[]).findIndex(x=>x[0]===l);}
function xecauHtml(s){
  const st=s.st,d=s.data,m=L.lang,zh=m==="zh",labs=window.XECAU_LABELS[m];
  if(st.done)return `<div class="card result ok">${mascot(MODES[m].mascot,st.score>=0.8?"jump":"idle")}<div class="big">${Math.round(st.score*100)}%</div><p>Đã xé xong ${d.sents.length} câu.</p></div>`;
  const sent=d.sents[st.i],{toks,gold}=xsTokens(sent),chunks=xsChunks(toks.length,st.cuts);
  const pal=`<div class="xpal">${labs.map((l,i)=>`<button class="xl L${i} ${st.sel===l[0]?"on":""}" data-xl="${l[0]}"><b>${l[0]}</b> ${l[1]}</button>`).join("")}</div>`;
  let line="";
  chunks.forEach(([a,b],ci)=>{const lab=st.lab[a],li=lab?labIdx(m,lab):-1;
    line+=`<span class="xc ${li>=0?"L"+li:""}" data-xs="${a}">${lab?`<i class="xt">${lab}</i>`:""}`;
    for(let k=a;k<=b;k++){line+=`<span class="xw ${zh?"zh":""}">${toks[k]}</span>`;if(k<b)line+=`<button class="xg" data-xg="${k}" ${st.checked?"disabled":""}></button>`;}
    line+=`</span>`;if(b<toks.length-1)line+=`<button class="xg cut" data-xg="${b}" ${st.checked?"disabled":""}></button>`;});
  let res="";
  if(st.checked){const user=chunks.map(([a,b])=>[a,b,st.lab[a]]),ok=gold.filter(g=>user.some(u=>u[0]===g[0]&&u[1]===g[1]&&u[2]===g[2])).length;
    res=`<div class="fb ${ok===gold.length?"ok":"no"}"><b>Đúng ${ok}/${gold.length} cụm</b></div><div class="sec">Đáp án</div><div class="xline ans">${gold.map(([a,b,l])=>`<span class="xc L${labIdx(m,l)}"><i class="xt">${l}</i>${toks.slice(a,b+1).map(w=>`<span class="xw ${zh?"zh":""}">${w}</span>`).join(zh?"":" ")}</span>`).join(" ")}</div>
      ${sent.py?`<p class="py">${sent.py}</p>`:""}<p class="vi-tr">${sent.vi}</p>${sayBtn(sent.c.map(c=>c[0]).join(zh?"":" ").replace(/ /g,zh?"":" "),MODES[m].tts,false,"Nghe câu")}
      <button class="btn block" data-xnext="1" style="margin-top:12px">${st.i<d.sents.length-1?"Câu tiếp":"Xong phần xé câu"}</button>`;}
  return `<details class="card legend" ${st.i===0&&!st.checked?"open":""}><summary>Cách xé câu</summary><p class="small">${d.steps}</p><p class="small">Chạm vào khe giữa hai từ để <b>cắt cụm</b> (chạm lại để bỏ). Chọn nhãn màu rồi chạm vào cụm để <b>gắn nhãn</b>.</p></details>
    <div class="dprog"><span>Câu ${st.i+1}/${d.sents.length}</span><span>${st.scores.length?Math.round(st.scores.reduce((a,b)=>a+b,0)/st.scores.length*100)+"% đúng":""}</span></div>
    ${st.checked?"":pal}<div class="card"><div class="xline">${line}</div></div>
    ${st.checked?res:`<button class="btn block" data-xcheck="1">Kiểm tra câu</button>`}`;
}
function svoHtml(s){
  const st=s.st,m=L.lang,zh=m==="zh",labs=window.SVO_LABELS[m];
  if(st.done)return `<div class="card result ok">${mascot(MODES[m].mascot,st.score>=0.8?"jump":"idle")}<div class="big">${Math.round(st.score*100)}%</div><p>Hoàn thành ${s.items.length} câu dịch.</p></div>`;
  const it=s.items[st.i];
  const chunkBtns=it.c.map(([t,l],ci)=>{const u=st.lab[ci],li=u?labs.findIndex(x=>x[0]===u):-1,ok=st.phase>1;const right=labs.findIndex(x=>x[0]===l);
    return `<button class="xc svc ${ok?"L"+right:li>=0?"L"+li:""}" data-svc="${ci}" ${ok?"disabled":""}>${ok||u?`<i class="xt">${ok?l:u}</i>`:""}${t}${ok&&u!==l?` <s class="small">${u||"?"}</s>`:""}</button>`;}).join("");
  let p2="";
  if(st.phase===1)p2=`<div class="xpal">${labs.map((l,i)=>`<button class="xl L${i} ${st.sel===l[0]?"on":""}" data-xl="${l[0]}"><b>${l[0]}</b> ${l[1]}</button>`).join("")}</div><button class="btn block" data-svcheck="1">Kiểm tra S, V, O</button>`;
  else if(!zh){p2=`<div class="fb ${st.labScore===1?"ok":"no"}"><b>Nhãn đúng ${Math.round(st.labScore*100)}%</b></div><div class="sec">Bước 2: dịch sang tiếng Anh</div><textarea class="field area" id="svt" style="min-height:90px" placeholder="Viết câu tiếng Anh, giữ đúng thứ tự S, V, O">${esc(st.text||"")}</textarea>
      ${st.shown?`<div class="sec">Bản mẫu</div>${it.model.map(x=>`<div class="ex-item"><div class="txt en">${x}</div>${sayBtn(x,"en-GB",true)}</div>`).join("")}<div class="bookref">Nâng cấp từ vựng: ${it.up}</div><p class="small">Tự chấm bản dịch của KC:</p><div class="two3"><button class="btn good" data-svr="1">Đúng ý</button><button class="btn ghost" data-svr="0.5">Gần đúng</button><button class="btn bad" data-svr="0">Chưa đúng</button></div>`:`<button class="btn block" data-svshow="1">Xem bản mẫu</button>`}`;}
  else{if(!st.tiles)st.tiles=shuffle(it.tiles.map((w,i)=>({w,i})));const used=new Set(st.osel);
    p2=`<div class="fb ${st.labScore===1?"ok":"no"}"><b>Nhãn đúng ${Math.round(st.labScore*100)}%</b></div><div class="sec">Bước 2: xếp câu tiếng Trung</div>
      <div class="order-ans">${st.osel.map((ti,k)=>`<button class="tile on zh" data-svu="${k}" ${st.ochk?"disabled":""}>${st.tiles[ti].w}</button>`).join("")||'<span class="small">Chạm các ô theo đúng trật tự tiếng Trung</span>'}</div>
      <div class="tiles">${st.tiles.map((t,ti)=>used.has(ti)?"":`<button class="tile zh" data-svs="${ti}">${t.w}</button>`).join("")}</div>
      ${st.ochk?`<div class="fb ${st.ook?"ok":"no"}"><b>${st.ook?"Chính xác!":"Chưa đúng."}</b> <span class="zh">${it.ans[0]}</span><div>${it.vi}</div></div>${sayBtn(it.ans[0],"zh-CN",false,"Nghe")}<button class="btn block" data-svnext="1" style="margin-top:10px">Câu tiếp</button>`:`<button class="btn block" data-svocheck="1" ${st.osel.length===st.tiles.length?"":"disabled"}>Kiểm tra</button>`}`;}
  return `${st.i===0&&s.note?s.note:""}<div class="dprog"><span>Câu ${st.i+1}/${s.items.length}</span></div><p class="lead">Bước 1: chọn nhãn rồi chạm vào từng cụm tiếng Việt để xác định ${zh?"chủ ngữ, thời gian, nơi chốn, động từ, tân ngữ":"chủ ngữ, động từ, tân ngữ, trạng ngữ"}.</p><div class="card"><div class="xline">${chunkBtns}</div></div>${p2}`;
}
function handleXS(e){
  const s=L.steps[L.idx];if(!s||(s.type!=="xecau"&&s.type!=="svo"))return false;const st=s.st;
  const xl=e.target.closest("[data-xl]");if(xl){st.sel=xl.dataset.xl;rerenderDrill();return true;}
  if(s.type==="xecau"){
    const g=e.target.closest("[data-xg]");if(g&&!st.checked){const k=+g.dataset.xg;st.cuts[k]=!st.cuts[k];
      const sent=s.data.sents[st.i],{toks}=xsTokens(sent),ch=xsChunks(toks.length,st.cuts),starts=new Set(ch.map(c=>c[0]));Object.keys(st.lab).forEach(a=>{if(!starts.has(+a))delete st.lab[a];});rerenderDrill();return true;}
    const c=e.target.closest("[data-xs]");if(c&&!st.checked){if(!st.sel){toast("Chọn nhãn trước rồi chạm vào cụm");return true;}st.lab[c.dataset.xs]=st.sel;rerenderDrill();return true;}
    if(e.target.closest("[data-xcheck]")){const sent=s.data.sents[st.i],{toks,gold}=xsTokens(sent),ch=xsChunks(toks.length,st.cuts),user=ch.map(([a,b])=>[a,b,st.lab[a]]);
      const ok=gold.filter(g=>user.some(u=>u[0]===g[0]&&u[1]===g[1]&&u[2]===g[2])).length;st.scores.push(ok/gold.length);st.checked=true;mood(ok===gold.length?"happy":"sad");rerenderDrill();return true;}
    if(e.target.closest("[data-xnext]")){st.i++;st.cuts={};st.lab={};st.checked=false;if(st.i>=s.data.sents.length){st.done=true;st.score=st.scores.reduce((a,b)=>a+b,0)/st.scores.length;}rerenderDrill();window.scrollTo(0,0);return true;}
  }
  if(s.type==="svo"){
    const it=s.items[st.i];
    const c=e.target.closest("[data-svc]");if(c){if(!st.sel){toast("Chọn nhãn trước rồi chạm vào cụm");return true;}st.lab[c.dataset.svc]=st.sel;rerenderDrill();return true;}
    if(e.target.closest("[data-svcheck]")){const ok=it.c.filter(([t,l],ci)=>st.lab[ci]===l).length;st.labScore=ok/it.c.length;st.phase=2;mood(st.labScore===1?"happy":"sad");rerenderDrill();return true;}
    if(e.target.closest("[data-svshow]")){const t=document.getElementById("svt");st.text=t?t.value:"";if(!st.text.trim()){toast("KC dịch thử trước rồi mới xem bản mẫu nhé");return true;}st.shown=true;rerenderDrill();return true;}
    const r=e.target.closest("[data-svr]");if(r){st.scores.push(0.4*st.labScore+0.6*(+r.dataset.svr));svoNext(s);return true;}
    const ss=e.target.closest("[data-svs]");if(ss){st.osel.push(+ss.dataset.svs);rerenderDrill();return true;}
    const su=e.target.closest("[data-svu]");if(su){st.osel.splice(+su.dataset.svu,1);rerenderDrill();return true;}
    if(e.target.closest("[data-svocheck]")){const v=st.osel.map(ti=>st.tiles[ti].w).join("");st.ook=it.ans.includes(v);st.ochk=true;mood(st.ook?"happy":"sad");rerenderDrill();return true;}
    if(e.target.closest("[data-svnext]")){st.scores.push(0.4*st.labScore+0.6*(st.ook?1:0));svoNext(s);return true;}
  }
  return false;
}
function svoNext(s){const st=s.st;st.i++;Object.assign(st,{lab:{},sel:null,phase:1,labScore:0,shown:false,text:"",osel:[],tiles:null,ochk:false,ook:false});
  if(st.i>=s.items.length){st.done=true;st.score=st.scores.reduce((a,b)=>a+b,0)/st.scores.length;}rerenderDrill();window.scrollTo(0,0);}

/* ---------- Phản xạ ngữ pháp 60 giây ---------- */
function openReflex(m,p){
  drawTabbar(null);tabbar.style.display="none";document.body.classList.add("lesson-mode");
  const pool=window.EN_PHANXA.filter(x=>Math.abs((x.lv||3)-(P.lv.en||3))<=1);
  const best=S.best["s:en:phanxa"];
  app.innerHTML=`<div class="topbar"><div class="wrap row"><a class="back" href="#/en/practice">${I_BACK}</a><b style="flex:1">⚡ Phản xạ 60 giây</b><span class="step-label" id="rx">60 giây</span><div class="mini-m" id="mm">${M.tem||""}</div></div></div>
  <main class="wrap" id="rxm"><div class="done-hero">${mascot("tem","wave")}<h2>Sẵn sàng chưa?</h2><p class="small">Cấp ${lvName("en",P.lv.en)} · ${pool.length} câu · Chọn đáp án đúng nhanh nhất có thể trong 60 giây.${best!==undefined?` Kỷ lục: ${best} câu đúng.`:""}</p></div><button class="btn block" id="rxgo">Bắt đầu</button></main>`;
  document.getElementById("rxgo").onclick=()=>{
    let q=shuffle(pool),k=0,ok=0,n=0,end=Date.now()+60000;const box=document.getElementById("rxm"),lab=document.getElementById("rx");
    const show=()=>{if(k>=q.length){q=shuffle(pool);k=0;}const it=shuffleMcq(q[k]);box.innerHTML=`<div class="card q rxq"><p class="prompt">${it.q}</p><div class="opts">${it.o.map((o,i)=>`<button class="opt" data-rx="${i}" data-a="${it.a}">${o}</button>`).join("")}</div></div><p class="small" style="text-align:center">${ok} đúng / ${n} câu</p>`;};
    const t=setInterval(()=>{const left=Math.max(0,Math.ceil((end-Date.now())/1000));lab.textContent=left+" giây";if(left<=0){clearInterval(t);fin();}},200);
    G={stop:()=>clearInterval(t)};
    box.onclick=e=>{const b=e.target.closest("[data-rx]");if(!b||box.dataset.lock)return;n++;const good=b.dataset.rx===b.dataset.a;if(good){ok++;mood("happy");}else mood("sad");
      b.classList.add(good?"right":"wrong");if(!good)box.querySelector(`[data-rx="${b.dataset.a}"]`).classList.add("right");box.dataset.lock=1;setTimeout(()=>{delete box.dataset.lock;k++;show();},good?250:900);};
    const fin=()=>{const pct=n?Math.round(ok/n*100):0;let rec=false;if(S.best["s:en:phanxa"]===undefined||ok>S.best["s:en:phanxa"]){S.best["s:en:phanxa"]=ok;rec=true;}
      logAct("en","practice","grammar",pct,ok*2+5);G=null;
      box.innerHTML=`<div class="done-hero">${mascot("tem","jump")}<div class="big">${ok} câu</div><h2>${rec?"Kỷ lục mới!":"Hết giờ!"}</h2><p class="small">Đúng ${ok}/${n} câu (${pct}%) · +${ok*2+5} điểm</p></div><button class="btn block" data-rxagain="1">Chơi lại</button><a class="btn ghost block" href="#/en/practice" style="margin-top:10px">Về Luyện tập</a>`;};
    show();
  };
}

/* ---------- Hồ sơ ---------- */
function renderProfiles(sub){
  if(sub==="new"){
    let tl={};try{tl=JSON.parse(localStorage.getItem("kc-world-testlv"))||{};}catch(e){}
    app.innerHTML=`<div class="wrap"><div class="mhead"><a class="back" href="#/profiles">${I_BACK}</a><div class="mtitle">Thêm người học</div><span></span></div>
    <div class="card"><label class="flab">Tên hiển thị</label><input class="field" id="pn" placeholder="Ví dụ: Lan" maxlength="20">
    <label class="flab">Mã ID (chữ và số, không dấu)</label><input class="field" id="pid" placeholder="Ví dụ: LAN01" maxlength="12" style="text-transform:uppercase">
    <label class="flab">Mã PIN 4 số (để trống nếu không cần)</label><input class="field" id="ppin" inputmode="numeric" maxlength="4" placeholder="••••">
    <label class="flab">Cấp độ tiếng Anh</label><select class="field" id="plen">${LEVELS.en.map((t,i)=>`<option value="${i+1}" ${(tl.en||2)===i+1?"selected":""}>Band ${t}</option>`).join("")}</select>
    <label class="flab">Cấp độ tiếng Trung</label><select class="field" id="plzh">${LEVELS.zh.map((t,i)=>`<option value="${i+1}" ${(tl.zh||1)===i+1?"selected":""}>${t}</option>`).join("")}</select>
    <p class="small">Chưa biết cấp độ? Làm <a href="test.html">bài kiểm tra đầu vào</a> trước, kết quả sẽ tự điền vào đây.</p>
    <button class="btn block" data-pcreate="1">Tạo hồ sơ và bắt đầu</button></div></div>`;return;
  }
  app.innerHTML=`<div class="wrap"><div class="mhead"><a class="back" href="#/">${I_BACK}</a><div class="mtitle">Ai đang học?</div><span></span></div>
  ${PROFS.map(x=>`<div class="card prow pcard ${x.id===P.id?"cur":""}"><span class="pic">${x.owner?"👑":"👤"}</span><div class="meta"><b>${esc(x.name)}</b><div class="small">ID ${esc(x.id)} · ${lvName("en",x.lv.en)} · ${lvName("zh",x.lv.zh)}${x.pin?" · có PIN":""}</div></div>${x.id===P.id?'<span class="pill ok">Đang học</span>':`<button class="btn sm" data-puse="${esc(x.id)}">Vào học</button>`}${!x.owner&&x.id!==P.id?`<button class="btn ghost sm" data-pdel="${esc(x.id)}">Xóa</button>`:""}</div>`).join("")}
  <a class="btn block" href="#/profiles/new" style="margin-top:14px">＋ Thêm người học</a>
  <p class="small">Mỗi hồ sơ lưu tiến độ riêng trên thiết bị này. Người học mới nên làm bài kiểm tra đầu vào để chọn cấp độ phù hợp.</p></div>`;
}
function switchProfile(id){
  const x=PROFS.find(p=>p.id===id);if(!x)return;
  if(x.pin){const v=prompt("Nhập mã PIN của "+x.name);if(v!==x.pin){toast("Mã PIN chưa đúng");return;}}
  localStorage.setItem(CURP,x.id);location.hash="#/";location.reload();
}

/* ---------- Sổ tay ---------- */
function renderNotes(m){
  const v=learnedVocab(m),tts=MODES[m].tts,mist=Object.values(S.mist).filter(x=>x.mode===m&&!x.fixed);
  app.innerHTML=`<div class="wrap">${modeHeader(m,"Sổ tay")}
  <a class="card prow" href="#/${m}/mistakes"><span class="pic">🩹</span><div class="meta"><b>Sổ lỗi sai</b><div class="small">${mist.length} câu chưa sửa · tự động ghi lại mọi câu làm sai lần đầu</div></div><span class="pill">Ôn ngay</span></a>
  <div class="sec">Từ đã học (${v.length})</div>
  <input class="field" id="nsearch" placeholder="Tìm từ hoặc nghĩa">
  <div id="nlist">${v.length?v.map(x=>{const k=m+":"+x.id,b=(S.srs[k]||{}).box||0;return `<div class="card nrow" data-s="${esc((x.w||x.h)+" "+x.vi+" "+(x.py||""))}"><div class="meta"><b class="${m==="zh"?"zh nz":""}">${x.w||x.h}</b> <span class="ipa">${x.ipa||x.py}</span><div class="small">${x.vi} · Ngày ${x.lesson}</div></div><span class="lvl l${b}">${b>=3?"Đã thuộc":b?"Đang nhớ":"Mới"}</span>${sayBtn(x.w||x.h,tts,true)}</div>`;}).join(""):'<p class="small">Học xong bài đầu tiên là từ sẽ hiện ở đây.</p>'}</div></div>`;
  const inp=document.getElementById("nsearch");inp.oninput=()=>{const q=inp.value.toLowerCase();document.querySelectorAll(".nrow").forEach(r=>r.style.display=r.dataset.s.toLowerCase().includes(q)?"":"none");};
}

/* ---------- Tiến độ ---------- */
const SKILL={en:[["listening","🎧","Nghe"],["reading","📖","Đọc"],["writing","✍️","Viết"],["speaking","🎙️","Nói"],["grammar","⚡","Ngữ pháp"],["vocab","📚","Từ vựng"]],zh:[["hanzi","字","Mặt chữ"],["grammar","🧩","Mẫu câu"],["listening","🎧","Nghe"],["speaking","🎙️","Nói"],["reading","📖","Đọc"]]};
function band(p){return p>=95?"8.5":p>=88?"8.0":p>=80?"7.5":p>=72?"7.0":p>=63?"6.5":p>=55?"6.0":p>=45?"5.5":"5.0";}
function spark(vals){if(vals.length<2)return "";const w=120,h=32,mx=100;const pts=vals.map((v,i)=>`${(i/(vals.length-1)*w).toFixed(1)},${(h-v/mx*h).toFixed(1)}`).join(" ");return `<svg class="spark" viewBox="0 0 ${w} ${h}"><polyline points="${pts}"/></svg>`;}
function renderProgress(m){
  const logs=S.log.filter(x=>x.mode===m),s=streakOf(m),t=today();
  let cal="";for(let i=27;i>=0;i--){const d=addDays(t,-i),n=logs.filter(x=>x.date===d&&x.kind!=="game").length;cal+=`<i class="c${Math.min(3,n)}" title="${dmy(d)}"></i>`;}
  const skills=SKILL[m].map(([k,ic,name])=>{const v=logs.filter(x=>x.skill===k).map(x=>x.score);const last=v.slice(-5),avg=last.length?Math.round(last.reduce((a,b)=>a+b,0)/last.length):null;
    return `<div class="card skrow"><span class="pic ${ic==="字"?"zh":""}">${ic}</span><div class="meta"><b>${name}</b><div class="small">${v.length} lượt${avg!==null?` · TB 5 lượt gần nhất ${avg}%`:""}${avg!==null&&m==="en"&&(k==="listening"||k==="reading")?` · band ước tính ${band(avg)}`:""}</div><div class="sbar"><i style="width:${avg||0}%"></i></div></div>${spark(v.slice(-10))}</div>`;}).join("");
  const redo=logs.filter(x=>(x.kind==="practice"||x.kind==="skill")&&x.score<50).slice(-6).reverse();
  app.innerHTML=`<div class="wrap">${modeHeader(m,"Tiến độ")}
  <div class="stats"><div class="stc"><b>🔥 ${s.cur}</b><span>Chuỗi hiện tại</span></div><div class="stc"><b>${s.best}</b><span>Kỷ lục chuỗi</span></div><div class="stc"><b>${xpOf(m).toLocaleString("vi-VN")}</b><span>Điểm ${MODES[m].name}</span></div></div>
  <div class="sec">28 ngày gần nhất</div><div class="card"><div class="cal">${cal}</div></div>
  <div class="sec">Từng kỹ năng</div>${skills}
  <p class="small">Band ước tính chỉ là tham khảo sơ bộ dựa trên % đúng.</p>
  <div class="sec">Cần làm lại (dưới 50%)</div>${redo.length?redo.map(x=>`<div class="card srow2"><span>${dmy(x.date)} · ${(SKILL[m].find(s=>s[0]===x.skill)||[0,0,x.skill])[2]}</span><b class="bad-t">${x.score}%</b></div>`).join(""):'<p class="small">Chưa có phần nào dưới 50%.</p>'}
  </div>`;
}

/* ---------- Lộ trình ---------- */
function renderRoadmap(m){
  const Md=MODES[m];
  const rows=Md.plan.map(p=>{const d=S.done[m][p.day],has=Md.lessons.find(x=>x.day===p.day);return `<${d?"a":"div"} class="dl ${d?"done":""}" ${d?`href="#/${m}/learn/${p.day}"`:""}><span class="n">${p.day}</span><span class="tt"><span class="${m==="zh"?"zh":""}">${p.title}</span>${p.vi?` · ${p.vi}`:""}<br><span class="small">${p.book}</span></span>${d?`<span class="pill ok">${S.score[m+":"+p.day]!==undefined?S.score[m+":"+p.day]+"%":"Đã học"}</span>`:has?"":'<span class="pill lock">Đang soạn</span>'}</${d?"a":"div"}>`;}).join("");
  app.innerHTML=`<div class="wrap">${modeHeader(m,"Lộ trình")}<p class="small">${m==="en"?"Học lại từ nền tảng: phát âm và ngữ pháp cơ bản, đối chiếu Essential Grammar in Use. Mỗi ngày 6 từ, khoảng 20 phút. Hết 30 ngày chuyển sang tiền trung cấp, sau đó vào sách Achieve IELTS.":"Học lại từ HSK1: pinyin, thanh điệu, bộ thủ và 3 chữ Hán mỗi ngày, khoảng 15 phút. Hết HSK1 sang HSK2, sau đó vào sách Luyện nói cấp tốc."}</p><div class="card">${rows}</div><a class="btn ghost block" href="test.html" style="margin-top:14px">Bài kiểm tra đầu vào</a></div>`;
}

/* ---------- Cài đặt ---------- */
function renderSettings(){
  const c=syncCfg(),on=Sync.on(),last=Sync.last||(c.lastOk?"Lần đồng bộ gần nhất: "+new Date(c.lastOk).toLocaleString("vi-VN"):"");
  app.innerHTML=`<div class="wrap"><div class="mhead"><a class="back" href="#/">${I_BACK}</a><div class="mtitle">Cài đặt</div><span></span></div>
  ${P.owner?"":`<div class="card small" style="margin-top:10px">Hồ sơ <b>${esc(P.name)}</b> lưu tiến độ trên thiết bị này. Đồng bộ qua GitHub chỉ dành cho chủ website.</div>`}
  <div style="${P.owner?"":"display:none"}"><div class="sec">Đồng bộ giữa các thiết bị</div><div class="card"><div class="status ${on?"on":""}"><i></i>${on?"Đang bật đồng bộ":"Chưa bật đồng bộ"}</div>${last?`<p class="small">${last}</p>`:""}
    ${on?`<div class="btns left"><button class="btn" data-set="sync">Đồng bộ ngay</button><button class="btn ghost" data-set="off">Tắt trên máy này</button></div>`:`
    <p class="small">Tiến độ được lưu vào một ghi chú bí mật (Gist) trong tài khoản GitHub của KC. Mỗi thiết bị dán mã truy cập một lần.</p>
    <ol class="steps"><li>Mở <a href="https://github.com/settings/tokens/new?scopes=gist&description=Kim%20Cun%20world" target="_blank" rel="noopener">trang tạo mã truy cập</a> (đã đăng nhập tài khoản Kimcunworld).</li><li>Expiration chọn thời hạn KC muốn, chỉ tick quyền <b>gist</b>.</li><li>Bấm Generate token, sao chép mã bắt đầu bằng ghp_ và dán vào ô dưới đây.</li><li>Trên iPad và điện thoại, dán lại đúng mã đó một lần.</li></ol>
    <input class="field" id="tok" type="password" placeholder="Dán mã truy cập vào đây" autocomplete="off"><button class="btn block" data-set="connect">Bật đồng bộ</button>`}</div></div>
  <div class="sec">Hồ sơ</div><a class="card prow" href="#/profiles"><span class="pic">👤</span><div class="meta"><b>${esc(P.name)} · ID ${esc(P.id)}</b><div class="small">Cấp độ: ${lvName("en",P.lv.en)} · ${lvName("zh",P.lv.zh)}</div></div><span class="pill">Đổi</span></a>
  <div class="sec">Tốc độ đọc to</div><div class="seg">${[0.75,1,1.25].map(r=>`<button class="${speakRate===r?"on":""}" data-rate="${r}">${r}x</button>`).join("")}</div>
  <div class="sec">Viết tay bằng bút trên iPad</div><div class="card prose small"><p>Vào Cài đặt của iPad, mục Apple Pencil, bật <b>Scribble</b> (Viết tay). Muốn viết tay chữ Hán vào ô, thêm bàn phím Tiếng Trung giản thể trong Cài đặt, Bàn phím.</p></div>
  <div class="sec">Cài lên màn hình chính</div><div class="card prose small"><p><b>iPhone, iPad:</b> mở bằng Safari, bấm Chia sẻ, chọn “Thêm vào MH chính”.</p><p><b>Máy tính:</b> mở bằng Chrome, bấm biểu tượng cài đặt ở cuối thanh địa chỉ.</p></div>
  </div>`;
}

/* ---------- Sự kiện ---------- */
document.addEventListener("click",async e=>{
  const say=e.target.closest("[data-say]");if(say){speak(decodeURIComponent(say.dataset.say),say.dataset.lang);return;}
  const sl=e.target.closest("[data-slow]");if(sl&&L){const r=speakRate;speakRate=0.65;speak(decodeURIComponent(sl.dataset.slow),MODES[L.lang].tts);speakRate=r;return;}
  if(e.target.id==="shide"&&L){const sst=L.steps[L.idx];sst.st.hide=e.target.checked;document.querySelectorAll(".shd").forEach(c=>c.classList.toggle("hid",sst.st.hide));return;}
  const ins=e.target.closest("[data-ins]");if(ins&&L){const ta=document.getElementById("wr");if(ta){const t=decodeURIComponent(ins.dataset.ins),a=ta.selectionStart??ta.value.length,b=ta.selectionEnd??a;const pre=ta.value.slice(0,a),sp=pre&&!/\s$/.test(pre)?" ":"";ta.value=pre+sp+t+ta.value.slice(b);const pos=(pre+sp+t).length;ta.focus();ta.setSelectionRange(pos,pos);ta.dispatchEvent(new Event("input"));}return;}
  if(e.target.closest("[data-wcheck]")&&L){const s=L.steps[L.idx],ta=document.getElementById("wr");s.st.text=ta.value;s.st.fb=quickCheck(s,ta.value);document.getElementById("wfb").innerHTML=s.st.fb;mood(s.st.fb.includes("Bài ổn")?"happy":"sad");return;}
  if(e.target.closest("[data-wpeek]")&&L){const s=L.steps[L.idx];s.st.peek=true;const ta=document.getElementById("wr");if(ta)s.st.text=ta.value;rerenderDrill();toast("Đọc bài mẫu, rồi thử viết lại bằng lời của KC nhé");return;}
  const lvb=e.target.closest("[data-lv]");if(lvb&&MODE){P.lv[MODE]=+lvb.dataset.lv;saveProfiles();renderPractice(MODE);toast("Đã chọn cấp "+lvName(MODE,P.lv[MODE]));return;}
  if(L&&handleXS(e))return;
  const rp=e.target.closest("[data-replay]");if(rp){openGame(MODE,rp.dataset.replay);return;}
  const rt=e.target.closest("[data-rate]");if(rt){speakRate=+rt.dataset.rate;try{localStorage.setItem("kc-rate",speakRate);}catch(x){}renderSettings();return;}
  if(e.target.id==="next"&&L){stopAll();if(L.timer)clearInterval(L.timer);L.idx=Math.min(L.idx+1,L.steps.length-1);render();window.scrollTo(0,0);return;}
  if(L){
    const s=L.steps[L.idx],st=s.st;
    const mc=e.target.closest("[data-mcq]");if(mc&&!st.fb){const it=st.items[st.cur],v=+mc.dataset.mcq;answer(v===it.a,v);return;}
    const ck=e.target.closest("[data-check]");if(ck){if(ck.dataset.check==="text")checkText();else{const it=st.items[st.cur],val=st.sel.map(ti=>it.tiles[ti].w).join(it.zh?"":" ");answer(isRight(it,val),val);}return;}
    const sel=e.target.closest("[data-sel]");if(sel){st.sel.push(+sel.dataset.sel);rerenderDrill();return;}
    const uns=e.target.closest("[data-unsel]");if(uns){st.sel.splice(+uns.dataset.unsel,1);rerenderDrill();return;}
    if(e.target.closest("[data-nextq]")){nextQ();return;}
    if(e.target.closest("[data-redo]")){redo();return;}
    const tn=e.target.closest("[data-tone]");if(tn){const i=document.getElementById("ans");i.value+=tn.dataset.tone;i.focus();return;}
    if(e.target.closest("[data-hzhint]")&&writer){writer.showOutline();setTimeout(()=>writer&&writer.hideOutline(),1200);if(st.hz)st.hz.miss+=1;return;}
    if(e.target.closest("[data-play]")){const max=s.head.max||3;if(st.plays>=max)return;st.plays++;speakLines(s.head.audio,s.head.lang==="zh"?"zh-CN":"en-GB");const b=e.target.closest("[data-play]"),left=max-st.plays;b.querySelector("span").textContent=left?`Nghe đoạn (còn ${left} lượt)`:"Nghe đoạn (hết lượt)";if(!left)b.disabled=true;return;}
    const an=e.target.closest("[data-anim]");if(an&&window.HanziWriter){const box=document.getElementById("mb-"+an.dataset.anim.split("-")[0]);box.innerHTML="";box.classList.add("open");HanziWriter.create(box,an.dataset.c,Object.assign(hwOpts(150,true),{showCharacter:false})).animateCharacter();return;}
    const cg=e.target.closest("[data-cg]");if(cg&&writer){const msg=document.getElementById("cg-msg");writer.cancelQuiz&&writer.cancelQuiz();
      if(cg.dataset.cg==="anim"){writer.showOutline();writer.animateCharacter();msg.textContent="Quan sát hướng đi và độ dài từng nét.";}
      else{if(cg.dataset.cg==="free")writer.hideOutline();else writer.showOutline();writer.hideCharacter();writer.quiz({onComplete:d=>{msg.textContent=d.totalMistakes?`Xong, sai ${d.totalMistakes} nét. Viết thêm một lượt nhé.`:"Đẹp lắm, đúng hết các nét!";mood(d.totalMistakes?"sad":"happy");}});msg.textContent=cg.dataset.cg==="free"?"Viết không có chữ mờ.":"Viết theo chữ mờ.";}return;}
    const rc=e.target.closest("[data-rec]");if(rc){toggleRec(rc.dataset.rec,rc);return;}
    const pr=e.target.closest("[data-prep]");if(pr){let left=+pr.dataset.sec;const cd=document.getElementById("cd-"+pr.dataset.prep);pr.disabled=true;cd.textContent=left+" giây";const t=setInterval(()=>{left--;cd.textContent=left>0?left+" giây":"Bắt đầu nói và ghi âm!";if(left<=0){clearInterval(t);const b=document.querySelector(`[data-rec="${pr.dataset.prep}"]`);if(b)toggleRec(pr.dataset.prep,b);}},1000);return;}
    if(e.target.closest("[data-copy]")){const txt=`Claude chấm giúp KC bài viết này theo tiêu chí IELTS (Task Achievement, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy), chỉ ra lỗi và sửa:\n\nĐề: ${s.prompt.replace(/<[^>]+>/g,"")}\n\nBài của KC:\n${st.text}`;try{await navigator.clipboard.writeText(txt);toast("Đã sao chép, KC dán vào chat với Claude nhé");}catch(err){prompt("Sao chép đoạn này:",txt);}return;}
    if(e.target.closest("[data-lgame]")){lessonMatch(s);document.getElementById("gtime").textContent="0.0 giây";return;}
  }
  if(e.target.closest("[data-rxagain]")){openReflex("en",PRACTICE.en.find(x=>x.id==="phan-xa"));return;}
  const pu=e.target.closest("[data-puse]");if(pu){switchProfile(pu.dataset.puse);return;}
  const pd=e.target.closest("[data-pdel]");if(pd){const x=PROFS.find(p=>p.id===pd.dataset.pdel);if(x&&confirm("Xóa hồ sơ "+x.name+" và toàn bộ tiến độ của hồ sơ này trên máy? Không thể hoàn tác.")){PROFS=PROFS.filter(p=>p!==x);try{localStorage.removeItem(STORE_BASE+":"+x.id);}catch(err){}saveProfiles();renderProfiles();toast("Đã xóa hồ sơ");}return;}
  if(e.target.closest("[data-pcreate]")){const name=document.getElementById("pn").value.trim(),id=document.getElementById("pid").value.trim().toUpperCase(),pin=document.getElementById("ppin").value.trim();
    if(!name){toast("Nhập tên trước nhé");return;}if(!/^[A-Z0-9]{2,12}$/.test(id)){toast("ID gồm 2 đến 12 chữ cái hoặc số, không dấu");return;}if(PROFS.some(p=>p.id===id)){toast("ID này đã có, chọn ID khác");return;}if(pin&&!/^\d{4}$/.test(pin)){toast("PIN gồm đúng 4 số");return;}
    PROFS.push({id,name,pin,lv:{en:+document.getElementById("plen").value,zh:+document.getElementById("plzh").value}});saveProfiles();localStorage.setItem(CURP,id);location.hash="#/";location.reload();return;}
  const se=e.target.closest("[data-set]");
  if(se){
    if(se.dataset.set==="connect"){const tok=(document.getElementById("tok").value||"").trim();if(!tok){toast("KC dán mã truy cập trước nhé");return;}se.disabled=true;se.textContent="Đang kết nối";try{await Sync.connect(tok);toast("Đã bật đồng bộ");renderSettings();}catch(err){setSyncCfg({});toast("Không kết nối được, KC kiểm tra lại mã");se.disabled=false;se.textContent="Bật đồng bộ";}}
    else if(se.dataset.set==="sync"){toast("Đang đồng bộ");await Sync.run();toast(Sync.last||"Xong");}
    else if(se.dataset.set==="off"){setSyncCfg({});Sync.last="";renderSettings();toast("Đã tắt đồng bộ trên máy này");}
  }
});

try{const r=+localStorage.getItem("kc-rate");if(r)speakRate=r;}catch(e){}
if("serviceWorker" in navigator&&location.protocol==="https:")navigator.serviceWorker.register("sw.js").catch(()=>{});
window.__kc={get L(){return L;},go:i=>{L.idx=i;render();},get S(){return S;},answer:ok=>answer(ok,"")};
route();
Sync.run();
})();
