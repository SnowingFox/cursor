// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 87888 range:7612745..7620482
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
87888: (e, t, r) => {
    "use strict";
    r.d(t, { $O: () => _, $S: () => X, Au: () => $, Be: () => l, Bj: () => g, Ct: () => y, Dl: () => m, ER: () => Q, Eb: () => H, F7: () => R, FO: () => ie, Fk: () => Y, Fn: () => p, G1: () => I, G8: () => B, Hi: () => z, Il: () => ne, KA: () => L, KB: () => T, Kn: () => P, LK: () => D, Mu: () => i, Ny: () => b, Pw: () => v, Rl: () => s, Tx: () => j, Uy: () => S, WN: () => re, YA: () => G, Zm: () => q, _L: () => N, _z: () => w, aC: () => h, bS: () => ee, cU: () => E, dR: () => Z, dZ: () => se, db: () => A, em: () => U, f2: () => M, fU: () => ae, fs: () => f, gP: () => x, hH: () => V, jw: () => F, lo: () => te, m9: () => W, nA: () => c, pY: () => u, qF: () => K, qG: () => O, qm: () => J, rk: () => C, rt: () => k, tB: () => a, wA: () => d, xY: () => oe });
    var n = r(39567), o = r(7246);
    function s(e2, t2) {
      return new e2({ type: "string", ...o.A2(t2) });
    }
    function i(e2, t2) {
      return new e2({ type: "string", format: "email", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function a(e2, t2) {
      return new e2({ type: "string", format: "guid", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function l(e2, t2) {
      return new e2({ type: "string", format: "uuid", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function c(e2, t2) {
      return new e2({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4", ...o.A2(t2) });
    }
    function u(e2, t2) {
      return new e2({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6", ...o.A2(t2) });
    }
    function d(e2, t2) {
      return new e2({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7", ...o.A2(t2) });
    }
    function p(e2, t2) {
      return new e2({ type: "string", format: "url", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function h(e2, t2) {
      return new e2({ type: "string", format: "emoji", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function m(e2, t2) {
      return new e2({ type: "string", format: "nanoid", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function f(e2, t2) {
      return new e2({ type: "string", format: "cuid", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function g(e2, t2) {
      return new e2({ type: "string", format: "cuid2", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function y(e2, t2) {
      return new e2({ type: "string", format: "ulid", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function v(e2, t2) {
      return new e2({ type: "string", format: "xid", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function w(e2, t2) {
      return new e2({ type: "string", format: "ksuid", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function b(e2, t2) {
      return new e2({ type: "string", format: "ipv4", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function _(e2, t2) {
      return new e2({ type: "string", format: "ipv6", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function S(e2, t2) {
      return new e2({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function x(e2, t2) {
      return new e2({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function k(e2, t2) {
      return new e2({ type: "string", format: "base64", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function E(e2, t2) {
      return new e2({ type: "string", format: "base64url", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function T(e2, t2) {
      return new e2({ type: "string", format: "e164", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function C(e2, t2) {
      return new e2({ type: "string", format: "jwt", check: "string_format", abort: false, ...o.A2(t2) });
    }
    function I(e2, t2) {
      return new e2({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null, ...o.A2(t2) });
    }
    function A(e2, t2) {
      return new e2({ type: "string", format: "date", check: "string_format", ...o.A2(t2) });
    }
    function P(e2, t2) {
      return new e2({ type: "string", format: "time", check: "string_format", precision: null, ...o.A2(t2) });
    }
    function M(e2, t2) {
      return new e2({ type: "string", format: "duration", check: "string_format", ...o.A2(t2) });
    }
    function R(e2, t2) {
      return new e2({ type: "number", checks: [], ...o.A2(t2) });
    }
    function O(e2, t2) {
      return new e2({ type: "number", coerce: true, checks: [], ...o.A2(t2) });
    }
    function D(e2, t2) {
      return new e2({ type: "number", check: "number_format", abort: false, format: "safeint", ...o.A2(t2) });
    }
    function N(e2, t2) {
      return new e2({ type: "boolean", ...o.A2(t2) });
    }
    function F(e2, t2) {
      return new e2({ type: "null", ...o.A2(t2) });
    }
    function L(e2) {
      return new e2({ type: "any" });
    }
    function U(e2) {
      return new e2({ type: "unknown" });
    }
    function B(e2, t2) {
      return new e2({ type: "never", ...o.A2(t2) });
    }
    function $(e2, t2) {
      return new n.sm({ check: "less_than", ...o.A2(t2), value: e2, inclusive: false });
    }
    function q(e2, t2) {
      return new n.sm({ check: "less_than", ...o.A2(t2), value: e2, inclusive: true });
    }
    function j(e2, t2) {
      return new n.J_({ check: "greater_than", ...o.A2(t2), value: e2, inclusive: false });
    }
    function J(e2, t2) {
      return new n.J_({ check: "greater_than", ...o.A2(t2), value: e2, inclusive: true });
    }
    function z(e2, t2) {
      return new n.Jk({ check: "multiple_of", ...o.A2(t2), value: e2 });
    }
    function H(e2, t2) {
      return new n.Yk({ check: "max_length", ...o.A2(t2), maximum: e2 });
    }
    function W(e2, t2) {
      return new n.Kk({ check: "min_length", ...o.A2(t2), minimum: e2 });
    }
    function G(e2, t2) {
      return new n.RM({ check: "length_equals", ...o.A2(t2), length: e2 });
    }
    function Y(e2, t2) {
      return new n.DG({ check: "string_format", format: "regex", ...o.A2(t2), pattern: e2 });
    }
    function V(e2) {
      return new n.NI({ check: "string_format", format: "lowercase", ...o.A2(e2) });
    }
    function K(e2) {
      return new n.kH({ check: "string_format", format: "uppercase", ...o.A2(e2) });
    }
    function Z(e2, t2) {
      return new n.Tt({ check: "string_format", format: "includes", ...o.A2(t2), includes: e2 });
    }
    function X(e2, t2) {
      return new n.J({ check: "string_format", format: "starts_with", ...o.A2(t2), prefix: e2 });
    }
    function Q(e2, t2) {
      return new n.E6({ check: "string_format", format: "ends_with", ...o.A2(t2), suffix: e2 });
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
    function oe() {
      return ee((e2) => e2.toUpperCase());
    }
    function se(e2, t2, r2) {
      return new e2({ type: "array", element: t2, ...o.A2(r2) });
    }
    function ie(e2, t2, r2) {
      const n2 = o.A2(r2);
      n2.abort ?? (n2.abort = true);
      return new e2({ type: "custom", check: "custom", fn: t2, ...n2 });
    }
    function ae(e2, t2, r2) {
      return new e2({ type: "custom", check: "custom", fn: t2, ...o.A2(r2) });
    }
  }