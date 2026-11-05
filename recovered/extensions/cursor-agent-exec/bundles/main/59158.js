// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 59158 range:4703515..4706719
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
59158: (e, t, r) => {
    "use strict";
    var n, s = r(30129).Buffer, o = r(45232), i = r(53710), a = e.exports;
    a.encodings = null, a.defaultCharUnicode = "�", a.defaultCharSingleByte = "?", a.encode = function(e2, t2, r2) {
      e2 = "" + (e2 || "");
      var n2 = a.getEncoder(t2, r2), o2 = n2.write(e2), i2 = n2.end();
      return i2 && i2.length > 0 ? s.concat([o2, i2]) : o2;
    }, a.decode = function(e2, t2, r2) {
      "string" == typeof e2 && (a.skipDecodeWarning || (console.error("Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding"), a.skipDecodeWarning = true), e2 = s.from("" + (e2 || ""), "binary"));
      var n2 = a.getDecoder(t2, r2), o2 = n2.write(e2), i2 = n2.end();
      return i2 ? o2 + i2 : o2;
    }, a.encodingExists = function(e2) {
      try {
        return a.getCodec(e2), true;
      } catch (e3) {
        return false;
      }
    }, a.toEncoding = a.encode, a.fromEncoding = a.decode, a._codecDataCache = { __proto__: null }, a.getCodec = function(e2) {
      if (!a.encodings) {
        var t2 = r(58999);
        a.encodings = { __proto__: null }, i(a.encodings, t2);
      }
      for (var n2 = a._canonicalizeEncoding(e2), s2 = {}; ; ) {
        var o2 = a._codecDataCache[n2];
        if (o2) return o2;
        var c = a.encodings[n2];
        switch (typeof c) {
          case "string":
            n2 = c;
            break;
          case "object":
            for (var l in c) s2[l] = c[l];
            s2.encodingName || (s2.encodingName = n2), n2 = c.type;
            break;
          case "function":
            return s2.encodingName || (s2.encodingName = n2), o2 = new c(s2, a), a._codecDataCache[s2.encodingName] = o2, o2;
          default:
            throw new Error("Encoding not recognized: '" + e2 + "' (searched as: '" + n2 + "')");
        }
      }
    }, a._canonicalizeEncoding = function(e2) {
      return ("" + e2).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
    }, a.getEncoder = function(e2, t2) {
      var r2 = a.getCodec(e2), n2 = new r2.encoder(t2, r2);
      return r2.bomAware && t2 && t2.addBOM && (n2 = new o.PrependBOM(n2, t2)), n2;
    }, a.getDecoder = function(e2, t2) {
      var r2 = a.getCodec(e2), n2 = new r2.decoder(t2, r2);
      return !r2.bomAware || t2 && false === t2.stripBOM || (n2 = new o.StripBOM(n2, t2)), n2;
    }, a.enableStreamingAPI = function(e2) {
      if (!a.supportsStreams) {
        var t2 = r(65819)(e2);
        a.IconvLiteEncoderStream = t2.IconvLiteEncoderStream, a.IconvLiteDecoderStream = t2.IconvLiteDecoderStream, a.encodeStream = function(e3, t3) {
          return new a.IconvLiteEncoderStream(a.getEncoder(e3, t3), t3);
        }, a.decodeStream = function(e3, t3) {
          return new a.IconvLiteDecoderStream(a.getDecoder(e3, t3), t3);
        }, a.supportsStreams = true;
      }
    };
    try {
      n = r(2203);
    } catch (e2) {
    }
    n && n.Transform ? a.enableStreamingAPI(n) : a.encodeStream = a.decodeStream = function() {
      throw new Error("iconv-lite Streaming API is not enabled. Use iconv.enableStreamingAPI(require('stream')); to enable it.");
    };
  }