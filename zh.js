// Tiếng Trung · bám theo sách Luyện nói tiếng Trung Quốc cấp tốc, trình độ Tiền trung cấp
window.ZH_PLAN = [
  {lesson:1, title:"让我们认识一下，好吗？", vi:"Chúng ta làm quen nhé?"},
  {lesson:2, title:"健康第一", vi:"Sức khỏe là trên hết"},
  {lesson:3, title:"好东西人人爱吃", vi:"Đồ ngon ai cũng thích ăn"},
  {lesson:4, title:"这种款式适合我吗？", vi:"Kiểu này có hợp với tôi không?"},
  {lesson:5, title:"你喜欢逛商店吗？", vi:"Bạn có thích đi dạo cửa hàng không?"},
  {lesson:"Ôn 1", title:"我来介绍一下", vi:"Để tôi giới thiệu"},
  {lesson:6, title:"生活有时候就是琐碎的", vi:"Cuộc sống đôi khi thật vụn vặt"},
  {lesson:7, title:"让我们轻松一下", vi:"Hãy thư giãn một chút"},
  {lesson:8, title:"计划赶不上变化", vi:"Kế hoạch không theo kịp thay đổi"},
  {lesson:9, title:"大手大脚还是精打细算", vi:"Tiêu xài phung phí hay tính toán chi li"},
  {lesson:10, title:"我想咨询一下", vi:"Tôi muốn hỏi tư vấn"},
  {lesson:"Ôn 2", title:"我的新房子", vi:"Ngôi nhà mới của tôi"}
];

window.ZH_LESSONS = [
{
  day:1,
  title:"Bài 1 · Tự giới thiệu và tính cách",
  book:"Luyện nói cấp tốc · Bài 1, Bài khóa 1",
  vocab:[
    {id:"zwjs", h:"自我介绍", py:"zìwǒ jièshào", pyn:"zi4wo3jie4shao4", vi:"tự giới thiệu", ex:"下面我来做个自我介绍。", exPy:"Xiàmiàn wǒ lái zuò ge zìwǒ jièshào.", exVi:"Sau đây tôi xin tự giới thiệu.",
      parts:[
        {c:"介", m:"Mẹo nhớ: phía trên là 人 (người), như một người đứng ở giữa làm cầu nối, nên 介 mang nghĩa trung gian, giới thiệu."},
        {c:"绍", m:"Bộ 纟 (sợi tơ) bên trái cộng 召 (gọi, mời) bên phải: gọi người tới và nối sợi dây quen biết."}
      ]},
    {id:"xg", h:"性格", py:"xìnggé", pyn:"xing4ge2", vi:"tính cách", ex:"她的性格很开朗。", exPy:"Tā de xìnggé hěn kāilǎng.", exVi:"Tính cách cô ấy rất cởi mở.",
      parts:[
        {c:"性", m:"Bộ 忄 (trái tim) cộng 生 (sinh ra): bản tính sinh ra từ trong lòng."},
        {c:"格", m:"Bộ 木 (gỗ) cộng 各 (mỗi): khung gỗ định khuôn cho mỗi thứ, nên 格 là khuôn khổ, cách thức."}
      ]},
    {id:"kwx", h:"开玩笑", py:"kāi wánxiào", pyn:"kai1wan2xiao4", vi:"nói đùa", ex:"别生气，我跟你开玩笑呢。", exPy:"Bié shēngqì, wǒ gēn nǐ kāi wánxiào ne.", exVi:"Đừng giận, tôi đùa với bạn thôi mà.",
      parts:[
        {c:"玩", m:"Bộ 王 (ngọc) cộng 元: tay mân mê viên ngọc, nên 玩 là chơi."},
        {c:"笑", m:"Bộ ⺮ (trúc) phía trên, 夭 phía dưới. Mẹo nhớ: lá trúc rung rinh như người đang cười."}
      ]}
  ],
  steps:[
    {type:"hanzi", name:"Từ mới và chiết tự", intro:"3 từ hôm nay. Bấm từng chữ để xem thứ tự nét, đọc mẹo nhớ, nghe và đọc theo."},
    {type:"drill", name:"Viết chữ Hán", intro:"Viết bằng bút trên iPad, không có chữ mờ để chép. Sai 2 lần sẽ hiện gợi ý. Chữ viết sai nhiều sẽ quay lại cuối phần.", items:[
      {type:"hanzi", q:"Viết từ: <b>tự giới thiệu</b> (zìwǒ jièshào)", chars:"自我介绍"},
      {type:"hanzi", q:"Viết từ: <b>tính cách</b> (xìnggé)", chars:"性格"},
      {type:"hanzi", q:"Viết từ: <b>nói đùa</b> (kāi wánxiào)", chars:"开玩笑"}
    ]},
    {type:"drill", name:"Pinyin, nghĩa và nghe", intro:"Viết pinyin kèm số thanh, ví dụ ni3 hao3. Có thể viết tay bằng Scribble.", items:[
      {type:"pinyin", q:"Viết pinyin của: <span class='zh big'>性格</span>", ans:["xing4ge2"], show:"xìnggé"},
      {type:"pinyin", q:"Viết pinyin của: <span class='zh big'>开玩笑</span>", ans:["kai1wan2xiao4"], show:"kāi wánxiào"},
      {type:"pinyin", q:"Viết pinyin của: <span class='zh big'>介绍</span>", ans:["jie4shao4"], show:"jièshào"},
      {type:"mcq", q:"Chữ nào nghĩa là “tính cách”?", o:["<span class='zh'>性格</span>","<span class='zh'>介绍</span>","<span class='zh'>玩笑</span>","<span class='zh'>生气</span>"], a:0, why:"性格 xìnggé: tính cách."},
      {type:"mcq", q:"Nghe và chọn chữ đúng", say:"开玩笑", o:["<span class='zh'>开玩笑</span>","<span class='zh'>开学</span>","<span class='zh'>好笑</span>","<span class='zh'>玩具</span>"], a:0, why:"kāi wánxiào: nói đùa."},
      {type:"mcq", q:"Nghe và chọn nghĩa đúng", say:"她的性格很开朗。", o:["Tính cách cô ấy rất cởi mở","Cô ấy rất thích nói đùa","Cô ấy đang tự giới thiệu","Cô ấy giận tôi rồi"], a:0, why:"性格 tính cách, 开朗 cởi mở, vui vẻ."}
    ]},
    {type:"explain", name:"Mẫu câu", title:"生 + ai + 的气 · 却", blocks:[
      {h:"1. 生 + người + 的气: giận ai đó", p:[
        "Người bị giận chen vào <b>giữa</b> 生 và 的气: <span class='zh'>别生我的气</span> (đừng giận tôi).",
        "Nếu không nói giận ai thì chỉ cần <span class='zh'>生气</span>: <span class='zh'>他生气了</span> (anh ấy giận rồi)."
      ]},
      {h:"2. 却 (què): nhưng lại, vậy mà", p:[
        "Đứng <b>sau chủ ngữ, trước động từ hoặc tính từ</b>, diễn tả điều trái với mong đợi.",
        "Có thể dùng cùng 可是, 但是 ở đầu vế sau để nhấn mạnh hơn."
      ]},
      {ex:[
        {t:"别生我的气。", py:"Bié shēng wǒ de qì.", vi:"Đừng giận tôi nhé."},
        {t:"他还在生老板的气。", py:"Tā hái zài shēng lǎobǎn de qì.", vi:"Anh ấy vẫn còn giận sếp."},
        {t:"这家店很小，生意却很好。", py:"Zhè jiā diàn hěn xiǎo, shēngyi què hěn hǎo.", vi:"Quán này nhỏ, vậy mà buôn bán lại rất đắt."}
      ]},
      {trap:[
        ["我生气你了。","我生你的气了。","Không đặt người bị giận sau 生气; phải chen vào giữa 生 và 的气."],
        ["却他很忙。","他却很忙。","却 là phó từ, đứng sau chủ ngữ, không đứng đầu câu như 但是."]
      ]},
      {book:"Đối chiếu sách Bài 1 (trang 9 đến 15). Bài khóa 1 trang 11 có cả hai cấu trúc này."}
    ]},
    {type:"drill", name:"Luyện mẫu câu", intro:"Sắp xếp, dịch và nghe chép. Viết chữ Hán bằng Scribble hoặc bàn phím.", items:[
      {type:"order", q:"Sắp xếp thành câu: <i>Đừng giận tôi.</i>", words:["别","生","我","的气"], ans:["别生我的气"], zh:true, why:"别 + 生 + người + 的气."},
      {type:"order", q:"Sắp xếp thành câu: <i>Quán này nhỏ, vậy mà buôn bán rất đắt.</i>", words:["这家店","很小，","生意","却","很好"], ans:["这家店很小，生意却很好"], zh:true, why:"却 đứng sau chủ ngữ 生意."},
      {type:"mcq", q:"Câu nào đúng?", o:["<span class='zh'>我生你的气了。</span>","<span class='zh'>我生气你了。</span>","<span class='zh'>我气生你了。</span>","<span class='zh'>我生的气你了。</span>"], a:0, why:"生 + người + 的气."},
      {type:"type", q:"Dịch sang tiếng Trung: <b>Đừng giận anh ấy.</b>", ans:["别生他的气"], zh:true, why:"别生他的气。"},
      {type:"type", q:"Dịch sang tiếng Trung: <b>Anh ấy thích nói đùa.</b>", ans:["他喜欢开玩笑","他很喜欢开玩笑","他爱开玩笑"], zh:true, why:"喜欢 hoặc 爱 + 开玩笑."},
      {type:"dictation", q:"Nghe và viết lại bằng chữ Hán:", say:"下面我来做个自我介绍。", ans:["下面我来做个自我介绍"], zh:true, why:"Câu mở đầu quen thuộc khi tự giới thiệu."},
      {type:"dictation", q:"Nghe và viết lại bằng chữ Hán:", say:"她的性格很好。", ans:["她的性格很好","他的性格很好"], zh:true, why:"tā có thể là 他 hoặc 她."}
    ]},
    {type:"drill", name:"Nghe đoạn văn", intro:"Nghe tối đa 3 lần, chưa xem chữ. Làm xong sẽ hiện lời và pinyin.", head:{audio:[
      {t:"大家好，我叫KC，是越南人。", py:"Dàjiā hǎo, wǒ jiào KC, shì Yuènán rén."},
      {t:"我的性格很开朗，喜欢交朋友，也爱开玩笑。", py:"Wǒ de xìnggé hěn kāilǎng, xǐhuan jiāo péngyou, yě ài kāi wánxiào."},
      {t:"如果我的玩笑开过头了，请大家别生我的气。", py:"Rúguǒ wǒ de wánxiào kāi guòtóu le, qǐng dàjiā bié shēng wǒ de qì."}
    ], max:3, lang:"zh"}, items:[
      {type:"mcq", q:"KC là người nước nào?", o:["Việt Nam","Trung Quốc","Thụy Điển","Anh"], a:0, why:"是越南人."},
      {type:"mcq", q:"Tính cách của KC thế nào?", o:["Cởi mở, thích đùa","Trầm lặng, ít nói","Nóng tính","Nhút nhát"], a:0, why:"性格很开朗……爱开玩笑."},
      {type:"mcq", q:"KC nhờ mọi người điều gì?", o:["Đừng giận nếu KC đùa quá trớn","Giới thiệu bạn mới cho KC","Gọi KC bằng tên tiếng Trung","Giúp KC học tiếng Trung"], a:0, why:"玩笑开过头了，请大家别生我的气."}
    ]},
    {type:"speak", name:"Nói", lang:"zh", intro:"Nói đuổi theo từng câu, sau đó tự giới thiệu 3 đến 4 câu có dùng 性格 và 开玩笑, ghi âm và nghe lại.", items:[
      {q:"请你做一个自我介绍。(Hãy tự giới thiệu)", model:"大家好，我叫KC，是越南人。我的性格很开朗，喜欢交朋友，也爱开玩笑。如果我的玩笑开过头了，请大家别生我的气。"}
    ]},
    {type:"callig", name:"Thư pháp", char:"笑", py:"xiào", vi:"cười", note:"Bộ trúc ⺮ phía trên viết <b>dẹt và nhỏ</b>, như mái che. Phần 夭 bên dưới <b>mở rộng</b>, nét mác cuối kéo dài làm chân đỡ cả chữ. Nguyên tắc bố cục: <b>trên gọn, dưới rộng</b>. Viết 3 lượt, lượt sau chậm và đều hơn lượt trước.", paper:"Cuối tuần: viết chữ 笑 trên giấy ô mễ 10 lần, chụp ảnh lại để so tiến bộ."},
    {type:"book", name:"Làm trong sách", text:"Mở sách <b>Luyện nói tiếng Trung Quốc cấp tốc</b>, nghe CD và <b>đọc to Bài khóa 1 (trang 11) ba lần</b> cho tới khi trôi chảy. Sau đó làm mục <b>口头报告 câu 1 (trang 15)</b>: tự giới thiệu sao cho người nghe nhớ mình."},
    {type:"game", name:"Trò chơi nhanh", intro:"Ghép chữ Hán với nghĩa nhanh nhất có thể.", pairs:[["自我介绍","tự giới thiệu"],["性格","tính cách"],["开玩笑","nói đùa"],["生气","giận"],["却","nhưng lại"],["别","đừng"]]}
  ]
}
];
