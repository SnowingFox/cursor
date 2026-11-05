// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 5822 range:580008..583408
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5822: (e2, t2) => {
    "use strict";
    function A2(e3, A3) {
      const n3 = r2(e3);
      return A3 ? n3 : (0, t2.safeObjectProperty)(c(n3));
    }
    function n2(e3) {
      return A2(e3, false);
    }
    function r2(e3) {
      let t3 = false;
      const A3 = [];
      for (let n3 = 0; n3 < e3.length; n3++) {
        let r3 = e3.charAt(n3);
        switch (r3) {
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
            A3.push(r3), t3 = false;
            break;
          default:
            t3 && (t3 = false, r3 = r3.toUpperCase()), A3.push(r3);
        }
      }
      return A3.join("");
    }
    Object.defineProperty(t2, "__esModule", { value: true }), t2.safeIdentifier = t2.safeObjectProperty = t2.findEnumSharedPrefix = t2.fieldJsonName = t2.localOneofName = t2.localFieldName = t2.localName = void 0, t2.localName = function(e3) {
      switch (e3.kind) {
        case "field":
          return A2(e3.name, void 0 !== e3.oneof);
        case "oneof":
          return n2(e3.name);
        case "enum":
        case "message":
        case "service":
        case "extension": {
          const A3 = e3.file.proto.package, n3 = void 0 === A3 ? 0 : A3.length + 1, r3 = e3.typeName.substring(n3).replace(/\./g, "_");
          return (0, t2.safeObjectProperty)((0, t2.safeIdentifier)(r3));
        }
        case "enum_value": {
          let A3 = e3.name;
          const n3 = e3.parent.sharedPrefix;
          return void 0 !== n3 && (A3 = A3.substring(n3.length)), (0, t2.safeObjectProperty)(A3);
        }
        case "rpc": {
          let A3 = e3.name;
          return 0 == A3.length ? A3 : (A3 = A3[0].toLowerCase() + A3.substring(1), (0, t2.safeObjectProperty)(A3));
        }
      }
    }, t2.localFieldName = A2, t2.localOneofName = n2, t2.fieldJsonName = r2, t2.findEnumSharedPrefix = function(e3, t3) {
      const A3 = ((n3 = e3).substring(0, 1) + n3.substring(1).replace(/[A-Z]/g, (e4) => "_" + e4)).toLowerCase() + "_";
      var n3;
      for (const e4 of t3) {
        if (!e4.toLowerCase().startsWith(A3)) return;
        const t4 = e4.substring(A3.length);
        if (0 == t4.length) return;
        if (/^\d/.test(t4)) return;
      }
      return A3;
    };
    const o2 = /* @__PURE__ */ new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield", "enum", "implements", "interface", "let", "package", "private", "protected", "public", "static", "Object", "bigint", "number", "boolean", "string", "object", "globalThis", "Uint8Array", "Partial"]), s = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), i = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), a = (e3) => `${e3}$`, c = (e3) => i.has(e3) ? a(e3) : e3;
    t2.safeObjectProperty = (e3) => s.has(e3) ? a(e3) : e3;
    t2.safeIdentifier = (e3) => o2.has(e3) ? a(e3) : e3;
  }