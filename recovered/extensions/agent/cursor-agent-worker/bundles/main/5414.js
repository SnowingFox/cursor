// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 5414 range:154430..155221
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5414: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.onErrorResumeNext = void 0;
    const s10 = n10(1078), o10 = n10(9031), r10 = n10(4462);
    a10.onErrorResumeNext = function(...e11) {
      const a11 = (0, o10.argsOrArgArray)(e11);
      return new s10.Observable((e12) => {
        let n11 = 0;
        const o11 = () => {
          if (n11 < a11.length) {
            let t10;
            try {
              t10 = (0, s10.from)(a11[n11++]);
            } catch (e13) {
              return void o11();
            }
            const i10 = (0, s10.operate)({ destination: e12, error: r10.noop, complete: r10.noop });
            t10.subscribe(i10), i10.add(o11);
          } else e12.complete();
        };
        o11();
      });
    };
  }