// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5822 range:443469..446873
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5822: (e2, t2) => {
    "use strict";
    function r2(e3, r3) {
      const n3 = o2(e3);
      return r3 ? n3 : (0, t2.safeObjectProperty)(u(n3));
    }
    function n2(e3) {
      return r2(e3, false);
    }
    function o2(e3) {
      let t3 = false;
      const r3 = [];
      for (let n3 = 0; n3 < e3.length; n3++) {
        let o3 = e3.charAt(n3);
        switch (o3) {
          case "_":
            t3 = true;
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
            r3.push(o3), t3 = false;
            break;
          default:
            t3 && (t3 = false, o3 = o3.toUpperCase()), r3.push(o3);
        }
      }
      return r3.join("");
    }
    Object.defineProperty(t2, "__esModule", { value: true }), t2.safeIdentifier = t2.safeObjectProperty = t2.findEnumSharedPrefix = t2.fieldJsonName = t2.localOneofName = t2.localFieldName = t2.localName = void 0, t2.localName = function(e3) {
      switch (e3.kind) {
        case "field":
          return r2(e3.name, void 0 !== e3.oneof);
        case "oneof":
          return n2(e3.name);
        case "enum":
        case "message":
        case "service":
        case "extension": {
          const r3 = e3.file.proto.package, n3 = void 0 === r3 ? 0 : r3.length + 1, o3 = e3.typeName.substring(n3).replace(/\./g, "_");
          return (0, t2.safeObjectProperty)((0, t2.safeIdentifier)(o3));
        }
        case "enum_value": {
          let r3 = e3.name;
          const n3 = e3.parent.sharedPrefix;
          return void 0 !== n3 && (r3 = r3.substring(n3.length)), (0, t2.safeObjectProperty)(r3);
        }
        case "rpc": {
          let r3 = e3.name;
          return 0 == r3.length ? r3 : (r3 = r3[0].toLowerCase() + r3.substring(1), (0, t2.safeObjectProperty)(r3));
        }
      }
    }, t2.localFieldName = r2, t2.localOneofName = n2, t2.fieldJsonName = o2, t2.findEnumSharedPrefix = function(e3, t3) {
      const r3 = ((n3 = e3).substring(0, 1) + n3.substring(1).replace(/[A-Z]/g, (e4) => "_" + e4)).toLowerCase() + "_";
      var n3;
      for (const e4 of t3) {
        if (!e4.toLowerCase().startsWith(r3)) return;
        const t4 = e4.substring(r3.length);
        if (0 == t4.length) return;
        if (/^\d/.test(t4)) return;
      }
      return r3;
    };
    const s2 = /* @__PURE__ */ new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield", "enum", "implements", "interface", "let", "package", "private", "protected", "public", "static", "Object", "bigint", "number", "boolean", "string", "object", "globalThis", "Uint8Array", "Partial"]), i2 = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), a2 = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), c = (e3) => `${e3}$`, u = (e3) => a2.has(e3) ? c(e3) : e3;
    t2.safeObjectProperty = (e3) => i2.has(e3) ? c(e3) : e3;
    t2.safeIdentifier = (e3) => s2.has(e3) ? c(e3) : e3;
  }