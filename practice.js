// Ngân hàng bài luyện tập · đợt 2
window.TOCKY_LEGEND = [["↑","tăng"],["↓","giảm"],["→","dẫn đến, trở thành"],["=","là, bằng"],["≠","khác"],["&","và"],["w/","with"],["b/c","because"],["ppl","people"],["govt","government"],["k","nghìn (thousand)"],["m","triệu (million)"],["%","phần trăm"],["ex","ví dụ"]];

window.EN_TOCKY = [
  {lv:3,title:"Bài giảng ngắn: quán cà phê ở Sài Gòn", audio:[
    {t:"Today I'd like to look at how coffee shops have changed in Ho Chi Minh City over the last decade."},
    {t:"In 2015, there were roughly two thousand cafés in the city centre. By 2025, that number had risen to around five thousand."},
    {t:"The main reason was the growth of young office workers, who use cafés as places to work."},
    {t:"However, rents increased by about forty percent during the same period, so many small cafés closed after only one or two years."},
    {t:"Owners who survived usually did two things: they focused on takeaway orders, and they used social media for marketing."}
  ], items:[
    {type:"type", q:"Number of cafés in 2015: about ______", ans:["2000","2,000","two thousand"], why:"roughly two thousand cafés"},
    {type:"type", q:"Number of cafés by 2025: around ______", ans:["5000","5,000","five thousand"], why:"risen to around five thousand"},
    {type:"mcq", q:"What was the main reason for the growth?", o:["More young office workers","Cheaper rents","More tourists","Government support"], a:0, why:"the growth of young office workers"},
    {type:"type", q:"Rents increased by about ______ percent", ans:["40","forty"], why:"by about forty percent"},
    {type:"mcq", q:"What did surviving owners focus on?", o:["Takeaway orders and social media","Lower prices and bigger shops","Hiring more staff","Opening later at night"], a:0, why:"takeaway orders and social media"}
  ]},
  {lv:2,title:"Section 1: đăng ký lớp nấu ăn", audio:[
    {who:"M", t:"Hello, I'm calling about the Vietnamese cooking class on Saturday."},
    {who:"W", t:"Yes, the morning class starts at nine thirty and finishes at twelve."},
    {who:"W", t:"It costs thirty five dollars per person, and that includes all the ingredients."},
    {who:"W", t:"Please bring an apron. We provide knives and chopping boards."},
    {who:"W", t:"The class meets at 27 Le Loi Street, next to the post office."}
  ], items:[
    {type:"type", q:"Start time: ______", ans:["9:30","9.30","nine thirty","930"], why:"starts at nine thirty"},
    {type:"type", q:"Price per person: $ ______", ans:["35","thirty five"], why:"thirty five dollars"},
    {type:"type", q:"Bring: an ______ (ONE WORD)", ans:["apron"], why:"Please bring an apron"},
    {type:"type", q:"Address: ______ Le Loi Street", ans:["27"], why:"27 Le Loi Street"},
    {type:"type", q:"Next to the ______", ans:["post office"], why:"next to the post office"}
  ]}
];

window.XECAU_LABELS = {
  en:[["S","Chủ ngữ"],["V","Động từ chính"],["O","Tân ngữ, bổ ngữ"],["Y","Trạng ngữ (giới từ, to V)"],["X","Mệnh đề phụ (who, which, that)"],["Lt","Liên từ"]],
  zh:[["主","Chủ ngữ"],["谓","Vị ngữ (động từ)"],["宾","Tân ngữ"],["状","Trạng ngữ (thời gian, nơi chốn, 把, 跟)"],["补","Bổ ngữ"],["定","Định ngữ (…的)"]]
};
window.EN_XECAU = [{
  lv:1, title:"My café",
  steps:"Bước 1: tìm động từ chính (is, are, work, opens, served). Bước 2: ai hoặc cái gì làm việc đó, đứng trước động từ, là chủ ngữ S. Bước 3: phần ngay sau động từ là tân ngữ, bổ ngữ O. Bước 4: cụm chỉ thời gian, nơi chốn, tần suất là trạng ngữ Y.",
  sents:[
    {c:[["My name","S"],["is","V"],["Mai.","O"]], vi:"Tên tôi là Mai."},
    {c:[["I","S"],["work","V"],["at a small café in District 1.","Y"]], vi:"Tôi làm việc ở một quán cà phê nhỏ tại Quận 1."},
    {c:[["The café","S"],["opens","V"],["at seven every morning.","Y"]], vi:"Quán mở cửa lúc bảy giờ mỗi sáng."},
    {c:[["My staff","S"],["are","V"],["very friendly.","O"]], vi:"Nhân viên của tôi rất thân thiện."},
    {c:[["We","S"],["usually","Y"],["close","V"],["at ten.","Y"]], vi:"Chúng tôi thường đóng cửa lúc mười giờ."},
    {c:[["Yesterday,","Y"],["we","S"],["served","V"],["fifty customers.","O"]], vi:"Hôm qua chúng tôi đã phục vụ năm mươi khách."}
  ],
  items:[
    {type:"mcq", q:"TRUE, FALSE or NOT GIVEN: Mai works at a big café.", o:["TRUE","FALSE","NOT GIVEN"], a:1, why:"Câu 2: a small café, quán nhỏ."},
    {type:"mcq", q:"TRUE, FALSE or NOT GIVEN: The café opens at seven.", o:["TRUE","FALSE","NOT GIVEN"], a:0, why:"Câu 3: opens at seven every morning."},
    {type:"mcq", q:"TRUE, FALSE or NOT GIVEN: Mai has five staff.", o:["TRUE","FALSE","NOT GIVEN"], a:2, why:"Bài không nói có bao nhiêu nhân viên."}
  ]
},{
  lv:3, title:"Night markets",
  steps:"Bước 1: tìm cụm trạng ngữ (giới từ, to V). Bước 2: tìm mệnh đề phụ (who, which, that). Bước 3: tìm liên từ và động từ chính. Bước 4: phần còn lại trước động từ là chủ ngữ, sau là tân ngữ. Bước 5: soát lại.",
  sents:[
    {c:[["In many Southeast Asian cities,","Y"],["night markets","S"],["have become","V"],["popular destinations","O"],["for both locals and tourists.","Y"]], vi:"Ở nhiều thành phố Đông Nam Á, chợ đêm đã trở thành điểm đến phổ biến của cả người dân địa phương lẫn khách du lịch."},
    {c:[["Vendors","S"],["who rent small stalls","X"],["usually","Y"],["sell","V"],["street food, clothes and souvenirs","O"],["at low prices.","Y"]], vi:"Những người bán hàng thuê các sạp nhỏ thường bán đồ ăn đường phố, quần áo và quà lưu niệm với giá rẻ."},
    {c:[["Although","Lt"],["the markets","S"],["create","V"],["jobs","O"],["for thousands of people,","Y"],["they","S"],["also","Y"],["produce","V"],["large amounts of waste.","O"]], vi:"Mặc dù các khu chợ tạo ra việc làm cho hàng nghìn người, chúng cũng thải ra rất nhiều rác."},
    {c:[["To solve this problem,","Y"],["some city councils","S"],["have introduced","V"],["rules","O"],["that require vendors to use paper packaging.","X"]], vi:"Để giải quyết vấn đề này, một số chính quyền thành phố đã đưa ra quy định yêu cầu người bán dùng bao bì giấy."},
    {c:[["Critics","S"],["argue","V"],["that the rules are difficult to enforce","X"],["in crowded areas.","Y"]], vi:"Những người phản đối cho rằng các quy định này khó thực thi ở những khu vực đông đúc."}
  ],
  items:[
    {type:"mcq", q:"TRUE, FALSE or NOT GIVEN: Night markets attract only tourists.", o:["TRUE","FALSE","NOT GIVEN"], a:1, why:"Câu 1: for both locals and tourists."},
    {type:"mcq", q:"TRUE, FALSE or NOT GIVEN: The vendors own their stalls.", o:["TRUE","FALSE","NOT GIVEN"], a:1, why:"Câu 2: vendors who rent small stalls, tức là đi thuê."},
    {type:"mcq", q:"TRUE, FALSE or NOT GIVEN: Paper packaging is cheaper than plastic.", o:["TRUE","FALSE","NOT GIVEN"], a:2, why:"Bài không so sánh giá giấy và nhựa."}
  ]
}];
window.ZH_XECAU = [{
  lv:1, title:"Tự giới thiệu",
  steps:"Bước 1: tìm động từ chính (是, 叫, 学). Bước 2: phía trước động từ là chủ ngữ 主. Bước 3: 不, 也 đứng sát trước động từ là trạng ngữ 状. Bước 4: phía sau động từ là tân ngữ 宾.",
  sents:[
    {c:[["我","主"],["是","谓"],["越南人","宾"]], vi:"Tôi là người Việt Nam.", py:"Wǒ shì Yuènán rén."},
    {c:[["我","主"],["叫","谓"],["KC","宾"]], vi:"Tôi tên là KC.", py:"Wǒ jiào KC."},
    {c:[["他","主"],["不","状"],["是","谓"],["中国人","宾"]], vi:"Anh ấy không phải người Trung Quốc.", py:"Tā bú shì Zhōngguó rén."},
    {c:[["我们","主"],["也","状"],["是","谓"],["越南人","宾"]], vi:"Chúng tôi cũng là người Việt Nam.", py:"Wǒmen yě shì Yuènán rén."},
    {c:[["你","主"],["叫","谓"],["什么 名字","宾"]], vi:"Bạn tên là gì?", py:"Nǐ jiào shénme míngzi?"},
    {c:[["我","主"],["学","谓"],["中文","宾"]], vi:"Tôi học tiếng Trung.", py:"Wǒ xué Zhōngwén."}
  ]
},{
  lv:3, title:"Xé câu tiếng Trung",
  steps:"Trật tự câu tiếng Trung: (定) 主 + 状 (thời gian, nơi chốn, 把, 跟) + 谓 + 补 + (定) 宾. Tìm động từ chính trước, rồi xem cụm nào đứng trước động từ (thường là trạng ngữ) và sau động từ (bổ ngữ, tân ngữ).",
  sents:[
    {c:[["我们 公司","主"],["每天 早上 九点","状"],["开会","谓"]], vi:"Công ty chúng tôi họp lúc 9 giờ sáng mỗi ngày.", py:"Wǒmen gōngsī měitiān zǎoshang jiǔ diǎn kāihuì."},
    {c:[["那家 咖啡馆 的","定"],["老板","主"],["在 越南","状"],["开了","谓"],["三家 店","宾"]], vi:"Ông chủ của quán cà phê đó đã mở ba cửa hàng ở Việt Nam.", py:"Nà jiā kāfēiguǎn de lǎobǎn zài Yuènán kāi le sān jiā diàn."},
    {c:[["她","主"],["把 菜单","状"],["放","谓"],["在 桌子 上 了","补"]], vi:"Cô ấy đã đặt thực đơn lên bàn rồi.", py:"Tā bǎ càidān fàng zài zhuōzi shang le."},
    {c:[["我","主"],["昨天","状"],["跟 朋友","状"],["喝了","谓"],["两杯 咖啡","宾"]], vi:"Hôm qua tôi uống hai ly cà phê với bạn.", py:"Wǒ zuótiān gēn péngyou hē le liǎng bēi kāfēi."},
    {c:[["服务员","主"],["说","谓"],["得 很 快","补"]], vi:"Nhân viên phục vụ nói rất nhanh.", py:"Fúwùyuán shuō de hěn kuài."}
  ]
}];

window.EN_DOCDANG = [
  {lv:3,id:"tfng", t:"TRUE, FALSE, NOT GIVEN", tips:["<b>TRUE</b>: bài nói đúng ý câu hỏi, thường bằng từ đồng nghĩa (paraphrase).","<b>FALSE</b>: bài nói ngược lại câu hỏi.","<b>NOT GIVEN</b>: bài không có thông tin để khẳng định hay phủ định.","Cẩn thận từ chỉ mức độ: all, only, always, never, most, up to."],
   title:"Rooftop gardens", minutes:6, passage:["Rooftop gardens are becoming increasingly common in large cities. In Singapore, the government has offered grants since 2009 to building owners who install green roofs. Supporters claim that these gardens reduce indoor temperatures by up to five degrees Celsius, which lowers the demand for air conditioning.","However, installation is expensive, and older buildings often need structural work before a garden can be added. A recent survey found that most residents who live near rooftop gardens feel less stressed, although researchers admit that the survey was small."],
   items:[
    {type:"mcq", q:"Singapore began offering grants for green roofs in 2009.", o:["TRUE","FALSE","NOT GIVEN"], a:0, why:"has offered grants since 2009"},
    {type:"mcq", q:"Rooftop gardens always reduce temperatures by five degrees.", o:["TRUE","FALSE","NOT GIVEN"], a:1, why:"Bài nói up to five degrees (tối đa), không phải always."},
    {type:"mcq", q:"Older buildings may require extra work before a garden is installed.", o:["TRUE","FALSE","NOT GIVEN"], a:0, why:"older buildings often need structural work"},
    {type:"mcq", q:"Rooftop gardens are cheaper to install than solar panels.", o:["TRUE","FALSE","NOT GIVEN"], a:2, why:"Bài không nhắc tới tấm pin mặt trời."},
    {type:"mcq", q:"The survey about stress involved a large number of people.", o:["TRUE","FALSE","NOT GIVEN"], a:1, why:"researchers admit that the survey was small"}
   ]},
  {lv:3,id:"heading", t:"Matching headings", tips:["Đọc câu chủ đề của đoạn, thường là câu đầu hoặc câu cuối.","Heading nói ý chính của cả đoạn, không phải một chi tiết.","Cẩn thận heading có từ giống hệt trong bài: thường là bẫy.","Gạch bỏ heading đã dùng."],
   title:"The four day work week", minutes:5, passage:["<b>A</b> Several companies in Europe have tested a four day week without reducing salaries. Managers wanted to know whether staff could produce the same results in less time.","<b>B</b> In most trials, output stayed the same or improved. Employees reported taking fewer sick days, and many said they spent the extra day with their families or on hobbies.","<b>C</b> Not every business can adopt the idea easily. Hospitals, restaurants and shops must stay open every day, so they would need more staff or complex rotas to give everyone a longer weekend."],
   items:[
    {type:"mcq", q:"Chọn heading cho đoạn A", o:["The purpose of the experiments","Positive results for workers and companies","Why some sectors face difficulties","How salaries were reduced"], a:0, why:"Đoạn A nói managers wanted to know: mục đích thử nghiệm. Salaries were NOT reduced nên heading 4 là bẫy."},
    {type:"mcq", q:"Chọn heading cho đoạn B", o:["Positive results for workers and companies","The purpose of the experiments","Government plans for new laws","Why some sectors face difficulties"], a:0, why:"output improved, fewer sick days: kết quả tích cực."},
    {type:"mcq", q:"Chọn heading cho đoạn C", o:["Why some sectors face difficulties","Positive results for workers and companies","How salaries were reduced","Government plans for new laws"], a:0, why:"Not every business can adopt: một số ngành gặp khó."}
   ]},
  {lv:2,id:"complete", t:"Sentence completion", tips:["Đọc kỹ giới hạn từ: NO MORE THAN TWO WORDS nghĩa là tối đa hai từ.","Đoán trước loại từ cần điền (danh từ, số, tính từ).","Đáp án lấy nguyên văn từ bài, câu hỏi thì được viết lại bằng từ đồng nghĩa.","Câu hỏi thường theo đúng thứ tự trong bài."],
   title:"How honeybees talk", minutes:4, passage:["Honeybees communicate the location of food through a movement known as the waggle dance. The angle of the dance shows the direction of the flowers in relation to the sun, while its length indicates the distance. Scientists have discovered that bees can also recognise human faces, although they use this skill mainly to remember flowers."],
   items:[
    {type:"type", q:"Bees show where food is by performing the ______. (NO MORE THAN TWO WORDS)", ans:["waggle dance"], why:"known as the waggle dance"},
    {type:"type", q:"The ______ of the dance tells other bees how far away the food is.", ans:["length"], why:"its length indicates the distance"},
    {type:"type", q:"The direction is shown in relation to the ______.", ans:["sun"], why:"in relation to the sun"},
    {type:"type", q:"Bees mainly use face recognition to remember ______.", ans:["flowers"], why:"mainly to remember flowers"}
   ]},
  {lv:3,id:"which", t:"Ý này ở đoạn nào", tips:["Đọc câu hỏi trước, gạch từ khóa và nghĩ trước các từ đồng nghĩa.","Câu hỏi không theo thứ tự đoạn văn.","Một đoạn có thể được dùng nhiều lần hoặc không dùng.","Tìm theo ý, không chỉ tìm từ giống nhau."],
   title:"Learning languages as an adult", minutes:5, passage:["<b>A</b> Many adults believe that it is too late to learn a new language after the age of thirty. Research does not support this view, although children do find pronunciation easier.","<b>B</b> Adults have important advantages. They can understand grammar rules quickly and often have clear goals, such as using the language at work.","<b>C</b> The biggest obstacle for adults is usually time. Short daily sessions, even fifteen minutes long, have been shown to work better than one long lesson a week.","<b>D</b> Technology has made self study easier. Apps can repeat words at the right moment, which helps learners move vocabulary into long term memory."],
   items:[
    {type:"mcq", q:"Đoạn nào nhắc tới một lịch học được khuyên dùng?", o:["A","B","C","D"], a:2, why:"Short daily sessions… work better."},
    {type:"mcq", q:"Đoạn nào nhắc tới một quan niệm sai phổ biến?", o:["A","B","C","D"], a:0, why:"believe that it is too late… Research does not support this view."},
    {type:"mcq", q:"Đoạn nào nhắc tới một công cụ giúp ghi nhớ?", o:["A","B","C","D"], a:3, why:"Apps can repeat words at the right moment."},
    {type:"mcq", q:"Đoạn nào nêu ví dụ về động lực học?", o:["A","B","C","D"], a:1, why:"clear goals, such as using the language at work."}
   ]}
];

window.EN_VIETKHOI = [
  {id:"t1-intro", t:"Task 1 · Mở bài", formula:"The + loại biểu đồ + illustrates / compares / gives information about + nội dung (đã diễn đạt lại) + nơi chốn + thời gian.",
   tips:["shows → illustrates, compares, gives information about","the number of → how many","from 2010 to 2020 → between 2010 and 2020, over a period of ten years","Không chép nguyên đề, đổi ít nhất 2 cụm."],
   prompt:"Đề: <i>The graph below shows the number of international tourists visiting three Asian countries between 2010 and 2020.</i><br>Viết <b>1 câu mở bài</b> diễn đạt lại đề.", min:15,
   checklist:["Có gọi tên loại biểu đồ","Đổi động từ shows","Đổi cụm the number of","Giữ đủ nơi chốn và thời gian"],
   model:"The line graph illustrates how many foreign tourists travelled to three Asian countries over a period of ten years, from 2010 to 2020."},
  {id:"t1-over", t:"Task 1 · Tổng quan", formula:"Overall, it is clear that + xu hướng chính + điểm nổi bật nhất. Không đưa số liệu cụ thể.",
   tips:["Nêu 2 ý: xu hướng chung và cái lớn nhất, nhỏ nhất","Dùng Overall, In general","Không có con số trong tổng quan"],
   prompt:"Dựa vào bảng (số liệu minh họa, đơn vị: triệu lượt khách), viết <b>đoạn tổng quan</b> 1 đến 2 câu.", min:25,
   table:{head:["Quốc gia","2010","2015","2020"],rows:[["Thailand","16","30","7"],["Japan","9","20","4"],["Vietnam","5","8","4"]]},
   checklist:["Bắt đầu bằng Overall","Nêu xu hướng chung","Nêu nước nổi bật nhất","Không có con số"],
   model:"Overall, all three countries saw a rise in tourist numbers during the first half of the period, followed by a sharp fall in 2020. Thailand attracted the most visitors throughout the decade."},
  {id:"t1-body", t:"Task 1 · Thân bài", formula:"Chọn 2 đến 3 điểm chính, mỗi câu có số liệu và so sánh: In 2010, A was…, compared with… / The figure for A rose to…, while B…",
   tips:["Nhóm dữ liệu theo thời gian hoặc theo đối tượng","Dùng compared with, while, whereas","Thay đổi động từ: rise, increase, double, drop, fall","Thì quá khứ đơn cho số liệu đã qua"],
   prompt:"Dùng bảng ở trên, viết <b>một đoạn thân bài</b> khoảng 60 đến 80 từ.", min:50,
   table:{head:["Quốc gia","2010","2015","2020"],rows:[["Thailand","16","30","7"],["Japan","9","20","4"],["Vietnam","5","8","4"]]},
   checklist:["Có số liệu cho cả ba nước","Có ít nhất 2 từ so sánh (while, compared with)","Dùng đa dạng động từ tăng giảm","Đúng thì quá khứ đơn"],
   model:"In 2010, Thailand received 16 million international visitors, compared with 9 million for Japan and 5 million for Vietnam. Over the following five years, the figure for Thailand almost doubled to 30 million, while Japan's more than doubled to 20 million. Vietnam grew more modestly, reaching 8 million. In 2020, however, numbers in all three countries dropped dramatically, falling to 7 million in Thailand and just 4 million in both Japan and Vietnam."},
  {id:"t2-intro", t:"Task 2 · Mở bài", formula:"Câu 1: diễn đạt lại đề. Câu 2: nêu quan điểm rõ ràng (thesis) và lý do chính.",
   tips:["Không mở đầu bằng câu quá chung chung","Trả lời đúng câu hỏi của đề (agree or disagree)","2 câu là đủ, khoảng 40 đến 60 từ"],
   prompt:"Đề: <i>Some people think that university education should be free for everyone. To what extent do you agree or disagree?</i><br>Viết <b>mở bài</b> 2 câu.", min:35,
   checklist:["Câu 1 diễn đạt lại đề","Câu 2 nêu rõ đồng ý hay không","Có lý do chính","Không chép nguyên câu đề"],
   model:"Whether higher education should be provided free of charge to all students is a widely debated issue. While I accept that this policy would place a heavy burden on public budgets, I largely agree that universities should be free, because talent should not depend on family income."},
  {id:"t2-body", t:"Task 2 · Thân bài (PEEL)", formula:"Point (câu chủ đề) → Explain (giải thích) → Example (ví dụ) → Link (câu kết nối về đề).",
   tips:["Mỗi đoạn chỉ một ý chính","Ví dụ cụ thể, có thể là một quốc gia, một nghiên cứu, một tình huống","Dùng từ nối: The main reason why…, For example…, As a result…"],
   prompt:"Cùng đề trên, viết <b>một đoạn thân bài</b> khoảng 100 đến 120 từ theo cấu trúc PEEL.", min:100,
   checklist:["Có câu chủ đề rõ ý","Có giải thích vì sao","Có ví dụ cụ thể","Có câu kết nối về đề","Dùng ít nhất 3 từ nối"],
   model:"The main reason why tuition should be free is that it gives every talented young person the same opportunity. When students from low income families have to pay high fees, many of them choose to start working instead of studying, even if they achieved excellent results at school. For example, in several Nordic countries where university education is publicly funded, a larger proportion of students from poorer backgrounds go on to higher education. As a result, free tuition not only benefits individuals but also allows society to make full use of its talent."},
  {id:"t2-concl", t:"Task 2 · Kết bài", formula:"In conclusion + nhắc lại quan điểm (bằng từ khác) + tóm tắt 2 ý chính. Không thêm ý mới.",
   tips:["Bắt đầu bằng In conclusion, To conclude","Đổi cách diễn đạt so với mở bài","2 câu, khoảng 35 đến 50 từ"],
   prompt:"Cùng đề trên, viết <b>kết bài</b> 2 câu.", min:30,
   checklist:["Bắt đầu bằng In conclusion","Nhắc lại quan điểm","Tóm tắt ý chính","Không có ý mới"],
   model:"In conclusion, although free university education is expensive for governments, I believe its benefits outweigh the costs. It gives all talented students an equal chance and helps the whole country develop its human potential."}
];

window.SVO_LABELS = {en:[["S","Chủ ngữ"],["V","Động từ"],["O","Tân ngữ"],["Y","Trạng ngữ"]], zh:[["S","Chủ ngữ"],["T","Thời gian"],["N","Nơi chốn"],["V","Động từ"],["O","Tân ngữ"]]};
window.EN_SVO = [
  {c:[["Doanh thu của quán","S"],["đã tăng","V"],["hai mươi phần trăm","O"],["trong năm nay","Y"]], model:["The café's revenue has increased by twenty percent this year.","Revenue at the café has risen by 20% this year."], up:"increase → rise, grow · nhớ giới từ <b>by</b> trước mức thay đổi"},
  {c:[["Nhiều người trẻ","S"],["thích","V"],["làm việc ở quán cà phê","O"],["vào cuối tuần","Y"]], model:["Many young people like working in cafés at weekends.","Many young people prefer to work in coffee shops at the weekend."], up:"like → prefer, enjoy · at weekends (Anh Anh), on weekends (Anh Mỹ)"},
  {c:[["Chính phủ","S"],["nên đầu tư","V"],["nhiều tiền hơn","O"],["vào giao thông công cộng","Y"]], model:["The government should invest more money in public transport."], up:"invest more money in → allocate more funding to · public transport (Anh Anh) = public transportation"},
  {c:[["Ô nhiễm không khí","S"],["gây ra","V"],["nhiều vấn đề sức khỏe nghiêm trọng","O"]], model:["Air pollution causes many serious health problems.","Air pollution leads to a number of severe health problems."], up:"cause → lead to, result in · serious → severe"},
  {c:[["Tôi","S"],["đã quản lý","V"],["đội ngũ này","O"],["được ba năm","Y"]], model:["I have managed this team for three years.","I have been leading this team for three years."], up:"manage → lead, supervise · có for + thời gian kéo dài đến nay: dùng thì hoàn thành"},
  {c:[["Mạng xã hội","S"],["giúp","V"],["các doanh nghiệp nhỏ tiếp cận nhiều khách hàng hơn","O"]], model:["Social media helps small businesses reach more customers.","Social media enables small businesses to reach a wider audience."], up:"help → enable … to · more customers → a wider audience"}
];
window.ZH_SVO = [
  {c:[["Tôi","S"],["làm việc","V"],["ở công ty","N"],["mỗi ngày","T"]], tiles:["我","每天","在公司","工作"], ans:["我每天在公司工作","每天我在公司工作"], vi:"Thời gian và nơi chốn đứng TRƯỚC động từ: 我 + 每天 + 在公司 + 工作."},
  {c:[["Chúng tôi","S"],["họp","V"],["lúc 9 giờ sáng","T"]], tiles:["我们","早上九点","开会"], ans:["我们早上九点开会","早上九点我们开会"], vi:"Giờ giấc đứng trước động từ."},
  {c:[["Cô ấy","S"],["mua","V"],["hai ly trà","O"],["ở quán đó","N"],["hôm qua","T"]], tiles:["她","昨天","在那家店","买了","两杯茶"], ans:["她昨天在那家店买了两杯茶","昨天她在那家店买了两杯茶"], vi:"Thứ tự: chủ ngữ + thời gian + nơi chốn + động từ + tân ngữ."},
  {c:[["Anh ấy","S"],["học","V"],["tiếng Trung","O"],["ở nhà","N"],["buổi tối","T"]], tiles:["他","晚上","在家","学","中文"], ans:["他晚上在家学中文","晚上他在家学中文"], vi:"Tiếng Việt để thời gian, nơi chốn cuối câu; tiếng Trung đưa lên trước động từ."},
  {c:[["Khách","S"],["đợi","V"],["ở cửa","N"],["mười phút","T"]], tiles:["客人","在门口","等了","十分钟"], ans:["客人在门口等了十分钟"], vi:"Ngoại lệ: <b>khoảng thời gian kéo dài</b> (mười phút) đứng SAU động từ."},
  {c:[["Quán chúng tôi","S"],["mở cửa","V"],["từ 5 giờ chiều","T"]], tiles:["我们店","从下午五点","开门"], ans:["我们店从下午五点开门"], vi:"从 + thời điểm đứng trước động từ."}
];

window.EN_SPEAK = {
  p1:[
    {q:"Part 1 · Do you work or are you a student?", model:"I work. I'm the chief operating officer at a marketing agency, so I spend most of my day managing people and making sure projects run smoothly."},
    {q:"Part 1 · What do you like most about your job?", model:"What I like most is that every day is different. One day I'm solving problems on the floor, and the next I'm planning campaigns with clients."},
    {q:"Part 1 · Do you prefer coffee or tea?", model:"Definitely coffee. I usually have an iced milk coffee in the morning, which is very typical in Saigon, and it really wakes me up."},
    {q:"Part 1 · How often do you use social media?", model:"Every day, mainly for work. I check our clients' pages several times a day, but I try not to scroll through my personal feed too much."},
    {q:"Part 1 · What do you usually do at weekends?", model:"It depends. If work is quiet, I relax at home with my pets, but quite often I visit our venues to see how the weekend service is going."},
    {q:"Part 1 · Is it easy to learn a new language?", model:"Not really, especially for adults with busy schedules. However, I've found that studying a little every day makes a huge difference."},
    {q:"Part 1 · Do you like cooking?", model:"I enjoy it, although I rarely have time. When I do cook, I usually make simple Vietnamese dishes for my family."},
    {q:"Part 1 · Do you enjoy listening to music?", model:"Yes, a lot. I'm particularly fond of vinyl records, because the sound feels warmer and it reminds me of the past."}
  ],
  p2:[
    {q:"Part 2 · Describe a café or restaurant you enjoy visiting. You should say: where it is, what it looks like, what you usually order, and explain why you like it.", prep:60, model:"I'd like to talk about a small vinyl bar in District 3 that I visit quite often. It's on the second floor of an old building, and it's decorated with wooden shelves full of records and warm yellow lights. I usually order a classic cocktail, and sometimes a coffee if I'm working. What I love about it is the atmosphere. The music is played from real vinyl records, so it feels nostalgic and relaxing at the same time, and the staff always remember regular customers."},
    {q:"Part 2 · Describe a person who has influenced your career. You should say: who this person is, how you met them, what they taught you, and explain how they influenced you.", prep:60, model:"The person I'd like to describe is my first manager. I met her when I joined a small agency after graduating. She taught me how to plan my work carefully and, more importantly, how to give honest feedback without upsetting people. Her influence has been huge, because I still use her methods when I manage my own team today."},
    {q:"Part 2 · Describe a skill you would like to learn. You should say: what it is, why you want to learn it, how you would learn it, and explain how it would help you.", prep:60, model:"A skill I'd really like to learn is Chinese calligraphy. I've always admired the balance and beauty of Chinese characters, and since I've started learning Chinese, I want to write them properly. I'd probably take a weekend class and practise a little every evening. I think it would help me remember characters better, and it would also be a relaxing hobby after work."}
  ],
  p3:[
    {q:"Part 3 · Why do people enjoy eating out?", model:"I think there are two main reasons. First, eating out is convenient, especially for busy professionals who don't have time to cook. Second, it's a social activity; restaurants and cafés give people a comfortable place to meet friends or clients."},
    {q:"Part 3 · Should companies allow staff to work flexible hours?", model:"In many cases, yes. Flexible hours can improve motivation, because employees feel trusted. However, it depends on the industry; in hospitality, for example, staff need to be present at fixed times to serve customers."},
    {q:"Part 3 · How has technology changed the way people learn?", model:"Technology has made learning much more flexible. People can study on their phones whenever they have a few spare minutes, and apps can track progress automatically. The downside is that it's easier to get distracted."},
    {q:"Part 3 · What makes a good manager?", model:"In my opinion, a good manager needs to be a clear communicator and a good listener. They should set clear goals, but they also need to understand their team's problems and support them when things go wrong."}
  ]
};

window.EN_PHANXA = [
  {q:"She ___ here since 2020.", o:["has worked","works","worked"], a:0},
  {q:"I ___ the report yesterday.", o:["finished","have finished","finish"], a:0},
  {q:"They ___ for an hour when the manager arrived.", o:["had been waiting","have waited","waited"], a:0},
  {q:"The menu ___ every season.", o:["is changed","changes by","is change"], a:0},
  {q:"Sales ___ steadily since January.", o:["have been rising","rise","were rising"], a:0},
  {q:"By the time we opened, the chef ___ everything.", o:["had prepared","has prepared","prepares"], a:0},
  {q:"If it rains, we ___ the event indoors.", o:["will hold","would hold","hold will"], a:0},
  {q:"If I ___ more time, I would travel more.", o:["had","have","will have"], a:0},
  {q:"This café is ___ than that one.", o:["busier","more busy","busiest"], a:0},
  {q:"It is the ___ restaurant in the city.", o:["most expensive","more expensive","expensivest"], a:0},
  {q:"I ___ him for ten years.", o:["have known","have been knowing","know"], a:0},
  {q:"Coffee ___ in more than 50 countries.", o:["is grown","grows by","is growing by"], a:0},
  {q:"While I ___ dinner, the phone rang.", o:["was cooking","cooked","have cooked"], a:0},
  {q:"We ___ two new staff last week.", o:["hired","have hired","hire"], a:0},
  {q:"Have you ever ___ abroad?", o:["worked","work","working"], a:0},
  {q:"The new rules ___ next month.", o:["will be introduced","will introduce","introduced"], a:0},
  {q:"She is not ___ to lift that box.", o:["strong enough","enough strong","too strong"], a:0},
  {q:"The room was ___ small for 50 people.", o:["too","enough","so much"], a:0},
  {q:"I wish I ___ Chinese fluently.", o:["spoke","speak","will speak"], a:0},
  {q:"If she had left earlier, she ___ the train.", o:["would have caught","would catch","will catch"], a:0},
  {q:"He ___ in Hanoi before he moved to Saigon.", o:["had lived","has lived","lives"], a:0},
  {q:"The project ___ by the end of this week.", o:["will be finished","will finish by","is finishing by"], a:0},
  {q:"I used to ___ tea, but now I prefer coffee.", o:["drink","drinking","drank"], a:0},
  {q:"Prices are ___ high as they were last year.", o:["as","so","than"], a:0},
  {q:"She has been working ___ 8 o'clock.", o:["since","for","from"], a:0},
  {q:"We have lived here ___ five years.", o:["for","since","during"], a:0},
  {q:"The number of tourists ___ by 30% in 2019.", o:["rose","has risen","rises"], a:0},
  {q:"Not only ___ late, but he also forgot the documents.", o:["was he","he was","he"], a:0},
  {q:"The woman ___ owns this bar is my friend.", o:["who","which","whose"], a:0},
  {q:"This is the café ___ we first met.", o:["where","which","who"], a:0}
];

window.ZH_SENT = [
  {w:["我","每天","喝","一杯","咖啡"], vi:"Mỗi ngày tôi uống một ly cà phê."},
  {w:["这家","店","的","咖啡","很","好喝"], vi:"Cà phê của quán này rất ngon."},
  {w:["你","想","喝","什么"], vi:"Bạn muốn uống gì?"},
  {w:["我们","下午","三点","开会"], vi:"3 giờ chiều chúng ta họp."},
  {w:["请","给我","一份","菜单"], vi:"Cho tôi xin một thực đơn."},
  {w:["他","比","我","忙"], vi:"Anh ấy bận hơn tôi."},
  {w:["这个","多少","钱"], vi:"Cái này bao nhiêu tiền?"},
  {w:["我","在","越南","工作"], vi:"Tôi làm việc ở Việt Nam."},
  {w:["别","生","我","的","气"], vi:"Đừng giận tôi."},
  {w:["她","的","性格","很","开朗"], vi:"Tính cách cô ấy rất cởi mở."},
  {w:["我","想","认识","你"], vi:"Tôi muốn làm quen với bạn."},
  {w:["今天","客人","很","多"], vi:"Hôm nay khách rất đông."}
];

window.ZH_SANDHI = [
  {q:"你好 đọc thực tế là:", o:["ní hǎo","nǐ hǎo","nì hǎo","ní hào"], a:0, why:"Hai thanh 3 liền nhau: thanh đầu đọc thành thanh 2."},
  {q:"不是 đọc thực tế là:", o:["bú shì","bù shì","bǔ shì","bū shì"], a:0, why:"不 trước thanh 4 đọc thành thanh 2."},
  {q:"一个 đọc thực tế là:", o:["yí ge","yì ge","yī ge","yǐ ge"], a:0, why:"一 trước thanh 4 đọc thành thanh 2."},
  {q:"一天 đọc thực tế là:", o:["yì tiān","yí tiān","yī tiān","yǐ tiān"], a:0, why:"一 trước thanh 1, 2, 3 đọc thành thanh 4."},
  {q:"很好 đọc thực tế là:", o:["hén hǎo","hěn hǎo","hèn hǎo","hēn hǎo"], a:0, why:"Hai thanh 3 liền nhau."},
  {q:"不去 đọc thực tế là:", o:["bú qù","bù qù","bǔ qù","bū qù"], a:0, why:"去 là thanh 4 nên 不 đọc thanh 2."}
];

// Cấp độ cho phản xạ ngữ pháp và bổ sung câu cấp 1, cấp 5
[3,1,4,2,3,4,2,4,2,2,3,2,2,1,2,3,3,3,4,5,4,3,3,3,2,2,2,5,3,3].forEach((lv,i)=>{if(window.EN_PHANXA[i])window.EN_PHANXA[i].lv=lv;});
[
 [1,"He ___ coffee every morning.",["drinks","drink","drinking"]],
 [1,"They ___ at the café now.",["are","is","be"]],
 [1,"I ___ busy yesterday.",["was","am","were"]],
 [1,"We ___ to the market last Sunday.",["went","go","goes"]],
 [1,"She ___ a new phone.",["has","have","having"]],
 [1,"There ___ many people in the bar tonight.",["are","is","be"]],
 [5,"Hardly ___ the meeting started when the power went off.",["had","has","did"]],
 [5,"___ I known about the problem, I would have acted.",["Had","If","Have"]],
 [5,"It is essential that every employee ___ the training.",["complete","completes","completed"]],
 [5,"No sooner had we opened ___ it started to rain.",["than","when","then"]],
 [5,"Seldom ___ such a busy evening.",["have we seen","we have seen","we saw"]],
 [5,"The proposal, ___ was rejected, will be revised.",["which","that","what"]]
].forEach(([lv,q,o])=>window.EN_PHANXA.push({lv,q,o,a:0}));
window.EN_SPEAK.p1.forEach(x=>x.lv=2);window.EN_SPEAK.p2.forEach(x=>x.lv=3);window.EN_SPEAK.p3.forEach(x=>x.lv=4);
window.EN_SVO.forEach((x,i)=>x.lv=i<2?2:3);window.ZH_SVO.forEach(x=>x.lv=2);

// Kho từ và khung câu cho Viết theo khối
window.WRITE_HELP={
 "t1-intro":{bank:[["illustrates","minh họa"],["compares","so sánh"],["gives information about","cung cấp thông tin về"],["how many","bao nhiêu"],["the proportion of","tỷ lệ"],["over a period of","trong khoảng thời gian"],["between ... and ...","giữa ... và ..."]],frames:["The line graph illustrates how many ______ visited ______ between ___ and ___."]},
 "t1-over":{bank:[["Overall","nhìn chung"],["it is clear that","có thể thấy rõ"],["saw a rise","có sự tăng"],["followed by a sharp fall","sau đó giảm mạnh"],["the most","nhiều nhất"],["throughout the period","suốt giai đoạn"]],frames:["Overall, it is clear that all three countries saw ______ until 2015, followed by ______ in 2020.","______ attracted the most visitors throughout the period."]},
 "t1-body":{bank:[["received","đón"],["compared with","so với"],["while / whereas","trong khi"],["almost doubled","tăng gần gấp đôi"],["more than doubled","tăng hơn gấp đôi"],["dropped dramatically","giảm mạnh"],["reaching","đạt mức"],["just","chỉ"]],frames:["In 2010, Thailand received ___ million visitors, compared with ___ million for Japan.","Over the next five years, the figure for Thailand ______ to ___ million, while Japan's ______.","In 2020, however, numbers in all three countries ______."]},
 "t2-intro":{bank:[["is a widely debated issue","là vấn đề gây tranh luận"],["free of charge","miễn phí"],["While I accept that","dù tôi thừa nhận rằng"],["I largely agree that","tôi phần lớn đồng ý rằng"],["place a burden on","tạo gánh nặng cho"],["public budgets","ngân sách công"]],frames:["Whether ______ should be free for everyone is a widely debated issue.","While I accept that ______, I largely agree that ______ because ______."]},
 "t2-body":{bank:[["The main reason why","lý do chính là"],["gives ... the same opportunity","cho ... cơ hội như nhau"],["low income families","gia đình thu nhập thấp"],["For example","ví dụ"],["As a result","kết quả là"],["not only ... but also","không chỉ ... mà còn"],["make full use of","tận dụng tối đa"]],frames:["The main reason why ______ is that ______.","When ______, many of them ______.","For example, in ______, ______.","As a result, ______."]},
 "t2-concl":{bank:[["In conclusion","tóm lại"],["although","mặc dù"],["outweigh","lớn hơn, vượt trội"],["an equal chance","cơ hội ngang nhau"],["develop its potential","phát triển tiềm năng"]],frames:["In conclusion, although ______, I believe ______.","It ______ and helps ______."]}
};
