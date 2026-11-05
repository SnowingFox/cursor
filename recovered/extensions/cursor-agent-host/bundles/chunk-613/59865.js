// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 59865 range:326495..328662
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
59865: (A, e, t) => {
  "use strict";
  const { wellknownHeaderNames: r, headerNameLowerCasedRecord: s } = t(71648);
  class o {
    value = null;
    left = null;
    middle = null;
    right = null;
    code;
    constructor(A2, e2, t2) {
      if (void 0 === t2 || t2 >= A2.length) throw new TypeError("Unreachable");
      if ((this.code = A2.charCodeAt(t2)) > 127) throw new TypeError("key must be ascii string");
      A2.length !== ++t2 ? this.middle = new o(A2, e2, t2) : this.value = e2;
    }
    add(A2, e2) {
      const t2 = A2.length;
      if (0 === t2) throw new TypeError("Unreachable");
      let r2 = 0, s2 = this;
      for (; ; ) {
        const n2 = A2.charCodeAt(r2);
        if (n2 > 127) throw new TypeError("key must be ascii string");
        if (s2.code === n2) {
          if (t2 === ++r2) {
            s2.value = e2;
            break;
          }
          if (null === s2.middle) {
            s2.middle = new o(A2, e2, r2);
            break;
          }
          s2 = s2.middle;
        } else if (s2.code < n2) {
          if (null === s2.left) {
            s2.left = new o(A2, e2, r2);
            break;
          }
          s2 = s2.left;
        } else {
          if (null === s2.right) {
            s2.right = new o(A2, e2, r2);
            break;
          }
          s2 = s2.right;
        }
      }
    }
    search(A2) {
      const e2 = A2.length;
      let t2 = 0, r2 = this;
      for (; null !== r2 && t2 < e2; ) {
        let s2 = A2[t2];
        for (s2 <= 90 && s2 >= 65 && (s2 |= 32); null !== r2; ) {
          if (s2 === r2.code) {
            if (e2 === ++t2) return r2;
            r2 = r2.middle;
            break;
          }
          r2 = r2.code < s2 ? r2.left : r2.right;
        }
      }
      return null;
    }
  }
  class n {
    node = null;
    insert(A2, e2) {
      null === this.node ? this.node = new o(A2, e2, 0) : this.node.add(A2, e2);
    }
    lookup(A2) {
      return this.node?.search(A2)?.value ?? null;
    }
  }
  const i = new n();
  for (let A2 = 0; A2 < r.length; ++A2) {
    const e2 = s[r[A2]];
    i.insert(e2, e2);
  }
  A.exports = { TernarySearchTree: n, tree: i };
}