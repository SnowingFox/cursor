// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 99286 range:11729572..11752556
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
99286: (e, t, r) => {
    "use strict";
    r.d(t, { bm: () => Pe, U$: () => Te, ME: () => n.MEY, SW: () => a, Y: () => n.YaX, _o: () => Ce, _N: () => n._NE });
    var n = r(41250), s = r(77598), o = r(51455), i = r(76760);
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
    function b(e2, t2) {
      const r2 = { type: "object", get shape() {
        return u.Vy(this, "shape", { ...e2 }), this.shape;
      }, ...u.A2(t2) };
      return new _(r2);
    }
    const S = c.xI("ZodMiniUnion", (e2, t2) => {
      l.cu.init(e2, t2), m.init(e2, t2);
    });
    function k(e2, t2) {
      return new S({ type: "union", options: e2, ...u.A2(t2) });
    }
    const x = c.xI("ZodMiniRecord", (e2, t2) => {
      l.h.init(e2, t2), m.init(e2, t2);
    });
    function E(e2, t2, r2) {
      return new x({ type: "record", keyType: e2, valueType: t2, ...u.A2(r2) });
    }
    const I = c.xI("ZodMiniEnum", (e2, t2) => {
      l.VO.init(e2, t2), m.init(e2, t2);
    });
    function T(e2, t2) {
      const r2 = Array.isArray(e2) ? Object.fromEntries(e2.map((e3) => [e3, e3])) : e2;
      return new I({ type: "enum", entries: r2, ...u.A2(t2) });
    }
    const C = c.xI("ZodMiniLiteral", (e2, t2) => {
      l.nu.init(e2, t2), m.init(e2, t2);
    });
    function P(e2, t2) {
      return new C({ type: "literal", values: Array.isArray(e2) ? e2 : [e2], ...u.A2(t2) });
    }
    const A = c.xI("ZodMiniOptional", (e2, t2) => {
      l.ig.init(e2, t2), m.init(e2, t2);
    });
    function R(e2) {
      return new A({ type: "optional", innerType: e2 });
    }
    const M = b({ CLIENT_ID: f(), CLIENT_SECRET: R(f()), scopes: R(v(f())) }), J = (O = { caBundle: f().check(d.WN(), d.m9(1), d.Eb(131072)) }, new _({ type: "object", get shape() {
      return u.Vy(this, "shape", { ...O }), this.shape;
    }, catchall: y(), ...u.A2(B) }));
    var O, B;
    const D = k([b({ type: R(P("stdio")), command: f(), args: R(v(f())), env: R(E(f(), f())), envFile: R(f()), cwd: R(f()), enabledTools: R(v(f())) }), b({ type: R(T(["http", "sse"])), url: f(), headers: R(E(f(), f())), auth: R(M), tls: R(J), placement: R(T(["server", "client"])), enabledTools: R(v(f())) })]);
    b({ mcpServers: E(f(), D) });
    Error;
    r(40283);
    r(48161);
    var q = r(37949);
    r(98875), r(65716);
    r(31421), r(61771), r(34175), r(73015), r(48891);
    r(59116);
    r(98483);
    var N = r(97712), F = r(90545);
    class U {
      constructor(e2) {
        this._ajv = e2 ?? (function() {
          const e3 = new N({ strict: false, validateFormats: true, validateSchema: false, allErrors: true });
          return F(e3), e3;
        })();
      }
      getValidator(e2) {
        const t2 = "$id" in e2 && "string" == typeof e2.$id ? this._ajv.getSchema(e2.$id) ?? this._ajv.compile(e2) : this._ajv.compile(e2);
        return (e3) => t2(e3) ? { valid: true, data: e3, errorMessage: void 0 } : { valid: false, data: void 0, errorMessage: this._ajv.errorsText(t2.errors) };
      }
    }
    class L extends Error {
      constructor(e2, t2) {
        super(e2), this.name = "ParseError", this.type = t2.type, this.field = t2.field, this.value = t2.value, this.line = t2.line;
      }
    }
    const $ = 32;
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
            if (z(e3, r3, s3)) {
              const s4 = e3.charCodeAt(r3 + 5) === $ ? r3 + 6 : r3 + 5, o3 = e3.slice(s4, n3);
              if (0 === u2 && 10 === e3.charCodeAt(n3 + 1)) {
                t2({ id: i2, event: a2, data: o3 }), i2 = void 0, l2 = "", a2 = void 0, r3 = n3 + 2, n3 = e3.indexOf("\n", r3);
                continue;
              }
              l2 = 0 === u2 ? o3 : `${l2}
${o3}`, u2++;
            } else W(e3, r3, s3) ? a2 = e3.slice(e3.charCodeAt(r3 + 6) === $ ? r3 + 7 : r3 + 6, n3) || void 0 : p2(e3, r3, n3);
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
        if (z(e3, r3, o3)) {
          const t3 = e3.charCodeAt(r3 + 5) === $ ? r3 + 6 : r3 + 5, s3 = e3.slice(t3, n3);
          return l2 = 0 === u2 ? s3 : `${l2}
${s3}`, void u2++;
        }
        if (W(e3, r3, o3)) return void (a2 = e3.slice(e3.charCodeAt(r3 + 6) === $ ? r3 + 7 : r3 + 6, n3) || void 0);
        if (105 === o3 && 100 === e3.charCodeAt(r3 + 1) && 58 === e3.charCodeAt(r3 + 2)) {
          const t3 = e3.slice(e3.charCodeAt(r3 + 3) === $ ? r3 + 4 : r3 + 3, n3);
          return void (i2 = t3.includes("\0") ? void 0 : t3);
        }
        if (58 === o3) {
          if (s2) {
            const t3 = e3.slice(r3, n3);
            s2(t3.slice(e3.charCodeAt(r3 + 1) === $ ? 2 : 1));
          }
          return;
        }
        const c3 = e3.slice(r3, n3), d3 = c3.indexOf(":");
        if (-1 === d3) return void m2(c3, "", c3);
        const p3 = c3.slice(0, d3), h2 = c3.charCodeAt(d3 + 1) === $ ? 2 : 1;
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
            /^\d+$/.test(t3) ? n2(parseInt(t3, 10)) : r2(new L(`Invalid \`retry\` value: "${t3}"`, { type: "invalid-retry", value: t3, line: s3 }));
            break;
          default:
            r2(new L(`Unknown field "${e3.length > 20 ? `${e3.slice(0, 20)}…` : e3}"`, { type: "unknown-field", field: e3, value: t3, line: s3 }));
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
    function z(e2, t2, r2) {
      return 100 === r2 && 97 === e2.charCodeAt(t2 + 1) && 116 === e2.charCodeAt(t2 + 2) && 97 === e2.charCodeAt(t2 + 3) && 58 === e2.charCodeAt(t2 + 4);
    }
    function W(e2, t2, r2) {
      return 101 === r2 && 118 === e2.charCodeAt(t2 + 1) && 101 === e2.charCodeAt(t2 + 2) && 110 === e2.charCodeAt(t2 + 3) && 116 === e2.charCodeAt(t2 + 4) && 58 === e2.charCodeAt(t2 + 5);
    }
    class H extends Event {
      constructor(e2, t2) {
        var r2, n2;
        super(e2), this.code = null != (r2 = null == t2 ? void 0 : t2.code) ? r2 : void 0, this.message = null != (n2 = null == t2 ? void 0 : t2.message) ? n2 : void 0;
      }
      [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")](e2, t2, r2) {
        return r2(V(this), t2);
      }
      [/* @__PURE__ */ Symbol.for("Deno.customInspect")](e2, t2) {
        return e2(V(this), t2);
      }
    }
    function K(e2) {
      return e2 instanceof Error ? "errors" in e2 && Array.isArray(e2.errors) ? e2.errors.map(K).join(", ") : "cause" in e2 && e2.cause instanceof Error ? `${e2}: ${K(e2.cause)}` : e2.message : `${e2}`;
    }
    function V(e2) {
      return { type: e2.type, message: e2.message, code: e2.code, defaultPrevented: e2.defaultPrevented, cancelable: e2.cancelable, timeStamp: e2.timeStamp };
    }
    var Y, Q, X, Z, ee, te, re, ne, se, oe, ie, ae, ce, le, ue, de, pe, me, he, fe, ge, ye, we, ve = (e2) => {
      throw TypeError(e2);
    }, _e = (e2, t2, r2) => t2.has(e2) || ve("Cannot " + r2), be = (e2, t2, r2) => (_e(e2, t2, "read from private field"), r2 ? r2.call(e2) : t2.get(e2)), Se = (e2, t2, r2) => t2.has(e2) ? ve("Cannot add the same private member more than once") : t2 instanceof WeakSet ? t2.add(e2) : t2.set(e2, r2), ke = (e2, t2, r2, n2) => (_e(e2, t2, "write to private field"), t2.set(e2, r2), r2), xe = (e2, t2, r2) => (_e(e2, t2, "access private method"), r2);
    class Ee extends EventTarget {
      constructor(e2, t2) {
        var r2, n2;
        super(), Se(this, le), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, Se(this, Y), Se(this, Q), Se(this, X), Se(this, Z), Se(this, ee), Se(this, te), Se(this, re), Se(this, ne, null), Se(this, se), Se(this, oe), Se(this, ie, null), Se(this, ae, null), Se(this, ce, null), Se(this, de, async (e3) => {
          var t3;
          be(this, oe).reset();
          const { body: r3, redirected: n3, status: s2, headers: o2 } = e3;
          if (204 === s2) return xe(this, le, ge).call(this, "Server sent HTTP 204, not reconnecting", 204), void this.close();
          if (ke(this, X, n3 ? new URL(e3.url) : void 0), 200 !== s2) return void xe(this, le, ge).call(this, `Non-200 status code (${s2})`, s2);
          if (!(o2.get("content-type") || "").startsWith("text/event-stream")) return void xe(this, le, ge).call(this, 'Invalid content type, expected "text/event-stream"', s2);
          if (be(this, Y) === this.CLOSED) return;
          ke(this, Y, this.OPEN);
          const i2 = new Event("open");
          if (null == (t3 = be(this, ce)) || t3.call(this, i2), this.dispatchEvent(i2), "object" != typeof r3 || !r3 || !("getReader" in r3)) return xe(this, le, ge).call(this, "Invalid response body, expected a web ReadableStream", s2), void this.close();
          const a2 = new TextDecoder(), c2 = r3.getReader();
          let l2 = true;
          do {
            const { done: e4, value: t4 } = await c2.read();
            t4 && be(this, oe).feed(a2.decode(t4, { stream: !e4 })), e4 && (l2 = false, be(this, oe).reset(), xe(this, le, ye).call(this));
          } while (l2);
        }), Se(this, pe, (e3) => {
          ke(this, se, void 0), "AbortError" !== e3.name && "aborted" !== e3.type && xe(this, le, ye).call(this, K(e3));
        }), Se(this, he, (e3) => {
          "string" == typeof e3.id && ke(this, ne, e3.id);
          const t3 = new MessageEvent(e3.event || "message", { data: e3.data, origin: be(this, X) ? be(this, X).origin : be(this, Q).origin, lastEventId: e3.id || "" });
          be(this, ae) && (!e3.event || "message" === e3.event) && be(this, ae).call(this, t3), this.dispatchEvent(t3);
        }), Se(this, fe, (e3) => {
          ke(this, te, e3);
        }), Se(this, we, () => {
          ke(this, re, void 0), be(this, Y) === this.CONNECTING && xe(this, le, ue).call(this);
        });
        try {
          if (e2 instanceof URL) ke(this, Q, e2);
          else {
            if ("string" != typeof e2) throw new Error("Invalid URL");
            ke(this, Q, new URL(e2, (function() {
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
        ke(this, oe, G({ onEvent: be(this, he), onRetry: be(this, fe) })), ke(this, Y, this.CONNECTING), ke(this, te, 3e3), ke(this, ee, null != (r2 = null == t2 ? void 0 : t2.fetch) ? r2 : globalThis.fetch), ke(this, Z, null != (n2 = null == t2 ? void 0 : t2.withCredentials) && n2), xe(this, le, ue).call(this);
      }
      get readyState() {
        return be(this, Y);
      }
      get url() {
        return be(this, Q).href;
      }
      get withCredentials() {
        return be(this, Z);
      }
      get onerror() {
        return be(this, ie);
      }
      set onerror(e2) {
        ke(this, ie, e2);
      }
      get onmessage() {
        return be(this, ae);
      }
      set onmessage(e2) {
        ke(this, ae, e2);
      }
      get onopen() {
        return be(this, ce);
      }
      set onopen(e2) {
        ke(this, ce, e2);
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
        be(this, re) && clearTimeout(be(this, re)), be(this, Y) !== this.CLOSED && (be(this, se) && be(this, se).abort(), ke(this, Y, this.CLOSED), ke(this, se, void 0));
      }
    }
    Y = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), re = /* @__PURE__ */ new WeakMap(), ne = /* @__PURE__ */ new WeakMap(), se = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakSet(), ue = function() {
      ke(this, Y, this.CONNECTING), ke(this, se, new AbortController()), be(this, ee)(be(this, Q), xe(this, le, me).call(this)).then(be(this, de)).catch(be(this, pe));
    }, de = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), me = function() {
      var e2;
      const t2 = { mode: "cors", redirect: "follow", headers: { Accept: "text/event-stream", ...be(this, ne) ? { "Last-Event-ID": be(this, ne) } : void 0 }, cache: "no-store", signal: null == (e2 = be(this, se)) ? void 0 : e2.signal };
      return "window" in globalThis && (t2.credentials = this.withCredentials ? "include" : "same-origin"), t2;
    }, he = /* @__PURE__ */ new WeakMap(), fe = /* @__PURE__ */ new WeakMap(), ge = function(e2, t2) {
      var r2;
      be(this, Y) !== this.CLOSED && ke(this, Y, this.CLOSED);
      const n2 = new H("error", { code: t2, message: e2 });
      null == (r2 = be(this, ie)) || r2.call(this, n2), this.dispatchEvent(n2);
    }, ye = function(e2, t2) {
      var r2;
      if (be(this, Y) === this.CLOSED) return;
      ke(this, Y, this.CONNECTING);
      const n2 = new H("error", { code: t2, message: e2 });
      null == (r2 = be(this, ie)) || r2.call(this, n2), this.dispatchEvent(n2), ke(this, re, setTimeout(be(this, we), be(this, te)));
    }, we = /* @__PURE__ */ new WeakMap(), Ee.CONNECTING = 0, Ee.OPEN = 1, Ee.CLOSED = 2;
    Error;
    r(31762);
    var Ie = r(1708);
    r(57075);
    Ie.platform;
    TransformStream;
    Error;
    new class {
      constructor({ maxSchemasPerCompiler: e2 = 2048, createCompiler: t2 = () => new U() } = {}) {
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
    "function" == typeof SuppressedError && SuppressedError;
    /* @__PURE__ */ new Set();
    class Te extends Error {
      constructor(e2, t2) {
        super(`Tool ${e2} not found, available tools: ${t2.join(", ")}`), this.toolName = e2, this.availableTools = t2, this.name = "McpToolNotFoundError";
      }
    }
    function Ce(e2) {
      if (e2 instanceof Te) return true;
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
    Error;
    "function" == typeof SuppressedError && SuppressedError;
    (0, q.h)("DefinitionMcpLoader");
    Error;
    r(42233);
    class Ae {
      constructor(e2) {
        this.mcpAuthPath = e2;
        const t2 = Ae.mcpAuthPromises.get(e2);
        if (t2) this.mcpAuthPromise = t2;
        else {
          const t3 = this.loadMcpAuth();
          this.mcpAuthPromise = t3, Ae.mcpAuthPromises.set(e2, t3), t3.catch(() => {
            Ae.mcpAuthPromises.get(e2) === t3 && Ae.mcpAuthPromises.delete(e2);
          });
        }
        Ae.saveLocks.has(e2) || Ae.saveLocks.set(e2, Promise.resolve());
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
        const t2 = Ae.saveLocks.get(this.mcpAuthPath) ?? Promise.resolve();
        let r2;
        Ae.saveLocks.set(this.mcpAuthPath, new Promise((e3) => {
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
    Ae.mcpAuthPromises = /* @__PURE__ */ new Map(), Ae.saveLocks = /* @__PURE__ */ new Map();
  }