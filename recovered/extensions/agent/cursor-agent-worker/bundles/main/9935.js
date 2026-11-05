// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 9935 range:365305..366564
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9935: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.mergeInternals = void 0;
    const s10 = n10(1078), o10 = n10(5830);
    a10.mergeInternals = function(e11, a11, n11, r10, t10, i10, m10, l10) {
      const d10 = [];
      let c10 = 0, T10 = 0, p10 = false;
      const _10 = () => {
        !p10 || d10.length || c10 || a11.complete();
      }, k10 = (e12) => c10 < r10 ? u10(e12) : d10.push(e12), u10 = (e12) => {
        i10 && a11.next(e12), c10++;
        let l11 = false;
        (0, s10.from)(n11(e12, T10++)).subscribe((0, s10.operate)({ destination: a11, next: (e13) => {
          t10?.(e13), i10 ? k10(e13) : a11.next(e13);
        }, complete: () => {
          l11 = true;
        }, finalize: () => {
          if (l11) try {
            for (c10--; d10.length && c10 < r10; ) {
              const e13 = d10.shift();
              m10 ? (0, o10.executeSchedule)(a11, m10, () => u10(e13)) : u10(e13);
            }
            _10();
          } catch (e13) {
            a11.error(e13);
          }
        } }));
      };
      return e11.subscribe((0, s10.operate)({ destination: a11, next: k10, complete: () => {
        p10 = true, _10();
      } })), () => {
        l10?.();
      };
    };
  }