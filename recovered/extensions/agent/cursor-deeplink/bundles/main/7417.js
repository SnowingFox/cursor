// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 7417 range:708603..709474
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7417: (e2, t2, A2) => {
    var n2 = A2(7740), r2 = n2.ARRAY_BUFFER_SUPPORT, o2 = n2.SYMBOL_SUPPORT;
    e2.exports = function(e3, t3) {
      var A3, n3, s, i, a;
      if (!e3) throw new Error("obliterator/forEach: invalid iterable.");
      if ("function" != typeof t3) throw new Error("obliterator/forEach: expecting a callback.");
      if (Array.isArray(e3) || r2 && ArrayBuffer.isView(e3) || "string" == typeof e3 || "[object Arguments]" === e3.toString()) for (s = 0, i = e3.length; s < i; s++) t3(e3[s], s);
      else if ("function" != typeof e3.forEach) if (o2 && Symbol.iterator in e3 && "function" != typeof e3.next && (e3 = e3[Symbol.iterator]()), "function" != typeof e3.next) for (n3 in e3) e3.hasOwnProperty(n3) && t3(e3[n3], n3);
      else for (A3 = e3, s = 0; true !== (a = A3.next()).done; ) t3(a.value, s), s++;
      else e3.forEach(t3);
    };
  }