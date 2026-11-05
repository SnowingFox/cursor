// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CodeBlock.js range:11093275..11098773
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.528Z
Adi = L({ "CodeBlock.js"() {
  "use strict";
  E(), Va(), P7(), B5e(), Eit(), TnS(), X7t(), OnS(), Z7t(), qu(), SWe(), f2(), fca = wnS(() => Promise.resolve().then(() => (dca(), nca)), (t) => t.DefaultCode), h2h = fca.Component, p2h = { base: { kVAEAm: "ui-1n2onr6", keoZOQ: "ui-1j66ri5 ui-14l7nz5", km5ZXQ: "ui-1yf7rl7", k1K539: "ui-t4zf8z ui-zboxd6", koQZXg: "ui-j3b58b", kIxVMA: "ui-1dcy8l4", ksF3WI: "ui-1upd4za", kqGeR4: "ui-3n1r3t", kYm2EN: "ui-1d76mj", kEafiO: "ui-178xt8z", kPef9Z: "ui-13fuv20", kLZC3w: "ui-u6elxy", kWqL5O: "ui-s1s249", kSWEuD: "ui-32b0ac", k26BEO: "ui-r3jcmw", kt9PQ7: "ui-so031l", kfdmCh: "ui-1q0q8m5", kL6WhQ: "ui-8daab9", kZ1KPB: "ui-e0pwq", k4WBpm: "ui-19ypqd9", kaZRDh: "ui-18ajz7i", kXHlph: "ui-6ikm8r", kORKVm: "ui-10wlt62", kWkggS: "ui-1ua6jya", $$css: true } }, vca = dcS("plain"), m2h = vca.Provider, _ca = { base: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kOIVth: "ui-pkkfsy", kLKAdn: "ui-uve7l6", kpe85a: "ui-1jwyyqy", kGO01o: "ui-1rgtt3y", kE3dHu: "ui-437fdo", kWkggS: "ui-1ua6jya ui-1iuyybk", kEafiO: "ui-972fbf", kPef9Z: "ui-1ejq31n", kWqL5O: "ui-gfja2r", kSWEuD: "ui-11pwa6s", kt9PQ7: "ui-so031l", kfdmCh: "ui-1q0q8m5", kL6WhQ: "ui-17fyfba", kZ1KPB: "ui-yj58a3", k4WBpm: "ui-1b16gh4", kzqmXN: "ui-h8yej3", k9WMMc: "ui-dpxx8g", kMv6JI: "ui-jb2p0i", kGuDYH: "ui-1qlqyl8", kKX8nH: "ui-1t35e8", k63SB2: "ui-1pd3egz", kLWn49: "ui-15bjb6t", kMwMTN: "ui-1heor9g", kB7OPa: "ui-9f619", k7Eaqz: "ui-euugli", k1ekBW: "ui-15406qy", kIyJzY: "ui-1g2r6go", kAMwcw: "ui-z4gly6", kMeerF: "ui-1k57tk5 ui-1l9t207 ui-1x65lqo", k3XXqK: "ui-1t137rt ui-hlp2gg ui-i5y0ii", $$css: true }, clickable: { kkrTdU: "ui-1ypdohk", $$css: true } }, g2h = { base: { kMwMTN: "ui-19aaqeu", khDVqt: "ui-uxw1ft", kXHlph: "ui-6ikm8r", kORKVm: "ui-10wlt62", kg5iWk: "ui-lyipyv", $$css: true } }, f2h = { base: { kMwMTN: "ui-4b2ntj", khDVqt: "ui-uxw1ft", kmuXW: "ui-2lah0s", $$css: true } }, v2h = { base: { kVAEAm: "ui-1n2onr6", $$css: true } }, rNr = { wordWrap: { kzqmXN: "ui-h8yej3", k7Eaqz: "ui-euugli", ks0D6T: "ui-193iq5w", $$css: true }, horizontal: { kzqmXN: "ui-ezivpi", k7Eaqz: "ui-gqtt45", ks0D6T: "ui-1x1rfll", $$css: true } }, _2h = { base: { kVAEAm: "ui-10l6tqk", k87sOh: "ui-8hg36d", kCIrl2: "ui-7zl9wm", kY2c9j: "ui-1n327nk", k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kSiTet: "ui-g01cxk ui-87vcqg ui-1euntei ui-1npyufz", $$css: true } }, sNr = { base: { k1xSpc: "ui-78zum5", $$css: true }, copied: { kMwMTN: "ui-1w5rjie", $$css: true }, plate: { kWkggS: "ui-1ua6jya", $$css: true } }, b2h = { backgroundColor: "transparent", minHeight: 0, width: "max-content", minWidth: "100%" }, y2h = { backgroundColor: "transparent", minHeight: 0, width: "100%", minWidth: 0 };
} });
function Nit(t) {
  const e = t.trim();
  if (e === "") return;
  const n = parseInt(e, 10);
  if (!Number.isNaN(n) && n.toString() === e && Number.isSafeInteger(n)) return n;
}
function oNr(t) {
  const e = t.lastIndexOf(".");
  return e === -1 ? "" : t.slice(e + 1);
}
function gUt(t, e) {
  const n = t.indexOf("!");
  if (n === -1) return { value: t, clickable: e };
  const i = t.slice(n + 1);
  return { value: t.slice(0, n), clickable: i === "citation" ? true : e };
}
function CcS(t) {
  const [e, n, i, r] = t.map((c) => c.trim()), s = Nit(n), o = Nit(i);
  if (s === void 0 || o === void 0) return null;
  const { value: a, clickable: l } = gUt(r, true);
  return { language: e, filePath: a, startLine: s, endLine: o, clickable: l };
}
function TcS(t) {
  const [e, n, i] = t.map((o) => o.trim()), r = Nit(e), s = Nit(n);
  if (r !== void 0 && s !== void 0) {
    const { value: o, clickable: a } = gUt(i, true);
    return { language: oNr(o), filePath: o, startLine: r, endLine: s, clickable: a };
  }
  if (n.includes("-")) {
    const o = n.split("-");
    if (o.length === 2) {
      const a = Nit(o[0]), l = Nit(o[1]);
      if (a !== void 0 && l !== void 0) {
        const { value: c, clickable: u } = gUt(i, true);
        return { language: e, filePath: c, startLine: a, endLine: l, clickable: u };
      }
    }
  }
  return null;
}
function EcS(t) {
  const [e, n] = t.map((o) => o.trim());
  if (e.includes("-")) {
    const o = e.split("-");
    if (o.length === 2) {
      const a = Nit(o[0]), l = Nit(o[1]);
      if (a !== void 0 && l !== void 0) {
        const { value: c, clickable: u } = gUt(n, true);
        return { language: oNr(c), filePath: c, startLine: a, endLine: l, clickable: u };
      }
    }
  }
  const i = Nit(e);
  if (i !== void 0) {
    const { value: o, clickable: a } = gUt(n, true);
    return { language: oNr(o), filePath: o, startLine: i, endLine: i, clickable: a };
  }
  const { value: r, clickable: s } = gUt(n, false);
  return { language: e, filePath: r, clickable: s };
}
function IcS(t) {
  const e = t.split(":");
  let n = null;
  return e.length === 4 ? n = CcS(e) : e.length === 3 ? n = TcS(e) : e.length === 2 && (n = EcS(e)), n ? { language: n.language, filePath: n.filePath, startLine: n.startLine, endLine: n.endLine, clickable: n.clickable } : null;
}
function xcS(t) {
  const { value: e, clickable: n } = gUt(t, false);
  return e.includes(".") ? { language: oNr(e), filePath: e, startLine: void 0, endLine: void 0, clickable: n } : { language: e, filePath: void 0, startLine: void 0, endLine: void 0, clickable: n };
}
function bca(t) {
  const e = t ?? "";
  if (e.includes(":")) {
    const n = IcS(e);
    return n || { language: e, filePath: void 0, startLine: void 0, endLine: void 0, clickable: false };
  }
  return xcS(e);
}
