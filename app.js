/* Kim Cun học đi · ứng dụng học mỗi ngày */
(function(){
"use strict";

const TOTAL_DAYS = 30;
const LANGS = {
  en:{name:"Tiếng Anh", tag:"IELTS 7.5", badge:"EN", days:window.EN_DAYS||[], weeks:window.EN_WEEKS||[], tts:"en-GB"},
  zh:{name:"Tiếng Trung", tag:"Giao tiếp và thư pháp", badge:"中", days:window.ZH_DAYS||[], weeks:window.ZH_WEEKS||[], tts:"zh-CN"}
};
const INTERVAL = {1:1, 2:3, 3:7, 4:14, 5:30};
const STORE = "kc-hoc-di-state";
const SYNC = "kc-hoc-di-sync";
const GIST_FILE = "kimcun-hoc-di.json";
const app = document.getElementById("app");

/* ---------- Ngày tháng ---------- */
const pad = n => String(n).padStart(2,"0");
const fmt = d => d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
const today = () => fmt(new Date());
function addDays(s,n){const [y,m,d]=s.split("-").map(Number);const t=new Date(y,m-1,d);t.setDate(t.getDate()+n);return fmt(t);}
const WD = ["CN","T2","T3","T4","T5","T6","T7"];
function wd(s){const [y,m,d]=s.split("-").map(Number);return WD[new Date(y,m-1,d).getDay()];}

/* ---------- Lưu trữ ---------- */
function blank(){return {v:1, done:{en:{},zh:{}}, checked:{en:{},zh:{}}, srs:{}, updated:0};}
function load(){
  try{const s=JSON.parse(localStorage.getItem(STORE)); if(s&&s.done) return Object.assign(blank(),s);}catch(e){}
  return blank();
}
let S = load();
function save(silent){
  S.updated = Date.now();
  try{localStorage.setItem(STORE, JSON.stringify(S));}catch(e){}
  if(!silent) Sync.schedule();
}
function syncCfg(){try{return JSON.parse(localStorage.getItem(SYNC))||{};}catch(e){return {};}}
function setSyncCfg(c){try{localStorage.setItem(SYNC, JSON.stringify(c));}catch(e){}}

/* ---------- Tiện ích ---------- */
const enc = s => encodeURIComponent(s);
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove("show"),2400);}
const ICON_SAY = '<svg viewBox="0 0 24 24"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a9 9 0 0 1 0 14"/></svg>';
const ICON_BACK = '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>';
const ICON_FLAME = '<svg viewBox="0 0 24 24"><path d="M12 2c1 3.5-1.5 5-1.5 7.5 0 1.4 1 2.5 2.3 2.5 1.6 0 2.4-1.4 2.2-3.2C17.6 10.6 19 13 19 15.5 19 19.1 15.9 22 12 22s-7-2.9-7-6.5C5 10.4 9.5 7.6 12 2z"/></svg>';
function sayBtn(text,lang,sm){return `<button class="say${sm?" sm":""}" type="button" data-say="${enc(text)}" data-lang="${lang}" aria-label="Nghe">${ICON_SAY}</button>`;}

/* ---------- Đọc to ---------- */
function speak(text,lang,onend){
  if(!("speechSynthesis" in window)){toast("Thiết bị này chưa hỗ trợ đọc to");return;}
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang; u.rate = lang.startsWith("zh") ? 0.8 : 0.9;
  const vs = speechSynthesis.getVoices();
  const v = vs.find(v=>v.lang.replace("_","-")===lang) || vs.find(v=>v.lang.replace("_","-").startsWith(lang.slice(0,2)));
  if(v) u.voice = v;
  if(onend) u.onend = onend;
  speechSynthesis.speak(u);
}
if("speechSynthesis" in window){speechSynthesis.getVoices();}

/* ---------- Từ vựng ---------- */
const keyOf = (lang,w) => lang+":"+(w.w||w.h);
const WORDS = {};
Object.keys(LANGS).forEach(lang=>LANGS[lang].days.forEach(d=>d.words.forEach(w=>{WORDS[keyOf(lang,w)]={lang,day:d.day,w};})));

/* ---------- Tiến độ ---------- */
function maxDone(lang){return Object.keys(S.done[lang]).reduce((m,d)=>Math.max(m,+d),0);}
function status(lang){
  const L=LANGS[lang], m=maxDone(lang), t=today();
  if(m>0 && S.done[lang][m]===t) return {day:m, state:"doneToday"};
  const day=m+1;
  if(day>TOTAL_DAYS) return {day, state:"end"};
  if(day>L.days.length) return {day, state:"soon"};
  return {day, state:"open"};
}
function bothDates(){
  const en=new Set(Object.values(S.done.en)), zh=new Set(Object.values(S.done.zh));
  return new Set([...en].filter(d=>zh.has(d)));
}
function streak(){
  const both=bothDates(); let cur=today(), s=0;
  if(!both.has(cur)) cur=addDays(cur,-1);
  while(both.has(cur)){s++;cur=addDays(cur,-1);}
  const sorted=[...both].sort(); let best=0, run=0, prev=null;
  sorted.forEach(d=>{run=(prev&&addDays(prev,1)===d)?run+1:1;best=Math.max(best,run);prev=d;});
  return {cur:s, best};
}
function dueKeys(){const t=today();return Object.keys(S.srs).filter(k=>WORDS[k]&&S.srs[k].due<=t);}

/* ---------- Đồng bộ qua Gist ---------- */
const Sync = {
  timer:null, busy:false, last:"",
  on(){const c=syncCfg();return !!(c.token&&c.gistId);},
  api(path,opt){
    const c=syncCfg();
    return fetch("https://api.github.com"+path, Object.assign({headers:{
      "Authorization":"Bearer "+c.token, "Accept":"application/vnd.github+json", "Content-Type":"application/json"
    }}, opt||{})).then(r=>{if(!r.ok) throw new Error("GitHub trả lỗi "+r.status); return r.json();});
  },
  merge(a,b){
    const r=JSON.parse(JSON.stringify(a));
    ["en","zh"].forEach(l=>{
      Object.entries((b.done||{})[l]||{}).forEach(([d,date])=>{if(!r.done[l][d]||date<r.done[l][d]) r.done[l][d]=date;});
      Object.entries((b.checked||{})[l]||{}).forEach(([d,v])=>{if(v) r.checked[l][d]=true;});
    });
    Object.entries(b.srs||{}).forEach(([k,v])=>{if(!r.srs[k]||(v.t||0)>(r.srs[k].t||0)) r.srs[k]=v;});
    r.updated=Math.max(a.updated||0,b.updated||0);
    return r;
  },
  async pull(){
    const c=syncCfg(), g=await this.api("/gists/"+c.gistId);
    const f=g.files&&g.files[GIST_FILE]; if(!f) return null;
    let txt=f.content;
    if(f.truncated){txt=await fetch(f.raw_url).then(r=>r.text());}
    try{return JSON.parse(txt);}catch(e){return null;}
  },
  async push(){
    const c=syncCfg();
    await this.api("/gists/"+c.gistId,{method:"PATCH",body:JSON.stringify({files:{[GIST_FILE]:{content:JSON.stringify(S)}}})});
  },
  async run(){
    if(!this.on()||this.busy) return;
    this.busy=true;
    try{
      const remote=await this.pull();
      if(remote&&remote.done){S=this.merge(S,remote); save(true);}
      await this.push();
      this.last="Đã đồng bộ lúc "+new Date().toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"});
      const c=syncCfg(); c.lastOk=Date.now(); setSyncCfg(c);
    }catch(e){this.last="Chưa đồng bộ được: "+e.message;}
    this.busy=false;
    refreshSoft();
  },
  schedule(){if(!this.on())return;clearTimeout(this.timer);this.timer=setTimeout(()=>this.run(),1500);},
  async connect(token){
    setSyncCfg({token});
    const list=await this.api("/gists?per_page=100");
    const found=list.find(g=>g.files&&g.files[GIST_FILE]);
    let id;
    if(found) id=found.id;
    else{
      const g=await this.api("/gists",{method:"POST",body:JSON.stringify({description:"Tiến độ học của Kim Cun",public:false,files:{[GIST_FILE]:{content:JSON.stringify(S)}}})});
      id=g.id;
    }
    setSyncCfg({token, gistId:id});
    await this.run();
  }
};
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible") Sync.run();});

/* ---------- Router ---------- */
let L=null, R=null;
function route(){
  const parts=(location.hash.replace(/^#\/?/,"")||"").split("/");
  document.body.classList.remove("lesson-mode");
  document.querySelectorAll(".tabbar a").forEach(a=>a.classList.toggle("on",a.dataset.nav===(parts[0]||"home")));
  speechSynthesis && speechSynthesis.cancel && speechSynthesis.cancel();
  window.scrollTo(0,0);
  if(parts[0]==="learn"&&LANGS[parts[1]]) return openLesson(parts[1], parts[2]);
  if(parts[0]==="review") return openReview();
  if(parts[0]==="roadmap") return renderRoadmap(parts[1]||"en");
  if(parts[0]==="settings") return renderSettings();
  renderHome();
}
function refreshSoft(){
  const p=(location.hash.replace(/^#\/?/,"")||"").split("/")[0];
  if(p===""||p==="home") renderHome();
  if(p==="settings") renderSettings();
}
window.addEventListener("hashchange",route);

/* ---------- Trang chủ ---------- */
function greeting(){const h=new Date().getHours();return h<11?"Chào buổi sáng":h<14?"Chào buổi trưa":h<18?"Chào buổi chiều":"Chào buổi tối";}
function renderHome(){
  const st=streak(), t=today(), en=new Set(Object.values(S.done.en)), zh=new Set(Object.values(S.done.zh));
  let week="";
  for(let i=6;i>=0;i--){
    const d=addDays(t,-i), a=en.has(d), b=zh.has(d);
    const cls=a&&b?"full":(a||b)?"half":"";
    week+=`<div class="dayc">${wd(d)}<div class="dot ${cls} ${d===t?"today":""}">${+d.slice(8)}</div></div>`;
  }
  const card = lang => {
    const L=LANGS[lang], s=status(lang);
    let pill, title, href=`#/learn/${lang}`;
    if(s.state==="open"){pill=`<span class="pill">15 phút</span>`;title=L.days[s.day-1].theme;}
    else if(s.state==="doneToday"){pill=`<span class="pill ok">Xong hôm nay</span>`;title="Mai học tiếp ngày "+(s.day+1);href=`#/learn/${lang}/${s.day}`;}
    else if(s.state==="soon"){pill=`<span class="pill lock">Đang soạn</span>`;title="Bài ngày "+s.day+" sẽ sớm có";}
    else{pill=`<span class="pill ok">Hoàn thành 30 ngày</span>`;title="Làm bài kiểm tra lại nhé";href="test.html";}
    const k = s.state==="doneToday" ? `${L.name} · Ngày ${s.day}` : `${L.name} · Ngày ${Math.min(s.day,TOTAL_DAYS)}/${TOTAL_DAYS}`;
    return `<a class="card lesson-card" href="${href}"><div class="ic ${lang==="zh"?"zh":""}">${L.badge}</div><div class="meta"><div class="k">${k}</div><div class="t">${title}</div></div>${pill}</a>`;
  };
  const due=dueKeys().length;
  const syncBanner = Sync.on() ? "" : `<div class="banner"><span>Bật đồng bộ để học liền mạch trên điện thoại, iPad và máy tính.</span><a href="#/settings">Thiết lập</a></div>`;
  const doneToday = en.has(t)&&zh.has(t);
  app.innerHTML = `
  <header class="hero"><div class="wrap">
    <p class="hello">${greeting()}, KC</p>
    <h1>${doneToday?"Hôm nay KC học xong rồi, giỏi quá!":"Mỗi ngày một chút, đều đặn là thắng"}</h1>
    <div class="streak">
      <div class="flame ${st.cur?"":"off"}">${ICON_FLAME}</div>
      <div style="flex:1"><div class="big">${st.cur} ngày</div><div class="sub">Chuỗi học liên tiếp · Kỷ lục ${st.best} ngày</div></div>
    </div>
    <div class="week">${week}</div>
    ${syncBanner}
  </div></header>
  <main class="wrap">
    <div class="sec">Bài hôm nay</div>
    <div class="two-col">${card("en")}${card("zh")}</div>
    <div class="sec">Ôn tập</div>
    <a class="card lesson-card" href="#/review"><div class="ic">${due}</div><div class="meta"><div class="k">Lặp lại ngắt quãng</div><div class="t">${due?due+" từ đến hạn ôn hôm nay":"Chưa có từ nào đến hạn"}</div></div><span class="pill">${due?"Ôn ngay":"Nghỉ"}</span></a>
    <p class="small" style="margin-top:18px">Chuỗi ngày được tính khi KC học xong cả tiếng Anh và tiếng Trung trong cùng một ngày. Ô tô nửa màu là mới xong một thứ tiếng.</p>
  </main>`;
}

/* ---------- Bài học ---------- */
function buildMcq(prompt, options, a, why, extra){
  const order=shuffle(options.map((o,i)=>i));
  return Object.assign({prompt, options:order.map(i=>options[i]), a:order.indexOf(a), why}, extra||{});
}
function buildCheck(lang, day){
  const Lg=LANGS[lang], words=Lg.days[day-1].words;
  const pool=Lg.days.filter(d=>d.day<=day+1).flatMap(d=>d.words);
  const label = w => lang==="zh" ? `<span class="zh">${w.h}</span>` : w.w;
  return words.map((w,i)=>{
    const others=shuffle(pool.filter(x=>x!==w)).slice(0,3);
    if(i%2===0){
      const opts=[w,...others].map(x=>x.vi);
      return buildMcq(lang==="zh"?w.h:w.w, opts, 0, lang==="zh"?`${w.h} ${w.py}: ${w.vi}`:`${w.w} ${w.ipa}: ${w.vi}`, {say:lang==="zh"?w.h:w.w, big:lang==="zh", key:keyOf(lang,w)});
    }
    const opts=[w,...others].map(label);
    return buildMcq(`Từ nào nghĩa là “${w.vi}”?`, opts, 0, lang==="zh"?`${w.h} ${w.py}: ${w.vi}`:`${w.w} ${w.ipa}: ${w.vi}`, {key:keyOf(lang,w)});
  });
}
function openLesson(lang, dayParam){
  const Lg=LANGS[lang], s=status(lang);
  let day, mode;
  if(dayParam){
    day=+dayParam;
    if(S.done[lang][day]) mode="replay";
    else if(s.state==="open"&&day===s.day) mode="normal";
    else{location.hash="#/learn/"+lang;return;}
  }else{
    if(s.state!=="open") return renderLessonGate(lang,s);
    day=s.day; mode="normal";
  }
  const D=Lg.days[day-1];
  const steps=[];
  const prev=day-1;
  if(mode==="normal"&&prev>=1&&S.done[lang][prev]&&!S.checked[lang][prev]) steps.push("check");
  steps.push("words");
  if(lang==="en") steps.push("lesson","practice","speaking");
  else steps.push("pattern","dialogue","write","practice");
  steps.push("finish");
  L={lang, day, mode, D, steps, idx:0, quiz:{},
     check: steps.includes("check") ? buildCheck(lang,prev) : null,
     practice: D.practice.map(p=>buildMcq(p.q,p.o,p.a,p.why))};
  renderStep();
}
function renderLessonGate(lang,s){
  const Lg=LANGS[lang];
  let h,p,btn="";
  if(s.state==="doneToday"){h="Hôm nay học xong rồi";p=`KC đã hoàn thành ngày ${s.day}. Học từ từ để nhớ lâu, mai mở bài ngày ${s.day+1} nhé.`;btn=`<a class="btn ghost block" href="#/learn/${lang}/${s.day}" style="text-decoration:none;text-align:center">Xem lại bài hôm nay</a>`;}
  else if(s.state==="soon"){h="Bài đang được soạn";p=`Ngày ${s.day} của ${Lg.name} sẽ sớm có. Trong lúc chờ, KC ôn lại từ cũ nhé.`;btn=`<a class="btn block" href="#/review" style="text-decoration:none;text-align:center">Ôn tập</a>`;}
  else{h="Hoàn thành 30 ngày!";p="KC đã đi hết lộ trình. Làm bài kiểm tra lại để xem tiến bộ.";btn=`<a class="btn block" href="test.html" style="text-decoration:none;text-align:center">Kiểm tra lại</a>`;}
  app.innerHTML=`<main class="wrap"><div class="done-hero"><div class="big">${Lg.badge}</div><h2>${h}</h2><p class="small">${p}</p></div>${btn}<p style="text-align:center"><a href="#/">Về trang chủ</a></p></main>`;
}
const STEP_NAME={check:"Kiểm tra từ hôm qua",words:"Từ mới",lesson:"Ngữ pháp và phát âm",practice:"Bài tập",speaking:"Luyện nói",pattern:"Mẫu câu",dialogue:"Hội thoại",write:"Tập viết",finish:"Hoàn thành"};
function quizHtml(list,qk){
  const st=L.quiz[qk]||{};
  return list.map((q,qi)=>{
    const ans=st[qi];
    const opts=q.options.map((o,oi)=>{
      let cls=""; if(ans!==undefined){ if(oi===q.a) cls="right"; else if(oi===ans) cls="wrong"; }
      return `<button class="opt ${cls}" data-q="${qk}" data-qi="${qi}" data-oi="${oi}" ${ans!==undefined?"disabled":""}><span>${o}</span></button>`;
    }).join("");
    const say=q.say?`<div style="display:flex;justify-content:center;margin-top:6px">${sayBtn(q.say,LANGS[L.lang].tts,true)}</div>`:"";
    return `<div class="card q"><p class="prompt ${q.big?"zh-big zh":""}">${q.prompt}</p>${say}<div class="opts">${opts}</div><div class="why ${ans!==undefined?"show":""}">${q.why||""}</div></div>`;
  }).join("");
}
function quizDone(list,qk){const st=L.quiz[qk]||{};return list.every((q,i)=>st[i]!==undefined);}
function stepHtml(step){
  const D=L.D, lang=L.lang, tts=LANGS[lang].tts;
  if(step==="check"){
    return `<h2>Kiểm tra từ hôm qua</h2><p class="lead">Xem KC còn nhớ từ của ngày ${L.day-1} không. Từ nào sai sẽ được nhắc lại sớm hơn.</p>${quizHtml(L.check,"check")}`;
  }
  if(step==="words"){
    const items=D.words.map(w=>lang==="en"
      ? `<div class="card word"><div class="body"><div class="w">${w.w} <span class="pill">${w.pos}</span></div><div class="ipa">${w.ipa}</div><div class="vi">${w.vi}</div><div class="ex">${w.ex}<div class="exv">${w.exVi}</div></div></div><div style="display:grid;gap:8px">${sayBtn(w.w,tts)}${sayBtn(w.ex,tts,true)}</div></div>`
      : `<div class="card word"><div class="body"><div class="w zh">${w.h}</div><div class="ipa">${w.py}</div><div class="vi">${w.vi}</div><div class="ex"><span class="zh" style="font-size:18px">${w.ex}</span><div class="ipa">${w.exPy}</div><div class="exv">${w.exVi}</div></div></div><div style="display:grid;gap:8px">${sayBtn(w.h,tts)}${sayBtn(w.ex,tts,true)}</div></div>`
    ).join("");
    return `<h2>${D.theme}</h2><p class="lead">${D.words.length} từ mới hôm nay. Bấm loa để nghe, đọc theo 2 lần. Mai sẽ có bài kiểm tra các từ này.</p>${items}`;
  }
  if(step==="lesson"){
    const ex=D.lesson.examples.map(e=>`<div class="ex-item"><div class="txt"><div class="en">${e.en}</div><div class="vi">${e.vi}</div></div>${sayBtn(e.en,tts,true)}</div>`).join("");
    return `<h2>${D.lesson.title}</h2><div class="card prose">${D.lesson.body.map(p=>`<p>${p}</p>`).join("")}</div><div class="sec">Ví dụ</div><div class="ex-list">${ex}</div>`;
  }
  if(step==="pattern"){
    const ex=D.pattern.examples.map(e=>`<div class="ex-item"><div class="txt"><div class="zh">${e.h}</div><div class="py">${e.py}</div><div class="vi">${e.vi}</div></div>${sayBtn(e.h,tts,true)}</div>`).join("");
    return `<h2>${D.pattern.title}</h2><div class="card prose">${D.pattern.body.map(p=>`<p>${p}</p>`).join("")}</div><div class="sec">Ví dụ</div><div class="ex-list">${ex}</div>`;
  }
  if(step==="dialogue"){
    const lines=D.dialogue.map((l,i)=>`<div class="line ${l.who==="B"?"b":""}"><div class="who">${l.who}</div><div class="bub"><div class="zh">${l.h}</div><div class="py">${l.py}</div><div class="vi vi-t">${l.vi}</div></div>${sayBtn(l.h,tts,true)}</div>`).join("");
    return `<h2>Hội thoại</h2><p class="lead">Nghe cả đoạn, sau đó che pinyin và nghĩa để tự đọc.</p>
      <div class="toggle"><button class="on" data-tg="py">Pinyin</button><button class="on" data-tg="vi">Nghĩa</button><button data-playall="1">Nghe cả đoạn</button></div>
      <div id="dlg">${lines}</div>`;
  }
  if(step==="write"){
    const w=D.write;
    return `<h2>Tập viết: <span class="zh">${w.char}</span> ${w.py}</h2><p class="lead">Nghĩa: ${w.vi}</p>
      <div class="card prose"><p>${w.note}</p></div>
      <div class="writer-box" style="margin-top:16px">
        <div class="grid-bg"><svg class="gl" viewBox="0 0 100 100" preserveAspectRatio="none"><g stroke="var(--blue-line)" stroke-width=".5" stroke-dasharray="2 2"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/><line x1="50" y1="0" x2="50" y2="100"/><line x1="0" y1="50" x2="100" y2="50"/></g></svg><div class="hw" id="hw"></div></div>
        <div class="btns"><button class="btn" data-hw="animate">Xem thứ tự nét</button><button class="btn ghost" data-hw="quiz">Tự viết</button></div>
        <p class="small" id="hw-msg" style="text-align:center">Xem 2 lần, sau đó bấm Tự viết và viết bằng ngón tay hoặc bút.</p>
      </div>`;
  }
  if(step==="practice"){
    return `<h2>Bài tập</h2><p class="lead">Chọn đáp án, đọc giải thích ngay bên dưới.</p>${quizHtml(L.practice,"practice")}`;
  }
  if(step==="speaking"){
    const sp=D.speaking;
    return `<h2>Luyện nói</h2><div class="card"><div class="k small">Câu hỏi giám khảo</div><p style="font-weight:600;margin:6px 0 0">${sp.q}</p></div>
      <div class="sec">Câu trả lời mẫu</div><div class="ex-item"><div class="txt"><div>${sp.model}</div></div>${sayBtn(sp.model,tts,true)}</div>
      <div class="banner" style="margin-top:14px"><span>${sp.tip}</span></div>`;
  }
  if(step==="finish"){
    const st=streak(), other=lang==="en"?"zh":"en", os=status(other);
    const first = L.mode==="normal";
    const nudge = first&&os.state==="open" ? `<a class="btn block" href="#/learn/${other}" style="text-decoration:none;text-align:center;margin-top:10px">Học tiếp ${LANGS[other].name}</a>` : "";
    return `<div class="done-hero"><div class="big">${st.cur} ngày</div><h2>${first?"Xong ngày "+L.day+"!":"Đã xem lại ngày "+L.day}</h2><p class="small">${first?"Từ mới hôm nay sẽ được kiểm tra vào buổi học ngày mai.":"Ôn bài cũ cũng là học đó KC."}</p></div>
      ${nudge}<a class="btn ghost block" href="#/" style="text-decoration:none;text-align:center;margin-top:10px">Về trang chủ</a>`;
  }
  return "";
}
function stepReady(step){
  if(step==="check") return quizDone(L.check,"check");
  if(step==="practice") return quizDone(L.practice,"practice");
  return true;
}
function renderStep(){
  document.body.classList.add("lesson-mode");
  const step=L.steps[L.idx], n=L.steps.length-1, i=Math.min(L.idx,n);
  if(step==="finish"&&L.mode==="normal"&&!S.done[L.lang][L.day]){S.done[L.lang][L.day]=today(); save();}
  const foot = step==="finish" ? "" : `<div class="footer-act"><button class="btn block" id="next" ${stepReady(step)?"":"disabled"}>${L.idx===n-1?"Hoàn thành bài":"Tiếp tục"}</button></div>`;
  app.innerHTML=`<div class="topbar"><div class="wrap row"><a class="back" href="#/" aria-label="Quay lại">${ICON_BACK}</a><div class="bar"><i style="width:${(i/n)*100}%"></i></div><span class="step-label">${LANGS[L.lang].badge} · Ngày ${L.day}</span></div></div>
    <main class="wrap step"><div class="small" style="margin-top:8px;font-weight:600;color:var(--blue-strong)">${STEP_NAME[step]}</div>${stepHtml(step)}${foot}</main>`;
  if(step==="write") setupWriter();
  window.scrollTo(0,0);
}
function nextStep(){
  const step=L.steps[L.idx];
  if(step==="check"){
    const t=today(), st=L.quiz.check||{};
    L.check.forEach((q,qi)=>{
      const ok=st[qi]===q.a, cur=S.srs[q.key];
      const box = ok ? Math.max(2,(cur&&cur.box)||0) : 1;
      if(!cur || !ok || cur.box<box) S.srs[q.key]={box, due:addDays(t,INTERVAL[box]), t:Date.now()};
    });
    S.checked[L.lang][L.day-1]=true; save();
  }
  L.idx=Math.min(L.idx+1,L.steps.length-1);
  renderStep();
}
let writer=null;
function setupWriter(){
  const el=document.getElementById("hw"), msg=document.getElementById("hw-msg");
  if(!window.HanziWriter){msg.textContent="Cần kết nối mạng để tải nét chữ. KC thử lại khi có mạng nhé.";return;}
  const blue=getComputedStyle(document.documentElement).getPropertyValue("--blue-strong").trim()||"#4f8fc9";
  writer=HanziWriter.create(el,L.D.write.char,{width:256,height:256,padding:16,showOutline:true,strokeColor:blue,outlineColor:"rgba(120,150,190,.25)",drawingColor:blue,strokeAnimationSpeed:0.8,delayBetweenStrokes:300,showHintAfterMisses:2});
}

/* ---------- Ôn tập ---------- */
function openReview(){
  const keys=shuffle(dueKeys());
  R={keys, i:0, open:false, good:0};
  renderReview();
}
function renderReview(){
  const total=Object.keys(S.srs).length;
  if(!R.keys.length||R.i>=R.keys.length){
    const nexts=Object.values(S.srs).map(v=>v.due).filter(d=>d>today()).sort();
    const msg = R.keys.length ? `Xong ${R.keys.length} từ, nhớ ${R.good} từ.` : "Hôm nay chưa có từ nào đến hạn ôn.";
    app.innerHTML=`<header class="hero"><div class="wrap"><p class="hello">Lặp lại ngắt quãng</p><h1>Ôn tập</h1></div></header>
      <main class="wrap"><div class="card"><p style="margin:0;font-weight:600">${msg}</p><p class="small">KC đang có ${total} từ trong kho ôn tập.${nexts.length?" Lần ôn tiếp theo: "+nexts[0].split("-").reverse().join("/")+".":""}</p>
      <p class="small">Từ mới vào kho sau buổi kiểm tra hôm sau. Nhớ thì giãn dần 3, 7, 14, 30 ngày; quên thì quay lại ngày mai.</p></div>
      <a class="btn ghost block" href="#/" style="text-decoration:none;text-align:center;margin-top:14px">Về trang chủ</a></main>`;
    return;
  }
  const k=R.keys[R.i], it=WORDS[k], w=it.w, lang=it.lang, tts=LANGS[lang].tts;
  const front = lang==="zh" ? `<div class="front zh">${w.h}</div>` : `<div class="front">${w.w}</div>`;
  const back = lang==="zh"
    ? `<div class="ipa" style="color:var(--blue-strong)">${w.py}</div><div class="vi">${w.vi}</div><div class="ex"><span class="zh">${w.ex}</span><br>${w.exPy}<br>${w.exVi}</div>`
    : `<div class="ipa" style="color:var(--blue-strong)">${w.ipa}</div><div class="vi">${w.vi}</div><div class="ex">${w.ex}<br>${w.exVi}</div>`;
  app.innerHTML=`<div class="topbar"><div class="wrap row"><a class="back" href="#/">${ICON_BACK}</a><div class="bar"><i style="width:${R.i/R.keys.length*100}%"></i></div><span class="step-label">${R.i+1}/${R.keys.length}</span></div></div>
   <main class="wrap"><div class="card flash ${R.open?"open":""}" style="margin-top:14px"><span class="pill">${LANGS[lang].name} · Ngày ${it.day}</span>${front}${sayBtn(w.w||w.h,tts,true)}<div class="back">${back}</div></div>
   ${R.open?`<div class="two"><button class="btn bad" data-rv="0">Quên rồi</button><button class="btn good" data-rv="1">Nhớ</button></div>`:`<button class="btn block" data-rv="show" style="margin-top:14px">Xem đáp án</button>`}</main>`;
}
function rate(ok){
  const k=R.keys[R.i], cur=S.srs[k]||{box:1};
  const box = ok ? Math.min(5,(cur.box||1)+1) : 1;
  S.srs[k]={box, due:addDays(today(),INTERVAL[box]), t:Date.now()};
  if(ok) R.good++;
  save(); R.i++; R.open=false; renderReview();
}

/* ---------- Lộ trình ---------- */
function renderRoadmap(lang){
  const Lg=LANGS[lang];
  const weeks=Lg.weeks.map(wk=>{
    let rows="";
    for(let d=(wk.week-1)*7+1; d<=Math.min(wk.week*7+(wk.week===4?2:0),TOTAL_DAYS); d++){
      const D=Lg.days[d-1], done=S.done[lang][d];
      const tt = D ? D.theme : "Đang soạn";
      const inner=`<span class="n">${d}</span><span class="tt">${tt}</span>${done?'<span class="pill ok">Đã học</span>':""}`;
      rows += done ? `<a class="dl done" href="#/learn/${lang}/${d}">${inner}</a>` : `<div class="dl">${inner}</div>`;
    }
    return `<div class="card wk"><h3>Tuần ${wk.week}</h3><div class="wt">${wk.title}</div>${rows}</div>`;
  }).join("");
  app.innerHTML=`<header class="hero"><div class="wrap"><p class="hello">30 ngày, mỗi ngày 15 phút mỗi thứ tiếng</p><h1>Lộ trình</h1></div></header>
   <main class="wrap"><div class="seg"><button class="${lang==="en"?"on":""}" data-rm="en">Tiếng Anh</button><button class="${lang==="zh"?"on":""}" data-rm="zh">Tiếng Trung</button></div>${weeks}
   <a class="btn ghost block" href="test.html" style="text-decoration:none;text-align:center">Bài kiểm tra đầu vào</a></main>`;
}

/* ---------- Cài đặt ---------- */
function renderSettings(){
  const c=syncCfg(), on=Sync.on();
  const last = Sync.last || (c.lastOk ? "Lần đồng bộ gần nhất: "+new Date(c.lastOk).toLocaleString("vi-VN") : "");
  app.innerHTML=`<header class="hero"><div class="wrap"><p class="hello">Đồng bộ và cài đặt</p><h1>Cài đặt</h1></div></header>
  <main class="wrap">
    <div class="sec">Đồng bộ giữa các thiết bị</div>
    <div class="card">
      <div class="status ${on?"on":""}"><i></i>${on?"Đang bật đồng bộ":"Chưa bật đồng bộ"}</div>
      ${last?`<p class="small">${last}</p>`:""}
      ${on?`<div class="btns" style="justify-content:flex-start;margin-top:10px"><button class="btn" data-set="sync">Đồng bộ ngay</button><button class="btn ghost" data-set="off">Tắt trên máy này</button></div>`
      :`<p class="small">Tiến độ được lưu vào một ghi chú bí mật (Gist) trong tài khoản GitHub của KC. Mỗi thiết bị dán mã truy cập một lần.</p>
      <ol class="steps">
        <li>Mở <a href="https://github.com/settings/tokens/new?scopes=gist&description=Kim%20Cun%20hoc%20di" target="_blank" rel="noopener">trang tạo mã truy cập</a> (đã đăng nhập tài khoản Kimcunhocdi).</li>
        <li>Ô Note giữ nguyên, Expiration chọn thời hạn KC muốn, chỉ tick quyền <b>gist</b>.</li>
        <li>Bấm Generate token, sao chép mã bắt đầu bằng ghp_ và dán vào ô dưới đây.</li>
        <li>Trên iPad và máy tính, KC dán lại đúng mã đó một lần là xong.</li>
      </ol>
      <input class="field" id="tok" type="password" placeholder="Dán mã truy cập vào đây" autocomplete="off">
      <button class="btn block" data-set="connect">Bật đồng bộ</button>
      <p class="small">Mã chỉ lưu trên thiết bị này và chỉ có quyền đọc ghi ghi chú, không đụng tới phần khác của tài khoản.</p>`}
    </div>
    <div class="sec">Cài lên màn hình chính</div>
    <div class="card prose small">
      <p><b>iPhone, iPad:</b> mở bằng Safari, bấm nút Chia sẻ, chọn “Thêm vào MH chính”.</p>
      <p><b>Máy tính:</b> mở bằng Chrome, bấm biểu tượng cài đặt ở cuối thanh địa chỉ.</p>
    </div>
    <div class="sec">Khác</div>
    <div class="card">
      <a href="test.html">Làm lại bài kiểm tra đầu vào</a>
      <p class="small" style="margin-bottom:0">Đã học: tiếng Anh ${maxDone("en")} ngày, tiếng Trung ${maxDone("zh")} ngày · ${Object.keys(S.srs).length} từ trong kho ôn tập.</p>
    </div>
  </main>`;
}

/* ---------- Sự kiện ---------- */
document.addEventListener("click",async e=>{
  const say=e.target.closest("[data-say]");
  if(say){speak(decodeURIComponent(say.dataset.say),say.dataset.lang);return;}
  const opt=e.target.closest(".opt[data-q]");
  if(opt&&L){
    const qk=opt.dataset.q, qi=+opt.dataset.qi, oi=+opt.dataset.oi;
    L.quiz[qk]=L.quiz[qk]||{}; if(L.quiz[qk][qi]!==undefined) return;
    L.quiz[qk][qi]=oi;
    const card=opt.closest(".q"), list=qk==="check"?L.check:L.practice, q=list[qi];
    card.querySelectorAll(".opt").forEach((b,j)=>{b.disabled=true;if(j===q.a)b.classList.add("right");else if(j===oi)b.classList.add("wrong");});
    card.querySelector(".why").classList.add("show");
    const nx=document.getElementById("next"); if(nx) nx.disabled=!stepReady(L.steps[L.idx]);
    return;
  }
  if(e.target.id==="next"&&L){nextStep();return;}
  const tg=e.target.closest("[data-tg]");
  if(tg){tg.classList.toggle("on");document.getElementById("dlg").classList.toggle(tg.dataset.tg==="py"?"hide-py":"hide-vi",!tg.classList.contains("on"));return;}
  if(e.target.closest("[data-playall]")&&L){
    const lines=L.D.dialogue.map(l=>l.h); let i=0;
    const next=()=>{if(i<lines.length) speak(lines[i++],"zh-CN",()=>setTimeout(next,500));};
    next(); return;
  }
  const hw=e.target.closest("[data-hw]");
  if(hw&&writer){
    const msg=document.getElementById("hw-msg");
    if(hw.dataset.hw==="animate"){writer.cancelQuiz&&writer.cancelQuiz();writer.showCharacter();writer.animateCharacter();msg.textContent="Quan sát hướng đi và thứ tự từng nét.";}
    else{writer.quiz({onMistake:()=>{msg.textContent="Chưa đúng nét, thử lại nhé. Sai 2 lần sẽ có gợi ý.";},onComplete:d=>{msg.textContent=d.totalMistakes?`Xong! Sai ${d.totalMistakes} lần, viết thêm một lượt nữa nhé.`:"Tuyệt vời, đúng hết các nét!";}});msg.textContent="Viết từng nét theo đúng thứ tự.";}
    return;
  }
  const rv=e.target.closest("[data-rv]");
  if(rv&&R){if(rv.dataset.rv==="show"){R.open=true;renderReview();}else rate(rv.dataset.rv==="1");return;}
  const rm=e.target.closest("[data-rm]");
  if(rm){location.hash="#/roadmap/"+rm.dataset.rm;return;}
  const st=e.target.closest("[data-set]");
  if(st){
    if(st.dataset.set==="connect"){
      const tok=(document.getElementById("tok").value||"").trim();
      if(!tok){toast("KC dán mã truy cập trước nhé");return;}
      st.disabled=true; st.textContent="Đang kết nối...";
      try{await Sync.connect(tok); toast("Đã bật đồng bộ"); renderSettings();}
      catch(err){setSyncCfg({}); toast("Không kết nối được, KC kiểm tra lại mã"); st.disabled=false; st.textContent="Bật đồng bộ";}
    }else if(st.dataset.set==="sync"){toast("Đang đồng bộ"); await Sync.run(); toast(Sync.last||"Xong");}
    else if(st.dataset.set==="off"){setSyncCfg({}); Sync.last=""; renderSettings(); toast("Đã tắt đồng bộ trên máy này");}
  }
});

if("serviceWorker" in navigator && location.protocol==="https:"){navigator.serviceWorker.register("sw.js").catch(()=>{});}
route();
Sync.run();
})();
