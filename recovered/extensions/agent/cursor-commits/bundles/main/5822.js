// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 5822 range:472814..476218
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5822: (e2, n2) => {
    "use strict";
    function a2(e3, a3) {
      const t3 = s2(e3);
      return a3 ? t3 : (0, n2.safeObjectProperty)(l(t3));
    }
    function t2(e3) {
      return a2(e3, false);
    }
    function s2(e3) {
      let n3 = false;
      const a3 = [];
      for (let t3 = 0; t3 < e3.length; t3++) {
        let s3 = e3.charAt(t3);
        switch (s3) {
          case "_":
            n3 = true;
            break;
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            a3.push(s3), n3 = false;
            break;
          default:
            n3 && (n3 = false, s3 = s3.toUpperCase()), a3.push(s3);
        }
      }
      return a3.join("");
    }
    Object.defineProperty(n2, "__esModule", { value: true }), n2.safeIdentifier = n2.safeObjectProperty = n2.findEnumSharedPrefix = n2.fieldJsonName = n2.localOneofName = n2.localFieldName = n2.localName = void 0, n2.localName = function(e3) {
      switch (e3.kind) {
        case "field":
          return a2(e3.name, void 0 !== e3.oneof);
        case "oneof":
          return t2(e3.name);
        case "enum":
        case "message":
        case "service":
        case "extension": {
          const a3 = e3.file.proto.package, t3 = void 0 === a3 ? 0 : a3.length + 1, s3 = e3.typeName.substring(t3).replace(/\./g, "_");
          return (0, n2.safeObjectProperty)((0, n2.safeIdentifier)(s3));
        }
        case "enum_value": {
          let a3 = e3.name;
          const t3 = e3.parent.sharedPrefix;
          return void 0 !== t3 && (a3 = a3.substring(t3.length)), (0, n2.safeObjectProperty)(a3);
        }
        case "rpc": {
          let a3 = e3.name;
          return 0 == a3.length ? a3 : (a3 = a3[0].toLowerCase() + a3.substring(1), (0, n2.safeObjectProperty)(a3));
        }
      }
    }, n2.localFieldName = a2, n2.localOneofName = t2, n2.fieldJsonName = s2, n2.findEnumSharedPrefix = function(e3, n3) {
      const a3 = ((t3 = e3).substring(0, 1) + t3.substring(1).replace(/[A-Z]/g, (e4) => "_" + e4)).toLowerCase() + "_";
      var t3;
      for (const e4 of n3) {
        if (!e4.toLowerCase().startsWith(a3)) return;
        const n4 = e4.substring(a3.length);
        if (0 == n4.length) return;
        if (/^\d/.test(n4)) return;
      }
      return a3;
    };
    const o2 = /* @__PURE__ */ new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield", "enum", "implements", "interface", "let", "package", "private", "protected", "public", "static", "Object", "bigint", "number", "boolean", "string", "object", "globalThis", "Uint8Array", "Partial"]), r2 = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), i2 = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), A = (e3) => `${e3}$`, l = (e3) => i2.has(e3) ? A(e3) : e3;
    n2.safeObjectProperty = (e3) => r2.has(e3) ? A(e3) : e3;
    n2.safeIdentifier = (e3) => o2.has(e3) ? A(e3) : e3;
  }