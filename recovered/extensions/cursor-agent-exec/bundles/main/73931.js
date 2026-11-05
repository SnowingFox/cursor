// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 73931 range:6383880..6408757
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
73931: (e, t, r) => {
    const { Uint8ArrayBlobAdapter: n, sdkStreamMixin: s, splitEvery: o, splitHeader: i, fromBase64: a, _parseEpochTimestamp: c, _parseRfc7231DateTime: l, _parseRfc3339DateTimeWithOffset: u, LazyJsonString: d, NumericValue: p, toUtf8: m, fromUtf8: h, generateIdempotencyToken: f, toBase64: g, dateToUtcString: y, quoteHeader: w } = r(96851), { HttpRequest: v, HttpResponse: _, hasOwn: b, isValidHostname: S } = r(11255), { parseQueryString: k, parseUrl: x } = r(11255);
    t.HttpRequest = v, t.HttpResponse = _, t.isValidHostname = S, t.parseQueryString = k, t.parseUrl = x;
    const { TypeRegistry: E, NormalizedSchema: I, translateTraits: T } = r(93353), { FieldPosition: C } = r(52391), P = async (e2 = new Uint8Array(), t2) => {
      if (e2 instanceof Uint8Array) return n.mutate(e2);
      if (!e2) return n.mutate(new Uint8Array());
      const r2 = t2.streamCollector(e2);
      return n.mutate(await r2);
    };
    function A(e2) {
      return encodeURIComponent(e2).replace(/[!'()*]/g, function(e3) {
        return "%" + e3.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    class R {
      serdeContext;
      setSerdeContext(e2) {
        this.serdeContext = e2;
      }
    }
    class M extends R {
      options;
      compositeErrorRegistry;
      constructor(e2) {
        super(), this.options = e2, this.compositeErrorRegistry = E.for(e2.defaultNamespace);
        for (const t2 of e2.errorTypeRegistries ?? []) this.compositeErrorRegistry.copyFrom(t2);
      }
      getRequestType() {
        return v;
      }
      getResponseType() {
        return _;
      }
      setSerdeContext(e2) {
        this.serdeContext = e2, this.serializer.setSerdeContext(e2), this.deserializer.setSerdeContext(e2), this.getPayloadCodec() && this.getPayloadCodec().setSerdeContext(e2);
      }
      updateServiceEndpoint(e2, t2) {
        if ("url" in t2) {
          e2.protocol = t2.url.protocol, e2.hostname = t2.url.hostname, e2.port = t2.url.port ? Number(t2.url.port) : void 0, e2.path = t2.url.pathname, e2.fragment = t2.url.hash || void 0, e2.username = t2.url.username || void 0, e2.password = t2.url.password || void 0, e2.query || (e2.query = {});
          for (const [r2, n2] of t2.url.searchParams.entries()) e2.query[r2] = n2;
          if (t2.headers) for (const r2 in t2.headers) b(t2.headers, r2) && (e2.headers[r2] = t2.headers[r2].join(", "));
          return e2;
        }
        if (e2.protocol = t2.protocol, e2.hostname = t2.hostname, e2.port = t2.port ? Number(t2.port) : void 0, e2.path = t2.path, e2.query = { ...t2.query }, t2.headers) for (const r2 in t2.headers) b(t2.headers, r2) && (e2.headers[r2] = t2.headers[r2]);
        return e2;
      }
      setHostPrefix(e2, t2, r2) {
        if (this.serdeContext?.disableHostPrefix) return;
        const n2 = I.of(t2.input), s2 = T(t2.traits ?? {});
        if (s2.endpoint) {
          let t3 = s2.endpoint?.[0];
          if ("string" == typeof t3) {
            for (const [e3, s3] of n2.structIterator()) {
              if (!s3.getMergedTraits().hostLabel) continue;
              const n3 = r2[e3];
              if ("string" != typeof n3) throw new Error(`@smithy/core/schema - ${e3} in input must be a string as hostLabel.`);
              t3 = t3.replace(`{${e3}}`, n3);
            }
            if (e2.hostname = t3 + e2.hostname, !S(e2.hostname)) throw new Error(`[${e2.hostname}] is not a valid hostname.`);
          }
        }
      }
      deserializeMetadata(e2) {
        return { httpStatusCode: e2.statusCode, requestId: e2.headers["x-amzn-requestid"] ?? e2.headers["x-amzn-request-id"] ?? e2.headers["x-amz-request-id"], extendedRequestId: e2.headers["x-amz-id-2"], cfId: e2.headers["x-amz-cf-id"] };
      }
      async serializeEventStream({ eventStream: e2, requestSchema: t2, initialRequest: r2 }) {
        return (await this.loadEventStreamCapability()).serializeEventStream({ eventStream: e2, requestSchema: t2, initialRequest: r2 });
      }
      async deserializeEventStream({ response: e2, responseSchema: t2, initialResponseContainer: r2 }) {
        return (await this.loadEventStreamCapability()).deserializeEventStream({ response: e2, responseSchema: t2, initialResponseContainer: r2 });
      }
      async loadEventStreamCapability() {
        const { EventStreamSerde: e2, eventStreamSerdeProvider: t2 } = r(77878);
        return new e2({ marshaller: this.resolveEventStreamMarshaller(t2), serializer: this.serializer, deserializer: this.deserializer, serdeContext: this.serdeContext, defaultContentType: this.getDefaultContentType(), compositeErrorRegistry: this.compositeErrorRegistry });
      }
      resolveEventStreamMarshaller(e2) {
        const t2 = this.serdeContext;
        return t2.eventStreamMarshaller ? t2.eventStreamMarshaller : e2(this.serdeContext);
      }
      getDefaultContentType() {
        throw new Error(`@smithy/core/protocols - ${this.constructor.name} getDefaultContentType() implementation missing.`);
      }
      async deserializeHttpMessage(e2, t2, r2, n2, s2) {
        return [];
      }
      getEventStreamMarshaller() {
        const e2 = this.serdeContext;
        if (!e2.eventStreamMarshaller) throw new Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
        return e2.eventStreamMarshaller;
      }
    }
    const J = (e2, t2, r2, n2, s2, o2) => {
      if (null == t2 || void 0 === t2[r2]) throw new Error("No value provided for input HTTP label: " + r2 + ".");
      {
        const t3 = n2();
        if (null == t3 || t3.length <= 0) throw new Error("Empty value provided for input HTTP label: " + r2 + ".");
        e2 = e2.replace(s2, o2 ? t3.split("/").map((e3) => A(e3)).join("/") : A(t3));
      }
      return e2;
    };
    class O {
      input;
      context;
      query = {};
      method = "";
      headers = {};
      path = "";
      body = null;
      hostname = "";
      resolvePathStack = [];
      constructor(e2, t2) {
        this.input = e2, this.context = t2;
      }
      async build() {
        const { hostname: e2, protocol: t2 = "https", port: r2, path: n2 } = await this.context.endpoint();
        this.path = n2;
        for (const e3 of this.resolvePathStack) e3(this.path);
        return new v({ protocol: t2, hostname: this.hostname || e2, port: r2, method: this.method, path: this.path, query: this.query, body: this.body, headers: this.headers });
      }
      hn(e2) {
        return this.hostname = e2, this;
      }
      bp(e2) {
        return this.resolvePathStack.push((t2) => {
          this.path = `${t2?.endsWith("/") ? t2.slice(0, -1) : t2 || ""}` + e2;
        }), this;
      }
      p(e2, t2, r2, n2) {
        return this.resolvePathStack.push((s2) => {
          this.path = J(s2, this.input, e2, t2, r2, n2);
        }), this;
      }
      h(e2) {
        return this.headers = e2, this;
      }
      q(e2) {
        return this.query = e2, this;
      }
      b(e2) {
        return this.body = e2, this;
      }
      m(e2) {
        return this.method = e2, this;
      }
    }
    function B(e2, t2) {
      if (t2.timestampFormat.useTrait && e2.isTimestampSchema() && (5 === e2.getSchema() || 6 === e2.getSchema() || 7 === e2.getSchema())) return e2.getSchema();
      const { httpLabel: r2, httpPrefixHeaders: n2, httpHeader: s2, httpQuery: o2 } = e2.getMergedTraits();
      return (t2.httpBindings ? "string" == typeof n2 || Boolean(s2) ? 6 : Boolean(o2) || Boolean(r2) ? 5 : void 0 : void 0) ?? t2.timestampFormat.default;
    }
    class D extends R {
      settings;
      constructor(e2) {
        super(), this.settings = e2;
      }
      read(e2, t2) {
        const r2 = I.of(e2);
        if (r2.isListSchema()) return i(t2).map((e3) => this.read(r2.getValueSchema(), e3));
        if (r2.isBlobSchema()) return (this.serdeContext?.base64Decoder ?? a)(t2);
        if (r2.isTimestampSchema()) {
          switch (B(r2, this.settings)) {
            case 5:
              return u(t2);
            case 6:
              return l(t2);
            case 7:
              return c(t2);
            default:
              return console.warn("Missing timestamp format, parsing value with Date constructor:", t2), new Date(t2);
          }
        }
        if (r2.isStringSchema()) {
          const e3 = r2.getMergedTraits().mediaType;
          let n2 = t2;
          if (e3) {
            r2.getMergedTraits().httpHeader && (n2 = this.base64ToUtf8(n2));
            return ("application/json" === e3 || e3.endsWith("+json")) && (n2 = d.from(n2)), n2;
          }
        }
        return r2.isNumericSchema() ? Number(t2) : r2.isBigIntegerSchema() ? BigInt(t2) : r2.isBigDecimalSchema() ? new p(t2, "bigDecimal") : r2.isBooleanSchema() ? "true" === String(t2).toLowerCase() : t2;
      }
      base64ToUtf8(e2) {
        return (this.serdeContext?.utf8Encoder ?? m)((this.serdeContext?.base64Decoder ?? a)(e2));
      }
    }
    class q extends R {
      settings;
      stringBuffer = "";
      constructor(e2) {
        super(), this.settings = e2;
      }
      write(e2, t2) {
        const r2 = I.of(e2);
        switch (typeof t2) {
          case "object":
            if (null === t2) return void (this.stringBuffer = "null");
            if (r2.isTimestampSchema()) {
              if (!(t2 instanceof Date)) throw new Error(`@smithy/core/protocols - received non-Date value ${t2} when schema expected Date in ${r2.getName(true)}`);
              switch (B(r2, this.settings)) {
                case 5:
                  this.stringBuffer = t2.toISOString().replace(".000Z", "Z");
                  break;
                case 6:
                  this.stringBuffer = y(t2);
                  break;
                case 7:
                  this.stringBuffer = String(t2.getTime() / 1e3);
                  break;
                default:
                  console.warn("Missing timestamp format, using epoch seconds", t2), this.stringBuffer = String(t2.getTime() / 1e3);
              }
              return;
            }
            if (r2.isBlobSchema() && "byteLength" in t2) return void (this.stringBuffer = (this.serdeContext?.base64Encoder ?? g)(t2));
            if (r2.isListSchema() && Array.isArray(t2)) {
              let e4 = "";
              for (const n3 of t2) {
                this.write([r2.getValueSchema(), r2.getMergedTraits()], n3);
                const t3 = this.flush();
                "" !== e4 && (e4 += ", "), e4 += r2.getValueSchema().isTimestampSchema() ? t3 : w(t3);
              }
              return void (this.stringBuffer = e4);
            }
            this.stringBuffer = JSON.stringify(t2, null, 2);
            break;
          case "string":
            const e3 = r2.getMergedTraits().mediaType;
            let n2 = t2;
            if (e3) {
              if (("application/json" === e3 || e3.endsWith("+json")) && (n2 = d.from(n2)), r2.getMergedTraits().httpHeader) return void (this.stringBuffer = (this.serdeContext?.base64Encoder ?? g)(n2.toString()));
            }
            this.stringBuffer = t2;
            break;
          default:
            r2.isIdempotencyToken() ? this.stringBuffer = f() : this.stringBuffer = String(t2);
        }
      }
      flush() {
        const e2 = this.stringBuffer;
        return this.stringBuffer = "", e2;
      }
    }
    const N = "content-length";
    function F(e2) {
      return (t2) => async (r2) => {
        const n2 = r2.request;
        if (v.isInstance(n2)) {
          const { body: t3, headers: r3 } = n2;
          if (t3 && -1 === Object.keys(r3).map((e3) => e3.toLowerCase()).indexOf(N)) try {
            const r4 = e2(t3);
            null != r4 && (n2.headers = { ...n2.headers, [N]: String(r4) });
          } catch (e3) {
          }
        }
        return t2({ ...r2, request: n2 });
      };
    }
    const U = { step: "build", tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"], name: "contentLengthMiddleware", override: true }, L = (e2) => encodeURIComponent(e2).replace(/[!'()*]/g, $), $ = (e2) => `%${e2.charCodeAt(0).toString(16).toUpperCase()}`;
    t.Field = class {
      name;
      kind;
      values;
      constructor({ name: e2, kind: t2 = C.HEADER, values: r2 = [] }) {
        this.name = e2, this.kind = t2, this.values = r2;
      }
      add(e2) {
        this.values.push(e2);
      }
      set(e2) {
        this.values = e2;
      }
      remove(e2) {
        this.values = this.values.filter((t2) => t2 !== e2);
      }
      toString() {
        return this.values.map((e2) => e2.includes(",") || e2.includes(" ") ? `"${e2}"` : e2).join(", ");
      }
      get() {
        return this.values;
      }
    }, t.Fields = class {
      entries = {};
      encoding;
      constructor({ fields: e2 = [], encoding: t2 = "utf-8" }) {
        e2.forEach(this.setField.bind(this)), this.encoding = t2;
      }
      setField(e2) {
        this.entries[e2.name.toLowerCase()] = e2;
      }
      getField(e2) {
        return this.entries[e2.toLowerCase()];
      }
      removeField(e2) {
        delete this.entries[e2.toLowerCase()];
      }
      getByType(e2) {
        return Object.values(this.entries).filter((t2) => t2.kind === e2);
      }
    }, t.FromStringShapeDeserializer = D, t.HttpBindingProtocol = class extends M {
      async serializeRequest(e2, t2, r2) {
        const n2 = t2 && "object" == typeof t2 ? t2 : {}, s2 = this.serializer, o2 = {}, i2 = {}, a2 = await r2.endpoint(), c2 = I.of(e2?.input), l2 = [], u2 = [];
        let d2, p2 = false;
        const m2 = new v({ protocol: "", hostname: "", port: void 0, path: "", fragment: void 0, query: o2, headers: i2, body: void 0 });
        if (a2) {
          this.updateServiceEndpoint(m2, a2), this.setHostPrefix(m2, e2, n2);
          const t3 = T(e2.traits);
          if (t3.http) {
            m2.method = t3.http[0];
            const [e3, r3] = t3.http[1].split("?");
            "/" == m2.path ? m2.path = e3 : m2.path += e3;
            const n3 = new URLSearchParams(r3 ?? "");
            for (const [e4, t4] of n3) o2[e4] = t4;
          }
        }
        for (const [e3, t3] of c2.structIterator()) {
          const r3 = t3.getMergedTraits() ?? {}, a3 = n2[e3];
          if (null != a3 || t3.isIdempotencyToken()) if (r3.httpPayload) {
            if (t3.isStreaming()) {
              t3.isStructSchema() ? n2[e3] && (d2 = await this.serializeEventStream({ eventStream: n2[e3], requestSchema: c2 })) : d2 = a3;
            } else s2.write(t3, a3), d2 = s2.flush();
          } else if (r3.httpLabel) {
            s2.write(t3, a3);
            const r4 = s2.flush();
            m2.path.includes(`{${e3}+}`) ? m2.path = m2.path.replace(`{${e3}+}`, r4.split("/").map(A).join("/")) : m2.path.includes(`{${e3}}`) && (m2.path = m2.path.replace(`{${e3}}`, A(r4)));
          } else if (r3.httpHeader) s2.write(t3, a3), i2[r3.httpHeader.toLowerCase()] = String(s2.flush());
          else if ("string" == typeof r3.httpPrefixHeaders) for (const e4 in a3) {
            if (!b(a3, e4)) continue;
            const n3 = a3[e4], o3 = r3.httpPrefixHeaders + e4;
            s2.write([t3.getValueSchema(), { httpHeader: o3 }], n3), i2[o3.toLowerCase()] = s2.flush();
          }
          else r3.httpQuery || r3.httpQueryParams ? this.serializeQuery(t3, a3, o2) : (p2 = true, l2.push(e3), u2.push(t3));
          else if (r3.httpLabel && (m2.path.includes(`{${e3}+}`) || m2.path.includes(`{${e3}}`))) throw new Error(`No value provided for input HTTP label: ${e3}.`);
        }
        if (p2 && n2) {
          const [e3, t3] = (c2.getName(true) ?? "#Unknown").split("#"), r3 = c2.getSchema()[6], o3 = [3, e3, t3, c2.getMergedTraits(), l2, u2, void 0];
          r3 ? o3[6] = r3 : o3.pop(), s2.write(o3, n2), d2 = s2.flush();
        }
        return m2.headers = i2, m2.query = o2, m2.body = d2, m2;
      }
      serializeQuery(e2, t2, r2) {
        const n2 = this.serializer, s2 = e2.getMergedTraits();
        if (s2.httpQueryParams) {
          for (const n3 in t2) if (b(t2, n3) && !(n3 in r2)) {
            const o2 = t2[n3], i2 = e2.getValueSchema();
            Object.assign(i2.getMergedTraits(), { ...s2, httpQuery: n3, httpQueryParams: void 0 }), this.serializeQuery(i2, o2, r2);
          }
        } else if (e2.isListSchema()) {
          const o2 = !!e2.getMergedTraits().sparse, i2 = [];
          for (const r3 of t2) {
            n2.write([e2.getValueSchema(), s2], r3);
            const t3 = n2.flush();
            (o2 || void 0 !== t3) && i2.push(t3);
          }
          r2[s2.httpQuery] = i2;
        } else n2.write([e2, s2], t2), r2[s2.httpQuery] = n2.flush();
      }
      async deserializeResponse(e2, t2, r2) {
        const n2 = this.deserializer, s2 = I.of(e2.output), o2 = {};
        if (r2.statusCode >= 300) {
          const s3 = await P(r2.body, t2);
          throw s3.byteLength > 0 && Object.assign(o2, await n2.read(15, s3)), await this.handleError(e2, t2, r2, o2, this.deserializeMetadata(r2)), new Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
        }
        for (const e3 in r2.headers) {
          if (!b(r2.headers, e3)) continue;
          const t3 = r2.headers[e3];
          delete r2.headers[e3], r2.headers[e3.toLowerCase()] = t3;
        }
        const i2 = await this.deserializeHttpMessage(s2, t2, r2, o2);
        if (i2.length) {
          const e3 = await P(r2.body, t2);
          if (e3.byteLength > 0) {
            const t3 = await n2.read(s2, e3);
            for (const e4 of i2) null != t3[e4] && (o2[e4] = t3[e4]);
          }
        } else i2.discardResponseBody && await P(r2.body, t2);
        return o2.$metadata = this.deserializeMetadata(r2), o2;
      }
      async deserializeHttpMessage(e2, t2, r2, n2, a2) {
        let c2;
        c2 = n2 instanceof Set ? a2 : n2;
        let l2 = true;
        const u2 = this.deserializer, d2 = I.of(e2), p2 = [];
        for (const [e3, n3] of d2.structIterator()) {
          const a3 = n3.getMemberTraits();
          if (a3.httpPayload) {
            l2 = false;
            if (n3.isStreaming()) {
              const t3 = n3.isStructSchema();
              c2[e3] = t3 ? await this.deserializeEventStream({ response: r2, responseSchema: d2 }) : s(r2.body);
            } else if (r2.body) {
              const s2 = await P(r2.body, t2);
              s2.byteLength > 0 && (c2[e3] = await u2.read(n3, s2));
            }
          } else if (a3.httpHeader) {
            const t3 = String(a3.httpHeader).toLowerCase(), s2 = r2.headers[t3];
            if (null != s2) if (n3.isListSchema()) {
              const r3 = n3.getValueSchema();
              let a4;
              r3.getMergedTraits().httpHeader = t3, a4 = r3.isTimestampSchema() && 4 === r3.getSchema() ? o(s2, ",", 2) : i(s2);
              const l3 = [];
              for (const e4 of a4) l3.push(await u2.read(r3, e4.trim()));
              c2[e3] = l3;
            } else c2[e3] = await u2.read(n3, s2);
          } else if (void 0 !== a3.httpPrefixHeaders) {
            c2[e3] = {};
            for (const t3 in r2.headers) if (b(r2.headers, t3) && t3.startsWith(a3.httpPrefixHeaders)) {
              const s2 = r2.headers[t3], o2 = n3.getValueSchema();
              o2.getMergedTraits().httpHeader = t3, c2[e3][t3.slice(a3.httpPrefixHeaders.length)] = await u2.read(o2, s2);
            }
          } else a3.httpResponseCode ? c2[e3] = r2.statusCode : p2.push(e3);
        }
        return p2.discardResponseBody = l2, p2;
      }
    }, t.HttpInterceptingShapeDeserializer = class extends R {
      codecDeserializer;
      stringDeserializer;
      constructor(e2, t2) {
        super(), this.codecDeserializer = e2, this.stringDeserializer = new D(t2);
      }
      setSerdeContext(e2) {
        this.stringDeserializer.setSerdeContext(e2), this.codecDeserializer.setSerdeContext(e2), this.serdeContext = e2;
      }
      read(e2, t2) {
        const r2 = I.of(e2), n2 = r2.getMergedTraits(), s2 = this.serdeContext?.utf8Encoder ?? m;
        if (n2.httpHeader || n2.httpResponseCode) return this.stringDeserializer.read(r2, s2(t2));
        if (n2.httpPayload) {
          if (r2.isBlobSchema()) {
            const e3 = this.serdeContext?.utf8Decoder ?? h;
            return "string" == typeof t2 ? e3(t2) : t2;
          }
          if (r2.isStringSchema()) return "byteLength" in t2 ? s2(t2) : t2;
        }
        return this.codecDeserializer.read(r2, t2);
      }
    }, t.HttpInterceptingShapeSerializer = class {
      codecSerializer;
      stringSerializer;
      buffer;
      constructor(e2, t2, r2 = new q(t2)) {
        this.codecSerializer = e2, this.stringSerializer = r2;
      }
      setSerdeContext(e2) {
        this.codecSerializer.setSerdeContext(e2), this.stringSerializer.setSerdeContext(e2);
      }
      write(e2, t2) {
        const r2 = I.of(e2), n2 = r2.getMergedTraits();
        return n2.httpHeader || n2.httpLabel || n2.httpQuery ? (this.stringSerializer.write(r2, t2), void (this.buffer = this.stringSerializer.flush())) : this.codecSerializer.write(r2, t2);
      }
      flush() {
        if (void 0 !== this.buffer) {
          const e2 = this.buffer;
          return this.buffer = void 0, e2;
        }
        return this.codecSerializer.flush();
      }
    }, t.HttpProtocol = M, t.RequestBuilder = O, t.RpcProtocol = class extends M {
      async serializeRequest(e2, t2, r2) {
        const n2 = this.serializer, s2 = {}, o2 = {}, i2 = await r2.endpoint(), a2 = I.of(e2?.input), c2 = a2.getSchema();
        let l2;
        const u2 = t2 && "object" == typeof t2 ? t2 : {}, d2 = new v({ protocol: "", hostname: "", port: void 0, path: "/", fragment: void 0, query: s2, headers: o2, body: void 0 });
        if (i2 && (this.updateServiceEndpoint(d2, i2), this.setHostPrefix(d2, e2, u2)), u2) {
          const e3 = a2.getEventStreamMember();
          if (e3) {
            if (u2[e3]) {
              const t3 = {};
              for (const [r3] of a2.structIterator()) r3 !== e3 && null != u2[r3] && (t3[r3] = u2[r3]);
              l2 = await this.serializeEventStream({ eventStream: u2[e3], requestSchema: a2, initialRequest: t3 });
            }
          } else n2.write(c2, u2), l2 = n2.flush();
        }
        return d2.headers = Object.assign(d2.headers, o2), d2.query = s2, d2.body = l2, d2.method = "POST", d2;
      }
      async deserializeResponse(e2, t2, r2) {
        const n2 = this.deserializer, s2 = I.of(e2.output), o2 = {};
        if (r2.statusCode >= 300) {
          const s3 = await P(r2.body, t2);
          throw s3.byteLength > 0 && Object.assign(o2, await n2.read(15, s3)), await this.handleError(e2, t2, r2, o2, this.deserializeMetadata(r2)), new Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
        }
        for (const e3 in r2.headers) {
          if (!b(r2.headers, e3)) continue;
          const t3 = r2.headers[e3];
          delete r2.headers[e3], r2.headers[e3.toLowerCase()] = t3;
        }
        const i2 = s2.getEventStreamMember();
        if (i2) o2[i2] = await this.deserializeEventStream({ response: r2, responseSchema: s2, initialResponseContainer: o2 });
        else {
          const e3 = await P(r2.body, t2);
          e3.byteLength > 0 && Object.assign(o2, await n2.read(s2, e3));
        }
        return o2.$metadata = this.deserializeMetadata(r2), o2;
      }
    }, t.SerdeContext = R, t.ToStringShapeSerializer = q, t.buildQueryString = function(e2) {
      const t2 = [];
      for (let r2 of Object.keys(e2).sort()) {
        const n2 = e2[r2];
        if (r2 = L(r2), Array.isArray(n2)) for (let e3 = 0, s2 = n2.length; e3 < s2; e3++) t2.push(`${r2}=${L(n2[e3])}`);
        else {
          let e3 = r2;
          (n2 || "string" == typeof n2) && (e3 += `=${L(n2)}`), t2.push(e3);
        }
      }
      return t2.join("&");
    }, t.collectBody = P, t.contentLengthMiddleware = F, t.contentLengthMiddlewareOptions = U, t.determineTimestampFormat = B, t.escapeUri = L, t.escapeUriPath = (e2) => e2.split("/").map(L).join("/"), t.extendedEncodeURIComponent = A, t.getContentLengthPlugin = (e2) => ({ applyToStack: (t2) => {
      t2.add(F(e2.bodyLengthChecker), U);
    } }), t.getHttpHandlerExtensionConfiguration = (e2) => (e2.logger && "NoOpLogger" !== e2.logger.constructor?.name && e2.requestHandler?.updateHttpClientConfig?.(/* @__PURE__ */ Symbol.for("logger"), e2.logger), { setHttpHandler(t2) {
      e2.requestHandler = t2;
    }, httpHandler: () => e2.requestHandler, updateHttpClientConfig(t2, r2) {
      e2.requestHandler?.updateHttpClientConfig(t2, r2);
    }, httpHandlerConfigs: () => e2.requestHandler.httpHandlerConfigs() }), t.requestBuilder = function(e2, t2) {
      return new O(e2, t2);
    }, t.resolveHttpHandlerRuntimeConfig = (e2) => ({ requestHandler: e2.httpHandler() }), t.resolvedPath = J;
  }