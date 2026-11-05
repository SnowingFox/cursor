// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: McpServerConfigMenu.js range:22606260..22609230
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.223Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, stylex.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, stylex.js
// path-candidate: none (no nls basename match; path inferred, confidence C)

MK1 = L({
  "McpServerConfigMenu.js"() {
    "use strict";

    E(), Mt(), J7(), a$m = 4e3, l$m = 8, c$m = 2, Uot = {
      header: {
        kOIVth: "cursor-ui-1oot3zn cursor-ui-aky6re",
        $$css: true
      },
      headerIcon: {
        k1xSpc: "cursor-ui-78zum5",
        kzQI83: "cursor-ui-1c4vz4f",
        kmuXW: "cursor-ui-2lah0s",
        kCS8Yb: "cursor-ui-dl72j9",
        kGNEyG: "cursor-ui-6s0dn4",
        kjj79g: "cursor-ui-l56j7k",
        kzqmXN: "cursor-ui-jst10v",
        kZKoxP: "cursor-ui-170hpbr",
        kIxVMA: "cursor-ui-1vb4fzf",
        ksF3WI: "cursor-ui-14gibnr",
        kYm2EN: "cursor-ui-1u51yxl",
        kqGeR4: "cursor-ui-10a2chs",
        kWkggS: "cursor-ui-72hokp",
        kXHlph: "cursor-ui-6ikm8r",
        kORKVm: "cursor-ui-10wlt62",
        $$css: true
      },
      headerIconLogo: {
        kWkggS: "cursor-ui-jbqb8w",
        $$css: true
      },
      headerIconPluginLogo: {
        kIxVMA: "cursor-ui-1njmyyh",
        ksF3WI: "cursor-ui-y7i79c",
        kYm2EN: "cursor-ui-1talola",
        kqGeR4: "cursor-ui-famn59",
        $$css: true
      },
      headerIconImage: {
        kzqmXN: "cursor-ui-h8yej3",
        kZKoxP: "cursor-ui-5yr21d",
        kVIFPx: "cursor-ui-l1xv1r",
        $$css: true
      },
      headerIconImagePlugin: {
        kVIFPx: "cursor-ui-19kjcj4",
        $$css: true
      },
      dialogSections: {
        khm7nJ: "cursor-ui-bldk9i",
        $$css: true
      },
      toolGroupSelectorLabel: {
        kzQI83: "cursor-ui-1c4vz4f",
        kCS8Yb: "cursor-ui-dl72j9",
        $$css: true
      }
    }, $Xa = 16, u$m = 32, ele = "Cursor's servers", d$m = "This machine", h$m = "Not decided yet", p$m = "Set by your team. Web can't sign in to it until a team MCP admin turns off the team default. Grok Bot and iOS ignore the default.", m$m = "Reset placement", HXa = "Grok Bot, web and iOS can't sign in to it while it runs here.", g$m = [{
      value: "all",
      label: "Allow all"
    }, {
      value: "off",
      label: "Don't allow"
    }, {
      value: "custom",
      label: "Custom"
    }], f$m = {
      reads: "all",
      writes: "all"
    };
  }
});
import { jsxs as v$m, jsx as yes } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as DK1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function McpServerConfigMenu(t) {
  const e = DK1(11),
    {
      label: n,
      rating: i,
      onRatingChange: r
    } = t;
  let s;
  e[0] !== n ? (s = v$m("span", {
    children: ["Routed to ", n]
  }), e[0] = n, e[1] = s) : s = e[1];
  const o = i ?? null;
  let a;
  e[2] !== r || e[3] !== i ? (a = u => {
    r(i === u ? void 0 : u);
  }, e[2] = r, e[3] = i, e[4] = a) : a = e[4];
  let l;
  e[5] !== o || e[6] !== a ? (l = yes($oe, {
    delay: Z1n,
    children: yes("div", {
      className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-11twubx",
      children: yes(NC, {
        iconButtonSize: "sm",
        children: yes(A9r, {
          feedback: {
            selectedSentiment: o,
            onSentiment: a
          },
          thumbsDownTooltipTitle: "Bad Routing",
          thumbsUpTooltipTitle: "Good Routing"
        })
      })
    })
  }), e[5] = o, e[6] = a, e[7] = l) : l = e[7];
  let c;
  return e[8] !== s || e[9] !== l ? (c = v$m("div", {
    "data-slot": "auto-routing-result-display",
    className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-ehausa cursor-ui-h8yej3 cursor-ui-1pbdsak cursor-ui-1fgieo2 cursor-ui-1e4uaio cursor-ui-raizn5 cursor-ui-1u83ck7",
    children: [s, l]
  }), e[8] = s, e[9] = l, e[10] = c) : c = e[10], c;
}
