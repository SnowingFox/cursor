// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 49407 range:8172409..8176902
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
49407: function(e, t, r) {
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
    Object.defineProperty(t, "__esModule", { value: true }), t.dnsLookup = function(e2) {
      return new Promise((t2) => {
        const r2 = e2.hostname;
        switch (e2.source) {
          case "nodejs": {
            const e3 = Date.now();
            a.lookup(r2, (n2, s2) => {
              if (n2) return void t2({ host: r2, servers: a.getServers(), error: n2.message });
              const o2 = Date.now() - e3;
              t2({ host: r2, servers: a.getServers(), address: s2.toString(), duration: o2 });
            });
            break;
          }
          default: {
            if (!e2.resolveHostViaSystem) {
              t2({ host: r2, servers: e2.source, error: "System DNS resolver unavailable in this process" });
              break;
            }
            const n2 = Date.now();
            e2.resolveHostViaSystem(r2, { source: e2.source }).then((s2) => {
              const o2 = Date.now() - n2;
              t2({ host: r2, servers: e2.source, address: s2.endpoints.map((e3) => e3.address.toString()).join(", "), duration: o2 });
            }).catch((n3) => {
              t2({ host: r2, servers: e2.source, error: n3.message });
            });
            break;
          }
        }
      });
    }, t.inspectTLSInfo = function(e2) {
      return new Promise((t2) => {
        let r2, n2 = "unknown";
        const s2 = Date.now();
        let o2 = 0, i2 = 0, a2 = 0;
        const c2 = l.request({ method: "POST", host: e2.hostname, port: e2.port, path: "/aiserver.v1.HealthService/Unary", headers: { Connection: "keep-alive", "Content-Type": "application/proto", "Content-Length": "0" }, rejectUnauthorized: false, agent: false }, (s3) => {
          const c3 = s3.socket;
          r2 = c3.getPeerCertificate(), null !== r2 ? (s3.on("data", () => {
          }), s3.on("end", () => {
            t2({ url: e2.toString(), ip: c3.remoteAddress ?? n2, status: s3.statusCode?.toString() ?? "unknown", name: Array.isArray(r2.subject.CN) ? r2.subject.CN.join(",") : r2.subject.CN ?? "", issuer: `C=${r2.issuer.C}; O=${r2.issuer.O}; CN=${r2.issuer.CN}`, altName: r2.subjectaltname ?? "", dns_time: o2, connect_time: i2, tls_time: a2 });
          })) : t2({ error: "No certificate found" });
        });
        c2.on("socket", (e3) => {
          o2 = Date.now() - s2, e3.connecting ? e3.on("connect", () => {
            n2 = e3.remoteAddress ?? "unknown", i2 = Date.now() - s2 - o2;
          }) : (n2 = e3.remoteAddress ?? "unknown", i2 = Date.now() - s2 - o2), e3.on("secureConnect", () => {
            a2 = Date.now() - s2 - i2 - o2;
          });
        }), c2.on("error", (e3) => {
          t2({ error: e3.message });
        }), c2.end();
      });
    }, t.http2Ping = function(e2) {
      return new Promise((t2) => {
        const r2 = c.connect(e2.toString(), { protocol: "https:", rejectUnauthorized: false, ALPNProtocols: ["h2"] });
        r2.on("error", (r3) => {
          t2({ host: e2.host, error: r3.message });
        }), r2.on("connect", () => {
          r2.alpnProtocol ? t2({ host: e2.host, protocol: r2.alpnProtocol ?? "unknown" }) : t2({ host: e2.host, error: "HTTP/2 ALPN could not be negotiated" });
        });
      });
    };
    const a = i(r(40610)), c = i(r(32467)), l = i(r(44708));
  }