// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerReactVirtualPlane.react.js range:30825634..30829579
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, RMn, vxl, Mt, R_f, FQk, M_f, fDn, g2l, ubf, zJk, gbf, yiw, KSf, _Dn, XSf, gTt, Hiw, rrw
// wrapper-init: hrw
// hoisted-owner: composerReactGeometrySettle.js (app-out-vs-workbench-workbench-glass-main-js:5568); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

hrw = L({ "ComposerReactVirtualPlane.react.js"() {
  "use strict";
  E(), RMn(), vxl(), Mt(), R_f(), FQk(), M_f(), fDn(), g2l(), ubf(), zJk(), gbf(), yiw(), KSf(), _Dn(), XSf(), gTt(), Hiw(), rrw(), mXt = /* @__PURE__ */ new Set(), k1f = IWk({ zIndex: Y9r, topInset: "var(--composer-messages-top-inset, 0px)" }), w1f = { kind: "outer-observer" }, C1f = { position: "absolute", top: 0, left: 0, right: 0, height: 0, pointerEvents: "none" }, T1f = b1f(function(e) {
    const { clipsToCommittedHeight: n, descriptor: i, heightPx: r, index: s, isActiveSticky: o, model: a, outerRef: l, revealsTurnTimestamp: c, stickyBoundaryHeightPx: u, topPx: d, ...h } = e;
    pXt(() => {
      tKe.planeRowRenders += 1;
    });
    const p = i.content.kind === "fixed-geometry", g = u !== void 0;
    return tce("div", { className: "composer-react-virtual-plane-row virtualized-composer-messages-row", "data-find-bubble-ids": a.identity.bubbleIds.length > 0 ? a.identity.bubbleIds.join(`
`) : void 0, "data-find-row-key": a.rowId, "data-index": s, "data-pair-index": p ? void 0 : i.pairIndex, "data-sticky": o ? "true" : "false", "data-sticky-boundary": g ? "true" : void 0, ref: l, style: { ...$df({ topPx: d, stickyBoundaryHeightPx: u, clip: n ? { heightPx: r, marginPx: K9r } : void 0 }), ...p ? { height: `${r}px` } : void 0, ...c ? { "--turn-actions-timestamp-opacity": "1" } : void 0 }, children: tce("div", { className: "virtualized-composer-messages-row-body", "data-human-row": hbs(i) ? "true" : void 0, "data-host-card": i.content.kind === "host-card" ? "true" : void 0, style: g ? k1f : Evs, children: tce(urw, { descriptor: i, ...h }) }) });
  }), E1f = b1f(function(e) {
    const { source: n, rowKey: i, descriptor: r, measurementRef: s, conversationContext: o, toolApprovalContext: a, openExternalFileProtection: l, turnFeedbackDeps: c, turnFeedbackResolution: u, trackTurnFeedbackImpression: d, responseComparisonByRowId: h, localImages: p, workGroupControl: g, notificationControl: f, activityGroupControl: _, uiContextMenuServices: b, pendingApprovalQueuedBehind: y, renderTranscriptRowOverride: S, streamInEnter: k, onBeforeDisclosureChange: C, onDemandLoad: T } = e, I = aKe(($) => n.subscribeRowContent(i, $), [n, i]), A = aKe(() => n.getRowContent(i), [n, i]), P = y1f(I, A, A);
    ODn(() => {
      const $ = n.trackRow(i);
      return () => {
        $.dispose();
      };
    }, [n, i]), pXt(() => {
      T(i);
    }, [T, i]);
    const M = aKe(() => {
      C(i);
    }, [C, i]), O = aKe(() => {
      k?.markEntered(i);
    }, [k, i]), N = Eye(() => ({ invalidateVisualizationGeometry: () => n.invalidateRowGeometry(i, "async-media-resolved") }), [n, i]), U = Eye(() => s === void 0 ? w1f : { kind: "measurement-ref", measurementRef: s }, [s]);
    if (P === void 0) return null;
    const j = S?.(P, r);
    return j !== void 0 ? tce("div", { ref: s, children: tce(jSn, { onBeforeTranscriptDisclosureChange: M, children: j }) }) : tce(Ciw, { value: N, children: tce(biw, { activityGroupControl: _, conversationContext: o, enter: k?.shouldEnter(i) === true, measurementOwner: U, notificationControl: f, onBeforeDisclosureChange: M, onEntered: k === void 0 ? void 0 : O, pendingApprovalQueuedBehind: y, resolveLocalImage: p?.resolveLocalImage, responseComparison: h?.get(i), row: P, toolApprovalContext: a, openExternalFileProtection: l, trackTurnFeedbackImpression: d, turnFeedbackDeps: c, turnFeedbackResolution: u, uiContextMenuServices: b, watchLocalImage: p?.watchLocalImage, workGroupControl: g }) });
  });
} });
function I1f() {
  let t = -1, e = -1, n = 0, i = 0;
  return { tick: ({ widthPx: r, viewportHeightPx: s, lastCapturedWidthPx: o }) => (i += 1, r !== t || s !== e ? (t = r, e = s, n = 0) : n += 1, n >= x1f ? { kind: "capture", reason: "stable" } : i >= A1f ? { kind: "capture", reason: "deadline" } : i === R1f && r !== o ? { kind: "capture", reason: "interim" } : { kind: "continue" }) };
}
var x1f, A1f, R1f, 