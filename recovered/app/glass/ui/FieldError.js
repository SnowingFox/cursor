// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FieldError.js range:14633490..14635147
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.666Z
w1S = L({ "FieldError.js"() {
  E(), jv(), N7(), VQ(), BY(), C_e(), Om(), _A(), qQ(), l6(), LRe(), u4h = { ...wne, ...D7 }, Fma = ZOr.forwardRef(function(e, n) {
    const { render: i, id: r, className: s, match: o, style: a, ...l } = e, c = $I(r), { validityData: u, state: d, name: h } = Vj(false), { setMessageIds: p } = zQ(), { errors: g } = w_e(), f = h && Object.hasOwn(g, h) ? g[h] : null, _ = !!(Array.isArray(f) ? f.length : f), b = typeof o == "string";
    let y = false;
    o === true ? y = true : d.disabled ? y = false : b ? y = !!u.state[o] : y = _ || u.state.valid === false;
    const { mounted: S, transitionStatus: k, setMounted: C } = NRe(y);
    su(() => {
      if (!(!y || !c)) return p((H) => H.concat(c)), () => {
        p((H) => H.filter((G) => G !== c));
      };
    }, [y, c, p]);
    const T = ZOr.useRef(null), [I, A] = ZOr.useState(null), [P, M] = ZOr.useState(null);
    let O = u.error;
    !b && _ ? O = f : u.errors.length > 1 && (O = u.errors);
    let N = O ?? "";
    Array.isArray(O) && (N = O.length > 1 ? c4h("ul", { children: O.map((H) => c4h("li", { children: H }, H)) }) : O[0] ?? "");
    const U = Array.isArray(O) ? JSON.stringify(O) : O;
    y && U !== P && (M(U), A(N)), GQ({ open: y, ref: T, onComplete() {
      y || C(false);
    } });
    const j = { ...d, transitionStatus: k }, $ = Lm("div", e, { ref: [n, T], state: j, props: [{ id: c, children: y ? N : I }, l], stateAttributesMapping: u4h, enabled: S });
    return S ? $ : null;
  }), process.env.NODE_ENV !== "production" && (Fma.displayName = "FieldError");
} });
import * as C1S from "./react-runtime/react/esm-index-production.js";
var Bma, 