// Shared portfolio holdings — used by both Portfolio Dashboard and Command Center.
// Edit cost/shares here ONLY when broker fills change.
// price/val/pl/pct = baseline snapshot ณ วันที่ update ครั้งล่าสุด (อัพเดท 20 ส.ค. 2026 21:15 น. ไทย · verify cost ครบทุกตัวกับหน้าจอ Webull IMG_1900).
// Dashboard overwrites these at runtime when Yahoo/Finnhub quotes load.
// Command Center reads them as-is (no fetch) — refresh by updating values here.
window.HAM_PORT = [
    { broker:'Dime',      sym:'ARM',       yq:'ARM',     cur:'USD', cost:1958.21,  val:3428.49  , pl:1470.28  , pct:75.08 ,  shares:13.9262,  price:246.19 }, // trim 50%: sold 12sh @$281.98 14/7/26 · cost แก้ 17/8/26 จาก $2,143.63 -> $1,958.21 ตาม Dime (broker = source of truth) — Dime ขายลอตแพงออกก่อน ($153.93/sh) ทำให้ลอตที่เหลือถูกกว่า avg ($140.61/sh) ไม่ใช่ average-cost คงที่
    { broker:'Dime',      sym:'CRWD',      yq:'CRWD',    cur:'USD', cost:4687.22,  val:7755.34  , pl:3068.12  , pct:65.46 ,  shares:39.3772,  price:196.95 }, // 4-for-1 split 2 Jul 2026
    { broker:'Dime',      sym:'RBRK',      yq:'RBRK',    cur:'USD', cost:1564.88,  val:2055.51  , pl:490.63   , pct:31.35 , shares:20.6025,  price:99.77  },
    { broker:'Dime',      sym:'ZS',        yq:'ZS',      cur:'USD', cost:1387.87,  val:1021.53  , pl:-366.34  , pct:-26.40, shares:5.6783,   price:179.9 },
    { broker:'Dime',      sym:'TSM',       yq:'TSM',     cur:'USD', cost:2123.14,  val:2057.42  , pl:-65.72   , pct:-3.10 ,  shares:4.9539390, price:415.31 }, // BUY 17/8/26 @ $428.57 market · CDC First Green 13/8 (T+1 14/8 ผ่านแล้ว = discretionary ไม่ใช่ signal)
    { broker:'Webull',    sym:'NVDA',      yq:'NVDA',    cur:'USD', cost:1544.65,  val:1835.99  , pl:291.34   , pct:18.86 ,  shares:8.42717,  price:217.87 },
    { broker:'Webull',    sym:'DDOG',      yq:'DDOG',    cur:'USD', cost:911.37,   val:1664.79  , pl:753.42   , pct:82.67 ,  shares:7.11738,  price:233.91 }, // trim 42%: sold 5.15676sh @$232.704 avg 20/8/26 (net $1,198.68) · Webull = average cost → cost ที่เหลือ = 7.11738 × $128.0481
    { broker:'Webull',    sym:'AMZN',      yq:'AMZN',    cur:'USD', cost:2222.38,  val:2467.43  , pl:245.05   , pct:11.03 ,  shares:9.45123,  price:261.07 },
    { broker:'Webull',    sym:'MSFT',      yq:'MSFT',    cur:'USD', cost:2238.44,  val:2236.89  , pl:-1.55    , pct:-0.07 , shares:4.64423,  price:481.65 },
    { broker:'Webull',    sym:'NBIS',      yq:'NBIS',    cur:'USD', cost:885.22,   val:1881.00  , pl:995.78   , pct:112.49,  shares:8.64848,  price:217.5 }, // trim 50%: sold 7sh @$201.75 avg 14/7/26
    { broker:'Webull',    sym:'PANW',      yq:'PANW',    cur:'USD', cost:1527.64,  val:3235.80  , pl:1708.16  , pct:111.82,  shares:9.0636,   price:357.01 },
    { broker:'Webull',    sym:'AXON',      yq:'AXON',    cur:'USD', cost:3754.00,  val:4148.64  , pl:394.64   , pct:10.51 , shares:6.58519,  price:630.0 },
    { broker:'Streaming', sym:'CATL01',    yq:'3750.HK', cur:'HKD', cost:1460.74,  val:2027.14,  pl:566.40,    pct:38.78  },
];
// 🛡️ HEDGE (QQQ $600 Put exp 18/12/26) — ⛔ ห้ามใส่ในไฟล์นี้
// มี `const HEDGE` + renderHedge() แยกอยู่แล้วใน Dashboard/index.html (บรรทัด ~405) ซึ่งดึงราคาสดจาก Yahoo เองอยู่แล้ว
// ใส่ซ้ำที่นี่ = โชว์ 2 ที่ + ปน donut chart กับหุ้น · เคยเผลอใส่ 17/8/26 แล้วถอนออกวันเดียวกัน
