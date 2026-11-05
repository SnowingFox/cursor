// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 77099 range:11275435..11302513
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77099: (e, t, r) => {
    "use strict";
    r.d(t, { uz: () => Je, bm: () => Pe, U$: () => Re, ME: () => n.MEY, SW: () => a, Y: () => n.YaX, _o: () => Be, _N: () => n._NE });
    var n = r(51108), s = r(77598), o = r(51455), i = r(76760);
    "function" == typeof SuppressedError && SuppressedError;
    Error;
    Error;
    "function" == typeof SuppressedError && SuppressedError;
    function a(e2) {
      const t2 = e2;
      if (!t2.resource || "object" != typeof t2.resource) return t2.uri ? `Resource: ${t2.uri}${t2.name ? ` (${t2.name})` : ""}` : `Unsupported content type "${e2.type}": ${JSON.stringify(e2)}`;
      {
        const e3 = t2.resource;
        if ("string" == typeof e3.text) return e3.text;
        if ("string" != typeof e3.blob) return `Resource: ${e3.uri ?? "unknown"}${e3.name ? ` (${e3.name})` : ""}`;
        try {
          return Buffer.from(e3.blob, "base64").toString("utf8");
        } catch {
          return `[Binary resource: ${e3.uri ?? "unknown"}]`;
        }
      }
    }
    var c = r(47381), l = r(25521), u = r(7246), d = r(87888), p = r(4287);
    const m = c.xI("ZodMiniType", (e2, t2) => {
      if (!e2._zod) throw new Error("Uninitialized schema in ZodMiniType.");
      l.W4.init(e2, t2), e2.def = t2, e2.parse = (t3, r2) => p.qg(e2, t3, r2, { callee: e2.parse }), e2.safeParse = (t3, r2) => p.xL(e2, t3, r2), e2.parseAsync = async (t3, r2) => p.EJ(e2, t3, r2, { callee: e2.parseAsync }), e2.safeParseAsync = async (t3, r2) => p.bp(e2, t3, r2), e2.check = (...r2) => e2.clone({ ...t2, checks: [...t2.checks ?? [], ...r2.map((e3) => "function" == typeof e3 ? { _zod: { check: e3, def: { check: "custom" }, onattach: [] } } : e3)] }), e2.clone = (t3, r2) => u.o8(e2, t3, r2), e2.brand = () => e2, e2.register = (t3, r2) => (t3.add(e2, r2), e2);
    }), h = c.xI("ZodMiniString", (e2, t2) => {
      l.$v.init(e2, t2), m.init(e2, t2);
    });
    function f(e2) {
      return d.Rl(h, e2);
    }
    const g = c.xI("ZodMiniNever", (e2, t2) => {
      l.Um.init(e2, t2), m.init(e2, t2);
    });
    function y(e2) {
      return d.G8(g, e2);
    }
    const w = c.xI("ZodMiniArray", (e2, t2) => {
      l.$p.init(e2, t2), m.init(e2, t2);
    });
    function v(e2, t2) {
      return new w({ type: "array", element: e2, ...u.A2(t2) });
    }
    const _ = c.xI("ZodMiniObject", (e2, t2) => {
      l.L8.init(e2, t2), m.init(e2, t2), u.gJ(e2, "shape", () => t2.shape);
    });
    function A(e2, t2) {
      const r2 = { type: "object", get shape() {
        return u.Vy(this, "shape", { ...e2 }), this.shape;
      }, ...u.A2(t2) };
      return new _(r2);
    }
    const S = c.xI("ZodMiniUnion", (e2, t2) => {
      l.cu.init(e2, t2), m.init(e2, t2);
    });
    function b(e2, t2) {
      return new S({ type: "union", options: e2, ...u.A2(t2) });
    }
    const E = c.xI("ZodMiniRecord", (e2, t2) => {
      l.h.init(e2, t2), m.init(e2, t2);
    });
    function I(e2, t2, r2) {
      return new E({ type: "record", keyType: e2, valueType: t2, ...u.A2(r2) });
    }
    const C = c.xI("ZodMiniEnum", (e2, t2) => {
      l.VO.init(e2, t2), m.init(e2, t2);
    });
    function k(e2, t2) {
      const r2 = Array.isArray(e2) ? Object.fromEntries(e2.map((e3) => [e3, e3])) : e2;
      return new C({ type: "enum", entries: r2, ...u.A2(t2) });
    }
    const x = c.xI("ZodMiniLiteral", (e2, t2) => {
      l.nu.init(e2, t2), m.init(e2, t2);
    });
    function T(e2, t2) {
      return new x({ type: "literal", values: Array.isArray(e2) ? e2 : [e2], ...u.A2(t2) });
    }
    const R = c.xI("ZodMiniOptional", (e2, t2) => {
      l.ig.init(e2, t2), m.init(e2, t2);
    });
    function B(e2) {
      return new R({ type: "optional", innerType: e2 });
    }
    const P = A({ CLIENT_ID: f(), CLIENT_SECRET: B(f()), scopes: B(v(f())) }), J = (M = { caBundle: f().check(d.WN(), d.m9(1), d.Eb(131072)) }, new _({ type: "object", get shape() {
      return u.Vy(this, "shape", { ...M }), this.shape;
    }, catchall: y(), ...u.A2(q) }));
    var M, q;
    const D = b([A({ type: B(T("stdio")), command: f(), args: B(v(f())), env: B(I(f(), f())), envFile: B(f()), cwd: B(f()), enabledTools: B(v(f())) }), A({ type: B(k(["http", "sse"])), url: f(), headers: B(I(f(), f())), auth: B(P), tls: B(J), placement: B(k(["server", "client"])), enabledTools: B(v(f())) })]);
    A({ mcpServers: I(f(), D) });
    Error;
    r(40283);
    r(48161);
    var O = r(37949), N = r(98875);
    r(65716);
    r(31421), r(61771), r(34175), r(73015), r(48891);
    r(59116);
    r(98483);
    var F = r(97712), U = r(90545);
    class L {
      constructor(e2) {
        this._ajv = e2 ?? (function() {
          const e3 = new F({ strict: false, validateFormats: true, validateSchema: false, allErrors: true });
          return U(e3), e3;
        })();
      }
      getValidator(e2) {
        const t2 = "$id" in e2 && "string" == typeof e2.$id ? this._ajv.getSchema(e2.$id) ?? this._ajv.compile(e2) : this._ajv.compile(e2);
        return (e3) => t2(e3) ? { valid: true, data: e3, errorMessage: void 0 } : { valid: false, data: void 0, errorMessage: this._ajv.errorsText(t2.errors) };
      }
    }
    class $ extends Error {
      constructor(e2, t2) {
        super(e2), this.name = "ParseError", this.type = t2.type, this.field = t2.field, this.value = t2.value, this.line = t2.line;
      }
    }
    const Q = 32;
    function j(e2) {
    }
    function G(e2) {
      if ("function" == typeof e2) throw new TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
      const { onEvent: t2 = j, onError: r2 = j, onRetry: n2 = j, onComment: s2 } = e2, o2 = [];
      let i2, a2, c2 = true, l2 = "", u2 = 0;
      function d2(e3) {
        let r3 = 0;
        if (-1 === e3.indexOf("\r")) {
          let n3 = e3.indexOf("\n", r3);
          for (; -1 !== n3; ) {
            if (r3 === n3) {
              u2 > 0 && t2({ id: i2, event: a2, data: l2 }), i2 = void 0, l2 = "", u2 = 0, a2 = void 0, r3 = n3 + 1, n3 = e3.indexOf("\n", r3);
              continue;
            }
            const s3 = e3.charCodeAt(r3);
            if (H(e3, r3, s3)) {
              const s4 = e3.charCodeAt(r3 + 5) === Q ? r3 + 6 : r3 + 5, o3 = e3.slice(s4, n3);
              if (0 === u2 && 10 === e3.charCodeAt(n3 + 1)) {
                t2({ id: i2, event: a2, data: o3 }), i2 = void 0, l2 = "", a2 = void 0, r3 = n3 + 2, n3 = e3.indexOf("\n", r3);
                continue;
              }
              l2 = 0 === u2 ? o3 : `${l2}
${o3}`, u2++;
            } else z(e3, r3, s3) ? a2 = e3.slice(e3.charCodeAt(r3 + 6) === Q ? r3 + 7 : r3 + 6, n3) || void 0 : p2(e3, r3, n3);
            r3 = n3 + 1, n3 = e3.indexOf("\n", r3);
          }
          return e3.slice(r3);
        }
        for (; r3 < e3.length; ) {
          const t3 = e3.indexOf("\r", r3), n3 = e3.indexOf("\n", r3);
          let s3 = -1;
          if (-1 !== t3 && -1 !== n3 ? s3 = t3 < n3 ? t3 : n3 : -1 !== t3 ? s3 = t3 === e3.length - 1 ? -1 : t3 : -1 !== n3 && (s3 = n3), -1 === s3) break;
          p2(e3, r3, s3), r3 = s3 + 1, 13 === e3.charCodeAt(r3 - 1) && 10 === e3.charCodeAt(r3) && r3++;
        }
        return e3.slice(r3);
      }
      function p2(e3, r3, n3) {
        if (r3 === n3) return u2 > 0 && t2({ id: i2, event: a2, data: l2 }), i2 = void 0, l2 = "", u2 = 0, void (a2 = void 0);
        const o3 = e3.charCodeAt(r3);
        if (H(e3, r3, o3)) {
          const t3 = e3.charCodeAt(r3 + 5) === Q ? r3 + 6 : r3 + 5, s3 = e3.slice(t3, n3);
          return l2 = 0 === u2 ? s3 : `${l2}
${s3}`, void u2++;
        }
        if (z(e3, r3, o3)) return void (a2 = e3.slice(e3.charCodeAt(r3 + 6) === Q ? r3 + 7 : r3 + 6, n3) || void 0);
        if (105 === o3 && 100 === e3.charCodeAt(r3 + 1) && 58 === e3.charCodeAt(r3 + 2)) {
          const t3 = e3.slice(e3.charCodeAt(r3 + 3) === Q ? r3 + 4 : r3 + 3, n3);
          return void (i2 = t3.includes("\0") ? void 0 : t3);
        }
        if (58 === o3) {
          if (s2) {
            const t3 = e3.slice(r3, n3);
            s2(t3.slice(e3.charCodeAt(r3 + 1) === Q ? 2 : 1));
          }
          return;
        }
        const c3 = e3.slice(r3, n3), d3 = c3.indexOf(":");
        if (-1 === d3) return void m2(c3, "", c3);
        const p3 = c3.slice(0, d3), h2 = c3.charCodeAt(d3 + 1) === Q ? 2 : 1;
        m2(p3, c3.slice(d3 + h2), c3);
      }
      function m2(e3, t3, s3) {
        switch (e3) {
          case "event":
            a2 = t3 || void 0;
            break;
          case "data":
            l2 = 0 === u2 ? t3 : `${l2}
${t3}`, u2++;
            break;
          case "id":
            i2 = t3.includes("\0") ? void 0 : t3;
            break;
          case "retry":
            /^\d+$/.test(t3) ? n2(parseInt(t3, 10)) : r2(new $(`Invalid \`retry\` value: "${t3}"`, { type: "invalid-retry", value: t3, line: s3 }));
            break;
          default:
            r2(new $(`Unknown field "${e3.length > 20 ? `${e3.slice(0, 20)}…` : e3}"`, { type: "unknown-field", field: e3, value: t3, line: s3 }));
        }
      }
      return { feed: function(e3) {
        if (c2 && (c2 = false, 239 === e3.charCodeAt(0) && 187 === e3.charCodeAt(1) && 191 === e3.charCodeAt(2) && (e3 = e3.slice(3))), 0 === o2.length) {
          const t4 = d2(e3);
          return void ("" !== t4 && o2.push(t4));
        }
        if (-1 === e3.indexOf("\n") && -1 === e3.indexOf("\r")) return void o2.push(e3);
        o2.push(e3);
        const t3 = o2.join("");
        o2.length = 0;
        const r3 = d2(t3);
        "" !== r3 && o2.push(r3);
      }, reset: function(e3 = {}) {
        if (e3.consume && o2.length > 0) {
          const e4 = o2.join("");
          p2(e4, 0, e4.length);
        }
        c2 = true, i2 = void 0, l2 = "", u2 = 0, a2 = void 0, o2.length = 0;
      } };
    }
    function H(e2, t2, r2) {
      return 100 === r2 && 97 === e2.charCodeAt(t2 + 1) && 116 === e2.charCodeAt(t2 + 2) && 97 === e2.charCodeAt(t2 + 3) && 58 === e2.charCodeAt(t2 + 4);
    }
    function z(e2, t2, r2) {
      return 101 === r2 && 118 === e2.charCodeAt(t2 + 1) && 101 === e2.charCodeAt(t2 + 2) && 110 === e2.charCodeAt(t2 + 3) && 116 === e2.charCodeAt(t2 + 4) && 58 === e2.charCodeAt(t2 + 5);
    }
    class W extends Event {
      constructor(e2, t2) {
        var r2, n2;
        super(e2), this.code = null != (r2 = null == t2 ? void 0 : t2.code) ? r2 : void 0, this.message = null != (n2 = null == t2 ? void 0 : t2.message) ? n2 : void 0;
      }
      [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")](e2, t2, r2) {
        return r2(K(this), t2);
      }
      [/* @__PURE__ */ Symbol.for("Deno.customInspect")](e2, t2) {
        return e2(K(this), t2);
      }
    }
    function V(e2) {
      return e2 instanceof Error ? "errors" in e2 && Array.isArray(e2.errors) ? e2.errors.map(V).join(", ") : "cause" in e2 && e2.cause instanceof Error ? `${e2}: ${V(e2.cause)}` : e2.message : `${e2}`;
    }
    function K(e2) {
      return { type: e2.type, message: e2.message, code: e2.code, defaultPrevented: e2.defaultPrevented, cancelable: e2.cancelable, timeStamp: e2.timeStamp };
    }
    var Y, Z, X, ee, te, re, ne, se, oe, ie, ae, ce, le, ue, de, pe, me, he, fe, ge, ye, we, ve, _e = (e2) => {
      throw TypeError(e2);
    }, Ae = (e2, t2, r2) => t2.has(e2) || _e("Cannot " + r2), Se = (e2, t2, r2) => (Ae(e2, t2, "read from private field"), r2 ? r2.call(e2) : t2.get(e2)), be = (e2, t2, r2) => t2.has(e2) ? _e("Cannot add the same private member more than once") : t2 instanceof WeakSet ? t2.add(e2) : t2.set(e2, r2), Ee = (e2, t2, r2, n2) => (Ae(e2, t2, "write to private field"), t2.set(e2, r2), r2), Ie = (e2, t2, r2) => (Ae(e2, t2, "access private method"), r2);
    class Ce extends EventTarget {
      constructor(e2, t2) {
        var r2, n2;
        super(), be(this, ue), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, be(this, Y), be(this, Z), be(this, X), be(this, ee), be(this, te), be(this, re), be(this, ne), be(this, se, null), be(this, oe), be(this, ie), be(this, ae, null), be(this, ce, null), be(this, le, null), be(this, pe, async (e3) => {
          var t3;
          Se(this, ie).reset();
          const { body: r3, redirected: n3, status: s2, headers: o2 } = e3;
          if (204 === s2) return Ie(this, ue, ye).call(this, "Server sent HTTP 204, not reconnecting", 204), void this.close();
          if (Ee(this, X, n3 ? new URL(e3.url) : void 0), 200 !== s2) return void Ie(this, ue, ye).call(this, `Non-200 status code (${s2})`, s2);
          if (!(o2.get("content-type") || "").startsWith("text/event-stream")) return void Ie(this, ue, ye).call(this, 'Invalid content type, expected "text/event-stream"', s2);
          if (Se(this, Y) === this.CLOSED) return;
          Ee(this, Y, this.OPEN);
          const i2 = new Event("open");
          if (null == (t3 = Se(this, le)) || t3.call(this, i2), this.dispatchEvent(i2), "object" != typeof r3 || !r3 || !("getReader" in r3)) return Ie(this, ue, ye).call(this, "Invalid response body, expected a web ReadableStream", s2), void this.close();
          const a2 = new TextDecoder(), c2 = r3.getReader();
          let l2 = true;
          do {
            const { done: e4, value: t4 } = await c2.read();
            t4 && Se(this, ie).feed(a2.decode(t4, { stream: !e4 })), e4 && (l2 = false, Se(this, ie).reset(), Ie(this, ue, we).call(this));
          } while (l2);
        }), be(this, me, (e3) => {
          Ee(this, oe, void 0), "AbortError" !== e3.name && "aborted" !== e3.type && Ie(this, ue, we).call(this, V(e3));
        }), be(this, fe, (e3) => {
          "string" == typeof e3.id && Ee(this, se, e3.id);
          const t3 = new MessageEvent(e3.event || "message", { data: e3.data, origin: Se(this, X) ? Se(this, X).origin : Se(this, Z).origin, lastEventId: e3.id || "" });
          Se(this, ce) && (!e3.event || "message" === e3.event) && Se(this, ce).call(this, t3), this.dispatchEvent(t3);
        }), be(this, ge, (e3) => {
          Ee(this, re, e3);
        }), be(this, ve, () => {
          Ee(this, ne, void 0), Se(this, Y) === this.CONNECTING && Ie(this, ue, de).call(this);
        });
        try {
          if (e2 instanceof URL) Ee(this, Z, e2);
          else {
            if ("string" != typeof e2) throw new Error("Invalid URL");
            Ee(this, Z, new URL(e2, (function() {
              const e3 = "document" in globalThis ? globalThis.document : void 0;
              return e3 && "object" == typeof e3 && "baseURI" in e3 && "string" == typeof e3.baseURI ? e3.baseURI : void 0;
            })()));
          }
        } catch {
          throw (function(e3) {
            const t3 = globalThis.DOMException;
            return "function" == typeof t3 ? new t3(e3, "SyntaxError") : new SyntaxError(e3);
          })("An invalid or illegal string was specified");
        }
        Ee(this, ie, G({ onEvent: Se(this, fe), onRetry: Se(this, ge) })), Ee(this, Y, this.CONNECTING), Ee(this, re, 3e3), Ee(this, te, null != (r2 = null == t2 ? void 0 : t2.fetch) ? r2 : globalThis.fetch), Ee(this, ee, null != (n2 = null == t2 ? void 0 : t2.withCredentials) && n2), Ie(this, ue, de).call(this);
      }
      get readyState() {
        return Se(this, Y);
      }
      get url() {
        return Se(this, Z).href;
      }
      get withCredentials() {
        return Se(this, ee);
      }
      get onerror() {
        return Se(this, ae);
      }
      set onerror(e2) {
        Ee(this, ae, e2);
      }
      get onmessage() {
        return Se(this, ce);
      }
      set onmessage(e2) {
        Ee(this, ce, e2);
      }
      get onopen() {
        return Se(this, le);
      }
      set onopen(e2) {
        Ee(this, le, e2);
      }
      addEventListener(e2, t2, r2) {
        const n2 = t2;
        super.addEventListener(e2, n2, r2);
      }
      removeEventListener(e2, t2, r2) {
        const n2 = t2;
        super.removeEventListener(e2, n2, r2);
      }
      close() {
        Se(this, ne) && clearTimeout(Se(this, ne)), Se(this, Y) !== this.CLOSED && (Se(this, oe) && Se(this, oe).abort(), Ee(this, Y, this.CLOSED), Ee(this, oe, void 0));
      }
    }
    Y = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), re = /* @__PURE__ */ new WeakMap(), ne = /* @__PURE__ */ new WeakMap(), se = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap(), ue = /* @__PURE__ */ new WeakSet(), de = function() {
      Ee(this, Y, this.CONNECTING), Ee(this, oe, new AbortController()), Se(this, te)(Se(this, Z), Ie(this, ue, he).call(this)).then(Se(this, pe)).catch(Se(this, me));
    }, pe = /* @__PURE__ */ new WeakMap(), me = /* @__PURE__ */ new WeakMap(), he = function() {
      var e2;
      const t2 = { mode: "cors", redirect: "follow", headers: { Accept: "text/event-stream", ...Se(this, se) ? { "Last-Event-ID": Se(this, se) } : void 0 }, cache: "no-store", signal: null == (e2 = Se(this, oe)) ? void 0 : e2.signal };
      return "window" in globalThis && (t2.credentials = this.withCredentials ? "include" : "same-origin"), t2;
    }, fe = /* @__PURE__ */ new WeakMap(), ge = /* @__PURE__ */ new WeakMap(), ye = function(e2, t2) {
      var r2;
      Se(this, Y) !== this.CLOSED && Ee(this, Y, this.CLOSED);
      const n2 = new W("error", { code: t2, message: e2 });
      null == (r2 = Se(this, ae)) || r2.call(this, n2), this.dispatchEvent(n2);
    }, we = function(e2, t2) {
      var r2;
      if (Se(this, Y) === this.CLOSED) return;
      Ee(this, Y, this.CONNECTING);
      const n2 = new W("error", { code: t2, message: e2 });
      null == (r2 = Se(this, ae)) || r2.call(this, n2), this.dispatchEvent(n2), Ee(this, ne, setTimeout(Se(this, ve), Se(this, re)));
    }, ve = /* @__PURE__ */ new WeakMap(), Ce.CONNECTING = 0, Ce.OPEN = 1, Ce.CLOSED = 2;
    Error;
    r(31762);
    const ke = require("node:process");
    r(57075);
    ke.platform;
    TransformStream;
    Error;
    new class {
      constructor({ maxSchemasPerCompiler: e2 = 2048, createCompiler: t2 = () => new L() } = {}) {
        this.compiled = /* @__PURE__ */ new Map(), this.maxSchemasPerCompiler = e2, this.createCompiler = t2, this.compiler = t2();
      }
      get compiledSchemaCount() {
        return this.compiled.size;
      }
      getValidator(e2) {
        let t2;
        return (r2) => (t2 ??= this.compile(e2), t2(r2));
      }
      compile(e2) {
        const t2 = JSON.stringify(e2), r2 = (0, s.createHash)("sha256").update(t2).digest("base64url"), n2 = this.compiled.get(r2);
        if (void 0 !== n2) return n2;
        this.compiled.size >= this.maxSchemasPerCompiler && (this.compiler = this.createCompiler(), this.compiled.clear());
        const o2 = (t2.includes('"$id"') ? this.createCompiler() : this.compiler).getValidator(e2);
        return this.compiled.set(r2, o2), o2;
      }
    }();
    var xe = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Te = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    /* @__PURE__ */ new Set();
    class Re extends Error {
      constructor(e2, t2) {
        super(`Tool ${e2} not found, available tools: ${t2.join(", ")}`), this.toolName = e2, this.availableTools = t2, this.name = "McpToolNotFoundError";
      }
    }
    function Be(e2) {
      if (e2 instanceof Re) return true;
      if (!(e2 instanceof Error) || "McpToolNotFoundError" !== e2.name) return false;
      const t2 = e2;
      return "string" == typeof t2.toolName && Array.isArray(t2.availableTools);
    }
    class Pe extends Error {
      constructor(e2, t2) {
        super(`MCP server ${e2} not found, available servers: ${t2.join(", ")}`), this.serverName = e2, this.availableServers = t2, this.name = "McpServerNotFoundError";
      }
    }
    Error;
    Error;
    class Je {
      constructor(e2) {
        this.manager = e2;
      }
      async getClients(e2) {
        return this.manager.getClients();
      }
      async getClient(e2, t2) {
        return this.manager.getClient(t2);
      }
      async getInstructions(e2) {
        const t2 = { stack: [], error: void 0, hasError: false };
        try {
          const r2 = xe(t2, (0, N.VI)(e2.withName("ManagerMcpLease.getInstructions")), false);
          return await this.manager.getInstructions(r2.ctx);
        } catch (e3) {
          t2.error = e3, t2.hasError = true;
        } finally {
          Te(t2);
        }
      }
      async getToolSet(e2) {
        const t2 = { stack: [], error: void 0, hasError: false };
        try {
          const r2 = xe(t2, (0, N.VI)(e2.withName("ManagerMcpLease.getToolSet")), false);
          return await this.manager.getToolSet(r2.ctx);
        } catch (e3) {
          t2.error = e3, t2.hasError = true;
        } finally {
          Te(t2);
        }
      }
      async getTools(e2) {
        const t2 = { stack: [], error: void 0, hasError: false };
        try {
          const r2 = xe(t2, (0, N.VI)(e2.withName("ManagerMcpLease.getTools")), false);
          return (await this.getToolSet(r2.ctx)).getTools();
        } catch (e3) {
          t2.error = e3, t2.hasError = true;
        } finally {
          Te(t2);
        }
      }
      async getToolsForServers(e2, t2) {
        const r2 = new Set(t2);
        return (await this.getTools(e2)).filter((e3) => r2.has(e3.clientKey));
      }
      onDidChange(e2) {
        return { dispose: this.manager.onDidChange(() => e2(void 0)) };
      }
      async reconcileSelection(e2, t2, r2) {
        for (const e3 of t2.removed) {
          const t3 = this.manager.getClient(e3);
          this.manager.deleteClient(e3);
          try {
            await t3?.close?.();
          } catch {
          }
        }
        for (const n2 of t2.added) {
          if (this.manager.getClient(n2)) continue;
          const t3 = await r2(e2, n2);
          this.manager.setClient(n2, t3);
        }
      }
    }
    Error;
    "function" == typeof SuppressedError && SuppressedError;
    (0, O.h)("DefinitionMcpLoader");
    Error;
    r(42233);
    class Me {
      constructor(e2) {
        this.mcpAuthPath = e2;
        const t2 = Me.mcpAuthPromises.get(e2);
        if (t2) this.mcpAuthPromise = t2;
        else {
          const t3 = this.loadMcpAuth();
          this.mcpAuthPromise = t3, Me.mcpAuthPromises.set(e2, t3), t3.catch(() => {
            Me.mcpAuthPromises.get(e2) === t3 && Me.mcpAuthPromises.delete(e2);
          });
        }
        Me.saveLocks.has(e2) || Me.saveLocks.set(e2, Promise.resolve());
      }
      async loadMcpAuth() {
        try {
          const e2 = await (0, o.readFile)(this.mcpAuthPath, "utf8"), t2 = JSON.parse(e2);
          if (t2 && "object" == typeof t2) {
            if (Object.values(t2).some((e4) => e4 && "object" == typeof e4 && null !== e4 && ("access_token" in e4 || "refresh_token" in e4) && !("tokens" in e4) && !("clientInfo" in e4))) {
              const e4 = {};
              for (const [r2, n2] of Object.entries(t2)) e4[r2] = { tokens: n2 };
              return e4;
            }
            const e3 = {};
            for (const [r2, n2] of Object.entries(t2)) n2 && "object" == typeof n2 && null !== n2 && (e3[r2] = { tokens: "tokens" in n2 ? n2.tokens : void 0, clientInfo: "clientInfo" in n2 ? n2.clientInfo : void 0 });
            return e3;
          }
          return {};
        } catch (e2) {
          if (e2 instanceof Error && e2.message.includes("ENOENT")) return {};
          throw e2;
        }
      }
      async loadTokens(e2) {
        const t2 = await this.mcpAuthPromise;
        return t2[e2]?.tokens;
      }
      async saveTokens(e2, t2) {
        await this.withSaveLock(async () => {
          const r2 = await this.mcpAuthPromise;
          r2[e2] || (r2[e2] = {}), r2[e2].tokens = t2, await this.saveMcpAuth(r2);
        });
      }
      async loadClientInformation(e2) {
        const t2 = await this.mcpAuthPromise;
        return t2[e2]?.clientInfo;
      }
      async withSaveLock(e2) {
        const t2 = Me.saveLocks.get(this.mcpAuthPath) ?? Promise.resolve();
        let r2;
        Me.saveLocks.set(this.mcpAuthPath, new Promise((e3) => {
          r2 = e3;
        }));
        try {
          return await t2, await e2();
        } finally {
          r2();
        }
      }
      async saveClientInformation(e2, t2) {
        await this.withSaveLock(async () => {
          const r2 = await this.mcpAuthPromise;
          r2[e2] || (r2[e2] = {}), r2[e2].clientInfo = t2, await this.saveMcpAuth(r2);
        });
      }
      async deleteCredentials(e2) {
        await this.withSaveLock(async () => {
          const t2 = await this.mcpAuthPromise;
          e2 in t2 && (delete t2[e2], await this.saveMcpAuth(t2));
        });
      }
      async saveMcpAuth(e2) {
        await (0, o.mkdir)(i.dirname(this.mcpAuthPath), { recursive: true }), await (0, o.writeFile)(this.mcpAuthPath, JSON.stringify(e2, null, 2));
      }
    }
    Me.mcpAuthPromises = /* @__PURE__ */ new Map(), Me.saveLocks = /* @__PURE__ */ new Map();
  }