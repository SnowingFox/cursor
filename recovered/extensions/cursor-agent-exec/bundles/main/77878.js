// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 77878 range:6731732..6753369
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77878: (e, t, r) => {
    const { Crc32: n } = r(60153), { hasOwn: s } = r(11255), { toHex: o, fromHex: i, toUtf8: a, fromUtf8: c } = r(96851), { Readable: l } = r(57075), { TypeRegistry: u } = r(93353);
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
        return t2 && p(e2), parseInt(o(e2), 16) * (t2 ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    }
    function p(e2) {
      for (let t2 = 0; t2 < 8; t2++) e2[t2] ^= 255;
      for (let t2 = 7; t2 > -1 && (e2[t2]++, 0 === e2[t2]); t2--) ;
    }
    class m {
      toUtf8;
      fromUtf8;
      constructor(e2, t2) {
        this.toUtf8 = e2, this.fromUtf8 = t2;
      }
      format(e2) {
        const t2 = [];
        for (const r3 in e2) {
          if (!s(e2, r3)) continue;
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
            const s2 = new DataView(new ArrayBuffer(3 + e2.value.byteLength));
            s2.setUint8(0, 6), s2.setUint16(1, e2.value.byteLength, false);
            const o2 = new Uint8Array(s2.buffer);
            return o2.set(e2.value, 3), o2;
          case "string":
            const a2 = this.fromUtf8(e2.value), c2 = new DataView(new ArrayBuffer(3 + a2.byteLength));
            c2.setUint8(0, 7), c2.setUint16(1, a2.byteLength, false);
            const l2 = new Uint8Array(c2.buffer);
            return l2.set(a2, 3), l2;
          case "timestamp":
            const u2 = new Uint8Array(9);
            return u2[0] = 8, u2.set(d.fromNumber(e2.value.valueOf()).bytes, 1), u2;
          case "uuid":
            if (!x.test(e2.value)) throw new Error(`Invalid UUID received: ${e2.value}`);
            const p2 = new Uint8Array(17);
            return p2[0] = 9, p2.set(i(e2.value.replace(/-/g, "")), 1), p2;
        }
      }
      parse(e2) {
        const t2 = {};
        let r2 = 0;
        for (; r2 < e2.byteLength; ) {
          const n2 = e2.getUint8(r2++), s2 = this.toUtf8(new Uint8Array(e2.buffer, e2.byteOffset + r2, n2));
          switch (r2 += n2, e2.getUint8(r2++)) {
            case 0:
              t2[s2] = { type: f, value: true };
              break;
            case 1:
              t2[s2] = { type: f, value: false };
              break;
            case 2:
              t2[s2] = { type: g, value: e2.getInt8(r2++) };
              break;
            case 3:
              t2[s2] = { type: y, value: e2.getInt16(r2, false) }, r2 += 2;
              break;
            case 4:
              t2[s2] = { type: w, value: e2.getInt32(r2, false) }, r2 += 4;
              break;
            case 5:
              t2[s2] = { type: v, value: new d(new Uint8Array(e2.buffer, e2.byteOffset + r2, 8)) }, r2 += 8;
              break;
            case 6:
              const n3 = e2.getUint16(r2, false);
              r2 += 2, t2[s2] = { type: _, value: new Uint8Array(e2.buffer, e2.byteOffset + r2, n3) }, r2 += n3;
              break;
            case 7:
              const i2 = e2.getUint16(r2, false);
              r2 += 2, t2[s2] = { type: b, value: this.toUtf8(new Uint8Array(e2.buffer, e2.byteOffset + r2, i2)) }, r2 += i2;
              break;
            case 8:
              t2[s2] = { type: S, value: new Date(new d(new Uint8Array(e2.buffer, e2.byteOffset + r2, 8)).valueOf()) }, r2 += 8;
              break;
            case 9:
              const a2 = new Uint8Array(e2.buffer, e2.byteOffset + r2, 16);
              r2 += 16, t2[s2] = { type: k, value: `${o(a2.subarray(0, 4))}-${o(a2.subarray(4, 6))}-${o(a2.subarray(6, 8))}-${o(a2.subarray(8, 10))}-${o(a2.subarray(10))}` };
              break;
            default:
              throw new Error("Unrecognized header type tag");
          }
        }
        return t2;
      }
    }
    var h;
    !(function(e2) {
      e2[e2.boolTrue = 0] = "boolTrue", e2[e2.boolFalse = 1] = "boolFalse", e2[e2.byte = 2] = "byte", e2[e2.short = 3] = "short", e2[e2.integer = 4] = "integer", e2[e2.long = 5] = "long", e2[e2.byteArray = 6] = "byteArray", e2[e2.string = 7] = "string", e2[e2.timestamp = 8] = "timestamp", e2[e2.uuid = 9] = "uuid";
    })(h || (h = {}));
    const f = "boolean", g = "byte", y = "short", w = "integer", v = "long", _ = "binary", b = "string", S = "timestamp", k = "uuid", x = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
    class E {
      headerMarshaller;
      messageBuffer;
      isEndOfStream;
      constructor(e2, t2) {
        this.headerMarshaller = new m(e2, t2), this.messageBuffer = [], this.isEndOfStream = false;
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
        const r2 = this.headerMarshaller.format(e2), s2 = r2.byteLength + t2.byteLength + 16, o2 = new Uint8Array(s2), i2 = new DataView(o2.buffer, o2.byteOffset, o2.byteLength), a2 = new n();
        return i2.setUint32(0, s2, false), i2.setUint32(4, r2.byteLength, false), a2.update(o2.subarray(0, 8)), i2.setUint32(8, a2.digestSync(), false), o2.set(r2, 12), o2.set(t2, r2.byteLength + 12), a2.update(o2.subarray(8, s2 - 4)), i2.setUint32(s2 - 4, a2.digestSync(), false), o2;
      }
      decode(e2) {
        const { headers: t2, body: r2 } = (function({ byteLength: e3, byteOffset: t3, buffer: r3 }) {
          if (e3 < 16) throw new Error("Provided message too short to accommodate event stream message overhead");
          const s2 = new DataView(r3, t3, e3), o2 = s2.getUint32(0, false);
          if (e3 !== o2) throw new Error("Reported message length does not match received message length");
          const i2 = s2.getUint32(4, false), a2 = s2.getUint32(8, false), c2 = s2.getUint32(e3 - 4, false), l2 = new n();
          if (l2.update(new Uint8Array(r3, t3, 8)), a2 !== l2.digestSync()) throw new Error(`The prelude checksum specified in the message (${a2}) does not match the calculated CRC32 checksum (${l2.digestSync()})`);
          if (l2.update(new Uint8Array(r3, t3 + 8, e3 - 12)), c2 !== l2.digestSync()) throw new Error(`The message checksum (${l2.digestSync()}) did not match the expected value of ${c2}`);
          return { headers: new DataView(r3, t3 + 8 + 4, i2), body: new Uint8Array(r3, t3 + 8 + 4 + i2, o2 - i2 - 16) };
        })(e2);
        return { headers: this.headerMarshaller.parse(t2), body: r2 };
      }
      formatHeaders(e2) {
        return this.headerMarshaller.format(e2);
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
        for await (const e2 of this.options.inputStream) {
          const t2 = this.options.decoder.decode(e2);
          yield t2;
        }
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
        for await (const e2 of this.options.messageStream) {
          const t2 = this.options.encoder.encode(e2);
          yield t2;
        }
        this.options.includeEndFrame && (yield new Uint8Array(0));
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
          const t2 = await this.options.deserializer(e2);
          void 0 !== t2 && (yield t2);
        }
      }
    }
    class P {
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
    function A(e2) {
      let t2 = 0, r2 = 0, n2 = null, s2 = null;
      const o2 = (e3) => {
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
          const c2 = e3.length;
          let l2 = 0;
          for (; l2 < c2; ) {
            if (!n2) {
              const t3 = c2 - l2;
              s2 || (s2 = new Uint8Array(4));
              const n3 = Math.min(4 - r2, t3);
              if (s2.set(e3.slice(l2, l2 + n3), r2), r2 += n3, l2 += n3, r2 < 4) break;
              o2(new DataView(s2.buffer).getUint32(0, false)), s2 = null;
            }
            const i3 = Math.min(t2 - r2, c2 - l2);
            n2.set(e3.slice(l2, l2 + i3), r2), r2 += i3, l2 += i3, t2 && t2 === r2 && (yield n2, n2 = null, t2 = 0, r2 = 0);
          }
        }
      } };
    }
    function R(e2, t2) {
      return async function(r2) {
        const { value: n2 } = r2.headers[":message-type"];
        if ("error" === n2) {
          const e3 = new Error(r2.headers[":error-message"].value || "UnknownError");
          throw e3.name = r2.headers[":error-code"].value, e3;
        }
        if ("exception" === n2) {
          const n3 = r2.headers[":exception-type"].value, s2 = { [n3]: r2 }, o2 = await e2(s2);
          if (o2.$unknown) {
            const e3 = new Error(t2(r2.body));
            throw e3.name = n3, e3;
          }
          throw o2[n3];
        }
        if ("event" === n2) {
          const t3 = { [r2.headers[":event-type"].value]: r2 }, n3 = await e2(t3);
          if (n3.$unknown) return;
          return n3;
        }
        throw Error(`Unrecognizable event type: ${r2.headers[":event-type"].value}`);
      };
    }
    let M = class {
      eventStreamCodec;
      utfEncoder;
      constructor({ utf8Encoder: e2, utf8Decoder: t2 }) {
        this.eventStreamCodec = new E(e2, t2), this.utfEncoder = e2;
      }
      deserialize(e2, t2) {
        const r2 = A(e2);
        return new C({ messageStream: new I({ inputStream: r2, decoder: this.eventStreamCodec }), deserializer: R(t2, this.utfEncoder) });
      }
      serialize(e2, t2) {
        return new T({ messageStream: new P({ inputStream: e2, serializer: t2 }), encoder: this.eventStreamCodec, includeEndFrame: true });
      }
    };
    class J {
      universalMarshaller;
      constructor({ utf8Encoder: e2, utf8Decoder: t2 }) {
        this.universalMarshaller = new M({ utf8Decoder: t2, utf8Encoder: e2 });
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
        return l.from(this.universalMarshaller.serialize(e2, t2));
      }
    }
    t.EventStreamCodec = E, t.EventStreamMarshaller = J, t.EventStreamSerde = class {
      marshaller;
      serializer;
      deserializer;
      serdeContext;
      defaultContentType;
      compositeErrorRegistry;
      constructor({ marshaller: e2, serializer: t2, deserializer: r2, serdeContext: n2, defaultContentType: s2, compositeErrorRegistry: o2 }) {
        this.marshaller = e2, this.serializer = t2, this.deserializer = r2, this.serdeContext = n2, this.defaultContentType = s2, this.compositeErrorRegistry = o2;
      }
      async serializeEventStream({ eventStream: e2, requestSchema: t2, initialRequest: r2, initialMessageType: n2 }) {
        const o2 = this.marshaller, i2 = t2.getEventStreamMember(), a2 = t2.getMemberSchema(i2), c2 = this.serializer, l2 = this.defaultContentType, u2 = /* @__PURE__ */ Symbol("initialRequestMarker"), d2 = { async *[Symbol.asyncIterator]() {
          if (r2) {
            const e3 = { ":event-type": { type: "string", value: n2 ?? "initial-request" }, ":message-type": { type: "string", value: "event" }, ":content-type": { type: "string", value: l2 } };
            c2.write(t2, r2);
            const s2 = c2.flush();
            yield { [u2]: true, headers: e3, body: s2 };
          }
          for await (const t3 of e2) yield t3;
        } };
        return o2.serialize(d2, (e3) => {
          if (e3[u2]) return { headers: e3.headers, body: e3.body };
          let t3 = "";
          for (const r4 in e3) if (s(e3, r4) && "__type" !== r4) {
            t3 = r4;
            break;
          }
          const { additionalHeaders: r3, body: n3, eventType: o3, explicitPayloadContentType: i3 } = this.writeEventBody(t3, a2, e3);
          return { headers: { ":event-type": { type: "string", value: o3 }, ":message-type": { type: "string", value: "event" }, ":content-type": { type: "string", value: i3 ?? l2 }, ...r3 }, body: n3 };
        });
      }
      async deserializeEventStream({ response: e2, responseSchema: t2, initialResponseContainer: r2, initialMessageType: n2 }) {
        const o2 = this.marshaller, i2 = t2.getEventStreamMember(), c2 = t2.getMemberSchema(i2).getMemberSchemas(), l2 = /* @__PURE__ */ Symbol("initialResponseMarker"), u2 = o2.deserialize(e2.body, async (e3) => {
          let r3 = "";
          for (const t3 in e3) if (s(e3, t3) && "__type" !== t3) {
            r3 = t3;
            break;
          }
          const o3 = e3[r3].body;
          if (r3 === (n2 ?? "initial-response")) {
            const e4 = await this.deserializer.read(t2, o3);
            return delete e4[i2], { [l2]: true, ...e4 };
          }
          if (r3 in c2) {
            const t3 = c2[r3];
            if (t3.isStructSchema()) {
              const n3 = {};
              let s2 = false;
              for (const [i3, c3] of t3.structIterator()) {
                const { eventHeader: t4, eventPayload: l3 } = c3.getMergedTraits();
                if (s2 = s2 || Boolean(t4 || l3), l3) c3.isBlobSchema() ? n3[i3] = o3 : c3.isStringSchema() ? n3[i3] = (this.serdeContext?.utf8Encoder ?? a)(o3) : c3.isStructSchema() && (n3[i3] = await this.deserializer.read(c3, o3));
                else if (t4) {
                  const t5 = e3[r3].headers[i3]?.value;
                  null != t5 && (c3.isNumericSchema() ? n3[i3] = t5 && "object" == typeof t5 && "bytes" in t5 ? BigInt(t5.toString()) : Number(t5) : n3[i3] = t5);
                }
              }
              return { [r3]: await this.readEventMember(t3, o3, s2, n3) };
            }
            return { [r3]: await this.deserializer.read(t3, o3) };
          }
          return { $unknown: e3 };
        }), d2 = u2[Symbol.asyncIterator](), p2 = await d2.next();
        if (p2.done) return u2;
        if (p2.value?.[l2]) {
          if (!t2) throw new Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
          for (const e3 in p2.value) s(p2.value, e3) && (r2[e3] = p2.value[e3]);
        }
        return { async *[Symbol.asyncIterator]() {
          for (p2?.value?.[l2] || (yield p2.value); ; ) {
            const { done: e3, value: t3 } = await d2.next();
            if (e3) break;
            yield t3;
          }
        } };
      }
      async readEventMember(e2, t2, r2, n2) {
        let s2;
        const o2 = e2.getSchema();
        if (Array.isArray(o2) && -3 === o2[0]) {
          const e3 = o2[1], t3 = u.for(e3);
          this.compositeErrorRegistry?.copyFrom(t3), s2 = (this.compositeErrorRegistry ?? t3)?.getErrorCtor(o2);
        }
        const i2 = r2 ? n2 : 0 === t2.byteLength ? {} : await this.deserializer.read(e2, t2);
        if (s2) {
          const t3 = i2.message ?? i2.Message ?? "Unknown", r3 = {}, n3 = e2.getMergedTraits().error;
          return n3 && (r3.$fault = n3), Object.assign(new s2({}), r3, { message: t3 }, i2);
        }
        return i2;
      }
      writeEventBody(e2, t2, r2) {
        const n2 = this.serializer;
        let s2, o2 = e2, i2 = null;
        const a2 = {};
        if (t2.getSchema()[4].includes(e2)) {
          const o3 = t2.getMemberSchema(e2);
          if (o3.isStructSchema()) {
            for (const [t3, n3] of o3.structIterator()) {
              const { eventHeader: s3, eventPayload: o4 } = n3.getMergedTraits();
              if (o4) i2 = t3;
              else if (s3) {
                const s4 = r2[e2][t3];
                let o5 = "binary";
                n3.isNumericSchema() ? o5 = (-2) ** 31 <= s4 && s4 <= 2 ** 31 - 1 ? "integer" : "long" : n3.isTimestampSchema() ? o5 = "timestamp" : n3.isStringSchema() ? o5 = "string" : n3.isBooleanSchema() && (o5 = "boolean"), null != s4 && (a2[t3] = { type: o5, value: s4 }, delete r2[e2][t3]);
              }
            }
            if (null !== i2) {
              const t3 = o3.getMemberSchema(i2);
              t3.isBlobSchema() ? s2 = "application/octet-stream" : t3.isStringSchema() && (s2 = "text/plain"), n2.write(t3, r2[e2][i2]);
            } else n2.write(o3, r2[e2]);
          } else {
            if (!o3.isUnitSchema()) throw new Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
            n2.write(o3, {});
          }
        } else {
          const [t3, s3] = r2[e2];
          o2 = t3, n2.write(15, s3);
        }
        const l2 = n2.flush() ?? new Uint8Array();
        return { body: "string" == typeof l2 ? (this.serdeContext?.utf8Decoder ?? c)(l2) : l2, eventType: o2, explicitPayloadContentType: s2, additionalHeaders: a2 };
      }
    }, t.HeaderMarshaller = m, t.Int64 = d, t.MessageDecoderStream = I, t.MessageEncoderStream = T, t.SmithyMessageDecoderStream = C, t.SmithyMessageEncoderStream = P, t.UniversalEventStreamMarshaller = M, t.eventStreamSerdeProvider = (e2) => new J(e2), t.getChunkedStream = A, t.getMessageUnmarshaller = R, t.getUnmarshalledStream = function(e2, t2) {
      const r2 = R(t2.deserializer, t2.toUtf8);
      return { [Symbol.asyncIterator]: async function* () {
        for await (const n2 of e2) {
          const e3 = t2.eventStreamCodec.decode(n2), s2 = await r2(e3);
          void 0 !== s2 && (yield s2);
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
    } }), t.resolveEventStreamSerdeConfig = (e2) => Object.assign(e2, { eventStreamMarshaller: e2.eventStreamSerdeProvider(e2) }), t.universalEventStreamSerdeProvider = (e2) => new M(e2);
  }