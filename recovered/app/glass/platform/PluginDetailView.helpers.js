// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PluginDetailView.helpers.js range:23105175..23131272
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.148Z
// wrapper: Rtk deps:2 [E, NumberFormat]
// declarations: Dtk, xIn, my, Ntk, Ltk, Otk, Ftk, TL (segment truncated)
// anchors: (none)
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
Rtk = L({ "PluginDetailView.helpers.js"() {
  "use strict";
  E(), RQa = 5, pqm = 18, pts = 82, mqm = 120, gqm = 320, PQa = "Team Plugins cannot be uninstalled", fqm = "This plugin is managed by a VS Code extension", vqm = "Plugin configuration is managed by your team", _qm = new Intl.NumberFormat();
} });
import { jsxs as t3, jsx as ty, Fragment as bqm } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useMemo as MQa, useState as $pe, useRef as DQa, useCallback as IIn, useEffect as mts, createElement as Ptk, Fragment as Mtk } from "./react-runtime/react/esm-index-production.js";
function Dtk() {
  return yqm.scope;
}
function xIn(t) {
  return ri(Sc(Dtk(), xQa()).className, t);
}
function my(t, ...e) {
  const n = Sc(...e);
  return { className: ri(t, n.className, xIn()), style: n.style };
}
function Ntk(t) {
  switch (t) {
    case "MCPs":
      return "mcp";
    case "Subagents":
      return "agents";
    case "Skills":
      return "lightning";
    case "Rules":
      return "clipboard";
    case "Commands":
      return "command";
    case "Hooks":
      return "plug";
    default:
      return "terminal";
  }
}
function Ltk(t, e) {
  return t === "MCPs" ? Atk(e) : e;
}
function Otk(t, e) {
  return t.authStatusByServerName.get(e) ?? "unknown";
}
function Ftk(t) {
  const { plugin: e, isInstalled: n, primaryInstallScope: i, enabledInstallScopes: r, configuredVariables: s, hasTeamConfiguredVariables: o, teamTeammateInstallCount: a, teamName: l, userEmail: c, workspaceName: u, scopeOptions: d, localProjects: h, installedLocalProjectIds: p, mcpChatState: g, glass: f, analyticsLocation: _, openInstallModalRequestId: b, tags: y, disableUninstall: S, disableUninstallHintText: k, installBlockedReason: C, inlineHeaderActions: T, compactLayout: I, portalContainer: A, onInstall: P, onUninstall: M, onUninstallScope: O, confirmUninstall: N, onSaveInstallVariables: U, onAuthenticateAfterSave: j, onInstallToProject: $, onUninstallFromProject: H, onOpenComponentSource: G, onAuthenticateMcpServer: q, onConfigurePluginMcpServer: K, resolveMcpManageServer: V, mcpManageActions: Y, onTryInChat: J, onOpenInChat: Q, onAnalyticsEvent: te, onNotifyError: ee } = t, re = y?.imported === true, ie = y?.local === true, oe = y?.extension === true, se = y?.userSettings === true, le = re || ie || oe || se, ce = MQa(() => YTa(e, (vi) => V?.(vi)?.iconUrl), [e, V]), [ae, de] = $pe(false), [he, ge] = $pe(void 0), [pe, ve] = $pe(false), [fe, Te] = $pe(false), [_e, Ce] = $pe(0), [Se, Pe] = $pe(false), [we, Ie] = $pe(false), [Me, De] = $pe({}), [Ne, be] = $pe(true), [je, $e] = $pe(false), [Je, Ge] = $pe(false), [xe, Oe] = $pe(false), [ct, Ye] = $pe(false), [Ve, Xe] = $pe(void 0), lt = DQa(null), He = DQa(null), gt = DQa(0), ht = IIn((vi, Yi) => {
    const Bn = vi.sourceUrl?.trim();
    Bn && !ivi(Bn) || G(e, vi, Yi);
  }, [G, e]), [Ae, ot] = $pe(e.id);
  Ae !== e.id && (ot(e.id), gt.current += 1, He.current !== null && (window.clearInterval(He.current), He.current = null), Ge(false), Pe(false), ve(false), Te(false), Ce(0), de(false), Xe(void 0)), b !== void 0 && b !== he && (ge(b), de(true));
  const Be = pe || fe, Ue = n || Se, it = MQa(() => Svi(e) !== void 0 && U !== void 0, [e, U]), qe = (h?.length ?? 0) > 0, pt = r ? r.team : i === "team", dt = r ? !!(r.team && !r.user && !r.project) : i === "team", ft = pt && it && (o ?? false), bt = MQa(() => xtk(e), [e]), St = bt.some((vi) => vi.label === "MCPs"), Et = g.showRowAuthCtas && St, kt = dhp(e), xt = Itk(a), Pt = e.publisher?.displayName?.trim(), Dt = e.publisher?.isUserOwned === true ? "person" : "briefcase", Vt = e.publisher?.isVerified === true, tn = e.version?.trim(), un = e.homepageUrl?.trim(), kn = e.manifestRepositoryUrl?.trim(), oi = un && ivi(un) ? un : void 0, Fn = kn && ivi(kn) ? kn : void 0, Qt = T === true, Sn = I === true, $n = IIn(() => {
    He.current !== null && (window.clearInterval(He.current), He.current = null);
  }, []);
  mts(() => () => {
    gt.current += 1, $n();
  }, [$n]), mts(() => {
    n ? Pe(true) : Be || Pe(false);
  }, [n, Be]), mts(() => {
    if (Je) return;
    if (!n) {
      if (Se) return;
      be(false), $e(false);
      return;
    }
    const vi = i === "user", Yi = eTt.get(e.id), Bn = r?.user ?? (i === "project" ? Yi?.user ?? vi : vi), Tn = r?.project ?? (i === "project" ? Yi?.project ?? true : Yi?.project ?? false);
    be(Bn), $e(Tn);
  }, [Je, n, Se, i, r, e.id]), mts(() => {
    if (!ct) return;
    const vi = (Bn) => {
      const Tn = Bn.target;
      lt.current && Tn instanceof Node && !lt.current.contains(Tn) && Ye(false);
    }, Yi = (Bn) => {
      Bn.key === "Escape" && Ye(false);
    };
    return document.addEventListener("mousedown", vi, true), document.addEventListener("keydown", Yi, true), () => {
      document.removeEventListener("mousedown", vi, true), document.removeEventListener("keydown", Yi, true);
    };
  }, [ct]);
  const Mn = IIn(async (vi, Yi, Bn) => {
    if (pe || fe) return;
    const Tn = gt.current + 1;
    gt.current = Tn;
    const Zn = () => gt.current === Tn;
    Te(false), ve(true), Ce(pqm), $n(), He.current = window.setInterval(() => {
      Ce((tr) => {
        if (!Zn() || tr >= pts) return tr;
        const hi = pts - tr, ui = Math.max(0.7, hi * 0.12);
        return Math.min(pts, tr + ui);
      });
    }, mqm);
    try {
      if (await P(vi, Yi, Bn ? { selectedProjectId: Bn } : void 0), !Zn() || ($n(), ve(false), Te(true), Ce(100), await new Promise((hi) => {
        window.setTimeout(hi, gqm);
      }), !Zn())) return;
      Pe(true), Yi === "project" && !Bn ? (be(false), $e(true)) : Yi === "user" && (be(true), $e(false));
    } catch (tr) {
      if (console.error("Failed to install marketplace plugin", tr), !Zn()) return;
      $n(), ve(false), Te(false), Ce(0), ee?.({ operation: "install", pluginDisplayName: vi.displayName, error: tr });
      return;
    }
    Te(false), Ce(0);
  }, [pe, fe, $n, P, ee]), Un = IIn(async (vi) => {
    if (le || xe) return;
    const Yi = Ne, Bn = je, Tn = Se, Zn = vi === "myself" ? Yi : Bn, tr = vi === "myself" ? Bn : Yi, hi = !!r?.team, ui = vi === "myself" ? "user" : "project";
    if (!(Zn && vi === "myself" && N !== void 0 && (Ie(false), !await N(e)))) {
      Ge(true), Oe(true);
      try {
        if (Zn) {
          if (!tr && !hi) {
            be(false), $e(false), Pe(false), await M(e), Ie(false);
            return;
          }
          vi === "myself" ? be(false) : $e(false), O && await O(e, ui);
          const Ni = eTt.get(e.id);
          eTt.set(e.id, { user: vi === "myself" ? false : Ni?.user ?? Yi, project: vi === "project" ? false : Ni?.project ?? Bn });
          return;
        }
        if (vi === "myself") {
          be(true), await P(e, "user"), te?.("marketplace.plugin_scope_added", { pluginName: e.name, scope: "user", location: _ });
          const Ni = eTt.get(e.id);
          eTt.set(e.id, { user: true, project: Ni?.project ?? Bn });
        } else {
          $e(true), await P(e, "project"), te?.("marketplace.plugin_scope_added", { pluginName: e.name, scope: "project", location: _ });
          const Ni = eTt.get(e.id);
          eTt.set(e.id, { user: Ni?.user ?? Yi, project: true });
        }
      } catch (Ni) {
        be(Yi), $e(Bn), Pe(Tn), ee?.({ operation: Zn ? "uninstall" : "install", pluginDisplayName: e.displayName, error: Ni });
      } finally {
        Oe(false);
      }
    }
  }, [le, xe, Ne, je, Se, r, e, M, O, N, P, ee, te, _]), Xn = IIn(async () => {
    if (!(N !== void 0 && !await N(e))) {
      Pe(false);
      try {
        await M(e);
      } catch (vi) {
        ee?.({ operation: "uninstall", pluginDisplayName: e.displayName, error: vi });
      }
    }
  }, [N, M, e, ee]), Ti = (vi) => Me[vi] === true, bi = (vi) => Ti(vi.label) ? vi.items : vi.items.slice(0, RQa), Qn = (vi) => Ti(vi.label) ? 0 : Math.max(0, vi.items.length - RQa), ni = (vi) => {
    De((Yi) => ({ ...Yi, [vi]: true }));
  }, pn = IIn(async (vi) => {
    if (le || xe) return;
    const Yi = p?.has(vi.id) ?? false;
    Oe(true);
    try {
      Yi ? await H?.(e, vi.id) : await $?.(e, vi.id);
    } catch (Bn) {
      ee?.({ operation: Yi ? "uninstall" : "install", pluginDisplayName: e.displayName, error: Bn });
    } finally {
      Oe(false);
    }
  }, [le, xe, p, e, $, H, ee]), yn = () => {
    Be || (te?.("marketplace.plugin_install_leadup", { action: "add_to_cursor_clicked", pluginName: e.name, location: _ }), de(true));
  }, Ln = () => {
    Et ? J(e) : Q(e);
  }, xi = () => {
    Xe("configure"), de(true);
  }, Ci = (vi) => {
    vi.stopPropagation(), ft || Ye((Yi) => !Yi);
  }, En = g.tryInChatBusy || Et && g.detailMcpAuthPending, Dn = Et && g.detailMcpAuthPending ? "Authenticating…" : g.tryInChatBusy ? "Opening…" : "Try in Chat", Si = S === true ? k ?? (oe ? fqm : PQa) : void 0, Ui = { "--ui-plugin-detail-view-add-progress": `${_e}` }, Nn = () => {
    const vi = { 0: { className: "cursor-ui-1cfmmib cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-1qab1bc cursor-ui-1y8v6su cursor-ui-1a02dak cursor-ui-13a6bvl cursor-ui-k884or cursor-ui-1n2onr6 cursor-ui-1vjfegm cursor-ui-ezivpi" }, 4: { className: "cursor-ui-1cfmmib cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-1qab1bc cursor-ui-1y8v6su cursor-ui-1a02dak cursor-ui-13a6bvl cursor-ui-1n2onr6 cursor-ui-1vjfegm cursor-ui-ezivpi cursor-ui-xhr3t" }, 2: { className: "cursor-ui-1cfmmib cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-1y8v6su cursor-ui-1a02dak cursor-ui-13a6bvl cursor-ui-k884or cursor-ui-1n2onr6 cursor-ui-1vjfegm cursor-ui-ezivpi cursor-ui-1lqcxt8" }, 6: { className: "cursor-ui-1cfmmib cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-1y8v6su cursor-ui-1a02dak cursor-ui-13a6bvl cursor-ui-1n2onr6 cursor-ui-1vjfegm cursor-ui-ezivpi cursor-ui-xhr3t cursor-ui-1lqcxt8" }, 1: { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-1y8v6su cursor-ui-1a02dak cursor-ui-k884or cursor-ui-1n2onr6 cursor-ui-1vjfegm cursor-ui-ezivpi cursor-ui-gopf35 cursor-ui-12fk4p8 cursor-ui-98rzlu cursor-ui-euugli cursor-ui-s83m0k cursor-ui-dj266r cursor-ui-1yf7rl7 cursor-ui-at24cr cursor-ui-j3b58b cursor-ui-13a6bvl" }, 5: { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-1y8v6su cursor-ui-1a02dak cursor-ui-1n2onr6 cursor-ui-1vjfegm cursor-ui-ezivpi cursor-ui-xhr3t cursor-ui-gopf35 cursor-ui-12fk4p8 cursor-ui-98rzlu cursor-ui-euugli cursor-ui-s83m0k cursor-ui-dj266r cursor-ui-1yf7rl7 cursor-ui-at24cr cursor-ui-j3b58b cursor-ui-13a6bvl" }, 3: { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-1y8v6su cursor-ui-1a02dak cursor-ui-k884or cursor-ui-1n2onr6 cursor-ui-1vjfegm cursor-ui-ezivpi cursor-ui-gopf35 cursor-ui-12fk4p8 cursor-ui-98rzlu cursor-ui-euugli cursor-ui-s83m0k cursor-ui-dj266r cursor-ui-1yf7rl7 cursor-ui-at24cr cursor-ui-j3b58b cursor-ui-13a6bvl" }, 7: { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-1y8v6su cursor-ui-1a02dak cursor-ui-1n2onr6 cursor-ui-1vjfegm cursor-ui-ezivpi cursor-ui-xhr3t cursor-ui-gopf35 cursor-ui-12fk4p8 cursor-ui-98rzlu cursor-ui-euugli cursor-ui-s83m0k cursor-ui-dj266r cursor-ui-1yf7rl7 cursor-ui-at24cr cursor-ui-j3b58b cursor-ui-13a6bvl" } }[!!f << 2 | !!Sn << 1 | !!Qt << 0], Yi = { 0: { className: "cursor-ui-1n2onr6 cursor-ui-htitgo" }, 1: { className: "cursor-ui-1n2onr6 cursor-ui-htitgo cursor-ui-16ydxro cursor-ui-l010v5" } }[!!f << 0], Bn = { className: "cursor-ui-3nfvp2 cursor-ui-6s0dn4 cursor-ui-1jnr06f" }, Tn = { className: "cursor-ui-78zum5 cursor-ui-1mh7f6w cursor-ui-1us6l5c cursor-ui-1v06k4l" }, Zn = { 0: { className: "cursor-ui-1n2onr6 cursor-ui-c8icb0 cursor-ui-b3r6kr cursor-ui-1cpjm7i cursor-ui-1hmns74 cursor-ui-xx281p cursor-ui-gu12d cursor-ui-12d56wv cursor-ui-6hr8qo cursor-ui-124lp2h cursor-ui-kk1bqk cursor-ui-1j7sxfd cursor-ui-1790gqu cursor-ui-1jsbol1 cursor-ui-2hztxu" }, 1: { className: "cursor-ui-1n2onr6 cursor-ui-c8icb0 cursor-ui-b3r6kr cursor-ui-1cpjm7i cursor-ui-1hmns74 cursor-ui-xx281p cursor-ui-gu12d cursor-ui-12d56wv cursor-ui-6hr8qo cursor-ui-kk1bqk cursor-ui-1j7sxfd cursor-ui-1790gqu cursor-ui-1jsbol1 cursor-ui-2hztxu cursor-ui-t0e3qv cursor-ui-47corl cursor-ui-1v8p93f cursor-ui-he5wa1 cursor-ui-16stqrj cursor-ui-1g4hjc cursor-ui-1obv6hi" } }[!!Be << 0];
    return t3("div", { className: ri("ui-plugin-detail-view__header-actions", f && "ui-plugin-detail-view__header-actions--glass", vi.className, xIn()), style: vi.style, children: [Ue && !Be ? t3(bqm, { children: [ty(An, { variant: "text", frame: "content", disabled: S === true, title: Si, onClick: () => {
      Xn();
    }, children: "Uninstall" }), ty("div", { className: ri("ui-plugin-detail-view__private-button-wrap", Yi.className, xIn()), style: Yi.style, children: ty(Kj, { root: A ?? null, children: t3(hn, { open: we, onOpenChange: Ie, closeOnSelect: false, children: [ty(hn.Trigger, { children: ty(An, { variant: "outline", children: t3("span", { className: ri("ui-plugin-detail-view__private-button-content", Bn.className, xIn()), style: Bn.style, children: [ty("span", { children: dt ? "Team" : (qe ? (p?.size ?? 0) > 0 : je) ? "Project" : "Private" }), ty(zt, { name: "chevron-down", size: "sm", className: ri("ui-plugin-detail-view__private-button-chevron", Tn.className, xIn()), style: Tn.style, "aria-hidden": true })] }) }) }), t3(hn.Content, { placement: "bottom-end", width: 224, "aria-label": "Plugin install scope", children: [ty(hn.CheckboxItem, { description: c ?? "you@anysphere.com", checked: Ne, disabled: le, closeOnSelect: false, onChange: () => void Un("myself"), children: "Add for Myself" }), qe ? (h ?? []).map((tr) => {
      const hi = p?.has(tr.id) ?? false;
      return ty(hn.CheckboxItem, { description: tr.displayName, checked: hi, disabled: le, closeOnSelect: false, onChange: () => void pn(tr), children: "Add to Project" }, tr.id);
    }) : ty(hn.CheckboxItem, { description: u ?? "Current Project", checked: je, disabled: le, closeOnSelect: false, onChange: () => void Un("project"), children: "Add to Project" }), pt ? ty(hn.CheckboxItem, { description: l ?? "Your Team", checked: true, disabled: true, closeOnSelect: false, tooltip: PQa, children: "Add to Team" }) : null] })] }) }) }), g.postInstallResolving ? ty(An, { variant: "primary", disabled: true, children: "Finishing setup…" }) : it ? t3("div", { ...my("ui-plugin-detail-view__configure-button-wrap", TL.configureButtonWrap), ref: lt, children: [t3("div", { ...my("ui-plugin-detail-view__configure-split", TL.configureSplit), children: [ty(An, { variant: "secondary", disabled: ft, title: ft ? vqm : void 0, onClick: xi, ...my("ui-plugin-detail-view__configure-split-main", TL.configureSplitMain), children: "Configure" }), ty(An, { variant: "secondary", "aria-label": "Open configure menu", disabled: ft, onClick: Ci, ...my("ui-plugin-detail-view__configure-split-chevron", TL.configureSplitChevron), children: ty(zt, { name: "chevron-down", size: "sm", "aria-hidden": true }) })] }), ct ? t3("div", { ...my("ui-plugin-detail-view__configure-menu", TL.configureMenu), children: [ty("button", { type: "button", ...my("ui-plugin-detail-view__configure-menu-row", TL.configureMenuRow), onClick: () => {
      Ye(false), xi();
    }, children: "Configure" }), ty("button", { type: "button", ...my("ui-plugin-detail-view__configure-menu-row", TL.configureMenuRow), disabled: En, onClick: () => {
      Ye(false), Ln();
    }, children: Dn })] }) : null] }) : ty(An, { variant: "secondary", disabled: En, onClick: Ln, children: Dn })] }) : null, !Ue || Be ? ty(An, { variant: "primary", className: ri("ui-plugin-detail-view__add-button", Be && "ui-plugin-detail-view__add-button--active", Zn.className, xIn()), style: { ...Ui, ...Zn.style }, disabled: C !== void 0, title: C, onClick: yn, children: Be ? "Installing..." : "Add to Cursor" }) : null, C !== void 0 && !Ue ? ty(nn, { size: "sm", color: "secondary", children: C }) : null] });
  }, ci = (vi) => ty("span", { ...my("ui-plugin-detail-view__component-leading-icon", N_.pluginDetailViewComponentLeadingIcon), children: ty(zt, { name: Ntk(vi), size: 14, title: vi }) }), Pi = U ? async (vi, Yi) => {
    try {
      await U(vi, Yi);
    } catch (Bn) {
      throw ee?.({ operation: "configure", pluginDisplayName: vi.displayName, error: Bn }), Bn;
    }
  } : void 0;
  return t3("main", { ...my(ri("ui-plugin-detail-view__main", Sn && "ui-plugin-detail-view--max-500"), N_.pluginDetailViewMain), children: [t3("div", { ...my(ri("ui-plugin-detail-view__plugin-top", Qt && "ui-plugin-detail-view__plugin-top--inline-header-actions"), N_.pluginDetailViewPluginTop, Qt && TL.pluginTopInlineHeaderActions, Sn && TL.pluginTopCompact, Sn ? TL.pluginTopCompactNoBreadcrumb : Qt ? TL.pluginTopInlineNoBreadcrumb : TL.pluginTopNoBreadcrumb), children: [t3("header", { ...my(ri("ui-plugin-detail-view__plugin-header", Qt && "ui-plugin-detail-view__plugin-header--with-actions"), N_.pluginDetailViewPluginHeader, Qt && TL.pluginHeaderWithActions), children: [t3("div", { ...my("ui-plugin-detail-view__plugin-title-wrap", N_.pluginDetailViewPluginTitleWrap, Qt && TL.pluginTitleWrapWithSibling), children: [ty("div", { ...my("ui-plugin-detail-view__plugin-logo", N_.pluginDetailViewPluginLogo), children: W7(ce, 35) }), ty("div", { ...my("ui-plugin-detail-view__plugin-title-text", N_.pluginDetailViewPluginTitleText), children: t3("div", { ...my("ui-plugin-detail-view__plugin-title-row", N_.pluginDetailViewPluginTitleRow), children: [ty("h1", { ...my("ui-plugin-detail-view__plugin-title", N_.pluginDetailViewPluginTitle), children: e.displayName }), ty(tUr, { labels: [...re ? ["Imported"] : [], ...ie ? ["Local"] : [], ...oe ? ["Extension"] : []], surface: "detail" }), ty(dwn, { capabilities: e.capabilities ?? [] })] }) })] }), Qt ? Nn() : null] }), t3("div", { ...my("ui-plugin-detail-view__description-stack", TL.descriptionStack), children: [typeof e.loadError == "string" && e.loadError.length > 0 && t3("div", { ...my("ui-plugin-detail-view__load-error-banner", TL.loadErrorBanner), children: [ty(zt, { name: "warning", size: "sm", ...my("ui-plugin-detail-view__load-error-banner-icon", TL.loadErrorBannerIcon), "aria-hidden": true }), t3("div", { ...my("ui-plugin-detail-view__load-error-banner-body", TL.loadErrorBannerBody), children: [ty(nn, { size: "sm", weight: "medium", color: "orange", children: "Error loading plugin" }), ty(nn, { size: "sm", weight: "regular", color: "orange-secondary", ...my("ui-plugin-detail-view__load-error-banner-message", TL.loadErrorBannerMessage), children: e.loadError })] })] }), ty("p", { ...my("ui-plugin-detail-view__description", N_.pluginDetailViewDescription, TL.descriptionBody), children: e.description })] }), Pt || Vt || tn || oi || Fn || xt ? t3("div", { ...my("ui-plugin-detail-view__plugin-meta", N_.pluginDetailViewPluginMeta), children: [Pt ? t3("span", { ...my("ui-plugin-detail-view__plugin-meta-item", N_.pluginDetailViewPluginMetaItem), children: [ty(zt, { name: Dt, size: "base", ...my("ui-plugin-detail-view__plugin-meta-icon", N_.pluginDetailViewPluginMetaIcon), "aria-hidden": true }), ty("span", { ...my("ui-plugin-detail-view__plugin-meta-text", N_.pluginDetailViewPluginMetaText), children: Pt })] }) : null, Vt ? t3("span", { ...my("ui-plugin-detail-view__plugin-meta-item", N_.pluginDetailViewPluginMetaItem), children: [ty(zt, { name: "seal-check", size: "base", title: "Verified", ...my("ui-plugin-detail-view__plugin-meta-icon", N_.pluginDetailViewPluginMetaIcon), "aria-hidden": true }), ty("span", { ...my("ui-plugin-detail-view__plugin-meta-text", N_.pluginDetailViewPluginMetaText), children: "Verified by Cursor" })] }) : null, tn ? t3("span", { ...my("ui-plugin-detail-view__plugin-meta-item", N_.pluginDetailViewPluginMetaItem), children: [ty(zt, { name: "versions", size: "base", ...my("ui-plugin-detail-view__plugin-meta-icon", N_.pluginDetailViewPluginMetaIcon), "aria-hidden": true }), ty("span", { ...my("ui-plugin-detail-view__plugin-meta-text", N_.pluginDetailViewPluginMetaText), children: tn })] }) : null, oi ? t3("a", { href: oi, target: "_blank", rel: "noopener noreferrer", title: oi, ...my("ui-plugin-detail-view__plugin-meta-item", N_.pluginDetailViewPluginMetaItem, TL.pluginMetaLink), children: [ty(zt, { name: "globe", size: "base", ...my("ui-plugin-detail-view__plugin-meta-icon", N_.pluginDetailViewPluginMetaIcon), "aria-hidden": true }), ty("span", { ...my("ui-plugin-detail-view__plugin-meta-text", N_.pluginDetailViewPluginMetaText), children: "Website" })] }) : null, Fn ? t3("a", { href: Fn, target: "_blank", rel: "noopener noreferrer", title: Fn, ...my("ui-plugin-detail-view__plugin-meta-item", N_.pluginDetailViewPluginMetaItem, TL.pluginMetaLink), children: [ty(zt, { name: "git-branch", size: "base", ...my("ui-plugin-detail-view__plugin-meta-icon", N_.pluginDetailViewPluginMetaIcon), "aria-hidden": true }), ty("span", { ...my("ui-plugin-detail-view__plugin-meta-text", N_.pluginDetailViewPluginMetaText), children: "Repository" })] }) : null, xt ? t3("span", { ...my("ui-plugin-detail-view__plugin-meta-item", N_.pluginDetailViewPluginMetaItem), "aria-live": "polite", children: [ty(zt, { name: "people", size: "base", ...my("ui-plugin-detail-view__plugin-meta-icon", N_.pluginDetailViewPluginMetaIcon), "aria-hidden": true }), ty("span", { ...my("ui-plugin-detail-view__plugin-meta-text", N_.pluginDetailViewPluginMetaText), children: xt })] }) : null] }) : null, Qt ? null : Nn()] }), ty("section", { ...my("ui-plugin-detail-view__included", TL.included), children: bt.map((vi) => {
    const Yi = bi(vi), Bn = [], Tn = [];
    if (vi.label === "MCPs" && V !== void 0 && Y !== void 0) {
      const hi = /* @__PURE__ */ new Set();
      for (const ui of Yi) {
        const Ni = V(ui.name);
        Ni === void 0 ? Tn.push(ui) : hi.has(Ni.id) || (hi.add(Ni.id), Bn.push(Ni));
      }
    } else Tn.push(...Yi);
    const Zn = /* @__PURE__ */ new Map(), tr = Tn.map((hi) => {
      const ui = Zn.get(hi.name) ?? 0;
      return Zn.set(hi.name, ui + 1), { item: hi, key: `${vi.label}:${hi.name}:${ui}` };
    });
    return Ptk("div", { ...my("ui-plugin-detail-view__group", N_.pluginDetailViewGroup), key: vi.label }, t3("p", { ...my("ui-plugin-detail-view__group-title", N_.pluginDetailViewGroupTitle), children: [ty("span", { children: vi.label }), ty("span", { ...my("ui-plugin-detail-view__group-title-count", N_.pluginDetailViewGroupTitleCount), children: vi.items.length })] }), Bn.length > 0 && Y !== void 0 ? ty(kZ1, { servers: Bn, actions: Y }) : null, Tn.length > 0 ? ty("div", { ...my("ui-plugin-detail-view__group-list", N_.pluginDetailViewGroupList), children: tr.map(({ item: hi, key: ui }) => {
      const Ni = vi.label === "MCPs", cr = Ni && Ue && K !== void 0, fs = !kt, mi = cr || fs, di = Ni ? Otk(g, hi.name) : "unknown", jr = Et && Ni && di !== "unknown", Ur = t3(bqm, { children: [t3("div", { ...my("ui-plugin-detail-view__component-main", N_.pluginDetailViewComponentMain), children: [ci(vi.label), t3("div", { ...my("ui-plugin-detail-view__component-text", N_.pluginDetailViewComponentText), children: [ty("p", { ...my("ui-plugin-detail-view__component-name", N_.pluginDetailViewComponentName), children: Ltk(vi.label, hi.name) }), hi.description ? ty("p", { ...my("ui-plugin-detail-view__component-description", N_.pluginDetailViewComponentDescription), children: hi.description }) : null] })] }), !cr && fs ? ty(zt, { name: "arrow-right-up", size: "sm", ...my("ui-plugin-detail-view__component-row-icon", N_.pluginDetailViewComponentRowIcon, jr && N_.pluginDetailViewComponentRowIconHiddenInCta), title: "Open in Editor", "aria-hidden": true }) : null] });
      return ty(Mtk, { children: t3("div", { ...my(ri("ui-plugin-detail-view__component-row", jr && "ui-plugin-detail-view__component-row--with-cta"), { "cursor-ui--default-marker": "cursor-ui--default-marker", $$css: true }, wtk(), !mi && TL.componentRowStatic), "data-component-row": "", children: [mi ? ty("button", { type: "button", ...my("ui-plugin-detail-view__component-row-clickable", N_.pluginDetailViewComponentRowClickable, jr && N_.pluginDetailViewComponentRowClickableWithCta), onClick: () => {
        if (cr) {
          K(e, hi.name);
          return;
        }
        ht(hi, vi.label);
      }, children: Ur }) : ty("div", { ...my("ui-plugin-detail-view__component-row-inert", N_.pluginDetailViewComponentRowClickable, jr && N_.pluginDetailViewComponentRowClickableWithCta, TL.componentRowInert), children: Ur }), Et && Ni && Ue && di === "needsAuth" ? ty(An, { variant: "primary", ...my("ui-plugin-detail-view__mcp-row-auth-button", N_.pluginDetailViewMcpRowAuthButton), onClick: (Ws) => {
        Ws.stopPropagation(), q(e, hi.name);
      }, children: "Authenticate" }) : null, Et && Ni && Ue && di === "pending" ? ty(An, { variant: "primary", ...my("ui-plugin-detail-view__mcp-row-auth-button", N_.pluginDetailViewMcpRowAuthButton), disabled: true, children: "Authenticating…" }) : null, Et && Ni && Ue && di === "connected" ? t3("span", { ...my("ui-plugin-detail-view__mcp-row-connected", TL.mcpRowConnected), children: [ty(zt, { name: "check", size: "sm", ...my("ui-plugin-detail-view__mcp-row-connected-icon", TL.mcpRowConnectedIcon), "aria-hidden": true }), "Connected"] }) : null] }) }, ui);
    }) }) : null, Qn(vi) > 0 ? t3(An, { variant: "text", onClick: () => ni(vi.label), ...my("ui-plugin-detail-view__group-view-more", TL.groupViewMore), children: ["View ", Qn(vi), " More"] }) : null);
  }) }), ae && Ve !== "configure" ? t3(Vot.Root, { plugin: e, open: true, onOpenChange: (vi) => {
    vi || (de(false), Xe(void 0));
  }, portalContainer: A, children: [ty(Vot.ScopeStep, { confirmAction: async (vi) => {
    await Mn(e, vi.scope, vi.projectId);
  }, scopeOptions: d, workspaceName: u, teamName: l, userEmail: c, localProjects: qe ? h : void 0 }), Pi !== void 0 ? ty(Vot.ConfigureStep, { connectAction: j, initialValues: s, saveAction: (vi) => Pi(e, vi) }) : null] }) : null, ae && Ve === "configure" && Pi !== void 0 ? ty(Stk, { plugin: e, open: true, onOpenChange: (vi) => {
    vi || (de(false), Xe(void 0));
  }, portalContainer: A, saveAction: (vi) => Pi(e, vi), initialValues: s }) : null] });
}
var TL, yqm, eTt,
