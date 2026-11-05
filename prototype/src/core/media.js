import { artSrc } from './art.js';
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


export { DEFS, FILES, stockMedia, mediaSrc };
