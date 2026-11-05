// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 852 range:25912..26469
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
852: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.firstValueFrom = void 0;
    const s10 = n10(1078), o10 = n10(231);
    a10.firstValueFrom = function(e11, a11) {
      const n11 = "object" == typeof a11;
      return new Promise((r10, t10) => {
        const i10 = new s10.Subscriber({ next: (e12) => {
          r10(e12), i10.unsubscribe();
        }, error: t10, complete: () => {
          n11 ? r10(a11.defaultValue) : t10(new o10.EmptyError());
        } });
        e11.subscribe(i10);
      });
    };
  }