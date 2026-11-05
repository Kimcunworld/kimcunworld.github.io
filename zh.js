// Lộ trình tiếng Trung giao tiếp và thư pháp · Tuần 1
window.ZH_WEEKS = [
  {week:1, title:"Thanh điệu và biến điệu · 8 nét cơ bản · Giới thiệu bản thân và công việc"},
  {week:2, title:"Quán cà phê, nhà hàng · Cấu trúc 把 và 了"},
  {week:3, title:"Đi lại, mua sắm, hẹn giờ · 比, 又…又…, 越来越"},
  {week:4, title:"Trao đổi với nhân viên và khách · 因为…所以, 虽然…但是 · Ôn tập"}
];

window.ZH_DAYS = [
{
  day:1, theme:"Thanh điệu · Giới thiệu tên",
  words:[
    {h:"我", py:"wǒ", vi:"tôi", ex:"我是KC。", exPy:"Wǒ shì KC.", exVi:"Tôi là KC."},
    {h:"叫", py:"jiào", vi:"tên là, gọi là", ex:"我叫KC。", exPy:"Wǒ jiào KC.", exVi:"Tôi tên là KC."},
    {h:"名字", py:"míngzi", vi:"tên", ex:"你叫什么名字？", exPy:"Nǐ jiào shénme míngzi?", exVi:"Bạn tên là gì?"},
    {h:"认识", py:"rènshi", vi:"quen biết", ex:"很高兴认识你。", exPy:"Hěn gāoxìng rènshi nǐ.", exVi:"Rất vui được làm quen với bạn."}
  ],
  pattern:{
    title:"4 thanh điệu và quy tắc hai thanh 3 liền nhau",
    body:[
      "<b>Thanh 1</b> (ā) cao và đều. <b>Thanh 2</b> (á) đi lên như khi hỏi lại. <b>Thanh 3</b> (ǎ) xuống thấp rồi lên. <b>Thanh 4</b> (à) đi xuống dứt khoát. <b>Thanh nhẹ</b> không có dấu, đọc ngắn và nhẹ.",
      "Khi <b>hai thanh 3 đứng liền nhau</b>, thanh 3 đầu tiên đọc thành thanh 2: 你好 nǐ hǎo đọc là <b>ní hǎo</b>; 很好 hěn hǎo đọc là <b>hén hǎo</b>.",
      "Pinyin khi viết vẫn giữ dấu gốc, chỉ thay đổi khi đọc."
    ],
    examples:[
      {h:"你好", py:"nǐ hǎo (đọc ní hǎo)", vi:"Xin chào"},
      {h:"很好", py:"hěn hǎo (đọc hén hǎo)", vi:"Rất tốt"},
      {h:"很高兴", py:"hěn gāoxìng", vi:"Rất vui"}
    ]
  },
  dialogue:[
    {who:"A", h:"你好！我叫KC。你叫什么名字？", py:"Nǐ hǎo! Wǒ jiào KC. Nǐ jiào shénme míngzi?", vi:"Xin chào! Tôi tên là KC. Bạn tên là gì?"},
    {who:"B", h:"我叫小王。很高兴认识你。", py:"Wǒ jiào Xiǎo Wáng. Hěn gāoxìng rènshi nǐ.", vi:"Tôi tên là Tiểu Vương. Rất vui được làm quen với bạn."},
    {who:"A", h:"我也很高兴认识你。", py:"Wǒ yě hěn gāoxìng rènshi nǐ.", vi:"Tôi cũng rất vui được làm quen với bạn."}
  ],
  write:{char:"一", py:"yī", vi:"một", note:"<b>Nét ngang</b> (横 héng): viết từ trái sang phải, hơi nghiêng lên một chút. Đây là nét cơ bản nhất trong thư pháp: đặt bút có lực, đi đều, cuối nét dừng lại rồi nhấc bút."},
  practice:[
    {q:"你好 đọc thực tế là:", o:["ní hǎo","nǐ hǎo","nì hǎo","ní hào"], a:0, why:"Hai thanh 3 liền nhau, thanh đầu đọc thành thanh 2."},
    {q:"你叫什么名字？ nghĩa là:", o:["Bạn tên là gì?","Bạn làm nghề gì?","Bạn ở đâu?","Bạn khỏe không?"], a:0, why:"叫 là tên là, 什么 là gì, 名字 là tên."},
    {q:"Thanh nào đi xuống dứt khoát?", o:["Thanh 1","Thanh 2","Thanh 3","Thanh 4"], a:3, why:"Thanh 4 (à) đi từ cao xuống thấp, dứt khoát."},
    {q:"Chữ nào nghĩa là “quen biết”?", o:["认识","名字","高兴","我们"], a:0, why:"认识 rènshi: quen biết."}
  ]
},
{
  day:2, theme:"Biến điệu của 不 · Tôi là...",
  words:[
    {h:"是", py:"shì", vi:"là", ex:"我是经理。", exPy:"Wǒ shì jīnglǐ.", exVi:"Tôi là quản lý."},
    {h:"不", py:"bù", vi:"không", ex:"我不是老板。", exPy:"Wǒ bú shì lǎobǎn.", exVi:"Tôi không phải ông chủ."},
    {h:"经理", py:"jīnglǐ", vi:"quản lý", ex:"她是我们的经理。", exPy:"Tā shì wǒmen de jīnglǐ.", exVi:"Cô ấy là quản lý của chúng tôi."},
    {h:"老板", py:"lǎobǎn", vi:"ông chủ, bà chủ", ex:"老板在吗？", exPy:"Lǎobǎn zài ma?", exVi:"Chủ quán có ở đây không?"}
  ],
  pattern:{
    title:"A 是 B · A 不是 B · câu hỏi với 吗",
    body:[
      "是 nối hai danh từ: 我是经理 (Tôi là quản lý).",
      "Phủ định đặt 不 trước 是: 我不是老板. Thêm <b>吗</b> cuối câu để thành câu hỏi có hoặc không: 你是经理吗？",
      "<b>Biến điệu:</b> 不 vốn là thanh 4 (bù). Khi đứng trước một thanh 4 khác thì đọc thành thanh 2: 不是 <b>bú shì</b>, 不去 <b>bú qù</b>."
    ],
    examples:[
      {h:"我是经理。", py:"Wǒ shì jīnglǐ.", vi:"Tôi là quản lý."},
      {h:"我不是老板。", py:"Wǒ bú shì lǎobǎn.", vi:"Tôi không phải ông chủ."},
      {h:"你是经理吗？", py:"Nǐ shì jīnglǐ ma?", vi:"Bạn là quản lý phải không?"}
    ]
  },
  dialogue:[
    {who:"A", h:"你是这里的老板吗？", py:"Nǐ shì zhèlǐ de lǎobǎn ma?", vi:"Bạn là chủ ở đây phải không?"},
    {who:"B", h:"不是，我是经理。", py:"Bú shì, wǒ shì jīnglǐ.", vi:"Không phải, tôi là quản lý."},
    {who:"A", h:"你的工作忙吗？", py:"Nǐ de gōngzuò máng ma?", vi:"Công việc của bạn có bận không?"},
    {who:"B", h:"很忙，可是我很喜欢。", py:"Hěn máng, kěshì wǒ hěn xǐhuan.", vi:"Rất bận, nhưng tôi rất thích."}
  ],
  write:{char:"十", py:"shí", vi:"mười", note:"Gồm nét ngang rồi <b>nét sổ</b> (竖 shù). Quy tắc thứ tự: <b>ngang trước, sổ sau</b>. Nét sổ viết từ trên xuống, thẳng và vững như cột nhà."},
  practice:[
    {q:"不是 đọc là:", o:["bú shì","bù shì","bǔ shì","bū shì"], a:0, why:"是 là thanh 4 nên 不 đứng trước đọc thành thanh 2."},
    {q:"“Tôi không phải là ông chủ” là:", o:["我不是老板。","我是不老板。","不我是老板。","我老板不是。"], a:0, why:"不 đứng ngay trước 是."},
    {q:"Thêm chữ gì cuối câu để hỏi có hay không?", o:["吗","呢","吧","的"], a:0, why:"吗 ma biến câu khẳng định thành câu hỏi có hoặc không."},
    {q:"经理 nghĩa là:", o:["quản lý","nhân viên","khách hàng","đồng nghiệp"], a:0, why:"经理 jīnglǐ: quản lý."}
  ]
},
{
  day:3, theme:"Biến điệu của 一 · Làm việc ở đâu",
  words:[
    {h:"在", py:"zài", vi:"ở, tại", ex:"我在公司。", exPy:"Wǒ zài gōngsī.", exVi:"Tôi đang ở công ty."},
    {h:"工作", py:"gōngzuò", vi:"làm việc, công việc", ex:"我在咖啡馆工作。", exPy:"Wǒ zài kāfēiguǎn gōngzuò.", exVi:"Tôi làm việc ở quán cà phê."},
    {h:"公司", py:"gōngsī", vi:"công ty", ex:"我们公司很大。", exPy:"Wǒmen gōngsī hěn dà.", exVi:"Công ty chúng tôi rất lớn."},
    {h:"咖啡馆", py:"kāfēiguǎn", vi:"quán cà phê", ex:"这个咖啡馆很好。", exPy:"Zhège kāfēiguǎn hěn hǎo.", exVi:"Quán cà phê này rất tốt."}
  ],
  pattern:{
    title:"Chủ ngữ + 在 + nơi chốn + 工作",
    body:[
      "Trong tiếng Trung, <b>nơi chốn đứng trước động từ</b>: 我在公司工作 (Tôi làm việc ở công ty). Không nói 我工作在公司.",
      "<b>Biến điệu của 一:</b> đứng một mình hoặc cuối từ đọc <b>yī</b>; trước thanh 4 đọc <b>yí</b> (一个 yí ge); trước thanh 1, 2, 3 đọc <b>yì</b> (一天 yì tiān, 一年 yì nián, 一起 yì qǐ).",
      "家 (jiā) là lượng từ cho cửa hàng, công ty: 一家咖啡馆 (một quán cà phê)."
    ],
    examples:[
      {h:"我在公司工作。", py:"Wǒ zài gōngsī gōngzuò.", vi:"Tôi làm việc ở công ty."},
      {h:"一个人", py:"yí ge rén", vi:"một người"},
      {h:"一天", py:"yì tiān", vi:"một ngày"}
    ]
  },
  dialogue:[
    {who:"A", h:"你在哪儿工作？", py:"Nǐ zài nǎr gōngzuò?", vi:"Bạn làm việc ở đâu?"},
    {who:"B", h:"我在一家咖啡馆工作。", py:"Wǒ zài yì jiā kāfēiguǎn gōngzuò.", vi:"Tôi làm việc ở một quán cà phê."},
    {who:"A", h:"你每天都工作吗？", py:"Nǐ měitiān dōu gōngzuò ma?", vi:"Ngày nào bạn cũng làm việc à?"},
    {who:"B", h:"对，我每天都去。", py:"Duì, wǒ měitiān dōu qù.", vi:"Đúng vậy, ngày nào tôi cũng đi."}
  ],
  write:{char:"人", py:"rén", vi:"người", note:"Gồm <b>nét phẩy</b> (撇 piě) kéo từ trên xuống sang trái, rồi <b>nét mác</b> (捺 nà) kéo xuống sang phải, cuối nét ấn mạnh rồi nhấc bút. Đây là cặp nét tạo dáng cân đối trong thư pháp."},
  practice:[
    {q:"“Tôi làm việc ở công ty” là:", o:["我在公司工作。","我工作在公司。","在我公司工作。","我公司在工作。"], a:0, why:"Nơi chốn (在公司) đứng trước động từ (工作)."},
    {q:"一个 đọc là:", o:["yí ge","yì ge","yī ge","yǐ ge"], a:0, why:"个 vốn là thanh 4 (gè) nên 一 đọc thanh 2."},
    {q:"一天 đọc là:", o:["yì tiān","yí tiān","yī tiān"], a:0, why:"天 là thanh 1 nên 一 đọc thanh 4."},
    {q:"咖啡馆 nghĩa là:", o:["quán cà phê","nhà hàng","công ty","khách sạn"], a:0, why:"咖啡 cà phê + 馆 quán."}
  ]
},
{
  day:4, theme:"Hỏi nghề nghiệp",
  words:[
    {h:"做", py:"zuò", vi:"làm", ex:"你做什么？", exPy:"Nǐ zuò shénme?", exVi:"Bạn làm gì?"},
    {h:"什么", py:"shénme", vi:"gì, cái gì", ex:"这是什么？", exPy:"Zhè shì shénme?", exVi:"Đây là cái gì?"},
    {h:"营销", py:"yíngxiāo", vi:"marketing, tiếp thị", ex:"我做营销工作。", exPy:"Wǒ zuò yíngxiāo gōngzuò.", exVi:"Tôi làm marketing."},
    {h:"管理", py:"guǎnlǐ", vi:"quản lý (động từ)", ex:"我管理一个团队。", exPy:"Wǒ guǎnlǐ yí ge tuánduì.", exVi:"Tôi quản lý một đội."}
  ],
  pattern:{
    title:"你做什么工作？ · 我做 + lĩnh vực + 工作",
    body:[
      "Hỏi nghề: <b>你做什么工作？</b> (Bạn làm công việc gì?).",
      "Trả lời theo lĩnh vực: 我做营销工作 (Tôi làm marketing). Hoặc nói việc cụ thể: 我管理咖啡馆 (Tôi quản lý quán cà phê).",
      "<b>什么 đứng đúng vị trí của thông tin cần hỏi</b>, không đưa lên đầu câu như tiếng Anh: 你做什么？ (Bạn làm gì?)."
    ],
    examples:[
      {h:"你做什么工作？", py:"Nǐ zuò shénme gōngzuò?", vi:"Bạn làm công việc gì?"},
      {h:"我做营销工作。", py:"Wǒ zuò yíngxiāo gōngzuò.", vi:"Tôi làm marketing."},
      {h:"我管理咖啡馆。", py:"Wǒ guǎnlǐ kāfēiguǎn.", vi:"Tôi quản lý quán cà phê."}
    ]
  },
  dialogue:[
    {who:"A", h:"你做什么工作？", py:"Nǐ zuò shénme gōngzuò?", vi:"Bạn làm công việc gì?"},
    {who:"B", h:"我做营销工作，也管理一家咖啡馆。", py:"Wǒ zuò yíngxiāo gōngzuò, yě guǎnlǐ yì jiā kāfēiguǎn.", vi:"Tôi làm marketing, và cũng quản lý một quán cà phê."},
    {who:"A", h:"真厉害！", py:"Zhēn lìhai!", vi:"Giỏi thật!"},
    {who:"B", h:"谢谢！", py:"Xièxie!", vi:"Cảm ơn!"}
  ],
  write:{char:"大", py:"dà", vi:"to, lớn", note:"<b>Ngang trước</b>, rồi <b>phẩy</b>, cuối cùng <b>mác</b>. Chữ 大 giống người dang rộng tay, giữ nét phẩy và nét mác cân nhau hai bên."},
  practice:[
    {q:"你做什么工作？ nghĩa là:", o:["Bạn làm công việc gì?","Bạn làm xong chưa?","Bạn làm ở đâu?","Bạn thích công việc không?"], a:0, why:"做 làm, 什么 gì, 工作 công việc."},
    {q:"Trong câu hỏi tiếng Trung, 什么 đặt ở đâu?", o:["Đúng vị trí của thông tin cần hỏi","Luôn ở đầu câu","Luôn ở cuối câu","Ngay sau 吗"], a:0, why:"Câu hỏi giữ nguyên trật tự câu kể, chỉ thay thông tin bằng 什么."},
    {q:"营销 nghĩa là:", o:["marketing","kế toán","nhân sự","bán hàng"], a:0, why:"营销 yíngxiāo: marketing, tiếp thị."},
    {q:"Thứ tự nét chữ 大 là:", o:["Ngang, phẩy, mác","Phẩy, mác, ngang","Mác, ngang, phẩy","Ngang, mác, phẩy"], a:0, why:"Ngang trước, phẩy trước mác."}
  ]
},
{
  day:5, theme:"Có bao nhiêu nhân viên",
  words:[
    {h:"有", py:"yǒu", vi:"có", ex:"我们有十个员工。", exPy:"Wǒmen yǒu shí ge yuángōng.", exVi:"Chúng tôi có mười nhân viên."},
    {h:"员工", py:"yuángōng", vi:"nhân viên", ex:"员工很努力。", exPy:"Yuángōng hěn nǔlì.", exVi:"Nhân viên rất chăm chỉ."},
    {h:"多少", py:"duōshao", vi:"bao nhiêu", ex:"你们有多少员工？", exPy:"Nǐmen yǒu duōshao yuángōng?", exVi:"Các bạn có bao nhiêu nhân viên?"},
    {h:"个", py:"gè", vi:"cái, người (lượng từ chung)", ex:"三个人", exPy:"sān ge rén", exVi:"ba người"}
  ],
  pattern:{
    title:"几 và 多少 · số + lượng từ + danh từ",
    body:[
      "<b>几</b> (jǐ) dùng khi đoán số nhỏ, dưới 10: 有几个经理？ <b>多少</b> dùng khi số có thể lớn: 你们有多少员工？",
      "Tiếng Trung <b>bắt buộc có lượng từ</b> giữa số và danh từ: 十个员工 (10 nhân viên), không nói 十员工. Trước lượng từ, số 2 nói là <b>两</b> (liǎng): 两个人.",
      "Phủ định của 有 là <b>没有</b> (méiyǒu), không dùng 不有."
    ],
    examples:[
      {h:"有几个经理？", py:"Yǒu jǐ ge jīnglǐ?", vi:"Có mấy quản lý?"},
      {h:"两个经理", py:"liǎng ge jīnglǐ", vi:"hai quản lý"},
      {h:"我没有时间。", py:"Wǒ méiyǒu shíjiān.", vi:"Tôi không có thời gian."}
    ]
  },
  dialogue:[
    {who:"A", h:"你们咖啡馆有多少员工？", py:"Nǐmen kāfēiguǎn yǒu duōshao yuángōng?", vi:"Quán cà phê của các bạn có bao nhiêu nhân viên?"},
    {who:"B", h:"有十五个员工。", py:"Yǒu shíwǔ ge yuángōng.", vi:"Có mười lăm nhân viên."},
    {who:"A", h:"有几个经理？", py:"Yǒu jǐ ge jīnglǐ?", vi:"Có mấy quản lý?"},
    {who:"B", h:"有两个。", py:"Yǒu liǎng ge.", vi:"Có hai người."}
  ],
  write:{char:"口", py:"kǒu", vi:"miệng", note:"Nét sổ bên trái trước, rồi <b>nét ngang gập</b> (横折 héngzhé) viết liền một nét, cuối cùng nét ngang đóng đáy. Quy tắc: <b>vào nhà trước, đóng cửa sau</b>."},
  practice:[
    {q:"Phủ định của 有 là:", o:["没有","不有","没是","不是"], a:0, why:"有 luôn phủ định bằng 没: 没有."},
    {q:"“15 nhân viên” là:", o:["十五个员工","十五员工","员工十五","个十五员工"], a:0, why:"Số + lượng từ + danh từ."},
    {q:"“Hai quản lý” là:", o:["两个经理","二个经理","两经理","二经理"], a:0, why:"Trước lượng từ dùng 两, và phải có lượng từ 个."},
    {q:"Hỏi số nhân viên (có thể nhiều) dùng:", o:["多少","几","什么","哪儿"], a:0, why:"多少 dùng cho số lượng lớn hoặc không đoán được."}
  ]
},
{
  day:6, theme:"Giờ làm việc",
  words:[
    {h:"从", py:"cóng", vi:"từ", ex:"从早上到晚上", exPy:"cóng zǎoshang dào wǎnshang", exVi:"từ sáng đến tối"},
    {h:"到", py:"dào", vi:"đến", ex:"我四点到。", exPy:"Wǒ sì diǎn dào.", exVi:"Tôi đến lúc bốn giờ."},
    {h:"点", py:"diǎn", vi:"giờ", ex:"现在七点。", exPy:"Xiànzài qī diǎn.", exVi:"Bây giờ là bảy giờ."},
    {h:"晚上", py:"wǎnshang", vi:"buổi tối", ex:"晚上见！", exPy:"Wǎnshang jiàn!", exVi:"Hẹn gặp tối nay!"}
  ],
  pattern:{
    title:"从 A 到 B · thời gian đứng trước động từ",
    body:[
      "从…到… diễn tả khoảng thời gian hoặc quãng đường: 从九点到五点 (từ 9 giờ đến 5 giờ).",
      "<b>Thời gian đứng trước động từ</b>, ngay sau chủ ngữ hoặc ở đầu câu: 我晚上工作 hoặc 晚上我工作. Không đặt thời gian ở cuối câu như tiếng Việt.",
      "Nói giờ: số + 点: 七点 (7 giờ), 七点半 (7 giờ rưỡi)."
    ],
    examples:[
      {h:"从九点到五点", py:"cóng jiǔ diǎn dào wǔ diǎn", vi:"từ 9 giờ đến 5 giờ"},
      {h:"我晚上工作。", py:"Wǒ wǎnshang gōngzuò.", vi:"Tôi làm việc buổi tối."},
      {h:"七点半", py:"qī diǎn bàn", vi:"7 giờ rưỡi"}
    ]
  },
  dialogue:[
    {who:"A", h:"你们几点开门？", py:"Nǐmen jǐ diǎn kāimén?", vi:"Mấy giờ các bạn mở cửa?"},
    {who:"B", h:"我们从下午五点到晚上十二点营业。", py:"Wǒmen cóng xiàwǔ wǔ diǎn dào wǎnshang shí'èr diǎn yíngyè.", vi:"Chúng tôi mở cửa từ 5 giờ chiều đến 12 giờ đêm."},
    {who:"A", h:"你每天几点到？", py:"Nǐ měitiān jǐ diǎn dào?", vi:"Mỗi ngày bạn đến lúc mấy giờ?"},
    {who:"B", h:"我四点半到。", py:"Wǒ sì diǎn bàn dào.", vi:"Tôi đến lúc 4 giờ rưỡi."}
  ],
  write:{char:"小", py:"xiǎo", vi:"nhỏ", note:"<b>Nét sổ móc</b> (竖钩 shùgōu) ở giữa viết trước, cuối nét hất nhẹ sang trái; sau đó chấm bên trái, chấm bên phải. Quy tắc: <b>giữa trước, hai bên sau</b>."},
  practice:[
    {q:"“Từ 9 giờ đến 5 giờ” là:", o:["从九点到五点","到九点从五点","九点从五点到","从九点五点到"], a:0, why:"从 + mốc đầu + 到 + mốc cuối."},
    {q:"Câu nào đúng?", o:["我晚上工作。","我工作晚上。","工作我晚上。","晚上工作我在。"], a:0, why:"Thời gian đứng trước động từ."},
    {q:"七点半 là:", o:["7 giờ rưỡi","7 giờ kém 15","7 giờ 15","nửa ngày"], a:0, why:"半 bàn: rưỡi, một nửa."},
    {q:"Nét đầu tiên của chữ 小 là:", o:["Nét sổ móc ở giữa","Chấm bên trái","Chấm bên phải","Nét ngang"], a:0, why:"Chữ đối xứng viết phần giữa trước."}
  ]
},
{
  day:7, theme:"Ôn tập · Công việc của tôi",
  words:[
    {h:"忙", py:"máng", vi:"bận", ex:"我今天很忙。", exPy:"Wǒ jīntiān hěn máng.", exVi:"Hôm nay tôi rất bận."},
    {h:"累", py:"lèi", vi:"mệt", ex:"你累吗？", exPy:"Nǐ lèi ma?", exVi:"Bạn có mệt không?"},
    {h:"喜欢", py:"xǐhuan", vi:"thích", ex:"我喜欢我的工作。", exPy:"Wǒ xǐhuan wǒ de gōngzuò.", exVi:"Tôi thích công việc của mình."},
    {h:"同事", py:"tóngshì", vi:"đồng nghiệp", ex:"我的同事很好。", exPy:"Wǒ de tóngshì hěn hǎo.", exVi:"Đồng nghiệp của tôi rất tốt."}
  ],
  pattern:{
    title:"很 + tính từ · 可是 nối ý ngược",
    body:[
      "Câu miêu tả dùng <b>很 + tính từ</b>, không cần 是: 我很忙 (Tôi bận). Không nói 我是忙.",
      "很 ở đây chủ yếu giúp câu tự nhiên, không nhất thiết mang nghĩa “rất”.",
      "<b>可是</b> (kěshì) nghĩa là “nhưng”: 工作很累，可是我很喜欢. Câu hỏi dạng 累不累？ (có mệt không?) lặp lại tính từ với 不 ở giữa."
    ],
    examples:[
      {h:"我很忙。", py:"Wǒ hěn máng.", vi:"Tôi bận."},
      {h:"工作很累，可是我很喜欢。", py:"Gōngzuò hěn lèi, kěshì wǒ hěn xǐhuan.", vi:"Công việc mệt, nhưng tôi rất thích."},
      {h:"累不累？", py:"Lèi bu lèi?", vi:"Có mệt không?"}
    ]
  },
  dialogue:[
    {who:"A", h:"你最近忙吗？", py:"Nǐ zuìjìn máng ma?", vi:"Dạo này bạn có bận không?"},
    {who:"B", h:"很忙！我们有很多活动。", py:"Hěn máng! Wǒmen yǒu hěn duō huódòng.", vi:"Rất bận! Chúng tôi có rất nhiều sự kiện."},
    {who:"A", h:"累不累？", py:"Lèi bu lèi?", vi:"Có mệt không?"},
    {who:"B", h:"有点儿累，可是我很喜欢我的同事。", py:"Yǒudiǎnr lèi, kěshì wǒ hěn xǐhuan wǒ de tóngshì.", vi:"Hơi mệt, nhưng tôi rất quý đồng nghiệp của mình."}
  ],
  write:{char:"永", py:"yǒng", vi:"vĩnh cửu", note:"Chữ 永 được dùng hàng nghìn năm để luyện thư pháp vì chứa đủ <b>8 nét cơ bản</b> (永字八法): chấm, ngang, sổ, móc, hất, phẩy ngắn, phẩy dài, mác. Viết chậm, cảm nhận lực bút ở đầu và cuối mỗi nét."},
  practice:[
    {q:"Câu nào đúng?", o:["我很忙。","我是忙。","我忙很。","很我忙。"], a:0, why:"Miêu tả dùng 很 + tính từ, không dùng 是."},
    {q:"可是 nghĩa là:", o:["nhưng","vì vậy","và","nếu"], a:0, why:"可是 kěshì: nhưng."},
    {q:"累不累？ nghĩa là:", o:["Có mệt không?","Không mệt.","Mệt quá!","Ai mệt?"], a:0, why:"Câu hỏi khẳng định + phủ định: 累不累."},
    {q:"Chữ luyện thư pháp chứa đủ 8 nét cơ bản là:", o:["永","大","人","口"], a:0, why:"永字八法: tám phép viết trong chữ 永."}
  ]
}
];
