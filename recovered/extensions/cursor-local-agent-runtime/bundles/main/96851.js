// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 96851 range:7818589..7858178
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
96851: (e, t, r) => {
    const { createHmac: n, createHash: o, getRandomValues: s } = r(77598), { hasOwn: i, HttpResponse: a } = r(11255);
    t.hasOwn = i;
    const { ReadStream: l, lstatSync: c, fstatSync: u } = r(73024), { toEndpointV1: d } = r(29400), { Readable: p, Writable: h, PassThrough: m } = r(57075), f = (e2) => "function" == typeof ArrayBuffer && e2 instanceof ArrayBuffer || "[object ArrayBuffer]" === Object.prototype.toString.call(e2), g = (e2, t2 = 0, r2 = e2.byteLength - t2) => {
      if (!f(e2)) throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof e2} (${e2})`);
      return Buffer.from(e2, t2, r2);
    }, y = (e2, t2) => {
      if ("string" != typeof e2) throw new TypeError(`The "input" argument must be of type string. Received type ${typeof e2} (${e2})`);
      return t2 ? Buffer.from(e2, t2) : Buffer.from(e2);
    }, v = /^[A-Za-z0-9+/]*={0,2}$/, w = (e2) => {
      if (3 * e2.length % 4 != 0) throw new TypeError("Incorrect padding on base64 string.");
      if (!v.exec(e2)) throw new TypeError("Invalid base64 string.");
      const t2 = y(e2, "base64");
      return new Uint8Array(t2.buffer, t2.byteOffset, t2.byteLength);
    }, b = (e2) => {
      const t2 = y(e2, "utf8");
      return new Uint8Array(t2.buffer, t2.byteOffset, t2.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }, _ = (e2) => {
      let t2;
      if (t2 = "string" == typeof e2 ? b(e2) : e2, "object" != typeof t2 || "number" != typeof t2.byteOffset || "number" != typeof t2.byteLength) throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      return g(t2.buffer, t2.byteOffset, t2.byteLength).toString("base64");
    };
    const S = (e2) => {
      if ("string" == typeof e2) return e2;
      if ("object" != typeof e2 || "number" != typeof e2.byteOffset || "number" != typeof e2.byteLength) throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      return g(e2.buffer, e2.byteOffset, e2.byteLength).toString("utf8");
    }, x = Array.from({ length: 256 }, (e2, t2) => t2.toString(16).padStart(2, "0"));
    const k = (e2) => {
      if (null != e2) {
        if ("string" == typeof e2) {
          const t2 = parseFloat(e2);
          if (!Number.isNaN(t2)) return String(t2) !== String(e2) && V.warn(Y(`Expected number but observed string: ${e2}`)), t2;
        }
        if ("number" == typeof e2) return e2;
        throw new TypeError(`Expected number, got ${typeof e2}: ${e2}`);
      }
    }, E = Math.ceil(2 ** 127 * (2 - 2 ** -23)), T = (e2) => {
      const t2 = k(e2);
      if (void 0 !== t2 && !Number.isNaN(t2) && t2 !== 1 / 0 && t2 !== -1 / 0 && Math.abs(t2) > E) throw new TypeError(`Expected 32-bit float, got ${e2}`);
      return t2;
    }, C = (e2) => {
      if (null != e2) {
        if (Number.isInteger(e2) && !Number.isNaN(e2)) return e2;
        throw new TypeError(`Expected integer, got ${typeof e2}: ${e2}`);
      }
    }, I = C, A = (e2) => R(e2, 32), P = (e2) => R(e2, 16), M = (e2) => R(e2, 8), R = (e2, t2) => {
      const r2 = C(e2);
      if (void 0 !== r2 && O(r2, t2) !== r2) throw new TypeError(`Expected ${t2}-bit integer, got ${e2}`);
      return r2;
    }, O = (e2, t2) => {
      switch (t2) {
        case 32:
          return Int32Array.of(e2)[0];
        case 16:
          return Int16Array.of(e2)[0];
        case 8:
          return Int8Array.of(e2)[0];
      }
    }, D = (e2) => {
      if (null == e2) return;
      if ("object" == typeof e2 && !Array.isArray(e2)) return e2;
      const t2 = Array.isArray(e2) ? "array" : typeof e2;
      throw new TypeError(`Expected object, got ${t2}: ${e2}`);
    }, N = (e2) => k("string" == typeof e2 ? B(e2) : e2), F = N, L = (e2) => T("string" == typeof e2 ? B(e2) : e2), U = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g, B = (e2) => {
      const t2 = e2.match(U);
      if (null === t2 || t2[0].length !== e2.length) throw new TypeError("Expected real number, got implicit NaN");
      return parseFloat(e2);
    }, $ = (e2) => "string" == typeof e2 ? J(e2) : k(e2), q = $, j = $, J = (e2) => {
      switch (e2) {
        case "NaN":
          return NaN;
        case "Infinity":
          return 1 / 0;
        case "-Infinity":
          return -1 / 0;
        default:
          throw new Error(`Unable to parse float value: ${e2}`);
      }
    }, z = (e2) => C("string" == typeof e2 ? B(e2) : e2), H = z, W = (e2) => P("string" == typeof e2 ? B(e2) : e2), G = (e2) => M("string" == typeof e2 ? B(e2) : e2), Y = (e2) => String(new TypeError(e2).stack || e2).split("\n").slice(0, 5).filter((e3) => !e3.includes("stackTraceWarning")).join("\n"), V = { warn: console.warn }, K = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], Z = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const X = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/), Q = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}:\d{2})|[zZ])$/), ee = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/), te = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/), re = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/), ne = (e2, t2, r2, n2) => {
      const o2 = t2 - 1;
      return le(e2, o2, r2), new Date(Date.UTC(e2, o2, r2, ue(n2.hours, "hour", 0, 23), ue(n2.minutes, "minute", 0, 59), ue(n2.seconds, "seconds", 0, 60), de(n2.fractionalMilliseconds)));
    }, oe = (e2) => {
      const t2 = (/* @__PURE__ */ new Date()).getUTCFullYear(), r2 = 100 * Math.floor(t2 / 100) + W(he(e2));
      return r2 < t2 ? r2 + 100 : r2;
    }, se = (e2) => e2.getTime() - (/* @__PURE__ */ new Date()).getTime() > 15768e8 ? new Date(Date.UTC(e2.getUTCFullYear() - 100, e2.getUTCMonth(), e2.getUTCDate(), e2.getUTCHours(), e2.getUTCMinutes(), e2.getUTCSeconds(), e2.getUTCMilliseconds())) : e2, ie = (e2) => {
      const t2 = Z.indexOf(e2);
      if (t2 < 0) throw new TypeError(`Invalid month: ${e2}`);
      return t2 + 1;
    }, ae = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], le = (e2, t2, r2) => {
      let n2 = ae[t2];
      if (1 === t2 && ce(e2) && (n2 = 29), r2 > n2) throw new TypeError(`Invalid day for ${Z[t2]} in ${e2}: ${r2}`);
    }, ce = (e2) => e2 % 4 == 0 && (e2 % 100 != 0 || e2 % 400 == 0), ue = (e2, t2, r2, n2) => {
      const o2 = G(he(e2));
      if (o2 < r2 || o2 > n2) throw new TypeError(`${t2} must be between ${r2} and ${n2}, inclusive`);
      return o2;
    }, de = (e2) => null == e2 ? 0 : 1e3 * L("0." + e2), pe = (e2) => {
      const t2 = e2[0];
      let r2 = 1;
      if ("+" == t2) r2 = 1;
      else {
        if ("-" != t2) throw new TypeError(`Offset direction, ${t2}, must be "+" or "-"`);
        r2 = -1;
      }
      return r2 * (60 * Number(e2.substring(1, 3)) + Number(e2.substring(4, 6))) * 60 * 1e3;
    }, he = (e2) => {
      let t2 = 0;
      for (; t2 < e2.length - 1 && "0" === e2.charAt(t2); ) t2++;
      return 0 === t2 ? e2 : e2.slice(t2);
    }, me = function(e2) {
      return Object.assign(new String(e2), { deserializeJSON: () => JSON.parse(String(e2)), toString: () => String(e2), toJSON: () => String(e2) });
    };
    me.from = (e2) => e2 && "object" == typeof e2 && (e2 instanceof me || "deserializeJSON" in e2) ? e2 : "string" == typeof e2 || Object.getPrototypeOf(e2) === String.prototype ? me(String(e2)) : me(JSON.stringify(e2)), me.fromObject = me.from;
    const fe = "(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?", ge = "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)", ye = "(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?", ve = "(\\d?\\d)", we = "(\\d{4})", be = new RegExp(/^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/), _e = new RegExp(`^${fe}, ${ve} ${ge} ${we} ${ye} GMT$`), Se = new RegExp(`^${fe}, ${ve}-${ge}-(\\d\\d) ${ye} GMT$`), xe = new RegExp(`^${fe} ${ge} ( [1-9]|\\d\\d) ${ye} ${we}$`), ke = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    function Ee(e2, t2, r2) {
      const n2 = Number(e2);
      if (n2 < t2 || n2 > r2) throw new Error(`Value ${n2} out of range [${t2}, ${r2}]`);
    }
    const Te = /^-?((0|[1-9]\d*)(\.\d+)?|\.\d+)([eE][+-]?\d+)?$/;
    class Ce {
      string;
      type;
      constructor(e2, t2) {
        if (this.string = e2, this.type = t2, !Te.test(e2)) throw new Error(`@smithy/core/serde - NumericValue string must conform to the Smithy bigDecimal format. Received: "${e2}"`);
      }
      toString() {
        return this.string;
      }
      static [Symbol.hasInstance](e2) {
        if (!e2 || "object" != typeof e2) return false;
        const t2 = e2;
        return Ce.prototype.isPrototypeOf(e2) || "bigDecimal" === t2.type && Te.test(t2.string);
      }
    }
    const Ie = {}, Ae = {};
    for (let e2 = 0; e2 < 256; e2++) {
      let t2 = e2.toString(16).toLowerCase();
      1 === t2.length && (t2 = `0${t2}`), Ie[e2] = t2, Ae[t2] = e2;
    }
    function Pe(e2) {
      let t2 = "";
      for (let r2 = 0; r2 < e2.byteLength; r2++) t2 += Ie[e2[r2]];
      return t2;
    }
    const Me = (e2) => e2 instanceof Uint8Array ? e2 : "string" == typeof e2 ? b(e2) : ArrayBuffer.isView(e2) ? new Uint8Array(e2.buffer, e2.byteOffset, e2.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e2);
    function Re(e2, t2) {
      if (void 0 === t2) {
        t2 = 0;
        for (const r3 of e2) t2 += r3.byteLength;
      }
      const r2 = new Uint8Array(t2);
      let n2 = 0;
      for (const t3 of e2) r2.set(t3, n2), n2 += t3.byteLength;
      return r2;
    }
    const Oe = (e2, t2) => (r2, n2) => async (o2) => {
      const { response: s2 } = await r2(o2);
      try {
        return { response: s2, output: await t2(s2, e2) };
      } catch (e3) {
        if (Object.defineProperty(e3, "$response", { value: s2, enumerable: false, writable: false, configurable: false }), !("$metadata" in e3)) {
          const t3 = "Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.";
          try {
            e3.message += "\n  " + t3;
          } catch (e4) {
            n2.logger && "NoOpLogger" !== n2.logger?.constructor?.name ? n2.logger?.warn?.(t3) : console.warn(t3);
          }
          void 0 !== e3.$responseBodyText && e3.$response && (e3.$response.body = e3.$responseBodyText);
          try {
            if (a.isInstance(s2)) {
              const { headers: t4 = {} } = s2, r3 = Object.entries(t4);
              e3.$metadata = { httpStatusCode: s2.statusCode, requestId: De(/^x-[\w-]+-request-?id$/, r3), extendedRequestId: De(/^x-[\w-]+-id-2$/, r3), cfId: De(/^x-[\w-]+-cf-id$/, r3) };
            }
          } catch (e4) {
          }
        }
        throw e3;
      }
    }, De = (e2, t2) => (t2.find(([t3]) => t3.match(e2)) || [void 0, void 0])[1], Ne = (e2, t2) => (r2, n2) => async (o2) => {
      const s2 = e2, i2 = n2.endpointV2 ? async () => d(n2.endpointV2) : s2.endpoint;
      if (!i2) throw new Error("No valid endpoint provider available.");
      const a2 = await t2(o2.input, { ...e2, endpoint: i2 });
      return r2({ ...o2, request: a2 });
    }, Fe = { name: "deserializerMiddleware", step: "deserialize", tags: ["DESERIALIZER"], override: true }, Le = { name: "serializerMiddleware", step: "serialize", tags: ["SERIALIZER"], override: true };
    function Ue(e2, t2) {
      return Buffer.isBuffer(e2) ? e2 : "string" == typeof e2 ? y(e2, t2) : ArrayBuffer.isView(e2) ? g(e2.buffer, e2.byteOffset, e2.byteLength) : g(e2);
    }
    let Be = class extends p {
      expectedChecksum;
      checksumSourceLocation;
      checksum;
      source;
      base64Encoder;
      constructor({ expectedChecksum: e2, checksum: t2, source: r2, checksumSourceLocation: n2, base64Encoder: o2 }) {
        if (super(), "function" != typeof r2.pipe) throw new Error(`@smithy/util-stream: unsupported source type ${r2?.constructor?.name ?? r2} in ChecksumStream.`);
        this.source = r2, this.base64Encoder = o2 ?? _, this.expectedChecksum = e2, this.checksum = t2, this.checksumSourceLocation = n2, this.source.on("data", this.onSourceData), this.source.on("end", this.onSourceEnd), this.source.on("error", this.onSourceError), this.source.on("close", this.onSourceClose), this.source.pause();
      }
      onSourceData = (e2) => {
        if (!this.destroyed) {
          try {
            this.checksum.update(e2);
          } catch (e3) {
            return void this.destroy(e3);
          }
          this.push(e2) || this.source.pause();
        }
      };
      onSourceEnd = async () => {
        if (!this.destroyed) {
          try {
            const e2 = await this.checksum.digest(), t2 = this.base64Encoder(e2);
            if (this.expectedChecksum !== t2) return void this.destroy(new Error(`Checksum mismatch: expected "${this.expectedChecksum}" but received "${t2}" in response header "${this.checksumSourceLocation}".`));
          } catch (e2) {
            return void this.destroy(e2);
          }
          this.push(null);
        }
      };
      onSourceError = (e2) => {
        this.destroy(e2);
      };
      onSourceClose = () => {
        this.destroyed || this.source.readableEnded || this.destroy(new Error("Connection lost or stream closed before all data was received."));
      };
      _read(e2) {
        this.source.resume();
      }
      _destroy(e2, t2) {
        this.source?.removeListener("data", this.onSourceData), this.source?.removeListener("end", this.onSourceEnd), this.source?.removeListener("error", this.onSourceError), this.source?.removeListener("close", this.onSourceClose), this.source?.destroy(), t2(e2);
      }
    };
    const $e = (e2) => "function" == typeof ReadableStream && (e2?.constructor?.name === ReadableStream.name || e2 instanceof ReadableStream), qe = (e2) => "function" == typeof Blob && (e2?.constructor?.name === Blob.name || e2 instanceof Blob), je = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    Object.entries(je).reduce((e2, [t2, r2]) => (e2[r2] = Number(t2), e2), {});
    const Je = je.split("");
    function ze(e2) {
      let t2;
      t2 = "string" == typeof e2 ? ((e3) => new TextEncoder().encode(e3))(e2) : e2;
      const r2 = "object" == typeof t2 && "number" == typeof t2.length, n2 = "object" == typeof t2 && "number" == typeof t2.byteOffset && "number" == typeof t2.byteLength;
      if (!r2 && !n2) throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      let o2 = "";
      for (let e3 = 0; e3 < t2.length; e3 += 3) {
        let r3 = 0, n3 = 0;
        for (let o3 = e3, s3 = Math.min(e3 + 3, t2.length); o3 < s3; o3++) r3 |= t2[o3] << 8 * (s3 - o3 - 1), n3 += 8;
        const s2 = Math.ceil(n3 / 6);
        r3 <<= 6 * s2 - n3;
        for (let e4 = 1; e4 <= s2; e4++) {
          const t3 = 6 * (s2 - e4);
          o2 += Je[(r3 & 63 << t3) >> t3];
        }
        o2 += "==".slice(0, 4 - s2);
      }
      return o2;
    }
    const He = "function" == typeof ReadableStream ? ReadableStream : function() {
    };
    class We extends He {
    }
    class Ge {
      allocByteArray;
      byteLength = 0;
      byteArrays = [];
      constructor(e2) {
        this.allocByteArray = e2;
      }
      push(e2) {
        this.byteArrays.push(e2), this.byteLength += e2.byteLength;
      }
      flush() {
        if (1 === this.byteArrays.length) {
          const e3 = this.byteArrays[0];
          return this.reset(), e3;
        }
        const e2 = this.allocByteArray(this.byteLength);
        let t2 = 0;
        for (let r2 = 0; r2 < this.byteArrays.length; ++r2) {
          const n2 = this.byteArrays[r2];
          e2.set(n2, t2), t2 += n2.byteLength;
        }
        return this.reset(), e2;
      }
      reset() {
        this.byteArrays = [], this.byteLength = 0;
      }
    }
    function Ye(e2, t2, r2) {
      switch (t2) {
        case 0:
          return e2[0] += r2, Ke(e2[0]);
        case 1:
        case 2:
          return e2[t2].push(r2), Ke(e2[t2]);
      }
    }
    function Ve(e2, t2) {
      switch (t2) {
        case 0:
          const r2 = e2[0];
          return e2[0] = "", r2;
        case 1:
        case 2:
          return e2[t2].flush();
      }
      throw new Error(`@smithy/util-stream - invalid index ${t2} given to flush()`);
    }
    function Ke(e2) {
      return e2?.byteLength ?? e2?.length ?? 0;
    }
    function Ze(e2, t2 = true) {
      return t2 && "undefined" != typeof Buffer && e2 instanceof Buffer ? 2 : e2 instanceof Uint8Array ? 1 : "string" == typeof e2 ? 0 : -1;
    }
    let Xe = class extends h {
      buffers = [];
      limit = 1 / 0;
      bytesBuffered = 0;
      _write(e2, t2, r2) {
        if (this.buffers.push(e2), this.bytesBuffered += e2.byteLength ?? 0, this.bytesBuffered >= this.limit) {
          const e3 = this.bytesBuffered - this.limit, t3 = this.buffers[this.buffers.length - 1];
          this.buffers[this.buffers.length - 1] = t3.subarray(0, t3.byteLength - e3), this.emit("finish");
        }
        r2();
      }
    };
    async function Qe(e2) {
      return e2.arrayBuffer().then((e3) => new Uint8Array(e3));
    }
    async function et(e2) {
      const t2 = [], r2 = e2.getReader();
      let n2 = 0;
      for (; ; ) {
        const { done: e3, value: o2 } = await r2.read();
        if (o2 && (t2.push(o2), n2 += o2.length), e3) break;
      }
      return Re(t2, n2);
    }
    const tt = "The stream has already been transformed.", rt = (e2) => {
      if (!nt(e2) && !$e(e2)) {
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${e2?.__proto__?.constructor?.name || e2}`);
      }
      let t2 = false;
      const r2 = async () => {
        if (t2) throw new Error(tt);
        return t2 = true, await (async (e3) => qe(e3) ? Qe(e3) : et(e3))(e2);
      };
      return Object.assign(e2, { transformToByteArray: r2, transformToString: async (e3) => {
        const t3 = await r2();
        if ("base64" === e3) return ze(t3);
        if ("hex" === e3) return Pe(t3);
        if (void 0 === e3 || "utf8" === e3 || "utf-8" === e3) return ((e4) => {
          if ("string" == typeof e4) return e4;
          if ("object" != typeof e4 || "number" != typeof e4.byteOffset || "number" != typeof e4.byteLength) throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
          return new TextDecoder("utf-8").decode(e4);
        })(t3);
        if ("function" == typeof TextDecoder) return new TextDecoder(e3).decode(t3);
        throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
      }, transformToWebStream: () => {
        if (t2) throw new Error(tt);
        if (t2 = true, nt(e2)) return ((e3) => {
          if ("function" != typeof e3.stream) throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
          return e3.stream();
        })(e2);
        if ($e(e2)) return e2;
        throw new Error(`Cannot transform payload to web stream, got ${e2}`);
      } });
    }, nt = (e2) => "function" == typeof Blob && e2 instanceof Blob, ot = (e2) => qe(e2) ? Qe(e2) : $e(e2) ? et(e2) : new Promise((t2, r2) => {
      const n2 = new st(), o2 = e2;
      o2.pipe(n2), o2.on("error", (e3) => {
        n2.end(), r2(e3);
      }), n2.on("error", r2), n2.on("finish", function() {
        const e3 = Re(this.bufferedBytes);
        t2(e3);
      });
    });
    class st extends h {
      bufferedBytes = [];
      _write(e2, t2, r2) {
        this.bufferedBytes.push(e2), r2();
      }
    }
    const it = "The stream has already been transformed.";
    class at extends (/* @__PURE__ */ (function(e2, t2, r2, n2) {
      return class o2 extends Uint8Array {
        static fromString(e3, r3 = "utf-8") {
          if ("string" == typeof e3) return "base64" === r3 ? o2.mutate(n2(e3)) : o2.mutate(t2(e3));
          throw new Error(`Unsupported conversion from ${typeof e3} to Uint8ArrayBlobAdapter.`);
        }
        static mutate(e3) {
          return Object.setPrototypeOf(e3, o2.prototype), e3;
        }
        transformToString(t3 = "utf-8") {
          return "base64" === t3 ? r2(this) : e2(this);
        }
      };
    })(S, b, _, w)) {
    }
    const lt = (function(e2) {
      return "undefined" != typeof crypto && "function" == typeof crypto.randomUUID ? () => crypto.randomUUID() : () => {
        const t2 = new Uint8Array(16);
        return e2(t2), t2[6] = 15 & t2[6] | 64, t2[8] = 63 & t2[8] | 128, x[t2[0]] + x[t2[1]] + x[t2[2]] + x[t2[3]] + "-" + x[t2[4]] + x[t2[5]] + "-" + x[t2[6]] + x[t2[7]] + "-" + x[t2[8]] + x[t2[9]] + "-" + x[t2[10]] + x[t2[11]] + x[t2[12]] + x[t2[13]] + x[t2[14]] + x[t2[15]];
      };
    })(s), ct = lt;
    t.ChecksumStream = Be, t.Hash = class {
      algorithmIdentifier;
      secret;
      hash;
      constructor(e2, t2) {
        this.algorithmIdentifier = e2, this.secret = t2, this.reset();
      }
      update(e2, t2) {
        this.hash.update(Me(Ue(e2, t2)));
      }
      digest() {
        return Promise.resolve(this.hash.digest());
      }
      reset() {
        this.hash = this.secret ? n(this.algorithmIdentifier, Ue(this.secret)) : o(this.algorithmIdentifier);
      }
    }, t.LazyJsonString = me, t.NumericValue = Ce, t.Uint8ArrayBlobAdapter = at, t._parseEpochTimestamp = (e2) => {
      if (null == e2) return;
      let t2 = NaN;
      if ("number" == typeof e2) t2 = e2;
      else if ("string" == typeof e2) {
        if (!/^-?\d*\.?\d+$/.test(e2)) throw new TypeError("parseEpochTimestamp - numeric string invalid.");
        t2 = Number.parseFloat(e2);
      } else "object" == typeof e2 && 1 === e2.tag && (t2 = e2.value);
      if (isNaN(t2) || Math.abs(t2) === 1 / 0) throw new TypeError("Epoch timestamps must be valid finite numbers.");
      return new Date(Math.round(1e3 * t2));
    }, t._parseRfc3339DateTimeWithOffset = (e2) => {
      if (null == e2) return;
      if ("string" != typeof e2) throw new TypeError("RFC3339 timestamps must be strings");
      const t2 = be.exec(e2);
      if (!t2) throw new TypeError(`Invalid RFC3339 timestamp format ${e2}`);
      const [, r2, n2, o2, s2, i2, a2, , l2, c2] = t2;
      Ee(n2, 1, 12), Ee(o2, 1, 31), Ee(s2, 0, 23), Ee(i2, 0, 59), Ee(a2, 0, 60);
      const u2 = new Date(Date.UTC(Number(r2), Number(n2) - 1, Number(o2), Number(s2), Number(i2), Number(a2), Number(l2) ? Math.round(1e3 * parseFloat(`0.${l2}`)) : 0));
      if (u2.setUTCFullYear(Number(r2)), "Z" != c2.toUpperCase()) {
        const [, e3, t3, r3] = /([+-])(\d\d):(\d\d)/.exec(c2) || [void 0, "+", 0, 0], n3 = "-" === e3 ? 1 : -1;
        u2.setTime(u2.getTime() + n3 * (60 * Number(t3) * 60 * 1e3 + 60 * Number(r3) * 1e3));
      }
      return u2;
    }, t._parseRfc7231DateTime = (e2) => {
      if (null == e2) return;
      if ("string" != typeof e2) throw new TypeError("RFC7231 timestamps must be strings.");
      let t2, r2, n2, o2, s2, i2, a2, l2;
      if ((l2 = _e.exec(e2)) ? [, t2, r2, n2, o2, s2, i2, a2] = l2 : (l2 = Se.exec(e2)) ? ([, t2, r2, n2, o2, s2, i2, a2] = l2, n2 = (Number(n2) + 1900).toString()) : (l2 = xe.exec(e2)) && ([, r2, t2, o2, s2, i2, a2, n2] = l2), n2 && i2) {
        const e3 = Date.UTC(Number(n2), ke.indexOf(r2), Number(t2), Number(o2), Number(s2), Number(i2), a2 ? Math.round(1e3 * parseFloat(`0.${a2}`)) : 0);
        Ee(t2, 1, 31), Ee(o2, 0, 23), Ee(s2, 0, 59), Ee(i2, 0, 60);
        const l3 = new Date(e3);
        return l3.setUTCFullYear(Number(n2)), l3;
      }
      throw new TypeError(`Invalid RFC7231 date-time value ${e2}.`);
    }, t.calculateBodyLength = (e2) => {
      if (!e2) return 0;
      if ("string" == typeof e2) return Buffer.byteLength(e2);
      if ("number" == typeof e2.byteLength) return e2.byteLength;
      if ("number" == typeof e2.size) return e2.size;
      if ("number" == typeof e2.start && "number" == typeof e2.end) return e2.end + 1 - e2.start;
      if (e2 instanceof l) {
        if (null != e2.path) return c(e2.path).size;
        if ("number" == typeof e2.fd) return u(e2.fd).size;
      }
      throw new Error(`Body Length computation failed for ${e2}`);
    }, t.concatBytes = Re, t.copyDocumentWithTransform = (e2, t2, r2 = (e3) => e3) => e2, t.createBufferedReadable = function(e2, t2, r2) {
      if ($e(e2)) return (function(e3, t3, r3) {
        const n3 = e3.getReader();
        let o3 = false, s3 = 0;
        const i3 = ["", new Ge((e4) => new Uint8Array(e4))];
        let a3 = -1;
        const l2 = async (e4) => {
          const { value: c2, done: u2 } = await n3.read(), d2 = c2;
          if (u2) {
            if (-1 !== a3) {
              const t4 = Ve(i3, a3);
              Ke(t4) > 0 && e4.enqueue(t4);
            }
            e4.close();
          } else {
            const n4 = Ze(d2, false);
            if (a3 !== n4 && (a3 >= 0 && e4.enqueue(Ve(i3, a3)), a3 = n4), -1 === a3) return void e4.enqueue(d2);
            const c3 = Ke(d2);
            s3 += c3;
            const u3 = Ke(i3[a3]);
            if (c3 >= t3 && 0 === u3) e4.enqueue(d2);
            else {
              const n5 = Ye(i3, a3, d2);
              !o3 && s3 > 2 * t3 && (o3 = true, r3?.warn(`@smithy/util-stream - stream chunk size ${c3} is below threshold of ${t3}, automatically buffering.`)), n5 >= t3 ? e4.enqueue(Ve(i3, a3)) : await l2(e4);
            }
          }
        };
        return new ReadableStream({ pull: l2 });
      })(e2, t2, r2);
      const n2 = new p({ read() {
      } });
      let o2 = false, s2 = 0;
      const i2 = ["", new Ge((e3) => new Uint8Array(e3)), new Ge((e3) => Buffer.from(new Uint8Array(e3)))];
      let a2 = -1;
      return e2.on("data", (e3) => {
        const l2 = Ze(e3, true);
        if (a2 !== l2 && (a2 >= 0 && n2.push(Ve(i2, a2)), a2 = l2), -1 === a2) return void n2.push(e3);
        const c2 = Ke(e3);
        s2 += c2;
        const u2 = Ke(i2[a2]);
        if (c2 >= t2 && 0 === u2) n2.push(e3);
        else {
          const l3 = Ye(i2, a2, e3);
          !o2 && s2 > 2 * t2 && (o2 = true, r2?.warn(`@smithy/util-stream - stream chunk size ${c2} is below threshold of ${t2}, automatically buffering.`)), l3 >= t2 && n2.push(Ve(i2, a2));
        }
      }), e2.on("end", () => {
        if (-1 !== a2) {
          const e3 = Ve(i2, a2);
          Ke(e3) > 0 && n2.push(e3);
        }
        n2.push(null);
      }), n2;
    }, t.createChecksumStream = function(e2) {
      return "function" == typeof ReadableStream && $e(e2.source) ? (({ expectedChecksum: e3, checksum: t2, source: r2, checksumSourceLocation: n2, base64Encoder: o2 }) => {
        if (!$e(r2)) throw new Error(`@smithy/util-stream: unsupported source type ${r2?.constructor?.name ?? r2} in ChecksumStream.`);
        const s2 = o2 ?? ze;
        if ("function" != typeof TransformStream) throw new Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
        const i2 = new TransformStream({ start() {
        }, async transform(e4, r3) {
          t2.update(e4), r3.enqueue(e4);
        }, async flush(r3) {
          const o3 = await t2.digest(), i3 = s2(o3);
          if (e3 !== i3) {
            const t3 = new Error(`Checksum mismatch: expected "${e3}" but received "${i3}" in response header "${n2}".`);
            r3.error(t3);
          } else r3.terminate();
        } });
        r2.pipeThrough(i2);
        const a2 = i2.readable;
        return Object.setPrototypeOf(a2, We.prototype), a2;
      })(e2) : new Be(e2);
    }, t.dateToUtcString = function(e2) {
      const t2 = e2.getUTCFullYear(), r2 = e2.getUTCMonth(), n2 = e2.getUTCDay(), o2 = e2.getUTCDate(), s2 = e2.getUTCHours(), i2 = e2.getUTCMinutes(), a2 = e2.getUTCSeconds(), l2 = s2 < 10 ? `0${s2}` : `${s2}`, c2 = i2 < 10 ? `0${i2}` : `${i2}`, u2 = a2 < 10 ? `0${a2}` : `${a2}`;
      return `${K[n2]}, ${o2 < 10 ? `0${o2}` : `${o2}`} ${Z[r2]} ${t2} ${l2}:${c2}:${u2} GMT`;
    }, t.deserializerMiddleware = Oe, t.deserializerMiddlewareOption = Fe, t.expectBoolean = (e2) => {
      if (null != e2) {
        if ("number" == typeof e2) {
          if (0 !== e2 && 1 !== e2 || V.warn(Y(`Expected boolean, got ${typeof e2}: ${e2}`)), 0 === e2) return false;
          if (1 === e2) return true;
        }
        if ("string" == typeof e2) {
          const t2 = e2.toLowerCase();
          if ("false" !== t2 && "true" !== t2 || V.warn(Y(`Expected boolean, got ${typeof e2}: ${e2}`)), "false" === t2) return false;
          if ("true" === t2) return true;
        }
        if ("boolean" == typeof e2) return e2;
        throw new TypeError(`Expected boolean, got ${typeof e2}: ${e2}`);
      }
    }, t.expectByte = M, t.expectFloat32 = T, t.expectInt = I, t.expectInt32 = A, t.expectLong = C, t.expectNonNull = (e2, t2) => {
      if (null == e2) {
        if (t2) throw new TypeError(`Expected a non-null value for ${t2}`);
        throw new TypeError("Expected a non-null value");
      }
      return e2;
    }, t.expectNumber = k, t.expectObject = D, t.expectShort = P, t.expectString = (e2) => {
      if (null != e2) {
        if ("string" == typeof e2) return e2;
        if (["boolean", "number", "bigint"].includes(typeof e2)) return V.warn(Y(`Expected string, got ${typeof e2}: ${e2}`)), String(e2);
        throw new TypeError(`Expected string, got ${typeof e2}: ${e2}`);
      }
    }, t.expectUnion = (e2) => {
      if (null == e2) return;
      const t2 = D(e2), r2 = [];
      for (const e3 in t2) i(t2, e3) && null != t2[e3] && r2.push(e3);
      if (0 === r2.length) throw new TypeError("Unions must have exactly one non-null member. None were found.");
      if (r2.length > 1) throw new TypeError(`Unions must have exactly one non-null member. Keys ${r2} were not null.`);
      return t2;
    }, t.fromArrayBuffer = g, t.fromBase64 = w, t.fromHex = function(e2) {
      if (e2.length % 2 != 0) throw new Error("Hex encoded strings must have an even number length");
      const t2 = new Uint8Array(e2.length / 2);
      for (let r2 = 0; r2 < e2.length; r2 += 2) {
        const n2 = e2.slice(r2, r2 + 2).toLowerCase();
        if (!(n2 in Ae)) throw new Error(`Cannot decode unrecognized sequence ${n2} as hexadecimal`);
        t2[r2 / 2] = Ae[n2];
      }
      return t2;
    }, t.fromString = y, t.fromUtf8 = b, t.generateIdempotencyToken = ct, t.getAwsChunkedEncodingStream = function(e2, t2) {
      const r2 = e2, n2 = e2;
      if ($e(n2)) return ((e3, t3) => {
        const { base64Encoder: r3, bodyLengthChecker: n3, checksumAlgorithmFn: o3, checksumLocationName: s3, streamHasher: i3 } = t3, a3 = void 0 !== r3 && void 0 !== n3 && void 0 !== o3 && void 0 !== s3 && void 0 !== i3, l3 = a3 ? i3(o3, e3) : void 0, c3 = e3.getReader();
        return new ReadableStream({ async pull(e4) {
          const { value: t4, done: o4 } = await c3.read();
          if (o4) {
            if (e4.enqueue("0\r\n"), a3) {
              const t5 = r3(await l3);
              e4.enqueue(`${s3}:${t5}\r
`), e4.enqueue("\r\n");
            }
            e4.close();
          } else e4.enqueue(`${(n3(t4) || 0).toString(16)}\r
${t4}\r
`);
        } });
      })(n2, t2);
      const { base64Encoder: o2, bodyLengthChecker: s2, checksumAlgorithmFn: i2, checksumLocationName: a2, streamHasher: l2 } = t2, c2 = void 0 !== o2 && void 0 !== i2 && void 0 !== a2 && void 0 !== l2, u2 = c2 ? l2(i2, r2) : void 0, d2 = new p({ read: () => {
      } });
      return r2.on("data", (e3) => {
        const t3 = s2(e3) || 0;
        0 !== t3 && (d2.push(`${t3.toString(16)}\r
`), d2.push(e3), d2.push("\r\n"));
      }), r2.on("end", async () => {
        if (d2.push("0\r\n"), c2) {
          const e3 = o2(await u2);
          d2.push(`${a2}:${e3}\r
`), d2.push("\r\n");
        }
        d2.push(null);
      }), d2;
    }, t.getSerdePlugin = function(e2, t2, r2) {
      return { applyToStack: (n2) => {
        n2.add(Oe(e2, r2), Fe), n2.add(Ne(e2, t2), Le);
      } };
    }, t.handleFloat = q, t.headStream = (e2, t2) => $e(e2) ? (async function(e3, t3) {
      let r2 = 0;
      const n2 = [], o2 = e3.getReader();
      let s2 = false;
      for (; !s2; ) {
        const { done: e4, value: i3 } = await o2.read();
        if (i3 && (n2.push(i3), r2 += i3?.byteLength ?? 0), r2 >= t3) break;
        s2 = e4;
      }
      o2.releaseLock();
      const i2 = new Uint8Array(Math.min(t3, r2));
      let a2 = 0;
      for (const e4 of n2) {
        if (e4.byteLength > i2.byteLength - a2) {
          i2.set(e4.subarray(0, i2.byteLength - a2), a2);
          break;
        }
        i2.set(e4, a2), a2 += e4.length;
      }
      return i2;
    })(e2, t2) : new Promise((r2, n2) => {
      const o2 = new Xe();
      o2.limit = t2, e2.pipe(o2), e2.on("error", (e3) => {
        o2.end(), n2(e3);
      }), o2.on("error", n2), o2.on("finish", function() {
        const e3 = Re(this.buffers);
        r2(e3);
      });
    }), t.isArrayBuffer = f, t.isBlob = qe, t.isReadableStream = $e, t.limitedParseDouble = $, t.limitedParseFloat = j, t.limitedParseFloat32 = (e2) => "string" == typeof e2 ? J(e2) : T(e2), t.logger = V, t.nv = function(e2) {
      return new Ce(String(e2), "bigDecimal");
    }, t.parseBoolean = (e2) => {
      switch (e2) {
        case "true":
          return true;
        case "false":
          return false;
        default:
          throw new Error(`Unable to parse boolean value "${e2}"`);
      }
    }, t.parseEpochTimestamp = (e2) => {
      if (null == e2) return;
      let t2;
      if ("number" == typeof e2) t2 = e2;
      else if ("string" == typeof e2) t2 = N(e2);
      else {
        if ("object" != typeof e2 || 1 !== e2.tag) throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
        t2 = e2.value;
      }
      if (Number.isNaN(t2) || t2 === 1 / 0 || t2 === -1 / 0) throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
      return new Date(Math.round(1e3 * t2));
    }, t.parseRfc3339DateTime = (e2) => {
      if (null == e2) return;
      if ("string" != typeof e2) throw new TypeError("RFC-3339 date-times must be expressed as strings");
      const t2 = X.exec(e2);
      if (!t2) throw new TypeError("Invalid RFC-3339 date-time value");
      const [r2, n2, o2, s2, i2, a2, l2, c2] = t2, u2 = W(he(n2)), d2 = ue(o2, "month", 1, 12), p2 = ue(s2, "day", 1, 31);
      return ne(u2, d2, p2, { hours: i2, minutes: a2, seconds: l2, fractionalMilliseconds: c2 });
    }, t.parseRfc3339DateTimeWithOffset = (e2) => {
      if (null == e2) return;
      if ("string" != typeof e2) throw new TypeError("RFC-3339 date-times must be expressed as strings");
      const t2 = Q.exec(e2);
      if (!t2) throw new TypeError("Invalid RFC-3339 date-time value");
      const [r2, n2, o2, s2, i2, a2, l2, c2, u2] = t2, d2 = W(he(n2)), p2 = ue(o2, "month", 1, 12), h2 = ue(s2, "day", 1, 31), m2 = ne(d2, p2, h2, { hours: i2, minutes: a2, seconds: l2, fractionalMilliseconds: c2 });
      return "Z" != u2.toUpperCase() && m2.setTime(m2.getTime() - pe(u2)), m2;
    }, t.parseRfc7231DateTime = (e2) => {
      if (null == e2) return;
      if ("string" != typeof e2) throw new TypeError("RFC-7231 date-times must be expressed as strings");
      let t2 = ee.exec(e2);
      if (t2) {
        const [e3, r2, n2, o2, s2, i2, a2, l2] = t2;
        return ne(W(he(o2)), ie(n2), ue(r2, "day", 1, 31), { hours: s2, minutes: i2, seconds: a2, fractionalMilliseconds: l2 });
      }
      if (t2 = te.exec(e2), t2) {
        const [e3, r2, n2, o2, s2, i2, a2, l2] = t2;
        return se(ne(oe(o2), ie(n2), ue(r2, "day", 1, 31), { hours: s2, minutes: i2, seconds: a2, fractionalMilliseconds: l2 }));
      }
      if (t2 = re.exec(e2), t2) {
        const [e3, r2, n2, o2, s2, i2, a2, l2] = t2;
        return ne(W(he(l2)), ie(r2), ue(n2.trimLeft(), "day", 1, 31), { hours: o2, minutes: s2, seconds: i2, fractionalMilliseconds: a2 });
      }
      throw new TypeError("Invalid RFC-7231 date-time value");
    }, t.quoteHeader = function(e2) {
      return (e2.includes(",") || e2.includes('"')) && (e2 = `"${e2.replace(/"/g, '\\"')}"`), e2;
    }, t.sdkStreamMixin = (e2) => {
      if (!(e2 instanceof p)) try {
        return rt(e2);
      } catch (t3) {
        throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${e2?.__proto__?.constructor?.name || e2}`);
      }
      let t2 = false;
      const r2 = async () => {
        if (t2) throw new Error(it);
        return t2 = true, await ot(e2);
      };
      return Object.assign(e2, { transformToByteArray: r2, transformToString: async (e3) => {
        const t3 = await r2();
        if (void 0 === e3 || Buffer.isEncoding(e3)) return g(t3.buffer, t3.byteOffset, t3.byteLength).toString(e3);
        return new TextDecoder(e3).decode(t3);
      }, transformToWebStream: () => {
        if (t2) throw new Error(it);
        if (null !== e2.readableFlowing) throw new Error("The stream has been consumed by other callbacks.");
        if ("function" != typeof p.toWeb) throw new Error("Readable.toWeb() is not supported. Please ensure a polyfill is available.");
        return t2 = true, p.toWeb(e2);
      } });
    }, t.serializerMiddleware = Ne, t.serializerMiddlewareOption = Le, t.splitEvery = function(e2, t2, r2) {
      if (r2 <= 0 || !Number.isInteger(r2)) throw new Error("Invalid number of delimiters (" + r2 + ") for splitEvery.");
      const n2 = e2.split(t2);
      if (1 === r2) return n2;
      const o2 = [];
      let s2 = "";
      for (let e3 = 0; e3 < n2.length; e3++) "" === s2 ? s2 = n2[e3] : s2 += t2 + n2[e3], (e3 + 1) % r2 === 0 && (o2.push(s2), s2 = "");
      return "" !== s2 && o2.push(s2), o2;
    }, t.splitHeader = (e2) => {
      const t2 = e2.length, r2 = [];
      let n2, o2 = false, s2 = 0;
      for (let i2 = 0; i2 < t2; ++i2) {
        const t3 = e2[i2];
        switch (t3) {
          case '"':
            "\\" !== n2 && (o2 = !o2);
            break;
          case ",":
            o2 || (r2.push(e2.slice(s2, i2)), s2 = i2 + 1);
        }
        n2 = t3;
      }
      return r2.push(e2.slice(s2)), r2.map((e3) => {
        const t3 = (e3 = e3.trim()).length;
        return t3 < 2 ? e3 : ('"' === e3[0] && '"' === e3[t3 - 1] && (e3 = e3.slice(1, t3 - 1)), e3.replace(/\\"/g, '"'));
      });
    }, t.splitStream = async function(e2) {
      if ($e(e2) || qe(e2)) return (async function(e3) {
        return "function" == typeof e3.stream && (e3 = e3.stream()), e3.tee();
      })(e2);
      const t2 = new m(), r2 = new m();
      return e2.pipe(t2), e2.pipe(r2), [t2, r2];
    }, t.streamCollector = ot, t.strictParseByte = G, t.strictParseDouble = N, t.strictParseFloat = F, t.strictParseFloat32 = L, t.strictParseInt = H, t.strictParseInt32 = (e2) => A("string" == typeof e2 ? B(e2) : e2), t.strictParseLong = z, t.strictParseShort = W, t.toBase64 = _, t.toHex = Pe, t.toUint8Array = Me, t.toUtf8 = S, t.v4 = lt;
  }