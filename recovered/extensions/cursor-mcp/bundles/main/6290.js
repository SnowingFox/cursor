// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6290 range:468907..472115
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6290: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { B1j: () => o2.B, RRj: () => S.RR, c8u: () => d.c, uOd: () => C.uO, NjG: () => S.Nj, XUi: () => I, E_S: () => k, Ico: () => u.I, O3I: () => a2.O3, tBH: () => a2.tB, UKO: () => c.U, yZp: () => _.yZ, nwZ: () => _.nw, eod: () => s2.e, Fmf: () => l.F, jIB: () => i2.jI, SAT: () => O.SA, FMv: () => b.FM, $yO: () => a2.$y, VDJ: () => a2.VD, VOp: () => g.VO, qhs: () => h.qh, ptw: () => g.pt, eZ7: () => f.eZ, Zo$: () => g.Zo, X5z: () => a2.X5, vn5: () => m.v, dg: () => f.dg, $HQ: () => n2.$H, zfx: () => P.zf, MBX: () => h.MB, Gpm: () => S.Gp, PKk: () => $.P, NOL: () => p.NO, Yl9: () => n2.Yl, qYO: () => a2.qY, gOx: () => P.gO, _NE: () => n2._N, Q2T: () => O.Q2, Ezk: () => O.Ez, qFm: () => T, eaG: () => a2.e, zBU: () => b.zB, iOk: () => v.iO, YMW: () => b.YM, dQS: () => b.dQ, KXj: () => w.KX, lV: () => m.l, mYE: () => b.mY, H$2: () => b.H$, J_m: () => h.J_, X1r: () => h.X1, koU: () => y, QDM: () => a2.QD, q2e: () => a2.q2, mtU: () => A.m, utF: () => A.u });
    var n2 = r2(768);
    r2(623);
    var o2 = r2(8881), s2 = r2(8088);
    var i2 = r2(4956), a2 = (r2(4792), r2(2557)), c = r2(3080), u = r2(5553), l = r2(8644), d = r2(6078);
    var p = r2(2573), f = r2(6768), h = (r2(3309), r2(4152)), m = r2(496), g = r2(7223);
    r2(7030);
    function y(e3, t3) {
      if ("needsUserAuth" === t3.type) return false;
      if ("expired" === t3.type) switch (e3.type) {
        case "idle":
        case "transient_failure":
        case "dormant":
          return true;
        case "failed":
        case "closed":
          return false !== e3.automaticRetry;
        case "connecting":
        case "connected":
        case "degraded":
          return false;
        default:
          return e3;
      }
      switch (e3.type) {
        case "idle":
        case "transient_failure":
        case "dormant":
          return true;
        case "failed":
        case "closed":
          return false !== e3.automaticRetry;
        case "connecting":
        case "connected":
        case "degraded":
          return false;
        default:
          return e3;
      }
    }
    r2(9175);
    var _ = r2(8691), v = r2(9052), w = r2(4420), b = r2(2915), S = r2(1521);
    function k(e3, t3) {
      void 0 !== t3 && t3.length > 0 && e3.searchParams.set("scope", t3.join(" "));
    }
    /* @__PURE__ */ new Set(["invalid_refresh_token", "token_revoked", "token_expired"]);
    const E = /\$\{[^}]*\}/;
    function x(e3) {
      if (void 0 === e3) return;
      const t3 = e3.trim();
      return 0 !== t3.length && E.test(t3) ? t3 : void 0;
    }
    function T(e3) {
      if (void 0 !== x(e3)) return;
      const t3 = e3?.trim();
      return t3 && t3.length > 0 ? t3 : void 0;
    }
    var O = r2(5015), P = r2(1219);
    class I {
      constructor() {
        this.listeners = /* @__PURE__ */ new Set(), this.event = (e3) => (this.listeners.add(e3), { dispose: () => {
          this.listeners.delete(e3);
        } });
      }
      fire(e3) {
        for (const t3 of Array.from(this.listeners)) t3(e3);
      }
      dispose() {
        this.listeners.clear();
      }
    }
    var C = r2(1195), A = r2(2047), $ = r2(8228);
  }