  function rng(seed) {
    let a = seed >>> 0;
    return () => {
      a = a + 1831565813 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  var svg = (b, w = 800, h = 600) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${b}</svg>`;
  var R2 = (x, y, w, h, f, extra = "") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f}" ${extra}/>`;
  var C = (x, y, r, f, extra = "") => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" ${extra}/>`;
  var Pth = (d, f, extra = "") => `<path d="${d}" fill="${f}" ${extra}/>`;
  var A2 = {
    interior(o, r) {
      const { wall, floor, win, sofa, wood, plant, dark = "#2b2522", kind = "lounge" } = o;
      let s = R2(0, 0, 800, 600, wall) + R2(470, 70, 250, 320, win) + `<path d="M470 230h250M595 70v320" stroke="${wall}" stroke-width="10"/>` + R2(0, 430, 800, 170, floor);
      s += `<polygon points="470,430 720,430 800,560 560,600 520,600" fill="${win}" opacity=".28"/>`;
      s += `<line x1="200" y1="0" x2="200" y2="150" stroke="${dark}" stroke-width="3"/>` + Pth("M148 192 Q200 118 252 192 Z", dark) + C(200, 200, 70, win, 'opacity=".22"');
      if (kind === "cafe") {
        s += R2(40, 330, 380, 110, wood) + R2(40, 316, 380, 18, dark);
        [90, 190, 290].forEach((x) => {
          s += R2(x, 440, 8, 90, dark) + R2(x - 22, 430, 52, 12, dark, 'rx="6"');
        });
        [80, 150, 320].forEach((x, i) => {
          s += R2(x, 286, 34, 30, i === 1 ? win : "#f3efe8", 'rx="4"');
        });
      } else if (kind === "dental") {
        s += R2(240, 420, 44, 40, dark, 'rx="6"') + R2(200, 456, 130, 14, dark, 'rx="7"');
        s += `<path d="M110 372 L320 372 Q350 372 372 344 L440 270" stroke="${sofa}" stroke-width="44" stroke-linecap="round" fill="none"/>`;
        s += C(452, 258, 30, sofa) + `<path d="M120 0 L120 90 Q120 130 160 140 L250 160" stroke="${dark}" stroke-width="6" fill="none"/>` + R2(232, 146, 70, 30, dark, 'rx="14"') + C(267, 170, 40, win, 'opacity=".3"');
        s += R2(520, 300, 120, 12, wood, 'rx="6"') + R2(574, 312, 10, 120, dark);
      } else {
        s += `<ellipse cx="270" cy="500" rx="230" ry="38" fill="${dark}" opacity=".12"/>` + R2(80, 300, 360, 76, sofa, 'rx="24"') + R2(70, 350, 380, 90, sofa, 'rx="22"');
        s += R2(110, 320, 90, 60, win, 'rx="14" opacity=".5"') + R2(300, 324, 100, 56, wood, 'rx="14" opacity=".7"') + R2(96, 438, 10, 34, dark) + R2(414, 438, 10, 34, dark);
      }
      s += Pth("M612 470h76l-10 80h-56z", wood);
      for (let i = 0; i < 7; i++) {
        const a = -70 + i * 24 + r() * 10, len = 90 + r() * 70;
        s += `<ellipse cx="650" cy="${470 - len / 2}" rx="18" ry="${len / 2}" fill="${plant}" transform="rotate(${a} 650 470)" opacity="${0.75 + r() * 0.25}"/>`;
      }
      return svg(s);
    },
    cup(o, r) {
      const { table, saucer, cup, coffee, crema, foam } = o;
      let s = R2(0, 0, 800, 600, table);
      for (let i = 0; i < 14; i++) s += `<path d="M0 ${i * 46 + r() * 20} Q400 ${i * 46 + 20 - r() * 40} 800 ${i * 46 + r() * 20}" stroke="#000" stroke-opacity=".06" stroke-width="${1 + r() * 3}" fill="none"/>`;
      s += `<ellipse cx="410" cy="318" rx="214" ry="210" fill="#000" opacity=".12"/>` + C(400, 300, 210, saucer) + C(400, 300, 168, "#000", 'opacity=".06"');
      s += R2(552, 268, 120, 60, cup, 'rx="30"') + C(400, 300, 152, cup) + C(400, 300, 130, coffee) + C(400, 300, 118, crema);
      s += Pth("M400 372 C330 320 318 258 358 240 C380 230 396 244 400 260 C404 244 420 230 442 240 C482 258 470 320 400 372 Z", foam);
      s += `<path d="M400 372 C396 330 380 300 352 284" stroke="${crema}" stroke-width="5" fill="none" opacity=".7"/>`;
      s += `<rect x="150" y="470" width="190" height="16" rx="8" fill="#c9ced6" transform="rotate(-24 245 478)"/>`;
      for (let i = 0; i < 9; i++) {
        const x = 620 + r() * 160, y = 420 + r() * 170, a = r() * 180;
        s += `<g transform="rotate(${a} ${x} ${y})"><ellipse cx="${x}" cy="${y}" rx="17" ry="12" fill="#4a2c1d"/><path d="M${x - 14} ${y} Q${x} ${y - 5} ${x + 14} ${y}" stroke="#2a170d" stroke-width="2.5" fill="none"/></g>`;
      }
      return svg(s);
    },
    tumbler(o, r) {
      const { bg, leaf, steel = "#c4cad3", steel2 = "#9aa3ae", coffee = "#7a4a2e", froth = "#e9d7bf" } = o;
      let s = R2(0, 0, 800, 600, bg);
      s += Pth("M-40 520 C160 300 420 160 860 120 L860 260 C520 300 260 420 60 640 Z", leaf, 'opacity=".9"');
      for (let i = 0; i < 9; i++) s += `<path d="M${80 + i * 80} ${520 - i * 46} L${150 + i * 80} ${440 - i * 44}" stroke="#000" stroke-opacity=".12" stroke-width="3"/>`;
      s += `<ellipse cx="400" cy="472" rx="200" ry="40" fill="#000" opacity=".15"/>`;
      s += Pth("M200 400 Q400 520 600 400 L584 352 Q400 410 216 352 Z", steel2) + `<ellipse cx="400" cy="352" rx="184" ry="34" fill="${steel}"/>`;
      s += Pth("M318 150 L482 150 L462 410 L338 410 Z", steel) + R2(352, 150, 18, 260, "#fff", 'opacity=".35"') + R2(440, 150, 10, 260, steel2, 'opacity=".6"');
      s += `<ellipse cx="400" cy="150" rx="82" ry="16" fill="${coffee}"/><ellipse cx="400" cy="150" rx="70" ry="11" fill="${froth}"/>`;
      for (let i = 0; i < 3; i++) s += `<path d="M${370 + i * 30} 128 C${350 + i * 30} 100 ${394 + i * 30} 84 ${372 + i * 30} 52" stroke="#fff" stroke-opacity=".55" stroke-width="5" fill="none" stroke-linecap="round"/>`;
      return svg(s);
    },
    pastry(o, r) {
      const { bg, board, bun, bunLight, pod = "#7d9a4b" } = o;
      let s = R2(0, 0, 800, 600, bg) + `<rect x="90" y="110" width="620" height="400" rx="40" fill="${board}"/>`;
      for (let i = 0; i < 6; i++) s += `<path d="M110 ${150 + i * 60} H690" stroke="#000" stroke-opacity=".05" stroke-width="3"/>`;
      [[270, 250, 92], [470, 230, 84], [380, 390, 96], [590, 380, 70]].forEach(([x, y, rr]) => {
        s += C(x + 6, y + 10, rr, "#000", 'opacity=".14"') + C(x, y, rr, bun) + C(x - rr * 0.18, y - rr * 0.2, rr * 0.62, bunLight, 'opacity=".55"');
        s += `<path d="M${x - rr * 0.5} ${y} q${rr * 0.25} -${rr * 0.3} ${rr * 0.5} 0 t${rr * 0.5} 0" stroke="${bun}" stroke-width="7" fill="none" opacity=".8"/>`;
      });
      for (let i = 0; i < 7; i++) {
        const x = 140 + r() * 520, y = 470 + r() * 30;
        s += `<ellipse cx="${x}" cy="${y}" rx="11" ry="6" fill="${pod}" transform="rotate(${r() * 180} ${x} ${y})"/>`;
      }
      return svg(s);
    },
    portrait(o) {
      const { bg, skin, hair, shirt, style = "short", glasses } = o;
      let s = R2(0, 0, 800, 600, bg) + C(400, 300, 230, "#fff", 'opacity=".12"');
      if (style === "long") s += Pth("M290 270 Q276 116 400 112 Q524 116 510 270 L528 470 Q400 506 272 470 Z", hair);
      s += Pth("M150 600 Q164 440 400 428 Q636 440 650 600 Z", shirt) + R2(362, 330, 76, 112, skin, 'rx="30"') + Pth("M340 436 L400 500 L460 436 Z", skin, 'opacity=".9"');
      s += `<ellipse cx="298" cy="262" rx="16" ry="24" fill="${skin}"/><ellipse cx="502" cy="262" rx="16" ry="24" fill="${skin}"/>`;
      s += `<ellipse cx="400" cy="250" rx="104" ry="124" fill="${skin}"/>`;
      if (style === "short") s += Pth("M294 246 Q284 118 400 116 Q518 118 506 246 Q498 176 400 170 Q306 176 294 246 Z", hair);
      if (style === "long") s += Pth("M298 230 Q300 120 400 118 Q500 120 502 230 Q470 170 400 164 Q330 172 298 230 Z", hair);
      if (style === "bun") s += C(400, 112, 46, hair) + Pth("M296 236 Q292 126 400 124 Q508 126 504 236 Q490 168 400 162 Q310 168 296 236 Z", hair);
      if (style === "curly") for (let i = 0; i < 11; i++) {
        const a = Math.PI * (1.02 + i * 0.096);
        s += C(400 + Math.cos(a) * 104, 236 + Math.sin(a) * 118, 34, hair);
      }
      if (style === "grey") s += Pth("M300 210 Q310 130 400 128 Q490 130 500 210 Q470 160 400 158 Q330 160 300 210 Z", hair);
      if (glasses) s += `<g fill="none" stroke="#1d1d1f" stroke-width="7"><rect x="326" y="240" width="62" height="44" rx="14"/><rect x="412" y="240" width="62" height="44" rx="14"/><path d="M388 258h24"/></g>`;
      return svg(s);
    },
    facade(o, r) {
      const { sky, wall, glass, ground, tree = "#5b7550" } = o;
      let s = R2(0, 0, 800, 600, sky) + R2(110, 80, 580, 450, wall);
      for (let row = 0; row < 4; row++) for (let col = 0; col < 5; col++) {
        const x = 140 + col * 108, y = 112 + row * 100;
        s += R2(x, y, 76, 70, glass) + R2(x, y, 16, 70, "#000", 'opacity=".22"') + R2(x, y, 76, 10, "#000", 'opacity=".18"');
      }
      for (let col = 0; col < 6; col++) s += R2(126 + col * 108, 80, 8, 450, "#fff", 'opacity=".18"');
      s += `<polygon points="110,80 690,80 690,190 110,520" fill="#000" opacity=".1"/>` + R2(0, 520, 800, 80, ground);
      [[70, 470, 70], [740, 480, 60], [690, 500, 42]].forEach(([x, y, rr]) => {
        s += R2(x - 4, y, 8, 60, "#3d342c") + C(x, y, rr, tree);
      });
      return svg(s);
    },
    arches(o) {
      const { wall, inner, floor, light = "#fff" } = o;
      let s = R2(0, 0, 800, 600, wall) + R2(0, 470, 800, 130, floor);
      for (let i = 0; i < 4; i++) {
        const x = 52 + i * 184;
        s += Pth(`M${x} 470 V250 A70 70 0 0 1 ${x + 140} 250 V470 Z`, inner);
        s += `<polygon points="${x + 140},470 ${x + 200},600 ${x + 60},600 ${x},470" fill="${light}" opacity=".2"/>`;
        s += Pth(`M${x} 470 V250 A70 70 0 0 1 ${x + 30} 194 V470 Z`, "#000", 'opacity=".12"');
      }
      s += R2(0, 160, 800, 6, "#000", 'opacity=".06"');
      return svg(s);
    },
    plan(o) {
      const { paper, ink, fill } = o;
      let s = R2(0, 0, 800, 600, paper);
      for (let i = 0; i < 20; i++) s += `<path d="M${i * 40} 0V600M0 ${i * 40}H800" stroke="${ink}" stroke-opacity=".05"/>`;
      s += R2(260, 200, 200, 180, fill, 'opacity=".55"');
      s += `<g fill="none" stroke="${ink}" stroke-width="10" stroke-linecap="square"><path d="M120 90H680V510H120Z"/><path d="M260 90V200M260 260V380H360M420 380H460V510M460 90V200M460 260V320M120 300H200M680 300H600"/></g>`;
      s += `<g fill="none" stroke="${ink}" stroke-width="2"><path d="M260 200A60 60 0 0 1 320 260"/><path d="M460 200A60 60 0 0 0 400 260"/><rect x="150" y="120" width="80" height="140"/><rect x="520" y="400" width="130" height="80"/><circle cx="360" cy="290" r="40"/><path d="M120 560H320M120 552V568M320 552V568"/></g>`;
      s += `<g font-family="Helvetica, Arial, sans-serif" font-size="15" letter-spacing="2" fill="${ink}"><text x="290" y="296">COURT</text><text x="510" y="160">LIVING</text><text x="150" y="350">KITCHEN</text><text x="500" y="370">STUDY</text><text x="180" y="585" font-size="12">5 m</text></g>`;
      s += `<g transform="translate(720 70)"><circle r="22" fill="none" stroke="${ink}" stroke-width="2"/><path d="M0 -18 L8 8 L0 2 L-8 8Z" fill="${ink}"/></g>`;
      return svg(s);
    },
    stairs(o) {
      const { wall, step, riser, light } = o;
      let s = R2(0, 0, 800, 600, wall);
      for (let i = 0; i < 9; i++) {
        const x = 80 + i * 70, y = 540 - i * 52;
        s += `<polygon points="${x},${y} ${x + 260},${y} ${x + 260},${y + 52} ${x},${y + 52}" fill="${riser}"/><polygon points="${x},${y} ${x + 260},${y} ${x + 300},${y - 14} ${x + 40},${y - 14}" fill="${step}"/>`;
      }
      s += `<polygon points="520,0 800,0 800,600 380,600" fill="${light}" opacity=".22"/>` + R2(0, 0, 800, 600, "none");
      return svg(s);
    },
    glow(o, r) {
      const { bg, line, a, b } = o;
      let s = `<defs><radialGradient id="g" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="${a}" stop-opacity=".55"/><stop offset="1" stop-color="${a}" stop-opacity="0"/></radialGradient></defs>` + R2(0, 0, 800, 600, bg);
      for (let i = 0; i <= 20; i++) s += `<path d="M${i * 40} 0V600M0 ${i * 40}H800" stroke="${line}" stroke-opacity=".5"/>`;
      s += C(560, 250, 300, "url(#g)");
      const pts = Array.from({ length: 14 }, () => [80 + r() * 640, 60 + r() * 480]);
      pts.forEach((p, i) => pts.slice(i + 1).forEach((q) => {
        const d = Math.hypot(p[0] - q[0], p[1] - q[1]);
        if (d < 210) s += `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="${b}" stroke-opacity="${0.55 - d / 500}" stroke-width="1.5"/>`;
      }));
      pts.forEach((p, i) => {
        s += C(p[0], p[1], i % 3 ? 4 : 7, i % 2 ? a : b);
      });
      return svg(s);
    },
    screen(o, r) {
      const { bg, panel, a, b, line } = o;
      let s = R2(0, 0, 800, 600, bg) + `<rect x="70" y="60" width="660" height="480" rx="16" fill="${panel}" stroke="${line}"/>`;
      s += C(100, 88, 6, line) + C(120, 88, 6, line) + C(140, 88, 6, line) + R2(70, 112, 660, 1, line) + R2(70, 112, 150, 428, "#000", 'opacity=".12"');
      for (let i = 0; i < 6; i++) s += R2(92, 140 + i * 34, 90 - i % 3 * 18, 10, line, 'rx="5"');
      [0, 1, 2].forEach((i) => {
        s += `<rect x="${244 + i * 158}" y="136" width="142" height="76" rx="10" fill="#000" fill-opacity=".14"/>` + R2(258 + i * 158, 152, 60, 8, line, 'rx="4"') + R2(258 + i * 158, 172, 90, 18, i === 1 ? b : a, 'rx="5" opacity=".9"');
      });
      s += `<rect x="244" y="230" width="458" height="290" rx="10" fill="#000" fill-opacity=".14"/>`;
      for (let i = 0; i < 12; i++) {
        const h = 40 + r() * 150;
        s += R2(268 + i * 36, 490 - h, 20, h, a, 'rx="4" opacity=".75"');
      }
      let d = "M268 420";
      for (let i = 1; i <= 12; i++) d += ` L${268 + i * 36} ${300 + Math.sin(i * 0.8) * 50 - i * 6}`;
      s += `<path d="${d}" stroke="${b}" stroke-width="4" fill="none" stroke-linejoin="round"/>`;
      return svg(s);
    },
    marigold(o, r) {
      const { bg, o1, o2, leaf } = o;
      let s = R2(0, 0, 800, 600, bg);
      for (let i = 0; i < 10; i++) {
        const x = 40 + i * 80 + r() * 10, len = 260 + r() * 300;
        for (let y = 10; y < len; y += 26) s += C(x, y, 13 + r() * 3, y / 26 % 2 < 1 ? o1 : o2) + C(x, y, 3, "#7a2e0b", 'opacity=".5"');
        s += `<ellipse cx="${x}" cy="${len + 16}" rx="7" ry="18" fill="${leaf}"/>`;
      }
      for (let t = 0; t <= 1.0001; t += 0.035) {
        const x = t * 800, y = 40 + Math.sin(t * Math.PI) * 120;
        s += C(x, y, 16, t * 28 % 2 < 1 ? o2 : o1);
      }
      return svg(s);
    },
    rings(o) {
      const { bg, fold, gold, goldLight } = o;
      let s = R2(0, 0, 800, 600, bg);
      for (let i = 0; i < 6; i++) s += `<path d="M-50 ${80 + i * 100} C200 ${20 + i * 110} 500 ${160 + i * 90} 860 ${60 + i * 100}" stroke="${fold}" stroke-width="${30 + i * 4}" stroke-opacity=".18" fill="none"/>`;
      s += `<ellipse cx="410" cy="470" rx="250" ry="40" fill="#000" opacity=".12"/>`;
      s += `<circle cx="330" cy="320" r="118" fill="none" stroke="${gold}" stroke-width="30"/><path d="M230 260 A118 118 0 0 1 380 210" stroke="${goldLight}" stroke-width="9" fill="none" stroke-linecap="round"/>`;
      s += `<circle cx="480" cy="290" r="100" fill="none" stroke="${gold}" stroke-width="24"/><path d="M400 240 A100 100 0 0 1 520 196" stroke="${goldLight}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
      s += Pth("M480 160 L506 186 L480 216 L454 186 Z", "#f4f1ee") + Pth("M480 160 L506 186 L480 186 Z", "#fff", 'opacity=".7"');
      return svg(s);
    },
    mandap(o, r) {
      const { bg, drape, arch, flower, flower2, floor } = o;
      let s = R2(0, 0, 800, 600, bg) + R2(0, 470, 800, 130, floor);
      s += Pth("M180 470 V200 Q180 80 400 70 Q620 80 620 200 V470 H580 V210 Q580 120 400 112 Q220 120 220 210 V470 Z", arch);
      for (let i = 0; i < 2; i++) {
        const side = i ? 1 : -1;
        s += Pth(`M400 112 Q${400 + side * 120} 250 ${400 + side * 175} 470 L${400 + side * 140} 470 Q${400 + side * 80} 260 400 140 Z`, drape, 'opacity=".75"');
      }
      [[200, 210], [600, 210], [400, 80], [250, 120], [550, 120]].forEach(([x, y]) => {
        for (let k = 0; k < 9; k++) s += C(x + (r() - 0.5) * 60, y + (r() - 0.5) * 50, 10 + r() * 8, k % 2 ? flower : flower2);
      });
      for (let i = 0; i < 7; i++) {
        const x = 220 + i * 60;
        s += Pth(`M${x - 14} 500 Q${x} 516 ${x + 14} 500 Z`, "#8a4a22") + Pth(`M${x} 480 Q${x + 6} 492 ${x} 498 Q${x - 6} 492 ${x} 480 Z`, "#ffcf6b");
      }
      return svg(s);
    },
    diyas(o, r) {
      const { bg, clay, flame, glow } = o;
      let s = `<defs><radialGradient id="d" r="50%"><stop offset="0" stop-color="${glow}" stop-opacity=".6"/><stop offset="1" stop-color="${glow}" stop-opacity="0"/></radialGradient></defs>` + R2(0, 0, 800, 600, bg);
      for (let i = 0; i < 40; i++) s += C(r() * 800, 470 + r() * 130, 3 + r() * 4, i % 2 ? flame : "#e45a84", 'opacity=".55"');
      [[150, 380, 1], [300, 420, 1.2], [470, 370, 0.9], [640, 410, 1.1], [390, 300, 0.7], [560, 290, 0.6], [230, 290, 0.65]].forEach(([x, y, k]) => {
        s += C(x, y - 40 * k, 110 * k, "url(#d)") + Pth(`M${x - 58 * k} ${y} Q${x} ${y + 60 * k} ${x + 58 * k} ${y} Q${x} ${y + 16 * k} ${x - 58 * k} ${y} Z`, clay);
        s += Pth(`M${x + 40 * k} ${y - 4 * k} Q${x + 56 * k} ${y - 50 * k} ${x + 44 * k} ${y - 70 * k} Q${x + 30 * k} ${y - 44 * k} ${x + 40 * k} ${y - 4 * k} Z`, flame);
      });
      return svg(s);
    },
    house(o, r) {
      const { sky, wall, glass, roof, lawn, palm = "#3f6b4a", pool = "#7fc4d6" } = o;
      let s = R2(0, 0, 800, 600, sky) + C(650, 120, 54, "#fff", 'opacity=".55"') + R2(0, 440, 800, 160, lawn);
      s += R2(140, 300, 480, 150, wall) + R2(260, 190, 380, 114, wall) + R2(230, 176, 440, 18, roof) + R2(110, 288, 540, 16, roof);
      s += R2(170, 330, 160, 110, glass) + R2(360, 330, 90, 110, glass) + R2(290, 214, 210, 70, glass) + R2(530, 214, 80, 70, glass);
      s += `<polygon points="170,330 230,330 170,400" fill="#fff" opacity=".25"/><polygon points="290,214 340,214 290,256" fill="#fff" opacity=".25"/>`;
      s += R2(470, 470, 260, 40, pool, 'rx="4"') + R2(0, 448, 800, 6, "#000", 'opacity=".08"');
      s += `<path d="M90 470 Q76 330 104 220" stroke="#6b4f3a" stroke-width="12" fill="none" stroke-linecap="round"/>`;
      for (let i = 0; i < 7; i++) {
        const a = -150 + i * 40;
        s += `<ellipse cx="104" cy="220" rx="70" ry="14" fill="${palm}" transform="rotate(${a} 104 220) translate(60 0)"/>`;
      }
      return svg(s);
    },
    skyline(o, r) {
      const { sky, t1, t2, t3, win, ground } = o;
      let s = R2(0, 0, 800, 600, sky);
      let x = -20;
      while (x < 820) {
        const w = 60 + r() * 70, h = 160 + r() * 200;
        s += R2(x, 520 - h, w, h, t3);
        x += w + 6;
      }
      x = 10;
      while (x < 820) {
        const w = 70 + r() * 80, h = 120 + r() * 300;
        s += R2(x, 540 - h, w, h, x % 3 > 1 ? t1 : t2);
        for (let yy = 560 - h; yy < 520; yy += 22) for (let xx = x + 10; xx < x + w - 12; xx += 18) if (r() > 0.45) s += R2(xx, yy, 8, 10, win, 'opacity=".8"');
        x += w + 18;
      }
      s += R2(0, 540, 800, 60, ground);
      for (let i = 0; i < 12; i++) s += C(i * 70 + r() * 30, 548, 22 + r() * 12, "#3d5a43");
      return svg(s);
    },
    map(o) {
      const { land, road, water, park, pin } = o;
      let s = R2(0, 0, 800, 600, land) + Pth("M0 430 C160 400 260 470 420 440 C560 414 660 470 800 440 V600 H0 Z", water);
      s += R2(470, 90, 180, 120, park, 'rx="10"') + R2(90, 250, 120, 90, park, 'rx="10"');
      s += `<g stroke="${road}" fill="none" stroke-linecap="round"><path d="M0 230 H800" stroke-width="22"/><path d="M330 0 V600" stroke-width="22"/><path d="M0 120 L800 340" stroke-width="14"/><path d="M560 0 V420 M120 0 V420 M0 360 H800 M680 0 L760 420" stroke-width="8"/></g>`;
      s += `<g transform="translate(330 230)"><ellipse cx="0" cy="6" rx="18" ry="6" fill="#000" opacity=".18"/><path d="M0 0 C-30 -34 -34 -48 -34 -60 A34 34 0 0 1 34 -60 C34 -48 30 -34 0 0 Z" fill="${pin}"/><circle cy="-60" r="12" fill="#fff"/></g>`;
      return svg(s);
    },
    beans(o, r) {
      const { bg, bean = "#4a2c1d" } = o;
      let s = R2(0, 0, 800, 600, bg);
      for (let i = 0; i < 70; i++) {
        const x = r() * 800, y = r() * 600, a = r() * 180;
        s += `<g transform="rotate(${a} ${x} ${y})"><ellipse cx="${x}" cy="${y}" rx="26" ry="18" fill="${bean}" opacity="${0.75 + r() * 0.25}"/><path d="M${x - 22} ${y} Q${x} ${y - 8} ${x + 22} ${y}" stroke="#1c0f08" stroke-width="3" fill="none"/></g>`;
      }
      return svg(s);
    },
    leaves(o, r) {
      const { bg, l1, l2, l3 } = o;
      let s = R2(0, 0, 800, 600, bg);
      for (let i = 0; i < 9; i++) {
        const x = r() * 800, y = r() * 600, a = r() * 360, k = 0.8 + r() * 0.9, c2 = [l1, l2, l3][i % 3];
        s += `<g transform="translate(${x} ${y}) rotate(${a}) scale(${k})"><path d="M0 0 C60 -90 200 -90 260 0 C200 90 60 90 0 0 Z" fill="${c2}"/><path d="M0 0 H250" stroke="#fff" stroke-opacity=".3" stroke-width="3"/>`;
        for (let j = 1; j < 6; j++) s += `<path d="M${j * 42} 0 L${j * 42 + 30} -${40 - j * 3} M${j * 42} 0 L${j * 42 + 30} ${40 - j * 3}" stroke="#fff" stroke-opacity=".2" stroke-width="2"/>`;
        s += "</g>";
      }
      return svg(s);
    },
    courtyard(o, r) {
      const { tile, tile2, roof, tree, tree2 } = o;
      let s = R2(0, 0, 800, 600, roof) + R2(120, 90, 560, 420, tile);
      for (let i = 0; i < 14; i++) for (let j = 0; j < 11; j++) if ((i + j) % 2) s += R2(120 + i * 40, 90 + j * 40, 40, 40, tile2, 'opacity=".5"');
      s += `<polygon points="120,90 680,90 680,150 180,150 180,510 120,510" fill="#000" opacity=".14"/>`;
      s += C(430, 320, 140, "#000", 'opacity=".14"');
      for (let k = 0; k < 16; k++) s += C(400 + (r() - 0.5) * 200, 290 + (r() - 0.5) * 180, 40 + r() * 40, k % 2 ? tree : tree2);
      return svg(s);
    },
    smile(o, r) {
      const { bg, blob, tooth = "#ffffff", spark } = o;
      let s = R2(0, 0, 800, 600, bg) + C(240, 160, 180, blob, 'opacity=".55"') + C(620, 470, 220, blob, 'opacity=".4"');
      s += `<g transform="translate(400 310) scale(1.7) translate(-100 -100)"><path d="M60 22c-26 0-42 22-37 50 3 20 11 34 15 56 4 24 8 66 24 66s14-48 38-48 22 48 38 48 20-42 24-66c4-22 12-36 15-56 5-28-11-50-37-50-15 0-24 8-40 8s-25-8-40-8z" fill="#000" opacity=".1" transform="translate(6 8)"/><path d="M60 22c-26 0-42 22-37 50 3 20 11 34 15 56 4 24 8 66 24 66s14-48 38-48 22 48 38 48 20-42 24-66c4-22 12-36 15-56 5-28-11-50-37-50-15 0-24 8-40 8s-25-8-40-8z" fill="${tooth}"/><path d="M48 44c-8 4-12 14-10 24" stroke="${blob}" stroke-width="6" fill="none" stroke-linecap="round"/></g>`;
      [[600, 160, 26], [660, 250, 14], [200, 430, 18]].forEach(([x, y, k]) => {
        s += Pth(`M${x} ${y - k} L${x + k * 0.28} ${y - k * 0.28} L${x + k} ${y} L${x + k * 0.28} ${y + k * 0.28} L${x} ${y + k} L${x - k * 0.28} ${y + k * 0.28} L${x - k} ${y} L${x - k * 0.28} ${y - k * 0.28} Z`, spark);
      });
      return svg(s);
    }
  };
  var cache = /* @__PURE__ */ new Map();
  function artSrc(kind, opts = {}, seed = 1) {
    const key = kind + JSON.stringify(opts) + seed;
    if (!cache.has(key)) {
      const fn = A2[kind] || A2.leaves;
      cache.set(key, "data:image/svg+xml;charset=utf-8," + encodeURIComponent(fn(opts, rng(seed))));
    }
    return cache.get(key);
  }


export { artSrc };
