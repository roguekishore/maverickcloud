(() => {
  // src/react.js
  var R = window.React;
  var {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback,
    useContext,
    createContext,
    useLayoutEffect,
    Fragment,
    memo,
    forwardRef,
    useReducer,
    useId
  } = R;
  var createPortal = (...a) => window.ReactDOM.createPortal(...a);

  // src/icons.jsx
  var SPEC = {
    file: ["M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z", "M14 3v5h5"],
    fileText: ["M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z", "M14 3v5h5", "M9 13h6", "M9 17h4"],
    fileX: ["M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z", "M14 3v5h5", "m10 12 4 4", "m14 12-4 4"],
    layers: ["m12 3 9 5-9 5-9-5 9-5z", "m3 13 9 5 9-5"],
    menu: ["M4 7h16", "M4 12h16", "M4 17h10"],
    palette: ["M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-.5-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16a5 5 0 0 0 5-5c0-4.3-4-7.6-9-7.6z", "f7.5 11 1.2", "f10 7 1.2", "f14.5 7 1.2", "f17 11 1.2"],
    dots: ["f5.5 12 1.3", "f12 12 1.3", "f18.5 12 1.3"],
    plus: ["M12 5v14", "M5 12h14"],
    minus: ["M5 12h14"],
    trash: ["M4 7h16", "M10 11v6", "M14 11v6", "M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12", "M9 7V4h6v3"],
    copy: ["r8 8 12 12 2", "M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"],
    eye: ["M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z", "c12 12 3"],
    eyeOff: ["M3 3l18 18", "M10.6 5.1A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4.2", "M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7a9.7 9.7 0 0 0 5.4-1.6", "M9.9 9.9a3 3 0 0 0 4.2 4.2"],
    chevDown: ["m6 9 6 6 6-6"],
    chevRight: ["m9 6 6 6-6 6"],
    chevLeft: ["m15 6-6 6 6 6"],
    chevUp: ["m6 15 6-6 6 6"],
    chevUpDown: ["m8 9 4-4 4 4", "m8 15 4 4 4-4"],
    arrowUp: ["M12 19V5", "m5 12 7-7 7 7"],
    arrowDown: ["M12 5v14", "m5 12 7 7 7-7"],
    arrowLeft: ["M19 12H5", "m12 19-7-7 7-7"],
    arrowRight: ["M5 12h14", "m12 5 7 7-7 7"],
    grip: ["f9 6 1.3", "f15 6 1.3", "f9 12 1.3", "f15 12 1.3", "f9 18 1.3", "f15 18 1.3"],
    undo: ["M9 14 4 9l5-5", "M4 9h11a5 5 0 0 1 0 10h-3"],
    redo: ["m15 14 5-5-5-5", "M20 9H9a5 5 0 0 0 0 10h3"],
    search: ["c11 11 7", "m20 20-3.5-3.5"],
    command: ["M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3z"],
    phone: ["r7 3 10 18 2", "M11 18h2"],
    tablet: ["r5 3 14 18 2", "M11 18h2"],
    monitor: ["r3 4 18 12 2", "M8 20h8", "M12 16v4"],
    link: ["M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1", "M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"],
    unlink: ["M9 15l-1 1a4 4 0 0 1-5.7-5.7l3-3", "M15 9l1-1a4 4 0 0 1 5.7 5.7l-3 3", "M3 3l18 18"],
    external: ["M14 4h6v6", "M20 4l-9 9", "M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"],
    check: ["m5 12 5 5 9-10"],
    checkCircle: ["c12 12 9", "m8 12 3 3 5-6"],
    x: ["M6 6l12 12", "M18 6 6 18"],
    alert: ["M12 4 2.5 20h19L12 4z", "M12 10v4", "M12 17h.01"],
    alertCircle: ["c12 12 9", "M12 8v5", "M12 16h.01"],
    info: ["c12 12 9", "M12 11v5", "M12 8h.01"],
    image: ["r3 4 18 16 2", "c9 10 1.6", "m21 16-5-5-9 9"],
    upload: ["M12 16V4", "m7 9 5-5 5 5", "M4 20h16"],
    download: ["M12 4v12", "m7 11 5 5 5-5", "M4 20h16"],
    home: ["M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"],
    globe: ["c12 12 9", "M3 12h18", "M12 3a14 14 0 0 1 0 18", "M12 3a14 14 0 0 0 0 18"],
    lock: ["r5 11 14 10 2", "M8 11V8a4 4 0 0 1 8 0v3"],
    clock: ["c12 12 9", "M12 7v5l3 2"],
    history: ["M3 12a9 9 0 1 0 3-6.7L3 8", "M3 3v5h5", "M12 7v5l3 2"],
    cloud: ["M7 18a5 5 0 0 1-.6-10A6 6 0 0 1 18 8.5a4.5 4.5 0 0 1-.5 9.5", "M12 12v8", "m9 15 3-3 3 3"],
    sparkle: ["M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z", "M19 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"],
    swap: ["m7 4-4 4 4 4", "M3 8h14", "m17 20 4-4-4-4", "M21 16H7"],
    sliders: ["M4 6h9", "M17 6h3", "M4 12h3", "M11 12h9", "M4 18h11", "M19 18h1", "c15 6 2", "c9 12 2", "c17 18 2"],
    sun: ["c12 12 4", "M12 2v2", "M12 20v2", "m4.9 4.9 1.4 1.4", "m17.7 17.7 1.4 1.4", "M2 12h2", "M20 12h2", "m4.9 19.1 1.4-1.4", "m17.7 6.3 1.4-1.4"],
    moon: ["M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"],
    monitorSmall: ["r3 5 18 12 2", "M9 21h6"],
    corner: ["M4 4v7a4 4 0 0 0 4 4h12", "m15 10 5 5-5 5"],
    table: ["r3 4 18 16 2", "M3 10h18", "M9 4v16"],
    mail: ["r3 5 18 14 2", "m3 7 9 6 9-6"],
    message: ["M4 20l1.4-4A8 8 0 1 1 8.4 19z", "M9 11h.01", "M12 11h.01", "M15 11h.01"],
    play: ["M7 5v14l11-7z"],
    pencil: ["M4 20h4L19 9l-4-4L4 16z", "m14 6 4 4"],
    type: ["M5 7V5h14v2", "M12 5v14", "M9 19h6"],
    database: ["M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z", "M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6", "M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"],
    layout: ["r3 3 18 18 2", "M3 9h18", "M9 9v12"],
    refresh: ["M20 11a8 8 0 1 0-2.3 5.7", "M20 4v7h-7"],
    hash: ["M5 9h14", "M5 15h14", "M10 4 8 20", "m16 4-2 16"],
    cursor: ["m5 3 14 7-6 2-2 6z"],
    folder: ["M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"],
    indent: ["M3 6h18", "M10 12h11", "M10 18h11", "m3 9 3 3-3 3"],
    outdent: ["M3 6h18", "M10 12h11", "M10 18h11", "m7 9-3 3 3 3"],
    bold: ["M7 5h6a3.5 3.5 0 0 1 0 7H7z", "M7 12h7a3.5 3.5 0 0 1 0 7H7z"],
    italic: ["M10 5h8", "M6 19h8", "m14 5-4 14"],
    list: ["M9 6h11", "M9 12h11", "M9 18h11", "f4.5 6 1.2", "f4.5 12 1.2", "f4.5 18 1.2"],
    settings: ["c12 12 3", "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"],
    logo: ["r4 4 16 16 4", "M9 15c.8.9 1.8 1.3 3 1.3 1.6 0 2.8-.8 2.8-2.1 0-2.9-5.6-1.6-5.6-4.5 0-1.2 1.1-2 2.6-2 1.1 0 2 .4 2.7 1.1"],
    // site icons
    shield: ["M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z", "m9 12 2 2 4-4"],
    receipt: ["M6 3h12v18l-3-2-3 2-3-2-3 2z", "M9 8h6", "M9 12h6", "M9 16h3"],
    tooth: ["M8 3.5c-2.5 0-4 2-3.6 4.8.3 2 1.1 3.4 1.5 5.6.4 2.4.8 6.6 2.4 6.6 1.6 0 1.4-4.8 3.7-4.8s2.1 4.8 3.7 4.8c1.6 0 2-4.2 2.4-6.6.4-2.2 1.2-3.6 1.5-5.6.4-2.8-1.1-4.8-3.6-4.8-1.5 0-2.4.8-4 .8s-2.5-.8-4-.8z"],
    heart: ["M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"],
    leaf: ["M5 19c0-8 5-14 15-15-1 10-7 15-15 15z", "m5 19 7-7"],
    flame: ["M12 3c1 4 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-4 2.5-5 0 2 1 3 2 3 0-3-1-5.5.5-8z"],
    cup: ["M5 9h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5z", "M17 10.5h1.5a2.5 2.5 0 0 1 0 5H17", "M9 3v3", "M13 3v3"],
    code: ["m8 8-4 4 4 4", "m16 8 4 4-4 4", "m14 5-4 14"],
    chart: ["M4 20V4", "M4 20h16", "M8 16v-4", "M12 16V8", "M16 16v-6"],
    hand: ["M8 13V5.5a1.5 1.5 0 0 1 3 0V12", "M11 11V4.5a1.5 1.5 0 0 1 3 0V12", "M14 11V6.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-2.7L3.6 14a1.5 1.5 0 0 1 2.5-1.6L8 15"],
    camera: ["M4 8h3l2-3h6l2 3h3v11H4z", "c12 13 3.5"],
    flower: ["c12 12 2.4", "c12 6.5 2.6", "c17.2 10.3 2.6", "c15.2 16.5 2.6", "c8.8 16.5 2.6", "c6.8 10.3 2.6"],
    map: ["M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z", "M9 4v14", "M15 6v14"],
    pin: ["M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z", "c12 9.5 2.5"],
    key: ["c8 15 4", "m11 12 8-8", "m16 7 2 2", "m14 9 2 2"],
    star: ["M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"],
    users: ["c9 8 3.5", "M2.5 20a6.5 6.5 0 0 1 13 0", "M16 4.5a3.5 3.5 0 0 1 0 7", "M18 14a6 6 0 0 1 3.5 6"],
    mobile: ["r7 3 10 18 2", "M11 18h2"],
    wifi: ["M5 12.5a10 10 0 0 1 14 0", "M8.5 16a5 5 0 0 1 7 0", "M12 19.5h.01", "M2 9a15 15 0 0 1 20 0"],
    car: ["M5 16V11l2-5h10l2 5v5", "M3 16h18v3H3z", "c7.5 13 .8", "c16.5 13 .8"],
    ruler: ["M3 17 17 3l4 4L7 21z", "m7 13 2 2", "m10 10 2 2", "m13 7 2 2"],
    rupee: ["M7 5h10", "M7 9h10", "M7 5h3a4 4 0 0 1 0 8H7l7 7"],
    calendar: ["r4 5 16 15 2", "M4 10h16", "M9 3v4", "M15 3v4"],
    at: ["c12 12 4", "M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1"],
    dot: ["f12 12 3"]
  };
  function render(spec) {
    return spec.map((s, i) => {
      const t = s[0];
      if (t === "c" || t === "f") {
        const [x, y, r] = s.slice(1).trim().split(/\s+/).map(Number);
        return /* @__PURE__ */ React.createElement("circle", { key: i, cx: x, cy: y, r, fill: t === "f" ? "currentColor" : "none", stroke: t === "f" ? "none" : void 0 });
      }
      if (t === "r") {
        const [x, y, w, h, rx] = s.slice(1).trim().split(/\s+/).map(Number);
        return /* @__PURE__ */ React.createElement("rect", { key: i, x, y, width: w, height: h, rx: rx || 0 });
      }
      return /* @__PURE__ */ React.createElement("path", { key: i, d: s });
    });
  }
  var CACHE = {};
  function Icon({ name, size = 16, className = "", sw = 1.6, style, title }) {
    const body = CACHE[name] || (CACHE[name] = render(SPEC[name] || SPEC.dot));
    return /* @__PURE__ */ React.createElement(
      "svg",
      {
        className: "ic " + className,
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: sw,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": title ? void 0 : "true",
        style
      },
      title ? /* @__PURE__ */ React.createElement("title", null, title) : null,
      body
    );
  }
  var SITE_ICONS = ["clock", "shield", "receipt", "tooth", "heart", "leaf", "flame", "cup", "code", "mobile", "sparkle", "chart", "layers", "sun", "hand", "camera", "flower", "map", "pin", "key", "fileText", "home", "star", "users", "wifi", "car", "ruler", "rupee", "calendar", "check"];

  // src/blocks.jsx
  var SiteCtx = createContext(null);
  var useS = () => useContext(SiteCtx);
  var CATEGORIES = [
    { id: "header", label: "Header" },
    { id: "hero", label: "Hero" },
    { id: "about", label: "About" },
    { id: "features", label: "Features" },
    { id: "gallery", label: "Gallery" },
    { id: "testimonials", label: "Testimonials" },
    { id: "pricing", label: "Pricing table" },
    { id: "faq", label: "FAQ" },
    { id: "news", label: "News" },
    { id: "contact", label: "Contact" },
    { id: "cta", label: "Call to action" },
    { id: "footer", label: "Footer" }
  ];
  var TAGS = ["dark", "minimal", "big-type", "editorial"];
  function A({ link, className = "", children, f, style, title }) {
    const ctx = useS();
    const p = ctx.linkProps(link);
    return /* @__PURE__ */ React.createElement("a", { className: className + (p.active ? " on" : ""), href: p.href, onClick: p.onClick, "data-field": f, "data-broken": p.broken || void 0, style, title }, children);
  }
  function Img({ id, className = "", f, eager }) {
    const ctx = useS();
    const m = ctx.media(id);
    if (!m || !m.src) return /* @__PURE__ */ React.createElement("div", { className: "sb-img sb-img-empty " + className, "data-field": f }, /* @__PURE__ */ React.createElement(Icon, { name: "image", size: 28, sw: 1.2 }));
    return /* @__PURE__ */ React.createElement("img", { className: "sb-img " + className, src: m.src, alt: m.alt || "", "data-field": f, draggable: "false", loading: eager ? void 0 : "lazy" });
  }
  function Btn({ b, f, ghost, sm, className = "" }) {
    if (!b || !b.label) return null;
    return /* @__PURE__ */ React.createElement(A, { link: b.link, className: "sb-btn" + (ghost ? " ghost" : "") + (sm ? " sm" : "") + " " + className, f }, b.label);
  }
  function T({ as: Tag = "p", v, f, className }) {
    if (!v) return null;
    return /* @__PURE__ */ React.createElement(Tag, { className, "data-field": f }, v);
  }
  function inline(s) {
    const out = [];
    const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
    let last = 0, m, k = 0;
    while (m = re.exec(s)) {
      if (m.index > last) out.push(s.slice(last, m.index));
      const t = m[0];
      out.push(t.startsWith("**") ? /* @__PURE__ */ React.createElement("strong", { key: k++ }, t.slice(2, -2)) : /* @__PURE__ */ React.createElement("em", { key: k++ }, t.slice(1, -1)));
      last = m.index + t.length;
    }
    if (last < s.length) out.push(s.slice(last));
    return out;
  }
  function Rich({ text, f, className = "" }) {
    if (!text) return null;
    const blocks = String(text).split(/\n\s*\n/);
    return /* @__PURE__ */ React.createElement("div", { className: "sb-rich " + className, "data-field": f }, blocks.map((b, i) => {
      const lines = b.split("\n");
      if (lines.every((l) => /^\s*-\s+/.test(l))) return /* @__PURE__ */ React.createElement("ul", { key: i }, lines.map((l, j) => /* @__PURE__ */ React.createElement("li", { key: j }, inline(l.replace(/^\s*-\s+/, "")))));
      return /* @__PURE__ */ React.createElement("p", { key: i }, inline(b));
    }));
  }
  function Head({ v, center, h = "h2", size = "sb-h2" }) {
    if (!v.eyebrow && !v.title && !v.intro) return null;
    return /* @__PURE__ */ React.createElement("div", { className: "sb-head" + (center ? " center" : "") }, /* @__PURE__ */ React.createElement(T, { className: "sb-eyebrow", v: v.eyebrow, f: "eyebrow" }), /* @__PURE__ */ React.createElement(T, { as: h, className: "sb-display " + size, v: v.title, f: "title" }), /* @__PURE__ */ React.createElement(T, { className: "sb-lead", v: v.intro, f: "intro" }));
  }
  function navTree(items = []) {
    const out = [];
    items.forEach((it) => {
      if (it.depth > 0 && out.length) out[out.length - 1].children.push(it);
      else out.push({ ...it, children: [] });
    });
    return out;
  }
  var initials = (s = "") => s.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  var Stars = ({ n: n2 = 5 }) => /* @__PURE__ */ React.createElement("span", { className: "sb-stars", "aria-label": n2 + " out of 5" }, Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ React.createElement(Icon, { key: i, name: "star", size: 14, className: i < n2 ? "on" : "" })));
  function MobileMenu({ items, open, close }) {
    if (!open) return null;
    return /* @__PURE__ */ React.createElement("div", { className: "sb-mmenu" }, items.map((it) => /* @__PURE__ */ React.createElement("div", { key: it.id }, /* @__PURE__ */ React.createElement(A, { link: it.link, className: "sb-mm-link" }, it.label), it.children.map((c2) => /* @__PURE__ */ React.createElement(A, { key: c2.id, link: c2.link, className: "sb-mm-link sub" }, c2.label)))));
  }
  function NavLinks({ items, className }) {
    return /* @__PURE__ */ React.createElement("nav", { className, "data-field": "nav" }, items.map((it) => /* @__PURE__ */ React.createElement("div", { className: "sb-nav-item", key: it.id }, /* @__PURE__ */ React.createElement(A, { link: it.link, className: "sb-nav-link" }, it.label, it.children.length > 0 && /* @__PURE__ */ React.createElement(Icon, { name: "chevDown", size: 14 })), it.children.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "sb-dd" }, it.children.map((c2) => /* @__PURE__ */ React.createElement(A, { key: c2.id, link: c2.link }, c2.label))))));
  }
  function Burger({ open, set }) {
    return /* @__PURE__ */ React.createElement("button", { type: "button", className: "sb-burger", "aria-label": "Menu", onClick: (e) => {
      e.stopPropagation();
      set(!open);
    } }, /* @__PURE__ */ React.createElement(Icon, { name: open ? "x" : "menu", size: 22 }));
  }
  function HeaderBar({ v }) {
    const ctx = useS();
    const [open, setOpen] = useState(false);
    useEffect(() => setOpen(false), [ctx.pageId]);
    const items = navTree(ctx.nav("header"));
    return /* @__PURE__ */ React.createElement("header", { className: "sb-header" + (v.sticky ? " sticky" : "") }, /* @__PURE__ */ React.createElement("div", { className: "sb-wrap sb-header-in" }, /* @__PURE__ */ React.createElement(A, { link: { kind: "page", pageId: ctx.homeId }, className: "sb-logo", f: "logo" }, v.logoMark && /* @__PURE__ */ React.createElement("span", { className: "sb-logo-mark" }, initials(v.logo)), /* @__PURE__ */ React.createElement("span", null, v.logo)), /* @__PURE__ */ React.createElement(NavLinks, { items, className: "sb-nav" }), v.showCta && /* @__PURE__ */ React.createElement(Btn, { b: v.cta, f: "cta", sm: true, className: "sb-head-cta" }), /* @__PURE__ */ React.createElement(Burger, { open, set: setOpen })), /* @__PURE__ */ React.createElement(MobileMenu, { items, open }));
  }
  function HeaderCentered({ v }) {
    const ctx = useS();
    const [open, setOpen] = useState(false);
    useEffect(() => setOpen(false), [ctx.pageId]);
    const items = navTree(ctx.nav("header"));
    return /* @__PURE__ */ React.createElement("header", { className: "sb-header sb-hc" + (v.sticky ? " sticky" : "") }, v.topline && /* @__PURE__ */ React.createElement("div", { className: "sb-topline", "data-field": "topline" }, v.topline), /* @__PURE__ */ React.createElement("div", { className: "sb-wrap sb-hc-in" }, /* @__PURE__ */ React.createElement(A, { link: { kind: "page", pageId: ctx.homeId }, className: "sb-logo sb-hc-logo", f: "logo" }, v.logo), /* @__PURE__ */ React.createElement(Burger, { open, set: setOpen })), /* @__PURE__ */ React.createElement("div", { className: "sb-wrap" }, /* @__PURE__ */ React.createElement(NavLinks, { items, className: "sb-hc-nav" })), /* @__PURE__ */ React.createElement(MobileMenu, { items, open }));
  }
  function HeroSplit({ v }) {
    return /* @__PURE__ */ React.createElement("section", { className: "sb-sec sb-hero-split" }, /* @__PURE__ */ React.createElement("div", { className: "sb-wrap sb-hs-grid" + (v.reverse ? " rev" : "") }, /* @__PURE__ */ React.createElement("div", { className: "sb-hs-text" }, /* @__PURE__ */ React.createElement(T, { className: "sb-eyebrow", v: v.eyebrow, f: "eyebrow" }), /* @__PURE__ */ React.createElement(T, { as: "h1", className: "sb-display sb-h1", v: v.title, f: "title" }), /* @__PURE__ */ React.createElement(Rich, { className: "sb-lead", text: v.body, f: "body" }), /* @__PURE__ */ React.createElement("div", { className: "sb-btns" }, /* @__PURE__ */ React.createElement(Btn, { b: v.primary, f: "primary" }), /* @__PURE__ */ React.createElement(Btn, { b: v.secondary, f: "secondary", ghost: true })), v.note && /* @__PURE__ */ React.createElement("p", { className: "sb-note", "data-field": "note" }, /* @__PURE__ */ React.createElement(Stars, { n: 5 }), " ", v.note)), /* @__PURE__ */ React.createElement("div", { className: "sb-hs-media" }, /* @__PURE__ */ React.createElement(Img, { id: v.image, f: "image", eager: true }))));
  }
  function HeroBigType({ v }) {
    return /* @__PURE__ */ React.createElement("section", { className: "sb-sec sb-hero-big" + (v.dark ? " sb-invert" : "") }, /* @__PURE__ */ React.createElement("div", { className: "sb-wrap" }, /* @__PURE__ */ React.createElement(T, { className: "sb-eyebrow", v: v.eyebrow, f: "eyebrow" }), /* @__PURE__ */ React.createElement(T, { as: "h1", className: "sb-display sb-mega", v: v.title, f: "title" }), /* @__PURE__ */ React.createElement("div", { className: "sb-hb-row" }, /* @__PURE__ */ React.createElement(Rich, { className: "sb-lead", text: v.body, f: "body" }), /* @__PURE__ */ React.createElement("div", { className: "sb-btns" }, /* @__PURE__ */ React.createElement(Btn, { b: v.button, f: "button" }))), v.meta && v.meta.length > 0 && /* @__PURE__ */ React.createElement("ul", { className: "sb-hb-meta", "data-field": "meta" }, v.meta.map((m, i) => /* @__PURE__ */ React.createElement("li", { key: i }, m.text)))), v.showImage && v.image && /* @__PURE__ */ React.createElement("div", { className: "sb-wrap sb-hb-img" }, /* @__PURE__ */ React.createElement(Img, { id: v.image, f: "image", eager: true })));
  }
  function HeroSlides({ v }) {
    const ctx = useS();
    const slides = v.slides || [];
    const [i, setI] = useState(0);
    const n2 = slides.length;
    useEffect(() => {
      if (ctx.mode !== "preview" || n2 < 2) return;
      const t = setInterval(() => setI((x) => (x + 1) % n2), 4800);
      return () => clearInterval(t);
    }, [ctx.mode, n2]);
    useEffect(() => {
      if (ctx.focusItem != null && ctx.focusItem < n2) setI(ctx.focusItem);
    }, [ctx.focusItem, n2]);
    const cur = slides[Math.min(i, n2 - 1)] || {};
    return /* @__PURE__ */ React.createElement("section", { className: "sb-hero-slides", "data-field": "slides" }, /* @__PURE__ */ React.createElement("div", { className: "sb-slides-media" }, slides.map((s, k) => /* @__PURE__ */ React.createElement("div", { key: k, className: "sb-slide" + (k === i ? " on" : "") }, /* @__PURE__ */ React.createElement(Img, { id: s.image, eager: k === 0 }))), /* @__PURE__ */ React.createElement("div", { className: "sb-slide-shade" })), /* @__PURE__ */ React.createElement("div", { className: "sb-wrap sb-slide-text" }, /* @__PURE__ */ React.createElement("h1", { className: "sb-display sb-h1" }, cur.title), cur.caption && /* @__PURE__ */ React.createElement("p", { className: "sb-lead" }, cur.caption), /* @__PURE__ */ React.createElement("div", { className: "sb-btns" }, /* @__PURE__ */ React.createElement(Btn, { b: v.button, f: "button" })), n2 > 1 && /* @__PURE__ */ React.createElement("div", { className: "sb-dots" }, slides.map((_, k) => /* @__PURE__ */ React.createElement("button", { key: k, type: "button", "aria-label": "Slide " + (k + 1), className: k === i ? "on" : "", onClick: () => setI(k) })))));
  }
  function AboutStory({ v }) {
    return /* @__PURE__ */ React.createElement("section", { className: "sb-sec sb-about" + (v.tinted ? " sb-alt" : "") }, /* @__PURE__ */ React.createElement("div", { className: "sb-wrap sb-ab-grid" + (v.imageRight ? " rev" : "") }, /* @__PURE__ */ React.createElement("div", { className: "sb-ab-media" }, /* @__PURE__ */ React.createElement(Img, { id: v.image, f: "image" })), /* @__PURE__ */ React.createElement("div", { className: "sb-ab-text" }, /* @__PURE__ */ React.createElement(T, { className: "sb-eyebrow", v: v.eyebrow, f: "eyebrow" }), /* @__PURE__ */ React.createElement(T, { as: "h2", className: "sb-display sb-h2", v: v.title, f: "title" }), /* @__PURE__ */ React.createElement(Rich, { className: "sb-body", text: v.body, f: "body" }), v.stats && v.stats.length > 0 && /* @__PURE__ */ React.createElement("dl", { className: "sb-stats", "data-field": "stats" }, v.stats.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i }, /* @__PURE__ */ React.createElement("dt", { className: "sb-display" }, s.value), /* @__PURE__ */ React.createElement("dd", null, s.label)))), /* @__PURE__ */ React.createElement("div", { className: "sb-btns" }, /* @__PURE__ */ React.createElement(Btn, { b: v.button, f: "button", ghost: true })))));
  }
  function FeaturesGrid({ v }) {
    const cols = v.columns || "3";
    return /* @__PURE__ */ React.createElement("section", { className: "sb-sec sb-features" + (v.tinted ? " sb-alt" : "") }, /* @__PURE__ */ React.createElement("div", { className: "sb-wrap" }, /* @__PURE__ */ React.createElement(Head, { v }), /* @__PURE__ */ React.createElement("div", { className: "sb-fgrid cols-" + cols + " " + (v.style || "cards"), "data-field": "items" }, (v.items || []).map((it, i) => /* @__PURE__ */ React.createElement("article", { className: "sb-feature", key: i }, v.showImages && it.image ? /* @__PURE__ */ React.createElement("div", { className: "sb-f-img" }, /* @__PURE__ */ React.createElement(Img, { id: it.image })) : it.icon ? /* @__PURE__ */ React.createElement("span", { className: "sb-f-icon" }, /* @__PURE__ */ React.createElement(Icon, { name: it.icon, size: 22 })) : null, /* @__PURE__ */ React.createElement("h3", { className: "sb-display sb-h3" }, it.title), it.meta && /* @__PURE__ */ React.createElement("p", { className: "sb-f-meta" }, it.meta), /* @__PURE__ */ React.createElement("p", { className: "sb-muted" }, it.text))))));
  }
  function MenuList({ v }) {
    const groups = [];
    (v.items || []).forEach((it) => {
      const g = it.group || "";
      let grp = groups.find((x) => x.name === g);
      if (!grp) groups.push(grp = { name: g, items: [] });
      grp.items.push(it);
    });
    return /* @__PURE__ */ React.createElement("section", { className: "sb-sec sb-menu" + (v.tinted ? " sb-alt" : "") }, /* @__PURE__ */ React.createElement("div", { className: "sb-wrap" }, /* @__PURE__ */ React.createElement(Head, { v }), /* @__PURE__ */ React.createElement("div", { className: "sb-menu-groups", "data-field": "items" }, groups.map((g, gi) => /* @__PURE__ */ React.createElement("div", { className: "sb-menu-group", key: gi }, g.name && /* @__PURE__ */ React.createElement("h3", { className: "sb-menu-gname" }, g.name), g.items.map((it, i) => /* @__PURE__ */ React.createElement("div", { className: "sb-menu-row", key: i }, /* @__PURE__ */ React.createElement("div", { className: "sb-menu-line" }, /* @__PURE__ */ React.createElement("span", { className: "sb-menu-name" }, it.name, it.tag && /* @__PURE__ */ React.createElement("span", { className: "sb-tag" }, it.tag)), /* @__PURE__ */ React.createElement("span", { className: "sb-menu-dots" }), /* @__PURE__ */ React.createElement("span", { className: "sb-menu-price" }, it.price)), it.desc && /* @__PURE__ */ React.createElement("p", { className: "sb-muted" }, it.desc)))))), v.note && /* @__PURE__ */ React.createElement("p", { className: "sb-small sb-muted", "data-field": "note" }, v.note)));
  }
  function PricingPlans({ v }) {
    return /* @__PURE__ */ React.createElement("section", { className: "sb-sec sb-pricing" + (v.tinted ? " sb-alt" : "") }, /* @__PURE__ */ React.createElement("div", { className: "sb-wrap" }, /* @__PURE__ */ React.createElement(Head, { v, center: true }), /* @__PURE__ */ React.createElement("div", { className: "sb-plans", "data-field": "plans" }, (v.plans || []).map((p, i) => /* @__PURE__ */ React.createElement("article", { className: "sb-plan" + (p.featured ? " featured" : ""), key: i }, p.featured && /* @__PURE__ */ React.createElement("span", { className: "sb-plan-flag" }, p.flag || "Most chosen"), /* @__PURE__ */ React.createElement("h3", { className: "sb-plan-name" }, p.name), /* @__PURE__ */ React.createElement("p", { className: "sb-plan-price" }, /* @__PURE__ */ React.createElement("span", { className: "sb-display" }, p.price), p.period && /* @__PURE__ */ React.createElement("span", { className: "sb-muted" }, " ", p.period)), p.desc && /* @__PURE__ */ React.createElement("p", { className: "sb-muted sb-small" }, p.desc), /* @__PURE__ */ React.createElement("ul", { className: "sb-plan-list" }, String(p.features || "").split("\n").filter(Boolean).map((f, k) => /* @__PURE__ */ React.createElement("li", { key: k }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 16 }), f))), /* @__PURE__ */ React.createElement(Btn, { b: p.button, ghost: !p.featured }))))));
  }
  function GalleryGrid({ v }) {
    const layout = v.layout || "grid";
    return /* @__PURE__ */ React.createElement("section", { className: "sb-sec sb-gallery" + (v.tinted ? " sb-alt" : "") }, /* @__PURE__ */ React.createElement("div", { className: "sb-wrap" }, /* @__PURE__ */ React.createElement(Head, { v }), /* @__PURE__ */ React.createElement("div", { className: "sb-gal " + layout, "data-field": "images" }, (v.images || []).map((im, i) => /* @__PURE__ */ React.createElement("figure", { key: i, className: "sb-gal-item" }, /* @__PURE__ */ React.createElement("div", { className: "sb-gal-img" }, /* @__PURE__ */ React.createElement(Img, { id: im.image })), im.caption && /* @__PURE__ */ React.createElement("figcaption", null, im.caption))))));
  }
  function Testimonials({ v }) {
    return /* @__PURE__ */ React.createElement("section", { className: "sb-sec sb-testi" + (v.tinted ? " sb-alt" : "") }, /* @__PURE__ */ React.createElement("div", { className: "sb-wrap" }, /* @__PURE__ */ React.createElement(Head, { v }), /* @__PURE__ */ React.createElement("div", { className: "sb-tgrid", "data-field": "items" }, (v.items || []).map((t, i) => /* @__PURE__ */ React.createElement("figure", { className: "sb-tcard", key: i }, v.showRating && /* @__PURE__ */ React.createElement(Stars, { n: t.rating || 5 }), /* @__PURE__ */ React.createElement("blockquote", null, "\u201C", t.quote, "\u201D"), /* @__PURE__ */ React.createElement("figcaption", null, t.avatar && /* @__PURE__ */ React.createElement("span", { className: "sb-avatar" }, /* @__PURE__ */ React.createElement(Img, { id: t.avatar })), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, t.name), /* @__PURE__ */ React.createElement("span", { className: "sb-muted sb-small" }, t.role))))))));
  }
  function TestimonialQuote({ v }) {
    return /* @__PURE__ */ React.createElement("section", { className: "sb-sec sb-quote" + (v.dark ? " sb-invert" : "") }, /* @__PURE__ */ React.createElement("div", { className: "sb-wrap sb-quote-in" }, /* @__PURE__ */ React.createElement("blockquote", { className: "sb-display", "data-field": "quote" }, "\u201C", v.quote, "\u201D"), /* @__PURE__ */ React.createElement("div", { className: "sb-quote-by" }, v.avatar && /* @__PURE__ */ React.createElement("span", { className: "sb-avatar lg" }, /* @__PURE__ */ React.createElement(Img, { id: v.avatar, f: "avatar" })), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", { "data-field": "name" }, v.name), /* @__PURE__ */ React.createElement("span", { className: "sb-muted", "data-field": "role" }, v.role)))));
  }
  function Faq({ v }) {
    const [open, setOpen] = useState(0);
    return /* @__PURE__ */ React.createElement("section", { className: "sb-sec sb-faq" + (v.tinted ? " sb-alt" : "") }, /* @__PURE__ */ React.createElement("div", { className: "sb-wrap sb-faq-grid" }, /* @__PURE__ */ React.createElement(Head, { v }), /* @__PURE__ */ React.createElement("div", { className: "sb-faq-list", "data-field": "items" }, (v.items || []).map((q, i) => /* @__PURE__ */ React.createElement("div", { className: "sb-qa" + (open === i ? " open" : ""), key: i }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "sb-q", onClick: () => setOpen(open === i ? -1 : i) }, /* @__PURE__ */ React.createElement("span", null, q.q), /* @__PURE__ */ React.createElement(Icon, { name: open === i ? "minus" : "plus", size: 18 })), open === i && /* @__PURE__ */ React.createElement("div", { className: "sb-a" }, /* @__PURE__ */ React.createElement(Rich, { text: q.a })))))));
  }
  function NewsList({ v }) {
    const ctx = useS();
    const coll2 = ctx.collection(v.source || "blog");
    const items = (coll2 ? coll2.items : []).filter((it) => it.status !== "draft").slice(0, Number(v.limit) || 3);
    const isSvc = v.source === "services";
    return /* @__PURE__ */ React.createElement("section", { className: "sb-sec sb-news" + (v.tinted ? " sb-alt" : "") }, /* @__PURE__ */ React.createElement("div", { className: "sb-wrap" }, /* @__PURE__ */ React.createElement("div", { className: "sb-news-head" }, /* @__PURE__ */ React.createElement(Head, { v }), /* @__PURE__ */ React.createElement(Btn, { b: v.button, f: "button", ghost: true, sm: true })), /* @__PURE__ */ React.createElement("div", { className: "sb-ngrid" + (isSvc ? " svc" : ""), "data-field": "source" }, items.map((it) => /* @__PURE__ */ React.createElement(A, { key: it.id, link: { kind: "item", collection: v.source || "blog", itemId: it.id }, className: "sb-ncard" }, v.showImages !== false && /* @__PURE__ */ React.createElement("div", { className: "sb-ncard-img" }, /* @__PURE__ */ React.createElement(Img, { id: it.image })), /* @__PURE__ */ React.createElement("p", { className: "sb-ncard-meta" }, isSvc ? [it.price, it.duration].filter(Boolean).join(" \xB7 ") : [it.date, it.author].filter(Boolean).join(" \xB7 ")), /* @__PURE__ */ React.createElement("h3", { className: "sb-display sb-h3" }, it.title), /* @__PURE__ */ React.createElement("p", { className: "sb-muted" }, isSvc ? it.summary : it.excerpt), /* @__PURE__ */ React.createElement("span", { className: "sb-more" }, isSvc ? "Learn more" : "Read", " ", /* @__PURE__ */ React.createElement(Icon, { name: "arrowRight", size: 15 })))), items.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "sb-muted" }, "No entries yet."))));
  }
  function EntryDetail({ v }) {
    const ctx = useS();
    const coll2 = ctx.collection(ctx.page && ctx.page.collection ? ctx.page.collection : v.source || "blog");
    const it = ctx.item || coll2 && coll2.items[0];
    const list2 = ctx.listPage;
    if (!it) return /* @__PURE__ */ React.createElement("section", { className: "sb-sec" }, /* @__PURE__ */ React.createElement("div", { className: "sb-wrap sb-muted" }, "This collection has no entries yet."));
    const isSvc = coll2 && coll2.id === "services";
    return /* @__PURE__ */ React.createElement("article", { className: "sb-sec sb-entry" }, /* @__PURE__ */ React.createElement("div", { className: "sb-wrap sb-entry-in" }, list2 && /* @__PURE__ */ React.createElement(A, { link: { kind: "page", pageId: list2.id }, className: "sb-back", f: "backLabel" }, /* @__PURE__ */ React.createElement(Icon, { name: "arrowLeft", size: 15 }), " ", v.backLabel || "Back"), /* @__PURE__ */ React.createElement("p", { className: "sb-eyebrow" }, isSvc ? [it.price, it.duration].filter(Boolean).join(" \xB7 ") : [it.date, it.author].filter(Boolean).join(" \xB7 ")), /* @__PURE__ */ React.createElement("h1", { className: "sb-display sb-h1" }, it.title), /* @__PURE__ */ React.createElement("p", { className: "sb-lead" }, isSvc ? it.summary : it.excerpt), v.showImage !== false && it.image && /* @__PURE__ */ React.createElement("div", { className: "sb-entry-img" }, /* @__PURE__ */ React.createElement(Img, { id: it.image })), /* @__PURE__ */ React.createElement(Rich, { className: "sb-body sb-entry-body", text: it.body }), v.button && v.button.label && /* @__PURE__ */ React.createElement("div", { className: "sb-btns" }, /* @__PURE__ */ React.createElement(Btn, { b: v.button, f: "button" }))));
  }
  function ContactSplit({ v }) {
    const ctx = useS();
    const [sent, setSent] = useState(false);
    return /* @__PURE__ */ React.createElement("section", { className: "sb-sec sb-contact" + (v.tinted ? " sb-alt" : "") }, /* @__PURE__ */ React.createElement("div", { className: "sb-wrap sb-ct-grid" }, /* @__PURE__ */ React.createElement("div", { className: "sb-ct-info" }, /* @__PURE__ */ React.createElement(Head, { v }), /* @__PURE__ */ React.createElement("dl", { className: "sb-ct-list" }, v.address && /* @__PURE__ */ React.createElement("div", { "data-field": "address" }, /* @__PURE__ */ React.createElement("dt", null, /* @__PURE__ */ React.createElement(Icon, { name: "pin", size: 18 })), /* @__PURE__ */ React.createElement("dd", null, v.address)), v.phone && /* @__PURE__ */ React.createElement("div", { "data-field": "phone" }, /* @__PURE__ */ React.createElement("dt", null, /* @__PURE__ */ React.createElement(Icon, { name: "mobile", size: 18 })), /* @__PURE__ */ React.createElement("dd", null, /* @__PURE__ */ React.createElement(A, { link: { kind: "phone", phone: v.phone } }, v.phone))), v.whatsapp && /* @__PURE__ */ React.createElement("div", { "data-field": "whatsapp" }, /* @__PURE__ */ React.createElement("dt", null, /* @__PURE__ */ React.createElement(Icon, { name: "message", size: 18 })), /* @__PURE__ */ React.createElement("dd", null, /* @__PURE__ */ React.createElement(A, { link: { kind: "whatsapp", phone: v.whatsapp, message: "Hi, I found you on your website." } }, "WhatsApp ", v.whatsapp))), v.email && /* @__PURE__ */ React.createElement("div", { "data-field": "email" }, /* @__PURE__ */ React.createElement("dt", null, /* @__PURE__ */ React.createElement(Icon, { name: "mail", size: 18 })), /* @__PURE__ */ React.createElement("dd", null, /* @__PURE__ */ React.createElement(A, { link: { kind: "email", email: v.email } }, v.email)))), v.hours && v.hours.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "sb-hours", "data-field": "hours" }, v.hours.map((h, i) => /* @__PURE__ */ React.createElement("div", { key: i }, /* @__PURE__ */ React.createElement("span", null, h.days), /* @__PURE__ */ React.createElement("span", null, h.time))))), /* @__PURE__ */ React.createElement("div", { className: "sb-ct-side" }, v.showForm ? /* @__PURE__ */ React.createElement("form", { className: "sb-form", "data-field": "formTitle", onSubmit: (e) => {
      e.preventDefault();
      if (ctx.mode === "preview") setSent(true);
    } }, sent ? /* @__PURE__ */ React.createElement("div", { className: "sb-form-done" }, /* @__PURE__ */ React.createElement(Icon, { name: "checkCircle", size: 28 }), /* @__PURE__ */ React.createElement("p", { className: "sb-display sb-h3" }, v.formSuccess || "Thanks. We will get back to you soon.")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", { className: "sb-display sb-h3" }, v.formTitle), /* @__PURE__ */ React.createElement("label", null, "Your name", /* @__PURE__ */ React.createElement("input", { placeholder: "Priya Sharma", readOnly: ctx.mode !== "preview" })), /* @__PURE__ */ React.createElement("label", null, "Phone", /* @__PURE__ */ React.createElement("input", { placeholder: "+91 98xxx xxxxx", readOnly: ctx.mode !== "preview" })), /* @__PURE__ */ React.createElement("label", null, "Message", /* @__PURE__ */ React.createElement("textarea", { rows: 3, placeholder: v.formHint || "How can we help?", readOnly: ctx.mode !== "preview" })), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "sb-btn" }, v.formButton || "Send"))) : null, v.showMap && v.map && /* @__PURE__ */ React.createElement("div", { className: "sb-map" }, /* @__PURE__ */ React.createElement(Img, { id: v.map, f: "map" })))));
  }
  function CtaBanner({ v }) {
    const tone = v.tone || "primary";
    return /* @__PURE__ */ React.createElement("section", { className: "sb-sec sb-cta tone-" + tone + (tone === "invert" ? " sb-invert" : "") }, /* @__PURE__ */ React.createElement("div", { className: "sb-wrap" }, /* @__PURE__ */ React.createElement("div", { className: "sb-cta-box" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(T, { as: "h2", className: "sb-display sb-h2", v: v.title, f: "title" }), /* @__PURE__ */ React.createElement(T, { className: "sb-lead", v: v.text, f: "text" })), /* @__PURE__ */ React.createElement("div", { className: "sb-btns" }, /* @__PURE__ */ React.createElement(Btn, { b: v.button, f: "button" }), /* @__PURE__ */ React.createElement(Btn, { b: v.secondary, f: "secondary", ghost: true })))));
  }
  function FooterColumns({ v }) {
    const ctx = useS();
    const tree = navTree(ctx.nav("footer"));
    const groups = tree.filter((t) => t.children.length);
    const loose = tree.filter((t) => !t.children.length);
    return /* @__PURE__ */ React.createElement("footer", { className: "sb-footer" + (v.dark ? " sb-invert" : " sb-alt") }, /* @__PURE__ */ React.createElement("div", { className: "sb-wrap sb-ft-grid" }, /* @__PURE__ */ React.createElement("div", { className: "sb-ft-brand" }, /* @__PURE__ */ React.createElement(A, { link: { kind: "page", pageId: ctx.homeId }, className: "sb-logo", f: "logo" }, v.logo), /* @__PURE__ */ React.createElement(T, { className: "sb-muted", v: v.tagline, f: "tagline" }), /* @__PURE__ */ React.createElement("div", { className: "sb-ft-contact" }, v.address && /* @__PURE__ */ React.createElement("p", { "data-field": "address" }, v.address), v.phone && /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(A, { link: { kind: "phone", phone: v.phone }, f: "phone" }, v.phone)), v.email && /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(A, { link: { kind: "email", email: v.email }, f: "email" }, v.email)))), /* @__PURE__ */ React.createElement("div", { className: "sb-ft-cols", "data-field": "nav" }, groups.map((g) => /* @__PURE__ */ React.createElement("div", { key: g.id, className: "sb-ft-col" }, /* @__PURE__ */ React.createElement("h4", null, g.label), g.children.map((c2) => /* @__PURE__ */ React.createElement(A, { key: c2.id, link: c2.link }, c2.label)))), loose.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "sb-ft-col" }, /* @__PURE__ */ React.createElement("h4", null, "Links"), loose.map((c2) => /* @__PURE__ */ React.createElement(A, { key: c2.id, link: c2.link }, c2.label))))), /* @__PURE__ */ React.createElement("div", { className: "sb-wrap sb-ft-bottom" }, /* @__PURE__ */ React.createElement("span", { "data-field": "copyright" }, v.copyright), /* @__PURE__ */ React.createElement("span", { className: "sb-ft-social", "data-field": "social" }, (v.social || []).map((s, i) => /* @__PURE__ */ React.createElement(A, { key: i, link: { kind: "url", url: s.url, newTab: true } }, /* @__PURE__ */ React.createElement(Icon, { name: "at", size: 14 }), s.handle)))));
  }
  function FooterSimple({ v }) {
    const ctx = useS();
    const items = ctx.nav("footer");
    return /* @__PURE__ */ React.createElement("footer", { className: "sb-footer sb-ft-simple" }, /* @__PURE__ */ React.createElement("div", { className: "sb-wrap sb-fs-in" }, /* @__PURE__ */ React.createElement(A, { link: { kind: "page", pageId: ctx.homeId }, className: "sb-logo", f: "logo" }, v.logo), /* @__PURE__ */ React.createElement("nav", { className: "sb-fs-nav", "data-field": "nav" }, items.map((it) => /* @__PURE__ */ React.createElement(A, { key: it.id, link: it.link }, it.label)))), /* @__PURE__ */ React.createElement("div", { className: "sb-wrap sb-ft-bottom" }, /* @__PURE__ */ React.createElement("span", { "data-field": "copyright" }, v.copyright), v.tagline && /* @__PURE__ */ React.createElement("span", { className: "sb-muted", "data-field": "tagline" }, v.tagline)));
  }
  var btn = (key, label) => ({ key, type: "button", label });
  var txt = (key, label, extra = {}) => ({ key, type: "text", label, ...extra });
  var area = (key, label, extra = {}) => ({ key, type: "textarea", label, ...extra });
  var rich = (key, label) => ({ key, type: "richtext", label });
  var img = (key, label) => ({ key, type: "image", label });
  var tog = (key, label) => ({ key, type: "toggle", label });
  var sel = (key, label, options) => ({ key, type: "select", label, options });
  var list = (key, label, itemLabel, fields, max = 12) => ({ key, type: "list", label, itemLabel, fields, max });
  var headFields = [txt("eyebrow", "Eyebrow"), txt("title", "Heading", { max: 80 }), area("intro", "Intro")];
  var tinted = tog("tinted", "Tinted background");
  var BLOCKS = {
    "header-bar": {
      category: "header",
      title: "Bar header",
      description: "Logo on the left, menu and a button on the right. Collapses to a menu button on phones.",
      tags: ["minimal"],
      component: HeaderBar,
      fields: [txt("logo", "Business name"), tog("logoMark", "Show initials badge"), tog("showCta", "Show button"), btn("cta", "Button"), tog("sticky", "Stick to top while scrolling"), { key: "nav", type: "nav", label: "Menu" }]
    },
    "header-centered": {
      category: "header",
      title: "Centred header",
      description: "Large centred name with the menu underneath and an announcement line on top.",
      tags: ["editorial"],
      component: HeaderCentered,
      fields: [txt("topline", "Announcement line"), txt("logo", "Business name"), tog("sticky", "Stick to top while scrolling"), { key: "nav", type: "nav", label: "Menu" }]
    },
    "hero-split": {
      category: "hero",
      title: "Split hero",
      description: "Headline, text and two buttons beside a large photo.",
      tags: [],
      component: HeroSplit,
      fields: [txt("eyebrow", "Eyebrow"), txt("title", "Heading", { max: 80 }), rich("body", "Text"), btn("primary", "Main button"), btn("secondary", "Second button"), img("image", "Photo"), txt("note", "Rating line"), tog("reverse", "Photo on the left")]
    },
    "hero-bigtype": {
      category: "hero",
      title: "Big type hero",
      description: "An oversized headline with a short line of text. Optional wide photo below.",
      tags: ["big-type", "minimal"],
      component: HeroBigType,
      fields: [txt("eyebrow", "Eyebrow"), area("title", "Heading", { max: 90 }), rich("body", "Text"), btn("button", "Button"), list("meta", "Facts", "Fact", [txt("text", "Text")], 4), tog("showImage", "Show wide photo"), img("image", "Photo"), tog("dark", "Dark background")]
    },
    "hero-slides": {
      category: "hero",
      title: "Slideshow hero",
      description: "Full-width photos that change every few seconds, each with its own headline.",
      tags: ["dark"],
      component: HeroSlides,
      fields: [list("slides", "Slides", "Slide", [img("image", "Photo"), txt("title", "Heading"), area("caption", "Caption")], 6), btn("button", "Button")]
    },
    "about-story": {
      category: "about",
      title: "Story with photo",
      description: "A photo beside your story, with up to four key numbers.",
      tags: ["editorial"],
      component: AboutStory,
      fields: [txt("eyebrow", "Eyebrow"), txt("title", "Heading"), rich("body", "Story"), img("image", "Photo"), list("stats", "Numbers", "Number", [txt("value", "Number"), txt("label", "Label")], 4), btn("button", "Button"), tog("imageRight", "Photo on the right"), tinted]
    },
    "features-grid": {
      category: "features",
      title: "Feature grid",
      description: "Two to four columns of short points, each with an icon or a photo.",
      tags: [],
      component: FeaturesGrid,
      fields: [
        ...headFields,
        sel("columns", "Columns", [{ value: "2", label: "2" }, { value: "3", label: "3" }, { value: "4", label: "4" }]),
        sel("style", "Style", [{ value: "cards", label: "Cards" }, { value: "plain", label: "Plain" }]),
        tog("showImages", "Use photos instead of icons"),
        list("items", "Items", "Item", [{ key: "icon", type: "icon", label: "Icon" }, img("image", "Photo"), txt("title", "Title"), txt("meta", "Detail line"), area("text", "Text")], 8),
        tinted
      ]
    },
    "menu-list": {
      category: "pricing",
      title: "Price list",
      description: "Grouped items with prices, like a caf\xE9 menu or a list of fees.",
      tags: ["editorial"],
      component: MenuList,
      fields: [...headFields, list("items", "Items", "Item", [txt("group", "Group"), txt("name", "Name"), txt("price", "Price"), txt("desc", "Description"), txt("tag", "Badge")], 30), txt("note", "Note under the list"), tinted]
    },
    "pricing-plans": {
      category: "pricing",
      title: "Plans table",
      description: "Side-by-side packages with a highlighted choice.",
      tags: [],
      component: PricingPlans,
      fields: [...headFields, list("plans", "Plans", "Plan", [txt("name", "Name"), txt("price", "Price"), txt("period", "Per"), area("desc", "Description"), area("features", "Included (one per line)"), tog("featured", "Highlight"), btn("button", "Button")], 4), tinted]
    },
    "gallery-grid": {
      category: "gallery",
      title: "Photo gallery",
      description: "A grid, mosaic or strip of photos with captions.",
      tags: ["minimal"],
      component: GalleryGrid,
      fields: [...headFields, sel("layout", "Layout", [{ value: "grid", label: "Grid" }, { value: "mosaic", label: "Mosaic" }, { value: "strip", label: "Strip" }]), list("images", "Photos", "Photo", [img("image", "Photo"), txt("caption", "Caption")], 12), tinted]
    },
    "testimonials-cards": {
      category: "testimonials",
      title: "Review cards",
      description: "Three short reviews with names and photos.",
      tags: [],
      component: Testimonials,
      fields: [...headFields, tog("showRating", "Show star rating"), list("items", "Reviews", "Review", [area("quote", "Quote"), txt("name", "Name"), txt("role", "Detail"), img("avatar", "Photo"), { key: "rating", type: "number", label: "Stars", min: 1, max: 5 }], 6), tinted]
    },
    "testimonial-quote": {
      category: "testimonials",
      title: "Big quote",
      description: "One large review set in the display font.",
      tags: ["big-type", "editorial"],
      component: TestimonialQuote,
      fields: [area("quote", "Quote"), txt("name", "Name"), txt("role", "Detail"), img("avatar", "Photo"), tog("dark", "Dark background")]
    },
    "faq-accordion": {
      category: "faq",
      title: "Questions",
      description: "Questions that open to show the answer.",
      tags: ["minimal"],
      component: Faq,
      fields: [...headFields, list("items", "Questions", "Question", [txt("q", "Question"), rich("a", "Answer")], 12), tinted]
    },
    "news-list": {
      category: "news",
      title: "Latest entries",
      description: "Cards filled from a collection: blog posts or services.",
      tags: [],
      component: NewsList,
      fields: [...headFields, { key: "source", type: "collection", label: "Show entries from" }, { key: "limit", type: "number", label: "How many", min: 1, max: 12 }, tog("showImages", "Show photos"), btn("button", "Button"), tinted]
    },
    "entry-detail": {
      category: "news",
      title: "Entry page",
      description: "Shows one collection entry. Used on /blog/:slug and /services/:slug pages.",
      tags: ["editorial"],
      component: EntryDetail,
      detail: true,
      fields: [txt("backLabel", "Back link text"), tog("showImage", "Show photo"), btn("button", "Button under the text")]
    },
    "contact-split": {
      category: "contact",
      title: "Contact and form",
      description: "Address, phone, WhatsApp and hours beside an enquiry form and map.",
      tags: [],
      component: ContactSplit,
      fields: [
        ...headFields,
        area("address", "Address"),
        txt("phone", "Phone"),
        txt("whatsapp", "WhatsApp number"),
        txt("email", "Email"),
        list("hours", "Opening hours", "Row", [txt("days", "Days"), txt("time", "Hours")], 7),
        tog("showForm", "Show enquiry form"),
        txt("formTitle", "Form heading"),
        txt("formButton", "Form button"),
        txt("formSuccess", "Message after sending"),
        tog("showMap", "Show map"),
        img("map", "Map image"),
        tinted
      ]
    },
    "cta-banner": {
      category: "cta",
      title: "Call to action",
      description: "A short push towards one action, in a coloured band.",
      tags: [],
      component: CtaBanner,
      fields: [txt("title", "Heading"), area("text", "Text"), btn("button", "Button"), btn("secondary", "Second button"), sel("tone", "Colour", [{ value: "primary", label: "Brand" }, { value: "soft", label: "Soft" }, { value: "invert", label: "Dark" }])]
    },
    "footer-columns": {
      category: "footer",
      title: "Column footer",
      description: "Contact details beside columns of links.",
      tags: [],
      component: FooterColumns,
      fields: [txt("logo", "Business name"), area("tagline", "Short description"), area("address", "Address"), txt("phone", "Phone"), txt("email", "Email"), list("social", "Social profiles", "Profile", [txt("handle", "Handle"), txt("url", "Address")], 5), txt("copyright", "Copyright line"), tog("dark", "Dark background"), { key: "nav", type: "nav", label: "Footer menu" }]
    },
    "footer-simple": {
      category: "footer",
      title: "Simple footer",
      description: "One line with your name, links and copyright.",
      tags: ["minimal"],
      component: FooterSimple,
      fields: [txt("logo", "Business name"), txt("tagline", "Short line"), txt("copyright", "Copyright line"), { key: "nav", type: "nav", label: "Footer menu" }]
    }
  };
  function blockTags(type, values = {}) {
    const b = BLOCKS[type];
    const t = new Set(b ? b.tags : []);
    if (values.dark || values.tone === "invert" || type === "hero-slides") t.add("dark");
    return [...t];
  }

  // src/themes.js
  var FONTS = [
    { name: "Fraunces", kind: "Serif", w: 600 },
    { name: "Instrument Serif", kind: "Serif", w: 400 },
    { name: "Cormorant Garamond", kind: "Serif", w: 600 },
    { name: "DM Serif Display", kind: "Serif", w: 400 },
    { name: "Playfair Display", kind: "Serif", w: 600 },
    { name: "Lora", kind: "Serif", w: 600 },
    { name: "Space Grotesk", kind: "Sans", w: 600 },
    { name: "Plus Jakarta Sans", kind: "Sans", w: 700 },
    { name: "Bricolage Grotesque", kind: "Sans", w: 700 },
    { name: "Syne", kind: "Sans", w: 700 },
    { name: "DM Sans", kind: "Sans", w: 600 },
    { name: "Manrope", kind: "Sans", w: 700 },
    { name: "Inter", kind: "Sans", w: 600 },
    { name: "Karla", kind: "Sans", w: 600 },
    { name: "Work Sans", kind: "Sans", w: 600 }
  ];
  var FONT_BY = Object.fromEntries(FONTS.map((f) => [f.name, f]));
  var fontStack = (name) => {
    const f = FONT_BY[name] || FONTS[0];
    return `'${f.name}', ${f.kind === "Serif" ? "Georgia, 'Times New Roman', serif" : "system-ui, -apple-system, 'Segoe UI', sans-serif"}`;
  };
  var COLOR_KEYS = ["background", "foreground", "primary", "secondary", "muted", "accent", "border", "highlight"];
  var RADII = [0, 4, 8, 14, 24];
  var WIDTHS = [{ value: 960, label: "Narrow" }, { value: 1120, label: "Standard" }, { value: 1280, label: "Wide" }];
  var SPACING = { compact: 56, comfortable: 88, spacious: 128 };
  var c = (background, foreground, primary, secondary, muted, accent, border, highlight) => ({ background, foreground, primary, secondary, muted, accent, border, highlight });
  var PRESETS = [
    {
      id: "ember",
      name: "Ember",
      fonts: { display: "Fraunces", body: "DM Sans" },
      radius: 8,
      width: 1120,
      spacing: "comfortable",
      mode: "light",
      colors: {
        light: c("#FAF6F0", "#2B1D14", "#B4441B", "#F1E6D8", "#F3ECE3", "#D9962B", "#E7DBCB", "#FFE7C2"),
        dark: c("#1C1410", "#F4E9DC", "#E3693A", "#2A1F18", "#241A14", "#E8B04E", "#3A2C22", "#4A2E1A")
      }
    },
    {
      id: "midnight",
      name: "Midnight",
      fonts: { display: "Space Grotesk", body: "Inter" },
      radius: 14,
      width: 1120,
      spacing: "comfortable",
      mode: "dark",
      colors: {
        light: c("#F7F8FB", "#0A0D14", "#3B5BFF", "#EEF1F7", "#F0F2F7", "#0EA5A0", "#DDE2EC", "#DCE5FF"),
        dark: c("#0A0D14", "#E6EAF2", "#7A93FF", "#121826", "#0F1420", "#38D9C0", "#1E2636", "#1B2A4A")
      }
    },
    {
      id: "atelier",
      name: "Atelier",
      fonts: { display: "Instrument Serif", body: "Manrope" },
      radius: 0,
      width: 1280,
      spacing: "spacious",
      mode: "light",
      colors: {
        light: c("#F4F3EF", "#161616", "#161616", "#E9E7E1", "#ECEAE4", "#9C7A4B", "#D9D6CE", "#E3DCCB"),
        dark: c("#121212", "#ECEAE4", "#ECEAE4", "#1C1C1C", "#1A1A1A", "#C49A62", "#2C2C2C", "#2B261E")
      }
    },
    {
      id: "clinic",
      name: "Clinic",
      fonts: { display: "Plus Jakarta Sans", body: "Inter" },
      radius: 14,
      width: 1120,
      spacing: "comfortable",
      mode: "light",
      colors: {
        light: c("#FFFFFF", "#0F2A2E", "#0E7C7B", "#EAF5F4", "#F3F8F8", "#E8962E", "#DCE8E7", "#D7F0EE"),
        dark: c("#0B1A1C", "#E3F1F0", "#2BB3AE", "#10272A", "#0F2326", "#F2B35E", "#1E3A3D", "#134042")
      }
    },
    {
      id: "vow",
      name: "Vow",
      fonts: { display: "Cormorant Garamond", body: "Karla" },
      radius: 24,
      width: 1120,
      spacing: "spacious",
      mode: "light",
      colors: {
        light: c("#FBF7F3", "#3A1420", "#8A1C3A", "#F4E7E0", "#F6EEE8", "#B8862F", "#EAD9CF", "#F7E3C5"),
        dark: c("#1E0C12", "#F6E8E0", "#D45A7A", "#2A121A", "#261018", "#D9AE5C", "#3D1E28", "#4A2A1C")
      }
    },
    {
      id: "estate",
      name: "Estate",
      fonts: { display: "DM Serif Display", body: "DM Sans" },
      radius: 4,
      width: 1280,
      spacing: "comfortable",
      mode: "light",
      colors: {
        light: c("#F7F7F4", "#10231C", "#1F4D3A", "#E8EEE9", "#EEF1EE", "#B8913F", "#D7DED8", "#E5EBD9"),
        dark: c("#0D1612", "#E6EEE9", "#5FB08A", "#142019", "#121C17", "#D4B26A", "#22332A", "#1F3326")
      }
    },
    {
      id: "monsoon",
      name: "Monsoon",
      fonts: { display: "Bricolage Grotesque", body: "Work Sans" },
      radius: 8,
      width: 1120,
      spacing: "comfortable",
      mode: "light",
      colors: {
        light: c("#F5F7F8", "#14232B", "#2E5E7E", "#E4ECF0", "#EDF2F4", "#3FA27C", "#D4DEE3", "#D8EDE4"),
        dark: c("#0E171C", "#E2ECF0", "#6EA7CC", "#14222A", "#121E25", "#5CC59B", "#22333D", "#173A30")
      }
    },
    {
      id: "saffron",
      name: "Saffron",
      fonts: { display: "Syne", body: "DM Sans" },
      radius: 4,
      width: 1120,
      spacing: "compact",
      mode: "light",
      colors: {
        light: c("#FFFFFF", "#1B1A3A", "#E2711D", "#FFF1E6", "#F7F5F2", "#2B2A8C", "#ECE7E1", "#FFE3C8"),
        dark: c("#121126", "#F2F0EA", "#F28B3C", "#1D1B3A", "#191832", "#8C8BFF", "#2C2A4E", "#3A2516")
      }
    }
  ];
  var PRESET_BY = Object.fromEntries(PRESETS.map((p) => [p.id, p]));
  var themeFromPreset = (id) => JSON.parse(JSON.stringify({ ...PRESET_BY[id], presetId: id }));
  function lum(hex) {
    const h = hex.replace("#", "");
    const n2 = h.length === 3 ? h.split("").map((x) => x + x).join("") : h;
    const [r, g, b] = [0, 2, 4].map((i) => parseInt(n2.slice(i, i + 2), 16) / 255).map((v) => v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  var onColor = (hex) => {
    try {
      return lum(hex) > 0.42 ? "#111111" : "#FFFFFF";
    } catch {
      return "#FFFFFF";
    }
  };
  var isHex = (s) => /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(s || "");
  function themeVars(theme, modeOverride) {
    const mode = modeOverride || theme.mode;
    const k = theme.colors[mode] || theme.colors.light;
    const disp = FONT_BY[theme.fonts.display] || FONTS[0];
    return {
      "--s-bg": k.background,
      "--s-fg": k.foreground,
      "--s-primary": k.primary,
      "--s-on-primary": onColor(k.primary),
      "--s-secondary": k.secondary,
      "--s-muted": k.muted,
      "--s-accent": k.accent,
      "--s-on-accent": onColor(k.accent),
      "--s-border": k.border,
      "--s-highlight": k.highlight,
      "--s-muted-fg": `color-mix(in srgb, ${k.foreground} 66%, ${k.background})`,
      "--s-font-display": fontStack(theme.fonts.display),
      "--s-font-body": fontStack(theme.fonts.body),
      "--s-display-weight": disp.w,
      "--s-radius": theme.radius + "px",
      "--s-radius-btn": theme.radius >= 20 ? "999px" : theme.radius + "px",
      "--s-radius-lg": Math.round(theme.radius * 1.4) + "px",
      "--s-width": theme.width + "px",
      "--s-space": (SPACING[theme.spacing] || 88) + "px",
      colorScheme: mode
    };
  }

  // src/templates.js
  var n = 0;
  var S = (type, values, o = {}) => ({ id: o.id || "b" + (++n).toString(36), type, values, hidden: false, anchor: o.anchor || "" });
  var N = (label, link, depth = 0) => ({ id: "n" + (++n).toString(36), label, link, depth });
  var B = (label, link) => ({ label, link });
  var L = {
    page: (pageId) => ({ kind: "page", pageId }),
    sec: (pageId, sectionId) => ({ kind: "section", pageId, sectionId }),
    item: (collection, itemId) => ({ kind: "item", collection, itemId }),
    url: (url) => ({ kind: "url", url, newTab: true }),
    phone: (phone) => ({ kind: "phone", phone }),
    wa: (phone, message) => ({ kind: "whatsapp", phone, message }),
    mail: (email, subject = "") => ({ kind: "email", email, subject }),
    file: (mediaId) => ({ kind: "file", mediaId })
  };
  var page = (id, title, slug, sections, o = {}) => ({
    id,
    title,
    slug,
    parentId: o.parent || null,
    kind: o.kind || "page",
    collection: o.collection || null,
    status: o.status || "live",
    seo: { title: o.seoTitle || "", description: o.seoDesc || "", image: o.seoImage || null },
    sections,
    header: null,
    footer: null
  });
  var notFound = (home = "home") => page("p404", "Page not found", "404", [
    S("hero-bigtype", { eyebrow: "Error 404", title: "This page has moved or no longer exists", body: "Check the address, or start again from the home page.", button: B("Go to the home page", L.page(home)), meta: [], showImage: false })
  ], { kind: "404", seoTitle: "Page not found" });
  var coll = (id, items) => ({ id, name: id === "services" ? "Services" : "Blog", singular: id === "services" ? "Service" : "Post", items: items.map((x) => ({ status: "live", ...x })) });
  var CL_PHONE = "+91 98450 21734";
  var clinic = {
    id: "clinic",
    name: "Clinic",
    business: "Smile Studio Dental",
    industry: "Health",
    style: ["minimal"],
    description: "Calm, trustworthy pages for dental and medical practices: treatments with their own pages, clear fees and easy booking.",
    theme: themeFromPreset("clinic"),
    header: S("header-bar", { logo: "Smile Studio Dental", logoMark: true, showCta: true, cta: B("Book a visit", L.sec("contact", "cl-visit")), sticky: true }, { id: "cl-header" }),
    footer: S("footer-columns", { logo: "Smile Studio Dental", tagline: "Gentle, modern dentistry on 100 Feet Road since 2011.", address: "2nd Floor, 418 100 Feet Road\nIndiranagar, Bengaluru 560038", phone: CL_PHONE, email: "hello@smilestudiodental.in", social: [{ handle: "smilestudio.blr", url: "https://example.com/smilestudio" }], copyright: "\xA9 2026 Smile Studio Dental Care Pvt. Ltd.", dark: false }, { id: "cl-footer" }),
    nav: {
      autoAdd: true,
      header: [N("Home", L.page("home")), N("About", L.page("about")), N("Services", L.page("services")), N("Fees", L.page("fees")), N("Blog", L.page("blog")), N("Contact", L.page("contact"))],
      footer: [
        N("Clinic", L.page("about")),
        N("About us", L.page("about"), 1),
        N("Fees", L.page("fees"), 1),
        N("Contact", L.page("contact"), 1),
        N("Fee schedule (PDF)", L.file("m-file-fees"), 1),
        N("Treatments", L.page("services")),
        N("Teeth whitening", L.item("services", "svc-whitening"), 1),
        N("Root canal treatment", L.item("services", "svc-rct"), 1),
        N("Clear aligners", L.item("services", "svc-aligners"), 1),
        N("Kids\u2019 dentistry", L.item("services", "svc-kids"), 1)
      ]
    },
    pages: [
      page("home", "Home", "", [
        S("hero-split", { eyebrow: "Dental clinic \xB7 Indiranagar", title: "Unhurried dental care for the whole family", body: "From a first check-up for your five-year-old to implants for your parents, our four dentists explain every step before we begin.", primary: B("Book a visit", L.sec("contact", "cl-visit")), secondary: B("See treatments", L.page("services")), image: "m-cl-room", note: "4.9 average from 1,200+ patient reviews", reverse: false }, { id: "cl-hero" }),
        S("features-grid", { eyebrow: "Why patients stay", title: "Care that feels calm, not clinical", intro: "", columns: "3", style: "cards", showImages: false, items: [
          { icon: "clock", title: "On time, every time", text: "Appointments start within 10 minutes of your slot. If we run late, we message you on WhatsApp." },
          { icon: "shield", title: "Sterilised to hospital standards", text: "Class B autoclaves and sealed single-use kits for every patient. We open them in front of you." },
          { icon: "receipt", title: "Fees agreed before treatment", text: "You get a written estimate before we start, and EMI on treatments above \u20B920,000." }
        ] }),
        S("about-story", { eyebrow: "Our story", title: "Started by two sisters who were scared of the dentist as kids", body: "Dr. Ananya and Dr. Kavya Mehta opened Smile Studio in 2011 with one chair and a simple rule: no patient leaves without understanding their treatment.\n\nFifteen years later we have five chairs, an in-house OPG scanner and a play corner for nervous children. The rule has not changed.", image: "m-cl-ananya", stats: [{ value: "15", label: "years in Indiranagar" }, { value: "18,000+", label: "patients treated" }, { value: "4", label: "specialist dentists" }], button: B("Meet the doctors", L.page("about")), imageRight: false, tinted: true }),
        S("testimonials-cards", { eyebrow: "", title: "What our patients say", intro: "", showRating: true, items: [
          { quote: "I put off my root canal for two years out of fear. Dr. Kavya explained it with a model of the tooth and I barely felt a thing.", name: "Rohan Iyer", role: "Patient since 2019", avatar: "m-cl-rohan", rating: 5 },
          { quote: "My daughter now asks when her next visit is. The play corner and the painted ceiling help a lot.", name: "Priya Nair", role: "Parent, HAL 2nd Stage", avatar: "m-cl-priya", rating: 5 },
          { quote: "Clear estimate on day one, and the final bill matched it to the rupee. That alone made me switch clinics.", name: "Suresh Gowda", role: "Patient since 2015", avatar: "m-cl-suresh", rating: 5 }
        ] }),
        S("cta-banner", { title: "Due for a check-up?", text: "A consultation with an X-ray costs \u20B9600 and takes about 30 minutes.", button: B("Book a visit", L.sec("contact", "cl-visit")), secondary: B("WhatsApp us", L.wa(CL_PHONE, "Hi, I would like to book a check-up.")), tone: "primary" }, { id: "cl-home-cta" })
      ], { seoTitle: "Smile Studio Dental \xB7 Dentist in Indiranagar, Bengaluru", seoDesc: "Family dental clinic on 100 Feet Road, Indiranagar. Check-ups, root canals, implants, aligners and kids\u2019 dentistry with fees agreed before treatment.", seoImage: "m-cl-room" }),
      page("about", "About", "about", [
        S("hero-bigtype", { eyebrow: "About us", title: "A neighbourhood clinic with specialist care", body: "Four specialists, five chairs and one rule: you understand your treatment before we begin.", button: { label: "", link: null }, meta: [{ text: "Founded 2011" }, { text: "NABH-compliant sterilisation" }, { text: "Kannada, Hindi, Tamil, Malayalam and English spoken" }], showImage: false, dark: false }),
        S("about-story", { eyebrow: "How we work", title: "Explain first, treat second", body: "Every first visit starts with a conversation and an X-ray, not a drill. We show you what we see on a screen, talk through the options and their costs, and let you decide.\n\n- Written estimates before any treatment\n- A dedicated dentist who follows your case\n- Reminders on WhatsApp, never spam", image: "m-cl-room", stats: [], button: B("Book a visit", L.sec("contact", "cl-visit")), imageRight: true, tinted: false }),
        S("gallery-grid", { eyebrow: "Inside the clinic", title: "Light, quiet and spotless", intro: "", layout: "grid", images: [{ image: "m-cl-lounge", caption: "Waiting lounge" }, { image: "m-cl-room", caption: "Treatment room 2" }, { image: "m-cl-leaves", caption: "Reception" }], tinted: true })
      ], { seoTitle: "About Smile Studio Dental", seoDesc: "Meet the team behind Smile Studio Dental in Indiranagar and see how we work." }),
      page("services", "Services", "services", [
        S("hero-bigtype", { eyebrow: "Treatments", title: "Everything your teeth need, under one roof", body: "Fees shown are starting prices. Your dentist confirms the exact cost in writing after your consultation.", button: B("See all fees", L.page("fees")), meta: [], showImage: false }),
        S("news-list", { eyebrow: "", title: "", intro: "", source: "services", limit: 9, showImages: true, button: { label: "", link: null } })
      ], { kind: "collection", collection: "services", seoTitle: "Dental treatments \xB7 Smile Studio Dental", seoDesc: "Whitening, root canals, implants, clear aligners, kids\u2019 dentistry and cleaning in Indiranagar, Bengaluru." }),
      page("service", "Service page", ":slug", [
        S("entry-detail", { backLabel: "All treatments", showImage: true, button: B("Book a consultation", L.sec("contact", "cl-visit")) }),
        S("cta-banner", { title: "Not sure which treatment you need?", text: "Send us a photo on WhatsApp and a dentist will reply within the day.", button: B("WhatsApp a dentist", L.wa(CL_PHONE, "Hi, I have a question about a treatment.")), secondary: { label: "", link: null }, tone: "soft" })
      ], { parent: "services", kind: "detail", collection: "services" }),
      page("fees", "Fees", "fees", [
        S("hero-bigtype", { eyebrow: "Fees", title: "Clear fees, agreed before we start", body: "Prices include GST. Download the full schedule or ask at the front desk.", button: B("Download fee schedule", L.file("m-file-fees")), meta: [], showImage: false }),
        S("menu-list", { eyebrow: "", title: "Fee schedule", intro: "", items: [
          { group: "Consultation", name: "Consultation with X-ray", price: "\u20B9600", desc: "Adjusted against treatment if you go ahead within 30 days." },
          { group: "Consultation", name: "Emergency visit, same day", price: "\u20B91,000", desc: "" },
          { group: "Cleaning", name: "Scaling and polishing", price: "\u20B91,500", desc: "" },
          { group: "Cleaning", name: "Deep cleaning, per quadrant", price: "\u20B92,500", desc: "" },
          { group: "Treatment", name: "Tooth-coloured filling", price: "from \u20B91,800", desc: "" },
          { group: "Treatment", name: "Root canal treatment", price: "from \u20B96,000", desc: "Crown charged separately." },
          { group: "Treatment", name: "Ceramic crown", price: "from \u20B99,500", desc: "" },
          { group: "Treatment", name: "Dental implant with crown", price: "from \u20B928,000", desc: "" },
          { group: "Cosmetic", name: "Teeth whitening, in clinic", price: "\u20B98,500", desc: "", tag: "Popular" },
          { group: "Cosmetic", name: "Clear aligners, full course", price: "from \u20B965,000", desc: "EMI available." }
        ], note: "Fees last updated 1 October 2026.", tinted: false }, { id: "cl-fee-list" }),
        S("pricing-plans", { eyebrow: "Care plans", title: "Pay once a year, visit without thinking twice", intro: "Plans cover routine visits. Treatments are charged separately at 10\u201315% off.", plans: [
          { name: "Solo", price: "\u20B92,400", period: "/ year", desc: "For one adult.", features: "Two check-ups with cleaning\nOne X-ray\n10% off treatments", featured: false, button: B("Ask about Solo", L.sec("contact", "cl-visit")) },
          { name: "Family of four", price: "\u20B97,800", period: "/ year", desc: "Two adults and two children.", features: "Two check-ups each with cleaning\nFluoride for children\n15% off treatments\nPriority weekend slots", featured: true, flag: "Best value", button: B("Ask about Family", L.sec("contact", "cl-visit")) },
          { name: "Senior", price: "\u20B91,800", period: "/ year", desc: "For anyone over 60.", features: "Two check-ups with cleaning\nDenture adjustments\n15% off treatments", featured: false, button: B("Ask about Senior", L.sec("contact", "cl-visit")) }
        ], tinted: true }),
        S("faq-accordion", { eyebrow: "FAQ", title: "Questions about fees", intro: "Anything else? Call the front desk on " + CL_PHONE + ".", items: [
          { q: "Do you accept insurance?", a: "We offer cashless treatment with most major health insurers. Bring your policy card and we will check your cover before you start." },
          { q: "Can I pay in instalments?", a: "Yes. Treatments above \u20B920,000 can be split into 3, 6 or 9 monthly payments at no extra cost." },
          { q: "Is the first consultation free?", a: "It costs \u20B9600 including an X-ray, and we adjust it against your treatment if you go ahead within 30 days." },
          { q: "What if my treatment costs more than the estimate?", a: "It won\u2019t without your say-so. If we find something new, we stop, explain and give you a revised estimate first." }
        ] }, { anchor: "faq" })
      ], { seoTitle: "Dental fees in Indiranagar \xB7 Smile Studio Dental", seoDesc: "Clear prices for consultations, cleaning, root canals, implants, whitening and aligners, with EMI on larger treatments." }),
      page("blog", "Blog", "blog", [
        S("hero-bigtype", { eyebrow: "Blog", title: "Notes from the chair", body: "Plain-language advice from our dentists, every two weeks.", button: { label: "", link: null }, meta: [], showImage: false }),
        S("news-list", { eyebrow: "", title: "", intro: "", source: "blog", limit: 9, showImages: true, button: { label: "", link: null } })
      ], { kind: "collection", collection: "blog", seoTitle: "Dental advice blog \xB7 Smile Studio Dental", seoDesc: "Plain-language dental advice from the dentists at Smile Studio, Indiranagar." }),
      page("post", "Blog post", ":slug", [
        S("entry-detail", { backLabel: "All posts", showImage: true, button: { label: "", link: null } }),
        S("cta-banner", { title: "Have a question about your teeth?", text: "Book a 30-minute consultation with X-ray for \u20B9600.", button: B("Book a visit", L.sec("contact", "cl-visit")), secondary: { label: "", link: null }, tone: "soft" })
      ], { parent: "blog", kind: "detail", collection: "blog" }),
      page("contact", "Contact", "contact", [
        S("contact-split", { eyebrow: "Visit us", title: "Book a visit", intro: "Call, WhatsApp or send the form. We confirm a slot within two working hours.", address: "2nd Floor, 418 100 Feet Road\nIndiranagar, Bengaluru 560038", phone: CL_PHONE, whatsapp: CL_PHONE, email: "hello@smilestudiodental.in", hours: [{ days: "Monday to Saturday", time: "9:30 am \u2013 8:00 pm" }, { days: "Sunday", time: "10:00 am \u2013 2:00 pm" }], showForm: true, formTitle: "Request a call back", formButton: "Request a call back", formSuccess: "Thanks. We will call you back within two working hours.", showMap: true, map: "m-cl-map" }, { id: "cl-visit", anchor: "visit" }),
        S("faq-accordion", { eyebrow: "", title: "Before your first visit", intro: "", items: [
          { q: "Is there parking?", a: "Two-wheeler parking at the entrance and car parking in the basement (\u20B930 an hour)." },
          { q: "How early should I arrive?", a: "Ten minutes before your slot, so we can fill in your medical history. You can also fill the **new patient form** at home." },
          { q: "Do you treat children?", a: "Yes, from age two. Dr. Lakshmi Rao sees children on weekday afternoons and Saturday mornings." }
        ], tinted: true })
      ], { seoTitle: "Contact Smile Studio Dental, Indiranagar", seoDesc: "Book a dental appointment on 100 Feet Road, Indiranagar. Open Monday to Saturday 9:30 am to 8 pm." }),
      notFound()
    ],
    collections: {
      services: coll("services", [
        { id: "svc-whitening", title: "Teeth whitening", slug: "teeth-whitening", summary: "Brighten your smile by up to eight shades in one 90-minute visit.", price: "\u20B98,500", duration: "90 minutes \xB7 1 visit", image: "m-cl-smile", body: "In-clinic whitening uses a professional gel activated by a cool LED light. We protect your gums first, then apply the gel in three 15-minute rounds.\n\n**Who it suits:** adults with healthy teeth and gums and stains from tea, coffee or age.\n\n- Sensitivity usually settles within 48 hours\n- Results last one to three years\n- A take-home touch-up kit is included" },
        { id: "svc-rct", title: "Root canal treatment", slug: "root-canal-treatment", summary: "Save an infected tooth with a single-sitting rotary root canal under local anaesthesia.", price: "from \u20B96,000", duration: "60\u201390 minutes \xB7 1\u20132 visits", image: "m-cl-room", body: "A root canal removes infected pulp from inside the tooth, cleans the canals and seals them. With rotary instruments and a local anaesthetic, most patients feel no more than a filling.\n\nMost teeth need a crown afterwards to protect them. We quote the crown separately." },
        { id: "svc-implants", title: "Dental implants", slug: "dental-implants", summary: "Replace missing teeth with titanium implants that look, feel and chew like your own.", price: "from \u20B928,000", duration: "2 visits over 3 months", image: "m-cl-leaves", body: "An implant is a small titanium post placed in the jaw. After about three months of healing, we fit a ceramic crown on top.\n\nWe take a 3D scan before we plan, so you see exactly where the implant will go." },
        { id: "svc-aligners", title: "Clear aligners", slug: "clear-aligners", summary: "Straighten your teeth with near-invisible trays you change every two weeks.", price: "from \u20B965,000", duration: "6\u201318 months", image: "m-cl-smile", body: "Aligners are clear trays made from a scan of your teeth. You wear them about 22 hours a day and switch to a new set every two weeks.\n\nDr. Farhan checks progress every six weeks, and EMI is available over 9 months." },
        { id: "svc-kids", title: "Kids\u2019 dentistry", slug: "kids-dentistry", summary: "Gentle check-ups, fluoride and sealants for children from age two.", price: "from \u20B9800", duration: "30 minutes", image: "m-cl-lounge", body: "First visits are mostly about getting comfortable: a ride in the chair, counting teeth and a sticker at the end.\n\nWe recommend a check-up every six months, with fluoride varnish and sealants from age six." },
        { id: "svc-scaling", title: "Scaling and polishing", slug: "scaling-and-polishing", summary: "Remove tartar and stains and check your gums in one 40-minute visit.", price: "\u20B91,500", duration: "40 minutes", image: "m-cl-leaves", body: "An ultrasonic scaler removes hardened tartar that brushing cannot. We finish with a polish and a gum check." }
      ]),
      blog: coll("blog", [
        { id: "post-cleaning", title: "How often should you really get your teeth cleaned?", slug: "how-often-teeth-cleaning", date: "28 Oct 2026", author: "Dr. Lakshmi Rao", excerpt: "Twice a year is the usual advice, but your gums might need more or less. Here is how we decide.", image: "m-cl-leaves", body: "Most adults do well with a cleaning every six months. If you smoke, have diabetes or have had gum disease, every three to four months is safer.\n\nAt each visit we measure the pockets around your teeth. Those numbers, not the calendar, decide your next appointment." },
        { id: "post-whitening", title: "Teeth whitening: what to expect at your first session", slug: "teeth-whitening-first-session", date: "14 Oct 2026", author: "Dr. Ananya Mehta", excerpt: "From the shade check to the sensitivity afterwards, a step-by-step guide to in-clinic whitening.", image: "m-cl-smile", body: "We start by recording your current shade. After protecting your gums, we apply the gel in three short rounds and check the shade again.\n\nAvoid tea, coffee and turmeric-heavy food for 48 hours afterwards." },
        { id: "post-aligners", title: "Clear aligners or braces? A straight comparison for adults", slug: "aligners-or-braces", date: "30 Sep 2026", author: "Dr. Farhan Qureshi", excerpt: "Cost, comfort, speed and discipline: how the two options compare for working adults.", image: "m-cl-room", body: "Braces work for every case and need no discipline from you. Aligners are nearly invisible and removable, but only work if you wear them 22 hours a day." },
        { id: "post-kids", title: "Five habits that protect your child\u2019s teeth", slug: "five-habits-childrens-teeth", date: "12 Sep 2026", author: "Dr. Lakshmi Rao", excerpt: "Small things at home that save big treatments later, from bedtime milk to the first toothbrush.", image: "m-cl-lounge", body: "- Brush twice a day with a rice-grain of fluoride toothpaste\n- No milk bottle in bed after the first teeth appear\n- Swap sticky sweets for fruit at snack time\n- Visit a dentist by the first birthday\n- Let them brush first, then you finish" }
      ])
    }
  };
  var EM_PHONE = "+91 80412 77819";
  var ember = {
    id: "ember",
    name: "Ember",
    business: "Kaapi Katte",
    industry: "Food & drink",
    style: ["editorial"],
    description: "Warm, photo-led pages for caf\xE9s, bakeries and restaurants, with a menu that reads like the one on your counter.",
    theme: themeFromPreset("ember"),
    header: S("header-centered", { topline: "Open daily 7:30 am \u2013 10:30 pm \xB7 41 DVG Road, Basavanagudi", logo: "Kaapi Katte", sticky: false }, { id: "em-header" }),
    footer: S("footer-simple", { logo: "Kaapi Katte", tagline: "Roasted in Bengaluru every Thursday.", copyright: "\xA9 2026 Kaapi Katte" }, { id: "em-footer" }),
    nav: {
      autoAdd: true,
      header: [N("Home", L.page("home")), N("Menu", L.page("menu")), N("Our story", L.page("story")), N("Gallery", L.page("gallery")), N("Visit", L.page("visit"))],
      footer: [N("Menu", L.page("menu")), N("Our story", L.page("story")), N("Visit", L.page("visit")), N("Menu (PDF)", L.file("m-file-menu"))]
    },
    pages: [
      page("home", "Home", "", [
        S("hero-slides", { slides: [
          { image: "m-ember-filter", title: "Filter coffee, the slow way", caption: "Decoction brewed every 40 minutes from beans we roast on Thursdays." },
          { image: "m-ember-latte", title: "And the new way too", caption: "Pour-overs and flat whites from single estates in Chikmagalur and Coorg." },
          { image: "m-ember-buns", title: "Baked here at 5 am", caption: "Butter croissants, ragi banana bread and our cardamom buns." }
        ], button: B("See the menu", L.page("menu")) }),
        S("about-story", { eyebrow: "Since 2017", title: "A katte for the neighbourhood", body: "A katte is the raised platform under a banyan tree where Bengaluru used to sit, argue and drink coffee. We built one indoors, with long tables, slow coffee and no rush to leave.", image: "m-ember-interior", stats: [{ value: "2017", label: "opened on DVG Road" }, { value: "6", label: "estates we buy from" }, { value: "\u20B940", label: "a by-two filter coffee" }], button: B("Read our story", L.page("story")), imageRight: true, tinted: false }),
        S("menu-list", { eyebrow: "Popular right now", title: "What the regulars order", intro: "", items: [
          { group: "", name: "Filter coffee", price: "\u20B960", desc: "Brass-brewed decoction, full-cream milk.", tag: "Bestseller" },
          { group: "", name: "Cold brew tonic", price: "\u20B9220", desc: "18-hour Coorg cold brew over tonic and orange peel." },
          { group: "", name: "Cardamom bun", price: "\u20B9120", desc: "Laminated dough, Idukki cardamom, pearl sugar." },
          { group: "", name: "Masala omelette toast", price: "\u20B9180", desc: "On house sourdough with coriander chutney." }
        ], note: "", tinted: true }),
        S("testimonial-quote", { quote: "The only place in Bengaluru where the filter coffee tastes like my grandmother\u2019s and the croissant tastes like Paris.", name: "Meera Krishnan", role: "Regular since 2018", avatar: "m-ember-guest", dark: true }),
        S("cta-banner", { title: "Hosting a small gathering?", text: "Book the back room for up to 20 people on weekdays after 3 pm.", button: B("Plan an event", L.sec("visit", "em-visit")), secondary: { label: "", link: null }, tone: "primary" })
      ], { seoTitle: "Kaapi Katte \xB7 Filter coffee and bakes in Basavanagudi", seoDesc: "Filter coffee, single-estate pour-overs and fresh bakes on DVG Road, Basavanagudi. Open daily 7:30 am to 10:30 pm.", seoImage: "m-ember-filter" }),
      page("menu", "Menu", "menu", [
        S("hero-bigtype", { eyebrow: "Menu", title: "Coffee, bakes and a few good plates", body: "Prices include GST. Oat or almond milk on request for \u20B940.", button: B("Download the menu", L.file("m-file-menu")), meta: [], showImage: false }),
        S("menu-list", { eyebrow: "", title: "", intro: "", items: [
          { group: "Coffee", name: "Filter coffee", price: "\u20B960", desc: "", tag: "Bestseller" },
          { group: "Coffee", name: "Cappuccino", price: "\u20B9180" },
          { group: "Coffee", name: "Flat white", price: "\u20B9200" },
          { group: "Coffee", name: "Pour-over, today\u2019s estate", price: "\u20B9240" },
          { group: "Coffee", name: "Cold brew", price: "\u20B9200" },
          { group: "Not coffee", name: "Masala chai", price: "\u20B970" },
          { group: "Not coffee", name: "Hot chocolate", price: "\u20B9190" },
          { group: "Not coffee", name: "Kokum soda", price: "\u20B9120" },
          { group: "Bakes", name: "Butter croissant", price: "\u20B9150" },
          { group: "Bakes", name: "Cardamom bun", price: "\u20B9120" },
          { group: "Bakes", name: "Ragi banana bread", price: "\u20B9140" },
          { group: "Bakes", name: "Almond biscotti, three", price: "\u20B9110" },
          { group: "Plates", name: "Masala omelette toast", price: "\u20B9180" },
          { group: "Plates", name: "Akki roti with chutney", price: "\u20B9160", tag: "Vegan" },
          { group: "Plates", name: "Mushrooms on sourdough", price: "\u20B9260" }
        ], note: "Ask us about allergens. Our kitchen handles nuts, gluten and dairy.", tinted: false }),
        S("cta-banner", { title: "Beans to take home", text: "250 g bags of our house blend, ground for filter or espresso, \u20B9450.", button: B("Ask at the counter", L.page("visit")), secondary: { label: "", link: null }, tone: "soft" })
      ], { seoTitle: "Menu \xB7 Kaapi Katte", seoDesc: "Filter coffee from \u20B940, pour-overs, fresh bakes and all-day plates in Basavanagudi." }),
      page("story", "Our story", "our-story", [
        S("about-story", { eyebrow: "Our story", title: "Two cousins, one roaster and a lot of decoction", body: "Arjun learned to roast in Chikmagalur. Divya ran a bakery in Pune. In 2017 they opened Kaapi Katte on the ground floor of their grandfather\u2019s house on DVG Road.\n\nThe brass filters on the counter are his. So is the rule that nobody is asked to leave.", image: "m-ember-barista", stats: [], button: { label: "", link: null }, imageRight: false, tinted: false }),
        S("features-grid", { eyebrow: "How we work", title: "From the estate to your tumbler", intro: "", columns: "3", style: "plain", showImages: false, items: [
          { icon: "leaf", title: "Bought direct", text: "We buy from six estates in Chikmagalur and Coorg and pay above fair-trade prices." },
          { icon: "flame", title: "Roasted every Thursday", text: "Small batches on a 5 kg roaster, so no bean on the shelf is more than a week old." },
          { icon: "cup", title: "Brewed to order", text: "Fresh decoction every 40 minutes. Espresso dialled in twice a day." }
        ], tinted: true })
      ], { seoTitle: "Our story \xB7 Kaapi Katte", seoDesc: "How two cousins turned their grandfather\u2019s house in Basavanagudi into a coffee house." }),
      page("gallery", "Gallery", "gallery", [
        S("gallery-grid", { eyebrow: "Gallery", title: "A morning at the katte", intro: "", layout: "mosaic", images: [
          { image: "m-ember-interior", caption: "The counter at 8 am" },
          { image: "m-ember-filter", caption: "Filter coffee, by-two" },
          { image: "m-ember-buns", caption: "Cardamom buns" },
          { image: "m-ember-latte", caption: "Flat white" },
          { image: "m-ember-beans", caption: "Thursday roast" },
          { image: "m-ember-garden", caption: "Courtyard seating" }
        ] })
      ], { seoTitle: "Gallery \xB7 Kaapi Katte", seoDesc: "Photos from Kaapi Katte in Basavanagudi." }),
      page("visit", "Visit", "visit", [
        S("contact-split", { eyebrow: "Visit", title: "Come for a coffee, stay for a while", intro: "No reservations for tables. For the back room, send us a note.", address: "41 DVG Road, Basavanagudi\nBengaluru 560004", phone: EM_PHONE, whatsapp: "+91 99001 44721", email: "hello@kaapikatte.in", hours: [{ days: "Every day", time: "7:30 am \u2013 10:30 pm" }], showForm: true, formTitle: "Book the back room", formButton: "Send request", formSuccess: "Thanks. We will confirm your booking on WhatsApp.", showMap: false, map: null }, { id: "em-visit", anchor: "visit" }),
        S("faq-accordion", { eyebrow: "", title: "Good to know", intro: "", items: [
          { q: "Is there Wi-Fi?", a: "Yes, and plug points at the long table. We ask laptop users to give up window seats at lunch." },
          { q: "Are pets welcome?", a: "Dogs are welcome in the courtyard. We keep a water bowl by the door." },
          { q: "Do you deliver?", a: "Bakes and beans, yes, within 4 km. Coffee tastes best here." }
        ], tinted: true })
      ], { seoTitle: "Visit Kaapi Katte, Basavanagudi", seoDesc: "Find us at 41 DVG Road, Basavanagudi. Open every day from 7:30 am." }),
      notFound()
    ],
    collections: {
      services: coll("services", [
        { id: "em-svc-room", title: "Back room bookings", slug: "back-room", summary: "A private room for up to 20 people with coffee and bakes.", price: "from \u20B96,000", duration: "3 hours", image: "m-ember-interior", body: "Ideal for book clubs, birthdays and team mornings. Includes a filter coffee bar and a platter of bakes." },
        { id: "em-svc-class", title: "Home brewing class", slug: "home-brewing-class", summary: "Learn filter, pour-over and French press in one Saturday morning.", price: "\u20B91,800", duration: "2 hours", image: "m-ember-latte", body: "Six people per class. You take home 250 g of beans." }
      ]),
      blog: coll("blog", [
        { id: "em-post-1", title: "Meet our new single estate from Baba Budangiri", slug: "baba-budangiri", date: "2 Nov 2026", author: "Arjun", excerpt: "Washed arabica with notes of jaggery and orange.", image: "m-ember-beans", body: "Grown at 1,400 metres in shade, picked by hand and washed at the estate." },
        { id: "em-post-2", title: "Why we still brew decoction in brass", slug: "brass-filters", date: "18 Oct 2026", author: "Divya", excerpt: "Steel is easier to clean. Brass tastes better.", image: "m-ember-filter", body: "Brass holds heat longer, so the decoction drips slowly and evenly." }
      ])
    }
  };
  var midnight = {
    id: "midnight",
    name: "Midnight",
    business: "Loomwork Labs",
    industry: "Tech",
    style: ["dark", "big-type"],
    description: "A dark, confident theme for software studios, SaaS and agencies, with case studies, plans and a blog.",
    theme: themeFromPreset("midnight"),
    header: S("header-bar", { logo: "Loomwork Labs", logoMark: true, showCta: true, cta: B("Start a project", L.page("contact")), sticky: true }, { id: "mi-header" }),
    footer: S("footer-columns", { logo: "Loomwork Labs", tagline: "Product engineering studio in Pune. We build and scale web and mobile products.", address: "7th Floor, Panchshil Tech Park\nYerwada, Pune 411006", phone: "+91 20 4860 1150", email: "hello@loomwork.dev", social: [{ handle: "loomworklabs", url: "https://example.com/loomwork" }], copyright: "\xA9 2026 Loomwork Labs LLP", dark: false }, { id: "mi-footer" }),
    nav: {
      autoAdd: true,
      header: [N("Services", L.page("services")), N("Work", L.page("work")), N("Plans", L.page("plans")), N("Blog", L.page("blog")), N("Contact", L.page("contact"))],
      footer: [N("Studio", L.page("home")), N("Work", L.page("work"), 1), N("Plans", L.page("plans"), 1), N("Contact", L.page("contact"), 1), N("Read", L.page("blog")), N("Blog", L.page("blog"), 1)]
    },
    pages: [
      page("home", "Home", "", [
        S("hero-bigtype", { eyebrow: "Product engineering studio \xB7 Pune", title: "We build software that survives its first million users", body: "Loomwork is 22 engineers and designers. We take products from first sketch to app store, then stay to scale them.", button: B("Start a project", L.page("contact")), meta: [{ text: "Founded 2016" }, { text: "60+ products shipped" }, { text: "Clients in 9 countries" }], showImage: true, image: "m-mid-glow" }),
        S("features-grid", { eyebrow: "What we do", title: "One team from idea to scale", intro: "", columns: "3", style: "plain", showImages: false, items: [
          { icon: "code", title: "Web platforms", text: "React and Node apps built to handle sale-day traffic without a war room." },
          { icon: "mobile", title: "Mobile apps", text: "Android and iOS apps from one codebase, tuned for \u20B910,000 phones." },
          { icon: "sparkle", title: "AI features", text: "Search, support assistants and document reading inside the product you already have." },
          { icon: "shield", title: "Security reviews", text: "Threat models, penetration tests and fixes before your enterprise customers ask." },
          { icon: "chart", title: "Data and analytics", text: "Event tracking and dashboards your founders will actually open." },
          { icon: "layers", title: "Design systems", text: "Component libraries that keep five product teams looking like one." }
        ] }),
        S("testimonials-cards", { eyebrow: "", title: "From the people we build with", intro: "", showRating: false, items: [
          { quote: "Loomwork rebuilt our checkout in six weeks. Drop-off at payment fell from 31% to 12%.", name: "Nikhil B.", role: "CTO, D2C apparel brand", avatar: "m-mid-p1", rating: 5 },
          { quote: "They told us what not to build, which saved us four months and a lot of money.", name: "Aarti D.", role: "Founder, logistics startup", avatar: "m-mid-p2", rating: 5 },
          { quote: "Our app now opens in under two seconds on a three-year-old phone.", name: "Sameer K.", role: "Head of Product, fintech lender", avatar: "m-mid-p3", rating: 5 }
        ] }),
        S("news-list", { eyebrow: "Blog", title: "Notes from the build", intro: "", source: "blog", limit: 3, showImages: true, button: B("All posts", L.page("blog")) }),
        S("cta-banner", { title: "Have a product in mind?", text: "Tell us about it in a 30-minute call. No slides needed.", button: B("Book a call", L.page("contact")), secondary: { label: "", link: null }, tone: "primary" })
      ], { seoTitle: "Loomwork Labs \xB7 Product engineering studio in Pune", seoDesc: "Web, mobile and AI products built and scaled by a 22-person studio in Pune." }),
      page("services", "Services", "services", [
        S("hero-bigtype", { eyebrow: "Services", title: "What we can build with you", body: "Fixed-scope sprints or a dedicated team. Every engagement starts with a two-week discovery.", button: { label: "", link: null }, meta: [], showImage: false }),
        S("news-list", { eyebrow: "", title: "", intro: "", source: "services", limit: 6, showImages: true, button: { label: "", link: null } })
      ], { kind: "collection", collection: "services", seoTitle: "Services \xB7 Loomwork Labs", seoDesc: "Web platforms, mobile apps and AI features." }),
      page("service", "Service page", ":slug", [
        S("entry-detail", { backLabel: "All services", showImage: true, button: B("Talk to us", L.page("contact")) })
      ], { parent: "services", kind: "detail", collection: "services" }),
      page("work", "Work", "work", [
        S("hero-bigtype", { eyebrow: "Work", title: "Selected work", body: "Most of our clients ask us not to name them. The numbers are real.", button: { label: "", link: null }, meta: [], showImage: false }),
        S("gallery-grid", { eyebrow: "", title: "", intro: "", layout: "grid", images: [{ image: "m-mid-screen2", caption: "Checkout rebuild for a D2C fashion brand \xB7 payment drop-off down 61%" }, { image: "m-mid-screen", caption: "Store analytics for a 140-outlet retailer" }, { image: "m-mid-screen3", caption: "Loan app for a Tier-2 lender \xB7 4.6 rating" }] }),
        S("testimonial-quote", { quote: "They shipped faster than our in-house team and left the code better than they found it.", name: "Nikhil B.", role: "CTO, D2C apparel brand", avatar: "m-mid-p1", dark: false })
      ], { seoTitle: "Work \xB7 Loomwork Labs", seoDesc: "Case studies from web, mobile and AI projects." }),
      page("plans", "Plans", "plans", [
        S("pricing-plans", { eyebrow: "Plans", title: "Ways to work with us", intro: "All prices exclude GST. Every plan includes code ownership from day one.", plans: [
          { name: "Sprint", price: "\u20B94.5 lakh", period: "/ 4 weeks", desc: "A fixed-scope build or rescue.", features: "Two engineers and a designer\nWeekly demos\nTwo weeks of support after launch", featured: false, button: B("Plan a sprint", L.page("contact")) },
          { name: "Product team", price: "\u20B99.8 lakh", period: "/ month", desc: "A dedicated team for new products.", features: "Four engineers, a designer and a PM\nDaily stand-ups on your Slack\nCancel with 30 days\u2019 notice", featured: true, button: B("Talk to us", L.page("contact")) },
          { name: "Retainer", price: "\u20B92.2 lakh", period: "/ month", desc: "Keep a live product healthy.", features: "60 engineering hours\nOn-call for outages\nMonthly security patching", featured: false, button: B("Ask about retainers", L.page("contact")) }
        ] }),
        S("faq-accordion", { eyebrow: "", title: "Common questions", intro: "", items: [{ q: "Do you sign NDAs?", a: "Yes, before the first call if you like." }, { q: "Who owns the code?", a: "You do, from the first commit. It lives in your repository." }] })
      ], { seoTitle: "Plans \xB7 Loomwork Labs", seoDesc: "Sprints, dedicated teams and retainers." }),
      page("blog", "Blog", "blog", [
        S("hero-bigtype", { eyebrow: "Blog", title: "Notes from the build", body: "What we learn shipping products for Indian users.", button: { label: "", link: null }, meta: [], showImage: false }),
        S("news-list", { eyebrow: "", title: "", intro: "", source: "blog", limit: 9, showImages: true, button: { label: "", link: null } })
      ], { kind: "collection", collection: "blog", seoTitle: "Blog \xB7 Loomwork Labs", seoDesc: "Engineering notes from Loomwork Labs." }),
      page("post", "Blog post", ":slug", [S("entry-detail", { backLabel: "All posts", showImage: true, button: { label: "", link: null } })], { parent: "blog", kind: "detail", collection: "blog" }),
      page("contact", "Contact", "contact", [
        S("contact-split", { eyebrow: "Contact", title: "Tell us what you\u2019re building", intro: "We reply within one working day.", address: "7th Floor, Panchshil Tech Park\nYerwada, Pune 411006", phone: "+91 20 4860 1150", whatsapp: "", email: "hello@loomwork.dev", hours: [], showForm: true, formTitle: "Project enquiry", formButton: "Send enquiry", formSuccess: "Thanks. A founder will reply within one working day.", showMap: false, map: null }, { anchor: "contact" })
      ], { seoTitle: "Contact \xB7 Loomwork Labs", seoDesc: "Start a project with Loomwork Labs." }),
      notFound()
    ],
    collections: {
      services: coll("services", [
        { id: "mi-svc-web", title: "Web platforms", slug: "web-platforms", summary: "React and Node apps built for sale-day traffic.", price: "from \u20B94.5 lakh", duration: "4\u201312 weeks", image: "m-mid-screen", body: "We design, build and load-test web platforms, then hand over runbooks your team can follow." },
        { id: "mi-svc-mobile", title: "Mobile apps", slug: "mobile-apps", summary: "One codebase for Android and iOS, fast on budget phones.", price: "from \u20B96 lakh", duration: "8\u201316 weeks", image: "m-mid-screen3", body: "We profile on real devices from \u20B98,000 upwards before every release." },
        { id: "mi-svc-ai", title: "AI features", slug: "ai-features", summary: "Search, support assistants and document reading in your product.", price: "from \u20B93 lakh", duration: "3\u20136 weeks", image: "m-mid-glow", body: "We start with an evaluation set from your real data, so you know how well it works before launch." }
      ]),
      blog: coll("blog", [
        { id: "mi-post-1", title: "How we cut app start time by 60% on low-end Android", slug: "faster-app-start", date: "21 Oct 2026", author: "Sameer K.", excerpt: "Lazy modules, smaller images and one surprising font bug.", image: "m-mid-screen3", body: "Cold start went from 4.8 s to 1.9 s on a 2023 budget phone." },
        { id: "mi-post-2", title: "UPI Autopay: what we learned shipping it for a subscription app", slug: "upi-autopay-lessons", date: "6 Oct 2026", author: "Aarti D.", excerpt: "Mandates, retries and the notification you must not forget.", image: "m-mid-screen2", body: "Plan for mandate failures from day one. About 8% of first attempts fail." },
        { id: "mi-post-3", title: "Choosing a cross-platform framework in 2026", slug: "cross-platform-2026", date: "19 Sep 2026", author: "Nikhil B.", excerpt: "Our checklist after 30 mobile projects.", image: "m-mid-glow", body: "Pick the one your team can debug at 2 am." }
      ])
    }
  };
  var atelier = {
    id: "atelier",
    name: "Atelier",
    business: "Studio Aangan",
    industry: "Architecture",
    style: ["minimal", "editorial", "big-type"],
    description: "Quiet, image-first pages for architects, interior designers and design studios. A journal is included.",
    theme: themeFromPreset("atelier"),
    header: S("header-bar", { logo: "Studio Aangan", logoMark: false, showCta: false, cta: B("Contact", L.page("contact")), sticky: false }, { id: "at-header" }),
    footer: S("footer-simple", { logo: "Studio Aangan", tagline: "Architecture for hot climates.", copyright: "\xA9 2026 Studio Aangan Architects" }, { id: "at-footer" }),
    nav: {
      autoAdd: false,
      header: [N("Projects", L.page("projects")), N("Studio", L.page("studio")), N("Journal", L.page("journal")), N("Contact", L.page("contact"))],
      footer: [N("Projects", L.page("projects")), N("Studio", L.page("studio")), N("Journal", L.page("journal")), N("Contact", L.page("contact"))]
    },
    pages: [
      page("home", "Home", "", [
        S("hero-bigtype", { eyebrow: "", title: "Buildings that breathe with the Gujarat sun", body: "Studio Aangan designs homes, schools and workplaces that stay cool without leaning on air-conditioning.", button: B("View projects", L.page("projects")), meta: [{ text: "Ahmedabad" }, { text: "Since 2009" }, { text: "40+ buildings" }], showImage: true, image: "m-at-facade" }),
        S("gallery-grid", { eyebrow: "Selected projects", title: "", intro: "", layout: "mosaic", images: [
          { image: "m-at-court", caption: "Courtyard Flats, Vadodara \xB7 2023" },
          { image: "m-at-arches", caption: "Kutch Craft School, Bhuj \xB7 2024" },
          { image: "m-at-stairs", caption: "Step-well Office, Gandhinagar \xB7 2022" },
          { image: "m-at-interior", caption: "Sabarmati House, Ahmedabad \xB7 2025" },
          { image: "m-at-plan", caption: "Courtyard Flats, ground floor" }
        ] }),
        S("about-story", { eyebrow: "The studio", title: "A practice of twelve", body: "We are architects, a structural engineer and two master masons. We draw by hand first, test light and airflow in models, and build with local brick, lime and stone.", image: "m-at-plan", stats: [{ value: "40+", label: "buildings completed" }, { value: "12", label: "architects and makers" }, { value: "6\xB0C", label: "cooler indoors, on average" }], button: B("About the studio", L.page("studio")), imageRight: true, tinted: false }),
        S("testimonial-quote", { quote: "They spent our first meeting asking where the morning light falls on our plot. Two summers in, we rarely switch on the AC.", name: "Hetal and Kiran Shah", role: "Sabarmati House", avatar: "", dark: true }),
        S("news-list", { eyebrow: "Journal", title: "Writing from the studio", intro: "", source: "blog", limit: 3, showImages: true, button: B("Read the journal", L.page("journal")) })
      ], { seoTitle: "Studio Aangan \xB7 Architects in Ahmedabad", seoDesc: "Climate-first architecture for homes, schools and workplaces in Gujarat." }),
      page("projects", "Projects", "projects", [
        S("hero-bigtype", { eyebrow: "Projects", title: "Work, 2009 to now", body: "Homes, schools, offices and one step-well restoration.", button: { label: "", link: null }, meta: [], showImage: false }),
        S("gallery-grid", { eyebrow: "", title: "", intro: "", layout: "grid", images: [
          { image: "m-at-facade", caption: "Sabarmati House \xB7 Ahmedabad \xB7 Residential" },
          { image: "m-at-arches", caption: "Kutch Craft School \xB7 Bhuj \xB7 Institutional" },
          { image: "m-at-court", caption: "Courtyard Flats \xB7 Vadodara \xB7 Housing" },
          { image: "m-at-stairs", caption: "Step-well Office \xB7 Gandhinagar \xB7 Workplace" },
          { image: "m-at-interior", caption: "Jaali Apartment \xB7 Surat \xB7 Interiors" },
          { image: "m-at-plan", caption: "Lime House \xB7 Bhavnagar \xB7 Residential" }
        ] })
      ], { seoTitle: "Projects \xB7 Studio Aangan", seoDesc: "Homes, schools and workplaces by Studio Aangan." }),
      page("studio", "Studio", "studio", [
        S("about-story", { eyebrow: "Studio", title: "Climate first, then everything else", body: "Every project begins with a year of sun and wind data for the site. Plans, sections and materials follow from there.", image: "m-at-arches", stats: [], button: { label: "", link: null }, imageRight: false, tinted: false }),
        S("features-grid", { eyebrow: "Principles", title: "", intro: "", columns: "3", style: "plain", showImages: false, items: [
          { icon: "sun", title: "Shade before glass", text: "Deep verandahs, jaalis and courtyards do the work that machines usually do." },
          { icon: "hand", title: "Local hands", text: "Masons, carpenters and lime plasterers from within 200 km of each site." },
          { icon: "leaf", title: "Materials that age well", text: "Brick, lime and stone that look better in twenty years than on opening day." }
        ] }),
        S("features-grid", { eyebrow: "Principals", title: "", intro: "", columns: "2", style: "plain", showImages: true, items: [
          { image: "m-at-p1", title: "Ar. Devika Patel", meta: "Founding principal", text: "CEPT graduate. Fifteen years on climate-responsive housing." },
          { image: "m-at-p2", title: "Ar. Ishaan Trivedi", meta: "Principal", text: "Leads institutional work and our step-well restoration." }
        ], tinted: true })
      ], { seoTitle: "Studio \xB7 Studio Aangan", seoDesc: "Who we are and how we design." }),
      page("journal", "Journal", "journal", [
        S("hero-bigtype", { eyebrow: "Journal", title: "Notes on heat, light and lime", body: "", button: { label: "", link: null }, meta: [], showImage: false }),
        S("news-list", { eyebrow: "", title: "", intro: "", source: "blog", limit: 9, showImages: true, button: { label: "", link: null } })
      ], { kind: "collection", collection: "blog", seoTitle: "Journal \xB7 Studio Aangan", seoDesc: "Writing from Studio Aangan." }),
      page("post", "Journal entry", ":slug", [S("entry-detail", { backLabel: "Journal", showImage: true, button: { label: "", link: null } })], { parent: "journal", kind: "detail", collection: "blog" }),
      page("contact", "Contact", "contact", [
        S("contact-split", { eyebrow: "Contact", title: "Tell us about your site", intro: "We take on six new projects a year. Send us the location, size and what you hope to build.", address: "14 Law Garden Road, Ellisbridge\nAhmedabad 380006", phone: "+91 79 2640 3318", whatsapp: "", email: "studio@aangan.in", hours: [{ days: "Monday to Friday", time: "10:00 am \u2013 6:30 pm" }], showForm: true, formTitle: "New project", formButton: "Send", formSuccess: "Thank you. We reply to every enquiry within a week.", showMap: false, map: null }, { anchor: "contact" })
      ], { seoTitle: "Contact \xB7 Studio Aangan", seoDesc: "Start a project with Studio Aangan, Ahmedabad." }),
      notFound()
    ],
    collections: {
      services: coll("services", [
        { id: "at-svc-res", title: "Residential", slug: "residential", summary: "Homes and housing designed around courtyards and shade.", price: "Fee: 8\u201310% of build cost", duration: "18\u201330 months", image: "m-at-facade", body: "From a single house to 40-unit housing." },
        { id: "at-svc-int", title: "Interiors", slug: "interiors", summary: "Interiors in brick, lime and wood, built by local craftspeople.", price: "Fee: from \u20B92,500 / sq m", duration: "6\u201312 months", image: "m-at-interior", body: "We design furniture with the same makers who build it." }
      ]),
      blog: coll("blog", [
        { id: "at-post-1", title: "Why we keep returning to jaali walls", slug: "jaali-walls", date: "24 Oct 2026", author: "Devika Patel", excerpt: "A screen that shades, ventilates and keeps privacy, all at once.", image: "m-at-interior", body: "A well-sized jaali cuts direct sun by 70% and still lets the breeze through." },
        { id: "at-post-2", title: "Measuring a summer at Sabarmati House", slug: "measuring-a-summer", date: "3 Oct 2026", author: "Ishaan Trivedi", excerpt: "What 14 temperature sensors recorded from April to June.", image: "m-at-facade", body: "Indoor peaks stayed 6.2\xB0C below outdoor peaks across the season." },
        { id: "at-post-3", title: "Working with lime plaster in a modern home", slug: "lime-plaster", date: "11 Sep 2026", author: "Devika Patel", excerpt: "Slower to cure, kinder to live with.", image: "m-at-arches", body: "Lime breathes, so walls stay dry through the monsoon." }
      ])
    }
  };
  var VW_PHONE = "+91 94140 63327";
  var vow = {
    id: "vow",
    name: "Vow",
    business: "Marigold & Mehendi Weddings",
    industry: "Weddings",
    style: ["editorial"],
    description: "Romantic, photo-rich pages for wedding planners, photographers and venues, with packages and an enquiry form.",
    theme: themeFromPreset("vow"),
    header: S("header-centered", { topline: "Now booking winter 2026\u201327 weddings in Jaipur, Udaipur and Jodhpur", logo: "Marigold & Mehendi", sticky: false }, { id: "vw-header" }),
    footer: S("footer-columns", { logo: "Marigold & Mehendi", tagline: "Wedding planning and d\xE9cor across Rajasthan since 2014.", address: "C-22 Bhawani Singh Road, C-Scheme\nJaipur 302001", phone: VW_PHONE, email: "namaste@marigoldmehendi.in", social: [{ handle: "marigoldmehendi", url: "https://example.com/marigold" }], copyright: "\xA9 2026 Marigold & Mehendi Weddings", dark: true }, { id: "vw-footer" }),
    nav: {
      autoAdd: true,
      header: [N("Our story", L.page("story")), N("Packages", L.page("packages")), N("Weddings", L.page("weddings")), N("Enquire", L.page("enquire"))],
      footer: [N("Plan", L.page("packages")), N("Packages", L.page("packages"), 1), N("Enquire", L.page("enquire"), 1), N("See", L.page("weddings")), N("Weddings", L.page("weddings"), 1), N("Our story", L.page("story"), 1)]
    },
    pages: [
      page("home", "Home", "", [
        S("hero-slides", { slides: [
          { image: "m-vow-mandap", title: "Weddings that feel like your family", caption: "Planned in Jaipur, celebrated across Rajasthan." },
          { image: "m-vow-marigold", title: "From the first haldi to the vidaai", caption: "One team from start to finish, so no relative ends up managing the caterer." },
          { image: "m-vow-diyas", title: "Small, warm and entirely yours", caption: "Intimate weddings for 50 to 300 guests." }
        ], button: B("Plan your wedding", L.page("enquire")) }),
        S("features-grid", { eyebrow: "What we do", title: "Everything between \u201Cyes\u201D and the vidaai", intro: "", columns: "3", style: "cards", showImages: false, items: [
          { icon: "heart", title: "Planning", text: "Venues, vendors, budgets and a minute-by-minute plan for every function." },
          { icon: "flower", title: "D\xE9cor and florals", text: "Marigold, rajnigandha and mogra sourced fresh from Pushkar the morning of." },
          { icon: "camera", title: "Photos and films", text: "Two photographers and a filmmaker who know when to step back." }
        ] }),
        S("gallery-grid", { eyebrow: "", title: "Recent weddings", intro: "", layout: "strip", images: [{ image: "m-vow-arches", caption: "Haveli courtyard, Jaipur" }, { image: "m-vow-rings", caption: "Ring ceremony" }, { image: "m-vow-marigold", caption: "Haldi" }, { image: "m-vow-diyas", caption: "Sangeet night" }], tinted: true }),
        S("testimonials-cards", { eyebrow: "", title: "From our couples", intro: "", showRating: false, items: [
          { quote: "They handled 240 guests, two baraats and a surprise storm. We only heard about the storm afterwards.", name: "Aditi and Karan", role: "Jaipur, November 2025", avatar: "m-vow-p1", rating: 5 },
          { quote: "My mother cried at the d\xE9cor and my father cried at the bill being under budget.", name: "Ritika and Arjun", role: "Udaipur, February 2026", avatar: "m-vow-p2", rating: 5 }
        ] }),
        S("cta-banner", { title: "Tell us your date", text: "We plan 24 weddings a season so every couple gets a senior planner.", button: B("Check availability", L.page("enquire")), secondary: B("WhatsApp us", L.wa(VW_PHONE, "Hi, we are planning a wedding.")), tone: "primary" })
      ], { seoTitle: "Marigold & Mehendi \xB7 Wedding planners in Jaipur", seoDesc: "Wedding planning, d\xE9cor and photography across Rajasthan." }),
      page("story", "Our story", "our-story", [
        S("about-story", { eyebrow: "Our story", title: "Started at a cousin\u2019s wedding that nearly fell apart", body: "In 2014 Nandini Rathore stepped in when her cousin\u2019s planner vanished two days before the wedding. It went beautifully. Eighty weddings later, she still plans every one personally.", image: "m-vow-p1", stats: [{ value: "80+", label: "weddings planned" }, { value: "24", label: "weddings per season" }, { value: "9", label: "people on the team" }], button: { label: "", link: null }, imageRight: false, tinted: false }),
        S("testimonial-quote", { quote: "Nandini knew our families\u2019 names before we did.", name: "Aditi and Karan", role: "Jaipur, 2025", avatar: "m-vow-p2", dark: true })
      ], { seoTitle: "Our story \xB7 Marigold & Mehendi", seoDesc: "How a family wedding became a planning studio." }),
      page("packages", "Packages", "packages", [
        S("pricing-plans", { eyebrow: "Packages", title: "Choose how much you want us to carry", intro: "Prices are planning fees. Venue, catering and d\xE9cor are billed at cost.", plans: [
          { name: "Day-of coordination", price: "\u20B91.8 lakh", period: "", desc: "You plan; we run the day.", features: "Three planning calls\nFull team on the wedding day\nVendor timeline", featured: false, button: B("Enquire", L.page("enquire")) },
          { name: "Full planning", price: "\u20B96.5 lakh", period: "", desc: "Everything from venue to vidaai.", features: "Senior planner from day one\nVenue and vendor selection\nD\xE9cor design and styling\nGuest travel desk", featured: true, flag: "Most chosen", button: B("Enquire", L.page("enquire")) },
          { name: "Destination", price: "from \u20B912 lakh", period: "", desc: "Palaces, forts and lakeside venues.", features: "Everything in full planning\nRecce trips with you\nHospitality team for guests", featured: false, button: B("Enquire", L.page("enquire")) }
        ] }),
        S("faq-accordion", { eyebrow: "", title: "Questions couples ask", intro: "", items: [{ q: "How early should we book?", a: "Six to nine months for winter dates. Some dates go a year ahead." }, { q: "Do you travel outside Rajasthan?", a: "Yes, for full planning and destination packages." }], tinted: true })
      ], { seoTitle: "Wedding packages \xB7 Marigold & Mehendi", seoDesc: "Day-of coordination, full planning and destination weddings." }),
      page("weddings", "Weddings", "weddings", [
        S("gallery-grid", { eyebrow: "Weddings", title: "Recent celebrations", intro: "", layout: "mosaic", images: [{ image: "m-vow-mandap", caption: "Pheras at a haveli, Jaipur" }, { image: "m-vow-arches", caption: "Courtyard dinner" }, { image: "m-vow-diyas", caption: "Sangeet" }, { image: "m-vow-rings", caption: "Ring ceremony" }, { image: "m-vow-marigold", caption: "Haldi morning" }] }),
        S("cta-banner", { title: "Picture yours here", text: "Share your date and guest count.", button: B("Enquire", L.page("enquire")), secondary: { label: "", link: null }, tone: "soft" })
      ], { seoTitle: "Weddings \xB7 Marigold & Mehendi", seoDesc: "Photos from weddings we have planned." }),
      page("enquire", "Enquire", "enquire", [
        S("contact-split", { eyebrow: "Enquire", title: "Let\u2019s talk about your wedding", intro: "Share your date, city and guest count. Nandini replies personally within a day.", address: "C-22 Bhawani Singh Road, C-Scheme\nJaipur 302001", phone: VW_PHONE, whatsapp: VW_PHONE, email: "namaste@marigoldmehendi.in", hours: [{ days: "Monday to Saturday", time: "11:00 am \u2013 7:00 pm" }], showForm: true, formTitle: "Wedding enquiry", formButton: "Send enquiry", formSuccess: "Thank you. Nandini will call you within a day.", showMap: false, map: null }, { anchor: "enquire" })
      ], { seoTitle: "Enquire \xB7 Marigold & Mehendi", seoDesc: "Check availability for your wedding date." }),
      notFound()
    ],
    collections: {
      services: coll("services", [
        { id: "vw-svc-1", title: "Full planning", slug: "full-planning", summary: "Everything from venue to vidaai with a senior planner.", price: "\u20B96.5 lakh", duration: "6\u201312 months", image: "m-vow-mandap", body: "Our most popular package." },
        { id: "vw-svc-2", title: "D\xE9cor and florals", slug: "decor", summary: "Design and styling for every function.", price: "from \u20B93 lakh", duration: "", image: "m-vow-marigold", body: "Fresh flowers from Pushkar on the morning of each function." }
      ]),
      blog: coll("blog", [
        { id: "vw-post-1", title: "A haveli wedding for 240 guests in Jaipur", slug: "haveli-wedding-jaipur", date: "1 Oct 2026", author: "Nandini Rathore", excerpt: "Two baraats, one courtyard and a storm nobody noticed.", image: "m-vow-arches", body: "We moved the sangeet indoors in 40 minutes." },
        { id: "vw-post-2", title: "Planning a winter wedding in Udaipur", slug: "winter-wedding-udaipur", date: "12 Aug 2026", author: "Nandini Rathore", excerpt: "Dates, venues and what to pack for cold lake evenings.", image: "m-vow-diyas", body: "December evenings drop to 8\xB0C by the lake." }
      ])
    }
  };
  var ES_PHONE = "+91 90009 48210";
  var estate = {
    id: "estate",
    name: "Estate",
    business: "Vasudha Realty",
    industry: "Real estate",
    style: ["editorial"],
    description: "Polished pages for property agents and developers: featured listings, market insights and site-visit booking.",
    theme: themeFromPreset("estate"),
    header: S("header-bar", { logo: "Vasudha Realty", logoMark: true, showCta: true, cta: B("Book a site visit", L.page("contact")), sticky: true }, { id: "es-header" }),
    footer: S("footer-columns", { logo: "Vasudha Realty", tagline: "RERA-registered property advisors in Hyderabad since 2012.", address: "Plot 31, Road No. 2, Financial District\nGachibowli, Hyderabad 500032", phone: ES_PHONE, email: "homes@vasudharealty.in", social: [{ handle: "vasudharealty", url: "https://example.com/vasudha" }], copyright: "\xA9 2026 Vasudha Realty \xB7 TS RERA A02500002871", dark: true }, { id: "es-footer" }),
    nav: {
      autoAdd: true,
      header: [N("Properties", L.page("properties")), N("About", L.page("about")), N("Insights", L.page("insights")), N("Contact", L.page("contact"))],
      footer: [N("Buy and rent", L.page("properties")), N("Properties", L.page("properties"), 1), N("Book a visit", L.page("contact"), 1), N("Company", L.page("about")), N("About", L.page("about"), 1), N("Insights", L.page("insights"), 1)]
    },
    pages: [
      page("home", "Home", "", [
        S("hero-split", { eyebrow: "RERA-registered advisors \xB7 Hyderabad", title: "Find your home in Hyderabad\u2019s best neighbourhoods", body: "Verified listings in Gachibowli, Kondapur, Jubilee Hills and Kokapet, with site visits on your schedule and paperwork handled end to end.", primary: B("Browse properties", L.page("properties")), secondary: B("Talk to an advisor", L.wa(ES_PHONE, "Hi, I am looking for a property.")), image: "m-es-villa", note: "1,400+ families moved in since 2012", reverse: true }),
        S("gallery-grid", { eyebrow: "Featured", title: "Homes this week", intro: "", layout: "grid", images: [{ image: "m-es-villa", caption: "3 BHK villa \xB7 Kokapet \xB7 \u20B92.85 Cr" }, { image: "m-es-living", caption: "2 BHK apartment \xB7 Kondapur \xB7 \u20B91.12 Cr" }, { image: "m-es-facade", caption: "4 BHK duplex \xB7 Jubilee Hills \xB7 \u20B96.40 Cr" }] }),
        S("features-grid", { eyebrow: "Why Vasudha", title: "No surprises after you sign", intro: "", columns: "3", style: "cards", showImages: false, items: [
          { icon: "key", title: "Verified titles", text: "Every listing comes with a 30-year title search by our in-house lawyer." },
          { icon: "map", title: "Neighbourhood reports", text: "Schools, commute times and water supply, checked on the ground." },
          { icon: "fileText", title: "Loans arranged", text: "Pre-approved home loans from six banks, with paperwork done for you." }
        ], tinted: true }),
        S("testimonials-cards", { eyebrow: "", title: "Families who moved with us", intro: "", showRating: true, items: [
          { quote: "We saw eleven homes in two Saturdays and they never once pushed. The one we bought was the cheapest of the lot.", name: "Ravi Teja", role: "Bought in Kondapur, 2026", avatar: "m-es-p1", rating: 5 },
          { quote: "The title search caught a dispute the seller hadn\u2019t mentioned. That alone was worth it.", name: "Sneha Reddy", role: "Bought in Kokapet, 2025", avatar: "m-es-p2", rating: 5 }
        ] }),
        S("news-list", { eyebrow: "Insights", title: "Market notes", intro: "", source: "blog", limit: 3, showImages: true, button: B("All insights", L.page("insights")) }),
        S("cta-banner", { title: "Selling your property?", text: "Get a free valuation within 48 hours.", button: B("Request a valuation", L.page("contact")), secondary: { label: "", link: null }, tone: "invert" })
      ], { seoTitle: "Vasudha Realty \xB7 Property advisors in Hyderabad", seoDesc: "Verified homes in Gachibowli, Kondapur, Jubilee Hills and Kokapet." }),
      page("properties", "Properties", "properties", [
        S("hero-bigtype", { eyebrow: "Properties", title: "Verified homes, updated every Monday", body: "Call us for floor plans and site visits.", button: B("Book a site visit", L.page("contact")), meta: [], showImage: false }),
        S("gallery-grid", { eyebrow: "", title: "", intro: "", layout: "grid", images: [{ image: "m-es-villa", caption: "3 BHK villa \xB7 Kokapet \xB7 \u20B92.85 Cr" }, { image: "m-es-living", caption: "2 BHK \xB7 Kondapur \xB7 \u20B91.12 Cr" }, { image: "m-es-facade", caption: "4 BHK duplex \xB7 Jubilee Hills \xB7 \u20B96.40 Cr" }, { image: "m-es-skyline", caption: "Office floor \xB7 HITEC City \xB7 \u20B94.8 lakh / month" }] })
      ], { seoTitle: "Properties \xB7 Vasudha Realty", seoDesc: "Homes for sale and rent in Hyderabad." }),
      page("about", "About", "about", [
        S("about-story", { eyebrow: "About", title: "Advisors first, agents second", body: "We started in 2012 with one rule: never show a client a home we would not buy ourselves. Fourteen years later, half our clients come from referrals.", image: "m-es-skyline", stats: [{ value: "1,400+", label: "families moved" }, { value: "14", label: "years in Hyderabad" }, { value: "0", label: "title disputes after sale" }], button: { label: "", link: null }, imageRight: false, tinted: false }),
        S("testimonial-quote", { quote: "They talked us out of a flat we loved, and a year later we knew why.", name: "Sneha Reddy", role: "Kokapet", avatar: "m-es-p2", dark: true })
      ], { seoTitle: "About \xB7 Vasudha Realty", seoDesc: "RERA-registered advisors in Hyderabad since 2012." }),
      page("insights", "Insights", "insights", [
        S("hero-bigtype", { eyebrow: "Insights", title: "Hyderabad property, plainly explained", body: "", button: { label: "", link: null }, meta: [], showImage: false }),
        S("news-list", { eyebrow: "", title: "", intro: "", source: "blog", limit: 9, showImages: true, button: { label: "", link: null } })
      ], { kind: "collection", collection: "blog", seoTitle: "Insights \xB7 Vasudha Realty", seoDesc: "Market notes for Hyderabad home buyers." }),
      page("post", "Insight", ":slug", [S("entry-detail", { backLabel: "All insights", showImage: true, button: B("Talk to an advisor", L.page("contact")) })], { parent: "insights", kind: "detail", collection: "blog" }),
      page("contact", "Contact", "contact", [
        S("contact-split", { eyebrow: "Contact", title: "Book a site visit", intro: "Tell us the area and budget. An advisor calls you within two hours.", address: "Plot 31, Road No. 2, Financial District\nGachibowli, Hyderabad 500032", phone: ES_PHONE, whatsapp: ES_PHONE, email: "homes@vasudharealty.in", hours: [{ days: "Monday to Saturday", time: "9:30 am \u2013 7:30 pm" }, { days: "Sunday", time: "Site visits by appointment" }], showForm: true, formTitle: "Site visit request", formButton: "Request a call", formSuccess: "Thanks. An advisor will call you within two hours.", showMap: true, map: "m-es-map" }, { anchor: "contact" })
      ], { seoTitle: "Contact \xB7 Vasudha Realty", seoDesc: "Book a site visit in Hyderabad." }),
      notFound()
    ],
    collections: {
      services: coll("services", [
        { id: "es-svc-buy", title: "Buying", slug: "buying", summary: "Shortlists, site visits, title search and loans.", price: "1% advisory fee", duration: "", image: "m-es-villa", body: "We charge only when you buy." },
        { id: "es-svc-sell", title: "Selling", slug: "selling", summary: "Valuation, photography and verified buyers.", price: "1.5% on sale", duration: "", image: "m-es-facade", body: "Most homes sell within 60 days." }
      ]),
      blog: coll("blog", [
        { id: "es-post-1", title: "Kokapet or Tellapur: where should first-time buyers look in 2027?", slug: "kokapet-vs-tellapur", date: "27 Oct 2026", author: "Ravi Teja", excerpt: "Prices, commute and water supply compared.", image: "m-es-villa", body: "Tellapur is 18% cheaper per sq ft, but adds 15 minutes to a HITEC City commute." },
        { id: "es-post-2", title: "Understanding carpet area before you sign", slug: "carpet-area-explained", date: "9 Oct 2026", author: "Sneha Reddy", excerpt: "Carpet, built-up and super built-up, and why the difference costs lakhs.", image: "m-es-living", body: "RERA requires builders to quote carpet area. Always ask for it in writing." },
        { id: "es-post-3", title: "Rental yields in HITEC City, quarter by quarter", slug: "hitec-city-rental-yields", date: "20 Sep 2026", author: "Ravi Teja", excerpt: "Two-bedroom yields held at 3.4% this year.", image: "m-es-skyline", body: "Demand from new offices kept vacancies under 6%." }
      ])
    }
  };
  var TEMPLATES = [clinic, ember, midnight, atelier, vow, estate];
  var TEMPLATE_BY = Object.fromEntries(TEMPLATES.map((t) => [t.id, t]));
  var INDUSTRIES = ["Food & drink", "Tech", "Architecture", "Health", "Weddings", "Real estate"];

  // src/art.js
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

  // src/media.js
  var P = (bg, skin, hair, shirt, style, glasses) => ["portrait", { bg, skin, hair, shirt, style, glasses }];
  var DEFS = [
    // Ember (café)
    ["m-ember-interior", "counter-pendants.jpg", ["interior", { kind: "cafe", wall: "#E9DCCB", floor: "#B98A5E", win: "#FFF4DC", sofa: "#B4441B", wood: "#8A5A36", plant: "#5F7D4A", dark: "#2B1D14" }], "The counter at Kaapi Katte under brass pendant lamps"],
    ["m-ember-latte", "flat-white.jpg", ["cup", { table: "#A0704A", saucer: "#F2ECE4", cup: "#FBF8F3", coffee: "#5A3420", crema: "#B97A48", foam: "#F6EAD8" }], "Flat white with latte art on a wooden table"],
    ["m-ember-filter", "filter-coffee.jpg", ["tumbler", { bg: "#D8C3A5", leaf: "#4F7A3A" }], "Filter coffee in a steel tumbler and dabarah on a banana leaf"],
    ["m-ember-buns", "cardamom-buns.jpg", ["pastry", { bg: "#E8DCCD", board: "#B88457", bun: "#C27A37", bunLight: "#F0C27D" }], "Cardamom buns on a wooden board"],
    ["m-ember-beans", "roast-thursday.jpg", ["beans", { bg: "#C9A27A" }], "Freshly roasted coffee beans"],
    ["m-ember-garden", "courtyard-plants.jpg", ["leaves", { bg: "#E9E2CF", l1: "#6F8F4E", l2: "#4F7A3A", l3: "#9BB26F" }], "Plants in the courtyard seating area"],
    ["m-ember-barista", "meera-barista.jpg", P("#E2A868", "#A8714F", "#1F1410", "#2B1D14", "bun"), "Head barista at the espresso machine"],
    ["m-ember-guest", "guest-meera.jpg", P("#D9C2A8", "#C48D67", "#2A1A12", "#7D4B2A", "long"), "Portrait of a regular guest"],
    // Midnight (tech)
    ["m-mid-glow", "network-hero.png", ["glow", { bg: "#0A0D14", line: "#161E2E", a: "#6E8BFF", b: "#38D9C0" }], "Abstract illustration of connected nodes"],
    ["m-mid-screen", "dashboard-analytics.png", ["screen", { bg: "#111827", panel: "#0B1020", a: "#6E8BFF", b: "#38D9C0", line: "#2A3550" }], "Analytics dashboard built for a retail client"],
    ["m-mid-screen2", "checkout-rebuild.png", ["screen", { bg: "#1B1F3A", panel: "#0E1229", a: "#38D9C0", b: "#F5B84D", line: "#2C3363" }, 7], "Checkout flow redesign for a fashion brand"],
    ["m-mid-screen3", "lending-app.png", ["screen", { bg: "#0F1C1C", panel: "#081212", a: "#F5B84D", b: "#6E8BFF", line: "#1D3535" }, 11], "Loan application screens for a fintech lender"],
    ["m-mid-p1", "nikhil.jpg", P("#1E2A4A", "#8D5A3B", "#111111", "#6E8BFF", "short", true), "Portrait of Nikhil"],
    ["m-mid-p2", "aarti.jpg", P("#163A3A", "#C08A64", "#2A1A12", "#38D9C0", "long"), "Portrait of Aarti"],
    ["m-mid-p3", "sameer.jpg", P("#2A2140", "#9A6848", "#1A1A1A", "#E6EAF2", "curly"), "Portrait of Sameer"],
    // Atelier (architecture)
    ["m-at-facade", "sabarmati-house.jpg", ["facade", { sky: "#DCD8CF", wall: "#C9B8A0", glass: "#3D3A36", ground: "#8C8576" }], "Brick facade of Sabarmati House with deep-set windows"],
    ["m-at-arches", "kutch-craft-school.jpg", ["arches", { wall: "#D9C7AD", inner: "#8F6F4C", floor: "#C4AE8E" }], "Arched verandah at the Kutch Craft School"],
    ["m-at-plan", "courtyard-flats-plan.png", ["plan", { paper: "#F1EFE9", ink: "#2B2A28", fill: "#C9B8A0" }], "Ground-floor plan of the Courtyard Flats"],
    ["m-at-stairs", "stepwell-office.jpg", ["stairs", { wall: "#CFC9BF", step: "#E8E3DA", riser: "#A9A296", light: "#FFF7E0" }], "Stone stairwell at the Step-well Office"],
    ["m-at-court", "neem-courtyard.jpg", ["courtyard", { tile: "#D8C3A0", tile2: "#B99A6B", roof: "#5A524A", tree: "#5E7A4C", tree2: "#7A9660" }], "Neem tree in a tiled courtyard, seen from above"],
    ["m-at-interior", "jaali-living.jpg", ["interior", { wall: "#E4DED3", floor: "#A58D6F", win: "#FBF6EA", sofa: "#D1C4AE", wood: "#7A6045", plant: "#5E7A4C", dark: "#2A2622" }, 5], "Living room lit through a jaali screen"],
    ["m-at-p1", "devika.jpg", P("#CDBFA8", "#B07A55", "#1B1512", "#2B2A28", "long", true), "Portrait of Ar. Devika Patel"],
    ["m-at-p2", "ishaan.jpg", P("#B9B2A5", "#9A6A4A", "#3A2C22", "#E9E4DA", "short"), "Portrait of Ar. Ishaan Trivedi"],
    // Clinic (dental)
    ["m-cl-room", "treatment-room.jpg", ["interior", { kind: "dental", wall: "#EEF5F4", floor: "#CFDEDC", win: "#FFFFFF", sofa: "#0E7C7B", wood: "#C9B79C", plant: "#4F8A6B", dark: "#24393B" }], "Treatment room with a dental chair beside a large window"],
    ["m-cl-smile", "whitening.png", ["smile", { bg: "#D7F0EE", blob: "#9FD8D3", spark: "#E8962E" }], "Illustration of a bright, clean tooth"],
    ["m-cl-lounge", "IMG_2041.jpg", ["interior", { wall: "#F4F8F8", floor: "#D9E4E2", win: "#FFFFFF", sofa: "#E8962E", wood: "#C9B79C", plant: "#4F8A6B", dark: "#24393B" }, 3], ""],
    ["m-cl-leaves", "reception-plants.jpg", ["leaves", { bg: "#E9F3F1", l1: "#4F8A6B", l2: "#7FB59A", l3: "#2F6B57" }], "Plants at the reception desk"],
    ["m-cl-map", "clinic-map.png", ["map", { land: "#EEF1EC", road: "#FFFFFF", water: "#CFE5EC", park: "#D6E7CF", pin: "#0E7C7B" }], "Map showing the clinic on 100 Feet Road, Indiranagar"],
    ["m-cl-ananya", "dr-ananya.jpg", P("#CFE9E6", "#C38E6A", "#1D1310", "#FFFFFF", "long"), "Dr. Ananya Mehta"],
    ["m-cl-kavya", "dr-kavya.jpg", P("#F6DCB4", "#B98262", "#2A1A12", "#0E7C7B", "bun", true), "Dr. Kavya Mehta"],
    ["m-cl-farhan", "dr-farhan.jpg", P("#D9E4F2", "#A7724F", "#141010", "#FFFFFF", "short"), "Dr. Farhan Qureshi"],
    ["m-cl-lakshmi", "dr-lakshmi.jpg", P("#F3D6D0", "#8F5D40", "#151010", "#0E7C7B", "long"), "Dr. Lakshmi Rao"],
    ["m-cl-rohan", "patient-rohan.jpg", P("#E3EEF0", "#B07D58", "#1B1B1B", "#3A5A8A", "short", true), "Rohan Iyer"],
    ["m-cl-priya", "patient-priya.jpg", P("#F2E3CF", "#C79070", "#24160F", "#B44F6A", "long"), "Priya Nair"],
    ["m-cl-suresh", "patient-suresh.jpg", P("#E0E6DC", "#94644A", "#CFCFCF", "#6B7D5C", "grey", true), "Suresh Gowda"],
    // Vow (wedding)
    ["m-vow-mandap", "mandap-marigold.jpg", ["mandap", { bg: "#F3E3D6", drape: "#F7EFE7", arch: "#8A1C3A", flower: "#F29F05", flower2: "#E8590C", floor: "#D9B99A" }], "Mandap draped in ivory with marigold garlands"],
    ["m-vow-marigold", "haldi-strings.jpg", ["marigold", { bg: "#8A1C3A", o1: "#F29F05", o2: "#E8590C", leaf: "#3F7A3A" }], "Strings of marigolds hung for a haldi"],
    ["m-vow-rings", "rings-silk.jpg", ["rings", { bg: "#E9D3C9", fold: "#FFFFFF", gold: "#C9973F", goldLight: "#F2D48A" }], "Two gold rings resting on silk"],
    ["m-vow-diyas", "sangeet-diyas.jpg", ["diyas", { bg: "#2A0F17", clay: "#A0522D", flame: "#FFB627", glow: "#FF9F1C" }], "Clay diyas lit for the sangeet night"],
    ["m-vow-arches", "haveli-arches.jpg", ["arches", { wall: "#F0D9C4", inner: "#C46A4A", floor: "#E3C19E" }], "Courtyard arches of a haveli in Jaipur"],
    ["m-vow-p1", "aditi.jpg", P("#F2D4C9", "#B47B58", "#120C0A", "#8A1C3A", "bun"), "Portrait of Aditi"],
    ["m-vow-p2", "karan.jpg", P("#E8D9B5", "#A06F4F", "#161010", "#C9973F", "short"), "Portrait of Karan"],
    // Estate (real estate)
    ["m-es-villa", "kokapet-villa.jpg", ["house", { sky: "#DFE8E4", wall: "#F1EDE4", glass: "#2F4A46", roof: "#3B3A36", lawn: "#7AA36A" }], "Three-bedroom villa with a pool in Kokapet"],
    ["m-es-skyline", "hitec-city.jpg", ["skyline", { sky: "#E4EBE6", t1: "#1F4D3A", t2: "#2F5F4A", t3: "#A9BDB2", win: "#E9F0D9", ground: "#CFD8CF" }], "Office towers in HITEC City"],
    ["m-es-living", "kondapur-2bhk.jpg", ["interior", { wall: "#EFECE4", floor: "#B59A78", win: "#FFFFFF", sofa: "#1F4D3A", wood: "#8A6B4A", plant: "#4F7A52", dark: "#232A26" }, 9], "Living room of a two-bedroom flat in Kondapur"],
    ["m-es-facade", "jubilee-duplex.jpg", ["facade", { sky: "#E9EEE9", wall: "#D8D3C6", glass: "#24382F", ground: "#9FAE9C", tree: "#4F7A52" }], "Four-bedroom duplex in Jubilee Hills"],
    ["m-es-map", "office-map.png", ["map", { land: "#EEF0EA", road: "#FFFFFF", water: "#CFE0E6", park: "#D3E3C8", pin: "#1F4D3A" }], "Map showing the office near Gachibowli flyover"],
    ["m-es-p1", "ravi.jpg", P("#D6E2DA", "#A77050", "#141010", "#1F4D3A", "short", true), "Portrait of Ravi Teja"],
    ["m-es-p2", "sneha.jpg", P("#E8DCC4", "#B88360", "#1B120D", "#B8913F", "long"), "Portrait of Sneha Reddy"]
  ];
  var FILES = [
    ["m-file-fees", "Fee schedule 2026.pdf", 0.42],
    ["m-file-intake", "New patient form.pdf", 0.18],
    ["m-file-menu", "Kaapi Katte menu.pdf", 1.9]
  ];
  function stockMedia() {
    let seed = 7;
    const size = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return Math.round((1.1 + seed / 233280 * 2.6) * 100) / 100;
    };
    const imgs = DEFS.map(([id, name, art, alt]) => ({ id, name, kind: "image", art, alt, size: size(), w: 2400, h: 1800, added: "Sep 2026" }));
    const files = FILES.map(([id, name, sz]) => ({ id, name, kind: "file", size: sz, alt: "", added: "Oct 2026" }));
    return [...imgs, ...files];
  }
  function mediaSrc(m) {
    if (!m) return null;
    if (m.src) return m.src;
    if (m.art) return artSrc(m.art[0], m.art[1], m.art[2] || 3);
    return null;
  }

  // src/model.js
  var clone = (o) => o == null ? o : structuredClone(o);
  var uid = (p = "x") => p + Math.random().toString(36).slice(2, 9);
  var LINK_KINDS = /* @__PURE__ */ new Set(["page", "section", "item", "url", "phone", "whatsapp", "email", "file", "none"]);
  function slugify(s) {
    return String(s || "").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/&/g, " and ").replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);
  }
  var blockTitle = (sec) => sec && (sec.label || BLOCKS[sec.type] && BLOCKS[sec.type].title) || "Section";
  var isDetail = (p) => p && p.kind === "detail";
  var pageById = (site, id) => site.pages.find((p) => p.id === id);
  function pagePath(site, page2) {
    if (!page2) return null;
    if (page2.id === site.homeId) return "/";
    if (page2.kind === "404") return "/404";
    const segs = [];
    let p = page2, guard = 0;
    while (p && guard++ < 12) {
      if (p.id === site.homeId) break;
      segs.unshift(p.slug);
      p = p.parentId ? pageById(site, p.parentId) : null;
    }
    return "/" + segs.join("/");
  }
  var detailPageFor = (site, c2) => site.pages.find((p) => p.kind === "detail" && p.collection === c2);
  var listPageFor = (site, c2) => site.pages.find((p) => p.kind === "collection" && p.collection === c2);
  function itemPath(site, c2, item) {
    const d = detailPageFor(site, c2);
    if (!d || !item) return null;
    const base = d.parentId ? pagePath(site, pageById(site, d.parentId)) : "";
    return (base === "/" ? "" : base) + "/" + item.slug;
  }
  function locPath(site, loc) {
    if (loc.missing && loc.pageId === site.notFoundId) return loc.missing;
    const p = pageById(site, loc.pageId);
    if (!p) return "/";
    if (isDetail(p)) {
      const c2 = site.collections[p.collection];
      const it = c2 && (c2.items.find((i) => i.id === loc.itemId) || c2.items[0]);
      return itemPath(site, p.collection, it) || pagePath(site, p);
    }
    return pagePath(site, p);
  }
  function descendants(site, id) {
    const out = [];
    const walk = (pid) => site.pages.filter((p) => p.parentId === pid).forEach((p) => {
      out.push(p);
      walk(p.id);
    });
    walk(id);
    return out;
  }
  function pageTree(site) {
    const out = [];
    const kids = (pid) => site.pages.filter((p) => (p.parentId || null) === pid && p.kind !== "404");
    const walk = (pid, depth) => kids(pid).forEach((p) => {
      out.push({ page: p, depth });
      walk(p.id, depth + 1);
    });
    const roots = kids(null).slice().sort((a, b) => a.id === site.homeId ? -1 : b.id === site.homeId ? 1 : 0);
    roots.forEach((p) => {
      out.push({ page: p, depth: 0 });
      walk(p.id, 1);
    });
    return out;
  }
  function slugClash(site, page2) {
    if (!page2 || page2.kind === "404" || page2.id === site.homeId) return null;
    const path = pagePath(site, page2);
    return site.pages.find((p) => p.id !== page2.id && p.kind !== "404" && pagePath(site, p) === path) || null;
  }
  function uniqueSlug(site, base, parentId, exceptId) {
    let s = base || "page", i = 2;
    while (site.pages.some((p) => p.id !== exceptId && (p.parentId || null) === (parentId || null) && p.slug === s)) s = base + "-" + i++;
    return s;
  }
  var digits = (s) => String(s || "").replace(/[^\d+]/g, "");
  function resolveLink(site, link, mediaBy) {
    if (!link || !link.kind) return { href: "", text: "No link", empty: true };
    switch (link.kind) {
      case "none":
        return { href: "#", text: "No link set", broken: true };
      case "page": {
        const p = pageById(site, link.pageId);
        if (!p) return { href: "#", text: "Deleted page", broken: true };
        return { href: pagePath(site, p), text: p.title, hidden: p.status !== "live", page: p };
      }
      case "section": {
        const p = pageById(site, link.pageId);
        const s = p && p.sections.find((x) => x.id === link.sectionId);
        if (!p || !s) return { href: "#", text: p ? p.title + " \u203A deleted section" : "Deleted page", broken: true };
        return { href: pagePath(site, p) + "#" + s.anchor, text: p.title + " \u203A " + blockTitle(s), hidden: p.status !== "live" || s.hidden, page: p };
      }
      case "item": {
        const c2 = site.collections[link.collection];
        const it = c2 && c2.items.find((i) => i.id === link.itemId);
        const path = it && itemPath(site, link.collection, it);
        if (!it || !path) return { href: "#", text: it ? it.title + " (no entry page)" : "Deleted entry", broken: true };
        return { href: path, text: it.title, hidden: it.status === "draft" };
      }
      case "url":
        return { href: link.url || "", text: (link.url || "No address").replace(/^https?:\/\//, ""), external: true, broken: !link.url };
      case "phone":
        return { href: "tel:" + digits(link.phone), text: link.phone || "No number", external: true, broken: !link.phone };
      case "whatsapp":
        return { href: "https://wa.me/" + digits(link.phone).replace("+", "") + (link.message ? "?text=" + encodeURIComponent(link.message) : ""), text: "WhatsApp " + (link.phone || ""), external: true, broken: !link.phone };
      case "email":
        return { href: "mailto:" + (link.email || "") + (link.subject ? "?subject=" + encodeURIComponent(link.subject) : ""), text: link.email || "No address", external: true, broken: !link.email };
      case "file": {
        const m = mediaBy ? mediaBy[link.mediaId] : null;
        if (mediaBy && !m) return { href: "#", text: "Deleted file", broken: true };
        return { href: "/files/" + slugify(m ? m.name : "file"), text: m ? m.name : "File", external: true };
      }
      default:
        return { href: "#", text: "Link", broken: true };
    }
  }
  var LINK_KIND_LABEL = { page: "Page", section: "Section", item: "Collection item", url: "Web address", phone: "Phone", whatsapp: "WhatsApp", email: "Email", file: "File download", none: "No link" };
  function fieldLabel(type, path) {
    const b = BLOCKS[type];
    if (!b || !path.length) return "";
    const f = b.fields.find((x) => x.key === path[0]);
    if (!f) return "";
    if (f.type === "list" && typeof path[1] === "number") {
      const sub = f.fields.find((x) => x.key === path[2]);
      return `${f.itemLabel} ${path[1] + 1}${sub ? " \u203A " + sub.label : ""}`;
    }
    return f.label;
  }
  function walkLinks(site, cb, opts = {}) {
    const visit = (v, loc, path) => {
      if (!v || typeof v !== "object") return;
      if (Array.isArray(v)) {
        v.forEach((x, i) => visit(x, loc, [...path, i]));
        return;
      }
      if (typeof v.kind === "string" && LINK_KINDS.has(v.kind)) {
        cb(v, { ...loc, field: fieldLabel(loc.type, path), fieldKey: path[0] });
        return;
      }
      if ("label" in v && "link" in v && !v.link && v.label) {
        cb({ kind: "none" }, { ...loc, field: fieldLabel(loc.type, path), fieldKey: path[0] });
        return;
      }
      for (const k of Object.keys(v)) visit(v[k], loc, [...path, k]);
    };
    const sec = (s, scope, page2, label) => visit(s.values, { scope, pageId: page2 ? page2.id : null, sectionId: s.id, type: s.type, label }, []);
    sec(site.header, "header", null, "Shared header");
    sec(site.footer, "footer", null, "Shared footer");
    site.pages.forEach((p) => {
      if (!opts.includeDraft && p.status === "draft") return;
      if (p.header) sec(p.header, "header", p, p.title + " \u203A Header (this page only)");
      if (p.footer) sec(p.footer, "footer", p, p.title + " \u203A Footer (this page only)");
      p.sections.forEach((s) => {
        if (!s.hidden || opts.includeDraft) sec(s, "page", p, p.title + " \u203A " + blockTitle(s));
      });
    });
    ["header", "footer"].forEach((m) => site.nav[m].forEach((it) => cb(it.link || { kind: "none" }, { scope: "nav", menu: m, navId: it.id, label: (m === "header" ? "Header menu" : "Footer menu") + " \u203A " + it.label, field: "" })));
  }
  function findRefs(site, pageIds) {
    const ids = new Set(pageIds);
    const out = [];
    walkLinks(site, (link, loc) => {
      if ((link.kind === "page" || link.kind === "section") && ids.has(link.pageId) && !(loc.pageId && ids.has(loc.pageId))) out.push({ ...loc, link });
    }, { includeDraft: true });
    return out;
  }
  function relink(site, fromId, toId) {
    const fix = (v) => {
      if (!v || typeof v !== "object") return;
      if (Array.isArray(v)) return v.forEach(fix);
      if ((v.kind === "page" || v.kind === "section") && v.pageId === fromId) {
        v.kind = "page";
        v.pageId = toId;
        delete v.sectionId;
        return;
      }
      Object.values(v).forEach(fix);
    };
    fix(site.header.values);
    fix(site.footer.values);
    site.pages.forEach((p) => {
      fix(p.sections);
      if (p.header) fix(p.header);
      if (p.footer) fix(p.footer);
    });
    ["header", "footer"].forEach((m) => site.nav[m].forEach((n2) => fix(n2)));
  }
  function walkImages(site, cb) {
    const scan = (s, label, pageId, scope) => {
      const b = BLOCKS[s.type];
      if (!b) return;
      b.fields.forEach((f) => {
        const v = s.values[f.key];
        if (f.type === "image" && v) cb(v, { label: label + " \u203A " + f.label, pageId, sectionId: s.id, scope, fieldKey: f.key });
        if (f.type === "list" && Array.isArray(v)) v.forEach((it, i) => f.fields.forEach((sf) => {
          if (sf.type === "image" && it[sf.key]) cb(it[sf.key], { label: `${label} \u203A ${f.itemLabel} ${i + 1}`, pageId, sectionId: s.id, scope, fieldKey: f.key });
        }));
      });
    };
    scan(site.header, "Shared header", null, "header");
    scan(site.footer, "Shared footer", null, "footer");
    site.pages.forEach((p) => {
      if (p.status === "draft") return;
      p.sections.forEach((s) => {
        if (!s.hidden) scan(s, p.title + " \u203A " + blockTitle(s), p.id, "page");
      });
      if (p.seo && p.seo.image) cb(p.seo.image, { label: p.title + " \u203A Share image", pageId: p.id, scope: "pageSettings" });
    });
    Object.values(site.collections).forEach((c2) => {
      if (!listPageFor(site, c2.id)) return;
      c2.items.forEach((it) => {
        if (it.image && it.status !== "draft") cb(it.image, { label: c2.name + " \u203A " + it.title, scope: "collection", collection: c2.id, itemId: it.id });
      });
    });
  }
  function mediaUsage(site, mediaId) {
    const out = [];
    walkImages(site, (id, loc) => {
      if (id === mediaId) out.push(loc);
    });
    walkLinks(site, (l, loc) => {
      if (l.kind === "file" && l.mediaId === mediaId) out.push(loc);
    }, { includeDraft: true });
    return out;
  }
  function runChecks(site, media) {
    const mediaBy = Object.fromEntries(media.map((m) => [m.id, m]));
    const issues = [];
    let n2 = 0;
    walkLinks(site, (link, loc) => {
      const r = resolveLink(site, link, mediaBy);
      if (r.empty) return;
      const where = loc.label + (loc.field ? " \u203A " + loc.field : "");
      if (r.broken) issues.push({ id: "i" + n2++, kind: "broken", level: "error", title: link.kind === "none" ? "Button has no link" : "Link points to " + r.text.toLowerCase(), where, loc });
      else if (r.hidden) issues.push({ id: "i" + n2++, kind: "hidden", level: "warn", title: `Links to ${r.page && r.page.status === "draft" ? "draft" : "hidden"} page \u201C${r.page ? r.page.title : r.text}\u201D`, where, loc });
    });
    const seen = /* @__PURE__ */ new Set();
    walkImages(site, (id, loc) => {
      const m = mediaBy[id];
      if (!m || (m.alt || "").trim() || seen.has(id)) return;
      seen.add(id);
      issues.push({ id: "i" + n2++, kind: "alt", level: "warn", title: `${m.name} has no alt text`, where: loc.label, loc, mediaId: id });
    });
    site.pages.forEach((p) => {
      if (p.status === "draft" || p.kind === "detail" || p.kind === "404") return;
      const miss = [];
      if (!(p.seo.title || "").trim()) miss.push("title");
      if (!(p.seo.description || "").trim()) miss.push("description");
      if (miss.length) issues.push({ id: "i" + n2++, kind: "seo", level: "warn", title: `${p.title} has no search ${miss.join(" or ")}`, where: pagePath(site, p), loc: { scope: "pageSettings", pageId: p.id } });
      const c2 = slugClash(site, p);
      if (c2) issues.push({ id: "i" + n2++, kind: "broken", level: "error", title: `${p.title} and ${c2.title} share ${pagePath(site, p)}`, where: "Page settings \u203A Slug", loc: { scope: "pageSettings", pageId: p.id } });
    });
    return issues;
  }
  function sectionDelta(a, b) {
    const A3 = Object.fromEntries(a.map((s) => [s.id, JSON.stringify(s)]));
    const Bm = Object.fromEntries(b.map((s) => [s.id, JSON.stringify(s)]));
    let added = 0, removed = 0, edited = 0;
    b.forEach((s) => {
      if (!(s.id in A3)) added++;
      else if (A3[s.id] !== Bm[s.id]) edited++;
    });
    a.forEach((s) => {
      if (!(s.id in Bm)) removed++;
    });
    const moved = !added && !removed && a.map((s) => s.id).join() !== b.map((s) => s.id).join();
    const parts = [];
    if (edited) parts.push(edited + (edited > 1 ? " sections" : " section") + " edited");
    if (added) parts.push(added + " added");
    if (removed) parts.push(removed + " removed");
    if (moved) parts.push("reordered");
    return parts.join(", ");
  }
  function diffSites(pub, cur) {
    if (!pub) return cur.pages.filter((p) => p.status !== "draft").map((p) => ({ type: "added", pageId: p.id, title: p.title, path: pagePath(cur, p), detail: "First publish" }));
    const out = [];
    const pubBy = Object.fromEntries(pub.pages.map((p) => [p.id, p]));
    cur.pages.forEach((p) => {
      const o = pubBy[p.id];
      if (!o) {
        out.push({ type: "added", pageId: p.id, title: p.title, path: pagePath(cur, p), detail: p.status === "draft" ? "Draft, stays unpublished" : "New page" });
        return;
      }
      if (JSON.stringify(o) === JSON.stringify(p) && pagePath(pub, o) === pagePath(cur, p)) return;
      const what = [];
      const sd = sectionDelta(o.sections, p.sections);
      if (sd) what.push(sd);
      if (o.title !== p.title) what.push("title");
      if (pagePath(pub, o) !== pagePath(cur, p)) what.push("address " + pagePath(pub, o) + " \u2192 " + pagePath(cur, p));
      if (JSON.stringify(o.seo) !== JSON.stringify(p.seo)) what.push("search settings");
      if (o.status !== p.status) what.push("visibility");
      if (JSON.stringify(o.header) !== JSON.stringify(p.header) || JSON.stringify(o.footer) !== JSON.stringify(p.footer)) what.push("header or footer");
      out.push({ type: "edited", pageId: p.id, title: p.title, path: pagePath(cur, p), detail: what.join(", ") || "settings" });
    });
    pub.pages.forEach((o) => {
      if (!cur.pages.some((p) => p.id === o.id)) out.push({ type: "deleted", title: o.title, path: pagePath(pub, o), detail: "Removed" });
    });
    [["header", "Shared header"], ["footer", "Shared footer"], ["nav", "Menus"], ["theme", "Theme"], ["collections", "Collection entries"], ["redirects", "Redirects"]].forEach(([k, title]) => {
      if (JSON.stringify(pub[k]) !== JSON.stringify(cur[k])) out.push({ type: "site", key: k, title, detail: "Applies to every page" });
    });
    if (pub.homeId !== cur.homeId) out.push({ type: "site", key: "home", title: "Home page", detail: "Changed" });
    return out;
  }
  function assignAnchors(page2) {
    const used = /* @__PURE__ */ new Set();
    page2.sections.forEach((s) => {
      if (s.anchor && !used.has(s.anchor)) used.add(s.anchor);
      else s.anchor = "";
    });
    page2.sections.forEach((s) => {
      if (s.anchor) return;
      const base = BLOCKS[s.type] ? BLOCKS[s.type].category : "section";
      let a = base, i = 2;
      while (used.has(a)) a = base + "-" + i++;
      s.anchor = a;
      used.add(a);
    });
  }
  function replaceDeep(o, from, to) {
    if (!from || from === to) return o;
    if (typeof o === "string") return o.split(from).join(to);
    if (Array.isArray(o)) return o.map((x) => replaceDeep(x, from, to));
    if (o && typeof o === "object") {
      for (const k of Object.keys(o)) if (k !== "id" && k !== "pageId" && k !== "sectionId") o[k] = replaceDeep(o[k], from, to);
    }
    return o;
  }
  function createSite(tpl, { name, subdomain } = {}) {
    const t = clone(tpl);
    let site = {
      id: uid("site"),
      name: name || t.business,
      subdomain: subdomain || slugify(t.business).replace(/-/g, ""),
      templateId: t.id,
      theme: t.theme,
      header: t.header,
      footer: t.footer,
      nav: t.nav,
      pages: t.pages,
      homeId: "home",
      notFoundId: "p404",
      collections: t.collections,
      redirects: []
    };
    site.pages.forEach(assignAnchors);
    if (name && name !== t.business) {
      const shortLogo = t.header.values.logo;
      site = replaceDeep(site, t.business, name);
      if (shortLogo && shortLogo !== t.business) site = replaceDeep(site, shortLogo, name);
    }
    return site;
  }
  function remapLinks(values, tpl, site) {
    const fix = (v) => {
      if (!v || typeof v !== "object") return;
      if (Array.isArray(v)) return v.forEach(fix);
      if ((v.kind === "page" || v.kind === "section") && tpl) {
        if (pageById(site, v.pageId) && (v.kind === "page" || pageById(site, v.pageId).sections.some((s) => s.id === v.sectionId))) return;
        const src = tpl.pages.find((p) => p.id === v.pageId);
        const srcSec = src && v.kind === "section" ? src.sections.find((s) => s.id === v.sectionId) : null;
        let target = src && site.pages.find((p) => p.slug === src.slug && p.kind === src.kind);
        if (!target && src && src.kind !== "page") target = site.pages.find((p) => p.kind === src.kind && p.collection === src.collection);
        if (!target && srcSec) target = site.pages.find((p) => p.sections.some((s) => s.type === srcSec.type));
        if (!target) target = pageById(site, site.homeId);
        v.pageId = target.id;
        if (v.kind === "section") {
          const ts = srcSec && target.sections.find((s) => s.type === srcSec.type);
          if (ts) v.sectionId = ts.id;
          else {
            v.kind = "page";
            delete v.sectionId;
          }
        }
        return;
      }
      if (v.kind === "item") {
        const c2 = site.collections[v.collection];
        if (c2 && !c2.items.some((i) => i.id === v.itemId)) {
          if (c2.items[0]) v.itemId = c2.items[0].id;
        }
        return;
      }
      Object.values(v).forEach(fix);
    };
    fix(values);
    return values;
  }
  function sectionFromEntry(entry, site) {
    const tpl = TEMPLATE_BY[entry.templateId];
    return { id: uid("s"), type: entry.type, values: remapLinks(clone(entry.values), tpl, site), hidden: false, anchor: "" };
  }
  var ALIASES = { body: ["text", "intro", "caption"], text: ["body", "intro"], intro: ["body", "text"], primary: ["button", "cta"], button: ["primary", "cta"], cta: ["button", "primary"], quote: ["title"] };
  function carryOver(oldSec, entry, site) {
    const fresh = sectionFromEntry(entry, site);
    const oldB = BLOCKS[oldSec.type], newB = BLOCKS[entry.type];
    const kept = [];
    newB.fields.forEach((f) => {
      const cands = [f.key, ...ALIASES[f.key] || []];
      for (const k of cands) {
        const of = oldB.fields.find((x) => x.key === k);
        const ov = oldSec.values[k];
        if (!of || ov == null || ov === "" || Array.isArray(ov) && !ov.length) continue;
        const compatible = of.type === f.type || [of.type, f.type].every((t) => ["text", "textarea", "richtext"].includes(t));
        if (!compatible || f.type === "list") continue;
        fresh.values[f.key] = clone(ov);
        kept.push(f.label);
        break;
      }
    });
    fresh.id = oldSec.id;
    fresh.anchor = oldSec.anchor;
    return { section: fresh, kept };
  }
  function copyPageFromTemplate(tpl, srcPage, site) {
    const p = clone(srcPage);
    const idMap = {};
    p.id = uid("p");
    p.sections.forEach((s) => {
      const nid = uid("s");
      idMap[s.id] = nid;
      s.id = nid;
      s.values = remapLinks(s.values, tpl, site);
    });
    p.parentId = null;
    if (p.kind === "detail") {
      const list2 = listPageFor(site, p.collection);
      p.parentId = list2 ? list2.id : null;
    }
    p.slug = p.kind === "detail" ? ":slug" : uniqueSlug(site, srcPage.slug || slugify(srcPage.title), p.parentId);
    p.status = "live";
    p.header = null;
    p.footer = null;
    p.seo = { title: "", description: "", image: null };
    assignAnchors(p);
    return p;
  }
  var LIBRARY = (() => {
    const seen = /* @__PURE__ */ new Map();
    TEMPLATES.forEach((t) => {
      const add = (sec) => {
        const key = t.id + ":" + sec.type;
        if (!seen.has(key)) seen.set(key, { key, templateId: t.id, templateName: t.name, type: sec.type, values: sec.values, category: BLOCKS[sec.type].category });
      };
      add(t.header);
      t.pages.forEach((p) => p.sections.forEach(add));
      add(t.footer);
    });
    return [...seen.values()];
  })();
  function sampleWorkspace() {
    const draft = createSite(TEMPLATE_BY.clinic, { name: "Smile Studio Dental", subdomain: "smilestudio" });
    const P2 = (id) => pageById(draft, id);
    draft.pages.splice(2, 0, {
      id: "doctors",
      title: "Our doctors",
      slug: "our-doctors",
      parentId: "about",
      kind: "page",
      collection: null,
      status: "draft",
      header: null,
      footer: null,
      seo: { title: "Our dentists \xB7 Smile Studio Dental", description: "Meet the four specialist dentists at Smile Studio Dental, Indiranagar.", image: null },
      sections: [
        { id: "dr1", type: "hero-bigtype", anchor: "hero", hidden: false, values: { eyebrow: "Our doctors", title: "Four specialists, one team", body: "Each of our dentists holds a master\u2019s degree in their speciality and has practised for at least ten years.", button: { label: "", link: null }, meta: [], showImage: false } },
        { id: "dr2", type: "features-grid", anchor: "features", hidden: false, values: { eyebrow: "", title: "", intro: "", columns: "4", style: "plain", showImages: true, items: [
          { image: "m-cl-ananya", title: "Dr. Ananya Mehta", meta: "BDS, MDS (Prosthodontics)", text: "Implants, crowns and smile design. Co-founder." },
          { image: "m-cl-kavya", title: "Dr. Kavya Mehta", meta: "BDS, MDS (Endodontics)", text: "Single-sitting root canals and pain-free fillings. Co-founder." },
          { image: "m-cl-farhan", title: "Dr. Farhan Qureshi", meta: "BDS, MDS (Orthodontics)", text: "Braces and clear aligners for teenagers and adults." },
          { image: "m-cl-lakshmi", title: "Dr. Lakshmi Rao", meta: "BDS, MDS (Paediatric dentistry)", text: "Children from age two, including nervous first-timers." }
        ] } }
      ]
    });
    draft.nav.header.splice(2, 0, { id: "n-doctors", label: "Our doctors", link: { kind: "page", pageId: "doctors" }, depth: 1 });
    P2("about").sections[1].values.button = { label: "Meet our doctors", link: { kind: "page", pageId: "doctors" } };
    const homeCta = P2("home").sections.find((s) => s.id === "cl-home-cta");
    homeCta.values.title = "Diwali check-up week";
    homeCta.values.text = "Consultation with X-ray at \u20B9400 instead of \u20B9600, until 15 November.";
    homeCta.values.button = { label: "See the offer", link: { kind: "page", pageId: "diwali" } };
    P2("blog").seo.description = "";
    draft.redirects = [
      { id: "r1", from: "/treatments", to: "/services", code: 301, auto: true, note: "Added when Treatments was renamed to Services" },
      { id: "r2", from: "/team", to: "/about", code: 301, auto: false, note: "" }
    ];
    const v5 = clone(draft);
    const Q = (id) => pageById(v5, id);
    v5.pages = v5.pages.filter((p) => p.id !== "doctors");
    v5.nav.header = v5.nav.header.filter((n2) => !(n2.link && n2.link.pageId === "doctors"));
    Q("home").sections[0].values.title = "Gentle dental care in Indiranagar";
    Q("about").sections[1].values.button = { label: "Book a visit", link: { kind: "section", pageId: "contact", sectionId: "cl-visit" } };
    Q("fees").sections[1].values.items.find((i) => i.name.startsWith("Teeth whitening")).price = "\u20B98,000";
    Q("blog").seo.description = "Plain-language dental advice from the dentists at Smile Studio, Indiranagar.";
    const offer = {
      id: "diwali",
      title: "Diwali offer",
      slug: "diwali-offer",
      parentId: null,
      kind: "page",
      collection: null,
      status: "live",
      header: null,
      footer: null,
      seo: { title: "Diwali check-up week \xB7 Smile Studio Dental", description: "Consultation with X-ray at \u20B9400 until 15 November.", image: null },
      sections: [{ id: "dw1", type: "hero-bigtype", values: { eyebrow: "Until 15 November", title: "Diwali check-up week", body: "Consultation with X-ray at \u20B9400 instead of \u20B9600.", button: { label: "Book a visit", link: { kind: "section", pageId: "contact", sectionId: "cl-visit" } }, meta: [], showImage: false }, hidden: false, anchor: "hero" }]
    };
    v5.pages.splice(5, 0, offer);
    const v4 = clone(v5);
    pageById(v4, "contact").sections[0].values.hours = [{ days: "Monday to Saturday", time: "9:30 am \u2013 8:00 pm" }, { days: "Sunday", time: "Closed" }];
    const v3 = clone(v4);
    v3.pages = v3.pages.filter((p) => p.id !== "diwali");
    pageById(v3, "home").sections.find((s) => s.id === "cl-home-cta").values = clone(TEMPLATE_BY.clinic.pages[0].sections[4].values);
    const v2 = clone(v3);
    pageById(v2, "fees").sections[1].values.items.forEach((i) => {
      if (i.name.startsWith("Root canal")) i.price = "from \u20B95,500";
    });
    const v1 = clone(v2);
    v1.pages = v1.pages.filter((p) => p.id !== "blog" && p.id !== "post");
    v1.nav.header = v1.nav.header.filter((n2) => !(n2.link && n2.link.pageId === "blog"));
    v1.redirects = [];
    const versions = [
      { v: 1, at: "12 Mar 2026, 11:04 am", by: "Ananya Mehta", note: "First publish", snapshot: v1 },
      { v: 2, at: "2 Apr 2026, 6:12 pm", by: "Ananya Mehta", note: "Added the blog", snapshot: v2 },
      { v: 3, at: "19 Jun 2026, 10:30 am", by: "Kavya Mehta", note: "New fees; renamed Treatments to Services", snapshot: v3 },
      { v: 4, at: "8 Oct 2026, 9:47 pm", by: "Ananya Mehta", note: "Diwali offer page", snapshot: v4 },
      { v: 5, at: "24 Oct 2026, 6:40 pm", by: "Kavya Mehta", note: "Sunday hours", snapshot: v5 }
    ];
    return { site: draft, versions, liveV: 5 };
  }
  function linkToLoc(site, link) {
    if (!link) return null;
    if (link.kind === "page") return pageById(site, link.pageId) ? { pageId: link.pageId } : { pageId: site.notFoundId, broken: true };
    if (link.kind === "section") {
      const p = pageById(site, link.pageId);
      const s = p && p.sections.find((x) => x.id === link.sectionId);
      return p && s ? { pageId: p.id, hash: s.anchor } : { pageId: site.notFoundId, broken: true };
    }
    if (link.kind === "item") {
      const d = detailPageFor(site, link.collection);
      const c2 = site.collections[link.collection];
      const it = c2 && c2.items.find((i) => i.id === link.itemId);
      return d && it ? { pageId: d.id, itemId: it.id } : { pageId: site.notFoundId, broken: true };
    }
    if (link.kind === "none") return { pageId: site.notFoundId, broken: true };
    return { external: true };
  }
  function route(site, raw, depth = 0) {
    let [path, hash] = String(raw || "/").split("#");
    path = path.split("?")[0].trim().toLowerCase().replace(/^https?:\/\/[^/]+/, "");
    if (!path.startsWith("/")) path = "/" + path;
    if (path.length > 1) path = path.replace(/\/+$/, "");
    for (const p of site.pages) if (p.kind !== "detail" && pagePath(site, p) === path) return { pageId: p.id, hash };
    for (const d of site.pages.filter((p) => p.kind === "detail")) {
      const base = d.parentId ? pagePath(site, pageById(site, d.parentId)) : "";
      if (path.startsWith((base === "/" ? "" : base) + "/")) {
        const slug = path.slice((base === "/" ? "" : base).length + 1);
        const it = site.collections[d.collection] && site.collections[d.collection].items.find((i) => i.slug === slug);
        if (it) return { pageId: d.id, itemId: it.id, hash };
      }
    }
    const r = site.redirects.find((x) => x.from.replace(/\/+$/, "") === path);
    if (r && depth < 5) return { ...route(site, r.to, depth + 1), redirectedFrom: path };
    return { pageId: site.notFoundId, notFound: path, hash };
  }

  // src/ctx.js
  var EdCtx = createContext(null);
  var useEd = () => useContext(EdCtx);
  function findSection(site, pageId, id) {
    const page2 = pageById(site, pageId);
    if (page2 && page2.header && page2.header.id === id) return { sec: page2.header, scope: "header", shared: false, page: page2 };
    if (page2 && page2.footer && page2.footer.id === id) return { sec: page2.footer, scope: "footer", shared: false, page: page2 };
    if (site.header.id === id) return { sec: site.header, scope: "header", shared: true, page: page2 };
    if (site.footer.id === id) return { sec: site.footer, scope: "footer", shared: true, page: page2 };
    const sec = page2 && page2.sections.find((s) => s.id === id);
    if (sec) return { sec, scope: "page", shared: false, page: page2, index: page2.sections.indexOf(sec) };
    for (const p of site.pages) {
      const s = p.sections.find((x) => x.id === id);
      if (s) return { sec: s, scope: "page", shared: false, page: p, index: p.sections.indexOf(s) };
    }
    return null;
  }

  // src/siteview.jsx
  var DEVICES = {
    phone: { w: 390, label: "Phone", icon: "phone" },
    tablet: { w: 820, label: "Tablet", icon: "tablet" },
    desktop: { w: 1280, label: "Desktop", icon: "monitor" }
  };
  function Tools({ onAction, sec, scope, index, total }) {
    const a = (name) => (e) => {
      e.stopPropagation();
      onAction(name, { id: sec.id, scope, index });
    };
    return /* @__PURE__ */ React.createElement("div", { className: "ed-tools", onClick: (e) => e.stopPropagation() }, scope === "page" && /* @__PURE__ */ React.createElement("button", { type: "button", title: "Move up", disabled: index === 0, onClick: a("up") }, /* @__PURE__ */ React.createElement(Icon, { name: "arrowUp", size: 14 })), scope === "page" && /* @__PURE__ */ React.createElement("button", { type: "button", title: "Move down", disabled: index === total - 1, onClick: a("down") }, /* @__PURE__ */ React.createElement(Icon, { name: "arrowDown", size: 14 })), /* @__PURE__ */ React.createElement("button", { type: "button", title: "Swap for another block", onClick: a("swap") }, /* @__PURE__ */ React.createElement(Icon, { name: "swap", size: 14 }), /* @__PURE__ */ React.createElement("span", null, "Swap")), scope === "page" && /* @__PURE__ */ React.createElement("button", { type: "button", title: "Duplicate", onClick: a("duplicate") }, /* @__PURE__ */ React.createElement(Icon, { name: "copy", size: 14 })), scope === "page" && /* @__PURE__ */ React.createElement("button", { type: "button", title: "Hide", onClick: a("hide") }, /* @__PURE__ */ React.createElement(Icon, { name: "eyeOff", size: 14 })), scope === "page" && /* @__PURE__ */ React.createElement("button", { type: "button", title: "Delete", className: "danger", onClick: a("delete") }, /* @__PURE__ */ React.createElement(Icon, { name: "trash", size: 14 })));
  }
  function Shell({ sec, scope, index, total, edit, selected, onAction, chrome, shared, children }) {
    if (!edit) return sec.hidden ? null : /* @__PURE__ */ React.createElement("div", { "data-sid": sec.id, "data-anchor": sec.anchor, "data-scope": scope }, children);
    if (sec.hidden) {
      return /* @__PURE__ */ React.createElement("div", { className: "ed-hidden-sec", "data-sid": sec.id, "data-anchor": sec.anchor, "data-scope": scope }, /* @__PURE__ */ React.createElement(Icon, { name: "eyeOff", size: 14 }), /* @__PURE__ */ React.createElement("span", null, "Hidden: ", blockTitle(sec)), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: (e) => {
        e.stopPropagation();
        onAction("unhide", { id: sec.id, scope, index });
      } }, "Show"));
    }
    const label = scope === "header" ? shared ? "Header \xB7 shared" : "Header \xB7 this page only" : scope === "footer" ? shared ? "Footer \xB7 shared" : "Footer \xB7 this page only" : blockTitle(sec);
    return /* @__PURE__ */ React.createElement("div", { className: "ed-sec" + (selected ? " is-sel" : "") + (scope !== "page" ? " is-global" : ""), "data-sid": sec.id, "data-anchor": sec.anchor, "data-scope": scope }, children, /* @__PURE__ */ React.createElement("span", { className: "ed-label" }, scope !== "page" && /* @__PURE__ */ React.createElement(Icon, { name: shared ? "globe" : "unlink", size: 11 }), label), selected && chrome && /* @__PURE__ */ React.createElement(Tools, { onAction, sec, scope, index, total }), scope === "page" && chrome && /* @__PURE__ */ React.createElement("button", { type: "button", className: "ed-insert", title: "Add a section here", onClick: (e) => {
      e.stopPropagation();
      onAction("insert", { index: index + 1 });
    } }, /* @__PURE__ */ React.createElement(Icon, { name: "plus", size: 14 })));
  }
  function SiteView({ site, mediaBy, loc, mode = "static", selection, onSelect, onNavigate, onAction, chrome = true, published = false, focusItem }) {
    const page2 = pageById(site, loc.pageId) || pageById(site, site.homeId);
    const coll2 = page2 && page2.collection ? site.collections[page2.collection] : null;
    const item = page2 && page2.kind === "detail" && coll2 ? coll2.items.find((i) => i.id === loc.itemId) || coll2.items[0] : null;
    const edit = mode === "edit";
    const vars = useMemo(() => themeVars(site.theme), [site.theme]);
    const ctx = {
      site,
      mode,
      page: page2,
      pageId: page2.id,
      homeId: site.homeId,
      item,
      focusItem,
      listPage: page2.kind === "detail" ? pageById(site, page2.parentId) || listPageFor(site, page2.collection) : null,
      media: (id) => {
        const m = mediaBy[id];
        return m ? { src: mediaSrc(m), alt: m.alt } : null;
      },
      collection: (c2) => site.collections[c2],
      nav: (menu) => {
        const items = site.nav[menu] || [];
        if (!published) return items;
        return items.filter((n3) => !(n3.link && n3.link.kind === "page" && (() => {
          const p = pageById(site, n3.link.pageId);
          return !p || p.status !== "live";
        })()));
      },
      linkProps: (link) => {
        const r = resolveLink(site, link, mediaBy);
        const active = !!(link && link.kind === "page" && (link.pageId === page2.id || page2.parentId && link.pageId === page2.parentId && page2.kind === "detail"));
        return {
          href: r.href || "#",
          broken: edit && (r.broken || !link && false),
          active,
          onClick: (e) => {
            e.preventDefault();
            if (mode === "preview" && onNavigate) onNavigate(link);
          }
        };
      }
    };
    const header = page2.header || site.header;
    const footer = page2.footer || site.footer;
    const sel2 = (id) => !!(selection && selection.id === id);
    const render2 = (sec) => {
      const B2 = BLOCKS[sec.type];
      return B2 ? /* @__PURE__ */ React.createElement(B2.component, { v: sec.values }) : null;
    };
    const onClick = (e) => {
      if (!edit || !onSelect) return;
      if (e.target.closest(".ed-tools, .ed-insert, .ed-hidden-sec button, .ed-empty button")) return;
      const w = e.target.closest("[data-sid]");
      if (!w) return;
      const f = e.target.closest("[data-field]");
      onSelect({ id: w.getAttribute("data-sid"), scope: w.getAttribute("data-scope"), field: f && w.contains(f) ? f.getAttribute("data-field") : null, pageId: page2.id });
    };
    const n2 = page2.sections.length;
    return /* @__PURE__ */ React.createElement(SiteCtx.Provider, { value: ctx }, /* @__PURE__ */ React.createElement("div", { className: "site-root" + (edit ? " is-edit" : ""), style: vars, onClick }, /* @__PURE__ */ React.createElement(Shell, { sec: header, scope: "header", edit, selected: sel2(header.id), onAction, chrome, shared: !page2.header }, render2(header)), /* @__PURE__ */ React.createElement("main", null, page2.sections.map((s, i) => /* @__PURE__ */ React.createElement(Shell, { key: s.id, sec: s, scope: "page", index: i, total: n2, edit, selected: sel2(s.id), onAction, chrome }, render2(s))), edit && n2 === 0 && /* @__PURE__ */ React.createElement("div", { className: "ed-empty" }, /* @__PURE__ */ React.createElement(Icon, { name: "layers", size: 22 }), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "This page is empty"), /* @__PURE__ */ React.createElement("br", null), "Add a section from the block library to get started."), /* @__PURE__ */ React.createElement("button", { type: "button", className: "btn btn-primary btn-md", onClick: (e) => {
      e.stopPropagation();
      onAction("insert", { index: 0 });
    } }, /* @__PURE__ */ React.createElement(Icon, { name: "plus", size: 16 }), /* @__PURE__ */ React.createElement("span", null, "Add section")))), /* @__PURE__ */ React.createElement(Shell, { sec: footer, scope: "footer", edit, selected: sel2(footer.id), onAction, chrome, shared: !page2.footer }, render2(footer))));
  }
  function DeviceFrame({ device, fill, scrollRef, onScale, children, className }) {
    const wrap = useRef(null);
    const [box, setBox] = useState({ w: 0, h: 0 });
    useLayoutEffect(() => {
      const el = wrap.current;
      const measure = () => {
        const cs = getComputedStyle(el);
        setBox({ w: el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight), h: el.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom) });
      };
      measure();
      const ro = new ResizeObserver(measure);
      ro.observe(el);
      return () => ro.disconnect();
    }, []);
    const W = fill ? box.w : DEVICES[device].w;
    const s = fill || !box.w ? 1 : Math.min(1, box.w / W);
    const H = box.h / s;
    useLayoutEffect(() => {
      onScale && onScale(s);
    }, [s]);
    return /* @__PURE__ */ React.createElement("div", { ref: wrap, className: "frame-wrap dev-" + (fill ? "fill" : device) + (className ? " " + className : "") }, box.w > 0 && /* @__PURE__ */ React.createElement("div", { className: "frame", style: { width: W * s, height: box.h } }, /* @__PURE__ */ React.createElement("div", { className: "frame-inner", ref: scrollRef, "data-scale": s, style: { width: W, height: H, transform: s !== 1 ? `scale(${s})` : void 0, "--k": 1 / s } }, children)));
  }
  function scrollFrameTo(scroller, selector, smooth = true) {
    if (!scroller) return;
    const el = scroller.querySelector(selector);
    if (!el) {
      scroller.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
      return;
    }
    const s = parseFloat(scroller.getAttribute("data-scale") || "1") || 1;
    const k = scroller.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const sticky = scroller.querySelector(".sb-header.sticky");
    const off = sticky && !el.contains(sticky) ? sticky.offsetHeight : 0;
    scroller.scrollTo({ top: Math.max(0, scroller.scrollTop + (r.top - k.top) / s - off - 8), behavior: smooth ? "smooth" : "auto" });
  }

  // src/ui.jsx
  var mq = typeof window !== "undefined" ? window.matchMedia("(max-width: 959px)") : null;
  function useIsMobile() {
    const [m, setM] = useState(mq ? mq.matches : false);
    useEffect(() => {
      if (!mq) return;
      const f = () => setM(mq.matches);
      mq.addEventListener("change", f);
      return () => mq.removeEventListener("change", f);
    }, []);
    return m;
  }
  var cx = (...a) => a.filter(Boolean).join(" ");
  function Btn2({ variant = "secondary", size = "md", icon, iconRight, children, className, ...p }) {
    return /* @__PURE__ */ React.createElement("button", { type: "button", className: cx("btn", "btn-" + variant, "btn-" + size, !children && "btn-icon-only", className), ...p }, icon && /* @__PURE__ */ React.createElement(Icon, { name: icon, size: size === "sm" ? 14 : 16 }), children && /* @__PURE__ */ React.createElement("span", null, children), iconRight && /* @__PURE__ */ React.createElement(Icon, { name: iconRight, size: 14 }));
  }
  function IconBtn({ icon, label, active, size = "md", className, badge, ...p }) {
    return /* @__PURE__ */ React.createElement("button", { type: "button", className: cx("ibtn", "ibtn-" + size, active && "is-active", className), "aria-label": label, title: label, "aria-pressed": active == null ? void 0 : !!active, ...p }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: size === "sm" ? 14 : 16 }), badge ? /* @__PURE__ */ React.createElement("span", { className: "ibtn-badge" }, badge) : null);
  }
  function Segmented({ options, value, onChange, size = "md", full, className, label }) {
    return /* @__PURE__ */ React.createElement("div", { className: cx("seg", "seg-" + size, full && "seg-full", className), role: "radiogroup", "aria-label": label }, options.map((o) => /* @__PURE__ */ React.createElement("button", { key: String(o.value), type: "button", role: "radio", "aria-checked": value === o.value, className: cx("seg-item", value === o.value && "is-on"), onClick: () => onChange(o.value), title: o.title || (o.label ? void 0 : o.aria), "aria-label": o.label ? void 0 : o.aria }, o.icon && /* @__PURE__ */ React.createElement(Icon, { name: o.icon, size: size === "sm" ? 14 : 15 }), o.label && /* @__PURE__ */ React.createElement("span", null, o.label), o.count != null && /* @__PURE__ */ React.createElement("span", { className: "seg-count" }, o.count))));
  }
  function Switch({ checked, onChange, label, hint, id, disabled }) {
    return /* @__PURE__ */ React.createElement("label", { className: cx("switch-row", disabled && "is-disabled"), htmlFor: id }, /* @__PURE__ */ React.createElement("span", { className: "switch-text" }, /* @__PURE__ */ React.createElement("span", null, label), hint && /* @__PURE__ */ React.createElement("small", null, hint)), /* @__PURE__ */ React.createElement("button", { id, type: "button", role: "switch", "aria-checked": !!checked, disabled, className: cx("switch", checked && "is-on"), onClick: () => onChange(!checked) }, /* @__PURE__ */ React.createElement("span", null)));
  }
  function Field({ label, hint, error, warn, children, action, id, count, className }) {
    return /* @__PURE__ */ React.createElement("div", { className: cx("field", className), id }, (label || action) && /* @__PURE__ */ React.createElement("div", { className: "field-top" }, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, label), count, action), children, error && /* @__PURE__ */ React.createElement("p", { className: "field-msg is-error" }, /* @__PURE__ */ React.createElement(Icon, { name: "alertCircle", size: 13 }), error), warn && /* @__PURE__ */ React.createElement("p", { className: "field-msg is-warn" }, /* @__PURE__ */ React.createElement(Icon, { name: "alert", size: 13 }), warn), hint && !error && /* @__PURE__ */ React.createElement("p", { className: "field-hint" }, hint));
  }
  function Input({ className, prefix, suffix, ...p }) {
    if (prefix || suffix) {
      return /* @__PURE__ */ React.createElement("div", { className: cx("input-group", className) }, prefix && /* @__PURE__ */ React.createElement("span", { className: "input-affix" }, prefix), /* @__PURE__ */ React.createElement("input", { className: "input bare", ...p }), suffix && /* @__PURE__ */ React.createElement("span", { className: "input-affix" }, suffix));
    }
    return /* @__PURE__ */ React.createElement("input", { className: cx("input", className), ...p });
  }
  var TextArea = forwardRef(function TextArea2({ className, ...p }, ref) {
    return /* @__PURE__ */ React.createElement("textarea", { ref, className: cx("input textarea", className), ...p });
  });
  function Select({ value, onChange, options, className, id, ...p }) {
    return /* @__PURE__ */ React.createElement("div", { className: cx("select", className) }, /* @__PURE__ */ React.createElement("select", { id, value: value == null ? "" : value, onChange: (e) => onChange(e.target.value), ...p }, options.map((o) => /* @__PURE__ */ React.createElement("option", { key: String(o.value), value: o.value, disabled: o.disabled }, o.label))), /* @__PURE__ */ React.createElement(Icon, { name: "chevUpDown", size: 14 }));
  }
  var Badge = ({ tone = "neutral", children, icon, className }) => /* @__PURE__ */ React.createElement("span", { className: cx("badge", "badge-" + tone, className) }, icon && /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 12 }), children);
  var Kbd = ({ children }) => /* @__PURE__ */ React.createElement("kbd", { className: "kbd" }, children);
  function Empty({ icon = "layers", title, children, action }) {
    return /* @__PURE__ */ React.createElement("div", { className: "empty" }, /* @__PURE__ */ React.createElement("span", { className: "empty-ic" }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 20 })), /* @__PURE__ */ React.createElement("p", { className: "empty-title" }, title), children && /* @__PURE__ */ React.createElement("p", { className: "empty-text" }, children), action);
  }
  var zTop = 100;
  function Overlay({ open, onClose, title, subtitle, children, footer, size = "md", headerExtra, bodyClass, className, align = "center", noHead }) {
    const mobile = useIsMobile();
    const [z] = useState(() => ++zTop);
    useEffect(() => {
      if (!open) return;
      const f = (e) => {
        if (e.key === "Escape") {
          e.stopPropagation();
          onClose && onClose();
        }
      };
      window.addEventListener("keydown", f, true);
      return () => window.removeEventListener("keydown", f, true);
    }, [open, onClose]);
    if (!open) return null;
    return createPortal(
      /* @__PURE__ */ React.createElement("div", { className: cx("ov-root", mobile ? "as-sheet" : "as-dialog", "align-" + align, className), style: { zIndex: z } }, /* @__PURE__ */ React.createElement("div", { className: "ov-scrim", onClick: onClose }), /* @__PURE__ */ React.createElement("div", { className: cx("ov-panel", "size-" + size), role: "dialog", "aria-modal": "true", "aria-label": typeof title === "string" ? title : void 0 }, mobile && /* @__PURE__ */ React.createElement("div", { className: "sheet-grab", onClick: onClose }), !noHead && /* @__PURE__ */ React.createElement("div", { className: "ov-head" }, /* @__PURE__ */ React.createElement("div", { className: "ov-titles" }, /* @__PURE__ */ React.createElement("h2", null, title), subtitle && /* @__PURE__ */ React.createElement("p", null, subtitle)), headerExtra, /* @__PURE__ */ React.createElement(IconBtn, { icon: "x", label: "Close", onClick: onClose })), /* @__PURE__ */ React.createElement("div", { className: cx("ov-body", bodyClass) }, children), footer && /* @__PURE__ */ React.createElement("div", { className: "ov-foot" }, footer))),
      document.body
    );
  }
  function DockSheet({ open, title, onClose, children, actions, tall, className }) {
    if (!open) return null;
    return /* @__PURE__ */ React.createElement("section", { className: cx("dock-sheet", tall && "is-tall", className), "aria-label": typeof title === "string" ? title : void 0 }, /* @__PURE__ */ React.createElement("div", { className: "sheet-grab", onClick: onClose }), /* @__PURE__ */ React.createElement("div", { className: "dock-head" }, /* @__PURE__ */ React.createElement("h2", null, title), /* @__PURE__ */ React.createElement("div", { className: "dock-actions" }, actions, /* @__PURE__ */ React.createElement(IconBtn, { icon: "x", label: "Close", onClick: onClose }))), /* @__PURE__ */ React.createElement("div", { className: "dock-body" }, children));
  }
  function Popover({ anchor, open, onClose, children, width = 240, placement = "bottom-start", className }) {
    const ref = useRef(null);
    const [pos, setPos] = useState(null);
    useLayoutEffect(() => {
      if (!open || !anchor) return;
      const place = () => {
        const r = anchor.getBoundingClientRect();
        const el = ref.current;
        const h = el ? el.offsetHeight : 200;
        const w = Math.min(width, window.innerWidth - 16);
        let left = placement.endsWith("end") ? r.right - w : r.left;
        left = Math.max(8, Math.min(left, window.innerWidth - w - 8));
        let top = r.bottom + 4;
        if (top + h > window.innerHeight - 8 && r.top - h - 4 > 8) top = r.top - h - 4;
        top = Math.max(8, Math.min(top, window.innerHeight - h - 8));
        setPos({ left, top, width: w });
      };
      place();
      const t = setTimeout(place, 0);
      window.addEventListener("resize", place);
      return () => {
        clearTimeout(t);
        window.removeEventListener("resize", place);
      };
    }, [open, anchor, width, placement]);
    useEffect(() => {
      if (!open) return;
      const down = (e) => {
        if (ref.current && !ref.current.contains(e.target) && !(anchor && anchor.contains(e.target))) onClose();
      };
      const key = (e) => {
        if (e.key === "Escape") {
          e.stopPropagation();
          onClose();
        }
      };
      window.addEventListener("pointerdown", down, true);
      window.addEventListener("keydown", key, true);
      return () => {
        window.removeEventListener("pointerdown", down, true);
        window.removeEventListener("keydown", key, true);
      };
    }, [open, anchor, onClose]);
    if (!open) return null;
    return createPortal(
      /* @__PURE__ */ React.createElement("div", { ref, className: cx("popover", className), style: pos ? { left: pos.left, top: pos.top, width: pos.width } : { left: -9999, top: 0, width } }, children),
      document.body
    );
  }
  function MenuList2({ items, onClose }) {
    return /* @__PURE__ */ React.createElement("div", { className: "menu", role: "menu" }, items.filter(Boolean).map((it, i) => {
      if (it === "-") return /* @__PURE__ */ React.createElement("div", { key: i, className: "menu-sep" });
      if (it.heading) return /* @__PURE__ */ React.createElement("div", { key: i, className: "menu-heading" }, it.heading);
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: i,
          type: "button",
          role: "menuitem",
          className: cx("menu-item", it.danger && "is-danger"),
          disabled: it.disabled,
          title: it.title,
          onClick: () => {
            onClose && onClose();
            it.onClick && it.onClick();
          }
        },
        it.icon && /* @__PURE__ */ React.createElement(Icon, { name: it.icon, size: 15 }),
        /* @__PURE__ */ React.createElement("span", { className: "menu-label" }, it.label),
        it.hint && /* @__PURE__ */ React.createElement("span", { className: "menu-hint" }, it.hint)
      );
    }));
  }
  function MenuButton({ icon = "dots", label = "More", items, size = "sm", className, children, width = 220, placement = "bottom-end" }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const close = useCallback(() => setOpen(false), []);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, children ? /* @__PURE__ */ React.createElement("span", { ref, onClick: (e) => {
      e.stopPropagation();
      setOpen((o) => !o);
    }, className }, children) : /* @__PURE__ */ React.createElement("span", { ref, className }, /* @__PURE__ */ React.createElement(IconBtn, { icon, label, size, active: open || void 0, onClick: (e) => {
      e.stopPropagation();
      setOpen((o) => !o);
    } })), /* @__PURE__ */ React.createElement(Popover, { anchor: ref.current, open, onClose: close, width, placement }, /* @__PURE__ */ React.createElement(MenuList2, { items: typeof items === "function" ? items() : items, onClose: close })));
  }
  var toastSet = null;
  var tid = 0;
  function toast(text, opts = {}) {
    if (!toastSet) return;
    const id = ++tid;
    toastSet((t) => [...t.slice(-2), { id, text, ...opts }]);
    setTimeout(() => toastSet && toastSet((t) => t.filter((x) => x.id !== id)), opts.duration || 3800);
  }
  function Toaster() {
    const [items, setItems] = useState([]);
    useEffect(() => {
      toastSet = setItems;
      return () => {
        toastSet = null;
      };
    }, []);
    return /* @__PURE__ */ React.createElement("div", { className: "toaster", "aria-live": "polite" }, items.map((t) => /* @__PURE__ */ React.createElement("div", { key: t.id, className: cx("toast", t.tone && "toast-" + t.tone) }, t.icon && /* @__PURE__ */ React.createElement(Icon, { name: t.icon, size: 15 }), /* @__PURE__ */ React.createElement("span", null, t.text), t.action && /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => {
      t.action.onClick();
      setItems((x) => x.filter((y) => y.id !== t.id));
    } }, t.action.label))));
  }
  function Scaled({ width = 1280, maxHeight, minHeight, children, className, onClick, label }) {
    const outer = useRef(null);
    const inner = useRef(null);
    const [st, setSt] = useState({ s: 0.25, h: 160 });
    useLayoutEffect(() => {
      const measure = () => {
        if (!outer.current || !inner.current) return;
        const s = outer.current.clientWidth / width;
        setSt({ s, h: inner.current.offsetHeight * s });
      };
      measure();
      const ro = new ResizeObserver(measure);
      ro.observe(outer.current);
      ro.observe(inner.current);
      return () => ro.disconnect();
    }, [width]);
    let h = st.h;
    if (maxHeight) h = Math.min(h, maxHeight);
    if (minHeight) h = Math.max(h, minHeight);
    return /* @__PURE__ */ React.createElement("div", { ref: outer, className: cx("scaled", className), style: { height: h }, onClick, "aria-label": label, role: onClick ? "button" : void 0 }, /* @__PURE__ */ React.createElement("div", { ref: inner, className: "scaled-in", style: { width, transform: `scale(${st.s})` } }, children));
  }
  function DragList({ items, getKey, renderItem, onMove, nest = false, className }) {
    const ref = useRef(null);
    const dref = useRef(null);
    const [drag, setDrag] = useState(null);
    const start = (e, index) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      const rows = [...ref.current.children].filter((c2) => c2.hasAttribute("data-drow"));
      const rects = rows.map((r) => r.getBoundingClientRect());
      let len = 1;
      if (nest && !items[index].depth) while (index + len < items.length && items[index + len].depth > 0) len++;
      const st = { from: index, len, x0: e.clientX, y0: e.clientY, rects, dx: 0, dy: 0, target: index, depth: items[index].depth || 0, startDepth: items[index].depth || 0 };
      dref.current = st;
      setDrag(st);
      const move = (ev) => {
        const d = dref.current;
        if (!d) return;
        const dy = ev.clientY - d.y0, dx = ev.clientX - d.x0;
        const top = d.rects[d.from].top, bottom = d.rects[d.from + d.len - 1].bottom;
        const center = (top + bottom) / 2 + dy;
        const others = d.rects.map((r, i) => ({ r, i })).filter((o) => o.i < d.from || o.i >= d.from + d.len);
        let k = 0;
        others.forEach((o) => {
          if ((o.r.top + o.r.bottom) / 2 < center) k++;
        });
        let depth = d.startDepth;
        if (nest) {
          depth = Math.max(0, Math.min(1, d.startDepth + Math.round(dx / 28)));
          if (k === 0 || d.len > 1) depth = 0;
        }
        const nd = { ...d, dx, dy, target: k, depth };
        dref.current = nd;
        setDrag(nd);
      };
      const up = () => {
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
        window.removeEventListener("pointercancel", up);
        const d = dref.current;
        dref.current = null;
        setDrag(null);
        if (d && (d.target !== d.from || d.depth !== d.startDepth)) onMove(d.from, d.target, d.depth, d.len);
      };
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
      window.addEventListener("pointercancel", up);
    };
    const shiftFor = (i) => {
      if (!drag) return 0;
      const { from, len, target, rects } = drag;
      if (i >= from && i < from + len) return drag.dy;
      const H = rects[from + len - 1].bottom - rects[from].top;
      const j = i < from ? i : i - len;
      if (i < from && j >= target) return H;
      if (i >= from + len && j < target) return -H;
      return 0;
    };
    return /* @__PURE__ */ React.createElement("div", { ref, className: cx("dlist", drag && "is-dragging", className) }, items.map((it, i) => {
      const inBlock = drag && i >= drag.from && i < drag.from + drag.len;
      const depth = inBlock && i === drag.from ? drag.depth : it.depth || 0;
      return /* @__PURE__ */ React.createElement("div", { key: getKey(it), "data-drow": "", className: cx("drow", inBlock && "is-lifted"), style: { transform: drag ? `translateY(${shiftFor(i)}px)` : void 0, transition: inBlock ? "none" : void 0, zIndex: inBlock ? 5 : void 0 } }, renderItem(it, i, { handle: { onPointerDown: (e) => start(e, i), className: "drag-handle", "aria-label": "Drag to reorder", role: "button", tabIndex: -1 }, depth, dragging: !!inBlock }));
    }));
  }
  function moveBlock(arr, from, to, len = 1) {
    const a = arr.slice();
    const block = a.splice(from, len);
    a.splice(to, 0, ...block);
    return a;
  }

  // src/fields.jsx
  var FILLER = /\b(very|really|just|simply|actually|basically|truly|quite)\s+/gi;
  var sentences = (t) => (String(t).match(/[^.!?]+[.!?]*/g) || [t]).map((s) => s.trim()).filter(Boolean);
  var cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  var end = (s) => /[.!?”]$/.test(s) ? s : s + ".";
  function rewrite(text, tone, isHeading) {
    const t = String(text || "").trim();
    if (!t) return [];
    const first = sentences(t)[0];
    if (tone === "shorter") {
      if (isHeading) {
        const words = t.replace(/[.]$/, "").split(/\s+/);
        const a2 = t.replace(/\s+(for|with|in|on|at|from|to|by|that|who)\s+.*$/i, "").replace(/[.]$/, "");
        const b3 = cap(words.slice(1).join(" "));
        const c2 = words.slice(0, Math.max(3, Math.ceil(words.length / 2))).join(" ");
        return [a2, b3, c2].filter((x, i, arr) => x && x.split(" ").length >= 2 && x !== t && arr.indexOf(x) === i).slice(0, 2);
      }
      const a = end(first.replace(FILLER, "").trim());
      const clause = t.replace(FILLER, "").split(/,\s+/)[0];
      const b2 = end(clause.split(/\s+/).slice(0, 14).join(" ").replace(/[,;:–-]+$/, ""));
      return [a, b2].filter((x, i, arr) => x && arr.indexOf(x) === i && x !== t);
    }
    if (tone === "warmer") {
      const base = t.replace(/^We offer/i, "We\u2019re happy to offer").replace(/^Our /, "Our friendly ");
      if (isHeading) return [base.replace(/\.$/, "") + ", with a smile", "Come in. " + cap(base.replace(/\.$/, ""))];
      return [end(base) + " We\u2019d love to see you.", "You\u2019re in good hands here. " + base];
    }
    if (tone === "confident") {
      const a = t.replace(/\b(we try to|try to|aim to|hope to|can help you|can help)\b\s*/gi, "").replace(/\bcan\b/g, "will").replace(FILLER, "");
      return [cap(a), isHeading ? cap(first.replace(/\.$/, "")) + ". Guaranteed in writing" : end(cap(first.replace(FILLER, ""))) + " No surprises."];
    }
    const swap = [[/\butilise\b/gi, "use"], [/\bapproximately\b/gi, "about"], [/\bcommence\b/gi, "start"], [/\badditional\b/gi, "more"], [/\bassistance\b/gi, "help"], [/\bin order to\b/gi, "to"], [/\bprior to\b/gi, "before"], [/\bpurchase\b/gi, "buy"], [/\bresidence\b/gi, "home"]];
    let s = t;
    swap.forEach(([a, b2]) => {
      s = s.replace(a, b2);
    });
    const parts = s.split(/,\s+(?:and|but|so)\s+/);
    const b = parts.length > 1 ? parts.map((p) => end(cap(p.trim()))).join(" ") : sentences(s).map((x) => end(cap(x.replace(FILLER, "")))).join(" ");
    return [s === t ? s.replace(FILLER, "") : s, b].filter((x, i, arr) => arr.indexOf(x) === i);
  }
  var TONES = [
    { id: "shorter", label: "Shorter" },
    { id: "warmer", label: "Warmer" },
    { id: "confident", label: "More confident" },
    { id: "simpler", label: "Simpler" }
  ];
  function AiButton({ value, onApply, heading }) {
    const ref = useRef(null);
    const [open, setOpen] = useState(false);
    const [tone, setTone] = useState(null);
    const [busy, setBusy] = useState(false);
    const [out, setOut] = useState([]);
    const run = (t) => {
      setTone(t);
      setBusy(true);
      setOut([]);
      setTimeout(() => {
        setOut(rewrite(value, t, heading));
        setBusy(false);
      }, 700 + Math.random() * 400);
    };
    const close = useCallback(() => {
      setOpen(false);
      setTone(null);
      setOut([]);
    }, []);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", { ref, type: "button", className: "ai-btn", onClick: () => setOpen((o) => !o), disabled: !value, title: value ? "Rewrite with AI" : "Write something first" }, /* @__PURE__ */ React.createElement(Icon, { name: "sparkle", size: 13 }), /* @__PURE__ */ React.createElement("span", null, "Rewrite")), /* @__PURE__ */ React.createElement(Popover, { anchor: ref.current, open, onClose: close, width: 320, placement: "bottom-end" }, /* @__PURE__ */ React.createElement("div", { className: "ai-pop" }, /* @__PURE__ */ React.createElement("p", { className: "ai-head" }, /* @__PURE__ */ React.createElement(Icon, { name: "sparkle", size: 14 }), " Rewrite with AI"), /* @__PURE__ */ React.createElement("div", { className: "ai-tones" }, TONES.map((t) => /* @__PURE__ */ React.createElement("button", { key: t.id, type: "button", className: cx("chip", tone === t.id && "is-on"), onClick: () => run(t.id) }, t.label))), busy && /* @__PURE__ */ React.createElement("div", { className: "ai-busy" }, /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("span", null)), !busy && out.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "ai-out" }, out.map((o, i) => /* @__PURE__ */ React.createElement("button", { key: i, type: "button", className: "ai-option", onClick: () => {
      onApply(o);
      close();
      toast("Text replaced. Press \u2318Z to undo.", { icon: "sparkle" });
    } }, /* @__PURE__ */ React.createElement("span", null, o), /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 14 })))), !busy && !out.length && /* @__PURE__ */ React.createElement("p", { className: "ai-note" }, "Pick a direction. Your original stays until you choose a suggestion."))));
  }
  function LinkChip({ link, onChange, placeholder = "Choose where it goes" }) {
    const ed = useEd();
    const r = link ? resolveLink(ed.site, link, ed.mediaBy) : null;
    const icon = !link ? "link" : { page: "file", section: "hash", item: "database", url: "globe", phone: "mobile", whatsapp: "message", email: "mail", file: "download", none: "link" }[link.kind];
    return /* @__PURE__ */ React.createElement("button", { type: "button", className: cx("link-chip", r && r.broken && "is-broken", r && r.hidden && "is-hidden"), onClick: () => ed.pickLink(link, onChange) }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 14 }), /* @__PURE__ */ React.createElement("span", { className: "link-chip-main" }, link ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("strong", null, r.text), /* @__PURE__ */ React.createElement("small", null, r.broken ? "Broken link" : link.kind === "page" || link.kind === "section" || link.kind === "item" ? r.href : LINK_KIND_LABEL[link.kind], link.newTab ? " \xB7 new tab" : "", r.hidden && !r.broken ? " \xB7 not public" : "")) : /* @__PURE__ */ React.createElement("small", null, placeholder)), /* @__PURE__ */ React.createElement(Icon, { name: "chevRight", size: 14 }));
  }
  var KINDS = [
    { id: "page", label: "Page", icon: "file" },
    { id: "section", label: "Section", icon: "hash" },
    { id: "item", label: "Collection item", icon: "database" },
    { id: "url", label: "Web address", icon: "globe" },
    { id: "phone", label: "Phone", icon: "mobile" },
    { id: "whatsapp", label: "WhatsApp", icon: "message" },
    { id: "email", label: "Email", icon: "mail" },
    { id: "file", label: "File download", icon: "download" }
  ];
  function LinkPicker({ value, onSave, onClose }) {
    const ed = useEd();
    const { site } = ed;
    const [d, setD] = useState(() => value && value.kind !== "none" ? clone(value) : { kind: "page", pageId: null });
    const [q, setQ] = useState("");
    const set = (patch) => setD((x) => ({ ...x, ...patch }));
    const setKind = (kind) => {
      const base = { kind, newTab: d.newTab };
      if (kind === "section") base.pageId = d.pageId || ed.loc.pageId;
      if (kind === "item") base.collection = "services";
      if (kind === "whatsapp" || kind === "phone") base.phone = d.phone || "";
      setD(base);
    };
    const tree = pageTree(site).filter((t) => t.page.kind !== "detail");
    const r = resolveLink(site, d, ed.mediaBy);
    const valid = { page: !!d.pageId, section: !!d.sectionId, item: !!d.itemId, url: /^https?:\/\/.+\..+/.test(d.url || ""), phone: (d.phone || "").replace(/\D/g, "").length >= 8, whatsapp: (d.phone || "").replace(/\D/g, "").length >= 8, email: /.+@.+\..+/.test(d.email || ""), file: !!d.mediaId }[d.kind];
    const secPage = site.pages.find((p) => p.id === d.pageId);
    return /* @__PURE__ */ React.createElement(
      Overlay,
      {
        open: true,
        onClose,
        title: "Link to",
        size: "lg",
        bodyClass: "lp-body",
        footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "lp-preview" }, valid ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icon, { name: "arrowRight", size: 14 }), /* @__PURE__ */ React.createElement("code", null, r.href)) : /* @__PURE__ */ React.createElement("span", { className: "muted" }, "Choose a destination")), value && /* @__PURE__ */ React.createElement(Btn2, { variant: "ghost", onClick: () => {
          onSave(null);
          onClose();
        } }, "Remove link"), /* @__PURE__ */ React.createElement(Btn2, { onClick: onClose }, "Cancel"), /* @__PURE__ */ React.createElement(Btn2, { variant: "primary", disabled: !valid, onClick: () => {
          onSave(d);
          onClose();
        } }, "Save link"))
      },
      /* @__PURE__ */ React.createElement("nav", { className: "lp-kinds", "aria-label": "Link type" }, KINDS.map((k) => /* @__PURE__ */ React.createElement("button", { key: k.id, type: "button", className: cx("lp-kind", d.kind === k.id && "is-on"), onClick: () => setKind(k.id) }, /* @__PURE__ */ React.createElement(Icon, { name: k.icon, size: 15 }), /* @__PURE__ */ React.createElement("span", null, k.label)))),
      /* @__PURE__ */ React.createElement("div", { className: "lp-pane" }, d.kind === "page" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Input, { placeholder: "Search pages", value: q, onChange: (e) => setQ(e.target.value), autoFocus: !ed.mobile }), /* @__PURE__ */ React.createElement("div", { className: "lp-list" }, tree.filter((t) => !q || t.page.title.toLowerCase().includes(q.toLowerCase())).map(({ page: page2, depth }) => /* @__PURE__ */ React.createElement("button", { key: page2.id, type: "button", className: cx("lp-row", d.pageId === page2.id && "is-on"), style: { paddingLeft: 12 + depth * 16 }, onClick: () => set({ pageId: page2.id }) }, /* @__PURE__ */ React.createElement(Icon, { name: page2.id === site.homeId ? "home" : page2.kind === "collection" ? "database" : "file", size: 14 }), /* @__PURE__ */ React.createElement("span", { className: "lp-row-title" }, page2.title), page2.status !== "live" && /* @__PURE__ */ React.createElement(Badge, { tone: page2.status === "draft" ? "warn" : "neutral" }, page2.status === "draft" ? "Draft" : "Hidden"), /* @__PURE__ */ React.createElement("code", null, pagePath(site, page2)))))), d.kind === "section" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Field, { label: "Page" }, /* @__PURE__ */ React.createElement(Select, { value: d.pageId || "", onChange: (v) => set({ pageId: v, sectionId: null }), options: tree.map((t) => ({ value: t.page.id, label: "\u2014".repeat(t.depth) + " " + t.page.title })) })), /* @__PURE__ */ React.createElement("div", { className: "lp-list" }, secPage && secPage.sections.map((s) => /* @__PURE__ */ React.createElement("button", { key: s.id, type: "button", className: cx("lp-row", d.sectionId === s.id && "is-on"), onClick: () => set({ sectionId: s.id }) }, /* @__PURE__ */ React.createElement(Icon, { name: "hash", size: 14 }), /* @__PURE__ */ React.createElement("span", { className: "lp-row-title" }, blockTitle(s)), /* @__PURE__ */ React.createElement("code", null, "#", s.anchor)))), /* @__PURE__ */ React.createElement("p", { className: "hint" }, "Visitors land on the page and scroll straight to this section.")), d.kind === "item" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Segmented, { value: d.collection, onChange: (v) => set({ collection: v, itemId: null }), options: Object.values(site.collections).map((c2) => ({ value: c2.id, label: c2.name })) }), /* @__PURE__ */ React.createElement("div", { className: "lp-list" }, site.collections[d.collection].items.map((it) => /* @__PURE__ */ React.createElement("button", { key: it.id, type: "button", className: cx("lp-row", d.itemId === it.id && "is-on"), onClick: () => set({ itemId: it.id }) }, /* @__PURE__ */ React.createElement(Icon, { name: "fileText", size: 14 }), /* @__PURE__ */ React.createElement("span", { className: "lp-row-title" }, it.title), /* @__PURE__ */ React.createElement("code", null, itemPath(site, d.collection, it) || "no entry page"))))), d.kind === "url" && /* @__PURE__ */ React.createElement(Field, { label: "Web address", hint: "Starts with https://" }, /* @__PURE__ */ React.createElement(Input, { value: d.url || "", onChange: (e) => set({ url: e.target.value }), placeholder: "https://example.com", autoFocus: !ed.mobile })), d.kind === "phone" && /* @__PURE__ */ React.createElement(Field, { label: "Phone number", hint: "Tapping the link opens the phone app on mobiles." }, /* @__PURE__ */ React.createElement(Input, { value: d.phone || "", onChange: (e) => set({ phone: e.target.value }), placeholder: "+91 98450 21734", inputMode: "tel" })), d.kind === "whatsapp" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Field, { label: "WhatsApp number" }, /* @__PURE__ */ React.createElement(Input, { value: d.phone || "", onChange: (e) => set({ phone: e.target.value }), placeholder: "+91 98450 21734", inputMode: "tel" })), /* @__PURE__ */ React.createElement(Field, { label: "Message typed in for the visitor", hint: "They can edit it before sending." }, /* @__PURE__ */ React.createElement(TextArea, { rows: 3, value: d.message || "", onChange: (e) => set({ message: e.target.value }), placeholder: "Hi, I\u2019d like to book an appointment." }))), d.kind === "email" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Field, { label: "Email address" }, /* @__PURE__ */ React.createElement(Input, { value: d.email || "", onChange: (e) => set({ email: e.target.value }), placeholder: "hello@yourbusiness.in", inputMode: "email" })), /* @__PURE__ */ React.createElement(Field, { label: "Subject (optional)" }, /* @__PURE__ */ React.createElement(Input, { value: d.subject || "", onChange: (e) => set({ subject: e.target.value }), placeholder: "Appointment request" }))), d.kind === "file" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "lp-list" }, ed.media.filter((m) => m.kind === "file").map((m) => /* @__PURE__ */ React.createElement("button", { key: m.id, type: "button", className: cx("lp-row", d.mediaId === m.id && "is-on"), onClick: () => set({ mediaId: m.id }) }, /* @__PURE__ */ React.createElement(Icon, { name: "fileText", size: 14 }), /* @__PURE__ */ React.createElement("span", { className: "lp-row-title" }, m.name), /* @__PURE__ */ React.createElement("code", null, m.size.toFixed(1), " MB")))), /* @__PURE__ */ React.createElement(Btn2, { icon: "upload", onClick: () => ed.pickMedia((id) => set({ mediaId: id }), { kind: "file" }) }, "Upload or choose from media")), ["page", "section", "item", "url", "file"].includes(d.kind) && /* @__PURE__ */ React.createElement("div", { className: "lp-newtab" }, /* @__PURE__ */ React.createElement(Switch, { id: "lp-newtab", label: "Open in a new tab", checked: !!d.newTab, onChange: (v) => set({ newTab: v }) })))
    );
  }
  function ImageField({ value, onChange }) {
    const ed = useEd();
    const m = ed.mediaBy[value];
    const src = mediaSrc(m);
    const [alt, setAlt] = useState(m ? m.alt : "");
    useEffect(() => setAlt(m ? m.alt : ""), [value, m && m.alt]);
    const saveAlt = (a) => ed.setMedia((list2) => list2.map((x) => x.id === value ? { ...x, alt: a } : x));
    const suggest = () => {
      const known = { "m-cl-lounge": "Bright waiting lounge with an orange sofa, a pendant lamp and a potted plant by the window" };
      const s = known[value] || cap(m.name.replace(/\.[a-z]+$/, "").replace(/[-_]/g, " "));
      setAlt(s);
      saveAlt(s);
      toast("Alt text suggested from the image", { icon: "sparkle" });
    };
    return /* @__PURE__ */ React.createElement("div", { className: "img-field" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "img-thumb", onClick: () => ed.pickMedia(onChange) }, src ? /* @__PURE__ */ React.createElement("img", { src, alt: "" }) : /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Icon, { name: "image", size: 20 }), /* @__PURE__ */ React.createElement("small", null, "Choose image"))), /* @__PURE__ */ React.createElement("div", { className: "img-meta" }, m ? /* @__PURE__ */ React.createElement("span", { className: "img-name" }, m.name) : /* @__PURE__ */ React.createElement("span", { className: "muted" }, "No image"), /* @__PURE__ */ React.createElement("div", { className: "img-actions" }, /* @__PURE__ */ React.createElement(Btn2, { size: "sm", icon: "image", onClick: () => ed.pickMedia(onChange) }, m ? "Replace" : "Choose"), m && /* @__PURE__ */ React.createElement(IconBtn, { size: "sm", icon: "x", label: "Remove image", onClick: () => onChange(null) }))), m && /* @__PURE__ */ React.createElement("div", { className: "img-alt" }, /* @__PURE__ */ React.createElement("div", { className: "field-top" }, /* @__PURE__ */ React.createElement("label", { className: "field-label", htmlFor: "alt-" + value }, "Alt text"), !alt && /* @__PURE__ */ React.createElement("button", { type: "button", className: "ai-btn", onClick: suggest }, /* @__PURE__ */ React.createElement(Icon, { name: "sparkle", size: 13 }), /* @__PURE__ */ React.createElement("span", null, "Suggest"))), /* @__PURE__ */ React.createElement(Input, { id: "alt-" + value, value: alt, placeholder: "Describe the image for people using screen readers", onChange: (e) => setAlt(e.target.value), onBlur: () => alt !== m.alt && saveAlt(alt), className: !alt ? "is-warn" : "" }), !alt && /* @__PURE__ */ React.createElement("p", { className: "field-msg is-warn" }, /* @__PURE__ */ React.createElement(Icon, { name: "alert", size: 13 }), "Missing alt text. It will show up in the publish checklist.")));
  }
  function RichInput({ id, value, onChange }) {
    const ref = useRef(null);
    const wrap = (mark) => {
      const el = ref.current;
      if (!el) return;
      const { selectionStart: a, selectionEnd: b } = el;
      const v = value || "";
      const sel2 = v.slice(a, b) || "text";
      onChange(v.slice(0, a) + mark + sel2 + mark + v.slice(b));
      setTimeout(() => {
        el.focus();
        el.setSelectionRange(a + mark.length, a + mark.length + sel2.length);
      }, 0);
    };
    const bullet = () => {
      const el = ref.current;
      const v = value || "";
      const a = v.lastIndexOf("\n", el.selectionStart - 1) + 1;
      onChange(v.slice(0, a) + "- " + v.slice(a));
    };
    return /* @__PURE__ */ React.createElement("div", { className: "rich" }, /* @__PURE__ */ React.createElement("div", { className: "rich-bar" }, /* @__PURE__ */ React.createElement("button", { type: "button", title: "Bold", onClick: () => wrap("**") }, /* @__PURE__ */ React.createElement(Icon, { name: "bold", size: 14 })), /* @__PURE__ */ React.createElement("button", { type: "button", title: "Italic", onClick: () => wrap("*") }, /* @__PURE__ */ React.createElement(Icon, { name: "italic", size: 14 })), /* @__PURE__ */ React.createElement("button", { type: "button", title: "Bulleted list", onClick: bullet }, /* @__PURE__ */ React.createElement(Icon, { name: "list", size: 14 })), /* @__PURE__ */ React.createElement("span", { className: "rich-hint" }, "Blank line starts a new paragraph")), /* @__PURE__ */ React.createElement(TextArea, { id, ref, rows: 5, value: value || "", onChange: (e) => onChange(e.target.value) }));
  }
  function IconPick({ value, onChange }) {
    const ref = useRef(null);
    const [open, setOpen] = useState(false);
    const close = useCallback(() => setOpen(false), []);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", { ref, type: "button", className: "icon-pick", onClick: () => setOpen((o) => !o) }, /* @__PURE__ */ React.createElement(Icon, { name: value || "dot", size: 18 }), /* @__PURE__ */ React.createElement("span", null, value || "No icon"), /* @__PURE__ */ React.createElement(Icon, { name: "chevDown", size: 14 })), /* @__PURE__ */ React.createElement(Popover, { anchor: ref.current, open, onClose: close, width: 264 }, /* @__PURE__ */ React.createElement("div", { className: "icon-grid" }, SITE_ICONS.map((n2) => /* @__PURE__ */ React.createElement("button", { key: n2, type: "button", title: n2, className: cx(value === n2 && "is-on"), onClick: () => {
      onChange(n2);
      close();
    } }, /* @__PURE__ */ React.createElement(Icon, { name: n2, size: 18 }))))));
  }
  function ListField({ f, value, onChange, fkey, focusIndex }) {
    const ed = useEd();
    const items = Array.isArray(value) ? value : [];
    const [open, setOpen] = useState(focusIndex != null ? focusIndex : -1);
    const keys = useRef([]);
    while (keys.current.length < items.length) keys.current.push(Math.random().toString(36).slice(2));
    keys.current.length = items.length;
    const summary = (it) => {
      const t = f.fields.find((x) => ["text", "textarea"].includes(x.type) && it[x.key]);
      return t ? String(it[t.key]) : f.itemLabel;
    };
    const imgKey = (f.fields.find((x) => x.type === "image") || {}).key;
    const add = () => {
      const blank = Object.fromEntries(f.fields.map((x) => [x.key, x.type === "toggle" ? false : x.type === "button" ? { label: "", link: null } : x.type === "number" ? 5 : x.type === "image" ? null : ""]));
      const base = items.length ? { ...clone(items[items.length - 1]), ...Object.fromEntries(f.fields.filter((x) => ["text", "textarea", "richtext"].includes(x.type)).map((x) => [x.key, ""])) } : blank;
      const first = f.fields.find((x) => x.type === "text");
      if (first) base[first.key] = "New " + f.itemLabel.toLowerCase();
      onChange([...items, base]);
      setOpen(items.length);
    };
    return /* @__PURE__ */ React.createElement("div", { className: "list-field" }, /* @__PURE__ */ React.createElement(
      DragList,
      {
        items: items.map((it, i) => ({ it, i, k: keys.current[i] })),
        getKey: (x) => x.k,
        onMove: (from, to) => {
          keys.current = moveBlock(keys.current, from, to);
          onChange(moveBlock(items, from, to));
          if (open === from) setOpen(to);
        },
        renderItem: ({ it, i }, _, { handle }) => /* @__PURE__ */ React.createElement("div", { className: cx("li-row", open === i && "is-open") }, /* @__PURE__ */ React.createElement("div", { className: "li-head", onClick: () => setOpen(open === i ? -1 : i) }, /* @__PURE__ */ React.createElement("span", { ...handle, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement(Icon, { name: "grip", size: 14 })), imgKey && it[imgKey] ? /* @__PURE__ */ React.createElement("span", { className: "li-thumb" }, /* @__PURE__ */ React.createElement("img", { src: mediaSrc(ed.mediaBy[it[imgKey]]), alt: "" })) : it.icon ? /* @__PURE__ */ React.createElement("span", { className: "li-thumb" }, /* @__PURE__ */ React.createElement(Icon, { name: it.icon, size: 13 })) : imgKey ? /* @__PURE__ */ React.createElement("span", { className: "li-thumb" }, /* @__PURE__ */ React.createElement(Icon, { name: "image", size: 12 })) : null, /* @__PURE__ */ React.createElement("span", { className: "li-title" }, summary(it)), /* @__PURE__ */ React.createElement(MenuButton, { items: [
          { label: "Duplicate", icon: "copy", onClick: () => {
            const a = items.slice();
            a.splice(i + 1, 0, clone(it));
            keys.current.splice(i + 1, 0, Math.random().toString(36).slice(2));
            onChange(a);
          }, disabled: items.length >= f.max },
          { label: "Delete", icon: "trash", danger: true, onClick: () => {
            keys.current.splice(i, 1);
            onChange(items.filter((_2, j) => j !== i));
          } }
        ] }), /* @__PURE__ */ React.createElement(Icon, { name: open === i ? "chevUp" : "chevDown", size: 14, className: "li-chev" })), open === i && /* @__PURE__ */ React.createElement("div", { className: "li-body" }, /* @__PURE__ */ React.createElement(FieldList, { fields: f.fields, values: it, idPrefix: fkey + "-" + i, onChange: (k, v) => onChange(items.map((x, j) => j === i ? { ...x, [k]: v } : x), fkey + "." + i + "." + k) })))
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "list-foot" }, /* @__PURE__ */ React.createElement(Btn2, { size: "sm", icon: "plus", onClick: add, disabled: items.length >= f.max }, "Add ", f.itemLabel.toLowerCase()), /* @__PURE__ */ React.createElement("span", { className: "muted" }, items.length, " of ", f.max)));
  }
  function FieldInput({ f, value, onChange, id, focusIndex }) {
    const ed = useEd();
    switch (f.type) {
      case "text":
        return /* @__PURE__ */ React.createElement(Input, { id, value: value || "", onChange: (e) => onChange(e.target.value), maxLength: f.max ? f.max + 40 : void 0 });
      case "textarea":
        return /* @__PURE__ */ React.createElement(TextArea, { id, rows: 3, value: value || "", onChange: (e) => onChange(e.target.value) });
      case "richtext":
        return /* @__PURE__ */ React.createElement(RichInput, { id, value, onChange });
      case "image":
        return /* @__PURE__ */ React.createElement(ImageField, { value, onChange });
      case "button": {
        const b = value || { label: "", link: null };
        return /* @__PURE__ */ React.createElement("div", { className: "btn-field" }, /* @__PURE__ */ React.createElement(Input, { id, value: b.label || "", placeholder: "Button text (leave empty to hide)", onChange: (e) => onChange({ ...b, label: e.target.value }) }), /* @__PURE__ */ React.createElement(LinkChip, { link: b.link, onChange: (l) => onChange({ ...b, link: l }) }));
      }
      case "link":
        return /* @__PURE__ */ React.createElement(LinkChip, { link: value, onChange });
      case "toggle":
        return null;
      case "select":
        return f.options.length <= 4 ? /* @__PURE__ */ React.createElement(Segmented, { full: true, value, onChange, options: f.options }) : /* @__PURE__ */ React.createElement(Select, { id, value, onChange, options: f.options });
      case "number":
        return /* @__PURE__ */ React.createElement(Input, { id, type: "number", min: f.min, max: f.max, value: value == null ? "" : value, onChange: (e) => onChange(Math.max(f.min || 0, Math.min(f.max || 99, Number(e.target.value) || 0))) });
      case "icon":
        return /* @__PURE__ */ React.createElement(IconPick, { value, onChange });
      case "collection":
        return /* @__PURE__ */ React.createElement(Segmented, { full: true, value: value || "blog", onChange, options: Object.values(ed.site.collections).map((c2) => ({ value: c2.id, label: c2.name })) });
      case "list":
        return /* @__PURE__ */ React.createElement(ListField, { f, value, onChange, fkey: id, focusIndex });
      case "nav":
        return /* @__PURE__ */ React.createElement("div", { className: "nav-note" }, /* @__PURE__ */ React.createElement("p", null, "Menu items are shared by every page and edited in Navigation."), /* @__PURE__ */ React.createElement(Btn2, { size: "sm", icon: "menu", onClick: () => ed.openNav() }, "Edit menu"));
      default:
        return null;
    }
  }
  function FieldList({ fields, values, onChange, idPrefix, focusKey }) {
    return /* @__PURE__ */ React.createElement("div", { className: "field-list" }, fields.map((f) => {
      const id = idPrefix + "-" + f.key;
      const v = values[f.key];
      if (f.type === "toggle") return /* @__PURE__ */ React.createElement("div", { key: f.key, id: "fld-" + id }, /* @__PURE__ */ React.createElement(Switch, { id, label: f.label, checked: !!v, onChange: (x) => onChange(f.key, x) }));
      const ai = ["text", "textarea", "richtext"].includes(f.type) && /* @__PURE__ */ React.createElement(AiButton, { value: v, heading: f.key === "title" || f.key === "logo", onApply: (t) => onChange(f.key, t, "ai") });
      const count = f.max && typeof v === "string" ? /* @__PURE__ */ React.createElement("span", { className: cx("count", v.length > f.max && "is-over") }, v.length, "/", f.max) : null;
      return /* @__PURE__ */ React.createElement(Field, { key: f.key, id: "fld-" + id, label: f.label + (f.type === "list" ? "" : ""), action: ai, count, className: cx(focusKey === f.key && "is-focus", "ft-" + f.type) }, /* @__PURE__ */ React.createElement(FieldInput, { f, value: v, id, onChange: (x, k) => onChange(f.key, x, k) }));
    }));
  }
  function SectionInspector({ sel: sel2, compact }) {
    const ed = useEd();
    const { site } = ed;
    const found = findSection(site, sel2.pageId || ed.loc.pageId, sel2.id);
    const bodyRef = useRef(null);
    useEffect(() => {
      if (!found || !sel2.field || !bodyRef.current) return;
      const el = bodyRef.current.querySelector("#fld-" + CSS.escape("sec-" + sel2.id + "-" + sel2.field));
      if (!el) return;
      el.scrollIntoView({ block: "center", behavior: "smooth" });
      el.classList.remove("flash");
      void el.offsetWidth;
      el.classList.add("flash");
      const inp = el.querySelector("input:not([type=checkbox]), textarea");
      if (inp && !ed.mobile) setTimeout(() => inp.focus({ preventScroll: true }), 250);
    }, [sel2.id, sel2.field, sel2.n]);
    if (!found) return /* @__PURE__ */ React.createElement("div", { className: "insp-empty muted" }, "This section no longer exists.");
    const { sec, scope, shared, page: page2 } = found;
    const B2 = BLOCKS[sec.type];
    const cat = CATEGORIES.find((c2) => c2.id === B2.category);
    const pagesUsing = site.pages.filter((p) => !(scope === "header" ? p.header : p.footer)).length;
    const update = (key, v, k) => ed.commit((d) => {
      const r = findSection(d, page2 && page2.id, sec.id);
      r.sec.values[key] = v;
    }, k === "ai" ? null : "f:" + sec.id + ":" + key + (typeof k === "string" ? k : ""));
    return /* @__PURE__ */ React.createElement("div", { className: "insp", ref: bodyRef }, /* @__PURE__ */ React.createElement("div", { className: "insp-head" }, /* @__PURE__ */ React.createElement("div", { className: "insp-title" }, /* @__PURE__ */ React.createElement("span", { className: "insp-cat" }, cat ? cat.label : ""), /* @__PURE__ */ React.createElement("h3", null, blockTitle(sec)), !compact && /* @__PURE__ */ React.createElement("p", { className: "muted" }, B2.description)), /* @__PURE__ */ React.createElement("div", { className: "insp-actions" }, /* @__PURE__ */ React.createElement(Btn2, { size: "sm", icon: "swap", onClick: () => ed.sectionAction("swap", { id: sec.id, scope }) }, "Swap"), scope === "page" && /* @__PURE__ */ React.createElement(IconBtn, { size: "sm", icon: "copy", label: "Duplicate", onClick: () => ed.sectionAction("duplicate", { id: sec.id, scope }) }), scope === "page" && /* @__PURE__ */ React.createElement(IconBtn, { size: "sm", icon: sec.hidden ? "eye" : "eyeOff", label: sec.hidden ? "Show" : "Hide", onClick: () => ed.sectionAction(sec.hidden ? "unhide" : "hide", { id: sec.id, scope }) }), scope === "page" && /* @__PURE__ */ React.createElement(IconBtn, { size: "sm", icon: "trash", label: "Delete", className: "is-danger", onClick: () => ed.sectionAction("delete", { id: sec.id, scope }) }))), scope !== "page" && /* @__PURE__ */ React.createElement("div", { className: cx("note", shared ? "note-info" : "note-warn") }, /* @__PURE__ */ React.createElement(Icon, { name: shared ? "globe" : "unlink", size: 15 }), /* @__PURE__ */ React.createElement("div", null, shared ? /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Shared ", scope, "."), " Changes apply to all ", pagesUsing, " pages that use it.") : /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "This page has its own ", scope, "."), " Changes to the shared ", scope, " no longer reach \u201C", page2.title, "\u201D."), /* @__PURE__ */ React.createElement("button", { type: "button", className: "link-btn", onClick: () => ed.sectionAction(shared ? "detach" : "reattach", { id: sec.id, scope }) }, shared ? `Detach a copy for \u201C${page2.title}\u201D` : `Use the shared ${scope} again`))), page2 && page2.kind === "detail" && scope === "page" && sec.type === "entry-detail" && /* @__PURE__ */ React.createElement("div", { className: "note note-info" }, /* @__PURE__ */ React.createElement(Icon, { name: "database", size: 15 }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Title, photo and text come from each ", site.collections[page2.collection].singular.toLowerCase(), " in the collection."), /* @__PURE__ */ React.createElement("button", { type: "button", className: "link-btn", onClick: () => ed.openDialog({ type: "collections", tab: page2.collection }) }, "Edit ", site.collections[page2.collection].name, " entries"))), /* @__PURE__ */ React.createElement(FieldList, { fields: B2.fields, values: sec.values, onChange: update, idPrefix: "sec-" + sec.id, focusKey: sel2.field }), scope === "page" && /* @__PURE__ */ React.createElement("div", { className: "insp-section" }, /* @__PURE__ */ React.createElement("p", { className: "insp-sub" }, "Section settings"), /* @__PURE__ */ React.createElement(Field, { label: "Section link", hint: "Link to it from anywhere as " + pagePath(site, page2) + "#" + sec.anchor }, /* @__PURE__ */ React.createElement(Input, { prefix: "#", value: sec.anchor, onChange: (e) => {
      const a = slugify(e.target.value) || sec.anchor;
      ed.commit((d) => {
        const r = findSection(d, page2.id, sec.id);
        r.sec.anchor = a;
      }, "anchor:" + sec.id);
    } }))));
  }

  // src/panels.jsx
  function snapshotPaths(site, pageId) {
    const p = pageById(site, pageId);
    if (!p) return {};
    return Object.fromEntries([p, ...descendants(site, pageId)].map((x) => [x.id, pagePath(site, x)]));
  }
  function applyRedirects(d, before) {
    const added = [];
    Object.entries(before).forEach(([id, oldPath]) => {
      const p = pageById(d, id);
      if (!p || p.status === "draft" || p.kind === "detail" || p.kind === "404" || oldPath === "/") return;
      const np = pagePath(d, p);
      if (np === oldPath) return;
      d.redirects.forEach((r) => {
        if (r.to === oldPath) r.to = np;
      });
      d.redirects = d.redirects.filter((r) => r.from !== np && !(r.auto && r.from === r.to));
      if (!d.redirects.some((r) => r.from === oldPath)) d.redirects.push({ id: uid("r"), from: oldPath, to: np, code: 301, auto: true, note: `Added when \u201C${p.title}\u201D moved` });
      added.push([oldPath, np]);
    });
    return added;
  }
  function redirectToast(ed, added) {
    if (!added.length) return;
    toast(`Redirect added: ${added[0][0]} \u2192 ${added[0][1]}${added.length > 1 ? ` and ${added.length - 1} more` : ""}`, { icon: "corner", action: { label: "View", onClick: () => ed.openDialog({ type: "redirects" }) } });
  }
  function pageIcon(site, p) {
    if (p.id === site.homeId) return "home";
    if (p.kind === "collection") return "database";
    if (p.kind === "detail") return "layout";
    if (p.kind === "404") return "fileX";
    return "file";
  }
  function PageRow({ page: page2, depth, current, onOpen, children }) {
    const ed = useEd();
    const { site } = ed;
    const clash = slugClash(site, page2);
    const isHome = page2.id === site.homeId;
    const items = [
      { label: "Page settings", icon: "settings", onClick: () => ed.openPageSettings(page2.id) },
      page2.kind === "page" && { label: "Add a subpage", icon: "plus", onClick: () => ed.openDialog({ type: "addPage", parentId: page2.id }) },
      page2.kind !== "detail" && page2.kind !== "404" && { label: "Duplicate", icon: "copy", onClick: () => ed.duplicatePage(page2.id) },
      page2.kind === "page" && !isHome && page2.status === "live" && { label: "Make this the home page", icon: "home", onClick: () => ed.makeHome(page2.id) },
      page2.collection && { label: `Edit ${site.collections[page2.collection].name} entries`, icon: "table", onClick: () => ed.openDialog({ type: "collections", tab: page2.collection }) },
      "-",
      { label: "Delete page", icon: "trash", danger: true, disabled: isHome || page2.kind === "404", title: isHome ? "Make another page the home page first" : void 0, onClick: () => ed.openDialog({ type: "deletePage", pageId: page2.id }) }
    ];
    return /* @__PURE__ */ React.createElement("div", { className: cx("tree-row", current && "is-current"), style: { "--depth": depth } }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "tree-main", onClick: onOpen }, /* @__PURE__ */ React.createElement(Icon, { name: pageIcon(site, page2), size: 15 }), /* @__PURE__ */ React.createElement("span", { className: "tree-text" }, /* @__PURE__ */ React.createElement("span", { className: "tree-title" }, page2.title, clash && /* @__PURE__ */ React.createElement(Icon, { name: "alert", size: 13, className: "warn-ic", title: "Address clash" })), /* @__PURE__ */ React.createElement("code", { className: "tree-path" }, pagePath(site, page2))), page2.status === "draft" && /* @__PURE__ */ React.createElement(Badge, { tone: "warn" }, "Draft"), page2.status === "hidden" && /* @__PURE__ */ React.createElement(Badge, null, "Hidden")), children, /* @__PURE__ */ React.createElement(IconBtn, { size: "sm", icon: "settings", label: "Settings for " + page2.title, className: "tree-gear", onClick: () => ed.openPageSettings(page2.id) }), /* @__PURE__ */ React.createElement(MenuButton, { items, className: "tree-more" }));
  }
  function PagesPanel({ onPicked }) {
    const ed = useEd();
    const { site, loc } = ed;
    const tree = pageTree(site);
    const [open, setOpen] = useState({});
    const cur = pageById(site, loc.pageId);
    const nf = pageById(site, site.notFoundId);
    const go = (pageId, itemId) => {
      ed.navigate({ pageId, itemId });
      onPicked && onPicked();
    };
    return /* @__PURE__ */ React.createElement("div", { className: "panel" }, /* @__PURE__ */ React.createElement("div", { className: "panel-head" }, /* @__PURE__ */ React.createElement("h3", null, "Pages ", /* @__PURE__ */ React.createElement("span", { className: "count-pill" }, site.pages.length)), /* @__PURE__ */ React.createElement(MenuButton, { icon: "plus", label: "Add page", size: "md", width: 250, items: [
      { label: "Blank page", icon: "file", onClick: () => ed.openDialog({ type: "addPage", step: "blank" }) },
      { label: "From a template\u2026", icon: "layout", onClick: () => ed.openDialog({ type: "addPage", step: "template" }) },
      cur && cur.kind === "page" && { label: `Duplicate \u201C${cur.title}\u201D`, icon: "copy", onClick: () => ed.duplicatePage(cur.id) }
    ] })), /* @__PURE__ */ React.createElement("div", { className: "tree" }, tree.map(({ page: page2, depth }) => {
      const coll2 = page2.kind === "detail" ? site.collections[page2.collection] : null;
      const isOpen = open[page2.id] ?? loc.pageId === page2.id;
      return /* @__PURE__ */ React.createElement("div", { key: page2.id }, /* @__PURE__ */ React.createElement(PageRow, { page: page2, depth, current: loc.pageId === page2.id, onOpen: () => go(page2.id) }, coll2 && /* @__PURE__ */ React.createElement("button", { type: "button", className: "tree-toggle", onClick: () => setOpen({ ...open, [page2.id]: !isOpen }), "aria-expanded": isOpen }, coll2.items.length, /* @__PURE__ */ React.createElement(Icon, { name: isOpen ? "chevUp" : "chevDown", size: 12 }))), coll2 && isOpen && /* @__PURE__ */ React.createElement("div", { className: "tree-items", style: { "--depth": depth + 1 } }, coll2.items.map((it) => /* @__PURE__ */ React.createElement("button", { key: it.id, type: "button", className: cx("tree-item", loc.pageId === page2.id && (loc.itemId || coll2.items[0].id) === it.id && "is-current"), onClick: () => go(page2.id, it.id) }, /* @__PURE__ */ React.createElement(Icon, { name: "fileText", size: 13 }), /* @__PURE__ */ React.createElement("span", null, it.title), it.status === "draft" && /* @__PURE__ */ React.createElement(Badge, { tone: "warn" }, "Draft"))), /* @__PURE__ */ React.createElement("button", { type: "button", className: "tree-item add", onClick: () => ed.openDialog({ type: "collections", tab: coll2.id }) }, /* @__PURE__ */ React.createElement(Icon, { name: "table", size: 13 }), /* @__PURE__ */ React.createElement("span", null, "Edit entries"))));
    })), /* @__PURE__ */ React.createElement("div", { className: "panel-group" }, /* @__PURE__ */ React.createElement("p", { className: "panel-sub" }, "System"), nf && /* @__PURE__ */ React.createElement(PageRow, { page: nf, depth: 0, current: loc.pageId === nf.id, onOpen: () => go(nf.id) }), ed.mobile && /* @__PURE__ */ React.createElement("button", { type: "button", className: "tool-row", onClick: () => ed.openDialog({ type: "redirects" }) }, /* @__PURE__ */ React.createElement(Icon, { name: "corner", size: 15 }), /* @__PURE__ */ React.createElement("span", null, "Redirects"), /* @__PURE__ */ React.createElement("span", { className: "count-pill" }, site.redirects.length)), ed.mobile && /* @__PURE__ */ React.createElement("button", { type: "button", className: "tool-row", onClick: () => ed.openDialog({ type: "collections", tab: "services" }) }, /* @__PURE__ */ React.createElement(Icon, { name: "table", size: 15 }), /* @__PURE__ */ React.createElement("span", null, "Collections"), /* @__PURE__ */ React.createElement("span", { className: "count-pill" }, Object.values(site.collections).reduce((a, c2) => a + c2.items.length, 0)))));
  }
  function SectionsPanel({ onPicked }) {
    const ed = useEd();
    const { site, loc, selection } = ed;
    const page2 = pageById(site, loc.pageId);
    if (!page2) return null;
    const header = page2.header || site.header;
    const footer = page2.footer || site.footer;
    const pick = (id, scope) => {
      ed.select({ id, scope, pageId: page2.id }, { scroll: true });
      onPicked && onPicked(id);
    };
    const GlobalRow = ({ sec, scope }) => /* @__PURE__ */ React.createElement("div", { className: cx("out-row is-global", selection && selection.id === sec.id && "is-sel") }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "out-main", onClick: () => pick(sec.id, scope) }, /* @__PURE__ */ React.createElement(Icon, { name: page2[scope] ? "unlink" : "globe", size: 14 }), /* @__PURE__ */ React.createElement("span", { className: "out-text" }, /* @__PURE__ */ React.createElement("span", { className: "out-title" }, blockTitle(sec)), /* @__PURE__ */ React.createElement("span", { className: "out-cat" }, scope === "header" ? "Header" : "Footer", " \xB7 ", page2[scope] ? "this page only" : "shared by all pages"))), /* @__PURE__ */ React.createElement(MenuButton, { items: [
      { label: "Edit", icon: "pencil", onClick: () => pick(sec.id, scope) },
      { label: "Swap", icon: "swap", onClick: () => ed.sectionAction("swap", { id: sec.id, scope }) },
      page2[scope] ? { label: `Use the shared ${scope}`, icon: "globe", onClick: () => ed.sectionAction("reattach", { id: sec.id, scope }) } : { label: "Detach for this page", icon: "unlink", onClick: () => ed.sectionAction("detach", { id: sec.id, scope }) }
    ] }));
    return /* @__PURE__ */ React.createElement("div", { className: "panel" }, /* @__PURE__ */ React.createElement("div", { className: "panel-head" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, page2.title), /* @__PURE__ */ React.createElement("code", { className: "muted small" }, pagePath(site, page2))), /* @__PURE__ */ React.createElement(IconBtn, { icon: "plus", label: "Add section", onClick: () => ed.sectionAction("insert", { index: page2.sections.length }) })), /* @__PURE__ */ React.createElement("div", { className: "outline" }, /* @__PURE__ */ React.createElement(GlobalRow, { sec: header, scope: "header" }), /* @__PURE__ */ React.createElement(
      DragList,
      {
        items: page2.sections,
        getKey: (s) => s.id,
        onMove: (from, to) => ed.commit((d) => {
          const p = pageById(d, page2.id);
          p.sections = moveBlock(p.sections, from, to);
        }, null),
        renderItem: (s, i, { handle }) => {
          const B2 = BLOCKS[s.type];
          const cat = CATEGORIES.find((c2) => c2.id === B2.category);
          return /* @__PURE__ */ React.createElement("div", { className: cx("out-row", selection && selection.id === s.id && "is-sel", s.hidden && "is-hidden") }, /* @__PURE__ */ React.createElement("span", { ...handle }, /* @__PURE__ */ React.createElement(Icon, { name: "grip", size: 14 })), /* @__PURE__ */ React.createElement("button", { type: "button", className: "out-main", onClick: () => pick(s.id, "page") }, /* @__PURE__ */ React.createElement("span", { className: "out-text" }, /* @__PURE__ */ React.createElement("span", { className: "out-title" }, blockTitle(s)), /* @__PURE__ */ React.createElement("span", { className: "out-cat" }, cat.label, " \xB7 #", s.anchor))), /* @__PURE__ */ React.createElement(IconBtn, { size: "sm", icon: s.hidden ? "eyeOff" : "eye", label: s.hidden ? "Show section" : "Hide section", className: "out-eye", onClick: () => ed.sectionAction(s.hidden ? "unhide" : "hide", { id: s.id, scope: "page" }) }), /* @__PURE__ */ React.createElement(MenuButton, { items: [
            { label: "Edit", icon: "pencil", onClick: () => pick(s.id, "page") },
            { label: "Swap", icon: "swap", onClick: () => ed.sectionAction("swap", { id: s.id, scope: "page" }) },
            { label: "Duplicate", icon: "copy", onClick: () => ed.sectionAction("duplicate", { id: s.id, scope: "page" }) },
            { label: "Move up", icon: "arrowUp", disabled: i === 0, onClick: () => ed.sectionAction("up", { id: s.id, scope: "page" }) },
            { label: "Move down", icon: "arrowDown", disabled: i === page2.sections.length - 1, onClick: () => ed.sectionAction("down", { id: s.id, scope: "page" }) },
            { label: "Add section below", icon: "plus", onClick: () => ed.sectionAction("insert", { index: i + 1 }) },
            "-",
            { label: "Delete", icon: "trash", danger: true, onClick: () => ed.sectionAction("delete", { id: s.id, scope: "page" }) }
          ] }));
        }
      }
    ), page2.sections.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "muted small out-empty" }, "No sections yet."), /* @__PURE__ */ React.createElement("button", { type: "button", className: "add-row", onClick: () => ed.sectionAction("insert", { index: page2.sections.length }) }, /* @__PURE__ */ React.createElement(Icon, { name: "plus", size: 14 }), "Add section"), /* @__PURE__ */ React.createElement(GlobalRow, { sec: footer, scope: "footer" })));
  }
  function NavPanel() {
    const ed = useEd();
    const { site } = ed;
    const [menu, setMenu] = useState("header");
    const [editing, setEditing] = useState(null);
    const items = site.nav[menu];
    const inMenu = new Set(items.filter((n2) => n2.link && n2.link.kind === "page").map((n2) => n2.link.pageId));
    const candidates = pageTree(site).filter((t) => !inMenu.has(t.page.id) && t.page.kind !== "detail");
    const set = (fn) => ed.commit((d) => fn(d.nav[menu], d), null);
    const addItem = (label, link) => {
      const id = uid("n");
      set((arr) => arr.push({ id, label, link, depth: 0 }));
      setEditing(id);
    };
    return /* @__PURE__ */ React.createElement("div", { className: "panel" }, /* @__PURE__ */ React.createElement("div", { className: "panel-head" }, /* @__PURE__ */ React.createElement("h3", null, "Navigation")), /* @__PURE__ */ React.createElement(Segmented, { full: true, value: menu, onChange: (m) => {
      setMenu(m);
      setEditing(null);
    }, options: [{ value: "header", label: "Header menu", count: site.nav.header.length }, { value: "footer", label: "Footer menu", count: site.nav.footer.length }] }), /* @__PURE__ */ React.createElement("p", { className: "hint nav-hint" }, /* @__PURE__ */ React.createElement(Icon, { name: "info", size: 13 }), menu === "header" ? "Drag to reorder. Drag right to nest an item under the one above; nested items open as a dropdown." : "Top-level items become column headings. Nest links under them."), /* @__PURE__ */ React.createElement(
      DragList,
      {
        nest: true,
        items,
        getKey: (n2) => n2.id,
        onMove: (from, to, depth, len) => set((arr, d) => {
          const a = moveBlock(arr, from, to, len);
          a[to] = { ...a[to], depth };
          if (a[0]) a[0].depth = 0;
          d.nav[menu] = a;
        }),
        renderItem: (n2, i, { handle, depth, dragging }) => {
          const r = resolveLink(site, n2.link, ed.mediaBy);
          const open = editing === n2.id;
          return /* @__PURE__ */ React.createElement("div", { className: cx("nav-row", open && "is-open", dragging && "is-drag"), style: { marginLeft: depth * 20 } }, /* @__PURE__ */ React.createElement("div", { className: "nav-row-head" }, /* @__PURE__ */ React.createElement("span", { ...handle }, /* @__PURE__ */ React.createElement(Icon, { name: "grip", size: 14 })), /* @__PURE__ */ React.createElement("button", { type: "button", className: "nav-main", onClick: () => setEditing(open ? null : n2.id) }, /* @__PURE__ */ React.createElement("span", { className: "nav-label" }, n2.label || "Untitled"), /* @__PURE__ */ React.createElement("span", { className: cx("nav-target", r.broken && "is-broken") }, r.broken ? "Broken link" : r.href, r.hidden && !r.broken ? " \xB7 not public" : "")), /* @__PURE__ */ React.createElement(MenuButton, { items: [
            { label: "Edit", icon: "pencil", onClick: () => setEditing(n2.id) },
            depth === 0 && i > 0 && { label: "Nest under item above", icon: "indent", onClick: () => set((arr) => {
              if (!arr.slice(i + 1).some((x, j) => j === 0 && x.depth > 0)) arr[i].depth = 1;
            }) },
            depth === 1 && { label: "Move out of dropdown", icon: "outdent", onClick: () => set((arr) => {
              arr[i].depth = 0;
            }) },
            "-",
            { label: "Remove from menu", icon: "trash", danger: true, onClick: () => set((arr, d) => {
              const len = depth === 0 ? 1 + arr.slice(i + 1).findIndex((x) => !x.depth) : 1;
              const kids = arr.slice(i + 1, i + (len > 0 ? len : arr.length - i));
              d.nav[menu] = [...arr.slice(0, i), ...kids.map((k) => ({ ...k, depth: 0 })), ...arr.slice(i + 1 + kids.length)];
            }) }
          ] })), open && /* @__PURE__ */ React.createElement("div", { className: "nav-edit" }, /* @__PURE__ */ React.createElement(Field, { label: "Label" }, /* @__PURE__ */ React.createElement(Input, { value: n2.label, onChange: (e) => ed.commit((d) => {
            d.nav[menu][i].label = e.target.value;
          }, "nav:" + n2.id), autoFocus: !ed.mobile })), /* @__PURE__ */ React.createElement(Field, { label: "Goes to" }, /* @__PURE__ */ React.createElement(LinkChip, { link: n2.link, onChange: (l) => ed.commit((d) => {
            d.nav[menu][i].link = l;
            const p = l && l.kind === "page" && pageById(d, l.pageId);
            if (p && (!n2.label || n2.label === "New link")) d.nav[menu][i].label = p.title;
          }) }))));
        }
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "nav-add" }, /* @__PURE__ */ React.createElement(Btn2, { size: "sm", icon: "plus", onClick: () => addItem("New link", null) }, "Add link"), /* @__PURE__ */ React.createElement(MenuButton, { width: 240, placement: "bottom-start", items: candidates.length ? candidates.map((t) => ({ label: t.page.title, hint: pagePath(site, t.page), icon: "file", onClick: () => set((arr) => arr.push({ id: uid("n"), label: t.page.title, link: { kind: "page", pageId: t.page.id }, depth: 0 })) })) : [{ label: "Every page is already in this menu", disabled: true }] }, /* @__PURE__ */ React.createElement(Btn2, { size: "sm", icon: "file", iconRight: "chevDown" }, "Add page"))), menu === "header" && /* @__PURE__ */ React.createElement("div", { className: "panel-group" }, /* @__PURE__ */ React.createElement(Switch, { id: "autoadd", label: "Add new pages to the menu automatically", hint: "New top-level pages appear at the end of the header menu.", checked: !!site.nav.autoAdd, onChange: (v) => ed.commit((d) => {
      d.nav.autoAdd = v;
    }) })));
  }
  function SearchPreview({ site, page: page2 }) {
    const title = page2.seo.title || `${page2.title} \xB7 ${site.name}`;
    const desc = page2.seo.description || "No description yet. Search engines will pick a line from the page.";
    return /* @__PURE__ */ React.createElement("div", { className: "serp" }, /* @__PURE__ */ React.createElement("p", { className: "serp-url" }, site.subdomain, ".selfsite.in \u203A ", pagePath(site, page2).replace(/^\//, "").replace(/\//g, " \u203A ") || ""), /* @__PURE__ */ React.createElement("p", { className: "serp-title" }, title.length > 62 ? title.slice(0, 60) + "\u2026" : title), /* @__PURE__ */ React.createElement("p", { className: cx("serp-desc", !page2.seo.description && "muted") }, desc.length > 160 ? desc.slice(0, 158) + "\u2026" : desc));
  }
  function PageSettings({ pageId, onClose }) {
    const ed = useEd();
    const { site } = ed;
    const page2 = pageById(site, pageId);
    const snap = useRef(null);
    if (!page2) return /* @__PURE__ */ React.createElement("div", { className: "insp-empty muted" }, "This page was deleted.");
    const isHome = page2.id === site.homeId;
    const fixed = page2.kind === "detail" || page2.kind === "404";
    const parent = page2.parentId ? pageById(site, page2.parentId) : null;
    const parentPath = parent ? pagePath(site, parent) === "/" ? "/" : pagePath(site, parent) + "/" : "/";
    const clash = slugClash(site, page2);
    const inMenu = site.nav.header.some((n2) => n2.link && n2.link.kind === "page" && n2.link.pageId === page2.id);
    const banned = /* @__PURE__ */ new Set([page2.id, ...descendants(site, page2.id).map((p) => p.id)]);
    const parents = pageTree(site).filter((t) => !banned.has(t.page.id) && t.page.id !== site.homeId && t.page.kind === "page");
    const up = (fn, key) => ed.commit((d) => fn(pageById(d, pageId), d), key);
    const focusPath = () => {
      if (!snap.current) snap.current = snapshotPaths(site, pageId);
    };
    const blurPath = () => {
      const before = snap.current;
      snap.current = null;
      if (!before) return;
      let added = [];
      ed.commit((d) => {
        added = applyRedirects(d, before);
      }, null);
      redirectToast(ed, added);
    };
    const withRedirect = (fn) => {
      const before = snapshotPaths(site, pageId);
      let added = [];
      ed.commit((d) => {
        fn(pageById(d, pageId), d);
        added = applyRedirects(d, before);
      }, null);
      redirectToast(ed, added);
    };
    const coll2 = page2.collection ? site.collections[page2.collection] : null;
    const share = page2.seo.image && ed.mediaBy[page2.seo.image];
    return /* @__PURE__ */ React.createElement("div", { className: "psettings" }, /* @__PURE__ */ React.createElement("div", { className: "insp-head" }, /* @__PURE__ */ React.createElement("div", { className: "insp-title" }, /* @__PURE__ */ React.createElement("span", { className: "insp-cat" }, "Page settings"), /* @__PURE__ */ React.createElement("h3", null, page2.title), /* @__PURE__ */ React.createElement("code", { className: "muted small" }, pagePath(site, page2))), onClose && /* @__PURE__ */ React.createElement(IconBtn, { icon: "x", label: "Close page settings", onClick: onClose })), /* @__PURE__ */ React.createElement("div", { className: "field-list" }, /* @__PURE__ */ React.createElement(Field, { label: "Title" }, /* @__PURE__ */ React.createElement(
      Input,
      {
        value: page2.title,
        onFocus: focusPath,
        onBlur: blurPath,
        onChange: (e) => {
          const t = e.target.value;
          up((p, d) => {
            p.title = t;
            if (!p.slugEdited && !fixed && p.id !== d.homeId) p.slug = uniqueSlug(d, slugify(t) || "page", p.parentId, p.id);
          }, "title:" + pageId);
        }
      }
    )), coll2 && page2.kind === "detail" && /* @__PURE__ */ React.createElement("div", { className: "note note-info" }, /* @__PURE__ */ React.createElement(Icon, { name: "database", size: 15 }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "One page per ", coll2.singular.toLowerCase(), ", filled from the ", /* @__PURE__ */ React.createElement("strong", null, coll2.name), " collection, for example ", /* @__PURE__ */ React.createElement("code", null, itemPath(site, coll2.id, coll2.items[0])), "."), /* @__PURE__ */ React.createElement("button", { type: "button", className: "link-btn", onClick: () => ed.openDialog({ type: "collections", tab: coll2.id }) }, "Edit ", coll2.items.length, " entries"))), coll2 && page2.kind === "collection" && /* @__PURE__ */ React.createElement("div", { className: "note note-info" }, /* @__PURE__ */ React.createElement(Icon, { name: "database", size: 15 }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Lists entries from ", /* @__PURE__ */ React.createElement("strong", null, coll2.name), ". Each entry has its own page at ", /* @__PURE__ */ React.createElement("code", null, pagePath(site, page2), "/\u2026")), /* @__PURE__ */ React.createElement("button", { type: "button", className: "link-btn", onClick: () => ed.openDialog({ type: "collections", tab: coll2.id }) }, "Edit ", coll2.items.length, " entries"))), !fixed && !isHome && /* @__PURE__ */ React.createElement(
      Field,
      {
        label: "Address",
        error: clash ? `\u201C${clash.title}\u201D already uses ${pagePath(site, page2)}. Change one of them so both pages can be reached.` : null,
        hint: page2.status !== "draft" ? "Changing the address adds a redirect from the old one automatically." : null
      },
      /* @__PURE__ */ React.createElement(
        Input,
        {
          prefix: parentPath,
          value: page2.slug,
          onFocus: focusPath,
          onBlur: blurPath,
          onChange: (e) => {
            const v = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-");
            up((p) => {
              p.slug = v;
              p.slugEdited = true;
            }, "slug:" + pageId);
          }
        }
      )
    ), isHome && /* @__PURE__ */ React.createElement("div", { className: "note note-info" }, /* @__PURE__ */ React.createElement(Icon, { name: "home", size: 15 }), /* @__PURE__ */ React.createElement("p", null, "This is the home page, so its address is always ", /* @__PURE__ */ React.createElement("code", null, "/"), ".")), !fixed && !isHome && page2.kind === "page" && /* @__PURE__ */ React.createElement(Field, { label: "Parent page", hint: "Nest pages to build addresses like /about/our-doctors." }, /* @__PURE__ */ React.createElement(
      Select,
      {
        value: page2.parentId || "",
        onChange: (v) => withRedirect((p) => {
          p.parentId = v || null;
        }),
        options: [{ value: "", label: "None (top level)" }, ...parents.map((t) => ({ value: t.page.id, label: "\xA0\xA0".repeat(t.depth) + t.page.title }))]
      }
    )), !fixed && page2.kind === "page" && !isHome && /* @__PURE__ */ React.createElement("div", { className: "row-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "field-label" }, "Home page"), /* @__PURE__ */ React.createElement("p", { className: "hint" }, "Visitors land here at ", site.subdomain, ".selfsite.in")), /* @__PURE__ */ React.createElement(Btn2, { size: "sm", icon: "home", disabled: page2.status !== "live", title: page2.status !== "live" ? "Only live pages can be the home page" : "", onClick: () => ed.makeHome(page2.id) }, "Make home page")), !fixed && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      Switch,
      {
        id: "inmenu",
        label: "Show in header menu",
        hint: inMenu ? "Listed in the header menu." : "Not in the header menu.",
        checked: inMenu,
        disabled: page2.status === "hidden",
        onChange: (v) => ed.commit((d) => {
          if (v) d.nav.header.push({ id: uid("n"), label: page2.title, link: { kind: "page", pageId }, depth: 0 });
          else d.nav.header = d.nav.header.filter((n2) => !(n2.link && n2.link.kind === "page" && n2.link.pageId === pageId));
        })
      }
    ), /* @__PURE__ */ React.createElement(Field, { label: "Visibility" }, /* @__PURE__ */ React.createElement(
      Segmented,
      {
        full: true,
        value: page2.status,
        onChange: (v) => withRedirect((p, d) => {
          p.status = v;
          if (v === "hidden") d.nav.header = d.nav.header.filter((n2) => !(n2.link && n2.link.pageId === pageId));
        }),
        options: [{ value: "live", label: "Live" }, { value: "hidden", label: "Hidden" }, { value: "draft", label: "Draft" }]
      }
    ), /* @__PURE__ */ React.createElement("p", { className: "hint" }, page2.status === "live" ? "Published and listed for visitors and search engines." : page2.status === "hidden" ? "Published, but left out of menus and search results. Only people with the link can open it." : "Not published. Only you can see it here in the editor."))), /* @__PURE__ */ React.createElement("div", { className: "insp-section" }, /* @__PURE__ */ React.createElement("p", { className: "insp-sub" }, "Search and sharing"), /* @__PURE__ */ React.createElement(Field, { label: "Search title", count: /* @__PURE__ */ React.createElement("span", { className: cx("count", (page2.seo.title || "").length > 60 && "is-over") }, (page2.seo.title || "").length, "/60") }, /* @__PURE__ */ React.createElement(Input, { value: page2.seo.title, placeholder: `${page2.title} \xB7 ${site.name}`, onChange: (e) => up((p) => {
      p.seo.title = e.target.value;
    }, "seot:" + pageId) })), /* @__PURE__ */ React.createElement(Field, { label: "Search description", count: /* @__PURE__ */ React.createElement("span", { className: cx("count", (page2.seo.description || "").length > 160 && "is-over") }, (page2.seo.description || "").length, "/160"), warn: !page2.seo.description && page2.status !== "draft" && !fixed ? "Missing. Add one sentence about what this page offers." : null }, /* @__PURE__ */ React.createElement(TextArea, { rows: 3, value: page2.seo.description, placeholder: "One or two sentences that make people want to click.", onChange: (e) => up((p) => {
      p.seo.description = e.target.value;
    }, "seod:" + pageId) })), /* @__PURE__ */ React.createElement(SearchPreview, { site, page: page2 }), /* @__PURE__ */ React.createElement(Field, { label: "Share image", hint: "Shown when the page is shared on WhatsApp and social media." }, /* @__PURE__ */ React.createElement("div", { className: "share-field" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "share-card", onClick: () => ed.pickMedia((id) => up((p) => {
      p.seo.image = id;
    })) }, share ? /* @__PURE__ */ React.createElement("img", { src: mediaSrc(share), alt: "" }) : /* @__PURE__ */ React.createElement("span", { className: "share-empty" }, /* @__PURE__ */ React.createElement(Icon, { name: "image", size: 18 }), /* @__PURE__ */ React.createElement("small", null, "Choose an image")), /* @__PURE__ */ React.createElement("span", { className: "share-meta" }, /* @__PURE__ */ React.createElement("small", null, site.subdomain, ".selfsite.in"), /* @__PURE__ */ React.createElement("strong", null, page2.seo.title || page2.title + " \xB7 " + site.name))), share && /* @__PURE__ */ React.createElement(Btn2, { size: "sm", variant: "ghost", onClick: () => up((p) => {
      p.seo.image = null;
    }) }, "Remove")))), !isHome && page2.kind !== "404" && /* @__PURE__ */ React.createElement("div", { className: "insp-section" }, /* @__PURE__ */ React.createElement(Btn2, { variant: "danger-ghost", icon: "trash", onClick: () => ed.openDialog({ type: "deletePage", pageId }) }, "Delete page"))));
  }
  function FontPick({ value, onChange, label }) {
    const ref = useRef(null);
    const [open, setOpen] = useState(false);
    const close = useCallback(() => setOpen(false), []);
    return /* @__PURE__ */ React.createElement(Field, { label }, /* @__PURE__ */ React.createElement("button", { ref, type: "button", className: "font-pick", onClick: () => setOpen((o) => !o) }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: fontStack(value) } }, value), /* @__PURE__ */ React.createElement(Icon, { name: "chevUpDown", size: 14 })), /* @__PURE__ */ React.createElement(Popover, { anchor: ref.current, open, onClose: close, width: 280 }, /* @__PURE__ */ React.createElement("div", { className: "font-list" }, ["Serif", "Sans"].map((k) => /* @__PURE__ */ React.createElement("div", { key: k }, /* @__PURE__ */ React.createElement("p", { className: "menu-heading" }, k), FONTS.filter((f) => f.kind === k).map((f) => /* @__PURE__ */ React.createElement("button", { key: f.name, type: "button", className: cx("font-opt", value === f.name && "is-on"), onClick: () => {
      onChange(f.name);
      close();
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: fontStack(f.name), fontWeight: f.w } }, f.name), value === f.name && /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 14 }))))))));
  }
  function ColorRow({ label, value, onChange, swatches }) {
    const [txt2, setTxt] = useState(value);
    const last = useRef(value);
    if (last.current !== value) {
      last.current = value;
      if (txt2 !== value) setTxt(value);
    }
    return /* @__PURE__ */ React.createElement("div", { className: "color-row" }, /* @__PURE__ */ React.createElement("label", { className: "swatch-input", style: { background: value } }, /* @__PURE__ */ React.createElement("input", { type: "color", value, onChange: (e) => onChange(e.target.value.toUpperCase()), "aria-label": label })), /* @__PURE__ */ React.createElement("div", { className: "color-main" }, /* @__PURE__ */ React.createElement("span", { className: "field-label" }, label), /* @__PURE__ */ React.createElement("div", { className: "color-swatches" }, swatches.map((s) => /* @__PURE__ */ React.createElement("button", { key: s, type: "button", title: s, className: cx("mini-swatch", s.toUpperCase() === (value || "").toUpperCase() && "is-on"), style: { background: s }, onClick: () => onChange(s) })))), /* @__PURE__ */ React.createElement(Input, { className: "hex", value: txt2, onChange: (e) => {
      setTxt(e.target.value);
      if (isHex(e.target.value)) onChange(e.target.value.toUpperCase());
    } }));
  }
  function ThemePanel({ onClose }) {
    const ed = useEd();
    const t = ed.site.theme;
    const mode = t.mode;
    const k = t.colors[mode];
    const [all, setAll] = useState(false);
    const set = (fn, key) => ed.commit((d) => fn(d.theme), key ? "theme:" + key : null);
    const setBoth = (key, v) => set((th) => {
      th.colors.light[key] = v;
      th.colors.dark[key] = v;
      th.presetId = null;
    }, key);
    const preset = PRESETS.find((p) => p.id === t.presetId);
    return /* @__PURE__ */ React.createElement("div", { className: "theme-panel" }, /* @__PURE__ */ React.createElement("div", { className: "insp-head" }, /* @__PURE__ */ React.createElement("div", { className: "insp-title" }, /* @__PURE__ */ React.createElement("span", { className: "insp-cat" }, "Theme"), /* @__PURE__ */ React.createElement("h3", null, preset ? preset.name : "Custom theme"), /* @__PURE__ */ React.createElement("p", { className: "muted" }, "Every block on every page reads these settings.")), onClose && /* @__PURE__ */ React.createElement(IconBtn, { icon: "x", label: "Close theme", onClick: onClose })), /* @__PURE__ */ React.createElement("div", { className: "theme-sample", style: themeVars(t) }, /* @__PURE__ */ React.createElement("span", { className: "ts-eyebrow" }, "Sample"), /* @__PURE__ */ React.createElement("p", { className: "ts-title" }, "Unhurried care"), /* @__PURE__ */ React.createElement("p", { className: "ts-body" }, "Body text in ", t.fonts.body, ". Links and buttons use the primary colour."), /* @__PURE__ */ React.createElement("div", { className: "ts-row" }, /* @__PURE__ */ React.createElement("span", { className: "ts-btn" }, "Book a visit"), /* @__PURE__ */ React.createElement("span", { className: "ts-ghost" }, "Learn more"), /* @__PURE__ */ React.createElement("span", { className: "ts-chip" }, "Popular"))), /* @__PURE__ */ React.createElement("div", { className: "field-list" }, /* @__PURE__ */ React.createElement(Field, { label: "Presets" }, /* @__PURE__ */ React.createElement("div", { className: "preset-grid" }, PRESETS.map((p) => {
      const c2 = p.colors[p.mode];
      return /* @__PURE__ */ React.createElement("button", { key: p.id, type: "button", className: cx("preset", t.presetId === p.id && "is-on"), onClick: () => {
        set((th) => {
          Object.assign(th, themeFromPreset(p.id));
        });
        toast(`${p.name} theme applied to every page`, { icon: "palette" });
      } }, /* @__PURE__ */ React.createElement("span", { className: "preset-sw", style: { background: c2.background, color: c2.foreground, borderRadius: Math.min(p.radius, 10) } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: fontStack(p.fonts.display), fontWeight: 600 } }, "Aa"), /* @__PURE__ */ React.createElement("span", { className: "preset-dots" }, /* @__PURE__ */ React.createElement("i", { style: { background: c2.primary } }), /* @__PURE__ */ React.createElement("i", { style: { background: c2.accent } }), /* @__PURE__ */ React.createElement("i", { style: { background: c2.secondary, borderColor: c2.border } }))), /* @__PURE__ */ React.createElement("span", { className: "preset-name" }, p.name, t.presetId === p.id && /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 13 })));
    }))), /* @__PURE__ */ React.createElement(Field, { label: "Mode" }, /* @__PURE__ */ React.createElement(Segmented, { full: true, value: mode, onChange: (v) => set((th) => {
      th.mode = v;
    }), options: [{ value: "light", label: "Light", icon: "sun" }, { value: "dark", label: "Dark", icon: "moon" }] })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("div", { className: "field-top" }, /* @__PURE__ */ React.createElement("span", { className: "field-label" }, "Colours"), /* @__PURE__ */ React.createElement("button", { type: "button", className: "link-btn", onClick: () => setAll(!all) }, all ? "Fewer colours" : "All colours")), /* @__PURE__ */ React.createElement(ColorRow, { label: "Primary", value: k.primary, onChange: (v) => setBoth("primary", v), swatches: ["#0E7C7B", "#B4441B", "#1F4D3A", "#8A1C3A", "#3B5BFF", "#161616"] }), /* @__PURE__ */ React.createElement(ColorRow, { label: "Accent", value: k.accent, onChange: (v) => setBoth("accent", v), swatches: ["#E8962E", "#D9962B", "#B8913F", "#38D9C0", "#3FA27C", "#2B2A8C"] }), all && COLOR_KEYS.filter((c2) => c2 !== "primary" && c2 !== "accent").map((c2) => /* @__PURE__ */ React.createElement(ColorRow, { key: c2, label: cap2(c2) + (mode === "dark" ? " (dark)" : ""), value: k[c2], onChange: (v) => set((th) => {
      th.colors[mode][c2] = v;
      th.presetId = null;
    }, c2 + mode), swatches: [] }))), /* @__PURE__ */ React.createElement(FontPick, { label: "Headings font", value: t.fonts.display, onChange: (v) => set((th) => {
      th.fonts.display = v;
      th.presetId = null;
    }) }), /* @__PURE__ */ React.createElement(FontPick, { label: "Body font", value: t.fonts.body, onChange: (v) => set((th) => {
      th.fonts.body = v;
      th.presetId = null;
    }) }), /* @__PURE__ */ React.createElement(Field, { label: "Corner radius" }, /* @__PURE__ */ React.createElement(Segmented, { full: true, value: t.radius, onChange: (v) => set((th) => {
      th.radius = v;
      th.presetId = null;
    }), options: RADII.map((r) => ({ value: r, label: r === 24 ? "Round" : String(r), icon: void 0 })) })), /* @__PURE__ */ React.createElement(Field, { label: "Section spacing" }, /* @__PURE__ */ React.createElement(Segmented, { full: true, value: t.spacing, onChange: (v) => set((th) => {
      th.spacing = v;
      th.presetId = null;
    }), options: [{ value: "compact", label: "Compact" }, { value: "comfortable", label: "Comfortable" }, { value: "spacious", label: "Spacious" }] })), /* @__PURE__ */ React.createElement(Field, { label: "Page width", hint: "How wide content gets on large screens." }, /* @__PURE__ */ React.createElement(Segmented, { full: true, value: t.width, onChange: (v) => set((th) => {
      th.width = v;
      th.presetId = null;
    }), options: WIDTHS }))));
  }
  var cap2 = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  // src/dialogs.jsx
  function BlockPreview({ type, values }) {
    const ed = useEd();
    const site = ed.site;
    const ctx = {
      site,
      mode: "static",
      page: pageById(site, ed.loc.pageId),
      pageId: ed.loc.pageId,
      homeId: site.homeId,
      item: null,
      listPage: null,
      media: (id) => {
        const m = ed.mediaBy[id];
        return m ? { src: mediaSrc(m), alt: m.alt } : null;
      },
      collection: (c2) => site.collections[c2],
      nav: (m) => site.nav[m] || [],
      linkProps: () => ({ href: "#", onClick: (e) => e.preventDefault() })
    };
    const B2 = BLOCKS[type];
    return /* @__PURE__ */ React.createElement(SiteCtx.Provider, { value: ctx }, /* @__PURE__ */ React.createElement("div", { className: "site-root", style: themeVars(site.theme) }, /* @__PURE__ */ React.createElement(B2.component, { v: values })));
  }
  function BlockLibrary({ dlg, onClose }) {
    const ed = useEd();
    const swap = dlg.mode === "swap";
    const cur = swap ? findSection(ed.site, ed.loc.pageId, dlg.id) : null;
    const locked = cur ? BLOCKS[cur.sec.type].category : null;
    const cats = CATEGORIES.filter((c2) => locked ? c2.id === locked : c2.id !== "header" && c2.id !== "footer");
    const [cat, setCat] = useState(locked || dlg.category || "hero");
    const [tag, setTag] = useState(null);
    const [q, setQ] = useState("");
    const match = (e) => (!tag || blockTags(e.type, e.values).includes(tag)) && (!q || (BLOCKS[e.type].title + " " + e.templateName + " " + BLOCKS[e.type].description).toLowerCase().includes(q.toLowerCase()));
    const entries = LIBRARY.filter((e) => e.category === cat && match(e) && !(cur && e.type === cur.sec.type && JSON.stringify(e.values) === JSON.stringify(cur.sec.values)));
    const counts = Object.fromEntries(cats.map((c2) => [c2.id, LIBRARY.filter((e) => e.category === c2.id && match(e)).length]));
    return /* @__PURE__ */ React.createElement(
      Overlay,
      {
        open: true,
        onClose,
        size: "xl",
        title: swap ? `Swap \u201C${blockTitle(cur.sec)}\u201D` : "Add a section",
        subtitle: swap ? "Pick another block of the same kind from any template. Matching text and buttons carry over." : "Blocks from every template, shown in your theme.",
        bodyClass: "lib-body"
      },
      /* @__PURE__ */ React.createElement("nav", { className: "lib-cats", "aria-label": "Categories" }, cats.map((c2) => /* @__PURE__ */ React.createElement("button", { key: c2.id, type: "button", className: cx("lib-cat", cat === c2.id && "is-on"), onClick: () => setCat(c2.id) }, /* @__PURE__ */ React.createElement("span", null, c2.label), /* @__PURE__ */ React.createElement("span", { className: "count-pill" }, counts[c2.id])))),
      /* @__PURE__ */ React.createElement("div", { className: "lib-main" }, /* @__PURE__ */ React.createElement("div", { className: "lib-filters" }, /* @__PURE__ */ React.createElement(Input, { placeholder: "Search blocks", value: q, onChange: (e) => setQ(e.target.value), className: "lib-search" }), /* @__PURE__ */ React.createElement("div", { className: "chips" }, TAGS.map((t) => /* @__PURE__ */ React.createElement("button", { key: t, type: "button", className: cx("chip", tag === t && "is-on"), onClick: () => setTag(tag === t ? null : t) }, t)))), entries.length === 0 && /* @__PURE__ */ React.createElement(Empty, { icon: "search", title: "No blocks match" }, "Try another category or clear the filters."), /* @__PURE__ */ React.createElement("div", { className: "lib-grid" }, entries.map((e) => {
        const B2 = BLOCKS[e.type];
        return /* @__PURE__ */ React.createElement("button", { key: e.key, type: "button", className: "lib-card", onClick: () => {
          ed.placeBlock(e, dlg);
          onClose();
        } }, /* @__PURE__ */ React.createElement(Scaled, { width: 1200, maxHeight: 200, className: "lib-thumb" }, /* @__PURE__ */ React.createElement(BlockPreview, { type: e.type, values: e.values })), /* @__PURE__ */ React.createElement("span", { className: "lib-meta" }, /* @__PURE__ */ React.createElement("span", { className: "lib-title" }, /* @__PURE__ */ React.createElement("strong", null, B2.title), /* @__PURE__ */ React.createElement(Badge, null, "from ", e.templateName)), /* @__PURE__ */ React.createElement("span", { className: "lib-desc" }, B2.description), /* @__PURE__ */ React.createElement("span", { className: "lib-tags" }, blockTags(e.type, e.values).map((t) => /* @__PURE__ */ React.createElement("span", { key: t, className: "tag" }, t)), B2.detail && /* @__PURE__ */ React.createElement("span", { className: "tag" }, "collection pages"))));
      })))
    );
  }
  function TemplatePagePreview({ tpl, src }) {
    const ed = useEd();
    const tmp = useMemo(() => {
      const d = clone(ed.site);
      const p = copyPageFromTemplate(tpl, src, d);
      d.pages.push(p);
      return { site: d, id: p.id };
    }, [tpl.id, src.id, ed.site.theme]);
    return /* @__PURE__ */ React.createElement(SiteView, { site: tmp.site, mediaBy: ed.mediaBy, loc: { pageId: tmp.id }, mode: "static", chrome: false });
  }
  function AddPage({ dlg, onClose }) {
    const ed = useEd();
    const { site } = ed;
    const [step, setStep] = useState(dlg.step === "template" ? "template" : "choose");
    const [tid2, setTid] = useState("atelier");
    const [pid, setPid] = useState(null);
    const tpl = TEMPLATE_BY[tid2];
    const pages = tpl.pages.filter((p) => p.kind !== "404");
    const src = pages.find((p) => p.id === pid) || pages[pages.length - 1];
    const cur = pageById(site, ed.loc.pageId);
    useEffect(() => {
      if (dlg.step === "blank") {
        ed.createPage("blank", { parentId: dlg.parentId });
        onClose();
      }
    }, []);
    const blocked = src && src.kind === "detail" && detailPageFor(site, src.collection);
    if (dlg.step === "blank") return null;
    if (step === "choose") {
      return /* @__PURE__ */ React.createElement(Overlay, { open: true, onClose, title: dlg.parentId ? `Add a page under \u201C${pageById(site, dlg.parentId).title}\u201D` : "Add a page", size: "md" }, /* @__PURE__ */ React.createElement("div", { className: "choice-list" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "choice", onClick: () => {
        ed.createPage("blank", { parentId: dlg.parentId });
        onClose();
      } }, /* @__PURE__ */ React.createElement("span", { className: "choice-ic" }, /* @__PURE__ */ React.createElement(Icon, { name: "file", size: 18 })), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, "Blank page"), /* @__PURE__ */ React.createElement("small", null, "Start empty and add sections from the block library.")), /* @__PURE__ */ React.createElement(Icon, { name: "chevRight", size: 16 })), /* @__PURE__ */ React.createElement("button", { type: "button", className: "choice", onClick: () => setStep("template") }, /* @__PURE__ */ React.createElement("span", { className: "choice-ic" }, /* @__PURE__ */ React.createElement(Icon, { name: "layout", size: 18 })), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, "From a template"), /* @__PURE__ */ React.createElement("small", null, "Copy a ready page from any template, such as Atelier\u2019s Contact page. It takes on your theme.")), /* @__PURE__ */ React.createElement(Icon, { name: "chevRight", size: 16 })), /* @__PURE__ */ React.createElement("button", { type: "button", className: "choice", disabled: !cur || cur.kind !== "page", onClick: () => {
        ed.duplicatePage(cur.id, dlg.parentId);
        onClose();
      } }, /* @__PURE__ */ React.createElement("span", { className: "choice-ic" }, /* @__PURE__ */ React.createElement(Icon, { name: "copy", size: 18 })), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, "Duplicate \u201C", cur ? cur.title : "", "\u201D"), /* @__PURE__ */ React.createElement("small", null, "Same sections and content, new address.")), /* @__PURE__ */ React.createElement(Icon, { name: "chevRight", size: 16 }))));
    }
    return /* @__PURE__ */ React.createElement(
      Overlay,
      {
        open: true,
        onClose,
        size: "xl",
        title: "Add a page from a template",
        subtitle: "Previews use your theme, so the page will match the rest of your site.",
        bodyClass: "ap-body",
        footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "muted small ap-note" }, blocked ? `Your site already has a page for each ${site.collections[src.collection].singular.toLowerCase()}.` : src.kind === "collection" && !detailPageFor(site, src.collection) ? `Also adds a page for each ${site.collections[src.collection].singular.toLowerCase()}.` : `Adds ${"/" + (src.slug || slugify(src.title))}`), /* @__PURE__ */ React.createElement(Btn2, { onClick: () => setStep("choose") }, "Back"), /* @__PURE__ */ React.createElement(Btn2, { variant: "primary", disabled: !!blocked, onClick: () => {
          ed.createPage("template", { tpl, src, parentId: dlg.parentId });
          onClose();
        } }, "Add \u201C", src.title, "\u201D"))
      },
      /* @__PURE__ */ React.createElement("nav", { className: "ap-tpls" }, TEMPLATES.map((t) => /* @__PURE__ */ React.createElement("button", { key: t.id, type: "button", className: cx("ap-tpl", tid2 === t.id && "is-on"), onClick: () => {
        setTid(t.id);
        setPid(null);
      } }, /* @__PURE__ */ React.createElement("strong", null, t.name), /* @__PURE__ */ React.createElement("small", null, t.industry)))),
      /* @__PURE__ */ React.createElement("div", { className: "ap-pages" }, /* @__PURE__ */ React.createElement("div", { className: "ap-list" }, pages.map((p) => /* @__PURE__ */ React.createElement("button", { key: p.id, type: "button", className: cx("ap-page", src.id === p.id && "is-on"), onClick: () => setPid(p.id) }, /* @__PURE__ */ React.createElement(Icon, { name: p.kind === "collection" ? "database" : p.kind === "detail" ? "layout" : "file", size: 14 }), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, p.title), /* @__PURE__ */ React.createElement("small", null, p.kind === "detail" ? "Entry page" : p.kind === "collection" ? "Collection list" : p.sections.length + " sections"))))), /* @__PURE__ */ React.createElement("div", { className: "ap-preview" }, /* @__PURE__ */ React.createElement(Scaled, { width: 1200, maxHeight: 1200, className: "ap-scaled", key: tid2 + src.id }, /* @__PURE__ */ React.createElement(TemplatePagePreview, { tpl, src }))))
    );
  }
  function DeletePage({ dlg, onClose }) {
    const ed = useEd();
    const { site } = ed;
    const page2 = pageById(site, dlg.pageId);
    const kids = page2 ? descendants(site, page2.id) : [];
    const dependents = kids.filter((k) => k.kind === "detail");
    const movers = kids.filter((k) => k.parentId === page2.id && k.kind !== "detail");
    const refs = page2 ? findRefs(site, [page2.id, ...dependents.map((d) => d.id)]) : [];
    const parent = page2 && page2.parentId ? pageById(site, page2.parentId) : null;
    const [redirect, setRedirect] = useState(page2 ? page2.status !== "draft" : false);
    const [target, setTarget] = useState(parent ? parent.id : site.homeId);
    if (!page2) return null;
    const targets = pageTree(site).filter((t) => t.page.id !== page2.id && !kids.some((k) => k.id === t.page.id) && t.page.kind !== "detail");
    const go = () => {
      const oldPath = pagePath(site, page2);
      const oldKidPaths = movers.map((m) => [m.id, pagePath(site, m)]);
      const tp = pagePath(site, pageById(site, target));
      let added = [];
      ed.commit((d) => {
        const before = Object.fromEntries(oldKidPaths);
        d.pages.forEach((p) => {
          if (p.parentId === page2.id && p.kind !== "detail") p.parentId = page2.parentId;
        });
        const gone = /* @__PURE__ */ new Set([page2.id, ...dependents.map((x) => x.id)]);
        d.pages = d.pages.filter((p) => !gone.has(p.id));
        ["header", "footer"].forEach((m) => {
          const arr = d.nav[m];
          const out = [];
          let dropChildren = false;
          arr.forEach((n2) => {
            const hit = n2.link && (n2.link.kind === "page" || n2.link.kind === "section") && gone.has(n2.link.pageId);
            if (hit && !n2.depth) {
              dropChildren = true;
              return;
            }
            if (hit) return;
            if (n2.depth && dropChildren) {
              out.push({ ...n2, depth: 0 });
              return;
            }
            if (!n2.depth) dropChildren = false;
            out.push(n2);
          });
          d.nav[m] = out;
        });
        if (redirect) {
          d.redirects = d.redirects.filter((r) => r.from !== oldPath);
          d.redirects.forEach((r) => {
            if (r.to === oldPath) r.to = tp;
          });
          d.redirects.push({ id: uid("r"), from: oldPath, to: tp, code: 301, auto: true, note: `Added when \u201C${page2.title}\u201D was deleted` });
          relink(d, page2.id, target);
        }
        added = applyRedirects(d, before);
      }, null);
      if (ed.loc.pageId === page2.id || dependents.some((x) => x.id === ed.loc.pageId)) ed.navigate({ pageId: redirect ? target : site.homeId });
      toast(`Deleted \u201C${page2.title}\u201D${redirect ? `. ${oldPath} now redirects to ${tp}` : ""}`, { icon: "trash", action: { label: "Undo", onClick: ed.undo } });
      redirectToast(ed, added);
      onClose();
    };
    const linkRefs = refs.filter((r) => r.scope !== "nav");
    const navRefs = refs.filter((r) => r.scope === "nav");
    return /* @__PURE__ */ React.createElement(
      Overlay,
      {
        open: true,
        onClose,
        size: "md",
        title: `Delete \u201C${page2.title}\u201D?`,
        subtitle: pagePath(site, page2),
        footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Btn2, { onClick: onClose }, "Cancel"), /* @__PURE__ */ React.createElement(Btn2, { variant: "danger", icon: "trash", onClick: go }, "Delete page"))
      },
      /* @__PURE__ */ React.createElement("div", { className: "stack" }, refs.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "note note-warn" }, /* @__PURE__ */ React.createElement(Icon, { name: "alert", size: 15 }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, refs.length, " ", refs.length === 1 ? "link points" : "links point", " to this page.")), /* @__PURE__ */ React.createElement("ul", { className: "ref-list" }, linkRefs.map((r, i) => /* @__PURE__ */ React.createElement("li", { key: "l" + i }, /* @__PURE__ */ React.createElement(Icon, { name: "link", size: 13 }), r.label, r.field ? " \u203A " + r.field : "")), navRefs.map((r, i) => /* @__PURE__ */ React.createElement("li", { key: "n" + i }, /* @__PURE__ */ React.createElement(Icon, { name: "menu", size: 13 }), r.label, /* @__PURE__ */ React.createElement("span", { className: "muted" }, " (removed from the menu)")))))) : /* @__PURE__ */ React.createElement("div", { className: "note note-info" }, /* @__PURE__ */ React.createElement(Icon, { name: "checkCircle", size: 15 }), /* @__PURE__ */ React.createElement("p", null, "No links or menus point to this page.")), movers.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "note note-info" }, /* @__PURE__ */ React.createElement(Icon, { name: "file", size: 15 }), /* @__PURE__ */ React.createElement("p", null, movers.map((m) => "\u201C" + m.title + "\u201D").join(", "), " will move up a level", page2.status !== "draft" ? " and get a redirect" : "", ".")), dependents.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "note note-warn" }, /* @__PURE__ */ React.createElement(Icon, { name: "database", size: 15 }), /* @__PURE__ */ React.createElement("p", null, "The entry page ", pagePath(site, dependents[0]), " is deleted too. Your ", site.collections[dependents[0].collection].name.toLowerCase(), " entries are kept.")), /* @__PURE__ */ React.createElement(Switch, { id: "del-redirect", label: `Redirect ${pagePath(site, page2)} to another page`, hint: "Visitors and search engines with the old address land somewhere useful, and links on your site point there instead of breaking.", checked: redirect, onChange: setRedirect }), redirect && /* @__PURE__ */ React.createElement(Field, { label: "Send visitors to" }, /* @__PURE__ */ React.createElement(Select, { value: target, onChange: setTarget, options: targets.map((t) => ({ value: t.page.id, label: "\xA0\xA0".repeat(t.depth) + t.page.title + "  " + pagePath(site, t.page) })) })), !redirect && refs.length > 0 && /* @__PURE__ */ React.createElement("p", { className: "field-msg is-error" }, /* @__PURE__ */ React.createElement(Icon, { name: "alertCircle", size: 13 }), "These links will break and show up in the publish checklist."))
    );
  }
  function MediaLibrary({ dlg, onClose }) {
    const ed = useEd();
    const { media, setMedia, site } = ed;
    const [filter, setFilter] = useState(dlg.kind === "file" ? "file" : dlg.onPick ? "image" : dlg.focus ? "alt" : "all");
    const [sel2, setSel] = useState(dlg.focus || null);
    const fileRef = useRef(null);
    const used = media.reduce((a, m2) => a + m2.size, 0);
    const missing = media.filter((m2) => m2.kind === "image" && !(m2.alt || "").trim());
    const list2 = media.filter((m2) => filter === "all" || (filter === "alt" ? missing.includes(m2) : m2.kind === filter));
    const m = media.find((x) => x.id === sel2);
    const usage = m ? mediaUsage(site, m.id) : [];
    const upload = (files) => {
      [...files].forEach((f) => {
        const mb = f.size / 1048576;
        if (used + mb > 500) {
          toast(`${f.name} is ${mb.toFixed(1)} MB and you have ${(500 - used).toFixed(0)} MB left. Delete unused files to make room.`, { tone: "error", icon: "alert" });
          return;
        }
        const r = new FileReader();
        r.onload = () => {
          const id = uid("m-u");
          const isImg = f.type.startsWith("image/");
          const add = (w, h) => {
            setMedia((l) => [{ id, name: f.name, kind: isImg ? "image" : "file", src: isImg ? r.result : null, alt: "", size: Math.max(0.01, Math.round(mb * 100) / 100), w, h, added: "Just now" }, ...l]);
            setSel(id);
            setFilter(isImg ? filter === "file" ? "all" : filter === "alt" ? "all" : filter : "file");
            toast(`Uploaded ${f.name}`, { icon: "upload" });
          };
          if (isImg) {
            const im = new Image();
            im.onload = () => add(im.naturalWidth, im.naturalHeight);
            im.onerror = () => add(0, 0);
            im.src = r.result;
          } else add(0, 0);
        };
        r.readAsDataURL(f);
      });
    };
    const pickable = dlg.onPick && m && (dlg.kind === "file" ? m.kind === "file" : m.kind === "image");
    return /* @__PURE__ */ React.createElement(
      Overlay,
      {
        open: true,
        onClose,
        size: "xl",
        title: dlg.onPick ? dlg.kind === "file" ? "Choose a file" : "Choose an image" : "Media",
        bodyClass: "media-body",
        headerExtra: /* @__PURE__ */ React.createElement("div", { className: "storage", title: `${used.toFixed(1)} MB of 500 MB used` }, /* @__PURE__ */ React.createElement("div", { className: "storage-bar" }, /* @__PURE__ */ React.createElement("span", { style: { width: Math.min(100, used / 500 * 100) + "%" } })), /* @__PURE__ */ React.createElement("span", { className: "storage-text" }, /* @__PURE__ */ React.createElement("strong", null, used.toFixed(1), " MB"), " of 500 MB")),
        footer: dlg.onPick ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "muted small" }, m ? m.name : "Select an item"), /* @__PURE__ */ React.createElement(Btn2, { onClick: onClose }, "Cancel"), /* @__PURE__ */ React.createElement(Btn2, { variant: "primary", disabled: !pickable, onClick: () => {
          dlg.onPick(m.id);
          onClose();
        } }, "Use ", dlg.kind === "file" ? "file" : "image")) : null
      },
      /* @__PURE__ */ React.createElement("div", { className: "media-main" }, /* @__PURE__ */ React.createElement("div", { className: "media-toolbar" }, /* @__PURE__ */ React.createElement(Segmented, { size: "sm", value: filter, onChange: setFilter, options: [{ value: "all", label: "All", count: media.length }, { value: "image", label: "Images" }, { value: "file", label: "Files" }, { value: "alt", label: "No alt text", count: missing.length }] }), /* @__PURE__ */ React.createElement("input", { ref: fileRef, type: "file", hidden: true, multiple: true, accept: dlg.kind === "file" ? ".pdf,application/pdf" : "image/*,.pdf", onChange: (e) => {
        upload(e.target.files);
        e.target.value = "";
      } }), /* @__PURE__ */ React.createElement(Btn2, { variant: "primary", size: "sm", icon: "upload", onClick: () => fileRef.current.click() }, "Upload")), /* @__PURE__ */ React.createElement("div", { className: "media-grid", onDragOver: (e) => e.preventDefault(), onDrop: (e) => {
        e.preventDefault();
        upload(e.dataTransfer.files);
      } }, list2.map((x) => /* @__PURE__ */ React.createElement("button", { key: x.id, type: "button", className: cx("media-tile", sel2 === x.id && "is-on"), onClick: () => setSel(x.id), onDoubleClick: () => {
        if (dlg.onPick) {
          dlg.onPick(x.id);
          onClose();
        }
      } }, /* @__PURE__ */ React.createElement("span", { className: "media-img" }, x.kind === "image" ? /* @__PURE__ */ React.createElement("img", { src: mediaSrc(x), alt: "", loading: "lazy" }) : /* @__PURE__ */ React.createElement("span", { className: "file-ic" }, /* @__PURE__ */ React.createElement(Icon, { name: "fileText", size: 26 }), /* @__PURE__ */ React.createElement("small", null, "PDF")), x.kind === "image" && !(x.alt || "").trim() && /* @__PURE__ */ React.createElement("span", { className: "media-flag", title: "No alt text" }, /* @__PURE__ */ React.createElement(Icon, { name: "alert", size: 12 }))), /* @__PURE__ */ React.createElement("span", { className: "media-name" }, x.name), /* @__PURE__ */ React.createElement("span", { className: "media-size" }, x.size.toFixed(1), " MB"))), list2.length === 0 && /* @__PURE__ */ React.createElement(Empty, { icon: "image", title: "Nothing here" }, "Upload images or PDFs, or drop them onto this area."))),
      /* @__PURE__ */ React.createElement("aside", { className: cx("media-side", m && "is-open") }, m ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "media-big" }, m.kind === "image" ? /* @__PURE__ */ React.createElement("img", { src: mediaSrc(m), alt: "" }) : /* @__PURE__ */ React.createElement("span", { className: "file-ic big" }, /* @__PURE__ */ React.createElement(Icon, { name: "fileText", size: 40 }))), /* @__PURE__ */ React.createElement(Field, { label: "File name" }, /* @__PURE__ */ React.createElement(Input, { value: m.name, onChange: (e) => setMedia((l) => l.map((x) => x.id === m.id ? { ...x, name: e.target.value } : x)) })), m.kind === "image" && /* @__PURE__ */ React.createElement(Field, { label: "Alt text", warn: !(m.alt || "").trim() ? "Missing. Screen readers and search engines rely on it." : null }, /* @__PURE__ */ React.createElement(TextArea, { rows: 3, value: m.alt, placeholder: "Describe what the image shows", onChange: (e) => setMedia((l) => l.map((x) => x.id === m.id ? { ...x, alt: e.target.value } : x)) })), /* @__PURE__ */ React.createElement("dl", { className: "kv" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Size"), /* @__PURE__ */ React.createElement("dd", null, m.size.toFixed(2), " MB")), m.w > 0 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Dimensions"), /* @__PURE__ */ React.createElement("dd", null, m.w, " \xD7 ", m.h)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Added"), /* @__PURE__ */ React.createElement("dd", null, m.added))), /* @__PURE__ */ React.createElement("div", { className: "usage" }, /* @__PURE__ */ React.createElement("p", { className: "field-label" }, "Used in"), usage.length ? /* @__PURE__ */ React.createElement("ul", null, usage.slice(0, 6).map((u, i) => /* @__PURE__ */ React.createElement("li", { key: i }, u.label)), usage.length > 6 && /* @__PURE__ */ React.createElement("li", { className: "muted" }, "and ", usage.length - 6, " more")) : /* @__PURE__ */ React.createElement("p", { className: "muted small" }, "Not used on any page.")), /* @__PURE__ */ React.createElement(Btn2, { variant: "danger-ghost", size: "sm", icon: "trash", onClick: () => {
        if (usage.length) {
          toast(`${m.name} is used in ${usage.length} ${usage.length === 1 ? "place" : "places"}. Replace it there first.`, { tone: "error", icon: "alert" });
          return;
        }
        setMedia((l) => l.filter((x) => x.id !== m.id));
        setSel(null);
        toast(`Deleted ${m.name}. ${m.size.toFixed(1)} MB freed.`, { icon: "trash" });
      } }, "Delete")) : /* @__PURE__ */ React.createElement(Empty, { icon: "image", title: "No file selected" }, "Select an image to edit its alt text or see where it is used."))
    );
  }
  var COLL_FIELDS = {
    services: [{ key: "title", label: "Title" }, { key: "slug", label: "Slug", mono: true }, { key: "price", label: "Price" }, { key: "duration", label: "Duration" }],
    blog: [{ key: "title", label: "Title" }, { key: "slug", label: "Slug", mono: true }, { key: "date", label: "Date" }, { key: "author", label: "Author" }]
  };
  function Collections({ dlg, onClose }) {
    const ed = useEd();
    const { site } = ed;
    const [tab, setTab] = useState(dlg.tab || "services");
    const [open, setOpen] = useState(dlg.itemId || null);
    const slugSnap = useRef(null);
    const c2 = site.collections[tab];
    const list2 = listPageFor(site, tab);
    const detail = detailPageFor(site, tab);
    const it = c2.items.find((x) => x.id === open);
    const up = (id, key, v, coalesce = true) => ed.commit((d) => {
      const x = d.collections[tab].items.find((y) => y.id === id);
      x[key] = v;
      if (key === "title" && !x.slugEdited) x.slug = slugify(v);
      if (key === "slug") x.slugEdited = true;
    }, coalesce ? "coll:" + id + ":" + key : null);
    const slugFocus = (x) => {
      slugSnap.current = { id: x.id, path: itemPath(site, tab, x) };
    };
    const slugBlur = () => {
      const s = slugSnap.current;
      slugSnap.current = null;
      if (!s || !s.path) return;
      const x = c2.items.find((y) => y.id === s.id);
      const np = itemPath(site, tab, x);
      if (!x || np === s.path || x.status === "draft") return;
      ed.commit((d) => {
        d.redirects.forEach((r) => {
          if (r.to === s.path) r.to = np;
        });
        if (!d.redirects.some((r) => r.from === s.path)) d.redirects.push({ id: uid("r"), from: s.path, to: np, code: 301, auto: true, note: `Added when \u201C${x.title}\u201D moved` });
      });
      redirectToast(ed, [[s.path, np]]);
    };
    const add = () => {
      const id = uid("e");
      ed.commit((d) => {
        const n2 = d.collections[tab].items.length + 1;
        const title = tab === "services" ? "New service" : "New post";
        const base = { id, title, slug: slugify(title) + "-" + n2, status: "draft", image: null, body: "" };
        d.collections[tab].items.unshift(tab === "services" ? { ...base, summary: "", price: "", duration: "" } : { ...base, date: "5 Nov 2026", author: "Ananya Mehta", excerpt: "" });
      }, null);
      setOpen(id);
    };
    const del = (x) => {
      ed.commit((d) => {
        d.collections[tab].items = d.collections[tab].items.filter((y) => y.id !== x.id);
      }, null);
      setOpen(null);
      toast(`Deleted \u201C${x.title}\u201D`, { icon: "trash", action: { label: "Undo", onClick: ed.undo } });
    };
    const preview = (x) => {
      if (!detail) return;
      ed.navigate({ pageId: detail.id, itemId: x.id });
      onClose();
    };
    const fields = COLL_FIELDS[tab];
    return /* @__PURE__ */ React.createElement(
      Overlay,
      {
        open: true,
        onClose,
        size: "xl",
        title: "Collections",
        bodyClass: "coll-body",
        subtitle: list2 ? /* @__PURE__ */ React.createElement(React.Fragment, null, "Listed on ", /* @__PURE__ */ React.createElement("code", null, pagePath(site, list2)), detail && /* @__PURE__ */ React.createElement(React.Fragment, null, " \xB7 each entry at ", /* @__PURE__ */ React.createElement("code", null, pagePath(site, detail)))) : "No page lists this collection yet. Add one from a template."
      },
      /* @__PURE__ */ React.createElement("div", { className: "coll-top" }, /* @__PURE__ */ React.createElement(Segmented, { value: tab, onChange: (v) => {
        setTab(v);
        setOpen(null);
      }, options: Object.values(site.collections).map((x) => ({ value: x.id, label: x.name, count: x.items.length })) }), /* @__PURE__ */ React.createElement(Btn2, { variant: "primary", size: "sm", icon: "plus", onClick: add }, "Add ", c2.singular.toLowerCase())),
      it ? /* @__PURE__ */ React.createElement("div", { className: "coll-edit" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "link-btn back", onClick: () => setOpen(null) }, /* @__PURE__ */ React.createElement(Icon, { name: "arrowLeft", size: 14 }), " All ", c2.name.toLowerCase()), /* @__PURE__ */ React.createElement("div", { className: "coll-edit-grid" }, /* @__PURE__ */ React.createElement("div", { className: "field-list" }, /* @__PURE__ */ React.createElement(Field, { label: "Title" }, /* @__PURE__ */ React.createElement(Input, { value: it.title, onChange: (e) => up(it.id, "title", e.target.value) })), /* @__PURE__ */ React.createElement(Field, { label: "Address", hint: detail ? "Renaming adds a redirect from the old address." : null }, /* @__PURE__ */ React.createElement(Input, { prefix: detail ? pagePath(site, pageById(site, detail.parentId)) + "/" : "/", value: it.slug, onFocus: () => slugFocus(it), onBlur: slugBlur, onChange: (e) => up(it.id, "slug", slugify(e.target.value) || it.slug) })), tab === "services" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "two" }, /* @__PURE__ */ React.createElement(Field, { label: "Price" }, /* @__PURE__ */ React.createElement(Input, { value: it.price, onChange: (e) => up(it.id, "price", e.target.value) })), /* @__PURE__ */ React.createElement(Field, { label: "Duration" }, /* @__PURE__ */ React.createElement(Input, { value: it.duration, onChange: (e) => up(it.id, "duration", e.target.value) }))), /* @__PURE__ */ React.createElement(Field, { label: "Summary" }, /* @__PURE__ */ React.createElement(TextArea, { rows: 2, value: it.summary, onChange: (e) => up(it.id, "summary", e.target.value) }))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "two" }, /* @__PURE__ */ React.createElement(Field, { label: "Date" }, /* @__PURE__ */ React.createElement(Input, { value: it.date, onChange: (e) => up(it.id, "date", e.target.value) })), /* @__PURE__ */ React.createElement(Field, { label: "Author" }, /* @__PURE__ */ React.createElement(Input, { value: it.author, onChange: (e) => up(it.id, "author", e.target.value) }))), /* @__PURE__ */ React.createElement(Field, { label: "Excerpt" }, /* @__PURE__ */ React.createElement(TextArea, { rows: 2, value: it.excerpt, onChange: (e) => up(it.id, "excerpt", e.target.value) }))), /* @__PURE__ */ React.createElement(Field, { label: "Text" }, /* @__PURE__ */ React.createElement(RichInput, { value: it.body, onChange: (v) => up(it.id, "body", v) }))), /* @__PURE__ */ React.createElement("div", { className: "field-list" }, /* @__PURE__ */ React.createElement(Field, { label: "Photo" }, /* @__PURE__ */ React.createElement(ImageField, { value: it.image, onChange: (v) => up(it.id, "image", v, false) })), /* @__PURE__ */ React.createElement(Field, { label: "Status" }, /* @__PURE__ */ React.createElement(Segmented, { full: true, value: it.status, onChange: (v) => up(it.id, "status", v, false), options: [{ value: "live", label: "Published" }, { value: "draft", label: "Draft" }] })), /* @__PURE__ */ React.createElement("div", { className: "row-gap" }, /* @__PURE__ */ React.createElement(Btn2, { size: "sm", icon: "eye", disabled: !detail, onClick: () => preview(it) }, "Preview page"), /* @__PURE__ */ React.createElement(Btn2, { size: "sm", variant: "danger-ghost", icon: "trash", onClick: () => del(it) }, "Delete"))))) : /* @__PURE__ */ React.createElement("div", { className: "table-wrap" }, /* @__PURE__ */ React.createElement("table", { className: "table" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", { className: "th-img" }), fields.map((f) => /* @__PURE__ */ React.createElement("th", { key: f.key }, f.label)), /* @__PURE__ */ React.createElement("th", null, "Status"), /* @__PURE__ */ React.createElement("th", null))), /* @__PURE__ */ React.createElement("tbody", null, c2.items.map((x) => /* @__PURE__ */ React.createElement("tr", { key: x.id }, /* @__PURE__ */ React.createElement("td", { className: "td-img" }, x.image ? /* @__PURE__ */ React.createElement("img", { src: mediaSrc(ed.mediaBy[x.image]), alt: "" }) : /* @__PURE__ */ React.createElement("span", { className: "td-noimg" }, /* @__PURE__ */ React.createElement(Icon, { name: "image", size: 12 }))), fields.map((f) => /* @__PURE__ */ React.createElement("td", { key: f.key }, /* @__PURE__ */ React.createElement(
        "input",
        {
          className: cx("cell", f.mono && "mono"),
          value: x[f.key] || "",
          "aria-label": f.label,
          onFocus: f.key === "slug" ? () => slugFocus(x) : void 0,
          onBlur: f.key === "slug" ? slugBlur : void 0,
          onChange: (e) => up(x.id, f.key, f.key === "slug" ? slugify(e.target.value) || x.slug : e.target.value)
        }
      ))), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Badge, { tone: x.status === "draft" ? "warn" : "ok" }, x.status === "draft" ? "Draft" : "Published")), /* @__PURE__ */ React.createElement("td", { className: "td-actions" }, /* @__PURE__ */ React.createElement(IconBtn, { size: "sm", icon: "pencil", label: "Edit entry", onClick: () => setOpen(x.id) }), /* @__PURE__ */ React.createElement(IconBtn, { size: "sm", icon: "eye", label: "Preview page", disabled: !detail, onClick: () => preview(x) }), /* @__PURE__ */ React.createElement(MenuButton, { items: [{ label: "Delete", icon: "trash", danger: true, onClick: () => del(x) }] })))))), /* @__PURE__ */ React.createElement("div", { className: "coll-cards" }, c2.items.map((x) => /* @__PURE__ */ React.createElement("button", { key: x.id, type: "button", className: "coll-card", onClick: () => setOpen(x.id) }, x.image ? /* @__PURE__ */ React.createElement("img", { src: mediaSrc(ed.mediaBy[x.image]), alt: "" }) : /* @__PURE__ */ React.createElement("span", { className: "td-noimg" }, /* @__PURE__ */ React.createElement(Icon, { name: "image", size: 14 })), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, x.title), /* @__PURE__ */ React.createElement("small", null, tab === "services" ? x.price : x.date, " \xB7 ", /* @__PURE__ */ React.createElement("code", null, "/", x.slug))), x.status === "draft" && /* @__PURE__ */ React.createElement(Badge, { tone: "warn" }, "Draft"), /* @__PURE__ */ React.createElement(Icon, { name: "chevRight", size: 14 })))))
    );
  }
  function Redirects({ onClose }) {
    const ed = useEd();
    const { site } = ed;
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const paths = pageTree(site).filter((t) => t.page.kind !== "detail").map((t) => pagePath(site, t.page));
    const norm = (s) => {
      s = s.trim();
      return s && !s.startsWith("/") && !/^https?:/.test(s) ? "/" + s : s;
    };
    const up = (id, k, v) => ed.commit((d) => {
      const r = d.redirects.find((x) => x.id === id);
      r[k] = v;
      r.auto = false;
    }, "redir:" + id + k);
    const check = (r) => {
      if (!r.from.startsWith("/")) return { err: "Starts with /" };
      if (paths.includes(r.from)) return { warn: "A live page uses this address, so the page wins and this redirect is ignored." };
      if (!/^https?:/.test(r.to) && route(site, r.to).notFound) return { err: "Goes to an address with no page." };
      if (site.redirects.filter((x) => x.from === r.from).length > 1) return { err: "Another redirect starts from the same address." };
      return {};
    };
    const add = () => {
      const f = norm(from), t = norm(to);
      if (!f || !t) return;
      ed.commit((d) => {
        d.redirects.unshift({ id: uid("r"), from: f, to: t, code: 301, auto: false, note: "" });
      }, null);
      setFrom("");
      setTo("");
    };
    return /* @__PURE__ */ React.createElement(Overlay, { open: true, onClose, size: "lg", title: "Redirects", subtitle: "Send old addresses to new ones. Renaming or deleting a page adds one automatically." }, /* @__PURE__ */ React.createElement("datalist", { id: "page-paths" }, paths.map((p) => /* @__PURE__ */ React.createElement("option", { key: p, value: p }))), /* @__PURE__ */ React.createElement("form", { className: "redir-add", onSubmit: (e) => {
      e.preventDefault();
      add();
    } }, /* @__PURE__ */ React.createElement(Input, { placeholder: "/old-address", value: from, onChange: (e) => setFrom(e.target.value), "aria-label": "From" }), /* @__PURE__ */ React.createElement(Icon, { name: "arrowRight", size: 16 }), /* @__PURE__ */ React.createElement(Input, { placeholder: "/new-address", value: to, onChange: (e) => setTo(e.target.value), list: "page-paths", "aria-label": "To" }), /* @__PURE__ */ React.createElement(Btn2, { variant: "primary", type: "submit", icon: "plus", disabled: !from || !to, onClick: add }, "Add")), /* @__PURE__ */ React.createElement("div", { className: "redir-list" }, site.redirects.length === 0 && /* @__PURE__ */ React.createElement(Empty, { icon: "corner", title: "No redirects yet" }, "They appear here when you rename or delete a published page."), site.redirects.map((r) => {
      const c2 = check(r);
      return /* @__PURE__ */ React.createElement("div", { key: r.id, className: "redir-row" }, /* @__PURE__ */ React.createElement("div", { className: "redir-fields" }, /* @__PURE__ */ React.createElement(Input, { className: "mono", value: r.from, onChange: (e) => up(r.id, "from", norm(e.target.value)), "aria-label": "From" }), /* @__PURE__ */ React.createElement(Icon, { name: "arrowRight", size: 14 }), /* @__PURE__ */ React.createElement(Input, { className: "mono", value: r.to, onChange: (e) => up(r.id, "to", norm(e.target.value)), list: "page-paths", "aria-label": "To" }), /* @__PURE__ */ React.createElement(Select, { value: String(r.code), onChange: (v) => up(r.id, "code", Number(v)), options: [{ value: "301", label: "301 Permanent" }, { value: "302", label: "302 Temporary" }] }), /* @__PURE__ */ React.createElement(IconBtn, { size: "sm", icon: "play", label: "Try it in the preview", onClick: () => {
        ed.goPath(r.from);
        onClose();
      } }), /* @__PURE__ */ React.createElement(IconBtn, { size: "sm", icon: "trash", label: "Delete redirect", onClick: () => ed.commit((d) => {
        d.redirects = d.redirects.filter((x) => x.id !== r.id);
      }, null) })), /* @__PURE__ */ React.createElement("div", { className: "redir-meta" }, r.auto && /* @__PURE__ */ React.createElement(Badge, { tone: "accent", icon: "sparkle" }, "Automatic"), r.note && /* @__PURE__ */ React.createElement("span", { className: "muted small" }, r.note), c2.err && /* @__PURE__ */ React.createElement("span", { className: "field-msg is-error" }, /* @__PURE__ */ React.createElement(Icon, { name: "alertCircle", size: 13 }), c2.err), c2.warn && /* @__PURE__ */ React.createElement("span", { className: "field-msg is-warn" }, /* @__PURE__ */ React.createElement(Icon, { name: "alert", size: 13 }), c2.warn)));
    })));
  }
  var KIND_META = {
    broken: { label: "Broken links", icon: "unlink" },
    hidden: { label: "Links to hidden or draft pages", icon: "eyeOff" },
    alt: { label: "Images without alt text", icon: "image" },
    seo: { label: "Missing search details", icon: "search" }
  };
  function Publish({ dlg, onClose }) {
    const ed = useEd();
    const { site, media, versions, liveV } = ed;
    const [tab, setTab] = useState(dlg.tab || "review");
    const [phase, setPhase] = useState("idle");
    const [step, setStep] = useState(0);
    const [confirmV, setConfirmV] = useState(null);
    const live = versions.find((v) => v.v === liveV);
    const issues = useMemo(() => runChecks(site, media), [site, media]);
    const changes = useMemo(() => diffSites(live && live.snapshot, site), [site, live]);
    const errors = issues.filter((i) => i.level === "error").length;
    const pubCount = site.pages.filter((p) => p.status !== "draft").length;
    const STEPS = ["Checking links", `Building ${pubCount} pages`, `Uploading to ${site.subdomain}.selfsite.in`, "Clearing the cache"];
    const publish = () => {
      setPhase("run");
      setStep(0);
      let i = 0;
      const tick = () => {
        i++;
        if (i < STEPS.length) {
          setStep(i);
          setTimeout(tick, 650);
        } else {
          ed.publish(changes.length);
          setPhase("done");
        }
      };
      setTimeout(tick, 650);
    };
    const groups = Object.keys(KIND_META).map((k) => ({ k, items: issues.filter((i) => i.kind === k) }));
    if (phase !== "idle") {
      return /* @__PURE__ */ React.createElement(Overlay, { open: true, onClose: phase === "done" ? onClose : () => {
      }, size: "sm", title: phase === "done" ? "Your site is live" : "Publishing\u2026" }, /* @__PURE__ */ React.createElement("div", { className: "pub-run" }, STEPS.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: s, className: cx("pub-step", phase === "done" || i < step ? "is-done" : i === step ? "is-active" : "") }, /* @__PURE__ */ React.createElement("span", { className: "pub-dot" }, phase === "done" || i < step ? /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 12, sw: 2.4 }) : null), s)), phase === "done" && /* @__PURE__ */ React.createElement("div", { className: "pub-done" }, /* @__PURE__ */ React.createElement("p", null, "Version ", ed.liveV, " is live at"), /* @__PURE__ */ React.createElement("div", { className: "url-copy" }, /* @__PURE__ */ React.createElement(Icon, { name: "lock", size: 13 }), /* @__PURE__ */ React.createElement("span", null, site.subdomain, ".selfsite.in"), /* @__PURE__ */ React.createElement(Btn2, { size: "sm", icon: "copy", onClick: () => {
        const t = `https://${site.subdomain}.selfsite.in`;
        (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => toast("Address copied", { icon: "check" })).catch(() => toast(t));
      } }, "Copy")), /* @__PURE__ */ React.createElement("div", { className: "row-gap" }, /* @__PURE__ */ React.createElement(Btn2, { onClick: () => {
        ed.setView({ version: ed.liveV });
        onClose();
      }, icon: "eye" }, "View live site"), /* @__PURE__ */ React.createElement(Btn2, { variant: "primary", onClick: onClose }, "Done")))));
    }
    return /* @__PURE__ */ React.createElement(
      Overlay,
      {
        open: true,
        onClose,
        size: "lg",
        title: "Publish",
        bodyClass: "pub-body",
        headerExtra: /* @__PURE__ */ React.createElement(Segmented, { size: "sm", value: tab, onChange: setTab, options: [{ value: "review", label: "Review" }, { value: "history", label: "History", count: versions.length }] }),
        footer: tab === "review" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: cx("small", errors ? "err-text" : "muted") }, errors ? `${errors} ${errors === 1 ? "problem" : "problems"} will reach visitors if you publish now.` : changes.length ? "Ready to publish." : "Nothing has changed since the last publish."), /* @__PURE__ */ React.createElement(Btn2, { onClick: onClose }, "Cancel"), /* @__PURE__ */ React.createElement(Btn2, { variant: errors ? "secondary" : "primary", icon: "cloud", disabled: !changes.length, onClick: publish }, errors ? "Publish anyway" : `Publish ${changes.length} ${changes.length === 1 ? "change" : "changes"}`)) : null
      },
      tab === "review" ? /* @__PURE__ */ React.createElement("div", { className: "stack" }, /* @__PURE__ */ React.createElement("div", { className: "pub-state" }, /* @__PURE__ */ React.createElement("div", { className: "pub-card" }, /* @__PURE__ */ React.createElement("span", { className: "pub-card-label" }, /* @__PURE__ */ React.createElement("span", { className: "dot dot-warn" }), "Draft"), /* @__PURE__ */ React.createElement("strong", null, changes.length ? `${changes.length} unpublished ${changes.length === 1 ? "change" : "changes"}` : "Up to date"), /* @__PURE__ */ React.createElement("small", null, "Saved automatically \xB7 only you can see it")), /* @__PURE__ */ React.createElement(Icon, { name: "arrowRight", size: 16, className: "muted" }), /* @__PURE__ */ React.createElement("div", { className: "pub-card" }, /* @__PURE__ */ React.createElement("span", { className: "pub-card-label" }, /* @__PURE__ */ React.createElement("span", { className: "dot dot-ok" }), "Live \xB7 v", liveV), /* @__PURE__ */ React.createElement("strong", null, site.subdomain, ".selfsite.in"), /* @__PURE__ */ React.createElement("small", null, "Published ", live ? live.at : "", " by ", live ? live.by : "")), /* @__PURE__ */ React.createElement(Btn2, { size: "sm", variant: "ghost", icon: "eye", onClick: () => {
        ed.setView({ version: liveV });
        onClose();
      } }, "View live")), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h4", { className: "sec-title" }, "Checklist ", issues.length > 0 && /* @__PURE__ */ React.createElement("span", { className: "muted" }, "\xB7 ", errors, " ", errors === 1 ? "error" : "errors", ", ", issues.length - errors, " ", issues.length - errors === 1 ? "warning" : "warnings")), /* @__PURE__ */ React.createElement("div", { className: "checks" }, groups.map((g) => /* @__PURE__ */ React.createElement("div", { key: g.k, className: "check-group" }, /* @__PURE__ */ React.createElement("div", { className: "check-head" }, g.items.length ? /* @__PURE__ */ React.createElement(Icon, { name: g.items.some((i) => i.level === "error") ? "alertCircle" : "alert", size: 15, className: g.items.some((i) => i.level === "error") ? "err-text" : "warn-text" }) : /* @__PURE__ */ React.createElement(Icon, { name: "checkCircle", size: 15, className: "ok-text" }), /* @__PURE__ */ React.createElement("span", null, KIND_META[g.k].label), /* @__PURE__ */ React.createElement("span", { className: "count-pill" }, g.items.length || "None")), g.items.map((i) => /* @__PURE__ */ React.createElement("div", { key: i.id, className: "check-row" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, i.title), /* @__PURE__ */ React.createElement("small", { className: "muted" }, i.where)), /* @__PURE__ */ React.createElement(Btn2, { size: "sm", onClick: () => {
        onClose();
        ed.fixIssue(i);
      } }, "Fix"))))))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h4", { className: "sec-title" }, "Changed since v", liveV), changes.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "muted small" }, "No changes."), /* @__PURE__ */ React.createElement("div", { className: "changes" }, changes.map((c2, i) => /* @__PURE__ */ React.createElement("button", { key: i, type: "button", className: "change-row", disabled: !c2.pageId, onClick: () => {
        if (c2.pageId) {
          ed.navigate({ pageId: c2.pageId });
          onClose();
        }
      } }, /* @__PURE__ */ React.createElement(Badge, { tone: c2.type === "added" ? "ok" : c2.type === "deleted" ? "err" : c2.type === "site" ? "accent" : "neutral" }, c2.type === "site" ? "Site-wide" : c2.type[0].toUpperCase() + c2.type.slice(1)), /* @__PURE__ */ React.createElement("span", { className: "change-title" }, c2.title, c2.path && /* @__PURE__ */ React.createElement("code", null, c2.path)), /* @__PURE__ */ React.createElement("span", { className: "muted small" }, c2.detail)))))) : /* @__PURE__ */ React.createElement("div", { className: "history" }, versions.slice().reverse().map((v) => /* @__PURE__ */ React.createElement("div", { key: v.v, className: cx("ver", v.v === liveV && "is-live") }, /* @__PURE__ */ React.createElement("span", { className: "ver-dot" }), /* @__PURE__ */ React.createElement("div", { className: "ver-main" }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "v", v.v), " \xB7 ", v.note, " ", v.v === liveV && /* @__PURE__ */ React.createElement(Badge, { tone: "ok" }, "Live")), /* @__PURE__ */ React.createElement("small", { className: "muted" }, v.at, " \xB7 ", v.by), confirmV === v.v && /* @__PURE__ */ React.createElement("div", { className: "note note-warn ver-confirm" }, /* @__PURE__ */ React.createElement(Icon, { name: "alert", size: 15 }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Roll back to v", v.v, "? It goes live straight away as v", versions.length + 1, " and replaces your draft. Undo brings your draft back."), /* @__PURE__ */ React.createElement("div", { className: "row-gap" }, /* @__PURE__ */ React.createElement(Btn2, { size: "sm", onClick: () => setConfirmV(null) }, "Cancel"), /* @__PURE__ */ React.createElement(Btn2, { size: "sm", variant: "primary", onClick: () => {
        ed.rollback(v.v);
        setConfirmV(null);
        onClose();
      } }, "Roll back to v", v.v))))), /* @__PURE__ */ React.createElement("div", { className: "ver-actions" }, /* @__PURE__ */ React.createElement(Btn2, { size: "sm", variant: "ghost", icon: "eye", onClick: () => {
        ed.setView({ version: v.v });
        onClose();
      } }, "View"), v.v !== liveV && /* @__PURE__ */ React.createElement(Btn2, { size: "sm", icon: "history", onClick: () => setConfirmV(v.v) }, "Roll back")))))
    );
  }
  function CommandMenu({ onClose }) {
    const ed = useEd();
    const { site } = ed;
    const [q, setQ] = useState("");
    const [i, setI] = useState(0);
    const listRef = useRef(null);
    const all = useMemo(() => {
      const out = [];
      pageTree(site).forEach(({ page: page2 }) => out.push({ group: "Jump to page", label: page2.title, hint: pagePath(site, page2), icon: page2.id === site.homeId ? "home" : "file", run: () => ed.navigate({ pageId: page2.id }) }));
      const nf = pageById(site, site.notFoundId);
      if (nf) out.push({ group: "Jump to page", label: nf.title, hint: "/404", icon: "fileX", run: () => ed.navigate({ pageId: nf.id }) });
      Object.values(site.collections).forEach((c2) => c2.items.forEach((it) => {
        const d = detailPageFor(site, c2.id);
        if (d) out.push({ group: "Jump to page", label: it.title, hint: itemPath(site, c2.id, it), icon: "fileText", run: () => ed.navigate({ pageId: d.id, itemId: it.id }) });
      }));
      CATEGORIES.filter((c2) => c2.id !== "header" && c2.id !== "footer").forEach((c2) => out.push({ group: "Add", label: "Add section: " + c2.label, icon: "plus", run: () => ed.sectionAction("insert", { category: c2.id }) }));
      out.push({ group: "Add", label: "Add page: blank", icon: "file", run: () => ed.openDialog({ type: "addPage", step: "blank" }) });
      out.push({ group: "Add", label: "Add page from a template", icon: "layout", run: () => ed.openDialog({ type: "addPage", step: "template" }) });
      out.push({ group: "Add", label: "Duplicate this page", icon: "copy", run: () => ed.duplicatePage(ed.loc.pageId) });
      [
        ["Theme", "palette", () => ed.openTheme()],
        ["Navigation menus", "menu", () => ed.openNav()],
        ["Page settings", "settings", () => ed.openPageSettings(ed.loc.pageId)],
        ["Media library", "image", () => ed.openDialog({ type: "media" })],
        ["Collections: Services", "table", () => ed.openDialog({ type: "collections", tab: "services" })],
        ["Collections: Blog", "table", () => ed.openDialog({ type: "collections", tab: "blog" })],
        ["Redirects", "corner", () => ed.openDialog({ type: "redirects" })],
        ["Publish", "cloud", () => ed.openDialog({ type: "publish" })],
        ["Version history", "history", () => ed.openDialog({ type: "publish", tab: "history" })]
      ].forEach(([label, icon, run2]) => out.push({ group: "Open", label, icon, run: run2 }));
      out.push({ group: "View", label: ed.mode === "edit" ? "Switch to Preview" : "Switch to Edit", icon: ed.mode === "edit" ? "play" : "cursor", hint: "P", run: () => ed.setMode(ed.mode === "edit" ? "preview" : "edit") });
      ["phone", "tablet", "desktop"].forEach((d) => out.push({ group: "View", label: "Preview on " + d, icon: d === "desktop" ? "monitor" : d, run: () => ed.setDevice(d) }));
      out.push({ group: "View", label: "Toggle dark editor", icon: "moon", run: () => ed.toggleUiTheme() });
      out.push({ group: "Site", label: "Create a new site from a template", icon: "plus", run: () => ed.startNewSite() });
      return out;
    }, [site, ed.mode]);
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    const res = all.filter((x) => words.every((w) => (x.label + " " + (x.hint || "") + " " + x.group).toLowerCase().includes(w))).slice(0, 40);
    useEffect(() => setI(0), [q]);
    useEffect(() => {
      const el = listRef.current && listRef.current.querySelector(".is-active");
      if (el) el.scrollIntoView({ block: "nearest" });
    }, [i]);
    const run = (x) => {
      onClose();
      setTimeout(x.run, 0);
    };
    let last = null;
    return /* @__PURE__ */ React.createElement(Overlay, { open: true, onClose, size: "cmd", align: "top", noHead: true, className: "cmdk" }, /* @__PURE__ */ React.createElement("div", { className: "cmd-input" }, /* @__PURE__ */ React.createElement(Icon, { name: "search", size: 16 }), /* @__PURE__ */ React.createElement(
      "input",
      {
        autoFocus: true,
        placeholder: "Search pages and actions",
        value: q,
        onChange: (e) => setQ(e.target.value),
        "aria-label": "Search pages and actions",
        onKeyDown: (e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setI((x) => Math.min(res.length - 1, x + 1));
          }
          if (e.key === "ArrowUp") {
            e.preventDefault();
            setI((x) => Math.max(0, x - 1));
          }
          if (e.key === "Enter" && res[i]) {
            e.preventDefault();
            run(res[i]);
          }
        }
      }
    ), /* @__PURE__ */ React.createElement("kbd", { className: "kbd" }, "Esc")), /* @__PURE__ */ React.createElement("div", { className: "cmd-list", ref: listRef }, res.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "muted small cmd-empty" }, "No matches for \u201C", q, "\u201D."), res.map((x, k) => {
      const head = x.group !== last ? /* @__PURE__ */ React.createElement("p", { className: "menu-heading", key: "h" + k }, x.group) : null;
      last = x.group;
      return [head, /* @__PURE__ */ React.createElement("button", { key: k, type: "button", className: cx("cmd-item", k === i && "is-active"), onMouseMove: () => setI(k), onClick: () => run(x) }, /* @__PURE__ */ React.createElement(Icon, { name: x.icon, size: 15 }), /* @__PURE__ */ React.createElement("span", null, x.label), x.hint && /* @__PURE__ */ React.createElement("code", null, x.hint))];
    })));
  }

  // src/start.jsx
  function Logo({ small }) {
    return /* @__PURE__ */ React.createElement("span", { className: cx("logo", small && "is-small"), "aria-label": "selfsite" }, /* @__PURE__ */ React.createElement("span", { className: "logo-mark" }, /* @__PURE__ */ React.createElement(Icon, { name: "logo", size: small ? 18 : 20, sw: 1.8 })), !small && /* @__PURE__ */ React.createElement("span", { className: "logo-word" }, "selfsite"));
  }
  var STOCK = stockMedia();
  var STOCK_BY = Object.fromEntries(STOCK.map((m) => [m.id, m]));
  var SAMPLE = {};
  var sampleSite = (tid2) => SAMPLE[tid2] || (SAMPLE[tid2] = createSite(TEMPLATE_BY[tid2]));
  var STYLES = [{ id: "light", label: "Light" }, { id: "dark", label: "Dark" }, { id: "minimal", label: "Minimal" }, { id: "editorial", label: "Editorial" }, { id: "big-type", label: "Big type" }];
  function Gallery({ onBack, onPreview, onUse, backLabel }) {
    const [ind, setInd] = useState("all");
    const [style, setStyle] = useState(null);
    const list2 = TEMPLATES.filter((t) => (ind === "all" || t.industry === ind) && (!style || (style === "light" ? t.theme.mode === "light" : style === "dark" ? t.theme.mode === "dark" || t.style.includes("dark") : t.style.includes(style))));
    return /* @__PURE__ */ React.createElement("div", { className: "start" }, /* @__PURE__ */ React.createElement("header", { className: "start-bar" }, /* @__PURE__ */ React.createElement(Logo, null), /* @__PURE__ */ React.createElement("span", { className: "start-crumb" }, "New site"), /* @__PURE__ */ React.createElement("span", { className: "grow" }), onBack && /* @__PURE__ */ React.createElement(Btn2, { icon: "arrowLeft", onClick: onBack }, backLabel || "Back to editor")), /* @__PURE__ */ React.createElement("main", { className: "start-main" }, /* @__PURE__ */ React.createElement("div", { className: "start-head" }, /* @__PURE__ */ React.createElement("h1", null, "Choose a template"), /* @__PURE__ */ React.createElement("p", null, "Start from a complete site with real pages. You can change colours and fonts, swap any section, and add pages from the other templates later.")), /* @__PURE__ */ React.createElement("div", { className: "start-filters" }, /* @__PURE__ */ React.createElement("div", { className: "chips", role: "group", "aria-label": "Business type" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: cx("chip", ind === "all" && "is-on"), onClick: () => setInd("all") }, "All"), INDUSTRIES.map((i) => /* @__PURE__ */ React.createElement("button", { key: i, type: "button", className: cx("chip", ind === i && "is-on"), onClick: () => setInd(i) }, i))), /* @__PURE__ */ React.createElement("div", { className: "chips", role: "group", "aria-label": "Style" }, STYLES.map((s) => /* @__PURE__ */ React.createElement("button", { key: s.id, type: "button", className: cx("chip", "chip-quiet", style === s.id && "is-on"), onClick: () => setStyle(style === s.id ? null : s.id) }, s.label)))), list2.length === 0 && /* @__PURE__ */ React.createElement(Empty, { icon: "layout", title: "No templates match" }, "Clear a filter to see more."), /* @__PURE__ */ React.createElement("div", { className: "tpl-grid" }, list2.map((t) => {
      const c2 = t.theme.colors[t.theme.mode];
      const pages = t.pages.filter((p) => p.kind !== "404" && p.kind !== "detail");
      return /* @__PURE__ */ React.createElement("article", { key: t.id, className: "tpl-card" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "tpl-thumb", onClick: () => onPreview(t.id), "aria-label": "Preview " + t.name }, /* @__PURE__ */ React.createElement(Scaled, { width: 1280 }, /* @__PURE__ */ React.createElement(SiteView, { site: sampleSite(t.id), mediaBy: STOCK_BY, loc: { pageId: "home" }, mode: "static", chrome: false })), /* @__PURE__ */ React.createElement("span", { className: "tpl-hover" }, /* @__PURE__ */ React.createElement(Icon, { name: "eye", size: 15 }), "Preview")), /* @__PURE__ */ React.createElement("div", { className: "tpl-meta" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, t.name), /* @__PURE__ */ React.createElement("p", null, t.industry, " \xB7 ", pages.length, " pages")), /* @__PURE__ */ React.createElement("div", { className: "tpl-sw", title: t.theme.fonts.display + " and " + t.theme.fonts.body }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: fontStack(t.theme.fonts.display), background: c2.background, color: c2.foreground } }, "Aa"), /* @__PURE__ */ React.createElement("i", { style: { background: c2.primary } }), /* @__PURE__ */ React.createElement("i", { style: { background: c2.accent } }))), /* @__PURE__ */ React.createElement("p", { className: "tpl-desc" }, t.description), /* @__PURE__ */ React.createElement("div", { className: "tpl-actions" }, /* @__PURE__ */ React.createElement(Btn2, { size: "sm", onClick: () => onPreview(t.id) }, "Preview"), /* @__PURE__ */ React.createElement(Btn2, { size: "sm", variant: "primary", onClick: () => onUse(t.id) }, "Use this template")));
    }))));
  }
  function TemplatePreview({ tid: tid2, onBack, onUse }) {
    const t = TEMPLATE_BY[tid2];
    const mobile = useIsMobile();
    const site = sampleSite(tid2);
    const [loc, setLoc] = useState({ pageId: "home" });
    const [device, setDevice] = useState(mobile ? "phone" : "desktop");
    const scrollRef = useRef(null);
    const pages = t.pages.filter((p) => p.kind !== "404" && p.kind !== "detail");
    useEffect(() => {
      const el = scrollRef.current;
      if (!el) return;
      if (loc.hash) requestAnimationFrame(() => scrollFrameTo(el, `[data-anchor="${loc.hash}"]`));
      else el.scrollTo({ top: 0 });
    }, [loc]);
    const go = (link) => {
      const to = linkToLoc(site, link);
      if (!to) return;
      if (to.external) {
        const r = resolveLink(site, link, STOCK_BY);
        toast(`${LINK_KIND_LABEL[link.kind]}: ${r.text}`, { icon: "external" });
        return;
      }
      setLoc({ ...to, n: Date.now() });
    };
    const cur = loc.pageId;
    const curTop = site.pages.find((p) => p.id === cur);
    const tabValue = curTop && curTop.kind === "detail" ? curTop.parentId : cur;
    return /* @__PURE__ */ React.createElement("div", { className: "tp" }, /* @__PURE__ */ React.createElement("header", { className: "tp-bar" }, /* @__PURE__ */ React.createElement(IconBtn, { icon: "arrowLeft", label: "Back to templates", onClick: onBack }), /* @__PURE__ */ React.createElement("div", { className: "tp-title" }, /* @__PURE__ */ React.createElement("strong", null, t.name), /* @__PURE__ */ React.createElement("span", { className: "muted" }, t.industry)), /* @__PURE__ */ React.createElement("div", { className: "tp-pages" }, mobile ? /* @__PURE__ */ React.createElement(Select, { value: tabValue, onChange: (v) => setLoc({ pageId: v }), options: pages.map((p) => ({ value: p.id, label: p.title })) }) : /* @__PURE__ */ React.createElement(Segmented, { size: "sm", value: tabValue, onChange: (v) => setLoc({ pageId: v }), options: pages.map((p) => ({ value: p.id, label: p.title })), label: "Pages" })), !mobile && /* @__PURE__ */ React.createElement(Segmented, { size: "sm", value: device, onChange: setDevice, label: "Device", options: Object.entries(DEVICES).map(([k, d]) => ({ value: k, icon: d.icon, aria: d.label, title: d.label })) }), /* @__PURE__ */ React.createElement(Btn2, { variant: "primary", onClick: () => onUse(tid2) }, mobile ? "Use" : "Use this template")), mobile && /* @__PURE__ */ React.createElement("div", { className: "tp-devices" }, /* @__PURE__ */ React.createElement(Segmented, { size: "sm", full: true, value: device, onChange: setDevice, options: Object.entries(DEVICES).map(([k, d]) => ({ value: k, icon: d.icon, label: d.label })) })), /* @__PURE__ */ React.createElement("div", { className: "tp-canvas" }, /* @__PURE__ */ React.createElement("div", { className: "tp-url" }, /* @__PURE__ */ React.createElement(Icon, { name: "lock", size: 12 }), /* @__PURE__ */ React.createElement("span", null, slugify(t.business).replace(/-/g, ""), ".selfsite.in"), /* @__PURE__ */ React.createElement("code", null, pagePath(site, curTop))), /* @__PURE__ */ React.createElement(DeviceFrame, { device, fill: mobile && device === "phone", scrollRef }, /* @__PURE__ */ React.createElement(SiteView, { site, mediaBy: STOCK_BY, loc, mode: "preview", onNavigate: go }))));
  }
  var TAKEN = /* @__PURE__ */ new Set(["smile", "smilestudio", "cafe", "kaapi", "dental", "studio", "test", "admin", "www", "app", "mail", "api", "selfsite", "shop", "home"]);
  function CreateSite({ tid: tid2, onClose, onCreate }) {
    const t = TEMPLATE_BY[tid2];
    const [name, setName] = useState("");
    const [addr, setAddr] = useState("");
    const [edited, setEdited] = useState(false);
    const [checking, setChecking] = useState(false);
    const [phase, setPhase] = useState(0);
    const sub = edited ? addr : slugify(name).replace(/-/g, "").slice(0, 30);
    useEffect(() => {
      if (!sub) return;
      setChecking(true);
      const x = setTimeout(() => setChecking(false), 450);
      return () => clearTimeout(x);
    }, [sub]);
    const badChars = sub && !/^[a-z0-9-]+$/.test(sub);
    const taken = TAKEN.has(sub);
    const short = sub && sub.length < 3;
    const ok = name.trim() && sub && !badChars && !taken && !short && !checking;
    const create = () => {
      setPhase(1);
      setTimeout(() => setPhase(2), 600);
      setTimeout(() => setPhase(3), 1200);
      setTimeout(() => onCreate({ tid: tid2, name: name.trim(), subdomain: sub }), 1800);
    };
    const pagesN = t.pages.filter((p) => p.kind !== "404" && p.kind !== "detail").length;
    if (phase) {
      const steps = [`Copying ${pagesN} pages`, `Applying the ${t.name} theme`, `Setting up ${sub}.selfsite.in`];
      return /* @__PURE__ */ React.createElement(Overlay, { open: true, onClose: () => {
      }, size: "sm", title: "Creating your site" }, /* @__PURE__ */ React.createElement("div", { className: "pub-run" }, steps.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: s, className: cx("pub-step", i + 1 < phase ? "is-done" : i + 1 === phase ? "is-active" : "") }, /* @__PURE__ */ React.createElement("span", { className: "pub-dot" }, i + 1 < phase && /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 12, sw: 2.4 })), s))));
    }
    return /* @__PURE__ */ React.createElement(
      Overlay,
      {
        open: true,
        onClose,
        size: "sm",
        title: "Name your site",
        subtitle: `Using the ${t.name} template`,
        footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Btn2, { onClick: onClose }, "Cancel"), /* @__PURE__ */ React.createElement(Btn2, { variant: "primary", disabled: !ok, onClick: create }, "Create site"))
      },
      /* @__PURE__ */ React.createElement("form", { className: "stack", onSubmit: (e) => {
        e.preventDefault();
        if (ok) create();
      } }, /* @__PURE__ */ React.createElement(Field, { label: "Business name", hint: "Shown in your header, footer and search results. You can change it later." }, /* @__PURE__ */ React.createElement(Input, { value: name, onChange: (e) => setName(e.target.value), placeholder: t.business, autoFocus: true })), /* @__PURE__ */ React.createElement(
        Field,
        {
          label: "Site address",
          error: badChars ? "Use lowercase letters, numbers and hyphens only." : taken ? `${sub}.selfsite.in is taken. Try ${sub}blr or ${sub}-${slugify(t.industry).split("-")[0]}.` : short ? "Use at least 3 characters." : null,
          hint: !sub ? "You can connect your own domain later." : null
        },
        /* @__PURE__ */ React.createElement(Input, { value: sub, onChange: (e) => {
          setEdited(true);
          setAddr(e.target.value.toLowerCase().replace(/\s+/g, "-"));
        }, suffix: ".selfsite.in", placeholder: "yourbusiness", inputMode: "url", autoCapitalize: "none", spellCheck: false }),
        sub && !badChars && !taken && !short && /* @__PURE__ */ React.createElement("p", { className: cx("field-msg", checking ? "" : "is-ok") }, checking ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "spin" }), "Checking\u2026") : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icon, { name: "checkCircle", size: 13 }), sub, ".selfsite.in is available"))
      ), /* @__PURE__ */ React.createElement("button", { type: "submit", hidden: true }))
    );
  }

  // src/app.jsx
  function useDoc(initial) {
    const ref = useRef(null);
    if (!ref.current) ref.current = { past: [], present: initial, future: [], key: null, t: 0 };
    const [, force] = useState(0);
    const bump = () => force((x) => x + 1);
    const commit = useCallback((fn, key) => {
      const h = ref.current;
      const draft = structuredClone(h.present);
      const r = fn(draft);
      const next = r && typeof r === "object" && r.pages ? r : draft;
      const now = Date.now();
      if (key && key === h.key && now - h.t < 1500) ref.current = { ...h, present: next, future: [], t: now };
      else ref.current = { past: [...h.past.slice(-99), h.present], present: next, future: [], key, t: now };
      bump();
    }, []);
    const undo = useCallback(() => {
      const h = ref.current;
      if (!h.past.length) return;
      ref.current = { past: h.past.slice(0, -1), present: h.past[h.past.length - 1], future: [h.present, ...h.future], key: null, t: 0 };
      bump();
    }, []);
    const redo = useCallback(() => {
      const h = ref.current;
      if (!h.future.length) return;
      ref.current = { past: [...h.past, h.present], present: h.future[0], future: h.future.slice(1), key: null, t: 0 };
      bump();
    }, []);
    const reset = useCallback((s) => {
      ref.current = { past: [], present: s, future: [], key: null, t: 0 };
      bump();
    }, []);
    return { site: ref.current.present, commit, undo, redo, reset, canUndo: ref.current.past.length > 0, canRedo: ref.current.future.length > 0 };
  }
  var fmtNow = () => {
    const d = /* @__PURE__ */ new Date();
    const m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getMonth()];
    let h = d.getHours();
    const ap = h >= 12 ? "pm" : "am";
    h = h % 12 || 12;
    return `${d.getDate()} ${m} ${d.getFullYear()}, ${h}:${String(d.getMinutes()).padStart(2, "0")} ${ap}`;
  };
  var timeNow = () => {
    const d = /* @__PURE__ */ new Date();
    let h = d.getHours();
    const ap = h >= 12 ? "pm" : "am";
    h = h % 12 || 12;
    return `${h}:${String(d.getMinutes()).padStart(2, "0")} ${ap}`;
  };
  function App() {
    const mobile = useIsMobile();
    const init = useMemo(() => sampleWorkspace(), []);
    const doc = useDoc(init.site);
    const { site, commit } = doc;
    const [media, setMedia] = useState(() => stockMedia());
    const mediaBy = useMemo(() => Object.fromEntries(media.map((m) => [m.id, m])), [media]);
    const [versions, setVersions] = useState(init.versions);
    const [liveV, setLiveV] = useState(init.liveV);
    const [others, setOthers] = useState([]);
    const [screen, setScreen] = useState({ name: "editor" });
    const [hist, setHist] = useState({ stack: [{ pageId: "home" }], i: 0 });
    const loc = hist.stack[hist.i];
    const [mode, setMode] = useState("edit");
    const [device, setDevice] = useState(() => window.matchMedia("(max-width: 959px)").matches ? "phone" : "desktop");
    useEffect(() => {
      setDevice(mobile ? "phone" : "desktop");
    }, [mobile]);
    const [view, setView] = useState("draft");
    const [selection, setSelection] = useState(null);
    const [leftTab, setLeftTab] = useState("pages");
    const [right, setRight] = useState({ type: "section" });
    const [sheet, setSheet] = useState(null);
    const [dialog, setDialog] = useState(null);
    const [linkDlg, setLinkDlg] = useState(null);
    const [mediaDlg, setMediaDlg] = useState(null);
    const [save, setSave] = useState({ state: "saved", at: "Today" });
    const [uiTheme, setUiTheme] = useState("system");
    const [scale, setScale] = useState(1);
    const [redirectedFrom, setRedirectedFrom] = useState(null);
    const scrollRef = useRef(null);
    const firstRender = useRef(true);
    useEffect(() => {
      if (firstRender.current) {
        firstRender.current = false;
        return;
      }
      setSave({ state: "saving" });
      const t = setTimeout(() => setSave({ state: "saved", at: timeNow() }), 650);
      return () => clearTimeout(t);
    }, [site]);
    useEffect(() => {
      const r = document.documentElement;
      if (uiTheme === "system") r.removeAttribute("data-theme");
      else r.setAttribute("data-theme", uiTheme);
    }, [uiTheme]);
    const viewing = view !== "draft" ? versions.find((v) => v.v === view.version) : null;
    const shown = viewing ? viewing.snapshot : site;
    const effMode = viewing ? "preview" : mode;
    const live = versions.find((v) => v.v === liveV);
    const changes = useMemo(() => diffSites(live && live.snapshot, site), [site, live]);
    const issues = useMemo(() => runChecks(site, media), [site, media]);
    const page2 = pageById(shown, loc.pageId) || pageById(shown, shown.homeId);
    useEffect(() => {
      if (!pageById(shown, loc.pageId)) setHist((h) => ({ stack: [...h.stack.slice(0, h.i + 1), { pageId: shown.homeId }], i: h.i + 1 }));
    }, [shown, loc.pageId]);
    useEffect(() => {
      if (selection && !findSection(site, loc.pageId, selection.id)) setSelection(null);
    }, [site]);
    const scrollAfter = (sel2, smooth = true) => requestAnimationFrame(() => requestAnimationFrame(() => scrollFrameTo(scrollRef.current, sel2, smooth)));
    const navigate = useCallback((to, opts = {}) => {
      setHist((h) => {
        const cur = h.stack[h.i];
        if (cur.pageId === to.pageId && cur.itemId === to.itemId && !to.hash && cur.missing === to.missing) return h;
        return { stack: [...h.stack.slice(0, h.i + 1), { pageId: to.pageId, itemId: to.itemId, hash: to.hash, missing: to.missing }], i: h.i + 1 };
      });
      setRedirectedFrom(opts.redirectedFrom || null);
      if (to.pageId !== loc.pageId) {
        setSelection(null);
        if (right.type === "page") setRight({ type: "page", pageId: to.pageId });
      }
      if (to.hash) scrollAfter(`[data-anchor="${to.hash}"]`, to.pageId === loc.pageId);
      else if (to.pageId !== loc.pageId || to.itemId !== loc.itemId) requestAnimationFrame(() => scrollRef.current && scrollRef.current.scrollTo({ top: 0 }));
    }, [loc, right]);
    const back = () => setHist((h) => ({ ...h, i: Math.max(0, h.i - 1) }));
    const fwd = () => setHist((h) => ({ ...h, i: Math.min(h.stack.length - 1, h.i + 1) }));
    const goPath = (path) => {
      const r = route(shown, path);
      navigate({ pageId: r.pageId, itemId: r.itemId, hash: r.hash, missing: r.notFound }, { redirectedFrom: r.redirectedFrom });
      if (r.redirectedFrom) toast(`${r.redirectedFrom} redirects to ${locPath(shown, r)}`, { icon: "corner" });
      if (r.notFound) toast(`Nothing at ${r.notFound}, so visitors see your 404 page`, { icon: "fileX" });
    };
    const go = (link) => {
      if (!link) {
        toast("This button has no link yet", { icon: "alert", tone: "error" });
        return;
      }
      const to = linkToLoc(shown, link);
      if (to.external) {
        const r = resolveLink(shown, link, mediaBy);
        toast(`${LINK_KIND_LABEL[link.kind]}: ${r.text}${link.newTab ? " (new tab)" : ""}. Opens outside your site.`, { icon: "external" });
        return;
      }
      if (to.broken) toast("Broken link: visitors would land on the 404 page", { icon: "unlink", tone: "error" });
      const p = pageById(shown, to.pageId);
      if (viewing && p && p.status === "draft") {
        navigate({ pageId: shown.notFoundId });
        return;
      }
      navigate(to);
    };
    const select = useCallback((sel2, opts = {}) => {
      if (!sel2) {
        setSelection(null);
        return;
      }
      setSelection({ ...sel2, pageId: sel2.pageId || loc.pageId, n: Date.now() });
      if (!mobile) {
        setRight({ type: "section" });
        if (opts.outline) setLeftTab("sections");
      } else if (opts.open) setSheet("fields");
      if (opts.scroll) scrollAfter(`[data-sid="${sel2.id}"]`);
    }, [mobile, loc.pageId]);
    const onCanvasSelect = (sel2) => {
      if (mobile) {
        if (selection && selection.id === sel2.id) {
          setSelection({ ...sel2, n: Date.now() });
          setSheet("fields");
        } else {
          setSelection({ ...sel2, n: Date.now() });
          if (sheet === "fields") setSheet("fields");
          else if (sheet && sheet !== "sections") setSheet(null);
        }
      } else select(sel2);
    };
    const openPageSettings = (pageId) => {
      if (pageId !== loc.pageId) navigate({ pageId });
      if (mobile) setSheet({ type: "page", pageId });
      else setRight({ type: "page", pageId });
    };
    const openTheme = () => {
      if (mobile) setSheet("theme");
      else setRight({ type: "theme" });
    };
    const openNav = () => {
      if (mobile) setSheet("nav");
      else setLeftTab("nav");
    };
    const openDialog = (d) => setDialog(d);
    const sectionAction = (name, args = {}) => {
      const pageId = loc.pageId;
      const f = args.id ? findSection(site, pageId, args.id) : null;
      switch (name) {
        case "insert":
          setDialog({ type: "blocks", mode: "add", index: args.index != null ? args.index : (pageById(site, pageId) || { sections: [] }).sections.length, category: args.category });
          break;
        case "swap":
          setDialog({ type: "blocks", mode: "swap", id: args.id, scope: args.scope });
          break;
        case "up":
        case "down":
          commit((d) => {
            const p = pageById(d, pageId);
            const i = p.sections.findIndex((s) => s.id === args.id);
            const j = name === "up" ? i - 1 : i + 1;
            if (j < 0 || j >= p.sections.length) return;
            [p.sections[i], p.sections[j]] = [p.sections[j], p.sections[i]];
          });
          scrollAfter(`[data-sid="${args.id}"]`);
          break;
        case "duplicate": {
          const nid = uid("s");
          commit((d) => {
            const p = pageById(d, pageId);
            const i = p.sections.findIndex((s) => s.id === args.id);
            const c2 = clone(p.sections[i]);
            c2.id = nid;
            c2.anchor = "";
            p.sections.splice(i + 1, 0, c2);
            assignAnchors(p);
          });
          select({ id: nid, scope: "page", pageId }, { scroll: true });
          toast(`Duplicated \u201C${blockTitle(f.sec)}\u201D`, { icon: "copy" });
          break;
        }
        case "hide":
        case "unhide":
          commit((d) => {
            const p = pageById(d, pageId);
            const s = p.sections.find((x) => x.id === args.id);
            s.hidden = name === "hide";
          });
          if (name === "hide") toast(`Hidden \u201C${blockTitle(f.sec)}\u201D. Visitors won\u2019t see it.`, { icon: "eyeOff", action: { label: "Undo", onClick: doc.undo } });
          break;
        case "delete": {
          let n2 = 0;
          walkLinks(site, (l) => {
            if (l.kind === "section" && l.sectionId === args.id) n2++;
          }, { includeDraft: true });
          commit((d) => {
            const p = pageById(d, pageId);
            p.sections = p.sections.filter((s) => s.id !== args.id);
          });
          setSelection(null);
          if (mobile && sheet === "fields") setSheet(null);
          toast(`Deleted \u201C${blockTitle(f.sec)}\u201D${n2 ? `. ${n2} ${n2 === 1 ? "link pointed" : "links pointed"} here and ${n2 === 1 ? "is" : "are"} now broken` : ""}`, { icon: "trash", tone: n2 ? "error" : void 0, action: { label: "Undo", onClick: doc.undo } });
          break;
        }
        case "detach": {
          const nid = uid("s");
          commit((d) => {
            const p = pageById(d, pageId);
            p[args.scope] = { ...clone(d[args.scope]), id: nid };
          });
          select({ id: nid, scope: args.scope, pageId });
          toast(`\u201C${page2.title}\u201D now has its own ${args.scope}`, { icon: "unlink", action: { label: "Undo", onClick: doc.undo } });
          break;
        }
        case "reattach":
          commit((d) => {
            pageById(d, pageId)[args.scope] = null;
          });
          select({ id: site[args.scope].id, scope: args.scope, pageId });
          toast(`\u201C${page2.title}\u201D uses the shared ${args.scope} again`, { icon: "globe" });
          break;
        default:
      }
    };
    const placeBlock = (entry, dlg) => {
      const pageId = loc.pageId;
      if (dlg.mode === "swap") {
        const r = findSection(site, pageId, dlg.id);
        const { section, kept } = carryOver(r.sec, entry, site);
        commit((d) => {
          const x = findSection(d, pageId, dlg.id);
          if (x.scope === "page") x.page.sections[x.index] = section;
          else if (x.shared) d[x.scope] = section;
          else x.page[x.scope] = section;
        });
        select({ id: section.id, scope: r.scope, pageId });
        toast(`Swapped in ${BLOCKS[entry.type].title} from ${entry.templateName}${kept.length ? ". Kept your " + kept.slice(0, 3).join(", ").toLowerCase() : ""}`, { icon: "swap", action: { label: "Undo", onClick: doc.undo } });
      } else {
        const sec = sectionFromEntry(entry, site);
        commit((d) => {
          const p = pageById(d, pageId);
          p.sections.splice(Math.min(dlg.index != null ? dlg.index : p.sections.length, p.sections.length), 0, sec);
          assignAnchors(p);
        });
        select({ id: sec.id, scope: "page", pageId }, { scroll: true, open: mobile });
        toast(`Added ${BLOCKS[entry.type].title} from ${entry.templateName}`, { icon: "plus" });
      }
    };
    const addToMenu = (d, p) => {
      if (d.nav.autoAdd && !p.parentId && p.kind !== "detail" && p.status === "live") d.nav.header.push({ id: uid("n"), label: p.title, link: { kind: "page", pageId: p.id }, depth: 0 });
    };
    const createPage = (kind, opts = {}) => {
      let id = null, title = "";
      commit((d) => {
        if (kind === "blank") {
          id = uid("p");
          title = "New page";
          const p = { id, title, slug: uniqueSlug(d, "new-page", opts.parentId), parentId: opts.parentId || null, kind: "page", collection: null, status: "live", seo: { title: "", description: "", image: null }, sections: [], header: null, footer: null };
          d.pages.splice(d.pages.findIndex((x) => x.kind === "404"), 0, p);
          addToMenu(d, p);
        } else {
          const p = copyPageFromTemplate(opts.tpl, opts.src, d);
          if (opts.parentId && p.kind === "page") {
            p.parentId = opts.parentId;
            p.slug = uniqueSlug(d, p.slug, p.parentId);
          }
          id = p.id;
          title = p.title;
          d.pages.splice(d.pages.findIndex((x) => x.kind === "404"), 0, p);
          if (p.kind === "collection" && !detailPageFor(d, p.collection)) {
            const det = opts.tpl.pages.find((x) => x.kind === "detail" && x.collection === p.collection);
            if (det) {
              const dp = copyPageFromTemplate(opts.tpl, det, d);
              dp.parentId = p.id;
              d.pages.splice(d.pages.indexOf(p) + 1, 0, dp);
            }
          }
          addToMenu(d, p);
        }
      }, null);
      navigate({ pageId: id });
      if (kind === "blank") {
        openPageSettings(id);
        toast("Added a blank page. Give it a name.", { icon: "file" });
      } else toast(`Added \u201C${title}\u201D from ${opts.tpl.name}, styled with your theme`, { icon: "layout", action: { label: "Undo", onClick: doc.undo } });
    };
    const duplicatePage = (id, parentId) => {
      const src = pageById(site, id);
      if (!src || src.kind !== "page") return;
      const nid = uid("p");
      commit((d) => {
        const p = clone(src);
        p.id = nid;
        p.title = src.title + " (copy)";
        p.parentId = parentId !== void 0 ? parentId : src.id === d.homeId ? null : src.parentId;
        p.slug = uniqueSlug(d, (src.slug || slugify(src.title)) + "-copy", p.parentId);
        p.sections.forEach((s) => {
          s.id = uid("s");
        });
        d.pages.splice(d.pages.findIndex((x) => x.id === src.id) + 1, 0, p);
      }, null);
      navigate({ pageId: nid });
      openPageSettings(nid);
      toast(`Duplicated \u201C${src.title}\u201D`, { icon: "copy", action: { label: "Undo", onClick: doc.undo } });
    };
    const makeHome = (id) => {
      const p = pageById(site, id);
      const before = { ...snapshotPaths(site, id), ...snapshotPaths(site, site.homeId) };
      let added = [];
      commit((d) => {
        const old = pageById(d, d.homeId);
        d.homeId = id;
        const np = pageById(d, id);
        np.parentId = null;
        if (!old.slug) old.slug = uniqueSlug(d, slugify(old.title) || "home", old.parentId, old.id);
        added = applyRedirects(d, before);
      }, null);
      toast(`\u201C${p.title}\u201D is now the home page`, { icon: "home", action: { label: "Undo", onClick: doc.undo } });
      redirectToast({ openDialog }, added);
    };
    const publish = (n2) => {
      const v = versions.length + 1;
      setVersions((vs) => [...vs, { v, at: fmtNow(), by: "Ananya Mehta", note: `Published ${n2} ${n2 === 1 ? "change" : "changes"}`, snapshot: clone(site) }]);
      setLiveV(v);
    };
    const rollback = (vn) => {
      const ver = versions.find((x) => x.v === vn);
      const v = versions.length + 1;
      setVersions((vs) => [...vs, { v, at: fmtNow(), by: "Ananya Mehta", note: `Rolled back to v${vn}`, snapshot: clone(ver.snapshot) }]);
      setLiveV(v);
      commit(() => clone(ver.snapshot), null);
      setView("draft");
      setSelection(null);
      toast(`v${vn} is live again as v${v}. Your draft now matches it.`, { icon: "history", action: { label: "Undo draft change", onClick: doc.undo } });
    };
    const fixIssue = (i) => {
      const l = i.loc;
      setView("draft");
      if (i.kind === "alt") {
        setDialog({ type: "media", focus: i.mediaId });
        return;
      }
      if (l.scope === "nav") {
        openNav();
        toast(`Fix \u201C${l.label.split(" \u203A ")[1]}\u201D in the ${l.menu} menu`, { icon: "menu" });
        return;
      }
      if (l.scope === "pageSettings") {
        navigate({ pageId: l.pageId });
        openPageSettings(l.pageId);
        return;
      }
      if (l.scope === "collection") {
        setDialog({ type: "collections", tab: l.collection, itemId: l.itemId });
        return;
      }
      const pageId = l.pageId || loc.pageId;
      navigate({ pageId });
      setMode("edit");
      setTimeout(() => select({ id: l.sectionId, scope: l.scope, pageId, field: l.fieldKey }, { scroll: true, open: true }), 30);
    };
    const startNewSite = () => {
      setDialog(null);
      setScreen({ name: "gallery" });
    };
    const loadSession = (s) => {
      doc.reset(s.site);
      setMedia(s.media);
      setVersions(s.versions);
      setLiveV(s.liveV);
      setHist({ stack: [{ pageId: s.site.homeId }], i: 0 });
      setSelection(null);
      setView("draft");
      setMode("edit");
      setSheet(null);
      setRight({ type: "section" });
    };
    const current = () => ({ site, media, versions, liveV });
    const createNew = ({ tid: tid2, name, subdomain }) => {
      const s = createSite(TEMPLATE_BY[tid2], { name, subdomain });
      setOthers((o) => [current(), ...o.filter((x) => x.site.id !== site.id)]);
      loadSession({ site: s, media: stockMedia(), versions: [], liveV: 0 });
      setScreen({ name: "editor" });
      setTimeout(() => toast(`${name} is ready. It stays a draft until you publish.`, { icon: "checkCircle", duration: 5e3 }), 100);
    };
    const switchTo = (s) => {
      setOthers((o) => [current(), ...o.filter((x) => x.site.id !== s.site.id)]);
      loadSession(s);
      toast(`Switched to ${s.site.name}`);
    };
    const anyDialog = !!(dialog || linkDlg || mediaDlg);
    useEffect(() => {
      const f = (e) => {
        if (screen.name !== "editor") return;
        const typing = e.target.closest && e.target.closest('input, textarea, select, [contenteditable="true"]');
        const mod = e.metaKey || e.ctrlKey;
        const k = e.key.toLowerCase();
        if (mod && k === "k") {
          e.preventDefault();
          setDialog((d) => d && d.type === "cmdk" ? null : { type: "cmdk" });
          return;
        }
        if (anyDialog) return;
        if (mod && k === "z") {
          e.preventDefault();
          if (e.shiftKey) doc.redo();
          else doc.undo();
          return;
        }
        if (mod && k === "y") {
          e.preventDefault();
          doc.redo();
          return;
        }
        if (typing || mod) return;
        if (k === "p" && !viewing) setMode((m) => m === "edit" ? "preview" : "edit");
        if (k === "escape" && selection) setSelection(null);
        if ((k === "delete" || k === "backspace") && selection && selection.scope === "page" && mode === "edit") sectionAction("delete", { id: selection.id, scope: "page" });
      };
      window.addEventListener("keydown", f);
      return () => window.removeEventListener("keydown", f);
    });
    const ed = {
      site,
      commit,
      undo: doc.undo,
      redo: doc.redo,
      media,
      mediaBy,
      setMedia,
      loc,
      mode,
      setMode,
      device,
      setDevice,
      mobile,
      selection,
      select,
      navigate,
      goPath,
      versions,
      liveV,
      live,
      publish,
      rollback,
      setView,
      fixIssue,
      sectionAction,
      placeBlock,
      createPage,
      duplicatePage,
      makeHome,
      openDialog,
      openPageSettings,
      openTheme,
      openNav,
      startNewSite,
      toggleUiTheme: () => setUiTheme((t) => (t === "system" ? matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : t) === "dark" ? "light" : "dark"),
      pickLink: (value, onSave) => setLinkDlg({ value, onSave }),
      pickMedia: (onPick, opts = {}) => setMediaDlg({ onPick, kind: opts.kind })
    };
    if (screen.name === "gallery" || screen.name === "template") {
      return /* @__PURE__ */ React.createElement(EdCtx.Provider, { value: ed }, screen.name === "gallery" ? /* @__PURE__ */ React.createElement(Gallery, { onBack: () => setScreen({ name: "editor" }), backLabel: `Back to ${site.name}`, onPreview: (tid2) => setScreen({ name: "template", tid: tid2 }), onUse: (tid2) => setScreen({ name: "gallery", create: tid2 }) }) : /* @__PURE__ */ React.createElement(TemplatePreview, { tid: screen.tid, onBack: () => setScreen({ name: "gallery" }), onUse: (tid2) => setScreen({ name: "template", tid: tid2, create: tid2 }) }), screen.create && /* @__PURE__ */ React.createElement(CreateSite, { tid: screen.create, onClose: () => setScreen({ ...screen, create: null }), onCreate: createNew }), /* @__PURE__ */ React.createElement(Toaster, null));
    }
    const canvas = /* @__PURE__ */ React.createElement(
      SiteView,
      {
        site: shown,
        mediaBy,
        loc,
        mode: effMode,
        selection,
        onSelect: onCanvasSelect,
        onNavigate: go,
        onAction: (n2, a) => sectionAction(n2, a),
        chrome: !mobile,
        published: !!viewing
      }
    );
    const viewBanner = viewing && /* @__PURE__ */ React.createElement("div", { className: "view-banner" }, /* @__PURE__ */ React.createElement(Icon, { name: viewing.v === liveV ? "globe" : "history", size: 15 }), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, viewing.v === liveV ? `Live site \xB7 v${viewing.v}` : `Version ${viewing.v} \xB7 ${viewing.at}`), " ", /* @__PURE__ */ React.createElement("span", { className: "muted" }, "Read-only.")), /* @__PURE__ */ React.createElement("span", { className: "grow" }), viewing.v !== liveV && /* @__PURE__ */ React.createElement(Btn2, { size: "sm", onClick: () => setDialog({ type: "publish", tab: "history" }) }, "Roll back\u2026"), /* @__PURE__ */ React.createElement(Btn2, { size: "sm", variant: "primary", onClick: () => setView("draft") }, "Back to draft"));
    const detailColl = page2.kind === "detail" ? shown.collections[page2.collection] : null;
    const dialogs = /* @__PURE__ */ React.createElement(React.Fragment, null, dialog && dialog.type === "blocks" && /* @__PURE__ */ React.createElement(BlockLibrary, { dlg: dialog, onClose: () => setDialog(null) }), dialog && dialog.type === "addPage" && /* @__PURE__ */ React.createElement(AddPage, { dlg: dialog, onClose: () => setDialog(null) }), dialog && dialog.type === "deletePage" && /* @__PURE__ */ React.createElement(DeletePage, { dlg: dialog, onClose: () => setDialog(null) }), dialog && dialog.type === "media" && /* @__PURE__ */ React.createElement(MediaLibrary, { dlg: dialog, onClose: () => setDialog(null) }), dialog && dialog.type === "collections" && /* @__PURE__ */ React.createElement(Collections, { dlg: dialog, onClose: () => setDialog(null) }), dialog && dialog.type === "redirects" && /* @__PURE__ */ React.createElement(Redirects, { onClose: () => setDialog(null) }), dialog && dialog.type === "publish" && /* @__PURE__ */ React.createElement(Publish, { dlg: dialog, onClose: () => setDialog(null) }), dialog && dialog.type === "cmdk" && /* @__PURE__ */ React.createElement(CommandMenu, { onClose: () => setDialog(null) }), mediaDlg && /* @__PURE__ */ React.createElement(MediaLibrary, { dlg: mediaDlg, onClose: () => setMediaDlg(null) }), linkDlg && /* @__PURE__ */ React.createElement(LinkPicker, { value: linkDlg.value, onSave: linkDlg.onSave, onClose: () => setLinkDlg(null) }), /* @__PURE__ */ React.createElement(Toaster, null));
    const saveText = save.state === "saving" ? "Saving\u2026" : "Saved";
    const siteMenu = [
      { heading: "Your sites" },
      { label: site.name, hint: "Current", icon: "check", onClick: () => {
      } },
      ...others.map((o) => ({ label: o.site.name, hint: o.site.subdomain + ".selfsite.in", icon: "globe", onClick: () => switchTo(o) })),
      "-",
      { label: "Create a new site\u2026", icon: "plus", onClick: startNewSite }
    ];
    if (mobile) {
      const selFound = selection && findSection(site, loc.pageId, selection.id);
      const sheetTitle = sheet === "pages" ? "Pages" : sheet === "sections" ? "Sections" : sheet === "theme" ? "Theme" : sheet === "nav" ? "Navigation" : sheet === "more" ? "More" : sheet === "fields" ? selFound ? blockTitle(selFound.sec) : "Section" : sheet && sheet.type === "page" ? "Page settings" : "";
      const tab = (id, icon, label, badge) => /* @__PURE__ */ React.createElement("button", { type: "button", className: cx("m-tab", (sheet === id || id === "pages" && sheet && sheet.type === "page") && "is-on"), onClick: () => setSheet(sheet === id ? null : id) }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 20 }), /* @__PURE__ */ React.createElement("span", null, label), badge ? /* @__PURE__ */ React.createElement("i", { className: "m-tab-badge" }, badge) : null);
      return /* @__PURE__ */ React.createElement(EdCtx.Provider, { value: ed }, /* @__PURE__ */ React.createElement("div", { className: cx("app is-mobile", sheet && "has-sheet") }, /* @__PURE__ */ React.createElement("header", { className: "m-top" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "m-page", onClick: () => setSheet(sheet === "pages" ? null : "pages") }, /* @__PURE__ */ React.createElement("span", { className: "m-page-title" }, page2.title, detailColl && ": " + (detailColl.items.find((i) => i.id === loc.itemId) || detailColl.items[0] || {}).title, /* @__PURE__ */ React.createElement(Icon, { name: "chevDown", size: 14 })), /* @__PURE__ */ React.createElement("span", { className: "m-page-path" }, /* @__PURE__ */ React.createElement("span", { className: cx("save-dot", save.state) }), locPath(shown, loc), " \xB7 ", saveText)), /* @__PURE__ */ React.createElement(Segmented, { size: "sm", value: effMode, onChange: (m) => {
        if (!viewing) setMode(m);
      }, label: "Mode", options: [{ value: "edit", icon: "cursor", aria: "Edit" }, { value: "preview", icon: "play", aria: "Preview" }] }), /* @__PURE__ */ React.createElement(IconBtn, { icon: "undo", label: "Undo", disabled: !doc.canUndo, onClick: doc.undo }), /* @__PURE__ */ React.createElement(Btn2, { size: "sm", variant: "primary", onClick: () => setDialog({ type: "publish" }) }, "Publish", changes.length ? /* @__PURE__ */ React.createElement("span", { className: "pub-count" }, changes.length) : null)), viewBanner, redirectedFrom && !viewing && /* @__PURE__ */ React.createElement("div", { className: "redir-note" }, /* @__PURE__ */ React.createElement(Icon, { name: "corner", size: 13 }), "Redirected from ", /* @__PURE__ */ React.createElement("code", null, redirectedFrom), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setRedirectedFrom(null), "aria-label": "Dismiss" }, /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 12 }))), /* @__PURE__ */ React.createElement("main", { className: "m-canvas" }, /* @__PURE__ */ React.createElement(DeviceFrame, { device, fill: device === "phone", scrollRef, onScale: setScale }, canvas, sheet && /* @__PURE__ */ React.createElement("div", { className: "sheet-spacer" }))), selFound && effMode === "edit" && !sheet && /* @__PURE__ */ React.createElement("div", { className: "m-selbar" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "m-selbar-main", onClick: () => setSheet("fields") }, /* @__PURE__ */ React.createElement("span", { className: "m-selbar-title" }, blockTitle(selFound.sec)), /* @__PURE__ */ React.createElement("span", { className: "m-selbar-sub" }, selFound.scope === "page" ? "Tap to edit" : selFound.shared ? `Shared ${selFound.scope}` : `This page\u2019s ${selFound.scope}`)), /* @__PURE__ */ React.createElement(Btn2, { size: "sm", variant: "primary", icon: "pencil", onClick: () => setSheet("fields") }, "Edit"), selFound.scope === "page" && /* @__PURE__ */ React.createElement(IconBtn, { icon: "arrowUp", label: "Move up", disabled: selFound.index === 0, onClick: () => sectionAction("up", { id: selection.id }) }), selFound.scope === "page" && /* @__PURE__ */ React.createElement(IconBtn, { icon: "arrowDown", label: "Move down", disabled: selFound.index === selFound.page.sections.length - 1, onClick: () => sectionAction("down", { id: selection.id }) }), /* @__PURE__ */ React.createElement(MenuButton, { size: "md", placement: "bottom-end", items: [
        { label: "Swap for another block", icon: "swap", onClick: () => sectionAction("swap", { id: selection.id, scope: selFound.scope }) },
        selFound.scope === "page" && { label: "Duplicate", icon: "copy", onClick: () => sectionAction("duplicate", { id: selection.id }) },
        selFound.scope === "page" && { label: "Hide", icon: "eyeOff", onClick: () => sectionAction("hide", { id: selection.id }) },
        selFound.scope === "page" && { label: "Add section below", icon: "plus", onClick: () => sectionAction("insert", { index: selFound.index + 1 }) },
        selFound.scope !== "page" && (selFound.shared ? { label: "Detach for this page", icon: "unlink", onClick: () => sectionAction("detach", { id: selection.id, scope: selFound.scope }) } : { label: `Use the shared ${selFound.scope}`, icon: "globe", onClick: () => sectionAction("reattach", { id: selection.id, scope: selFound.scope }) }),
        selFound.scope === "page" && "-",
        selFound.scope === "page" && { label: "Delete", icon: "trash", danger: true, onClick: () => sectionAction("delete", { id: selection.id }) }
      ] }), /* @__PURE__ */ React.createElement(IconBtn, { icon: "x", label: "Deselect", onClick: () => setSelection(null) })), /* @__PURE__ */ React.createElement(
        DockSheet,
        {
          open: !!sheet,
          title: sheetTitle,
          onClose: () => setSheet(null),
          tall: sheet === "fields" || sheet && sheet.type === "page" || sheet === "more" || sheet === "nav",
          actions: sheet === "pages" ? /* @__PURE__ */ React.createElement(IconBtn, { icon: "settings", label: "Settings for this page", onClick: () => setSheet({ type: "page", pageId: loc.pageId }) }) : sheet === "fields" && selFound ? /* @__PURE__ */ React.createElement(Btn2, { size: "sm", variant: "ghost", onClick: () => setSheet("sections") }, "Outline") : null
        },
        sheet === "pages" && /* @__PURE__ */ React.createElement(PagesPanel, { onPicked: () => setSheet(null) }),
        sheet === "sections" && /* @__PURE__ */ React.createElement(SectionsPanel, { onPicked: () => setSheet("fields") }),
        sheet === "theme" && /* @__PURE__ */ React.createElement(ThemePanel, null),
        sheet === "nav" && /* @__PURE__ */ React.createElement(NavPanel, null),
        sheet === "fields" && (selection ? /* @__PURE__ */ React.createElement(SectionInspector, { sel: selection, compact: true }) : /* @__PURE__ */ React.createElement(Empty, { icon: "cursor", title: "Nothing selected" }, "Tap a section on the page to edit it.")),
        sheet && sheet.type === "page" && /* @__PURE__ */ React.createElement(PageSettings, { pageId: sheet.pageId }),
        sheet === "more" && /* @__PURE__ */ React.createElement("div", { className: "more" }, /* @__PURE__ */ React.createElement("div", { className: "more-grid" }, [
          ["Navigation", "menu", () => setSheet("nav")],
          ["Page settings", "settings", () => setSheet({ type: "page", pageId: loc.pageId })],
          ["Media", "image", () => setDialog({ type: "media" })],
          ["Collections", "table", () => setDialog({ type: "collections", tab: "services" })],
          ["Redirects", "corner", () => setDialog({ type: "redirects" })],
          ["History", "history", () => setDialog({ type: "publish", tab: "history" })],
          ["Search", "search", () => setDialog({ type: "cmdk" })],
          ["Redo", "redo", doc.redo]
        ].map(([label, icon, fn]) => /* @__PURE__ */ React.createElement("button", { key: label, type: "button", className: "more-item", onClick: fn, disabled: label === "Redo" && !doc.canRedo }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 20 }), /* @__PURE__ */ React.createElement("span", null, label)))), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("span", { className: "field-label" }, "Preview width"), /* @__PURE__ */ React.createElement(Segmented, { full: true, value: device, onChange: setDevice, options: Object.entries(DEVICES).map(([k, d]) => ({ value: k, icon: d.icon, label: d.label })) })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("span", { className: "field-label" }, "Editor appearance"), /* @__PURE__ */ React.createElement(Segmented, { full: true, value: uiTheme, onChange: setUiTheme, options: [{ value: "system", label: "System" }, { value: "light", label: "Light" }, { value: "dark", label: "Dark" }] })), /* @__PURE__ */ React.createElement("div", { className: "more-sites" }, /* @__PURE__ */ React.createElement("p", { className: "field-label" }, "Sites"), /* @__PURE__ */ React.createElement("div", { className: "site-row is-on" }, /* @__PURE__ */ React.createElement(Icon, { name: "globe", size: 15 }), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, site.name), /* @__PURE__ */ React.createElement("small", null, site.subdomain, ".selfsite.in"))), others.map((o) => /* @__PURE__ */ React.createElement("button", { key: o.site.id, type: "button", className: "site-row", onClick: () => switchTo(o) }, /* @__PURE__ */ React.createElement(Icon, { name: "globe", size: 15 }), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, o.site.name), /* @__PURE__ */ React.createElement("small", null, o.site.subdomain, ".selfsite.in")))), /* @__PURE__ */ React.createElement(Btn2, { icon: "plus", onClick: startNewSite }, "Create a new site")))
      ), /* @__PURE__ */ React.createElement("nav", { className: "m-tabs", "aria-label": "Editor" }, tab("pages", "file", "Pages"), tab("sections", "layers", "Sections"), tab("theme", "palette", "Theme"), tab("more", "dots", "More", issues.filter((i) => i.level === "error").length || null))), dialogs);
    }
    const preset = PRESET_BY[site.theme.presetId];
    const usedMb = media.reduce((a, m) => a + m.size, 0);
    const rightPanel = right.type === "theme" ? /* @__PURE__ */ React.createElement(ThemePanel, { onClose: () => setRight({ type: "section" }) }) : right.type === "page" ? /* @__PURE__ */ React.createElement(PageSettings, { pageId: right.pageId, onClose: () => setRight({ type: "section" }) }) : selection && !viewing ? /* @__PURE__ */ React.createElement(SectionInspector, { sel: selection }) : /* @__PURE__ */ React.createElement("div", { className: "insp-idle" }, /* @__PURE__ */ React.createElement(Empty, { icon: effMode === "preview" ? "play" : "cursor", title: viewing ? "Viewing a published version" : effMode === "preview" ? "Previewing your draft" : "Select a section" }, viewing ? "Go back to the draft to make changes." : effMode === "preview" ? "Links and menus work as they will on your live site. Switch to Edit, or press P, to make changes." : "Click anything on the page to edit its text, images and links."), !viewing && /* @__PURE__ */ React.createElement("div", { className: "idle-actions" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "tool-row", onClick: () => openPageSettings(loc.pageId) }, /* @__PURE__ */ React.createElement(Icon, { name: "settings", size: 15 }), /* @__PURE__ */ React.createElement("span", null, "Settings for \u201C", page2.title, "\u201D"), /* @__PURE__ */ React.createElement(Icon, { name: "chevRight", size: 14 })), /* @__PURE__ */ React.createElement("button", { type: "button", className: "tool-row", onClick: openTheme }, /* @__PURE__ */ React.createElement(Icon, { name: "palette", size: 15 }), /* @__PURE__ */ React.createElement("span", null, "Theme"), /* @__PURE__ */ React.createElement(Icon, { name: "chevRight", size: 14 })), /* @__PURE__ */ React.createElement("button", { type: "button", className: "tool-row", onClick: () => sectionAction("insert", {}) }, /* @__PURE__ */ React.createElement(Icon, { name: "plus", size: 15 }), /* @__PURE__ */ React.createElement("span", null, "Add a section"), /* @__PURE__ */ React.createElement(Icon, { name: "chevRight", size: 14 }))), /* @__PURE__ */ React.createElement("div", { className: "idle-tips" }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(Kbd, null, "\u2318"), /* @__PURE__ */ React.createElement(Kbd, null, "K"), " Jump to a page or action"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(Kbd, null, "P"), " Switch between Edit and Preview"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(Kbd, null, "\u2318"), /* @__PURE__ */ React.createElement(Kbd, null, "Z"), " Undo")));
    return /* @__PURE__ */ React.createElement(EdCtx.Provider, { value: ed }, /* @__PURE__ */ React.createElement("div", { className: "app is-desktop" }, /* @__PURE__ */ React.createElement("header", { className: "topbar" }, /* @__PURE__ */ React.createElement("div", { className: "tb-left" }, /* @__PURE__ */ React.createElement(Logo, { small: true }), /* @__PURE__ */ React.createElement(MenuButton, { items: siteMenu, width: 260, placement: "bottom-start" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "site-switch" }, /* @__PURE__ */ React.createElement("span", { className: "site-name" }, site.name), /* @__PURE__ */ React.createElement(Icon, { name: "chevUpDown", size: 14 }))), /* @__PURE__ */ React.createElement("span", { className: cx("save", save.state), title: save.state === "saved" ? `All changes saved to your draft (${save.at})` : "Saving" }, save.state === "saving" ? /* @__PURE__ */ React.createElement("span", { className: "spin" }) : /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 13 }), saveText)), /* @__PURE__ */ React.createElement("div", { className: "tb-center" }, /* @__PURE__ */ React.createElement(Segmented, { value: effMode, onChange: (m) => {
      if (!viewing) setMode(m);
    }, label: "Mode", options: [{ value: "edit", icon: "cursor", label: "Edit", title: "Edit (P)" }, { value: "preview", icon: "play", label: "Preview", title: "Preview (P)" }] })), /* @__PURE__ */ React.createElement("div", { className: "tb-right" }, /* @__PURE__ */ React.createElement(IconBtn, { icon: "undo", label: "Undo (\u2318Z)", disabled: !doc.canUndo, onClick: doc.undo }), /* @__PURE__ */ React.createElement(IconBtn, { icon: "redo", label: "Redo (\u21E7\u2318Z)", disabled: !doc.canRedo, onClick: doc.redo }), /* @__PURE__ */ React.createElement("button", { type: "button", className: "cmdk-btn", onClick: () => setDialog({ type: "cmdk" }) }, /* @__PURE__ */ React.createElement(Icon, { name: "search", size: 14 }), /* @__PURE__ */ React.createElement("span", null, "Search"), /* @__PURE__ */ React.createElement(Kbd, null, "\u2318K")), /* @__PURE__ */ React.createElement(IconBtn, { icon: uiTheme === "dark" || uiTheme === "system" && matchMedia("(prefers-color-scheme: dark)").matches ? "sun" : "moon", label: "Editor light or dark", onClick: ed.toggleUiTheme }), /* @__PURE__ */ React.createElement(Btn2, { variant: "primary", icon: "cloud", onClick: () => setDialog({ type: "publish" }) }, "Publish", changes.length ? /* @__PURE__ */ React.createElement("span", { className: "pub-count" }, changes.length) : null))), /* @__PURE__ */ React.createElement("div", { className: "workspace" }, /* @__PURE__ */ React.createElement("aside", { className: "left" }, /* @__PURE__ */ React.createElement("div", { className: "left-tabs" }, /* @__PURE__ */ React.createElement(Segmented, { full: true, size: "sm", value: leftTab, onChange: setLeftTab, label: "Sidebar", options: [{ value: "pages", label: "Pages" }, { value: "sections", label: "Sections" }, { value: "nav", label: "Navigation" }] })), /* @__PURE__ */ React.createElement("div", { className: "left-body" }, leftTab === "pages" && /* @__PURE__ */ React.createElement(PagesPanel, null), leftTab === "sections" && /* @__PURE__ */ React.createElement(SectionsPanel, null), leftTab === "nav" && /* @__PURE__ */ React.createElement(NavPanel, null)), /* @__PURE__ */ React.createElement("div", { className: "left-foot" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: cx("tool-row", right.type === "theme" && "is-on"), onClick: openTheme }, /* @__PURE__ */ React.createElement(Icon, { name: "palette", size: 15 }), /* @__PURE__ */ React.createElement("span", null, "Theme"), /* @__PURE__ */ React.createElement("span", { className: "muted small" }, preset ? preset.name : "Custom")), /* @__PURE__ */ React.createElement("button", { type: "button", className: "tool-row", onClick: () => setDialog({ type: "media" }) }, /* @__PURE__ */ React.createElement(Icon, { name: "image", size: 15 }), /* @__PURE__ */ React.createElement("span", null, "Media"), /* @__PURE__ */ React.createElement("span", { className: "muted small" }, Math.round(usedMb), " / 500 MB")), /* @__PURE__ */ React.createElement("button", { type: "button", className: "tool-row", onClick: () => setDialog({ type: "collections", tab: "services" }) }, /* @__PURE__ */ React.createElement(Icon, { name: "table", size: 15 }), /* @__PURE__ */ React.createElement("span", null, "Collections")), /* @__PURE__ */ React.createElement("button", { type: "button", className: "tool-row", onClick: () => setDialog({ type: "redirects" }) }, /* @__PURE__ */ React.createElement(Icon, { name: "corner", size: 15 }), /* @__PURE__ */ React.createElement("span", null, "Redirects"), /* @__PURE__ */ React.createElement("span", { className: "muted small" }, site.redirects.length)))), /* @__PURE__ */ React.createElement("section", { className: "center" }, /* @__PURE__ */ React.createElement("div", { className: "canvas-bar" }, /* @__PURE__ */ React.createElement("div", { className: "cb-nav" }, /* @__PURE__ */ React.createElement(IconBtn, { size: "sm", icon: "arrowLeft", label: "Back", disabled: hist.i === 0, onClick: back }), /* @__PURE__ */ React.createElement(IconBtn, { size: "sm", icon: "arrowRight", label: "Forward", disabled: hist.i >= hist.stack.length - 1, onClick: fwd })), /* @__PURE__ */ React.createElement(UrlBar, { site: shown, loc, onGo: goPath, viewing, liveV }), detailColl && /* @__PURE__ */ React.createElement(Select, { className: "entry-pick", value: (detailColl.items.find((i) => i.id === loc.itemId) || detailColl.items[0] || {}).id, onChange: (v) => navigate({ pageId: page2.id, itemId: v }), options: detailColl.items.map((i) => ({ value: i.id, label: i.title })), "aria-label": "Entry shown" }), redirectedFrom && /* @__PURE__ */ React.createElement("span", { className: "redir-chip", title: "Redirect" }, /* @__PURE__ */ React.createElement(Icon, { name: "corner", size: 12 }), "from ", /* @__PURE__ */ React.createElement("code", null, redirectedFrom)), /* @__PURE__ */ React.createElement("span", { className: "grow" }), /* @__PURE__ */ React.createElement(Segmented, { size: "sm", value: device, onChange: setDevice, label: "Preview width", options: Object.entries(DEVICES).map(([k, d]) => ({ value: k, icon: d.icon, aria: d.label, title: `${d.label} \xB7 ${d.w}px` })) }), /* @__PURE__ */ React.createElement("span", { className: "zoom", title: "Zoom to fit" }, Math.round(scale * 100), "%")), viewBanner, /* @__PURE__ */ React.createElement(DeviceFrame, { device, scrollRef, onScale: setScale, className: effMode === "preview" ? "is-preview" : "" }, canvas)), /* @__PURE__ */ React.createElement("aside", { className: "right" }, rightPanel))), dialogs);
  }
  function UrlBar({ site, loc, onGo, viewing, liveV }) {
    const path = locPath(site, loc);
    const [text, setText] = useState(path);
    const [focus, setFocus] = useState(false);
    useEffect(() => {
      if (!focus) setText(path);
    }, [path, focus]);
    const page2 = pageById(site, loc.pageId);
    const status = viewing ? viewing.v === liveV ? "Live" : "v" + viewing.v : page2 && page2.status === "draft" ? "Draft page" : page2 && page2.status === "hidden" ? "Hidden page" : "Draft";
    return /* @__PURE__ */ React.createElement("form", { className: cx("urlbar", focus && "is-focus"), onSubmit: (e) => {
      e.preventDefault();
      onGo(text);
      e.target.querySelector("input").blur();
    } }, /* @__PURE__ */ React.createElement(Icon, { name: "lock", size: 12 }), /* @__PURE__ */ React.createElement("span", { className: "url-host" }, site.subdomain, ".selfsite.in"), /* @__PURE__ */ React.createElement("input", { value: text, onChange: (e) => setText(e.target.value), onFocus: (e) => {
      setFocus(true);
      e.target.select();
    }, onBlur: () => setFocus(false), "aria-label": "Page address", spellCheck: false }), /* @__PURE__ */ React.createElement("span", { className: cx("url-status", viewing ? "is-live" : page2 && page2.status !== "live" ? "is-warn" : ""), title: viewing ? "Published version" : "You are looking at your unpublished draft" }, status));
  }

  // src/main.jsx
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();

