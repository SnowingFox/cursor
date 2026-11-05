// @recovered-by cursor-re
// artifact: app/extensions/cursor-browser-automation/dist/273.js sha256:ab64b3e34dc97e1e5c85ecdaec9168b4137705ddedfa3c341bca35d6a42d36bc
// module: 2421 range:4517..5736
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2421: (e) => {
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