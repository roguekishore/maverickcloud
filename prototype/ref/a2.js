(() => {
  var { useId: Ps } = React;
  function $t(e) {
    let t = e % 2147483647;
    return (
      t <= 0 && (t += 2147483646),
      () => (t = (t * 16807) % 2147483647) / 2147483647
    );
  }
  var gn = ["#8D5A3B", "#B07850", "#6E4329", "#C08B62", "#9A6444", "#7A4B2E"],
    yn = ["#1B1210", "#2A1A14", "#120D0B", "#3A2A20", "#1E1714", "#4A3326"],
    bn = [
      "#2F4858",
      "#8E1C47",
      "#C9A34E",
      "#3E6B57",
      "#5B4B8A",
      "#B4441C",
      "#1E5A7A",
      "#6B3A23",
    ],
    vn = ["#E8DED2", "#DCE6E8", "#EADBD3", "#E3E6DA", "#E6E0EE", "#F0E4D2"];
  function Ht({ x: e, y: t, s: a = 1, tone: s = 0 }) {
    let n = gn[s % gn.length],
      i = yn[(s + 2) % yn.length],
      r = bn[s % bn.length],
      o = s % 2 === 1;
    return React.createElement(
      "g",
      { transform: `translate(${e} ${t}) scale(${a})` },
      o &&
        React.createElement("path", {
          d: "M-46 -40 Q-50 40 -36 70 L36 70 Q50 40 46 -40 Z",
          fill: i,
        }),
      React.createElement("path", {
        d: "M-78 140 Q-74 70 -30 60 L30 60 Q74 70 78 140 Z",
        fill: r,
      }),
      React.createElement("rect", {
        x: "-14",
        y: "30",
        width: "28",
        height: "36",
        rx: "10",
        fill: n,
      }),
      React.createElement("ellipse", {
        cx: "0",
        cy: "0",
        rx: "38",
        ry: "44",
        fill: n,
      }),
      React.createElement("path", {
        d: o
          ? "M-40 -6 Q-42 -52 0 -50 Q42 -52 40 -6 Q30 -34 0 -34 Q-28 -34 -40 -6 Z"
          : "M-38 -10 Q-40 -50 0 -50 Q40 -50 38 -10 Q34 -30 18 -32 Q-10 -24 -36 -30 Z",
        fill: i,
      }),
      React.createElement("ellipse", {
        cx: "-13",
        cy: "4",
        rx: "3.2",
        ry: "3.6",
        fill: "#1A1210",
      }),
      React.createElement("ellipse", {
        cx: "13",
        cy: "4",
        rx: "3.2",
        ry: "3.6",
        fill: "#1A1210",
      }),
      React.createElement("path", {
        d: "M-10 22 Q0 30 10 22",
        stroke: "#4A2A1E",
        strokeWidth: "3",
        fill: "none",
        strokeLinecap: "round",
      }),
    );
  }
  var Ea = {
      cafe: (e) =>
        React.createElement(
          React.Fragment,
          null,
          React.createElement(
            "defs",
            null,
            React.createElement(
              "linearGradient",
              { id: e + "w", x1: "0", y1: "0", x2: "0", y2: "1" },
              React.createElement("stop", {
                offset: "0",
                stopColor: "#FFF4E2",
              }),
              React.createElement("stop", {
                offset: "1",
                stopColor: "#F2CFA0",
              }),
            ),
            React.createElement(
              "radialGradient",
              { id: e + "g", cx: "0.5", cy: "0.5", r: "0.5" },
              React.createElement("stop", {
                offset: "0",
                stopColor: "#FFD58A",
                stopOpacity: "0.8",
              }),
              React.createElement("stop", {
                offset: "1",
                stopColor: "#FFD58A",
                stopOpacity: "0",
              }),
            ),
          ),
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: "#C9A27E",
          }),
          React.createElement("rect", {
            width: "400",
            height: "214",
            fill: "#D9B793",
          }),
          React.createElement("rect", {
            x: "238",
            y: "34",
            width: "124",
            height: "156",
            fill: `url(#${e}w)`,
          }),
          React.createElement("path", {
            d: "M238 112h124M300 34v156",
            stroke: "#6B4630",
            strokeWidth: "5",
          }),
          React.createElement("rect", {
            x: "234",
            y: "30",
            width: "132",
            height: "164",
            fill: "none",
            stroke: "#6B4630",
            strokeWidth: "6",
          }),
          React.createElement("polygon", {
            points: "238,190 362,190 330,300 180,300",
            fill: "#FFF1D6",
            opacity: "0.28",
          }),
          React.createElement("rect", {
            y: "214",
            width: "400",
            height: "86",
            fill: "#7B4D31",
          }),
          React.createElement("rect", {
            y: "214",
            width: "400",
            height: "4",
            fill: "#5E3922",
          }),
          React.createElement("rect", {
            x: "24",
            y: "64",
            width: "150",
            height: "6",
            fill: "#6B4630",
          }),
          [34, 62, 96, 128].map((t, a) =>
            React.createElement("rect", {
              key: a,
              x: t,
              y: a % 2 ? 40 : 34,
              width: "22",
              height: a % 2 ? 24 : 30,
              rx: "3",
              fill: ["#E9E1D3", "#B8703F", "#3F5A4A", "#F2E6D2"][a],
            }),
          ),
          [90, 168].map((t) =>
            React.createElement(
              "g",
              { key: t },
              React.createElement("line", {
                x1: t,
                y1: "0",
                x2: t,
                y2: "62",
                stroke: "#3A2418",
                strokeWidth: "2",
              }),
              React.createElement("circle", {
                cx: t,
                cy: "86",
                r: "48",
                fill: `url(#${e}g)`,
              }),
              React.createElement("path", {
                d: `M${t - 20} 80 Q${t} 52 ${t + 20} 80 Z`,
                fill: "#2F4A3D",
              }),
              React.createElement("ellipse", {
                cx: t,
                cy: "81",
                rx: "8",
                ry: "3",
                fill: "#FFE6B0",
              }),
            ),
          ),
          React.createElement("rect", {
            x: "40",
            y: "186",
            width: "176",
            height: "9",
            rx: "2",
            fill: "#5A3420",
          }),
          React.createElement("rect", {
            x: "56",
            y: "195",
            width: "7",
            height: "60",
            fill: "#4A2A19",
          }),
          React.createElement("rect", {
            x: "194",
            y: "195",
            width: "7",
            height: "60",
            fill: "#4A2A19",
          }),
          React.createElement("rect", {
            x: "78",
            y: "170",
            width: "18",
            height: "16",
            rx: "3",
            fill: "#F6F0E6",
          }),
          React.createElement("rect", {
            x: "150",
            y: "166",
            width: "14",
            height: "20",
            rx: "2",
            fill: "#E8DCC8",
          }),
          React.createElement("circle", {
            cx: "122",
            cy: "181",
            r: "7",
            fill: "#F6F0E6",
          }),
          React.createElement("rect", {
            x: "20",
            y: "180",
            width: "18",
            height: "34",
            rx: "4",
            fill: "#B36B3C",
          }),
          [
            [-14, 0, -40],
            [10, 0, 30],
            [0, -10, -5],
            [-6, 6, 60],
            [8, 4, -70],
          ].map(([t, a, s], n) =>
            React.createElement("ellipse", {
              key: n,
              cx: 29 + t,
              cy: 160 + a,
              rx: "7",
              ry: "22",
              fill: n % 2 ? "#3F6B4E" : "#2F5640",
              transform: `rotate(${s} ${29 + t} ${172 + a})`,
            }),
          ),
        ),
      coffee: (e) => {
        let t = $t(11);
        return React.createElement(
          React.Fragment,
          null,
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: "#6E4A33",
          }),
          Array.from({ length: 9 }).map((a, s) =>
            React.createElement("rect", {
              key: s,
              x: "0",
              y: s * 34 + 6,
              width: "400",
              height: "2",
              fill: "#000",
              opacity: "0.07",
            }),
          ),
          Array.from({ length: 14 }).map((a, s) => {
            let n = t() * 400,
              i = t() * 300;
            return Math.hypot(n - 200, i - 150) < 110
              ? null
              : React.createElement(
                  "g",
                  { key: s, transform: `rotate(${t() * 180} ${n} ${i})` },
                  React.createElement("ellipse", {
                    cx: n,
                    cy: i,
                    rx: "9",
                    ry: "6",
                    fill: "#2E1A10",
                  }),
                  React.createElement("path", {
                    d: `M${n - 7} ${i} Q${n} ${i - 2} ${n + 7} ${i}`,
                    stroke: "#5A3622",
                    strokeWidth: "1.4",
                    fill: "none",
                  }),
                );
          }),
          React.createElement("circle", {
            cx: "200",
            cy: "154",
            r: "92",
            fill: "#000",
            opacity: "0.18",
          }),
          React.createElement("circle", {
            cx: "200",
            cy: "150",
            r: "88",
            fill: "#F3EDE4",
          }),
          React.createElement("circle", {
            cx: "200",
            cy: "150",
            r: "70",
            fill: "none",
            stroke: "#E1D7C9",
            strokeWidth: "2",
          }),
          React.createElement("rect", {
            x: "262",
            y: "138",
            width: "54",
            height: "22",
            rx: "11",
            fill: "#FFFFFF",
          }),
          React.createElement("circle", {
            cx: "200",
            cy: "150",
            r: "58",
            fill: "#FFFFFF",
          }),
          React.createElement("circle", {
            cx: "200",
            cy: "150",
            r: "47",
            fill: "#8B5434",
          }),
          React.createElement("circle", {
            cx: "200",
            cy: "150",
            r: "40",
            fill: "#6B3B21",
          }),
          React.createElement("path", {
            d: "M200 176 C178 158 168 146 180 134 C188 126 198 130 200 140 C202 130 212 126 220 134 C232 146 222 158 200 176 Z",
            fill: "#F1DDC2",
          }),
          React.createElement("path", {
            d: "M200 166 C188 156 184 148 190 142 M200 166 C212 156 216 148 210 142",
            stroke: "#8B5434",
            strokeWidth: "2",
            fill: "none",
          }),
        );
      },
      filter: (e) =>
        React.createElement(
          React.Fragment,
          null,
          React.createElement(
            "defs",
            null,
            React.createElement(
              "linearGradient",
              { id: e + "s", x1: "0", x2: "1" },
              React.createElement("stop", {
                offset: "0",
                stopColor: "#9EA3A6",
              }),
              React.createElement("stop", {
                offset: "0.35",
                stopColor: "#F1F3F4",
              }),
              React.createElement("stop", {
                offset: "0.6",
                stopColor: "#B9BEC1",
              }),
              React.createElement("stop", {
                offset: "1",
                stopColor: "#7E8487",
              }),
            ),
          ),
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: "#2F2420",
          }),
          React.createElement("ellipse", {
            cx: "200",
            cy: "300",
            rx: "260",
            ry: "90",
            fill: "#3E6B3F",
          }),
          React.createElement("path", {
            d: "M-20 300 Q120 190 420 250 L420 300 Z",
            fill: "#4E8A4C",
          }),
          React.createElement("path", {
            d: "M40 300 Q200 230 380 270",
            stroke: "#386A37",
            strokeWidth: "3",
            fill: "none",
          }),
          React.createElement("path", {
            d: "M118 228 L282 228 L262 270 Q200 284 138 270 Z",
            fill: `url(#${e}s)`,
          }),
          React.createElement("ellipse", {
            cx: "200",
            cy: "228",
            rx: "82",
            ry: "12",
            fill: "#D7DBDD",
          }),
          React.createElement("ellipse", {
            cx: "200",
            cy: "228",
            rx: "70",
            ry: "8",
            fill: "#9C6A45",
          }),
          React.createElement("path", {
            d: "M162 98 L238 98 L230 222 Q200 230 170 222 Z",
            fill: `url(#${e}s)`,
          }),
          React.createElement("ellipse", {
            cx: "200",
            cy: "98",
            rx: "38",
            ry: "7",
            fill: "#E6E9EA",
          }),
          React.createElement("ellipse", {
            cx: "200",
            cy: "99",
            rx: "31",
            ry: "5",
            fill: "#C9935F",
          }),
          React.createElement("path", {
            d: "M186 84 Q178 66 190 50 Q200 36 192 18",
            stroke: "#F2E9DE",
            strokeWidth: "3",
            fill: "none",
            opacity: "0.5",
            strokeLinecap: "round",
          }),
          React.createElement("path", {
            d: "M212 84 Q222 66 210 50 Q202 38 210 22",
            stroke: "#F2E9DE",
            strokeWidth: "3",
            fill: "none",
            opacity: "0.35",
            strokeLinecap: "round",
          }),
          React.createElement("circle", {
            cx: "72",
            cy: "246",
            r: "10",
            fill: "#E8C547",
          }),
          React.createElement("circle", {
            cx: "330",
            cy: "252",
            r: "8",
            fill: "#E36F2A",
          }),
        ),
      thali: (e) =>
        React.createElement(
          React.Fragment,
          null,
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: "#5B3A29",
          }),
          React.createElement("path", {
            d: "M0 40 L400 0 L400 300 L0 300 Z",
            fill: "#3F7A3E",
          }),
          React.createElement("path", {
            d: "M0 40 L400 0",
            stroke: "#2F612F",
            strokeWidth: "3",
          }),
          [60, 120, 180, 240, 300, 360].map((t) =>
            React.createElement("path", {
              key: t,
              d: `M${t} ${36 - t / 10} L${t - 40} 300`,
              stroke: "#356D34",
              strokeWidth: "1.5",
              opacity: "0.6",
            }),
          ),
          React.createElement("circle", {
            cx: "200",
            cy: "160",
            r: "128",
            fill: "#C9CDCF",
          }),
          React.createElement("circle", {
            cx: "200",
            cy: "160",
            r: "118",
            fill: "#DADDDF",
          }),
          [
            [132, 104, 30, "#E2A52A"],
            [200, 84, 30, "#B23A1E"],
            [268, 104, 30, "#F4F1E6"],
            [292, 168, 26, "#4E7F2E"],
          ].map(([t, a, s, n], i) =>
            React.createElement(
              "g",
              { key: i },
              React.createElement("circle", {
                cx: t,
                cy: a,
                r: s + 5,
                fill: "#B9BDBF",
              }),
              React.createElement("circle", { cx: t, cy: a, r: s, fill: n }),
              React.createElement("circle", {
                cx: t - s / 3,
                cy: a - s / 3,
                r: s / 5,
                fill: "#fff",
                opacity: "0.25",
              }),
            ),
          ),
          React.createElement("ellipse", {
            cx: "190",
            cy: "196",
            rx: "58",
            ry: "40",
            fill: "#FBF8EF",
          }),
          Array.from({ length: 24 }).map((t, a) =>
            React.createElement("ellipse", {
              key: a,
              cx: 150 + (a % 8) * 11,
              cy: 180 + Math.floor(a / 8) * 13,
              rx: "4",
              ry: "1.6",
              fill: "#EAE3D0",
            }),
          ),
          React.createElement("circle", {
            cx: "122",
            cy: "200",
            r: "34",
            fill: "#D9A869",
          }),
          React.createElement("circle", {
            cx: "116",
            cy: "194",
            r: "4",
            fill: "#A9722F",
          }),
          React.createElement("circle", {
            cx: "130",
            cy: "208",
            r: "3",
            fill: "#A9722F",
          }),
          React.createElement("path", {
            d: "M258 222 l30 -6 l-4 18 z",
            fill: "#D94E2B",
          }),
        ),
      facade: (e) => {
        let t = $t(7);
        return React.createElement(
          React.Fragment,
          null,
          React.createElement(
            "defs",
            null,
            React.createElement(
              "linearGradient",
              { id: e + "k", x1: "0", y1: "0", x2: "0", y2: "1" },
              React.createElement("stop", {
                offset: "0",
                stopColor: "#C9D6DC",
              }),
              React.createElement("stop", {
                offset: "1",
                stopColor: "#EDE8DF",
              }),
            ),
          ),
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: `url(#${e}k)`,
          }),
          React.createElement("rect", {
            x: "60",
            y: "40",
            width: "280",
            height: "240",
            fill: "#E7E1D6",
          }),
          Array.from({ length: 6 }).map((a, s) =>
            Array.from({ length: 7 }).map((n, i) =>
              React.createElement("rect", {
                key: s + "-" + i,
                x: 74 + i * 38,
                y: 54 + s * 36,
                width: "26",
                height: "24",
                fill: t() > 0.75 ? "#C69C62" : "#34393B",
                opacity: t() > 0.75 ? 0.9 : 0.85,
              }),
            ),
          ),
          Array.from({ length: 8 }).map((a, s) =>
            React.createElement("rect", {
              key: s,
              x: 66 + s * 38,
              y: "40",
              width: "5",
              height: "240",
              fill: "#D2CABD",
            }),
          ),
          React.createElement("polygon", {
            points: "340,40 400,10 400,300 340,280",
            fill: "#B7AE9F",
          }),
          React.createElement("polygon", {
            points: "60,40 340,40 170,280 60,280",
            fill: "#000",
            opacity: "0.10",
          }),
          React.createElement("rect", {
            y: "276",
            width: "400",
            height: "24",
            fill: "#A09888",
          }),
          React.createElement("rect", {
            x: "170",
            y: "236",
            width: "60",
            height: "40",
            fill: "#202425",
          }),
        );
      },
      arches: (e) =>
        React.createElement(
          React.Fragment,
          null,
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: "#D8B98F",
          }),
          React.createElement("rect", {
            y: "232",
            width: "400",
            height: "68",
            fill: "#C49E70",
          }),
          [0, 1, 2, 3].map((t) => {
            let a = 30 + t * 92;
            return React.createElement(
              "g",
              { key: t },
              React.createElement("path", {
                d: `M${a} 232 L${a} 110 A34 34 0 0 1 ${a + 68} 110 L${a + 68} 232 Z`,
                fill: "#8C5E3A",
              }),
              React.createElement("path", {
                d: `M${a + 8} 232 L${a + 8} 112 A26 26 0 0 1 ${a + 60} 112 L${a + 60} 232 Z`,
                fill: "#F1D9B5",
              }),
              React.createElement("polygon", {
                points: `${a + 8},232 ${a + 60},232 ${a + 96},300 ${a + 30},300`,
                fill: "#F1D9B5",
                opacity: "0.55",
              }),
            );
          }),
          React.createElement("rect", {
            y: "40",
            width: "400",
            height: "10",
            fill: "#C7A276",
          }),
          React.createElement("rect", {
            y: "232",
            width: "400",
            height: "3",
            fill: "#A97E52",
          }),
        ),
      living: (e) =>
        React.createElement(
          React.Fragment,
          null,
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: "#ECE8E1",
          }),
          React.createElement("rect", {
            x: "150",
            y: "30",
            width: "220",
            height: "170",
            fill: "#A9C2A2",
          }),
          React.createElement("circle", {
            cx: "210",
            cy: "120",
            r: "50",
            fill: "#7FA27A",
          }),
          React.createElement("circle", {
            cx: "300",
            cy: "90",
            r: "62",
            fill: "#6C9268",
          }),
          React.createElement("circle", {
            cx: "350",
            cy: "160",
            r: "40",
            fill: "#86A981",
          }),
          React.createElement("path", {
            d: "M150 30h220v170H150z M260 30v170",
            fill: "none",
            stroke: "#2B2B2B",
            strokeWidth: "4",
          }),
          React.createElement("rect", {
            y: "200",
            width: "400",
            height: "100",
            fill: "#CDBFAE",
          }),
          React.createElement("ellipse", {
            cx: "190",
            cy: "262",
            rx: "150",
            ry: "22",
            fill: "#B9A991",
          }),
          React.createElement("rect", {
            x: "60",
            y: "178",
            width: "210",
            height: "52",
            rx: "10",
            fill: "#7E8A7A",
          }),
          React.createElement("rect", {
            x: "60",
            y: "160",
            width: "210",
            height: "34",
            rx: "10",
            fill: "#8F9B8A",
          }),
          React.createElement("rect", {
            x: "72",
            y: "166",
            width: "46",
            height: "26",
            rx: "6",
            fill: "#D9C7A6",
          }),
          React.createElement("rect", {
            x: "150",
            y: "238",
            width: "90",
            height: "10",
            rx: "3",
            fill: "#6E5A44",
          }),
          React.createElement("rect", {
            x: "160",
            y: "248",
            width: "5",
            height: "22",
            fill: "#5B4936",
          }),
          React.createElement("rect", {
            x: "225",
            y: "248",
            width: "5",
            height: "22",
            fill: "#5B4936",
          }),
          React.createElement("path", {
            d: "M40 270 L40 110 Q40 70 90 74",
            stroke: "#2B2B2B",
            strokeWidth: "3",
            fill: "none",
          }),
          React.createElement("path", {
            d: "M78 74 Q92 56 108 74 Z",
            fill: "#2B2B2B",
          }),
          React.createElement("rect", {
            x: "296",
            y: "170",
            width: "40",
            height: "60",
            rx: "4",
            fill: "#B96C42",
          }),
        ),
      clinic: (e) =>
        React.createElement(
          React.Fragment,
          null,
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: "#E8F1F2",
          }),
          React.createElement("rect", {
            x: "250",
            y: "30",
            width: "120",
            height: "120",
            rx: "6",
            fill: "#CFE6EA",
          }),
          React.createElement("path", {
            d: "M250 90h120M310 30v120",
            stroke: "#FFFFFF",
            strokeWidth: "5",
          }),
          React.createElement("rect", {
            y: "228",
            width: "400",
            height: "72",
            fill: "#D3E0E2",
          }),
          React.createElement("rect", {
            x: "20",
            y: "140",
            width: "110",
            height: "88",
            rx: "6",
            fill: "#FFFFFF",
          }),
          React.createElement("rect", {
            x: "20",
            y: "176",
            width: "110",
            height: "2",
            fill: "#D3E0E2",
          }),
          React.createElement("rect", {
            x: "68",
            y: "150",
            width: "14",
            height: "4",
            rx: "2",
            fill: "#9BB8BE",
          }),
          React.createElement("rect", {
            x: "68",
            y: "190",
            width: "14",
            height: "4",
            rx: "2",
            fill: "#9BB8BE",
          }),
          React.createElement("path", {
            d: "M170 210 Q160 160 200 150 L300 132 Q318 130 320 146 L322 160 Q322 172 308 174 L224 186 Q214 210 230 214 Z",
            fill: "#0E8A93",
          }),
          React.createElement("path", {
            d: "M300 132 Q330 118 344 126 Q350 132 340 140 L320 146 Z",
            fill: "#0C7880",
          }),
          React.createElement("rect", {
            x: "208",
            y: "214",
            width: "20",
            height: "18",
            fill: "#9BB8BE",
          }),
          React.createElement("rect", {
            x: "176",
            y: "230",
            width: "84",
            height: "8",
            rx: "4",
            fill: "#7FA0A6",
          }),
          React.createElement("line", {
            x1: "210",
            y1: "0",
            x2: "210",
            y2: "50",
            stroke: "#9BB8BE",
            strokeWidth: "4",
          }),
          React.createElement("path", {
            d: "M210 50 L260 74",
            stroke: "#9BB8BE",
            strokeWidth: "4",
          }),
          React.createElement("ellipse", {
            cx: "270",
            cy: "78",
            rx: "24",
            ry: "12",
            fill: "#F7FBFB",
            stroke: "#9BB8BE",
            strokeWidth: "3",
          }),
          React.createElement("ellipse", {
            cx: "270",
            cy: "82",
            rx: "14",
            ry: "4",
            fill: "#FFF7D6",
          }),
          React.createElement("rect", {
            x: "140",
            y: "120",
            width: "40",
            height: "6",
            rx: "3",
            fill: "#9BB8BE",
          }),
        ),
      portrait: (e, t = 0) =>
        React.createElement(
          React.Fragment,
          null,
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: vn[t % vn.length],
          }),
          React.createElement("circle", {
            cx: "320",
            cy: "60",
            r: "70",
            fill: "#fff",
            opacity: "0.35",
          }),
          React.createElement(Ht, { x: 200, y: 140, s: 1.25, tone: t }),
        ),
      team: (e, t = 0) =>
        React.createElement(
          React.Fragment,
          null,
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: "#E6E0D6",
          }),
          React.createElement("rect", {
            y: "210",
            width: "400",
            height: "90",
            fill: "#D8D0C2",
          }),
          React.createElement(Ht, { x: 92, y: 150, s: 0.95, tone: t + 1 }),
          React.createElement(Ht, { x: 308, y: 150, s: 0.95, tone: t + 4 }),
          React.createElement(Ht, { x: 200, y: 136, s: 1.05, tone: t + 3 }),
        ),
      mandap: (e) =>
        React.createElement(
          React.Fragment,
          null,
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: "#5E1230",
          }),
          React.createElement("rect", {
            y: "236",
            width: "400",
            height: "64",
            fill: "#3F0B20",
          }),
          Array.from({ length: 30 }).map((t, a) =>
            React.createElement("circle", {
              key: a,
              cx: (a * 47) % 400,
              cy: 250 + ((a * 29) % 46),
              r: "3",
              fill: a % 2 ? "#F4A51C" : "#E2462B",
              opacity: "0.85",
            }),
          ),
          React.createElement("rect", {
            x: "70",
            y: "60",
            width: "260",
            height: "24",
            fill: "#C9A04A",
          }),
          Array.from({ length: 9 }).map((t, a) =>
            React.createElement("circle", {
              key: a,
              cx: 84 + a * 29,
              cy: "88",
              r: "14",
              fill: "#F3E6C8",
            }),
          ),
          [78, 312].map((t) =>
            React.createElement("rect", {
              key: t,
              x: t,
              y: "80",
              width: "10",
              height: "160",
              fill: "#C9A04A",
            }),
          ),
          [110, 140, 170, 230, 260, 290].map((t, a) =>
            Array.from({ length: 10 }).map((s, n) =>
              React.createElement("circle", {
                key: t + "-" + n,
                cx: t,
                cy: 110 + n * 12,
                r: "5",
                fill: (n + a) % 3 === 0 ? "#F7D046" : "#F08A1C",
              }),
            ),
          ),
          React.createElement("path", {
            d: "M150 236 Q200 200 250 236 Z",
            fill: "#F08A1C",
            opacity: "0.9",
          }),
          React.createElement("circle", {
            cx: "200",
            cy: "222",
            r: "6",
            fill: "#FFE9A6",
          }),
        ),
      marigold: (e) => {
        let t = $t(5);
        return React.createElement(
          React.Fragment,
          null,
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: "#F3E3C9",
          }),
          Array.from({ length: 9 }).map((a, s) =>
            React.createElement(
              "g",
              { key: s },
              Array.from({ length: 16 }).map((n, i) => {
                let r = 20 + s * 46 + Math.sin(i / 2) * 4,
                  o = -10 + i * 20;
                return React.createElement("circle", {
                  key: i,
                  cx: r,
                  cy: o,
                  r: 9 + t() * 2,
                  fill: (i + s) % 4 === 0 ? "#F7C934" : "#EE7D16",
                });
              }),
            ),
          ),
          React.createElement("rect", {
            x: "120",
            y: "90",
            width: "160",
            height: "120",
            fill: "#FFFAF2",
            opacity: "0.92",
          }),
          React.createElement(
            "text",
            {
              x: "200",
              y: "146",
              textAnchor: "middle",
              fontFamily: "Georgia, serif",
              fontSize: "26",
              fill: "#8E1C47",
            },
            "A & R",
          ),
          React.createElement(
            "text",
            {
              x: "200",
              y: "176",
              textAnchor: "middle",
              fontFamily: "Georgia, serif",
              fontSize: "12",
              fill: "#8E1C47",
              letterSpacing: "3",
            },
            "14 \xB7 02 \xB7 2026",
          ),
        );
      },
      palace: (e) =>
        React.createElement(
          React.Fragment,
          null,
          React.createElement(
            "defs",
            null,
            React.createElement(
              "linearGradient",
              { id: e + "d", x1: "0", y1: "0", x2: "0", y2: "1" },
              React.createElement("stop", {
                offset: "0",
                stopColor: "#F2A65A",
              }),
              React.createElement("stop", {
                offset: "0.6",
                stopColor: "#F6D3A1",
              }),
              React.createElement("stop", {
                offset: "1",
                stopColor: "#F9E4C4",
              }),
            ),
          ),
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: `url(#${e}d)`,
          }),
          React.createElement("circle", {
            cx: "300",
            cy: "90",
            r: "26",
            fill: "#FFF1D2",
            opacity: "0.9",
          }),
          React.createElement(
            "g",
            { fill: "#C77E52" },
            React.createElement("rect", {
              x: "70",
              y: "120",
              width: "260",
              height: "80",
            }),
            React.createElement("rect", {
              x: "50",
              y: "100",
              width: "40",
              height: "100",
            }),
            React.createElement("rect", {
              x: "310",
              y: "100",
              width: "40",
              height: "100",
            }),
            React.createElement("circle", { cx: "70", cy: "100", r: "20" }),
            React.createElement("circle", { cx: "330", cy: "100", r: "20" }),
            React.createElement("rect", {
              x: "160",
              y: "80",
              width: "80",
              height: "50",
            }),
            React.createElement("circle", { cx: "200", cy: "80", r: "34" }),
            React.createElement("rect", {
              x: "198",
              y: "34",
              width: "4",
              height: "16",
            }),
          ),
          Array.from({ length: 9 }).map((t, a) =>
            React.createElement("path", {
              key: a,
              d: `M${86 + a * 26} 200 L${86 + a * 26} 160 A9 9 0 0 1 ${104 + a * 26} 160 L${104 + a * 26} 200 Z`,
              fill: "#8E4E2F",
            }),
          ),
          React.createElement("rect", {
            y: "200",
            width: "400",
            height: "100",
            fill: "#7FA8B0",
          }),
          React.createElement(
            "g",
            { opacity: "0.35", transform: "translate(0 400) scale(1 -1)" },
            React.createElement("rect", {
              x: "70",
              y: "120",
              width: "260",
              height: "80",
              fill: "#C77E52",
            }),
            React.createElement("circle", {
              cx: "200",
              cy: "80",
              r: "34",
              fill: "#C77E52",
            }),
          ),
          [220, 236, 252].map((t) =>
            React.createElement("rect", {
              key: t,
              x: 60 + (t % 3) * 20,
              y: t,
              width: "280",
              height: "2",
              fill: "#fff",
              opacity: "0.3",
            }),
          ),
        ),
      villa: (e) =>
        React.createElement(
          React.Fragment,
          null,
          React.createElement(
            "defs",
            null,
            React.createElement(
              "linearGradient",
              { id: e + "v", x1: "0", y1: "0", x2: "0", y2: "1" },
              React.createElement("stop", {
                offset: "0",
                stopColor: "#9CC4DA",
              }),
              React.createElement("stop", {
                offset: "1",
                stopColor: "#E4EEF0",
              }),
            ),
          ),
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: `url(#${e}v)`,
          }),
          React.createElement("rect", {
            y: "214",
            width: "400",
            height: "86",
            fill: "#6E9B5A",
          }),
          React.createElement("rect", {
            x: "60",
            y: "150",
            width: "190",
            height: "70",
            fill: "#F2EEE6",
          }),
          React.createElement("rect", {
            x: "150",
            y: "96",
            width: "150",
            height: "56",
            fill: "#E6E0D4",
          }),
          React.createElement("rect", {
            x: "44",
            y: "142",
            width: "222",
            height: "10",
            fill: "#3B3F3C",
          }),
          React.createElement("rect", {
            x: "138",
            y: "88",
            width: "176",
            height: "10",
            fill: "#3B3F3C",
          }),
          [76, 120].map((t) =>
            React.createElement("rect", {
              key: t,
              x: t,
              y: "166",
              width: "34",
              height: "42",
              fill: "#F4C878",
            }),
          ),
          React.createElement("rect", {
            x: "170",
            y: "166",
            width: "62",
            height: "54",
            fill: "#2E3A3A",
          }),
          React.createElement("rect", {
            x: "168",
            y: "108",
            width: "50",
            height: "32",
            fill: "#F4C878",
          }),
          React.createElement("rect", {
            x: "232",
            y: "108",
            width: "50",
            height: "32",
            fill: "#2E3A3A",
          }),
          React.createElement("rect", {
            x: "40",
            y: "236",
            width: "230",
            height: "26",
            fill: "#5CB3C9",
          }),
          React.createElement("rect", {
            x: "40",
            y: "236",
            width: "230",
            height: "4",
            fill: "#fff",
            opacity: "0.5",
          }),
          React.createElement("rect", {
            x: "334",
            y: "120",
            width: "8",
            height: "100",
            fill: "#7A5A3A",
            transform: "rotate(4 338 170)",
          }),
          [-60, -20, 20, 60, 100, 140].map((t) =>
            React.createElement("ellipse", {
              key: t,
              cx: "340",
              cy: "118",
              rx: "44",
              ry: "8",
              fill: "#3E7A3A",
              transform: `rotate(${t} 340 118) translate(30 0)`,
            }),
          ),
        ),
      tower: (e) => {
        let t = $t(3);
        return React.createElement(
          React.Fragment,
          null,
          React.createElement(
            "defs",
            null,
            React.createElement(
              "linearGradient",
              { id: e + "t", x1: "0", y1: "0", x2: "0", y2: "1" },
              React.createElement("stop", {
                offset: "0",
                stopColor: "#2B3B5C",
              }),
              React.createElement("stop", {
                offset: "0.7",
                stopColor: "#D88C6A",
              }),
              React.createElement("stop", {
                offset: "1",
                stopColor: "#F2C48F",
              }),
            ),
          ),
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: `url(#${e}t)`,
          }),
          [
            [30, 140, 60],
            [100, 60, 80],
            [190, 100, 64],
            [262, 40, 90],
            [358, 130, 50],
          ].map(([a, s, n], i) =>
            React.createElement(
              "g",
              { key: i },
              React.createElement("rect", {
                x: a,
                y: s,
                width: n,
                height: 300 - s,
                fill: i % 2 ? "#1E2433" : "#283044",
              }),
              Array.from({ length: Math.floor((300 - s) / 18) }).map((r, o) =>
                Array.from({ length: Math.floor(n / 16) }).map((d, c) =>
                  t() > 0.55
                    ? React.createElement("rect", {
                        key: o + "-" + c,
                        x: a + 6 + c * 16,
                        y: s + 8 + o * 18,
                        width: "8",
                        height: "9",
                        fill: "#F5C976",
                        opacity: 0.5 + t() * 0.5,
                      })
                    : null,
                ),
              ),
            ),
          ),
          React.createElement("rect", {
            y: "270",
            width: "400",
            height: "30",
            fill: "#18301F",
          }),
          Array.from({ length: 12 }).map((a, s) =>
            React.createElement("circle", {
              key: s,
              cx: s * 36 + 10,
              cy: "270",
              r: "16",
              fill: "#1F3D27",
            }),
          ),
        );
      },
      tech: (e) => {
        let t = $t(21),
          a = Array.from({ length: 16 }).map(() => [t() * 400, t() * 300]);
        return React.createElement(
          React.Fragment,
          null,
          React.createElement(
            "defs",
            null,
            React.createElement(
              "radialGradient",
              { id: e + "n", cx: "0.5", cy: "0.5", r: "0.5" },
              React.createElement("stop", {
                offset: "0",
                stopColor: "#7C8CFF",
                stopOpacity: "0.55",
              }),
              React.createElement("stop", {
                offset: "1",
                stopColor: "#7C8CFF",
                stopOpacity: "0",
              }),
            ),
          ),
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: "#0B0F1A",
          }),
          Array.from({ length: 11 }).map((s, n) =>
            React.createElement("path", {
              key: n,
              d: `M${n * 40} 0V300M0 ${n * 30}H400`,
              stroke: "#1B2236",
              strokeWidth: "1",
            }),
          ),
          React.createElement("circle", {
            cx: "250",
            cy: "130",
            r: "150",
            fill: `url(#${e}n)`,
          }),
          a.map(([s, n], i) => {
            let [r, o] = a[(i * 5 + 3) % a.length];
            return React.createElement("line", {
              key: i,
              x1: s,
              y1: n,
              x2: r,
              y2: o,
              stroke: i % 3 ? "#3B4CC0" : "#2FD3B3",
              strokeWidth: "1",
              opacity: "0.55",
            });
          }),
          a.map(([s, n], i) =>
            React.createElement("circle", {
              key: i,
              cx: s,
              cy: n,
              r: i % 4 === 0 ? 4 : 2.4,
              fill: i % 3 ? "#9AA6FF" : "#3EE0C0",
            }),
          ),
          React.createElement("rect", {
            x: "60",
            y: "200",
            width: "140",
            height: "56",
            rx: "8",
            fill: "#121A2E",
            stroke: "#26314D",
          }),
          React.createElement("rect", {
            x: "74",
            y: "214",
            width: "60",
            height: "6",
            rx: "3",
            fill: "#3EE0C0",
          }),
          React.createElement("rect", {
            x: "74",
            y: "228",
            width: "100",
            height: "5",
            rx: "2.5",
            fill: "#3B4CC0",
          }),
          React.createElement("rect", {
            x: "74",
            y: "240",
            width: "80",
            height: "5",
            rx: "2.5",
            fill: "#26314D",
          }),
        );
      },
      screen: (e) =>
        React.createElement(
          React.Fragment,
          null,
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: "#1A2030",
          }),
          React.createElement("rect", {
            y: "232",
            width: "400",
            height: "68",
            fill: "#2A2420",
          }),
          React.createElement("rect", {
            x: "70",
            y: "40",
            width: "260",
            height: "170",
            rx: "10",
            fill: "#0E1322",
            stroke: "#3A4258",
            strokeWidth: "4",
          }),
          React.createElement("rect", {
            x: "84",
            y: "54",
            width: "60",
            height: "142",
            rx: "4",
            fill: "#161D31",
          }),
          [64, 78, 92, 106].map((t, a) =>
            React.createElement("rect", {
              key: t,
              x: "92",
              y: t,
              width: a === 0 ? 40 : 34,
              height: "6",
              rx: "3",
              fill: a === 0 ? "#8193FF" : "#2B3550",
            }),
          ),
          React.createElement("rect", {
            x: "156",
            y: "54",
            width: "160",
            height: "40",
            rx: "4",
            fill: "#161D31",
          }),
          React.createElement("rect", {
            x: "166",
            y: "64",
            width: "50",
            height: "8",
            rx: "4",
            fill: "#3EE0C0",
          }),
          React.createElement("rect", {
            x: "166",
            y: "78",
            width: "80",
            height: "6",
            rx: "3",
            fill: "#2B3550",
          }),
          React.createElement("rect", {
            x: "156",
            y: "102",
            width: "160",
            height: "94",
            rx: "4",
            fill: "#161D31",
          }),
          React.createElement("polyline", {
            points: "166,180 190,166 214,172 238,146 262,152 286,124 306,130",
            fill: "none",
            stroke: "#8193FF",
            strokeWidth: "3",
          }),
          React.createElement("rect", {
            x: "40",
            y: "210",
            width: "320",
            height: "22",
            rx: "4",
            fill: "#3A4258",
          }),
          React.createElement("rect", {
            x: "170",
            y: "214",
            width: "60",
            height: "6",
            rx: "3",
            fill: "#2A3148",
          }),
          React.createElement("rect", {
            x: "290",
            y: "196",
            width: "40",
            height: "36",
            rx: "6",
            fill: "#C9935F",
          }),
        ),
      smile: (e) =>
        React.createElement(
          React.Fragment,
          null,
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: "#DCEEF0",
          }),
          React.createElement("circle", {
            cx: "80",
            cy: "60",
            r: "90",
            fill: "#fff",
            opacity: "0.5",
          }),
          React.createElement(Ht, { x: 200, y: 130, s: 1.3, tone: 3 }),
          React.createElement("path", {
            d: "M182 157 Q200 168 218 157 Q200 162 182 157 Z",
            fill: "#FFFFFF",
            transform: "translate(0 0)",
          }),
        ),
      map: (e) =>
        React.createElement(
          React.Fragment,
          null,
          React.createElement("rect", {
            width: "400",
            height: "300",
            fill: "#EEF0EA",
          }),
          [40, 110, 190, 270, 350].map((t) =>
            React.createElement("rect", {
              key: t,
              x: t,
              y: "0",
              width: "12",
              height: "300",
              fill: "#FFFFFF",
            }),
          ),
          [50, 130, 210].map((t) =>
            React.createElement("rect", {
              key: t,
              x: "0",
              y: t,
              width: "400",
              height: "12",
              fill: "#FFFFFF",
            }),
          ),
          React.createElement("path", {
            d: "M0 260 Q140 200 400 240",
            stroke: "#FFFFFF",
            strokeWidth: "22",
            fill: "none",
          }),
          React.createElement("path", {
            d: "M0 260 Q140 200 400 240",
            stroke: "#F3D88B",
            strokeWidth: "8",
            fill: "none",
          }),
          React.createElement("rect", {
            x: "128",
            y: "70",
            width: "56",
            height: "54",
            fill: "#D4E5C9",
          }),
          React.createElement("rect", {
            x: "290",
            y: "150",
            width: "50",
            height: "50",
            fill: "#D4E5C9",
          }),
          React.createElement("rect", {
            x: "208",
            y: "146",
            width: "56",
            height: "58",
            fill: "#C9DDED",
          }),
          React.createElement("path", {
            d: "M200 116 C200 92 232 92 232 116 C232 134 216 146 216 150 C216 146 200 134 200 116 Z",
            fill: "#D2412F",
          }),
          React.createElement("circle", {
            cx: "216",
            cy: "114",
            r: "6",
            fill: "#fff",
          }),
        ),
    },
    Vi = Object.keys(Ea);
  function Qe({ name: e, tone: t = 0, className: a, style: s, label: n }) {
    let r = "a" + Ps().replace(/[^a-zA-Z0-9]/g, ""),
      o = Ea[e] || Ea.cafe;
    return React.createElement(
      "svg",
      {
        className: a,
        style: s,
        viewBox: "0 0 400 300",
        preserveAspectRatio: "xMidYMid slice",
        role: "img",
        "aria-label": n || e,
      },
      o(r, t),
    );
  }
  var Ts = 0,
    Z = (e = "id") =>
      `${e}_${Date.now().toString(36).slice(-4)}${(Ts++).toString(36)}${Math.random().toString(36).slice(2, 5)}`,
    X = (e) =>
      typeof structuredClone == "function"
        ? structuredClone(e)
        : JSON.parse(JSON.stringify(e)),
    x = (...e) => e.filter(Boolean).join(" ");
  function fe(e) {
    return String(e || "")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60);
  }
  function kt(e, t) {
    let a = Array.isArray(t) ? t : [t],
      s = e;
    for (let n of a) {
      if (s == null) return;
      s = s[n];
    }
    return s;
  }
  function kn(e, t, a) {
    let s = Array.isArray(t) ? t : [t],
      n = e;
    for (let i = 0; i < s.length - 1; i++)
      (n[s[i]] == null && (n[s[i]] = typeof s[i + 1] == "number" ? [] : {}),
        (n = n[s[i]]));
    n[s[s.length - 1]] = a;
  }
  var Le = (e, t) => JSON.stringify(e) === JSON.stringify(t);
  function Da(e) {
    let t = String(e || "").replace("#", "");
    t.length === 3 &&
      (t = t
        .split("")
        .map((s) => s + s)
        .join(""));
    let a = parseInt(t, 16);
    return Number.isNaN(a) || t.length !== 6
      ? [0, 0, 0]
      : [(a >> 16) & 255, (a >> 8) & 255, a & 255];
  }
  function wn(e) {
    let [t, a, s] = Da(e).map((n) => {
      let i = n / 255;
      return i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * t + 0.7152 * a + 0.0722 * s;
  }
  function na(e, t) {
    let a = wn(e),
      s = wn(t);
    return (Math.max(a, s) + 0.05) / (Math.min(a, s) + 0.05);
  }
  function Ia(e) {
    return na(e, "#FFFFFF") >= na(e, "#111111") ? "#FFFFFF" : "#111111";
  }
  var xn = (e) => /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(String(e || "").trim());
  function xt(e, t, a) {
    let s = Da(e),
      n = Da(t);
    return (
      "#" +
      s
        .map((r, o) => Math.round(r + (n[o] - r) * a))
        .map((r) => r.toString(16).padStart(2, "0"))
        .join("")
    );
  }
  function Ae(e) {
    return e >= 1024 * 1024 * 1024
      ? (e / 1024 / 1024 / 1024).toFixed(2) + " GB"
      : e >= 1024 * 1024
        ? (e / 1024 / 1024).toFixed(1) + " MB"
        : e >= 1024
          ? Math.round(e / 1024) + " KB"
          : e + " B";
  }
  var Ls = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function Nt(e, t = !0) {
    let a = new Date(e),
      s = `${a.getDate()} ${Ls[a.getMonth()]} ${a.getFullYear()}`;
    return t
      ? `${s}, ${String(a.getHours()).padStart(2, "0")}:${String(a.getMinutes()).padStart(2, "0")}`
      : s;
  }
  function sa(e, t = Date.now()) {
    let a = Math.max(0, Math.round((t - e) / 1e3));
    if (a < 10) return "just now";
    if (a < 60) return `${a}s ago`;
    let s = Math.round(a / 60);
    if (s < 60) return `${s} min ago`;
    let n = Math.round(s / 60);
    return n < 24 ? `${n} h ago` : Nt(e, !1);
  }
  var de = (e, t, a) => `${e} ${e === 1 ? t : a || t + "s"}`;
  function ia(e) {
    return String(e || "")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }
  function Ba(e) {
    let t = new Set([
        "P",
        "BR",
        "STRONG",
        "B",
        "EM",
        "I",
        "UL",
        "OL",
        "LI",
        "A",
        "H3",
      ]),
      a = document.createElement("template");
    a.innerHTML = e;
    let s = (n) => {
      [...n.childNodes].forEach((i) => {
        if (i.nodeType === 1) {
          if (!t.has(i.tagName)) {
            if (i.tagName === "DIV") {
              let r = document.createElement("p");
              ((r.innerHTML = i.innerHTML), i.replaceWith(r), s(r));
              return;
            }
            (i.replaceWith(...i.childNodes), s(n));
            return;
          }
          ([...i.attributes].forEach((r) => {
            (i.tagName === "A" && r.name === "href") ||
              i.removeAttribute(r.name);
          }),
            s(i));
        } else i.nodeType !== 3 && i.remove();
      });
    };
    return (s(a.content), a.innerHTML);
  }
  function Ct(e, t) {
    if (((e = e.toLowerCase().trim()), !e)) return 1;
    if (((t = t.toLowerCase()), t.includes(e)))
      return 2 + (t.startsWith(e) ? 1 : 0);
    let a = 0;
    for (let s of t) s === e[a] && a++;
    return a === e.length ? 1 : 0;
  }
  var zs =
      typeof navigator < "u" &&
      /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent),
    St = zs ? "\u2318" : "Ctrl";
  var {
      createContext: Cn,
      useContext: oa,
      useState: Ot,
      useEffect: $s,
    } = React,
    ra = Cn({ mode: "thumb" }),
    Ft = Cn(null),
    be = () => oa(ra),
    Nn = (() => {
      try {
        let e = document.createElement("div");
        return (
          (e.contentEditable = "plaintext-only"),
          e.contentEditable === "plaintext-only"
        );
      } catch {
        return !1;
      }
    })();
  function B({
    k: e,
    as: t = "span",
    className: a,
    multiline: s,
    ph: n,
    style: i,
  }) {
    let r = be(),
      o = oa(Ft),
      d = (o && kt(o.values, e)) ?? "";
    return r.mode === "edit" && o && r.selectedId === o.id && r.onInline
      ? React.createElement(
          t,
          {
            key: String(d),
            className: x(a, "sf-ed"),
            style: i,
            "data-ph": n || "Type here",
            contentEditable: Nn ? "plaintext-only" : "true",
            suppressContentEditableWarning: !0,
            spellCheck: !0,
            onClick: (l) => l.preventDefault(),
            onPaste: (l) => {
              Nn ||
                (l.preventDefault(),
                document.execCommand(
                  "insertText",
                  !1,
                  l.clipboardData.getData("text/plain"),
                ));
            },
            onKeyDown: (l) => {
              (l.stopPropagation(),
                l.key === "Enter" &&
                  !s &&
                  (l.preventDefault(), l.currentTarget.blur()),
                l.key === "Escape" &&
                  ((l.currentTarget.innerText = d), l.currentTarget.blur()));
            },
            onBlur: (l) => {
              let h = l.currentTarget.innerText.replace(/ /g, " ");
              (s || (h = h.replace(/\s*\n\s*/g, " ")),
                (h = h.replace(/\n+$/, "")),
                h !== d && r.onInline(o.id, e, h));
            },
          },
          d,
        )
      : React.createElement(t, { className: a, style: i }, d);
  }
  function we({
    to: e,
    newTab: t,
    className: a,
    children: s,
    style: n,
    title: i,
  }) {
    let r = be(),
      o = r.resolve ? r.resolve(e) : { href: "#" },
      d = (l) => {
        if (r.mode !== "preview") {
          l.preventDefault();
          return;
        }
        (o.internal ||
          o.kind === "phone" ||
          o.kind === "email" ||
          o.kind === "file" ||
          o.broken) &&
          (l.preventDefault(), r.navigate && r.navigate(e, o));
      },
      c = o.kind === "url" || o.kind === "whatsapp";
    return React.createElement(
      "a",
      {
        href: o.href || "#",
        className: a,
        style: n,
        title: i,
        target: r.mode === "preview" && (t || c) ? "_blank" : void 0,
        rel: "noreferrer",
        onClick: d,
        "data-broken": o.broken ? "true" : void 0,
      },
      s,
    );
  }
  function De({ k: e, className: t = "sf-btn" }) {
    let a = oa(Ft),
      s = kt(a.values, e);
    return !s || !s.label
      ? null
      : React.createElement(
          we,
          { to: s.to, newTab: s.newTab, className: t },
          React.createElement(B, {
            k: [...(Array.isArray(e) ? e : [e]), "label"],
          }),
        );
  }
  function Ye({ id: e, className: t, style: a, alt: s }) {
    let n = be(),
      i = e ? n.media && n.media[e] : null;
    return !e || !i
      ? React.createElement(
          "div",
          { className: x("sf-img sf-img-empty", t), style: a },
          React.createElement(
            "span",
            null,
            e ? "Image removed: pick another" : "Add an image",
          ),
        )
      : React.createElement(
          "div",
          { className: x("sf-img", t), style: a },
          i.src
            ? React.createElement("img", { src: i.src, alt: s || i.alt || "" })
            : React.createElement(Qe, {
                name: i.art,
                tone: i.tone,
                label: s || i.alt,
              }),
        );
  }
  function Ta({ k: e, className: t, style: a }) {
    let s = oa(Ft);
    return React.createElement(Ye, {
      id: kt(s.values, e),
      className: t,
      style: a,
    });
  }
  var Pa = {
      tooth:
        "M7 3C4.6 3 3 5 3 7.6c0 3 1.5 4.4 2 7.4.4 2.6 1 6 2.6 6 1.4 0 1.8-4.2 2.4-6h4c.6 1.8 1 6 2.4 6 1.6 0 2.2-3.4 2.6-6 .5-3 2-4.4 2-7.4C21 5 19.4 3 17 3c-2 0-3 1-5 1S9 3 7 3z",
      sparkle:
        "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z",
      clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2",
      shield: "M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3zM9 12l2 2 4-4",
      heart:
        "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z",
      leaf: "M5 19c0-8 6-14 15-14 0 9-6 15-14 15M5 19l7-7",
      cup: "M4 9h12v4.5A5.5 5.5 0 0 1 10.5 19h-1A5.5 5.5 0 0 1 4 13.5V9zM16 10h1.5a2.5 2.5 0 0 1 0 5H16M8 3v3M12 3v3",
      ruler: "M4 16L16 4l4 4L8 20l-4-4zM8 12l2 2M11 9l2 2M14 6l2 2",
      home: "M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9z",
      star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z",
      pin: "M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
      users:
        "M9 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2c2.2.6 3.5 2.6 3.5 5.8",
      calendar:
        "M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM3 10h18M8 3v4M16 3v4",
      code: "M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16",
      layers: "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5",
      bolt: "M13 2L4 14h7l-1 8 9-12h-7l1-8z",
      key: "M8 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 12l9-9M17 6l3 3",
      camera:
        "M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
      award: "M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8.5 14L7 22l5-3 5 3-1.5-8",
      phone:
        "M5 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 5a2 2 0 0 1 2-2z",
      wifi: "M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01",
      car: "M5 11l2-5h10l2 5M3 11h18v6H3zM6.5 17v2M17.5 17v2M7 14h.01M17 14h.01",
      flower:
        "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM12 9V4M12 20v-5M9 12H4M20 12h-5M9.9 9.9L6.3 6.3M17.7 17.7l-3.6-3.6M14.1 9.9l3.6-3.6M6.3 17.7l3.6-3.6",
      music:
        "M9 18V5l11-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM20 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
      chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
    },
    Sn = Object.keys(Pa);
  function la({ name: e, size: t = 22 }) {
    return React.createElement(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
      },
      React.createElement("path", { d: Pa[e] || Pa.sparkle }),
    );
  }
  function Mt({ items: e, className: t, onPick: a }) {
    let s = be();
    return React.createElement(
      "ul",
      { className: t },
      (e || []).map((n) => {
        let i = s.resolve ? s.resolve(n.to) : {};
        return React.createElement(
          "li",
          {
            key: n.id,
            className: n.children && n.children.length ? "has-sub" : void 0,
          },
          React.createElement(
            we,
            {
              to: n.to,
              newTab: n.newTab,
              className: x("sf-navlink", i.current && "is-current"),
            },
            React.createElement("span", { onClick: a }, n.label),
          ),
          n.children &&
            n.children.length > 0 &&
            React.createElement(
              "ul",
              { className: "sf-sub" },
              n.children.map((r) =>
                React.createElement(
                  "li",
                  { key: r.id },
                  React.createElement(
                    we,
                    { to: r.to, newTab: r.newTab, className: "sf-navlink" },
                    React.createElement("span", { onClick: a }, r.label),
                  ),
                ),
              ),
            ),
        );
      }),
    );
  }
  function Mn({ open: e, onClick: t }) {
    return React.createElement(
      "button",
      {
        type: "button",
        className: "sf-burger",
        "aria-label": "Menu",
        onClick: t,
      },
      React.createElement(
        "svg",
        {
          width: "22",
          height: "22",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
        },
        e
          ? React.createElement("path", { d: "M6 6l12 12M18 6L6 18" })
          : React.createElement("path", { d: "M4 7h16M4 12h16M4 17h16" }),
      ),
    );
  }
  function Hs({ v: e, cls: t }) {
    let a = be(),
      [s, n] = Ot(!1),
      i = (a.site && a.site.nav && a.site.nav.header) || [];
    return React.createElement(
      "header",
      { className: x(t, "sf-hdr") },
      React.createElement(
        "div",
        { className: "sf-wrap sf-hdr-row" },
        React.createElement(
          we,
          { to: { type: "page", pageId: "@home" }, className: "sf-logo" },
          React.createElement(B, { k: "logo" }),
        ),
        React.createElement(Mt, { items: i, className: "sf-nav" }),
        React.createElement(
          "div",
          { className: "sf-hdr-end" },
          e.showButton &&
            React.createElement(De, {
              k: "button",
              className: "sf-btn sf-btn-sm sf-hdr-cta",
            }),
          React.createElement(Mn, { open: s, onClick: () => n(!s) }),
        ),
      ),
      s &&
        React.createElement(
          "div",
          { className: "sf-wrap sf-mnav" },
          React.createElement(Mt, {
            items: i,
            className: "sf-mnav-list",
            onPick: () => n(!1),
          }),
          e.showButton &&
            React.createElement(De, { k: "button", className: "sf-btn" }),
        ),
    );
  }
  function Os({ v: e, cls: t }) {
    let a = be(),
      [s, n] = Ot(!1),
      i = (a.site && a.site.nav && a.site.nav.header) || [];
    return React.createElement(
      "header",
      { className: x(t, "sf-hdr sf-hdr-c") },
      e.showTopline &&
        React.createElement(
          "div",
          { className: "sf-topline" },
          React.createElement(
            "div",
            { className: "sf-wrap" },
            React.createElement(B, { k: "topline" }),
          ),
        ),
      React.createElement(
        "div",
        { className: "sf-wrap sf-hdr-c-row" },
        React.createElement("span", { className: "sf-hdr-c-spacer" }),
        React.createElement(
          we,
          {
            to: { type: "page", pageId: "@home" },
            className: "sf-logo sf-logo-lg",
          },
          React.createElement(B, { k: "logo" }),
        ),
        React.createElement(Mn, { open: s, onClick: () => n(!s) }),
      ),
      React.createElement(
        "div",
        { className: "sf-wrap sf-hdr-c-nav" },
        React.createElement(Mt, { items: i, className: "sf-nav sf-nav-c" }),
      ),
      s &&
        React.createElement(
          "div",
          { className: "sf-wrap sf-mnav" },
          React.createElement(Mt, {
            items: i,
            className: "sf-mnav-list",
            onPick: () => n(!1),
          }),
        ),
    );
  }
  function Rs({ v: e, cls: t }) {
    return React.createElement(
      "section",
      { className: t },
      React.createElement(
        "div",
        { className: "sf-wrap sf-split" },
        React.createElement(
          "div",
          { className: "sf-stack" },
          e.eyebrow &&
            React.createElement(B, {
              k: "eyebrow",
              as: "p",
              className: "sf-eyebrow",
            }),
          React.createElement(B, {
            k: "heading",
            as: "h1",
            className: "sf-h1",
          }),
          React.createElement(B, {
            k: "body",
            as: "p",
            className: "sf-lead",
            multiline: !0,
          }),
          React.createElement(
            "div",
            { className: "sf-btns" },
            React.createElement(De, { k: "primary" }),
            React.createElement(De, {
              k: "secondary",
              className: "sf-btn ghost",
            }),
          ),
          e.showBadge &&
            React.createElement(
              "p",
              { className: "sf-badge" },
              React.createElement(
                "span",
                { className: "sf-stars", "aria-hidden": "true" },
                "\u2605\u2605\u2605\u2605\u2605",
              ),
              React.createElement(B, { k: "badge" }),
            ),
        ),
        React.createElement(Ta, { k: "image", className: "sf-split-img" }),
      ),
    );
  }
  function _s({ v: e, cls: t }) {
    return React.createElement(
      "section",
      { className: t },
      React.createElement(
        "div",
        { className: "sf-wrap sf-stack" },
        e.eyebrow &&
          React.createElement(B, {
            k: "eyebrow",
            as: "p",
            className: "sf-eyebrow",
          }),
        React.createElement(B, {
          k: "heading",
          as: "h1",
          className: "sf-h1 sf-mega",
        }),
        React.createElement(
          "div",
          { className: "sf-big-row" },
          React.createElement(B, {
            k: "body",
            as: "p",
            className: "sf-lead",
            multiline: !0,
          }),
          React.createElement(De, { k: "primary", className: "sf-btn" }),
        ),
      ),
      e.showImage &&
        React.createElement(
          "div",
          { className: "sf-wrap sf-big-imgwrap" },
          React.createElement(Ta, { k: "image", className: "sf-wide-img" }),
        ),
    );
  }
  function Ws({ v: e, cls: t }) {
    let a = be(),
      s = e.slides || [],
      [n, i] = Ot(0),
      r = s.length,
      o = r ? Math.min(n, r - 1) : 0;
    return (
      $s(() => {
        if (a.mode !== "preview" || !e.autoplay || r < 2) return;
        let d = setInterval(() => i((c) => (c + 1) % r), 4500);
        return () => clearInterval(d);
      }, [a.mode, e.autoplay, r]),
      React.createElement(
        "section",
        { className: x(t, "sf-slides") },
        React.createElement(
          "div",
          { className: "sf-slides-stage" },
          s.map((d, c) =>
            React.createElement(
              "div",
              { key: c, className: x("sf-slide", c === o && "on") },
              React.createElement(Ye, { id: d.image, className: "sf-fill" }),
            ),
          ),
          React.createElement("div", { className: "sf-shade" }),
          React.createElement(
            "div",
            { className: "sf-wrap sf-slides-copy" },
            r > 0 &&
              React.createElement(
                React.Fragment,
                null,
                React.createElement(B, {
                  k: ["slides", o, "heading"],
                  as: "h1",
                  className: "sf-h1",
                }),
                React.createElement(B, {
                  k: ["slides", o, "caption"],
                  as: "p",
                  className: "sf-lead",
                  multiline: !0,
                }),
              ),
            React.createElement(
              "div",
              { className: "sf-btns" },
              React.createElement(De, { k: "button" }),
            ),
          ),
          r > 1 &&
            React.createElement(
              "div",
              { className: "sf-dots" },
              s.map((d, c) =>
                React.createElement("button", {
                  key: c,
                  type: "button",
                  "aria-label": `Slide ${c + 1}`,
                  className: x("sf-dot", c === o && "on"),
                  onClick: () => i(c),
                }),
              ),
            ),
        ),
      )
    );
  }
  function qs({ v: e, cls: t }) {
    return React.createElement(
      "section",
      { className: t },
      React.createElement(
        "div",
        {
          className: x(
            "sf-wrap sf-split sf-split-about",
            e.imageSide === "right" && "img-right",
          ),
        },
        React.createElement(Ta, { k: "image", className: "sf-about-img" }),
        React.createElement(
          "div",
          { className: "sf-stack" },
          e.eyebrow &&
            React.createElement(B, {
              k: "eyebrow",
              as: "p",
              className: "sf-eyebrow",
            }),
          React.createElement(B, {
            k: "heading",
            as: "h2",
            className: "sf-h2",
          }),
          React.createElement("div", {
            className: "sf-rich sf-body",
            dangerouslySetInnerHTML: { __html: e.body || "" },
          }),
          e.stats &&
            e.stats.length > 0 &&
            React.createElement(
              "dl",
              { className: "sf-stats" },
              e.stats.map((a, s) =>
                React.createElement(
                  "div",
                  { key: s },
                  React.createElement(
                    "dt",
                    null,
                    React.createElement(B, { k: ["stats", s, "value"] }),
                  ),
                  React.createElement(
                    "dd",
                    null,
                    React.createElement(B, { k: ["stats", s, "label"] }),
                  ),
                ),
              ),
            ),
        ),
      ),
    );
  }
  function Ze({ v: e, center: t }) {
    return !e.eyebrow && !e.heading && !e.intro
      ? null
      : React.createElement(
          "div",
          { className: x("sf-head", t && "center") },
          e.eyebrow &&
            React.createElement(B, {
              k: "eyebrow",
              as: "p",
              className: "sf-eyebrow",
            }),
          e.heading !== void 0 &&
            React.createElement(B, {
              k: "heading",
              as: "h2",
              className: "sf-h2",
            }),
          e.intro &&
            React.createElement(B, {
              k: "intro",
              as: "p",
              className: "sf-lead",
              multiline: !0,
            }),
        );
  }
  function Gs({ v: e, cls: t }) {
    return React.createElement(
      "section",
      { className: t },
      React.createElement(
        "div",
        { className: "sf-wrap" },
        React.createElement(Ze, { v: e }),
        React.createElement(
          "div",
          { className: x("sf-grid", "cols-" + (e.columns || "3")) },
          (e.items || []).map((a, s) =>
            React.createElement(
              "div",
              { key: s, className: x("sf-feat", e.cards === !1 && "plain") },
              React.createElement(
                "span",
                { className: "sf-feat-ic" },
                React.createElement(la, { name: a.icon }),
              ),
              React.createElement(B, {
                k: ["items", s, "title"],
                as: "h3",
                className: "sf-h3",
              }),
              React.createElement(B, {
                k: ["items", s, "text"],
                as: "p",
                className: "sf-body",
                multiline: !0,
              }),
            ),
          ),
        ),
      ),
    );
  }
  function Fn(e, t) {
    let a = e.site && e.site.collections && e.site.collections[t];
    return a
      ? a.entries.filter((s) => s.status !== "draft" || e.mode === "edit")
      : [];
  }
  function js({ v: e, cls: t }) {
    let a = be(),
      s = Fn(a, e.collection || "services").slice(0, e.limit || 6);
    return React.createElement(
      "section",
      { className: t },
      React.createElement(
        "div",
        { className: "sf-wrap" },
        React.createElement(
          "div",
          { className: "sf-head-row" },
          React.createElement(Ze, { v: e }),
          React.createElement(De, { k: "button", className: "sf-link" }),
        ),
        s.length === 0
          ? React.createElement(
              "p",
              { className: "sf-empty" },
              "No entries yet. Add them in Collections.",
            )
          : React.createElement(
              "div",
              { className: x("sf-grid", "cols-" + (e.columns || "3")) },
              s.map((n) =>
                React.createElement(
                  we,
                  {
                    key: n.id,
                    to: {
                      type: "collection",
                      collectionId: e.collection || "services",
                      entryId: n.id,
                    },
                    className: "sf-card",
                  },
                  e.showImages !== !1 &&
                    React.createElement(Ye, {
                      id: n.image,
                      className: "sf-card-img",
                    }),
                  React.createElement(
                    "div",
                    { className: "sf-card-body" },
                    React.createElement(
                      "h3",
                      { className: "sf-h3" },
                      n.title,
                      n.status === "draft" &&
                        React.createElement(
                          "span",
                          { className: "sf-draft" },
                          "Draft",
                        ),
                    ),
                    React.createElement(
                      "p",
                      { className: "sf-body" },
                      n.summary || n.excerpt,
                    ),
                    React.createElement(
                      "div",
                      { className: "sf-card-meta" },
                      e.showPrice && n.price
                        ? React.createElement(
                            "span",
                            { className: "sf-price" },
                            n.price,
                          )
                        : React.createElement("span", null),
                      React.createElement(
                        "span",
                        { className: "sf-more" },
                        e.moreLabel || "Learn more",
                        " ",
                        React.createElement(
                          "span",
                          { "aria-hidden": "true" },
                          "\u2192",
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
      ),
    );
  }
  function Vs({ v: e, cls: t }) {
    return React.createElement(
      "section",
      { className: t },
      React.createElement(
        "div",
        { className: "sf-wrap" },
        React.createElement(Ze, { v: e }),
        React.createElement(
          "div",
          {
            className: x(
              "sf-gallery",
              e.layout === "mosaic" && "mosaic",
              "cols-" + (e.columns || "3"),
            ),
          },
          (e.items || []).map((a, s) =>
            React.createElement(
              "figure",
              { key: s, className: "sf-fig" },
              React.createElement(Ye, { id: a.image, className: "sf-gal-img" }),
              e.showCaptions !== !1 &&
                a.caption &&
                React.createElement(
                  "figcaption",
                  null,
                  React.createElement(B, { k: ["items", s, "caption"] }),
                ),
            ),
          ),
        ),
      ),
    );
  }
  function Ks({ v: e, cls: t }) {
    return React.createElement(
      "section",
      { className: t },
      React.createElement(
        "div",
        { className: "sf-wrap" },
        React.createElement(Ze, { v: e }),
        React.createElement(
          "div",
          { className: "sf-grid cols-3" },
          (e.items || []).map((a, s) =>
            React.createElement(
              "figure",
              { key: s, className: "sf-quote-card" },
              e.showStars &&
                React.createElement(
                  "div",
                  { className: "sf-stars" },
                  "\u2605\u2605\u2605\u2605\u2605",
                ),
              React.createElement(
                "blockquote",
                null,
                React.createElement(B, {
                  k: ["items", s, "quote"],
                  multiline: !0,
                }),
              ),
              React.createElement(
                "figcaption",
                null,
                React.createElement(Ye, {
                  id: a.photo,
                  className: "sf-avatar",
                }),
                React.createElement(
                  "span",
                  null,
                  React.createElement(B, {
                    k: ["items", s, "name"],
                    as: "strong",
                  }),
                  React.createElement(B, {
                    k: ["items", s, "detail"],
                    as: "span",
                    className: "sf-muted",
                  }),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
  function Us({ v: e, cls: t }) {
    return React.createElement(
      "section",
      { className: t },
      React.createElement(
        "div",
        { className: "sf-wrap sf-bigquote" },
        React.createElement(
          "span",
          { className: "sf-qmark", "aria-hidden": "true" },
          "\u201C",
        ),
        React.createElement(B, {
          k: "quote",
          as: "blockquote",
          className: "sf-h2",
          multiline: !0,
        }),
        React.createElement(
          "div",
          { className: "sf-bigquote-by" },
          React.createElement(Ye, { id: e.photo, className: "sf-avatar" }),
          React.createElement(
            "span",
            null,
            React.createElement(B, { k: "name", as: "strong" }),
            React.createElement(B, {
              k: "detail",
              as: "span",
              className: "sf-muted",
            }),
          ),
        ),
      ),
    );
  }
  function Js({ v: e, cls: t }) {
    return React.createElement(
      "section",
      { className: t },
      React.createElement(
        "div",
        { className: "sf-wrap" },
        React.createElement(Ze, { v: e }),
        React.createElement(
          "ul",
          { className: x("sf-menu", e.columns === "2" && "two") },
          (e.items || []).map((a, s) =>
            React.createElement(
              "li",
              { key: s },
              React.createElement(
                "div",
                { className: "sf-menu-top" },
                React.createElement(B, {
                  k: ["items", s, "name"],
                  as: "h3",
                  className: "sf-h3",
                }),
                a.tag &&
                  React.createElement(B, {
                    k: ["items", s, "tag"],
                    className: "sf-tag",
                  }),
                React.createElement("span", { className: "sf-dotfill" }),
                React.createElement(B, {
                  k: ["items", s, "price"],
                  className: "sf-price",
                }),
              ),
              a.description &&
                React.createElement(B, {
                  k: ["items", s, "description"],
                  as: "p",
                  className: "sf-body",
                  multiline: !0,
                }),
            ),
          ),
        ),
        e.showNote &&
          React.createElement(B, { k: "note", as: "p", className: "sf-note" }),
      ),
    );
  }
  function Qs({ v: e, cls: t }) {
    return React.createElement(
      "section",
      { className: t },
      React.createElement(
        "div",
        { className: "sf-wrap" },
        React.createElement(Ze, { v: e, center: !0 }),
        React.createElement(
          "div",
          {
            className: x(
              "sf-grid",
              "cols-" + Math.min(3, (e.items || []).length || 3),
            ),
          },
          (e.items || []).map((a, s) =>
            React.createElement(
              "div",
              { key: s, className: x("sf-plan", a.highlight && "hl") },
              a.highlight &&
                React.createElement(
                  "span",
                  { className: "sf-plan-flag" },
                  e.flag || "Most chosen",
                ),
              React.createElement(B, {
                k: ["items", s, "name"],
                as: "h3",
                className: "sf-h3",
              }),
              React.createElement(
                "p",
                { className: "sf-plan-price" },
                React.createElement(B, {
                  k: ["items", s, "price"],
                  as: "strong",
                }),
                React.createElement(B, {
                  k: ["items", s, "period"],
                  className: "sf-muted",
                }),
              ),
              React.createElement(
                "ul",
                { className: "sf-checks" },
                String(a.features || "")
                  .split(
                    `
`,
                  )
                  .filter(Boolean)
                  .map((n, i) => React.createElement("li", { key: i }, n)),
              ),
              React.createElement(De, {
                k: ["items", s, "button"],
                className: x("sf-btn", !a.highlight && "ghost"),
              }),
            ),
          ),
        ),
      ),
    );
  }
  function Ys({ v: e, cls: t }) {
    let [a, s] = Ot(e.openFirst ? 0 : -1);
    return React.createElement(
      "section",
      { className: t },
      React.createElement(
        "div",
        { className: "sf-wrap sf-faq" },
        React.createElement(Ze, { v: e }),
        React.createElement(
          "div",
          { className: "sf-faq-list" },
          (e.items || []).map((n, i) =>
            React.createElement(
              "div",
              { key: i, className: x("sf-faq-item", a === i && "open") },
              React.createElement(
                "button",
                {
                  type: "button",
                  className: "sf-faq-q",
                  onClick: () => s(a === i ? -1 : i),
                },
                React.createElement(B, { k: ["items", i, "q"] }),
                React.createElement(
                  "span",
                  { className: "sf-faq-ic", "aria-hidden": "true" },
                  "+",
                ),
              ),
              a === i &&
                React.createElement(B, {
                  k: ["items", i, "a"],
                  as: "p",
                  className: "sf-body sf-faq-a",
                  multiline: !0,
                }),
            ),
          ),
        ),
      ),
    );
  }
  function An(e) {
    let t = new Date(e);
    return Number.isNaN(t.getTime())
      ? e || ""
      : t.toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });
  }
  function Zs({ v: e, cls: t }) {
    let a = be(),
      s = Fn(a, "blog")
        .slice()
        .sort((n, i) => String(i.date).localeCompare(String(n.date)))
        .slice(0, Number(e.count) || 3);
    return React.createElement(
      "section",
      { className: t },
      React.createElement(
        "div",
        { className: "sf-wrap" },
        React.createElement(
          "div",
          { className: "sf-head-row" },
          React.createElement(Ze, { v: e }),
          React.createElement(De, { k: "button", className: "sf-link" }),
        ),
        s.length === 0
          ? React.createElement(
              "p",
              { className: "sf-empty" },
              "No posts yet. Write your first one in Collections \u2192 Blog.",
            )
          : React.createElement(
              "div",
              { className: "sf-grid cols-3" },
              s.map((n) =>
                React.createElement(
                  we,
                  {
                    key: n.id,
                    to: {
                      type: "collection",
                      collectionId: "blog",
                      entryId: n.id,
                    },
                    className: "sf-post",
                  },
                  React.createElement(Ye, {
                    id: n.image,
                    className: "sf-card-img",
                  }),
                  e.showDates &&
                    React.createElement(
                      "p",
                      { className: "sf-muted sf-small" },
                      An(n.date),
                      " \xB7 ",
                      n.author,
                    ),
                  React.createElement(
                    "h3",
                    { className: "sf-h3" },
                    n.title,
                    n.status === "draft" &&
                      React.createElement(
                        "span",
                        { className: "sf-draft" },
                        "Draft",
                      ),
                  ),
                  React.createElement("p", { className: "sf-body" }, n.excerpt),
                ),
              ),
            ),
      ),
    );
  }
  function Xs({ v: e, cls: t }) {
    let a = be(),
      [s, n] = Ot(!1),
      i = (r) => String(r || "").replace(/[^0-9+]/g, "");
    return React.createElement(
      "section",
      { className: t },
      React.createElement(
        "div",
        { className: "sf-wrap sf-split sf-contact" },
        React.createElement(
          "div",
          { className: "sf-stack" },
          e.eyebrow &&
            React.createElement(B, {
              k: "eyebrow",
              as: "p",
              className: "sf-eyebrow",
            }),
          React.createElement(B, {
            k: "heading",
            as: "h2",
            className: "sf-h2",
          }),
          e.intro &&
            React.createElement(B, {
              k: "intro",
              as: "p",
              className: "sf-lead",
              multiline: !0,
            }),
          React.createElement(
            "dl",
            { className: "sf-cdl" },
            React.createElement(
              "div",
              null,
              React.createElement("dt", null, "Address"),
              React.createElement(
                "dd",
                null,
                React.createElement(B, { k: "address", multiline: !0 }),
              ),
            ),
            React.createElement(
              "div",
              null,
              React.createElement("dt", null, "Phone"),
              React.createElement(
                "dd",
                null,
                React.createElement(
                  we,
                  { to: { type: "phone", phone: i(e.phone) } },
                  React.createElement(B, { k: "phone" }),
                ),
              ),
            ),
            React.createElement(
              "div",
              null,
              React.createElement("dt", null, "Email"),
              React.createElement(
                "dd",
                null,
                React.createElement(
                  we,
                  { to: { type: "email", email: e.email } },
                  React.createElement(B, { k: "email" }),
                ),
              ),
            ),
            e.hours &&
              e.hours.length > 0 &&
              React.createElement(
                "div",
                null,
                React.createElement("dt", null, "Hours"),
                React.createElement(
                  "dd",
                  null,
                  e.hours.map((r, o) =>
                    React.createElement(
                      "span",
                      { key: o, className: "sf-hours" },
                      React.createElement(B, { k: ["hours", o, "days"] }),
                      React.createElement(B, {
                        k: ["hours", o, "time"],
                        className: "sf-muted",
                      }),
                    ),
                  ),
                ),
              ),
          ),
          React.createElement(
            "div",
            { className: "sf-btns" },
            e.whatsapp &&
              React.createElement(
                we,
                {
                  to: {
                    type: "whatsapp",
                    phone: i(e.whatsapp),
                    message: e.waMessage || "",
                  },
                  className: "sf-btn",
                },
                "WhatsApp us",
              ),
            React.createElement(
              we,
              {
                to: { type: "phone", phone: i(e.phone) },
                className: "sf-btn ghost",
              },
              "Call ",
              e.phone,
            ),
          ),
        ),
        React.createElement(
          "div",
          { className: "sf-stack" },
          e.showMap &&
            React.createElement(
              "div",
              { className: "sf-img sf-map" },
              React.createElement(Qe, { name: "map", label: "Map" }),
            ),
          e.showForm &&
            React.createElement(
              "form",
              {
                className: "sf-form",
                onSubmit: (r) => {
                  (r.preventDefault(), a.mode === "preview" && n(!0));
                },
              },
              s
                ? React.createElement(
                    "p",
                    { className: "sf-sent" },
                    "Thanks! We\u2019ll call you back within a working day.",
                  )
                : React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                      "label",
                      null,
                      "Your name",
                      React.createElement("input", {
                        placeholder: "Priya Sharma",
                      }),
                    ),
                    React.createElement(
                      "label",
                      null,
                      "Phone",
                      React.createElement("input", {
                        placeholder: "+91 98xxx xxxxx",
                      }),
                    ),
                    React.createElement(
                      "label",
                      null,
                      "Message",
                      React.createElement("textarea", {
                        rows: "3",
                        placeholder: e.formHint || "How can we help?",
                      }),
                    ),
                    React.createElement(
                      "button",
                      { type: "submit", className: "sf-btn" },
                      e.formButton || "Send message",
                    ),
                  ),
            ),
        ),
      ),
    );
  }
  function ei({ v: e, cls: t }) {
    return React.createElement(
      "section",
      { className: t },
      React.createElement(
        "div",
        { className: "sf-wrap sf-cta" },
        React.createElement(
          "div",
          { className: "sf-stack" },
          React.createElement(B, {
            k: "heading",
            as: "h2",
            className: "sf-h2",
          }),
          e.text &&
            React.createElement(B, {
              k: "text",
              as: "p",
              className: "sf-lead",
              multiline: !0,
            }),
        ),
        React.createElement(
          "div",
          { className: "sf-btns" },
          React.createElement(De, { k: "primary" }),
          React.createElement(De, {
            k: "secondary",
            className: "sf-btn ghost",
          }),
        ),
      ),
    );
  }
  var En = {
    instagram: "Instagram",
    facebook: "Facebook",
    youtube: "YouTube",
    linkedin: "LinkedIn",
    x: "X",
    google: "Google reviews",
  };
  function ti({ v: e, cls: t }) {
    let a = be(),
      s = (a.site && a.site.nav && a.site.nav.footer) || [];
    return React.createElement(
      "footer",
      { className: x(t, "sf-foot") },
      React.createElement(
        "div",
        { className: "sf-wrap sf-foot-grid" },
        React.createElement(
          "div",
          { className: "sf-stack sf-foot-brand" },
          React.createElement(B, { k: "logo", as: "p", className: "sf-logo" }),
          React.createElement(B, {
            k: "tagline",
            as: "p",
            className: "sf-body",
            multiline: !0,
          }),
        ),
        React.createElement(
          "div",
          null,
          React.createElement("p", { className: "sf-foot-h" }, "Visit"),
          React.createElement(B, {
            k: "address",
            as: "p",
            className: "sf-body",
            multiline: !0,
          }),
          React.createElement(
            "p",
            { className: "sf-body" },
            React.createElement(B, { k: "phone" }),
            React.createElement("br", null),
            React.createElement(B, { k: "email" }),
          ),
        ),
        React.createElement(
          "div",
          null,
          React.createElement("p", { className: "sf-foot-h" }, "Explore"),
          React.createElement(Mt, { items: s, className: "sf-foot-nav" }),
        ),
        React.createElement(
          "div",
          null,
          React.createElement("p", { className: "sf-foot-h" }, "Follow"),
          React.createElement(
            "ul",
            { className: "sf-foot-nav" },
            (e.socials || []).map((n, i) =>
              React.createElement(
                "li",
                { key: i },
                React.createElement(
                  we,
                  {
                    to: { type: "url", url: n.url },
                    className: "sf-navlink",
                    newTab: !0,
                  },
                  En[n.network] || n.network,
                ),
              ),
            ),
          ),
        ),
      ),
      React.createElement(
        "div",
        { className: "sf-wrap sf-foot-base" },
        React.createElement(B, { k: "copyright" }),
        e.showCredit &&
          React.createElement(
            "span",
            { className: "sf-muted" },
            "Made with selfsite",
          ),
      ),
    );
  }
  function ai({ v: e, cls: t }) {
    let a = be(),
      s = (a.site && a.site.nav && a.site.nav.footer) || [];
    return React.createElement(
      "footer",
      { className: x(t, "sf-foot sf-foot-s") },
      React.createElement(
        "div",
        { className: "sf-wrap sf-foot-s-row" },
        React.createElement(B, { k: "logo", as: "p", className: "sf-logo" }),
        React.createElement(Mt, { items: s, className: "sf-foot-inline" }),
      ),
      React.createElement(
        "div",
        { className: "sf-wrap sf-foot-base" },
        React.createElement(B, { k: "copyright" }),
        e.showCredit &&
          React.createElement(
            "span",
            { className: "sf-muted" },
            "Made with selfsite",
          ),
      ),
    );
  }
  function ni({ v: e, cls: t }) {
    return React.createElement(
      "section",
      { className: t },
      React.createElement(
        "div",
        { className: x("sf-wrap", e.width !== "wide" && "sf-narrow") },
        e.heading &&
          React.createElement(B, {
            k: "heading",
            as: "h2",
            className: "sf-h2 sf-rt-h",
          }),
        React.createElement("div", {
          className: "sf-rich sf-body sf-rt",
          dangerouslySetInnerHTML: { __html: e.body || "" },
        }),
      ),
    );
  }
  function Dn(e) {
    let t = be();
    if (t.entry) return t.entry;
    let a = t.site && t.site.collections && t.site.collections[e];
    return (a && a.entries[0]) || null;
  }
  function si({ v: e, cls: t }) {
    let a = be(),
      s = (a.page && a.page.collectionId) || e.collection || "services",
      n = Dn(s),
      i = a.site && a.site.collections && a.site.collections[s],
      r =
        a.site && a.page && a.site.pages.find((d) => d.id === a.page.parentId);
    if (!n)
      return React.createElement(
        "section",
        { className: t },
        React.createElement(
          "div",
          { className: "sf-wrap" },
          React.createElement(
            "p",
            { className: "sf-empty" },
            "This template shows one entry at a time. Add an entry to see it here.",
          ),
        ),
      );
    let o =
      s === "blog"
        ? [An(n.date), n.author].filter(Boolean)
        : [n.price, n.duration].filter(Boolean);
    return React.createElement(
      "section",
      { className: t },
      React.createElement(
        "div",
        { className: "sf-wrap sf-split sf-entry" },
        React.createElement(
          "div",
          { className: "sf-stack" },
          React.createElement(
            "p",
            { className: "sf-crumbs" },
            r
              ? React.createElement(
                  we,
                  { to: { type: "page", pageId: r.id } },
                  r.title,
                )
              : React.createElement("span", null, i ? i.name : ""),
            React.createElement("span", { "aria-hidden": "true" }, " / "),
            React.createElement("span", null, n.title),
          ),
          React.createElement("h1", { className: "sf-h1" }, n.title),
          React.createElement(
            "p",
            { className: "sf-lead" },
            n.summary || n.excerpt,
          ),
          e.showMeta &&
            o.length > 0 &&
            React.createElement(
              "p",
              { className: "sf-entry-meta" },
              o.map((d, c) => React.createElement("span", { key: c }, d)),
            ),
          React.createElement(
            "div",
            { className: "sf-btns" },
            React.createElement(De, { k: "button" }),
          ),
        ),
        e.showImage &&
          React.createElement(Ye, { id: n.image, className: "sf-split-img" }),
      ),
    );
  }
  function ii({ v: e, cls: t }) {
    let a = be(),
      s = (a.page && a.page.collectionId) || "services",
      n = Dn(s);
    return React.createElement(
      "section",
      { className: t },
      React.createElement(
        "div",
        { className: "sf-wrap sf-narrow" },
        React.createElement("div", {
          className: "sf-rich sf-body sf-rt",
          dangerouslySetInnerHTML: {
            __html:
              (n && n.body) ||
              "<p>Write the details for this entry in Collections.</p>",
          },
        }),
        e.showBack &&
          a.page &&
          React.createElement(
            "p",
            { className: "sf-back" },
            React.createElement(
              we,
              {
                to: { type: "page", pageId: a.page.parentId },
                className: "sf-link",
              },
              "\u2190 ",
              React.createElement(B, { k: "backLabel" }),
            ),
          ),
      ),
    );
  }
  var Ce = (e, t, a = !1) => ({ label: e, to: t, newTab: a }),
    Ee = (e, t) =>
      t
        ? { type: "anchor", pageId: e, anchor: t }
        : { type: "page", pageId: e },
    Rt = [
      ["header", "Header"],
      ["hero", "Hero"],
      ["about", "About"],
      ["features", "Features"],
      ["gallery", "Gallery"],
      ["testimonials", "Testimonials"],
      ["pricing", "Pricing table"],
      ["faq", "FAQ"],
      ["news", "News"],
      ["contact", "Contact"],
      ["cta", "Call to action"],
      ["footer", "Footer"],
    ],
    ze = Object.fromEntries(Rt),
    I = (e, t, a, s) => ({ key: e, type: "text", label: t, max: a, ...s }),
    ce = (e, t, a, s) => ({ key: e, type: "textarea", label: t, max: a, ...s }),
    _t = [
      {
        id: "header-classic",
        category: "header",
        title: "Classic header",
        description:
          "Logo on the left, menu and a button on the right. Collapses to a menu button on phones.",
        tags: ["minimal"],
        Component: Hs,
        fields: [
          I("logo", "Business name", 40),
          { key: "showButton", type: "toggle", label: "Show a button" },
          { key: "button", type: "link", label: "Button", when: "showButton" },
        ],
        defaults: {
          logo: "Your business",
          showButton: !0,
          button: Ce("Book now", Ee("@home", "contact")),
        },
      },
      {
        id: "header-centered",
        category: "header",
        title: "Centred header",
        description:
          "A large centred name with the menu underneath and an optional info strip on top.",
        tags: ["editorial"],
        Component: Os,
        fields: [
          I("logo", "Business name", 40),
          { key: "showTopline", type: "toggle", label: "Show info strip" },
          I("topline", "Info strip", 90, { when: "showTopline" }),
        ],
        defaults: {
          logo: "Your business",
          showTopline: !0,
          topline: "Open today 9 am \u2013 9 pm \xB7 +91 98450 00000",
        },
      },
      {
        id: "hero-split",
        category: "hero",
        title: "Split hero",
        description: "Headline, short intro and two buttons beside a photo.",
        tags: ["minimal"],
        Component: Rs,
        fields: [
          I("eyebrow", "Small label", 40),
          I("heading", "Heading", 70),
          ce("body", "Intro", 220),
          { key: "primary", type: "link", label: "Main button" },
          { key: "secondary", type: "link", label: "Second button" },
          { key: "image", type: "image", label: "Photo" },
          { key: "showBadge", type: "toggle", label: "Show rating line" },
          I("badge", "Rating line", 60, { when: "showBadge" }),
        ],
        defaults: {
          eyebrow: "Since 2012",
          heading: "A short line that says what you do",
          body: "One or two sentences for the people you serve: what you offer, where you are, and why they should pick you.",
          primary: Ce("Book a visit", Ee("@home", "contact")),
          secondary: Ce("Call us", { type: "phone", phone: "+919845000000" }),
          image: "m_clinic",
          showBadge: !0,
          badge: "4.8 on Google \xB7 600+ reviews",
        },
      },
      {
        id: "hero-bigtype",
        category: "hero",
        title: "Big-type hero",
        description:
          "An oversized headline that fills the width, with a wide photo underneath.",
        tags: ["big-type", "editorial"],
        Component: _s,
        fields: [
          I("eyebrow", "Small label", 40),
          ce("heading", "Heading", 60),
          ce("body", "Intro", 200),
          { key: "primary", type: "link", label: "Button" },
          { key: "showImage", type: "toggle", label: "Show wide photo" },
          { key: "image", type: "image", label: "Photo", when: "showImage" },
        ],
        defaults: {
          eyebrow: "Studio",
          heading: "Spaces that age well.",
          body: "A short paragraph about your work and who it is for.",
          primary: Ce("See our work", Ee("@home")),
          showImage: !0,
          image: "m_facade",
        },
      },
      {
        id: "hero-slides",
        category: "hero",
        title: "Slideshow hero",
        description:
          "Full-width photos that change every few seconds, with text on top.",
        tags: ["dark"],
        Component: Ws,
        fields: [
          {
            key: "slides",
            type: "list",
            label: "Slides",
            itemLabel: "heading",
            max: 6,
            item: [
              { key: "image", type: "image", label: "Photo" },
              I("heading", "Heading", 60),
              ce("caption", "Caption", 140),
            ],
            newItem: { image: "m_cafe", heading: "New slide", caption: "" },
          },
          { key: "button", type: "link", label: "Button" },
          {
            key: "autoplay",
            type: "toggle",
            label: "Change slides automatically",
          },
        ],
        defaults: {
          slides: [
            {
              image: "m_cafe",
              heading: "Your best photo goes here",
              caption: "A caption that adds one useful detail.",
            },
            {
              image: "m_coffee",
              heading: "A second slide",
              caption: "Up to six slides.",
            },
          ],
          button: Ce("Visit us", Ee("@home", "contact")),
          autoplay: !0,
        },
      },
      {
        id: "about-story",
        category: "about",
        title: "Story with photo",
        description:
          "A photo beside your story, with up to four numbers that build trust.",
        tags: [],
        Component: qs,
        fields: [
          I("eyebrow", "Small label", 40),
          I("heading", "Heading", 80),
          { key: "body", type: "rich", label: "Story" },
          { key: "image", type: "image", label: "Photo" },
          {
            key: "imageSide",
            type: "select",
            label: "Photo side",
            options: [
              ["left", "Left"],
              ["right", "Right"],
            ],
          },
          {
            key: "stats",
            type: "list",
            label: "Numbers",
            itemLabel: "label",
            max: 4,
            item: [I("value", "Number", 12), I("label", "Label", 40)],
            newItem: { value: "10+", label: "Years" },
          },
        ],
        defaults: {
          eyebrow: "About us",
          heading: "How we started",
          body: "<p>Tell people how you started and what you care about. Two short paragraphs work best.</p>",
          image: "m_team",
          imageSide: "left",
          stats: [
            { value: "12", label: "Years in business" },
            { value: "4,000+", label: "Happy customers" },
          ],
        },
      },
      {
        id: "rich-text",
        category: "about",
        title: "Text",
        description:
          "A heading and formatted text. Good for policies, notes and longer stories.",
        tags: ["minimal"],
        Component: ni,
        fields: [
          I("heading", "Heading", 80),
          { key: "body", type: "rich", label: "Text" },
          {
            key: "width",
            type: "select",
            label: "Width",
            options: [
              ["narrow", "Narrow"],
              ["wide", "Wide"],
            ],
          },
        ],
        defaults: {
          heading: "A heading",
          body: "<p>Write anything here. Use bold, lists and links from the toolbar.</p>",
          width: "narrow",
        },
      },
      {
        id: "features-grid",
        category: "features",
        title: "Feature grid",
        description:
          "Short points with an icon each, in two, three or four columns.",
        tags: ["minimal"],
        Component: Gs,
        fields: [
          I("eyebrow", "Small label", 40),
          I("heading", "Heading", 80),
          ce("intro", "Intro", 200),
          {
            key: "columns",
            type: "select",
            label: "Columns",
            options: [
              ["2", "2"],
              ["3", "3"],
              ["4", "4"],
            ],
          },
          { key: "cards", type: "toggle", label: "Show as cards" },
          {
            key: "items",
            type: "list",
            label: "Points",
            itemLabel: "title",
            max: 12,
            item: [
              { key: "icon", type: "icon", label: "Icon" },
              I("title", "Title", 50),
              ce("text", "Text", 160),
            ],
            newItem: {
              icon: "sparkle",
              title: "New point",
              text: "One sentence about it.",
            },
          },
        ],
        defaults: {
          eyebrow: "Why us",
          heading: "Three reasons people come back",
          intro: "",
          columns: "3",
          cards: !0,
          items: [
            {
              icon: "clock",
              title: "On time",
              text: "We respect your schedule.",
            },
            { icon: "shield", title: "Safe", text: "Hygiene you can see." },
            {
              icon: "heart",
              title: "Caring",
              text: "We explain before we start.",
            },
          ],
        },
      },
      {
        id: "collection-list",
        category: "features",
        title: "Collection cards",
        description:
          "Cards filled from a collection, such as your services or blog posts. Each card opens its detail page.",
        tags: [],
        Component: js,
        fields: [
          I("eyebrow", "Small label", 40),
          I("heading", "Heading", 80),
          ce("intro", "Intro", 200),
          { key: "collection", type: "collection", label: "Show entries from" },
          { key: "limit", type: "number", label: "How many", min: 1, max: 12 },
          {
            key: "columns",
            type: "select",
            label: "Columns",
            options: [
              ["2", "2"],
              ["3", "3"],
            ],
          },
          { key: "showPrice", type: "toggle", label: "Show prices" },
          I("moreLabel", "Card link text", 24),
          { key: "button", type: "link", label: "\u201CView all\u201D link" },
        ],
        defaults: {
          eyebrow: "Services",
          heading: "What we offer",
          intro: "",
          collection: "services",
          limit: 6,
          columns: "3",
          showPrice: !0,
          moreLabel: "Learn more",
          button: Ce("", Ee("@home")),
        },
      },
      {
        id: "gallery-grid",
        category: "gallery",
        title: "Photo gallery",
        description: "A grid or mosaic of photos with optional captions.",
        tags: ["minimal"],
        Component: Vs,
        fields: [
          I("eyebrow", "Small label", 40),
          I("heading", "Heading", 80),
          {
            key: "layout",
            type: "select",
            label: "Layout",
            options: [
              ["grid", "Grid"],
              ["mosaic", "Mosaic"],
            ],
          },
          {
            key: "columns",
            type: "select",
            label: "Columns",
            options: [
              ["2", "2"],
              ["3", "3"],
              ["4", "4"],
            ],
          },
          { key: "showCaptions", type: "toggle", label: "Show captions" },
          {
            key: "items",
            type: "list",
            label: "Photos",
            itemLabel: "caption",
            max: 24,
            item: [
              { key: "image", type: "image", label: "Photo" },
              I("caption", "Caption", 80),
            ],
            newItem: { image: "m_cafe", caption: "" },
          },
        ],
        defaults: {
          eyebrow: "Gallery",
          heading: "A look inside",
          layout: "mosaic",
          columns: "3",
          showCaptions: !0,
          items: [
            { image: "m_cafe", caption: "Front room" },
            { image: "m_coffee", caption: "" },
            { image: "m_filter", caption: "" },
            { image: "m_thali", caption: "" },
          ],
        },
      },
      {
        id: "testimonials-cards",
        category: "testimonials",
        title: "Review cards",
        description: "Three or more short reviews with names and photos.",
        tags: [],
        Component: Ks,
        fields: [
          I("eyebrow", "Small label", 40),
          I("heading", "Heading", 80),
          { key: "showStars", type: "toggle", label: "Show stars" },
          {
            key: "items",
            type: "list",
            label: "Reviews",
            itemLabel: "name",
            max: 9,
            item: [
              ce("quote", "Review", 280),
              I("name", "Name", 40),
              I("detail", "Detail", 50),
              { key: "photo", type: "image", label: "Photo" },
            ],
            newItem: {
              quote: "A new review.",
              name: "Customer name",
              detail: "City",
              photo: "m_p1",
            },
          },
        ],
        defaults: {
          eyebrow: "Reviews",
          heading: "What people say",
          showStars: !0,
          items: [
            {
              quote: "Lovely experience from start to finish.",
              name: "Anita R.",
              detail: "Bengaluru",
              photo: "m_p1",
            },
            {
              quote: "Clear prices and no surprises.",
              name: "Vikram S.",
              detail: "Pune",
              photo: "m_p2",
            },
            {
              quote: "We recommend them to everyone.",
              name: "Fatima K.",
              detail: "Chennai",
              photo: "m_p3",
            },
          ],
        },
      },
      {
        id: "testimonials-quote",
        category: "testimonials",
        title: "Large quote",
        description:
          "One review set large, for a strong personal recommendation.",
        tags: ["big-type", "editorial", "dark"],
        defaultTone: "dark",
        Component: Us,
        fields: [
          ce("quote", "Quote", 260),
          I("name", "Name", 40),
          I("detail", "Detail", 60),
          { key: "photo", type: "image", label: "Photo" },
        ],
        defaults: {
          quote:
            "They listened first, then designed. Two years on, the house still feels exactly right.",
          name: "Rohan & Meghna Desai",
          detail: "Residence, Bopal",
          photo: "m_p2",
        },
      },
      {
        id: "pricing-list",
        category: "pricing",
        title: "Price list",
        description:
          "A menu-style list with names, short descriptions and prices in \u20B9.",
        tags: ["minimal"],
        Component: Js,
        fields: [
          I("eyebrow", "Small label", 40),
          I("heading", "Heading", 80),
          ce("intro", "Intro", 200),
          {
            key: "columns",
            type: "select",
            label: "Columns",
            options: [
              ["1", "1"],
              ["2", "2"],
            ],
          },
          {
            key: "items",
            type: "list",
            label: "Items",
            itemLabel: "name",
            max: 40,
            item: [
              I("name", "Name", 50),
              ce("description", "Description", 120),
              I("price", "Price", 20),
              I("tag", "Tag", 16),
            ],
            newItem: {
              name: "New item",
              description: "",
              price: "\u20B90",
              tag: "",
            },
          },
          { key: "showNote", type: "toggle", label: "Show a note" },
          I("note", "Note", 120, { when: "showNote" }),
        ],
        defaults: {
          eyebrow: "Menu",
          heading: "Prices",
          intro: "",
          columns: "2",
          items: [
            {
              name: "Filter coffee",
              description: "Chicory blend, brass dabara",
              price: "\u20B960",
              tag: "Bestseller",
            },
            {
              name: "Cold brew",
              description: "16-hour steep",
              price: "\u20B9180",
              tag: "",
            },
          ],
          showNote: !0,
          note: "All prices include GST.",
        },
      },
      {
        id: "pricing-packages",
        category: "pricing",
        title: "Package cards",
        description:
          "Two or three packages side by side, with one highlighted.",
        tags: [],
        Component: Qs,
        fields: [
          I("eyebrow", "Small label", 40),
          I("heading", "Heading", 80),
          ce("intro", "Intro", 200),
          I("flag", "Highlight label", 24),
          {
            key: "items",
            type: "list",
            label: "Packages",
            itemLabel: "name",
            max: 3,
            item: [
              I("name", "Name", 40),
              I("price", "Price", 20),
              I("period", "Price note", 30),
              ce("features", "What\u2019s included (one per line)", 400),
              { key: "highlight", type: "toggle", label: "Highlight" },
              { key: "button", type: "link", label: "Button" },
            ],
            newItem: {
              name: "New package",
              price: "\u20B90",
              period: "",
              features: "First item",
              highlight: !1,
              button: Ce("Enquire", Ee("@home", "contact")),
            },
          },
        ],
        defaults: {
          eyebrow: "Packages",
          heading: "Pick what suits you",
          intro: "",
          flag: "Most chosen",
          items: [
            {
              name: "Basic",
              price: "\u20B94,999",
              period: "one time",
              features: `Item one
Item two`,
              highlight: !1,
              button: Ce("Enquire", Ee("@home", "contact")),
            },
            {
              name: "Complete",
              price: "\u20B99,999",
              period: "one time",
              features: `Everything in Basic
Item three`,
              highlight: !0,
              button: Ce("Enquire", Ee("@home", "contact")),
            },
          ],
        },
      },
      {
        id: "faq-accordion",
        category: "faq",
        title: "FAQ accordion",
        description: "Questions that open to show their answers.",
        tags: ["minimal"],
        Component: Ys,
        fields: [
          I("eyebrow", "Small label", 40),
          I("heading", "Heading", 80),
          ce("intro", "Intro", 200),
          { key: "openFirst", type: "toggle", label: "Open the first answer" },
          {
            key: "items",
            type: "list",
            label: "Questions",
            itemLabel: "q",
            max: 20,
            item: [I("q", "Question", 120), ce("a", "Answer", 500)],
            newItem: { q: "A new question?", a: "The answer." },
          },
        ],
        defaults: {
          eyebrow: "FAQ",
          heading: "Questions people ask",
          intro: "",
          openFirst: !0,
          items: [
            {
              q: "Do I need an appointment?",
              a: "Walk-ins are welcome, but booking saves you the wait.",
            },
            {
              q: "Is there parking?",
              a: "Yes, free parking for two-wheelers and cars.",
            },
          ],
        },
      },
      {
        id: "news-latest",
        category: "news",
        title: "Latest posts",
        description:
          "Your newest blog posts, filled in automatically from the Blog collection.",
        tags: ["editorial"],
        Component: Zs,
        fields: [
          I("eyebrow", "Small label", 40),
          I("heading", "Heading", 80),
          { key: "count", type: "number", label: "How many", min: 1, max: 9 },
          { key: "showDates", type: "toggle", label: "Show date and author" },
          { key: "button", type: "link", label: "\u201CAll posts\u201D link" },
        ],
        defaults: {
          eyebrow: "Journal",
          heading: "From the blog",
          count: 3,
          showDates: !0,
          button: Ce("All posts", Ee("@home")),
        },
      },
      {
        id: "contact-split",
        category: "contact",
        title: "Contact details",
        description:
          "Address, phone, WhatsApp, hours and an enquiry form, with a map.",
        tags: [],
        Component: Xs,
        anchor: "contact",
        fields: [
          I("eyebrow", "Small label", 40),
          I("heading", "Heading", 80),
          ce("intro", "Intro", 200),
          ce("address", "Address", 160),
          I("phone", "Phone", 20, { input: "tel" }),
          I("whatsapp", "WhatsApp number", 20, { input: "tel" }),
          I("waMessage", "WhatsApp opening message", 80),
          I("email", "Email", 60, { input: "email" }),
          {
            key: "hours",
            type: "list",
            label: "Opening hours",
            itemLabel: "days",
            max: 7,
            item: [I("days", "Days", 30), I("time", "Time", 30)],
            newItem: { days: "Sunday", time: "Closed" },
          },
          { key: "showMap", type: "toggle", label: "Show map" },
          { key: "showForm", type: "toggle", label: "Show enquiry form" },
          I("formButton", "Form button text", 24, { when: "showForm" }),
        ],
        defaults: {
          eyebrow: "Visit",
          heading: "Come and see us",
          intro: "",
          address: `12, 4th Cross, Indiranagar
Bengaluru 560038`,
          phone: "+91 98450 00000",
          whatsapp: "+91 98450 00000",
          waMessage: "Hi! I found you on your website.",
          email: "hello@yourbusiness.in",
          hours: [{ days: "Mon \u2013 Sat", time: "9 am \u2013 9 pm" }],
          showMap: !0,
          showForm: !0,
          formButton: "Send message",
        },
      },
      {
        id: "cta-banner",
        category: "cta",
        title: "Call-to-action band",
        description: "A short push to book or call, on a dark band.",
        tags: ["dark"],
        defaultTone: "dark",
        Component: ei,
        fields: [
          I("heading", "Heading", 80),
          ce("text", "Text", 160),
          { key: "primary", type: "link", label: "Main button" },
          { key: "secondary", type: "link", label: "Second button" },
        ],
        defaults: {
          heading: "Ready when you are",
          text: "Most visits can be booked for the same week.",
          primary: Ce("Book now", Ee("@home", "contact")),
          secondary: Ce("", Ee("@home")),
        },
      },
      {
        id: "footer-columns",
        category: "footer",
        title: "Footer with columns",
        description:
          "Name, address, the footer menu and social links in four columns.",
        tags: [],
        Component: ti,
        fields: [
          I("logo", "Business name", 40),
          ce("tagline", "Short description", 140),
          ce("address", "Address", 160),
          I("phone", "Phone", 20),
          I("email", "Email", 60),
          {
            key: "socials",
            type: "list",
            label: "Social links",
            itemLabel: "network",
            max: 6,
            item: [
              {
                key: "network",
                type: "select",
                label: "Network",
                options: Object.entries(En),
              },
              I("url", "Address", 120),
            ],
            newItem: { network: "instagram", url: "https://instagram.com/" },
          },
          I("copyright", "Copyright line", 80),
          {
            key: "showCredit",
            type: "toggle",
            label: "Show \u201CMade with selfsite\u201D",
          },
        ],
        defaults: {
          logo: "Your business",
          tagline: "One line about you.",
          address: "Your address",
          phone: "+91 98450 00000",
          email: "hello@yourbusiness.in",
          socials: [{ network: "instagram", url: "https://instagram.com/" }],
          copyright: "\xA9 2026 Your business",
          showCredit: !0,
        },
      },
      {
        id: "footer-simple",
        category: "footer",
        title: "Simple footer",
        description: "Name, the footer menu in one line, and a copyright line.",
        tags: ["minimal"],
        Component: ai,
        fields: [
          I("logo", "Business name", 40),
          I("copyright", "Copyright line", 80),
          {
            key: "showCredit",
            type: "toggle",
            label: "Show \u201CMade with selfsite\u201D",
          },
        ],
        defaults: {
          logo: "Your business",
          copyright: "\xA9 2026 Your business",
          showCredit: !0,
        },
      },
      {
        id: "entry-hero",
        category: "hero",
        title: "Entry header",
        description:
          "For detail pages: shows the entry\u2019s title, summary, price or date, and photo.",
        tags: ["collection"],
        collectionOnly: !0,
        Component: si,
        fields: [
          { key: "showImage", type: "toggle", label: "Show photo" },
          { key: "showMeta", type: "toggle", label: "Show price / date line" },
          { key: "button", type: "link", label: "Button" },
        ],
        defaults: {
          showImage: !0,
          showMeta: !0,
          button: Ce("Book an appointment", Ee("@home", "contact")),
        },
      },
      {
        id: "entry-body",
        category: "about",
        title: "Entry content",
        description: "For detail pages: the entry\u2019s full text.",
        tags: ["collection"],
        collectionOnly: !0,
        Component: ii,
        fields: [
          { key: "showBack", type: "toggle", label: "Show a back link" },
          I("backLabel", "Back link text", 40, { when: "showBack" }),
        ],
        defaults: { showBack: !0, backLabel: "All entries" },
      },
    ],
    ne = Object.fromEntries(_t.map((e) => [e.id, e])),
    da = `
.sf-site{container:site/inline-size;background:var(--sf-bg);color:var(--sf-fg);font-family:var(--sf-font-body);font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased;text-align:left;min-height:100%}
:where(.sf-site) *,:where(.sf-site) *::before,:where(.sf-site) *::after{box-sizing:border-box}
:where(.sf-site) :where(h1,h2,h3,p,ul,ol,dl,dd,figure,blockquote){margin:0}
:where(.sf-site) ul{padding:0;list-style:none}
:where(.sf-site) a{color:inherit;text-decoration:none}
:where(.sf-site) button{font:inherit;color:inherit}
.sf-sec{--sf-fg2:color-mix(in oklab,var(--sf-fg) 70%,var(--sf-bg));background:var(--sf-bg);color:var(--sf-fg);padding-block:var(--sf-space-sm);position:relative}
.sf-sec.tone-muted{--sf-bg:var(--sf-muted)}
.sf-sec.tone-dark{--sf-bg:var(--sf-dk-bg);--sf-fg:var(--sf-dk-fg);--sf-muted:var(--sf-dk-muted);--sf-border:var(--sf-dk-border);--sf-primary:var(--sf-dk-primary);--sf-on-primary:var(--sf-dk-on-primary)}
@container site (min-width:760px){.sf-sec{padding-block:var(--sf-space)}}
.sf-wrap{width:100%;max-width:var(--sf-width);margin-inline:auto;padding-inline:20px}
@container site (min-width:760px){.sf-wrap{padding-inline:40px}}
.sf-narrow{max-width:min(var(--sf-width),760px)}
.sf-stack{display:flex;flex-direction:column;gap:18px;min-width:0}
.sf-h1,.sf-h2,.sf-h3,.sf-logo{font-family:var(--sf-font-display);font-weight:var(--sf-dw);letter-spacing:var(--sf-dt)}
.sf-h1{font-size:clamp(36px,6.2cqi,78px);line-height:1.04;text-wrap:balance}
.sf-mega{font-size:clamp(50px,11.5cqi,176px);line-height:.93;white-space:pre-line}
.sf-h2{font-size:clamp(28px,3.9cqi,48px);line-height:1.1;text-wrap:balance}
.sf-h3{font-size:clamp(18px,1.7cqi,22px);line-height:1.3}
.sf-eyebrow{font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;font-weight:600;color:var(--sf-primary)}
.tone-dark .sf-eyebrow{color:var(--sf-accent)}
.sf-lead{font-size:clamp(16px,1.45cqi,19px);color:var(--sf-fg2);max-width:60ch;white-space:pre-line}
.sf-body{color:var(--sf-fg2);white-space:pre-line}
.sf-rich{white-space:normal}
.sf-rich p+p,.sf-rich p+ul,.sf-rich ul+p{margin-top:.85em}
.sf-rich ul,.sf-rich ol{padding-left:1.2em;list-style:disc}
.sf-rich ol{list-style:decimal}
.sf-rich li+li{margin-top:.3em}
.sf-rich a{color:var(--sf-primary);text-decoration:underline;text-underline-offset:3px}
.sf-rich strong,.sf-rich b{color:var(--sf-fg);font-weight:700}
.sf-rich h3{font-family:var(--sf-font-display);font-weight:var(--sf-dw);color:var(--sf-fg);font-size:22px;margin:1.3em 0 .4em;line-height:1.3}
.sf-rt{font-size:17px}
.sf-rt-h{margin-bottom:20px}
.sf-muted{color:var(--sf-fg2)}
.sf-small{font-size:13.5px}
.sf-btns{display:flex;flex-wrap:wrap;gap:12px;align-items:center}
.sf-btns:empty{display:none}
.sf-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:0 24px;border-radius:var(--sf-rb);background:var(--sf-primary);color:var(--sf-on-primary);font-weight:600;font-size:15.5px;border:1px solid var(--sf-primary);font-family:var(--sf-font-body);line-height:1.2;cursor:pointer;transition:filter .15s}
.sf-btn:hover{filter:brightness(1.07)}
.sf-btn.ghost{background:transparent;color:var(--sf-fg);border-color:color-mix(in oklab,var(--sf-fg) 26%,transparent)}
.sf-btn-sm{min-height:40px;padding:0 18px;font-size:14.5px}
.sf-link{color:var(--sf-fg);font-weight:600;text-decoration:underline;text-underline-offset:5px;text-decoration-thickness:1px;white-space:nowrap}
.sf-img{position:relative;overflow:hidden;background:var(--sf-muted);border-radius:var(--sf-radius);aspect-ratio:4/3;max-width:100%}
.sf-img>svg,.sf-img>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
.sf-img-empty{display:grid;place-items:center;color:var(--sf-fg2);font-size:13px;border:1px dashed var(--sf-border);background:var(--sf-muted)}
.sf-fill{position:absolute;inset:0;border-radius:0;aspect-ratio:auto}
.sf-ed{outline:none;border-radius:2px;cursor:text;transition:box-shadow .12s}.sf-ed:hover{box-shadow:0 0 0 1px color-mix(in oklab,var(--ed-accent,#3E63DD) 70%,transparent)}
.sf-ed:focus{box-shadow:0 0 0 2px var(--ed-accent,#3E63DD)}
.sf-ed:empty::before{content:attr(data-ph);opacity:.45}
.sf-badge{display:flex;align-items:center;gap:10px;font-size:14px;color:var(--sf-fg2)}
.sf-stars{color:var(--sf-accent);letter-spacing:2px;font-size:15px}
.sf-draft{display:inline-block;margin-left:8px;font:600 11px/1 var(--sf-font-body);padding:4px 6px;border-radius:4px;background:var(--sf-highlight);color:var(--sf-fg);vertical-align:middle;letter-spacing:0}
.sf-empty{padding:28px;border:1px dashed var(--sf-border);border-radius:var(--sf-radius);color:var(--sf-fg2);text-align:center;font-size:15px}

/* header */
.sf-hdr{padding-block:0;border-bottom:1px solid var(--sf-border);position:relative;z-index:2}
.sf-hdr-row{display:flex;align-items:center;gap:24px;min-height:68px}
.sf-logo{font-size:21px;line-height:1.1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
.sf-logo-lg{font-size:clamp(26px,3.2cqi,40px);text-align:center}
.sf-nav{display:none;gap:28px;margin-left:auto;align-items:center}
.sf-nav>li{position:relative}
.sf-navlink{font-size:15px;color:var(--sf-fg2);transition:color .15s;display:inline-block;padding-block:6px}
.sf-navlink:hover,.sf-navlink.is-current{color:var(--sf-fg)}
.sf-navlink.is-current{text-decoration:underline;text-underline-offset:8px;text-decoration-thickness:1.5px;text-decoration-color:var(--sf-primary)}
.sf-sub{display:none;position:absolute;top:100%;left:-14px;min-width:220px;background:var(--sf-bg);border:1px solid var(--sf-border);border-radius:var(--sf-radius);padding:8px 14px;box-shadow:0 12px 32px -12px color-mix(in oklab,var(--sf-fg) 30%,transparent);z-index:5}
.has-sub:hover .sf-sub{display:block}
.sf-sub .sf-navlink{display:block;padding-block:7px}
.sf-hdr-end{display:flex;align-items:center;gap:12px;margin-left:auto}
.sf-hdr-cta{display:none}
.sf-burger{display:inline-grid;place-items:center;width:42px;height:42px;border:1px solid var(--sf-border);border-radius:var(--sf-radius);background:transparent;cursor:pointer;color:var(--sf-fg)}
.sf-mnav{padding-block:8px 20px;display:flex;flex-direction:column;gap:14px;border-top:1px solid var(--sf-border)}
.sf-mnav-list li{border-bottom:1px solid var(--sf-border)}
.sf-mnav-list .sf-navlink{display:block;padding-block:12px;font-size:17px;color:var(--sf-fg)}
.sf-mnav-list .sf-sub{display:block;position:static;border:0;box-shadow:none;padding:0 0 8px 14px;min-width:0;background:transparent}
.sf-mnav-list .sf-sub li{border:0}
.sf-mnav-list .sf-sub .sf-navlink{font-size:15px;padding-block:6px;color:var(--sf-fg2)}
@container site (min-width:900px){.sf-nav{display:flex}.sf-hdr-end{margin-left:0}.sf-burger{display:none}.sf-hdr-cta{display:inline-flex}.sf-mnav{display:none}}
.sf-topline{background:var(--sf-muted);font-size:13px;color:var(--sf-fg2);text-align:center;padding-block:8px}
.sf-hdr-c-row{display:grid;grid-template-columns:42px 1fr 42px;align-items:center;min-height:72px;gap:12px}
.sf-hdr-c-nav{display:none}
@container site (min-width:900px){.sf-hdr-c-row{grid-template-columns:1fr;min-height:92px}.sf-hdr-c-row .sf-burger,.sf-hdr-c-spacer{display:none}.sf-hdr-c-nav{display:flex;justify-content:center;border-top:1px solid var(--sf-border)}.sf-nav-c{margin:0;gap:36px;min-height:52px}}

/* split layouts */
.sf-split{display:grid;gap:36px;align-items:center}
.sf-split-img{aspect-ratio:4/3}
@container site (min-width:900px){
  .sf-split{grid-template-columns:1.05fr .95fr;gap:64px}
  .sf-split-img{aspect-ratio:4/5}
  .sf-split-about{grid-template-columns:.9fr 1.1fr}
  .sf-split-about.img-right{grid-template-columns:1.1fr .9fr}
  .sf-split-about.img-right>.sf-img{order:2}
}
.sf-about-img{aspect-ratio:5/4}
.sf-stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;padding-top:12px;border-top:1px solid var(--sf-border);margin-top:6px}
@container site (min-width:900px){.sf-stats{grid-template-columns:repeat(4,minmax(0,1fr))}}
.sf-stats dt{font-family:var(--sf-font-display);font-weight:var(--sf-dw);font-size:clamp(26px,2.6cqi,36px);line-height:1.1}
.sf-stats dd{font-size:13.5px;color:var(--sf-fg2)}

/* big type */
.sf-big-row{display:flex;flex-direction:column;gap:20px;align-items:flex-start;padding-top:8px}
@container site (min-width:900px){.sf-big-row{flex-direction:row;justify-content:space-between;align-items:flex-end}}
.sf-big-imgwrap{margin-top:clamp(28px,5cqi,64px)}
.sf-wide-img{aspect-ratio:16/9}
@container site (min-width:900px){.sf-wide-img{aspect-ratio:21/9}}

/* slides */
.sf-slides{padding-block:0}
.sf-slides-stage{position:relative;min-height:min(560px,140cqi);display:flex;align-items:flex-end;overflow:hidden}
@container site (min-width:900px){.sf-slides-stage{min-height:640px;align-items:center}}
.sf-slide{position:absolute;inset:0;opacity:0;transition:opacity .8s}
.sf-slide.on{opacity:1}
.sf-shade{position:absolute;inset:0;background:color-mix(in oklab,var(--sf-dk-bg) 52%,transparent)}
.sf-slides-copy{position:relative;color:var(--sf-dk-fg);padding-block:48px 72px;display:flex;flex-direction:column;gap:16px}
.sf-slides-copy .sf-lead{color:color-mix(in oklab,var(--sf-dk-fg) 85%,transparent)}
.sf-slides-copy .sf-h1{max-width:16ch}
.sf-dots{position:absolute;bottom:24px;left:0;right:0;display:flex;justify-content:center;gap:8px}
.sf-dot{width:8px;height:8px;border-radius:99px;border:0;background:color-mix(in oklab,var(--sf-dk-fg) 45%,transparent);cursor:pointer;padding:0;transition:width .2s}
.sf-dot.on{width:24px;background:var(--sf-dk-fg)}

/* section heads + grids */
.sf-head{display:flex;flex-direction:column;gap:14px;margin-bottom:clamp(28px,3.6cqi,48px);max-width:720px}
.sf-head.center{text-align:center;align-items:center;margin-inline:auto}
.sf-head-row{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:12px 24px}
.sf-head-row .sf-head{flex:1 1 320px}
.sf-head-row>.sf-link{margin-bottom:clamp(28px,3.6cqi,48px)}
.sf-grid{display:grid;gap:20px;grid-template-columns:minmax(0,1fr)}
@container site (min-width:640px){.sf-grid.cols-2,.sf-grid.cols-3,.sf-grid.cols-4{grid-template-columns:repeat(2,minmax(0,1fr))}}
@container site (min-width:980px){.sf-grid.cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sf-grid.cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}
.sf-feat{display:flex;flex-direction:column;gap:12px;padding:24px;border:1px solid var(--sf-border);border-radius:var(--sf-radius);background:var(--sf-bg)}
.sf-feat.plain{border:0;padding:0;background:transparent}
.sf-feat-ic{width:44px;height:44px;border-radius:calc(var(--sf-radius) * .75);display:grid;place-items:center;background:var(--sf-highlight);color:var(--sf-primary)}
.tone-dark .sf-feat-ic{background:var(--sf-muted);color:var(--sf-accent)}
.sf-card,.sf-post{display:flex;flex-direction:column;border:1px solid var(--sf-border);border-radius:var(--sf-radius);overflow:hidden;background:var(--sf-bg);transition:border-color .15s,transform .15s}
.sf-card:hover,.sf-post:hover{border-color:color-mix(in oklab,var(--sf-fg) 30%,var(--sf-border))}
.sf-card-img{border-radius:0;aspect-ratio:16/10}
.sf-card-body{display:flex;flex-direction:column;gap:8px;padding:20px;flex:1}
.sf-card-meta{display:flex;justify-content:space-between;align-items:center;margin-top:auto;padding-top:12px;font-size:14.5px}
.sf-price{font-weight:700;color:var(--sf-fg);font-variant-numeric:tabular-nums;white-space:nowrap}
.sf-more{color:var(--sf-primary);font-weight:600}
.sf-post{border:0;background:transparent;gap:10px}
.sf-post .sf-card-img{border-radius:var(--sf-radius);margin-bottom:6px}

/* gallery */
.sf-gallery{display:grid;gap:14px;grid-template-columns:repeat(2,minmax(0,1fr))}
@container site (min-width:760px){.sf-gallery.cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sf-gallery.cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}
.sf-gallery.mosaic .sf-fig:first-child{grid-column:span 2;grid-row:span 2}
.sf-gallery.mosaic .sf-fig:first-child .sf-gal-img{aspect-ratio:auto;height:100%;min-height:220px}
.sf-fig{display:flex;flex-direction:column;gap:8px;min-width:0}
.sf-gal-img{aspect-ratio:1/1}
.sf-fig figcaption{font-size:13.5px;color:var(--sf-fg2)}

/* testimonials */
.sf-quote-card{display:flex;flex-direction:column;gap:16px;padding:26px;border-radius:var(--sf-radius);background:var(--sf-muted)}
.tone-muted .sf-quote-card{background:var(--sf-bg)}
.sf-quote-card blockquote{font-size:17px;line-height:1.55;white-space:pre-line}
.sf-quote-card figcaption,.sf-bigquote-by{display:flex;align-items:center;gap:12px;margin-top:auto;font-size:14.5px}
.sf-quote-card figcaption span,.sf-bigquote-by span{display:flex;flex-direction:column;line-height:1.35}
.sf-avatar{width:44px;height:44px;border-radius:999px;aspect-ratio:1;flex:none}
.sf-bigquote{display:flex;flex-direction:column;gap:24px;max-width:980px}
.sf-qmark{font-family:var(--sf-font-display);font-size:96px;line-height:.6;color:var(--sf-accent);height:44px}
.sf-bigquote blockquote{font-size:clamp(26px,3.6cqi,46px);line-height:1.18;white-space:pre-line}

/* pricing */
.sf-menu{display:grid;gap:4px 56px}
@container site (min-width:860px){.sf-menu.two{grid-template-columns:repeat(2,minmax(0,1fr))}}
.sf-menu li{padding-block:16px;border-bottom:1px solid var(--sf-border);display:flex;flex-direction:column;gap:4px}
.sf-menu-top{display:flex;align-items:baseline;gap:10px}
.sf-menu-top .sf-h3{font-size:18px}
.sf-dotfill{flex:1;border-bottom:1px dotted color-mix(in oklab,var(--sf-fg) 30%,transparent);transform:translateY(-4px);min-width:16px}
.sf-tag{font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:3px 7px;border-radius:4px;background:var(--sf-highlight);color:var(--sf-fg);white-space:nowrap}
.sf-tag:empty{display:none}
.sf-note{margin-top:20px;font-size:14px;color:var(--sf-fg2)}
.sf-plan{position:relative;display:flex;flex-direction:column;gap:16px;padding:28px;border:1px solid var(--sf-border);border-radius:var(--sf-radius);background:var(--sf-bg)}
.sf-plan.hl{border-color:var(--sf-primary);box-shadow:0 0 0 1px var(--sf-primary)}
.sf-plan-flag{position:absolute;top:-12px;left:24px;font-size:12px;font-weight:700;padding:4px 10px;border-radius:999px;background:var(--sf-primary);color:var(--sf-on-primary)}
.sf-plan-price{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}
.sf-plan-price strong{font-family:var(--sf-font-display);font-weight:var(--sf-dw);font-size:34px;line-height:1;font-variant-numeric:tabular-nums}
.sf-checks{display:flex;flex-direction:column;gap:9px;font-size:15px;color:var(--sf-fg2);flex:1}
.sf-checks li{padding-left:24px;position:relative}
.sf-checks li::before{content:"";position:absolute;left:2px;top:.45em;width:10px;height:6px;border-left:2px solid var(--sf-primary);border-bottom:2px solid var(--sf-primary);transform:rotate(-45deg)}

/* faq */
.sf-faq{display:grid;gap:8px}
@container site (min-width:900px){.sf-faq{grid-template-columns:.8fr 1.2fr;gap:64px}}
.sf-faq-list{border-top:1px solid var(--sf-border)}
.sf-faq-item{border-bottom:1px solid var(--sf-border)}
.sf-faq-q{display:flex;width:100%;justify-content:space-between;gap:16px;align-items:center;text-align:left;padding:20px 0;background:none;border:0;cursor:pointer;font-size:17px;font-weight:600;color:var(--sf-fg)}
.sf-faq-ic{font-size:22px;font-weight:400;transition:transform .2s;color:var(--sf-fg2);flex:none}
.sf-faq-item.open .sf-faq-ic{transform:rotate(45deg)}
.sf-faq-a{padding-bottom:20px;max-width:62ch}

/* contact */
.sf-contact{align-items:start}
.sf-cdl{display:grid;gap:18px;padding-block:6px}
.sf-cdl>div{display:grid;grid-template-columns:96px 1fr;gap:12px;font-size:15.5px}
.sf-cdl dt{color:var(--sf-fg2);font-size:13.5px;padding-top:2px}
.sf-cdl dd{white-space:pre-line}
.sf-cdl a{text-decoration:underline;text-underline-offset:3px;text-decoration-color:var(--sf-border)}
.sf-hours{display:flex;justify-content:space-between;gap:12px;max-width:320px}
.sf-map{aspect-ratio:16/10}
.sf-form{display:flex;flex-direction:column;gap:14px;padding:24px;border:1px solid var(--sf-border);border-radius:var(--sf-radius);background:var(--sf-bg)}
.tone-muted .sf-form{background:var(--sf-bg)}
.sf-form label{display:flex;flex-direction:column;gap:6px;font-size:13.5px;font-weight:600}
.sf-form input,.sf-form textarea{font:inherit;font-weight:400;font-size:15px;padding:11px 13px;border:1px solid var(--sf-border);border-radius:calc(var(--sf-radius) * .6);background:var(--sf-bg);color:var(--sf-fg);resize:vertical}
.sf-form .sf-btn{align-self:flex-start}
.sf-sent{padding:20px 0;font-size:16px}

/* cta */
.sf-cta{display:flex;flex-direction:column;gap:24px}
@container site (min-width:900px){.sf-cta{flex-direction:row;align-items:center;justify-content:space-between;gap:48px}}
.sf-cta .sf-h2{max-width:20ch}

/* footer */
.sf-foot{border-top:1px solid var(--sf-border);padding-bottom:28px}
.sf-foot-grid{display:grid;gap:32px;grid-template-columns:repeat(2,minmax(0,1fr))}
.sf-foot-brand{grid-column:1/-1}
@container site (min-width:900px){.sf-foot-grid{grid-template-columns:1.4fr 1fr 1fr 1fr}.sf-foot-brand{grid-column:auto}}
.sf-foot-h{font-size:12.5px;letter-spacing:.12em;text-transform:uppercase;font-weight:600;margin-bottom:12px;color:var(--sf-fg2)}
.sf-foot-nav{display:flex;flex-direction:column;gap:2px}
.sf-foot-nav .sf-sub{display:none}
.sf-foot-base{display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;margin-top:40px;padding-top:20px;border-top:1px solid var(--sf-border);font-size:13.5px;color:var(--sf-fg2)}
.sf-foot-s-row{display:flex;flex-direction:column;gap:16px;align-items:flex-start}
@container site (min-width:760px){.sf-foot-s-row{flex-direction:row;justify-content:space-between;align-items:center}}
.sf-foot-inline{display:flex;flex-wrap:wrap;gap:6px 24px}
.sf-foot-inline .sf-sub{display:none}
.sf-foot-s .sf-foot-base{margin-top:24px}

/* entries */
.sf-entry{align-items:center}
.sf-crumbs{font-size:14px;color:var(--sf-fg2)}
.sf-crumbs a{text-decoration:underline;text-underline-offset:3px}
.sf-entry-meta{display:flex;flex-wrap:wrap;gap:8px}
.sf-entry-meta span{font-size:14px;font-weight:600;padding:6px 12px;border-radius:999px;background:var(--sf-muted)}
.sf-back{margin-top:32px}
`;
  var M = (e, t = {}, a = {}) => ({
      block: e,
      values: { ...JSON.parse(JSON.stringify(ne[e].defaults)), ...t },
      ...a,
    }),
    T = (e, t, a = !1) => ({ label: e, to: t, newTab: a }),
    F = (e) => ({ type: "page", pageId: e }),
    me = (e, t) => ({ type: "anchor", pageId: e, anchor: t }),
    Bn = (e) => ({ type: "phone", phone: e }),
    ca = (e, t = "") => ({ type: "whatsapp", phone: e, message: t }),
    pa = (e) => ({ type: "file", fileId: e }),
    Pn = (e) => ({ type: "url", url: e }),
    z = (e, t, a) => ({ label: e, to: t, children: a || [] }),
    G = (e, t, a, s, n = {}) => ({
      key: e,
      title: t,
      slug: a,
      sections: s,
      kind: "page",
      inMenu: !0,
      status: "live",
      seo: { title: "", description: "", image: "" },
      ...n,
    }),
    At = 1024 * 1024,
    ae = (e, t, a, s, n, i = {}) => ({
      id: e,
      name: t,
      art: a,
      size: Math.round(s * At),
      alt: n,
      kind: "image",
      w: 2400,
      h: 1600,
      uploaded: Date.parse("2026-09-12T10:00:00+05:30"),
      ...i,
    }),
    Tn = [
      ae(
        "m_smile",
        "patient-smile.jpg",
        "smile",
        2.4,
        "Smiling patient after treatment",
      ),
      ae(
        "m_clinic",
        "treatment-room-1.jpg",
        "clinic",
        3.1,
        "Bright treatment room with a dental chair",
      ),
      ae(
        "m_doctor",
        "dr-meera-raghavan.jpg",
        "portrait",
        1.6,
        "Portrait of Dr. Meera Raghavan",
        { tone: 3, w: 1600, h: 2e3 },
      ),
      ae("m_team", "front-desk-team.jpg", "team", 2.9, "The front desk team"),
      ae("m_p1", "portrait-01.jpg", "portrait", 0.9, "Portrait", { tone: 1 }),
      ae("m_p2", "portrait-02.jpg", "portrait", 0.8, "Portrait", { tone: 0 }),
      ae("m_p3", "portrait-03.jpg", "portrait", 0.9, "Portrait", { tone: 5 }),
      ae("m_p4", "portrait-04.jpg", "portrait", 0.7, "Portrait", { tone: 2 }),
      ae("m_p5", "portrait-05.jpg", "portrait", 0.8, "Portrait", { tone: 4 }),
      ae("m_p6", "portrait-06.jpg", "portrait", 0.8, "Portrait", { tone: 7 }),
      ae(
        "m_cafe",
        "cafe-front-room.jpg",
        "cafe",
        3.4,
        "Caf\xE9 front room with pendant lamps",
      ),
      ae(
        "m_coffee",
        "latte-top-view.jpg",
        "coffee",
        2.2,
        "Latte with heart latte art",
      ),
      ae(
        "m_filter",
        "filter-coffee-dabara.jpg",
        "filter",
        2.6,
        "Filter coffee in a steel tumbler and dabara",
      ),
      ae(
        "m_thali",
        "weekend-thali.jpg",
        "thali",
        3,
        "Weekend thali on a banana leaf",
      ),
      ae(
        "m_facade",
        "shaleen-house-facade.jpg",
        "facade",
        4.2,
        "House facade with deep window fins",
      ),
      ae(
        "m_arches",
        "courtyard-school-arches.jpg",
        "arches",
        3.8,
        "Arched colonnade in warm stone",
      ),
      ae(
        "m_living",
        "riverside-apartment.jpg",
        "living",
        3.3,
        "Living room facing a garden",
      ),
      ae(
        "m_mandap",
        "mandap-marigold.jpg",
        "mandap",
        4.4,
        "Mandap decorated with marigold strings",
      ),
      ae(
        "m_marigold",
        "invite-wall.jpg",
        "marigold",
        2.7,
        "Marigold wall with the couple\u2019s initials",
      ),
      ae(
        "m_palace",
        "lake-palace-dusk.jpg",
        "palace",
        4.9,
        "Palace venue on a lake at dusk",
      ),
      ae(
        "m_villa",
        "palm-court-villa.jpg",
        "villa",
        3.6,
        "Villa with pool and palm tree",
      ),
      ae(
        "m_tower",
        "skyline-one-dusk.jpg",
        "tower",
        3.9,
        "Apartment towers at dusk",
      ),
      ae(
        "m_tech",
        "network-abstract.png",
        "tech",
        1.4,
        "Abstract network of connected points",
      ),
      ae(
        "m_screen",
        "fleet-dashboard.png",
        "screen",
        1.2,
        "Laptop showing a dashboard",
      ),
      ae(
        "m_map",
        "location-map.png",
        "map",
        0.6,
        "Map pin on the clinic location",
      ),
      {
        id: "f_fees",
        name: "Pearl-Dental-fee-card-2026.pdf",
        kind: "file",
        size: Math.round(1.2 * At),
        uploaded: Date.parse("2026-10-01T10:00:00+05:30"),
      },
      {
        id: "f_menu",
        name: "Thottam-menu-Nov-2026.pdf",
        kind: "file",
        size: Math.round(2.1 * At),
        uploaded: Date.parse("2026-10-28T10:00:00+05:30"),
      },
      {
        id: "f_brochure",
        name: "Banyan-Grove-brochure.pdf",
        kind: "file",
        size: Math.round(8.4 * At),
        uploaded: Date.parse("2026-08-20T10:00:00+05:30"),
      },
      {
        id: "v_tour",
        name: "clinic-walkthrough.mp4",
        kind: "video",
        art: "clinic",
        size: Math.round(148 * At),
        alt: "Clinic walkthrough video",
        uploaded: Date.parse("2026-06-14T10:00:00+05:30"),
      },
      {
        id: "v_reel",
        name: "aligner-results-reel.mp4",
        kind: "video",
        art: "smile",
        size: Math.round(64 * At),
        alt: "Aligner results reel",
        uploaded: Date.parse("2026-07-02T10:00:00+05:30"),
      },
    ],
    In = "919840021456",
    oi = {
      id: "clinic",
      name: "Clinic",
      industry: "Health",
      kind: "Dental clinic",
      description:
        "Calm, trustworthy pages for clinics: treatments with fees, doctor profiles, reviews and WhatsApp booking.",
      tags: ["light", "minimal"],
      theme: "clinic",
      business: "Pearl Dental Studio",
      header: M("header-classic", {
        logo: "Pearl Dental Studio",
        showButton: !0,
        button: T("Book appointment", me("contact", "contact")),
      }),
      footer: M("footer-columns", {
        logo: "Pearl Dental Studio",
        tagline: "Family and cosmetic dentistry in Anna Nagar since 2011.",
        address: `AG-41, 2nd Avenue, Anna Nagar
Chennai 600040`,
        phone: "+91 98400 21456",
        email: "hello@pearldental.in",
        socials: [
          {
            network: "instagram",
            url: "https://instagram.com/pearldentalstudio",
          },
          { network: "google", url: "https://g.page/pearl-dental-studio" },
        ],
        copyright:
          "\xA9 2026 Pearl Dental Studio \xB7 Regd. with the Tamil Nadu State Dental Council",
        showCredit: !0,
      }),
      nav: {
        header: [
          z("Treatments", F("services")),
          z("About", F("about"), [z("Our team", F("team"))]),
          z("Blog", F("blog")),
          z("Contact", F("contact")),
        ],
        footer: [
          z("Treatments", F("services")),
          z("About us", F("about")),
          z("Our team", F("team")),
          z("Blog", F("blog")),
          z("Contact", F("contact")),
        ],
      },
      pages: [
        G(
          "home",
          "Home",
          "home",
          [
            M("hero-split", {
              eyebrow: "Anna Nagar, Chennai",
              heading: "Gentle dental care for the whole family",
              body: "Painless root canals, clear aligners and same-day crowns. Dr. Meera Raghavan and her team have cared for more than 9,000 smiles since 2011.",
              primary: T("Book an appointment", me("contact", "contact")),
              secondary: T("Call +91 98400 21456", Bn("+919840021456")),
              image: "m_smile",
              showBadge: !0,
              badge: "4.9 on Google \xB7 1,240 reviews",
            }),
            M("features-grid", {
              eyebrow: "Why Pearl",
              heading: "Dentistry that doesn\u2019t make you nervous",
              intro: "",
              columns: "4",
              items: [
                {
                  icon: "heart",
                  title: "Pain-free by default",
                  text: "Numbing gel before every injection, and we stop whenever you raise a hand.",
                },
                {
                  icon: "bolt",
                  title: "Same-day crowns",
                  text: "Our in-house mill makes a ceramic crown while you wait.",
                },
                {
                  icon: "shield",
                  title: "Fees in writing",
                  text: "A written estimate before any treatment starts. No surprise bills.",
                },
                {
                  icon: "sparkle",
                  title: "Hospital-grade sterilisation",
                  text: "Class B autoclave, and sealed pouches opened in front of you.",
                },
              ],
            }),
            M("collection-list", {
              eyebrow: "Treatments",
              heading: "Everything your teeth need, under one roof",
              intro: "",
              collection: "services",
              limit: 3,
              columns: "3",
              showPrice: !0,
              moreLabel: "Details",
              button: T("All treatments", F("services")),
            }),
            M(
              "testimonials-cards",
              {
                eyebrow: "Patient reviews",
                heading: "From our Google reviews",
                items: [
                  {
                    quote:
                      "I have been scared of dentists since childhood. Dr. Meera explained every step and my root canal was honestly painless.",
                    name: "Lakshmi Narayanan",
                    detail: "Kilpauk",
                    photo: "m_p1",
                  },
                  {
                    quote:
                      "Got my aligners here. Clear plan, monthly check-ins on WhatsApp, and the result is better than I hoped.",
                    name: "Arjun Mehta",
                    detail: "Anna Nagar West",
                    photo: "m_p2",
                  },
                  {
                    quote:
                      "They handled my six-year-old\u2019s first filling so calmly that she now asks when we are going back.",
                    name: "Shabnam Rahman",
                    detail: "Shenoy Nagar",
                    photo: "m_p3",
                  },
                ],
              },
              { tone: "muted" },
            ),
            M("faq-accordion", {
              eyebrow: "FAQ",
              heading: "Before your first visit",
              intro:
                "Anything else? Ask us on WhatsApp and a dentist will reply the same day.",
              items: [
                {
                  q: "Do you accept health insurance?",
                  a: "We offer cashless treatment with Star Health, HDFC ERGO and Niva Bupa for covered procedures, and help you file claims for the rest.",
                },
                {
                  q: "How long does a root canal take?",
                  a: "Most root canals take one sitting of 60 to 90 minutes. The crown is fitted the same day or at a short second visit.",
                },
                {
                  q: "Can I pay in instalments?",
                  a: "Yes. Aligners and implants can be paid over 6 or 12 months at no extra cost through our partner bank.",
                },
                {
                  q: "Is there parking?",
                  a: "Four car spaces in front of the clinic, and two-wheeler parking along 2nd Avenue.",
                },
              ],
            }),
            M("cta-banner", {
              heading: "Due for a check-up?",
              text: "A full check-up with scaling and an X-ray is \u20B91,500. Most weekday slots are free within two days.",
              primary: T(
                "Book on WhatsApp",
                ca(
                  In,
                  "Hi, I would like to book a check-up at Pearl Dental Studio.",
                ),
                !0,
              ),
              secondary: T("See all fees", F("services")),
            }),
          ],
          {
            isHome: !0,
            seo: {
              title: "Pearl Dental Studio \xB7 Dentist in Anna Nagar, Chennai",
              description:
                "Painless root canals, clear aligners, implants and same-day crowns in Anna Nagar, Chennai. Rated 4.9 on Google by 1,240 patients.",
              image: "m_smile",
            },
          },
        ),
        G(
          "about",
          "About",
          "about",
          [
            M("hero-bigtype", {
              eyebrow: "About the clinic",
              heading: `Fifteen years of
careful dentistry.`,
              body: "Pearl started as a two-chair practice on 2nd Avenue. Today we are five dentists, and we still know most of our patients by name.",
              primary: T("Meet the team", F("team")),
              showImage: !0,
              image: "m_clinic",
            }),
            M("about-story", {
              eyebrow: "Founder",
              heading: "Dr. Meera Raghavan, BDS, MDS (Prosthodontics)",
              body: "<p>Dr. Meera trained at a government dental college in Chennai and spent six years at a teaching hospital in Vellore before opening Pearl in 2011.</p><p>She still sees patients four days a week, and personally plans every implant and smile makeover at the clinic.</p>",
              image: "m_doctor",
              imageSide: "right",
              stats: [
                { value: "9,000+", label: "patients treated" },
                { value: "1,100+", label: "implants placed" },
                { value: "4.9", label: "Google rating" },
                { value: "15", label: "years in Anna Nagar" },
              ],
            }),
            M("gallery-grid", {
              eyebrow: "The clinic",
              heading: "Bright, quiet and spotless",
              layout: "mosaic",
              columns: "3",
              items: [
                { image: "m_clinic", caption: "Treatment room 1" },
                { image: "m_team", caption: "Our front desk team" },
                { image: "m_smile", caption: "Smile design consults" },
                { image: "m_map", caption: "Opposite Tower Park, Gate 2" },
                { image: "m_doctor", caption: "Dr. Meera Raghavan" },
              ],
            }),
            M("cta-banner", {
              heading: "Questions about a treatment?",
              text: "Send us a photo on WhatsApp and a dentist will reply the same day.",
              primary: T("See this month\u2019s offers", F("offers")),
              secondary: T("Contact us", F("contact")),
            }),
          ],
          {
            seo: {
              title: "About Pearl Dental Studio",
              description: "",
              image: "",
            },
          },
        ),
        G(
          "team",
          "Our team",
          "our-team",
          [
            M("rich-text", {
              heading: "Our dentists",
              body: "<p>Five dentists, each focused on one area, so you always see a specialist. Every treatment plan is reviewed by two of us before it is shared with you.</p>",
              width: "narrow",
            }),
            M("gallery-grid", {
              eyebrow: "",
              heading: "",
              layout: "grid",
              columns: "3",
              items: [
                {
                  image: "m_doctor",
                  caption: "Dr. Meera Raghavan \xB7 Prosthodontist",
                },
                {
                  image: "m_p2",
                  caption: "Dr. Karthik Subramanian \xB7 Endodontist",
                },
                {
                  image: "m_p3",
                  caption: "Dr. Ayesha Siddiqui \xB7 Orthodontist",
                },
                {
                  image: "m_p5",
                  caption: "Dr. Vivek Iyer \xB7 Implantologist",
                },
                {
                  image: "m_p1",
                  caption: "Dr. Nandini Rao \xB7 Children\u2019s dentist",
                },
                { image: "m_p6", caption: "Revathi S. \xB7 Clinic manager" },
              ],
            }),
          ],
          { parent: "about" },
        ),
        G(
          "services",
          "Treatments",
          "services",
          [
            M("collection-list", {
              eyebrow: "Treatments",
              heading: "Treatments and fees",
              intro:
                "Every treatment starts with a consultation (\u20B9500, adjusted in your bill). Prices are starting fees; you get a written estimate first.",
              collection: "services",
              limit: 12,
              columns: "3",
              showPrice: !0,
              moreLabel: "Details",
              button: T("", F("home")),
            }),
            M("pricing-list", {
              eyebrow: "Fee card",
              heading: "Common procedures",
              intro: "",
              columns: "2",
              items: [
                {
                  name: "Consultation and X-ray",
                  description: "Adjusted in your treatment bill",
                  price: "\u20B9500",
                  tag: "",
                },
                {
                  name: "Scaling and polishing",
                  description: "Ultrasonic, about 40 minutes",
                  price: "\u20B91,500",
                  tag: "",
                },
                {
                  name: "Tooth-coloured filling",
                  description: "Per tooth",
                  price: "\u20B91,800",
                  tag: "",
                },
                {
                  name: "Root canal, front tooth",
                  description: "Single sitting",
                  price: "\u20B96,500",
                  tag: "",
                },
                {
                  name: "Root canal, molar",
                  description: "Rotary, under a microscope",
                  price: "\u20B98,500",
                  tag: "Popular",
                },
                {
                  name: "Zirconia crown",
                  description: "Made the same day",
                  price: "\u20B914,000",
                  tag: "",
                },
                {
                  name: "Teeth whitening",
                  description: "In-clinic, one visit",
                  price: "\u20B912,000",
                  tag: "",
                },
                {
                  name: "Dental implant with crown",
                  description: "Includes CBCT scan",
                  price: "from \u20B938,000",
                  tag: "",
                },
              ],
              showNote: !0,
              note: "Fees include GST where it applies. Card, UPI and cashless insurance accepted.",
            }),
            M("cta-banner", {
              heading: "Want the full fee card?",
              text: "All 42 procedures with prices, on one page.",
              primary: T("Download fee card (PDF)", pa("f_fees")),
              secondary: T(
                "Ask on WhatsApp",
                ca(In, "Hi, I have a question about a treatment."),
              ),
            }),
          ],
          {
            kind: "list",
            collectionId: "services",
            seo: {
              title: "Dental treatments and fees \xB7 Pearl Dental Studio",
              description:
                "Root canals, aligners, implants, whitening and more, with starting fees in rupees.",
              image: "",
            },
          },
        ),
        G(
          "service",
          "Treatment page",
          ":slug",
          [
            M("entry-hero", {
              showImage: !0,
              showMeta: !0,
              button: T("Book this treatment", me("contact", "contact")),
            }),
            M("entry-body", { showBack: !0, backLabel: "All treatments" }),
            M("cta-banner", {
              heading: "Not sure this is right for you?",
              text: "Book a \u20B9500 consultation and we will tell you honestly.",
              primary: T("Book a consultation", me("contact", "contact")),
              secondary: T("", F("home")),
            }),
          ],
          {
            kind: "detail",
            collectionId: "services",
            parent: "services",
            inMenu: !1,
          },
        ),
        G(
          "blog",
          "Blog",
          "blog",
          [
            M("news-latest", {
              eyebrow: "Blog",
              heading: "Notes from the clinic",
              count: 9,
              showDates: !0,
              button: T("", F("home")),
            }),
          ],
          {
            kind: "list",
            collectionId: "blog",
            seo: {
              title: "Dental care blog \xB7 Pearl Dental Studio",
              description:
                "Plain-language answers about check-ups, aligners, children\u2019s teeth and more, from our dentists.",
              image: "",
            },
          },
        ),
        G(
          "post",
          "Blog post",
          ":slug",
          [
            M("entry-hero", {
              showImage: !0,
              showMeta: !0,
              button: T("", F("home")),
            }),
            M("entry-body", { showBack: !0, backLabel: "All posts" }),
            M(
              "news-latest",
              {
                eyebrow: "",
                heading: "More from the blog",
                count: 3,
                showDates: !0,
                button: T("", F("home")),
              },
              { tone: "muted" },
            ),
          ],
          { kind: "detail", collectionId: "blog", parent: "blog", inMenu: !1 },
        ),
        G(
          "contact",
          "Contact",
          "contact",
          [
            M(
              "contact-split",
              {
                eyebrow: "Visit us",
                heading: "Book an appointment",
                intro:
                  "Call, WhatsApp or send the form. We reply during clinic hours, usually within the hour.",
                address: `AG-41, 2nd Avenue, Anna Nagar
Chennai 600040
Opposite Tower Park, Gate 2`,
                phone: "+91 98400 21456",
                whatsapp: "+91 98400 21456",
                waMessage: "Hi, I would like to book an appointment.",
                email: "hello@pearldental.in",
                hours: [
                  { days: "Mon \u2013 Sat", time: "10 am \u2013 8 pm" },
                  { days: "Sunday", time: "10 am \u2013 1 pm, by appointment" },
                ],
                showMap: !0,
                showForm: !0,
                formButton: "Request a call back",
              },
              { anchor: "contact" },
            ),
          ],
          {
            seo: {
              title: "Contact Pearl Dental Studio, Anna Nagar",
              description:
                "Call +91 98400 21456 or WhatsApp us. AG-41, 2nd Avenue, Anna Nagar, Chennai 600040. Open Mon\u2013Sat 10 am to 8 pm.",
              image: "",
            },
          },
        ),
      ],
      collections: {
        services: {
          name: "Treatments",
          entries: [
            {
              slug: "teeth-whitening",
              title: "Teeth whitening",
              summary:
                "In-clinic whitening that lifts most teeth four to six shades in one 75-minute visit.",
              price: "From \u20B912,000",
              duration: "75 min \xB7 one visit",
              image: "m_smile",
              body: "<p>We use a professional whitening gel activated by a cool LED light. It works on stains from tea, coffee and age, and is safe for enamel when done under supervision.</p><h3>Who it suits</h3><ul><li>Yellowing from tea, coffee or smoking</li><li>Even, healthy teeth without large fillings at the front</li></ul><h3>What to expect</h3><p>Mild sensitivity for a day or two is normal. You go home with a desensitising gel and a shade card to track the result.</p>",
              status: "published",
            },
            {
              slug: "root-canal-treatment",
              title: "Root canal treatment",
              summary:
                "Single-sitting root canals with rotary instruments under a microscope, and the crown the same day.",
              price: "From \u20B96,500",
              duration: "60\u201390 min",
              image: "m_clinic",
              body: "<p>A root canal removes infected pulp from inside the tooth, cleans the canals and seals them, so you keep your natural tooth.</p><h3>Does it hurt?</h3><p>With modern numbing, most patients say it feels like a long filling. We check in every few minutes.</p>",
              status: "published",
            },
            {
              slug: "clear-aligners",
              title: "Clear aligners",
              summary:
                "Straighten teeth without braces. A 3D scan shows your final smile before you commit.",
              price: "From \u20B985,000",
              duration: "6\u201314 months",
              image: "m_p3",
              body: "<p>Clear aligners are thin, removable trays that move your teeth a little at a time. You change trays every two weeks and visit us every six to eight weeks.</p><p>Pay over 12 months at no extra cost.</p>",
              status: "published",
            },
            {
              slug: "dental-implants",
              title: "Dental implants",
              summary:
                "A fixed replacement for a missing tooth, planned on a 3D CBCT scan.",
              price: "From \u20B938,000",
              duration: "2 visits over 3 months",
              image: "m_doctor",
              body: "<p>An implant is a titanium post placed in the jaw, topped with a crown. It looks and works like a natural tooth and can last decades with good care.</p>",
              status: "published",
            },
            {
              slug: "childrens-dentistry",
              title: "Children\u2019s dentistry",
              summary:
                "First visits, fluoride, sealants and fillings for children, with a dentist trained to work with kids.",
              price: "From \u20B9800",
              duration: "30 min",
              image: "m_p1",
              body: "<p>We see children from their first birthday. Short, friendly visits build trust, so treatment is easy if it is ever needed.</p>",
              status: "draft",
            },
          ],
        },
        blog: {
          name: "Blog",
          entries: [
            {
              slug: "how-often-dental-check-up",
              title: "How often should you really get a dental check-up?",
              date: "2026-10-14",
              author: "Dr. Meera Raghavan",
              excerpt:
                "Every six months is the rule of thumb, but your ideal gap depends on your gums, your diet and your history.",
              image: "m_clinic",
              body: "<p>Six months is a good default. If your gums bleed easily, you smoke, or you have diabetes, every three to four months is safer.</p><p>If you have had no cavities for years and your gums are healthy, once a year can be enough. Ask us at your next visit.</p>",
              status: "published",
            },
            {
              slug: "aligners-or-braces",
              title: "Clear aligners or braces: an honest comparison",
              date: "2026-09-02",
              author: "Dr. Ayesha Siddiqui",
              excerpt:
                "Cost, comfort, speed and results, side by side, from an orthodontist who offers both.",
              image: "m_smile",
              body: "<p>Braces are still the most predictable option for complex cases and cost less. Aligners are nearly invisible and easier to clean around, but only work if you wear them 22 hours a day.</p>",
              status: "published",
            },
            {
              slug: "childs-first-dental-visit",
              title: "Your child\u2019s first dental visit: what to expect",
              date: "2026-07-21",
              author: "Dr. Nandini Rao",
              excerpt:
                "Bring them in by their first birthday. Here is how we make the first visit fun, not frightening.",
              image: "m_p1",
              body: "<p>The first visit is mostly a chat and a quick look. We count teeth, check for early decay and show your child the chair that goes up and down.</p>",
              status: "published",
            },
          ],
        },
      },
    },
    ri = {
      id: "ember",
      name: "Ember",
      industry: "Food & caf\xE9",
      kind: "Caf\xE9",
      description:
        "Warm, photo-led pages for caf\xE9s and restaurants: menu with \u20B9 prices, a slideshow, hours and directions.",
      tags: ["light", "editorial"],
      theme: "ember",
      business: "Thottam Caf\xE9",
      header: M("header-centered", {
        logo: "Thottam Caf\xE9",
        showTopline: !0,
        topline:
          "Open daily 8 am \u2013 11 pm \xB7 12th Main, Indiranagar \xB7 +91 98450 33127",
      }),
      footer: M("footer-simple", {
        logo: "Thottam Caf\xE9",
        copyright:
          "\xA9 2026 Thottam Caf\xE9, Bengaluru \xB7 FSSAI 11224333000875",
        showCredit: !0,
      }),
      nav: {
        header: [
          z("Menu", F("menu")),
          z("Our story", F("about")),
          z("Gallery", F("gallery")),
          z("Journal", F("blog")),
          z("Visit", F("contact")),
        ],
        footer: [
          z("Menu", F("menu")),
          z("Our story", F("about")),
          z("Journal", F("blog")),
          z("Visit", F("contact")),
          z("Instagram", Pn("https://instagram.com/thottamcafe")),
        ],
      },
      pages: [
        G(
          "home",
          "Home",
          "home",
          [
            M("hero-slides", {
              slides: [
                {
                  image: "m_cafe",
                  heading: "Slow coffee, all day",
                  caption:
                    "South Indian filter coffee and small plates on 12th Main, Indiranagar.",
                },
                {
                  image: "m_filter",
                  heading: "Fresh decoction every 40 minutes",
                  caption:
                    "Chikmagalur beans with 20% chicory, served in brass.",
                },
                {
                  image: "m_thali",
                  heading: "Weekend thali, 12 to 3",
                  caption: "Eleven dishes, unlimited refills, \u20B9320.",
                },
              ],
              button: T("See the menu", F("menu")),
              autoplay: !0,
            }),
            M("features-grid", {
              eyebrow: "Thottam means garden",
              heading: "A caf\xE9 built around an old jackfruit tree",
              intro: "",
              columns: "3",
              cards: !1,
              items: [
                {
                  icon: "cup",
                  title: "Single-estate beans",
                  text: "Roasted every Monday by a family farm in Baba Budangiri.",
                },
                {
                  icon: "leaf",
                  title: "Garden seating",
                  text: "Thirty seats under a 40-year-old jackfruit tree.",
                },
                {
                  icon: "wifi",
                  title: "Work-friendly mornings",
                  text: "Fast Wi-Fi and plug points until noon on weekdays.",
                },
              ],
            }),
            M(
              "pricing-list",
              {
                eyebrow: "Menu",
                heading: "What people order",
                intro: "",
                columns: "2",
                items: [
                  {
                    name: "Filter coffee",
                    description: "Chicory blend, brass dabara",
                    price: "\u20B960",
                    tag: "Bestseller",
                  },
                  {
                    name: "Ghee podi idli",
                    description: "Four mini idlis, gunpowder, ghee",
                    price: "\u20B9140",
                    tag: "",
                  },
                  {
                    name: "Benne masala dosa",
                    description: "Davangere style, white butter",
                    price: "\u20B9180",
                    tag: "Bestseller",
                  },
                  {
                    name: "Jackfruit cold brew",
                    description: "16-hour steep, jackfruit syrup",
                    price: "\u20B9190",
                    tag: "New",
                  },
                  {
                    name: "Ragi banana pancakes",
                    description: "Jaggery, coconut cream",
                    price: "\u20B9220",
                    tag: "",
                  },
                  {
                    name: "Kesari bath",
                    description: "Pineapple, saffron, cashew",
                    price: "\u20B990",
                    tag: "",
                  },
                ],
                showNote: !0,
                note: "Prices include GST. We do not add a service charge.",
              },
              { tone: "muted" },
            ),
            M(
              "testimonials-quote",
              {
                quote:
                  "The filter coffee tastes like my grandmother\u2019s kitchen in Mysuru. I come every Sunday with my newspaper.",
                name: "Shreyas Kulkarni",
                detail: "Regular since 2019",
                photo: "m_p5",
              },
              { tone: "dark" },
            ),
            M("news-latest", {
              eyebrow: "Journal",
              heading: "From the caf\xE9 journal",
              count: 2,
              showDates: !0,
              button: T("All posts", F("blog")),
            }),
          ],
          {
            isHome: !0,
            seo: {
              title:
                "Thottam Caf\xE9 \xB7 Filter coffee in Indiranagar, Bengaluru",
              description:
                "Filter coffee, dosas and a weekend thali under a jackfruit tree on 12th Main, Indiranagar.",
              image: "m_cafe",
            },
          },
        ),
        G("menu", "Menu", "menu", [
          M("pricing-list", {
            eyebrow: "All day",
            heading: "Coffee and tea",
            intro: "",
            columns: "2",
            items: [
              {
                name: "Filter coffee",
                description: "By the tumbler",
                price: "\u20B960",
                tag: "Bestseller",
              },
              {
                name: "Double decoction",
                description: "Stronger, less milk",
                price: "\u20B980",
                tag: "",
              },
              {
                name: "Cold brew",
                description: "16-hour steep",
                price: "\u20B9170",
                tag: "",
              },
              {
                name: "Masala chai",
                description: "Ginger, cardamom",
                price: "\u20B950",
                tag: "",
              },
            ],
            showNote: !1,
            note: "",
          }),
          M("pricing-list", {
            eyebrow: "Till noon",
            heading: "Breakfast",
            intro: "",
            columns: "2",
            items: [
              {
                name: "Benne masala dosa",
                description: "Davangere style",
                price: "\u20B9180",
                tag: "Bestseller",
              },
              {
                name: "Ghee podi idli",
                description: "Four mini idlis",
                price: "\u20B9140",
                tag: "",
              },
              {
                name: "Akki rotti",
                description: "Rice flatbread, coconut chutney",
                price: "\u20B9150",
                tag: "",
              },
              {
                name: "Ragi banana pancakes",
                description: "Jaggery, coconut cream",
                price: "\u20B9220",
                tag: "",
              },
            ],
            showNote: !0,
            note: "Ask us about Jain and gluten-free options.",
          }),
          M("cta-banner", {
            heading: "Taking the menu home?",
            text: "Download this month\u2019s menu, or order on WhatsApp for pickup.",
            primary: T("Download menu (PDF)", pa("f_menu")),
            secondary: T(
              "Order on WhatsApp",
              ca(
                "919845033127",
                "Hi Thottam, I would like to order for pickup.",
              ),
            ),
          }),
        ]),
        G("about", "Our story", "our-story", [
          M("about-story", {
            eyebrow: "Since 2019",
            heading:
              "Started by two sisters and their grandmother\u2019s recipes",
            body: "<p>Divya and Kavya Gowda grew up drinking filter coffee on a verandah in Mysuru. In 2019 they rented a house with a jackfruit tree on 12th Main and opened Thottam with eight tables.</p><p>Every recipe on the breakfast menu comes from their grandmother\u2019s notebook.</p>",
            image: "m_cafe",
            imageSide: "left",
            stats: [
              { value: "30", label: "seats in the garden" },
              { value: "600", label: "cups on a Sunday" },
              { value: "11", label: "dishes in the thali" },
            ],
          }),
          M("gallery-grid", {
            eyebrow: "",
            heading: "Inside Thottam",
            layout: "grid",
            columns: "3",
            showCaptions: !1,
            items: [
              { image: "m_coffee", caption: "" },
              { image: "m_filter", caption: "" },
              { image: "m_thali", caption: "" },
            ],
          }),
        ]),
        G("gallery", "Gallery", "gallery", [
          M("gallery-grid", {
            eyebrow: "Gallery",
            heading: "A morning at Thottam",
            layout: "mosaic",
            columns: "3",
            items: [
              { image: "m_cafe", caption: "The front room at 8 am" },
              { image: "m_coffee", caption: "Cold brew latte" },
              {
                image: "m_filter",
                caption: "Filter coffee, the way it should be",
              },
              { image: "m_thali", caption: "Weekend thali" },
              { image: "m_p5", caption: "Shreyas, our Sunday regular" },
            ],
          }),
        ]),
        G(
          "blog",
          "Journal",
          "journal",
          [
            M("news-latest", {
              eyebrow: "Journal",
              heading: "Notes from the caf\xE9",
              count: 6,
              showDates: !0,
              button: T("", F("home")),
            }),
          ],
          { kind: "list", collectionId: "blog" },
        ),
        G(
          "post",
          "Journal post",
          ":slug",
          [
            M("entry-hero", {
              showImage: !0,
              showMeta: !0,
              button: T("", F("home")),
            }),
            M("entry-body", { showBack: !0, backLabel: "Back to the journal" }),
          ],
          { kind: "detail", collectionId: "blog", parent: "blog", inMenu: !1 },
        ),
        G("contact", "Visit", "visit", [
          M(
            "contact-split",
            {
              eyebrow: "Visit",
              heading: "Find us on 12th Main",
              intro:
                "Ten minutes\u2019 walk from Indiranagar metro. Street parking after 7 pm.",
              address: `1146, 12th Main, HAL 2nd Stage
Indiranagar, Bengaluru 560008`,
              phone: "+91 98450 33127",
              whatsapp: "+91 98450 33127",
              waMessage: "Hi Thottam!",
              email: "hello@thottamcafe.in",
              hours: [
                { days: "Mon \u2013 Fri", time: "8 am \u2013 11 pm" },
                { days: "Sat \u2013 Sun", time: "7:30 am \u2013 11:30 pm" },
              ],
              showMap: !0,
              showForm: !1,
              formButton: "Send",
            },
            { anchor: "contact" },
          ),
          M("faq-accordion", {
            eyebrow: "",
            heading: "Good to know",
            intro: "",
            items: [
              {
                q: "Do you take reservations?",
                a: "Only for groups of six or more. Call us a day ahead.",
              },
              {
                q: "Are pets allowed?",
                a: "Yes, in the garden. We keep water bowls by the gate.",
              },
            ],
          }),
        ]),
      ],
      collections: {
        services: { name: "Services", entries: [] },
        blog: {
          name: "Journal",
          entries: [
            {
              slug: "decoction-every-40-minutes",
              title: "Why we brew decoction every 40 minutes",
              date: "2026-10-20",
              author: "Kavya Gowda",
              excerpt:
                "Old decoction turns bitter. Here is the routine behind every tumbler we pour.",
              image: "m_filter",
              body: "<p>Decoction starts losing its aroma after about 45 minutes. So a timer runs on the counter all day, and a fresh brass filter goes on every 40.</p>",
              status: "published",
            },
            {
              slug: "meet-our-roaster",
              title: "Meet our roaster: the Gowda family farm",
              date: "2026-08-11",
              author: "Divya Gowda",
              excerpt:
                "Our beans come from a 12-acre farm in Baba Budangiri, roasted every Monday.",
              image: "m_coffee",
              body: "<p>Our uncle\u2019s farm grows Arabica under silver oak and pepper vines. We roast in small batches every Monday.</p>",
              status: "published",
            },
          ],
        },
      },
    },
    li = {
      id: "midnight",
      name: "Midnight",
      industry: "Tech",
      kind: "Software studio",
      description:
        "A dark, technical look for software studios and agencies: services, case studies and engagement models.",
      tags: ["dark", "big-type"],
      theme: "midnight",
      business: "Stackwise Labs",
      header: M("header-classic", {
        logo: "Stackwise Labs",
        showButton: !0,
        button: T("Start a project", me("contact", "contact")),
      }),
      footer: M("footer-columns", {
        logo: "Stackwise Labs",
        tagline:
          "Product engineering for teams in logistics, healthcare and fintech.",
        address: `Office 504, Sai Radiance
Baner Road, Pune 411045`,
        phone: "+91 98220 41870",
        email: "hello@stackwise.dev",
        socials: [
          {
            network: "linkedin",
            url: "https://linkedin.com/company/stackwise-labs",
          },
        ],
        copyright: "\xA9 2026 Stackwise Labs Pvt. Ltd.",
        showCredit: !1,
      }),
      nav: {
        header: [
          z("Services", F("services")),
          z("Work", F("work")),
          z("About", F("about")),
          z("Contact", F("contact")),
        ],
        footer: [
          z("Services", F("services")),
          z("Work", F("work")),
          z("About", F("about")),
          z("Contact", F("contact")),
        ],
      },
      pages: [
        G(
          "home",
          "Home",
          "home",
          [
            M("hero-bigtype", {
              eyebrow: "Product engineering \xB7 Pune",
              heading: `We build the software
your ops team runs on.`,
              body: "Internal tools, customer apps and data pipelines for logistics, healthcare and fintech teams across India.",
              primary: T("Book a 30-minute call", me("contact", "contact")),
              showImage: !0,
              image: "m_tech",
            }),
            M("features-grid", {
              eyebrow: "What we do",
              heading: "Small senior teams, shipped every two weeks",
              intro: "",
              columns: "3",
              items: [
                {
                  icon: "code",
                  title: "Web and mobile apps",
                  text: "React, React Native and Flutter, released in two-week cycles.",
                },
                {
                  icon: "layers",
                  title: "Data platforms",
                  text: "Pipelines and dashboards on BigQuery, Postgres and dbt.",
                },
                {
                  icon: "shield",
                  title: "Security reviews",
                  text: "VAPT and DPDP Act readiness for growing teams.",
                },
              ],
            }),
            M("collection-list", {
              eyebrow: "Engagements",
              heading: "Ways to work with us",
              intro: "",
              collection: "services",
              limit: 3,
              columns: "3",
              showPrice: !0,
              moreLabel: "How it works",
              button: T("All services", F("services")),
            }),
            M("testimonials-cards", {
              eyebrow: "Clients",
              heading: "What our clients say",
              showStars: !1,
              items: [
                {
                  quote:
                    "They replaced three spreadsheets and a WhatsApp group with one dispatch tool. Our planners got two hours of their day back.",
                  name: "Neha Kulkarni",
                  detail: "CTO, freight-tech startup, Pune",
                  photo: "m_p3",
                },
                {
                  quote:
                    "Clear weekly demos and no surprises on the invoice. Rare in this industry.",
                  name: "Rahul Bhandari",
                  detail: "Founder, diagnostics chain",
                  photo: "m_p2",
                },
                {
                  quote:
                    "Our DPDP audit went from panic to a two-page checklist.",
                  name: "Sana Qureshi",
                  detail: "Head of Compliance, NBFC",
                  photo: "m_p4",
                },
              ],
            }),
            M("cta-banner", {
              heading: "Have a project in mind?",
              text: "Tell us what is slowing your team down. We reply within one working day.",
              primary: T("Start a project", me("contact", "contact")),
              secondary: T("See our work", F("work")),
            }),
          ],
          { isHome: !0 },
        ),
        G(
          "services",
          "Services",
          "services",
          [
            M("collection-list", {
              eyebrow: "Services",
              heading: "What we can take off your plate",
              intro: "",
              collection: "services",
              limit: 9,
              columns: "3",
              showPrice: !0,
              moreLabel: "How it works",
              button: T("", F("home")),
            }),
            M("pricing-packages", {
              eyebrow: "Engagement models",
              heading: "Fixed scope or a dedicated squad",
              intro: "All prices exclude GST.",
              flag: "Most teams start here",
              items: [
                {
                  name: "Discovery sprint",
                  price: "\u20B92,40,000",
                  period: "2 weeks, fixed",
                  features: `Workshops with your team
Clickable prototype
Technical plan and estimate`,
                  highlight: !1,
                  button: T("Book a sprint", me("contact", "contact")),
                },
                {
                  name: "Product squad",
                  price: "\u20B99,50,000",
                  period: "per month",
                  features: `Tech lead, 2 engineers, designer
Two-week releases
Weekly demo`,
                  highlight: !0,
                  button: T("Talk to us", me("contact", "contact")),
                },
                {
                  name: "Retainer",
                  price: "\u20B93,20,000",
                  period: "per month",
                  features: `Bug fixes and small features
Uptime monitoring
48-hour response`,
                  highlight: !1,
                  button: T("Talk to us", me("contact", "contact")),
                },
              ],
            }),
          ],
          { kind: "list", collectionId: "services" },
        ),
        G(
          "service",
          "Service page",
          ":slug",
          [
            M("entry-hero", {
              showImage: !0,
              showMeta: !0,
              button: T("Talk to us", me("contact", "contact")),
            }),
            M("entry-body", { showBack: !0, backLabel: "All services" }),
          ],
          {
            kind: "detail",
            collectionId: "services",
            parent: "services",
            inMenu: !1,
          },
        ),
        G("work", "Work", "work", [
          M("gallery-grid", {
            eyebrow: "Selected work",
            heading: "Recent projects",
            layout: "grid",
            columns: "2",
            items: [
              {
                image: "m_screen",
                caption: "Fleet dashboard for a 3PL in Chakan",
              },
              {
                image: "m_tech",
                caption: "Lab results pipeline for a diagnostics chain",
              },
              { image: "m_screen", caption: "Loan servicing app for an NBFC" },
              { image: "m_tech", caption: "Inventory sync for 40 pharmacies" },
            ],
          }),
        ]),
        G("about", "About", "about", [
          M("about-story", {
            eyebrow: "About",
            heading: "Eleven engineers, no account managers",
            body: "<p>Stackwise was started in 2018 by three engineers who were tired of handing projects to people who had never written code.</p><p>Everyone who talks to you is someone who builds.</p>",
            image: "m_team",
            imageSide: "right",
            stats: [
              { value: "11", label: "engineers" },
              { value: "46", label: "products shipped" },
              { value: "8 yrs", label: "average experience" },
            ],
          }),
        ]),
        G("contact", "Contact", "contact", [
          M(
            "contact-split",
            {
              eyebrow: "Contact",
              heading: "Tell us about your project",
              intro: "A short note is enough. We will set up a 30-minute call.",
              address: `Office 504, Sai Radiance
Baner Road, Pune 411045`,
              phone: "+91 98220 41870",
              whatsapp: "+91 98220 41870",
              waMessage: "Hi Stackwise, I have a project to discuss.",
              email: "hello@stackwise.dev",
              hours: [{ days: "Mon \u2013 Fri", time: "10 am \u2013 7 pm" }],
              showMap: !1,
              showForm: !0,
              formButton: "Send brief",
            },
            { anchor: "contact" },
          ),
        ]),
      ],
      collections: {
        services: {
          name: "Services",
          entries: [
            {
              slug: "mvp-in-10-weeks",
              title: "MVP in 10 weeks",
              summary:
                "From idea to a product your first customers can use, with analytics from day one.",
              price: "From \u20B918,00,000",
              duration: "10 weeks",
              image: "m_screen",
              body: "<p>Five two-week sprints, each ending in a demo you can click through.</p>",
              status: "published",
            },
            {
              slug: "data-platform",
              title: "Data platform setup",
              summary:
                "One source of truth for your ops data, with dashboards your team actually opens.",
              price: "From \u20B97,50,000",
              duration: "6 weeks",
              image: "m_tech",
              body: "<p>We connect your sources, model the data in dbt and build the first ten dashboards with your team.</p>",
              status: "published",
            },
            {
              slug: "security-review",
              title: "Security and DPDP review",
              summary:
                "A practical audit of your apps and data handling, with a fix list in priority order.",
              price: "From \u20B93,40,000",
              duration: "3 weeks",
              image: "m_tech",
              body: "<p>Automated scans plus a manual review by a senior engineer.</p>",
              status: "published",
            },
          ],
        },
        blog: {
          name: "Blog",
          entries: [
            {
              slug: "dpdp-checklist",
              title: "A two-page DPDP checklist for startups",
              date: "2026-09-30",
              author: "Aditya Joshi",
              excerpt:
                "What the Digital Personal Data Protection rules mean for a 20-person company.",
              image: "m_tech",
              body: "<p>Start with a data map: what you collect, where it lives and who can see it.</p>",
              status: "published",
            },
          ],
        },
      },
    },
    di = {
      id: "atelier",
      name: "Atelier",
      industry: "Design studio",
      kind: "Architecture studio",
      description:
        "Big type and quiet layouts for architects and interior designers. Lets the photographs do the work.",
      tags: ["light", "big-type", "editorial", "minimal"],
      theme: "atelier",
      business: "Studio Karvi",
      header: M("header-classic", {
        logo: "Studio Karvi",
        showButton: !1,
        button: T("Contact", F("contact")),
      }),
      footer: M("footer-simple", {
        logo: "Studio Karvi",
        copyright:
          "\xA9 2026 Studio Karvi Architects, Ahmedabad \xB7 COA reg. CA/2015/71843",
        showCredit: !1,
      }),
      nav: {
        header: [
          z("Projects", F("projects")),
          z("Studio", F("studio")),
          z("Journal", F("blog")),
          z("Contact", F("contact")),
        ],
        footer: [
          z("Projects", F("projects")),
          z("Studio", F("studio")),
          z("Journal", F("blog")),
          z("Contact", F("contact")),
          z("Instagram", Pn("https://instagram.com/studiokarvi")),
        ],
      },
      pages: [
        G(
          "home",
          "Home",
          "home",
          [
            M("hero-bigtype", {
              eyebrow: "Studio Karvi \xB7 Ahmedabad",
              heading: `Architecture
for the long
Indian summer.`,
              body: "We design homes, schools and workplaces in Gujarat that stay cool without leaning on air-conditioning.",
              primary: T("View projects", F("projects")),
              showImage: !0,
              image: "m_arches",
            }),
            M("about-story", {
              eyebrow: "Approach",
              heading: "Climate first, then form",
              body: "<p>Every project starts with the sun path, the wind and the soil. Deep verandahs, jaalis, courtyards and thick walls do most of the cooling.</p><p>What is left is a quieter building that costs less to run.</p>",
              image: "m_facade",
              imageSide: "right",
              stats: [
                { value: "62", label: "completed projects" },
                { value: "4\xB0C", label: "cooler inside, on average" },
                { value: "11", label: "years of practice" },
              ],
            }),
            M("gallery-grid", {
              eyebrow: "Selected work",
              heading: "Recent projects",
              layout: "mosaic",
              columns: "3",
              items: [
                { image: "m_facade", caption: "Shaleen House, Bopal" },
                { image: "m_arches", caption: "Courtyard school, Sanand" },
                {
                  image: "m_living",
                  caption: "Riverside apartment, Ellisbridge",
                },
                { image: "m_villa", caption: "Farmhouse, Nal Sarovar" },
              ],
            }),
            M("testimonials-quote", {}, { tone: "dark" }),
            M("news-latest", {
              eyebrow: "Journal",
              heading: "Notes on building",
              count: 3,
              showDates: !0,
              button: T("All entries", F("blog")),
            }),
          ],
          { isHome: !0 },
        ),
        G("projects", "Projects", "projects", [
          M("rich-text", {
            heading: "Projects",
            body: "<p>Homes, schools and workplaces across Gujarat, 2015 to now. Ask us for drawings and costs of any project.</p>",
            width: "wide",
          }),
          M("gallery-grid", {
            eyebrow: "",
            heading: "",
            layout: "grid",
            columns: "2",
            items: [
              { image: "m_facade", caption: "Shaleen House, Bopal \xB7 2025" },
              {
                image: "m_arches",
                caption: "Courtyard school, Sanand \xB7 2024",
              },
              { image: "m_living", caption: "Riverside apartment \xB7 2024" },
              { image: "m_villa", caption: "Farmhouse, Nal Sarovar \xB7 2023" },
            ],
          }),
        ]),
        G("studio", "Studio", "studio", [
          M("about-story", {
            eyebrow: "Studio",
            heading: "Nine people, one long table",
            body: "<p>Founded by Ar. Ishita Karvi in 2015. We take on about eight projects a year so the partners stay on every site.</p>",
            image: "m_team",
            imageSide: "left",
            stats: [
              { value: "9", label: "architects and designers" },
              { value: "8", label: "projects a year" },
            ],
          }),
          M("features-grid", {
            eyebrow: "How we work",
            heading: "Four stages, one fee",
            intro:
              "Our fee is a fixed share of construction cost, agreed before we start.",
            columns: "4",
            cards: !1,
            items: [
              {
                icon: "pin",
                title: "Site study",
                text: "Sun, wind, soil and neighbours.",
              },
              {
                icon: "ruler",
                title: "Concept",
                text: "Two or three options, with rough costs.",
              },
              {
                icon: "layers",
                title: "Drawings",
                text: "Working drawings and BOQ.",
              },
              {
                icon: "home",
                title: "On site",
                text: "Weekly visits until handover.",
              },
            ],
          }),
        ]),
        G(
          "blog",
          "Journal",
          "journal",
          [
            M("news-latest", {
              eyebrow: "Journal",
              heading: "Notes on building",
              count: 9,
              showDates: !0,
              button: T("", F("home")),
            }),
          ],
          { kind: "list", collectionId: "blog" },
        ),
        G(
          "post",
          "Journal entry",
          ":slug",
          [
            M("entry-hero", {
              showImage: !0,
              showMeta: !0,
              button: T("", F("home")),
            }),
            M("entry-body", { showBack: !0, backLabel: "Back to the journal" }),
          ],
          { kind: "detail", collectionId: "blog", parent: "blog", inMenu: !1 },
        ),
        G("contact", "Contact", "contact", [
          M(
            "contact-split",
            {
              eyebrow: "Contact",
              heading: "Start a conversation",
              intro:
                "Tell us about your site and what you need. We reply within a week.",
              address: `3rd floor, 14 Sahajanand Society
Navrangpura, Ahmedabad 380009`,
              phone: "+91 79 4893 2210",
              whatsapp: "+91 98250 61144",
              waMessage: "Hello Studio Karvi.",
              email: "studio@karvi.in",
              hours: [{ days: "Mon \u2013 Fri", time: "10 am \u2013 6:30 pm" }],
              showMap: !0,
              showForm: !0,
              formButton: "Send enquiry",
            },
            { anchor: "contact" },
          ),
        ]),
      ],
      collections: {
        services: { name: "Services", entries: [] },
        blog: {
          name: "Journal",
          entries: [
            {
              slug: "jaali-revisited",
              title: "Jaali, revisited",
              date: "2026-10-02",
              author: "Ishita Karvi",
              excerpt:
                "A perforated screen that cuts glare and keeps the breeze. Why we use it on nearly every facade.",
              image: "m_facade",
              body: "<p>A jaali filters sunlight into small patches and speeds up air through its openings.</p>",
              status: "published",
            },
            {
              slug: "lime-plaster-2026",
              title: "Lime plaster in 2026",
              date: "2026-08-18",
              author: "Manan Shah",
              excerpt:
                "Slower to apply, cheaper to live with. Notes from three sites.",
              image: "m_arches",
              body: "<p>Lime breathes, so walls stay drier and cooler.</p>",
              status: "published",
            },
            {
              slug: "what-a-courtyard-does",
              title: "What a courtyard does",
              date: "2026-06-05",
              author: "Ishita Karvi",
              excerpt:
                "Light, air and a place for the family to meet. A courtyard does three jobs at once.",
              image: "m_living",
              body: "<p>Warm air rises out of the courtyard and pulls cooler air through the rooms.</p>",
              status: "published",
            },
          ],
        },
      },
    },
    ci = {
      id: "vow",
      name: "Vow",
      industry: "Events",
      kind: "Wedding planner",
      description:
        "Elegant serif pages for wedding planners and photographers: packages, galleries and couple stories.",
      tags: ["light", "editorial"],
      theme: "vow",
      business: "Mangalam Weddings",
      header: M("header-centered", {
        logo: "Mangalam Weddings",
        showTopline: !0,
        topline:
          "Now booking weddings for Nov 2026 \u2013 Mar 2027 \xB7 +91 94140 55210",
      }),
      footer: M("footer-columns", {
        logo: "Mangalam Weddings",
        tagline:
          "Wedding planning and d\xE9cor in Jaipur and across Rajasthan.",
        address: `C-22, Bhawani Singh Road
C-Scheme, Jaipur 302001`,
        phone: "+91 94140 55210",
        email: "namaste@mangalamweddings.in",
        socials: [
          {
            network: "instagram",
            url: "https://instagram.com/mangalamweddings",
          },
          { network: "youtube", url: "https://youtube.com/@mangalamweddings" },
        ],
        copyright: "\xA9 2026 Mangalam Weddings",
        showCredit: !0,
      }),
      nav: {
        header: [
          z("Packages", F("packages")),
          z("Gallery", F("gallery")),
          z("Stories", F("stories")),
          z("Contact", F("contact")),
        ],
        footer: [
          z("Packages", F("packages")),
          z("Gallery", F("gallery")),
          z("Stories", F("stories")),
          z("Contact", F("contact")),
        ],
      },
      pages: [
        G(
          "home",
          "Home",
          "home",
          [
            M("hero-slides", {
              slides: [
                {
                  image: "m_mandap",
                  heading: "Weddings that feel like family",
                  caption:
                    "Planning and d\xE9cor for 150 to 1,500 guests, in Jaipur and across Rajasthan.",
                },
                {
                  image: "m_palace",
                  heading: "Palace and lakeside venues",
                  caption:
                    "Udaipur, Jodhpur, Samode and Pushkar, with travel and stays handled.",
                },
                {
                  image: "m_marigold",
                  heading: "Every detail, handled",
                  caption:
                    "From the haldi to the vidaai, one team and one point of contact.",
                },
              ],
              button: T("See packages", F("packages")),
              autoplay: !0,
            }),
            M("features-grid", {
              eyebrow: "What we do",
              heading: "One team for every ceremony",
              intro: "",
              columns: "4",
              cards: !1,
              items: [
                {
                  icon: "flower",
                  title: "D\xE9cor",
                  text: "Mandap, phoolon ki chaadar, stage and lighting.",
                },
                {
                  icon: "pin",
                  title: "Venues",
                  text: "Shortlists, site visits and negotiation.",
                },
                {
                  icon: "users",
                  title: "Hospitality",
                  text: "Guest travel, rooms and welcome desks.",
                },
                {
                  icon: "music",
                  title: "Entertainment",
                  text: "Sangeet choreography, DJs and folk artists.",
                },
              ],
            }),
            M(
              "testimonials-quote",
              {
                quote:
                  "Six hundred guests, three days, and not a single thing for our parents to worry about. They even found my nani\u2019s favourite folk singer.",
                name: "Ananya & Rohit",
                detail: "Samode Palace, Feb 2026",
                photo: "m_p4",
              },
              { tone: "dark" },
            ),
            M(
              "cta-banner",
              {
                heading: "Planning a wedding this season?",
                text: "Share your date and guest count. We send a detailed proposal within 48 hours.",
                primary: T("Check availability", me("contact", "contact")),
                secondary: T(
                  "WhatsApp us",
                  ca("919414055210", "Hi, we are planning a wedding."),
                ),
              },
              { tone: "muted" },
            ),
          ],
          { isHome: !0 },
        ),
        G("packages", "Packages", "packages", [
          M("pricing-packages", {
            eyebrow: "Packages",
            heading: "Planning packages",
            intro:
              "Planning fee only. Venue, catering and d\xE9cor are billed at cost with no markup.",
            flag: "Most booked",
            items: [
              {
                name: "Intimate",
                price: "\u20B96,50,000",
                period: "up to 150 guests",
                features: `Two ceremonies
Venue shortlist and booking
D\xE9cor design and on-day team`,
                highlight: !1,
                button: T("Enquire", me("contact", "contact")),
              },
              {
                name: "Signature",
                price: "\u20B918,00,000",
                period: "up to 400 guests",
                features: `Four ceremonies
Guest hospitality desk
Sangeet choreography
Dedicated planner from day one`,
                highlight: !0,
                button: T("Enquire", me("contact", "contact")),
              },
              {
                name: "Royal destination",
                price: "\u20B945,00,000",
                period: "palace venues, 3 days",
                features: `Everything in Signature
Travel and stays for guests
Folk artists and fireworks`,
                highlight: !1,
                button: T("Enquire", me("contact", "contact")),
              },
            ],
          }),
          M("faq-accordion", {
            eyebrow: "",
            heading: "Questions couples ask",
            intro: "",
            items: [
              {
                q: "How early should we book?",
                a: "Six to nine months ahead for winter dates. Some palace venues book a year out.",
              },
              {
                q: "Do you work outside Rajasthan?",
                a: "Yes, in Goa, Kerala and Uttarakhand, with a travel fee.",
              },
            ],
          }),
        ]),
        G("gallery", "Gallery", "gallery", [
          M("gallery-grid", {
            eyebrow: "Gallery",
            heading: "Recent weddings",
            layout: "mosaic",
            columns: "3",
            items: [
              { image: "m_mandap", caption: "Phera mandap, Jaipur" },
              { image: "m_palace", caption: "Lakeside sangeet, Udaipur" },
              { image: "m_marigold", caption: "Welcome wall, Pushkar" },
              { image: "m_p4", caption: "Ananya before the haldi" },
            ],
          }),
        ]),
        G("stories", "Stories", "stories", [
          M("testimonials-cards", {
            eyebrow: "Stories",
            heading: "Couples we have planned for",
            showStars: !0,
            items: [
              {
                quote:
                  "Calm, organised and kind to our families. We actually enjoyed our own wedding.",
                name: "Meera & Kabir",
                detail: "Jaipur, Dec 2025",
                photo: "m_p1",
              },
              {
                quote:
                  "They managed 900 guests across two hotels without one missed pickup.",
                name: "Pooja & Harsh",
                detail: "Udaipur, Jan 2026",
                photo: "m_p5",
              },
              {
                quote:
                  "The d\xE9cor was exactly the old-Jaipur look we showed them on Pinterest.",
                name: "Zoya & Imran",
                detail: "Jaipur, Nov 2025",
                photo: "m_p3",
              },
            ],
          }),
        ]),
        G("contact", "Contact", "contact", [
          M(
            "contact-split",
            {
              eyebrow: "Contact",
              heading: "Tell us about your wedding",
              intro: "Your date, city and guest count are enough to start.",
              address: `C-22, Bhawani Singh Road
C-Scheme, Jaipur 302001`,
              phone: "+91 94140 55210",
              whatsapp: "+91 94140 55210",
              waMessage: "Hi, we are planning a wedding.",
              email: "namaste@mangalamweddings.in",
              hours: [{ days: "Mon \u2013 Sat", time: "11 am \u2013 7 pm" }],
              showMap: !1,
              showForm: !0,
              formButton: "Send enquiry",
            },
            { anchor: "contact" },
          ),
        ]),
      ],
      collections: {
        services: { name: "Services", entries: [] },
        blog: { name: "Blog", entries: [] },
      },
    },
    pi = {
      id: "estate",
      name: "Estate",
      industry: "Real estate",
      kind: "Real estate developer",
      description:
        "Clear, trustworthy pages for developers and brokers: project listings with prices, RERA details and brochures.",
      tags: ["light", "minimal"],
      theme: "estate",
      business: "Banyan Grove Realty",
      header: M("header-classic", {
        logo: "Banyan Grove Realty",
        showButton: !0,
        button: T("Schedule a site visit", me("contact", "contact")),
      }),
      footer: M("footer-columns", {
        logo: "Banyan Grove Realty",
        tagline: "RERA-registered homes in west Hyderabad since 2009.",
        address: `8-2-293, Road No. 82
Jubilee Hills, Hyderabad 500033`,
        phone: "+91 99890 47120",
        email: "sales@banyangrove.in",
        socials: [
          {
            network: "instagram",
            url: "https://instagram.com/banyangroverealty",
          },
          { network: "youtube", url: "https://youtube.com/@banyangrove" },
        ],
        copyright: "\xA9 2026 Banyan Grove Realty LLP",
        showCredit: !0,
      }),
      nav: {
        header: [
          z("Projects", F("services")),
          z("About", F("about")),
          z("Contact", F("contact")),
        ],
        footer: [
          z("Projects", F("services")),
          z("About", F("about")),
          z("Contact", F("contact")),
        ],
      },
      pages: [
        G(
          "home",
          "Home",
          "home",
          [
            M("hero-split", {
              eyebrow: "West Hyderabad",
              heading: "Homes near your work, not just your budget",
              body: "Three RERA-registered projects within 20 minutes of the Financial District, with bank tie-ups for quick loans.",
              primary: T("Schedule a site visit", me("contact", "contact")),
              secondary: T("Download brochure", pa("f_brochure")),
              image: "m_villa",
              showBadge: !0,
              badge: "2,300 families moved in since 2009",
            }),
            M("collection-list", {
              eyebrow: "Projects",
              heading: "Now selling",
              intro: "",
              collection: "services",
              limit: 3,
              columns: "3",
              showPrice: !0,
              moreLabel: "View project",
              button: T("All projects", F("services")),
            }),
            M(
              "features-grid",
              {
                eyebrow: "Why Banyan Grove",
                heading: "Buying a home without the guesswork",
                intro: "",
                columns: "3",
                items: [
                  {
                    icon: "shield",
                    title: "RERA registered",
                    text: "Every project and its approvals are on the TS-RERA site.",
                  },
                  {
                    icon: "key",
                    title: "On-time possession",
                    text: "14 of our last 15 projects were handed over early or on time.",
                  },
                  {
                    icon: "award",
                    title: "Loan tie-ups",
                    text: "Pre-approved with five leading banks for faster sanction.",
                  },
                ],
              },
              { tone: "muted" },
            ),
            M("testimonials-cards", {
              eyebrow: "Homeowners",
              heading: "From families who moved in",
              showStars: !0,
              items: [
                {
                  quote:
                    "Possession two months early, and the finish was better than the show flat.",
                  name: "Srinivas Reddy",
                  detail: "Skyline One, 2025",
                  photo: "m_p2",
                },
                {
                  quote:
                    "The site team answered every call, even after handover.",
                  name: "Madhavi Rao",
                  detail: "Palm Court Villas",
                  photo: "m_p1",
                },
                {
                  quote:
                    "Clear paperwork and no hidden charges at registration.",
                  name: "Imtiaz Ali",
                  detail: "Banyan Grove Residences",
                  photo: "m_p5",
                },
              ],
            }),
            M("cta-banner", {
              heading: "See a home this weekend",
              text: "Free pickup from Gachibowli and HITEC City for site visits.",
              primary: T("Book a site visit", me("contact", "contact")),
              secondary: T("Call sales", Bn("+919989047120")),
            }),
          ],
          { isHome: !0 },
        ),
        G(
          "services",
          "Projects",
          "projects",
          [
            M("collection-list", {
              eyebrow: "Projects",
              heading: "All projects",
              intro: "Prices are base prices before registration and GST.",
              collection: "services",
              limit: 9,
              columns: "3",
              showPrice: !0,
              moreLabel: "View project",
              button: T("", F("home")),
            }),
            M("faq-accordion", {
              eyebrow: "",
              heading: "Buying questions",
              intro: "",
              items: [
                {
                  q: "Which banks have approved your projects?",
                  a: "SBI, HDFC Bank, ICICI Bank, Axis Bank and LIC Housing Finance.",
                },
                {
                  q: "Can NRIs buy?",
                  a: "Yes. We handle power of attorney and video walk-throughs.",
                },
              ],
            }),
          ],
          { kind: "list", collectionId: "services" },
        ),
        G(
          "service",
          "Project page",
          ":slug",
          [
            M("entry-hero", {
              showImage: !0,
              showMeta: !0,
              button: T("Book a site visit", me("contact", "contact")),
            }),
            M("entry-body", { showBack: !0, backLabel: "All projects" }),
            M("cta-banner", {
              heading: "Want the floor plans?",
              text: "The brochure has every plan, price and specification.",
              primary: T("Download brochure", pa("f_brochure")),
              secondary: T("", F("home")),
            }),
          ],
          {
            kind: "detail",
            collectionId: "services",
            parent: "services",
            inMenu: !1,
          },
        ),
        G("about", "About", "about", [
          M("about-story", {
            eyebrow: "About",
            heading: "A family firm that builds what it would live in",
            body: "<p>Banyan Grove was started by K. Venkat Rao in 2009 with one apartment block in Madhapur. His children now run the company.</p>",
            image: "m_tower",
            imageSide: "left",
            stats: [
              { value: "17", label: "projects delivered" },
              { value: "2,300", label: "families" },
              { value: "4.6", label: "Google rating" },
            ],
          }),
        ]),
        G("contact", "Contact", "contact", [
          M(
            "contact-split",
            {
              eyebrow: "Contact",
              heading: "Schedule a site visit",
              intro: "Pick a day and we will send a car.",
              address: `8-2-293, Road No. 82
Jubilee Hills, Hyderabad 500033`,
              phone: "+91 99890 47120",
              whatsapp: "+91 99890 47120",
              waMessage: "Hi, I would like to visit a project.",
              email: "sales@banyangrove.in",
              hours: [{ days: "Every day", time: "9:30 am \u2013 7:30 pm" }],
              showMap: !0,
              showForm: !0,
              formButton: "Book a visit",
            },
            { anchor: "contact" },
          ),
        ]),
      ],
      collections: {
        services: {
          name: "Projects",
          entries: [
            {
              slug: "banyan-grove-residences",
              title: "Banyan Grove Residences, Kokapet",
              summary: "3 and 4 BHK apartments with a 2-acre central garden.",
              price: "\u20B91.45 Cr onwards",
              duration: "3 & 4 BHK \xB7 Possession Dec 2027",
              image: "m_tower",
              body: "<p>Two towers of 32 floors, 412 homes, 70% open space. RERA no. P02400006718.</p>",
              status: "published",
            },
            {
              slug: "palm-court-villas",
              title: "Palm Court Villas, Shankarpally",
              summary: "Gated community of 86 villas with private gardens.",
              price: "\u20B92.8 Cr onwards",
              duration: "4 BHK villas \xB7 Ready to move",
              image: "m_villa",
              body: "<p>Villas on 300 to 450 square yard plots, with a clubhouse and pool.</p>",
              status: "published",
            },
            {
              slug: "skyline-one",
              title: "Skyline One, Gachibowli",
              summary:
                "Compact 2 and 3 BHK homes, 8 minutes from the Financial District.",
              price: "\u20B992 L onwards",
              duration: "2 & 3 BHK \xB7 Possession Jun 2027",
              image: "m_tower",
              body: "<p>A single 28-floor tower with 220 homes. RERA no. P02400005123.</p>",
              status: "published",
            },
          ],
        },
        blog: { name: "Blog", entries: [] },
      },
    },
    lt = [oi, ri, li, di, ci, pi],
    dt = Object.fromEntries(lt.map((e) => [e.id, e])),
    Ln = [
      "All",
      "Food & caf\xE9",
      "Health",
      "Design studio",
      "Events",
      "Real estate",
      "Tech",
    ],
    La = [
      ["light", "Light"],
      ["dark", "Dark"],
      ["minimal", "Minimal"],
      ["editorial", "Editorial"],
      ["big-type", "Big type"],
    ];
  var Wt = [
      {
        name: "Fraunces",
        kind: "Serif",
        weight: 600,
        tracking: "-0.02em",
        stack: '"Fraunces", Georgia, serif',
      },
      {
        name: "Instrument Serif",
        kind: "Serif",
        weight: 400,
        tracking: "-0.01em",
        stack: '"Instrument Serif", Georgia, serif',
      },
      {
        name: "Cormorant Garamond",
        kind: "Serif",
        weight: 600,
        tracking: "-0.01em",
        stack: '"Cormorant Garamond", Georgia, serif',
      },
      {
        name: "Playfair Display",
        kind: "Serif",
        weight: 600,
        tracking: "-0.015em",
        stack: '"Playfair Display", Georgia, serif',
      },
      {
        name: "Space Grotesk",
        kind: "Sans",
        weight: 600,
        tracking: "-0.03em",
        stack: '"Space Grotesk", "Helvetica Neue", Arial, sans-serif',
      },
      {
        name: "Outfit",
        kind: "Sans",
        weight: 600,
        tracking: "-0.02em",
        stack: '"Outfit", "Helvetica Neue", Arial, sans-serif',
      },
      {
        name: "Archivo",
        kind: "Sans",
        weight: 700,
        tracking: "-0.025em",
        stack: '"Archivo", "Helvetica Neue", Arial, sans-serif',
      },
      {
        name: "Poppins",
        kind: "Sans",
        weight: 600,
        tracking: "-0.02em",
        stack: '"Poppins", "Helvetica Neue", Arial, sans-serif',
      },
      {
        name: "Manrope",
        kind: "Sans",
        weight: 700,
        tracking: "-0.02em",
        stack: '"Manrope", "Helvetica Neue", Arial, sans-serif',
      },
      {
        name: "DM Sans",
        kind: "Sans",
        weight: 600,
        tracking: "-0.02em",
        stack: '"DM Sans", "Helvetica Neue", Arial, sans-serif',
      },
      {
        name: "IBM Plex Sans",
        kind: "Sans",
        weight: 600,
        tracking: "-0.015em",
        stack: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif',
      },
      {
        name: "Nunito Sans",
        kind: "Sans",
        weight: 700,
        tracking: "-0.01em",
        stack: '"Nunito Sans", "Helvetica Neue", Arial, sans-serif',
      },
      {
        name: "Work Sans",
        kind: "Sans",
        weight: 600,
        tracking: "-0.015em",
        stack: '"Work Sans", "Helvetica Neue", Arial, sans-serif',
      },
      {
        name: "Mulish",
        kind: "Sans",
        weight: 700,
        tracking: "-0.01em",
        stack: '"Mulish", "Helvetica Neue", Arial, sans-serif',
      },
      {
        name: "Inter",
        kind: "Sans",
        weight: 600,
        tracking: "-0.02em",
        stack: '"Inter", "Helvetica Neue", Arial, sans-serif',
      },
    ],
    Ie = Object.fromEntries(Wt.map((e) => [e.name, e]));
  var zn = [
      "background",
      "foreground",
      "primary",
      "secondary",
      "muted",
      "accent",
      "border",
      "highlight",
    ],
    $n = [
      [0, "Square"],
      [4, "Subtle"],
      [10, "Soft"],
      [16, "Round"],
      [999, "Pill"],
    ],
    ma = {
      compact: { label: "Compact", sm: 44, lg: 64 },
      comfortable: { label: "Comfortable", sm: 60, lg: 96 },
      airy: { label: "Airy", sm: 76, lg: 136 },
    },
    Hn = [
      [1040, "Narrow"],
      [1180, "Standard"],
      [1320, "Wide"],
    ],
    Xe = (e, t, a, s, n, i = {}) => ({
      id: e,
      name: t,
      colors: { light: a, dark: s },
      fonts: n,
      radius: 10,
      width: 1180,
      spacing: "comfortable",
      mode: "light",
      ...i,
    }),
    ge = (e, t, a, s, n, i, r, o) => ({
      background: e,
      foreground: t,
      primary: a,
      secondary: s,
      muted: n,
      accent: i,
      border: r,
      highlight: o,
    }),
    ua = [
      Xe(
        "ember",
        "Ember",
        ge(
          "#FFF8F1",
          "#2B1A12",
          "#B4441C",
          "#6B3A23",
          "#F5E8DA",
          "#E2A23B",
          "#EBD8C5",
          "#FBE6BC",
        ),
        ge(
          "#1A120E",
          "#F6EADF",
          "#E36F3F",
          "#C9946B",
          "#2A1E18",
          "#E8AE4D",
          "#3A2B23",
          "#4A3212",
        ),
        { display: "Fraunces", body: "DM Sans" },
        { radius: 12 },
      ),
      Xe(
        "midnight",
        "Midnight",
        ge(
          "#F7F8FB",
          "#0D1222",
          "#4B5CF0",
          "#1F2A44",
          "#ECEFF6",
          "#12B39A",
          "#DCE1EC",
          "#DDE3FF",
        ),
        ge(
          "#0A0D14",
          "#E7EAF2",
          "#8193FF",
          "#A8B3D6",
          "#121826",
          "#3EE0C0",
          "#1F2738",
          "#1C2547",
        ),
        { display: "Space Grotesk", body: "IBM Plex Sans" },
        { radius: 10, width: 1320, mode: "dark" },
      ),
      Xe(
        "atelier",
        "Atelier",
        ge(
          "#F3F1EC",
          "#151515",
          "#151515",
          "#5E5A52",
          "#E7E3DA",
          "#A9824E",
          "#D6D0C4",
          "#E9DCC4",
        ),
        ge(
          "#121212",
          "#EDEAE3",
          "#EDEAE3",
          "#A39E93",
          "#1C1C1B",
          "#C39C62",
          "#2C2B29",
          "#3A3122",
        ),
        { display: "Instrument Serif", body: "Manrope" },
        { radius: 0, width: 1320, spacing: "airy" },
      ),
      Xe(
        "clinic",
        "Clinic",
        ge(
          "#FFFFFF",
          "#10283A",
          "#0B7A83",
          "#1E4E6B",
          "#EFF6F7",
          "#F2A541",
          "#DCE8EB",
          "#D7F0F0",
        ),
        ge(
          "#0B1820",
          "#E4EFF2",
          "#3CB7BF",
          "#8FB6CB",
          "#11232D",
          "#F2B35E",
          "#1E3440",
          "#123A40",
        ),
        { display: "Outfit", body: "Nunito Sans" },
        { radius: 16 },
      ),
      Xe(
        "vow",
        "Vow",
        ge(
          "#FCF8F5",
          "#34232A",
          "#8E1C47",
          "#5D3A45",
          "#F5EBE6",
          "#C49A45",
          "#EBDCD5",
          "#F6E3C8",
        ),
        ge(
          "#1C1216",
          "#F5E9EC",
          "#D6557F",
          "#C9A3AE",
          "#271A1F",
          "#D9B465",
          "#3A2830",
          "#45311A",
        ),
        { display: "Cormorant Garamond", body: "Mulish" },
        { radius: 4, width: 1180, spacing: "airy" },
      ),
      Xe(
        "estate",
        "Estate",
        ge(
          "#F6F7F4",
          "#15211A",
          "#1E5A3C",
          "#3F5246",
          "#E9EDE7",
          "#D19A2A",
          "#D7DED6",
          "#E3EDD7",
        ),
        ge(
          "#0E1511",
          "#E6ECE7",
          "#5FB287",
          "#A3B8AA",
          "#16201A",
          "#E0AE45",
          "#24302A",
          "#22341F",
        ),
        { display: "Archivo", body: "Work Sans" },
        { radius: 8, width: 1320 },
      ),
      Xe(
        "haldi",
        "Haldi",
        ge(
          "#FFFBEF",
          "#1F1A0E",
          "#1F1A0E",
          "#6A5A2C",
          "#FBF1CF",
          "#E3A400",
          "#EFE2B4",
          "#FFE68A",
        ),
        ge(
          "#15120A",
          "#FBF3D8",
          "#F2C230",
          "#CDB878",
          "#211C10",
          "#F2C230",
          "#352E1A",
          "#4A3E12",
        ),
        { display: "Poppins", body: "Work Sans" },
        { radius: 999 },
      ),
      Xe(
        "monsoon",
        "Monsoon",
        ge(
          "#F4F7F7",
          "#18262B",
          "#2C6E7F",
          "#47616A",
          "#E6EEEF",
          "#E07A5F",
          "#D3DFE1",
          "#D8ECEF",
        ),
        ge(
          "#0F181B",
          "#E3ECEE",
          "#6CB4C6",
          "#9BB3BA",
          "#162226",
          "#EE9579",
          "#24353A",
          "#183A42",
        ),
        { display: "Playfair Display", body: "Inter" },
        { radius: 6 },
      ),
    ],
    Et = Object.fromEntries(ua.map((e) => [e.id, e]));
  function za(e) {
    let t = e.colors[e.mode] || e.colors.light,
      a = Ie[e.fonts.display] || Wt[0],
      s = Ie[e.fonts.body] || Ie.Inter,
      n = ma[e.spacing] || ma.comfortable,
      i = Number(e.radius) || 0,
      r,
      o,
      d,
      c;
    e.mode === "dark"
      ? ((r = xt(t.background, t.foreground, 0.07)),
        (o = t.foreground),
        (d = xt(t.background, t.foreground, 0.12)),
        (c = xt(t.background, t.foreground, 0.2)))
      : ((r = t.foreground),
        (o = t.background),
        (d = xt(t.foreground, t.background, 0.08)),
        (c = xt(t.foreground, t.background, 0.2)));
    let l = na(t.primary, r) >= 2.6 ? t.primary : o;
    return {
      "--sf-bg": t.background,
      "--sf-fg": t.foreground,
      "--sf-primary": t.primary,
      "--sf-on-primary": Ia(t.primary),
      "--sf-secondary": t.secondary,
      "--sf-muted": t.muted,
      "--sf-accent": t.accent,
      "--sf-border": t.border,
      "--sf-highlight": t.highlight,
      "--sf-dk-bg": r,
      "--sf-dk-fg": o,
      "--sf-dk-muted": d,
      "--sf-dk-border": c,
      "--sf-dk-primary": l,
      "--sf-dk-on-primary": Ia(l),
      "--sf-font-display": a.stack,
      "--sf-font-body": s.stack,
      "--sf-dw": a.weight,
      "--sf-dt": a.tracking,
      "--sf-radius": Math.min(i, 20) + "px",
      "--sf-rb": (i >= 999 ? 999 : Math.min(i, 14)) + "px",
      "--sf-width": e.width + "px",
      "--sf-space": n.lg + "px",
      "--sf-space-sm": n.sm + "px",
    };
  }
  function ha(e, t) {
    let a = JSON.parse(JSON.stringify(Et[e] || ua[0]));
    return ((a.presetId = e), t && t.mode && (a.mode = t.mode), a);
  }
  function Dt(e, t) {
    if (Array.isArray(e)) return e.forEach((a) => Dt(a, t));
    !e ||
      typeof e != "object" ||
      ((e.type === "page" || e.type === "anchor") &&
        typeof e.pageId == "string" &&
        e.pageId &&
        e.pageId !== "@home" &&
        (e.pageId = t(e.pageId)),
      Object.values(e).forEach((a) => Dt(a, t)));
  }
  function $a(e, t, a) {
    if (!t || t === a) return e;
    if (typeof e == "string") return e.split(t).join(a);
    if (Array.isArray(e)) return e.map((s) => $a(s, t, a));
    if (e && typeof e == "object") {
      let s = {};
      for (let n of Object.keys(e))
        s[n] =
          n === "image" || n === "photo" || n === "pageId"
            ? e[n]
            : $a(e[n], t, a);
      return s;
    }
    return e;
  }
  function Be(e, t, a = {}) {
    let s = ne[e];
    return {
      id: Z("s"),
      block: e,
      values: X(t || s.defaults),
      tone: a.tone || s.defaultTone || "default",
      anchor: a.anchor != null ? a.anchor : s.anchor || "",
      hidden: !1,
    };
  }
  var Ha = (e, t) => {
    let a = X(e.to);
    return (
      Dt(a, t),
      {
        id: Z("n"),
        label: e.label,
        to: a,
        newTab: !1,
        children: (e.children || []).map((s) => Ha(s, t)),
      }
    );
  };
  function mi() {
    return {
      id: "p_404",
      key: "404",
      title: "Page not found",
      slug: "404",
      parentId: null,
      isHome: !1,
      kind: "notfound",
      inMenu: !1,
      status: "live",
      seo: {
        title: "Page not found",
        description: "This page does not exist.",
        image: "",
      },
      header: "shared",
      footer: "shared",
      headerOwn: null,
      footerOwn: null,
      sections: [
        Be("rich-text", {
          heading: "We couldn\u2019t find that page",
          body: '<p>The link may be old or mistyped. Go back to the <a href="/">home page</a>, or use the menu above to find what you need.</p>',
          width: "narrow",
        }),
      ],
    };
  }
  function fa(e, t) {
    let a = e.sections.map((s) => {
      let n = Be(s.block, s.values, { tone: s.tone, anchor: s.anchor });
      return (Dt(n.values, t), n);
    });
    return {
      id: t(e.key),
      key: e.key,
      title: e.title,
      slug: e.slug,
      parentId: e.parent ? t(e.parent) : null,
      isHome: !!e.isHome,
      kind: e.kind || "page",
      collectionId: e.collectionId || null,
      inMenu: e.inMenu !== !1,
      status: e.status || "live",
      seo: X(e.seo || { title: "", description: "", image: "" }),
      header: "shared",
      footer: "shared",
      headerOwn: null,
      footerOwn: null,
      sections: a,
    };
  }
  function tt(e, { name: t, subdomain: a }) {
    let s = (l) => "p_" + l,
      n = e.business,
      i = $a(X(e), n, t || n),
      r = Be(i.header.block, i.header.values),
      o = Be(i.footer.block, i.footer.values);
    (Dt(r.values, s), Dt(o.values, s));
    let d = i.pages.map((l) => fa(l, s));
    d.push(mi());
    let c = {};
    for (let l of ["services", "blog"]) {
      let h = (i.collections && i.collections[l]) || {
        name: l === "blog" ? "Blog" : "Services",
        entries: [],
      };
      c[l] = {
        id: l,
        name: h.name,
        entries: h.entries.map((g) => ({ id: "e_" + g.slug, ...X(g) })),
      };
    }
    return {
      id: Z("site"),
      name: t || n,
      subdomain: a || fe(t || n),
      templateId: e.id,
      theme: ha(e.theme),
      shared: { header: r, footer: o },
      pages: d,
      collections: c,
      nav: {
        header: i.nav.header.map((l) => Ha(l, s)),
        footer: i.nav.footer.map((l) => Ha(l, s)),
        autoAdd: !0,
      },
      redirects: [],
    };
  }
  var ve = (e) => e.pages.find((t) => t.isHome) || e.pages[0];
  function V(e, t) {
    return t
      ? t === "@home"
        ? ve(e)
        : e.pages.find((a) => a.id === t) || null
      : null;
  }
  function O(e, t) {
    if (!t) return null;
    if (t.isHome) return "/";
    if (t.kind === "notfound") return "/404";
    let a = [],
      s = t,
      n = new Set();
    for (; s && !n.has(s.id);)
      (n.add(s.id),
        s.isHome || a.unshift(s.slug),
        (s = s.parentId ? V(e, s.parentId) : null));
    return "/" + a.join("/");
  }
  var ct = (e, t) =>
    e.pages.find((a) => a.kind === "detail" && a.collectionId === t) || null;
  function at(e, t, a) {
    let s = ct(e, t);
    return !s || !a ? null : O(e, s).replace(":slug", a.slug);
  }
  function et(e) {
    let t = String(e || "/").trim();
    return (
      (t = t.replace(/^https?:\/\/[^/]+/i, "")),
      (t = t.split("#")[0].split("?")[0]),
      t.startsWith("/") || (t = "/" + t),
      (t = t.replace(/\/+/g, "/")),
      t.length > 1 && (t = t.replace(/\/$/, "")),
      t.toLowerCase()
    );
  }
  function $e(e, t, a = 0) {
    let s = et(t);
    for (let n of e.pages)
      if (n.kind !== "detail" && O(e, n) === s) return { page: n };
    for (let n of e.pages) {
      if (n.kind !== "detail") continue;
      let i = O(e, n).replace("/:slug", "");
      if (s.startsWith(i + "/")) {
        let r = s.slice(i.length + 1),
          o = e.collections[n.collectionId],
          d = o && o.entries.find((c) => c.slug === r);
        if (d) return { page: n, entry: d };
      }
    }
    if (a < 4)
      for (let n of e.redirects) {
        let i = et(n.from.replace(/\/\*$/, ""));
        if (n.from.endsWith("/*")) {
          if (s.startsWith(i + "/")) {
            let r = s.slice(i.length),
              o = n.to.endsWith("/*") ? n.to.replace(/\/\*$/, "") + r : n.to;
            return { redirect: n, to: o, ...($e(e, o, a + 1) || {}) };
          }
        } else if (i === s)
          return { redirect: n, to: n.to, ...($e(e, n.to, a + 1) || {}) };
      }
    return null;
  }
  function ui(e, t) {
    let a = [],
      s = (n) =>
        e.pages
          .filter((i) => i.parentId === n)
          .forEach((i) => {
            (a.push(i), s(i.id));
          });
    return (s(t), a);
  }
  function ga(e, t, a, s) {
    let n = V(e, t);
    if (!n || n.isHome || n.kind === "notfound" || n.kind === "detail")
      return null;
    let i = { ...n, slug: a, parentId: s },
      r = { ...e, pages: e.pages.map((d) => (d.id === t ? i : d)) },
      o = O(r, i);
    return (
      r.pages.find((d) => d.id !== t && d.kind !== "detail" && O(r, d) === o) ||
      null
    );
  }
  var On = (e) => String(e || "").replace(/[^0-9]/g, "");
  function _e(e, t, a = {}) {
    let s = a.media || {};
    if (!t || !t.type)
      return { kind: "none", href: "#", broken: !0, reason: "No link set" };
    switch (t.type) {
      case "page": {
        let n = V(e, t.pageId);
        return n
          ? {
              kind: "page",
              href: O(e, n),
              internal: !0,
              pageId: n.id,
              target: n,
              warn: n.status !== "live" ? n.status : null,
              current: a.pageId === n.id && !a.entryId,
            }
          : {
              kind: "page",
              href: "#",
              broken: !0,
              reason: "The page it pointed to was deleted",
            };
      }
      case "anchor": {
        let n = t.pageId ? V(e, t.pageId) : V(e, a.pageId);
        if (!n)
          return {
            kind: "anchor",
            href: "#",
            broken: !0,
            reason: "The page it pointed to was deleted",
          };
        let r = It(e, n).some((o) => o.anchor === t.anchor && !o.hidden);
        return {
          kind: "anchor",
          href: O(e, n) + "#" + t.anchor,
          internal: !0,
          pageId: n.id,
          anchor: t.anchor,
          target: n,
          broken: !t.anchor || !r,
          reason: t.anchor
            ? r
              ? null
              : `No visible #${t.anchor} section on ${n.title}`
            : "No section chosen",
          warn: n.status !== "live" ? n.status : null,
        };
      }
      case "collection": {
        let n = e.collections[t.collectionId],
          i = n && n.entries.find((o) => o.id === t.entryId);
        if (!i)
          return {
            kind: "collection",
            href: "#",
            broken: !0,
            reason: "That entry was deleted",
          };
        let r = at(e, t.collectionId, i);
        return r
          ? {
              kind: "collection",
              href: r,
              internal: !0,
              entry: i,
              collectionId: t.collectionId,
              pageId: ct(e, t.collectionId).id,
              warn: i.status === "draft" ? "draft" : null,
              current: a.entryId === i.id,
            }
          : {
              kind: "collection",
              href: "#",
              broken: !0,
              reason: `${n.name} has no detail page`,
            };
      }
      case "url": {
        let n = String(t.url || "").trim(),
          i = /^https?:\/\/[^\s/]+\.[^\s]+/i.test(n);
        return {
          kind: "url",
          href: i ? n : "#",
          external: !0,
          broken: !i,
          reason: n ? "Not a valid web address" : "No web address",
        };
      }
      case "phone": {
        let n = On(t.phone);
        return {
          kind: "phone",
          href: "tel:+" + n,
          broken: n.length < 10,
          reason: "Phone number looks incomplete",
        };
      }
      case "whatsapp": {
        let n = On(t.phone);
        return {
          kind: "whatsapp",
          href: `https://wa.me/${n}${t.message ? "?text=" + encodeURIComponent(t.message) : ""}`,
          external: !0,
          broken: n.length < 10,
          reason: "WhatsApp number looks incomplete",
        };
      }
      case "email": {
        let n = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t.email || "").trim());
        return {
          kind: "email",
          href:
            "mailto:" +
            t.email +
            (t.subject ? "?subject=" + encodeURIComponent(t.subject) : ""),
          broken: !n,
          reason: "Email address looks wrong",
        };
      }
      case "file": {
        let n = s[t.fileId];
        return n
          ? { kind: "file", href: "/files/" + n.name, file: n }
          : {
              kind: "file",
              href: "#",
              broken: !0,
              reason: "That file was deleted from the media library",
            };
      }
      default:
        return { kind: "none", href: "#", broken: !0, reason: "Unknown link" };
    }
  }
  function pt(e, t, a = {}) {
    if (!t || !t.type) return "No link";
    let s = t.pageId ? V(e, t.pageId) : null;
    switch (t.type) {
      case "page":
        return s ? `${s.title} \xB7 ${O(e, s)}` : "Deleted page";
      case "anchor":
        return `#${t.anchor || "?"}${t.pageId ? " on " + (s ? s.title : "deleted page") : " on this page"}`;
      case "collection": {
        let n = e.collections[t.collectionId],
          i = n && n.entries.find((r) => r.id === t.entryId);
        return i ? `${i.title} \xB7 ${n.name}` : "Deleted entry";
      }
      case "url":
        return t.url || "No address";
      case "phone":
        return "Call " + (t.phone || "\u2026");
      case "whatsapp":
        return "WhatsApp " + (t.phone || "\u2026");
      case "email":
        return "Email " + (t.email || "\u2026");
      case "file":
        return a[t.fileId] ? "Download " + a[t.fileId].name : "Deleted file";
      default:
        return "Link";
    }
  }
  var mt = {
    page: "pages",
    anchor: "hash",
    collection: "db",
    url: "globe",
    phone: "call",
    whatsapp: "whatsapp",
    email: "mail",
    file: "download",
    none: "link",
  };
  function qt(e, t) {
    return !t || t.header === "hidden"
      ? null
      : t.header === "detached" && t.headerOwn
        ? t.headerOwn
        : e.shared.header;
  }
  function Gt(e, t) {
    return !t || t.footer === "hidden"
      ? null
      : t.footer === "detached" && t.footerOwn
        ? t.footerOwn
        : e.shared.footer;
  }
  function It(e, t) {
    return [qt(e, t), ...t.sections, Gt(e, t)].filter(Boolean);
  }
  function he(e, t) {
    if (e.shared.header.id === t)
      return { sec: e.shared.header, where: "shared-header" };
    if (e.shared.footer.id === t)
      return { sec: e.shared.footer, where: "shared-footer" };
    for (let a of e.pages) {
      if (a.headerOwn && a.headerOwn.id === t)
        return { sec: a.headerOwn, where: "own-header", page: a };
      if (a.footerOwn && a.footerOwn.id === t)
        return { sec: a.footerOwn, where: "own-footer", page: a };
      let s = a.sections.findIndex((n) => n.id === t);
      if (s >= 0)
        return { sec: a.sections[s], where: "page", page: a, index: s };
    }
    return null;
  }
  function Rn(e, t, a, s, n) {
    for (let i of e) {
      if (i.when && !t[i.when]) continue;
      let r = t[i.key];
      i.type === "link"
        ? r && r.label && s(r, { ...n, path: [...a, i.key], field: i.label })
        : i.type === "list" && Array.isArray(r)
          ? r.forEach((o, d) =>
              Rn(i.item, o, [...a, i.key, d], s, { ...n, item: d }),
            )
          : i.type === "image" &&
            r !== void 0 &&
            s(null, { ...n, path: [...a, i.key], field: i.label, image: r });
    }
  }
  function Oa(e, t) {
    let a = (s, n) => {
      let i = ne[s.block];
      !i ||
        s.hidden ||
        Rn(i.fields, s.values, [], t, {
          ...n,
          sid: s.id,
          block: i.title,
          blockId: i.id,
        });
    };
    (a(e.shared.header, { area: "Shared header" }),
      a(e.shared.footer, { area: "Shared footer" }));
    for (let s of e.pages)
      (s.headerOwn &&
        s.header === "detached" &&
        a(s.headerOwn, { area: s.title + " header", pageId: s.id }),
        s.footerOwn &&
          s.footer === "detached" &&
          a(s.footerOwn, { area: s.title + " footer", pageId: s.id }),
        s.sections.forEach((n) => a(n, { area: s.title, pageId: s.id })));
  }
  function _n(e, t) {
    Oa(e, (s, n) => {
      s && t(s.to, { ...n, label: s.label });
    });
    let a = (s, n) =>
      s.forEach((i) => {
        (t(i.to, { area: n, label: i.label, navId: i.id }),
          a(i.children || [], n));
      });
    (a(e.nav.header, "Header menu"), a(e.nav.footer, "Footer menu"));
  }
  function ya(e, t) {
    let a = [],
      s = [],
      n = [],
      i = (c) => c.pageId || null;
    (_n(e, (c, l) => {
      let h = l.pageId || ve(e).id,
        g = _e(e, c, { media: t, pageId: h }),
        m = l.navId ? l.area : `${l.area} \u203A ${l.block}`;
      if (g.broken)
        a.push({
          id: "b" + a.length,
          kind: "broken",
          title: `\u201C${l.label}\u201D has a broken link`,
          detail: `${m} \xB7 ${g.reason}`,
          target: { pageId: i(l), sid: l.sid, nav: !!l.navId },
        });
      else if (g.warn) {
        let u = g.target ? g.target.title : g.entry ? g.entry.title : "";
        s.push({
          id: "h" + s.length,
          kind: "hidden",
          title: `\u201C${l.label}\u201D links to ${g.warn === "draft" ? "a draft" : "a hidden"} page`,
          detail: `${m} \u2192 ${u}. Visitors ${g.warn === "draft" ? "will see the 404 page until it is published" : "can open it, but it is hidden from search"}.`,
          target: { pageId: i(l), sid: l.sid, nav: !!l.navId },
        });
      }
    }),
      Oa(e, (c, l) => {
        c ||
          l.image === void 0 ||
          (l.image &&
            !t[l.image] &&
            a.push({
              id: "i" + a.length,
              kind: "image",
              title: "A photo was deleted",
              detail: `${l.area} \u203A ${l.block} \xB7 ${l.field}. Pick another photo to publish.`,
              target: { pageId: l.pageId || null, sid: l.sid },
            }));
      }));
    for (let c of e.pages) {
      if (c.status === "draft" || c.kind === "notfound" || c.kind === "detail")
        continue;
      if (!c.seo.title || !c.seo.description) {
        let h = [!c.seo.title && "title", !c.seo.description && "description"]
          .filter(Boolean)
          .join(" and ");
        s.push({
          id: "s" + c.id,
          kind: "seo",
          title: `${c.title} has no search ${h}`,
          detail: `${O(e, c)} \xB7 Google will guess one from the page text.`,
          target: { pageId: c.id, settings: !0 },
        });
      }
      let l = ga(e, c.id, c.slug, c.parentId);
      l &&
        a.push({
          id: "c" + c.id,
          kind: "clash",
          title: `${c.title} and ${l.title} share a URL`,
          detail: `Both are at ${O(e, c)}. Change one slug.`,
          target: { pageId: c.id, settings: !0 },
        });
    }
    let r = e.pages.filter((c) => c.status === "draft");
    r.length &&
      n.push({
        id: "d",
        kind: "draft",
        title: `${r.length === 1 ? "1 draft page stays" : r.length + " draft pages stay"} unpublished`,
        detail: r.map((c) => c.title).join(", "),
        target: { pageId: r[0].id, settings: !0 },
      });
    let o = Object.values(e.collections).flatMap((c) =>
      c.entries.filter((l) => l.status === "draft").map((l) => l.title),
    );
    o.length &&
      n.push({
        id: "de",
        kind: "draft",
        title: `${o.length} draft ${o.length === 1 ? "entry stays" : "entries stay"} unpublished`,
        detail: o.join(", "),
        target: { collections: !0 },
      });
    let d = [];
    return (
      a.some((c) => c.kind === "broken") || d.push("Every link works"),
      s.some((c) => c.kind === "hidden") ||
        d.push("No links to hidden or draft pages"),
      s.some((c) => c.kind === "seo") ||
        d.push("Every page has a search title and description"),
      a.some((c) => c.kind === "image") || d.push("All photos are in place"),
      a.some((c) => c.kind === "clash") || d.push("Every page has its own URL"),
      { errors: a, warnings: s, info: n, passed: d }
    );
  }
  function jt(e, t) {
    if (!e)
      return t.pages
        .filter((i) => i.status !== "draft")
        .map((i) => ({
          kind: "page",
          pageId: i.id,
          title: i.title,
          status: "new",
          detail: "First publish",
        }));
    let a = [],
      s = Object.fromEntries(e.pages.map((i) => [i.id, i]));
    for (let i of t.pages) {
      let r = s[i.id];
      if (!r) {
        a.push({
          kind: "page",
          pageId: i.id,
          title: i.title,
          status: "new",
          detail:
            i.status === "draft" ? "New \xB7 draft, not published" : "New page",
        });
        continue;
      }
      if (Le(r, i)) continue;
      let o = Object.fromEntries(r.sections.map((u) => [u.id, u])),
        d = 0,
        c = 0;
      i.sections.forEach((u) => {
        o[u.id] ? Le(o[u.id], u) || d++ : c++;
      });
      let l = r.sections.filter(
          (u) => !i.sections.some((b) => b.id === u.id),
        ).length,
        h =
          !d &&
          !c &&
          !l &&
          r.sections.map((u) => u.id).join() !==
            i.sections.map((u) => u.id).join(),
        g = !Le(
          { ...r, sections: 0, headerOwn: 0, footerOwn: 0 },
          { ...i, sections: 0, headerOwn: 0, footerOwn: 0 },
        ),
        m = [
          d && `${d} section${d > 1 ? "s" : ""} edited`,
          c && `${c} added`,
          l && `${l} removed`,
          h && "sections reordered",
          g && "settings changed",
          (!Le(r.headerOwn, i.headerOwn) || !Le(r.footerOwn, i.footerOwn)) &&
            "own header/footer",
        ].filter(Boolean);
      a.push({
        kind: "page",
        pageId: i.id,
        title: i.title,
        status: "edited",
        detail: m.join(", ") || "Edited",
      });
    }
    for (let i of e.pages)
      t.pages.some((r) => r.id === i.id) ||
        a.push({
          kind: "page",
          pageId: null,
          title: i.title,
          status: "removed",
          detail: "Deleted \xB7 will go offline",
        });
    let n = (i, r, o, d) =>
      !Le(r, o) &&
      a.push({ kind: "global", title: i, status: "edited", detail: d });
    (n(
      "Theme",
      e.theme,
      t.theme,
      "Colours, fonts or spacing \xB7 affects every page",
    ),
      n(
        "Shared header",
        e.shared.header,
        t.shared.header,
        "Affects every page that uses it",
      ),
      n(
        "Shared footer",
        e.shared.footer,
        t.shared.footer,
        "Affects every page that uses it",
      ),
      n("Menus", e.nav, t.nav, "Header or footer menu"),
      n(
        "Redirects",
        e.redirects,
        t.redirects,
        `${t.redirects.length} redirects`,
      ));
    for (let i of Object.keys(t.collections)) {
      let r = e.collections[i],
        o = t.collections[i];
      if (!Le(r, o)) {
        let d =
          o.entries.filter(
            (c) =>
              !r ||
              !Le(
                r.entries.find((l) => l.id === c.id),
                c,
              ),
          ).length +
          (r
            ? r.entries.filter((c) => !o.entries.some((l) => l.id === c.id))
                .length
            : 0);
        a.push({
          kind: "collection",
          title: o.name,
          status: "edited",
          detail: `${d} entr${d === 1 ? "y" : "ies"} changed`,
        });
      }
    }
    return a;
  }
  function Wn(e, t, a, s) {
    let n = V(e, t);
    if (!n) return [];
    let i = s !== void 0 && (s || null) !== (n.parentId || null);
    if (n.slug === a && !i) return [];
    let r = [n, ...ui(e, t)],
      o = r.map((l) => O(e, l));
    ((n.slug = a), i && (n.parentId = s || null));
    let d = r.map((l) => O(e, l)),
      c = [];
    return (
      r.forEach((l, h) => {
        if (o[h] === d[h]) return;
        let g = l.kind === "detail",
          m = g ? o[h].replace("/:slug", "/*") : o[h],
          u = g ? d[h].replace("/:slug", "/*") : d[h];
        if (
          l.status !== "draft" &&
          (e.redirects.forEach((b) => {
            b.to === m && (b.to = u);
          }),
          (e.redirects = e.redirects.filter(
            (b) => b.from !== u && b.from !== b.to,
          )),
          !e.redirects.some((b) => b.from === m))
        ) {
          let b = {
            id: Z("r"),
            from: m,
            to: u,
            code: 301,
            auto: !0,
            created: Date.now(),
          };
          (e.redirects.unshift(b), c.push(b));
        }
      }),
      c
    );
  }
  function qn(e, t, a) {
    let s = [];
    return (
      _n(e, (n, i) => {
        if (
          n &&
          (n.type === "page" || n.type === "anchor") &&
          (n.pageId === t || (n.pageId === "@home" && ve(e).id === t))
        ) {
          if (i.pageId === t && !i.navId) return;
          s.push(i);
        }
      }),
      { links: s, children: e.pages.filter((n) => n.parentId === t) }
    );
  }
  function Gn(e, t, { relinkTo: a, redirect: s } = {}) {
    let n = V(e, t);
    if (!n) return;
    let i = O(e, n);
    if (s && a) {
      let o = V(e, a);
      o &&
        e.redirects.unshift({
          id: Z("r"),
          from: i,
          to: O(e, o),
          code: 301,
          auto: !0,
          created: Date.now(),
        });
    }
    ((e.pages = e.pages.filter(
      (o) => !(o.parentId === t && o.kind === "detail"),
    )),
      e.pages.forEach((o) => {
        o.parentId === t && (o.parentId = n.parentId || null);
      }));
    let r = (o) =>
      o
        .filter(
          (d) =>
            !(
              d.to &&
              (d.to.type === "page" || d.to.type === "anchor") &&
              d.to.pageId === t
            ),
        )
        .map((d) => ({ ...d, children: r(d.children || []) }));
    if (
      ((e.nav.header = r(e.nav.header)), (e.nav.footer = r(e.nav.footer)), a)
    ) {
      let o = (d) => {
        if (Array.isArray(d)) return d.forEach(o);
        !d ||
          typeof d != "object" ||
          ((d.type === "page" || d.type === "anchor") &&
            d.pageId === t &&
            ((d.type = "page"), (d.pageId = a), delete d.anchor),
          Object.values(d).forEach(o));
      };
      (o(e.shared), e.pages.forEach((d) => d.id !== t && o(d)));
    }
    e.pages = e.pages.filter((o) => o.id !== t);
  }
  function Ra(e, t) {
    if (
      !e.nav.autoAdd ||
      !t.inMenu ||
      t.kind === "detail" ||
      t.kind === "notfound"
    )
      return !1;
    let a = {
      id: Z("n"),
      label: t.title,
      to: { type: "page", pageId: t.id },
      newTab: !1,
      children: [],
    };
    if (t.parentId) {
      let s = e.nav.header.find((n) => n.to && n.to.pageId === t.parentId);
      if (s) return (s.children.push(a), !0);
    }
    return (e.nav.header.push(a), !0);
  }
  function Bt(e, t, a, s) {
    let n = t || "page",
      i = 2,
      r = (o) =>
        e.pages.some(
          (d) =>
            d.id !== s &&
            d.kind !== "detail" &&
            (d.parentId || null) === (a || null) &&
            d.slug === o &&
            !d.isHome,
        );
    for (; r(n);) n = `${t}-${i++}`;
    return n;
  }
  function jn(e, t, a, { parentId: s } = {}) {
    let n = dt[t],
      i = n.pages.find((h) => h.key === a),
      r = (h) => {
        let g = n.pages.find((u) => u.key === h),
          m =
            g &&
            e.pages.find(
              (u) => u.slug === g.slug && u.kind === (g.kind || "page"),
            );
        return h === a ? "p_new" : m ? m.id : "p_" + h;
      },
      o = JSON.parse(JSON.stringify(i).split(n.business).join(e.name)),
      d = fa({ ...o, isHome: !1, parent: null }, r);
    d.id = Z("p");
    let c = (h) => {
      if (Array.isArray(h)) return h.forEach(c);
      !h ||
        typeof h != "object" ||
        ((h.type === "page" || h.type === "anchor") &&
          h.pageId === "p_new" &&
          (h.pageId = d.id),
        Object.values(h).forEach(c));
    };
    (c(d.sections),
      (d.parentId = s || null),
      (d.slug = Bt(e, i.slug === "home" ? "home-2" : i.slug, d.parentId)),
      (d.status = "draft"));
    let l = [d];
    if (i.kind === "list") {
      let h = ct(e, i.collectionId),
        g = n.pages.find(
          (m) => m.kind === "detail" && m.collectionId === i.collectionId,
        );
      if (!h && g) {
        let m = fa(
          {
            ...JSON.parse(JSON.stringify(g).split(n.business).join(e.name)),
            parent: null,
          },
          r,
        );
        ((m.id = Z("p")), (m.parentId = d.id), (m.status = "draft"), l.push(m));
      }
    }
    return l;
  }
  function Vn(e, t, a) {
    return {
      id: Z("p"),
      title: t,
      slug: Bt(e, fe(t) || "new-page", a),
      parentId: a || null,
      isHome: !1,
      kind: "page",
      collectionId: null,
      inMenu: !0,
      status: "draft",
      seo: { title: "", description: "", image: "" },
      header: "shared",
      footer: "shared",
      headerOwn: null,
      footerOwn: null,
      sections: [
        Be("rich-text", {
          heading: t,
          body: "<p>Start writing, or add sections from the library.</p>",
          width: "narrow",
        }),
      ],
    };
  }
  function _a(e, t) {
    let a = V(e, t),
      s = X(a);
    return (
      (s.id = Z("p")),
      (s.title = a.title + " (copy)"),
      (s.isHome = !1),
      (s.status = "draft"),
      (s.slug = Bt(
        e,
        a.kind === "detail" ? a.slug : (a.isHome ? "home" : a.slug) + "-copy",
        a.parentId,
      )),
      (a.kind === "detail" || a.kind === "notfound") && (s.kind = "page"),
      s.sections.forEach((n) => (n.id = Z("s"))),
      s.headerOwn && (s.headerOwn.id = Z("s")),
      s.footerOwn && (s.footerOwn.id = Z("s")),
      s
    );
  }
  function Kn(e, t) {
    let a = ne[t],
      s = X(a.defaults);
    for (let n of a.fields) {
      let i = e.values[n.key];
      if (i === void 0) continue;
      let r = (ne[e.block].fields.find((d) => d.key === n.key) || {}).type;
      ((r === n.type ||
        (["text", "textarea"].includes(r) &&
          ["text", "textarea"].includes(n.type))) &&
        n.type !== "list" &&
        (s[n.key] = X(i)),
        n.type === "list" &&
          r === "list" &&
          Array.isArray(i) &&
          (s[n.key] = i.map((d) => ({
            ...X(n.newItem || {}),
            ...Object.fromEntries(
              Object.entries(d).filter(([c]) =>
                n.item.some((l) => l.key === c),
              ),
            ),
          }))));
    }
    return (
      !s.heading && e.values.heading && (s.heading = e.values.heading),
      { ...e, block: t, values: s, tone: a.defaultTone || e.tone }
    );
  }
  function Un(e, t) {
    let a = [];
    Oa(e, (s, n) => {
      (!s && n.image === t && a.push(n.area),
        s &&
          s.to &&
          s.to.type === "file" &&
          s.to.fileId === t &&
          a.push(n.area));
    });
    for (let s of e.pages)
      s.seo.image === t && a.push(s.title + " (share image)");
    for (let s of Object.values(e.collections))
      for (let n of s.entries) n.image === t && a.push(`${s.name}: ${n.title}`);
    return [...new Set(a)];
  }
  var ut = (e) => Date.parse(e);
  function Wa() {
    let e = tt(dt.clinic, {
      name: "Pearl Dental Studio",
      subdomain: "pearldental",
    });
    e.id = "site_pearl";
    let a = e.pages
      .find((c) => c.id === "p_about")
      .sections.find((c) => c.block === "cta-banner");
    ((a.values.primary = {
      label: "See this month\u2019s offers",
      to: { type: "page", pageId: "p_offers" },
      newTab: !1,
    }),
      (e.redirects = [
        {
          id: "r1",
          from: "/treatments",
          to: "/services",
          code: 301,
          auto: !0,
          created: ut("2026-08-04T12:10:00+05:30"),
        },
        {
          id: "r2",
          from: "/treatments/*",
          to: "/services/*",
          code: 301,
          auto: !0,
          created: ut("2026-08-04T12:10:00+05:30"),
        },
        {
          id: "r3",
          from: "/dr-meera",
          to: "/about",
          code: 301,
          auto: !1,
          created: ut("2026-05-19T09:30:00+05:30"),
        },
      ]));
    let s = X(e);
    s.pages.splice(s.pages.length - 1, 0, {
      id: "p_offers",
      key: "offers",
      title: "Monsoon offers",
      slug: "offers",
      parentId: null,
      isHome: !1,
      kind: "page",
      collectionId: null,
      inMenu: !1,
      status: "live",
      seo: {
        title: "Monsoon offers",
        description: "Check-up and whitening offers for July to September.",
        image: "",
      },
      header: "shared",
      footer: "shared",
      headerOwn: null,
      footerOwn: null,
      sections: [
        Be("rich-text", {
          heading: "Monsoon offers",
          body: "<p>Check-up with scaling for \u20B9999 until 30 September.</p>",
          width: "narrow",
        }),
      ],
    });
    let n = s.pages[0].sections[0];
    ((n.values.heading = "Gentle dentistry for the whole family"),
      (s.collections.services.entries[0].price = "From \u20B910,500"));
    let i = X(e);
    (i.pages.splice(i.pages.length - 1, 0, {
      id: "p_careers",
      key: "careers",
      title: "Careers",
      slug: "careers",
      parentId: null,
      isHome: !1,
      kind: "page",
      collectionId: null,
      inMenu: !1,
      status: "draft",
      seo: { title: "", description: "", image: "" },
      header: "shared",
      footer: "shared",
      headerOwn: null,
      footerOwn: null,
      sections: [
        Be("rich-text", {
          heading: "Work with us",
          body: "<p>We are hiring a <strong>dental assistant</strong> and a <strong>front desk executive</strong> for our Anna Nagar clinic.</p><ul><li>Six-day week, 10 am to 8 pm, with a rota for Sundays</li><li>Health insurance for you and your family</li><li>Paid training on our scanners and software</li></ul><p>Send your CV to hello@pearldental.in or WhatsApp +91 98400 21456.</p>",
          width: "narrow",
        }),
      ],
    }),
      i.nav.footer.push({
        id: "n_careers",
        label: "Careers",
        to: { type: "page", pageId: "p_careers" },
        newTab: !1,
        children: [],
      }));
    let r = X(s);
    r.pages[0].sections[0].values.badge = "4.9 on Google \xB7 1,180 reviews";
    let o = X(r);
    ((o.theme.colors.light.primary = "#1E6F8F"),
      o.pages[0].sections.splice(4, 1));
    let d = [
      {
        id: "v14",
        n: 14,
        at: ut("2026-11-02T18:42:00+05:30"),
        by: "Dr. Meera R.",
        note: "Added monsoon offers page",
        site: s,
      },
      {
        id: "v13",
        n: 13,
        at: ut("2026-10-27T11:05:00+05:30"),
        by: "Revathi S.",
        note: "Updated review count",
        site: r,
      },
      {
        id: "v12",
        n: 12,
        at: ut("2026-10-09T16:20:00+05:30"),
        by: "Dr. Meera R.",
        note: "New FAQ section, teal colour",
        site: o,
      },
      {
        id: "v11",
        n: 11,
        at: ut("2026-09-14T10:02:00+05:30"),
        by: "Dr. Meera R.",
        note: "Blog launched",
        site: X(o),
      },
    ];
    return { site: i, published: s, versions: d };
  }
  var {
      useState: qa,
      useEffect: ba,
      useRef: Vt,
      useLayoutEffect: Qn,
      useCallback: hi,
      createContext: Yn,
      useContext: Zn,
    } = React,
    Jn = {
      pages:
        "M7 3h7l5 5v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM14 3v5h5",
      sections: "M4 4h16v6H4zM4 14h16v6H4z",
      nav: "M4 7h16M4 12h10M4 17h16",
      theme:
        "M12 3a9 9 0 1 0 0 18c1.1 0 1.5-.8 1.5-1.6 0-1-.7-1.4-.7-2.3 0-.9.7-1.6 1.6-1.6H17a4 4 0 0 0 4-4c0-4.7-4-8.5-9-8.5zM7.5 11.5h.01M10 7.5h.01M15 7.5h.01",
      image:
        "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM3 16l5-5 4 4 3-3 6 6M15.5 9.5h.01",
      plus: "M12 5v14M5 12h14",
      minus: "M5 12h14",
      trash: "M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3",
      copy: "M9 9h10v10H9zM5 15V5h10",
      eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
      eyeOff:
        "M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4.2M6.6 6.6C3.8 8.4 2 12 2 12s3.5 7 10 7a9.6 9.6 0 0 0 5.4-1.6M9.9 9.9a3 3 0 0 0 4.2 4.2",
      grip: "M9 6h.01M15 6h.01M9 12h.01M15 12h.01M9 18h.01M15 18h.01",
      down: "M6 9l6 6 6-6",
      right: "M9 6l6 6-6 6",
      left: "M15 6l-6 6 6 6",
      up: "M6 15l6-6 6 6",
      undo: "M9 14L4 9l5-5M4 9h11a5 5 0 0 1 0 10h-3",
      redo: "M15 14l5-5-5-5M20 9H9a5 5 0 0 0 0 10h3",
      search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4",
      phone:
        "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2",
      tablet:
        "M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM11 17h2",
      desktop: "M3 4h18v12H3zM8 20h8M12 16v4",
      external:
        "M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5",
      link: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
      home: "M3 11l9-7 9 7M5 9.5V20h14V9.5",
      settings:
        "M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1M15 4v4M9 10v4M17 16v4",
      x: "M6 6l12 12M18 6L6 18",
      check: "M5 12.5l4.5 4.5L19 7",
      alert: "M12 4l9 16H3l9-16zM12 10v4M12 17h.01",
      info: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 7.5h.01",
      swap: "M7 4L3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7",
      more: "M5 12h.01M12 12h.01M19 12h.01",
      arrowUp: "M12 19V5M6 11l6-6 6 6",
      arrowDown: "M12 5v14M6 13l6 6 6-6",
      arrowRight: "M5 12h14M13 6l6 6-6 6",
      globe:
        "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z",
      history: "M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5M12 7v5l3 2",
      upload: "M12 16V4M7 9l5-5 5 5M4 20h16",
      file: "M7 3h7l5 5v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM14 3v5h5M9 13h6M9 17h4",
      lock: "M6 11h12v9H6zM8 11V8a4 4 0 0 1 8 0v3",
      db: "M12 8c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3zM4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
      template: "M4 4h16v16H4zM4 9h16M9 9v11",
      redirect: "M15 4l5 5-5 5M20 9H9a5 5 0 0 0-5 5v6",
      play: "M7 5l12 7-12 7V5z",
      pencil: "M4 20h4L19 9l-4-4L4 16v4zM13.5 6.5l4 4",
      menu: "M4 7h16M4 12h16M4 17h16",
      folder:
        "M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6z",
      whatsapp:
        "M4 20l1.3-4A8 8 0 1 1 8 18.7L4 20zM9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1a3.5 3.5 0 0 1-2-2l1-1-1-2L9 9.5z",
      mail: "M4 6h16v12H4zM4 7l8 6 8-6",
      call: "M5 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 5a2 2 0 0 1 2-2z",
      hash: "M5 9h14M5 15h14M10 4L8 20M16 4l-2 16",
      download: "M12 4v12M7 11l5 5 5-5M4 20h16",
      unlink:
        "M9 15l6-6M8.5 6.5L10 5a4 4 0 0 1 6 6l-1.5 1.5M15.5 17.5L14 19a4 4 0 0 1-6-6l1.5-1.5",
      moon: "M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z",
      sun: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
      bold: "M7 4h6a4 4 0 0 1 0 8H7zM7 12h7a4 4 0 0 1 0 8H7z",
      italic: "M10 4h8M6 20h8M14 4l-4 16",
      list: "M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01",
      indent: "M4 6h16M11 12h9M4 18h16M4 9.5l3 2.5-3 2.5",
      outdent: "M4 6h16M11 12h9M4 18h16M7 9.5L4 12l3 2.5",
      collection: "M4 5h16M4 10h16M4 15h10M4 20h7",
      cmd: "M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6z",
      layout: "M4 4h16v16H4zM4 10h16M10 10v10",
      dot: "M12 12h.01",
      sparkle: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z",
      rocket:
        "M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M9 13l2 2M14.5 4.5c2-1 4.5-1.5 5.5-.5s.5 3.5-.5 5.5L13 16l-5-5 6.5-6.5zM15 9h.01",
      video:
        "M4 6h11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM16 10l5-3v10l-5-3",
    };
  function S({
    name: e,
    size: t = 16,
    className: a,
    style: s,
    stroke: n = 1.75,
  }) {
    let i = e === "grip" || e === "more" || e === "dot";
    return React.createElement(
      "svg",
      {
        className: x("ic", a),
        style: s,
        width: t,
        height: t,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: i ? 3 : n,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
      },
      React.createElement("path", { d: Jn[e] || Jn.dot }),
    );
  }
  function H({
    variant: e = "secondary",
    size: t,
    icon: a,
    iconRight: s,
    children: n,
    className: i,
    ...r
  }) {
    return React.createElement(
      "button",
      {
        type: "button",
        className: x("btn", "btn-" + e, t && "btn-" + t, !n && "btn-icon", i),
        ...r,
      },
      a && React.createElement(S, { name: a, size: t === "sm" ? 14 : 16 }),
      n && React.createElement("span", { className: "btn-label" }, n),
      s && React.createElement(S, { name: s, size: 14 }),
    );
  }
  function _({
    icon: e,
    label: t,
    className: a,
    active: s,
    size: n = 16,
    ...i
  }) {
    return React.createElement(
      "button",
      {
        type: "button",
        className: x("ibtn", s && "is-active", a),
        "aria-label": t,
        "data-tip": t,
        ...i,
      },
      React.createElement(S, { name: e, size: n }),
    );
  }
  function We({ children: e }) {
    return React.createElement("kbd", { className: "kbd" }, e);
  }
  function oe({ tone: e = "neutral", children: t, dot: a }) {
    return React.createElement(
      "span",
      { className: x("badge", "badge-" + e) },
      a && React.createElement("span", { className: "badge-dot" }),
      t,
    );
  }
  function Ke({ checked: e, onChange: t, id: a, label: s, disabled: n }) {
    return React.createElement(
      "button",
      {
        type: "button",
        id: a,
        role: "switch",
        "aria-checked": !!e,
        "aria-label": s,
        disabled: n,
        className: x("switch", e && "on"),
        onClick: () => t(!e),
      },
      React.createElement("span", { className: "switch-knob" }),
    );
  }
  function re({ value: e, options: t, onChange: a, size: s, full: n, id: i }) {
    return React.createElement(
      "div",
      {
        className: x("seg", s && "seg-" + s, n && "seg-full"),
        role: "radiogroup",
        id: i,
      },
      t.map((r) => {
        let [o, d, c] = Array.isArray(r) ? r : [r, r];
        return React.createElement(
          "button",
          {
            key: String(o),
            type: "button",
            role: "radio",
            "aria-checked": e === o,
            className: x("seg-opt", e === o && "on"),
            onClick: () => a(o),
            "data-tip": c && !d ? String(o) : void 0,
          },
          c && React.createElement(S, { name: c, size: 15 }),
          d && React.createElement("span", null, d),
        );
      }),
    );
  }
  function $({
    label: e,
    htmlFor: t,
    hint: a,
    count: s,
    max: n,
    children: i,
    error: r,
    warn: o,
    aside: d,
    className: c,
  }) {
    let l = n && s > n;
    return React.createElement(
      "div",
      { className: x("field", c) },
      (e || n) &&
        React.createElement(
          "div",
          { className: "field-top" },
          e &&
            React.createElement(
              "label",
              { className: "field-label", htmlFor: t },
              e,
            ),
          d,
          n
            ? React.createElement(
                "span",
                {
                  className: x(
                    "field-count",
                    l && "over",
                    s > n * 0.9 && !l && "near",
                  ),
                },
                `${s || 0}/${n}`,
              )
            : null,
        ),
      i,
      r &&
        React.createElement(
          "p",
          { className: "field-msg err" },
          React.createElement(S, { name: "alert", size: 13 }),
          r,
        ),
      !r &&
        o &&
        React.createElement(
          "p",
          { className: "field-msg warn" },
          React.createElement(S, { name: "alert", size: 13 }),
          o,
        ),
      !r && !o && a && React.createElement("p", { className: "field-hint" }, a),
    );
  }
  function j({ className: e, prefix: t, suffix: a, mono: s, ...n }) {
    return t || a
      ? React.createElement(
          "div",
          { className: x("input-wrap", e) },
          t && React.createElement("span", { className: "input-affix" }, t),
          React.createElement("input", {
            className: x("input", s && "mono"),
            ...n,
          }),
          a && React.createElement("span", { className: "input-affix" }, a),
        )
      : React.createElement("input", {
          className: x("input", s && "mono", e),
          ...n,
        });
  }
  function nt({ className: e, autoGrow: t = !0, ...a }) {
    let s = Vt(null);
    return (
      Qn(() => {
        !t ||
          !s.current ||
          ((s.current.style.height = "auto"),
          (s.current.style.height =
            Math.min(s.current.scrollHeight + 2, 320) + "px"));
      }),
      React.createElement("textarea", {
        ref: s,
        className: x("input textarea", e),
        rows: 2,
        ...a,
      })
    );
  }
  function ye({
    value: e,
    onChange: t,
    options: a,
    id: s,
    className: n,
    disabled: i,
  }) {
    return React.createElement(
      "div",
      { className: x("select", n) },
      React.createElement(
        "select",
        { id: s, value: e, onChange: (r) => t(r.target.value), disabled: i },
        a.map((r) => {
          let [o, d, c] = Array.isArray(r) ? r : [r, r];
          return React.createElement(
            "option",
            { key: String(o), value: o, disabled: c },
            d,
          );
        }),
      ),
      React.createElement(S, { name: "down", size: 14 }),
    );
  }
  function ht({
    anchor: e,
    open: t,
    onClose: a,
    children: s,
    align: n = "start",
    width: i,
    className: r,
    placement: o = "bottom",
  }) {
    let d = Vt(null),
      [c, l] = qa(null);
    return (
      Qn(() => {
        if (!t || !e) return;
        let h = () => {
          let m = e.getBoundingClientRect(),
            u = d.current,
            b = u ? u.offsetWidth : i || 220,
            v = u ? u.offsetHeight : 200,
            D = window.innerWidth,
            k = window.innerHeight,
            p = n === "end" ? m.right - b : m.left;
          p = Math.max(8, Math.min(p, D - b - 8));
          let N = o === "top" ? m.top - v - 6 : m.bottom + 6;
          (N + v > k - 8 && (N = Math.max(8, m.top - v - 6)),
            N < 8 && (N = 8),
            l({ left: p, top: N }));
        };
        h();
        let g = requestAnimationFrame(h);
        return (
          window.addEventListener("resize", h),
          window.addEventListener("scroll", h, !0),
          () => {
            (cancelAnimationFrame(g),
              window.removeEventListener("resize", h),
              window.removeEventListener("scroll", h, !0));
          }
        );
      }, [t, e, n, i, o]),
      ba(() => {
        if (!t) return;
        let h = (m) => {
            d.current &&
              !d.current.contains(m.target) &&
              !(e && e.contains(m.target)) &&
              a();
          },
          g = (m) => {
            m.key === "Escape" && (m.stopPropagation(), a());
          };
        return (
          document.addEventListener("mousedown", h, !0),
          document.addEventListener("touchstart", h, !0),
          document.addEventListener("keydown", g, !0),
          () => {
            (document.removeEventListener("mousedown", h, !0),
              document.removeEventListener("touchstart", h, !0),
              document.removeEventListener("keydown", g, !0));
          }
        );
      }, [t, e, a]),
      t
        ? ReactDOM.createPortal(
            React.createElement(
              "div",
              {
                ref: d,
                className: x("pop", r),
                style: {
                  left: c ? c.left : -9999,
                  top: c ? c.top : -9999,
                  width: i,
                },
                onClick: (h) => h.stopPropagation(),
              },
              s,
            ),
            document.body,
          )
        : null
    );
  }
  function ft() {
    let [e, t] = qa(null),
      [a, s] = qa(!1);
    return {
      ref: t,
      el: e,
      open: a,
      toggle: (n) => {
        (n && n.stopPropagation(), s((i) => !i));
      },
      close: hi(() => s(!1), []),
      setOpen: s,
    };
  }
  function qe({
    items: e,
    icon: t = "more",
    label: a = "More",
    align: s = "end",
    trigger: n,
    className: i,
    size: r,
    width: o = 220,
  }) {
    let d = ft();
    return React.createElement(
      "span",
      { className: "anchor", ref: d.ref },
      n
        ? n({ onClick: d.toggle, active: d.open })
        : React.createElement(_, {
            icon: t,
            label: a,
            onClick: d.toggle,
            className: i,
            active: d.open,
            size: r,
          }),
      React.createElement(
        ht,
        { anchor: d.el, open: d.open, onClose: d.close, align: s, width: o },
        React.createElement(fi, { items: e, onPick: d.close }),
      ),
    );
  }
  function fi({ items: e, onPick: t }) {
    return React.createElement(
      "div",
      { className: "menu", role: "menu" },
      e.filter(Boolean).map((a, s) =>
        a.sep
          ? React.createElement("div", { key: s, className: "menu-sep" })
          : a.heading
            ? React.createElement(
                "div",
                { key: s, className: "menu-heading" },
                a.heading,
              )
            : React.createElement(
                "button",
                {
                  key: s,
                  type: "button",
                  role: "menuitem",
                  className: x(
                    "menu-item",
                    a.danger && "danger",
                    a.active && "on",
                  ),
                  disabled: a.disabled,
                  onClick: (n) => {
                    (n.stopPropagation(), t && t(), a.onClick && a.onClick());
                  },
                },
                a.icon && React.createElement(S, { name: a.icon, size: 15 }),
                React.createElement(
                  "span",
                  { className: "menu-label" },
                  a.label,
                ),
                a.hint &&
                  React.createElement(
                    "span",
                    { className: "menu-hint" },
                    a.hint,
                  ),
                a.active && React.createElement(S, { name: "check", size: 14 }),
              ),
      ),
    );
  }
  var gt = Yn({ isPhone: !1, isDesktop: !0 }),
    He = [],
    Xn = () => He.length > 0;
  function Pe({
    open: e = !0,
    onClose: t,
    title: a,
    subtitle: s,
    children: n,
    footer: i,
    width: r = 560,
    className: o,
    bodyClass: d,
    headerExtra: c,
    tall: l,
  }) {
    let { isPhone: h } = Zn(gt),
      g = Vt(null),
      m = Vt(t);
    return (
      (m.current = t),
      ba(() => {
        let u = {};
        He.push(u);
        let b = (v) => {
          v.key === "Escape" &&
            He[He.length - 1] === u &&
            (v.stopPropagation(), m.current && m.current());
        };
        return (
          document.addEventListener("keydown", b),
          () => {
            document.removeEventListener("keydown", b);
            let v = He.indexOf(u);
            v >= 0 && He.splice(v, 1);
          }
        );
      }, []),
      ba(() => {
        let u = g.current && g.current.querySelector("[data-autofocus]");
        u && setTimeout(() => u.focus(), 30);
      }, []),
      e
        ? ReactDOM.createPortal(
            React.createElement(
              "div",
              {
                className: x("overlay", h && "overlay-sheet"),
                onMouseDown: (u) => u.target === u.currentTarget && t && t(),
              },
              React.createElement(
                "div",
                {
                  ref: g,
                  className: x("dialog", h && "as-sheet", l && "tall", o),
                  style: h ? void 0 : { width: r },
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": typeof a == "string" ? a : void 0,
                },
                h && React.createElement("div", { className: "sheet-grab" }),
                a &&
                  React.createElement(
                    "div",
                    { className: "dialog-head" },
                    React.createElement(
                      "div",
                      { className: "dialog-titles" },
                      React.createElement(
                        "h2",
                        { className: "dialog-title" },
                        a,
                      ),
                      s &&
                        React.createElement(
                          "p",
                          { className: "dialog-sub" },
                          s,
                        ),
                    ),
                    c,
                    t &&
                      React.createElement(_, {
                        icon: "x",
                        label: "Close",
                        onClick: t,
                      }),
                  ),
                React.createElement(
                  "div",
                  { className: x("dialog-body", d) },
                  n,
                ),
                i &&
                  React.createElement("div", { className: "dialog-foot" }, i),
              ),
            ),
            document.body,
          )
        : null
    );
  }
  function st({
    title: e,
    onClose: t,
    children: a,
    actions: s,
    height: n = "auto",
    className: i,
  }) {
    let r = Vt(t);
    return (
      (r.current = t),
      ba(() => {
        let o = {};
        He.push(o);
        let d = (c) => {
          c.key === "Escape" &&
            He[He.length - 1] === o &&
            r.current &&
            r.current();
        };
        return (
          document.addEventListener("keydown", d),
          () => {
            document.removeEventListener("keydown", d);
            let c = He.indexOf(o);
            c >= 0 && He.splice(c, 1);
          }
        );
      }, []),
      ReactDOM.createPortal(
        React.createElement(
          "div",
          {
            className: "overlay overlay-sheet light",
            onMouseDown: (o) => o.target === o.currentTarget && t && t(),
          },
          React.createElement(
            "div",
            {
              className: x("dialog as-sheet panel-sheet", i),
              style: { height: n },
            },
            React.createElement("div", { className: "sheet-grab" }),
            React.createElement(
              "div",
              { className: "dialog-head" },
              React.createElement(
                "div",
                { className: "dialog-titles" },
                React.createElement("h2", { className: "dialog-title" }, e),
              ),
              s,
              React.createElement(_, { icon: "x", label: "Close", onClick: t }),
            ),
            React.createElement(
              "div",
              { className: "dialog-body sheet-body" },
              a,
            ),
          ),
        ),
        document.body,
      )
    );
  }
  var Kt = Yn(() => {});
  function es() {
    return Zn(Kt);
  }
  function va({ toasts: e, dismiss: t }) {
    return React.createElement(
      "div",
      { className: "toasts", "aria-live": "polite" },
      e.map((a) =>
        React.createElement(
          "div",
          { key: a.id, className: x("toast", a.tone && "toast-" + a.tone) },
          a.tone === "ok" &&
            React.createElement(S, { name: "check", size: 15 }),
          a.tone === "warn" &&
            React.createElement(S, { name: "alert", size: 15 }),
          a.tone === "info" &&
            React.createElement(S, { name: "info", size: 15 }),
          React.createElement("span", { className: "toast-msg" }, a.message),
          a.action &&
            React.createElement(
              "button",
              {
                type: "button",
                className: "toast-act",
                onClick: () => {
                  (a.action.onClick(), t(a.id));
                },
              },
              a.action.label,
            ),
          React.createElement(
            "button",
            {
              type: "button",
              className: "toast-x",
              "aria-label": "Dismiss",
              onClick: () => t(a.id),
            },
            React.createElement(S, { name: "x", size: 13 }),
          ),
        ),
      ),
    );
  }
  function yt({ icon: e = "info", title: t, children: a, action: s }) {
    return React.createElement(
      "div",
      { className: "empty" },
      React.createElement(
        "span",
        { className: "empty-ic" },
        React.createElement(S, { name: e, size: 18 }),
      ),
      React.createElement("p", { className: "empty-title" }, t),
      a && React.createElement("p", { className: "empty-text" }, a),
      s,
    );
  }
  var {
      useRef: ts,
      useState: as,
      useLayoutEffect: gi,
      useMemo: ns,
      useCallback: ss,
      useEffect: yi,
    } = React,
    bt = {
      phone: { w: 390, label: "Phone", icon: "phone" },
      tablet: { w: 820, label: "Tablet", icon: "tablet" },
      desktop: { w: 1280, label: "Desktop", icon: "desktop" },
    };
  function it({
    device: e,
    children: t,
    bare: a,
    minScale: s = 0.2,
    onScale: n,
  }) {
    let i = ts(null),
      r = ts(null),
      [o, d] = as(0),
      [c, l] = as(600),
      h = bt[e] ? bt[e].w : e;
    gi(() => {
      if (!i.current || !r.current) return;
      let m = new ResizeObserver(() => {
        (i.current && d(i.current.clientWidth),
          r.current && l(r.current.offsetHeight));
      });
      return (
        m.observe(i.current),
        m.observe(r.current),
        d(i.current.clientWidth),
        l(r.current.offsetHeight),
        () => m.disconnect()
      );
    }, []);
    let g = o ? Math.max(s, Math.min(1, o / h)) : 1;
    return (
      yi(() => {
        n && n(g);
      }, [g, n]),
      React.createElement(
        "div",
        { ref: i, className: x("frame-outer", a && "bare") },
        React.createElement(
          "div",
          {
            className: x("frame-box", "dev-" + e),
            style: { width: Math.round(h * g), height: Math.ceil(c * g) },
          },
          React.createElement(
            "div",
            {
              ref: r,
              className: "frame-inner",
              style: { width: h, transform: `scale(${g})`, "--inv": 1 / g },
            },
            t,
          ),
        ),
      )
    );
  }
  function Ut({
    site: e,
    page: t,
    entry: a,
    media: s,
    sections: n,
    mode: i = "thumb",
  }) {
    let r = ss((c) => _e(e, c, { media: s, pageId: t && t.id }), [e, s, t]),
      o = ns(
        () => ({
          site: e,
          page: t,
          entry: a,
          mode: i,
          resolve: r,
          media: s,
          navigate: () => {},
        }),
        [e, t, a, i, r, s],
      ),
      d = n || (t ? It(e, t) : []);
    return React.createElement(
      ra.Provider,
      { value: o },
      React.createElement(
        "div",
        { className: "sf-site", style: za(e.theme) },
        d
          .filter((c) => !c.hidden)
          .map((c) => {
            let l = ne[c.block];
            if (!l) return null;
            let h = l.Component;
            return React.createElement(
              Ft.Provider,
              { key: c.id, value: c },
              React.createElement(h, {
                v: c.values,
                cls: x("sf-sec", "tone-" + (c.tone || "default")),
              }),
            );
          }),
      ),
    );
  }
  function bi(e, t, a) {
    let s = ne[a.block],
      n = qt(e, t) === a,
      i = Gt(e, t) === a,
      r = (n && t.header !== "detached") || (i && t.footer !== "detached");
    return {
      title: s ? s.title : a.block,
      cat: s ? ze[s.category] : "",
      shared: r,
      own: (n && t.header === "detached") || (i && t.footer === "detached"),
      isHeader: n,
      isFooter: i,
    };
  }
  function wa({
    site: e,
    page: t,
    entry: a,
    media: s,
    mode: n,
    selectedId: i,
    onSelect: r,
    onInline: o,
    onNavigate: d,
    onNavigatePath: c,
    toolbar: l,
    hoverId: h,
  }) {
    let g = ss(
        (v) => _e(e, v, { media: s, pageId: t.id, entryId: a && a.id }),
        [e, s, t, a],
      ),
      m = ns(
        () => ({
          site: e,
          page: t,
          entry: a,
          mode: n,
          selectedId: i,
          onInline: o,
          navigate: d,
          resolve: g,
          media: s,
        }),
        [e, t, a, n, i, o, d, g, s],
      ),
      u = It(e, t),
      b = (v) => {
        let D = v.target.closest && v.target.closest("a");
        if (D && D.closest(".sf-rich")) {
          let k = D.getAttribute("href") || "";
          if (n !== "preview") {
            v.preventDefault();
            return;
          }
          if (/^https?:/i.test(k)) {
            (D.setAttribute("target", "_blank"),
              D.setAttribute("rel", "noreferrer"));
            return;
          }
          (v.preventDefault(), c && c(k));
        }
      };
    return React.createElement(
      ra.Provider,
      { value: m },
      React.createElement(
        "div",
        {
          className: x("sf-site", n === "edit" && "is-editing"),
          style: za(e.theme),
          onClickCapture: b,
        },
        u.map((v) => {
          let D = ne[v.block];
          if (!D || (v.hidden && n !== "edit")) return null;
          let k = D.Component,
            p = bi(e, t, v),
            N = i === v.id;
          return React.createElement(
            "div",
            {
              key: v.id,
              className: x(
                "sf-frame",
                n === "edit" && "is-edit",
                N && "is-sel",
                h === v.id && "is-hover",
                v.hidden && "is-hidden",
              ),
              "data-sid": v.id,
              "data-anchor": v.anchor || void 0,
              onClick: (P) => {
                n === "edit" &&
                  ((P.target.closest && P.target.closest(".sf-tools")) ||
                    (r && r(v.id)));
              },
            },
            React.createElement(
              Ft.Provider,
              { value: v },
              React.createElement(k, {
                v: v.values,
                cls: x("sf-sec", "tone-" + (v.tone || "default")),
              }),
            ),
            n === "edit" &&
              React.createElement(
                "div",
                { className: "sf-chip" },
                p.shared && React.createElement(S, { name: "link", size: 11 }),
                React.createElement(
                  "span",
                  null,
                  p.shared
                    ? `Shared ${p.isHeader ? "header" : "footer"}`
                    : p.own
                      ? `This page\u2019s ${p.isHeader ? "header" : "footer"}`
                      : p.cat,
                ),
                React.createElement(
                  "span",
                  { className: "sf-chip-sub" },
                  p.title,
                ),
                v.hidden &&
                  React.createElement(
                    "span",
                    { className: "sf-chip-sub" },
                    "\xB7 Hidden",
                  ),
              ),
            n === "edit" &&
              N &&
              l &&
              React.createElement("div", { className: "sf-tools" }, l(v, p)),
            v.hidden &&
              n === "edit" &&
              React.createElement("div", { className: "sf-hidden-veil" }),
          );
        }),
      ),
    );
  }
  var {
      useState: Jt,
      useRef: is,
      useEffect: os,
      createContext: vi,
      useContext: wi,
    } = React,
    ka = vi(null),
    se = () => wi(ka);
  function vt({ id: e, className: t }) {
    let a = se(),
      s = e && a.mediaMap[e];
    return s
      ? s.kind === "file"
        ? React.createElement(
            "div",
            { className: x("thumb thumb-file", t) },
            React.createElement(S, { name: "file", size: 16 }),
          )
        : React.createElement(
            "div",
            { className: x("thumb", t) },
            s.src
              ? React.createElement("img", { src: s.src, alt: "" })
              : React.createElement(Qe, {
                  name: s.art,
                  tone: s.tone,
                  label: s.alt,
                }),
          )
      : React.createElement(
          "div",
          { className: x("thumb thumb-empty", t) },
          e
            ? React.createElement(S, { name: "alert", size: 14 })
            : React.createElement(S, { name: "image", size: 14 }),
        );
  }
  function ki({ f: e, id: t, value: a, onChange: s, coalesce: n }) {
    let i = a == null ? "" : String(a),
      r = {
        id: t,
        value: i,
        onChange: (o) => s(o.target.value, n),
        placeholder: e.placeholder || "",
        spellCheck: !0,
      };
    return React.createElement(
      $,
      { label: e.label, htmlFor: t, max: e.max, count: i.length, hint: e.hint },
      e.type === "textarea"
        ? React.createElement(nt, { ...r })
        : React.createElement(j, {
            ...r,
            type:
              e.input === "email"
                ? "email"
                : e.input === "tel"
                  ? "tel"
                  : "text",
            inputMode: e.input === "tel" ? "tel" : void 0,
          }),
    );
  }
  function Ga({ id: e, value: t, onChange: a, coalesce: s }) {
    let n = is(null),
      i = is(t),
      [r, o] = Jt(!1);
    (os(() => {
      n.current &&
        t !== i.current &&
        document.activeElement !== n.current &&
        ((n.current.innerHTML = t || ""), (i.current = t));
    }, [t]),
      os(() => {
        n.current && (n.current.innerHTML = t || "");
      }, []));
    let d = () => {
        let m = Ba(n.current.innerHTML);
        ((i.current = m), a(m, s));
      },
      c = (m, u) => {
        (n.current.focus(), document.execCommand(m, !1, u), d());
      },
      [l, h] = Jt(null),
      g = ia(t).split(" ").filter(Boolean).length;
    return React.createElement(
      "div",
      { className: x("rich", r && "is-focus") },
      React.createElement(
        "div",
        { className: "rich-bar" },
        React.createElement(_, {
          icon: "bold",
          label: "Bold",
          size: 14,
          onMouseDown: (m) => m.preventDefault(),
          onClick: () => c("bold"),
        }),
        React.createElement(_, {
          icon: "italic",
          label: "Italic",
          size: 14,
          onMouseDown: (m) => m.preventDefault(),
          onClick: () => c("italic"),
        }),
        React.createElement(_, {
          icon: "list",
          label: "Bulleted list",
          size: 14,
          onMouseDown: (m) => m.preventDefault(),
          onClick: () => c("insertUnorderedList"),
        }),
        React.createElement("span", { className: "rich-sep" }),
        React.createElement(_, {
          icon: "link",
          label: "Link selected text",
          size: 14,
          onMouseDown: (m) => m.preventDefault(),
          onClick: () => {
            let m = window.getSelection();
            if (!m || m.isCollapsed) {
              h({ error: !0 });
              return;
            }
            h({ range: m.getRangeAt(0).cloneRange(), url: "" });
          },
        }),
        React.createElement(_, {
          icon: "x",
          label: "Clear formatting",
          size: 14,
          onMouseDown: (m) => m.preventDefault(),
          onClick: () => c("removeFormat"),
        }),
        React.createElement("span", { className: "rich-count" }, g, " words"),
      ),
      l &&
        React.createElement(
          "div",
          { className: "rich-link" },
          l.error
            ? React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  "span",
                  { className: "muted" },
                  "Select some text first, then add a link.",
                ),
                React.createElement(
                  H,
                  { size: "sm", variant: "ghost", onClick: () => h(null) },
                  "OK",
                ),
              )
            : React.createElement(
                "form",
                {
                  onSubmit: (m) => {
                    m.preventDefault();
                    let u = window.getSelection();
                    (u.removeAllRanges(),
                      u.addRange(l.range),
                      c(
                        "createLink",
                        l.url.startsWith("/") || /^https?:/.test(l.url)
                          ? l.url
                          : "https://" + l.url,
                      ),
                      h(null));
                  },
                },
                React.createElement(j, {
                  autoFocus: !0,
                  placeholder: "/contact or https://\u2026",
                  value: l.url,
                  onChange: (m) => h({ ...l, url: m.target.value }),
                }),
                React.createElement(
                  H,
                  { size: "sm", variant: "primary", type: "submit" },
                  "Add",
                ),
                React.createElement(
                  H,
                  { size: "sm", variant: "ghost", onClick: () => h(null) },
                  "Cancel",
                ),
              ),
        ),
      React.createElement("div", {
        id: e,
        ref: n,
        className: "rich-area",
        contentEditable: !0,
        suppressContentEditableWarning: !0,
        onInput: d,
        onFocus: () => o(!0),
        onBlur: () => {
          (o(!1), d());
        },
        onPaste: (m) => {
          m.preventDefault();
          let u = m.clipboardData.getData("text/html");
          u
            ? document.execCommand("insertHTML", !1, Ba(u))
            : document.execCommand(
                "insertText",
                !1,
                m.clipboardData.getData("text/plain"),
              );
        },
      }),
    );
  }
  function xi({ f: e, id: t, value: a, onChange: s, pageId: n }) {
    let i = se(),
      r = a || { label: "", to: null, newTab: !1 },
      o = r.to ? _e(i.site, r.to, { media: i.mediaMap, pageId: n }) : null;
    return React.createElement(
      "div",
      { className: "field" },
      React.createElement(
        "div",
        { className: "field-top" },
        React.createElement(
          "label",
          { className: "field-label", htmlFor: t },
          e.label,
        ),
        React.createElement(
          "span",
          { className: "field-count" },
          `${(r.label || "").length}/40`,
        ),
      ),
      React.createElement(
        "div",
        { className: "linkfield" },
        React.createElement(j, {
          id: t,
          value: r.label,
          placeholder: "Button text (leave empty to hide)",
          onChange: (d) => s({ ...r, label: d.target.value }, "label"),
        }),
        React.createElement(
          "button",
          {
            type: "button",
            className: x(
              "linkfield-target",
              o && o.broken && r.label && "is-broken",
            ),
            onClick: () => i.pickLink(r, (d) => s({ ...r, ...d }), n),
          },
          React.createElement(S, {
            name: mt[(r.to && r.to.type) || "none"],
            size: 14,
          }),
          React.createElement(
            "span",
            { className: "linkfield-sum" },
            r.to ? pt(i.site, r.to, i.mediaMap) : "Choose where it goes",
          ),
          r.newTab && React.createElement(S, { name: "external", size: 13 }),
          React.createElement(S, { name: "right", size: 14 }),
        ),
      ),
      o &&
        o.broken &&
        r.label &&
        React.createElement(
          "p",
          { className: "field-msg err" },
          React.createElement(S, { name: "alert", size: 13 }),
          o.reason,
        ),
      o &&
        !o.broken &&
        o.warn &&
        React.createElement(
          "p",
          { className: "field-msg warn" },
          React.createElement(S, { name: "alert", size: 13 }),
          "Links to a ",
          o.warn,
          " page",
        ),
    );
  }
  function Qt({ label: e, id: t, value: a, onChange: s, accept: n = "image" }) {
    let i = se(),
      r = a && i.mediaMap[a];
    return React.createElement(
      $,
      { label: e, htmlFor: t },
      React.createElement(
        "div",
        { className: "imgfield" },
        React.createElement(
          "button",
          {
            type: "button",
            id: t,
            className: "imgfield-thumb",
            onClick: () => i.pickMedia(n, s),
          },
          React.createElement(vt, { id: a }),
        ),
        React.createElement(
          "div",
          { className: "imgfield-meta" },
          React.createElement(
            "span",
            { className: "imgfield-name" },
            r ? r.name : a ? "Image deleted, pick another" : "No image",
          ),
          React.createElement(
            "div",
            { className: "row gap-4" },
            React.createElement(
              H,
              { size: "sm", onClick: () => i.pickMedia(n, s) },
              a ? "Replace" : "Choose",
            ),
            a &&
              React.createElement(
                H,
                { size: "sm", variant: "ghost", onClick: () => s("") },
                "Remove",
              ),
          ),
        ),
      ),
    );
  }
  function Ni({ f: e, id: t, value: a, onChange: s }) {
    let n = ft();
    return React.createElement(
      $,
      { label: e.label, htmlFor: t },
      React.createElement(
        "span",
        { className: "anchor", ref: n.ref },
        React.createElement(
          "button",
          { type: "button", id: t, className: "iconfield", onClick: n.toggle },
          React.createElement(la, { name: a, size: 18 }),
          React.createElement("span", null, a),
          React.createElement(S, { name: "down", size: 14 }),
        ),
      ),
      React.createElement(
        ht,
        { anchor: n.el, open: n.open, onClose: n.close, width: 248 },
        React.createElement(
          "div",
          { className: "icongrid" },
          Sn.map((i) =>
            React.createElement(
              "button",
              {
                key: i,
                type: "button",
                className: x("icongrid-btn", i === a && "on"),
                title: i,
                onClick: () => {
                  (s(i), n.close());
                },
              },
              React.createElement(la, { name: i, size: 18 }),
            ),
          ),
        ),
      ),
    );
  }
  function Ci({
    f: e,
    id: t,
    value: a,
    onChange: s,
    path: n,
    onFieldChange: i,
    pageId: r,
    sid: o,
  }) {
    let d = Array.isArray(a) ? a : [],
      [c, l] = Jt(() => (d.length <= 1 ? 0 : -1)),
      [h, g] = Jt(null),
      [m, u] = Jt(null),
      b = (D, k) => {
        if (k < 0 || k >= d.length || D === k) return;
        let p = d.slice(),
          [N] = p.splice(D, 1);
        (p.splice(k, 0, N), s(p), c === D && l(k));
      },
      v = (D, k) => {
        let p = D[e.itemLabel];
        return (
          (typeof p == "string" ? ia(p) : p) ||
          `${e.label.replace(/s$/, "")} ${k + 1}`
        );
      };
    return React.createElement(
      "div",
      { className: "field" },
      React.createElement(
        "div",
        { className: "field-top" },
        React.createElement(
          "span",
          { className: "field-label", id: t },
          e.label,
        ),
        React.createElement(
          "span",
          { className: "field-count" },
          d.length,
          e.max ? `/${e.max}` : "",
        ),
      ),
      React.createElement(
        "div",
        { className: "list", role: "list", "aria-labelledby": t },
        d.map((D, k) =>
          React.createElement(
            "div",
            {
              key: k,
              role: "listitem",
              className: x(
                "list-item",
                c === k && "open",
                h === k && "dragging",
                m === k &&
                  h !== null &&
                  h !== k &&
                  (h < k ? "drop-after" : "drop-before"),
              ),
              onDragOver: (p) => {
                h !== null && (p.preventDefault(), u(k));
              },
              onDrop: (p) => {
                (p.preventDefault(), h !== null && b(h, k), g(null), u(null));
              },
            },
            React.createElement(
              "div",
              { className: "list-head" },
              React.createElement(
                "span",
                {
                  className: "grip",
                  draggable: !0,
                  onDragStart: (p) => {
                    (g(k),
                      (p.dataTransfer.effectAllowed = "move"),
                      p.dataTransfer.setData("text/plain", String(k)));
                  },
                  onDragEnd: () => {
                    (g(null), u(null));
                  },
                  title: "Drag to reorder",
                },
                React.createElement(S, { name: "grip", size: 14 }),
              ),
              e.item.some((p) => p.type === "image") &&
                React.createElement(vt, {
                  id: D[e.item.find((p) => p.type === "image").key],
                  className: "thumb-xs",
                }),
              React.createElement(
                "button",
                {
                  type: "button",
                  className: "list-title",
                  onClick: () => l(c === k ? -1 : k),
                  "aria-expanded": c === k,
                },
                React.createElement("span", null, v(D, k)),
                React.createElement(S, {
                  name: c === k ? "up" : "down",
                  size: 14,
                }),
              ),
              React.createElement(qe, {
                size: 14,
                items: [
                  {
                    label: "Move up",
                    icon: "arrowUp",
                    disabled: k === 0,
                    onClick: () => b(k, k - 1),
                  },
                  {
                    label: "Move down",
                    icon: "arrowDown",
                    disabled: k === d.length - 1,
                    onClick: () => b(k, k + 1),
                  },
                  {
                    label: "Duplicate",
                    icon: "copy",
                    disabled: e.max && d.length >= e.max,
                    onClick: () =>
                      s([
                        ...d.slice(0, k + 1),
                        JSON.parse(JSON.stringify(D)),
                        ...d.slice(k + 1),
                      ]),
                  },
                  { sep: !0 },
                  {
                    label: "Delete",
                    icon: "trash",
                    danger: !0,
                    onClick: () => s(d.filter((p, N) => N !== k)),
                  },
                ],
              }),
            ),
            c === k &&
              React.createElement(
                "div",
                { className: "list-body" },
                React.createElement(ja, {
                  fields: e.item,
                  values: D,
                  path: [...n, k],
                  onChange: i,
                  pageId: r,
                  sid: o,
                }),
              ),
          ),
        ),
        React.createElement(
          "button",
          {
            type: "button",
            className: "list-add",
            disabled: !!e.max && d.length >= e.max,
            onClick: () => {
              (s([...d, JSON.parse(JSON.stringify(e.newItem || {}))]),
                l(d.length));
            },
          },
          React.createElement(S, { name: "plus", size: 14 }),
          e.max && d.length >= e.max
            ? `Maximum of ${e.max} reached`
            : `Add ${e.label.toLowerCase().replace(/s$/, "")}`,
        ),
      ),
    );
  }
  function ja({
    fields: e,
    values: t,
    path: a = [],
    onChange: s,
    pageId: n,
    sid: i,
  }) {
    let r = se();
    return React.createElement(
      "div",
      { className: "form" },
      e.map((o) => {
        if (o.when && !t[o.when]) return null;
        let d = [...a, o.key],
          c = "f-" + (i || "x") + "-" + d.join("-"),
          l = kt(t, o.key),
          h = (g, m) =>
            s(d, g, m ? `${i}:${d.join(".")}:${m}` : `${i}:${d.join(".")}`);
        switch (o.type) {
          case "text":
          case "textarea":
            return React.createElement(ki, {
              key: o.key,
              f: o,
              id: c,
              value: l,
              onChange: (g) => h(g, "type"),
            });
          case "rich":
            return React.createElement(
              $,
              { key: o.key, label: o.label, htmlFor: c },
              React.createElement(Ga, {
                id: c,
                value: l,
                onChange: (g) => h(g, "type"),
              }),
            );
          case "image":
            return React.createElement(Qt, {
              key: o.key,
              label: o.label,
              id: c,
              value: l,
              onChange: (g) => h(g),
            });
          case "link":
            return React.createElement(xi, {
              key: o.key,
              f: o,
              id: c,
              value: l,
              onChange: (g, m) => h(g, m),
              pageId: n,
            });
          case "toggle":
            return React.createElement(
              "div",
              { key: o.key, className: "field field-row" },
              React.createElement(
                "label",
                { className: "field-label", htmlFor: c },
                o.label,
              ),
              React.createElement(Ke, {
                id: c,
                checked: !!l,
                onChange: (g) => h(g),
                label: o.label,
              }),
            );
          case "select":
            return React.createElement(
              $,
              { key: o.key, label: o.label, htmlFor: c },
              o.options.length <= 4 &&
                o.options.every((g) => String(g[1]).length < 10)
                ? React.createElement(re, {
                    id: c,
                    value: String(l),
                    options: o.options,
                    onChange: (g) => h(g),
                    full: !0,
                  })
                : React.createElement(ye, {
                    id: c,
                    value: l,
                    options: o.options,
                    onChange: (g) => h(g),
                  }),
            );
          case "number":
            return React.createElement(
              $,
              {
                key: o.key,
                label: o.label,
                htmlFor: c,
                hint: `Between ${o.min} and ${o.max}`,
              },
              React.createElement(
                "div",
                { className: "stepper" },
                React.createElement(_, {
                  icon: "minus",
                  label: "Fewer",
                  onClick: () => h(Math.max(o.min, Number(l || 0) - 1)),
                  className: "stepper-btn minus",
                }),
                React.createElement(j, {
                  id: c,
                  type: "number",
                  min: o.min,
                  max: o.max,
                  value: l ?? "",
                  onChange: (g) =>
                    h(
                      Math.max(
                        o.min,
                        Math.min(o.max, Number(g.target.value) || o.min),
                      ),
                    ),
                }),
                React.createElement(_, {
                  icon: "plus",
                  label: "More",
                  onClick: () => h(Math.min(o.max, Number(l || 0) + 1)),
                  className: "stepper-btn",
                }),
              ),
            );
          case "icon":
            return React.createElement(Ni, {
              key: o.key,
              f: o,
              id: c,
              value: l,
              onChange: (g) => h(g),
            });
          case "collection":
            return React.createElement(
              $,
              { key: o.key, label: o.label, htmlFor: c },
              React.createElement(ye, {
                id: c,
                value: l,
                onChange: (g) => h(g),
                options: Object.values(r.site.collections).map((g) => [
                  g.id,
                  `${g.name} (${g.entries.length})`,
                ]),
              }),
            );
          case "list":
            return React.createElement(Ci, {
              key: o.key,
              f: o,
              id: c,
              value: l,
              path: d,
              onChange: (g) => h(g),
              onFieldChange: s,
              pageId: n,
              sid: i,
            });
          default:
            return null;
        }
      }),
    );
  }
  var { useState: Ue, useEffect: Ka, useRef: Bo, Fragment: Ua } = React,
    ps = (e) =>
      e.isHome
        ? "home"
        : e.kind === "list"
          ? "collection"
          : e.kind === "detail"
            ? "template"
            : e.kind === "notfound"
              ? "alert"
              : "pages";
  function Si({ p: e }) {
    return e.status === "draft"
      ? React.createElement(oe, { tone: "warn" }, "Draft")
      : e.status === "hidden"
        ? React.createElement(oe, null, "Hidden")
        : null;
  }
  function Ja() {
    let e = se(),
      { site: t, route: a, act: s } = e,
      [n, i] = Ue({}),
      r = t.pages
        .filter((l) => !l.parentId && l.kind !== "notfound")
        .sort((l, h) => (h.isHome ? 1 : 0) - (l.isHome ? 1 : 0)),
      o = (l) => t.pages.filter((h) => h.parentId === l),
      d = t.pages.find((l) => l.kind === "notfound"),
      c = (l, h) => {
        let g = o(l.id),
          m = l.kind === "detail",
          u = m ? t.collections[l.collectionId] : null,
          b = g.length > 0 || (m && u.entries.length > 0),
          v = !n[l.id],
          D = a.pageId === l.id && (!m || !a.entryId || !1),
          k = [
            {
              label: "Page settings",
              icon: "settings",
              onClick: () => s.pageSettings(l.id),
            },
            l.kind !== "detail" && {
              label: "Add a subpage",
              icon: "plus",
              onClick: () => s.addPage(l.id),
            },
            l.kind !== "detail" && {
              label: "Duplicate",
              icon: "copy",
              onClick: () => s.duplicatePage(l.id),
            },
            !l.isHome &&
              l.kind === "page" && {
                label: "Set as home page",
                icon: "home",
                onClick: () => s.setHome(l.id),
              },
            m && {
              label: `Edit ${u.name.toLowerCase()} entries`,
              icon: "db",
              onClick: () => s.openCollections(l.collectionId),
            },
            { sep: !0 },
            {
              label: "Delete page",
              icon: "trash",
              danger: !0,
              disabled: l.isHome,
              onClick: () => s.deletePage(l.id),
            },
          ];
        return React.createElement(
          Ua,
          { key: l.id },
          React.createElement(
            "div",
            {
              className: x("tree-row", D && "on"),
              style: { "--depth": h },
              onClick: () => e.goPage(l.id),
              role: "button",
              tabIndex: 0,
              onKeyDown: (p) => p.key === "Enter" && e.goPage(l.id),
            },
            b
              ? React.createElement(
                  "button",
                  {
                    type: "button",
                    className: "tree-caret",
                    "aria-label": v ? "Collapse" : "Expand",
                    onClick: (p) => {
                      (p.stopPropagation(), i({ ...n, [l.id]: v }));
                    },
                  },
                  React.createElement(S, {
                    name: v ? "down" : "right",
                    size: 12,
                  }),
                )
              : React.createElement("span", { className: "tree-caret" }),
            React.createElement(S, {
              name: ps(l),
              size: 15,
              className: "tree-ic",
            }),
            React.createElement(
              "span",
              { className: "tree-main" },
              React.createElement(
                "span",
                { className: "tree-title" },
                m ? `${u.name} template` : l.title,
              ),
              React.createElement("span", { className: "tree-path" }, O(t, l)),
            ),
            React.createElement(Si, { p: l }),
            React.createElement(
              "span",
              { className: "tree-act", onClick: (p) => p.stopPropagation() },
              React.createElement(qe, {
                items: k,
                size: 14,
                label: `Options for ${l.title}`,
              }),
            ),
          ),
          v && g.map((p) => c(p, h + 1)),
          v &&
            m &&
            u.entries.map((p) =>
              React.createElement(
                "div",
                {
                  key: p.id,
                  className: x(
                    "tree-row tree-entry",
                    a.pageId === l.id && a.entryId === p.id && "on",
                  ),
                  style: { "--depth": h + 1 },
                  onClick: () => e.goPage(l.id, p.id),
                  role: "button",
                  tabIndex: 0,
                },
                React.createElement("span", { className: "tree-caret" }),
                React.createElement("span", { className: "tree-dot" }),
                React.createElement(
                  "span",
                  { className: "tree-main" },
                  React.createElement(
                    "span",
                    { className: "tree-title" },
                    p.title,
                  ),
                  React.createElement(
                    "span",
                    { className: "tree-path" },
                    at(t, l.collectionId, p),
                  ),
                ),
                p.status === "draft" &&
                  React.createElement(oe, { tone: "warn" }, "Draft"),
              ),
            ),
        );
      };
    return React.createElement(
      "div",
      { className: "panel" },
      React.createElement(
        "div",
        { className: "panel-head" },
        React.createElement("span", { className: "panel-title" }, "Pages"),
        React.createElement(
          H,
          { size: "sm", icon: "plus", onClick: () => s.addPage() },
          "Add page",
        ),
      ),
      React.createElement(
        "div",
        { className: "tree" },
        r.map((l) => c(l, 0)),
      ),
      React.createElement("div", { className: "panel-label" }, "Special pages"),
      React.createElement("div", { className: "tree" }, d && c(d, 0)),
      React.createElement(
        "div",
        { className: "panel-label" },
        "Content and URLs",
      ),
      React.createElement(
        "div",
        { className: "tree" },
        Object.values(t.collections).map((l) =>
          React.createElement(
            "div",
            {
              key: l.id,
              className: "tree-row",
              style: { "--depth": 0 },
              onClick: () => s.openCollections(l.id),
              role: "button",
              tabIndex: 0,
            },
            React.createElement("span", { className: "tree-caret" }),
            React.createElement(S, {
              name: "db",
              size: 15,
              className: "tree-ic",
            }),
            React.createElement(
              "span",
              { className: "tree-main" },
              React.createElement("span", { className: "tree-title" }, l.name),
              React.createElement(
                "span",
                { className: "tree-path" },
                "Collection \xB7 ",
                de(l.entries.length, "entry", "entries"),
              ),
            ),
            React.createElement(S, {
              name: "right",
              size: 14,
              className: "tree-go",
            }),
          ),
        ),
        React.createElement(
          "div",
          {
            className: "tree-row",
            style: { "--depth": 0 },
            onClick: () => s.openRedirects(),
            role: "button",
            tabIndex: 0,
          },
          React.createElement("span", { className: "tree-caret" }),
          React.createElement(S, {
            name: "redirect",
            size: 15,
            className: "tree-ic",
          }),
          React.createElement(
            "span",
            { className: "tree-main" },
            React.createElement(
              "span",
              { className: "tree-title" },
              "Redirects",
            ),
            React.createElement(
              "span",
              { className: "tree-path" },
              de(t.redirects.length, "rule"),
            ),
          ),
          React.createElement(S, {
            name: "right",
            size: 14,
            className: "tree-go",
          }),
        ),
      ),
    );
  }
  function rs({ which: e }) {
    let t = se(),
      { site: a, page: s, act: n, sel: i } = t,
      r = s[e],
      o = e === "header" ? qt(a, s) : Gt(a, s),
      d = e === "header" ? "Header" : "Footer",
      c = a.pages.filter((h) => h[e] === "shared").length,
      l =
        r === "shared"
          ? [
              {
                label: "Detach a copy for this page",
                icon: "unlink",
                onClick: () => n.setHeadFoot(s.id, e, "detached"),
              },
              {
                label: "Hide on this page",
                icon: "eyeOff",
                onClick: () => n.setHeadFoot(s.id, e, "hidden"),
              },
            ]
          : r === "detached"
            ? [
                {
                  label: `Use the shared ${e} again`,
                  icon: "link",
                  onClick: () => n.setHeadFoot(s.id, e, "shared"),
                },
                {
                  label: "Hide on this page",
                  icon: "eyeOff",
                  onClick: () => n.setHeadFoot(s.id, e, "hidden"),
                },
              ]
            : [
                {
                  label: `Show the shared ${e}`,
                  icon: "eye",
                  onClick: () => n.setHeadFoot(s.id, e, "shared"),
                },
              ];
    return React.createElement(
      "div",
      {
        className: x(
          "sec-row sec-fixed",
          o && i === o.id && "on",
          !o && "is-off",
        ),
        onClick: () => o && n.selectSection(o.id),
        role: "button",
        tabIndex: 0,
      },
      React.createElement(
        "span",
        { className: "sec-grip is-fixed" },
        React.createElement(S, {
          name:
            r === "shared" ? "link" : r === "detached" ? "unlink" : "eyeOff",
          size: 13,
        }),
      ),
      React.createElement(
        "span",
        { className: "sec-main" },
        React.createElement("span", { className: "sec-title" }, d),
        React.createElement(
          "span",
          { className: "sec-sub" },
          r === "shared"
            ? `Shared \xB7 ${de(c, "page")}`
            : r === "detached"
              ? "This page\u2019s own copy"
              : "Hidden on this page",
        ),
      ),
      React.createElement(
        "span",
        { onClick: (h) => h.stopPropagation() },
        React.createElement(qe, { items: l, size: 14, label: `${d} options` }),
      ),
    );
  }
  function Qa({ compact: e }) {
    let t = se(),
      { site: a, page: s, act: n, sel: i } = t,
      [r, o] = Ue(null),
      [d, c] = Ue(null);
    if (!s) return null;
    let l = s.sections;
    return React.createElement(
      "div",
      { className: "panel" },
      React.createElement(
        "div",
        { className: "panel-head" },
        React.createElement(
          "span",
          { className: "panel-title" },
          "Sections ",
          React.createElement(
            "span",
            { className: "muted" },
            "\xB7 ",
            s.kind === "detail"
              ? `${a.collections[s.collectionId].name} template`
              : s.title,
          ),
        ),
        React.createElement(
          H,
          { size: "sm", icon: "plus", onClick: () => n.addSection(l.length) },
          "Add",
        ),
      ),
      React.createElement(
        "div",
        { className: "sec-list" },
        React.createElement(rs, { which: "header" }),
        l.map((h, g) => {
          let m = ne[h.block];
          return React.createElement(
            Ua,
            { key: h.id },
            React.createElement(
              "button",
              {
                type: "button",
                className: "sec-insert",
                onClick: () => n.addSection(g),
                "aria-label": `Add a section before ${m.title}`,
              },
              React.createElement("span", { className: "sec-insert-line" }),
              React.createElement(
                "span",
                { className: "sec-insert-btn" },
                React.createElement(S, { name: "plus", size: 11 }),
              ),
            ),
            React.createElement(
              "div",
              {
                className: x(
                  "sec-row",
                  i === h.id && "on",
                  h.hidden && "is-off",
                  r === g && "dragging",
                  d === g &&
                    r !== null &&
                    r !== g &&
                    (r < g ? "drop-after" : "drop-before"),
                ),
                onClick: () => n.selectSection(h.id, !0),
                onMouseEnter: () => t.setHover(h.id),
                onMouseLeave: () => t.setHover(null),
                onDragOver: (u) => {
                  r !== null && (u.preventDefault(), c(g));
                },
                onDrop: (u) => {
                  (u.preventDefault(),
                    r !== null && r !== g && n.reorderSections(s.id, r, g),
                    o(null),
                    c(null));
                },
                role: "button",
                tabIndex: 0,
              },
              React.createElement(
                "span",
                {
                  className: "sec-grip",
                  draggable: !0,
                  onDragStart: (u) => {
                    (o(g),
                      (u.dataTransfer.effectAllowed = "move"),
                      u.dataTransfer.setData("text/plain", h.id));
                  },
                  onDragEnd: () => {
                    (o(null), c(null));
                  },
                  title: "Drag to reorder",
                },
                React.createElement(S, { name: "grip", size: 14 }),
              ),
              React.createElement(
                "span",
                { className: "sec-main" },
                React.createElement(
                  "span",
                  { className: "sec-title" },
                  m.title,
                ),
                React.createElement(
                  "span",
                  { className: "sec-sub" },
                  ze[m.category],
                  h.anchor ? ` \xB7 #${h.anchor}` : "",
                  h.tone !== "default" ? ` \xB7 ${h.tone}` : "",
                ),
              ),
              React.createElement(
                "span",
                { className: "sec-acts", onClick: (u) => u.stopPropagation() },
                e &&
                  React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(_, {
                      icon: "arrowUp",
                      label: "Move up",
                      size: 14,
                      disabled: g === 0,
                      onClick: () => n.moveSection(h.id, -1),
                    }),
                    React.createElement(_, {
                      icon: "arrowDown",
                      label: "Move down",
                      size: 14,
                      disabled: g === l.length - 1,
                      onClick: () => n.moveSection(h.id, 1),
                    }),
                  ),
                React.createElement(_, {
                  icon: h.hidden ? "eyeOff" : "eye",
                  label: h.hidden ? "Show section" : "Hide section",
                  size: 14,
                  onClick: () => n.toggleHidden(h.id),
                  className: x(!h.hidden && "hover-only"),
                }),
                React.createElement(qe, {
                  size: 14,
                  label: `${m.title} options`,
                  items: [
                    {
                      label: "Edit content",
                      icon: "pencil",
                      onClick: () => n.editSection(h.id),
                    },
                    {
                      label: "Swap for another block",
                      icon: "swap",
                      onClick: () => n.swapSection(h.id),
                    },
                    {
                      label: "Duplicate",
                      icon: "copy",
                      onClick: () => n.duplicateSection(h.id),
                    },
                    {
                      label: "Move up",
                      icon: "arrowUp",
                      disabled: g === 0,
                      onClick: () => n.moveSection(h.id, -1),
                    },
                    {
                      label: "Move down",
                      icon: "arrowDown",
                      disabled: g === l.length - 1,
                      onClick: () => n.moveSection(h.id, 1),
                    },
                    { sep: !0 },
                    {
                      label: "Delete",
                      icon: "trash",
                      danger: !0,
                      onClick: () => n.deleteSection(h.id),
                    },
                  ],
                }),
              ),
            ),
          );
        }),
        React.createElement(
          "button",
          {
            type: "button",
            className: "sec-add",
            onClick: () => n.addSection(l.length),
          },
          React.createElement(S, { name: "plus", size: 14 }),
          "Add section",
        ),
        React.createElement(rs, { which: "footer" }),
      ),
      !e &&
        React.createElement(
          "p",
          { className: "panel-note" },
          "Drag to reorder. Header and footer are shared by every page unless a page detaches its own copy.",
        ),
    );
  }
  function ls({
    it: e,
    depth: t,
    idx: a,
    siblings: s,
    which: n,
    onDragStart: i,
    dragState: r,
    path: o,
  }) {
    let d = se(),
      { site: c, act: l } = d,
      h = ft(),
      g = _e(c, e.to, { media: d.mediaMap }),
      [m, u, b, v] = r,
      D = m && m.key === o.join("."),
      k = m && m.parent === o.slice(0, -1).join(".");
    return React.createElement(
      "div",
      {
        className: x(
          "nav-row",
          D && "dragging",
          b === o.join(".") &&
            k &&
            !D &&
            (m.idx < a ? "drop-after" : "drop-before"),
        ),
        style: { "--depth": t },
        onDragOver: (p) => {
          !m || !k || (p.preventDefault(), p.stopPropagation(), v(o.join(".")));
        },
        onDrop: (p) => {
          (p.preventDefault(),
            p.stopPropagation(),
            m && k && m.idx !== a && l.navMove(n, o.slice(0, -1), m.idx, a),
            u(null),
            v(null));
        },
      },
      React.createElement(
        "span",
        {
          className: "sec-grip",
          draggable: !0,
          onDragStart: (p) => {
            (p.stopPropagation(),
              u({ key: o.join("."), parent: o.slice(0, -1).join("."), idx: a }),
              (p.dataTransfer.effectAllowed = "move"),
              p.dataTransfer.setData("text/plain", e.id));
          },
          onDragEnd: () => {
            (u(null), v(null));
          },
          title: "Drag to reorder",
        },
        React.createElement(S, { name: "grip", size: 14 }),
      ),
      React.createElement(
        "span",
        { className: "anchor nav-main", ref: h.ref },
        React.createElement(
          "button",
          { type: "button", className: "nav-main-btn", onClick: h.toggle },
          React.createElement("span", { className: "sec-title" }, e.label),
          React.createElement(
            "span",
            {
              className: x(
                "sec-sub",
                g.broken && "err",
                !g.broken && g.warn && "warn",
              ),
            },
            React.createElement(S, {
              name: mt[e.to ? e.to.type : "none"],
              size: 11,
            }),
            g.broken
              ? g.reason
              : pt(c, e.to, d.mediaMap) + (g.warn ? ` \xB7 ${g.warn}` : ""),
          ),
        ),
      ),
      React.createElement(
        ht,
        { anchor: h.el, open: h.open, onClose: h.close, width: 300 },
        React.createElement(
          "div",
          { className: "pop-form" },
          React.createElement(
            $,
            { label: "Menu label", htmlFor: "nl-" + e.id },
            React.createElement(j, {
              id: "nl-" + e.id,
              value: e.label,
              onChange: (p) =>
                l.navEdit(n, o, { label: p.target.value }, "nav:" + e.id),
              autoFocus: !0,
            }),
          ),
          React.createElement(
            $,
            { label: "Goes to" },
            React.createElement(
              "button",
              {
                type: "button",
                className: "linkfield-target",
                onClick: () => {
                  (h.close(),
                    d.pickLink(
                      { to: e.to, newTab: e.newTab },
                      (p) => l.navEdit(n, o, p),
                      null,
                    ));
                },
              },
              React.createElement(S, {
                name: mt[e.to ? e.to.type : "none"],
                size: 14,
              }),
              React.createElement(
                "span",
                { className: "linkfield-sum" },
                pt(c, e.to, d.mediaMap),
              ),
              React.createElement(S, { name: "right", size: 14 }),
            ),
          ),
        ),
      ),
      React.createElement(qe, {
        size: 14,
        label: `${e.label} options`,
        items: [
          { label: "Edit", icon: "pencil", onClick: () => h.setOpen(!0) },
          {
            label: "Move up",
            icon: "arrowUp",
            disabled: a === 0,
            onClick: () => l.navMove(n, o.slice(0, -1), a, a - 1),
          },
          {
            label: "Move down",
            icon: "arrowDown",
            disabled: a === s.length - 1,
            onClick: () => l.navMove(n, o.slice(0, -1), a, a + 1),
          },
          t === 0 &&
            a > 0 &&
            !(e.children && e.children.length) && {
              label: `Put under \u201C${s[a - 1].label}\u201D`,
              icon: "indent",
              onClick: () => l.navIndent(n, a),
            },
          t === 1 && {
            label: "Move out of the dropdown",
            icon: "outdent",
            onClick: () => l.navOutdent(n, o),
          },
          { sep: !0 },
          {
            label: "Remove from menu",
            icon: "trash",
            danger: !0,
            onClick: () => l.navRemove(n, o),
          },
        ],
      }),
    );
  }
  function ds({ which: e, title: t, hint: a }) {
    let s = se(),
      { site: n, act: i } = s,
      r = n.nav[e],
      [o, d] = Ue(null),
      [c, l] = Ue(null),
      h = ft(),
      g = new Set(),
      m = (b) =>
        b.forEach(
          (v) => (
            v.to && v.to.pageId && g.add(v.to.pageId),
            m(v.children || [])
          ),
        );
    m(r);
    let u = n.pages.filter(
      (b) => !g.has(b.id) && b.kind !== "detail" && b.kind !== "notfound",
    );
    return React.createElement(
      "div",
      { className: "nav-block" },
      React.createElement(
        "div",
        { className: "nav-block-head" },
        React.createElement("span", { className: "panel-sub" }, t),
        React.createElement("span", { className: "muted small" }, a),
      ),
      React.createElement(
        "div",
        { className: "nav-list" },
        r.length === 0 &&
          React.createElement(
            "p",
            { className: "muted small pad-8" },
            "No links yet.",
          ),
        r.map((b, v) =>
          React.createElement(
            Ua,
            { key: b.id },
            React.createElement(ls, {
              it: b,
              depth: 0,
              idx: v,
              siblings: r,
              which: e,
              dragState: [o, d, c, l],
              path: [v],
            }),
            (b.children || []).map((D, k) =>
              React.createElement(ls, {
                key: D.id,
                it: D,
                depth: 1,
                idx: k,
                siblings: b.children,
                which: e,
                dragState: [o, d, c, l],
                path: [v, k],
              }),
            ),
          ),
        ),
        React.createElement(
          "span",
          { className: "anchor", ref: h.ref },
          React.createElement(
            "button",
            { type: "button", className: "sec-add", onClick: h.toggle },
            React.createElement(S, { name: "plus", size: 14 }),
            "Add link",
          ),
        ),
        React.createElement(
          ht,
          { anchor: h.el, open: h.open, onClose: h.close, width: 280 },
          React.createElement(
            "div",
            { className: "menu" },
            React.createElement(
              "div",
              { className: "menu-heading" },
              "Pages not in this menu",
            ),
            u.length === 0 &&
              React.createElement(
                "div",
                { className: "menu-empty" },
                "Every page is already here.",
              ),
            u.map((b) =>
              React.createElement(
                "button",
                {
                  key: b.id,
                  type: "button",
                  className: "menu-item",
                  onClick: () => {
                    (h.close(),
                      i.navAdd(e, {
                        label: b.title,
                        to: { type: "page", pageId: b.id },
                        newTab: !1,
                      }));
                  },
                },
                React.createElement(S, { name: ps(b), size: 15 }),
                React.createElement(
                  "span",
                  { className: "menu-label" },
                  b.title,
                ),
                React.createElement(
                  "span",
                  { className: "menu-hint" },
                  O(n, b),
                ),
              ),
            ),
            React.createElement("div", { className: "menu-sep" }),
            React.createElement(
              "button",
              {
                type: "button",
                className: "menu-item",
                onClick: () => {
                  (h.close(),
                    s.pickLink(
                      { to: { type: "url", url: "https://" }, newTab: !0 },
                      (b) =>
                        i.navAdd(e, {
                          label:
                            b.to.type === "url"
                              ? "New link"
                              : pt(n, b.to, s.mediaMap).split(" \xB7 ")[0],
                          ...b,
                        }),
                      null,
                    ));
                },
              },
              React.createElement(S, { name: "link", size: 15 }),
              React.createElement(
                "span",
                { className: "menu-label" },
                "Custom link\u2026",
              ),
            ),
          ),
        ),
      ),
    );
  }
  function Ya() {
    let e = se(),
      { site: t, act: a } = e;
    return React.createElement(
      "div",
      { className: "panel" },
      React.createElement(
        "div",
        { className: "panel-head" },
        React.createElement("span", { className: "panel-title" }, "Navigation"),
      ),
      React.createElement(
        "p",
        { className: "panel-note top" },
        "Menus are shared by every page. Drag to reorder, or put a link under another to make a dropdown.",
      ),
      React.createElement(ds, {
        which: "header",
        title: "Header menu",
        hint: `${t.nav.header.length} links`,
      }),
      React.createElement(ds, {
        which: "footer",
        title: "Footer menu",
        hint: `${t.nav.footer.length} links`,
      }),
      React.createElement(
        "div",
        { className: "field field-row nav-auto" },
        React.createElement(
          "label",
          { className: "field-label", htmlFor: "nav-auto" },
          "Add new pages to the header menu automatically",
        ),
        React.createElement(Ke, {
          id: "nav-auto",
          checked: t.nav.autoAdd,
          onChange: (s) =>
            a.update((n) => (n.nav.autoAdd = s), { label: "Menu setting" }),
          label: "Add new pages automatically",
        }),
      ),
    );
  }
  function Za({ sid: e }) {
    let t = se(),
      { site: a, act: s, page: n } = t,
      [i, r] = Ue("content"),
      o = he(a, e);
    if ((Ka(() => r("content"), [e]), !o))
      return React.createElement(
        yt,
        { title: "Section not found" },
        "It may have been deleted. Pick another section.",
      );
    let { sec: d, where: c } = o,
      l = ne[d.block],
      h = c === "shared-header" || c === "shared-footer",
      g = c === "own-header" || c === "own-footer",
      m = c.endsWith("header") ? "header" : "footer",
      u = a.pages.filter((p) => p[m] === "shared").length,
      b = (p, N, P) =>
        s.update(
          (ue) => {
            let R = he(ue, e);
            kn(R.sec.values, p, N);
          },
          { key: P, label: `Edit ${l.title}` },
        ),
      v =
        l.collectionOnly ||
        l.id === "collection-list" ||
        l.id === "news-latest",
      D =
        l.id === "news-latest"
          ? "blog"
          : l.id === "collection-list"
            ? d.values.collection
            : n && n.collectionId,
      k = D && a.collections[D];
    return React.createElement(
      "div",
      { className: "insp" },
      React.createElement(
        "div",
        { className: "insp-head" },
        React.createElement(
          "div",
          { className: "insp-titles" },
          React.createElement(
            "span",
            { className: "insp-eyebrow" },
            h ? `Shared ${m}` : g ? `This page\u2019s ${m}` : ze[l.category],
          ),
          React.createElement("span", { className: "insp-title" }, l.title),
        ),
        React.createElement(
          "div",
          { className: "row gap-2" },
          React.createElement(_, {
            icon: "swap",
            label: "Swap block",
            onClick: () => s.swapSection(e),
          }),
          c === "page" &&
            React.createElement(_, {
              icon: "copy",
              label: "Duplicate",
              onClick: () => s.duplicateSection(e),
            }),
          c === "page" &&
            React.createElement(_, {
              icon: "trash",
              label: "Delete",
              onClick: () => s.deleteSection(e),
            }),
          t.closeInspector &&
            React.createElement(_, {
              icon: "x",
              label: "Close",
              onClick: t.closeInspector,
            }),
        ),
      ),
      h &&
        React.createElement(
          "div",
          { className: "banner banner-info" },
          React.createElement(S, { name: "link", size: 14 }),
          React.createElement(
            "div",
            null,
            React.createElement(
              "strong",
              null,
              "Shared by ",
              de(u, "page"),
              ".",
            ),
            " Edit it once and every page changes.",
            n &&
              n[m] === "shared" &&
              React.createElement(
                "button",
                {
                  type: "button",
                  className: "banner-link",
                  onClick: () => s.setHeadFoot(n.id, m, "detached"),
                },
                "Detach a copy for ",
                n.title,
              ),
          ),
        ),
      g &&
        React.createElement(
          "div",
          { className: "banner banner-warn" },
          React.createElement(S, { name: "unlink", size: 14 }),
          React.createElement(
            "div",
            null,
            React.createElement(
              "strong",
              null,
              "Only ",
              o.page.title,
              " uses this copy.",
            ),
            " Changes to the shared ",
            m,
            " won\u2019t show here.",
            React.createElement(
              "button",
              {
                type: "button",
                className: "banner-link",
                onClick: () => s.setHeadFoot(o.page.id, m, "shared"),
              },
              "Use the shared ",
              m,
              " again",
            ),
          ),
        ),
      React.createElement(
        "div",
        { className: "insp-tabs" },
        React.createElement(re, {
          value: i,
          onChange: r,
          full: !0,
          size: "sm",
          options: [
            ["content", "Content"],
            ["style", "Style"],
          ],
        }),
      ),
      React.createElement(
        "div",
        { className: "insp-body" },
        i === "content" &&
          React.createElement(
            React.Fragment,
            null,
            v &&
              k &&
              React.createElement(
                "div",
                { className: "banner banner-plain" },
                React.createElement(S, { name: "db", size: 14 }),
                React.createElement(
                  "div",
                  null,
                  l.collectionOnly
                    ? `Filled from the ${k.name} entry being shown.`
                    : `Cards come from ${k.name} (${k.entries.filter((p) => p.status !== "draft").length} published).`,
                  React.createElement(
                    "button",
                    {
                      type: "button",
                      className: "banner-link",
                      onClick: () => s.openCollections(D),
                    },
                    "Edit ",
                    k.name.toLowerCase(),
                    " entries",
                  ),
                ),
              ),
            (l.category === "header" || l.category === "footer") &&
              React.createElement(
                "div",
                { className: "banner banner-plain" },
                React.createElement(S, { name: "nav", size: 14 }),
                React.createElement(
                  "div",
                  null,
                  "The menu links come from Navigation.",
                  React.createElement(
                    "button",
                    {
                      type: "button",
                      className: "banner-link",
                      onClick: () => s.openNav(),
                    },
                    "Edit the ",
                    l.category,
                    " menu",
                  ),
                ),
              ),
            React.createElement(ja, {
              fields: l.fields,
              values: d.values,
              onChange: b,
              pageId: n && n.id,
              sid: e,
            }),
            React.createElement(
              "p",
              { className: "insp-tip" },
              React.createElement(S, { name: "pencil", size: 12 }),
              " Tip: click text on the selected section to edit it in place.",
            ),
          ),
        i === "style" &&
          React.createElement(
            "div",
            { className: "form" },
            React.createElement(
              $,
              {
                label: "Background",
                hint: "Sections use your theme colours. Pick how this one sits on the page.",
              },
              React.createElement(re, {
                full: !0,
                value: d.tone || "default",
                onChange: (p) =>
                  s.update((N) => (he(N, e).sec.tone = p), {
                    label: "Section background",
                  }),
                options: [
                  ["default", "Page"],
                  ["muted", "Muted"],
                  ["dark", "Dark"],
                ],
              }),
            ),
            React.createElement(
              $,
              {
                label: "Anchor name",
                htmlFor: "anc-" + e,
                hint: d.anchor
                  ? `Links can jump here with #${d.anchor}`
                  : "Give the section a name so buttons can jump to it.",
              },
              React.createElement(j, {
                id: "anc-" + e,
                prefix: "#",
                value: d.anchor || "",
                placeholder: "contact",
                onChange: (p) =>
                  s.update((N) => (he(N, e).sec.anchor = fe(p.target.value)), {
                    key: "anchor:" + e,
                    label: "Anchor name",
                  }),
              }),
            ),
            c === "page" &&
              React.createElement(
                "div",
                { className: "field field-row" },
                React.createElement(
                  "label",
                  { className: "field-label", htmlFor: "hid-" + e },
                  "Hide this section",
                  React.createElement(
                    "span",
                    { className: "field-hint block" },
                    "Stays in the editor, not on your live site.",
                  ),
                ),
                React.createElement(Ke, {
                  id: "hid-" + e,
                  checked: !!d.hidden,
                  onChange: () => s.toggleHidden(e),
                  label: "Hide section",
                }),
              ),
            React.createElement(
              "div",
              { className: "tagrow" },
              l.tags.map((p) => React.createElement(oe, { key: p }, p)),
            ),
            React.createElement(
              "p",
              { className: "field-hint" },
              l.description,
            ),
          ),
      ),
    );
  }
  function Mi({ site: e, page: t }) {
    let a = t.seo.title || `${t.title} \xB7 ${e.name}`,
      s =
        t.seo.description ||
        "Google will pick text from the page if you leave this empty.";
    return React.createElement(
      "div",
      { className: "gprev" },
      React.createElement(
        "span",
        { className: "gprev-url" },
        e.subdomain,
        ".selfsite.in",
        O(e, t) === "/"
          ? ""
          : " \u203A " + O(e, t).slice(1).split("/").join(" \u203A "),
      ),
      React.createElement(
        "span",
        { className: "gprev-title" },
        a.length > 62 ? a.slice(0, 60) + "\u2026" : a,
      ),
      React.createElement(
        "span",
        { className: x("gprev-desc", !t.seo.description && "muted") },
        s.length > 162 ? s.slice(0, 158) + "\u2026" : s,
      ),
    );
  }
  function Xa({ pageId: e }) {
    let t = se(),
      { site: a, act: s } = t,
      n = V(a, e),
      [i, r] = Ue(n ? n.slug : "");
    if ((Ka(() => r(n ? n.slug : ""), [e, n && n.slug]), !n))
      return React.createElement(yt, { title: "Page not found" });
    let o = (k, p, N = "Page settings") =>
        s.update((P) => k(V(P, e), P), { key: p && p + ":" + e, label: N }),
      d = n.kind === "detail",
      c = n.kind === "notfound",
      l = n.isHome || d || c,
      h = !l && i ? ga(a, e, fe(i) || i, n.parentId) : null,
      g = new Set([
        e,
        ...a.pages
          .filter(
            (k) => k.kind === "detail" || k.kind === "notfound" || k.isHome,
          )
          .map((k) => k.id),
      ]),
      m = (k) =>
        a.pages
          .filter((p) => p.parentId === k)
          .flatMap((p) => [p.id, ...m(p.id)]);
    m(e).forEach((k) => g.add(k));
    let u = [
        ["", "None (top level)"],
        ...a.pages
          .filter((k) => !g.has(k.id))
          .map((k) => [k.id, `${k.title} \xB7 ${O(a, k)}`]),
      ],
      b = () => {
        let k = fe(i);
        if (!k) {
          r(n.slug);
          return;
        }
        h || (k !== n.slug && s.changeUrl(e, k, void 0), r(k));
      },
      v = n.parentId ? O(a, V(a, n.parentId)) : "",
      D = fe(n.title);
    return React.createElement(
      "div",
      { className: "insp" },
      React.createElement(
        "div",
        { className: "insp-head" },
        React.createElement(
          "div",
          { className: "insp-titles" },
          React.createElement(
            "span",
            { className: "insp-eyebrow" },
            d ? "Collection template" : c ? "Special page" : "Page settings",
          ),
          React.createElement(
            "span",
            { className: "insp-title" },
            d ? `${a.collections[n.collectionId].name} template` : n.title,
          ),
        ),
        t.closeInspector &&
          React.createElement(_, {
            icon: "x",
            label: "Close",
            onClick: t.closeInspector,
          }),
      ),
      React.createElement(
        "div",
        { className: "insp-body" },
        React.createElement(
          "div",
          { className: "form" },
          d &&
            React.createElement(
              "div",
              { className: "banner banner-plain" },
              React.createElement(S, { name: "db", size: 14 }),
              React.createElement(
                "div",
                null,
                "One page design for every ",
                a.collections[n.collectionId].name.toLowerCase(),
                " entry, at ",
                O(a, n),
                ". The entry fills in the title, text and photo.",
                React.createElement(
                  "button",
                  {
                    type: "button",
                    className: "banner-link",
                    onClick: () => s.openCollections(n.collectionId),
                  },
                  "Edit entries",
                ),
              ),
            ),
          c &&
            React.createElement(
              "div",
              { className: "banner banner-plain" },
              React.createElement(S, { name: "info", size: 14 }),
              React.createElement(
                "div",
                null,
                "Visitors see this page when they open an address that doesn\u2019t exist. Edit it like any other page.",
              ),
            ),
          React.createElement(
            $,
            {
              label: "Page title",
              htmlFor: "ps-title",
              max: 50,
              count: n.title.length,
            },
            React.createElement(j, {
              id: "ps-title",
              value: n.title,
              onChange: (k) => {
                let p = k.target.value;
                o(
                  (N, P) => {
                    let ue = N.slug === fe(N.title);
                    ((N.title = p),
                      N.status === "draft" &&
                        ue &&
                        !l &&
                        (N.slug = fe(p) || N.slug));
                  },
                  "title",
                  "Page title",
                );
              },
            }),
          ),
          !l &&
            React.createElement(
              $,
              {
                label: "URL slug",
                htmlFor: "ps-slug",
                error: h
                  ? `${h.title} already uses ${O(a, h)}. Pick another slug.`
                  : null,
                hint:
                  n.status === "draft"
                    ? "Follows the title until you publish. You can change it any time."
                    : "Changing it adds a redirect from the old address automatically.",
              },
              React.createElement(j, {
                id: "ps-slug",
                mono: !0,
                prefix: `${v}/`,
                value: i,
                onChange: (k) =>
                  r(k.target.value.toLowerCase().replace(/\s+/g, "-")),
                onBlur: b,
                onKeyDown: (k) => k.key === "Enter" && k.currentTarget.blur(),
              }),
            ),
          !l &&
            n.status !== "draft" &&
            D &&
            D !== n.slug &&
            i === n.slug &&
            React.createElement(
              "button",
              {
                type: "button",
                className: "hint-action",
                onClick: () => s.changeUrl(e, Fi(a, D, n), void 0),
              },
              React.createElement(S, { name: "sparkle", size: 12 }),
              "Match the title: /",
              D,
            ),
          l &&
            React.createElement(
              $,
              { label: "Address" },
              React.createElement(
                "div",
                { className: "readonly mono" },
                a.subdomain,
                ".selfsite.in",
                O(a, n),
              ),
            ),
          !n.isHome &&
            !d &&
            !c &&
            React.createElement(
              $,
              {
                label: "Parent page",
                htmlFor: "ps-parent",
                hint: "Nesting changes the URL. A redirect is added for the old one.",
              },
              React.createElement(ye, {
                id: "ps-parent",
                value: n.parentId || "",
                options: u,
                onChange: (k) => s.changeUrl(e, n.slug, k || null),
              }),
            ),
          !d &&
            !c &&
            React.createElement(
              React.Fragment,
              null,
              React.createElement(
                "div",
                { className: "field field-row" },
                React.createElement(
                  "label",
                  { className: "field-label", htmlFor: "ps-menu" },
                  "Show in the header menu",
                ),
                React.createElement(Ke, {
                  id: "ps-menu",
                  checked: !!n.inMenu,
                  onChange: (k) => s.setInMenu(e, k),
                  label: "Show in menu",
                }),
              ),
              React.createElement(
                $,
                {
                  label: "Visibility",
                  hint:
                    n.status === "live"
                      ? "Published with the site and listed in search."
                      : n.status === "draft"
                        ? "Not published. Only you can see it here."
                        : "Published, but only people with the link can open it. Hidden from search and menus.",
                },
                React.createElement(re, {
                  full: !0,
                  value: n.status,
                  onChange: (k) =>
                    o((p) => (p.status = k), null, "Page visibility"),
                  options: [
                    ["live", "Live"],
                    ["draft", "Draft"],
                    ["hidden", "Hidden"],
                  ],
                }),
              ),
              !n.isHome &&
                n.kind === "page" &&
                React.createElement(
                  H,
                  { icon: "home", onClick: () => s.setHome(e) },
                  "Set as home page",
                ),
            ),
          React.createElement("div", { className: "form-sep" }),
          React.createElement(
            "div",
            { className: "field-group-title" },
            "Header and footer",
          ),
          ["header", "footer"].map((k) =>
            React.createElement(
              $,
              {
                key: k,
                label: k === "header" ? "Header" : "Footer",
                htmlFor: "ps-" + k,
              },
              React.createElement(ye, {
                id: "ps-" + k,
                value: n[k],
                onChange: (p) => s.setHeadFoot(e, k, p),
                options: [
                  ["shared", `Shared ${k}`],
                  ["detached", "Own copy for this page"],
                  ["hidden", "None on this page"],
                ],
              }),
            ),
          ),
          React.createElement("div", { className: "form-sep" }),
          React.createElement(
            "div",
            { className: "field-group-title" },
            "Search and sharing",
          ),
          React.createElement(Mi, { site: a, page: n }),
          React.createElement(
            $,
            {
              label: "Search title",
              htmlFor: "ps-seot",
              max: 60,
              count: (n.seo.title || "").length,
              hint: "Shown as the blue link in Google results.",
            },
            React.createElement(j, {
              id: "ps-seot",
              value: n.seo.title,
              placeholder: `${n.title} \xB7 ${a.name}`,
              onChange: (k) =>
                o(
                  (p) => (p.seo.title = k.target.value),
                  "seot",
                  "Search title",
                ),
            }),
          ),
          React.createElement(
            $,
            {
              label: "Search description",
              htmlFor: "ps-seod",
              max: 160,
              count: (n.seo.description || "").length,
              warn:
                !n.seo.description && n.status !== "draft"
                  ? "Missing. Write one or two sentences about this page."
                  : null,
            },
            React.createElement(nt, {
              id: "ps-seod",
              value: n.seo.description,
              placeholder: "What will someone find on this page?",
              onChange: (k) =>
                o(
                  (p) => (p.seo.description = k.target.value),
                  "seod",
                  "Search description",
                ),
            }),
          ),
          React.createElement(Qt, {
            label: "Share image (WhatsApp, Facebook, LinkedIn)",
            id: "ps-img",
            value: n.seo.image,
            onChange: (k) => o((p) => (p.seo.image = k), null, "Share image"),
          }),
          n.seo.image &&
            React.createElement(
              "div",
              { className: "share-card" },
              React.createElement(vt, {
                id: n.seo.image,
                className: "share-img",
              }),
              React.createElement(
                "div",
                { className: "share-meta" },
                React.createElement(
                  "span",
                  { className: "share-host" },
                  a.subdomain,
                  ".selfsite.in",
                ),
                React.createElement(
                  "span",
                  { className: "share-title" },
                  n.seo.title || n.title,
                ),
              ),
            ),
          !n.isHome &&
            !c &&
            !d &&
            React.createElement(
              React.Fragment,
              null,
              React.createElement("div", { className: "form-sep" }),
              React.createElement(
                H,
                {
                  variant: "danger-ghost",
                  icon: "trash",
                  onClick: () => s.deletePage(e),
                },
                "Delete page",
              ),
            ),
        ),
      ),
    );
  }
  function Fi(e, t, a) {
    return ga(e, a.id, t, a.parentId) ? a.slug : t;
  }
  var Ai = [
    "#0B7A83",
    "#1E5A3C",
    "#2C6E7F",
    "#4B5CF0",
    "#8E1C47",
    "#B4441C",
    "#C77B12",
    "#151515",
  ];
  function Va({ label: e, value: t, onChange: a, id: s, suggestions: n }) {
    let [i, r] = Ue(t);
    return (
      Ka(() => r(t), [t]),
      React.createElement(
        $,
        { label: e, htmlFor: s },
        React.createElement(
          "div",
          { className: "colorrow" },
          React.createElement(
            "label",
            { className: "swatch-input", style: { background: t } },
            React.createElement("input", {
              type: "color",
              value: t,
              onChange: (o) => a(o.target.value.toUpperCase()),
              "aria-label": `${e} colour picker`,
            }),
          ),
          React.createElement(j, {
            id: s,
            mono: !0,
            value: i,
            onChange: (o) => {
              (r(o.target.value),
                xn(o.target.value) && a(o.target.value.toUpperCase()));
            },
            className: "hex",
          }),
          n &&
            React.createElement(
              "div",
              { className: "swatches" },
              n.map((o) =>
                React.createElement("button", {
                  key: o,
                  type: "button",
                  className: x(
                    "swatch",
                    o.toLowerCase() === t.toLowerCase() && "on",
                  ),
                  style: { background: o },
                  onClick: () => a(o),
                  "aria-label": o,
                }),
              ),
            ),
        ),
      )
    );
  }
  function cs({ id: e, value: t, onChange: a, label: s }) {
    let n = ft(),
      i = Ie[t] || Wt[0];
    return React.createElement(
      $,
      { label: s, htmlFor: e },
      React.createElement(
        "span",
        { className: "anchor block", ref: n.ref },
        React.createElement(
          "button",
          { type: "button", id: e, className: "fontsel", onClick: n.toggle },
          React.createElement(
            "span",
            {
              className: "fontsel-sample",
              style: { fontFamily: i.stack, fontWeight: i.weight },
            },
            "Aa",
          ),
          React.createElement("span", { className: "fontsel-name" }, i.name),
          React.createElement("span", { className: "muted small" }, i.kind),
          React.createElement(S, { name: "down", size: 14 }),
        ),
      ),
      React.createElement(
        ht,
        { anchor: n.el, open: n.open, onClose: n.close, width: 280 },
        React.createElement(
          "div",
          { className: "menu fontlist" },
          Wt.map((r) =>
            React.createElement(
              "button",
              {
                key: r.name,
                type: "button",
                className: x("menu-item", r.name === t && "on"),
                onClick: () => {
                  (a(r.name), n.close());
                },
              },
              React.createElement(
                "span",
                {
                  className: "fontlist-sample",
                  style: { fontFamily: r.stack, fontWeight: r.weight },
                },
                r.name,
              ),
              React.createElement("span", { className: "menu-hint" }, r.kind),
            ),
          ),
        ),
      ),
    );
  }
  function en() {
    let e = se(),
      { site: t, act: a } = e,
      s = t.theme,
      n = s.colors[s.mode],
      [i, r] = Ue(!1),
      o = (d, c, l = "Theme") =>
        a.update((h) => d(h.theme), { key: c && "theme:" + c, label: l });
    return React.createElement(
      "div",
      { className: "insp" },
      React.createElement(
        "div",
        { className: "insp-head" },
        React.createElement(
          "div",
          { className: "insp-titles" },
          React.createElement("span", { className: "insp-eyebrow" }, "Design"),
          React.createElement("span", { className: "insp-title" }, "Theme"),
        ),
        e.closeInspector &&
          React.createElement(_, {
            icon: "x",
            label: "Close",
            onClick: e.closeInspector,
          }),
      ),
      React.createElement(
        "div",
        { className: "insp-body" },
        React.createElement(
          "div",
          { className: "form" },
          React.createElement(
            "p",
            { className: "field-hint" },
            "Every section reads these settings, so one change restyles the whole site.",
          ),
          React.createElement(
            "div",
            { className: "field-group-title" },
            "Presets",
          ),
          React.createElement(
            "div",
            { className: "presets" },
            ua.map((d) => {
              let c = d.colors[s.mode],
                l = s.presetId === d.id;
              return React.createElement(
                "button",
                {
                  key: d.id,
                  type: "button",
                  className: x("preset", l && "on"),
                  onClick: () =>
                    a.update(
                      (h) => {
                        h.theme = ha(d.id, { mode: h.theme.mode });
                      },
                      { label: `Theme preset ${d.name}` },
                    ),
                },
                React.createElement(
                  "span",
                  {
                    className: "preset-art",
                    style: {
                      background: c.background,
                      color: c.foreground,
                      borderColor: c.border,
                    },
                  },
                  React.createElement(
                    "span",
                    {
                      style: {
                        fontFamily: Ie[d.fonts.display].stack,
                        fontWeight: Ie[d.fonts.display].weight,
                      },
                    },
                    "Aa",
                  ),
                  React.createElement(
                    "span",
                    { className: "preset-dots" },
                    React.createElement("i", {
                      style: { background: c.primary },
                    }),
                    React.createElement("i", {
                      style: { background: c.accent },
                    }),
                    React.createElement("i", {
                      style: {
                        background: c.muted,
                        boxShadow: `inset 0 0 0 1px ${c.border}`,
                      },
                    }),
                  ),
                ),
                React.createElement(
                  "span",
                  { className: "preset-name" },
                  d.name,
                ),
              );
            }),
          ),
          React.createElement(
            $,
            { label: "Mode" },
            React.createElement(re, {
              full: !0,
              value: s.mode,
              onChange: (d) => o((c) => (c.mode = d), null, "Light or dark"),
              options: [
                ["light", "Light", "sun"],
                ["dark", "Dark", "moon"],
              ],
            }),
          ),
          React.createElement("div", { className: "form-sep" }),
          React.createElement(
            "div",
            { className: "field-group-title" },
            "Colours \xB7 ",
            s.mode,
          ),
          React.createElement(Va, {
            label: "Primary",
            id: "th-primary",
            value: n.primary,
            onChange: (d) =>
              o(
                (c) => (c.colors[c.mode].primary = d),
                "primary",
                "Primary colour",
              ),
            suggestions: Ai,
          }),
          React.createElement(Va, {
            label: "Accent",
            id: "th-accent",
            value: n.accent,
            onChange: (d) =>
              o(
                (c) => (c.colors[c.mode].accent = d),
                "accent",
                "Accent colour",
              ),
            suggestions: [
              "#F2A541",
              "#E2A23B",
              "#C49A45",
              "#D19A2A",
              "#12B39A",
              "#E07A5F",
              "#A9824E",
              "#6C8BFF",
            ],
          }),
          React.createElement(
            "button",
            {
              type: "button",
              className: "disclose",
              onClick: () => r(!i),
              "aria-expanded": i,
            },
            React.createElement(S, { name: i ? "down" : "right", size: 13 }),
            "All colour tokens",
          ),
          i &&
            zn
              .filter((d) => d !== "primary" && d !== "accent")
              .map((d) =>
                React.createElement(Va, {
                  key: d,
                  label: d[0].toUpperCase() + d.slice(1),
                  id: "th-" + d,
                  value: n[d],
                  onChange: (c) =>
                    o((l) => (l.colors[l.mode][d] = c), d, `${d} colour`),
                }),
              ),
          React.createElement("div", { className: "form-sep" }),
          React.createElement(
            "div",
            { className: "field-group-title" },
            "Fonts",
          ),
          React.createElement(cs, {
            id: "th-fd",
            label: "Headings",
            value: s.fonts.display,
            onChange: (d) =>
              o((c) => (c.fonts.display = d), null, "Heading font"),
          }),
          React.createElement(cs, {
            id: "th-fb",
            label: "Body text",
            value: s.fonts.body,
            onChange: (d) => o((c) => (c.fonts.body = d), null, "Body font"),
          }),
          React.createElement("div", { className: "form-sep" }),
          React.createElement(
            "div",
            { className: "field-group-title" },
            "Shape and spacing",
          ),
          React.createElement(
            $,
            { label: "Corners" },
            React.createElement(re, {
              full: !0,
              size: "sm",
              value: Number(s.radius),
              onChange: (d) => o((c) => (c.radius = d), null, "Corner radius"),
              options: $n.map(([d, c]) => [d, c]),
            }),
          ),
          React.createElement(
            $,
            { label: "Section spacing" },
            React.createElement(re, {
              full: !0,
              size: "sm",
              value: s.spacing,
              onChange: (d) =>
                o((c) => (c.spacing = d), null, "Section spacing"),
              options: Object.entries(ma).map(([d, c]) => [d, c.label]),
            }),
          ),
          React.createElement(
            $,
            { label: "Page width" },
            React.createElement(re, {
              full: !0,
              size: "sm",
              value: Number(s.width),
              onChange: (d) => o((c) => (c.width = d), null, "Page width"),
              options: Hn,
            }),
          ),
          React.createElement(
            "div",
            {
              className: "theme-sample",
              style: {
                background: n.background,
                color: n.foreground,
                borderColor: n.border,
                borderRadius: Math.min(Number(s.radius), 20),
              },
            },
            React.createElement(
              "span",
              {
                className: "theme-sample-h",
                style: {
                  fontFamily: Ie[s.fonts.display].stack,
                  fontWeight: Ie[s.fonts.display].weight,
                },
              },
              "Gentle care, honest fees",
            ),
            React.createElement(
              "span",
              {
                className: "theme-sample-p",
                style: { fontFamily: Ie[s.fonts.body].stack },
              },
              "This is how body text reads with ",
              s.fonts.body,
              ".",
            ),
            React.createElement(
              "span",
              { className: "row gap-8" },
              React.createElement(
                "span",
                {
                  className: "theme-sample-btn",
                  style: {
                    background: n.primary,
                    color: Ei(n.primary),
                    borderRadius:
                      Number(s.radius) >= 999
                        ? 999
                        : Math.min(Number(s.radius), 14),
                    fontFamily: Ie[s.fonts.body].stack,
                  },
                },
                "Book now",
              ),
              React.createElement(
                "span",
                {
                  className: "theme-sample-btn ghost",
                  style: {
                    borderColor: n.border,
                    color: n.foreground,
                    borderRadius:
                      Number(s.radius) >= 999
                        ? 999
                        : Math.min(Number(s.radius), 14),
                    fontFamily: Ie[s.fonts.body].stack,
                  },
                },
                "Call us",
              ),
            ),
          ),
        ),
      ),
    );
  }
  function Ei(e) {
    let t = parseInt(e.slice(1), 16),
      a = (t >> 16) & 255,
      s = (t >> 8) & 255,
      n = t & 255;
    return (a * 299 + s * 587 + n * 114) / 1e3 > 150 ? "#111" : "#fff";
  }
  var {
      useState: ee,
      useMemo: Yt,
      useEffect: ms,
      useRef: us,
      Fragment: hs,
    } = React,
    Di = [
      ["page", "Page", "pages"],
      ["anchor", "Section", "hash"],
      ["collection", "Entry", "db"],
      ["url", "Web", "globe"],
      ["phone", "Phone", "call"],
      ["whatsapp", "WhatsApp", "whatsapp"],
      ["email", "Email", "mail"],
      ["file", "File", "download"],
    ];
  function fs({ value: e, onSave: t, onClose: a, pageId: s }) {
    let n = se(),
      { site: i } = n,
      r = (e && e.to) || { type: "page", pageId: "@home" },
      [o, d] = ee(X(r)),
      [c, l] = ee(!!(e && e.newTab)),
      [h, g] = ee(""),
      m = i.pages.filter((p) => p.kind !== "detail"),
      u = (p) => {
        let N = { type: p };
        if (
          (p === "page" && (N.pageId = o.pageId || "@home"),
          p === "anchor" &&
            ((N.pageId =
              o.pageId && o.pageId !== "@home" ? o.pageId : s || null),
            (N.anchor = "")),
          p === "collection")
        ) {
          let P =
            Object.values(i.collections).find((ue) => ue.entries.length) ||
            Object.values(i.collections)[0];
          ((N.collectionId = P.id),
            (N.entryId = P.entries[0] ? P.entries[0].id : null));
        }
        (p === "url" && (N.url = "https://"),
          (p === "phone" || p === "whatsapp") && (N.phone = "+91 "),
          p === "whatsapp" && (N.message = ""),
          p === "email" && ((N.email = ""), (N.subject = "")),
          p === "file" &&
            (N.fileId =
              (n.media.find((P) => P.kind === "file") || {}).id || null),
          d(N),
          (p === "url" || p === "whatsapp") && l(!0),
          (p === "page" || p === "anchor" || p === "collection") && l(!1));
      },
      b = _e(i, o, { media: n.mediaMap, pageId: s }),
      v = o.type === "anchor" ? (o.pageId ? V(i, o.pageId) : V(i, s)) : null,
      D = v ? It(i, v).filter((p) => p.anchor) : [],
      k = n.media.filter((p) => p.kind === "file");
    return React.createElement(
      Pe,
      {
        title: "Link to",
        onClose: a,
        width: 560,
        footer: React.createElement(
          React.Fragment,
          null,
          React.createElement(
            "div",
            { className: "foot-left" },
            React.createElement(Ke, {
              id: "lp-newtab",
              checked: c,
              onChange: l,
              label: "Open in a new tab",
            }),
            React.createElement(
              "label",
              { htmlFor: "lp-newtab", className: "small" },
              "Open in a new tab",
            ),
          ),
          React.createElement(H, { onClick: a }, "Cancel"),
          React.createElement(
            H,
            {
              variant: "primary",
              disabled: b.broken,
              onClick: () => {
                (t({ to: o, newTab: c }), a());
              },
            },
            "Save link",
          ),
        ),
      },
      React.createElement(
        "div",
        { className: "lp-types", role: "tablist" },
        Di.map(([p, N, P]) =>
          React.createElement(
            "button",
            {
              key: p,
              type: "button",
              role: "tab",
              "aria-selected": o.type === p,
              className: x("lp-type", o.type === p && "on"),
              onClick: () => u(p),
            },
            React.createElement(S, { name: P, size: 15 }),
            React.createElement("span", null, N),
          ),
        ),
      ),
      React.createElement(
        "div",
        { className: "lp-body" },
        o.type === "page" &&
          React.createElement(
            React.Fragment,
            null,
            React.createElement(j, {
              placeholder: "Search pages",
              value: h,
              onChange: (p) => g(p.target.value),
              prefix: React.createElement(S, { name: "search", size: 14 }),
              "data-autofocus": !0,
            }),
            React.createElement(
              "div",
              { className: "pick-list" },
              m
                .filter((p) => Ct(h, p.title + " " + O(i, p)))
                .map((p) => {
                  let N =
                    o.pageId === p.id || (o.pageId === "@home" && p.isHome);
                  return React.createElement(
                    "button",
                    {
                      key: p.id,
                      type: "button",
                      className: x("pick-row", N && "on"),
                      onClick: () =>
                        d({ type: "page", pageId: p.isHome ? "@home" : p.id }),
                    },
                    React.createElement(S, {
                      name: p.isHome ? "home" : "pages",
                      size: 15,
                    }),
                    React.createElement(
                      "span",
                      { className: "pick-main" },
                      p.title,
                    ),
                    React.createElement(
                      "span",
                      { className: "pick-sub mono" },
                      O(i, p),
                    ),
                    p.status !== "live" &&
                      React.createElement(
                        oe,
                        { tone: p.status === "draft" ? "warn" : "neutral" },
                        p.status === "draft" ? "Draft" : "Hidden",
                      ),
                    N && React.createElement(S, { name: "check", size: 15 }),
                  );
                }),
            ),
          ),
        o.type === "anchor" &&
          React.createElement(
            "div",
            { className: "form" },
            React.createElement(
              $,
              { label: "On page", htmlFor: "lp-ap" },
              React.createElement(ye, {
                id: "lp-ap",
                value: o.pageId || "",
                onChange: (p) => d({ ...o, pageId: p || null, anchor: "" }),
                options: [
                  ["", "The same page as the button"],
                  ...m.map((p) => [p.id, `${p.title} \xB7 ${O(i, p)}`]),
                ],
              }),
            ),
            React.createElement(
              $,
              {
                label: "Section",
                hint: D.length
                  ? "Only sections with an anchor name are listed. Add one under a section\u2019s Style tab."
                  : "No section on this page has an anchor name yet. Add one under a section\u2019s Style tab.",
              },
              React.createElement(
                "div",
                { className: "pick-list" },
                D.map((p) =>
                  React.createElement(
                    "button",
                    {
                      key: p.id,
                      type: "button",
                      className: x("pick-row", o.anchor === p.anchor && "on"),
                      onClick: () => d({ ...o, anchor: p.anchor }),
                    },
                    React.createElement(S, { name: "hash", size: 15 }),
                    React.createElement(
                      "span",
                      { className: "pick-main" },
                      "#",
                      p.anchor,
                    ),
                    React.createElement(
                      "span",
                      { className: "pick-sub" },
                      ne[p.block].title,
                    ),
                    o.anchor === p.anchor &&
                      React.createElement(S, { name: "check", size: 15 }),
                  ),
                ),
              ),
            ),
          ),
        o.type === "collection" &&
          React.createElement(
            "div",
            { className: "form" },
            React.createElement(
              $,
              { label: "Collection" },
              React.createElement(re, {
                full: !0,
                value: o.collectionId,
                onChange: (p) =>
                  d({
                    ...o,
                    collectionId: p,
                    entryId: (i.collections[p].entries[0] || {}).id || null,
                  }),
                options: Object.values(i.collections).map((p) => [
                  p.id,
                  p.name,
                ]),
              }),
            ),
            React.createElement(
              "div",
              { className: "pick-list" },
              i.collections[o.collectionId].entries.length === 0 &&
                React.createElement(
                  "p",
                  { className: "muted small pad-8" },
                  "No entries yet.",
                ),
              i.collections[o.collectionId].entries.map((p) =>
                React.createElement(
                  "button",
                  {
                    key: p.id,
                    type: "button",
                    className: x("pick-row", o.entryId === p.id && "on"),
                    onClick: () => d({ ...o, entryId: p.id }),
                  },
                  React.createElement(vt, {
                    id: p.image,
                    className: "thumb-xs",
                  }),
                  React.createElement(
                    "span",
                    { className: "pick-main" },
                    p.title,
                  ),
                  React.createElement(
                    "span",
                    { className: "pick-sub mono" },
                    at(i, o.collectionId, p) || "no detail page",
                  ),
                  p.status === "draft" &&
                    React.createElement(oe, { tone: "warn" }, "Draft"),
                ),
              ),
            ),
          ),
        o.type === "url" &&
          React.createElement(
            $,
            {
              label: "Web address",
              htmlFor: "lp-url",
              error:
                o.url && o.url !== "https://" && b.broken ? b.reason : null,
            },
            React.createElement(j, {
              id: "lp-url",
              mono: !0,
              value: o.url,
              onChange: (p) => d({ ...o, url: p.target.value.trim() }),
              placeholder: "https://",
              "data-autofocus": !0,
            }),
          ),
        (o.type === "phone" || o.type === "whatsapp") &&
          React.createElement(
            "div",
            { className: "form" },
            React.createElement(
              $,
              {
                label: o.type === "phone" ? "Phone number" : "WhatsApp number",
                htmlFor: "lp-ph",
                hint: "Include the country code, e.g. +91 98400 21456.",
                error:
                  o.phone.replace(/\D/g, "").length > 3 && b.broken
                    ? b.reason
                    : null,
              },
              React.createElement(j, {
                id: "lp-ph",
                type: "tel",
                value: o.phone,
                onChange: (p) => d({ ...o, phone: p.target.value }),
                "data-autofocus": !0,
              }),
            ),
            o.type === "whatsapp" &&
              React.createElement(
                $,
                {
                  label: "Opening message (optional)",
                  htmlFor: "lp-msg",
                  max: 120,
                  count: (o.message || "").length,
                  hint: "Filled into the chat so the visitor only has to press send.",
                },
                React.createElement(nt, {
                  id: "lp-msg",
                  value: o.message,
                  onChange: (p) => d({ ...o, message: p.target.value }),
                  placeholder: "Hi, I would like to book an appointment.",
                }),
              ),
          ),
        o.type === "email" &&
          React.createElement(
            "div",
            { className: "form" },
            React.createElement(
              $,
              { label: "Email address", htmlFor: "lp-em" },
              React.createElement(j, {
                id: "lp-em",
                type: "email",
                value: o.email,
                onChange: (p) => d({ ...o, email: p.target.value.trim() }),
                placeholder: "hello@yourbusiness.in",
                "data-autofocus": !0,
              }),
            ),
            React.createElement(
              $,
              { label: "Subject (optional)", htmlFor: "lp-sub" },
              React.createElement(j, {
                id: "lp-sub",
                value: o.subject,
                onChange: (p) => d({ ...o, subject: p.target.value }),
              }),
            ),
          ),
        o.type === "file" &&
          React.createElement(
            "div",
            { className: "form" },
            React.createElement(
              "div",
              { className: "pick-list" },
              k.map((p) =>
                React.createElement(
                  "button",
                  {
                    key: p.id,
                    type: "button",
                    className: x("pick-row", o.fileId === p.id && "on"),
                    onClick: () => d({ ...o, fileId: p.id }),
                  },
                  React.createElement(S, { name: "file", size: 15 }),
                  React.createElement(
                    "span",
                    { className: "pick-main" },
                    p.name,
                  ),
                  React.createElement(
                    "span",
                    { className: "pick-sub" },
                    Ae(p.size),
                  ),
                  o.fileId === p.id &&
                    React.createElement(S, { name: "check", size: 15 }),
                ),
              ),
            ),
            React.createElement(
              H,
              {
                size: "sm",
                icon: "upload",
                onClick: () =>
                  n.act.openMedia("file", (p) => d({ ...o, fileId: p })),
              },
              "Upload a file",
            ),
          ),
        React.createElement(
          "div",
          {
            className: x("lp-result", b.broken ? "err" : b.warn ? "warn" : ""),
          },
          React.createElement(S, {
            name: b.broken ? "alert" : mt[o.type],
            size: 14,
          }),
          React.createElement(
            "span",
            { className: "mono" },
            b.broken ? b.reason : b.href,
          ),
          !b.broken &&
            b.warn &&
            React.createElement(
              "span",
              null,
              "\xB7 goes to a ",
              b.warn,
              " page",
            ),
        ),
      ),
    );
  }
  function Ii({ block: e, site: t, media: a, page: s }) {
    let n = ne[e],
      i = Yt(() => ({ ...Be(e), id: "preview-" + e }), [e]);
    return React.createElement(
      "div",
      { className: "lib-prev" },
      React.createElement(
        it,
        { device: "desktop", bare: !0, minScale: 0.05 },
        React.createElement(Ut, { site: t, page: s, media: a, sections: [i] }),
      ),
      n.collectionOnly &&
        React.createElement(
          "span",
          { className: "lib-prev-tag" },
          "Detail pages",
        ),
    );
  }
  function gs({
    mode: e = "add",
    category: t,
    current: a,
    onPick: s,
    onClose: n,
  }) {
    let i = se(),
      [r, o] = ee(t || "all"),
      [d, c] = ee(""),
      l = i.page && i.page.kind === "detail",
      h = _t
        .filter((m) => !m.collectionOnly || l)
        .filter((m) =>
          e === "swap"
            ? m.category === t && m.id !== a
            : r === "all" || m.category === r,
        )
        .filter((m) =>
          Ct(
            d,
            m.title +
              " " +
              m.description +
              " " +
              m.tags.join(" ") +
              " " +
              ze[m.category],
          ),
        ),
      g = Object.fromEntries(
        Rt.map(([m]) => [m, _t.filter((u) => u.category === m).length]),
      );
    return React.createElement(
      Pe,
      {
        title:
          e === "swap"
            ? `Swap for another ${ze[t].toLowerCase()} block`
            : "Add a section",
        subtitle:
          e === "swap"
            ? "Your text, photos and links carry over where the fields match."
            : "Previews use your theme, so they look the way they will on your site.",
        onClose: n,
        width: 980,
        tall: !0,
        bodyClass: "lib-body",
      },
      e === "add" &&
        React.createElement(
          "nav",
          { className: "lib-cats" },
          React.createElement(j, {
            placeholder: "Search blocks",
            value: d,
            onChange: (m) => c(m.target.value),
            prefix: React.createElement(S, { name: "search", size: 14 }),
            "data-autofocus": !0,
          }),
          React.createElement(
            "button",
            {
              type: "button",
              className: x("lib-cat", r === "all" && "on"),
              onClick: () => o("all"),
            },
            "All blocks ",
            React.createElement("span", { className: "muted" }, _t.length),
          ),
          Rt.map(([m, u]) =>
            React.createElement(
              "button",
              {
                key: m,
                type: "button",
                className: x("lib-cat", r === m && "on"),
                onClick: () => o(m),
              },
              u,
              " ",
              React.createElement("span", { className: "muted" }, g[m]),
            ),
          ),
        ),
      React.createElement(
        "div",
        { className: "lib-grid" },
        h.length === 0 &&
          React.createElement(
            yt,
            { title: "No other blocks in this category yet" },
            e === "swap"
              ? "Every block in SITEFOUNDRY shares the same theme, so new ones will match."
              : "Try another search.",
          ),
        h.map((m) =>
          React.createElement(
            "button",
            {
              key: m.id,
              type: "button",
              className: "lib-card",
              onClick: () => {
                (s(m.id), n());
              },
            },
            React.createElement(Ii, {
              block: m.id,
              site: i.site,
              media: i.mediaMap,
              page: i.page,
            }),
            React.createElement(
              "span",
              { className: "lib-meta" },
              React.createElement(
                "span",
                { className: "lib-title" },
                m.title,
                React.createElement(
                  "span",
                  { className: "muted small" },
                  ze[m.category],
                ),
              ),
              React.createElement(
                "span",
                { className: "lib-desc" },
                m.description,
              ),
              m.tags.length > 0 &&
                React.createElement(
                  "span",
                  { className: "tagrow" },
                  m.tags.map((u) => React.createElement(oe, { key: u }, u)),
                ),
            ),
          ),
        ),
      ),
    );
  }
  function ys({ parentId: e, onClose: t, onCreate: a }) {
    let s = se(),
      { site: n } = s,
      [i, r] = ee("blank"),
      [o, d] = ee(""),
      [c, l] = ee(e || ""),
      [h, g] = ee("atelier"),
      [m, u] = ee("contact"),
      [b, v] = ee(
        n.pages.find((E) => E.kind === "page" && !E.isHome)?.id ||
          n.pages[0].id,
      ),
      D = [
        ["", "None (top level)"],
        ...n.pages
          .filter(
            (E) => E.kind !== "detail" && E.kind !== "notfound" && !E.isHome,
          )
          .map((E) => [E.id, `${E.title} \xB7 ${O(n, E)}`]),
      ],
      k = dt[h],
      p = k.pages.filter((E) => E.kind !== "detail"),
      N = p.find((E) => E.key === m) || p[0],
      P = Yt(() => {
        let E = tt(k, { name: n.name });
        return ((E.theme = n.theme), (E.collections = n.collections), E);
      }, [h, n.theme, n.collections, n.name]),
      ue = P.pages.find((E) => E.key === (N && N.key)),
      R = V(n, b),
      Me = i === "blank" ? o.trim().length > 0 : i === "template" ? !!N : !!R,
      Oe = () => {
        (a({
          how: i,
          title: o.trim(),
          parentId: c || null,
          tplId: h,
          tplKey: N && N.key,
          dupId: b,
        }),
          t());
      };
    return React.createElement(
      Pe,
      {
        title: "Add a page",
        onClose: t,
        width: i === "template" ? 960 : 600,
        tall: i === "template",
        footer: React.createElement(
          React.Fragment,
          null,
          React.createElement(
            "span",
            { className: "foot-left muted small" },
            "New pages start as drafts. Publish when you\u2019re ready.",
          ),
          React.createElement(H, { onClick: t }, "Cancel"),
          React.createElement(
            H,
            { variant: "primary", disabled: !Me, onClick: Oe },
            "Add page",
          ),
        ),
      },
      React.createElement(
        "div",
        { className: "howgrid" },
        [
          [
            "blank",
            "pages",
            "Blank page",
            "Start with a heading and a text block.",
          ],
          [
            "template",
            "layout",
            "From a template",
            "Copy any page from any template. It takes on your theme.",
          ],
          [
            "duplicate",
            "copy",
            "Duplicate a page",
            "Copy one of your pages with all its sections.",
          ],
        ].map(([E, L, U, le]) =>
          React.createElement(
            "button",
            {
              key: E,
              type: "button",
              className: x("how", i === E && "on"),
              onClick: () => r(E),
              "aria-pressed": i === E,
            },
            React.createElement(S, { name: L, size: 18 }),
            React.createElement("span", { className: "how-title" }, U),
            React.createElement("span", { className: "how-desc" }, le),
          ),
        ),
      ),
      i === "blank" &&
        React.createElement(
          "div",
          { className: "form mt-16" },
          React.createElement(
            $,
            {
              label: "Page title",
              htmlFor: "ap-title",
              hint: o
                ? `Address: ${n.subdomain}.selfsite.in${c ? O(n, V(n, c)) : ""}/${fe(o)}`
                : "You can change the address later.",
            },
            React.createElement(j, {
              id: "ap-title",
              value: o,
              onChange: (E) => d(E.target.value),
              placeholder: "e.g. Teeth whitening",
              "data-autofocus": !0,
              onKeyDown: (E) => E.key === "Enter" && Me && Oe(),
            }),
          ),
          React.createElement(
            $,
            { label: "Parent page", htmlFor: "ap-parent" },
            React.createElement(ye, {
              id: "ap-parent",
              value: c,
              onChange: l,
              options: D,
            }),
          ),
        ),
      i === "template" &&
        React.createElement(
          "div",
          { className: "tplpick mt-16" },
          React.createElement(
            "div",
            { className: "tplpick-side" },
            React.createElement(
              "div",
              { className: "field-group-title" },
              "Template",
            ),
            lt.map((E) =>
              React.createElement(
                "button",
                {
                  key: E.id,
                  type: "button",
                  className: x("pick-row", E.id === h && "on"),
                  onClick: () => {
                    g(E.id);
                    let L =
                      E.pages.find((U) => U.key === m && U.kind !== "detail") ||
                      E.pages[0];
                    u(L.key);
                  },
                },
                React.createElement("span", {
                  className: "pick-swatch",
                  style: { background: Et[E.theme].colors.light.primary },
                }),
                React.createElement("span", { className: "pick-main" }, E.name),
                React.createElement("span", { className: "pick-sub" }, E.kind),
              ),
            ),
            React.createElement(
              "div",
              { className: "field-group-title mt-16" },
              "Page",
            ),
            p.map((E) =>
              React.createElement(
                "button",
                {
                  key: E.key,
                  type: "button",
                  className: x("pick-row", E.key === (N && N.key) && "on"),
                  onClick: () => u(E.key),
                },
                React.createElement(S, {
                  name: E.kind === "list" ? "collection" : "pages",
                  size: 15,
                }),
                React.createElement(
                  "span",
                  { className: "pick-main" },
                  E.title,
                ),
                React.createElement(
                  "span",
                  { className: "pick-sub" },
                  E.sections.length,
                  " sections",
                ),
              ),
            ),
            React.createElement(
              $,
              { label: "Parent page", htmlFor: "ap-parent2" },
              React.createElement(ye, {
                id: "ap-parent2",
                value: c,
                onChange: l,
                options: D,
              }),
            ),
          ),
          React.createElement(
            "div",
            { className: "tplpick-prev" },
            React.createElement(
              "div",
              { className: "tplpick-cap" },
              React.createElement(S, { name: "theme", size: 14 }),
              " ",
              k.name,
              " \xB7 ",
              N.title,
              ", shown in your theme",
            ),
            React.createElement(
              "div",
              { className: "tplpick-scroll" },
              ue &&
                React.createElement(
                  it,
                  { device: "desktop", bare: !0, minScale: 0.1 },
                  React.createElement(Ut, {
                    site: P,
                    page: ue,
                    media: s.mediaMap,
                  }),
                ),
            ),
          ),
        ),
      i === "duplicate" &&
        React.createElement(
          "div",
          { className: "form mt-16" },
          React.createElement(
            $,
            { label: "Page to copy", htmlFor: "ap-dup" },
            React.createElement(ye, {
              id: "ap-dup",
              value: b,
              onChange: v,
              options: n.pages
                .filter((E) => E.kind !== "detail")
                .map((E) => [E.id, `${E.title} \xB7 ${O(n, E)}`]),
            }),
          ),
          R &&
            React.createElement(
              "p",
              { className: "field-hint" },
              "Copies ",
              de(R.sections.length, "section"),
              ", the header and footer settings and the SEO fields. The copy starts as a draft.",
            ),
        ),
    );
  }
  function bs({ pageId: e, onClose: t, onConfirm: a }) {
    let s = se(),
      { site: n } = s,
      i = V(n, e),
      r = qn(n, e, s.mediaMap),
      o = r.links.filter((b) => b.navId),
      d = r.links.filter((b) => !b.navId),
      c = n.pages.find((b) => b.parentId === e && b.kind === "detail"),
      [l, h] = ee(""),
      [g, m] = ee(i.status !== "draft"),
      u = n.pages.filter(
        (b) => b.id !== e && b.kind !== "detail" && b.kind !== "notfound",
      );
    return React.createElement(
      Pe,
      {
        title: `Delete \u201C${i.title}\u201D?`,
        onClose: t,
        width: 520,
        footer: React.createElement(
          React.Fragment,
          null,
          React.createElement(H, { onClick: t }, "Cancel"),
          React.createElement(
            H,
            {
              variant: "danger",
              onClick: () => {
                (a({ relinkTo: l || null, redirect: g && !!l }), t());
              },
            },
            "Delete page",
          ),
        ),
      },
      React.createElement(
        "div",
        { className: "form" },
        React.createElement(
          "p",
          { className: "body-text" },
          O(n, i),
          " will go offline when you next publish. You can undo this until then.",
        ),
        o.length + d.length === 0 &&
          !r.children.length &&
          !c &&
          React.createElement(
            "div",
            { className: "banner banner-plain" },
            React.createElement(S, { name: "check", size: 14 }),
            React.createElement(
              "div",
              null,
              "Nothing else on your site links to this page.",
            ),
          ),
        o.length > 0 &&
          React.createElement(
            "div",
            { className: "refbox" },
            React.createElement(
              "div",
              { className: "refbox-h" },
              React.createElement(S, { name: "nav", size: 14 }),
              "Removed from ",
              de(o.length, "menu"),
            ),
            o.map((b, v) =>
              React.createElement(
                "div",
                { key: v, className: "refbox-row" },
                b.area,
                " \xB7 \u201C",
                b.label,
                "\u201D",
              ),
            ),
          ),
        d.length > 0 &&
          React.createElement(
            "div",
            { className: "refbox warn" },
            React.createElement(
              "div",
              { className: "refbox-h" },
              React.createElement(S, { name: "alert", size: 14 }),
              de(d.length, "button or link", "buttons and links"),
              " point here",
            ),
            d.map((b, v) =>
              React.createElement(
                "div",
                { key: v, className: "refbox-row" },
                b.area,
                " \u203A ",
                b.block,
                " \xB7 \u201C",
                b.label,
                "\u201D",
              ),
            ),
            React.createElement(
              $,
              {
                label: "Point them to",
                htmlFor: "dp-relink",
                hint: l
                  ? ""
                  : "If you leave them, they show up as broken links before you publish.",
              },
              React.createElement(ye, {
                id: "dp-relink",
                value: l,
                onChange: h,
                options: [
                  ["", "Leave them (fix later)"],
                  ...u.map((b) => [b.id, `${b.title} \xB7 ${O(n, b)}`]),
                ],
              }),
            ),
          ),
        (r.children.length > 0 || c) &&
          React.createElement(
            "div",
            { className: "refbox" },
            React.createElement(
              "div",
              { className: "refbox-h" },
              React.createElement(S, { name: "pages", size: 14 }),
              "Pages inside it",
            ),
            r.children
              .filter((b) => b.kind !== "detail")
              .map((b) =>
                React.createElement(
                  "div",
                  { key: b.id, className: "refbox-row" },
                  b.title,
                  " moves up to ",
                  i.parentId ? V(n, i.parentId).title : "the top level",
                ),
              ),
            c &&
              React.createElement(
                "div",
                { className: "refbox-row" },
                "The ",
                n.collections[c.collectionId].name,
                " detail template is deleted too. Entries are kept.",
              ),
          ),
        i.status !== "draft" &&
          React.createElement(
            "div",
            { className: "field field-row" },
            React.createElement(
              "label",
              { className: "field-label", htmlFor: "dp-redir" },
              "Redirect visitors from ",
              O(n, i),
              React.createElement(
                "span",
                { className: "field-hint block" },
                l
                  ? `to ${O(n, V(n, l))}`
                  : "Choose a page above to redirect to.",
              ),
            ),
            React.createElement(Ke, {
              id: "dp-redir",
              checked: g && !!l,
              disabled: !l,
              onChange: m,
              label: "Add redirect",
            }),
          ),
      ),
    );
  }
  function vs({ onClose: e }) {
    let t = se(),
      { site: a, act: s } = t,
      [n, i] = ee("/treatments/teeth-whitening"),
      r = n ? $e(a, n) : null,
      o = (l, h) =>
        s.update(
          (g) =>
            Object.assign(
              g.redirects.find((m) => m.id === l),
              h,
            ),
          { key: "redir:" + l + Object.keys(h)[0], label: "Edit redirect" },
        ),
      d = new Set(),
      c = new Set();
    return (
      a.redirects.forEach((l) =>
        c.has(l.from) ? d.add(l.from) : c.add(l.from),
      ),
      React.createElement(
        Pe,
        {
          title: "Redirects",
          subtitle:
            "Send visitors from old addresses to new ones. Renaming a page\u2019s slug adds one automatically.",
          onClose: e,
          width: 760,
          footer: React.createElement(
            H,
            { variant: "primary", onClick: e },
            "Done",
          ),
        },
        React.createElement(
          "div",
          { className: "table-wrap" },
          React.createElement(
            "table",
            { className: "table" },
            React.createElement(
              "thead",
              null,
              React.createElement(
                "tr",
                null,
                React.createElement("th", null, "From"),
                React.createElement("th", { "aria-label": "to" }),
                React.createElement("th", null, "To"),
                React.createElement("th", null, "Type"),
                React.createElement("th", null, "Added"),
                React.createElement("th", { "aria-label": "Actions" }),
              ),
            ),
            React.createElement(
              "tbody",
              null,
              a.redirects.length === 0 &&
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "td",
                    { colSpan: 6, className: "muted" },
                    "No redirects yet.",
                  ),
                ),
              a.redirects.map((l) => {
                let h =
                    !l.from.endsWith("/*") &&
                    $e({ ...a, redirects: [] }, l.from),
                  g = l.to.replace(/\/\*$/, ""),
                  m =
                    l.to.startsWith("http") ||
                    !!$e(a, l.to) ||
                    (l.to.endsWith("/*") &&
                      (!!$e(a, g) ||
                        a.pages.some(
                          (u) =>
                            u.kind === "detail" &&
                            O(a, u).replace("/:slug", "") === et(g),
                        )));
                return React.createElement(
                  "tr",
                  { key: l.id },
                  React.createElement(
                    "td",
                    null,
                    React.createElement(j, {
                      mono: !0,
                      value: l.from,
                      onChange: (u) =>
                        o(l.id, {
                          from: u.target.value.startsWith("/")
                            ? u.target.value
                            : "/" + u.target.value,
                        }),
                      "aria-label": "From path",
                      className: x((d.has(l.from) || h) && "is-invalid"),
                    }),
                    h &&
                      React.createElement(
                        "span",
                        { className: "cell-msg err" },
                        "A live page uses this address, so the redirect never runs.",
                      ),
                    d.has(l.from) &&
                      React.createElement(
                        "span",
                        { className: "cell-msg err" },
                        "Duplicate rule.",
                      ),
                  ),
                  React.createElement(
                    "td",
                    { className: "arrow" },
                    React.createElement(S, { name: "arrowRight", size: 14 }),
                  ),
                  React.createElement(
                    "td",
                    null,
                    React.createElement(j, {
                      mono: !0,
                      value: l.to,
                      onChange: (u) => o(l.id, { to: u.target.value }),
                      "aria-label": "To path",
                      className: x(!m && "is-invalid"),
                    }),
                    !m &&
                      React.createElement(
                        "span",
                        { className: "cell-msg err" },
                        "No page at this address.",
                      ),
                  ),
                  React.createElement(
                    "td",
                    null,
                    React.createElement(ye, {
                      value: String(l.code),
                      onChange: (u) => o(l.id, { code: Number(u) }),
                      options: [
                        ["301", "301"],
                        ["302", "302"],
                      ],
                    }),
                  ),
                  React.createElement(
                    "td",
                    { className: "nowrap" },
                    l.auto
                      ? React.createElement(oe, { tone: "accent" }, "Auto")
                      : React.createElement(oe, null, "Manual"),
                    React.createElement(
                      "span",
                      { className: "muted small" },
                      " ",
                      Nt(l.created, !1),
                    ),
                  ),
                  React.createElement(
                    "td",
                    null,
                    React.createElement(_, {
                      icon: "trash",
                      label: "Delete redirect",
                      onClick: () =>
                        s.update(
                          (u) =>
                            (u.redirects = u.redirects.filter(
                              (b) => b.id !== l.id,
                            )),
                          { label: "Delete redirect" },
                        ),
                    }),
                  ),
                );
              }),
            ),
          ),
        ),
        React.createElement(
          "div",
          { className: "row between mt-8 gap-8" },
          React.createElement(
            H,
            {
              size: "sm",
              icon: "plus",
              onClick: () =>
                s.update(
                  (l) =>
                    l.redirects.unshift({
                      id: Z("r"),
                      from: "/old-page",
                      to: "/",
                      code: 301,
                      auto: !1,
                      created: Date.now(),
                    }),
                  { label: "Add redirect" },
                ),
            },
            "Add redirect",
          ),
          React.createElement(
            "span",
            { className: "muted small" },
            "301 tells Google the move is permanent. Use 302 for a short-term change.",
          ),
        ),
        React.createElement(
          "div",
          { className: "testbox" },
          React.createElement(
            $,
            {
              label: "Try an address",
              htmlFor: "rd-test",
              hint: "Use * at the end of a rule to redirect everything under a path.",
            },
            React.createElement(j, {
              id: "rd-test",
              mono: !0,
              prefix: `${a.subdomain}.selfsite.in`,
              value: n,
              onChange: (l) => i(l.target.value),
            }),
          ),
          React.createElement(
            "div",
            { className: x("testbox-res", !r && "err") },
            !r &&
              React.createElement(
                React.Fragment,
                null,
                React.createElement(S, { name: "alert", size: 14 }),
                "Shows the 404 page",
              ),
            r &&
              r.redirect &&
              React.createElement(
                React.Fragment,
                null,
                React.createElement(S, { name: "redirect", size: 14 }),
                r.redirect.code,
                " redirect to ",
                React.createElement("span", { className: "mono" }, et(r.to)),
                r.page
                  ? ` \xB7 ${r.entry ? r.entry.title : r.page.title}`
                  : " \xB7 no page there (404)",
              ),
            r &&
              !r.redirect &&
              React.createElement(
                React.Fragment,
                null,
                React.createElement(S, { name: "check", size: 14 }),
                "Opens ",
                r.entry ? r.entry.title : r.page.title,
              ),
          ),
        ),
      )
    );
  }
  function ws({ collectionId: e, onClose: t }) {
    let a = se(),
      { site: s, act: n } = a,
      [i, r] = ee(e || "services"),
      [o, d] = ee(null),
      c = s.collections[i],
      l = i === "blog",
      h = ct(s, i),
      g = (u, b, v) =>
        n.update(
          (D) =>
            Object.assign(
              D.collections[i].entries.find((k) => k.id === u),
              b,
            ),
          { key: v && `entry:${u}:${v}`, label: `Edit ${c.name} entry` },
        ),
      m = () => {
        let u = Z("e"),
          b = l
            ? {
                title: "New post",
                slug: "new-post",
                date: new Date().toISOString().slice(0, 10),
                author: "",
                excerpt: "",
                image: "",
                body: "<p></p>",
                status: "draft",
              }
            : {
                title: "New service",
                slug: "new-service",
                summary: "",
                price: "",
                duration: "",
                image: "",
                body: "<p></p>",
                status: "draft",
              },
          v = b.slug,
          D = 2;
        for (; c.entries.some((k) => k.slug === v);) v = `${b.slug}-${D++}`;
        (n.update(
          (k) => k.collections[i].entries.unshift({ id: u, ...b, slug: v }),
          { label: "Add entry" },
        ),
          d(u));
      };
    return React.createElement(
      Pe,
      {
        title: "Collections",
        subtitle:
          "Entries fill the list page and their own detail page. Edit them here; the page design stays the same.",
        onClose: t,
        width: 880,
        tall: !0,
        headerExtra: React.createElement(re, {
          value: i,
          onChange: (u) => (r(u), d(null)),
          options: Object.values(s.collections).map((u) => [
            u.id,
            `${u.name} \xB7 ${u.entries.length}`,
          ]),
        }),
        footer: React.createElement(
          React.Fragment,
          null,
          React.createElement(
            "span",
            { className: "foot-left muted small" },
            h
              ? `Detail pages live at ${O(s, h)}`
              : `${c.name} has no detail page yet. Add one from a template.`,
          ),
          React.createElement(H, { variant: "primary", onClick: t }, "Done"),
        ),
      },
      React.createElement(
        "div",
        { className: "row between mb-8" },
        React.createElement(
          $,
          { label: "Collection name", htmlFor: "col-name", className: "grow" },
          React.createElement(j, {
            id: "col-name",
            value: c.name,
            onChange: (u) =>
              n.update((b) => (b.collections[i].name = u.target.value), {
                key: "colname:" + i,
                label: "Collection name",
              }),
          }),
        ),
        React.createElement(
          H,
          { icon: "plus", onClick: m, className: "self-end" },
          "Add entry",
        ),
      ),
      React.createElement(
        "div",
        { className: "table-wrap" },
        React.createElement(
          "table",
          { className: "table" },
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement("th", {
                style: { width: 40 },
                "aria-label": "Photo",
              }),
              React.createElement("th", null, "Title"),
              React.createElement("th", null, "Slug"),
              React.createElement("th", null, l ? "Date" : "Price"),
              React.createElement("th", null, "Status"),
              React.createElement("th", { "aria-label": "Actions" }),
            ),
          ),
          React.createElement(
            "tbody",
            null,
            c.entries.length === 0 &&
              React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  { colSpan: 6, className: "muted" },
                  "No entries yet. Add one to fill the ",
                  c.name.toLowerCase(),
                  " pages.",
                ),
              ),
            c.entries.map((u) => {
              let b = c.entries.some((v) => v.id !== u.id && v.slug === u.slug);
              return React.createElement(
                hs,
                { key: u.id },
                React.createElement(
                  "tr",
                  { className: x(o === u.id && "open") },
                  React.createElement(
                    "td",
                    null,
                    React.createElement(vt, {
                      id: u.image,
                      className: "thumb-xs",
                    }),
                  ),
                  React.createElement(
                    "td",
                    null,
                    React.createElement(j, {
                      value: u.title,
                      onChange: (v) =>
                        g(u.id, { title: v.target.value }, "title"),
                      "aria-label": "Title",
                    }),
                  ),
                  React.createElement(
                    "td",
                    null,
                    React.createElement(j, {
                      mono: !0,
                      value: u.slug,
                      onChange: (v) =>
                        g(
                          u.id,
                          { slug: fe(v.target.value) || v.target.value },
                          "slug",
                        ),
                      "aria-label": "Slug",
                      className: x(b && "is-invalid"),
                    }),
                    b &&
                      React.createElement(
                        "span",
                        { className: "cell-msg err" },
                        "Another entry uses this slug.",
                      ),
                  ),
                  React.createElement(
                    "td",
                    null,
                    l
                      ? React.createElement(j, {
                          type: "date",
                          value: u.date,
                          onChange: (v) =>
                            g(u.id, { date: v.target.value }, "date"),
                          "aria-label": "Date",
                        })
                      : React.createElement(j, {
                          value: u.price,
                          onChange: (v) =>
                            g(u.id, { price: v.target.value }, "price"),
                          "aria-label": "Price",
                          placeholder: "From \u20B9",
                        }),
                  ),
                  React.createElement(
                    "td",
                    null,
                    React.createElement(ye, {
                      value: u.status,
                      onChange: (v) => g(u.id, { status: v }),
                      options: [
                        ["published", "Published"],
                        ["draft", "Draft"],
                      ],
                    }),
                  ),
                  React.createElement(
                    "td",
                    { className: "nowrap" },
                    React.createElement(_, {
                      icon: o === u.id ? "up" : "pencil",
                      label: o === u.id ? "Close" : "Edit details",
                      onClick: () => d(o === u.id ? null : u.id),
                    }),
                    h &&
                      React.createElement(_, {
                        icon: "eye",
                        label: "Open its page",
                        onClick: () => {
                          (a.goPage(h.id, u.id), t());
                        },
                      }),
                    React.createElement(_, {
                      icon: "trash",
                      label: "Delete entry",
                      onClick: () =>
                        n.update(
                          (v) =>
                            (v.collections[i].entries = v.collections[
                              i
                            ].entries.filter((D) => D.id !== u.id)),
                          { label: "Delete entry" },
                        ),
                    }),
                  ),
                ),
                o === u.id &&
                  React.createElement(
                    "tr",
                    { className: "row-detail" },
                    React.createElement(
                      "td",
                      { colSpan: 6 },
                      React.createElement(
                        "div",
                        { className: "entry-form" },
                        React.createElement(
                          "div",
                          { className: "form" },
                          React.createElement(
                            $,
                            {
                              label: l ? "Excerpt" : "Summary",
                              htmlFor: "ce-s-" + u.id,
                              max: 200,
                              count: (l ? u.excerpt : u.summary || "").length,
                            },
                            React.createElement(nt, {
                              id: "ce-s-" + u.id,
                              value: l ? u.excerpt : u.summary,
                              onChange: (v) =>
                                g(
                                  u.id,
                                  l
                                    ? { excerpt: v.target.value }
                                    : { summary: v.target.value },
                                  "sum",
                                ),
                            }),
                          ),
                          l
                            ? React.createElement(
                                $,
                                { label: "Author", htmlFor: "ce-a-" + u.id },
                                React.createElement(j, {
                                  id: "ce-a-" + u.id,
                                  value: u.author,
                                  onChange: (v) =>
                                    g(
                                      u.id,
                                      { author: v.target.value },
                                      "author",
                                    ),
                                }),
                              )
                            : React.createElement(
                                $,
                                {
                                  label: "Duration or detail",
                                  htmlFor: "ce-d-" + u.id,
                                },
                                React.createElement(j, {
                                  id: "ce-d-" + u.id,
                                  value: u.duration,
                                  onChange: (v) =>
                                    g(
                                      u.id,
                                      { duration: v.target.value },
                                      "dur",
                                    ),
                                }),
                              ),
                          React.createElement(Qt, {
                            label: "Photo",
                            id: "ce-i-" + u.id,
                            value: u.image,
                            onChange: (v) => g(u.id, { image: v }),
                          }),
                        ),
                        React.createElement(
                          $,
                          { label: "Full text", htmlFor: "ce-b-" + u.id },
                          React.createElement(Ga, {
                            id: "ce-b-" + u.id,
                            value: u.body,
                            onChange: (v) => g(u.id, { body: v }, "body"),
                          }),
                        ),
                      ),
                    ),
                  ),
              );
            }),
          ),
        ),
      ),
    );
  }
  var xa = 500 * 1024 * 1024;
  function ks({ accept: e, onPick: t, onClose: a }) {
    let s = se(),
      { site: n, media: i, setMedia: r, act: o } = s,
      [d, c] = ee(e === "file" ? "file" : e === "image" ? "image" : "all"),
      [l, h] = ee(""),
      [g, m] = ee(null),
      [u, b] = ee(null),
      [v, D] = ee(!1),
      k = us(null),
      p = i.reduce((L, U) => L + U.size, 0),
      N = (L) =>
        i.filter((U) => U.kind === L).reduce((U, le) => U + le.size, 0),
      P = (L) => Math.min(100, (L / xa) * 100),
      ue = i.filter(
        (L) =>
          (d === "all" || L.kind === d) && Ct(l, L.name + " " + (L.alt || "")),
      ),
      R = i.find((L) => L.id === g),
      Me = R ? Un(n, R.id) : [],
      Oe = (L) => {
        let U = [...L];
        if (!U.length) return;
        let le = U.reduce((Te, Ge) => Te + Ge.size, 0);
        if (p + le > xa) {
          o.toast(
            `Not enough space: ${Ae(xa - p)} left. Delete files you no longer use, then try again.`,
            { tone: "warn" },
          );
          return;
        }
        b({ n: U.length, p: 0 });
        let K = 0,
          rt = [];
        U.forEach((Te) => {
          let Ge = Te.type.startsWith("image/"),
            wt = (Fe) => {
              (rt.push({
                id: Z("m"),
                name: Te.name,
                kind: Ge
                  ? "image"
                  : Te.type.startsWith("video/")
                    ? "video"
                    : "file",
                size: Te.size,
                src: Ge ? Fe : void 0,
                alt: "",
                uploaded: Date.now(),
                w: 0,
                h: 0,
              }),
                K++,
                b({ n: U.length, p: K / U.length }),
                K === U.length &&
                  setTimeout(() => {
                    (r((Xt) => [...rt, ...Xt]),
                      b(null),
                      m(rt[0].id),
                      o.toast(`Uploaded ${de(rt.length, "file")}`, {
                        tone: "ok",
                      }));
                  }, 350));
            };
          if (Ge && Te.size < 12 * 1024 * 1024) {
            let Fe = new FileReader();
            ((Fe.onload = () => wt(Fe.result)),
              (Fe.onerror = () => wt(void 0)),
              Fe.readAsDataURL(Te));
          } else setTimeout(() => wt(void 0), 400);
        });
      },
      E = R && (!e || (e === "image" ? R.kind === "image" : R.kind === "file"));
    return React.createElement(
      Pe,
      {
        title: t
          ? e === "file"
            ? "Choose a file"
            : "Choose an image"
          : "Media library",
        onClose: a,
        width: 940,
        tall: !0,
        bodyClass: "media-body",
        footer: t
          ? React.createElement(
              React.Fragment,
              null,
              React.createElement(
                "span",
                { className: "foot-left muted small" },
                R ? R.name : "Select an item",
              ),
              React.createElement(H, { onClick: a }, "Cancel"),
              React.createElement(
                H,
                {
                  variant: "primary",
                  disabled: !E,
                  onClick: () => {
                    (t(R.id), a());
                  },
                },
                "Use ",
                e === "file" ? "file" : "image",
              ),
            )
          : null,
      },
      React.createElement(
        "div",
        { className: "media-main" },
        React.createElement(
          "div",
          { className: "storage" },
          React.createElement(
            "div",
            { className: "storage-top" },
            React.createElement(
              "span",
              null,
              React.createElement("strong", null, Ae(p)),
              " ",
              React.createElement(
                "span",
                { className: "muted" },
                "of 500 MB used",
              ),
            ),
            React.createElement(
              "span",
              { className: "muted small" },
              Ae(xa - p),
              " free",
            ),
          ),
          React.createElement(
            "div",
            {
              className: "storage-bar",
              role: "img",
              "aria-label": `${Math.round(P(p))}% of storage used`,
            },
            React.createElement("span", {
              className: "seg-img",
              style: { width: P(N("image")) + "%" },
            }),
            React.createElement("span", {
              className: "seg-vid",
              style: { width: P(N("video")) + "%" },
            }),
            React.createElement("span", {
              className: "seg-file",
              style: { width: P(N("file")) + "%" },
            }),
          ),
          React.createElement(
            "div",
            { className: "storage-legend" },
            React.createElement(
              "span",
              null,
              React.createElement("i", { className: "seg-img" }),
              " Images ",
              Ae(N("image")),
            ),
            React.createElement(
              "span",
              null,
              React.createElement("i", { className: "seg-vid" }),
              " Videos ",
              Ae(N("video")),
            ),
            React.createElement(
              "span",
              null,
              React.createElement("i", { className: "seg-file" }),
              " Files ",
              Ae(N("file")),
            ),
          ),
        ),
        React.createElement(
          "div",
          { className: "media-tools" },
          React.createElement(re, {
            size: "sm",
            value: d,
            onChange: c,
            options: [
              ["all", "All"],
              ["image", "Images"],
              ["video", "Videos"],
              ["file", "Files"],
            ],
          }),
          React.createElement(j, {
            placeholder: "Search",
            value: l,
            onChange: (L) => h(L.target.value),
            prefix: React.createElement(S, { name: "search", size: 14 }),
            className: "grow",
          }),
          React.createElement("input", {
            ref: k,
            type: "file",
            multiple: !0,
            hidden: !0,
            accept:
              e === "file"
                ? ".pdf,.doc,.docx,.xls,.xlsx"
                : e === "image"
                  ? "image/*"
                  : "image/*,video/*,.pdf",
            onChange: (L) => (Oe(L.target.files), (L.target.value = "")),
            id: "media-upload",
          }),
          React.createElement(
            H,
            {
              variant: "primary",
              icon: "upload",
              onClick: () => k.current.click(),
            },
            "Upload",
          ),
        ),
        u &&
          React.createElement(
            "div",
            { className: "uploading" },
            React.createElement(
              "span",
              null,
              "Uploading ",
              de(u.n, "file"),
              "\u2026",
            ),
            React.createElement(
              "div",
              { className: "storage-bar" },
              React.createElement("span", {
                className: "seg-img",
                style: { width: Math.max(8, u.p * 100) + "%" },
              }),
            ),
          ),
        React.createElement(
          "div",
          {
            className: "media-grid",
            onDragOver: (L) => L.preventDefault(),
            onDrop: (L) => {
              (L.preventDefault(), Oe(L.dataTransfer.files));
            },
          },
          ue.length === 0 &&
            React.createElement(
              yt,
              { title: "Nothing here yet" },
              "Drop files here or use Upload.",
            ),
          ue.map((L) =>
            React.createElement(
              "button",
              {
                key: L.id,
                type: "button",
                className: x("media-item", g === L.id && "on"),
                onClick: () => m(L.id),
                onDoubleClick: () =>
                  t && (!e || L.kind === e) && (t(L.id), a()),
              },
              React.createElement(
                "span",
                { className: "media-thumb" },
                L.kind === "file"
                  ? React.createElement(S, { name: "file", size: 22 })
                  : L.src
                    ? React.createElement("img", { src: L.src, alt: "" })
                    : React.createElement(Qe, {
                        name: L.art,
                        tone: L.tone,
                        label: L.alt,
                      }),
                L.kind === "video" &&
                  React.createElement(
                    "span",
                    { className: "media-play" },
                    React.createElement(S, { name: "play", size: 12 }),
                  ),
              ),
              React.createElement("span", { className: "media-name" }, L.name),
              React.createElement(
                "span",
                { className: "media-size" },
                Ae(L.size),
              ),
            ),
          ),
        ),
      ),
      React.createElement(
        "aside",
        { className: "media-side" },
        !R &&
          React.createElement(
            yt,
            { icon: "image", title: "Select a file" },
            "See where it\u2019s used, edit its description, or delete it.",
          ),
        R &&
          React.createElement(
            "div",
            { className: "form" },
            React.createElement(
              "div",
              { className: "media-big" },
              R.kind === "file"
                ? React.createElement(S, { name: "file", size: 28 })
                : R.src
                  ? React.createElement("img", { src: R.src, alt: "" })
                  : React.createElement(Qe, { name: R.art, tone: R.tone }),
            ),
            React.createElement(
              "div",
              { className: "kv" },
              React.createElement("span", null, "Name"),
              React.createElement("span", { className: "mono small" }, R.name),
              React.createElement("span", null, "Size"),
              React.createElement("span", null, Ae(R.size)),
              R.w > 0 &&
                React.createElement(
                  React.Fragment,
                  null,
                  React.createElement("span", null, "Dimensions"),
                  React.createElement("span", null, R.w, " \xD7 ", R.h),
                ),
              React.createElement("span", null, "Added"),
              React.createElement("span", null, Nt(R.uploaded, !1)),
            ),
            R.kind !== "file" &&
              React.createElement(
                $,
                {
                  label: "Description (alt text)",
                  htmlFor: "md-alt",
                  hint: "Read out by screen readers and used by Google Images.",
                },
                React.createElement(nt, {
                  id: "md-alt",
                  value: R.alt || "",
                  onChange: (L) =>
                    r((U) =>
                      U.map((le) =>
                        le.id === R.id ? { ...le, alt: L.target.value } : le,
                      ),
                    ),
                }),
              ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "div",
                { className: "field-label" },
                "Used on",
              ),
              Me.length === 0
                ? React.createElement(
                    "p",
                    { className: "muted small" },
                    "Not used anywhere.",
                  )
                : React.createElement(
                    "ul",
                    { className: "uselist" },
                    Me.map((L) => React.createElement("li", { key: L }, L)),
                  ),
            ),
            v
              ? React.createElement(
                  "div",
                  { className: "refbox warn" },
                  React.createElement(
                    "div",
                    { className: "refbox-h" },
                    React.createElement(S, { name: "alert", size: 14 }),
                    "Delete ",
                    R.name,
                    "?",
                  ),
                  React.createElement(
                    "p",
                    { className: "small" },
                    Me.length
                      ? `It\u2019s used in ${de(Me.length, "place")}. Those spots show a placeholder, and publishing is blocked until you pick another image.`
                      : "This can\u2019t be undone.",
                  ),
                  React.createElement(
                    "div",
                    { className: "row gap-8" },
                    React.createElement(
                      H,
                      { size: "sm", onClick: () => D(!1) },
                      "Keep it",
                    ),
                    React.createElement(
                      H,
                      {
                        size: "sm",
                        variant: "danger",
                        onClick: () => {
                          (r((L) => L.filter((U) => U.id !== R.id)),
                            m(null),
                            D(!1),
                            o.toast(`Deleted ${R.name}`));
                        },
                      },
                      "Delete permanently",
                    ),
                  ),
                )
              : React.createElement(
                  H,
                  {
                    variant: "danger-ghost",
                    icon: "trash",
                    onClick: () => D(!0),
                  },
                  "Delete",
                ),
          ),
      ),
    );
  }
  function xs({ onClose: e, initialTab: t = "publish" }) {
    let a = se(),
      { site: s, published: n, versions: i, act: r } = a,
      [o, d] = ee(t),
      [c, l] = ee(null),
      [h, g] = ee(null),
      m = Yt(() => ya(s, a.mediaMap), [s, a.mediaMap]),
      u = Yt(() => jt(n, s), [n, s]),
      b = i[0],
      v = (p) => {
        (e(), r.jumpTo(p));
      },
      D = () => {
        (l("build"),
          setTimeout(() => l("upload"), 700),
          setTimeout(() => l("live"), 1500),
          setTimeout(() => r.publish(), 1500));
      },
      k = ({ it: p, tone: N }) =>
        React.createElement(
          "div",
          { className: x("issue", "issue-" + N) },
          React.createElement(S, {
            name: N === "ok" ? "check" : N === "info" ? "info" : "alert",
            size: 15,
          }),
          React.createElement(
            "div",
            { className: "issue-main" },
            React.createElement("span", { className: "issue-title" }, p.title),
            p.detail &&
              React.createElement(
                "span",
                { className: "issue-detail" },
                p.detail,
              ),
          ),
          p.target &&
            React.createElement(
              H,
              { size: "sm", variant: "ghost", onClick: () => v(p.target) },
              N === "err" ? "Fix" : "Go to",
            ),
        );
    return React.createElement(
      Pe,
      {
        title: o === "publish" ? "Publish your site" : "Version history",
        subtitle: React.createElement(
          React.Fragment,
          null,
          React.createElement(
            "span",
            { className: "mono" },
            s.subdomain,
            ".selfsite.in",
          ),
          " \xB7 last published ",
          sa(b.at),
          " by ",
          b.by,
        ),
        onClose: e,
        width: 680,
        tall: !0,
        headerExtra: React.createElement(re, {
          size: "sm",
          value: o,
          onChange: d,
          options: [
            ["publish", "Publish"],
            ["history", "History"],
          ],
        }),
        footer:
          o === "publish"
            ? c === "live"
              ? React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    "span",
                    { className: "foot-left ok-text" },
                    React.createElement(S, { name: "check", size: 15 }),
                    " Version ",
                    b.n,
                    " is live.",
                  ),
                  React.createElement(
                    H,
                    { variant: "primary", onClick: e },
                    "Done",
                  ),
                )
              : React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    "span",
                    { className: "foot-left muted small" },
                    m.errors.length
                      ? `Fix ${de(m.errors.length, "problem")} to publish.`
                      : u.length
                        ? `${de(u.length, "change")} will go live.`
                        : "Nothing has changed since the last publish.",
                  ),
                  React.createElement(H, { onClick: e }, "Not now"),
                  React.createElement(
                    H,
                    {
                      variant: "primary",
                      icon: "globe",
                      disabled: !!m.errors.length || !u.length || !!c,
                      onClick: D,
                    },
                    c
                      ? c === "build"
                        ? "Building pages\u2026"
                        : "Going live\u2026"
                      : "Publish",
                  ),
                )
            : React.createElement(
                H,
                { variant: "primary", onClick: e },
                "Done",
              ),
      },
      o === "publish" &&
        React.createElement(
          "div",
          { className: "pub" },
          c &&
            React.createElement(
              "div",
              { className: "pub-progress" },
              [
                [
                  "build",
                  `Building ${de(s.pages.filter((p) => p.status !== "draft").length, "page")}`,
                ],
                ["upload", "Uploading to the CDN"],
                ["live", "Live"],
              ].map(([p, N], P) => {
                let ue = ["build", "upload", "live"],
                  R =
                    ue.indexOf(c) > P
                      ? "done"
                      : ue.indexOf(c) === P
                        ? p === "live"
                          ? "done"
                          : "now"
                        : "todo";
                return React.createElement(
                  "div",
                  { key: p, className: x("pub-step", R) },
                  React.createElement(
                    "span",
                    { className: "pub-dot" },
                    R === "done"
                      ? React.createElement(S, { name: "check", size: 12 })
                      : null,
                  ),
                  N,
                );
              }),
            ),
          React.createElement(
            "section",
            { className: "pub-sec" },
            React.createElement(
              "div",
              { className: "pub-h" },
              "Checks",
              React.createElement(
                "span",
                { className: "pub-counts" },
                m.errors.length > 0 &&
                  React.createElement(
                    oe,
                    { tone: "danger" },
                    de(m.errors.length, "problem"),
                  ),
                m.warnings.length > 0 &&
                  React.createElement(
                    oe,
                    { tone: "warn" },
                    de(m.warnings.length, "warning"),
                  ),
              ),
            ),
            m.errors.map((p) =>
              React.createElement(k, { key: p.id, it: p, tone: "err" }),
            ),
            m.warnings.map((p) =>
              React.createElement(k, { key: p.id, it: p, tone: "warn" }),
            ),
            m.info.map((p) =>
              React.createElement(k, { key: p.id, it: p, tone: "info" }),
            ),
            m.passed.map((p) =>
              React.createElement(k, { key: p, it: { title: p }, tone: "ok" }),
            ),
          ),
          React.createElement(
            "section",
            { className: "pub-sec" },
            React.createElement(
              "div",
              { className: "pub-h" },
              "Changes since version ",
              b.n,
              React.createElement(
                "span",
                { className: "muted small" },
                Nt(b.at),
              ),
            ),
            u.length === 0 &&
              React.createElement(
                "p",
                { className: "muted small" },
                "Your draft matches what\u2019s live.",
              ),
            u.map((p, N) =>
              React.createElement(
                "div",
                { key: N, className: "change" },
                React.createElement(
                  oe,
                  {
                    tone:
                      p.status === "new"
                        ? "accent"
                        : p.status === "removed"
                          ? "danger"
                          : "neutral",
                  },
                  p.status === "new"
                    ? "New"
                    : p.status === "removed"
                      ? "Removed"
                      : "Edited",
                ),
                React.createElement(
                  "span",
                  { className: "change-title" },
                  p.title,
                ),
                React.createElement(
                  "span",
                  { className: "change-detail" },
                  p.detail,
                ),
                p.pageId &&
                  React.createElement(_, {
                    icon: "arrowRight",
                    label: "Open page",
                    onClick: () => {
                      (e(), a.goPage(p.pageId));
                    },
                  }),
              ),
            ),
            u.length > 0 &&
              React.createElement(
                H,
                {
                  size: "sm",
                  variant: "ghost",
                  icon: "undo",
                  onClick: () => g(b.id) || d("history"),
                },
                "Discard draft changes\u2026",
              ),
          ),
        ),
      o === "history" &&
        React.createElement(
          "div",
          { className: "hist" },
          React.createElement(
            "div",
            { className: "hist-row draft" },
            React.createElement("span", { className: "hist-dot draft" }),
            React.createElement(
              "div",
              { className: "hist-main" },
              React.createElement(
                "span",
                { className: "hist-title" },
                "Draft ",
                React.createElement(
                  oe,
                  { tone: "warn" },
                  u.length ? de(u.length, "change") : "No changes",
                ),
              ),
              React.createElement(
                "span",
                { className: "hist-sub" },
                "Only you see this until you publish.",
              ),
            ),
          ),
          i.map((p, N) =>
            React.createElement(
              "div",
              { key: p.id, className: "hist-row" },
              React.createElement("span", {
                className: x("hist-dot", N === 0 && "live"),
              }),
              React.createElement(
                "div",
                { className: "hist-main" },
                React.createElement(
                  "span",
                  { className: "hist-title" },
                  "Version ",
                  p.n,
                  " ",
                  N === 0 && React.createElement(oe, { tone: "ok" }, "Live"),
                ),
                React.createElement(
                  "span",
                  { className: "hist-sub" },
                  Nt(p.at),
                  " \xB7 ",
                  p.by,
                  " \xB7 ",
                  p.note,
                ),
                h === p.id &&
                  React.createElement(
                    "div",
                    { className: "refbox mt-8" },
                    React.createElement(
                      "p",
                      { className: "small" },
                      "Your draft will be replaced by version ",
                      p.n,
                      ". Nothing goes live until you publish. You can undo this.",
                    ),
                    React.createElement(
                      "div",
                      { className: "row gap-8 mt-8" },
                      React.createElement(
                        H,
                        { size: "sm", onClick: () => g(null) },
                        "Cancel",
                      ),
                      React.createElement(
                        H,
                        {
                          size: "sm",
                          variant: "primary",
                          onClick: () => {
                            (r.restoreVersion(p.id), g(null), d("publish"));
                          },
                        },
                        "Restore into draft",
                      ),
                    ),
                  ),
              ),
              h !== p.id &&
                React.createElement(
                  H,
                  { size: "sm", onClick: () => g(p.id) },
                  N === 0 ? "Discard draft" : "Restore",
                ),
            ),
          ),
          React.createElement(
            "p",
            { className: "muted small mt-8" },
            "Your plan keeps the last 10 published versions.",
          ),
        ),
    );
  }
  function Ns({ onClose: e }) {
    let t = se(),
      { site: a, act: s } = t,
      [n, i] = ee(""),
      [r, o] = ee(0),
      d = us(null),
      l = Yt(() => {
        let m = [];
        return (
          a.pages.forEach((u) => {
            u.kind === "detail"
              ? a.collections[u.collectionId].entries.forEach((v) =>
                  m.push({
                    group: "Pages",
                    icon: "db",
                    label: v.title,
                    hint: at(a, u.collectionId, v),
                    run: () => t.goPage(u.id, v.id),
                  }),
                )
              : m.push({
                  group: "Pages",
                  icon: u.isHome ? "home" : "pages",
                  label: u.title,
                  hint: O(a, u),
                  run: () => t.goPage(u.id),
                });
          }),
          Rt.forEach(([u, b]) =>
            m.push({
              group: "Add a section",
              icon: "plus",
              label: `Add ${b.toLowerCase()} section`,
              hint: "to this page",
              run: () => s.addSection(t.page.sections.length, u),
            }),
          ),
          [
            ["Add a page", "plus", () => s.addPage()],
            ["Duplicate this page", "copy", () => s.duplicatePage(t.page.id)],
            ["Page settings", "settings", () => s.pageSettings(t.page.id)],
            ["Theme", "theme", () => s.openTheme()],
            ["Media library", "image", () => s.openMedia()],
            ["Navigation menus", "nav", () => s.openNav()],
            ["Redirects", "redirect", () => s.openRedirects()],
            ["Collections", "db", () => s.openCollections()],
            ["Publish", "globe", () => s.openPublish()],
            ["Version history", "history", () => s.openPublish("history")],
            [
              t.mode === "edit" ? "Switch to Preview" : "Switch to Edit",
              t.mode === "edit" ? "play" : "pencil",
              () => t.setMode(t.mode === "edit" ? "preview" : "edit"),
            ],
            ["Phone view", "phone", () => t.setDevice("phone")],
            ["Tablet view", "tablet", () => t.setDevice("tablet")],
            ["Desktop view", "desktop", () => t.setDevice("desktop")],
            ["Undo", "undo", () => s.undo()],
            ["Redo", "redo", () => s.redo()],
            [
              "Start a new site from a template",
              "layout",
              () => s.openGallery(),
            ],
          ].forEach(([u, b, v]) =>
            m.push({ group: "Actions", icon: b, label: u, run: v }),
          ),
          m
        );
      }, [a, t.page, t.mode])
        .map((m) => ({
          ...m,
          score: Math.max(Ct(n, m.label), m.hint ? Ct(n, m.hint) * 0.9 : 0),
        }))
        .filter((m) => m.score > 0)
        .sort((m, u) => (n ? u.score - m.score : 0))
        .slice(0, n ? 40 : 60);
    (ms(() => o(0), [n]),
      ms(() => {
        let m = d.current && d.current.querySelector(".cmd-item.on");
        m && m.scrollIntoView({ block: "nearest" });
      }, [r]));
    let h = (m) => {
        (e(), setTimeout(m.run, 0));
      },
      g = null;
    return React.createElement(
      Pe,
      { onClose: e, width: 600, className: "cmd" },
      React.createElement(
        "div",
        { className: "cmd-input" },
        React.createElement(S, { name: "search", size: 16 }),
        React.createElement("input", {
          autoFocus: !0,
          "data-autofocus": !0,
          placeholder: "Jump to a page, add a section or run an action\u2026",
          value: n,
          onChange: (m) => i(m.target.value),
          onKeyDown: (m) => {
            (m.key === "ArrowDown" &&
              (m.preventDefault(), o((u) => Math.min(l.length - 1, u + 1))),
              m.key === "ArrowUp" &&
                (m.preventDefault(), o((u) => Math.max(0, u - 1))),
              m.key === "Enter" && l[r] && h(l[r]));
          },
          "aria-label": "Command",
        }),
        React.createElement(We, null, "Esc"),
      ),
      React.createElement(
        "div",
        { className: "cmd-list", ref: d },
        l.length === 0 &&
          React.createElement(
            "p",
            { className: "muted small pad-12" },
            "No matches.",
          ),
        l.map((m, u) => {
          let b = !n && m.group !== g ? m.group : null;
          return (
            (g = m.group),
            React.createElement(
              hs,
              { key: m.group + m.label + u },
              b && React.createElement("div", { className: "cmd-group" }, b),
              React.createElement(
                "button",
                {
                  type: "button",
                  className: x("cmd-item", u === r && "on"),
                  onMouseEnter: () => o(u),
                  onClick: () => h(m),
                },
                React.createElement(S, { name: m.icon, size: 15 }),
                React.createElement(
                  "span",
                  { className: "cmd-label" },
                  m.label,
                ),
                m.hint &&
                  React.createElement(
                    "span",
                    { className: "cmd-hint mono" },
                    m.hint,
                  ),
                n &&
                  React.createElement(
                    "span",
                    { className: "cmd-hint" },
                    m.group,
                  ),
              ),
            )
          );
        }),
      ),
      React.createElement(
        "div",
        { className: "cmd-foot" },
        React.createElement(
          "span",
          null,
          React.createElement(We, null, "\u2191"),
          React.createElement(We, null, "\u2193"),
          " to move",
        ),
        React.createElement(
          "span",
          null,
          React.createElement(We, null, "\u21B5"),
          " to run",
        ),
        React.createElement(
          "span",
          null,
          React.createElement(We, null, St),
          React.createElement(We, null, "K"),
          " to open anywhere",
        ),
      ),
    );
  }
  var {
      useState: Je,
      useMemo: Bi,
      useCallback: Pi,
      useContext: Ti,
      useRef: Li,
      useEffect: zi,
    } = React,
    $i = new Set([
      "pearl",
      "pearldental",
      "ember",
      "thottam",
      "demo",
      "admin",
      "app",
      "www",
      "mail",
      "stackwise",
      "studio",
    ]);
  function Hi({ t: e, site: t, media: a, onOpen: s }) {
    let n = Et[e.theme],
      i = e.pages.filter((r) => r.kind !== "detail").length;
    return React.createElement(
      "button",
      { type: "button", className: "tcard", onClick: s },
      React.createElement(
        "span",
        {
          className: "tcard-thumb",
          style: { background: n.colors[n.mode].background },
        },
        React.createElement(
          "span",
          { className: "tcard-scroll" },
          React.createElement(
            it,
            { device: "desktop", bare: !0, minScale: 0.05 },
            React.createElement(Ut, { site: t, page: ve(t), media: a }),
          ),
        ),
      ),
      React.createElement(
        "span",
        { className: "tcard-meta" },
        React.createElement(
          "span",
          { className: "tcard-title" },
          e.name,
          React.createElement("span", { className: "muted" }, e.kind),
        ),
        React.createElement("span", { className: "tcard-desc" }, e.description),
        React.createElement(
          "span",
          { className: "tagrow" },
          React.createElement(oe, null, i, " pages"),
          e.tags.map((r) =>
            React.createElement(oe, { key: r }, La.find((o) => o[0] === r)[1]),
          ),
        ),
      ),
    );
  }
  function Cs({ media: e, onBack: t, onUse: a, hasSite: s }) {
    let [n, i] = Je("All"),
      [r, o] = Je([]),
      [d, c] = Je(null),
      l = Bi(
        () =>
          Object.fromEntries(
            lt.map((g) => [g.id, tt(g, { name: g.business })]),
          ),
        [],
      ),
      h = lt.filter(
        (g) =>
          (n === "All" || g.industry === n) &&
          r.every((m) => g.tags.includes(m)),
      );
    return d
      ? React.createElement(Oi, {
          t: d,
          site: l[d.id],
          media: e,
          onBack: () => c(null),
          onUse: a,
        })
      : React.createElement(
          "div",
          { className: "gallery" },
          React.createElement(
            "header",
            { className: "gal-top" },
            React.createElement(
              "div",
              { className: "brand" },
              React.createElement("span", {
                className: "brand-mark",
                "aria-hidden": "true",
              }),
              "selfsite",
            ),
            s &&
              React.createElement(
                H,
                { variant: "ghost", icon: "left", onClick: t },
                "Back to editor",
              ),
          ),
          React.createElement(
            "div",
            { className: "gal-wrap" },
            React.createElement(
              "div",
              { className: "gal-head" },
              React.createElement(
                "h1",
                { className: "gal-title" },
                "Pick a starting point",
              ),
              React.createElement(
                "p",
                { className: "gal-sub" },
                "Every template is a complete site you can change. Pages and sections from any template match your theme, so you can mix them later.",
              ),
            ),
            React.createElement(
              "div",
              { className: "gal-filters" },
              React.createElement(
                "div",
                {
                  className: "chips",
                  role: "radiogroup",
                  "aria-label": "Business type",
                },
                Ln.map((g) =>
                  React.createElement(
                    "button",
                    {
                      key: g,
                      type: "button",
                      role: "radio",
                      "aria-checked": n === g,
                      className: x("chip", n === g && "on"),
                      onClick: () => i(g),
                    },
                    g,
                  ),
                ),
              ),
              React.createElement(
                "div",
                { className: "chips", "aria-label": "Style" },
                La.map(([g, m]) =>
                  React.createElement(
                    "button",
                    {
                      key: g,
                      type: "button",
                      "aria-pressed": r.includes(g),
                      className: x("chip chip-outline", r.includes(g) && "on"),
                      onClick: () =>
                        o(r.includes(g) ? r.filter((u) => u !== g) : [...r, g]),
                    },
                    r.includes(g) &&
                      React.createElement(S, { name: "check", size: 12 }),
                    m,
                  ),
                ),
              ),
            ),
            React.createElement(
              "div",
              { className: "tgrid" },
              h.map((g) =>
                React.createElement(Hi, {
                  key: g.id,
                  t: g,
                  site: l[g.id],
                  media: e,
                  onOpen: () => c(g),
                }),
              ),
              h.length === 0 &&
                React.createElement(
                  "div",
                  { className: "gal-empty" },
                  React.createElement(
                    "p",
                    null,
                    "No template matches all of those filters.",
                  ),
                  React.createElement(
                    H,
                    {
                      size: "sm",
                      onClick: () => {
                        (i("All"), o([]));
                      },
                    },
                    "Clear filters",
                  ),
                ),
            ),
          ),
        );
  }
  function Oi({ t: e, site: t, media: a, onBack: s, onUse: n }) {
    let { isPhone: i } = Ti(gt),
      [r, o] = Je(i ? "phone" : "desktop"),
      [d, c] = Je({ pageId: ve(t).id, entryId: null }),
      [l, h] = Je(!1),
      g = es(),
      m = Li(null),
      u = t.pages.find((N) => N.id === d.pageId) || ve(t),
      b = u.kind === "detail" ? t.collections[u.collectionId] : null,
      v = b ? b.entries.find((N) => N.id === d.entryId) || b.entries[0] : null,
      D = t.pages.filter((N) => N.kind !== "detail" && N.kind !== "notfound");
    zi(() => {
      m.current && (m.current.scrollTop = 0);
    }, [d.pageId, d.entryId]);
    let k = Pi(
        (N, P) => {
          if (P.broken)
            return g(`This link isn\u2019t set up yet: ${P.reason}`, {
              tone: "warn",
            });
          P.kind === "page" || P.kind === "anchor"
            ? c({ pageId: P.pageId, entryId: null })
            : P.kind === "collection"
              ? c({ pageId: P.pageId, entryId: P.entry.id })
              : g(
                  P.kind === "phone"
                    ? `Calls ${N.phone} on a phone`
                    : P.kind === "email"
                      ? `Opens an email to ${N.email}`
                      : `Downloads ${P.file ? P.file.name : "a file"}`,
                  { tone: "info" },
                );
        },
        [g],
      ),
      p = (N) => {
        let P = $e(t, N);
        P &&
          P.page &&
          c({ pageId: P.page.id, entryId: P.entry ? P.entry.id : null });
      };
    return React.createElement(
      "div",
      { className: "tprev" },
      React.createElement(
        "header",
        { className: "tprev-top" },
        React.createElement(
          H,
          { variant: "ghost", icon: "left", onClick: s },
          i ? "" : "Templates",
        ),
        React.createElement(
          "div",
          { className: "tprev-name" },
          React.createElement("strong", null, e.name),
          React.createElement("span", { className: "muted small" }, e.kind),
        ),
        !i &&
          React.createElement(
            "div",
            { className: "tprev-pages" },
            D.map((N) =>
              React.createElement(
                "button",
                {
                  key: N.id,
                  type: "button",
                  className: x("tab", d.pageId === N.id && "on"),
                  onClick: () => c({ pageId: N.id, entryId: null }),
                },
                N.title,
              ),
            ),
          ),
        React.createElement("span", { className: "grow" }),
        React.createElement(re, {
          value: r,
          onChange: o,
          options: Object.entries(bt).map(([N, P]) => [N, "", P.icon]),
        }),
        React.createElement(
          H,
          { variant: "primary", onClick: () => h(!0) },
          "Use this template",
        ),
      ),
      i &&
        React.createElement(
          "div",
          { className: "tprev-pagesel" },
          React.createElement(ye, {
            value: u.kind === "detail" ? u.parentId : u.id,
            onChange: (N) => c({ pageId: N, entryId: null }),
            options: D.map((N) => [N.id, `${N.title} \xB7 ${O(t, N)}`]),
          }),
        ),
      React.createElement(
        "div",
        { className: "tprev-canvas", ref: m },
        React.createElement(
          "div",
          { className: "urlbar urlbar-static" },
          React.createElement(S, { name: "lock", size: 12 }),
          React.createElement(
            "span",
            { className: "url-host" },
            fe(e.business),
            ".selfsite.in",
          ),
          React.createElement(
            "span",
            { className: "url-path mono" },
            v ? O(t, u).replace(":slug", v.slug) : O(t, u),
          ),
          React.createElement(
            "span",
            { className: "url-note" },
            "Click links to move between pages",
          ),
        ),
        React.createElement(
          it,
          { key: r, device: r },
          React.createElement(wa, {
            site: t,
            page: u,
            entry: v,
            media: a,
            mode: "preview",
            onNavigate: k,
            onNavigatePath: p,
          }),
        ),
      ),
      l && React.createElement(Ri, { t: e, onClose: () => h(!1), onCreate: n }),
    );
  }
  function Ri({ t: e, onClose: t, onCreate: a }) {
    let [s, n] = Je(""),
      [i, r] = Je(""),
      [o, d] = Je(!1),
      c = o ? i : fe(s).replace(/-/g, "").slice(0, 30) || "",
      l = /^[a-z0-9]([a-z0-9-]{1,28}[a-z0-9])?$/.test(c),
      h = $i.has(c),
      g = c
        ? l
          ? h
            ? `${c}.selfsite.in is taken. Try ${c}-${["chennai", "blr", "studio", "in"][c.length % 4]}.`
            : null
          : "Use 3\u201330 lowercase letters, numbers or hyphens."
        : null,
      m = s.trim().length > 1 && c && !g;
    return React.createElement(
      Pe,
      {
        title: "Name your site",
        subtitle: `Starting from ${e.name}. You can change everything later.`,
        onClose: t,
        width: 480,
        footer: React.createElement(
          React.Fragment,
          null,
          React.createElement(H, { onClick: t }, "Back"),
          React.createElement(
            H,
            {
              variant: "primary",
              disabled: !m,
              onClick: () => a(e, { name: s.trim(), subdomain: c }),
            },
            "Create site",
          ),
        ),
      },
      React.createElement(
        "form",
        {
          className: "form",
          onSubmit: (u) => {
            (u.preventDefault(), m && a(e, { name: s.trim(), subdomain: c }));
          },
        },
        React.createElement(
          $,
          {
            label: "Business name",
            htmlFor: "cs-name",
            hint: "Used in the header, footer and page titles.",
          },
          React.createElement(j, {
            id: "cs-name",
            value: s,
            onChange: (u) => n(u.target.value),
            placeholder: e.business,
            "data-autofocus": !0,
            autoComplete: "organization",
          }),
        ),
        React.createElement(
          $,
          {
            label: "Site address",
            htmlFor: "cs-addr",
            error: g,
            hint: m
              ? `${c}.selfsite.in is available. Connect your own domain any time.`
              : "This is where your site lives until you connect your own domain.",
          },
          React.createElement(j, {
            id: "cs-addr",
            mono: !0,
            suffix: ".selfsite.in",
            value: c,
            onChange: (u) => {
              (d(!0),
                r(u.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "")));
            },
            placeholder: "yourbusiness",
          }),
        ),
        React.createElement("button", { type: "submit", hidden: !0 }),
      ),
    );
  }
  var {
    useState: pe,
    useEffect: ot,
    useRef: Pt,
    useMemo: Zt,
    useCallback: Se,
    useLayoutEffect: cr,
  } = React;
  function _i(e) {
    let t = Pt({ past: [], present: e, future: [] }),
      a = Pt({ key: null, t: 0 }),
      [, s] = pe(0),
      n = (l) => {
        ((t.current = l), s((h) => h + 1));
      },
      i = Se((l, h = {}) => {
        let g = t.current,
          m = X(g.present),
          u = l(m),
          b = u && typeof u == "object" && Array.isArray(u.pages) ? u : m;
        if (Le(b, g.present)) return u;
        let v = Date.now(),
          D = h.key && a.current.key === h.key && v - a.current.t < 1500;
        return (
          (a.current = { key: h.key || null, t: v }),
          n(
            D
              ? { ...g, present: b, future: [] }
              : {
                  past: [
                    ...g.past.slice(-80),
                    { site: g.present, label: h.label || "Edit" },
                  ],
                  present: b,
                  future: [],
                  label: h.label,
                },
          ),
          u
        );
      }, []),
      r = Se(() => {
        let l = t.current;
        if (!l.past.length) return null;
        let h = l.past[l.past.length - 1];
        return (
          (a.current = { key: null, t: 0 }),
          n({
            past: l.past.slice(0, -1),
            present: h.site,
            future: [{ site: l.present, label: h.label }, ...l.future],
          }),
          h.label
        );
      }, []),
      o = Se(() => {
        let l = t.current;
        if (!l.future.length) return null;
        let h = l.future[0];
        return (
          (a.current = { key: null, t: 0 }),
          n({
            past: [...l.past, { site: l.present, label: h.label }],
            present: h.site,
            future: l.future.slice(1),
          }),
          h.label
        );
      }, []),
      d = Se((l) => {
        ((a.current = { key: null, t: 0 }),
          n({ past: [], present: l, future: [] }));
      }, []),
      c = t.current;
    return {
      site: c.present,
      update: i,
      undo: r,
      redo: o,
      reset: d,
      canUndo: c.past.length > 0,
      canRedo: c.future.length > 0,
      undoLabel: c.past.length ? c.past[c.past.length - 1].label : null,
      redoLabel: c.future.length ? c.future[0].label : null,
    };
  }
  function Wi() {
    let [e, t] = pe(() => window.innerWidth);
    return (
      ot(() => {
        let a = () => t(window.innerWidth);
        return (
          window.addEventListener("resize", a),
          () => window.removeEventListener("resize", a)
        );
      }, []),
      e
    );
  }
  var qi = (e) =>
    e &&
    (e.tagName === "INPUT" ||
      e.tagName === "TEXTAREA" ||
      e.tagName === "SELECT" ||
      e.isContentEditable);
  function Gi() {
    let e = Zt(() => Wa(), []),
      t = _i(e.site),
      { site: a, update: s } = t,
      [n, i] = pe(Tn),
      r = Zt(() => Object.fromEntries(n.map((f) => [f.id, f])), [n]),
      [o, d] = pe(e.published),
      [c, l] = pe(e.versions),
      [h, g] = pe(() => {
        try {
          return location.hash === "#templates" ? "gallery" : "editor";
        } catch {
          return "editor";
        }
      }),
      [m, u] = pe({ pageId: "p_home", entryId: null, missing: null }),
      [b, v] = pe(null),
      [D, k] = pe(null),
      [p, N] = pe("edit"),
      [P, ue] = pe(() => (window.innerWidth < 760 ? "phone" : "desktop")),
      [R, Me] = pe("pages"),
      [Oe, E] = pe("inspect"),
      [L, U] = pe(!1),
      [le, K] = pe(null),
      [rt, Te] = pe([]),
      [Ge, wt] = pe([]),
      [Fe, Xt] = pe({ state: "saved", at: Date.now() - 4 * 60 * 1e3 }),
      [, Ms] = pe(0),
      Re = Pt(null),
      Na = Pt(null),
      Ca = Wi(),
      te = Ca < 760,
      ke = Ca >= 1180,
      ea = Zt(() => ({ isPhone: te, isDesktop: ke }), [te, ke]);
    ot(() => {
      try {
        let f = h === "gallery" ? "#templates" : "";
        (location.hash || "") !== f &&
          history.replaceState(
            null,
            "",
            location.pathname + location.search + f,
          );
      } catch {}
    }, [h]);
    let tn = Pt(!0);
    (ot(() => {
      if (tn.current) {
        tn.current = !1;
        return;
      }
      Xt({ state: "saving", at: Date.now() });
      let f = setTimeout(() => Xt({ state: "saved", at: Date.now() }), 700);
      return () => clearTimeout(f);
    }, [a]),
      ot(() => {
        let f = setInterval(() => Ms((y) => y + 1), 2e4);
        return () => clearInterval(f);
      }, []));
    let Tt = Se((f) => wt((y) => y.filter((w) => w.id !== f)), []),
      J = Se(
        (f, y = {}) => {
          let w = Z("t");
          (wt((C) => [...C.slice(-2), { id: w, message: f, ...y }]),
            setTimeout(() => Tt(w), y.action ? 6500 : 4200));
        },
        [Tt],
      ),
      xe = Se(
        (f, y = {}) => Te((w) => [...w, { id: Z("m"), type: f, props: y }]),
        [],
      ),
      Fs = Se((f) => Te((y) => y.filter((w) => w.id !== f)), []),
      ie = V(a, m.pageId);
    ie || (ie = ve(a));
    let Sa = ie.kind === "detail" ? a.collections[ie.collectionId] : null,
      Lt =
        (Sa && (Sa.entries.find((f) => f.id === m.entryId) || Sa.entries[0])) ||
        null,
      As = m.missing || (Lt ? at(a, ie.collectionId, Lt) : O(a, ie));
    ot(() => {
      if (!b) return;
      let f = he(a, b);
      (f &&
        (f.where === "shared-header"
          ? ie.header === "shared"
          : f.where === "shared-footer"
            ? ie.footer === "shared"
            : f.page && f.page.id === ie.id)) ||
        v(null);
    }, [a, ie.id, b]);
    let an = () => Re.current && (Re.current.scrollTop = 0),
      Ne = Se(
        (f, y = null, w = null) => {
          (u({ pageId: f, entryId: y, missing: null }),
            (Na.current = w),
            w || requestAnimationFrame(an),
            te && K((C) => (C === "pages" || C === "more" ? null : C)));
        },
        [te],
      );
    ot(() => {
      let f = Na.current;
      !f ||
        !Re.current ||
        ((Na.current = null),
        requestAnimationFrame(() => {
          let y =
            Re.current && Re.current.querySelector(`[data-anchor="${f}"]`);
          y && y.scrollIntoView({ behavior: "smooth", block: "start" });
        }));
    });
    let Ma = Se(
        (f) => {
          let y = et(f),
            w = $e(a, y);
          if (
            (w &&
              w.redirect &&
              J(`Redirected from ${y} to ${et(w.to)} (${w.redirect.code})`, {
                tone: "info",
              }),
            w && w.page)
          ) {
            Ne(
              w.page.id,
              w.entry ? w.entry.id : null,
              f.includes("#") ? f.split("#")[1] : null,
            );
            return;
          }
          let C = a.pages.find((A) => A.kind === "notfound");
          (u({ pageId: C.id, entryId: null, missing: y }), an());
        },
        [a, Ne, J],
      ),
      Es = Se(
        (f, y) => {
          if (y.broken)
            return J(`This link is broken: ${y.reason}.`, { tone: "warn" });
          if (y.kind === "page" || y.kind === "anchor") {
            if (
              (y.target &&
                y.target.status === "draft" &&
                J(
                  `${y.target.title} is a draft. Visitors would see the 404 page.`,
                  { tone: "warn" },
                ),
              y.pageId === ie.id && y.anchor && !m.entryId)
            ) {
              let w =
                Re.current &&
                Re.current.querySelector(`[data-anchor="${y.anchor}"]`);
              w && w.scrollIntoView({ behavior: "smooth", block: "start" });
              return;
            }
            return Ne(y.pageId, null, y.anchor || null);
          }
          if (y.kind === "collection") return Ne(y.pageId, y.entry.id);
          if (y.kind === "phone")
            return J(`On a phone this calls ${f.phone}.`, { tone: "info" });
          if (y.kind === "email")
            return J(`Opens a new email to ${f.email}.`, { tone: "info" });
          if (y.kind === "file")
            return J(`Downloads ${y.file.name} (${Ae(y.file.size)}).`, {
              tone: "info",
            });
        },
        [ie.id, m.entryId, Ne, J],
      ),
      zt = (f) =>
        requestAnimationFrame(() => {
          let y = Re.current && Re.current.querySelector(`[data-sid="${f}"]`);
          y && y.scrollIntoView({ behavior: "smooth", block: "start" });
        }),
      nn = Pt({}),
      W = nn.current;
    Object.assign(W, {
      update: s,
      toast: J,
      undo() {
        let f = t.undo();
        f && J(`Undid: ${f}`);
      },
      redo() {
        let f = t.redo();
        f && J(`Redid: ${f}`);
      },
      selectSection(f, y) {
        (v(f),
          E("inspect"),
          p !== "edit" && N("edit"),
          y && zt(f),
          te ? K(null) : ke || U(!0));
      },
      editSection(f) {
        (v(f), E("inspect"), te ? K("edit") : ke || U(!0), zt(f));
      },
      moveSection(f, y) {
        (s(
          (w) => {
            let C = he(w, f);
            if (!C || C.where !== "page") return;
            let A = C.page.sections,
              q = C.index + y;
            q < 0 || q >= A.length || ([A[C.index], A[q]] = [A[q], A[C.index]]);
          },
          { label: "Move section" },
        ),
          zt(f));
      },
      reorderSections(f, y, w) {
        s(
          (C) => {
            let A = V(C, f).sections,
              [q] = A.splice(y, 1);
            A.splice(w, 0, q);
          },
          { label: "Reorder sections" },
        );
      },
      duplicateSection(f) {
        let y = null;
        (s(
          (w) => {
            let C = he(w, f);
            if (!C || C.where !== "page") return;
            let A = X(C.sec);
            ((A.id = Z("s")),
              A.anchor && (A.anchor = A.anchor + "-2"),
              C.page.sections.splice(C.index + 1, 0, A),
              (y = A.id));
          },
          { label: "Duplicate section" },
        ),
          y && (v(y), zt(y), J("Section duplicated")));
      },
      toggleHidden(f) {
        let y;
        (s(
          (w) => {
            let C = he(w, f);
            ((C.sec.hidden = !C.sec.hidden), (y = C.sec.hidden));
          },
          { label: "Hide section" },
        ),
          J(
            y
              ? "Hidden. It stays here but won\u2019t show on your live site."
              : "Section is visible again",
          ));
      },
      deleteSection(f) {
        let y = he(a, f);
        if (!y || y.where !== "page") return;
        let w = ne[y.sec.block].title;
        (s(
          (C) => {
            let A = he(C, f);
            A.page.sections.splice(A.index, 1);
          },
          { label: `Delete ${w}` },
        ),
          v(null),
          te && K(null),
          J(`Deleted ${w}`, {
            action: { label: "Undo", onClick: () => t.undo() },
          }));
      },
      swapSection(f) {
        let y = he(a, f),
          w = ne[y.sec.block];
        xe("library", {
          mode: "swap",
          category: w.category,
          current: w.id,
          onPick: (C) => {
            (s(
              (A) => {
                let q = he(A, f),
                  Q = Kn(q.sec, C);
                (Object.keys(q.sec).forEach((Y) => delete q.sec[Y]),
                  Object.assign(q.sec, Q));
              },
              { label: `Swap to ${ne[C].title}` },
            ),
              J(`Swapped to ${ne[C].title}. Matching content carried over.`, {
                action: { label: "Undo", onClick: () => t.undo() },
              }));
          },
        });
      },
      addSection(f, y) {
        let w = ie.id;
        xe("library", {
          mode: "add",
          category: y,
          onPick: (C) => {
            let A;
            (s(
              (q) => {
                let Q = V(q, w),
                  Y = Be(C);
                (Y.anchor &&
                  [q.shared.header, ...Q.sections].some(
                    (Ve) => Ve.anchor === Y.anchor,
                  ) &&
                  (Y.anchor = Y.anchor + "-2"),
                  (A = Y.id),
                  Q.sections.splice(f ?? Q.sections.length, 0, Y));
              },
              { label: `Add ${ne[C].title}` },
            ),
              v(A),
              E("inspect"),
              zt(A),
              te && K(null));
          },
        });
      },
      setHeadFoot(f, y, w) {
        let C = null;
        s(
          (q) => {
            let Q = V(q, f);
            if (w === "detached") {
              let Y = X(Q[y + "Own"] || q.shared[y]);
              ((Y.id = Z("s")), (Q[y + "Own"] = Y), (C = Y.id));
            }
            (w === "shared" && (Q[y + "Own"] = null), (Q[y] = w));
          },
          {
            label:
              w === "detached"
                ? `Detach ${y}`
                : w === "shared"
                  ? `Use shared ${y}`
                  : `Hide ${y}`,
          },
        );
        let A = V(a, f);
        w === "detached"
          ? (J(
              `${A.title} now has its own ${y}. Edits to it won\u2019t change other pages.`,
            ),
            C && v(C))
          : J(
              w === "shared"
                ? `${A.title} uses the shared ${y} again.`
                : `No ${y} on ${A.title}.`,
            );
      },
      pageSettings(f) {
        (Ne(f), v(null), E("inspect"), te ? K("page") : ke || U(!0));
      },
      addPage(f) {
        xe("addPage", {
          parentId: f,
          onCreate: ({
            how: y,
            title: w,
            parentId: C,
            tplId: A,
            tplKey: q,
            dupId: Q,
          }) => {
            let Y = [];
            (s(
              (Ve) => {
                if (y === "blank") Y = [Vn(Ve, w, C)];
                else if (y === "template") Y = jn(Ve, A, q, { parentId: C });
                else {
                  let aa = _a(Ve, Q);
                  (C !== void 0 && y !== "duplicate" && (aa.parentId = C),
                    (Y = [aa]));
                }
                let fn = Ve.pages.findIndex((aa) => aa.kind === "notfound");
                (Ve.pages.splice(fn < 0 ? Ve.pages.length : fn, 0, ...Y),
                  Ra(Ve, Y[0]));
              },
              { label: "Add page" },
            ),
              Y[0] &&
                (Ne(Y[0].id),
                v(null),
                E("inspect"),
                Me("sections"),
                J(
                  `Added ${Y[0].title} as a draft${a.nav.autoAdd && Y[0].inMenu ? ", and to the header menu" : ""}.`,
                  { tone: "ok" },
                )));
          },
        });
      },
      duplicatePage(f) {
        let y;
        (s(
          (w) => {
            y = _a(w, f);
            let C = w.pages.findIndex((A) => A.id === f);
            w.pages.splice(C + 1, 0, y);
          },
          { label: "Duplicate page" },
        ),
          Ne(y.id),
          J(`Created ${y.title} as a draft`, { tone: "ok" }));
      },
      setHome(f) {
        let y = V(a, f),
          w = ve(a);
        (s(
          (C) => {
            let A = ve(C),
              q = V(C, f),
              Q = O(C, q);
            ((A.isHome = !1),
              (A.slug = Bt(
                C,
                A.slug === "home" ? "home-old" : A.slug,
                A.parentId,
                A.id,
              )),
              (q.isHome = !0),
              (q.parentId = null),
              C.redirects.unshift({
                id: Z("r"),
                from: Q,
                to: "/",
                code: 301,
                auto: !0,
                created: Date.now(),
              }));
          },
          { label: "Set home page" },
        ),
          J(
            `${y.title} is now the home page. ${w.title} moved to /${Bt(a, w.slug === "home" ? "home-old" : w.slug, w.parentId, w.id)}.`,
            { tone: "ok" },
          ));
      },
      deletePage(f) {
        xe("deletePage", {
          pageId: f,
          onConfirm: (y) => {
            let w = V(a, f);
            (s((C) => Gn(C, f, y), { label: `Delete ${w.title}` }),
              (m.pageId === f || V(a, m.pageId)?.parentId === f) &&
                Ne(ve(a).id),
              v(null),
              J(`Deleted ${w.title}`, {
                action: { label: "Undo", onClick: () => t.undo() },
              }));
          },
        });
      },
      changeUrl(f, y, w) {
        let C = s((A) => Wn(A, f, y, w), { label: "Change page address" });
        C &&
          C.length &&
          J(
            `Redirect added: ${C[0].from} \u2192 ${C[0].to}${C.length > 1 ? ` and ${C.length - 1} more` : ""}`,
            {
              tone: "ok",
              action: { label: "View", onClick: () => W.openRedirects() },
            },
          );
      },
      setInMenu(f, y) {
        s(
          (w) => {
            let C = V(w, f);
            C.inMenu = y;
            let A = (q) =>
              q.some((Q) => (Q.to && Q.to.pageId === f) || A(Q.children || []));
            if (y && !A(w.nav.header)) {
              let q = w.nav.autoAdd;
              ((w.nav.autoAdd = !0), Ra(w, C), (w.nav.autoAdd = q));
            }
            if (!y) {
              let q = (Q) =>
                Q.filter((Y) => !(Y.to && Y.to.pageId === f)).map((Y) => ({
                  ...Y,
                  children: q(Y.children || []),
                }));
              w.nav.header = q(w.nav.header);
            }
          },
          { label: "Show in menu" },
        );
      },
      navAt(f, y, w) {
        let C = f.nav[y];
        for (let A = 0; A < w.length - 1; A++) C = C[w[A]].children;
        return { list: C, idx: w[w.length - 1] };
      },
      navMove(f, y, w, C) {
        s(
          (A) => {
            let q = y.length ? A.nav[f][y[0]].children : A.nav[f];
            if (C < 0 || C >= q.length) return;
            let [Q] = q.splice(w, 1);
            q.splice(C, 0, Q);
          },
          { label: "Reorder menu" },
        );
      },
      navIndent(f, y) {
        s(
          (w) => {
            let C = w.nav[f],
              [A] = C.splice(y, 1);
            C[y - 1].children.push(A);
          },
          { label: "Make dropdown" },
        );
      },
      navOutdent(f, y) {
        s(
          (w) => {
            let C = w.nav[f][y[0]],
              [A] = C.children.splice(y[1], 1);
            w.nav[f].splice(y[0] + 1, 0, { ...A, children: [] });
          },
          { label: "Move out of dropdown" },
        );
      },
      navRemove(f, y) {
        s(
          (w) => {
            let { list: C, idx: A } = W.navAt(w, f, y);
            C.splice(A, 1);
          },
          { label: "Remove menu link" },
        );
      },
      navAdd(f, y) {
        s(
          (w) => w.nav[f].push({ id: Z("n"), children: [], newTab: !1, ...y }),
          { label: "Add menu link" },
        );
      },
      navEdit(f, y, w, C) {
        s(
          (A) => {
            let { list: q, idx: Q } = W.navAt(A, f, y);
            Object.assign(q[Q], w);
          },
          { key: C, label: "Edit menu link" },
        );
      },
      openCollections(f) {
        xe("collections", { collectionId: f });
      },
      openRedirects() {
        xe("redirects");
      },
      openMedia(f, y) {
        xe("media", { accept: f, onPick: y });
      },
      openTheme() {
        (v(null), E("theme"), te ? K("theme") : ke || U(!0));
      },
      openNav() {
        te ? K("nav") : Me("nav");
      },
      openPublish(f) {
        xe("publish", { initialTab: f || "publish" });
      },
      openGallery() {
        g("gallery");
      },
      publish() {
        let f = (c[0] ? c[0].n : 0) + 1,
          y = jt(o, a),
          w =
            y
              .slice(0, 2)
              .map((C) => `${C.title} ${C.status}`)
              .join(", ") + (y.length > 2 ? ` +${y.length - 2} more` : "");
        (l((C) => [
          {
            id: Z("v"),
            n: f,
            at: Date.now(),
            by: "You",
            note: w || "Published",
            site: X(a),
          },
          ...C,
        ]),
          d(X(a)),
          J(
            `Published version ${f}. ${a.subdomain}.selfsite.in is up to date.`,
            { tone: "ok" },
          ));
      },
      restoreVersion(f) {
        let y = c.find((w) => w.id === f);
        (s(() => X(y.site), { label: `Restore version ${y.n}` }),
          Ne(ve(y.site).id),
          v(null),
          J(
            `Version ${y.n} restored into your draft. Publish to make it live.`,
            { tone: "ok", action: { label: "Undo", onClick: () => t.undo() } },
          ));
      },
      jumpTo(f) {
        if (f.collections) return W.openCollections();
        if (f.nav) {
          (W.openNav(), f.pageId && Ne(f.pageId));
          return;
        }
        if ((f.pageId && Ne(f.pageId), f.sid)) {
          setTimeout(() => W.editSection(f.sid), 60);
          return;
        }
        (f.settings && f.pageId && W.pageSettings(f.pageId),
          !f.pageId && f.sid);
      },
    });
    let sn = {
      site: a,
      page: ie,
      entry: Lt,
      route: m,
      media: n,
      setMedia: i,
      mediaMap: r,
      published: o,
      versions: c,
      act: W,
      sel: b,
      mode: p,
      setMode: N,
      device: P,
      setDevice: ue,
      goPage: Ne,
      goPath: Ma,
      setHover: k,
      layout: ea,
      pickLink: (f, y, w) => xe("link", { value: f, onSave: y, pageId: w }),
      pickMedia: (f, y) => xe("media", { accept: f, onPick: y }),
      closeInspector: ke
        ? Oe === "theme"
          ? () => E("inspect")
          : null
        : te
          ? () => K(null)
          : () => U(!1),
    };
    ot(() => {
      let f = (y) => {
        let w = y.metaKey || y.ctrlKey;
        if (w && y.key.toLowerCase() === "k") {
          (y.preventDefault(),
            rt.some((C) => C.type === "command") || xe("command"));
          return;
        }
        if (!qi(document.activeElement)) {
          if (w && y.key.toLowerCase() === "z") {
            (y.preventDefault(), y.shiftKey ? W.redo() : W.undo());
            return;
          }
          if (w && y.key.toLowerCase() === "y") {
            (y.preventDefault(), W.redo());
            return;
          }
          if (
            !Xn() &&
            (y.key === "Escape" && b && v(null),
            (y.key === "Delete" || y.key === "Backspace") && b && p === "edit")
          ) {
            let C = he(a, b);
            C && C.where === "page" && (y.preventDefault(), W.deleteSection(b));
          }
        }
      };
      return (
        window.addEventListener("keydown", f),
        () => window.removeEventListener("keydown", f)
      );
    });
    let Ds = Se((f, y, w) => {
        nn.current.update(
          (C) => {
            let q = he(C, f).sec.values;
            for (let Q = 0; Q < y.length - 1; Q++) q = q[y[Q]];
            q[y[y.length - 1]] = w;
          },
          { label: "Edit text" },
        );
      }, []),
      Is = Se(
        (f) => {
          (v(f), E("inspect"), !ke && !te && U(!0));
        },
        [ke, te],
      ),
      ta = Zt(() => jt(o, a), [o, a]),
      Fa = Zt(() => ya(a, r), [a, r]);
    if (h === "gallery")
      return React.createElement(
        gt.Provider,
        { value: ea },
        React.createElement(
          Kt.Provider,
          { value: J },
          React.createElement("style", null, da),
          React.createElement(Cs, {
            media: r,
            hasSite: !0,
            onBack: () => g("editor"),
            onUse: (f, y) => {
              let w = tt(f, y);
              (t.reset(w),
                d(null),
                l([]),
                u({ pageId: ve(w).id, entryId: null, missing: null }),
                v(null),
                N("edit"),
                g("editor"),
                Me("pages"),
                J(
                  `${y.name} is ready at ${y.subdomain}.selfsite.in. Nothing is public until you publish.`,
                  { tone: "ok" },
                ));
            },
          }),
          React.createElement(va, { toasts: Ge, dismiss: Tt }),
        ),
      );
    let je = b ? he(a, b) : null,
      Bs = (f, y) => {
        let w = !y.isHeader && !y.isFooter,
          C = w ? ie.sections.findIndex((A) => A.id === f.id) : -1;
        return React.createElement(
          "div",
          { className: "tools" },
          w &&
            React.createElement(_, {
              icon: "arrowUp",
              label: "Move up",
              size: 14,
              disabled: C === 0,
              onClick: () => W.moveSection(f.id, -1),
            }),
          w &&
            React.createElement(_, {
              icon: "arrowDown",
              label: "Move down",
              size: 14,
              disabled: C === ie.sections.length - 1,
              onClick: () => W.moveSection(f.id, 1),
            }),
          React.createElement(_, {
            icon: "swap",
            label: "Swap block",
            size: 14,
            onClick: () => W.swapSection(f.id),
          }),
          w &&
            React.createElement(_, {
              icon: "copy",
              label: "Duplicate",
              size: 14,
              onClick: () => W.duplicateSection(f.id),
            }),
          w &&
            React.createElement(_, {
              icon: f.hidden ? "eye" : "eyeOff",
              label: f.hidden ? "Show" : "Hide",
              size: 14,
              onClick: () => W.toggleHidden(f.id),
            }),
          w &&
            React.createElement(_, {
              icon: "trash",
              label: "Delete",
              size: 14,
              onClick: () => W.deleteSection(f.id),
            }),
          y.shared &&
            React.createElement(
              "button",
              {
                type: "button",
                className: "tools-text",
                onClick: () =>
                  W.setHeadFoot(
                    ie.id,
                    y.isHeader ? "header" : "footer",
                    "detached",
                  ),
              },
              React.createElement(S, { name: "unlink", size: 13 }),
              "Detach",
            ),
        );
      },
      on = React.createElement(
        "div",
        {
          className: x("canvas-scroll", te && "is-phone"),
          ref: Re,
          onClick: (f) => {
            (f.target === f.currentTarget ||
              f.target.classList.contains("frame-outer")) &&
              v(null);
          },
        },
        React.createElement(
          it,
          {
            key: P + (te ? "m" : ""),
            device: te && P === "phone" ? Math.max(320, Math.min(Ca, 480)) : P,
          },
          React.createElement(wa, {
            site: a,
            page: ie,
            entry: Lt,
            media: r,
            mode: p,
            selectedId: p === "edit" ? b : null,
            hoverId: D,
            onSelect: Is,
            onInline: Ds,
            onNavigate: Es,
            onNavigatePath: Ma,
            toolbar: Bs,
          }),
        ),
        !te &&
          React.createElement(
            "div",
            { className: "canvas-foot muted small" },
            p === "edit"
              ? "Click a section to edit it. Click its text to type in place."
              : "Preview: links work like on your live site.",
          ),
      ),
      rn = React.createElement(ji, {
        site: a,
        path: As,
        page: ie,
        entry: Lt,
        onGo: Ma,
        missing: m.missing,
        compact: te,
        onPages: () => K("pages"),
      }),
      ln =
        Oe === "theme"
          ? React.createElement(en, null)
          : b && je
            ? React.createElement(Za, { sid: b })
            : React.createElement(Xa, { pageId: ie.id }),
      dn = React.createElement(
        "button",
        {
          type: "button",
          className: x("state-chip", ta.length ? "draft" : "live"),
          onClick: () => W.openPublish("history"),
          "data-tip": "Draft vs live, and version history",
        },
        React.createElement("span", { className: "state-dot" }),
        ta.length
          ? te
            ? ta.length
            : `Draft \xB7 ${de(ta.length, "change")}`
          : "Live",
      ),
      Aa = Fe.state === "saving" ? "Saving\u2026" : `Saved ${sa(Fe.at)}`,
      cn = React.createElement(
        H,
        {
          variant: "primary",
          icon: te ? "globe" : void 0,
          onClick: () => W.openPublish(),
          className: "publish-btn",
        },
        te ? "" : "Publish",
        Fa.errors.length > 0 &&
          React.createElement(
            "span",
            {
              className: "pub-badge",
              "aria-label": `${Fa.errors.length} problems`,
            },
            Fa.errors.length,
          ),
      ),
      pn = React.createElement(re, {
        size: "sm",
        value: p,
        onChange: (f) => {
          (N(f), f === "preview" && v(null));
        },
        options: te
          ? [
              ["edit", "", "pencil"],
              ["preview", "", "play"],
            ]
          : [
              ["edit", "Edit", "pencil"],
              ["preview", "Preview", "play"],
            ],
      }),
      mn = React.createElement(qe, {
        width: 260,
        align: "start",
        trigger: ({ onClick: f, active: y }) =>
          React.createElement(
            "button",
            {
              type: "button",
              className: x("site-switch", y && "on"),
              onClick: f,
            },
            React.createElement("span", {
              className: "brand-mark",
              "aria-hidden": "true",
            }),
            React.createElement(
              "span",
              { className: "site-switch-text" },
              React.createElement("span", { className: "site-name" }, a.name),
              !te &&
                React.createElement(
                  "span",
                  { className: "site-host" },
                  a.subdomain,
                  ".selfsite.in",
                ),
            ),
            React.createElement(S, { name: "down", size: 13 }),
          ),
        items: [
          { heading: a.name },
          {
            label: "Media library",
            icon: "image",
            onClick: () => W.openMedia(),
          },
          {
            label: "Collections",
            icon: "db",
            onClick: () => W.openCollections(),
          },
          {
            label: "Redirects",
            icon: "redirect",
            onClick: () => W.openRedirects(),
          },
          {
            label: "Version history",
            icon: "history",
            onClick: () => W.openPublish("history"),
          },
          { sep: !0 },
          {
            label: "Start a new site from a template",
            icon: "layout",
            onClick: () => g("gallery"),
          },
          a.id !== "site_pearl" && {
            label: "Go back to the Pearl Dental demo",
            icon: "undo",
            onClick: () => {
              let f = Wa();
              (t.reset(f.site),
                d(f.published),
                l(f.versions),
                u({ pageId: "p_home", entryId: null, missing: null }));
            },
          },
        ],
      }),
      un = React.createElement(
        "span",
        { className: "row gap-2" },
        React.createElement(_, {
          icon: "undo",
          label: t.undoLabel
            ? `Undo ${t.undoLabel} (${St}Z)`
            : "Nothing to undo",
          disabled: !t.canUndo,
          onClick: W.undo,
        }),
        React.createElement(_, {
          icon: "redo",
          label: t.redoLabel
            ? `Redo ${t.redoLabel} (${St}\u21E7Z)`
            : "Nothing to redo",
          disabled: !t.canRedo,
          onClick: W.redo,
        }),
      ),
      hn = rt.map((f) => {
        let y = () => Fs(f.id),
          w = f.props;
        switch (f.type) {
          case "link":
            return React.createElement(fs, {
              key: f.id,
              value: w.value,
              onSave: w.onSave,
              pageId: w.pageId || ie.id,
              onClose: y,
            });
          case "library":
            return React.createElement(gs, { key: f.id, ...w, onClose: y });
          case "addPage":
            return React.createElement(ys, { key: f.id, ...w, onClose: y });
          case "deletePage":
            return React.createElement(bs, { key: f.id, ...w, onClose: y });
          case "redirects":
            return React.createElement(vs, { key: f.id, onClose: y });
          case "collections":
            return React.createElement(ws, { key: f.id, ...w, onClose: y });
          case "media":
            return React.createElement(ks, { key: f.id, ...w, onClose: y });
          case "publish":
            return React.createElement(xs, { key: f.id, ...w, onClose: y });
          case "command":
            return React.createElement(Ns, { key: f.id, onClose: y });
          default:
            return null;
        }
      });
    if (te) {
      let f = je ? ne[je.sec.block] : null,
        y = je && je.where === "page" ? je.index : -1;
      return React.createElement(
        gt.Provider,
        { value: ea },
        React.createElement(
          Kt.Provider,
          { value: J },
          React.createElement(
            ka.Provider,
            { value: sn },
            React.createElement("style", null, da),
            React.createElement(
              "div",
              { className: "app is-phone" },
              React.createElement(
                "header",
                { className: "topbar" },
                mn,
                React.createElement("span", {
                  className: x("save-dot", Fe.state),
                  title: Aa,
                  "aria-label": Aa,
                }),
                React.createElement("span", { className: "grow" }),
                un,
                pn,
                dn,
                cn,
              ),
              rn,
              on,
              je &&
                p === "edit" &&
                !le &&
                React.createElement(
                  "div",
                  { className: "selbar" },
                  React.createElement(
                    "div",
                    { className: "selbar-name" },
                    React.createElement(
                      "span",
                      { className: "selbar-cat" },
                      je.where.startsWith("shared")
                        ? `Shared ${f.category}`
                        : ze[f.category],
                    ),
                    React.createElement(
                      "span",
                      { className: "selbar-title" },
                      f.title,
                    ),
                  ),
                  y >= 0 &&
                    React.createElement(_, {
                      icon: "arrowUp",
                      label: "Move up",
                      disabled: y === 0,
                      onClick: () => W.moveSection(b, -1),
                    }),
                  y >= 0 &&
                    React.createElement(_, {
                      icon: "arrowDown",
                      label: "Move down",
                      disabled: y === ie.sections.length - 1,
                      onClick: () => W.moveSection(b, 1),
                    }),
                  React.createElement(qe, {
                    items: [
                      {
                        label: "Swap for another block",
                        icon: "swap",
                        onClick: () => W.swapSection(b),
                      },
                      y >= 0 && {
                        label: "Duplicate",
                        icon: "copy",
                        onClick: () => W.duplicateSection(b),
                      },
                      y >= 0 && {
                        label: je.sec.hidden ? "Show" : "Hide",
                        icon: "eyeOff",
                        onClick: () => W.toggleHidden(b),
                      },
                      y >= 0 && { sep: !0 },
                      y >= 0 && {
                        label: "Delete",
                        icon: "trash",
                        danger: !0,
                        onClick: () => W.deleteSection(b),
                      },
                    ],
                  }),
                  React.createElement(
                    H,
                    {
                      variant: "primary",
                      size: "sm",
                      icon: "pencil",
                      onClick: () => K("edit"),
                    },
                    "Edit",
                  ),
                  React.createElement(_, {
                    icon: "x",
                    label: "Deselect",
                    onClick: () => v(null),
                  }),
                ),
              React.createElement(
                "nav",
                { className: "tabbar" },
                [
                  ["pages", "Pages", "pages"],
                  ["sections", "Sections", "sections"],
                  ["theme", "Theme", "theme"],
                  ["more", "More", "menu"],
                ].map(([w, C, A]) =>
                  React.createElement(
                    "button",
                    {
                      key: w,
                      type: "button",
                      className: x("tabbar-btn", le === w && "on"),
                      onClick: () => {
                        (w === "theme" && (v(null), E("theme")),
                          K(le === w ? null : w));
                      },
                    },
                    React.createElement(S, { name: A, size: 20 }),
                    React.createElement("span", null, C),
                  ),
                ),
              ),
              le === "pages" &&
                React.createElement(
                  st,
                  { title: "Pages", onClose: () => K(null), height: "78%" },
                  React.createElement(Ja, null),
                ),
              le === "sections" &&
                React.createElement(
                  st,
                  { title: "Sections", onClose: () => K(null), height: "78%" },
                  React.createElement(Qa, { compact: !0 }),
                ),
              le === "nav" &&
                React.createElement(
                  st,
                  {
                    title: "Navigation",
                    onClose: () => K(null),
                    height: "82%",
                  },
                  React.createElement(Ya, null),
                ),
              le === "theme" &&
                React.createElement(
                  st,
                  {
                    title: "Theme",
                    onClose: () => K(null),
                    height: "74%",
                    className: "sheet-insp",
                  },
                  React.createElement(en, null),
                ),
              le === "edit" &&
                b &&
                React.createElement(
                  st,
                  {
                    title: "Edit section",
                    onClose: () => K(null),
                    height: "74%",
                    className: "sheet-insp",
                  },
                  React.createElement(Za, { sid: b }),
                ),
              le === "page" &&
                React.createElement(
                  st,
                  {
                    title: "Page settings",
                    onClose: () => K(null),
                    height: "86%",
                    className: "sheet-insp",
                  },
                  React.createElement(Xa, { pageId: ie.id }),
                ),
              le === "more" &&
                React.createElement(
                  st,
                  { title: "More", onClose: () => K(null) },
                  React.createElement(
                    "div",
                    { className: "more-list" },
                    React.createElement(
                      "div",
                      { className: "more-row" },
                      React.createElement("span", null, "Preview size"),
                      React.createElement(re, {
                        size: "sm",
                        value: P,
                        onChange: ue,
                        options: Object.entries(bt).map(([w, C]) => [
                          w,
                          C.label,
                        ]),
                      }),
                    ),
                    [
                      ["Page settings", "settings", () => K("page")],
                      ["Navigation menus", "nav", () => K("nav")],
                      [
                        "Media library",
                        "image",
                        () => (K(null), W.openMedia()),
                      ],
                      [
                        "Collections",
                        "db",
                        () => (K(null), W.openCollections()),
                      ],
                      [
                        "Redirects",
                        "redirect",
                        () => (K(null), W.openRedirects()),
                      ],
                      [
                        "Version history",
                        "history",
                        () => (K(null), W.openPublish("history")),
                      ],
                      [
                        "Search and commands",
                        "search",
                        () => (K(null), xe("command")),
                      ],
                      [
                        "Start a new site",
                        "layout",
                        () => (K(null), g("gallery")),
                      ],
                    ].map(([w, C, A]) =>
                      React.createElement(
                        "button",
                        {
                          key: w,
                          type: "button",
                          className: "more-btn",
                          onClick: A,
                        },
                        React.createElement(S, { name: C, size: 17 }),
                        React.createElement("span", null, w),
                        React.createElement(S, { name: "right", size: 14 }),
                      ),
                    ),
                  ),
                ),
              hn,
              React.createElement(va, { toasts: Ge, dismiss: Tt }),
            ),
          ),
        ),
      );
    }
    return React.createElement(
      gt.Provider,
      { value: ea },
      React.createElement(
        Kt.Provider,
        { value: J },
        React.createElement(
          ka.Provider,
          { value: sn },
          React.createElement("style", null, da),
          React.createElement(
            "div",
            { className: x("app", ke ? "is-desktop" : "is-tablet") },
            React.createElement(
              "header",
              { className: "topbar" },
              mn,
              React.createElement("span", { className: "topbar-sep" }),
              un,
              React.createElement(
                "span",
                { className: x("save", Fe.state) },
                Fe.state === "saving"
                  ? React.createElement("span", { className: "spinner" })
                  : React.createElement(S, { name: "check", size: 13 }),
                Aa,
              ),
              React.createElement("span", { className: "grow" }),
              React.createElement(
                "button",
                {
                  type: "button",
                  className: "cmdk",
                  onClick: () => xe("command"),
                },
                React.createElement(S, { name: "search", size: 14 }),
                React.createElement("span", null, "Search or jump to\u2026"),
                React.createElement(We, null, St),
                React.createElement(We, null, "K"),
              ),
              React.createElement("span", { className: "grow" }),
              React.createElement(_, {
                icon: "theme",
                label: "Theme",
                active: Oe === "theme",
                onClick: () =>
                  Oe === "theme" && ke ? E("inspect") : W.openTheme(),
              }),
              React.createElement(_, {
                icon: "image",
                label: "Media library",
                onClick: () => W.openMedia(),
              }),
              React.createElement("span", { className: "topbar-sep" }),
              pn,
              dn,
              cn,
            ),
            React.createElement(
              "div",
              { className: "workspace" },
              React.createElement(
                "aside",
                { className: "sidebar" },
                React.createElement(
                  "div",
                  { className: "side-tabs", role: "tablist" },
                  [
                    ["pages", "Pages"],
                    ["sections", "Sections"],
                    ["nav", "Navigation"],
                  ].map(([f, y]) =>
                    React.createElement(
                      "button",
                      {
                        key: f,
                        type: "button",
                        role: "tab",
                        "aria-selected": R === f,
                        className: x("side-tab", R === f && "on"),
                        onClick: () => Me(f),
                      },
                      y,
                    ),
                  ),
                ),
                React.createElement(
                  "div",
                  { className: "side-body" },
                  R === "pages" && React.createElement(Ja, null),
                  R === "sections" && React.createElement(Qa, null),
                  R === "nav" && React.createElement(Ya, null),
                ),
              ),
              React.createElement(
                "main",
                { className: "center" },
                React.createElement(
                  "div",
                  { className: "canvas-bar" },
                  rn,
                  React.createElement(re, {
                    value: P,
                    onChange: ue,
                    options: Object.entries(bt).map(([f, y]) => [
                      f,
                      "",
                      y.icon,
                    ]),
                  }),
                ),
                on,
              ),
              ke &&
                React.createElement("aside", { className: "inspector" }, ln),
              !ke &&
                L &&
                React.createElement(
                  React.Fragment,
                  null,
                  React.createElement("div", {
                    className: "drawer-scrim",
                    onClick: () => U(!1),
                  }),
                  React.createElement(
                    "aside",
                    { className: "inspector drawer" },
                    ln,
                  ),
                ),
            ),
            hn,
            React.createElement(va, { toasts: Ge, dismiss: Tt }),
          ),
        ),
      ),
    );
  }
  function ji({
    site: e,
    path: t,
    page: a,
    entry: s,
    onGo: n,
    missing: i,
    compact: r,
    onPages: o,
  }) {
    let [d, c] = pe(t);
    ot(() => c(t), [t]);
    let l = i
      ? "missing"
      : s && s.status === "draft"
        ? "draft"
        : a.status !== "live"
          ? a.status
          : null;
    return React.createElement(
      "form",
      {
        className: x("urlbar", r && "compact"),
        onSubmit: (h) => {
          (h.preventDefault(),
            n(d),
            h.currentTarget.querySelector("input").blur());
        },
      },
      r
        ? React.createElement(
            "button",
            {
              type: "button",
              className: "url-pages",
              onClick: o,
              "aria-label": "Pages",
            },
            React.createElement(S, { name: "pages", size: 14 }),
          )
        : React.createElement(S, {
            name: "lock",
            size: 12,
            className: "url-lock",
          }),
      !r &&
        React.createElement(
          "span",
          { className: "url-host" },
          e.subdomain,
          ".selfsite.in",
        ),
      React.createElement("input", {
        className: "url-path mono",
        value: d,
        onChange: (h) => c(h.target.value),
        spellCheck: !1,
        "aria-label": "Page address. Type a path and press Enter.",
        onFocus: (h) => h.target.select(),
      }),
      l === "draft" && React.createElement(oe, { tone: "warn" }, "Draft"),
      l === "hidden" && React.createElement(oe, null, "Hidden"),
      l === "missing" && React.createElement(oe, { tone: "danger" }, "404"),
    );
  }
  function Ss() {
    ReactDOM.createRoot(document.getElementById("root")).render(
      React.createElement(Gi, null),
    );
  }
  Ss();
})();
