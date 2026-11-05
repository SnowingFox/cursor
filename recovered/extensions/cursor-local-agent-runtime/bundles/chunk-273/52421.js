// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/273.js sha256:918321c092763b0f5509b45d1560ac236164a596e0ab5a603460d95abe18903b
// module: 52421 range:41078..42298
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
52421: (e) => {
  e.exports = { parseSections: function(e2, t) {
    var i, a;
    for (e2.setBigEndian(true); e2.remainingLength() > 0 && 218 !== a; ) {
      if (255 !== e2.nextUInt8()) throw new Error("Invalid JPEG section offset");
      i = (a = e2.nextUInt8()) >= 208 && a <= 217 || 218 === a ? 0 : e2.nextUInt16() - 2, t(a, e2.branch(0, i)), e2.skip(i);
    }
  }, getSizeFromSOFSection: function(e2) {
    return e2.skip(1), { height: e2.nextUInt16(), width: e2.nextUInt16() };
  }, getSectionName: function(e2) {
    var t, i;
    switch (e2) {
      case 216:
        t = "SOI";
        break;
      case 196:
        t = "DHT";
        break;
      case 219:
        t = "DQT";
        break;
      case 221:
        t = "DRI";
        break;
      case 218:
        t = "SOS";
        break;
      case 254:
        t = "COM";
        break;
      case 217:
        t = "EOI";
        break;
      default:
        e2 >= 224 && e2 <= 239 ? (t = "APP", i = e2 - 224) : e2 >= 192 && e2 <= 207 && 196 !== e2 && 200 !== e2 && 204 !== e2 ? (t = "SOF", i = e2 - 192) : e2 >= 208 && e2 <= 215 && (t = "RST", i = e2 - 208);
    }
    var a = { name: t };
    return "number" == typeof i && (a.index = i), a;
  } };
}