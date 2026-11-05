// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MultiImageViewer.js range:29128025..29129170
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.824Z
S5k = L({ "MultiImageViewer.js"() {
  "use strict";
  E(), at(), aS(), vo(), IZg(), xZg = Ok(EZg), AZg = (t) => {
    const e = Gr(), n = { adminSettingsService: e.adminSettingsService, aiService: e.aiService, clipboardService: e.clipboardService, cursorAuthenticationService: e.cursorAuthenticationService, cursorCredsService: e.cursorCredsService, fileDialogService: e.fileDialogService, fileService: e.fileService, notificationService: e.notificationService, storageService: e.storageService };
    return Ee(xZg, { get bcId() {
      return t.bcId;
    }, get enableDrawing() {
      return t.enableDrawing;
    }, get images() {
      return t.images;
    }, get initialIndex() {
      return t.initialIndex;
    }, get isOpen() {
      return t.isOpen;
    }, get onClose() {
      return t.onClose;
    }, get onSaveDrawing() {
      return t.onSaveDrawing;
    }, get portalRoot() {
      return e.portalElement;
    }, services: n });
  };
} });
function RZg(t, e) {
  const n = rt.file(t.path);
  return { src: `${em.uriToBrowserUri(n).toString()}?t=${t.loadedAt}`, alt: `Attached image ${e + 1}`, path: t.path };
}
var PZg, MZg, DZg, 