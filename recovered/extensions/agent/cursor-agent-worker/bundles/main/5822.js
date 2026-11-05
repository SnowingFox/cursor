// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 5822 range:171290..174821
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5822: (e10, a10) => {
    function n10(e11, n11) {
      const s11 = o10(e11);
      return n11 ? s11 : (0, a10.safeObjectProperty)(l10(s11));
    }
    function s10(e11) {
      return n10(e11, false);
    }
    function o10(e11) {
      let a11 = false;
      const n11 = [];
      for (let s11 = 0; s11 < e11.length; s11++) {
        let o11 = e11.charAt(s11);
        switch (o11) {
          case "_":
            a11 = true;
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
            n11.push(o11), a11 = false;
            break;
          default:
            a11 && (a11 = false, o11 = o11.toUpperCase()), n11.push(o11);
        }
      }
      return n11.join("");
    }
    Object.defineProperty(a10, "__esModule", { value: true }), a10.safeIdentifier = a10.safeObjectProperty = a10.findEnumSharedPrefix = a10.fieldJsonName = a10.localOneofName = a10.localFieldName = a10.localName = void 0, a10.localName = function(e11) {
      switch (e11.kind) {
        case "field":
          return n10(e11.name, void 0 !== e11.oneof);
        case "oneof":
          return s10(e11.name);
        case "enum":
        case "message":
        case "service":
        case "extension": {
          const n11 = e11.file.proto.package, s11 = void 0 === n11 ? 0 : n11.length + 1, o11 = e11.typeName.substring(s11).replace(/\./g, "_");
          return (0, a10.safeObjectProperty)((0, a10.safeIdentifier)(o11));
        }
        case "enum_value": {
          let n11 = e11.name;
          const s11 = e11.parent.sharedPrefix;
          return void 0 !== s11 && (n11 = n11.substring(s11.length)), (0, a10.safeObjectProperty)(n11);
        }
        case "rpc": {
          let n11 = e11.name;
          return 0 == n11.length ? n11 : (n11 = n11[0].toLowerCase() + n11.substring(1), (0, a10.safeObjectProperty)(n11));
        }
      }
    }, a10.localFieldName = n10, a10.localOneofName = s10, a10.fieldJsonName = o10, a10.findEnumSharedPrefix = function(e11, a11) {
      const n11 = ((s11 = e11).substring(0, 1) + s11.substring(1).replace(/[A-Z]/g, (e12) => "_" + e12)).toLowerCase() + "_";
      var s11;
      for (const e12 of a11) {
        if (!e12.toLowerCase().startsWith(n11)) return;
        const a12 = e12.substring(n11.length);
        if (0 == a12.length) return;
        if (/^\d/.test(a12)) return;
      }
      return n11;
    };
    const r10 = /* @__PURE__ */ new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield", "enum", "implements", "interface", "let", "package", "private", "protected", "public", "static", "Object", "bigint", "number", "boolean", "string", "object", "globalThis", "Uint8Array", "Partial"]), t10 = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), i10 = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), m10 = (e11) => `${e11}$`, l10 = (e11) => i10.has(e11) ? m10(e11) : e11;
    a10.safeObjectProperty = (e11) => t10.has(e11) ? m10(e11) : e11;
    a10.safeIdentifier = (e11) => r10.has(e11) ? m10(e11) : e11;
  }