// Minimal self-contained icon set (stroke-style, Lucide-compatible visual language).
// Avoids depending on an external lucide-react CDN build inside a PWA that should work offline.
const { createElement: h } = React;

function makeIcon(paths, viewBox = "0 0 24 24") {
  return function Icon({ size = 20, color = "currentColor", fill = "none", style, ...rest }) {
    return h(
      "svg",
      {
        width: size, height: size, viewBox, fill: fill === "none" ? "none" : color,
        stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round",
        style, ...rest,
      },
      paths.map((d, i) => h("path", { key: i, d, fill: fill !== "none" ? color : "none" }))
    );
  };
}

// Some icons need non-path primitives (circle, line, polyline, rect) — build those directly.
const Activity = ({ size = 20, color = "currentColor", style, ...rest }) =>
  h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style, ...rest },
    h("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }));

const Dumbbell = ({ size = 20, color = "currentColor", style, ...rest }) =>
  h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style, ...rest },
    h("path", { d: "m6.5 6.5 11 11" }),
    h("path", { d: "m21 21-1-1" }),
    h("path", { d: "m3 3 1 1" }),
    h("path", { d: "m18 22 4-4" }),
    h("path", { d: "m2 6 4-4" }),
    h("path", { d: "m3 10 7-7" }),
    h("path", { d: "m14 21 7-7" }));

const Zap = ({ size = 20, color = "currentColor", fill = "none", style, ...rest }) =>
  h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: fill !== "none" ? color : "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style, ...rest },
    h("path", { d: "M13 2 3 14h9l-1 8 10-12h-9l1-8z" }));

const Bike = ({ size = 20, color = "currentColor", style, ...rest }) =>
  h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style, ...rest },
    h("circle", { cx: "5.5", cy: "17.5", r: "3.5" }),
    h("circle", { cx: "18.5", cy: "17.5", r: "3.5" }),
    h("path", { d: "M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z", fill: color }),
    h("path", { d: "M12 17.5V14l-3-3 4-3 2 3h2" }));

const Footprints = ({ size = 20, color = "currentColor", style, ...rest }) =>
  h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style, ...rest },
    h("path", { d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" }),
    h("path", { d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" }));

const TrendingUp = ({ size = 20, color = "currentColor", style, ...rest }) =>
  h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style, ...rest },
    h("polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }),
    h("polyline", { points: "16 7 22 7 22 13" }));

const Camera = ({ size = 20, color = "currentColor", style, ...rest }) =>
  h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style, ...rest },
    h("path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" }),
    h("circle", { cx: "12", cy: "13", r: "3" }));

const Plus = ({ size = 20, color = "currentColor", style, ...rest }) =>
  h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style, ...rest },
    h("line", { x1: "12", y1: "5", x2: "12", y2: "19" }), h("line", { x1: "5", y1: "12", x2: "19", y2: "12" }));

const Trash2 = ({ size = 20, color = "currentColor", style, ...rest }) =>
  h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style, ...rest },
    h("polyline", { points: "3 6 5 6 21 6" }),
    h("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
    h("line", { x1: "10", y1: "11", x2: "10", y2: "17" }), h("line", { x1: "14", y1: "11", x2: "14", y2: "17" }));

const X = ({ size = 20, color = "currentColor", style, ...rest }) =>
  h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style, ...rest },
    h("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), h("line", { x1: "6", y1: "6", x2: "18", y2: "18" }));

const Save = ({ size = 20, color = "currentColor", style, ...rest }) =>
  h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style, ...rest },
    h("path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }),
    h("polyline", { points: "17 21 17 13 7 13 7 21" }), h("polyline", { points: "7 3 7 8 15 8" }));

const Scale = ({ size = 20, color = "currentColor", style, ...rest }) =>
  h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style, ...rest },
    h("path", { d: "M16 16h6v-1a3 3 0 0 0-6 0v1z" }), h("path", { d: "M2 16h6v-1a3 3 0 0 0-6 0v1z" }),
    h("path", { d: "M7 21h10" }), h("path", { d: "M12 3v18" }),
    h("path", { d: "M3 7h18l-2-4H5L3 7z" }));

const Heart = ({ size = 20, color = "currentColor", fill = "none", style, ...rest }) =>
  h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: fill !== "none" ? color : "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style, ...rest },
    h("path", { d: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" }));

const Flame = ({ size = 20, color = "currentColor", style, ...rest }) =>
  h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style, ...rest },
    h("path", { d: "M8.5 14.5A2.5 2.5 0 0 0 11 17a2.5 2.5 0 0 0 2.5-2.5c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7.5 7.5 0 1 1-15 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" }));

const Gauge = ({ size = 20, color = "currentColor", style, ...rest }) =>
  h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style, ...rest },
    h("path", { d: "m12 14 4-4" }), h("path", { d: "M3.34 19a10 10 0 1 1 17.32 0" }));

const ArrowLeft = ({ size = 20, color = "currentColor", style, ...rest }) =>
  h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style, ...rest },
    h("line", { x1: "19", y1: "12", x2: "5", y2: "12" }), h("polyline", { points: "12 19 5 12 12 5" }));

window.LucideReact = { Activity, Dumbbell, Zap, Bike, Footprints, TrendingUp, Camera, Plus, Trash2, X, Save, Scale, Heart, Flame, Gauge, ArrowLeft };
