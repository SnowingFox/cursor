// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 31904 range:187459..188848
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
31904: (A, e, t) => {
  const r = t(56970), { ResponseStatusCodeError: s } = t(38238), { chunksDecode: o } = t(6564);
  const n = (A2) => A2.length > 15 && "/" === A2[11] && "a" === A2[0] && "p" === A2[1] && "p" === A2[2] && "l" === A2[3] && "i" === A2[4] && "c" === A2[5] && "a" === A2[6] && "t" === A2[7] && "i" === A2[8] && "o" === A2[9] && "n" === A2[10] && "j" === A2[12] && "s" === A2[13] && "o" === A2[14] && "n" === A2[15], i = (A2) => A2.length > 4 && "/" === A2[4] && "t" === A2[0] && "e" === A2[1] && "x" === A2[2] && "t" === A2[3];
  A.exports = { getResolveErrorBodyCallback: async function({ callback: A2, body: e2, contentType: t2, statusCode: a, statusMessage: Q, headers: g }) {
    r(e2);
    let E = [], B = 0;
    try {
      for await (const A3 of e2) if (E.push(A3), B += A3.length, B > 131072) {
        E = [], B = 0;
        break;
      }
    } catch {
      E = [], B = 0;
    }
    const c = `Response status code ${a}${Q ? `: ${Q}` : ""}`;
    if (204 === a || !t2 || !B) return void queueMicrotask(() => A2(new s(c, a, g)));
    const I = Error.stackTraceLimit;
    let C;
    Error.stackTraceLimit = 0;
    try {
      n(t2) ? C = JSON.parse(o(E, B)) : i(t2) && (C = o(E, B));
    } catch {
    } finally {
      Error.stackTraceLimit = I;
    }
    queueMicrotask(() => A2(new s(c, a, g, C)));
  }, isContentTypeApplicationJson: n, isContentTypeText: i };
}