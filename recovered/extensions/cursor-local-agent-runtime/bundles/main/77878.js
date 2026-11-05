// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 77878 range:7314940..7336577
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77878: (e, t, r) => {
    const { Crc32: n } = r(60153), { hasOwn: o } = r(11255), { toHex: s, fromHex: i, toUtf8: a, fromUtf8: l } = r(96851), { Readable: c } = r(57075), { TypeRegistry: u } = r(93353);
    class d {
      bytes;
      constructor(e2) {
        if (this.bytes = e2, 8 !== e2.byteLength) throw new Error("Int64 buffers must be exactly 8 bytes");
      }
      static fromNumber(e2) {
        if (e2 > 9223372036854776e3 || e2 < -9223372036854776e3) throw new Error(`${e2} is too large (or, if negative, too small) to represent as an Int64`);
        const t2 = new Uint8Array(8);
        for (let r2 = 7, n2 = Math.abs(Math.round(e2)); r2 > -1 && n2 > 0; r2--, n2 /= 256) t2[r2] = n2;
        return e2 < 0 && p(t2), new d(t2);
      }
      valueOf() {
        const e2 = this.bytes.slice(0), t2 = 128 & e2[0];
        return t2 && p(e2), parseInt(s(e2), 16) * (t2 ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    }
    function p(e2) {
      for (let t2 = 0; t2 < 8; t2++) e2[t2] ^= 255;
      for (let t2 = 7; t2 > -1 && (e2[t2]++, 0 === e2[t2]); t2--) ;
    }
    class h {
      toUtf8;
      fromUtf8;
      constructor(e2, t2) {
        this.toUtf8 = e2, this.fromUtf8 = t2;
      }
      format(e2) {
        const t2 = [];
        for (const r3 in e2) {
          if (!o(e2, r3)) continue;
          const n3 = this.fromUtf8(r3);
          t2.push(Uint8Array.from([n3.byteLength]), n3, this.formatHeaderValue(e2[r3]));
        }
        const r2 = new Uint8Array(t2.reduce((e3, t3) => e3 + t3.byteLength, 0));
        let n2 = 0;
        for (const e3 of t2) r2.set(e3, n2), n2 += e3.byteLength;
        return r2;
      }
      formatHeaderValue(e2) {
        switch (e2.type) {
          case "boolean":
            return Uint8Array.from([e2.value ? 0 : 1]);
          case "byte":
            return Uint8Array.from([2, e2.value]);
          case "short":
            const t2 = new DataView(new ArrayBuffer(3));
            return t2.setUint8(0, 3), t2.setInt16(1, e2.value, false), new Uint8Array(t2.buffer);
          case "integer":
            const r2 = new DataView(new ArrayBuffer(5));
            return r2.setUint8(0, 4), r2.setInt32(1, e2.value, false), new Uint8Array(r2.buffer);
          case "long":
            const n2 = new Uint8Array(9);
            return n2[0] = 5, n2.set(e2.value.bytes, 1), n2;
          case "binary":
            const o2 = new DataView(new ArrayBuffer(3 + e2.value.byteLength));
            o2.setUint8(0, 6), o2.setUint16(1, e2.value.byteLength, false);
            const s2 = new Uint8Array(o2.buffer);
            return s2.set(e2.value, 3), s2;
          case "string":
            const a2 = this.fromUtf8(e2.value), l2 = new DataView(new ArrayBuffer(3 + a2.byteLength));
            l2.setUint8(0, 7), l2.setUint16(1, a2.byteLength, false);
            const c2 = new Uint8Array(l2.buffer);
            return c2.set(a2, 3), c2;
          case "timestamp":
            const u2 = new Uint8Array(9);
            return u2[0] = 8, u2.set(d.fromNumber(e2.value.valueOf()).bytes, 1), u2;
          case "uuid":
            if (!k.test(e2.value)) throw new Error(`Invalid UUID received: ${e2.value}`);
            const p2 = new Uint8Array(17);
            return p2[0] = 9, p2.set(i(e2.value.replace(/-/g, "")), 1), p2;
        }
      }
      parse(e2) {
        const t2 = {};
        let r2 = 0;
        for (; r2 < e2.byteLength; ) {
          const n2 = e2.getUint8(r2++), o2 = this.toUtf8(new Uint8Array(e2.buffer, e2.byteOffset + r2, n2));
          switch (r2 += n2, e2.getUint8(r2++)) {
            case 0:
              t2[o2] = { type: f, value: true };
              break;
            case 1:
              t2[o2] = { type: f, value: false };
              break;
            case 2:
              t2[o2] = { type: g, value: e2.getInt8(r2++) };
              break;
            case 3:
              t2[o2] = { type: y, value: e2.getInt16(r2, false) }, r2 += 2;
              break;
            case 4:
              t2[o2] = { type: v, value: e2.getInt32(r2, false) }, r2 += 4;
              break;
            case 5:
              t2[o2] = { type: w, value: new d(new Uint8Array(e2.buffer, e2.byteOffset + r2, 8)) }, r2 += 8;
              break;
            case 6:
              const n3 = e2.getUint16(r2, false);
              r2 += 2, t2[o2] = { type: b, value: new Uint8Array(e2.buffer, e2.byteOffset + r2, n3) }, r2 += n3;
              break;
            case 7:
              const i2 = e2.getUint16(r2, false);
              r2 += 2, t2[o2] = { type: _, value: this.toUtf8(new Uint8Array(e2.buffer, e2.byteOffset + r2, i2)) }, r2 += i2;
              break;
            case 8:
              t2[o2] = { type: S, value: new Date(new d(new Uint8Array(e2.buffer, e2.byteOffset + r2, 8)).valueOf()) }, r2 += 8;
              break;
            case 9:
              const a2 = new Uint8Array(e2.buffer, e2.byteOffset + r2, 16);
              r2 += 16, t2[o2] = { type: x, value: `${s(a2.subarray(0, 4))}-${s(a2.subarray(4, 6))}-${s(a2.subarray(6, 8))}-${s(a2.subarray(8, 10))}-${s(a2.subarray(10))}` };
              break;
            default:
              throw new Error("Unrecognized header type tag");
          }
        }
        return t2;
      }
    }
    var m;
    !(function(e2) {
      e2[e2.boolTrue = 0] = "boolTrue", e2[e2.boolFalse = 1] = "boolFalse", e2[e2.byte = 2] = "byte", e2[e2.short = 3] = "short", e2[e2.integer = 4] = "integer", e2[e2.long = 5] = "long", e2[e2.byteArray = 6] = "byteArray", e2[e2.string = 7] = "string", e2[e2.timestamp = 8] = "timestamp", e2[e2.uuid = 9] = "uuid";
    })(m || (m = {}));
    const f = "boolean", g = "byte", y = "short", v = "integer", w = "long", b = "binary", _ = "string", S = "timestamp", x = "uuid", k = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
    class E {
      headerMarshaller;
      messageBuffer;
      isEndOfStream;
      constructor(e2, t2) {
        this.headerMarshaller = new h(e2, t2), this.messageBuffer = [], this.isEndOfStream = false;
      }
      feed(e2) {
        this.messageBuffer.push(this.decode(e2));
      }
      endOfStream() {
        this.isEndOfStream = true;
      }
      getMessage() {
        const e2 = this.messageBuffer.pop(), t2 = this.isEndOfStream;
        return { getMessage: () => e2, isEndOfStream: () => t2 };
      }
      getAvailableMessages() {
        const e2 = this.messageBuffer;
        this.messageBuffer = [];
        const t2 = this.isEndOfStream;
        return { getMessages: () => e2, isEndOfStream: () => t2 };
      }
      encode({ headers: e2, body: t2 }) {
        const r2 = this.headerMarshaller.format(e2), o2 = r2.byteLength + t2.byteLength + 16, s2 = new Uint8Array(o2), i2 = new DataView(s2.buffer, s2.byteOffset, s2.byteLength), a2 = new n();
        return i2.setUint32(0, o2, false), i2.setUint32(4, r2.byteLength, false), a2.update(s2.subarray(0, 8)), i2.setUint32(8, a2.digestSync(), false), s2.set(r2, 12), s2.set(t2, r2.byteLength + 12), a2.update(s2.subarray(8, o2 - 4)), i2.setUint32(o2 - 4, a2.digestSync(), false), s2;
      }
      decode(e2) {
        const { headers: t2, body: r2 } = (function({ byteLength: e3, byteOffset: t3, buffer: r3 }) {
          if (e3 < 16) throw new Error("Provided message too short to accommodate event stream message overhead");
          const o2 = new DataView(r3, t3, e3), s2 = o2.getUint32(0, false);
          if (e3 !== s2) throw new Error("Reported message length does not match received message length");
          const i2 = o2.getUint32(4, false), a2 = o2.getUint32(8, false), l2 = o2.getUint32(e3 - 4, false), c2 = new n();
          if (c2.update(new Uint8Array(r3, t3, 8)), a2 !== c2.digestSync()) throw new Error(`The prelude checksum specified in the message (${a2}) does not match the calculated CRC32 checksum (${c2.digestSync()})`);
          if (c2.update(new Uint8Array(r3, t3 + 8, e3 - 12)), l2 !== c2.digestSync()) throw new Error(`The message checksum (${c2.digestSync()}) did not match the expected value of ${l2}`);
          return { headers: new DataView(r3, t3 + 8 + 4, i2), body: new Uint8Array(r3, t3 + 8 + 4 + i2, s2 - i2 - 16) };
        })(e2);
        return { headers: this.headerMarshaller.parse(t2), body: r2 };
      }
      formatHeaders(e2) {
        return this.headerMarshaller.format(e2);
      }
    }
    class T {
      options;
      constructor(e2) {
        this.options = e2;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const e2 of this.options.inputStream) {
          const t2 = this.options.decoder.decode(e2);
          yield t2;
        }
      }
    }
    class C {
      options;
      constructor(e2) {
        this.options = e2;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const e2 of this.options.messageStream) {
          const t2 = this.options.encoder.encode(e2);
          yield t2;
        }
        this.options.includeEndFrame && (yield new Uint8Array(0));
      }
    }
    class I {
      options;
      constructor(e2) {
        this.options = e2;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const e2 of this.options.messageStream) {
          const t2 = await this.options.deserializer(e2);
          void 0 !== t2 && (yield t2);
        }
      }
    }
    class A {
      options;
      constructor(e2) {
        this.options = e2;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const e2 of this.options.inputStream) {
          const t2 = this.options.serializer(e2);
          yield t2;
        }
      }
    }
    function P(e2) {
      let t2 = 0, r2 = 0, n2 = null, o2 = null;
      const s2 = (e3) => {
        if ("number" != typeof e3) throw new Error("Attempted to allocate an event message where size was not a number: " + e3);
        t2 = e3, r2 = 4, n2 = new Uint8Array(e3);
        new DataView(n2.buffer).setUint32(0, e3, false);
      };
      return { [Symbol.asyncIterator]: async function* () {
        const i2 = e2[Symbol.asyncIterator]();
        for (; ; ) {
          const { value: e3, done: a2 } = await i2.next();
          if (a2) {
            if (!t2) return;
            if (t2 !== r2) throw new Error("Truncated event message received.");
            return void (yield n2);
          }
          const l2 = e3.length;
          let c2 = 0;
          for (; c2 < l2; ) {
            if (!n2) {
              const t3 = l2 - c2;
              o2 || (o2 = new Uint8Array(4));
              const n3 = Math.min(4 - r2, t3);
              if (o2.set(e3.slice(c2, c2 + n3), r2), r2 += n3, c2 += n3, r2 < 4) break;
              s2(new DataView(o2.buffer).getUint32(0, false)), o2 = null;
            }
            const i3 = Math.min(t2 - r2, l2 - c2);
            n2.set(e3.slice(c2, c2 + i3), r2), r2 += i3, c2 += i3, t2 && t2 === r2 && (yield n2, n2 = null, t2 = 0, r2 = 0);
          }
        }
      } };
    }
    function M(e2, t2) {
      return async function(r2) {
        const { value: n2 } = r2.headers[":message-type"];
        if ("error" === n2) {
          const e3 = new Error(r2.headers[":error-message"].value || "UnknownError");
          throw e3.name = r2.headers[":error-code"].value, e3;
        }
        if ("exception" === n2) {
          const n3 = r2.headers[":exception-type"].value, o2 = { [n3]: r2 }, s2 = await e2(o2);
          if (s2.$unknown) {
            const e3 = new Error(t2(r2.body));
            throw e3.name = n3, e3;
          }
          throw s2[n3];
        }
        if ("event" === n2) {
          const t3 = { [r2.headers[":event-type"].value]: r2 }, n3 = await e2(t3);
          if (n3.$unknown) return;
          return n3;
        }
        throw Error(`Unrecognizable event type: ${r2.headers[":event-type"].value}`);
      };
    }
    let R = class {
      eventStreamCodec;
      utfEncoder;
      constructor({ utf8Encoder: e2, utf8Decoder: t2 }) {
        this.eventStreamCodec = new E(e2, t2), this.utfEncoder = e2;
      }
      deserialize(e2, t2) {
        const r2 = P(e2);
        return new I({ messageStream: new T({ inputStream: r2, decoder: this.eventStreamCodec }), deserializer: M(t2, this.utfEncoder) });
      }
      serialize(e2, t2) {
        return new C({ messageStream: new A({ inputStream: e2, serializer: t2 }), encoder: this.eventStreamCodec, includeEndFrame: true });
      }
    };
    class O {
      universalMarshaller;
      constructor({ utf8Encoder: e2, utf8Decoder: t2 }) {
        this.universalMarshaller = new R({ utf8Decoder: t2, utf8Encoder: e2 });
      }
      deserialize(e2, t2) {
        const r2 = "function" == typeof e2[Symbol.asyncIterator] ? e2 : (async function* (e3) {
          let t3 = false, r3 = false;
          const n2 = new Array();
          e3.on("error", (e4) => {
            if (t3 || (t3 = true), e4) throw e4;
          }), e3.on("data", (e4) => {
            n2.push(e4);
          }), e3.on("end", () => {
            t3 = true;
          });
          for (; !r3; ) {
            const e4 = await new Promise((e5) => setTimeout(() => e5(n2.shift()), 0));
            e4 && (yield e4), r3 = t3 && 0 === n2.length;
          }
        })(e2);
        return this.universalMarshaller.deserialize(r2, t2);
      }
      serialize(e2, t2) {
        return c.from(this.universalMarshaller.serialize(e2, t2));
      }
    }
    t.EventStreamCodec = E, t.EventStreamMarshaller = O, t.EventStreamSerde = class {
      marshaller;
      serializer;
      deserializer;
      serdeContext;
      defaultContentType;
      compositeErrorRegistry;
      constructor({ marshaller: e2, serializer: t2, deserializer: r2, serdeContext: n2, defaultContentType: o2, compositeErrorRegistry: s2 }) {
        this.marshaller = e2, this.serializer = t2, this.deserializer = r2, this.serdeContext = n2, this.defaultContentType = o2, this.compositeErrorRegistry = s2;
      }
      async serializeEventStream({ eventStream: e2, requestSchema: t2, initialRequest: r2, initialMessageType: n2 }) {
        const s2 = this.marshaller, i2 = t2.getEventStreamMember(), a2 = t2.getMemberSchema(i2), l2 = this.serializer, c2 = this.defaultContentType, u2 = /* @__PURE__ */ Symbol("initialRequestMarker"), d2 = { async *[Symbol.asyncIterator]() {
          if (r2) {
            const e3 = { ":event-type": { type: "string", value: n2 ?? "initial-request" }, ":message-type": { type: "string", value: "event" }, ":content-type": { type: "string", value: c2 } };
            l2.write(t2, r2);
            const o2 = l2.flush();
            yield { [u2]: true, headers: e3, body: o2 };
          }
          for await (const t3 of e2) yield t3;
        } };
        return s2.serialize(d2, (e3) => {
          if (e3[u2]) return { headers: e3.headers, body: e3.body };
          let t3 = "";
          for (const r4 in e3) if (o(e3, r4) && "__type" !== r4) {
            t3 = r4;
            break;
          }
          const { additionalHeaders: r3, body: n3, eventType: s3, explicitPayloadContentType: i3 } = this.writeEventBody(t3, a2, e3);
          return { headers: { ":event-type": { type: "string", value: s3 }, ":message-type": { type: "string", value: "event" }, ":content-type": { type: "string", value: i3 ?? c2 }, ...r3 }, body: n3 };
        });
      }
      async deserializeEventStream({ response: e2, responseSchema: t2, initialResponseContainer: r2, initialMessageType: n2 }) {
        const s2 = this.marshaller, i2 = t2.getEventStreamMember(), l2 = t2.getMemberSchema(i2).getMemberSchemas(), c2 = /* @__PURE__ */ Symbol("initialResponseMarker"), u2 = s2.deserialize(e2.body, async (e3) => {
          let r3 = "";
          for (const t3 in e3) if (o(e3, t3) && "__type" !== t3) {
            r3 = t3;
            break;
          }
          const s3 = e3[r3].body;
          if (r3 === (n2 ?? "initial-response")) {
            const e4 = await this.deserializer.read(t2, s3);
            return delete e4[i2], { [c2]: true, ...e4 };
          }
          if (r3 in l2) {
            const t3 = l2[r3];
            if (t3.isStructSchema()) {
              const n3 = {};
              let o2 = false;
              for (const [i3, l3] of t3.structIterator()) {
                const { eventHeader: t4, eventPayload: c3 } = l3.getMergedTraits();
                if (o2 = o2 || Boolean(t4 || c3), c3) l3.isBlobSchema() ? n3[i3] = s3 : l3.isStringSchema() ? n3[i3] = (this.serdeContext?.utf8Encoder ?? a)(s3) : l3.isStructSchema() && (n3[i3] = await this.deserializer.read(l3, s3));
                else if (t4) {
                  const t5 = e3[r3].headers[i3]?.value;
                  null != t5 && (l3.isNumericSchema() ? n3[i3] = t5 && "object" == typeof t5 && "bytes" in t5 ? BigInt(t5.toString()) : Number(t5) : n3[i3] = t5);
                }
              }
              return { [r3]: await this.readEventMember(t3, s3, o2, n3) };
            }
            return { [r3]: await this.deserializer.read(t3, s3) };
          }
          return { $unknown: e3 };
        }), d2 = u2[Symbol.asyncIterator](), p2 = await d2.next();
        if (p2.done) return u2;
        if (p2.value?.[c2]) {
          if (!t2) throw new Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
          for (const e3 in p2.value) o(p2.value, e3) && (r2[e3] = p2.value[e3]);
        }
        return { async *[Symbol.asyncIterator]() {
          for (p2?.value?.[c2] || (yield p2.value); ; ) {
            const { done: e3, value: t3 } = await d2.next();
            if (e3) break;
            yield t3;
          }
        } };
      }
      async readEventMember(e2, t2, r2, n2) {
        let o2;
        const s2 = e2.getSchema();
        if (Array.isArray(s2) && -3 === s2[0]) {
          const e3 = s2[1], t3 = u.for(e3);
          this.compositeErrorRegistry?.copyFrom(t3), o2 = (this.compositeErrorRegistry ?? t3)?.getErrorCtor(s2);
        }
        const i2 = r2 ? n2 : 0 === t2.byteLength ? {} : await this.deserializer.read(e2, t2);
        if (o2) {
          const t3 = i2.message ?? i2.Message ?? "Unknown", r3 = {}, n3 = e2.getMergedTraits().error;
          return n3 && (r3.$fault = n3), Object.assign(new o2({}), r3, { message: t3 }, i2);
        }
        return i2;
      }
      writeEventBody(e2, t2, r2) {
        const n2 = this.serializer;
        let o2, s2 = e2, i2 = null;
        const a2 = {};
        if (t2.getSchema()[4].includes(e2)) {
          const s3 = t2.getMemberSchema(e2);
          if (s3.isStructSchema()) {
            for (const [t3, n3] of s3.structIterator()) {
              const { eventHeader: o3, eventPayload: s4 } = n3.getMergedTraits();
              if (s4) i2 = t3;
              else if (o3) {
                const o4 = r2[e2][t3];
                let s5 = "binary";
                n3.isNumericSchema() ? s5 = (-2) ** 31 <= o4 && o4 <= 2 ** 31 - 1 ? "integer" : "long" : n3.isTimestampSchema() ? s5 = "timestamp" : n3.isStringSchema() ? s5 = "string" : n3.isBooleanSchema() && (s5 = "boolean"), null != o4 && (a2[t3] = { type: s5, value: o4 }, delete r2[e2][t3]);
              }
            }
            if (null !== i2) {
              const t3 = s3.getMemberSchema(i2);
              t3.isBlobSchema() ? o2 = "application/octet-stream" : t3.isStringSchema() && (o2 = "text/plain"), n2.write(t3, r2[e2][i2]);
            } else n2.write(s3, r2[e2]);
          } else {
            if (!s3.isUnitSchema()) throw new Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
            n2.write(s3, {});
          }
        } else {
          const [t3, o3] = r2[e2];
          s2 = t3, n2.write(15, o3);
        }
        const c2 = n2.flush() ?? new Uint8Array();
        return { body: "string" == typeof c2 ? (this.serdeContext?.utf8Decoder ?? l)(c2) : c2, eventType: s2, explicitPayloadContentType: o2, additionalHeaders: a2 };
      }
    }, t.HeaderMarshaller = h, t.Int64 = d, t.MessageDecoderStream = T, t.MessageEncoderStream = C, t.SmithyMessageDecoderStream = I, t.SmithyMessageEncoderStream = A, t.UniversalEventStreamMarshaller = R, t.eventStreamSerdeProvider = (e2) => new O(e2), t.getChunkedStream = P, t.getMessageUnmarshaller = M, t.getUnmarshalledStream = function(e2, t2) {
      const r2 = M(t2.deserializer, t2.toUtf8);
      return { [Symbol.asyncIterator]: async function* () {
        for await (const n2 of e2) {
          const e3 = t2.eventStreamCodec.decode(n2), o2 = await r2(e3);
          void 0 !== o2 && (yield o2);
        }
      } };
    }, t.iterableToReadableStream = (e2) => {
      const t2 = e2[Symbol.asyncIterator]();
      return new ReadableStream({ async pull(e3) {
        const { done: r2, value: n2 } = await t2.next();
        if (r2) return e3.close();
        e3.enqueue(n2);
      } });
    }, t.readableStreamToIterable = (e2) => ({ [Symbol.asyncIterator]: async function* () {
      const t2 = e2.getReader();
      try {
        for (; ; ) {
          const { done: e3, value: r2 } = await t2.read();
          if (e3) return;
          yield r2;
        }
      } finally {
        t2.releaseLock();
      }
    } }), t.resolveEventStreamSerdeConfig = (e2) => Object.assign(e2, { eventStreamMarshaller: e2.eventStreamSerdeProvider(e2) }), t.universalEventStreamSerdeProvider = (e2) => new R(e2);
  }