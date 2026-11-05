// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9407 range:6091317..6095828
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9407: function(t2, e2, r2) {
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
    Object.defineProperty(e2, "__esModule", { value: true }), e2.dnsLookup = function(t3) {
      return new Promise((e3) => {
        const r3 = t3.hostname;
        switch (t3.source) {
          case "nodejs": {
            const t4 = Date.now();
            a.lookup(r3, (n3, s3) => {
              if (n3) return void e3({ host: r3, servers: a.getServers(), error: n3.message });
              const i3 = Date.now() - t4;
              e3({ host: r3, servers: a.getServers(), address: s3.toString(), duration: i3 });
            });
            break;
          }
          default: {
            if (!t3.resolveHostViaSystem) {
              e3({ host: r3, servers: t3.source, error: "System DNS resolver unavailable in this process" });
              break;
            }
            const n3 = Date.now();
            t3.resolveHostViaSystem(r3, { source: t3.source }).then((s3) => {
              const i3 = Date.now() - n3;
              e3({ host: r3, servers: t3.source, address: s3.endpoints.map((t4) => t4.address.toString()).join(", "), duration: i3 });
            }).catch((n4) => {
              e3({ host: r3, servers: t3.source, error: n4.message });
            });
            break;
          }
        }
      });
    }, e2.inspectTLSInfo = function(t3) {
      return new Promise((e3) => {
        let r3, n3 = "unknown";
        const s3 = Date.now();
        let i3 = 0, o3 = 0, a2 = 0;
        const u2 = c.request({ method: "POST", host: t3.hostname, port: t3.port, path: "/aiserver.v1.HealthService/Unary", headers: { Connection: "keep-alive", "Content-Type": "application/proto", "Content-Length": "0" }, rejectUnauthorized: false, agent: false }, (s4) => {
          const u3 = s4.socket;
          r3 = u3.getPeerCertificate(), null !== r3 ? (s4.on("data", () => {
          }), s4.on("end", () => {
            e3({ url: t3.toString(), ip: u3.remoteAddress ?? n3, status: s4.statusCode?.toString() ?? "unknown", name: Array.isArray(r3.subject.CN) ? r3.subject.CN.join(",") : r3.subject.CN ?? "", issuer: `C=${r3.issuer.C}; O=${r3.issuer.O}; CN=${r3.issuer.CN}`, altName: r3.subjectaltname ?? "", dns_time: i3, connect_time: o3, tls_time: a2 });
          })) : e3({ error: "No certificate found" });
        });
        u2.on("socket", (t4) => {
          i3 = Date.now() - s3, t4.connecting ? t4.on("connect", () => {
            n3 = t4.remoteAddress ?? "unknown", o3 = Date.now() - s3 - i3;
          }) : (n3 = t4.remoteAddress ?? "unknown", o3 = Date.now() - s3 - i3), t4.on("secureConnect", () => {
            a2 = Date.now() - s3 - o3 - i3;
          });
        }), u2.on("error", (t4) => {
          e3({ error: t4.message });
        }), u2.end();
      });
    }, e2.http2Ping = function(t3) {
      return new Promise((e3) => {
        const r3 = u.connect(t3.toString(), { protocol: "https:", rejectUnauthorized: false, ALPNProtocols: ["h2"] });
        r3.on("error", (r4) => {
          e3({ host: t3.host, error: r4.message });
        }), r3.on("connect", () => {
          r3.alpnProtocol ? e3({ host: t3.host, protocol: r3.alpnProtocol ?? "unknown" }) : e3({ host: t3.host, error: "HTTP/2 ALPN could not be negotiated" });
        });
      });
    };
    const a = o2(r2(610)), u = o2(r2(2467)), c = o2(r2(4708));
  }