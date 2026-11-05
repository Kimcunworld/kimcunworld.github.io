// Tiếng Anh · lộ trình Beginner lên IELTS · đối chiếu Essential Grammar in Use
window.EN_PLAN = [
  {day:1, book:"Tuần 1 · Nền tảng", title:"Động từ to be · Âm /iː/ và /ɪ/"},
  {day:2, book:"Tuần 1 · Nền tảng", title:"Hiện tại đơn (khẳng định) · Đọc đuôi s, es"},
  {day:3, book:"Tuần 1 · Nền tảng", title:"Hiện tại đơn (phủ định, câu hỏi) · Trọng âm"},
  {day:4, book:"Tuần 1 · Nền tảng", title:"Hiện tại tiếp diễn · Âm /æ/ và /e/"},
  {day:5, book:"Tuần 1 · Nền tảng", title:"Quá khứ đơn: was, were, động từ có quy tắc"},
  {day:6, book:"Tuần 1 · Nền tảng", title:"Quá khứ đơn: động từ bất quy tắc"},
  {day:7, book:"Tuần 1 · Nền tảng", title:"Ôn tập tuần 1 · Câu hỏi Wh"},
  {day:8, book:"Tuần 2", title:"There is, there are · a, an, some, any"},
  {day:9, book:"Tuần 2", title:"Danh từ đếm được và không đếm được · How much, How many"},
  {day:10, book:"Tuần 2", title:"Can, can't: khả năng và lời đề nghị"},
  {day:11, book:"Tuần 2", title:"Tương lai: going to và will"},
  {day:12, book:"Tuần 2", title:"Tính từ và trạng từ"},
  {day:13, book:"Tuần 2", title:"So sánh hơn"},
  {day:14, book:"Tuần 2", title:"Ôn tập tuần 2"},
  {day:15, book:"Tuần 3", title:"So sánh nhất"},
  {day:16, book:"Tuần 3", title:"Giới từ thời gian: in, on, at"},
  {day:17, book:"Tuần 3", title:"Giới từ nơi chốn"},
  {day:18, book:"Tuần 3", title:"Sở hữu: my, your, 's"},
  {day:19, book:"Tuần 3", title:"Đại từ tân ngữ: me, him, her, them"},
  {day:20, book:"Tuần 3", title:"like, love + Ving · want to"},
  {day:21, book:"Tuần 3", title:"Ôn tập tuần 3"},
  {day:22, book:"Tuần 4", title:"Hiện tại hoàn thành: ever, never"},
  {day:23, book:"Tuần 4", title:"Hiện tại hoàn thành hay quá khứ đơn"},
  {day:24, book:"Tuần 4", title:"should, must, have to"},
  {day:25, book:"Tuần 4", title:"Câu điều kiện loại 1"},
  {day:26, book:"Tuần 4", title:"Từ nối: and, but, because, so"},
  {day:27, book:"Tuần 4", title:"Làm quen IELTS: mô tả xu hướng"},
  {day:28, book:"Tuần 4", title:"Làm quen IELTS: Speaking Part 1"},
  {day:29, book:"Tuần 4", title:"Ôn tập tổng hợp"},
  {day:30, book:"Kiểm tra", title:"Kiểm tra lại toàn diện"}
];

const W=(w,ipa,vi,ex,exVi)=>({id:w.replace(/\s+/g,"-"),w,ipa,vi,ex,exVi});
const GAME={type:"game",name:"Trò chơi nhanh",intro:"Ghép từ với nghĩa nhanh nhất có thể.",pairs:"vocab"};
const VOCAB_STEPS=[{type:"vocab",name:"Từ vựng",intro:"6 từ hôm nay. Bấm loa nghe, đọc theo 2 lần."},{type:"drill",name:"Luyện từ vựng",auto:"vocab",intro:"Nhìn nghĩa, gõ lại từ tiếng Anh. Có gợi ý chữ cái đầu."}];

window.EN_LESSONS = [
{
  day:1, title:"Động từ to be · Âm /iː/ và /ɪ/", book:"Tuần 1 · Nền tảng",
  vocab:[W("job","/dʒɒb/","công việc","What's your job?","Công việc của bạn là gì?"),W("manager","/ˈmænɪdʒə(r)/","người quản lý","I'm a manager.","Tôi là quản lý."),W("staff","/stɑːf/","nhân viên (cả đội)","Our staff are friendly.","Nhân viên của chúng tôi thân thiện."),W("customer","/ˈkʌstəmə(r)/","khách hàng","The customer is happy.","Khách hàng hài lòng."),W("busy","/ˈbɪzi/","bận","We are busy at weekends.","Chúng tôi bận vào cuối tuần."),W("friendly","/ˈfrendli/","thân thiện","She is very friendly.","Cô ấy rất thân thiện.")],
  steps:[
    {type:"explain",name:"Ngữ pháp",title:"Động từ to be: am, is, are",blocks:[
      {h:"1. To be dùng để làm gì?",p:["Nói ai đó <b>là</b> gì, <b>ở</b> đâu, <b>như thế nào</b>: <i>I am a manager.</i> (Tôi là quản lý.)","<b>I</b> đi với <b>am</b> · <b>He, She, It</b> đi với <b>is</b> · <b>You, We, They</b> đi với <b>are</b>.","Khi nói thường viết tắt: I'm, he's, she's, it's, you're, we're, they're."]},
      {h:"2. Phủ định và câu hỏi",p:["Phủ định thêm <b>not</b> sau to be: I'm not, he isn't, they aren't.","Câu hỏi đưa to be lên đầu: <i>Are you busy?</i> Trả lời: <i>Yes, I am.</i> hoặc <i>No, I'm not.</i>"]},
      {table:{head:["Chủ ngữ","Khẳng định","Phủ định","Câu hỏi"],rows:[["I","I am","I am not","Am I ...?"],["He, She, It","is","is not (isn't)","Is he ...?"],["You, We, They","are","are not (aren't)","Are you ...?"]]}},
      {ex:[{t:"I'm a manager at a café.",vi:"Tôi là quản lý ở một quán cà phê."},{t:"She isn't busy today.",vi:"Hôm nay cô ấy không bận."},{t:"Are your staff friendly?",vi:"Nhân viên của bạn có thân thiện không?"}]},
      {trap:[["I busy today.","I am busy today.","Tiếng Việt không cần chữ “là” trước tính từ, nhưng tiếng Anh bắt buộc có to be."],["She are a manager.","She is a manager.","He, She, It luôn đi với is."]]},
      {tip:"<b>Phát âm hôm nay:</b> /iː/ trong <i>she, three, tea</i> kéo dài, môi kéo sang hai bên. /ɪ/ trong <i>is, it, busy</i> ngắn và thả lỏng."}
    ]},
    {type:"drill",name:"Thực hành ngữ pháp",intro:"8 câu. Câu sai sẽ quay lại cuối phần.",items:[
      {type:"mcq",q:"I ___ a manager.",o:["am","is","are"],a:0,why:"I đi với am."},
      {type:"mcq",q:"My staff ___ very friendly.",o:["are","is","am"],a:0,why:"staff (cả đội) thường đi với are."},
      {type:"type",q:"She ___ (be) busy today.",ans:["is"],why:"She đi với is."},
      {type:"type",q:"We ___ (be) at the café now.",ans:["are"],why:"We đi với are."},
      {type:"type",q:"Viết phủ định: He is a customer.<br>He ___ a customer.",ans:["is not"],why:"is not, viết tắt isn't."},
      {type:"order",q:"Sắp xếp thành câu hỏi",words:["Are","you","busy","today?"],ans:["Are you busy today?"],why:"Câu hỏi: to be đứng đầu."},
      {type:"correct",q:"I very busy at weekends.",ans:["I am very busy at weekends"],why:"Thiếu am."},
      {type:"mcq",q:"“Are you a manager?” Trả lời phủ định đúng:",o:["No, I'm not.","No, I amn't.","No, I not.","No, I isn't."],a:0,why:"No, I'm not."}
    ]},
    ...VOCAB_STEPS,
    {type:"drill",name:"Nghe",intro:"Nghe tối đa 3 lần rồi trả lời.",head:{audio:[{t:"Hi, I'm Mai."},{t:"I'm a manager at a small café."},{t:"My staff are young and friendly."},{t:"We are very busy at weekends, but we aren't busy on Mondays."}],max:3},items:[
      {type:"mcq",q:"What is Mai's job?",o:["A manager","A customer","A teacher","A cook"],a:0,why:"I'm a manager."},
      {type:"mcq",q:"What are her staff like?",o:["Young and friendly","Old and busy","Quiet","Tired"],a:0,why:"young and friendly"},
      {type:"mcq",q:"When is the café NOT busy?",o:["On Mondays","At weekends","Every day","In the evening"],a:0,why:"we aren't busy on Mondays"},
      {type:"dictation",q:"Nghe và chép lại câu:",say:"My staff are young and friendly.",ans:["My staff are young and friendly"],why:"My staff are young and friendly."}
    ]},
    {type:"write",name:"Viết",title:"Giới thiệu bản thân",prompt:"Viết 3 câu giới thiệu bản thân: tên, công việc, nơi làm việc hoặc tính cách. Dùng am, is, are.",min:15,
      bank:[["My name is","tên tôi là"],["I am a","tôi là một"],["at","ở, tại"],["my job is","công việc của tôi"],["busy","bận"],["friendly","thân thiện"],["manager","quản lý"]],
      frames:["My name is ______.","I am a ______ at ______.","My job is ______, and my staff are ______."],
      need:[["\\b(am|is|are)\\b","Có dùng am, is hoặc are"]],
      checklist:["Có 3 câu","Mỗi câu có am, is hoặc are","Viết hoa chữ đầu câu và tên riêng","Có dấu chấm cuối câu"],
      model:"My name is Kim. I am a manager at a marketing agency. My job is busy but interesting, and my staff are very friendly."},
    {type:"speak",name:"Nói",intro:"Nghe mẫu, nói đuổi theo, rồi ghi âm câu trả lời của KC.",items:[{q:"What's your name and what do you do?",model:"My name is Kim. I'm a manager at a marketing agency in Ho Chi Minh City."},{q:"Are you busy at work?",model:"Yes, I am. I'm very busy on weekdays, but I'm not busy on Sundays."}]},
    GAME
  ]
},
{
  day:2, title:"Hiện tại đơn (khẳng định) · Đọc đuôi s, es", book:"Tuần 1 · Nền tảng",
  vocab:[W("open","/ˈəʊpən/","mở cửa","The café opens at seven.","Quán mở cửa lúc bảy giờ."),W("close","/kləʊz/","đóng cửa","The shop closes at ten.","Cửa hàng đóng cửa lúc mười giờ."),W("start","/stɑːt/","bắt đầu","I start work at nine.","Tôi bắt đầu làm việc lúc chín giờ."),W("finish","/ˈfɪnɪʃ/","kết thúc","She finishes at six.","Cô ấy xong việc lúc sáu giờ."),W("usually","/ˈjuːʒuəli/","thường thường","I usually drink coffee.","Tôi thường uống cà phê."),W("every day","/ˈevri deɪ/","mỗi ngày","We work every day.","Chúng tôi làm việc mỗi ngày.")],
  steps:[
    {type:"explain",name:"Ngữ pháp",title:"Hiện tại đơn: thói quen và sự thật",blocks:[
      {h:"1. Khi nào dùng?",p:["Nói về <b>thói quen</b>, việc lặp lại: <i>I start work at nine.</i>","Nói về <b>sự thật</b>, lịch cố định: <i>The café opens at seven.</i>","Hay đi với: every day, usually, always, often, on Mondays."]},
      {h:"2. Cách chia",p:["<b>I, You, We, They</b> + động từ nguyên mẫu: <i>I work.</i>","<b>He, She, It</b> + động từ thêm <b>s</b>: <i>She works.</i>","Thêm <b>es</b> sau o, ch, sh, s, x: go thành goes, watch thành watches, finish thành finishes.","Phụ âm + y đổi thành <b>ies</b>: study thành studies."]},
      {table:{head:["Đuôi","Đọc là","Ví dụ"],rows:[["Sau p, t, k, f","/s/","works, starts"],["Sau s, ch, sh, x","/ɪz/","closes, finishes"],["Các âm còn lại","/z/","opens, plays"]]}},
      {ex:[{t:"Our café opens at seven every morning.",vi:"Quán chúng tôi mở cửa lúc bảy giờ mỗi sáng."},{t:"My manager finishes work at six.",vi:"Quản lý của tôi xong việc lúc sáu giờ."},{t:"I usually start work at eight.",vi:"Tôi thường bắt đầu làm việc lúc tám giờ."}]},
      {trap:[["He go to work by bus.","He goes to work by bus.","He, She, It phải thêm s hoặc es."],["She studys English.","She studies English.","Phụ âm + y: đổi y thành ies."]]}
    ]},
    {type:"drill",name:"Thực hành ngữ pháp",items:[
      {type:"mcq",q:"The café ___ at 7 a.m.",o:["opens","open","opening"],a:0,why:"The café = it: thêm s."},
      {type:"type",q:"She ___ (start) work at 8.",ans:["starts"],why:"She + starts."},
      {type:"type",q:"He ___ (finish) at 6 p.m.",ans:["finishes"],why:"finish tận cùng sh: thêm es."},
      {type:"type",q:"My sister ___ (study) English every day.",ans:["studies"],why:"study: đổi y thành ies."},
      {type:"mcq",q:"We usually ___ coffee in the morning.",o:["drink","drinks","drinking"],a:0,why:"We + động từ nguyên mẫu."},
      {type:"mcq",q:"Đuôi s trong “works” đọc là:",o:["/s/","/z/","/ɪz/"],a:0,why:"work tận cùng âm /k/: đọc /s/."},
      {type:"mcq",q:"Đuôi es trong “closes” đọc là:",o:["/ɪz/","/s/","/z/"],a:0,why:"close tận cùng âm /z/: đọc /ɪz/."},
      {type:"correct",q:"He go to work by bus.",ans:["He goes to work by bus"],why:"He + goes."}
    ]},
    ...VOCAB_STEPS,
    {type:"drill",name:"Nghe",head:{audio:[{t:"Our café opens at seven every morning."},{t:"I usually start work at eight."},{t:"My manager finishes at six, and the café closes at ten."}],max:3},items:[
      {type:"mcq",q:"When does the café open?",o:["At seven","At eight","At six","At ten"],a:0,why:"opens at seven"},
      {type:"type",q:"The speaker starts work at ___.",ans:["8","eight"],why:"start work at eight"},
      {type:"mcq",q:"When does the café close?",o:["At ten","At six","At seven","At eight"],a:0,why:"the café closes at ten"},
      {type:"dictation",q:"Nghe và chép lại câu:",say:"I usually start work at eight.",ans:["I usually start work at eight","I usually start work at 8"],why:"I usually start work at eight."}
    ]},
    {type:"write",name:"Viết",title:"Một ngày làm việc của tôi",prompt:"Viết 3 câu về giờ giấc một ngày làm việc của KC.",min:18,
      bank:[["get up","thức dậy"],["start","bắt đầu"],["finish","kết thúc"],["opens","mở cửa"],["closes","đóng cửa"],["usually","thường"],["every day","mỗi ngày"]],
      frames:["I usually get up at ___.","I start work at ___ and finish at ___.","My office opens at ___ and closes at ___."],
      need:[["\\b(opens|closes|starts|finishes|works|goes)\\b","Có động từ thêm s hoặc es với he, she, it"]],
      checklist:["Có 3 câu","Đúng thì hiện tại đơn","He, She, It có thêm s","Có giờ giấc cụ thể"],
      model:"I usually get up at seven. I start work at nine and finish at six. My office opens at eight and closes at seven every day."},
    {type:"speak",name:"Nói",intro:"Nói đuổi theo mẫu rồi ghi âm.",items:[{q:"What time do you usually start work?",model:"I usually start work at nine o'clock, but on busy days I start at eight."},{q:"What does your company do?",model:"My company helps other businesses with marketing."}]},
    GAME
  ]
},
{
  day:3, title:"Hiện tại đơn (phủ định, câu hỏi) · Trọng âm", book:"Tuần 1 · Nền tảng",
  vocab:[W("drink","/drɪŋk/","uống, đồ uống","I drink coffee every day.","Tôi uống cà phê mỗi ngày."),W("order","/ˈɔːdə(r)/","gọi món","Can I order now?","Tôi gọi món bây giờ được không?"),W("menu","/ˈmenjuː/","thực đơn","Can I see the menu?","Cho tôi xem thực đơn được không?"),W("price","/praɪs/","giá","The price is good.","Giá tốt."),W("cheap","/tʃiːp/","rẻ","Street food is cheap.","Đồ ăn đường phố rẻ."),W("expensive","/ɪkˈspensɪv/","đắt","This bar is expensive.","Quán bar này đắt.")],
  steps:[
    {type:"explain",name:"Ngữ pháp",title:"Phủ định và câu hỏi với do, does",blocks:[
      {h:"1. Phủ định",p:["I, You, We, They + <b>don't</b> + động từ nguyên mẫu: <i>I don't drink milk.</i>","He, She, It + <b>doesn't</b> + động từ nguyên mẫu: <i>She doesn't like tea.</i> (không thêm s nữa)"]},
      {h:"2. Câu hỏi",p:["<b>Do</b> + I, you, we, they + động từ? <i>Do you order online?</i>","<b>Does</b> + he, she, it + động từ? <i>Does the café open on Sundays?</i>","Trả lời ngắn: Yes, I do. No, she doesn't."]},
      {ex:[{t:"I don't drink milk.",vi:"Tôi không uống sữa."},{t:"Does she work here?",vi:"Cô ấy có làm ở đây không?"},{t:"Do you like the menu? Yes, I do.",vi:"Bạn có thích thực đơn không? Có."}]},
      {trap:[["He doesn't likes milk.","He doesn't like milk.","Sau doesn't dùng động từ nguyên mẫu."],["You like coffee?","Do you like coffee?","Câu hỏi cần do hoặc does ở đầu."]]},
      {tip:"<b>Trọng âm:</b> danh từ hai âm tiết thường nhấn âm đầu: <b>COF</b>fee, <b>WA</b>ter, <b>OR</b>der, <b>ME</b>nu. Ngoại lệ hay gặp: des<b>SERT</b>, ho<b>TEL</b>."}
    ]},
    {type:"drill",name:"Thực hành ngữ pháp",items:[
      {type:"mcq",q:"I ___ like tea.",o:["don't","doesn't","not"],a:0,why:"I + don't."},
      {type:"mcq",q:"She ___ drink coffee.",o:["doesn't","don't","isn't"],a:0,why:"She + doesn't."},
      {type:"type",q:"___ you order online?",ans:["Do"],why:"you: dùng Do."},
      {type:"type",q:"___ the café open on Sundays?",ans:["Does"],why:"the café = it: dùng Does."},
      {type:"correct",q:"He doesn't likes milk.",ans:["He doesn't like milk"],why:"Sau doesn't là động từ nguyên mẫu."},
      {type:"order",q:"Sắp xếp thành câu hỏi",words:["Does","she","work","here?"],ans:["Does she work here?"],why:"Does + she + work?"},
      {type:"mcq",q:"“Do they like the menu?” Trả lời ngắn khẳng định:",o:["Yes, they do.","Yes, they like.","Yes, they does.","Yes, they are."],a:0,why:"Yes, they do."},
      {type:"mcq",q:"Từ nào nhấn âm thứ hai?",o:["dessert","coffee","water","order"],a:0,why:"des SERT là ngoại lệ."}
    ]},
    ...VOCAB_STEPS,
    {type:"drill",name:"Nghe",head:{audio:[{who:"W",t:"Hi, what would you like?"},{who:"M",t:"Can I see the menu, please?"},{who:"W",t:"Sure. The iced coffee is cheap, only thirty thousand dong."},{who:"M",t:"Great. I don't drink milk, so a black coffee, please."}],max:3},items:[
      {type:"mcq",q:"What does the man ask for first?",o:["The menu","The price","Some milk","The bill"],a:0,why:"Can I see the menu"},
      {type:"type",q:"The iced coffee costs ___ thousand dong.",ans:["30","thirty"],why:"thirty thousand dong"},
      {type:"mcq",q:"Why does he order a black coffee?",o:["He doesn't drink milk","It's cheap","It's hot","He likes sugar"],a:0,why:"I don't drink milk"},
      {type:"dictation",q:"Nghe và chép lại câu:",say:"I don't drink milk.",ans:["I don't drink milk"],why:"I don't drink milk."}
    ]},
    {type:"write",name:"Viết",title:"Sở thích ăn uống",prompt:"Viết 3 câu về đồ ăn, đồ uống KC thích và không thích.",min:18,
      bank:[["I like","tôi thích"],["I don't like","tôi không thích"],["cheap","rẻ"],["expensive","đắt"],["my favourite","yêu thích nhất"],["but","nhưng"]],
      frames:["I like ______, but I don't like ______.","My favourite café is ______. It isn't ______.","My friends usually drink ______."],
      need:[["\\b(don't|doesn't|do not|does not)\\b","Có câu phủ định với don't hoặc doesn't"]],
      checklist:["Có câu khẳng định và phủ định","Sau don't, doesn't là động từ nguyên mẫu","Viết hoa, có dấu chấm"],
      model:"I like black coffee, but I don't like milk tea. My favourite café is near my office. It isn't expensive, and the staff are friendly."},
    {type:"speak",name:"Nói",items:[{q:"Do you prefer coffee or tea?",model:"I prefer coffee. I don't drink tea very often."},{q:"Is food expensive in your city?",model:"Not really. Street food is cheap, but restaurants in the city centre are quite expensive."}],intro:"Nói đuổi theo mẫu rồi ghi âm."},
    GAME
  ]
},
{
  day:4, title:"Hiện tại tiếp diễn · Âm /æ/ và /e/", book:"Tuần 1 · Nền tảng",
  vocab:[W("wait","/weɪt/","chờ đợi","I'm waiting for a customer.","Tôi đang chờ một khách hàng."),W("prepare","/prɪˈpeə(r)/","chuẩn bị","The chef is preparing the food.","Bếp trưởng đang chuẩn bị đồ ăn."),W("clean","/kliːn/","lau dọn","They are cleaning the tables.","Họ đang lau bàn."),W("serve","/sɜːv/","phục vụ","We serve breakfast until ten.","Chúng tôi phục vụ bữa sáng đến mười giờ."),W("now","/naʊ/","bây giờ","I'm busy now.","Bây giờ tôi đang bận."),W("at the moment","/æt ðə ˈməʊmənt/","lúc này","She's working at the moment.","Lúc này cô ấy đang làm việc.")],
  steps:[
    {type:"explain",name:"Ngữ pháp",title:"Hiện tại tiếp diễn: đang làm gì",blocks:[
      {h:"1. Cấu trúc",p:["am, is, are + <b>Ving</b>: <i>I am waiting.</i> <i>She is cleaning.</i> <i>They are serving.</i>","Dùng cho việc <b>đang xảy ra lúc nói</b>: now, at the moment, Look!, Listen!"]},
      {h:"2. Cách thêm ing",p:["Thường: work thành working.","Tận cùng e câm: bỏ e, make thành making, serve thành serving.","Một nguyên âm + một phụ âm ở cuối: gấp đôi phụ âm, run thành running, sit thành sitting."]},
      {table:{head:["Hiện tại đơn","Hiện tại tiếp diễn"],rows:[["Thói quen: She usually works at 9.","Lúc này: She is working now."],["Lịch cố định: The café opens at 5.","Đang diễn ra: We are opening the doors."]]}},
      {ex:[{t:"The staff are cleaning the tables.",vi:"Nhân viên đang lau bàn."},{t:"I'm waiting for my coffee.",vi:"Tôi đang đợi cà phê."},{t:"We aren't serving customers at the moment.",vi:"Lúc này chúng tôi chưa phục vụ khách."}]},
      {trap:[["They are serve the food now.","They are serving the food now.","Sau am, is, are cần Ving."],["I waiting for you.","I am waiting for you.","Không được bỏ am, is, are."]]},
      {tip:"<b>Phát âm:</b> /æ/ miệng mở rộng như cười to: <i>bag, cat, manager</i>. /e/ miệng mở vừa: <i>bed, ten, menu</i>."}
    ]},
    {type:"drill",name:"Thực hành ngữ pháp",items:[
      {type:"mcq",q:"Look! The staff ___ the tables.",o:["are cleaning","clean","cleans"],a:0,why:"Look! là dấu hiệu đang xảy ra."},
      {type:"type",q:"I ___ (wait) for a customer now.",ans:["am waiting"],why:"I + am + waiting."},
      {type:"type",q:"She ___ (prepare) the drinks at the moment.",ans:["is preparing"],why:"prepare: bỏ e thêm ing."},
      {type:"mcq",q:"He usually ___ at 9, but today he ___ at 10.",o:["starts / is starting","is starting / starts","start / starting"],a:0,why:"usually: hiện tại đơn; today khác thường lệ: tiếp diễn."},
      {type:"correct",q:"They are serve the food now.",ans:["They are serving the food now"],why:"are + serving."},
      {type:"type",q:"Viết dạng Ving của “make”:",ans:["making"],why:"Bỏ e câm."},
      {type:"type",q:"Viết dạng Ving của “run”:",ans:["running"],why:"Gấp đôi n."},
      {type:"mcq",q:"Từ nào có âm /æ/?",o:["bag","bed","ten","menu"],a:0,why:"bag /bæɡ/."}
    ]},
    ...VOCAB_STEPS,
    {type:"drill",name:"Nghe",head:{audio:[{t:"Hello? Yes, I'm at the café now."},{t:"The staff are cleaning the tables, and the chef is preparing the food."},{t:"We aren't serving customers at the moment, because we open at five."}],max:3},items:[
      {type:"mcq",q:"Where is the speaker?",o:["At the café","At home","At the market","At the office"],a:0,why:"I'm at the café now."},
      {type:"mcq",q:"What is the chef doing?",o:["Preparing the food","Cleaning the tables","Serving customers","Waiting"],a:0,why:"the chef is preparing the food"},
      {type:"type",q:"The café opens at ___.",ans:["5","five"],why:"we open at five"},
      {type:"dictation",q:"Nghe và chép lại câu:",say:"The staff are cleaning the tables.",ans:["The staff are cleaning the tables"],why:"The staff are cleaning the tables."}
    ]},
    {type:"write",name:"Viết",title:"Mọi người đang làm gì?",prompt:"Tưởng tượng KC đang ở quán. Viết 3 câu mô tả mọi người đang làm gì.",min:15,
      bank:[["I am sitting","tôi đang ngồi"],["are cleaning","đang lau dọn"],["is preparing","đang chuẩn bị"],["is waiting for","đang đợi"],["at the moment","lúc này"]],
      frames:["I am ______ at the moment.","The staff are ______.","A customer is ______."],
      need:[["\\b(am|is|are)\\s+\\w+ing\\b","Có câu hiện tại tiếp diễn (am, is, are + Ving)"]],
      checklist:["Có 3 câu","Mỗi câu có am, is, are + Ving","Viết hoa, có dấu chấm"],
      model:"I am sitting at the bar at the moment. The staff are cleaning the tables, and a customer is waiting for his coffee."},
    {type:"speak",name:"Nói",intro:"Nói đuổi theo mẫu rồi ghi âm.",items:[{q:"What are you doing at the moment?",model:"At the moment, I'm learning English on my phone and drinking a cup of coffee."},{q:"What do you usually do after work?",model:"I usually go home and relax with my pets."}]},
    GAME
  ]
},
{
  day:5, title:"Quá khứ đơn: was, were, động từ có quy tắc", book:"Tuần 1 · Nền tảng",
  vocab:[W("yesterday","/ˈjestədeɪ/","hôm qua","I was busy yesterday.","Hôm qua tôi bận."),W("last week","/lɑːst wiːk/","tuần trước","We visited Da Lat last week.","Tuần trước chúng tôi đi Đà Lạt."),W("visit","/ˈvɪzɪt/","ghé thăm","I visited my parents.","Tôi đã về thăm bố mẹ."),W("cook","/kʊk/","nấu ăn","She cooked dinner.","Cô ấy đã nấu bữa tối."),W("invite","/ɪnˈvaɪt/","mời","They invited me to the party.","Họ đã mời tôi đến bữa tiệc."),W("enjoy","/ɪnˈdʒɔɪ/","thích, tận hưởng","Did you enjoy the music?","Bạn có thích âm nhạc không?")],
  steps:[
    {type:"explain",name:"Ngữ pháp",title:"Quá khứ đơn: việc đã xảy ra và kết thúc",blocks:[
      {h:"1. To be ở quá khứ",p:["I, He, She, It + <b>was</b> · You, We, They + <b>were</b>.","Phủ định: wasn't, weren't. Câu hỏi: <i>Were you busy?</i>"]},
      {h:"2. Động từ có quy tắc",p:["Thêm <b>ed</b>: visit thành visited, cook thành cooked. Tận cùng e chỉ thêm d: invite thành invited.","Phủ định: <b>didn't</b> + động từ nguyên mẫu: <i>I didn't cook.</i>","Câu hỏi: <b>Did</b> + chủ ngữ + động từ nguyên mẫu? <i>Did you enjoy it?</i>","Dấu hiệu: yesterday, last week, last night, two days ago, in 2020."]},
      {table:{head:["Đuôi ed","Đọc là","Ví dụ"],rows:[["Sau t, d","/ɪd/","visited, needed"],["Sau p, k, s, ch, sh, f","/t/","cooked, finished"],["Các âm còn lại","/d/","enjoyed, invited là /ɪd/ vì tận cùng t"]]}},
      {ex:[{t:"I was at the café yesterday.",vi:"Hôm qua tôi ở quán cà phê."},{t:"We invited our regular customers.",vi:"Chúng tôi đã mời khách quen."},{t:"Did you enjoy the party?",vi:"Bạn có thích bữa tiệc không?"}]},
      {trap:[["He didn't invited me.","He didn't invite me.","Sau didn't là động từ nguyên mẫu."],["I am busy yesterday.","I was busy yesterday.","yesterday là quá khứ: dùng was."]]}
    ]},
    {type:"drill",name:"Thực hành ngữ pháp",items:[
      {type:"mcq",q:"I ___ at the café yesterday.",o:["was","were","am"],a:0,why:"I + was."},
      {type:"mcq",q:"They ___ very busy last week.",o:["were","was","are"],a:0,why:"They + were."},
      {type:"type",q:"We ___ (visit) a new restaurant last week.",ans:["visited"],why:"visit + ed."},
      {type:"type",q:"She ___ (not / cook) dinner yesterday.",ans:["did not cook"],why:"didn't + cook."},
      {type:"order",q:"Sắp xếp thành câu hỏi",words:["Did","you","enjoy","the","party?"],ans:["Did you enjoy the party?"],why:"Did + you + enjoy?"},
      {type:"correct",q:"He didn't invited me.",ans:["He didn't invite me"],why:"didn't + invite."},
      {type:"mcq",q:"Đuôi ed trong “visited” đọc là:",o:["/ɪd/","/t/","/d/"],a:0,why:"visit tận cùng t."},
      {type:"mcq",q:"Đuôi ed trong “cooked” đọc là:",o:["/t/","/d/","/ɪd/"],a:0,why:"cook tận cùng âm /k/."}
    ]},
    ...VOCAB_STEPS,
    {type:"drill",name:"Nghe",head:{audio:[{t:"Last week, we invited our regular customers to a vinyl night."},{t:"I cooked some snacks, and my friends visited too."},{t:"Everyone enjoyed the music. It was a great night!"}],max:3},items:[
      {type:"mcq",q:"Who did they invite?",o:["Regular customers","New staff","Their family","Tourists"],a:0,why:"we invited our regular customers"},
      {type:"mcq",q:"What did the speaker cook?",o:["Some snacks","Dinner","A cake","Noodles"],a:0,why:"I cooked some snacks"},
      {type:"mcq",q:"How was the night?",o:["Great","Boring","Too busy","Quiet"],a:0,why:"It was a great night!"},
      {type:"dictation",q:"Nghe và chép lại câu:",say:"Everyone enjoyed the music.",ans:["Everyone enjoyed the music"],why:"Everyone enjoyed the music."}
    ]},
    {type:"write",name:"Viết",title:"Cuối tuần trước",prompt:"Viết 3 câu kể cuối tuần trước KC đã làm gì.",min:18,
      bank:[["Last weekend","cuối tuần trước"],["visited","đã thăm"],["cooked","đã nấu"],["stayed at home","ở nhà"],["enjoyed","đã thích"],["It was","nó đã"],["relaxing","thư giãn"]],
      frames:["Last weekend, I ______.","I visited ______, and we ______.","It was ______."],
      need:[["\\b\\w+ed\\b","Có động từ quá khứ thêm ed"],["\\b(was|were)\\b","Có was hoặc were"]],
      checklist:["Có 3 câu","Động từ chia quá khứ","Có từ chỉ thời gian quá khứ","Viết hoa, có dấu chấm"],
      model:"Last weekend, I stayed at home on Saturday. On Sunday, I visited my parents, and we cooked lunch together. It was relaxing."},
    {type:"speak",name:"Nói",intro:"Nói đuổi theo mẫu rồi ghi âm.",items:[{q:"What did you do last weekend?",model:"Last weekend, I visited my parents, and we cooked a big lunch together."},{q:"Did you enjoy your last holiday?",model:"Yes, I did. I travelled to Da Lat, and I really enjoyed the cool weather."}]},
    GAME
  ]
},
{
  day:6, title:"Quá khứ đơn: động từ bất quy tắc", book:"Tuần 1 · Nền tảng",
  vocab:[W("went","/went/","đã đi (go)","I went to the market.","Tôi đã đi chợ."),W("had","/hæd/","đã có, đã ăn (have)","We had lunch together.","Chúng tôi đã ăn trưa cùng nhau."),W("ate","/et/","đã ăn (eat)","She ate noodles.","Cô ấy đã ăn mì."),W("bought","/bɔːt/","đã mua (buy)","I bought some coffee beans.","Tôi đã mua ít hạt cà phê."),W("saw","/sɔː/","đã thấy, đã xem (see)","We saw a good film.","Chúng tôi đã xem một bộ phim hay."),W("took","/tʊk/","đã lấy, đã đi xe (take)","He took a taxi home.","Anh ấy đã bắt taxi về nhà.")],
  steps:[
    {type:"explain",name:"Ngữ pháp",title:"Động từ bất quy tắc",blocks:[
      {h:"1. Không thêm ed",p:["Một số động từ rất hay dùng có dạng quá khứ riêng, phải học thuộc.","Phủ định và câu hỏi vẫn dùng <b>didn't</b>, <b>Did</b> + động từ <b>nguyên mẫu</b>: <i>I didn't go.</i> <i>Did you buy it?</i>"]},
      {table:{head:["Nguyên mẫu","Quá khứ","Nghĩa"],rows:[["go","went","đi"],["have","had","có, ăn"],["eat","ate","ăn"],["buy","bought","mua"],["see","saw","thấy, xem"],["take","took","lấy, đi xe"]]}},
      {ex:[{t:"Yesterday, I went to Ben Thanh Market.",vi:"Hôm qua tôi đi chợ Bến Thành."},{t:"We had lunch there.",vi:"Chúng tôi ăn trưa ở đó."},{t:"Did you buy anything?",vi:"Bạn có mua gì không?"}]},
      {trap:[["I didn't went to work.","I didn't go to work.","Sau didn't luôn là nguyên mẫu."],["She buyed a phone.","She bought a phone.","buy là động từ bất quy tắc."]]},
      {tip:"<b>Mẹo nhớ:</b> bought và brought (mang) đều có âm /ɔː/; saw và saw (cái cưa) viết giống nhau."}
    ]},
    {type:"drill",name:"Thực hành ngữ pháp",items:[
      {type:"type",q:"I ___ (go) to the market yesterday.",ans:["went"],why:"go thành went."},
      {type:"type",q:"She ___ (buy) a new phone last week.",ans:["bought"],why:"buy thành bought."},
      {type:"type",q:"We ___ (have) dinner at a nice restaurant.",ans:["had"],why:"have thành had."},
      {type:"mcq",q:"They ___ a great film last night.",o:["saw","seed","see"],a:0,why:"see thành saw."},
      {type:"correct",q:"I didn't went to work yesterday.",ans:["I didn't go to work yesterday"],why:"didn't + go."},
      {type:"type",q:"He ___ (take) a taxi to the airport.",ans:["took"],why:"take thành took."},
      {type:"order",q:"Sắp xếp thành câu hỏi",words:["What","did","you","eat","for","lunch?"],ans:["What did you eat for lunch?"],why:"What + did + you + eat?"},
      {type:"mcq",q:"Quá khứ của eat là:",o:["ate","eated","eaten"],a:0,why:"eat thành ate."}
    ]},
    ...VOCAB_STEPS,
    {type:"drill",name:"Nghe",head:{audio:[{t:"Yesterday, I went to Ben Thanh Market with my friend."},{t:"We had lunch there, and I ate a delicious bowl of noodles."},{t:"Then I bought some coffee beans, and we took a taxi home."}],max:3},items:[
      {type:"mcq",q:"Where did she go?",o:["Ben Thanh Market","A cinema","Her office","The airport"],a:0,why:"I went to Ben Thanh Market"},
      {type:"mcq",q:"What did she eat?",o:["Noodles","Rice","Bread","Salad"],a:0,why:"a bowl of noodles"},
      {type:"mcq",q:"What did she buy?",o:["Coffee beans","Clothes","Tea","Fruit"],a:0,why:"I bought some coffee beans"},
      {type:"dictation",q:"Nghe và chép lại câu:",say:"We took a taxi home.",ans:["We took a taxi home"],why:"We took a taxi home."}
    ]},
    {type:"write",name:"Viết",title:"Hôm qua của tôi",prompt:"Viết 3 câu kể hôm qua KC đã đi đâu, ăn gì, làm gì.",min:18,
      bank:[["went to","đã đi đến"],["had","đã ăn, đã có"],["ate","đã ăn"],["bought","đã mua"],["took a taxi","đã đi taxi"],["After work","sau giờ làm"]],
      frames:["Yesterday, I went to ______.","I had ______ for lunch.","After work, I ______."],
      need:[["\\b(went|had|ate|bought|saw|took)\\b","Có động từ bất quy tắc ở quá khứ"]],
      checklist:["Có 3 câu","Dùng ít nhất 2 động từ bất quy tắc","Viết hoa, có dấu chấm"],
      model:"Yesterday, I went to the office early. I had rice and chicken for lunch. After work, I bought some fruit and took a taxi home."},
    {type:"speak",name:"Nói",intro:"Nói đuổi theo mẫu rồi ghi âm.",items:[{q:"What did you have for breakfast today?",model:"I had a bowl of pho and an iced coffee."},{q:"Where did you go last weekend?",model:"I went to a new café in District 1 with my friends."}]},
    GAME
  ]
},
{
  day:7, title:"Ôn tập tuần 1 · Câu hỏi Wh", book:"Tuần 1 · Nền tảng",
  vocab:[W("always","/ˈɔːlweɪz/","luôn luôn","I always drink coffee in the morning.","Tôi luôn uống cà phê vào buổi sáng."),W("often","/ˈɒfn/","thường","We often eat out.","Chúng tôi thường ăn ngoài."),W("sometimes","/ˈsʌmtaɪmz/","thỉnh thoảng","I sometimes go to the gym.","Thỉnh thoảng tôi đi tập gym."),W("never","/ˈnevə(r)/","không bao giờ","She never cooks.","Cô ấy không bao giờ nấu ăn."),W("weekend","/ˌwiːkˈend/","cuối tuần","See you at the weekend.","Hẹn gặp cuối tuần."),W("holiday","/ˈhɒlədeɪ/","kỳ nghỉ","Last holiday, I went to Phu Quoc.","Kỳ nghỉ trước tôi đi Phú Quốc.")],
  steps:[
    {type:"explain",name:"Ngữ pháp",title:"Câu hỏi Wh và trạng từ tần suất",blocks:[
      {h:"1. Từ để hỏi",p:["<b>What</b> gì · <b>Where</b> ở đâu · <b>When</b> khi nào · <b>Who</b> ai · <b>How much</b> bao nhiêu tiền · <b>How often</b> bao lâu một lần.","Với động từ thường: Wh + do, does, did + chủ ngữ + động từ? <i>Where do you work?</i>","Với to be: Wh + am, is, are, was, were + chủ ngữ? <i>Where is the café?</i>"]},
      {h:"2. Trạng từ tần suất",p:["always (100%), often, sometimes, never (0%).","Đứng <b>trước</b> động từ thường, <b>sau</b> to be: <i>I always drink coffee.</i> <i>She is never late.</i>"]},
      {ex:[{t:"Where do you work? In District 1.",vi:"Bạn làm ở đâu? Ở Quận 1."},{t:"How much is the iced coffee?",vi:"Cà phê đá bao nhiêu tiền?"},{t:"How often do you go to the gym?",vi:"Bạn đi tập gym bao lâu một lần?"}]},
      {trap:[["Where you live?","Where do you live?","Câu hỏi Wh với động từ thường cần do, does, did."],["I drink always coffee.","I always drink coffee.","Trạng từ tần suất đứng trước động từ thường."]]}
    ]},
    {type:"drill",name:"Ôn tập tuần 1",intro:"10 câu tổng hợp các thì đã học trong tuần.",items:[
      {type:"mcq",q:"___ do you work? In District 1.",o:["Where","When","Who"],a:0,why:"Hỏi nơi chốn: Where."},
      {type:"mcq",q:"___ is the iced coffee? 30,000 dong.",o:["How much","How often","What"],a:0,why:"Hỏi giá: How much."},
      {type:"mcq",q:"___ do you go to the gym? Twice a week.",o:["How often","How much","Where"],a:0,why:"Hỏi tần suất: How often."},
      {type:"type",q:"She ___ (be) my manager.",ans:["is"],why:"She + is."},
      {type:"type",q:"He ___ (go) to work by bus every day.",ans:["goes"],why:"Hiện tại đơn, He + goes."},
      {type:"type",q:"Look! They ___ (dance).",ans:["are dancing"],why:"Look!: hiện tại tiếp diễn."},
      {type:"type",q:"I ___ (see) a good film last night.",ans:["saw"],why:"last night: quá khứ đơn."},
      {type:"correct",q:"Where you live?",ans:["Where do you live"],why:"Thiếu do."},
      {type:"order",q:"Sắp xếp thành câu hỏi",words:["What","time","does","the","café","open?"],ans:["What time does the café open?"],why:"What time + does + the café + open?"},
      {type:"mcq",q:"Câu nào đúng?",o:["I always drink coffee.","I drink always coffee.","Always I coffee drink.","I drink coffee always do."],a:0,why:"Trạng từ tần suất trước động từ thường."}
    ]},
    ...VOCAB_STEPS,
    {type:"drill",name:"Nghe",head:{audio:[{t:"I always drink coffee in the morning."},{t:"I sometimes go to the gym after work, but I never go on Sundays."},{t:"Last holiday, I went to Phu Quoc with my family."}],max:3},items:[
      {type:"mcq",q:"What does she always do in the morning?",o:["Drink coffee","Go to the gym","Cook breakfast","Read news"],a:0,why:"I always drink coffee"},
      {type:"mcq",q:"When does she never go to the gym?",o:["On Sundays","On Mondays","After work","In the morning"],a:0,why:"I never go on Sundays"},
      {type:"mcq",q:"Where did she go last holiday?",o:["Phu Quoc","Da Lat","Hanoi","Hoi An"],a:0,why:"I went to Phu Quoc"},
      {type:"dictation",q:"Nghe và chép lại câu:",say:"I never go on Sundays.",ans:["I never go on Sundays"],why:"I never go on Sundays."}
    ]},
    {type:"write",name:"Viết",title:"Thói quen và cuối tuần",prompt:"Viết 4 câu: 3 câu về thói quen (dùng always, sometimes, never) và 1 câu về cuối tuần trước.",min:20,
      bank:[["always","luôn luôn"],["sometimes","thỉnh thoảng"],["never","không bao giờ"],["after work","sau giờ làm"],["Last weekend","cuối tuần trước"],["went to","đã đi"]],
      frames:["I always ______ in the morning.","I sometimes ______ after work.","I never ______.","Last weekend, I ______."],
      need:[["\\b(always|often|sometimes|never)\\b","Có trạng từ tần suất"],["\\b(went|had|ate|bought|saw|took|\\w+ed)\\b","Có câu quá khứ"]],
      checklist:["Có 4 câu","Trạng từ tần suất đúng vị trí","Có 1 câu quá khứ","Viết hoa, có dấu chấm"],
      model:"I always drink coffee in the morning. I sometimes meet my friends after work. I never cook on weekdays, because I'm too busy. Last weekend, I went to the cinema."},
    {type:"speak",name:"Nói",intro:"Nói đuổi theo mẫu rồi ghi âm.",items:[{q:"How often do you drink coffee?",model:"I drink coffee every day, usually in the morning."},{q:"What do you usually do at weekends?",model:"At weekends, I sometimes visit my family, and I always spend some time with my pets."}]},
    GAME
  ]
}
];
