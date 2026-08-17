// Shared portfolio holdings — used by both Portfolio Dashboard and Command Center.
// Edit cost/shares here ONLY when broker fills change.
// price/val/pl/pct = baseline snapshot ณ วันที่ update ครั้งล่าสุด.
// Dashboard overwrites these at runtime when Yahoo/Finnhub quotes load.
// Command Center reads them as-is (no fetch) — refresh by updating values here.
window.HAM_PORT = [
    { broker:'Dime',      sym:'ARM',       yq:'ARM',     cur:'USD', cost:1958.21,  val:3916.05,  pl:1957.84,   pct:99.98,  shares:13.9262,  price:281.20 }, // trim 50%: sold 12sh @$281.98 14/7/26 · cost แก้ 17/8/26 จาก $2,143.63 -> $1,958.21 ตาม Dime (broker = source of truth) — Dime ขายลอตแพงออกก่อน ($153.93/sh) ทำให้ลอตที่เหลือถูกกว่า avg ($140.61/sh) ไม่ใช่ average-cost คงที่
    { broker:'Dime',      sym:'CRWD',      yq:'CRWD',    cur:'USD', cost:4687.22,  val:7851.03,  pl:3163.81,   pct:67.50,  shares:39.3772,  price:199.38 }, // 4-for-1 split 2 Jul 2026
    { broker:'Dime',      sym:'RBRK',      yq:'RBRK',    cur:'USD', cost:1564.88,  val:1284.36,  pl:-280.52,   pct:-17.93, shares:20.6025,  price:62.34  },
    { broker:'Dime',      sym:'ZS',        yq:'ZS',      cur:'USD', cost:1387.87,  val:863.84,   pl:-524.03,   pct:-37.76, shares:5.6783,   price:152.13 },
    { broker:'Dime',      sym:'TSM',       yq:'TSM',     cur:'USD', cost:2123.14,  val:2122.37,  pl:-0.77,     pct:-0.04,  shares:4.9539390, price:428.42 }, // BUY 17/8/26 @ $428.57 market · CDC First Green 13/8 (T+1 14/8 ผ่านแล้ว = discretionary ไม่ใช่ signal)
    { broker:'Webull',    sym:'NVDA',      yq:'NVDA',    cur:'USD', cost:1544.65,  val:1812.26,  pl:267.61,    pct:17.33,  shares:8.42717,  price:215.05 },
    { broker:'Webull',    sym:'DDOG',      yq:'DDOG',    cur:'USD', cost:1571.68,  val:2454.83,  pl:883.15,    pct:56.19,  shares:12.27414, price:200.00 },
    { broker:'Webull',    sym:'AMZN',      yq:'AMZN',    cur:'USD', cost:2222.38,  val:2577.35,  pl:354.97,    pct:15.97,  shares:9.45123,  price:272.70 },
    { broker:'Webull',    sym:'MSFT',      yq:'MSFT',    cur:'USD', cost:2238.44,  val:1927.82,  pl:-310.62,   pct:-13.88, shares:4.64423,  price:415.10 },
    { broker:'Webull',    sym:'NBIS',      yq:'NBIS',    cur:'USD', cost:885.22,   val:1723.64,  pl:838.42,    pct:94.71,  shares:8.64848,  price:199.30 }, // trim 50%: sold 7sh @$201.75 avg 14/7/26
    { broker:'Webull',    sym:'PANW',      yq:'PANW',    cur:'USD', cost:1527.64,  val:1876.98,  pl:349.34,    pct:22.87,  shares:9.0636,   price:207.09 },
    { broker:'Webull',    sym:'AXON',      yq:'AXON',    cur:'USD', cost:3754.00,  val:2654.16,  pl:-1099.84,  pct:-29.30, shares:6.58519,  price:403.05 },
    { broker:'Streaming', sym:'CATL01',    yq:'3750.HK', cur:'HKD', cost:1460.74,  val:2027.14,  pl:566.40,    pct:38.78  },
    // 🛡️ HEDGE — QQQ $600 Put exp 18 Dec 2026 · 1 สัญญา = shares 100 (ราคาเป็นต่อหุ้น มูลค่า = price x 100)
    // เพิ่ม 17/8/26 · ก่อนหน้านี้ตกหล่นจาก holdings.js ทั้งที่ position ACTIVE ตั้งแต่ 18/5/26 → ขาดทุนไม่ถูกนับในการวัดผลพอร์ต
    { broker:'Webull',    sym:'QQQ P600',  yq:'QQQ261218P00600000', cur:'USD', cost:1690.64, val:625.00, pl:-1065.64, pct:-63.03, shares:100, price:6.25 },
];
