// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 93353 range:11290616..11305613
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
93353: (e, t, r) => {
    const { getSmithyContext: n, HttpResponse: s, toEndpointV1: o } = r(11255), i = (e2) => "function" == typeof e2 ? e2() : e2, a = (e2, t2, r2, n2, s2) => ({ name: t2, namespace: e2, traits: r2, input: n2, output: s2 }), c = (e2, t2) => (t2.find(([t3]) => t3.match(e2)) || [void 0, void 0])[1], l = { name: "deserializerMiddleware", step: "deserialize", tags: ["DESERIALIZER"], override: true }, u = { name: "serializerMiddleware", step: "serialize", tags: ["SERIALIZER"], override: true };
    class d {
      name;
      namespace;
      traits;
      static assign(e2, t2) {
        return Object.assign(e2, t2);
      }
      static [Symbol.hasInstance](e2) {
        const t2 = this.prototype.isPrototypeOf(e2);
        if (!t2 && "object" == typeof e2 && null !== e2) {
          return e2.symbol === this.symbol;
        }
        return t2;
      }
      getName() {
        return this.namespace + "#" + this.name;
      }
    }
    class p extends d {
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/lis");
      valueSchema;
      symbol = p.symbol;
    }
    class m extends d {
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/map");
      keySchema;
      valueSchema;
      symbol = m.symbol;
    }
    class h extends d {
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/ope");
      input;
      output;
      symbol = h.symbol;
    }
    class f extends d {
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/str");
      memberNames;
      memberList;
      symbol = f.symbol;
    }
    class g extends f {
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/err");
      ctor;
      symbol = g.symbol;
    }
    const y = [];
    function w(e2) {
      if ("object" == typeof e2) return e2;
      if (y[e2 |= 0]) return y[e2];
      const t2 = {};
      let r2 = 0;
      for (const n2 of ["httpLabel", "idempotent", "idempotencyToken", "sensitive", "httpPayload", "httpResponseCode", "httpQueryParams"]) 1 == (e2 >> r2++ & 1) && (t2[n2] = 1);
      return y[e2] = t2;
    }
    const v = /* @__PURE__ */ Symbol.for("@smithy/nor-struct-it"), _ = /* @__PURE__ */ Symbol.for("@smithy/ns"), b = [], S = {};
    class k {
      ref;
      memberName;
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/nor");
      symbol = k.symbol;
      name;
      schema;
      _isMemberSchema;
      traits;
      memberTraits;
      normalizedTraits;
      constructor(e2, t2) {
        this.ref = e2, this.memberName = t2;
        const r2 = [];
        let n2 = e2, s2 = e2;
        for (this._isMemberSchema = false; E(n2); ) r2.push(n2[1]), n2 = n2[0], s2 = i(n2), this._isMemberSchema = true;
        if (r2.length > 0) {
          this.memberTraits = {};
          for (let e3 = r2.length - 1; e3 >= 0; --e3) {
            const t3 = r2[e3];
            Object.assign(this.memberTraits, w(t3));
          }
        } else this.memberTraits = 0;
        if (s2 instanceof k) {
          const e3 = this.memberTraits;
          return Object.assign(this, s2), this.memberTraits = Object.assign({}, e3, s2.getMemberTraits(), this.getMemberTraits()), this.normalizedTraits = void 0, void (this.memberName = t2 ?? s2.memberName);
        }
        if (this.schema = i(s2), I(this.schema) ? (this.name = `${this.schema[1]}#${this.schema[2]}`, this.traits = this.schema[3]) : (this.name = this.memberName ?? String(s2), this.traits = 0), this._isMemberSchema && !t2) throw new Error(`@smithy/core/schema - NormalizedSchema member init ${this.getName(true)} missing member name.`);
      }
      static [Symbol.hasInstance](e2) {
        const t2 = this.prototype.isPrototypeOf(e2);
        if (!t2 && "object" == typeof e2 && null !== e2) {
          return e2.symbol === this.symbol;
        }
        return t2;
      }
      static of(e2) {
        const t2 = "function" == typeof e2 || "object" == typeof e2 && null !== e2;
        if ("number" == typeof e2) {
          if (b[e2]) return b[e2];
        } else if ("string" == typeof e2) {
          if (S[e2]) return S[e2];
        } else if (t2 && e2[_]) return e2[_];
        const r2 = i(e2);
        if (r2 instanceof k) return r2;
        if (E(r2)) {
          const [t3, n3] = r2;
          if (t3 instanceof k) return Object.assign(t3.getMergedTraits(), w(n3)), t3;
          throw new Error(`@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(e2, null, 2)}.`);
        }
        const n2 = new k(r2);
        return t2 ? e2[_] = n2 : "string" == typeof r2 ? S[r2] = n2 : "number" == typeof r2 ? b[r2] = n2 : n2;
      }
      getSchema() {
        const e2 = this.schema;
        return Array.isArray(e2) && 0 === e2[0] ? e2[4] : e2;
      }
      getName(e2 = false) {
        const { name: t2 } = this;
        return !e2 && t2 && t2.includes("#") ? t2.split("#")[1] : t2 || void 0;
      }
      getMemberName() {
        return this.memberName;
      }
      isMemberSchema() {
        return this._isMemberSchema;
      }
      isListSchema() {
        const e2 = this.getSchema();
        return "number" == typeof e2 ? e2 >= 64 && e2 < 128 : 1 === e2[0];
      }
      isMapSchema() {
        const e2 = this.getSchema();
        return "number" == typeof e2 ? e2 >= 128 && e2 <= 255 : 2 === e2[0];
      }
      isStructSchema() {
        const e2 = this.getSchema();
        if ("object" != typeof e2) return false;
        const t2 = e2[0];
        return 3 === t2 || -3 === t2 || 4 === t2;
      }
      isUnionSchema() {
        const e2 = this.getSchema();
        return "object" == typeof e2 && 4 === e2[0];
      }
      isBlobSchema() {
        const e2 = this.getSchema();
        return 21 === e2 || 42 === e2;
      }
      isTimestampSchema() {
        const e2 = this.getSchema();
        return "number" == typeof e2 && e2 >= 4 && e2 <= 7;
      }
      isUnitSchema() {
        return "unit" === this.getSchema();
      }
      isDocumentSchema() {
        return 15 === this.getSchema();
      }
      isStringSchema() {
        return 0 === this.getSchema();
      }
      isBooleanSchema() {
        return 2 === this.getSchema();
      }
      isNumericSchema() {
        return 1 === this.getSchema();
      }
      isBigIntegerSchema() {
        return 17 === this.getSchema();
      }
      isBigDecimalSchema() {
        return 19 === this.getSchema();
      }
      isStreaming() {
        const { streaming: e2 } = this.getMergedTraits();
        return !!e2 || 42 === this.getSchema();
      }
      isIdempotencyToken() {
        return !!this.getMergedTraits().idempotencyToken;
      }
      getMergedTraits() {
        return this.normalizedTraits ?? (this.normalizedTraits = { ...this.getOwnTraits(), ...this.getMemberTraits() });
      }
      getMemberTraits() {
        return w(this.memberTraits);
      }
      getOwnTraits() {
        return w(this.traits);
      }
      getKeySchema() {
        const [e2, t2] = [this.isDocumentSchema(), this.isMapSchema()];
        if (!e2 && !t2) throw new Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(true)}`);
        const r2 = this.getSchema();
        return x([e2 ? 15 : r2[4] ?? 0, 0], "key");
      }
      getValueSchema() {
        const e2 = this.getSchema(), [t2, r2, n2] = [this.isDocumentSchema(), this.isMapSchema(), this.isListSchema()], s2 = "number" == typeof e2 ? 63 & e2 : e2 && "object" == typeof e2 && (r2 || n2) ? e2[3 + e2[0]] : t2 ? 15 : void 0;
        if (null != s2) return x([s2, 0], r2 ? "value" : "member");
        throw new Error(`@smithy/core/schema - ${this.getName(true)} has no value member.`);
      }
      getMemberSchema(e2) {
        const t2 = this.getSchema();
        if (this.isStructSchema() && t2[4].includes(e2)) {
          const r2 = t2[4].indexOf(e2), n2 = t2[5][r2];
          return x(E(n2) ? n2 : [n2, 0], e2);
        }
        if (this.isDocumentSchema()) return x([15, 0], e2);
        throw new Error(`@smithy/core/schema - ${this.getName(true)} has no member=${e2}.`);
      }
      getMemberSchemas() {
        const e2 = {};
        try {
          for (const [t2, r2] of this.structIterator()) e2[t2] = r2;
        } catch (e3) {
        }
        return e2;
      }
      getEventStreamMember() {
        if (this.isStructSchema()) {
          for (const [e2, t2] of this.structIterator()) if (t2.isStreaming() && t2.isStructSchema()) return e2;
        }
        return "";
      }
      *structIterator() {
        if (this.isUnitSchema()) return;
        if (!this.isStructSchema()) throw new Error("@smithy/core/schema - cannot iterate non-struct schema.");
        const e2 = this.getSchema(), t2 = e2[4].length;
        let r2 = e2[v];
        if (r2 && t2 === r2.length) yield* r2;
        else {
          r2 = Array(t2);
          for (let n2 = 0; n2 < t2; ++n2) {
            const t3 = e2[4][n2], s2 = x([e2[5][n2], 0], t3);
            yield r2[n2] = [t3, s2];
          }
          e2[v] = r2;
        }
      }
    }
    function x(e2, t2) {
      if (e2 instanceof k) return Object.assign(e2, { memberName: t2, _isMemberSchema: true });
      return new k(e2, t2);
    }
    const E = (e2) => Array.isArray(e2) && 2 === e2.length, I = (e2) => Array.isArray(e2) && e2.length >= 5;
    class T extends d {
      static symbol = /* @__PURE__ */ Symbol.for("@smithy/sim");
      schemaRef;
      symbol = T.symbol;
    }
    class C {
      namespace;
      schemas;
      exceptions;
      static registries = /* @__PURE__ */ new Map();
      constructor(e2, t2 = /* @__PURE__ */ new Map(), r2 = /* @__PURE__ */ new Map()) {
        this.namespace = e2, this.schemas = t2, this.exceptions = r2;
      }
      static for(e2) {
        return C.registries.has(e2) || C.registries.set(e2, new C(e2)), C.registries.get(e2);
      }
      copyFrom(e2) {
        const { schemas: t2, exceptions: r2 } = this;
        for (const [r3, n2] of e2.schemas) t2.has(r3) || t2.set(r3, n2);
        for (const [t3, n2] of e2.exceptions) r2.has(t3) || r2.set(t3, n2);
      }
      register(e2, t2) {
        const r2 = this.normalizeShapeId(e2);
        for (const e3 of [this, C.for(r2.split("#")[0])]) e3.schemas.set(r2, t2);
      }
      getSchema(e2) {
        const t2 = this.normalizeShapeId(e2);
        if (!this.schemas.has(t2)) {
          if (!e2.includes("#")) {
            const t3 = "#" + e2, r2 = [];
            for (const [e3, n2] of this.schemas.entries()) e3.endsWith(t3) && r2.push(n2);
            if (1 === r2.length) return r2[0];
          }
          throw new Error(`@smithy/core/schema - schema not found for ${t2}`);
        }
        return this.schemas.get(t2);
      }
      registerError(e2, t2) {
        const r2 = e2, n2 = r2[1];
        for (const e3 of [this, C.for(n2)]) e3.schemas.set(n2 + "#" + r2[2], r2), e3.exceptions.set(r2, t2);
      }
      getErrorCtor(e2) {
        const t2 = e2;
        if (this.exceptions.has(t2)) return this.exceptions.get(t2);
        return C.for(t2[1]).exceptions.get(t2);
      }
      getBaseException() {
        for (const e2 of this.exceptions.keys()) if (Array.isArray(e2)) {
          const [, t2, r2] = e2, n2 = t2 + "#" + r2;
          if (n2.startsWith("smithy.ts.sdk.synthetic.") && n2.endsWith("ServiceException")) return e2;
        }
      }
      find(e2) {
        for (const t2 of this.schemas.values()) if (e2(t2)) return t2;
      }
      clear() {
        this.schemas.clear(), this.exceptions.clear();
      }
      normalizeShapeId(e2) {
        return e2.includes("#") ? e2 : this.namespace + "#" + e2;
      }
    }
    t.ErrorSchema = g, t.ListSchema = p, t.MapSchema = m, t.NormalizedSchema = k, t.OperationSchema = h, t.SCHEMA = { BLOB: 21, STREAMING_BLOB: 42, BOOLEAN: 2, STRING: 0, NUMERIC: 1, BIG_INTEGER: 17, BIG_DECIMAL: 19, DOCUMENT: 15, TIMESTAMP_DEFAULT: 4, TIMESTAMP_DATE_TIME: 5, TIMESTAMP_HTTP_DATE: 6, TIMESTAMP_EPOCH_SECONDS: 7, LIST_MODIFIER: 64, MAP_MODIFIER: 128 }, t.Schema = d, t.SimpleSchema = T, t.StructureSchema = f, t.TypeRegistry = C, t.deref = i, t.deserializerMiddlewareOption = l, t.error = (e2, t2, r2, n2, s2, o2) => d.assign(new g(), { name: t2, namespace: e2, traits: r2, memberNames: n2, memberList: s2, ctor: null }), t.getSchemaSerdePlugin = function(e2) {
      return { applyToStack: (t2) => {
        t2.add(/* @__PURE__ */ ((e3) => (t3, r2) => async (s2) => {
          const { operationSchema: i2 } = n(r2), [, c2, l2, u2, d2, p2] = i2 ?? [], m2 = r2.endpointV2 ? async () => o(r2.endpointV2) : e3.endpoint, h2 = await e3.protocol.serializeRequest(a(c2, l2, u2, d2, p2), s2.input, { ...e3, ...r2, endpoint: m2 });
          return t3({ ...s2, request: h2 });
        })(e2), u), t2.add(/* @__PURE__ */ ((e3) => (t3, r2) => async (o2) => {
          const { response: i2 } = await t3(o2), { operationSchema: l2 } = n(r2), [, u2, d2, p2, m2, h2] = l2 ?? [];
          try {
            return { response: i2, output: await e3.protocol.deserializeResponse(a(u2, d2, p2, m2, h2), { ...e3, ...r2 }, i2) };
          } catch (e4) {
            if (Object.defineProperty(e4, "$response", { value: i2, enumerable: false, writable: false, configurable: false }), !("$metadata" in e4)) {
              const t4 = "Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.";
              try {
                e4.message += "\n  " + t4;
              } catch (e5) {
                r2.logger && "NoOpLogger" !== r2.logger?.constructor?.name ? r2.logger?.warn?.(t4) : console.warn(t4);
              }
              void 0 !== e4.$responseBodyText && e4.$response && (e4.$response.body = e4.$responseBodyText);
              try {
                if (s.isInstance(i2)) {
                  const { headers: t5 = {}, statusCode: r3 } = i2, n2 = Object.entries(t5);
                  e4.$metadata = { httpStatusCode: r3, requestId: c(/^x-[\w-]+-request-?id$/, n2), extendedRequestId: c(/^x-[\w-]+-id-2$/, n2), cfId: c(/^x-[\w-]+-cf-id$/, n2) };
                }
              } catch (e5) {
              }
            }
            throw e4;
          }
        })(e2), l), e2.protocol.setSerdeContext(e2);
      } };
    }, t.isStaticSchema = I, t.list = (e2, t2, r2, n2) => d.assign(new p(), { name: t2, namespace: e2, traits: r2, valueSchema: n2 }), t.map = (e2, t2, r2, n2, s2) => d.assign(new m(), { name: t2, namespace: e2, traits: r2, keySchema: n2, valueSchema: s2 }), t.op = (e2, t2, r2, n2, s2) => d.assign(new h(), { name: t2, namespace: e2, traits: r2, input: n2, output: s2 }), t.operation = a, t.serializerMiddlewareOption = u, t.sim = (e2, t2, r2, n2) => d.assign(new T(), { name: t2, namespace: e2, traits: n2, schemaRef: r2 }), t.simAdapter = (e2, t2, r2, n2) => d.assign(new T(), { name: t2, namespace: e2, traits: r2, schemaRef: n2 }), t.simpleSchemaCacheN = b, t.simpleSchemaCacheS = S, t.struct = (e2, t2, r2, n2, s2) => d.assign(new f(), { name: t2, namespace: e2, traits: r2, memberNames: n2, memberList: s2 }), t.traitsCache = y, t.translateTraits = w;
  }