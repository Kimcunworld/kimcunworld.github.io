// Tiếng Trung · học lại từ HSK1 · mỗi ngày 3 chữ Hán
window.ZH_PLAN = [
  {day:1, book:"HSK1 · Tuần 1", title:"人 · 大 · 口", vi:"Pinyin và 4 thanh điệu"},
  {day:2, book:"HSK1 · Tuần 1", title:"你 · 我 · 好", vi:"Chào hỏi · biến điệu thanh 3"},
  {day:3, book:"HSK1 · Tuần 1", title:"是 · 不 · 他", vi:"Câu với 是 · biến điệu của 不"},
  {day:4, book:"HSK1 · Tuần 1", title:"中 · 国 · 文", vi:"Quốc tịch · âm zh, ch, sh"},
  {day:5, book:"HSK1 · Tuần 1", title:"叫 · 什 · 么", vi:"Hỏi tên · thanh nhẹ"},
  {day:6, book:"HSK1 · Tuần 1", title:"名 · 字 · 们", vi:"Tên gọi · số nhiều 们"},
  {day:7, book:"HSK1 · Tuần 1", title:"很 · 吗 · 也", vi:"Ôn tập tuần 1"},
  {day:8, book:"HSK1 · Tuần 2", title:"她 · 朋 · 友", vi:"Bạn bè"},
  {day:9, book:"HSK1 · Tuần 2", title:"一 · 二 · 三", vi:"Số đếm 1 đến 3"},
  {day:10, book:"HSK1 · Tuần 2", title:"四 · 五 · 六", vi:"Số đếm 4 đến 6"},
  {day:11, book:"HSK1 · Tuần 2", title:"七 · 八 · 九", vi:"Số đếm 7 đến 9 và 十"},
  {day:12, book:"HSK1 · Tuần 2", title:"几 · 岁 · 多", vi:"Hỏi tuổi"},
  {day:13, book:"HSK1 · Tuần 2", title:"家 · 有 · 没", vi:"Gia đình · có và không có"},
  {day:14, book:"HSK1 · Tuần 2", title:"Ôn tập", vi:"Ôn tập tuần 2"},
  {day:15, book:"HSK1 · Tuần 3", title:"爸 · 妈 · 哥", vi:"Thành viên gia đình"},
  {day:16, book:"HSK1 · Tuần 3", title:"女 · 儿 · 子", vi:"Con trai, con gái"},
  {day:17, book:"HSK1 · Tuần 3", title:"吃 · 喝 · 水", vi:"Ăn uống"},
  {day:18, book:"HSK1 · Tuần 3", title:"茶 · 米 · 饭", vi:"Gọi món"},
  {day:19, book:"HSK1 · Tuần 3", title:"想 · 要 · 买", vi:"Muốn và mua"},
  {day:20, book:"HSK1 · Tuần 3", title:"钱 · 块 · 个", vi:"Giá tiền và lượng từ"},
  {day:21, book:"HSK1 · Tuần 3", title:"Ôn tập", vi:"Ôn tập tuần 3"},
  {day:22, book:"HSK1 · Tuần 4", title:"去 · 来 · 在", vi:"Đi, đến, ở"},
  {day:23, book:"HSK1 · Tuần 4", title:"哪 · 这 · 那", vi:"Ở đâu, cái này, cái kia"},
  {day:24, book:"HSK1 · Tuần 4", title:"学 · 生 · 老", vi:"Học sinh"},
  {day:25, book:"HSK1 · Tuần 4", title:"师 · 工 · 作", vi:"Thầy cô, công việc"},
  {day:26, book:"HSK1 · Tuần 4", title:"今 · 天 · 年", vi:"Hôm nay, năm nay"},
  {day:27, book:"HSK1 · Tuần 4", title:"月 · 日 · 号", vi:"Ngày tháng"},
  {day:28, book:"HSK1 · Tuần 4", title:"上 · 下 · 午", vi:"Buổi sáng, buổi chiều"},
  {day:29, book:"HSK1 · Tuần 4", title:"点 · 分 · 现", vi:"Giờ giấc"},
  {day:30, book:"Kiểm tra", title:"HSK1", vi:"Kiểm tra lại toàn bộ HSK1 phần 1"}
];

const ZW=(id,h,py,pyn,vi,m,ex,exPy,exVi)=>({id,h,py,pyn,vi,ex,exPy,exVi,parts:[{c:h,m}]});
const zg=(t)=>`<span class='zh big'>${t}</span>`;
const zs=(t)=>`<span class='zh'>${t}</span>`;
const ZGAME=(pairs)=>({type:"game",name:"Trò chơi nhanh",intro:"Ghép chữ Hán với nghĩa nhanh nhất có thể.",pairs});
const HZ_STEP={type:"hanzi",name:"3 chữ hôm nay",intro:"Bấm từng chữ để xem thứ tự nét, đọc mẹo nhớ, nghe và đọc theo 3 lần."};
const traceStep=(list)=>({type:"drill",name:"Viết chữ Hán",intro:"Tô theo chữ mờ bằng bút hoặc ngón tay, đúng thứ tự nét. Hôm sau sẽ tự viết lại không có chữ mờ.",items:list.map(([c,vi,py])=>({type:"hanzi",q:`Viết chữ: <b>${vi}</b> (${py})`,chars:c}))});

window.ZH_LESSONS = [
{
  day:1, title:"人 · 大 · 口 · Pinyin và 4 thanh điệu", book:"HSK1 · Tuần 1",
  vocab:[
    ZW("ren","人","rén","ren2","người","Chữ tượng hình: một người đang đứng, hai chân dang ra. Nét phẩy bên trái, nét mác bên phải.","大人","dàrén","người lớn"),
    ZW("da","大","dà","da4","to, lớn","Người 人 dang rộng hai tay (nét ngang 一): ý là to lớn.","大口","dà kǒu","miếng to"),
    ZW("kou","口","kǒu","kou3","miệng","Chữ tượng hình: cái miệng đang mở, hình vuông. Viết 3 nét: sổ, ngang gập, ngang đáy.","人口","rénkǒu","dân số")
  ],
  steps:[
    {type:"explain",name:"Phát âm",title:"Pinyin và 4 thanh điệu",blocks:[
      {h:"1. Pinyin là gì?",p:["Pinyin là chữ Latin ghi cách đọc chữ Hán. Mỗi chữ Hán đọc thành <b>1 âm tiết</b>: phụ âm đầu + vần + thanh điệu.","Ví dụ: <span class='zh'>口</span> = k + ou + thanh 3 = <b>kǒu</b>.","Trong website, khi gõ pinyin KC dùng số thay dấu: kǒu gõ là <b>kou3</b>, rén gõ là <b>ren2</b>."]},
      {h:"2. Bốn thanh điệu",p:["Tiếng Trung có 4 thanh. Đổi thanh là đổi nghĩa, nên phải nghe kỹ từ đầu."]},
      {table:{head:["Thanh","Dấu","Cách đọc","Gần giống tiếng Việt"],rows:[["1","mā","Ngang và cao, giữ đều","Không dấu nhưng cao hơn"],["2","má","Đi lên từ giữa lên cao","Dấu sắc"],["3","mǎ","Xuống thấp rồi lên nhẹ","Dấu hỏi kéo dài"],["4","mà","Rơi mạnh từ cao xuống thấp","Dấu huyền nhưng dứt khoát"]]}},
      {ex:[{t:"妈",py:"mā",vi:"mẹ (thanh 1)"},{t:"麻",py:"má",vi:"tê (thanh 2)"},{t:"马",py:"mǎ",vi:"ngựa (thanh 3)"},{t:"骂",py:"mà",vi:"mắng (thanh 4)"}]},
      {tip:"<b>Mẹo luyện thanh:</b> vừa đọc vừa vẽ tay theo hướng dấu: thanh 1 vẽ ngang, thanh 2 vẽ lên, thanh 3 vẽ chữ V, thanh 4 vẽ xuống."}
    ]},
    {type:"drill",name:"Nghe thanh điệu",intro:"Nghe và chọn đúng thanh. Bấm nghe bao nhiêu lần cũng được.",items:[
      {type:"mcq",q:"Nghe và chọn pinyin đúng",say:"妈",o:["mā","má","mǎ","mà"],a:0,why:"妈 mā: thanh 1, ngang và cao."},
      {type:"mcq",q:"Nghe và chọn pinyin đúng",say:"马",o:["mǎ","mā","má","mà"],a:0,why:"马 mǎ: thanh 3, xuống rồi lên."},
      {type:"mcq",q:"Nghe và chọn pinyin đúng",say:"骂",o:["mà","mā","má","mǎ"],a:0,why:"骂 mà: thanh 4, rơi mạnh."},
      {type:"mcq",q:"Nghe và chọn pinyin đúng",say:"人",o:["rén","rěn","rèn","rēn"],a:0,why:"人 rén: thanh 2, đi lên."},
      {type:"mcq",q:"Nghe và chọn pinyin đúng",say:"大",o:["dà","dā","dá","dǎ"],a:0,why:"大 dà: thanh 4."},
      {type:"mcq",q:"Thanh 3 gần giống dấu nào của tiếng Việt?",o:["Dấu hỏi","Dấu sắc","Dấu huyền","Không dấu"],a:0,why:"Thanh 3 xuống thấp rồi lên, gần dấu hỏi."}
    ]},
    HZ_STEP,
    traceStep([["人","người","rén"],["大","to, lớn","dà"],["口","miệng","kǒu"]]),
    {type:"drill",name:"Pinyin và mặt chữ",intro:"Gõ pinyin kèm số thanh, ví dụ ren2.",items:[
      {type:"pinyin",q:`Viết pinyin của: ${zg("人")}`,ans:["ren2"],show:"rén"},
      {type:"pinyin",q:`Viết pinyin của: ${zg("口")}`,ans:["kou3"],show:"kǒu"},
      {type:"pinyin",q:`Viết pinyin của: ${zg("大人")}`,ans:["da4ren2"],show:"dàrén"},
      {type:"mcq",q:"Chữ nào nghĩa là “miệng”?",o:[zs("口"),zs("人"),zs("大"),zs("八")],a:0,why:"口 kǒu: miệng."},
      {type:"mcq",q:"Chữ nào nghĩa là “to, lớn”?",o:[zs("大"),zs("人"),zs("口"),zs("太")],a:0,why:"大 dà: to. Chữ 太 có thêm một chấm, là chữ khác."},
      {type:"mcq",q:`${zg("人口")} nghĩa là gì?`,o:["Dân số","Người lớn","Cái miệng","Cửa lớn"],a:0,why:"人口 rénkǒu: số miệng ăn, tức là dân số."}
    ]},
    {type:"drill",name:"Nghe",intro:"Nghe từ và chọn nghĩa đúng.",items:[
      {type:"mcq",q:"Nghe và chọn nghĩa đúng",say:"大人",o:["Người lớn","Dân số","Miệng to","Một người"],a:0,why:"大人 dàrén: người lớn."},
      {type:"mcq",q:"Nghe và chọn chữ đúng",say:"口",o:[zs("口"),zs("人"),zs("大"),zs("八")],a:0,why:"口 kǒu."},
      {type:"mcq",q:"Nghe và chọn nghĩa đúng",say:"人口",o:["Dân số","Người lớn","Miệng nhỏ","Cửa"],a:0,why:"人口 rénkǒu: dân số."}
    ]},
    {type:"speak",name:"Nói",lang:"zh",intro:"Nghe mẫu, đọc đuổi theo, rồi ghi âm và nghe lại.",items:[
      {q:"Đọc 4 thanh: mā má mǎ mà",model:"妈，麻，马，骂。"},
      {q:"Đọc 3 chữ và 2 từ hôm nay",model:"人，大，口。大人，人口。"}
    ]},
    {type:"callig",name:"Thư pháp",char:"人",py:"rén",vi:"người",note:"Chỉ có 2 nét: <b>phẩy</b> bên trái viết trước, <b>mác</b> bên phải viết sau. Nét mác bắt đầu từ khoảng 1/3 nét phẩy, kéo dài và hạ thấp hơn để chữ đứng vững. Viết 3 lượt, lượt sau chậm và đều hơn.",paper:"Cuối tuần: viết chữ 人 trên giấy ô mễ 10 lần, chụp ảnh để so tiến bộ."},
    ZGAME([["人","người"],["大","to, lớn"],["口","miệng"],["大人","người lớn"],["人口","dân số"]])
  ]
},
{
  day:2, title:"你 · 我 · 好 · Chào hỏi", book:"HSK1 · Tuần 1",
  vocab:[
    ZW("ni","你","nǐ","ni3","bạn","Bộ 亻 (người đứng) bên trái cộng 尔: người đang đứng trước mặt mình, tức là bạn.","你好！","Nǐ hǎo!","Xin chào!"),
    ZW("wo","我","wǒ","wo3","tôi","Bên trái là tay 手 biến thể, bên phải là cây giáo 戈: tay cầm giáo tự bảo vệ chính mình, tức là tôi.","我很好。","Wǒ hěn hǎo.","Tôi khỏe."),
    ZW("hao","好","hǎo","hao3","tốt, khỏe, được","Bộ 女 (phụ nữ) cộng 子 (con): mẹ bế con là điều tốt đẹp.","你好吗？","Nǐ hǎo ma?","Bạn khỏe không?")
  ],
  steps:[
    {type:"explain",name:"Mẫu câu",title:"Chào hỏi và biến điệu thanh 3",blocks:[
      {h:"1. Câu chào cơ bản",p:[`${zs("你好！")} Nǐ hǎo: Xin chào.`,`${zs("你好吗？")} Nǐ hǎo ma: Bạn khỏe không? (${zs("吗")} ma đặt cuối câu để hỏi có hay không)`,`${zs("我很好。")} Wǒ hěn hǎo: Tôi khỏe. (${zs("很")} hěn: rất, nhưng ở đây chỉ để câu tự nhiên)`]},
      {h:"2. Biến điệu: hai thanh 3 đứng cạnh nhau",p:["Khi hai chữ thanh 3 đi liền nhau, chữ đầu <b>đọc thành thanh 2</b>. Dấu viết vẫn giữ nguyên.",`${zs("你好")} viết nǐ hǎo nhưng đọc <b>ní hǎo</b>. ${zs("很好")} viết hěn hǎo nhưng đọc <b>hén hǎo</b>.`]},
      {ex:[{t:"你好！",py:"Nǐ hǎo!",vi:"Xin chào!"},{t:"你好吗？",py:"Nǐ hǎo ma?",vi:"Bạn khỏe không?"},{t:"我很好。",py:"Wǒ hěn hǎo.",vi:"Tôi khỏe."}]},
      {trap:[["我是好。","我很好。","Nói ai đó khỏe, đẹp, tốt không dùng 是; dùng 很 trước tính từ."]]}
    ]},
    HZ_STEP,
    traceStep([["你","bạn","nǐ"],["我","tôi","wǒ"],["好","tốt, khỏe","hǎo"]]),
    {type:"drill",name:"Pinyin và mặt chữ",intro:"Gõ pinyin kèm số thanh.",items:[
      {type:"pinyin",q:`Viết pinyin của: ${zg("你")}`,ans:["ni3"],show:"nǐ"},
      {type:"pinyin",q:`Viết pinyin của: ${zg("我")}`,ans:["wo3"],show:"wǒ"},
      {type:"mcq",q:`${zg("你好")} đọc thực tế là:`,o:["ní hǎo","nǐ hǎo","nì hào","nī hāo"],a:0,why:"Hai thanh 3 liền nhau: chữ đầu đọc thành thanh 2."},
      {type:"mcq",q:"Chữ nào nghĩa là “tôi”?",o:[zs("我"),zs("你"),zs("好"),zs("大")],a:0,why:"我 wǒ: tôi."},
      {type:"mcq",q:"Chữ 好 gồm những bộ nào?",o:["女 và 子","人 và 口","大 và 口","亻 và 尔"],a:0,why:"女 phụ nữ + 子 con."},
      {type:"order",q:"Sắp xếp: Tôi khỏe.",words:["我","很","好"],ans:["我很好"],zh:true,why:"我很好。"},
      {type:"order",q:"Sắp xếp: Bạn khỏe không?",words:["你","好","吗"],ans:["你好吗"],zh:true,why:"你好吗？"}
    ]},
    {type:"drill",name:"Nghe",intro:"Nghe đoạn hội thoại tối đa 3 lần.",head:{audio:[{who:"W",t:"你好！",py:"Nǐ hǎo!"},{who:"M",t:"你好！你好吗？",py:"Nǐ hǎo! Nǐ hǎo ma?"},{who:"W",t:"我很好。",py:"Wǒ hěn hǎo."}],max:3,lang:"zh"},items:[
      {type:"mcq",q:"Người đàn ông hỏi gì?",o:["Bạn khỏe không?","Bạn tên gì?","Bạn là ai?","Bạn đi đâu?"],a:0,why:"你好吗？"},
      {type:"mcq",q:"Người phụ nữ trả lời thế nào?",o:["Tôi khỏe","Tôi không khỏe","Tôi là người lớn","Xin chào"],a:0,why:"我很好。"}
    ]},
    {type:"speak",name:"Nói",lang:"zh",intro:"Đọc đuổi theo mẫu, nhớ biến điệu ní hǎo.",items:[
      {q:"Chào và hỏi thăm",model:"你好！你好吗？"},
      {q:"Trả lời",model:"我很好。"}
    ]},
    {type:"callig",name:"Thư pháp",char:"好",py:"hǎo",vi:"tốt",note:"Bộ 女 bên trái viết <b>hẹp và cao</b>, nét ngang cuối của 女 hất lên thành nét đề để nhường chỗ. Chữ 子 bên phải rộng hơn, nét sổ móc ở giữa thẳng đứng. Nguyên tắc: <b>trái hẹp, phải rộng</b>.",paper:"Cuối tuần: viết chữ 好 10 lần trên giấy ô mễ."},
    ZGAME([["你","bạn"],["我","tôi"],["好","tốt, khỏe"],["你好","xin chào"],["我很好","tôi khỏe"]])
  ]
},
{
  day:3, title:"是 · 不 · 他 · Câu với 是", book:"HSK1 · Tuần 1",
  vocab:[
    ZW("shi","是","shì","shi4","là","Phía trên là 日 (mặt trời), phía dưới là 正 biến thể (ngay thẳng): đứng dưới mặt trời rõ ràng ngay thẳng, nên là “đúng, là”.","我是大人。","Wǒ shì dàrén.","Tôi là người lớn."),
    ZW("bu","不","bù","bu4","không","Một nét ngang (bầu trời) và con chim bay lên mãi không tới: nghĩa là không.","我不好。","Wǒ bù hǎo.","Tôi không khỏe."),
    ZW("ta","他","tā","ta1","anh ấy","Bộ 亻 (người) cộng 也: một người khác, tức là anh ấy.","他不是大人。","Tā bú shì dàrén.","Anh ấy không phải người lớn.")
  ],
  steps:[
    {type:"explain",name:"Mẫu câu",title:"A 是 B · phủ định 不",blocks:[
      {h:"1. A 是 B: A là B",p:[`${zs("他是大人。")} Tā shì dàrén: Anh ấy là người lớn.`,`Phủ định thêm ${zs("不")} trước 是: ${zs("他不是大人。")}`]},
      {h:"2. Biến điệu của 不",p:["不 vốn là thanh 4 (bù). Khi đứng trước một chữ <b>thanh 4</b>, 不 đọc thành <b>thanh 2</b>.",`${zs("不是")} đọc <b>bú shì</b>. ${zs("不好")} vẫn đọc bù hǎo vì 好 là thanh 3.`]},
      {h:"3. Phủ định với tính từ",p:[`${zs("我不好。")} Tôi không khỏe. Trước tính từ dùng 不 trực tiếp, không cần 是.`]},
      {ex:[{t:"他是大人。",py:"Tā shì dàrén.",vi:"Anh ấy là người lớn."},{t:"我不是大人。",py:"Wǒ bú shì dàrén.",vi:"Tôi không phải người lớn."},{t:"你是不是大人？",py:"Nǐ shì bu shì dàrén?",vi:"Bạn có phải người lớn không?"}]},
      {trap:[["我是不大人。","我不是大人。","不 đứng trước 是."]]}
    ]},
    HZ_STEP,
    traceStep([["是","là","shì"],["不","không","bù"],["他","anh ấy","tā"]]),
    {type:"drill",name:"Pinyin và mặt chữ",items:[
      {type:"pinyin",q:`Viết pinyin của: ${zg("是")}`,ans:["shi4"],show:"shì"},
      {type:"pinyin",q:`Viết pinyin của: ${zg("他")}`,ans:["ta1"],show:"tā"},
      {type:"mcq",q:`${zg("不是")} đọc thực tế là:`,o:["bú shì","bù shì","bǔ shì","bū shì"],a:0,why:"不 trước thanh 4 đọc thành thanh 2."},
      {type:"mcq",q:`${zg("不好")} đọc thực tế là:`,o:["bù hǎo","bú hǎo","bǔ hǎo","bù hào"],a:0,why:"好 là thanh 3 nên 不 giữ thanh 4."},
      {type:"order",q:"Sắp xếp: Anh ấy là người lớn.",words:["他","是","大","人"],ans:["他是大人"],zh:true,why:"他是大人。"},
      {type:"order",q:"Sắp xếp: Tôi không phải người lớn.",words:["我","不","是","大人"],ans:["我不是大人"],zh:true,why:"不 đứng trước 是."},
      {type:"mcq",q:"Chữ nào nghĩa là “anh ấy”?",o:[zs("他"),zs("你"),zs("我"),zs("也")],a:0,why:"他 tā."}
    ]},
    {type:"drill",name:"Nghe",head:{audio:[{who:"M",t:"你是大人吗？",py:"Nǐ shì dàrén ma?"},{who:"W",t:"我是大人。他不是大人。",py:"Wǒ shì dàrén. Tā bú shì dàrén."}],max:3,lang:"zh"},items:[
      {type:"mcq",q:"Người phụ nữ là ai?",o:["Người lớn","Trẻ con","Không nói","Bạn của anh ấy"],a:0,why:"我是大人。"},
      {type:"mcq",q:"Còn anh ấy (他) thì sao?",o:["Không phải người lớn","Là người lớn","Không khỏe","Rất khỏe"],a:0,why:"他不是大人。"}
    ]},
    {type:"speak",name:"Nói",lang:"zh",intro:"Đọc đuổi theo, chú ý bú shì.",items:[
      {q:"Câu khẳng định và phủ định",model:"他是大人。我不是大人。"},
      {q:"Câu hỏi",model:"你是不是大人？"}
    ]},
    {type:"callig",name:"Thư pháp",char:"不",py:"bù",vi:"không",note:"Nét ngang đầu <b>dài</b> làm mái. Nét phẩy chéo xuống trái, nét sổ thẳng ở giữa, cuối cùng là nét chấm bên phải. Chữ cân đối quanh nét sổ giữa.",paper:"Cuối tuần: viết chữ 不 10 lần."},
    ZGAME([["是","là"],["不","không"],["他","anh ấy"],["不是","không phải"],["大人","người lớn"]])
  ]
},
{
  day:4, title:"中 · 国 · 文 · Quốc tịch", book:"HSK1 · Tuần 1",
  vocab:[
    ZW("zhong","中","zhōng","zhong1","giữa, Trung","Một ô vuông 口 có nét sổ xuyên thẳng qua chính giữa: ở giữa.","中文","Zhōngwén","tiếng Trung"),
    ZW("guo","国","guó","guo2","nước, quốc gia","Khung 囗 bao quanh là biên giới, bên trong là 玉 (ngọc): đất nước giữ gìn của quý.","中国人","Zhōngguó rén","người Trung Quốc"),
    ZW("wen","文","wén","wen2","văn, chữ viết","Hình người có hoa văn trên ngực: hoa văn, chữ viết.","我学中文。","Wǒ xué Zhōngwén.","Tôi học tiếng Trung.")
  ],
  steps:[
    {type:"explain",name:"Mẫu câu",title:"Quốc tịch · âm zh, ch, sh",blocks:[
      {h:"1. Tên nước + 人 = người nước đó",p:[`${zs("中国人")} người Trung Quốc. ${zs("越南人")} Yuènán rén: người Việt Nam.`,`${zs("我是越南人。")} Tôi là người Việt Nam.`]},
      {h:"2. Tên nước + 文 = tiếng nước đó (chữ viết)",p:[`${zs("中文")} tiếng Trung. ${zs("越南文")} tiếng Việt.`]},
      {h:"3. Âm uốn lưỡi zh, ch, sh",p:["<b>zh</b> như “tr” tiếng Việt, đầu lưỡi cong lên chạm vòm miệng: zhōng.","<b>ch</b> như zh nhưng bật hơi mạnh. <b>sh</b> như “s” cong lưỡi: shì."]},
      {ex:[{t:"我是越南人。",py:"Wǒ shì Yuènán rén.",vi:"Tôi là người Việt Nam."},{t:"他是中国人。",py:"Tā shì Zhōngguó rén.",vi:"Anh ấy là người Trung Quốc."},{t:"我学中文。",py:"Wǒ xué Zhōngwén.",vi:"Tôi học tiếng Trung."}]},
      {tip:"Trật tự từ giống tiếng Việt ở câu này, nhưng tính từ chỉ quốc tịch đứng <b>trước</b>: 中国人 là “Trung Quốc người”."}
    ]},
    HZ_STEP,
    traceStep([["中","giữa, Trung","zhōng"],["国","nước","guó"],["文","văn, chữ","wén"]]),
    {type:"drill",name:"Pinyin và mặt chữ",items:[
      {type:"pinyin",q:`Viết pinyin của: ${zg("中国")}`,ans:["zhong1guo2"],show:"Zhōngguó"},
      {type:"pinyin",q:`Viết pinyin của: ${zg("中文")}`,ans:["zhong1wen2"],show:"Zhōngwén"},
      {type:"mcq",q:`${zg("中文")} nghĩa là gì?`,o:["Tiếng Trung","Trung Quốc","Người Trung Quốc","Ở giữa"],a:0,why:"文 chữ viết, tiếng."},
      {type:"mcq",q:"“Người Việt Nam” viết là:",o:[zs("越南人"),zs("人越南"),zs("越南文"),zs("越南国")],a:0,why:"Tên nước + 人."},
      {type:"order",q:"Sắp xếp: Anh ấy là người Trung Quốc.",words:["他","是","中国","人"],ans:["他是中国人"],zh:true,why:"他是中国人。"},
      {type:"order",q:"Sắp xếp: Tôi không phải người Trung Quốc.",words:["我","不","是","中国人"],ans:["我不是中国人"],zh:true,why:"不 trước 是."}
    ]},
    {type:"drill",name:"Nghe",head:{audio:[{who:"M",t:"你是中国人吗？",py:"Nǐ shì Zhōngguó rén ma?"},{who:"W",t:"我不是中国人，我是越南人。",py:"Wǒ bú shì Zhōngguó rén, wǒ shì Yuènán rén."}],max:3,lang:"zh"},items:[
      {type:"mcq",q:"Người phụ nữ là người nước nào?",o:["Việt Nam","Trung Quốc","Không nói","Hàn Quốc"],a:0,why:"我是越南人。"},
      {type:"mcq",q:"Nghe và chọn chữ đúng",say:"中文",o:[zs("中文"),zs("中国"),zs("文人"),zs("大国")],a:0,why:"中文 Zhōngwén."}
    ]},
    {type:"speak",name:"Nói",lang:"zh",intro:"Đọc đuổi theo, chú ý cong lưỡi ở zh.",items:[
      {q:"Nói quốc tịch của KC",model:"我是越南人，我不是中国人。"},
      {q:"Nói KC đang học gì",model:"我学中文。"}
    ]},
    {type:"callig",name:"Thư pháp",char:"中",py:"zhōng",vi:"giữa",note:"Viết ô 口 trước, hơi <b>dẹt ngang</b>. Nét sổ cuối cùng xuyên thẳng qua chính giữa, <b>dài và thẳng</b> như cột trụ. Đây là chữ luyện nét sổ rất tốt.",paper:"Cuối tuần: viết chữ 中 10 lần."},
    ZGAME([["中","giữa"],["国","nước"],["文","chữ, văn"],["中国","Trung Quốc"],["中文","tiếng Trung"]])
  ]
},
{
  day:5, title:"叫 · 什 · 么 · Hỏi tên", book:"HSK1 · Tuần 1",
  vocab:[
    ZW("jiao","叫","jiào","jiao4","gọi, tên là","Bộ 口 (miệng) bên trái: dùng miệng để gọi.","我叫KC。","Wǒ jiào KC.","Tôi tên là KC."),
    ZW("shen","什","shén","shen2","(trong 什么) gì","Bộ 亻 cộng 十 (mười): mười người hỏi “cái gì thế?”.","什么？","Shénme?","Cái gì?"),
    ZW("me","么","me","me5","(trong 什么) trợ từ","Chữ nhỏ gọn chỉ 3 nét, gần như luôn đi sau 什.","你叫什么？","Nǐ jiào shénme?","Bạn tên là gì?")
  ],
  steps:[
    {type:"explain",name:"Mẫu câu",title:"Hỏi tên với 什么 · thanh nhẹ",blocks:[
      {h:"1. 叫 + tên",p:[`${zs("我叫KC。")} Wǒ jiào KC: Tôi tên là KC.`]},
      {h:"2. 什么: cái gì",p:["Câu hỏi tiếng Trung <b>không đảo trật tự</b>. Muốn hỏi chỗ nào thì đặt 什么 vào đúng chỗ đó.",`${zs("你叫什么？")} Bạn tên là gì? (giống hệt trật tự tiếng Việt)`]},
      {h:"3. Thanh nhẹ",p:["Một số chữ đọc <b>nhẹ và ngắn</b>, không có dấu thanh: 么 trong shénme. Khi gõ pinyin, thanh nhẹ ghi số <b>5</b>: me5."]},
      {ex:[{t:"你叫什么？",py:"Nǐ jiào shénme?",vi:"Bạn tên là gì?"},{t:"我叫KC。",py:"Wǒ jiào KC.",vi:"Tôi tên là KC."},{t:"他叫什么？",py:"Tā jiào shénme?",vi:"Anh ấy tên là gì?"}]},
      {trap:[["什么你叫？","你叫什么？","Không đưa 什么 lên đầu câu như tiếng Anh."]]}
    ]},
    HZ_STEP,
    traceStep([["叫","gọi, tên là","jiào"],["什","gì","shén"],["么","trợ từ","me"]]),
    {type:"drill",name:"Pinyin và mặt chữ",items:[
      {type:"pinyin",q:`Viết pinyin của: ${zg("叫")}`,ans:["jiao4"],show:"jiào"},
      {type:"pinyin",q:`Viết pinyin của: ${zg("什么")} (thanh nhẹ ghi số 5)`,ans:["shen2me5","shen2me"],show:"shénme"},
      {type:"mcq",q:"Câu nào đúng?",o:[zs("你叫什么？"),zs("什么你叫？"),zs("叫你什么？"),zs("你什么叫？")],a:0,why:"Trật tự giữ nguyên như câu trả lời."},
      {type:"order",q:"Sắp xếp: Anh ấy tên là gì?",words:["他","叫","什么"],ans:["他叫什么"],zh:true,why:"他叫什么？"},
      {type:"order",q:"Sắp xếp: Tôi tên là KC, tôi là người Việt Nam.",words:["我","叫","KC","我","是","越南人"],ans:["我叫KC我是越南人"],zh:true,why:"我叫KC，我是越南人。"},
      {type:"mcq",q:"Chữ 叫 có bộ gì bên trái?",o:["口 miệng","人 người","女 phụ nữ","日 mặt trời"],a:0,why:"Dùng miệng để gọi."}
    ]},
    {type:"drill",name:"Nghe",head:{audio:[{who:"M",t:"你好！你叫什么？",py:"Nǐ hǎo! Nǐ jiào shénme?"},{who:"W",t:"我叫小美。你呢？",py:"Wǒ jiào Xiǎoměi. Nǐ ne?"},{who:"M",t:"我叫大文。",py:"Wǒ jiào Dàwén."}],max:3,lang:"zh"},items:[
      {type:"mcq",q:"Người phụ nữ tên là gì?",o:["小美 Xiǎoměi","大文 Dàwén","KC","不知道"],a:0,why:"我叫小美。"},
      {type:"mcq",q:"“你呢？” trong bài có nghĩa là:",o:["Còn bạn thì sao?","Bạn khỏe không?","Bạn là ai?","Tạm biệt"],a:0,why:"呢 ne cuối câu: còn … thì sao."}
    ]},
    {type:"speak",name:"Nói",lang:"zh",intro:"Đọc đuổi theo rồi tự giới thiệu tên.",items:[
      {q:"Hỏi tên",model:"你好！你叫什么？"},
      {q:"Trả lời tên và quốc tịch",model:"我叫KC，我是越南人。"}
    ]},
    {type:"callig",name:"Thư pháp",char:"叫",py:"jiào",vi:"gọi",note:"Bộ 口 bên trái <b>nhỏ và đặt hơi cao</b>. Phần bên phải có nét sổ dài nhất, kéo xuống thấp hơn bộ 口. Nguyên tắc: <b>trái nhỏ cao, phải dài</b>.",paper:"Cuối tuần: viết chữ 叫 10 lần."},
    ZGAME([["叫","gọi, tên là"],["什么","cái gì"],["你叫什么","bạn tên gì"],["我叫","tôi tên là"],["中文","tiếng Trung"]])
  ]
},
{
  day:6, title:"名 · 字 · 们 · Tên gọi và số nhiều", book:"HSK1 · Tuần 1",
  vocab:[
    ZW("ming","名","míng","ming2","tên","Phía trên là 夕 (buổi tối), phía dưới là 口 (miệng): tối trời không thấy mặt, phải gọi tên.","名字","míngzi","tên"),
    ZW("zi","字","zì","zi4","chữ","Mái nhà 宀 phía trên, 子 (con) bên dưới: đứa trẻ học chữ dưới mái nhà.","中文字","Zhōngwén zì","chữ tiếng Trung"),
    ZW("men","们","men","men5","(số nhiều)","Bộ 亻 (người) cộng 门 (cửa): cả nhà người sau một cánh cửa, chỉ số nhiều.","我们","wǒmen","chúng tôi")
  ],
  steps:[
    {type:"explain",name:"Mẫu câu",title:"名字 · đại từ số nhiều 们",blocks:[
      {h:"1. 你叫什么名字？",p:[`Cách hỏi tên lịch sự hơn: ${zs("你叫什么名字？")} Nǐ jiào shénme míngzi.`,`${zs("名字")} míngzi: chữ 字 đọc thanh nhẹ.`]},
      {h:"2. Thêm 们 để thành số nhiều",p:[`${zs("我们")} chúng tôi · ${zs("你们")} các bạn · ${zs("他们")} họ.`,"们 luôn đọc thanh nhẹ: men."]},
      {table:{head:["Số ít","Số nhiều"],rows:[["我 tôi","我们 chúng tôi"],["你 bạn","你们 các bạn"],["他 anh ấy","他们 họ"]]}},
      {ex:[{t:"你叫什么名字？",py:"Nǐ jiào shénme míngzi?",vi:"Bạn tên là gì?"},{t:"我们是越南人。",py:"Wǒmen shì Yuènán rén.",vi:"Chúng tôi là người Việt Nam."},{t:"你们好！",py:"Nǐmen hǎo!",vi:"Chào các bạn!"}]}
    ]},
    HZ_STEP,
    traceStep([["名","tên","míng"],["字","chữ","zì"],["们","số nhiều","men"]]),
    {type:"drill",name:"Pinyin và mặt chữ",items:[
      {type:"pinyin",q:`Viết pinyin của: ${zg("名字")}`,ans:["ming2zi5","ming2zi"],show:"míngzi"},
      {type:"pinyin",q:`Viết pinyin của: ${zg("我们")}`,ans:["wo3men5","wo3men"],show:"wǒmen"},
      {type:"mcq",q:`${zg("他们")} nghĩa là:`,o:["Họ","Chúng tôi","Các bạn","Anh ấy"],a:0,why:"他 + 们."},
      {type:"mcq",q:"Chào cả nhóm thì nói:",o:[zs("你们好！"),zs("我们好！"),zs("你好们！"),zs("他好！")],a:0,why:"你们好！"},
      {type:"order",q:"Sắp xếp: Bạn tên là gì?",words:["你","叫","什么","名字"],ans:["你叫什么名字"],zh:true,why:"你叫什么名字？"},
      {type:"order",q:"Sắp xếp: Họ không phải người Trung Quốc.",words:["他们","不","是","中国人"],ans:["他们不是中国人"],zh:true,why:"他们不是中国人。"}
    ]},
    {type:"drill",name:"Nghe",head:{audio:[{who:"W",t:"你们好！我叫小美。你叫什么名字？",py:"Nǐmen hǎo! Wǒ jiào Xiǎoměi. Nǐ jiào shénme míngzi?"},{who:"M",t:"我叫大文。我们是中国人。",py:"Wǒ jiào Dàwén. Wǒmen shì Zhōngguó rén."}],max:3,lang:"zh"},items:[
      {type:"mcq",q:"Cô gái chào ai?",o:["Cả nhóm (các bạn)","Một người","Thầy giáo","Mẹ"],a:0,why:"你们好！"},
      {type:"mcq",q:"Nhóm của 大文 là người nước nào?",o:["Trung Quốc","Việt Nam","Không nói","Nhật Bản"],a:0,why:"我们是中国人。"}
    ]},
    {type:"speak",name:"Nói",lang:"zh",intro:"Đọc đuổi theo rồi ghi âm đoạn tự giới thiệu ngắn.",items:[
      {q:"Hỏi tên lịch sự",model:"你好！你叫什么名字？"},
      {q:"Tự giới thiệu",model:"你们好！我叫KC。我是越南人。"}
    ]},
    {type:"callig",name:"Thư pháp",char:"字",py:"zì",vi:"chữ",note:"Mái 宀 phía trên <b>rộng</b> như mái nhà che kín. Chữ 子 bên dưới thu gọn, nét sổ móc nằm đúng trục giữa. Nguyên tắc: <b>trên rộng che, dưới gọn</b>.",paper:"Cuối tuần: viết chữ 字 10 lần."},
    ZGAME([["名字","tên"],["字","chữ"],["我们","chúng tôi"],["你们","các bạn"],["他们","họ"]])
  ]
},
{
  day:7, title:"很 · 吗 · 也 · Ôn tập tuần 1", book:"HSK1 · Tuần 1",
  vocab:[
    ZW("hen","很","hěn","hen3","rất","Bộ 彳 (bước chân) bên trái: bước đi rất xa.","我很好。","Wǒ hěn hǎo.","Tôi rất khỏe."),
    ZW("ma","吗","ma","ma5","(trợ từ hỏi)","Bộ 口 (miệng) cộng 马 (ngựa, đọc ma): tiếng hỏi phát ra từ miệng.","你是中国人吗？","Nǐ shì Zhōngguó rén ma?","Bạn là người Trung Quốc à?"),
    ZW("ye","也","yě","ye3","cũng","Chữ rất hay gặp, 3 nét. Đã thấy trong chữ 他.","我也是越南人。","Wǒ yě shì Yuènán rén.","Tôi cũng là người Việt Nam.")
  ],
  steps:[
    {type:"explain",name:"Mẫu câu",title:"吗 · 也 và ôn tập tuần 1",blocks:[
      {h:"1. Câu hỏi có hay không với 吗",p:[`Thêm ${zs("吗")} vào cuối câu kể là thành câu hỏi: ${zs("他是中国人。")} thành ${zs("他是中国人吗？")}`]},
      {h:"2. 也: cũng",p:[`${zs("也")} đứng <b>sau chủ ngữ, trước động từ hoặc tính từ</b>: ${zs("我也是越南人。")} ${zs("我也很好。")}`]},
      {ex:[{t:"你好吗？我很好，你呢？",py:"Nǐ hǎo ma? Wǒ hěn hǎo, nǐ ne?",vi:"Bạn khỏe không? Tôi khỏe, còn bạn?"},{t:"我也很好。",py:"Wǒ yě hěn hǎo.",vi:"Tôi cũng khỏe."},{t:"他也是越南人吗？",py:"Tā yě shì Yuènán rén ma?",vi:"Anh ấy cũng là người Việt Nam à?"}]},
      {trap:[["也我是越南人。","我也是越南人。","也 đứng sau chủ ngữ."],["你是中国人吗不是？","你是不是中国人？","Đã dùng 是不是 thì không thêm 吗."]]}
    ]},
    HZ_STEP,
    traceStep([["很","rất","hěn"],["吗","trợ từ hỏi","ma"],["也","cũng","yě"]]),
    {type:"drill",name:"Ôn tập tuần 1",intro:"Ôn lại 21 chữ đã học trong tuần.",items:[
      {type:"hanzi",q:"Viết chữ: <b>người</b> (rén)",chars:"人",outline:false},
      {type:"hanzi",q:"Viết chữ: <b>tốt, khỏe</b> (hǎo)",chars:"好",outline:false},
      {type:"hanzi",q:"Viết chữ: <b>giữa, Trung</b> (zhōng)",chars:"中",outline:false},
      {type:"pinyin",q:`Viết pinyin của: ${zg("你好")}`,ans:["ni3hao3"],show:"nǐ hǎo"},
      {type:"pinyin",q:`Viết pinyin của: ${zg("中国")}`,ans:["zhong1guo2"],show:"Zhōngguó"},
      {type:"mcq",q:`${zg("名字")} nghĩa là:`,o:["Tên","Chữ","Dân số","Tiếng Trung"],a:0,why:"名字 míngzi."},
      {type:"mcq",q:`${zg("不是")} đọc là:`,o:["bú shì","bù shì","bǔ shì","bū shì"],a:0,why:"不 trước thanh 4 đọc thanh 2."},
      {type:"order",q:"Sắp xếp: Tôi cũng là người Việt Nam.",words:["我","也","是","越南人"],ans:["我也是越南人"],zh:true,why:"也 sau chủ ngữ."},
      {type:"order",q:"Sắp xếp: Anh ấy là người Trung Quốc à?",words:["他","是","中国人","吗"],ans:["他是中国人吗"],zh:true,why:"吗 cuối câu."},
      {type:"order",q:"Sắp xếp: Chúng tôi rất khỏe.",words:["我们","很","好"],ans:["我们很好"],zh:true,why:"我们很好。"}
    ]},
    {type:"drill",name:"Nghe",head:{audio:[{who:"W",t:"你好！我叫小美，我是中国人。你叫什么名字？",py:"Nǐ hǎo! Wǒ jiào Xiǎoměi, wǒ shì Zhōngguó rén. Nǐ jiào shénme míngzi?"},{who:"M",t:"我叫KC。我是越南人。",py:"Wǒ jiào KC. Wǒ shì Yuènán rén."},{who:"W",t:"他也是越南人吗？",py:"Tā yě shì Yuènán rén ma?"},{who:"M",t:"他不是越南人，他也是中国人。",py:"Tā bú shì Yuènán rén, tā yě shì Zhōngguó rén."}],max:3,lang:"zh"},items:[
      {type:"mcq",q:"小美 là người nước nào?",o:["Trung Quốc","Việt Nam","Không nói","Anh"],a:0,why:"我是中国人。"},
      {type:"mcq",q:"Người thứ ba (他) là người nước nào?",o:["Trung Quốc","Việt Nam","Không nói","Mỹ"],a:0,why:"他也是中国人。"},
      {type:"mcq",q:"Nghe và chọn nghĩa đúng",say:"我也很好。",o:["Tôi cũng khỏe","Tôi rất khỏe","Bạn khỏe không","Tôi không khỏe"],a:0,why:"也 cũng, 很好 khỏe."}
    ]},
    {type:"speak",name:"Nói",lang:"zh",intro:"Tự giới thiệu 3 câu bằng tất cả những gì đã học trong tuần.",items:[
      {q:"Hỏi thăm và trả lời",model:"你好吗？我很好，你呢？我也很好。"},
      {q:"Tự giới thiệu đầy đủ",model:"你们好！我叫KC，我是越南人，我学中文。"}
    ]},
    {type:"callig",name:"Thư pháp",char:"大",py:"dà",vi:"to, lớn",note:"Ôn lại nét phẩy và mác của chữ 人, thêm nét ngang ở trên. Nét ngang <b>dài vừa phải</b>, phẩy và mác <b>mở rộng</b> như người dang chân vững chãi.",paper:"Cuối tuần: viết lại 人, 大, 中, 好 mỗi chữ 5 lần, so với ảnh tuần trước."},
    ZGAME([["很","rất"],["吗","(câu hỏi)"],["也","cũng"],["中国人","người Trung Quốc"],["名字","tên"],["你好","xin chào"]])
  ]
}
];
