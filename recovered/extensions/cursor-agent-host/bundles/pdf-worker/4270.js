// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 4270 range:31568..32024
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4270: (t2, e2, i2) => {
    var s2 = i2(9565), n2 = i2(4901), r2 = i2(34), a2 = TypeError;
    t2.exports = function(t3, e3) {
      var i3, o2;
      if ("string" === e3 && n2(i3 = t3.toString) && !r2(o2 = s2(i3, t3))) return o2;
      if (n2(i3 = t3.valueOf) && !r2(o2 = s2(i3, t3))) return o2;
      if ("string" !== e3 && n2(i3 = t3.toString) && !r2(o2 = s2(i3, t3))) return o2;
      throw new a2("Can't convert object to primitive value");
    };
  }