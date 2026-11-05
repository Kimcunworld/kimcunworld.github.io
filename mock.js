// Đề luyện rút gọn · chỉ dùng kiến thức đã học
window.MOCKS = [
{
  id:"ielts-1", lang:"en", title:"Đề IELTS rút gọn số 1", minutes:30, need:14,
  desc:"Nghe 6 câu · Đọc 6 câu · Viết 120 từ · Nói Part 1, 2, 3",
  steps:[
    {type:"drill", name:"Listening", intro:"Section 1: điền thông tin. Nghe tối đa 2 lần như bài thi thật được nghe 1 lần, nên cố gắng ngay từ lượt đầu.", head:{audio:[
      {who:"W", t:"Good morning, Riverside Events. How can I help you?"},
      {who:"M", t:"Hi, I'd like to book a room for a company dinner on the fourteenth of March."},
      {who:"W", t:"Certainly. How many guests are you expecting?"},
      {who:"M", t:"About forty five."},
      {who:"W", t:"Then our Garden Room would be ideal. It holds up to fifty people, and it costs nine hundred dollars for the evening."},
      {who:"W", t:"Could I take your surname, please?"},
      {who:"M", t:"Yes, it's Thornton. T, H, O, R, N, T, O, N."},
      {who:"W", t:"Thank you. And would you like vegetarian meals?"},
      {who:"M", t:"Yes, please, for about ten people."}
    ], max:2}, items:[
      {type:"type", q:"Date of dinner: ______ March", ans:["14","14th","fourteenth","the 14th","the fourteenth"], why:"on the fourteenth of March."},
      {type:"type", q:"Number of guests: about ______", ans:["45","forty five"], why:"About forty five."},
      {type:"type", q:"Room: the ______ Room", ans:["garden"], why:"our Garden Room."},
      {type:"type", q:"Price: $ ______", ans:["900","nine hundred"], why:"nine hundred dollars."},
      {type:"type", q:"Surname: ______", ans:["thornton"], why:"T, H, O, R, N, T, O, N."},
      {type:"type", q:"Vegetarian meals for: ______ people", ans:["10","ten","about 10","about ten"], why:"for about ten people."}
    ]},
    {type:"drill", name:"Reading", intro:"10 phút cho 1 đoạn và 6 câu hỏi.", head:{title:"Working from home: a lasting change?", minutes:10, passage:[
      "Since 2020, the number of people who work from home at least one day a week has been growing in most developed economies. For many employees, the main attraction is time: a worker who used to commute for an hour each way has gained around ten hours a week.",
      "Employers' opinions have been more divided. Several surveys have found that productivity has remained stable or even improved for tasks that require concentration. However, managers have reported that training new staff has become harder, because junior employees learn a great deal simply by watching experienced colleagues.",
      "City centres have also felt the effects. Office occupancy in some business districts has fallen significantly, and a number of cafés and restaurants that depended on lunchtime customers have closed. Some local governments have been converting empty offices into housing, although the process is expensive and slow."
    ]}, items:[
      {type:"mcq", q:"TRUE, FALSE or NOT GIVEN: Working from home has become less common since 2020.", o:["TRUE","FALSE","NOT GIVEN"], a:1, why:"Đoạn 1: has been growing."},
      {type:"type", q:"How many hours a week can a worker with a one hour commute each way gain? (NUMBER)", ans:["10","ten","around 10","around ten"], why:"has gained around ten hours a week."},
      {type:"mcq", q:"TRUE, FALSE or NOT GIVEN: Productivity has fallen for tasks that require concentration.", o:["TRUE","FALSE","NOT GIVEN"], a:1, why:"Đoạn 2: remained stable or even improved."},
      {type:"mcq", q:"Why has training new staff become harder?", o:["Junior staff cannot easily watch experienced colleagues","Managers have less time","Training courses are more expensive","Junior staff prefer working alone"], a:0, why:"junior employees learn a great deal simply by watching experienced colleagues."},
      {type:"mcq", q:"TRUE, FALSE or NOT GIVEN: All restaurants in business districts have closed.", o:["TRUE","FALSE","NOT GIVEN"], a:1, why:"Chỉ a number of cafés and restaurants, không phải tất cả."},
      {type:"type", q:"What have some local governments been converting empty offices into? (ONE WORD)", ans:["housing"], why:"converting empty offices into housing."}
    ]},
    {type:"write", name:"Writing", title:"Task 2 rút gọn: một đoạn thân bài", prompt:"<i>Some people believe that employees should be allowed to work from home whenever they want. To what extent do you agree or disagree?</i><br>Viết <b>một đoạn thân bài</b> khoảng 120 từ: câu chủ đề, giải thích, ví dụ, câu kết đoạn.", min:110,
      checklist:["Câu chủ đề nêu rõ quan điểm của đoạn","Có giải thích vì sao","Có ví dụ cụ thể","Dùng thì hoàn thành ít nhất 1 lần một cách tự nhiên","Có câu kết đoạn nối về đề bài"],
      model:"One major advantage of flexible remote work is that it allows employees to use their time more productively. Commuting in large cities often takes more than an hour a day, and this time can instead be spent on focused work or on rest. For example, many companies that have introduced flexible arrangements since 2020 have reported stable or even higher productivity, particularly for tasks that require deep concentration. In addition, staff who can organise their own schedules tend to feel more trusted, which has a positive effect on motivation. However, this freedom works best when clear goals and regular progress reviews are in place. Therefore, I believe employees should have this option, provided that their performance is measured by results."
    },
    {type:"speak", name:"Speaking", intro:"Part 1 trả lời 2 đến 3 câu. Part 2 có 1 phút chuẩn bị rồi nói tới 2 phút. Part 3 trả lời dài, có lý do và ví dụ.", items:[
      {q:"Part 1 · Do you prefer working at home or in an office?", model:"I'd say I prefer the office, mainly because my job involves managing people on the floor. That said, I've been doing more paperwork at home recently, and it helps me concentrate."},
      {q:"Part 1 · How has your daily routine changed recently?", model:"Quite a lot, actually. I've been getting up earlier so that I can study English before work, and I've started to plan my day the night before."},
      {q:"Part 2 · Describe a skill you have been learning recently. You should say: what it is, how you have been learning it, why you decided to learn it, and explain how you feel about your progress.", prep:60, model:"I'd like to talk about Chinese, which I've been learning for a few months now. I've been studying with a textbook and a small website I use every day, and I practise writing characters with a pen on my tablet. I decided to learn it because we have more and more partners from China, and I want to talk to them directly. Honestly, progress has been slow, but I've noticed that I can now introduce myself and follow simple conversations, so I feel quite motivated."},
      {q:"Part 3 · Why do you think adults often find it difficult to learn new skills?", model:"I think the main reason is time. Most adults have been working full time for years, so they rarely have long periods to practise. Another reason is fear of making mistakes; children don't mind looking silly, but adults often do. That's why short daily practice tends to work better for adults than occasional long sessions."}
    ]}
  ]
},
{
  id:"hsk-1", lang:"zh", title:"Đề HSK rút gọn số 1", minutes:15, need:14,
  desc:"Nghe · Đọc · Viết chữ · Nói 1 phút",
  steps:[
    {type:"drill", name:"Nghe", intro:"Mỗi câu nghe tối đa 2 lần.", items:[
      {type:"mcq", q:"Nghe và chọn nghĩa đúng", say:"我跟你开玩笑呢，别生气。", o:["Tôi đùa với bạn thôi, đừng giận","Tôi giận bạn rồi","Bạn đừng nói đùa nữa","Tôi muốn làm quen với bạn"], a:0, why:"开玩笑 nói đùa, 别生气 đừng giận."},
      {type:"mcq", q:"Nghe và chọn nghĩa đúng", say:"他的性格不太好。", o:["Tính cách anh ấy không tốt lắm","Anh ấy không thích nói đùa","Anh ấy chưa tự giới thiệu","Anh ấy rất cởi mở"], a:0, why:"性格 tính cách, 不太好 không tốt lắm."},
      {type:"mcq", q:"Nghe và chọn chữ đúng", say:"自我介绍", o:["<span class='zh'>自我介绍</span>","<span class='zh'>自己学习</span>","<span class='zh'>介绍朋友</span>","<span class='zh'>开玩笑</span>"], a:0, why:"zìwǒ jièshào."}
    ]},
    {type:"drill", name:"Đọc", intro:"Chọn từ đúng điền vào chỗ trống.", items:[
      {type:"mcq", q:"<span class='zh'>这个菜看起来很普通，味道___很好。</span>", o:["<span class='zh'>却</span>","<span class='zh'>别</span>","<span class='zh'>也是</span>","<span class='zh'>不</span>"], a:0, why:"Trái với mong đợi: 却."},
      {type:"mcq", q:"<span class='zh'>你___生我的气，我不是故意的。</span>", o:["<span class='zh'>别</span>","<span class='zh'>却</span>","<span class='zh'>很</span>","<span class='zh'>的</span>"], a:0, why:"别 + động từ: đừng."},
      {type:"mcq", q:"<span class='zh'>我们第一次见面，先做个___吧。</span>", o:["<span class='zh'>自我介绍</span>","<span class='zh'>性格</span>","<span class='zh'>玩笑</span>","<span class='zh'>生气</span>"], a:0, why:"做个自我介绍: tự giới thiệu."}
    ]},
    {type:"drill", name:"Viết", intro:"Viết chữ không có chữ mờ, và sắp xếp câu.", items:[
      {type:"hanzi", q:"Viết: <b>tính cách</b>", chars:"性格"},
      {type:"hanzi", q:"Viết: <b>cười</b>", chars:"笑"},
      {type:"order", q:"Sắp xếp thành câu", words:["他","还在","生","老板","的气"], ans:["他还在生老板的气"], zh:true, why:"生 + người + 的气."}
    ]},
    {type:"speak", name:"Nói", lang:"zh", intro:"Nói liền 1 phút, ghi âm và nghe lại.", items:[
      {q:"请你介绍一下你的性格。(Hãy giới thiệu tính cách của bạn)", prep:30, model:"我的性格比较开朗，喜欢交朋友，也爱开玩笑。工作的时候我很认真，可是下班以后我很轻松。"}
    ]}
  ]
}
];
