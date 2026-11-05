// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 70569 range:10940515..10947867
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
70569: (e, t, r) => {
    "use strict";
    r.d(t, { il: () => h, ld: () => g, rg: () => S, xF: () => d, xU: () => m });
    var n = r(31421), s = r(73024), o = r(51455), i = r(81958);
    const a = 12e5, c = 3e4, l = 6e4, u = 3e4;
    class d extends Error {
      constructor() {
        super(...arguments), this.name = "LocalApiKeyHelperError";
      }
    }
    const p = /* @__PURE__ */ new Map();
    function m(e2) {
      const t2 = h(e2), r2 = p.get(t2);
      if (void 0 !== r2) return r2;
      const n2 = (function(e3, t3 = {}) {
        const r3 = t3.now ?? Date.now, n3 = t3.runHelper ?? y;
        let s2, o2, i2 = 0;
        const a2 = (t4) => {
          if (void 0 !== o2) return o2;
          const a3 = i2, c3 = (function(e4) {
            if (void 0 === e4) return {};
            const t5 = { token: e4.value, expiresAtMs: e4.expiresAtMs, ...void 0 === e4.refreshToken ? {} : { refreshToken: e4.refreshToken } };
            return { previous: t5 };
          })(t4), l2 = n3(e3, c3).then((t5) => {
            const n4 = (function(e4) {
              const { stdout: t6, command: r4 } = e4, n5 = t6.trim();
              if (!n5) throw new d(`apiKeyHelper produced empty stdout: ${r4}`);
              if (!n5.startsWith("{")) return { token: n5 };
              let s3;
              try {
                s3 = JSON.parse(n5);
              } catch {
                throw new d(`apiKeyHelper printed JSON that does not parse: ${r4}`);
              }
              const o4 = (function(e5) {
                const t7 = _.safeParse(e5);
                return t7.success ? t7.data : {};
              })(s3), i3 = o4.access_token;
              if (void 0 === i3) throw new d(`apiKeyHelper printed JSON without a string access_token: ${r4}`);
              const a4 = o4.expires_in, c5 = o4.refresh_token;
              return { token: i3, ...void 0 !== a4 && a4 > 0 ? { expiresInMs: Math.floor(1e3 * a4) } : {}, ...void 0 === c5 ? {} : { refreshToken: c5 } };
            })({ stdout: t5, command: e3.command }), o3 = r3(), c4 = { value: n4.token, ...void 0 === n4.refreshToken ? {} : { refreshToken: n4.refreshToken }, mintedAtMs: o3, expiresAtMs: o3 + f(n4, e3, o3) };
            return a3 === i2 && (s2 = c4), c4;
          }).catch((t5) => {
            throw (function(e4, t6) {
              if (e4 instanceof d) return e4;
              const r4 = e4 instanceof Error ? e4.message : String(e4);
              return new d(`apiKeyHelper failed: ${t6}: ${S(r4)}`, { cause: e4 instanceof Error ? e4 : void 0 });
            })(t5, e3.command);
          }).finally(() => {
            o2 === l2 && (o2 = void 0);
          });
          return o2 = l2, l2;
        }, c2 = (e4, t4) => {
          const r4 = e4.expiresAtMs - e4.mintedAtMs, n4 = Math.min(l, Math.floor(r4 / 2));
          return t4 < e4.expiresAtMs - n4;
        };
        return { async getApiKey() {
          const e4 = s2;
          return void 0 !== e4 && c2(e4, r3()) ? e4.value : (await a2(e4)).value;
        }, invalidate() {
          i2 += 1, s2 = void 0, o2 = void 0;
        }, async refreshAfterRejection(e4) {
          const t4 = s2;
          return void 0 === t4 ? (await a2(void 0)).value : t4.value !== e4 ? t4.value : r3() - t4.mintedAtMs < u ? void 0 : (await a2(t4)).value;
        } };
      })(e2);
      return p.set(t2, n2), n2;
    }
    function h(e2) {
      return JSON.stringify([e2.command, e2.args ?? null, e2.tokenTtlMs ?? null, e2.timeoutMs ?? null]);
    }
    function f(e2, t2, r2) {
      if (void 0 !== e2.expiresInMs) return e2.expiresInMs;
      if (void 0 !== t2.tokenTtlMs) return t2.tokenTtlMs;
      const n2 = (function(e3) {
        const t3 = e3.split(".");
        if (3 !== t3.length || void 0 === t3[1]) return;
        try {
          const e4 = (function(e5) {
            const t4 = A.safeParse(e5);
            return t4.success ? t4.data : {};
          })(JSON.parse(Buffer.from(t3[1], "base64url").toString("utf8"))).exp;
          return void 0 === e4 ? void 0 : 1e3 * e4;
        } catch {
          return;
        }
      })(e2.token);
      return void 0 !== n2 && n2 > r2 ? n2 - r2 : a;
    }
    function g(e2, t2) {
      const r2 = new Headers(e2?.headers);
      return r2.set("X-Api-Key", t2), r2.set("Authorization", `Bearer ${t2}`), { ...e2, headers: r2 };
    }
    async function y(e2, t2 = {}) {
      const r2 = e2.command.trim();
      if (!r2) throw new d("apiKeyHelper command must not be empty");
      const i2 = e2.timeoutMs ?? c, a2 = await (async function(e3, t3) {
        if (void 0 !== t3) return { file: e3, args: [...t3] };
        if ("win32" === process.platform) throw new d(`apiKeyHelper on Windows needs \`args\` (the helper is spawned directly, there is no /bin/sh): ${e3}`);
        try {
          await (0, o.access)(e3, s.constants.R_OK);
        } catch (t4) {
          throw new d(`apiKeyHelper script is not readable: ${e3}`, { cause: t4 });
        }
        return { file: "/bin/sh", args: [e3] };
      })(r2, e2.args), l2 = (function(e3) {
        const t3 = { ...process.env };
        delete t3.GROK_AUTH_EXPIRED, delete t3.GROK_AUTH_PROVIDER_ACCESS_TOKEN, delete t3.GROK_AUTH_PROVIDER_EXPIRES_AT, delete t3.GROK_AUTH_PROVIDER_REFRESH_TOKEN;
        const r3 = e3.previous;
        void 0 !== r3 && (t3.GROK_AUTH_EXPIRED = "1", t3.GROK_AUTH_PROVIDER_ACCESS_TOKEN = r3.token, t3.GROK_AUTH_PROVIDER_EXPIRES_AT = String(Math.floor(r3.expiresAtMs / 1e3)), void 0 !== r3.refreshToken && (t3.GROK_AUTH_PROVIDER_REFRESH_TOKEN = r3.refreshToken));
        return t3;
      })(t2);
      return await new Promise((e3, t3) => {
        const s2 = (0, n.spawn)(a2.file, a2.args, { stdio: ["ignore", "pipe", "pipe"], env: l2, timeout: i2, killSignal: "SIGKILL" }), o2 = [], c2 = [];
        let u2 = false;
        const p2 = (e4) => {
          u2 || (u2 = true, e4());
        };
        s2.stdout.on("data", (e4) => {
          o2.push(Buffer.from(e4));
        }), s2.stderr.on("data", (e4) => {
          c2.push(Buffer.from(e4));
        }), s2.on("error", (e4) => {
          p2(() => t3(new d("apiKeyHelper failed to start", { cause: e4 })));
        }), s2.on("exit", () => {
          s2.killed && (s2.stdout.destroy(), s2.stderr.destroy(), s2.unref(), p2(() => t3(new d(`apiKeyHelper timed out after ${Math.round(i2 / 1e3)}s: ${r2}`))));
        }), s2.on("close", (r3, n2) => {
          p2(() => {
            const s3 = Buffer.concat(o2).toString("utf8");
            if (0 === r3) return void e3(s3);
            const i3 = Buffer.concat(c2).toString("utf8");
            t3(new d(`apiKeyHelper exited unsuccessfully: ${(function(e4, t4) {
              if (null !== e4) return `exit code ${e4}`;
              return null !== t4 ? `signal ${t4}` : "unknown exit status";
            })(r3, n2)}${(function(e4) {
              const t4 = e4.trim();
              if (!t4) return "";
              return `; stderr: ${S(t4).slice(0, 1e3)}`;
            })(i3)}`));
          });
        });
      });
    }
    const w = i.Yj().transform((e2) => e2.trim()).refine((e2) => e2.length > 0).optional().catch(void 0), v = i.ai().finite().optional().catch(void 0), _ = i.Ik({ access_token: w, expires_in: v, refresh_token: w }), A = i.Ik({ exp: v });
    function S(e2) {
      return e2.replace(/[A-Za-z0-9_./+=-]{24,}/gu, "[redacted]");
    }
  }