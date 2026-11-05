// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 75822 range:11209818..11213185
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
75822: (e, t) => {
    "use strict";
    function r(e2, r2) {
      const n2 = s(e2);
      return r2 ? n2 : (0, t.safeObjectProperty)(l(n2));
    }
    function n(e2) {
      return r(e2, false);
    }
    function s(e2) {
      let t2 = false;
      const r2 = [];
      for (let n2 = 0; n2 < e2.length; n2++) {
        let s2 = e2.charAt(n2);
        switch (s2) {
          case "_":
            t2 = true;
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
            r2.push(s2), t2 = false;
            break;
          default:
            t2 && (t2 = false, s2 = s2.toUpperCase()), r2.push(s2);
        }
      }
      return r2.join("");
    }
    Object.defineProperty(t, "__esModule", { value: true }), t.safeIdentifier = t.safeObjectProperty = t.findEnumSharedPrefix = t.fieldJsonName = t.localOneofName = t.localFieldName = t.localName = void 0, t.localName = function(e2) {
      switch (e2.kind) {
        case "field":
          return r(e2.name, void 0 !== e2.oneof);
        case "oneof":
          return n(e2.name);
        case "enum":
        case "message":
        case "service":
        case "extension": {
          const r2 = e2.file.proto.package, n2 = void 0 === r2 ? 0 : r2.length + 1, s2 = e2.typeName.substring(n2).replace(/\./g, "_");
          return (0, t.safeObjectProperty)((0, t.safeIdentifier)(s2));
        }
        case "enum_value": {
          let r2 = e2.name;
          const n2 = e2.parent.sharedPrefix;
          return void 0 !== n2 && (r2 = r2.substring(n2.length)), (0, t.safeObjectProperty)(r2);
        }
        case "rpc": {
          let r2 = e2.name;
          return 0 == r2.length ? r2 : (r2 = r2[0].toLowerCase() + r2.substring(1), (0, t.safeObjectProperty)(r2));
        }
      }
    }, t.localFieldName = r, t.localOneofName = n, t.fieldJsonName = s, t.findEnumSharedPrefix = function(e2, t2) {
      const r2 = ((n2 = e2).substring(0, 1) + n2.substring(1).replace(/[A-Z]/g, (e3) => "_" + e3)).toLowerCase() + "_";
      var n2;
      for (const e3 of t2) {
        if (!e3.toLowerCase().startsWith(r2)) return;
        const t3 = e3.substring(r2.length);
        if (0 == t3.length) return;
        if (/^\d/.test(t3)) return;
      }
      return r2;
    };
    const o = /* @__PURE__ */ new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield", "enum", "implements", "interface", "let", "package", "private", "protected", "public", "static", "Object", "bigint", "number", "boolean", "string", "object", "globalThis", "Uint8Array", "Partial"]), i = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), a = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), c = (e2) => `${e2}$`, l = (e2) => a.has(e2) ? c(e2) : e2;
    t.safeObjectProperty = (e2) => i.has(e2) ? c(e2) : e2;
    t.safeIdentifier = (e2) => o.has(e2) ? c(e2) : e2;
  }