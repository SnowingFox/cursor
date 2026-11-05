// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: StatusIndicatorSection.js range:39326343..39329786
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.027Z
zcC = L({ "StatusIndicatorSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), Am(), pi(), pd(), GcC(), dcf(), mk(), ZXv = wt('<div class="flex flex-col gap-4"><h3>Status Indicator Demo</h3><p>A component that displays different icons based on the status value.</p><div class="flex flex-col gap-4"><div class="flex gap-2 items-center"><label>Select status: </label><select class=monaco-select-box></select></div><div class="flex gap-4 items-center"><div class="flex items-center gap-2"><span>Current status: </span></div></div><div class="flex gap-4 mt-4"><h4>All statuses:</h4><div class="flex gap-4">'), QXv = wt('<div class="flex flex-col gap-4 mt-8"><h3>ComposerLoadingDoneOrNumber Demo</h3><div class="flex flex-col gap-4"><div class="flex gap-4 items-center"><div class="flex items-center gap-2"><span>Loading state</span></div></div><div class="flex gap-4 items-center"><div class="flex items-center gap-2"><span>Done state</span></div></div><div class="flex gap-4 items-center"><div class="flex items-center gap-2"><span>Number state</span></div></div><div class="flex gap-4 items-center"><div class="flex items-center gap-2"><span>Default state'), RLs = wt("<div class=bc-tab-unread>"), JXv = wt('<span class="absolute -top-2 -right-2 text-xs font-bold">3'), eZv = wt('<div class="flex flex-col gap-4 mt-8"><h3>Status Indicator with Children (Unread Indicator Example)</h3><p>The status icon can contain children that remain stationary while the icon spins. This is useful for badges, unread indicators, etc.</p><div class="flex gap-6 items-center"><div class="flex items-center gap-4"><span>Running with unread indicator</span></div><div class="flex items-center gap-4"><span>Creating with notification count</span></div><div class="flex items-center gap-4"><span>Finished with success badge</span></div></div><div class="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded"><p class=text-sm><strong>Note:</strong> The children elements (badges, indicators) remain stationary while the status icon spins during RUNNING or CREATING states. This was fixed to prevent the entire component from rotating.'), tZv = wt('<div class="flex flex-col gap-4 mt-8"><h3>Status Indicator Sizes</h3><p>The status indicator supports different sizes via the `size` prop.</p><div class="flex flex-col gap-4"></div><div class=mt-4><h4>Size with Children Elements</h4><p class="text-sm opacity-70 mb-4">The size prop also scales appropriately with child elements like badges.</p><div class="flex gap-6 items-center">'), nZv = wt("<option>"), iZv = wt('<div class="flex items-center gap-2"><span>'), rZv = wt('<div class="flex items-center gap-4"><div class="flex items-center gap-2"></div><span class="text-sm opacity-70">px'), sZv = wt('<div class="flex items-center gap-2"><span class=text-sm>px'), hBi = cs(Po.RUNNING);
} });
function VcC() {
  const t = jp(), [e, n] = Wt(t.get(pBi)), [i, r] = Wt(t.get(mBi));
  On(t.sub(pBi, () => n(t.get(pBi)))), On(t.sub(mBi, () => r(t.get(mBi))));
  const s = (a) => t.set(pBi, a), o = (a) => t.set(mBi, a);
  return Ee(pk, { title: "Switch", get children() {
    var a = oZv(), l = a.firstChild, c = l.firstChild, u = c.firstChild, d = c.nextSibling, h = d.firstChild;
    return Le(c, Ee(jOi, { get value() {
      return e();
    }, onToggle: () => s(!e()) }), null), Le(d, Ee(jOi, { get value() {
      return i();
    }, onToggle: () => o(!i()), size: "small" }), null), a;
  } });
}
var oZv, pBi, mBi, 