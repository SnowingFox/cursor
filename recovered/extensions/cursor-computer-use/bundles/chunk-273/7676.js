// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/273.js sha256:057ec17488f68f7434e12ce31e59180a7183ddc2aab226744d2893aed3fcf167
// module: 7676 range:71818..73035
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7676: (e, t, i) => {
  var a = i(4333), n = i(8231), r = [{ section: a.GPSIFD, type: 2, name: "GPSLatitude", refType: 1, refName: "GPSLatitudeRef", posVal: "N" }, { section: a.GPSIFD, type: 4, name: "GPSLongitude", refType: 3, refName: "GPSLongitudeRef", posVal: "E" }], o = [{ section: a.SubIFD, type: 306, name: "ModifyDate" }, { section: a.SubIFD, type: 36867, name: "DateTimeOriginal" }, { section: a.SubIFD, type: 36868, name: "CreateDate" }, { section: a.SubIFD, type: 306, name: "ModifyDate" }];
  e.exports = { castDegreeValues: function(e2, t2) {
    r.forEach(function(i2) {
      var a2 = e2(i2);
      if (a2) {
        var n2 = e2({ section: i2.section, type: i2.refType, name: i2.refName }) === i2.posVal ? 1 : -1, r2 = (a2[0] + a2[1] / 60 + a2[2] / 3600) * n2;
        t2(i2, r2);
      }
    });
  }, castDateValues: function(e2, t2) {
    o.forEach(function(i2) {
      var a2 = e2(i2);
      if (a2) {
        var r2 = n.parseExifDate(a2);
        void 0 !== r2 && t2(i2, r2);
      }
    });
  }, simplifyValue: function(e2, t2) {
    return Array.isArray(e2) && 1 === (e2 = e2.map(function(e3) {
      return 10 === t2 || 5 === t2 ? e3[0] / e3[1] : e3;
    })).length && (e2 = e2[0]), e2;
  } };
}