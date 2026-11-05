// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5822 range:1336933..1340335
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5822: (t2, e2) => {
    "use strict";
    function r2(t3, r3) {
      const n3 = s2(t3);
      return r3 ? n3 : (0, e2.safeObjectProperty)(c(n3));
    }
    function n2(t3) {
      return r2(t3, false);
    }
    function s2(t3) {
      let e3 = false;
      const r3 = [];
      for (let n3 = 0; n3 < t3.length; n3++) {
        let s3 = t3.charAt(n3);
        switch (s3) {
          case "_":
            e3 = true;
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
            r3.push(s3), e3 = false;
            break;
          default:
            e3 && (e3 = false, s3 = s3.toUpperCase()), r3.push(s3);
        }
      }
      return r3.join("");
    }
    Object.defineProperty(e2, "__esModule", { value: true }), e2.safeIdentifier = e2.safeObjectProperty = e2.findEnumSharedPrefix = e2.fieldJsonName = e2.localOneofName = e2.localFieldName = e2.localName = void 0, e2.localName = function(t3) {
      switch (t3.kind) {
        case "field":
          return r2(t3.name, void 0 !== t3.oneof);
        case "oneof":
          return n2(t3.name);
        case "enum":
        case "message":
        case "service":
        case "extension": {
          const r3 = t3.file.proto.package, n3 = void 0 === r3 ? 0 : r3.length + 1, s3 = t3.typeName.substring(n3).replace(/\./g, "_");
          return (0, e2.safeObjectProperty)((0, e2.safeIdentifier)(s3));
        }
        case "enum_value": {
          let r3 = t3.name;
          const n3 = t3.parent.sharedPrefix;
          return void 0 !== n3 && (r3 = r3.substring(n3.length)), (0, e2.safeObjectProperty)(r3);
        }
        case "rpc": {
          let r3 = t3.name;
          return 0 == r3.length ? r3 : (r3 = r3[0].toLowerCase() + r3.substring(1), (0, e2.safeObjectProperty)(r3));
        }
      }
    }, e2.localFieldName = r2, e2.localOneofName = n2, e2.fieldJsonName = s2, e2.findEnumSharedPrefix = function(t3, e3) {
      const r3 = ((n3 = t3).substring(0, 1) + n3.substring(1).replace(/[A-Z]/g, (t4) => "_" + t4)).toLowerCase() + "_";
      var n3;
      for (const t4 of e3) {
        if (!t4.toLowerCase().startsWith(r3)) return;
        const e4 = t4.substring(r3.length);
        if (0 == e4.length) return;
        if (/^\d/.test(e4)) return;
      }
      return r3;
    };
    const i2 = /* @__PURE__ */ new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield", "enum", "implements", "interface", "let", "package", "private", "protected", "public", "static", "Object", "bigint", "number", "boolean", "string", "object", "globalThis", "Uint8Array", "Partial"]), o2 = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), a = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), u = (t3) => `${t3}$`, c = (t3) => a.has(t3) ? u(t3) : t3;
    e2.safeObjectProperty = (t3) => o2.has(t3) ? u(t3) : t3;
    e2.safeIdentifier = (t3) => i2.has(t3) ? u(t3) : t3;
  }