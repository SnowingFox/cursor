// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ProgressCard.js range:17160449..17169596
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.910Z
mr1 = L({ "ProgressCard.js"() {
  "use strict";
  E(), Va(), dy(), Q3(), Xmp = { kzqmXN: "ui-5lhr3w", $$css: true }, iUr = { title: { kzQI83: "ui-1iyjqo2", k7Eaqz: "ui-euugli", $$css: true }, fill: { kWkggS: "ui-1h27yg5", kaIpWk: "ui-1i4c3av", kZKoxP: "ui-5yr21d", $$css: true }, fillWidth: (t) => [Xmp, { "--x-width": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(`${t}%`) }] };
} });
function vwt({ level: t, code: e, message: n }) {
  return { level: t, code: e, message: n };
}
function cJ(t, e, n) {
  return { state: t, accepted: false, diagnostics: [vwt({ level: "error", code: e, message: n })] };
}
function _wt(t, e = []) {
  return { state: t, accepted: true, diagnostics: e };
}
function KEa(t) {
  return [...new Set(t)];
}
function Zmp(t, e, n, i) {
  const r = ZSt(t).filter((d) => d !== e), s = t.config.view.groupBy, o = [];
  for (const [d, h] of r.entries()) {
    const p = t.cards[h];
    p !== void 0 && sMr(p, s) === n && o.push(d);
  }
  const a = i === void 0 ? o.length : Math.max(0, Math.min(i, o.length)), l = Number.isNaN(a) ? 0 : Math.trunc(a), c = o[o.length - 1], u = l < o.length ? o[l] : c === void 0 ? r.length : c + 1;
  return [...r.slice(0, u), e, ...r.slice(u)];
}
function Qmp(t, e) {
  const n = new Set(t.options?.map((r) => r.id) ?? []);
  return (t.type === "number" ? typeof e == "number" : t.type === "boolean" ? typeof e == "boolean" : t.type === "multiSelect" ? Array.isArray(e) && e.every((r) => n.has(r)) : t.type === "select" ? typeof e == "string" && n.has(e) : typeof e == "string") ? void 0 : vwt({ level: "error", code: "invalid-property-value", message: `Invalid value for ${t.type} property ${t.id}.` });
}
function Jmp(t, e) {
  for (const [n, i] of Object.entries(e)) {
    if (i === null) continue;
    const r = N7t(t, n);
    if (r === void 0) return vwt({ level: "error", code: "missing-property", message: `Unknown property ${n}.` });
    const s = Qmp(r, i);
    if (s !== void 0) return s;
  }
}
function gr1(t, e) {
  const n = new Set(e.options?.map((o) => o.id) ?? []), i = e.id === t.config.view.groupBy && (e.type === "select" ? t.config.view.groupOrder.some((o) => !n.has(o)) : t.config.view.groupOrder.length > 0), r = e.id === t.config.dependency.completionPropertyId && (e.type !== "select" || t.config.dependency.completionOptionIds.some((o) => !n.has(o))), s = e.id === t.config.dependency.completionPropertyId && (e.type !== "select" || (t.config.dependency.ignoredOptionIds ?? []).some((o) => !n.has(o)));
  return i || r || s ? vwt({ level: "error", code: "property-in-use", message: `Cannot update property ${e.id} in a way that invalidates board configuration.` }) : void 0;
}
function fr1(t, e) {
  for (const n of Object.values(t.cards)) {
    const i = n.properties[e.id];
    if (i === void 0) continue;
    const r = Qmp(e, i);
    if (r !== void 0) return r;
  }
}
function vr1(t, e) {
  switch (e.type) {
    case "select":
    case "multiSelect":
      return { id: t.id, name: t.name, type: e.type, options: e.options };
    case "text":
    case "number":
    case "boolean":
      return { id: t.id, name: t.name, type: e.type };
  }
}
function egp(t, e) {
  const n = Jmp(t, e.properties);
  if (n !== void 0) return n;
  const i = t.cards[e.id];
  if (e.blockedBy?.includes(e.id) === true && i?.blockedBy?.includes(e.id) !== true) return vwt({ level: "error", code: "self-dependency", message: `Card ${e.id} cannot be blocked by itself.` });
  const s = { ...t, cards: { ...t.cards, [e.id]: e } }, o = Jna(t).map((l) => new Set(l.taskIds));
  return Jna(s).some((l) => !o.some((c) => l.taskIds.every((u) => c.has(u)))) ? vwt({ level: "error", code: "dependency-cycle", message: `Blocked-by update for ${e.id} would create a cycle.` }) : void 0;
}
function tgp(t, e, n) {
  const i = KEa(n.filter((r) => t.cards[r] === void 0));
  return i.length === 0 ? [] : [vwt({ level: "warning", code: "missing-dependency", message: `Card ${e} is blocked by missing task ids: ${i.join(", ")}.` })];
}
function _r1(t, e) {
  const n = { ...t };
  for (const [i, r] of Object.entries(e)) r === null ? delete n[i] : n[i] = r;
  return n;
}
function br1(t, e, n, i) {
  const r = t.cards[e];
  if (r === void 0) return cJ(t, "missing-card", `Cannot move missing card ${e}.`);
  if (!t.config.view.groupOrder.includes(n)) return cJ(t, "unknown-group-value", `Cannot move card ${e} to unknown group value ${n}.`);
  const s = Jmp(t, { [t.config.view.groupBy]: n });
  return s !== void 0 ? cJ(t, s.code, s.message) : _wt({ ...t, cards: { ...t.cards, [e]: { ...r, properties: { ...r.properties, [t.config.view.groupBy]: n } } }, cardOrder: Zmp(t, e, n, i) });
}
function yr1(t, e) {
  switch (e.type) {
    case "card.create": {
      if (t.cards[e.card.id] !== void 0) return cJ(t, "duplicate-card", `Card ${e.card.id} already exists.`);
      const n = sMr(e.card, t.config.view.groupBy) ?? t.config.view.groupOrder[0];
      if (n === void 0 || !t.config.view.groupOrder.includes(n)) return cJ(t, "unknown-group-value", `Cannot create card in group ${String(n)}.`);
      const i = { ...e.card, blockedBy: e.card.blockedBy === void 0 ? void 0 : KEa(e.card.blockedBy), properties: { ...e.card.properties, [t.config.view.groupBy]: n } }, r = egp(t, i);
      if (r !== void 0) return cJ(t, r.code, r.message);
      const s = { ...t, cards: { ...t.cards, [i.id]: i }, cardOrder: Zmp(t, i.id, n, e.index) };
      return _wt(s, tgp(s, i.id, i.blockedBy ?? []));
    }
    case "card.update": {
      const n = t.cards[e.cardId];
      if (n === void 0) return cJ(t, "missing-card", `Cannot update missing card ${e.cardId}.`);
      const i = e.patch.properties, r = t.config.view.groupBy;
      if (i?.[r] !== void 0 && i[r] !== n.properties[r]) return cJ(t, "group-property-requires-move", `Use card.move to update grouped property ${r}.`);
      const s = e.patch.blockedBy === void 0 ? n.blockedBy : KEa(e.patch.blockedBy), o = { ...n, title: e.patch.title ?? n.title, subtitle: e.patch.subtitle === null ? void 0 : e.patch.subtitle ?? n.subtitle, body: e.patch.body === null ? void 0 : e.patch.body ?? n.body, blockedBy: s, properties: i === void 0 ? n.properties : _r1(n.properties, i) }, a = egp(t, o);
      return a !== void 0 ? cJ(t, a.code, a.message) : _wt({ ...t, cards: { ...t.cards, [n.id]: o } }, e.patch.blockedBy === void 0 ? [] : tgp(t, n.id, s ?? []));
    }
    case "card.delete": {
      if (t.cards[e.cardId] === void 0) return cJ(t, "missing-card", `Cannot delete missing card ${e.cardId}.`);
      const { [e.cardId]: n, ...i } = t.cards;
      return _wt({ ...t, cards: Object.fromEntries(Object.entries(i).map(([r, s]) => [r, { ...s, blockedBy: s.blockedBy?.filter((o) => o !== e.cardId) }])), cardOrder: ZSt(t).filter((r) => r !== e.cardId) });
    }
    case "card.move":
      return br1(t, e.cardId, e.toGroupValue, e.toIndex);
    case "property.create":
      return N7t(t, e.property.id) !== void 0 ? cJ(t, "duplicate-property", `Property ${e.property.id} already exists.`) : _wt({ ...t, config: { ...t.config, propertyDefinitions: [...t.config.propertyDefinitions, e.property] } });
    case "property.update": {
      const n = N7t(t, e.propertyId);
      if (n === void 0) return cJ(t, "missing-property", `Cannot update missing property ${e.propertyId}.`);
      const i = e.patch?.name;
      if (i !== void 0 && typeof i != "string") return cJ(t, "invalid-property-metadata", `Invalid metadata update for property ${n.id}.`);
      const r = i === void 0 ? n : { ...n, name: i };
      return _wt({ ...t, config: { ...t.config, propertyDefinitions: t.config.propertyDefinitions.map((s) => s.id === n.id ? r : s) } });
    }
    case "property.schema.replace": {
      const n = N7t(t, e.propertyId);
      if (n === void 0) return cJ(t, "missing-property", `Cannot update missing property ${e.propertyId}.`);
      const i = vr1(n, e.schema), r = gr1(t, i);
      if (r !== void 0) return cJ(t, r.code, r.message);
      const s = fr1(t, i);
      return s !== void 0 ? cJ(t, s.code, s.message) : _wt({ ...t, config: { ...t.config, propertyDefinitions: t.config.propertyDefinitions.map((o) => o.id === n.id ? i : o) } });
    }
    case "property.delete":
      return N7t(t, e.propertyId) === void 0 ? cJ(t, "missing-property", `Cannot delete missing property ${e.propertyId}.`) : e.propertyId === t.config.view.groupBy || e.propertyId === t.config.view.sortBy || e.propertyId === t.config.view.filter?.propertyId || e.propertyId === t.config.dependency.completionPropertyId ? cJ(t, "property-in-use", `Cannot delete property ${e.propertyId} while board configuration uses it.`) : _wt({ ...t, config: { ...t.config, propertyDefinitions: t.config.propertyDefinitions.filter((n) => n.id !== e.propertyId) }, cards: Object.fromEntries(Object.entries(t.cards).map(([n, i]) => {
        const { [e.propertyId]: r, ...s } = i.properties;
        return [n, { ...i, properties: s }];
      })) });
    default: {
      const n = e.type;
      return { state: t, accepted: false, diagnostics: [vwt({ level: "warning", code: "unknown-action", message: `Ignoring unknown project board action type ${String(n)}.` })] };
    }
  }
}
