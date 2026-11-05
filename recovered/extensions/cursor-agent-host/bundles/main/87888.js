// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 87888 range:12237487..12245224
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
87888: (e, t, r) => {
    "use strict";
    r.d(t, { $O: () => A, $S: () => Z, Au: () => U, Be: () => c, Bj: () => g, Ct: () => y, Dl: () => h, ER: () => X, Eb: () => G, F7: () => P, FO: () => ie, Fk: () => W, Fn: () => p, G1: () => x, G8: () => F, Hi: () => j, Il: () => ne, KA: () => O, KB: () => C, Kn: () => R, LK: () => M, Mu: () => i, Ny: () => _, Pw: () => w, Rl: () => o, Tx: () => $, Uy: () => S, WN: () => re, YA: () => z, Zm: () => L, _L: () => q, _z: () => v, aC: () => m, bS: () => ee, cU: () => I, dR: () => Y, dZ: () => oe, db: () => T, em: () => N, f2: () => B, fU: () => ae, fs: () => f, gP: () => b, hH: () => V, jw: () => D, lo: () => te, m9: () => H, nA: () => l, pY: () => u, qF: () => K, qG: () => J, qm: () => Q, rk: () => k, rt: () => E, tB: () => a, wA: () => d, xY: () => se });
    var n = r(39567), s = r(7246);
    function o(e2, t2) {
      return new e2({ type: "string", ...s.A2(t2) });
    }
    function i(e2, t2) {
      return new e2({ type: "string", format: "email", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function a(e2, t2) {
      return new e2({ type: "string", format: "guid", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function c(e2, t2) {
      return new e2({ type: "string", format: "uuid", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function l(e2, t2) {
      return new e2({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4", ...s.A2(t2) });
    }
    function u(e2, t2) {
      return new e2({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6", ...s.A2(t2) });
    }
    function d(e2, t2) {
      return new e2({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7", ...s.A2(t2) });
    }
    function p(e2, t2) {
      return new e2({ type: "string", format: "url", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function m(e2, t2) {
      return new e2({ type: "string", format: "emoji", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function h(e2, t2) {
      return new e2({ type: "string", format: "nanoid", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function f(e2, t2) {
      return new e2({ type: "string", format: "cuid", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function g(e2, t2) {
      return new e2({ type: "string", format: "cuid2", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function y(e2, t2) {
      return new e2({ type: "string", format: "ulid", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function w(e2, t2) {
      return new e2({ type: "string", format: "xid", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function v(e2, t2) {
      return new e2({ type: "string", format: "ksuid", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function _(e2, t2) {
      return new e2({ type: "string", format: "ipv4", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function A(e2, t2) {
      return new e2({ type: "string", format: "ipv6", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function S(e2, t2) {
      return new e2({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function b(e2, t2) {
      return new e2({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function E(e2, t2) {
      return new e2({ type: "string", format: "base64", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function I(e2, t2) {
      return new e2({ type: "string", format: "base64url", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function C(e2, t2) {
      return new e2({ type: "string", format: "e164", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function k(e2, t2) {
      return new e2({ type: "string", format: "jwt", check: "string_format", abort: false, ...s.A2(t2) });
    }
    function x(e2, t2) {
      return new e2({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null, ...s.A2(t2) });
    }
    function T(e2, t2) {
      return new e2({ type: "string", format: "date", check: "string_format", ...s.A2(t2) });
    }
    function R(e2, t2) {
      return new e2({ type: "string", format: "time", check: "string_format", precision: null, ...s.A2(t2) });
    }
    function B(e2, t2) {
      return new e2({ type: "string", format: "duration", check: "string_format", ...s.A2(t2) });
    }
    function P(e2, t2) {
      return new e2({ type: "number", checks: [], ...s.A2(t2) });
    }
    function J(e2, t2) {
      return new e2({ type: "number", coerce: true, checks: [], ...s.A2(t2) });
    }
    function M(e2, t2) {
      return new e2({ type: "number", check: "number_format", abort: false, format: "safeint", ...s.A2(t2) });
    }
    function q(e2, t2) {
      return new e2({ type: "boolean", ...s.A2(t2) });
    }
    function D(e2, t2) {
      return new e2({ type: "null", ...s.A2(t2) });
    }
    function O(e2) {
      return new e2({ type: "any" });
    }
    function N(e2) {
      return new e2({ type: "unknown" });
    }
    function F(e2, t2) {
      return new e2({ type: "never", ...s.A2(t2) });
    }
    function U(e2, t2) {
      return new n.sm({ check: "less_than", ...s.A2(t2), value: e2, inclusive: false });
    }
    function L(e2, t2) {
      return new n.sm({ check: "less_than", ...s.A2(t2), value: e2, inclusive: true });
    }
    function $(e2, t2) {
      return new n.J_({ check: "greater_than", ...s.A2(t2), value: e2, inclusive: false });
    }
    function Q(e2, t2) {
      return new n.J_({ check: "greater_than", ...s.A2(t2), value: e2, inclusive: true });
    }
    function j(e2, t2) {
      return new n.Jk({ check: "multiple_of", ...s.A2(t2), value: e2 });
    }
    function G(e2, t2) {
      return new n.Yk({ check: "max_length", ...s.A2(t2), maximum: e2 });
    }
    function H(e2, t2) {
      return new n.Kk({ check: "min_length", ...s.A2(t2), minimum: e2 });
    }
    function z(e2, t2) {
      return new n.RM({ check: "length_equals", ...s.A2(t2), length: e2 });
    }
    function W(e2, t2) {
      return new n.DG({ check: "string_format", format: "regex", ...s.A2(t2), pattern: e2 });
    }
    function V(e2) {
      return new n.NI({ check: "string_format", format: "lowercase", ...s.A2(e2) });
    }
    function K(e2) {
      return new n.kH({ check: "string_format", format: "uppercase", ...s.A2(e2) });
    }
    function Y(e2, t2) {
      return new n.Tt({ check: "string_format", format: "includes", ...s.A2(t2), includes: e2 });
    }
    function Z(e2, t2) {
      return new n.J({ check: "string_format", format: "starts_with", ...s.A2(t2), prefix: e2 });
    }
    function X(e2, t2) {
      return new n.E6({ check: "string_format", format: "ends_with", ...s.A2(t2), suffix: e2 });
    }
    function ee(e2) {
      return new n.v$({ check: "overwrite", tx: e2 });
    }
    function te(e2) {
      return ee((t2) => t2.normalize(e2));
    }
    function re() {
      return ee((e2) => e2.trim());
    }
    function ne() {
      return ee((e2) => e2.toLowerCase());
    }
    function se() {
      return ee((e2) => e2.toUpperCase());
    }
    function oe(e2, t2, r2) {
      return new e2({ type: "array", element: t2, ...s.A2(r2) });
    }
    function ie(e2, t2, r2) {
      const n2 = s.A2(r2);
      n2.abort ?? (n2.abort = true);
      return new e2({ type: "custom", check: "custom", fn: t2, ...n2 });
    }
    function ae(e2, t2, r2) {
      return new e2({ type: "custom", check: "custom", fn: t2, ...s.A2(r2) });
    }
  }