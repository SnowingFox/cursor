// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9008 range:6022985..6027527
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9008: function(t2, e2, r2) {
    "use strict";
    var n2, s2 = this && this.__createBinding || (Object.create ? function(t3, e3, r3, n3) {
      void 0 === n3 && (n3 = r3);
      var s3 = Object.getOwnPropertyDescriptor(e3, r3);
      s3 && !("get" in s3 ? !e3.__esModule : s3.writable || s3.configurable) || (s3 = { enumerable: true, get: function() {
        return e3[r3];
      } }), Object.defineProperty(t3, n3, s3);
    } : function(t3, e3, r3, n3) {
      void 0 === n3 && (n3 = r3), t3[n3] = e3[r3];
    }), i2 = this && this.__setModuleDefault || (Object.create ? function(t3, e3) {
      Object.defineProperty(t3, "default", { enumerable: true, value: e3 });
    } : function(t3, e3) {
      t3.default = e3;
    }), o2 = this && this.__importStar || (n2 = function(t3) {
      return n2 = Object.getOwnPropertyNames || function(t4) {
        var e3 = [];
        for (var r3 in t4) Object.prototype.hasOwnProperty.call(t4, r3) && (e3[e3.length] = r3);
        return e3;
      }, n2(t3);
    }, function(t3) {
      if (t3 && t3.__esModule) return t3;
      var e3 = {};
      if (null != t3) for (var r3 = n2(t3), o3 = 0; o3 < r3.length; o3++) "default" !== r3[o3] && s2(e3, t3, r3[o3]);
      return i2(e3, t3), e3;
    });
    Object.defineProperty(e2, "__esModule", { value: true }), e2.Http2SessionReplacer = e2.SILENT_SESSION_THRESHOLD_MS = void 0;
    const a = o2(r2(2467)), u = r2(8394);
    e2.SILENT_SESSION_THRESHOLD_MS = 15e3;
    e2.Http2SessionReplacer = class {
      constructor(t3) {
        this.options = t3, this.sessionOf = /* @__PURE__ */ new WeakMap(), this.openStreams = /* @__PURE__ */ new Set(), this.goawayWatched = /* @__PURE__ */ new WeakSet(), this.now = t3.now ?? (() => Date.now()), this.current = t3.create(), this.lastResponseByteAt = this.now();
      }
      get authority() {
        return this.current.authority;
      }
      async request(t3, e3, r3, n3) {
        this.judgeClosedStreams();
        const s3 = this.current, i3 = this.now(), o3 = await this.requestWithEstablishTimeout(s3, t3, e3, r3, n3);
        this.sessionOf.set(o3, s3);
        const a2 = { stream: o3, session: s3, openedAt: i3, errored: false };
        return this.openStreams.add(a2), o3.once("error", () => {
          a2.errored = true;
        }), o3.once("close", () => this.judge(a2)), this.watchGoaway(o3.session), o3;
      }
      watchGoaway(t3) {
        const e3 = this.options.onGoaway;
        void 0 === e3 || void 0 === t3 || this.goawayWatched.has(t3) || (this.goawayWatched.add(t3), t3.once("goaway", (r3) => {
          if (r3 === a.constants.NGHTTP2_NO_ERROR) {
            for (const r4 of this.openStreams) if (r4.stream.session === t3 && !r4.stream.closed) return void e3();
          }
        }));
      }
      judgeClosedStreams() {
        for (const t3 of this.openStreams) t3.stream.closed && this.judge(t3);
      }
      judge(t3) {
        if (!this.openStreams.delete(t3)) return;
        const { stream: r3, session: n3, openedAt: s3 } = t3;
        if (t3.errored || r3.rstCode === a.constants.NGHTTP2_NO_ERROR || n3 !== this.current) return;
        const i3 = this.now() - Math.max(s3, this.lastResponseByteAt);
        i3 < e2.SILENT_SESSION_THRESHOLD_MS || this.replace(n3, i3, "silent_stream_abandoned");
      }
      replace(t3, e3, r3) {
        this.current = this.options.create(), this.lastResponseByteAt = this.now(), this.options.onReplaced(t3, e3, r3);
      }
      async requestWithEstablishTimeout(t3, e3, r3, n3, s3) {
        const i3 = this.options.establishTimeoutMs?.() ?? 0;
        if (!(i3 > 0)) return t3.request(e3, r3, n3, s3);
        const o3 = this.now();
        let a2;
        const c = () => {
          a2 = setTimeout(() => {
            const e4 = t3.state();
            if ("connecting" === e4 || "verifying" === e4) {
              const e5 = this.now() - o3;
              t3 === this.current && this.replace(t3, e5, "establish_timeout"), t3.abortCurrent(new u.ConnectError(`HTTP/2 session not established after ${Math.round(e5)} ms`, u.Code.Unavailable));
            }
            c();
          }, i3), a2.unref?.();
        };
        c();
        try {
          return await t3.request(e3, r3, n3, s3);
        } finally {
          clearTimeout(a2);
        }
      }
      notifyResponseByteRead(t3) {
        const e3 = this.sessionOf.get(t3);
        void 0 !== e3 ? (e3 === this.current && (this.lastResponseByteAt = this.now()), e3.notifyResponseByteRead(t3)) : this.current.notifyResponseByteRead(t3);
      }
    };
  }