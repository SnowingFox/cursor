// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: BackgroundComposerStatusIndicator.js range:39318971..39326343
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, Mt, pi, pd, Iw, gs, ta, aS, Jat, Wct, WcC
// wrapper-init: GcC
// hoisted-owner: StatusIndicatorSection.js (app-out-vs-workbench-workbench-glass-main-js:7794); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

GcC = L({ "BackgroundComposerStatusIndicator.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), Mt(), pi(), pd(), Iw(), gs(), ta(), aS(), Jat(), Wct(), WcC(), Cdc = wt("<span>"), XXv = Ok(zt), S8e = (t) => {
    const e = vt(() => {
      switch (t.status) {
        case Po.RUNNING:
        case Po.CREATING:
          return yt.circleShine;
        case Po.FINISHED:
          return yt.checkCircled;
        case Po.ERROR:
          return yt.warnCircle;
        default:
          return yt.warnCircle;
      }
    }), n = vt(() => {
      if (t.neutralFinished) return "var(--cursor-icon-secondary)";
      if (t.onlyColorFinished) return t.status === Po.FINISHED ? "var(--vscode-testing-iconPassed)" : "var(--vscode-testing-iconUnset)";
      switch (t.status) {
        case Po.CREATING:
        case Po.RUNNING:
          return "var(--vscode-editorLightBulb-foreground)";
        case Po.FINISHED:
          return "var(--vscode-testing-iconPassed)";
        case Po.ERROR:
          return "var(--vscode-editor-foreground)";
        default:
          return "var(--vscode-testing-iconUnset)";
      }
    }), i = vt(() => {
      if (t.status === Po.ERROR) return "Errored";
      if (!t.hasStartedVm) return "Waiting for VM to start...";
      switch (t.status) {
        case Po.CREATING:
          return "Creating environment...";
        case Po.RUNNING:
          return "Running...";
        case Po.FINISHED:
          return "Finished";
        case Po.UNSPECIFIED:
        case Po.EXPIRED:
          return "Session expired";
        default:
          return;
      }
    }), { showLargeHover: r, hideHover: s } = aVe({ delay: t.hoverDelayMs });
    return (() => {
      var o = Cdc();
      return o.addEventListener("mouseleave", () => {
        t.disableHover || s();
      }), o.addEventListener("mouseenter", (a) => {
        if (t.disableHover) return;
        const l = i();
        l && r(a, l, Bu.BELOW);
      }), o.style.setProperty("position", "relative"), Le(o, (() => {
        var a = zr(() => t.status === Po.RUNNING || t.status === Po.CREATING);
        return () => a() ? Ee(_De, { get color() {
          return n();
        }, get spinSpeed() {
          return t.spinSpeed ?? "regular";
        }, get size() {
          return t.size;
        } }) : (() => {
          var l = zr(() => !!(t.status === Po.FINISHED && t.finishedIconName));
          return () => l() ? Ee(XXv, { get name() {
            return t.finishedIconName;
          }, get size() {
            return t.finishedSize ?? t.size;
          }, get style() {
            return { color: n() };
          } }) : (() => {
            var c = Cdc();
            return xn((u) => {
              var d = `${Gn.asClassName(e())} ${t.size ? "" : "!text-[16px]"} bg-codicon-icon ${t.iconClass}`, h = n(), p = t.status === Po.FINISHED && t.finishedSize ? `${t.finishedSize}px` : t.size ? `${t.size}px` : void 0, g = t.status === Po.ERROR ? 0.6 : void 0;
              return d !== u.e && Er(c, u.e = d), h !== u.t && ((u.t = h) != null ? c.style.setProperty("color", h) : c.style.removeProperty("color")), p !== u.a && ((u.a = p) != null ? c.style.setProperty("font-size", p) : c.style.removeProperty("font-size")), g !== u.o && ((u.o = g) != null ? c.style.setProperty("opacity", g) : c.style.removeProperty("opacity")), u;
            }, { e: void 0, t: void 0, a: void 0, o: void 0 }), c;
          })();
        })();
      })(), null), Le(o, () => t.children, null), xn(() => Er(o, `background-composer-status-indicator-wrapper ${t.class ?? ""}`)), o;
    })();
  };
} });
function qcC() {
  const t = [Po.RUNNING, Po.FINISHED, Po.ERROR, Po.CREATING, Po.UNSPECIFIED], e = jp(), [n, i] = Wt(e.get(hBi));
  On(e.sub(hBi, () => i(e.get(hBi))));
  const r = (s) => e.set(hBi, s);
  return Ee(pk, { title: "Status Indicator", style: { display: "flex", padding: "10px", gap: "8px", "flex-wrap": "wrap", "flex-direction": "column", "align-items": "flex-start", overflow: "auto" }, get children() {
    return [(() => {
      var s = ZXv(), o = s.firstChild, a = o.nextSibling, l = a.nextSibling, c = l.firstChild, u = c.firstChild, d = u.nextSibling, h = c.nextSibling, p = h.firstChild, g = p.firstChild, f = g.firstChild, _ = h.nextSibling, b = _.firstChild, y = b.nextSibling;
      return d.addEventListener("change", (S) => r(Po[S.target.value])), Le(d, Ee(Su, { each: t, children: (S) => (() => {
        var k = nZv();
        return k.value = S, Le(k, S), k;
      })() })), Le(p, Ee(S8e, { get status() {
        return n();
      }, hasStartedVm: false }), g), Le(g, n, null), Le(y, Ee(Su, { each: t, children: (S) => (() => {
        var k = iZv(), C = k.firstChild;
        return Le(k, Ee(S8e, { status: S, hasStartedVm: false }), C), Le(C, S), k;
      })() })), xn(() => d.value = n()), s;
    })(), (() => {
      var s = QXv(), o = s.firstChild, a = o.nextSibling, l = a.firstChild, c = l.firstChild, u = c.firstChild, d = l.nextSibling, h = d.firstChild, p = h.firstChild, g = d.nextSibling, f = g.firstChild, _ = f.firstChild, b = g.nextSibling, y = b.firstChild, S = y.firstChild;
      return Le(c, Ee(kMn, { isLoading: true }), u), Le(h, Ee(kMn, { isLoading: false, isDone: true }), p), Le(f, Ee(kMn, { isLoading: false, number: 42 }), _), Le(y, Ee(kMn, { isLoading: false }), S), s;
    })(), (() => {
      var s = eZv(), o = s.firstChild, a = o.nextSibling, l = a.nextSibling, c = l.firstChild, u = c.firstChild, d = c.nextSibling, h = d.firstChild, p = d.nextSibling, g = p.firstChild;
      return Le(c, Ee(S8e, { get status() {
        return Po.RUNNING;
      }, hasStartedVm: true, class: "relative", get children() {
        return RLs();
      } }), u), Le(d, Ee(S8e, { get status() {
        return Po.CREATING;
      }, hasStartedVm: true, class: "relative", get children() {
        var f = JXv();
        return f.style.setProperty("color", "var(--vscode-editorError-foreground)"), f;
      } }), h), Le(p, Ee(S8e, { get status() {
        return Po.FINISHED;
      }, hasStartedVm: true, class: "relative", get children() {
        return RLs();
      } }), g), s;
    })(), (() => {
      var s = tZv(), o = s.firstChild, a = o.nextSibling, l = a.nextSibling, c = l.nextSibling, u = c.firstChild, d = u.nextSibling, h = d.nextSibling;
      return Le(l, Ee(Su, { each: [12, 16, 20, 24, 32, 48], children: (p) => (() => {
        var g = rZv(), f = g.firstChild, _ = f.nextSibling, b = _.firstChild;
        return Le(f, Ee(S8e, { get status() {
          return Po.RUNNING;
        }, hasStartedVm: true, size: p }), null), Le(f, Ee(S8e, { get status() {
          return Po.FINISHED;
        }, hasStartedVm: true, size: p }), null), Le(f, Ee(S8e, { get status() {
          return Po.ERROR;
        }, hasStartedVm: true, size: p }), null), Le(f, Ee(S8e, { get status() {
          return Po.CREATING;
        }, hasStartedVm: true, size: p }), null), Le(_, p, b), g;
      })() })), Le(h, Ee(Su, { each: [16, 24, 32], children: (p) => (() => {
        var g = sZv(), f = g.firstChild, _ = f.firstChild;
        return Le(g, Ee(S8e, { get status() {
          return Po.RUNNING;
        }, hasStartedVm: true, size: p, class: "relative", get children() {
          return RLs();
        } }), f), Le(f, p, _), g;
      })() })), s;
    })()];
  } });
}
var ZXv, QXv, RLs, JXv, eZv, tZv, nZv, iZv, rZv, sZv, hBi, 