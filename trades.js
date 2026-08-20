// Closed trades / realized P&L — feeds the "History" tab of the Portfolio Dashboard.
// Source of truth + maintenance rule: ../Trade_Log.md
// On every closed trade: add a row in Trade_Log.md AND an entry here, then push to GitHub Pages.
// Fields: realized/cost/proceeds are USD (for totals). `cur` = native currency of `price`. `est:true` = soft numbers.
window.HAM_TRADES = [
    // ── DDOG Trim 42% · 20 Aug 2026 · from broker fill (solid) — discretionary ไม่ใช่ signal ──
    { date:'2026-08-20', sym:'DDOG', name:'Datadog', event:'Trim 42%', broker:'Webull', cur:'USD', qty:5.15676, price:232.704, cost:660.31, proceeds:1198.68, realized:538.37, pct:81.53, est:false, reason:'แฮมตัดสินใจเอง — CDC First Red 17/8 (T+1 18/8 ปิดแล้ว) + หลุด 20d/50d SMA + OpenAI RL pause · ⚠️ Sell Gate ผ่านแค่ 1/2 ขา (valuation ไม่เข้าเกณฑ์แพง: EV/S 20.2x vs ค่ากลาง 10 ปี 19.3x) → Green แนะ HOLD · เหลือ 7.11738sh' },
    // ── CDC Trim 50% · 14 Jul 2026 · from broker fills (solid) — buy-back armed if CDC turns green ──
    { date:'2026-07-14', sym:'ARM',  name:'Arm Holdings', event:'CDC Trim 50%', broker:'Dime',   cur:'USD', qty:12, price:281.98, cost:1847.14, proceeds:3383.68, realized:1536.54, pct:83.19, est:false, reason:'CDC 1D แดง + Valuation Gate แพงจัด (Fwd P/E 145x) — trim ล็อคทุนคืน เหลือ 13.9262sh house money · ซื้อคืนถ้า CDC เขียว' },
    { date:'2026-07-14', sym:'NBIS', name:'Nebius Group', event:'CDC Trim 50%', broker:'Webull', cur:'USD', qty:7,  price:201.75, cost:716.49,  proceeds:1410.70, realized:694.21,  pct:96.89, est:false, reason:'CDC 1D แดง — เดิมแผน HOLD (ถูก ~4.7x EV/S) แต่แฮมเลือก trim ตาม ARM · เหลือ 8.64848sh · ซื้อคืนถ้า CDC เขียว' },
    // ── Exit Day · 12 Jun 2026 · from broker fills (solid) ──
    { date:'2026-06-12', sym:'CRWV', name:'CoreWeave',  event:'Exit Day',   broker:'Webull', cur:'USD', qty:17.0308,  price:98.10, cost:1601.71, proceeds:1668.88, realized:67.17,  pct:4.2,  est:false, reason:'Sell Gate: CDC แดง 5 วัน + debt alert (หุ้นกู้ 9.625%)' },
    { date:'2026-06-12', sym:'SE',   name:'Sea Limited', event:'Exit Day',   broker:'Webull', cur:'USD', qty:10,       price:83.60, cost:1569.97, proceeds:835.07,  realized:-734.90, pct:-46.8, est:false, reason:'นอก AI thesis (Tier E)' },
    { date:'2026-06-12', sym:'GRAB', name:'Grab Holdings', event:'Exit Day', broker:'Dime',   cur:'USD', qty:258.0749, price:3.27,  cost:1558.46, proceeds:843.85,  realized:-714.61, pct:-45.9, est:false, reason:'นอก thesis · Tiger Global ล้างพอร์ต + CEO ขายหุ้น' },
    // ── China Exit · 28 May 2026 · THB, reverse-engineered → USD @ FX 36.4 (estimate) ──
    { date:'2026-05-28', sym:'XIAOMI80',  name:'Xiaomi (1810.HK)',  event:'China Exit', broker:'Streaming', cur:'THB', qty:3620, price:11.80, cost:714,  proceeds:1172, realized:457, pct:64.1, est:true, reason:'Geopolitical + Xiaomi Thesis Alert (EV ไม่โต)' },
    { date:'2026-05-28', sym:'TENCENT80', name:'Tencent (0700.HK)', event:'China Exit', broker:'Streaming', cur:'THB', qty:2200, price:18.00, cost:1001, proceeds:1086, realized:85,  pct:8.5,  est:true, reason:'China exit (geopolitical + macro)' },
    { date:'2026-05-28', sym:'BABA80',    name:'Alibaba (9988.HK)', event:'China Exit', broker:'Streaming', cur:'THB', qty:1500, price:5.15,  cost:142,  proceeds:212,  realized:70,  pct:49.2, est:true, reason:'China exit (geopolitical + macro)' },
];
