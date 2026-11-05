// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 8829 range:798608..799985
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8829: (e2, t2, A2) => {
    "use strict";
    const { TokenError: n2 } = A2(6011);
    function r2({ complete: e3, checkTyp: t3 }, A3) {
      if (A3 instanceof Buffer) A3 = A3.toString("utf-8");
      else if ("string" != typeof A3) throw new n2(n2.codes.invalidType, "The token must be a string or a buffer.");
      const r3 = A3.indexOf("."), o2 = A3.lastIndexOf(".");
      if (-1 === r3 || r3 >= o2) throw new n2(n2.codes.malformed, "The token is malformed.");
      let s = false;
      try {
        const i = JSON.parse(Buffer.from(A3.slice(0, r3), "base64").toString("utf-8"));
        if (t3 && i.typ !== t3) throw new n2(n2.codes.invalidType, `The type must be "${t3}".`, { header: i });
        s = true;
        let a = Buffer.from(A3.slice(r3 + 1, o2), "base64").toString("utf-8");
        if (a = JSON.parse(a), !a || "object" != typeof a) throw new n2(n2.codes.invalidPayload, "The payload must be an object", { payload: a });
        return e3 ? { header: i, payload: a, signature: A3.slice(o2 + 1), input: A3.slice(0, o2) } : a;
      } catch (e4) {
        throw n2.wrap(e4, n2.codes.malformed, `The token ${s ? "payload" : "header"} is not a valid base64url serialized JSON.`);
      }
    }
    e2.exports = function(e3 = {}) {
      const t3 = e3.complete || false, A3 = e3.checkTyp;
      return r2.bind(null, { complete: t3, checkTyp: A3 });
    };
  }