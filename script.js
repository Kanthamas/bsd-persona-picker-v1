"use strict";
const D = {
  body: ["Body", "ร่างกาย"],
  learning: ["Learning & Career", "การเรียนรู้และอาชีพ"],
  money: ["Money", "เงิน"],
  mind: ["Mind", "จิตใจ"],
  growth: ["Growth", "การเติบโต"],
  friends: ["Friends", "เพื่อน"],
  home: ["Home", "บ้าน"],
  giving: ["Giving", "การให้"],
  purpose: ["Purpose", "เป้าหมายชีวิต"],
};
const P = [
  {
    id: "pun",
    n: ["Pun", "ปัน"],
    a: 14,
    g: ["M.2", "ม.2"],
    d: ["body"],
    c: [
      ["Cheerful", "Competitive", "Impulsive"],
      ["ร่าเริง", "ชอบแข่งขัน", "ใจร้อน"],
    ],
    w: [
      "Pun is 14 and in M.2. He is the striker of his school team. He uses his phone a lot after dinner and in bed.",
      "ปันอายุ 14 ปี เรียนอยู่ ม.2 เป็นกองหน้าของทีมฟุตบอลโรงเรียน ใช้โทรศัพท์เยอะหลังมื้อเย็นและตอนอยู่บนเตียง",
    ],
    h: [
      "Most nights he plans to sleep at 10 but looks up and it is midnight. In the morning he yawns through first period, and a teacher has already pointed it out twice this month. At practice he feels slow and gets frustrated, but he thinks it is just bad luck.",
      "เกือบทุกคืนเขาตั้งใจจะนอนสี่ทุ่ม แต่เงยหน้าอีกทีก็เที่ยงคืนแล้ว ตอนเช้าหาวตลอดคาบแรก เดือนนี้ครูทักไปแล้วสองครั้ง ตอนซ้อมฟุตบอลรู้สึกช้าและหงุดหงิด แต่เขาคิดว่าเป็นแค่ดวงไม่ดี",
    ],
    e: [
      "He needs to see where his evening time really goes, and to end the night with enough energy for school and football, without feeling that someone is controlling him.",
      "เขาต้องการเห็นว่าเวลาช่วงเย็นหายไปไหนจริง ๆ และจบวันด้วยพลังงานที่พอสำหรับโรงเรียนและฟุตบอล โดยไม่รู้สึกว่ามีใครมาควบคุม",
    ],
    q: [
      "I only watched for a little while. Why is it already midnight?",
      "ผมดูแป๊บเดียวเอง ทำไมเที่ยงคืนแล้ว",
    ],
    s: [
      "He is disciplined at football, and once he sees a goal he works hard for it.",
      "มีวินัยในเรื่องฟุตบอล และเมื่อเห็นเป้าหมายก็ตั้งใจทำจริง",
    ],
  },
  {
    id: "ink",
    n: ["Ink", "อิ๊งค์"],
    a: 15,
    g: ["M.3", "ม.3"],
    d: ["learning"],
    c: [
      ["Curious", "Thoughtful", "Perfectionist"],
      ["ช่างสงสัย", "รอบคอบ", "เนี้ยบกับงานวาด"],
    ],
    w: [
      "Ink is 15 and in M.3. She must submit her track choice for M.4 in three weeks. She is good at both science and art.",
      "อิ๊งค์อายุ 15 ปี เรียนอยู่ ม.3 ต้องส่งแบบเลือกสายการเรียน ม.4 ในอีกสามสัปดาห์ เธอเรียนได้ดีทั้งวิทยาศาสตร์และงานศิลปะ",
    ],
    h: [
      "She can name only five jobs: doctor, engineer, teacher, nurse, accountant, because those are the ones she hears at home. She argues with herself every night and is afraid of disappointing her parents. She does not know how to compare a path she has never seen with one everyone approves of.",
      "เธอนึกอาชีพได้แค่ห้าอย่าง คือ หมอ วิศวกร ครู พยาบาล และนักบัญชี เพราะเป็นอาชีพที่ได้ยินที่บ้าน ทุกคืนเธอเถียงกับตัวเองในใจและกลัวทำให้พ่อแม่ผิดหวัง เธอไม่รู้จะเปรียบเทียบทางที่ไม่เคยเห็น กับทางที่ทุกคนเห็นด้วยได้อย่างไร",
    ],
    e: [
      "She needs to see what real people in different paths do in an ordinary day and where those paths can lead, so she can talk with her parents using real examples instead of a feeling.",
      "เธอต้องการเห็นว่าคนจริง ๆ ในแต่ละเส้นทางทำอะไรในหนึ่งวันธรรมดา และแต่ละทางไปต่อได้ที่ไหน เพื่อคุยกับพ่อแม่ด้วยตัวอย่างจริง ไม่ใช่แค่ความรู้สึก",
    ],
    q: [
      "I don’t know what I want. I just know I don’t know enough jobs.",
      "หนูไม่รู้ว่าอยากเป็นอะไร รู้แค่ว่ารู้จักอาชีพน้อยไป",
    ],
    s: [
      "She is curious and she finishes her creative projects.",
      "ช่างสงสัย และทำงานสร้างสรรค์จนเสร็จได้",
    ],
  },
  {
    id: "tae",
    n: ["Tae", "เต้"],
    a: 16,
    g: ["M.4", "ม.4"],
    d: ["money"],
    c: [
      ["Generous", "Sociable", "Proud"],
      ["ใจกว้าง", "เข้ากับคนง่าย", "มีศักดิ์ศรี"],
    ],
    w: [
      "Tae is 16 and in M.4. He has a daily allowance and a clear wish: a gaming headset. He is popular and likes being the one who says “I’ll get it.”",
      "เต้อายุ 16 ปี เรียนอยู่ ม.4 ได้ค่าขนมรายวัน และมีความฝันชัดเจนคืออยากได้หูฟังเกมมิ่ง เขาเป็นที่รักของเพื่อนและชอบเป็นคนที่พูดว่า “เดี๋ยวเลี้ยงเอง”",
    ],
    h: [
      "The allowance is gone by Wednesday. Each drink, snack, and game top-up feels too small to count, but together they are the whole week. He borrows from friends, feels uneasy about it, and the headset goal keeps slipping further away.",
      "ค่าขนมหมดตั้งแต่วันพุธ น้ำหนึ่งแก้ว ขนมหนึ่งห่อ และเงินเติมเกมแต่ละครั้งดูเล็กเกินกว่าจะนับ แต่รวมกันคือทั้งสัปดาห์ เขายืมเพื่อนและรู้สึกไม่สบายใจ ส่วนเป้าหมายหูฟังก็ยิ่งไกลออกไป",
    ],
    e: [
      "He needs to know what is left and how much is going toward the headset, so he can still say yes to his friends without running dry before Friday.",
      "เขาต้องการรู้ว่าเหลือเงินเท่าไร และมีเท่าไรที่กำลังไปสู่หูฟัง เพื่อจะยังตอบตกลงกับเพื่อนได้ โดยไม่หมดตัวก่อนวันศุกร์",
    ],
    q: [
      "It was only 20 baht. How is everything gone?",
      "แค่ 20 บาทเอง ทำไมเงินหมดแล้ว",
    ],
    s: [
      "He has a clear goal, and he is generous with people he cares about.",
      "มีเป้าหมายชัดเจน และใจกว้างกับคนที่เขาแคร์",
    ],
  },
  {
    id: "fon",
    n: ["Fon", "ฝน"],
    a: 16,
    g: ["M.4", "ม.4"],
    d: ["mind"],
    c: [
      ["Responsible", "Caring", "Hard on herself"],
      ["รับผิดชอบ", "ใส่ใจคนอื่น", "เข้มงวดกับตัวเอง"],
    ],
    w: [
      "Fon is 16 and in M.4. Midterms start next week. She studies hard and knows the material well.",
      "ฝนอายุ 16 ปี เรียนอยู่ ม.4 สอบกลางภาคเริ่มสัปดาห์หน้า เธอตั้งใจอ่านหนังสือและเข้าใจเนื้อหาดี",
    ],
    h: [
      "The night before an exam her thoughts race: “What if I forget everything?” She re-reads the same notes again and again and cannot settle. When friends ask, she says she is fine because she does not want to worry anyone.",
      "คืนก่อนสอบความคิดวิ่งไม่หยุด “ถ้าลืมทุกอย่างจะทำอย่างไร” เธออ่านสรุปหน้าเดิมซ้ำแล้วซ้ำอีกและไม่นิ่งสักที เวลาเพื่อนถาม เธอบอกว่าไม่เป็นไร เพราะไม่อยากให้ใครกังวล",
    ],
    e: [
      "She needs a few quick ways to feel steady before and during a test, and to know when and how to talk to someone she trusts.",
      "เธอต้องการวิธีสั้น ๆ ไม่กี่อย่างที่ช่วยให้ใจนิ่งขึ้นก่อนและระหว่างสอบ และรู้ว่าเมื่อไรและจะคุยกับคนที่ไว้ใจอย่างไร",
    ],
    q: [
      "I know the material. My head just won’t be quiet.",
      "หนูรู้เนื้อหานะ แต่หัวมันไม่ยอมเงียบ",
    ],
    s: [
      "She is honest with her best friend, and she is willing to try new ways of calming down.",
      "ซื่อสัตย์กับเพื่อนสนิท และเปิดใจลองวิธีใหม่ ๆ ในการทำให้ใจสงบ",
    ],
  },
  {
    id: "boat",
    n: ["Boat", "โบ๊ท"],
    a: 17,
    g: ["M.5", "ม.5"],
    d: ["growth"],
    c: [
      ["Imaginative", "Enthusiastic", "Easily bored"],
      ["จินตนาการดี", "ตอนเริ่มมีไฟ", "เบื่อง่าย"],
    ],
    w: [
      "Boat is 17 and in M.5. He loves games and wants to make one. He is better at starting than finishing.",
      "โบ๊ทอายุ 17 ปี เรียนอยู่ ม.5 ชอบเกมและอยากทำเกมของตัวเอง เขาเก่งในการเริ่มมากกว่าการทำให้เสร็จ",
    ],
    h: [
      "He starts every project excited. Then he hits a bug or a boring part, and a brand-new idea looks more fun, so he moves on. Six half-made projects have made him feel like “a person who never finishes.”",
      "เขาเริ่มทุกโปรเจกต์ด้วยความตื่นเต้น พอเจอบั๊กหรือช่วงน่าเบื่อ ไอเดียใหม่ก็ดูสนุกกว่า เขาเลยย้ายไปทำอันใหม่ งานค้างหกชิ้นทำให้เขารู้สึกว่าตัวเองเป็น “คนที่ทำอะไรไม่เสร็จ”",
    ],
    e: [
      "He needs to finish one small thing and show it to real people, and to know clearly what “done” means for it.",
      "เขาต้องการทำของชิ้นเล็ก ๆ ให้เสร็จหนึ่งชิ้นและเอาไปให้คนจริง ๆ ดู และรู้ชัดว่าแค่ไหนถึงเรียกว่า “เสร็จ”",
    ],
    q: [
      "I have so many ideas. I just never get to show one.",
      "ผมมีไอเดียเยอะมาก แต่ไม่เคยได้เอาอะไรไปโชว์สักอัน",
    ],
    s: [
      "He learns fast, and he makes people laugh.",
      "เรียนรู้เร็ว และทำให้คนรอบตัวหัวเราะได้",
    ],
  },
  {
    id: "porjai",
    n: ["Porjai", "พอใจ"],
    a: 17,
    g: ["M.5", "ม.5"],
    d: ["friends"],
    c: [
      ["Observant", "Gentle", "Slow to open up"],
      ["ช่างสังเกต", "อ่อนโยน", "เปิดใจช้า"],
    ],
    w: [
      "Porjai is 17 and in M.5. She is in her second month at a new school and knows only a few names.",
      "พอใจอายุ 17 ปี เรียนอยู่ ม.5 เพิ่งเข้าเดือนที่สองของโรงเรียนใหม่ และรู้จักชื่อเพื่อนได้ไม่กี่คน",
    ],
    h: [
      "The friend groups formed long ago. At lunch she sits alone, rehearses what to say, and then the moment passes. She feels invisible, and she tells her parents everything is fine so they won’t worry.",
      "กลุ่มเพื่อนสนิทกันมาตั้งนานแล้ว ตอนพักกลางวันเธอนั่งคนเดียว ซ้อมในใจว่าจะพูดอะไร แต่จังหวะก็ผ่านไป เธอรู้สึกเหมือนล่องหน และบอกพ่อแม่ว่าทุกอย่างปกติเพื่อไม่ให้ท่านเป็นห่วง",
    ],
    e: [
      "She needs easy, low-pressure ways to start a conversation and to find people who share her interests.",
      "เธอต้องการวิธีเริ่มคุยที่ง่ายและไม่กดดัน และวิธีหาคนที่ชอบอะไรเหมือนกับเธอ",
    ],
    q: [
      "Everyone already has their group. I don’t know how to walk into one.",
      "ทุกคนมีกลุ่มของตัวเองแล้ว หนูไม่รู้จะเดินเข้าไปยังไง",
    ],
    s: [
      "She is kind and a great listener, and people open up to her once they start talking.",
      "ใจดีและเป็นผู้ฟังที่ดี พอได้คุยกัน คนก็เปิดใจกับเธอ",
    ],
  },
  {
    id: "pim",
    n: ["Pim", "พิม"],
    a: 18,
    g: ["Year 1", "ปี 1"],
    d: ["money", "home"],
    c: [
      ["Independent", "Practical", "Proud"],
      ["พึ่งพาตัวเองได้", "ปฏิบัติจริง", "มีศักดิ์ศรี"],
    ],
    w: [
      "Pim is 18 and in her first year at university. She has a monthly allowance for the first time in her life.",
      "พิมอายุ 18 ปี เรียนปี 1 เธอได้เงินรายเดือนมาบริหารเองเป็นครั้งแรกในชีวิต",
    ],
    h: [
      "At the start of the month she feels rich and spends freely. Then dorm utilities, laundry, transport, and printing for group projects add up in ways she didn’t expect. By week three she is counting coins and eating instant noodles, and she doesn’t want to ask her parents for more.",
      "ต้นเดือนเธอรู้สึกว่ามีเงินเยอะและใช้ค่อนข้างเต็มที่ แล้วค่าน้ำค่าไฟหอ ค่าซักผ้า ค่าเดินทาง และค่าปริ้นงานกลุ่มก็รวมกันเกินที่คิด พอถึงสัปดาห์ที่สามเธอต้องนับเหรียญและกินมาม่า และไม่อยากขอเงินพ่อแม่เพิ่ม",
    ],
    e: [
      "She needs to know, at the start of the month, how many days her money has to cover and what is safe to spend today.",
      "เธอต้องการรู้ตั้งแต่ต้นเดือนว่าเงินก้อนนี้ต้องพอใช้กี่วัน และวันนี้ใช้ได้เท่าไรโดยไม่เสี่ยง",
    ],
    q: [
      "At the start of the month I feel rich. By week three I’m counting coins.",
      "ต้นเดือนรู้สึกรวย พอสัปดาห์ที่สามต้องนับเหรียญแล้ว",
    ],
    s: [
      "She is resourceful and cooks cheap meals that taste great.",
      "มีไหวพริบ และทำอาหารประหยัดที่อร่อยได้",
    ],
  },
  {
    id: "max",
    n: ["Max", "แม็กซ์"],
    a: 19,
    g: ["Vocational diploma", "ปวส."],
    d: ["learning"],
    c: [
      ["Quiet", "Hands-on", "Precise"],
      ["เงียบ", "ชอบลงมือทำ", "ละเอียด"],
    ],
    w: [
      "Max is 19 and in the second year of an electronics diploma. He is about to apply for his first internship.",
      "แม็กซ์อายุ 19 ปี เรียน ปวส. ปี 2 สาขาอิเล็กทรอนิกส์ กำลังจะสมัครฝึกงานเป็นครั้งแรก",
    ],
    h: [
      "The applications ask for a CV and a portfolio. His CV is half a page. When someone asks what he can do, he says “I can fix things.” He can’t put his projects into words, and he assumes other applicants look better on paper.",
      "ใบสมัครให้ส่งประวัติและผลงาน ประวัติของเขายาวไม่ถึงครึ่งหน้า เวลามีคนถามว่าทำอะไรได้บ้าง เขาตอบแค่ว่า “ซ่อมของได้ครับ” เขาเล่าโปรเจกต์เป็นคำพูดไม่ถูก และคิดว่าคนอื่นดูดีกว่าบนกระดาษ",
    ],
    e: [
      "He needs employers to see what he can really do within a minute, and to be able to describe his work in his own words.",
      "เขาต้องการให้ผู้ประกอบการเห็นฝีมือจริงของเขาได้ภายในหนึ่งนาที และเล่างานของตัวเองด้วยคำพูดของเขาเองได้",
    ],
    q: [
      "I can fix it in ten minutes. But I can’t explain it on paper.",
      "ผมซ่อมได้ในสิบนาที แต่เขียนอธิบายบนกระดาษไม่เป็น",
    ],
    s: ["He is skilled, patient, and reliable.", "มีฝีมือ อดทน และไว้ใจได้"],
  },
  {
    id: "gift",
    n: ["Gift", "กิ๊ฟ"],
    a: 20,
    g: ["Year 3", "ปี 3"],
    d: ["giving"],
    c: [
      ["Warm", "Energetic", "Natural organizer"],
      ["อบอุ่น", "กระตือรือร้น", "เป็นผู้จัดงานโดยธรรมชาติ"],
    ],
    w: [
      "Gift is 20 and in Year 3. She leads a volunteer club of about 25 members and organizes a project every month.",
      "กิ๊ฟอายุ 20 ปี เรียนปี 3 เป็นหัวหน้าชมรมจิตอาสาที่มีสมาชิกประมาณ 25 คน และจัดโครงการทุกเดือน",
    ],
    h: [
      "In the group chat 25 people say “yes.” By Saturday morning she doesn’t know who is coming or who is doing what. She messages people one by one, ends up exhausted and guilty, and starts to doubt whether volunteers can be relied on.",
      "ในกลุ่มแชต 25 คนบอกว่า “ไปค่ะ” แต่เช้าวันเสาร์เธอไม่รู้ว่าใครจะมา และใครรับผิดชอบอะไร เธอทักตามทีละคน จนเหนื่อยและรู้สึกผิด และเริ่มสงสัยว่าจะพึ่งอาสาสมัครได้จริงไหม",
    ],
    e: [
      "She needs to know who is coming and who is doing what, early enough to adjust the plan, without chasing people.",
      "เธอต้องการรู้ว่าใครมา ใครทำอะไร ให้เร็วพอที่จะปรับแผนได้ โดยไม่ต้องคอยตามคน",
    ],
    q: [
      "Everyone says yes in the chat. Then Saturday comes.",
      "ในกลุ่มทุกคนตอบว่าไป พอถึงวันเสาร์ก็ไม่เป็นอย่างนั้น",
    ],
    s: [
      "She motivates people in person, and people trust her.",
      "สร้างแรงจูงใจให้คนได้เวลาเจอหน้ากัน และคนไว้ใจเธอ",
    ],
  },
  {
    id: "tom",
    n: ["Tom", "ทอม"],
    a: 21,
    g: ["Final year", "ปีสุดท้าย"],
    d: ["purpose", "learning"],
    c: [
      ["Thoughtful", "Ambitious", "Anxious"],
      ["ช่างคิด", "ทะเยอทะยาน", "กังวลว่าจะตามไม่ทัน"],
    ],
    w: [
      "Tom is 21 and graduating in a few months. He is applying everywhere and wants to make a good first choice.",
      "ทอมอายุ 21 ปี จะจบในอีกไม่กี่เดือน เขาสมัครไปทุกที่และอยากเลือกงานแรกให้ดี",
    ],
    h: [
      "Replies arrive in different places. He missed an interview invitation for a whole day, then got another with one day’s notice and wasn’t ready. He also wonders whether entry-level jobs will shrink as AI grows, and he can’t tell which skill to build next.",
      "คำตอบกลับมาจากหลายช่องทาง เขาพลาดเมลนัดสัมภาษณ์ไปทั้งวัน แล้วอีกบริษัทนัดล่วงหน้าแค่วันเดียวจนเตรียมตัวไม่ทัน เขายังสงสัยว่างานระดับเริ่มต้นจะน้อยลงเมื่อ AI เติบโต และไม่แน่ใจว่าควรฝึกทักษะอะไรต่อ",
    ],
    e: [
      "He needs clarity on where each application stands, and on which skills to build next to stand out.",
      "เขาต้องการเห็นชัดว่าแต่ละใบสมัครอยู่ตรงไหน และควรสร้างทักษะอะไรต่อเพื่อให้โดดเด่น",
    ],
    q: [
      "I’m applying everywhere. I just don’t know where I stand.",
      "ผมสมัครไปทุกที่ แต่ไม่รู้เลยว่าตัวเองอยู่ตรงไหน",
    ],
    s: [
      "He is open to learning, and he uses tools to prepare himself.",
      "เปิดรับการเรียนรู้ และใช้เครื่องมือช่วยเตรียมตัวเอง",
    ],
  },
];
const T = {
  title: [
    "Pick the persona you will build for",
    "เลือกบุคคลที่คุณจะสร้างแอปให้",
  ],
  sub: [
    "Browse 10, select 2, then choose 1 to work on. Every persona is fictional (Example).",
    "ดูได้ทั้ง 10 คน เลือก 2 คน แล้วตัดสินใจเลือก 1 คน ทุกคนเป็นตัวละครสมมติ (ตัวอย่าง)",
  ],
  cnt: ["Selected {n}/2", "เลือกแล้ว {n}/2"],
  full: [
    "2 selected. Deselect one to choose another.",
    "เลือกครบ 2 คนแล้ว ยกเลิก 1 คนเพื่อเลือกคนอื่น",
  ],
  free: ["Select up to 2 cards.", "เลือกได้สูงสุด 2 การ์ด"],
  undo: ["Tap again to undo.", "แตะอีกครั้งเพื่อยกเลิก"],
  more: ["Select one more card to choose.", "เลือกอีก 1 การ์ดเพื่อตัดสินใจ"],
  rm: ["Remove", "เอาออก"],
  det: ["See details", "ดูรายละเอียด"],
  sel: ["Select", "เลือก"],
  on: ["Selected", "เลือกแล้ว"],
  pk: ["Choose 1 to work on", "เลือก 1 คนที่จะทำงานด้วย"],
  wk: ["Work with {x}", "ทำงานกับ{x}"],
  won: ["Working with {x}", "กำลังทำงานกับ{x}"],
  bb: ["BSD Build Brief Form", "แบบฟอร์ม BSD Build Brief"],
  cls: ["Close", "ปิด"],
  fic: ["FICTIONAL", "ตัวละครสมมติ"],
  tag: ["Empathize · Persona card", "Empathize · การ์ดผู้ใช้"],
  meet: ["Meet {x}", "รู้จัก{x}"],
  who: ["Who is this? · คนนี้คือใคร", "Who is this? · คนนี้คือใคร"],
  hard: [
    "Thinks · Feels · Does · คิด รู้สึก ทำ",
    "Thinks · Feels · Does · คิด รู้สึก ทำ",
  ],
  need: [
    "Deepest need · ความต้องการที่แท้จริง",
    "Deepest need · ความต้องการที่แท้จริง",
  ],
  str: ["Strength:", "จุดแข็ง:"],
  yr: ["Age", "อายุ"],
  thm: ["Light / Dark", "สว่าง / มืด"],
};
const EM = {
  body: "💪",
  mind: "💭",
  growth: "🌱",
  purpose: "🌟",
  learning: "📚",
  money: "💰",
  friends: "🤝",
  giving: "🎁",
  home: "🏠",
};
const DC = {
  body: ["#FA595D", "#2E3036"],
  mind: ["#00C4BA", "#2E3036"],
  growth: ["#75CF20", "#2E3036"],
  purpose: ["#FCAC17", "#2E3036"],
  learning: ["#FFCD00", "#2E3036"],
  money: ["#2F6FDE", "#fff"],
  friends: ["#7B4FC9", "#fff"],
  giving: ["#D6457F", "#fff"],
  home: ["#8A6040", "#fff"],
};
const av = (p) => {
  const c = DC[p.d[0]];
  return `<div class="av" aria-hidden="true" style="background:${c[0]};color:${c[1]}">${p.n[0][0]}</div>`;
};
const IC = {
  who: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.4c2 .7 3.5 2.4 3.5 5.6"/>',
  hard: '<path d="M21 12a8 8 0 0 1-11.6 7.1L3 20.5l1.5-4.8A8 8 0 1 1 21 12z"/>',
  need: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
};
let L = 0,
  sel = [],
  fin = null,
  cur = null;
const LC = {};
const $ = (s) => document.querySelector(s),
  cl = (id) => LC[id] ?? L;
const t = (k, x, n, l = L) =>
  T[k][l].replace("{x}", x || "").replace("{n}", n ?? "");
const dn = (p, l) =>
  p.d
    .map(
      (k) =>
        `<span class="dom" style="--c:${DC[k][0]}"><span aria-hidden="true">${EM[k]}</span>${D[k][l]}</span>`,
    )
    .join(" ");
const byId = (id) => P.find((p) => p.id === id),
  lock = (id) => sel.length >= 2 && !sel.includes(id);
const seg = (id, l) =>
  `<div class="seg sm" role="group" aria-label="Language"><button data-lg="${id}:0" aria-pressed="${l === 0}">EN</button><button data-lg="${id}:1" aria-pressed="${l === 1}">TH</button></div>`;
function cardHtml(p) {
  const l = cl(p.id);
  return `<div class="top">${av(p)}<div><h3>${p.n[l]}, ${p.a}</h3><div class="oth">${p.n[1 - l]} · ${p.g[l]}</div></div></div>
  <div class="tags">${dn(p, l)}<span class="fic">${t("fic", 0, 0, l)}</span></div>
  <div class="acts"><button data-d="${p.id}">${t("det", 0, 0, l)}</button><button class="pri" data-s="${p.id}"></button></div>`;
}
function build() {
  $("#grid").innerHTML = P.map(
    (p) =>
      `<article class="card" id="c-${p.id}" data-id="${p.id}">${cardHtml(p)}</article>`,
  ).join("");
  $("#h1").textContent = t("title");
  $("#sub").textContent = t("sub");
  document.documentElement.lang = L ? "th" : "en";
  $("#l0").setAttribute("aria-pressed", String(!L));
  $("#l1").setAttribute("aria-pressed", String(!!L));
  $("#th").setAttribute("aria-label", t("thm"));
  refresh();
  if ($("#dlg").open) openD(cur, true);
}
function setLg(v) {
  const [id, x] = v.split(":");
  LC[id] = +x;
  $("#c-" + id).innerHTML = cardHtml(byId(id));
  refresh();
  if ($("#dlg").open && cur === id) openD(id, true);
}
function refresh() {
  P.forEach((p) => {
    const c = $("#c-" + p.id),
      b = c.querySelector("[data-s]"),
      on = sel.includes(p.id),
      lk = lock(p.id),
      l = cl(p.id);
    c.classList.toggle("sel", on);
    c.classList.toggle("lock", lk);
    b.disabled = lk;
    b.setAttribute("aria-pressed", String(on));
    b.textContent = on ? t("on", 0, 0, l) : t("sel", 0, 0, l);
  });
  $("#cnt").textContent = t("cnt", 0, sel.length);
  $("#hint").textContent = sel.length >= 2 ? t("full") : t("free");
  const pk = $("#pick");
  pk.hidden = sel.length < 1;
  if (sel.length >= 1) {
    pk.innerHTML = `<h2 style="font-size:20px">${t("pk")} <span class="pill" style="font-size:14px;vertical-align:middle">${t("cnt", 0, sel.length)}</span></h2>${fin ? `<p class="note" style="margin:4px 0 0">${t("undo")}</p>` : ""}<div class="row">${sel
      .map((id) => {
        const nm = byId(id).n[L];
        return `<div><span class="pr"><button class="pri" data-f="${id}" aria-pressed="${fin === id}">${fin === id ? t("won", nm) : t("wk", nm)}</button><button class="rm" data-r="${id}">${t("rm")}</button></span><div class="note" style="margin-top:4px">${byId(
          id,
        )
          .d.map((k) => EM[k] + " " + D[k][L])
          .join(" · ")}</div></div>`;
      })
      .join("")}</div>`;
  }
  $("#bb").textContent = t("bb") + (fin ? " · " + byId(fin).n[L] : "");
  $("#bb").classList.toggle("on", !!fin);
  const sb = $("#dlg [data-s]");
  if (sb && cur) {
    const on = sel.includes(cur),
      l = cl(cur);
    sb.disabled = lock(cur);
    sb.setAttribute("aria-pressed", String(on));
    sb.textContent = on ? t("on", 0, 0, l) : t("sel", 0, 0, l);
  }
}
function toggle(id) {
  if (sel.includes(id)) {
    sel = sel.filter((x) => x !== id);
    if (fin === id) fin = null;
  } else if (sel.length < 2) sel.push(id);
  if (fin && !sel.includes(fin)) fin = null;
  refresh();
}
function openD(id, keep) {
  cur = id;
  const p = byId(id),
    d = $("#dlg"),
    l = cl(id),
    n = p.n[l],
    tt = (k, x) => t(k, x, 0, l),
    dc = DC[p.d[0]];
  const bx = (k, x) =>
    `<div class="box" style="--c:${dc[0]}"><b><i class="ic" style="background:${dc[0]};color:${dc[1]}"><svg viewBox="0 0 24 24" aria-hidden="true">${IC[k]}</svg></i>${tt(k)}</b><p>${x}</p></div>`;
  d.innerHTML = `<div class="top" style="justify-content:space-between"><span class="tag">${tt("tag")}</span>${seg(id, l)}</div><h2 id="dt">${tt("meet", n)}</h2>
  <div class="cols"><div class="pc"><div class="top">${av(p)}<div><h3>${n}, ${p.a}</h3><div class="oth">${p.n[1 - l]} · ${p.g[l]}</div></div></div>
  <div class="tags" style="margin-top:10px">${dn(p, l)}<span class="fic">${tt("fic")}</span></div>
  <div class="chips">${p.c[l].map((x) => `<span>${x}</span>`).join("")}</div>
  <div class="q">“${p.q[l]}”</div></div>
  <div>${bx("who", p.w[l])}${bx("hard", p.h[l])}${bx("need", p.e[l])}
  <p><strong>${tt("str")}</strong> ${p.s[l]}</p></div></div>
  <div class="dfoot"><button class="pri" data-s="${id}"></button><button data-x="1">${tt("cls")}</button></div>`;
  refresh();
  if (!keep) d.showModal();
}
$("#grid").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) {
    if (b.dataset.lg) return setLg(b.dataset.lg);
    if (b.disabled) return;
    if (b.dataset.s) return toggle(b.dataset.s);
    if (b.dataset.d) return openD(b.dataset.d);
  }
  const c = e.target.closest(".card");
  if (c) openD(c.dataset.id);
});
$("#pick").addEventListener("click", (e) => {
  const b = e.target.closest("[data-f]"),
    r = e.target.closest("[data-r]");
  if (b) {
    fin = fin === b.dataset.f ? null : b.dataset.f;
    refresh();
  } else if (r) toggle(r.dataset.r);
});
$("#dlg").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b && b.dataset.lg) setLg(b.dataset.lg);
  else if (b && !b.disabled && b.dataset.s) toggle(b.dataset.s);
  else if ((b && b.dataset.x) || e.target === $("#dlg")) $("#dlg").close();
});
const setL = (v) => {
  L = v;
  for (const k in LC) delete LC[k];
  build();
};
$("#l0").onclick = () => setL(0);
$("#l1").onclick = () => setL(1);
$("#th").onclick = () => {
  const r = document.documentElement,
    dk = r.dataset.theme
      ? r.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme:dark)").matches;
  r.dataset.theme = dk ? "light" : "dark";
};
build();
