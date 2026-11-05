// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PullRequestMergeStatusIndicator.js range:32858263..32862770
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.940Z
rPw = L({ "PullRequestMergeStatusIndicator.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), Am(), pi(), pd(), Iw(), c_(), gs(), ta(), vo(), Jat(), e_(), sAt = wt("<span>"), L8f = wt('<svg class="animate-spin h-3 w-3 text-yellow-400"xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24"><circle class=opacity-25 cx=12 cy=12 r=10 stroke=currentColor stroke-width=4></circle><path class=opacity-75 fill=currentColor d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">'), O8f = wt('<div class="flex items-center gap-1">'), Z9l = cs(false), wws = 5e3, F8f = 6;
} });
function sPw(t) {
  const e = jp();
  e.set(Cws, 0), e.set(Tws, false);
  const n = Ca(e, Cws), i = (d) => e.set(Cws, d), r = Ca(e, Tws), s = (d) => e.set(Tws, d);
  let o;
  Xc(() => {
    if (!o) return;
    const d = new ResizeObserver((h) => {
      for (const p of h) i(p.contentRect.width);
    });
    d.observe(o), On(() => {
      d.disconnect();
    });
  });
  const a = vt(() => t.source === ec.SLACK), l = vt(() => Ozk(t.source)), c = vt(() => t.status === Po.RUNNING || t.status === Po.CREATING), u = vt(() => !!(t.diffStats && (t.diffStats.totalAdded > 0 || t.diffStats.totalRemoved > 0)));
  return (() => {
    var d = B8f(), h = o;
    return typeof h == "function" ? zu(h, d) : o = d, Le(d, Ee(p8f, { get title() {
      return t.title;
    }, get titleVariant() {
      return t.titleVariant;
    }, get titleRightContent() {
      return t.titleRightContent ?? Ee(tPw, { get bcId() {
        return t.bcId;
      }, get foregroundComposerHandle() {
        return t.foregroundComposerHandle;
      }, get isAgentRunning() {
        return c();
      }, get isDiffStatsLoading() {
        return t.isDiffStatsLoading;
      }, get hasChanges() {
        return u();
      }, get hasStartedVm() {
        return t.hasStartedVm ?? false;
      }, get isArchived() {
        return t.isArchived ?? false;
      }, get chatWidth() {
        return n();
      } });
    }, get timestamp() {
      return t.timestamp;
    }, get branchName() {
      return t.branchName;
    }, get baseBranch() {
      return t.baseBranch;
    }, get prUrl() {
      return t.prUrl;
    }, get diffStats() {
      return t.diffStats;
    }, isBackgroundMode: true, get modelRightContent() {
      return zr(() => !!t.modelDetails)() ? Ee(Fus, { get modelDetails() {
        return t.modelDetails;
      }, get baseModelId() {
        return t.baseModelId;
      }, hideMaxBadge: true }) : void 0;
    }, get statusIndicator() {
      return Ee(iPw, { get bcId() {
        return t.bcId;
      }, isCompact: true });
    }, get secondaryInlineRight() {
      return [Ee(Ut, { get when() {
        return a();
      }, get children() {
        return [Ee(Ut, { get when() {
          return t.branchName;
        }, get children() {
          return Q9l();
        } }), Ee(I8f, {})];
      } }), Ee(Ut, { get when() {
        return l();
      }, get children() {
        return [Ee(Ut, { get when() {
          return t.branchName;
        }, get children() {
          return Q9l();
        } }), Ee(A8f, {})];
      } })];
    }, onMouseEnter: () => s(true), onMouseLeave: () => s(false), get hideTitleContainer() {
      return t.hideTitleContainer;
    }, get hideMainRow() {
      return t.hideMainRow;
    }, get titleFallbackContent() {
      return t.titleFallbackContent;
    }, get optionsRight() {
      return (() => {
        var p = U8f();
        return Le(p, Ee(eb, { get codicon() {
          return yt.ellipsisTwo;
        }, iconClass: "!text-[14px]", get onClick() {
          return t.onOpenContextMenu;
        } })), xn((g) => {
          var f = r() ? "1" : "0", _ = r() ? "auto" : "none";
          return f !== g.e && ((g.e = f) != null ? p.style.setProperty("opacity", f) : p.style.removeProperty("opacity")), _ !== g.t && ((g.t = _) != null ? p.style.setProperty("pointer-events", _) : p.style.removeProperty("pointer-events")), g;
        }, { e: void 0, t: void 0 }), p;
      })();
    }, get onCopyBranchName() {
      return t.onCopyBranchName;
    }, get onCopyBaseBranchName() {
      return t.onCopyBaseBranchName;
    }, get actionRow() {
      return zr(() => !!t.devBannerText)() ? (() => {
        var p = j8f();
        return p.style.setProperty("font-size", "11px"), p.style.setProperty("opacity", "0.6"), Le(p, () => t.devBannerText), p;
      })() : void 0;
    } })), d;
  })();
}
var B8f, Q9l, U8f, j8f, Cws, Tws, 