// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LockedModelPicker.react.js range:29331492..29333850
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-platform 2026-11-05T10:20:42.105Z
// wrapper: LockedModelPickerModule deps:4 [E, Mt, Hle, K2i]
// declarations: LockedModelPickerModule, UPn
// anchors: (none)
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var LockedModelPickerModule = L({
  "LockedModelPicker.react.js"() {
    "use strict";

    E(), Mt(), Hle(), K2i();
  }
});
function UPn(t, e, n, i) {
  const r = s => ({
    action: s,
    pickerSource: e,
    useModelParameters: true
  });
  switch (n.kind) {
    case "modelSelected":
      {
        t.trackEvent("model_picker.interaction", {
          ...r("model_selected"),
          modelId: n.modelId,
          parameters: JSON.stringify(n.parameters)
        }), i !== void 0 && n.previousModelId !== void 0 && t.trackEvent("composer.model_selected", {
          fromModel: n.previousModelId,
          toModel: n.modelId,
          maxMode: i.maxMode,
          chatGenerationUUID: i.chatGenerationUUID
        });
        break;
      }
    case "variantSelected":
      t.trackEvent("model_picker.interaction", {
        ...r("variant_selected"),
        modelId: n.modelId,
        parameterId: n.parameterId,
        value: n.value
      });
      break;
    case "toggleChanged":
      t.trackEvent("model_picker.interaction", {
        ...r("toggle_changed"),
        toggle: n.toggle === "multiModel" ? "multi_model" : n.toggle,
        enabled: n.enabled
      });
      break;
    case "modelOptionsOpened":
      t.trackEvent("model_picker.interaction", {
        ...r("model_edit_clicked"),
        modelId: n.modelId
      });
      break;
    case "modelParametersReset":
      t.trackEvent("model_picker.interaction", {
        ...r("model_reset_clicked"),
        modelId: n.modelId
      });
      break;
    case "viewChanged":
      t.trackEvent("model_picker.interaction", {
        ...r("view_transition"),
        fromView: n.from,
        toView: n.to
      });
      break;
    case "addModelsRequested":
      t.trackEvent("model_picker.interaction", r("add_models_clicked"));
      break;
    case "showAllModelsRequested":
      t.trackEvent("model_picker.interaction", r("show_all_models_clicked"));
      break;
    case "searchStarted":
      t.trackEvent("model_picker.interaction", r("search_started"));
      break;
    case "viewPricingRequested":
      t.trackEvent("model_picker.interaction", r("view_pricing_clicked"));
      break;
    case "maxModeConfirmed":
      t.trackEvent("model_picker.interaction", r("max_mode_confirmed"));
      break;
    case "maxModeConfirmationCancelled":
      t.trackEvent("model_picker.interaction", r("max_mode_confirmation_cancelled"));
      break;
    case "otherModelsExpandedChanged":
      t.trackEvent("model_picker.interaction", {
        ...r("other_models_toggled"),
        expanded: n.expanded
      });
      break;
    default:
      {
        const s = n;
      }
  }
}
