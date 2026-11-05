// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7888 range:704325..712140
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7888: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { $O: () => b, $S: () => X, Au: () => q, Be: () => c, Bj: () => g, Ct: () => y, Dl: () => h, ER: () => Q, Eb: () => V, F7: () => $, FO: () => ie, Fk: () => W, Fn: () => p, G1: () => P, G8: () => F, Hi: () => L, Il: () => ne, KA: () => j, KB: () => T, Kn: () => C, LK: () => N, Mu: () => i2, Ny: () => w, Pw: () => _, Rl: () => s2, Tx: () => U, Uy: () => S, WN: () => re, YA: () => Z, Zm: () => z, _L: () => M, _z: () => v, aC: () => f, bS: () => ee, cU: () => x, dR: () => G, dZ: () => se, db: () => I, em: () => D, f2: () => A, fU: () => ae, fs: () => m, gP: () => k, hH: () => H, jw: () => J, lo: () => te, m9: () => K, nA: () => u, pY: () => l, qF: () => Y, qG: () => R, qm: () => B, rk: () => O, rt: () => E, tB: () => a2, wA: () => d, xY: () => oe });
    var n2 = r2(9567), o2 = r2(7246);
    function s2(e3, t3) {
      return new e3({ type: "string", ...o2.A2(t3) });
    }
    function i2(e3, t3) {
      return new e3({ type: "string", format: "email", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function a2(e3, t3) {
      return new e3({ type: "string", format: "guid", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function c(e3, t3) {
      return new e3({ type: "string", format: "uuid", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function u(e3, t3) {
      return new e3({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4", ...o2.A2(t3) });
    }
    function l(e3, t3) {
      return new e3({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6", ...o2.A2(t3) });
    }
    function d(e3, t3) {
      return new e3({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7", ...o2.A2(t3) });
    }
    function p(e3, t3) {
      return new e3({ type: "string", format: "url", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function f(e3, t3) {
      return new e3({ type: "string", format: "emoji", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function h(e3, t3) {
      return new e3({ type: "string", format: "nanoid", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function m(e3, t3) {
      return new e3({ type: "string", format: "cuid", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function g(e3, t3) {
      return new e3({ type: "string", format: "cuid2", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function y(e3, t3) {
      return new e3({ type: "string", format: "ulid", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function _(e3, t3) {
      return new e3({ type: "string", format: "xid", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function v(e3, t3) {
      return new e3({ type: "string", format: "ksuid", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function w(e3, t3) {
      return new e3({ type: "string", format: "ipv4", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function b(e3, t3) {
      return new e3({ type: "string", format: "ipv6", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function S(e3, t3) {
      return new e3({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function k(e3, t3) {
      return new e3({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function E(e3, t3) {
      return new e3({ type: "string", format: "base64", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function x(e3, t3) {
      return new e3({ type: "string", format: "base64url", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function T(e3, t3) {
      return new e3({ type: "string", format: "e164", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function O(e3, t3) {
      return new e3({ type: "string", format: "jwt", check: "string_format", abort: false, ...o2.A2(t3) });
    }
    function P(e3, t3) {
      return new e3({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null, ...o2.A2(t3) });
    }
    function I(e3, t3) {
      return new e3({ type: "string", format: "date", check: "string_format", ...o2.A2(t3) });
    }
    function C(e3, t3) {
      return new e3({ type: "string", format: "time", check: "string_format", precision: null, ...o2.A2(t3) });
    }
    function A(e3, t3) {
      return new e3({ type: "string", format: "duration", check: "string_format", ...o2.A2(t3) });
    }
    function $(e3, t3) {
      return new e3({ type: "number", checks: [], ...o2.A2(t3) });
    }
    function R(e3, t3) {
      return new e3({ type: "number", coerce: true, checks: [], ...o2.A2(t3) });
    }
    function N(e3, t3) {
      return new e3({ type: "number", check: "number_format", abort: false, format: "safeint", ...o2.A2(t3) });
    }
    function M(e3, t3) {
      return new e3({ type: "boolean", ...o2.A2(t3) });
    }
    function J(e3, t3) {
      return new e3({ type: "null", ...o2.A2(t3) });
    }
    function j(e3) {
      return new e3({ type: "any" });
    }
    function D(e3) {
      return new e3({ type: "unknown" });
    }
    function F(e3, t3) {
      return new e3({ type: "never", ...o2.A2(t3) });
    }
    function q(e3, t3) {
      return new n2.sm({ check: "less_than", ...o2.A2(t3), value: e3, inclusive: false });
    }
    function z(e3, t3) {
      return new n2.sm({ check: "less_than", ...o2.A2(t3), value: e3, inclusive: true });
    }
    function U(e3, t3) {
      return new n2.J_({ check: "greater_than", ...o2.A2(t3), value: e3, inclusive: false });
    }
    function B(e3, t3) {
      return new n2.J_({ check: "greater_than", ...o2.A2(t3), value: e3, inclusive: true });
    }
    function L(e3, t3) {
      return new n2.Jk({ check: "multiple_of", ...o2.A2(t3), value: e3 });
    }
    function V(e3, t3) {
      return new n2.Yk({ check: "max_length", ...o2.A2(t3), maximum: e3 });
    }
    function K(e3, t3) {
      return new n2.Kk({ check: "min_length", ...o2.A2(t3), minimum: e3 });
    }
    function Z(e3, t3) {
      return new n2.RM({ check: "length_equals", ...o2.A2(t3), length: e3 });
    }
    function W(e3, t3) {
      return new n2.DG({ check: "string_format", format: "regex", ...o2.A2(t3), pattern: e3 });
    }
    function H(e3) {
      return new n2.NI({ check: "string_format", format: "lowercase", ...o2.A2(e3) });
    }
    function Y(e3) {
      return new n2.kH({ check: "string_format", format: "uppercase", ...o2.A2(e3) });
    }
    function G(e3, t3) {
      return new n2.Tt({ check: "string_format", format: "includes", ...o2.A2(t3), includes: e3 });
    }
    function X(e3, t3) {
      return new n2.J({ check: "string_format", format: "starts_with", ...o2.A2(t3), prefix: e3 });
    }
    function Q(e3, t3) {
      return new n2.E6({ check: "string_format", format: "ends_with", ...o2.A2(t3), suffix: e3 });
    }
    function ee(e3) {
      return new n2.v$({ check: "overwrite", tx: e3 });
    }
    function te(e3) {
      return ee((t3) => t3.normalize(e3));
    }
    function re() {
      return ee((e3) => e3.trim());
    }
    function ne() {
      return ee((e3) => e3.toLowerCase());
    }
    function oe() {
      return ee((e3) => e3.toUpperCase());
    }
    function se(e3, t3, r3) {
      return new e3({ type: "array", element: t3, ...o2.A2(r3) });
    }
    function ie(e3, t3, r3) {
      const n3 = o2.A2(r3);
      n3.abort ?? (n3.abort = true);
      return new e3({ type: "custom", check: "custom", fn: t3, ...n3 });
    }
    function ae(e3, t3, r3) {
      return new e3({ type: "custom", check: "custom", fn: t3, ...o2.A2(r3) });
    }
  }