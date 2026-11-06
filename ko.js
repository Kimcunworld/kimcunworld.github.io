// Tiếng Hàn · Sơ cấp 1 (Tiếng Hàn tổng hợp dành cho người Việt Nam) · mỗi ngày 5 từ, khoảng 15 phút
window.KO_PLAN = [
  {day:1, book:"Sơ cấp 1 · Hangul", title:"ㅏ ㅓ ㅗ ㅜ ㅡ ㅣ", vi:"6 nguyên âm cơ bản và ㅇ câm"},
  {day:2, book:"Sơ cấp 1 · Hangul", title:"ㅑ ㅕ ㅛ ㅠ", vi:"4 nguyên âm có y"},
  {day:3, book:"Sơ cấp 1 · Hangul", title:"ㄱ ㄴ ㄷ ㄹ ㅁ", vi:"Phụ âm cơ bản (1)"},
  {day:4, book:"Sơ cấp 1 · Hangul", title:"ㅂ ㅅ ㅈ ㅎ", vi:"Phụ âm cơ bản (2)"},
  {day:5, book:"Sơ cấp 1 · Hangul", title:"ㅋ ㅌ ㅍ ㅊ · ㄲ ㄸ ㅃ ㅆ ㅉ", vi:"Phụ âm bật hơi và phụ âm căng"},
  {day:6, book:"Sơ cấp 1 · Hangul", title:"ㅐ ㅔ ㅘ ㅝ ㅢ …", vi:"11 nguyên âm ghép"},
  {day:7, book:"Sơ cấp 1 · Hangul", title:"Patchim", vi:"Phụ âm cuối và ôn tập tuần 1"},
  {day:8, book:"Sơ cấp 1 · Bài 1", title:"소개", vi:"Giới thiệu: 안녕하세요, 저는 … 입니다"},
  {day:9, book:"Sơ cấp 1 · Bài 1", title:"소개", vi:"Quốc gia, nghề nghiệp · 은/는"},
  {day:10, book:"Sơ cấp 1 · Bài 1", title:"소개", vi:"입니까? · luyện tự giới thiệu"},
  {day:11, book:"Sơ cấp 1 · Bài 2", title:"학교", vi:"Trường học: 이것, 그것, 저것"},
  {day:12, book:"Sơ cấp 1 · Bài 2", title:"학교", vi:"Đồ vật trong lớp · 이/가 아닙니다"},
  {day:13, book:"Sơ cấp 1 · Bài 2", title:"학교", vi:"Hỏi đây là gì · luyện nói"},
  {day:14, book:"Ôn tập", title:"Ôn tập", vi:"Ôn tập tuần 2"},
  {day:15, book:"Sơ cấp 1 · Bài 3", title:"일상생활", vi:"Sinh hoạt hằng ngày: -ㅂ/습니다"},
  {day:16, book:"Sơ cấp 1 · Bài 3", title:"일상생활", vi:"Tân ngữ 을/를 · địa điểm 에서"},
  {day:17, book:"Sơ cấp 1 · Bài 3", title:"일상생활", vi:"Kể một ngày của mình"},
  {day:18, book:"Sơ cấp 1 · Bài 4", title:"날짜와 요일", vi:"Ngày và thứ: số Hán Hàn"},
  {day:19, book:"Sơ cấp 1 · Bài 4", title:"날짜와 요일", vi:"Thứ trong tuần · 에 chỉ thời gian"},
  {day:20, book:"Sơ cấp 1 · Bài 4", title:"날짜와 요일", vi:"Hỏi ngày tháng, lịch hẹn"},
  {day:21, book:"Ôn tập", title:"Ôn tập", vi:"Ôn tập tuần 3"},
  {day:22, book:"Sơ cấp 1 · Bài 5", title:"하루 일과", vi:"Công việc trong ngày: số thuần Hàn"},
  {day:23, book:"Sơ cấp 1 · Bài 5", title:"하루 일과", vi:"Giờ giấc · 에 가다"},
  {day:24, book:"Sơ cấp 1 · Bài 5", title:"하루 일과", vi:"Kể lịch làm việc ở quán"},
  {day:25, book:"Sơ cấp 1 · Bài 6", title:"주말", vi:"Cuối tuần: thì quá khứ 았/었"},
  {day:26, book:"Sơ cấp 1 · Bài 6", title:"주말", vi:"Hoạt động cuối tuần · 하고"},
  {day:27, book:"Sơ cấp 1 · Bài 7", title:"물건 사기", vi:"Mua sắm: 주세요, giá tiền"},
  {day:28, book:"Sơ cấp 1 · Bài 8", title:"음식", vi:"Thức ăn: gọi món ở nhà hàng"},
  {day:29, book:"Ôn tập", title:"Ôn tập", vi:"Ôn tập tổng hợp"},
  {day:30, book:"Kiểm tra", title:"Kiểm tra", vi:"Kiểm tra lại Hangul và bài 1 đến 8"}
];

/* Bảng chữ cái dùng cho Luyện tập và game */
window.KO_JAMO = [
  {j:"ㅇ",s:"아",r:"-",vi:"câm ở đầu âm tiết",t:"c",d:1},
  {j:"ㅏ",s:"아",r:"a",vi:"a",t:"v",d:1},{j:"ㅓ",s:"어",r:"eo",vi:"ơ",t:"v",d:1},{j:"ㅗ",s:"오",r:"o",vi:"ô",t:"v",d:1},{j:"ㅜ",s:"우",r:"u",vi:"u",t:"v",d:1},{j:"ㅡ",s:"으",r:"eu",vi:"ư",t:"v",d:1},{j:"ㅣ",s:"이",r:"i",vi:"i",t:"v",d:1},
  {j:"ㅑ",s:"야",r:"ya",vi:"ya",t:"v",d:2},{j:"ㅕ",s:"여",r:"yeo",vi:"yơ",t:"v",d:2},{j:"ㅛ",s:"요",r:"yo",vi:"yô",t:"v",d:2},{j:"ㅠ",s:"유",r:"yu",vi:"yu",t:"v",d:2},
  {j:"ㄱ",s:"가",r:"g/k",vi:"c, g",t:"c",d:3},{j:"ㄴ",s:"나",r:"n",vi:"n",t:"c",d:3},{j:"ㄷ",s:"다",r:"d/t",vi:"t, đ",t:"c",d:3},{j:"ㄹ",s:"라",r:"r/l",vi:"r, l",t:"c",d:3},{j:"ㅁ",s:"마",r:"m",vi:"m",t:"c",d:3},
  {j:"ㅂ",s:"바",r:"b/p",vi:"b, p",t:"c",d:4},{j:"ㅅ",s:"사",r:"s",vi:"s",t:"c",d:4},{j:"ㅈ",s:"자",r:"j",vi:"ch",t:"c",d:4},{j:"ㅎ",s:"하",r:"h",vi:"h",t:"c",d:4},
  {j:"ㅋ",s:"카",r:"k",vi:"kh",t:"c",d:5},{j:"ㅌ",s:"타",r:"t",vi:"th",t:"c",d:5},{j:"ㅍ",s:"파",r:"p",vi:"ph",t:"c",d:5},{j:"ㅊ",s:"차",r:"ch",vi:"ch bật hơi",t:"c",d:5},
  {j:"ㄲ",s:"까",r:"kk",vi:"k căng",t:"c",d:5},{j:"ㄸ",s:"따",r:"tt",vi:"t căng",t:"c",d:5},{j:"ㅃ",s:"빠",r:"pp",vi:"p căng",t:"c",d:5},{j:"ㅆ",s:"싸",r:"ss",vi:"s căng",t:"c",d:5},{j:"ㅉ",s:"짜",r:"jj",vi:"ch căng",t:"c",d:5},
  {j:"ㅐ",s:"애",r:"ae",vi:"e",t:"v",d:6},{j:"ㅔ",s:"에",r:"e",vi:"ê",t:"v",d:6},{j:"ㅒ",s:"얘",r:"yae",vi:"ye",t:"v",d:6},{j:"ㅖ",s:"예",r:"ye",vi:"yê",t:"v",d:6},
  {j:"ㅘ",s:"와",r:"wa",vi:"oa",t:"v",d:6},{j:"ㅙ",s:"왜",r:"wae",vi:"oe",t:"v",d:6},{j:"ㅚ",s:"외",r:"oe",vi:"uê",t:"v",d:6},{j:"ㅝ",s:"워",r:"wo",vi:"uơ",t:"v",d:6},{j:"ㅞ",s:"웨",r:"we",vi:"uê",t:"v",d:6},{j:"ㅟ",s:"위",r:"wi",vi:"uy",t:"v",d:6},{j:"ㅢ",s:"의",r:"ui",vi:"ưi",t:"v",d:6}
];
/* Bộ ba âm thường, bật hơi, căng: dùng cho game và luyện nghe */
window.KO_TRIO = [["가","카","까"],["다","타","따"],["바","파","빠"],["자","차","짜"],["고","코","꼬"],["두","투","뚜"],["비","피","삐"],["지","치","찌"],["기","키","끼"]];

const KV=(id,w,ipa,vi,ex,exRom,exVi)=>({id,w,ipa,vi,ex,exRom,exVi});
const kg=t=>`<span class='ko big'>${t}</span>`;
const ks=t=>`<span class='ko'>${t}</span>`;
const KO_VOCAB_STEP={type:"vocab",name:"5 từ mới",intro:"Nghe từng từ, đọc theo 3 lần. Nhìn chữ Hàn trước, phiên âm Latin chỉ để đối chiếu."};
const KGAME={type:"game",name:"Trò chơi nhanh",intro:"Ghép từ tiếng Hàn với nghĩa nhanh nhất có thể.",pairs:"vocab"};
const HG=(name,intro,letters)=>({type:"hangul",name,intro,letters});
const L_=(c,name,sound,say,strokes)=>({c,name,sound,say,strokes});

window.KO_LESSONS = [
{
  day:1, title:"6 nguyên âm cơ bản", book:"Sơ cấp 1 · Hangul",
  vocab:[
    KV("ai","아이","ai","em bé, đứa trẻ","아 · 이","a · i","Ghép 2 âm tiết: 아 và 이"),
    KV("oi","오이","oi","dưa chuột","오 · 이","o · i","Ghép 2 âm tiết: 오 và 이"),
    KV("i","이","i","số hai; cái răng","이","i","Một âm tiết: ㅇ câm + ㅣ"),
    KV("au","아우","au","em (cách nói cũ)","아 + 우","a + u","Ghép 2 âm tiết: 아 và 우"),
    KV("ua","우아","ua","thanh lịch, tao nhã","우 · 아","u · a","Ghép 2 âm tiết: 우 và 아")
  ],
  steps:[
    {type:"explain",name:"Làm quen",title:"Chữ Hangul và 6 nguyên âm đầu tiên",blocks:[
      {h:"1. Chữ Hangul là gì?",p:["Hangul là bảng chữ cái tiếng Hàn do vua Sejong cho tạo ra năm 1443, với mong muốn ai cũng học được. Hiện nay có <b>21 nguyên âm và 19 phụ âm</b>.","Nguyên âm cơ bản được tạo từ 3 nét: chấm (bầu trời), nét ngang ㅡ (mặt đất) và nét đứng ㅣ (con người)."]},
      {h:"2. Một âm tiết luôn có phụ âm đầu",p:[`Chữ Hàn viết theo khối, mỗi khối là một âm tiết. Nguyên âm <b>không đứng một mình</b>, phải có phụ âm đi trước. Khi không có âm đầu, ta dùng ${ks("ㅇ")} làm “ghế trống”, đọc câm.`,`Ví dụ: ${ks("ㅇ")} + ${ks("ㅏ")} = ${ks("아")}, đọc là <b>a</b>.`]},
      {h:"3. Cách viết: đứng hay nằm",p:[`Nguyên âm <b>đứng</b> (${ks("ㅏ ㅓ ㅣ")}): phụ âm đặt <b>bên trái</b>, ví dụ ${ks("아 어 이")}.`,`Nguyên âm <b>nằm</b> (${ks("ㅗ ㅜ ㅡ")}): phụ âm đặt <b>phía trên</b>, ví dụ ${ks("오 우 으")}.`,"Thứ tự viết luôn là: trên xuống dưới, trái sang phải."]},
      {table:{head:["Chữ","Âm tiết","Latin","Đọc gần giống tiếng Việt"],rows:[[ks("ㅏ"),ks("아"),"a","a"],[ks("ㅓ"),ks("어"),"eo","ơ"],[ks("ㅗ"),ks("오"),"o","ô"],[ks("ㅜ"),ks("우"),"u","u"],[ks("ㅡ"),ks("으"),"eu","ư"],[ks("ㅣ"),ks("이"),"i","i"]]}},
      {ex:[{t:"아",py:"a",vi:"a"},{t:"어",py:"eo",vi:"ơ, miệng mở rộng hơn chữ ơ một chút"},{t:"오",py:"o",vi:"ô, tròn môi"},{t:"우",py:"u",vi:"u, tròn môi và chu ra"},{t:"으",py:"eu",vi:"ư, môi kéo ngang"},{t:"이",py:"i",vi:"i"}]},
      {tip:`<b>Mẹo nhớ:</b> nét ngắn chỉ ra ngoài hoặc lên trên là âm “mở” (${ks("ㅏ ㅗ")}: a, ô); chỉ vào trong hoặc xuống dưới là âm “tối” (${ks("ㅓ ㅜ")}: ơ, u).`}
    ]},
    HG("Viết chữ","Đọc thứ tự nét, nghe âm, rồi tô theo chữ mờ bằng bút hoặc ngón tay 2 đến 3 lần. Bấm Ẩn chữ mờ để tự viết.",[
      L_("ㅏ","아","a","아","① Sổ dọc từ trên xuống. ② Gạch ngang ngắn sang phải, ở giữa nét sổ."),
      L_("ㅓ","어","ơ","어","① Gạch ngang ngắn từ trái vào nét sổ. ② Sổ dọc từ trên xuống."),
      L_("ㅗ","오","ô","오","① Sổ ngắn từ trên xuống. ② Gạch ngang dài từ trái sang phải."),
      L_("ㅜ","우","u","우","① Gạch ngang dài từ trái sang phải. ② Sổ ngắn từ giữa xuống."),
      L_("ㅡ","으","ư","으","① Một gạch ngang dài từ trái sang phải."),
      L_("ㅣ","이","i","이","① Một nét sổ dọc từ trên xuống."),
      L_("ㅇ","이응","câm khi đứng đầu","아","① Vẽ vòng tròn ngược chiều kim đồng hồ, bắt đầu từ đỉnh.")
    ]),
    KO_VOCAB_STEP,
    {type:"drill",name:"Nhận mặt chữ",skill:"hangul",intro:"Nhìn chữ, chọn cách đọc đúng.",items:[
      {type:"mcq",q:`${kg("아")} đọc là:`,o:["a","ơ","ô","u"],a:0,why:"아 = ㅇ câm + ㅏ: a."},
      {type:"mcq",q:`${kg("어")} đọc là:`,o:["ơ","a","ô","ư"],a:0,why:"어 = ㅇ câm + ㅓ: ơ."},
      {type:"mcq",q:`${kg("우")} đọc là:`,o:["u","ô","ư","i"],a:0,why:"우: u, tròn môi."},
      {type:"mcq",q:`${kg("으")} đọc là:`,o:["ư","u","ơ","i"],a:0,why:"으: ư, môi kéo ngang."},
      {type:"mcq",q:"Âm tiết nào đọc là “ô”?",o:[ks("오"),ks("우"),ks("어"),ks("아")],a:0,why:"오: ô."},
      {type:"mcq",q:`Trong ${ks("아")}, chữ ${ks("ㅇ")} đọc thế nào?`,o:["Không đọc (câm)","ng","o","a"],a:0,why:"ㅇ đứng đầu âm tiết thì câm, chỉ giữ chỗ."},
      {type:"mcq",q:`Với nguyên âm nằm ${ks("ㅗ")}, chữ ${ks("ㅇ")} đặt ở đâu?`,o:["Phía trên","Bên trái","Bên phải","Phía dưới"],a:0,why:"Nguyên âm nằm (ㅗ ㅜ ㅡ): phụ âm đặt phía trên. 오."}
    ]},
    {type:"drill",name:"Nghe",skill:"listening",intro:"Nghe và chọn chữ đúng. Bấm nghe bao nhiêu lần cũng được.",items:[
      {type:"mcq",q:"Nghe và chọn âm tiết đúng",say:"어",o:[ks("어"),ks("오"),ks("아"),ks("우")],a:0,why:"어: ơ."},
      {type:"mcq",q:"Nghe và chọn âm tiết đúng",say:"우",o:[ks("우"),ks("오"),ks("으"),ks("이")],a:0,why:"우: u."},
      {type:"mcq",q:"Nghe và chọn từ đúng",say:"오이",o:[ks("오이"),ks("아이"),ks("우이"),ks("어이")],a:0,why:"오이: dưa chuột."},
      {type:"mcq",q:"Nghe và chọn nghĩa đúng",say:"아이",o:["em bé","dưa chuột","số hai","thanh lịch"],a:0,why:"아이: em bé."},
      {type:"mcq",q:"Nghe và chọn từ đúng",say:"우아",o:[ks("우아"),ks("아우"),ks("오아"),ks("어우")],a:0,why:"우아: thanh lịch."}
    ]},
    {type:"speak",name:"Nói",lang:"ko",intro:"Nghe mẫu, đọc đuổi theo 3 lần, rồi ghi âm và nghe lại so với giọng mẫu.",items:[
      {q:"Đọc 6 nguyên âm: a, ơ, ô, u, ư, i",model:"아, 어, 오, 우, 으, 이."},
      {q:"Đọc 5 từ hôm nay",model:"아이, 오이, 이, 아우, 우아."}
    ]},
    KGAME
  ]
},
{
  day:2, title:"4 nguyên âm có y", book:"Sơ cấp 1 · Hangul",
  vocab:[
    KV("yeou","여우","yeou","con cáo","여 · 우","yeo · u","yơ + u"),
    KV("uyu","우유","uyu","sữa","우 · 유","u · yu","Từ có trong sách, phần từ vựng Hangul"),
    KV("iyu","이유","iyu","lý do","이 · 유","i · yu","i + yu"),
    KV("yeoyu","여유","yeoyu","sự thong thả, dư dả","여 · 유","yeo · yu","yơ + yu"),
    KV("aya","아야","aya","ui da (khi bị đau)","아 + 야","a + ya","a + ya")
  ],
  steps:[
    {type:"explain",name:"Phát âm",title:"Thêm một nét là thêm âm y",blocks:[
      {h:"1. Quy tắc nhân đôi nét",p:[`Thêm một nét ngắn vào nguyên âm hôm qua thì đọc thêm âm <b>y</b> ở đầu.`,`${ks("ㅏ")} a → ${ks("ㅑ")} ya · ${ks("ㅓ")} ơ → ${ks("ㅕ")} yơ · ${ks("ㅗ")} ô → ${ks("ㅛ")} yô · ${ks("ㅜ")} u → ${ks("ㅠ")} yu`]},
      {table:{head:["Chữ","Âm tiết","Latin","Đọc gần giống tiếng Việt"],rows:[[ks("ㅑ"),ks("야"),"ya","ya"],[ks("ㅕ"),ks("여"),"yeo","yơ"],[ks("ㅛ"),ks("요"),"yo","yô"],[ks("ㅠ"),ks("유"),"yu","yu"]]}},
      {ex:[{t:"야",py:"ya",vi:"ya"},{t:"여",py:"yeo",vi:"yơ"},{t:"요",py:"yo",vi:"yô"},{t:"유",py:"yu",vi:"yu"}]},
      {trap:[["여 đọc là “yô”","여 đọc là “yơ”","ㅕ là ㅓ (ơ) thêm nét, nên đọc yơ. Âm yô là ㅛ."]]},
      {tip:"<b>Mẹo nhớ:</b> 2 nét ngắn = có y. Đếm nét ngắn là biết ngay."}
    ]},
    HG("Viết chữ","Tô theo chữ mờ 2 lượt, rồi Ẩn chữ mờ và tự viết 1 lượt.",[
      L_("ㅑ","야","ya","야","① Sổ dọc từ trên xuống. ② và ③ Hai gạch ngang ngắn sang phải."),
      L_("ㅕ","여","yơ","여","① và ② Hai gạch ngang ngắn từ trái vào. ③ Sổ dọc từ trên xuống."),
      L_("ㅛ","요","yô","요","① và ② Hai sổ ngắn từ trên xuống. ③ Gạch ngang dài."),
      L_("ㅠ","유","yu","유","① Gạch ngang dài. ② và ③ Hai sổ ngắn xuống dưới.")
    ]),
    KO_VOCAB_STEP,
    {type:"drill",name:"Nhận mặt chữ",skill:"hangul",intro:"Chọn cách đọc đúng.",items:[
      {type:"mcq",q:`${kg("여")} đọc là:`,o:["yơ","yô","ya","yu"],a:0,why:"ㅕ = ㅓ thêm nét: yơ."},
      {type:"mcq",q:`${kg("요")} đọc là:`,o:["yô","yơ","yu","ya"],a:0,why:"ㅛ = ㅗ thêm nét: yô."},
      {type:"mcq",q:`${kg("유")} đọc là:`,o:["yu","yô","u","ya"],a:0,why:"ㅠ = ㅜ thêm nét: yu."},
      {type:"mcq",q:"Âm tiết nào đọc là “ya”?",o:[ks("야"),ks("아"),ks("여"),ks("요")],a:0,why:"야: ya."},
      {type:"mcq",q:`Từ ${kg("우유")} nghĩa là gì?`,o:["sữa","cáo","lý do","em bé"],a:0,why:"우유: sữa."},
      {type:"mcq",q:"“Lý do” viết là:",o:[ks("이유"),ks("여유"),ks("우유"),ks("여우")],a:0,why:"이유: lý do."}
    ]},
    {type:"drill",name:"Nghe",skill:"listening",intro:"Nghe kỹ sự khác nhau giữa có y và không có y.",items:[
      {type:"mcq",q:"Nghe và chọn âm tiết đúng",say:"야",o:[ks("야"),ks("아"),ks("여"),ks("어")],a:0,why:"야: ya."},
      {type:"mcq",q:"Nghe và chọn âm tiết đúng",say:"요",o:[ks("요"),ks("오"),ks("유"),ks("여")],a:0,why:"요: yô."},
      {type:"mcq",q:"Nghe và chọn từ đúng",say:"여우",o:[ks("여우"),ks("여유"),ks("우유"),ks("이유")],a:0,why:"여우: con cáo."},
      {type:"mcq",q:"Nghe và chọn nghĩa đúng",say:"우유",o:["sữa","con cáo","lý do","thong thả"],a:0,why:"우유: sữa."},
      {type:"mcq",q:"Nghe và chọn từ đúng",say:"여유",o:[ks("여유"),ks("여우"),ks("이유"),ks("아야")],a:0,why:"여유: thong thả."}
    ]},
    {type:"speak",name:"Nói",lang:"ko",intro:"Đọc đuổi theo mẫu, chú ý môi: yô tròn môi, yơ mở miệng.",items:[
      {q:"Đọc cặp không y và có y",model:"아, 야. 어, 여. 오, 요. 우, 유."},
      {q:"Đọc 5 từ hôm nay",model:"여우, 우유, 이유, 여유, 아야."}
    ]},
    KGAME
  ]
},
{
  day:3, title:"Phụ âm ㄱ ㄴ ㄷ ㄹ ㅁ", book:"Sơ cấp 1 · Hangul",
  vocab:[
    KV("namu","나무","namu","cái cây","나 · 무","na · mu","n + a, m + u"),
    KV("gogi","고기","gogi","thịt","고 · 기","go · gi","Từ có trong sách, phần từ vựng Hangul"),
    KV("dari","다리","dari","cái chân; cây cầu","다 · 리","da · ri","ㄹ giữa hai nguyên âm đọc gần r"),
    KV("nara","나라","nara","đất nước","나 · 라","na · ra","n + a, r + a"),
    KV("meori","머리","meori","cái đầu; tóc","머 · 리","meo · ri","m + ơ, r + i")
  ],
  steps:[
    {type:"explain",name:"Phát âm",title:"5 phụ âm đầu tiên",blocks:[
      {h:"1. Phụ âm vẽ theo khẩu hình",p:["5 phụ âm gốc được vẽ theo hình dáng lưỡi và môi khi phát âm:",`${ks("ㄱ")}: gốc lưỡi chặn họng · ${ks("ㄴ")}: đầu lưỡi chạm lợi · ${ks("ㅁ")}: hình cái miệng · ${ks("ㅅ")}: hình răng · ${ks("ㅇ")}: hình cổ họng.`,`Thêm nét vào ${ks("ㄴ")} ta có ${ks("ㄷ")}, thêm tiếp có ${ks("ㄹ")}.`]},
      {table:{head:["Chữ","Tên","Âm tiết","Đọc gần giống"],rows:[[ks("ㄱ"),ks("기역"),ks("가"),"c, g (giữa c và g)"],[ks("ㄴ"),ks("니은"),ks("나"),"n"],[ks("ㄷ"),ks("디귿"),ks("다"),"t, đ (giữa t và đ)"],[ks("ㄹ"),ks("리을"),ks("라"),"r nhẹ, ở cuối là l"],[ks("ㅁ"),ks("미음"),ks("마"),"m"]]}},
      {h:"2. Ghép phụ âm với nguyên âm",p:[`${ks("ㄱ")} + ${ks("ㅏ")} = ${ks("가")} (ga) · ${ks("ㄴ")} + ${ks("ㅗ")} = ${ks("노")} (no) · ${ks("ㅁ")} + ${ks("ㅜ")} = ${ks("무")} (mu)`,`Khi đứng đầu từ, ${ks("ㄱ")} và ${ks("ㄷ")} nghe gần <b>c, t</b>; khi nằm giữa hai nguyên âm nghe gần <b>g, đ</b>. Ví dụ ${ks("고기")}: kô gi.`]},
      {ex:[{t:"가",py:"ga",vi:"ga"},{t:"나",py:"na",vi:"na"},{t:"다",py:"da",vi:"đa"},{t:"라",py:"ra",vi:"ra"},{t:"마",py:"ma",vi:"ma"}]},
      {trap:[["ㄹ đọc rung như r tiếng Việt","ㄹ đọc nhẹ, chạm lưỡi một cái","ㄹ ở đầu và giữa từ là r rất nhẹ (gần như l), không rung lưỡi."]]}
    ]},
    HG("Viết chữ","Phụ âm viết hơi nhỏ, chừa chỗ cho nguyên âm. Tô 2 lượt rồi tự viết.",[
      L_("ㄱ","기역","c, g","가","① Một nét: gạch ngang rồi gập xuống, hơi cong về trái."),
      L_("ㄴ","니은","n","나","① Một nét: sổ xuống rồi gập ngang sang phải."),
      L_("ㄷ","디귿","t, đ","다","① Gạch ngang ở trên. ② Sổ xuống rồi gập ngang (giống ㄴ)."),
      L_("ㄹ","리을","r, l","라","① Ngang gập xuống (giống ㄱ). ② Gạch ngang ngắn ở giữa. ③ Sổ xuống rồi gập ngang (giống ㄴ)."),
      L_("ㅁ","미음","m","마","① Sổ trái. ② Ngang gập xuống bên phải. ③ Gạch ngang đáy khép lại.")
    ]),
    KO_VOCAB_STEP,
    {type:"drill",name:"Ghép âm tiết",skill:"hangul",intro:"Ghép phụ âm với nguyên âm thành một khối chữ.",items:[
      {type:"mcq",q:`${kg("ㄱ + ㅏ")} = ?`,o:[ks("가"),ks("거"),ks("고"),ks("나")],a:0,why:"ㄱ + ㅏ = 가 (ga)."},
      {type:"mcq",q:`${kg("ㄴ + ㅜ")} = ?`,o:[ks("누"),ks("노"),ks("너"),ks("무")],a:0,why:"ㅜ là nguyên âm nằm: ㄴ đặt phía trên, 누 (nu)."},
      {type:"mcq",q:`${kg("ㅁ + ㅓ")} = ?`,o:[ks("머"),ks("모"),ks("마"),ks("러")],a:0,why:"ㅁ + ㅓ = 머 (mơ)."},
      {type:"mcq",q:`${kg("다")} đọc là:`,o:["đa","na","ra","ma"],a:0,why:"다: đa."},
      {type:"mcq",q:`${kg("로")} đọc là:`,o:["rô","lơ","nô","đô"],a:0,why:"ㄹ + ㅗ = 로: rô."},
      {type:"mcq",q:`${kg("고기")} nghĩa là gì?`,o:["thịt","cái cây","đất nước","cái đầu"],a:0,why:"고기: thịt."},
      {type:"mcq",q:"“Đất nước” viết là:",o:[ks("나라"),ks("나무"),ks("다리"),ks("머리")],a:0,why:"나라: đất nước."}
    ]},
    {type:"drill",name:"Nghe",skill:"listening",intro:"Nghe và chọn đúng.",items:[
      {type:"mcq",q:"Nghe và chọn âm tiết đúng",say:"나",o:[ks("나"),ks("다"),ks("라"),ks("마")],a:0,why:"나: na."},
      {type:"mcq",q:"Nghe và chọn âm tiết đúng",say:"머",o:[ks("머"),ks("모"),ks("너"),ks("마")],a:0,why:"머: mơ."},
      {type:"mcq",q:"Nghe và chọn từ đúng",say:"나무",o:[ks("나무"),ks("나라"),ks("다리"),ks("머리")],a:0,why:"나무: cái cây."},
      {type:"mcq",q:"Nghe và chọn nghĩa đúng",say:"머리",o:["cái đầu","cái chân","thịt","cái cây"],a:0,why:"머리: đầu, tóc."},
      {type:"mcq",q:"Nghe và chọn từ đúng",say:"다리",o:[ks("다리"),ks("나라"),ks("머리"),ks("고기")],a:0,why:"다리: chân, cây cầu."}
    ]},
    {type:"speak",name:"Nói",lang:"ko",intro:"Đọc đuổi theo mẫu. ㄹ chạm lưỡi thật nhẹ, không rung.",items:[
      {q:"Đọc 5 âm tiết",model:"가, 나, 다, 라, 마."},
      {q:"Đọc 5 từ hôm nay",model:"나무, 고기, 다리, 나라, 머리."}
    ]},
    KGAME
  ]
},
{
  day:4, title:"Phụ âm ㅂ ㅅ ㅈ ㅎ", book:"Sơ cấp 1 · Hangul",
  vocab:[
    KV("baji","바지","baji","cái quần","바 · 지","ba · ji","Từ có trong sách, phần từ vựng Hangul"),
    KV("moja","모자","moja","cái mũ","모 · 자","mo · ja","Từ có trong sách, phần từ vựng Hangul"),
    KV("saja","사자","saja","sư tử","사 · 자","sa · ja","s + a, ch + a"),
    KV("hana","하나","hana","một (số thuần Hàn)","하 + 나","ha + na","h + a, n + a"),
    KV("beoseu","버스","beoseu","xe buýt","버 · 스","beo · seu","Từ mượn tiếng Anh: bus")
  ],
  steps:[
    {type:"explain",name:"Phát âm",title:"4 phụ âm tiếp theo",blocks:[
      {table:{head:["Chữ","Tên","Âm tiết","Đọc gần giống"],rows:[[ks("ㅂ"),ks("비읍"),ks("바"),"b, p (giữa b và p)"],[ks("ㅅ"),ks("시옷"),ks("사"),"s (trước ㅣ đọc gần “si”)"],[ks("ㅈ"),ks("지읒"),ks("자"),"ch nhẹ"],[ks("ㅎ"),ks("히읗"),ks("하"),"h"]]}},
      {h:"1. Lưu ý phát âm",p:[`${ks("ㅂ")} đứng đầu từ nghe gần <b>p</b>, giữa hai nguyên âm nghe gần <b>b</b>. ${ks("바지")}: pa chi.`,`${ks("ㅈ")} là âm <b>ch nhẹ</b>, không bật hơi. ${ks("자")}: cha (nhẹ).`,`${ks("ㅅ")} + ${ks("ㅣ")} = ${ks("시")} đọc gần “si” (s mềm, hơi giống “shi”).`]},
      {ex:[{t:"바",py:"ba",vi:"ba, pa"},{t:"사",py:"sa",vi:"xa"},{t:"자",py:"ja",vi:"cha nhẹ"},{t:"하",py:"ha",vi:"ha"},{t:"시",py:"si",vi:"si"}]},
      {tip:`<b>Mẹo nhớ:</b> ${ks("ㅂ")} giống cái xô (bucket), ${ks("ㅅ")} giống chiếc răng, ${ks("ㅈ")} là ${ks("ㅅ")} đội thêm cái nón, ${ks("ㅎ")} là người đội mũ có chóp (hat).`}
    ]},
    HG("Viết chữ","Tô 2 lượt theo thứ tự nét, rồi tự viết.",[
      L_("ㅂ","비읍","b, p","바","① Sổ trái. ② Sổ phải. ③ Gạch ngang giữa. ④ Gạch ngang đáy."),
      L_("ㅅ","시옷","s","사","① Nét phẩy chéo xuống trái. ② Từ giữa nét ①, nét chéo xuống phải."),
      L_("ㅈ","지읒","ch nhẹ","자","① Gạch ngang rồi kéo chéo xuống trái (một nét liền). ② Nét chéo xuống phải."),
      L_("ㅎ","히읗","h","하","① Nét ngắn trên đỉnh. ② Gạch ngang. ③ Vòng tròn bên dưới.")
    ]),
    KO_VOCAB_STEP,
    {type:"drill",name:"Ghép âm tiết",skill:"hangul",intro:"Ghép và đọc.",items:[
      {type:"mcq",q:`${kg("ㅂ + ㅏ")} = ?`,o:[ks("바"),ks("파"),ks("마"),ks("다")],a:0,why:"ㅂ + ㅏ = 바."},
      {type:"mcq",q:`${kg("ㅅ + ㅗ")} = ?`,o:[ks("소"),ks("서"),ks("수"),ks("조")],a:0,why:"ㅅ + ㅗ = 소 (sô)."},
      {type:"mcq",q:`${kg("ㅈ + ㅣ")} = ?`,o:[ks("지"),ks("시"),ks("치"),ks("기")],a:0,why:"ㅈ + ㅣ = 지 (chi nhẹ)."},
      {type:"mcq",q:`${kg("하")} đọc là:`,o:["ha","sa","cha","ba"],a:0,why:"하: ha."},
      {type:"mcq",q:`${kg("모자")} nghĩa là gì?`,o:["cái mũ","cái quần","sư tử","xe buýt"],a:0,why:"모자: mũ."},
      {type:"mcq",q:"“Cái quần” viết là:",o:[ks("바지"),ks("모자"),ks("사자"),ks("하나")],a:0,why:"바지: quần."}
    ]},
    {type:"drill",name:"Nghe",skill:"listening",intro:"Nghe và chọn đúng.",items:[
      {type:"mcq",q:"Nghe và chọn âm tiết đúng",say:"사",o:[ks("사"),ks("자"),ks("하"),ks("바")],a:0,why:"사: sa."},
      {type:"mcq",q:"Nghe và chọn âm tiết đúng",say:"주",o:[ks("주"),ks("수"),ks("후"),ks("부")],a:0,why:"주: chu nhẹ."},
      {type:"mcq",q:"Nghe và chọn từ đúng",say:"사자",o:[ks("사자"),ks("모자"),ks("바지"),ks("하나")],a:0,why:"사자: sư tử."},
      {type:"mcq",q:"Nghe và chọn nghĩa đúng",say:"버스",o:["xe buýt","cái quần","số một","cái mũ"],a:0,why:"버스: xe buýt."},
      {type:"mcq",q:"Nghe và chọn từ đúng",say:"하나",o:[ks("하나"),ks("나라"),ks("나무"),ks("바지")],a:0,why:"하나: một."}
    ]},
    {type:"speak",name:"Nói",lang:"ko",intro:"Đọc đuổi theo mẫu, ㅈ đọc nhẹ, không phả hơi.",items:[
      {q:"Đọc 4 âm tiết",model:"바, 사, 자, 하."},
      {q:"Đọc 5 từ hôm nay",model:"바지, 모자, 사자, 하나, 버스."}
    ]},
    KGAME
  ]
},
{
  day:5, title:"Phụ âm bật hơi và phụ âm căng", book:"Sơ cấp 1 · Hangul",
  vocab:[
    KV("chima","치마","chima","cái váy","치 · 마","chi · ma","Từ có trong sách, phần từ vựng Hangul"),
    KV("podo","포도","podo","quả nho","포 · 도","po · do","Từ có trong sách, phần từ vựng Hangul"),
    KV("gicha","기차","gicha","tàu hỏa","기 · 차","gi · cha","Từ có trong sách, phần từ vựng Hangul"),
    KV("tokki","토끼","tokki","con thỏ","토 · 끼","to · kki","Từ có trong sách, phần từ vựng Hangul"),
    KV("appa","아빠","appa","bố (cách gọi thân mật)","아 + 빠","a + ppa","ㅃ đọc căng, gọn")
  ],
  steps:[
    {type:"explain",name:"Phát âm",title:"Thường, bật hơi, căng",blocks:[
      {h:"1. Ba nhóm phụ âm",p:["Tiếng Hàn có những bộ ba âm gần giống nhau, khác ở <b>lượng hơi</b>:","<b>Thường</b>: hơi đẩy ra vừa phải. <b>Bật hơi</b>: đẩy mạnh luồng hơi ra ngoài. <b>Căng</b>: căng cổ họng, phát âm nhanh, mạnh và ngắn, gần như không có hơi."]},
      {table:{head:["Thường","Bật hơi","Căng"],rows:[[ks("ㄱ 가"),ks("ㅋ 카"),ks("ㄲ 까")],[ks("ㄷ 다"),ks("ㅌ 타"),ks("ㄸ 따")],[ks("ㅂ 바"),ks("ㅍ 파"),ks("ㅃ 빠")],[ks("ㅈ 자"),ks("ㅊ 차"),ks("ㅉ 짜")],[ks("ㅅ 사"),"",ks("ㅆ 싸")]]}},
      {h:"2. Cách nhận mặt chữ",p:[`Bật hơi = chữ thường <b>thêm một nét</b>: ${ks("ㄱ→ㅋ")}, ${ks("ㄷ→ㅌ")}, ${ks("ㅈ→ㅊ")}. Riêng ${ks("ㅍ")} có hình riêng.`,`Căng = chữ thường <b>viết đôi</b>: ${ks("ㄲ ㄸ ㅃ ㅆ ㅉ")}.`]},
      {ex:[{t:"가",py:"ga",vi:"thường"},{t:"카",py:"ka",vi:"bật hơi, gần “kha”"},{t:"까",py:"kka",vi:"căng, gần “ca” gọn"},{t:"다",py:"da",vi:"thường"},{t:"타",py:"ta",vi:"bật hơi, gần “tha”"},{t:"따",py:"tta",vi:"căng, gần “ta” gọn"}]},
      {tip:"<b>Mẹo kiểm tra:</b> để tờ giấy trước miệng. Âm bật hơi làm tờ giấy bay, âm căng gần như không làm giấy động."}
    ]},
    HG("Viết chữ","Chữ bật hơi là chữ thường thêm nét. Chữ căng viết đôi, chữ bên trái hẹp hơn.",[
      L_("ㅋ","키읔","kh","카","① Ngang gập xuống (như ㄱ). ② Gạch ngang ngắn ở giữa."),
      L_("ㅌ","티읕","th","타","① Gạch ngang trên. ② Gạch ngang giữa. ③ Sổ xuống rồi gập ngang (như ㄴ)."),
      L_("ㅍ","피읖","ph","파","① Gạch ngang trên. ② Sổ trái. ③ Sổ phải. ④ Gạch ngang đáy."),
      L_("ㅊ","치읓","ch bật hơi","차","① Nét ngắn trên đỉnh. ② Ngang kéo chéo xuống trái. ③ Nét chéo xuống phải."),
      L_("ㄲ","쌍기역","k căng","까","Viết hai chữ ㄱ, bên trái trước, bên phải sau."),
      L_("ㅃ","쌍비읍","p căng","빠","Viết hai chữ ㅂ hẹp, bên trái trước.")
    ]),
    KO_VOCAB_STEP,
    {type:"drill",name:"Nhận mặt chữ",skill:"hangul",intro:"Phân biệt thường, bật hơi, căng.",items:[
      {type:"mcq",q:`${kg("카")} thuộc nhóm nào?`,o:["Bật hơi","Thường","Căng","Nguyên âm"],a:0,why:"ㅋ là ㄱ thêm nét: bật hơi."},
      {type:"mcq",q:`${kg("따")} thuộc nhóm nào?`,o:["Căng","Bật hơi","Thường","Nguyên âm"],a:0,why:"ㄸ là ㄷ viết đôi: căng."},
      {type:"mcq",q:`Chữ bật hơi của ${ks("ㅈ")} là:`,o:[ks("ㅊ"),ks("ㅉ"),ks("ㅅ"),ks("ㅎ")],a:0,why:"ㅈ thêm nét trên đỉnh: ㅊ."},
      {type:"mcq",q:`Chữ căng của ${ks("ㅂ")} là:`,o:[ks("ㅃ"),ks("ㅍ"),ks("ㅁ"),ks("ㄸ")],a:0,why:"ㅂ viết đôi: ㅃ."},
      {type:"mcq",q:`${kg("포도")} nghĩa là gì?`,o:["quả nho","con thỏ","cái váy","tàu hỏa"],a:0,why:"포도: nho."},
      {type:"mcq",q:"“Con thỏ” viết là:",o:[ks("토끼"),ks("토기"),ks("도끼"),ks("포도")],a:0,why:"토끼: thỏ. 끼 là âm căng."}
    ]},
    {type:"drill",name:"Nghe",skill:"listening",intro:"Nghe kỹ lượng hơi. Bấm nghe nhiều lần nếu cần.",items:[
      {type:"mcq",q:"Nghe và chọn âm tiết đúng",say:"카",o:[ks("카"),ks("가"),ks("까")],a:0,why:"카: bật hơi."},
      {type:"mcq",q:"Nghe và chọn âm tiết đúng",say:"까",o:[ks("까"),ks("가"),ks("카")],a:0,why:"까: căng."},
      {type:"mcq",q:"Nghe và chọn âm tiết đúng",say:"타",o:[ks("타"),ks("다"),ks("따")],a:0,why:"타: bật hơi."},
      {type:"mcq",q:"Nghe và chọn âm tiết đúng",say:"빠",o:[ks("빠"),ks("바"),ks("파")],a:0,why:"빠: căng."},
      {type:"mcq",q:"Nghe và chọn từ đúng",say:"기차",o:[ks("기차"),ks("기자"),ks("치마"),ks("포도")],a:0,why:"기차: tàu hỏa."},
      {type:"mcq",q:"Nghe và chọn nghĩa đúng",say:"아빠",o:["bố","con thỏ","cái váy","quả nho"],a:0,why:"아빠: bố."}
    ]},
    {type:"speak",name:"Nói",lang:"ko",intro:"Đọc từng bộ ba thật chậm, tờ giấy trước miệng để kiểm tra hơi.",items:[
      {q:"Đọc bộ ba",model:"가, 카, 까. 다, 타, 따. 바, 파, 빠. 자, 차, 짜."},
      {q:"Đọc 5 từ hôm nay",model:"치마, 포도, 기차, 토끼, 아빠."}
    ]},
    KGAME
  ]
},
{
  day:6, title:"11 nguyên âm ghép", book:"Sơ cấp 1 · Hangul",
  vocab:[
    KV("sagwa","사과","sagwa","quả táo","사 · 과","sa · gwa","Từ có trong sách, phần từ vựng Hangul"),
    KV("dwaeji","돼지","dwaeji","con lợn","돼 · 지","dwae · ji","Từ có trong sách, phần từ vựng Hangul"),
    KV("sigye","시계","sigye","đồng hồ","시 · 계","si · gye","Từ có trong sách, phần từ vựng Hangul"),
    KV("uija","의자","uija","cái ghế","의 · 자","ui · ja","Từ có trong sách, phần từ vựng Hangul"),
    KV("hyuji","휴지","hyuji","giấy lau, khăn giấy","휴 · 지","hyu · ji","Từ có trong sách, phần từ vựng Hangul")
  ],
  steps:[
    {type:"explain",name:"Phát âm",title:"Nguyên âm ghép",blocks:[
      {h:"1. Ghép từ nguyên âm đã học",p:[`${ks("ㅐ = ㅏ + ㅣ")} · ${ks("ㅔ = ㅓ + ㅣ")} · ${ks("ㅘ = ㅗ + ㅏ")} · ${ks("ㅝ = ㅜ + ㅓ")} · ${ks("ㅢ = ㅡ + ㅣ")}`,`Ngày nay ${ks("ㅐ")} và ${ks("ㅔ")} đọc gần như giống nhau (e, ê). ${ks("ㅙ ㅚ ㅞ")} cũng gần giống nhau, không cần phân biệt kỹ.`]},
      {table:{head:["Chữ","Âm tiết","Latin","Đọc gần giống"],rows:[[ks("ㅐ"),ks("애"),"ae","e"],[ks("ㅔ"),ks("에"),"e","ê"],[ks("ㅒ"),ks("얘"),"yae","ye"],[ks("ㅖ"),ks("예"),"ye","yê"],[ks("ㅘ"),ks("와"),"wa","oa"],[ks("ㅙ"),ks("왜"),"wae","oe"],[ks("ㅚ"),ks("외"),"oe","uê"],[ks("ㅝ"),ks("워"),"wo","uơ"],[ks("ㅞ"),ks("웨"),"we","uê"],[ks("ㅟ"),ks("위"),"wi","uy"],[ks("ㅢ"),ks("의"),"ui","ưi"]]}},
      {ex:[{t:"와",py:"wa",vi:"oa"},{t:"워",py:"wo",vi:"uơ"},{t:"위",py:"wi",vi:"uy"},{t:"의",py:"ui",vi:"ưi"},{t:"예",py:"ye",vi:"yê"}]},
      {tip:`<b>Mẹo:</b> đọc nhanh hai nguyên âm thành một. ${ks("ㅗ + ㅏ")}: ô + a đọc liền thành “oa”.`}
    ]},
    HG("Viết chữ","Viết nguyên âm thứ nhất trước, nguyên âm thứ hai sau.",[
      L_("ㅐ","애","e","애","① Sổ dọc. ② Gạch ngang ngắn sang phải. ③ Sổ dọc thứ hai."),
      L_("ㅔ","에","ê","에","① Gạch ngang ngắn từ trái vào. ② Sổ dọc. ③ Sổ dọc thứ hai."),
      L_("ㅘ","와","oa","와","Viết ㅗ trước (2 nét), rồi viết ㅏ (2 nét)."),
      L_("ㅝ","워","uơ","워","Viết ㅜ trước (2 nét), rồi viết ㅓ (2 nét)."),
      L_("ㅢ","의","ưi","의","① Gạch ngang ㅡ. ② Sổ dọc ㅣ.")
    ]),
    KO_VOCAB_STEP,
    {type:"drill",name:"Nhận mặt chữ",skill:"hangul",intro:"Chọn cách đọc đúng.",items:[
      {type:"mcq",q:`${kg("와")} đọc là:`,o:["oa","uơ","uy","ưi"],a:0,why:"ㅘ = ㅗ + ㅏ: oa."},
      {type:"mcq",q:`${kg("위")} đọc là:`,o:["uy","oa","uơ","ưi"],a:0,why:"ㅟ = ㅜ + ㅣ: uy."},
      {type:"mcq",q:`${kg("ㅗ + ㅏ")} = ?`,o:[ks("ㅘ"),ks("ㅝ"),ks("ㅚ"),ks("ㅙ")],a:0,why:"ㅗ + ㅏ = ㅘ."},
      {type:"mcq",q:"Âm tiết nào đọc là “ưi”?",o:[ks("의"),ks("위"),ks("외"),ks("웨")],a:0,why:"의: ưi."},
      {type:"mcq",q:`${kg("의자")} nghĩa là gì?`,o:["cái ghế","đồng hồ","quả táo","con lợn"],a:0,why:"의자: ghế."},
      {type:"mcq",q:"“Đồng hồ” viết là:",o:[ks("시계"),ks("시개"),ks("휴지"),ks("사과")],a:0,why:"시계: đồng hồ."}
    ]},
    {type:"drill",name:"Nghe",skill:"listening",intro:"Nghe và chọn đúng.",items:[
      {type:"mcq",q:"Nghe và chọn âm tiết đúng",say:"워",o:[ks("워"),ks("와"),ks("위"),ks("의")],a:0,why:"워: uơ."},
      {type:"mcq",q:"Nghe và chọn âm tiết đúng",say:"예",o:[ks("예"),ks("에"),ks("야"),ks("여")],a:0,why:"예: yê."},
      {type:"mcq",q:"Nghe và chọn từ đúng",say:"사과",o:[ks("사과"),ks("사자"),ks("시계"),ks("휴지")],a:0,why:"사과: táo."},
      {type:"mcq",q:"Nghe và chọn nghĩa đúng",say:"돼지",o:["con lợn","cái ghế","giấy lau","quả táo"],a:0,why:"돼지: lợn."},
      {type:"mcq",q:"Nghe và chọn từ đúng",say:"휴지",o:[ks("휴지"),ks("의자"),ks("돼지"),ks("바지")],a:0,why:"휴지: khăn giấy."}
    ]},
    {type:"speak",name:"Nói",lang:"ko",intro:"Đọc đuổi theo mẫu, đọc liền hai nguyên âm.",items:[
      {q:"Đọc nguyên âm ghép",model:"애, 에, 와, 워, 위, 의."},
      {q:"Đọc 5 từ hôm nay",model:"사과, 돼지, 시계, 의자, 휴지."}
    ]},
    KGAME
  ]
},
{
  day:7, title:"Patchim và ôn tập tuần 1", book:"Sơ cấp 1 · Hangul",
  vocab:[
    KV("ppang","빵","ppang","bánh mì","빵","ppang","ㅃ + ㅏ + ㅇ: ㅇ ở cuối đọc là ng. Từ có trong sách"),
    KV("ot","옷","ot","quần áo","옷","ot","ㅇ + ㅗ + ㅅ: ㅅ ở cuối đọc là t. Từ có trong sách"),
    KV("kkot","꽃","kkot","bông hoa","꽃","kkot","ㄲ + ㅗ + ㅊ: ㅊ ở cuối đọc là t. Từ có trong sách"),
    KV("bap","밥","bap","cơm","밥","bap","ㅂ + ㅏ + ㅂ: ㅂ ở cuối đọc là p"),
    KV("annyeong","안녕하세요","annyeonghaseyo","xin chào","안녕 · 하세요","annyeong · haseyo","Câu chào lịch sự, dùng với mọi người")
  ],
  steps:[
    {type:"explain",name:"Phát âm",title:"Phụ âm cuối (Patchim)",blocks:[
      {h:"1. Patchim là gì?",p:[`Phụ âm đứng <b>cuối</b> âm tiết gọi là patchim, viết ở <b>dưới cùng</b> khối chữ. Ví dụ ${ks("ㅂ + ㅏ + ㅂ = 밥")} (cơm).`,"Có rất nhiều chữ có thể làm patchim, nhưng khi đọc chỉ có <b>7 âm cuối</b>."]},
      {table:{head:["Patchim viết là","Đọc là","Ví dụ"],rows:[[ks("ㄱ ㅋ ㄲ"),"k",ks("책, 밖")],[ks("ㄴ"),"n",ks("손, 문")],[ks("ㄷ ㅅ ㅆ ㅈ ㅊ ㅌ ㅎ"),"t",ks("옷, 꽃, 있다")],[ks("ㄹ"),"l",ks("말, 물")],[ks("ㅁ"),"m",ks("밤, 김")],[ks("ㅂ ㅍ"),"p",ks("밥, 앞")],[ks("ㅇ"),"ng",ks("빵, 강")]]}},
      {h:"2. Câu chào đầu tiên",p:[`${ks("안녕하세요")} annyeonghaseyo: xin chào. Dùng được cả buổi sáng, trưa, tối và với mọi người.`,`Tách khối: ${ks("안")} (an) ${ks("녕")} (nyeong) ${ks("하")} (ha) ${ks("세")} (se) ${ks("요")} (yo).`]},
      {ex:[{t:"빵",py:"ppang",vi:"bánh mì: ㅇ cuối đọc ng"},{t:"옷",py:"ot",vi:"quần áo: ㅅ cuối đọc t"},{t:"밥",py:"bap",vi:"cơm: ㅂ cuối đọc p"},{t:"물",py:"mul",vi:"nước: ㄹ cuối đọc l"},{t:"안녕하세요",py:"annyeonghaseyo",vi:"Xin chào"}]},
      {trap:[["옷 đọc là “ôs”","옷 đọc là “ôt”","ㅅ ở cuối âm tiết đọc là t, không đọc s."]]}
    ]},
    HG("Viết chữ","Patchim viết ở dưới cùng, hơi dẹt. Tô các khối chữ sau.",[
      L_("밥","bap","cơm","밥","ㅂ trên trái, ㅏ bên phải, ㅂ cuối nằm dưới cùng."),
      L_("빵","ppang","bánh mì","빵","ㅃ trên trái, ㅏ bên phải, ㅇ cuối nằm dưới cùng."),
      L_("옷","ot","quần áo","옷","ㅇ trên cùng, ㅗ ở giữa, ㅅ cuối nằm dưới cùng."),
      L_("안","an","an","안","ㅇ trên trái, ㅏ bên phải, ㄴ cuối nằm dưới cùng.")
    ]),
    KO_VOCAB_STEP,
    {type:"drill",name:"Đọc patchim",skill:"hangul",intro:"Chọn cách đọc đúng của âm cuối.",items:[
      {type:"mcq",q:`${kg("옷")} đọc là:`,o:["ot","os","och","on"],a:0,why:"ㅅ cuối đọc t: ot."},
      {type:"mcq",q:`${kg("꽃")} đọc là:`,o:["kkot","kkoch","kot","kkon"],a:0,why:"ㅊ cuối đọc t: kkot."},
      {type:"mcq",q:`${kg("밥")} đọc là:`,o:["bap","bam","bak","ban"],a:0,why:"ㅂ cuối đọc p: bap."},
      {type:"mcq",q:`${kg("빵")} đọc là:`,o:["ppang","ppan","ppam","pang"],a:0,why:"ㅇ cuối đọc ng."},
      {type:"mcq",q:"Patchim ㅎ, ㅈ, ㅌ đều đọc là:",o:["t","k","p","ng"],a:0,why:"Nhóm ㄷ ㅅ ㅆ ㅈ ㅊ ㅌ ㅎ ở cuối đều đọc t."},
      {type:"mcq",q:"“Xin chào” là:",o:[ks("안녕하세요"),ks("감사합니다"),ks("미안합니다"),ks("안녕히 가세요")],a:0,why:"안녕하세요: xin chào."}
    ]},
    {type:"drill",name:"Ôn tập tuần 1",skill:"vocab",intro:"Ôn từ cả tuần. Dưới 80% thì làm lại phần sai.",items:[
      {type:"mcq",q:`${kg("우유")} nghĩa là gì?`,o:["sữa","dưa chuột","con cáo","quả nho"],a:0,why:"우유: sữa."},
      {type:"mcq",q:`${kg("고기")} nghĩa là gì?`,o:["thịt","cái cây","cái mũ","con thỏ"],a:0,why:"고기: thịt."},
      {type:"mcq",q:"“Cái mũ” viết là:",o:[ks("모자"),ks("바지"),ks("의자"),ks("사자")],a:0,why:"모자: mũ."},
      {type:"mcq",q:"Nghe và chọn từ đúng",say:"토끼",o:[ks("토끼"),ks("포도"),ks("기차"),ks("치마")],a:0,why:"토끼: con thỏ."},
      {type:"mcq",q:"Nghe và chọn nghĩa đúng",say:"사과",o:["quả táo","con lợn","đồng hồ","cái ghế"],a:0,why:"사과: táo."},
      {type:"mcq",q:"Âm nào là phụ âm căng?",o:[ks("ㄸ"),ks("ㅌ"),ks("ㄷ"),ks("ㄴ")],a:0,why:"ㄸ viết đôi: căng."},
      {type:"mcq",q:`${kg("ㄴ + ㅏ + ㅁ")} = ?`,o:[ks("남"),ks("납"),ks("난"),ks("낭")],a:0,why:"ㄴ + ㅏ + ㅁ cuối = 남 (nam)."}
    ]},
    {type:"speak",name:"Nói",lang:"ko",intro:"Đọc đuổi theo mẫu, rồi tự chào bằng tiếng Hàn.",items:[
      {q:"Đọc các từ có patchim",model:"빵, 옷, 꽃, 밥, 물."},
      {q:"Chào hỏi",model:"안녕하세요!"}
    ]},
    KGAME
  ]
}
];
