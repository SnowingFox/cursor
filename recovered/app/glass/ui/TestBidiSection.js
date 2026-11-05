// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TestBidiSection.js range:39334365..39340921
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.064Z
QcC = L({ "TestBidiSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), Am(), pi(), n2(), c_(), vo(), nIt(), Sz(), L2i(), e_(), eD(), IL(), lZv = wt("<pre>"), cZv = wt("<div class=section><h2>Test Bidi</h2><div><div></div><div>"), PLs = cs(false), g6n = cs(null);
} });
function JcC() {
  const { showHover: t, hideHover: e } = L6(), { showLargeHover: n, hideHover: i, currentHoverModel: r, showLargeJSXHover: s } = aVe(), o = jp();
  On(() => {
    e(), i();
  });
  const a = { padding: "8px 16px", background: "var(--vscode-button-background)", color: "var(--vscode-button-foreground)", cursor: "pointer", "border-radius": "4px", margin: "8px 0", display: "inline-block" }, l = { "margin-bottom": "24px" }, c = { display: "flex", flexWrap: "wrap", gap: "12px" };
  return Ee(pk, { title: "Tooltips", get children() {
    return [(() => {
      var u = pZv(), d = u.firstChild, h = d.nextSibling, p = h.nextSibling, g = p.firstChild, f = g.nextSibling, _ = f.nextSibling, b = _.nextSibling, y = b.nextSibling, S = y.nextSibling;
      return Ea(u, l), h.style.setProperty("margin-bottom", "12px"), g.addEventListener("mouseleave", () => {
        e();
      }), g.addEventListener("mouseenter", (k) => {
        t({ content: "This tooltip appears below the element", target: k.currentTarget, position: { hoverPosition: Bu.BELOW }, appearance: { showPointer: true } });
      }), Ea(g, a), f.addEventListener("mouseleave", () => {
        e();
      }), f.addEventListener("mouseenter", (k) => {
        t({ content: "This tooltip appears above the element", target: k.currentTarget, position: { hoverPosition: Bu.ABOVE }, appearance: { showPointer: true } });
      }), Ea(f, a), _.addEventListener("mouseleave", () => {
        e();
      }), _.addEventListener("mouseenter", (k) => {
        t({ content: "This tooltip appears to the left of the element", target: k.currentTarget, position: { hoverPosition: Bu.LEFT }, appearance: { showPointer: true } });
      }), Ea(_, a), b.addEventListener("mouseleave", () => {
        e();
      }), b.addEventListener("mouseenter", (k) => {
        t({ content: "This tooltip appears to the right of the element", target: k.currentTarget, position: { hoverPosition: Bu.RIGHT }, appearance: { showPointer: true } });
      }), Ea(b, a), y.addEventListener("click", () => {
        e();
      }), y.addEventListener("mouseenter", (k) => {
        t({ content: "This tooltip is sticky and will not go away on mouse leave", target: k.currentTarget, position: { hoverPosition: Bu.BELOW }, persistence: { sticky: true }, appearance: { showPointer: true } });
      }), Ea(y, a), S.addEventListener("mouseleave", () => {
        e();
      }), S.addEventListener("mouseenter", (k) => {
        const C = o.get(Tdc) + 1;
        o.set(Tdc, C), t({ content: `You've hovered ${C} times`, target: k.currentTarget, position: { hoverPosition: Bu.BELOW }, appearance: { showPointer: true } });
      }), Ea(S, a), xn((k) => Ea(p, c, k)), u;
    })(), (() => {
      var u = mZv(), d = u.firstChild, h = d.nextSibling, p = h.nextSibling, g = p.firstChild, f = g.nextSibling, _ = f.nextSibling, b = _.nextSibling;
      return Ea(u, l), h.style.setProperty("margin-bottom", "12px"), g.addEventListener("mouseleave", () => {
        i("basic-model");
      }), g.addEventListener("mouseenter", (y) => {
        n(y, "Basic large tooltip with custom styling", Bu.BELOW, "basic-model");
      }), Ea(g, a), f.addEventListener("mouseleave", () => {
        i("html-model");
      }), f.addEventListener("mouseenter", (y) => {
        const S = document.createElement("div");
        S.innerHTML = `
								<div class="thinking-tooltip-description">
									Custom HTML content with styling
								</div>
								<div class="continuous-gradient-container gradient-high">
									<span class="${Gn.asClassName(yt.brain)}"></span>
									<span>AI-powered tooltip</span>
								</div>
							`, n(y, S, Bu.BELOW, "html-model");
      }), Ea(f, a), _.addEventListener("mouseleave", () => {
        i("rich-model");
      }), _.addEventListener("mouseenter", (y) => {
        const S = document.createElement("div");
        S.innerHTML = `
								<div class="thinking-tooltip-description">
									Rich tooltip with multiple lines
								</div>
								<div class="thinking-tooltip-description">
									Second line with more information
								</div>
								<div class="gradient-text-high">
									Gradient text effect
								</div>
							`, n(y, S, Bu.RIGHT, "rich-model");
      }), Ea(_, a), b.addEventListener("mouseleave", () => {
        i("model-tracker");
      }), b.addEventListener("mouseenter", (y) => {
        const S = document.createElement("div");
        S.innerHTML = `
								<div class="thinking-tooltip-description">
									Current model: <strong>${r() || "None"}</strong>
								</div>
								<div class="thinking-tooltip-description">
									Hover over other examples to change the model
								</div>
							`, n(y, S, Bu.BELOW, "model-tracker");
      }), Ea(b, a), xn((y) => Ea(p, c, y)), u;
    })(), (() => {
      var u = gZv(), d = u.firstChild, h = d.nextSibling, p = h.nextSibling, g = p.firstChild, f = g.nextSibling, _ = f.nextSibling, b = _.nextSibling;
      return Ea(u, l), h.style.setProperty("margin-bottom", "12px"), g.addEventListener("mouseleave", () => {
        i("simple-jsx-model");
      }), g.addEventListener("mouseenter", (y) => {
        s(y, () => Ee(vZv, {}), Bu.BELOW, "simple-jsx-model");
      }), Ea(g, a), f.addEventListener("mouseleave", () => {
        i("complex-jsx-model");
      }), f.addEventListener("mouseenter", (y) => {
        s(y, () => Ee(_Zv, {}), Bu.BELOW, "complex-jsx-model");
      }), Ea(f, a), _.addEventListener("mouseleave", () => {
        i("gradient-jsx-model");
      }), _.addEventListener("mouseenter", (y) => {
        s(y, () => Ee(bZv, {}), Bu.RIGHT, "gradient-jsx-model");
      }), Ea(_, a), b.addEventListener("mouseleave", () => {
        i("jsx-tracker-model");
      }), b.addEventListener("mouseenter", (y) => {
        s(y, () => (() => {
          var S = fZv(), k = S.firstChild, C = k.nextSibling, T = C.firstChild, I = C.nextSibling;
          return k.style.setProperty("margin-bottom", "4px"), Le(C, () => r() || "None", null), I.style.setProperty("margin-top", "4px"), I.style.setProperty("font-size", "10px"), S;
        })(), Bu.BELOW, "jsx-tracker-model");
      }), Ea(b, a), xn((y) => Ea(p, c, y)), u;
    })()];
  } });
}
var uZv, dZv, hZv, pZv, mZv, gZv, fZv, vZv, f6n, Tdc, _Zv, bZv, 