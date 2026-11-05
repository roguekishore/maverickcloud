// Theme presets and tokens from artifact 3, extended for 1's Site design.
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
  var themeFromPreset = (id) => JSON.parse(JSON.stringify({ button: "solid", textSize: "m", ...PRESET_BY[id], presetId: id }));
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
      "--s-radius-btn": theme.button === "pill" || theme.radius >= 20 ? "999px" : theme.radius + "px",
      "--s-radius-lg": Math.round(theme.radius * 1.4) + "px",
      "--s-width": theme.width + "px",
      "--s-space": (typeof theme.spacing === "number" ? theme.spacing : SPACING[theme.spacing] || 88) + "px",
      "--s-base": ({ s: 15, m: 16, l: 17 })[theme.textSize || "m"] + "px",
      colorScheme: mode
    };
  }

export { FONTS, FONT_BY, fontStack, COLOR_KEYS, RADII, WIDTHS, SPACING, PRESETS, PRESET_BY, themeFromPreset, lum, onColor, isHex, themeVars };
