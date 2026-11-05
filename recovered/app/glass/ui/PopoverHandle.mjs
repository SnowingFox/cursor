// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PopoverHandle.mjs range:31350496..31351417
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.867Z
gfw = L({ "PopoverHandle.mjs"() {
  E(), vKe(), xBe(), rce(), sPf(), VOl = class {
    constructor() {
      this.store = new SOl();
    }
    open(t) {
      const e = t ? this.store.context.triggerElements.getById(t) ?? void 0 : void 0;
      if (t && !e) throw new Error(process.env.NODE_ENV !== "production" ? `Base UI: PopoverHandle.open: No trigger found with id "${t}".` : fKe(80, t));
      this.store.setOpen(true, NG(BA.imperativeAction, void 0, e));
    }
    close() {
      this.store.setOpen(false, NG(BA.imperativeAction, void 0, void 0));
    }
    get isOpen() {
      return this.store.select("open");
    }
  };
} }), A3i = {};
Sa(A3i, { Arrow: () => UOl, Backdrop: () => jOl, Close: () => WOl, Description: () => HOl, Handle: () => VOl, Popup: () => BOl, Portal: () => xOl, Positioner: () => OOl, Root: () => $mw, Title: () => $Ol, Trigger: () => IOl, Viewport: () => zOl, createHandle: () => mfw });
