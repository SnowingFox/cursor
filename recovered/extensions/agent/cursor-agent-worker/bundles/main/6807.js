// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 6807 range:195254..196804
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6807: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.groupBy = void 0;
    const s10 = n10(1078), o10 = n10(3043);
    a10.groupBy = function(e11, a11, n11, r10) {
      return (t10) => new s10.Observable((i10) => {
        let m10;
        a11 && "function" != typeof a11 ? { duration: n11, element: m10, connector: r10 } = a11 : m10 = a11;
        const l10 = /* @__PURE__ */ new Map(), d10 = (e12) => {
          l10.forEach(e12), e12(i10);
        }, c10 = (e12) => d10((a12) => a12.error(e12)), T10 = (0, s10.operate)({ destination: i10, next: (a12) => {
          try {
            const t11 = e11(a12);
            let d11 = l10.get(t11);
            if (!d11) {
              l10.set(t11, d11 = r10 ? r10() : new o10.Subject());
              const e12 = (function(e13, a13) {
                const n12 = new s10.Observable((e14) => a13.subscribe(e14));
                return n12.key = e13, n12;
              })(t11, d11);
              if (i10.next(e12), n11) {
                const a13 = (0, s10.operate)({ destination: d11, next: () => {
                  d11.complete(), a13?.unsubscribe();
                }, finalize: () => l10.delete(t11) });
                T10.add((0, s10.from)(n11(e12)).subscribe(a13));
              }
            }
            d11.next(m10 ? m10(a12) : a12);
          } catch (e12) {
            c10(e12);
          }
        }, error: c10, complete: () => d10((e12) => e12.complete()), finalize: () => l10.clear() });
        t10.subscribe(T10);
      });
    };
  }