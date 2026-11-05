// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/273.js sha256:057ec17488f68f7434e12ce31e59180a7183ddc2aab226744d2893aed3fcf167
// module: 4333 range:22244..25228
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4333: (e) => {
  function t(e2, t2) {
    switch (e2) {
      case 1:
        return t2.nextUInt8();
      case 3:
      case 8:
        return t2.nextUInt16();
      case 4:
      case 9:
        return t2.nextUInt32();
      case 5:
        return [t2.nextUInt32(), t2.nextUInt32()];
      case 6:
        return t2.nextInt8();
      case 10:
        return [t2.nextInt32(), t2.nextInt32()];
      case 11:
        return t2.nextFloat();
      case 12:
        return t2.nextDouble();
      default:
        throw new Error("Invalid format while decoding: " + e2);
    }
  }
  function i(e2, i2) {
    var a2, n, r = i2.nextUInt16(), o = i2.nextUInt16(), s = (function(e3) {
      switch (e3) {
        case 1:
        case 2:
        case 6:
        case 7:
          return 1;
        case 3:
        case 8:
          return 2;
        case 4:
        case 9:
        case 11:
          return 4;
        case 5:
        case 10:
        case 12:
          return 8;
        default:
          return 0;
      }
    })(o), f = i2.nextUInt32(), p = s * f;
    if (p > 4 && (i2 = e2.openWithOffset(i2.nextUInt32())), 2 === o) {
      var m = (a2 = i2.nextString(f)).indexOf("\0");
      -1 !== m && (a2 = a2.substr(0, m));
    } else if (7 === o) a2 = i2.nextBuffer(f);
    else if (0 !== o) for (a2 = [], n = 0; n < f; ++n) a2.push(t(o, i2));
    return p < 4 && i2.skip(4 - p), [r, a2, o];
  }
  function a(e2, t2, a2) {
    var n, r, o = t2.nextUInt16();
    for (r = 0; r < o; ++r) a2((n = i(e2, t2))[0], n[1], n[2]);
  }
  e.exports = { IFD0: 1, IFD1: 2, GPSIFD: 3, SubIFD: 4, InteropIFD: 5, parseTags: function(e2, t2) {
    var i2, n, r, o;
    try {
      i2 = (function(e3) {
        if ("Exif\0\0" !== e3.nextString(6)) throw new Error("Invalid EXIF header");
        var t3 = e3.mark(), i3 = e3.nextUInt16();
        if (18761 === i3) e3.setBigEndian(false);
        else {
          if (19789 !== i3) throw new Error("Invalid TIFF header");
          e3.setBigEndian(true);
        }
        if (42 !== e3.nextUInt16()) throw new Error("Invalid TIFF data");
        return t3;
      })(e2);
    } catch (e3) {
      return false;
    }
    var s = i2.openWithOffset(e2.nextUInt32()), f = this.IFD0;
    a(i2, s, function(e3, i3, a2) {
      switch (e3) {
        case 34853:
          r = i3[0];
          break;
        case 34665:
          n = i3[0];
          break;
        default:
          t2(f, e3, i3, a2);
      }
    });
    var p = s.nextUInt32();
    if (0 !== p) {
      var m = i2.openWithOffset(p);
      a(i2, m, t2.bind(null, this.IFD1));
    }
    if (r) {
      var l = i2.openWithOffset(r);
      a(i2, l, t2.bind(null, this.GPSIFD));
    }
    if (n) {
      var c = i2.openWithOffset(n), u = this.InteropIFD;
      a(i2, c, function(e3, i3, a2) {
        40965 === e3 ? o = i3[0] : t2(u, e3, i3, a2);
      });
    }
    if (o) {
      var d = i2.openWithOffset(o);
      a(i2, d, t2.bind(null, this.InteropIFD));
    }
    return true;
  } };
}