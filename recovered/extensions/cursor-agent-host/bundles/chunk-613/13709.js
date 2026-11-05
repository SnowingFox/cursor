// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 13709 range:36186..36580
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
13709: (A, e, t) => {
  "use strict";
  const r = t(56970), { URLSerializer: s } = t(52603), { isValidHeaderName: o } = t(48215);
  A.exports = { urlEquals: function(A2, e2, t2 = false) {
    return s(A2, t2) === s(e2, t2);
  }, getFieldValues: function(A2) {
    r(null !== A2);
    const e2 = [];
    for (let t2 of A2.split(",")) t2 = t2.trim(), o(t2) && e2.push(t2);
    return e2;
  } };
}