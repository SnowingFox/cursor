// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 5822 range:779209..782613
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5822: (e2, a2) => {
    "use strict";
    function n2(e3, n3) {
      const t3 = s2(e3);
      return n3 ? t3 : (0, a2.safeObjectProperty)(d(t3));
    }
    function t2(e3) {
      return n2(e3, false);
    }
    function s2(e3) {
      let a3 = false;
      const n3 = [];
      for (let t3 = 0; t3 < e3.length; t3++) {
        let s3 = e3.charAt(t3);
        switch (s3) {
          case "_":
            a3 = true;
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
            n3.push(s3), a3 = false;
            break;
          default:
            a3 && (a3 = false, s3 = s3.toUpperCase()), n3.push(s3);
        }
      }
      return n3.join("");
    }
    Object.defineProperty(a2, "__esModule", { value: true }), a2.safeIdentifier = a2.safeObjectProperty = a2.findEnumSharedPrefix = a2.fieldJsonName = a2.localOneofName = a2.localFieldName = a2.localName = void 0, a2.localName = function(e3) {
      switch (e3.kind) {
        case "field":
          return n2(e3.name, void 0 !== e3.oneof);
        case "oneof":
          return t2(e3.name);
        case "enum":
        case "message":
        case "service":
        case "extension": {
          const n3 = e3.file.proto.package, t3 = void 0 === n3 ? 0 : n3.length + 1, s3 = e3.typeName.substring(t3).replace(/\./g, "_");
          return (0, a2.safeObjectProperty)((0, a2.safeIdentifier)(s3));
        }
        case "enum_value": {
          let n3 = e3.name;
          const t3 = e3.parent.sharedPrefix;
          return void 0 !== t3 && (n3 = n3.substring(t3.length)), (0, a2.safeObjectProperty)(n3);
        }
        case "rpc": {
          let n3 = e3.name;
          return 0 == n3.length ? n3 : (n3 = n3[0].toLowerCase() + n3.substring(1), (0, a2.safeObjectProperty)(n3));
        }
      }
    }, a2.localFieldName = n2, a2.localOneofName = t2, a2.fieldJsonName = s2, a2.findEnumSharedPrefix = function(e3, a3) {
      const n3 = ((t3 = e3).substring(0, 1) + t3.substring(1).replace(/[A-Z]/g, (e4) => "_" + e4)).toLowerCase() + "_";
      var t3;
      for (const e4 of a3) {
        if (!e4.toLowerCase().startsWith(n3)) return;
        const a4 = e4.substring(n3.length);
        if (0 == a4.length) return;
        if (/^\d/.test(a4)) return;
      }
      return n3;
    };
    const o2 = /* @__PURE__ */ new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield", "enum", "implements", "interface", "let", "package", "private", "protected", "public", "static", "Object", "bigint", "number", "boolean", "string", "object", "globalThis", "Uint8Array", "Partial"]), r2 = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), i2 = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), l = (e3) => `${e3}$`, d = (e3) => i2.has(e3) ? l(e3) : e3;
    a2.safeObjectProperty = (e3) => r2.has(e3) ? l(e3) : e3;
    a2.safeIdentifier = (e3) => o2.has(e3) ? l(e3) : e3;
  }