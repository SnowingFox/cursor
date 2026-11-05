// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 49008 range:8142418..8146941
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
49008: function(e, t, r) {
    "use strict";
    var n, s = this && this.__createBinding || (Object.create ? function(e2, t2, r2, n2) {
      void 0 === n2 && (n2 = r2);
      var s2 = Object.getOwnPropertyDescriptor(t2, r2);
      s2 && !("get" in s2 ? !t2.__esModule : s2.writable || s2.configurable) || (s2 = { enumerable: true, get: function() {
        return t2[r2];
      } }), Object.defineProperty(e2, n2, s2);
    } : function(e2, t2, r2, n2) {
      void 0 === n2 && (n2 = r2), e2[n2] = t2[r2];
    }), o = this && this.__setModuleDefault || (Object.create ? function(e2, t2) {
      Object.defineProperty(e2, "default", { enumerable: true, value: t2 });
    } : function(e2, t2) {
      e2.default = t2;
    }), i = this && this.__importStar || (n = function(e2) {
      return n = Object.getOwnPropertyNames || function(e3) {
        var t2 = [];
        for (var r2 in e3) Object.prototype.hasOwnProperty.call(e3, r2) && (t2[t2.length] = r2);
        return t2;
      }, n(e2);
    }, function(e2) {
      if (e2 && e2.__esModule) return e2;
      var t2 = {};
      if (null != e2) for (var r2 = n(e2), i2 = 0; i2 < r2.length; i2++) "default" !== r2[i2] && s(t2, e2, r2[i2]);
      return o(t2, e2), t2;
    });
    Object.defineProperty(t, "__esModule", { value: true }), t.Http2SessionReplacer = t.SILENT_SESSION_THRESHOLD_MS = void 0;
    const a = i(r(32467)), c = r(22712);
    t.SILENT_SESSION_THRESHOLD_MS = 15e3;
    t.Http2SessionReplacer = class {
      constructor(e2) {
        this.options = e2, this.sessionOf = /* @__PURE__ */ new WeakMap(), this.openStreams = /* @__PURE__ */ new Set(), this.goawayWatched = /* @__PURE__ */ new WeakSet(), this.now = e2.now ?? (() => Date.now()), this.current = e2.create(), this.lastResponseByteAt = this.now();
      }
      get authority() {
        return this.current.authority;
      }
      async request(e2, t2, r2, n2) {
        this.judgeClosedStreams();
        const s2 = this.current, o2 = this.now(), i2 = await this.requestWithEstablishTimeout(s2, e2, t2, r2, n2);
        this.sessionOf.set(i2, s2);
        const a2 = { stream: i2, session: s2, openedAt: o2, errored: false };
        return this.openStreams.add(a2), i2.once("error", () => {
          a2.errored = true;
        }), i2.once("close", () => this.judge(a2)), this.watchGoaway(i2.session), i2;
      }
      watchGoaway(e2) {
        const t2 = this.options.onGoaway;
        void 0 === t2 || void 0 === e2 || this.goawayWatched.has(e2) || (this.goawayWatched.add(e2), e2.once("goaway", (r2) => {
          if (r2 === a.constants.NGHTTP2_NO_ERROR) {
            for (const r3 of this.openStreams) if (r3.stream.session === e2 && !r3.stream.closed) return void t2();
          }
        }));
      }
      judgeClosedStreams() {
        for (const e2 of this.openStreams) e2.stream.closed && this.judge(e2);
      }
      judge(e2) {
        if (!this.openStreams.delete(e2)) return;
        const { stream: r2, session: n2, openedAt: s2 } = e2;
        if (e2.errored || r2.rstCode === a.constants.NGHTTP2_NO_ERROR || n2 !== this.current) return;
        const o2 = this.now() - Math.max(s2, this.lastResponseByteAt);
        o2 < t.SILENT_SESSION_THRESHOLD_MS || this.replace(n2, o2, "silent_stream_abandoned");
      }
      replace(e2, t2, r2) {
        this.current = this.options.create(), this.lastResponseByteAt = this.now(), this.options.onReplaced(e2, t2, r2);
      }
      async requestWithEstablishTimeout(e2, t2, r2, n2, s2) {
        const o2 = this.options.establishTimeoutMs?.() ?? 0;
        if (!(o2 > 0)) return e2.request(t2, r2, n2, s2);
        const i2 = this.now();
        let a2;
        const l = () => {
          a2 = setTimeout(() => {
            const t3 = e2.state();
            if ("connecting" === t3 || "verifying" === t3) {
              const t4 = this.now() - i2;
              e2 === this.current && this.replace(e2, t4, "establish_timeout"), e2.abortCurrent(new c.ConnectError(`HTTP/2 session not established after ${Math.round(t4)} ms`, c.Code.Unavailable));
            }
            l();
          }, o2), a2.unref?.();
        };
        l();
        try {
          return await e2.request(t2, r2, n2, s2);
        } finally {
          clearTimeout(a2);
        }
      }
      notifyResponseByteRead(e2) {
        const t2 = this.sessionOf.get(e2);
        void 0 !== t2 ? (t2 === this.current && (this.lastResponseByteAt = this.now()), t2.notifyResponseByteRead(e2)) : this.current.notifyResponseByteRead(e2);
      }
    };
  }