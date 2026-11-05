// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 5822 range:503662..507062
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5822: (e2, n2) => {
    "use strict";
    function t2(e3, t3) {
      const a3 = s2(e3);
      return t3 ? a3 : (0, n2.safeObjectProperty)(c(a3));
    }
    function a2(e3) {
      return t2(e3, false);
    }
    function s2(e3) {
      let n3 = false;
      const t3 = [];
      for (let a3 = 0; a3 < e3.length; a3++) {
        let s3 = e3.charAt(a3);
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
            t3.push(s3), n3 = false;
            break;
          default:
            n3 && (n3 = false, s3 = s3.toUpperCase()), t3.push(s3);
        }
      }
      return t3.join("");
    }
    Object.defineProperty(n2, "__esModule", { value: true }), n2.safeIdentifier = n2.safeObjectProperty = n2.findEnumSharedPrefix = n2.fieldJsonName = n2.localOneofName = n2.localFieldName = n2.localName = void 0, n2.localName = function(e3) {
      switch (e3.kind) {
        case "field":
          return t2(e3.name, void 0 !== e3.oneof);
        case "oneof":
          return a2(e3.name);
        case "enum":
        case "message":
        case "service":
        case "extension": {
          const t3 = e3.file.proto.package, a3 = void 0 === t3 ? 0 : t3.length + 1, s3 = e3.typeName.substring(a3).replace(/\./g, "_");
          return (0, n2.safeObjectProperty)((0, n2.safeIdentifier)(s3));
        }
        case "enum_value": {
          let t3 = e3.name;
          const a3 = e3.parent.sharedPrefix;
          return void 0 !== a3 && (t3 = t3.substring(a3.length)), (0, n2.safeObjectProperty)(t3);
        }
        case "rpc": {
          let t3 = e3.name;
          return 0 == t3.length ? t3 : (t3 = t3[0].toLowerCase() + t3.substring(1), (0, n2.safeObjectProperty)(t3));
        }
      }
    }, n2.localFieldName = t2, n2.localOneofName = a2, n2.fieldJsonName = s2, n2.findEnumSharedPrefix = function(e3, n3) {
      const t3 = ((a3 = e3).substring(0, 1) + a3.substring(1).replace(/[A-Z]/g, (e4) => "_" + e4)).toLowerCase() + "_";
      var a3;
      for (const e4 of n3) {
        if (!e4.toLowerCase().startsWith(t3)) return;
        const n4 = e4.substring(t3.length);
        if (0 == n4.length) return;
        if (/^\d/.test(n4)) return;
      }
      return t3;
    };
    const o2 = /* @__PURE__ */ new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield", "enum", "implements", "interface", "let", "package", "private", "protected", "public", "static", "Object", "bigint", "number", "boolean", "string", "object", "globalThis", "Uint8Array", "Partial"]), r = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), i = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), A = (e3) => `${e3}$`, c = (e3) => i.has(e3) ? A(e3) : e3;
    n2.safeObjectProperty = (e3) => r.has(e3) ? A(e3) : e3;
    n2.safeIdentifier = (e3) => o2.has(e3) ? A(e3) : e3;
  }