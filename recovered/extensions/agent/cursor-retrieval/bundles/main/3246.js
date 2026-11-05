// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 3246 range:593435..599655
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3246: (e2, a2, n2) => {
    "use strict";
    var t2 = n2(4876), s2 = n2(1749), o2 = { TRANSITIONAL: 0, NONTRANSITIONAL: 1 };
    function r2(e3) {
      return e3.split("\0").map(function(e4) {
        return e4.normalize("NFC");
      }).join("\0");
    }
    function i2(e3) {
      for (var a3 = 0, n3 = s2.length - 1; a3 <= n3; ) {
        var t3 = Math.floor((a3 + n3) / 2), o3 = s2[t3];
        if (o3[0][0] <= e3 && o3[0][1] >= e3) return o3;
        o3[0][0] > e3 ? n3 = t3 - 1 : a3 = t3 + 1;
      }
      return null;
    }
    var l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    function d(e3) {
      return e3.replace(l, "_").length;
    }
    var m = /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDE2C-\uDE37\uDEDF-\uDEEA\uDF01-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDE30-\uDE40\uDEAB-\uDEB7]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD83A[\uDCD0-\uDCD6]|\uDB40[\uDD00-\uDDEF]/;
    function c(e3, a3) {
      "xn--" === e3.substr(0, 4) && (e3 = t2.toUnicode(e3));
      var n3 = false;
      (r2(e3) !== e3 || "-" === e3[3] && "-" === e3[4] || "-" === e3[0] || "-" === e3[e3.length - 1] || -1 !== e3.indexOf(".") || 0 === e3.search(m)) && (n3 = true);
      for (var s3 = d(e3), l2 = 0; l2 < s3; ++l2) {
        var c2 = i2(e3.codePointAt(l2));
        if (p === o2.TRANSITIONAL && "valid" !== c2[1] || p === o2.NONTRANSITIONAL && "valid" !== c2[1] && "deviation" !== c2[1]) {
          n3 = true;
          break;
        }
      }
      return { label: e3, error: n3 };
    }
    function p(e3, a3, n3) {
      var t3 = (function(e4, a4, n4) {
        for (var t4 = false, s4 = "", r3 = d(e4), l3 = 0; l3 < r3; ++l3) {
          var m3 = e4.codePointAt(l3), c2 = i2(m3);
          switch (c2[1]) {
            case "disallowed":
              t4 = true, s4 += String.fromCodePoint(m3);
              break;
            case "ignored":
              break;
            case "mapped":
              s4 += String.fromCodePoint.apply(String, c2[2]);
              break;
            case "deviation":
              s4 += n4 === o2.TRANSITIONAL ? String.fromCodePoint.apply(String, c2[2]) : String.fromCodePoint(m3);
              break;
            case "valid":
              s4 += String.fromCodePoint(m3);
              break;
            case "disallowed_STD3_mapped":
              a4 ? (t4 = true, s4 += String.fromCodePoint(m3)) : s4 += String.fromCodePoint.apply(String, c2[2]);
              break;
            case "disallowed_STD3_valid":
              a4 && (t4 = true), s4 += String.fromCodePoint(m3);
          }
        }
        return { string: s4, error: t4 };
      })(e3, a3, n3);
      t3.string = r2(t3.string);
      for (var s3 = t3.string.split("."), l2 = 0; l2 < s3.length; ++l2) try {
        var m2 = c(s3[l2]);
        s3[l2] = m2.label, t3.error = t3.error || m2.error;
      } catch (e4) {
        t3.error = true;
      }
      return { string: s3.join("."), error: t3.error };
    }
    e2.exports.toASCII = function(e3, a3, n3, s3) {
      var o3 = p(e3, a3, n3), r3 = o3.string.split(".");
      if (r3 = r3.map(function(e4) {
        try {
          return t2.toASCII(e4);
        } catch (a4) {
          return o3.error = true, e4;
        }
      }), s3) {
        var i3 = r3.slice(0, r3.length - 1).join(".").length;
        (i3.length > 253 || 0 === i3.length) && (o3.error = true);
        for (var l2 = 0; l2 < r3.length; ++l2) if (r3.length > 63 || 0 === r3.length) {
          o3.error = true;
          break;
        }
      }
      return o3.error ? null : r3.join(".");
    }, e2.exports.toUnicode = function(e3, a3) {
      var n3 = p(e3, a3, o2.NONTRANSITIONAL);
      return { domain: n3.string, error: n3.error };
    }, e2.exports.PROCESSING_OPTIONS = o2;
  }