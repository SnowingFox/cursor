// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SubagentStatusIndicator.react.js range:37609337..37616474
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.272Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, SubagentStatusIndicator.css
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, SubagentStatusIndicator.css
// path-candidate: none (no nls basename match; path inferred, confidence C)

var SubagentStatusIndicatorModule = L({
  "SubagentStatusIndicator.react.js"() {
    "use strict";

    E(), Mt(), uV0();
  }
});
import { c as YDs } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useEffect as dV0, useRef as hV0 } from "./react-runtime/react/esm-index-production.js";
import { jsx as Mce, jsxs as XDs } from "./react-runtime/react/esm-jsx-runtime-production.js";
function pV0(t) {
  const e = YDs(9),
    {
      agentId: n,
      onOpenAgent: i,
      title: r
    } = t;
  let s;
  e[0] !== n ? (s = Mce(VDs, {
    activityState: "working",
    syncAnimationInstanceKey: n
  }), e[0] = n, e[1] = s) : s = e[1];
  let o;
  e[2] !== n || e[3] !== i ? (o = () => i(n), e[2] = n, e[3] = i, e[4] = o) : o = e[4];
  let a;
  return e[5] !== s || e[6] !== o || e[7] !== r ? (a = Mce(fi.Row, {
    "aria-label": r,
    label: r,
    leading: s,
    onClick: o
  }), e[5] = s, e[6] = o, e[7] = r, e[8] = a) : a = e[8], a;
}
function rBv(t) {
  const e = YDs(14),
    {
      agent: n,
      onOpenAgent: i
    } = t;
  let r;
  e[0] !== n.id || e[1] !== n.title || e[2] !== i ? (r = Mce(pV0, {
    agentId: n.id,
    onOpenAgent: i,
    title: n.title
  }), e[0] = n.id, e[1] = n.title, e[2] = i, e[3] = r) : r = e[3];
  const s = r;
  if (n.children.length === 0) return s;
  let o;
  if (e[4] !== n.children || e[5] !== i) {
    let c;
    e[7] !== i ? (c = u => Mce("div", {
      "data-state": "working",
      className: "glass-9f619 glass-h8yej3 glass-euugli",
      children: Mce(rBv, {
        agent: u,
        onOpenAgent: i
      })
    }, u.id), e[7] = i, e[8] = c) : c = e[8], o = n.children.map(c), e[4] = n.children, e[5] = i, e[6] = o;
  } else o = e[6];
  let a;
  e[9] !== o ? (a = Mce("div", {
    className: "glass-78zum5 glass-dt5ytf glass-5cdhqx glass-193t4r6",
    children: o
  }), e[9] = o, e[10] = a) : a = e[10];
  let l;
  return e[11] !== s || e[12] !== a ? (l = XDs("div", {
    className: "glass-gysv4p glass-81tj9u glass-wmcnuq glass-78zum5 glass-dt5ytf glass-137clkk glass-h8yej3 glass-euugli",
    children: [s, a]
  }), e[11] = s, e[12] = a, e[13] = l) : l = e[13], l;
}
function mV0(t) {
  const e = [];
  for (const n of t.getLoadedComposers()) {
    const i = t.getHandleIfLoaded(n);
    i !== void 0 && t.getComposerData(i)?.status === "generating" && e.push(n);
  }
  return e;
}
function gV0(t, e, n) {
  const i = YDs(8),
    r = uc(t, mV0);
  let s;
  i[0] !== n.agents || i[1] !== e.backgroundWorkItems ? (s = c => {
    const u = new Nt(),
      d = u.add(new Nt()),
      h = () => {
        d.clear();
        for (const p of n.agents.value) d.add(p.status.onChange(c)), d.add(p.isArchived.onChange(c));
      };
    return h(), u.add(n.agents.onChange(() => {
      h(), c();
    })), u.add(e.backgroundWorkItems.event(c)), () => u.dispose();
  }, i[0] = n.agents, i[1] = e.backgroundWorkItems, i[2] = s) : s = i[2];
  const o = s;
  let a;
  return i[3] !== n || i[4] !== e || i[5] !== t || i[6] !== r ? (a = () => Wvs(dGl(t, e, n), r), i[3] = n, i[4] = e, i[5] = t, i[6] = r, i[7] = a) : a = i[7], JB(o, a);
}
function fV0(t) {
  const e = YDs(71),
    {
      open: n,
      shutdownKind: i,
      onResolve: r
    } = t,
    s = et(ZD),
    o = et(no),
    a = et(ma),
    l = et(Vc),
    c = et(Nu),
    u = OL("glassAutoContinueInterruptedAgents") ?? true,
    d = gV0(o, s, a),
    h = vsv(d);
  let p;
  e[0] !== d.length ? (p = uGl(d.length), e[0] = d.length, e[1] = p) : p = e[1];
  const {
    title: g
  } = p;
  let f;
  e[2] !== d.length || e[3] !== u ? (f = QYw(d.length, u), e[2] = d.length, e[3] = u, e[4] = f) : f = e[4];
  const _ = f;
  let b;
  e[5] !== u || e[6] !== i ? (b = _sv(i, {
    autoContinueEnabled: u
  }), e[5] = u, e[6] = i, e[7] = b) : b = e[7];
  const y = b,
    S = hV0(null);
  let k, C;
  e[8] !== d.length || e[9] !== r || e[10] !== n ? (k = () => {
    n && d.length === 0 && r(true);
  }, C = [n, d.length, r], e[8] = d.length, e[9] = r, e[10] = n, e[11] = k, e[12] = C) : (k = e[11], C = e[12]), dV0(k, C);
  let T;
  e[13] !== a || e[14] !== d || e[15] !== l || e[16] !== r ? (T = ve => {
    r(false);
    const fe = ZYw(ve, d, Te => a.getAgentHeader(Te) !== void 0);
    fe !== void 0 && l.executeCommand("glass.openAgentById", fe);
  }, e[13] = a, e[14] = d, e[15] = l, e[16] = r, e[17] = T) : T = e[17];
  const I = T;
  let A;
  e[18] !== c ? (A = ve => {
    gf(c, "glassAutoContinueInterruptedAgents", ve);
  }, e[18] = c, e[19] = A) : A = e[19];
  const P = A,
    M = Xr;
  let O;
  e[20] !== r ? (O = ve => {
    ve || r(false);
  }, e[20] = r, e[21] = O) : O = e[21];
  const N = "lg";
  let U;
  e[22] !== _ || e[23] !== g ? (U = Mce(Xr.Header, {
    description: _,
    title: g
  }), e[22] = _, e[23] = g, e[24] = U) : U = e[24];
  const j = Xr,
    $ = xg,
    H = "vertical",
    G = 280,
    q = "glass-17v7654 glass-1lfpczk",
    K = fi;
  let V;
  e[25] !== I ? (V = ve => Mce(rBv, {
    agent: ve,
    onOpenAgent: I
  }, ve.id), e[25] = I, e[26] = V) : V = e[26];
  const Y = h.map(V);
  let J;
  e[27] !== K.Rows || e[28] !== Y ? (J = Mce("div", {
    className: q,
    children: Mce(K.Rows, {
      children: Y
    })
  }), e[27] = K.Rows, e[28] = Y, e[29] = J) : J = e[29];
  let Q;
  e[30] !== $ || e[31] !== J ? (Q = Mce($, {
    direction: H,
    maxHeight: G,
    children: J
  }), e[30] = $, e[31] = J, e[32] = Q) : Q = e[32];
  let te;
  e[33] !== j.Content || e[34] !== Q ? (te = Mce(j.Content, {
    children: Q
  }), e[33] = j.Content, e[34] = Q, e[35] = te) : te = e[35];
  let ee;
  e[36] !== u || e[37] !== P ? (ee = Mce(G5, {
    checked: u,
    onCheckedChange: P,
    size: "sm"
  }), e[36] = u, e[37] = P, e[38] = ee) : ee = e[38];
  let re;
  e[39] !== d.length ? (re = JYw(d.length), e[39] = d.length, e[40] = re) : re = e[40];
  let ie;
  e[41] !== re ? (ie = Mce(nn, {
    color: "secondary",
    size: "xs",
    children: re
  }), e[41] = re, e[42] = ie) : ie = e[42];
  let oe;
  e[43] !== ee || e[44] !== ie ? (oe = XDs("label", {
    className: "glass-6s0dn4 glass-1ypdohk glass-78zum5 glass-pkkfsy glass-ack27t glass-87ps6o",
    children: [ee, ie]
  }), e[43] = ee, e[44] = ie, e[45] = oe) : oe = e[45];
  let se;
  e[46] !== r ? (se = () => r(false), e[46] = r, e[47] = se) : se = e[47];
  let le;
  e[48] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (le = D("shutdownChatStreamingCancel", "Cancel"), e[48] = le) : le = e[48];
  let ce;
  e[49] !== se ? (ce = Mce(An, {
    kbs: "Esc",
    onClick: se,
    variant: "text",
    children: le
  }), e[49] = se, e[50] = ce) : ce = e[50];
  let ae;
  e[51] !== y.destructive ? (ae = y.destructive ? {
    tone: "danger"
  } : {}, e[51] = y.destructive, e[52] = ae) : ae = e[52];
  let de;
  e[53] !== r ? (de = () => r(true), e[53] = r, e[54] = de) : de = e[54];
  let he;
  e[55] !== y.label || e[56] !== ae || e[57] !== de ? (he = Mce(An, {
    ...ae,
    kbs: "⏎",
    onClick: de,
    ref: S,
    variant: "primary",
    children: y.label
  }), e[55] = y.label, e[56] = ae, e[57] = de, e[58] = he) : he = e[58];
  let ge;
  e[59] !== oe || e[60] !== ce || e[61] !== he ? (ge = XDs(Xr.Footer, {
    children: [oe, ce, he]
  }), e[59] = oe, e[60] = ce, e[61] = he, e[62] = ge) : ge = e[62];
  let pe;
  return e[63] !== M || e[64] !== n || e[65] !== U || e[66] !== te || e[67] !== ge || e[68] !== O || e[69] !== g ? (pe = XDs(M, {
    "aria-label": g,
    initialFocus: S,
    onOpenChange: O,
    open: n,
    size: N,
    children: [U, te, ge]
  }), e[63] = M, e[64] = n, e[65] = U, e[66] = te, e[67] = ge, e[68] = O, e[69] = g, e[70] = pe) : pe = e[70], pe;
}
