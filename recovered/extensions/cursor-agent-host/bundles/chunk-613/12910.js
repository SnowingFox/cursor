// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 12910 range:30659..36184
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
12910: (A, e, t) => {
  "use strict";
  const { isIP: r } = t(77030), { lookup: s } = t(40610), o = t(31646), { InvalidArgumentError: n, InformationalError: i } = t(38238), a = Math.pow(2, 31) - 1;
  class Q {
    #a = 0;
    #Q = 0;
    #g = /* @__PURE__ */ new Map();
    dualStack = true;
    affinity = null;
    lookup = null;
    pick = null;
    constructor(A2) {
      this.#a = A2.maxTTL, this.#Q = A2.maxItems, this.dualStack = A2.dualStack, this.affinity = A2.affinity, this.lookup = A2.lookup ?? this.#E, this.pick = A2.pick ?? this.#B;
    }
    get full() {
      return this.#g.size === this.#Q;
    }
    runLookup(A2, e2, t2) {
      const r2 = this.#g.get(A2.hostname);
      if (null == r2 && this.full) return void t2(null, A2.origin);
      const s2 = { affinity: this.affinity, dualStack: this.dualStack, lookup: this.lookup, pick: this.pick, ...e2.dns, maxTTL: this.#a, maxItems: this.#Q };
      if (null == r2) this.lookup(A2, s2, (e3, r3) => {
        if (e3 || null == r3 || 0 === r3.length) return void t2(e3 ?? new i("No DNS entries found"));
        this.setRecords(A2, r3);
        const o2 = this.#g.get(A2.hostname), n2 = this.pick(A2, o2, s2.affinity);
        let a2;
        a2 = "number" == typeof n2.port ? `:${n2.port}` : "" !== A2.port ? `:${A2.port}` : "", t2(null, `${A2.protocol}//${6 === n2.family ? `[${n2.address}]` : n2.address}${a2}`);
      });
      else {
        const o2 = this.pick(A2, r2, s2.affinity);
        if (null == o2) return this.#g.delete(A2.hostname), void this.runLookup(A2, e2, t2);
        let n2;
        n2 = "number" == typeof o2.port ? `:${o2.port}` : "" !== A2.port ? `:${A2.port}` : "", t2(null, `${A2.protocol}//${6 === o2.family ? `[${o2.address}]` : o2.address}${n2}`);
      }
    }
    #E(A2, e2, t2) {
      s(A2.hostname, { all: true, family: false === this.dualStack ? this.affinity : 0, order: "ipv4first" }, (A3, e3) => {
        if (A3) return t2(A3);
        const r2 = /* @__PURE__ */ new Map();
        for (const A4 of e3) r2.set(`${A4.address}:${A4.family}`, A4);
        t2(null, r2.values());
      });
    }
    #B(A2, e2, t2) {
      let r2 = null;
      const { records: s2, offset: o2 } = e2;
      let n2;
      if (this.dualStack ? (null == t2 && (null == o2 || o2 === a ? (e2.offset = 0, t2 = 4) : (e2.offset++, t2 = 1 & ~e2.offset ? 4 : 6)), n2 = null != s2[t2] && s2[t2].ips.length > 0 ? s2[t2] : s2[4 === t2 ? 6 : 4]) : n2 = s2[t2], null == n2 || 0 === n2.ips.length) return r2;
      null == n2.offset || n2.offset === a ? n2.offset = 0 : n2.offset++;
      const i2 = n2.offset % n2.ips.length;
      return r2 = n2.ips[i2] ?? null, null == r2 ? r2 : Date.now() - r2.timestamp > r2.ttl ? (n2.ips.splice(i2, 1), this.pick(A2, e2, t2)) : r2;
    }
    setRecords(A2, e2) {
      const t2 = Date.now(), r2 = { records: { 4: null, 6: null } };
      for (const A3 of e2) {
        A3.timestamp = t2, "number" == typeof A3.ttl ? A3.ttl = Math.min(A3.ttl, this.#a) : A3.ttl = this.#a;
        const e3 = r2.records[A3.family] ?? { ips: [] };
        e3.ips.push(A3), r2.records[A3.family] = e3;
      }
      this.#g.set(A2.hostname, r2);
    }
    getHandler(A2, e2) {
      return new g(this, A2, e2);
    }
  }
  class g extends o {
    #c = null;
    #t = null;
    #I = null;
    #C = null;
    #h = null;
    constructor(A2, { origin: e2, handler: t2, dispatch: r2 }, s2) {
      super(t2), this.#h = e2, this.#C = t2, this.#t = { ...s2 }, this.#c = A2, this.#I = r2;
    }
    onError(A2) {
      switch (A2.code) {
        case "ETIMEDOUT":
        case "ECONNREFUSED":
          return this.#c.dualStack ? void this.#c.runLookup(this.#h, this.#t, (A3, e2) => {
            if (A3) return this.#C.onError(A3);
            const t2 = { ...this.#t, origin: e2 };
            this.#I(t2, this);
          }) : void this.#C.onError(A2);
        case "ENOTFOUND":
          this.#c.deleteRecord(this.#h);
        default:
          this.#C.onError(A2);
      }
    }
  }
  A.exports = (A2) => {
    if (null != A2?.maxTTL && ("number" != typeof A2?.maxTTL || A2?.maxTTL < 0)) throw new n("Invalid maxTTL. Must be a positive number");
    if (null != A2?.maxItems && ("number" != typeof A2?.maxItems || A2?.maxItems < 1)) throw new n("Invalid maxItems. Must be a positive number and greater than zero");
    if (null != A2?.affinity && 4 !== A2?.affinity && 6 !== A2?.affinity) throw new n("Invalid affinity. Must be either 4 or 6");
    if (null != A2?.dualStack && "boolean" != typeof A2?.dualStack) throw new n("Invalid dualStack. Must be a boolean");
    if (null != A2?.lookup && "function" != typeof A2?.lookup) throw new n("Invalid lookup. Must be a function");
    if (null != A2?.pick && "function" != typeof A2?.pick) throw new n("Invalid pick. Must be a function");
    const e2 = A2?.dualStack ?? true;
    let t2;
    t2 = e2 ? A2?.affinity ?? null : A2?.affinity ?? 4;
    const s2 = new Q({ maxTTL: A2?.maxTTL ?? 1e4, lookup: A2?.lookup ?? null, pick: A2?.pick ?? null, dualStack: e2, affinity: t2, maxItems: A2?.maxItems ?? 1 / 0 });
    return (A3) => function(e3, t3) {
      const o2 = e3.origin.constructor === URL ? e3.origin : new URL(e3.origin);
      return 0 !== r(o2.hostname) ? A3(e3, t3) : (s2.runLookup(o2, e3, (r2, n2) => {
        if (r2) return t3.onError(r2);
        let i2 = null;
        i2 = { ...e3, servername: o2.hostname, origin: n2, headers: { host: o2.hostname, ...e3.headers } }, A3(i2, s2.getHandler({ origin: o2, dispatch: A3, handler: t3 }, e3));
      }), true);
    };
  };
}