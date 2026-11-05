// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 5822 range:472336..475736
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5822: (e2, A2) => {
    "use strict";
    function t2(e3, t3) {
      const n3 = r2(e3);
      return t3 ? n3 : (0, A2.safeObjectProperty)(c(n3));
    }
    function n2(e3) {
      return t2(e3, false);
    }
    function r2(e3) {
      let A3 = false;
      const t3 = [];
      for (let n3 = 0; n3 < e3.length; n3++) {
        let r3 = e3.charAt(n3);
        switch (r3) {
          case "_":
            A3 = true;
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
            t3.push(r3), A3 = false;
            break;
          default:
            A3 && (A3 = false, r3 = r3.toUpperCase()), t3.push(r3);
        }
      }
      return t3.join("");
    }
    Object.defineProperty(A2, "__esModule", { value: true }), A2.safeIdentifier = A2.safeObjectProperty = A2.findEnumSharedPrefix = A2.fieldJsonName = A2.localOneofName = A2.localFieldName = A2.localName = void 0, A2.localName = function(e3) {
      switch (e3.kind) {
        case "field":
          return t2(e3.name, void 0 !== e3.oneof);
        case "oneof":
          return n2(e3.name);
        case "enum":
        case "message":
        case "service":
        case "extension": {
          const t3 = e3.file.proto.package, n3 = void 0 === t3 ? 0 : t3.length + 1, r3 = e3.typeName.substring(n3).replace(/\./g, "_");
          return (0, A2.safeObjectProperty)((0, A2.safeIdentifier)(r3));
        }
        case "enum_value": {
          let t3 = e3.name;
          const n3 = e3.parent.sharedPrefix;
          return void 0 !== n3 && (t3 = t3.substring(n3.length)), (0, A2.safeObjectProperty)(t3);
        }
        case "rpc": {
          let t3 = e3.name;
          return 0 == t3.length ? t3 : (t3 = t3[0].toLowerCase() + t3.substring(1), (0, A2.safeObjectProperty)(t3));
        }
      }
    }, A2.localFieldName = t2, A2.localOneofName = n2, A2.fieldJsonName = r2, A2.findEnumSharedPrefix = function(e3, A3) {
      const t3 = ((n3 = e3).substring(0, 1) + n3.substring(1).replace(/[A-Z]/g, (e4) => "_" + e4)).toLowerCase() + "_";
      var n3;
      for (const e4 of A3) {
        if (!e4.toLowerCase().startsWith(t3)) return;
        const A4 = e4.substring(t3.length);
        if (0 == A4.length) return;
        if (/^\d/.test(A4)) return;
      }
      return t3;
    };
    const o2 = /* @__PURE__ */ new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield", "enum", "implements", "interface", "let", "package", "private", "protected", "public", "static", "Object", "bigint", "number", "boolean", "string", "object", "globalThis", "Uint8Array", "Partial"]), s = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), a = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), i = (e3) => `${e3}$`, c = (e3) => a.has(e3) ? i(e3) : e3;
    A2.safeObjectProperty = (e3) => s.has(e3) ? i(e3) : e3;
    A2.safeIdentifier = (e3) => o2.has(e3) ? i(e3) : e3;
  }