// Shared portfolio holdings — used by both Portfolio Dashboard and Command Center.
// Edit cost/shares here ONLY when broker fills change.
// price/val/pl/pct = baseline snapshot ณ วันที่ update ครั้งล่าสุด.
// Dashboard overwrites these at runtime when Yahoo/Finnhub quotes load.
// Command Center reads them as-is (no fetch) — refresh by updating values here.
window.HAM_PORT = [
    { broker:'Dime',      sym:'ARM',       yq:'ARM',     cur:'USD', cost:3990.77,  val:5529.29,  pl:1538.52,   pct:38.55,  shares:25.9262,  price:213.27 },
    { broker:'Dime',      sym:'CRWD',      yq:'CRWD',    cur:'USD', cost:4687.22,  val:5195.51,  pl:508.29,    pct:10.84,  shares:9.8443,   price:527.77 },
    { broker:'Dime',      sym:'RBRK',      yq:'RBRK',    cur:'USD', cost:1564.88,  val:1284.36,  pl:-280.52,   pct:-17.93, shares:20.6025,  price:62.34  },
    { broker:'Dime',      sym:'ZS',        yq:'ZS',      cur:'USD', cost:1387.87,  val:863.84,   pl:-524.03,   pct:-37.76, shares:5.6783,   price:152.13 },
    { broker:'Webull',    sym:'NVDA',      yq:'NVDA',    cur:'USD', cost:1544.65,  val:1812.26,  pl:267.61,    pct:17.33,  shares:8.42717,  price:215.05 },
    { broker:'Webull',    sym:'DDOG',      yq:'DDOG',    cur:'USD', cost:1571.68,  val:2454.83,  pl:883.15,    pct:56.19,  shares:12.27414, price:200.00 },
    { broker:'Webull',    sym:'AMZN',      yq:'AMZN',    cur:'USD', cost:2222.38,  val:2577.35,  pl:354.97,    pct:15.97,  shares:9.45123,  price:272.70 },
    { broker:'Webull',    sym:'MSFT',      yq:'MSFT',    cur:'USD', cost:2238.44,  val:1927.82,  pl:-310.62,   pct:-13.88, shares:4.64423,  price:415.10 },
    { broker:'Webull',    sym:'NBIS',      yq:'NBIS',    cur:'USD', cost:1601.71,  val:2792.94,  pl:1191.23,   pct:74.37,  shares:15.64848, price:178.48 },
    { broker:'Webull',    sym:'PANW',      yq:'PANW',    cur:'USD', cost:1527.64,  val:1876.98,  pl:349.34,    pct:22.87,  shares:9.0636,   price:207.09 },
    { broker:'Webull',    sym:'AXON',      yq:'AXON',    cur:'USD', cost:3754.00,  val:2654.16,  pl:-1099.84,  pct:-29.30, shares:6.58519,  price:403.05 },
    { broker:'Streaming', sym:'CATL01',    yq:'3750.HK', cur:'HKD', cost:1460.74,  val:2027.14,  pl:566.40,    pct:38.78  },
    // Idle cash (dry powder) — included in NAV/allocation, excluded from P/L & ROI (no cost basis, no live fetch).
    // China Exit ~$2,470 + Exit Day 12/6 ~$3,348. Update `val` when cash deployed or new sells settle.
    { broker:'Cash (idle)', sym:'CASH',    yq:null,      cur:'USD', cost:0,         val:5818,     pl:0,         pct:0,      cash:true },
];
