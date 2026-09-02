// Shared portfolio holdings — used by both Portfolio Dashboard and Command Center.
// Edit cost/shares here ONLY when broker fills change.
// price/val/pl/pct = baseline snapshot ณ วันที่ update ครั้งล่าสุด (อัพเดท 2 ก.ย. 2026 12:35 น. ไทย · refresh ราคาทุกแถวจาก Yahoo close 1 ก.ย. · cost verify ครั้งล่าสุด 20 ส.ค. กับหน้าจอ Webull IMG_1900) · 2 ก.ย. 2026 ถอด CATL01 ออก (ขายหมด).
// Dashboard overwrites these at runtime when Yahoo/Finnhub quotes load.
// Command Center reads them as-is (no fetch) — refresh by updating values here.
window.HAM_PORT = [
    { broker:'Dime',      sym:'ARM',       yq:'ARM',     cur:'USD', cost:1958.21,  val:3270.15  , pl:1311.94  , pct:67.0   ,  shares:13.9262,  price:234.82 }, // trim 50%: sold 12sh @$281.98 14/7/26 · cost แก้ 17/8/26 จาก $2,143.63 -> $1,958.21 ตาม Dime (broker = source of truth) — Dime ขายลอตแพงออกก่อน ($153.93/sh) ทำให้ลอตที่เหลือถูกกว่า avg ($140.61/sh) ไม่ใช่ average-cost คงที่
    { broker:'Dime',      sym:'CRWD',      yq:'CRWD',    cur:'USD', cost:4687.22,  val:8468.85  , pl:3781.63  , pct:80.68  ,  shares:39.3772,  price:215.07 }, // 4-for-1 split 2 Jul 2026
    { broker:'Dime',      sym:'RBRK',      yq:'RBRK',    cur:'USD', cost:1564.88,  val:1821.26  , pl:256.38   , pct:16.38  , shares:20.6025,  price:88.4  },
    { broker:'Dime',      sym:'ZS',        yq:'ZS',      cur:'USD', cost:1387.87,  val:1012.84  , pl:-375.03  , pct:-27.02 , shares:5.6783,   price:178.37 },
    { broker:'Dime',      sym:'TSM',       yq:'TSM',     cur:'USD', cost:2123.14,  val:2050.93  , pl:-72.21   , pct:-3.4   ,  shares:4.9539390, price:414.0 }, // BUY 17/8/26 @ $428.57 market · CDC First Green 13/8 (T+1 14/8 ผ่านแล้ว = discretionary ไม่ใช่ signal)
    { broker:'Webull',    sym:'NVDA',      yq:'NVDA',    cur:'USD', cost:1544.65,  val:1832.4   , pl:287.75   , pct:18.63  ,  shares:8.42717,  price:217.44 },
    { broker:'Webull',    sym:'DDOG',      yq:'DDOG',    cur:'USD', cost:911.37,   val:1593.15  , pl:681.78   , pct:74.81  ,  shares:7.11738,  price:223.84 }, // trim 42%: sold 5.15676sh @$232.704 avg 20/8/26 (net $1,198.68) · Webull = average cost → cost ที่เหลือ = 7.11738 × $128.0481
    { broker:'Webull',    sym:'AMZN',      yq:'AMZN',    cur:'USD', cost:2222.38,  val:2409.31  , pl:186.93   , pct:8.41   ,  shares:9.45123,  price:254.92 },
    { broker:'Webull',    sym:'MSFT',      yq:'MSFT',    cur:'USD', cost:2238.44,  val:2326.85  , pl:88.41    , pct:3.95   , shares:4.64423,  price:501.02 },
    { broker:'Webull',    sym:'NBIS',      yq:'NBIS',    cur:'USD', cost:885.22,   val:1725.72  , pl:840.5    , pct:94.95  ,  shares:8.64848,  price:199.54 }, // trim 50%: sold 7sh @$201.75 avg 14/7/26
    { broker:'Webull',    sym:'PANW',      yq:'PANW',    cur:'USD', cost:1527.64,  val:3281.84  , pl:1754.2   , pct:114.83 ,  shares:9.0636,   price:362.09 },
    { broker:'Webull',    sym:'AXON',      yq:'AXON',    cur:'USD', cost:3754.00,  val:3413.1   , pl:-340.9   , pct:-9.08  , shares:6.58519,  price:518.3 },
    // CATL01 (3750.HK) — ✅ ขายออกหมด 2 ก.ย. 2026 @ ฿5.50 × 11,000 หน่วย (หลุดเทรน + หลุด SMA200) → ดู Trade_Log.md · พอร์ตไม่เหลือหุ้นจีน/Streaming
];
// 🛡️ HEDGE (QQQ $600 Put exp 18/12/26) — ⛔ ห้ามใส่ในไฟล์นี้
// มี `const HEDGE` + renderHedge() แยกอยู่แล้วใน Dashboard/index.html (บรรทัด ~405) ซึ่งดึงราคาสดจาก Yahoo เองอยู่แล้ว
// ใส่ซ้ำที่นี่ = โชว์ 2 ที่ + ปน donut chart กับหุ้น · เคยเผลอใส่ 17/8/26 แล้วถอนออกวันเดียวกัน
