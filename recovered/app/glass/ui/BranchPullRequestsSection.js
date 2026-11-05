// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: BranchPullRequestsSection.js range:38903690..38926540
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.503Z
joC = L({ "BranchPullRequestsSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), Am(), pi(), vo(), FS(), e_(), mk(), Fqv = wt('<div class="text-[var(--vscode-errorForeground)] text-sm mt-1">'), Bqv = wt('<div class="flex flex-col gap-1 overflow-y-auto">'), Uqv = wt('<div class="flex flex-col gap-2 w-full"><div class="flex gap-2 items-center"><input type=text placeholder="Enter branch name"class="flex-1 px-2 py-1 rounded border border-solid border-[var(--vscode-input-border)] bg-[var(--vscode-input-background)] text-[var(--vscode-input-foreground)]">'), jqv = wt('<div class="flex items-center gap-2 p-2 rounded bg-[var(--vscode-editor-background)] text-base"><span class=font-medium>#</span><span class=text-subtle>'), $qv = wt('<a class="ml-auto text-[var(--vscode-textLink-foreground)]"target=_blank rel="noopener noreferrer">View'), dLs = cs(""), hLs = cs(false), pLs = cs(null);
} }), $oC = L({ "BrowserToolsSection.css"() {
} });
function Auc(t) {
  return t < 50 ? "var(--vscode-testing-iconPassed)" : t < 100 ? "var(--vscode-editorWarning-foreground)" : "var(--vscode-testing-iconFailed)";
}
function mLs(t) {
  return `${Math.round(t)}ms`;
}
function HoC(t) {
  return Math.ceil(t.length / 4);
}
function WoC() {
  const t = Gr(), { commandService: e, browserViewStore: n } = t, [i, r] = Wt(void 0), [s, o] = Wt(void 0), [a, l] = Wt(""), [c, u] = Wt("https://example.com"), [d, h] = Wt(""), [p, g] = Wt(""), [f, _] = Wt(false), [b, y] = Wt(void 0), [S, k] = Wt(void 0), [C, T] = Wt(void 0), [I, A] = Wt([]), [P, M] = Wt([]), [O, N] = Wt(false), [U, j] = Wt(false), [$, H] = Wt(false), [G, q] = Wt(10), [K, V] = Wt(10), [Y, J] = Wt(void 0), [Q, te] = Wt(false), ee = vt(() => {
    const Pe = I(), we = {};
    for (const Me of Pe) we[Me.tool] || (we[Me.tool] = []), we[Me.tool].push(Me.latencyMs);
    const Ie = {};
    for (const [Me, De] of Object.entries(we)) Ie[Me] = De.reduce((Ne, be) => Ne + be, 0) / De.length;
    return Ie;
  }), re = vt(() => {
    const Pe = S();
    return Pe ? (Pe.match(/ref: [^\s\n]+/g) || []).map((Ie) => Ie.replace("ref: ", "")) : [];
  });
  async function ie(Pe, we, Ie) {
    const Me = performance.now();
    let De = true;
    try {
      return await Ie();
    } catch (Ne) {
      throw De = false, Ne;
    } finally {
      const Ne = performance.now() - Me;
      A((be) => [{ id: Ai(), tool: Pe, params: we, latencyMs: Ne, success: De, timestamp: Date.now() }, ...be.slice(0, 99)]);
    }
  }
  async function oe() {
    const Pe = s();
    if (Pe) {
      _(true), y(void 0);
      try {
        const we = `browser-tools-gallery-${Ai()}`, Ie = n.createView(we);
        await Ie.createBrowserView(), await Ie.attachToContainer(Pe), Ie.setPaneVisible(true), r(we);
        const Me = `data:text/html,${encodeURIComponent(Ruc)}`;
        await Ie.navigate(Me), l("Test Page (embedded)"), await new Promise((De) => setTimeout(De, 500)), await ce();
      } catch (we) {
        y(we instanceof Error ? we.message : String(we));
      } finally {
        _(false);
      }
    }
  }
  async function se() {
    const Pe = i();
    if (!Pe) return;
    const we = n.getView(Pe);
    if (!we) return;
    _(true), y(void 0);
    const Ie = c();
    try {
      await ie("navigate", Ie, async () => {
        await new Promise((Me) => {
          const De = we.onDidFinishLoad(() => {
            De.dispose(), Me();
          });
          we.navigate(Ie);
        });
      }), l(Ie), await ce();
    } catch (Me) {
      y(Me instanceof Error ? Me.message : String(Me));
    } finally {
      _(false);
    }
  }
  async function le() {
    const Pe = i();
    if (!Pe) return;
    const we = n.getView(Pe);
    if (we) {
      _(true), y(void 0);
      try {
        const Ie = `data:text/html,${encodeURIComponent(Ruc)}`;
        await ie("load-test-page", "", async () => {
          await new Promise((Me) => {
            const De = we.onDidFinishLoad(() => {
              De.dispose(), Me();
            });
            we.navigate(Ie);
          });
        }), l("Test Page (embedded)"), await ce();
      } catch (Ie) {
        y(Ie instanceof Error ? Ie.message : String(Ie));
      } finally {
        _(false);
      }
    }
  }
  async function ce() {
    const Pe = i();
    if (Pe) {
      _(true), y(void 0);
      try {
        const we = await ie("snapshot", "", async () => await e.executeCommand("cursor.browserView.executeJavaScript", `
					(function() {
						function buildPageSnapshot(depth, maxDepth) {
							function getImplicitRole(el) {
								const tag = el.tagName ? el.tagName.toLowerCase() : '';
								switch (tag) {
									case 'a': return el.hasAttribute('href') ? 'link' : 'generic';
									case 'button': return 'button';
									case 'input': {
										const type = (el.getAttribute('type') || 'text').toLowerCase();
										switch (type) {
											case 'button': case 'submit': case 'reset': return 'button';
											case 'checkbox': return 'checkbox';
											case 'radio': return 'radio';
											default: return 'textbox';
										}
									}
									case 'select': return 'combobox';
									case 'textarea': return 'textbox';
									case 'h1': case 'h2': case 'h3': case 'h4': case 'h5': case 'h6': return 'heading';
									default: return 'generic';
								}
							}

							function computeName(el, role) {
								const ariaLabel = el.getAttribute('aria-label');
								if (ariaLabel) return ariaLabel;
								const placeholder = el.getAttribute('placeholder');
								if (placeholder) return placeholder;
								const text = (el.innerText || el.textContent || '').trim().substring(0, 100);
								return text;
							}

							function buildTree(element, depth, maxDepth) {
								if (!element || depth > maxDepth) return null;
								let ref = element.getAttribute('data-cursor-ref');
								if (!ref && element.setAttribute) {
									ref = 'ref-' + Math.random().toString(36).substring(2, 10);
									element.setAttribute('data-cursor-ref', ref);
								}
								const tag = element.tagName ? element.tagName.toLowerCase() : 'generic';
								const role = element.getAttribute('role') || getImplicitRole(element);
								const name = computeName(element, role);
								const node = { ref, role, name, tag, children: [] };
								if (element.children) {
									for (const child of Array.from(element.children)) {
										const childNode = buildTree(child, depth + 1, maxDepth);
										if (childNode) node.children.push(childNode);
									}
								}
								return node;
							}

							return buildTree(document.body, depth || 0, maxDepth || 20);
						}

						const tree = buildPageSnapshot(0, ${G()});
						return {
							success: true,
							pageState: {
								url: window.location.href,
								title: document.title,
								snapshot: tree
							}
						};
					})();
				`, Pe, true));
        if (we && typeof we == "object" && "pageState" in we) {
          const Ie = we.pageState, Me = JSON.stringify(Ie.snapshot, null, 2);
          k(Me);
          const De = Me.split(`
`).length, Ne = Me.length, be = Me.match(/"ref":/g) || [];
          T({ lines: De, chars: Ne, estimatedTokens: HoC(Me), refCount: be.length, generationTimeMs: I()[0]?.latencyMs || 0 });
        }
      } catch (we) {
        y(we instanceof Error ? we.message : String(we));
      } finally {
        _(false);
      }
    }
  }
  async function ae() {
    const Pe = i(), we = d();
    if (!(!Pe || !we)) {
      _(true), y(void 0);
      try {
        await ie("click", we, async () => {
          await e.executeCommand("cursor.browserView.executeJavaScript", `
					(function() {
						const ref = ${JSON.stringify(we)};
						const element = document.querySelector('[data-cursor-ref="' + ref + '"]');
						if (!element) throw new Error('Element not found: ' + ref);
						element.click();
						return { success: true };
					})();
				`, Pe, true);
        }), await ce();
      } catch (Ie) {
        y(Ie instanceof Error ? Ie.message : String(Ie));
      } finally {
        _(false);
      }
    }
  }
  async function de() {
    const Pe = i(), we = d(), Ie = p();
    if (!(!Pe || !we || !Ie)) {
      _(true), y(void 0);
      try {
        await ie("type", `${we}: "${Ie}"`, async () => {
          await e.executeCommand("cursor.browserView.executeJavaScript", `
					(function() {
						const ref = ${JSON.stringify(we)};
						const text = ${JSON.stringify(Ie)};
						const element = document.querySelector('[data-cursor-ref="' + ref + '"]');
						if (!element) throw new Error('Element not found: ' + ref);
						element.focus();
						element.value = text;
						element.dispatchEvent(new Event('input', { bubbles: true }));
						element.dispatchEvent(new Event('change', { bubbles: true }));
						return { success: true };
					})();
				`, Pe, true);
        }), await ce();
      } catch (Me) {
        y(Me instanceof Error ? Me.message : String(Me));
      } finally {
        _(false);
      }
    }
  }
  async function he() {
    const Pe = i(), we = d();
    if (!(!Pe || !we)) {
      _(true), y(void 0);
      try {
        await ie("hover", we, async () => {
          await e.executeCommand("cursor.browserView.executeJavaScript", `
					(function() {
						const ref = ${JSON.stringify(we)};
						const element = document.querySelector('[data-cursor-ref="' + ref + '"]');
						if (!element) throw new Error('Element not found: ' + ref);
						element.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
						element.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
						return { success: true };
					})();
				`, Pe, true);
        });
      } catch (Ie) {
        y(Ie instanceof Error ? Ie.message : String(Ie));
      } finally {
        _(false);
      }
    }
  }
  async function ge() {
    const Pe = i();
    if (Pe) {
      _(true), y(void 0);
      try {
        const we = await ie("screenshot", "", async () => {
          const Ie = await e.executeCommand("cursor.browserView.takeScreenshot", { type: "png", fullPage: false, viewId: Pe });
          if (!Ie?.success) throw new Error(Ie?.error || "Screenshot failed");
          return Ie;
        });
        we?.dataUrl && J(we.dataUrl);
      } catch (we) {
        y(we instanceof Error ? we.message : String(we));
      } finally {
        _(false);
      }
    }
  }
  async function pe(Pe) {
    const we = i();
    if (!we) return;
    _(true), y(void 0);
    const Ie = Pe === "down" ? 300 : -300;
    try {
      await ie("scroll", Pe, async () => {
        await e.executeCommand("cursor.browserView.executeJavaScript", `window.scrollBy(0, ${Ie});`, we, true);
      });
    } catch (Me) {
      y(Me instanceof Error ? Me.message : String(Me));
    } finally {
      _(false);
    }
  }
  async function ve(Pe) {
    const we = i();
    if (we) {
      _(true), y(void 0);
      try {
        await ie("pressKey", Pe, async () => {
          await e.executeCommand("cursor.browserView.executeJavaScript", `
					(function() {
						const key = ${JSON.stringify(Pe)};
						const target = document.activeElement || document.body;
						target.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
						target.dispatchEvent(new KeyboardEvent('keyup', { key, bubbles: true }));
						return { success: true };
					})();
				`, we, true);
        });
      } catch (Ie) {
        y(Ie instanceof Error ? Ie.message : String(Ie));
      } finally {
        _(false);
      }
    }
  }
  async function fe() {
    const Pe = i();
    if (!Pe) return;
    const we = n.getView(Pe);
    if (we) {
      _(true), y(void 0);
      try {
        await ie("goBack", "", async () => {
          await new Promise((Ie) => {
            const Me = we.onDidFinishLoad(() => {
              Me.dispose(), Ie();
            });
            we.goBack();
          });
        }), await ce();
      } catch (Ie) {
        y(Ie instanceof Error ? Ie.message : String(Ie));
      } finally {
        _(false);
      }
    }
  }
  async function Te() {
    const Pe = i();
    if (!Pe) return;
    const we = n.getView(Pe);
    if (we) {
      _(true), y(void 0);
      try {
        await ie("goForward", "", async () => {
          await new Promise((Ie) => {
            const Me = we.onDidFinishLoad(() => {
              Me.dispose(), Ie();
            });
            we.goForward();
          });
        }), await ce();
      } catch (Ie) {
        y(Ie instanceof Error ? Ie.message : String(Ie));
      } finally {
        _(false);
      }
    }
  }
  async function _e() {
    const Pe = i();
    if (!Pe) return;
    const we = n.getView(Pe);
    if (we) {
      _(true), y(void 0);
      try {
        await ie("reload", "", async () => {
          await new Promise((Ie) => {
            const Me = we.onDidFinishLoad(() => {
              Me.dispose(), Ie();
            });
            we.reload();
          });
        }), await ce();
      } catch (Ie) {
        y(Ie instanceof Error ? Ie.message : String(Ie));
      } finally {
        _(false);
      }
    }
  }
  async function Ce() {
    const Pe = i();
    if (!Pe) return;
    N(true), y(void 0);
    const we = K(), Ie = [];
    try {
      const Me = [];
      for (let be = 0; be < we; be++) {
        const je = performance.now();
        await e.executeCommand("cursor.browserView.executeJavaScript", `
					(function() {
						const btn = document.getElementById('submit-btn');
						if (btn) btn.click();
						return { success: true };
					})();
				`, Pe, true), Me.push(performance.now() - je);
      }
      Me.sort((be, je) => be - je), Ie.push({ name: "click", iterations: we, avgLatencyMs: Me.reduce((be, je) => be + je, 0) / we, minLatencyMs: Me[0], maxLatencyMs: Me[we - 1], p95LatencyMs: Me[Math.floor(we * 0.95)] });
      const De = [];
      for (let be = 0; be < we; be++) {
        const je = performance.now();
        await e.executeCommand("cursor.browserView.executeJavaScript", `
					(function() {
						function buildTree(el, depth) {
							if (!el || depth > 10) return null;
							const children = [];
							if (el.children) {
								for (const c of Array.from(el.children)) {
									const cn = buildTree(c, depth + 1);
									if (cn) children.push(cn);
								}
							}
							return { tag: el.tagName, children };
						}
						return buildTree(document.body, 0);
					})();
				`, Pe, true), De.push(performance.now() - je);
      }
      De.sort((be, je) => be - je), Ie.push({ name: "snapshot", iterations: we, avgLatencyMs: De.reduce((be, je) => be + je, 0) / we, minLatencyMs: De[0], maxLatencyMs: De[we - 1], p95LatencyMs: De[Math.floor(we * 0.95)] });
      const Ne = [];
      for (let be = 0; be < we; be++) {
        const je = performance.now();
        await e.executeCommand("cursor.browserView.executeJavaScript", `
					(function() {
						const input = document.getElementById('email');
						if (input) {
							input.value = 'test@example.com';
							input.dispatchEvent(new Event('input', { bubbles: true }));
						}
						return { success: true };
					})();
				`, Pe, true), Ne.push(performance.now() - je);
      }
      Ne.sort((be, je) => be - je), Ie.push({ name: "type", iterations: we, avgLatencyMs: Ne.reduce((be, je) => be + je, 0) / we, minLatencyMs: Ne[0], maxLatencyMs: Ne[we - 1], p95LatencyMs: Ne[Math.floor(we * 0.95)] }), M(Ie);
    } catch (Me) {
      y(Me instanceof Error ? Me.message : String(Me));
    } finally {
      N(false);
    }
  }
  function Se() {
    A([]), M([]);
  }
  return Cn(() => {
    const Pe = s(), we = i();
    Pe && !we && oe();
  }), On(async () => {
    const Pe = i();
    if (Pe) {
      const we = n.getView(Pe);
      we && await we.detachFromContainer(), await n.destroyView(Pe);
    }
  }), Ee(pk, { title: "Browser Tools", get children() {
    var Pe = Qqv(), we = Pe.firstChild, Ie = we.firstChild, Me = Ie.firstChild, De = Me.firstChild, Ne = Me.nextSibling, be = Ie.nextSibling, je = be.firstChild, $e = je.firstChild, Je = $e.nextSibling, Ge = Je.firstChild, xe = Ge.firstChild, Oe = xe.nextSibling, ct = Oe.nextSibling, Ye = Ge.nextSibling, Ve = Ye.firstChild, Xe = Ve.nextSibling, lt = Xe.nextSibling, He = je.nextSibling, gt = He.firstChild, ht = gt.nextSibling, Ae = ht.firstChild, ot = Ae.firstChild, Be = ot.nextSibling, Ue = Be.nextSibling, it = Ae.nextSibling, qe = it.nextSibling, pt = qe.firstChild, dt = pt.nextSibling, ft = He.nextSibling, bt = ft.firstChild, St = bt.nextSibling, Et = St.firstChild, kt = Et.firstChild, xt = kt.nextSibling, Pt = Et.nextSibling, Dt = Pt.firstChild, Vt = Dt.nextSibling, tn = Vt.nextSibling, un = tn.nextSibling, kn = un.nextSibling, oi = we.nextSibling, Fn = oi.firstChild, Qt = Fn.firstChild, Sn = Qt.firstChild, $n = Sn.nextSibling, Mn = Qt.nextSibling, Un = Mn.firstChild, Xn = Fn.nextSibling, Ti = Xn.firstChild, bi = Ti.nextSibling, Qn = Xn.nextSibling, ni = Qn.firstChild, pn = ni.firstChild, yn = pn.nextSibling, Ln = yn.firstChild, xi = Qn.nextSibling, Ci = xi.firstChild, En = Ci.firstChild, Dn = En.nextSibling, Si = Dn.firstChild, Ui = Si.nextSibling;
    return Le(Me, Ee(Ut, { get when() {
      return a();
    }, get children() {
      var Nn = Hqv();
      return Le(Nn, a), Nn;
    } }), null), zu(o, Ne), Le(Ne, Ee(Ut, { get when() {
      return !i();
    }, get children() {
      return Wqv();
    } })), xe.addEventListener("input", (Nn) => u(Nn.currentTarget.value)), Oe.addEventListener("click", se), ct.addEventListener("click", le), Ve.addEventListener("click", fe), Xe.addEventListener("click", Te), lt.addEventListener("click", _e), ot.addEventListener("input", (Nn) => h(Nn.currentTarget.value)), ot.style.setProperty("width", "80px"), Be.addEventListener("click", ae), Ue.addEventListener("click", he), Le(it, Ee(Su, { get each() {
      return re().slice(0, 20);
    }, children: (Nn) => (() => {
      var ci = Jqv();
      return ci.value = Nn, ci;
    })() })), pt.addEventListener("input", (Nn) => g(Nn.currentTarget.value)), dt.addEventListener("click", de), kt.addEventListener("click", ge), xt.addEventListener("click", ce), Dt.addEventListener("click", () => pe("up")), Vt.addEventListener("click", () => pe("down")), tn.addEventListener("click", () => ve("Escape")), un.addEventListener("click", () => ve("Enter")), kn.addEventListener("click", () => ve("Tab")), Le(be, Ee(Ut, { get when() {
      return b();
    }, get children() {
      var Nn = Gqv();
      return Le(Nn, b), Nn;
    } }), null), $n.addEventListener("click", Se), Le(Un, Ee(Su, { get each() {
      return Object.entries(ee());
    }, children: ([Nn, ci]) => (() => {
      var Pi = ezv(), vi = Pi.firstChild, Yi = vi.nextSibling;
      return Le(vi, Nn), Le(Yi, () => mLs(ci)), xn((Bn) => (Bn = Auc(ci)) != null ? Yi.style.setProperty("color", Bn) : Yi.style.removeProperty("color")), Pi;
    })() })), Le(Mn, Ee(Ut, { get when() {
      return I().length > 0;
    }, get children() {
      var Nn = qqv();
      return Le(Nn, Ee(Su, { get each() {
        return I().slice(0, 10);
      }, children: (ci) => (() => {
        var Pi = tzv(), vi = Pi.firstChild, Yi = vi.nextSibling, Bn = Yi.nextSibling;
        return Le(vi, () => ci.tool), Le(Yi, () => mLs(ci.latencyMs)), Le(Bn, () => ci.success ? "OK" : "ERR"), xn((Tn) => {
          var Zn = Auc(ci.latencyMs), tr = `browser-tools-history-status ${ci.success ? "success" : "error"}`;
          return Zn !== Tn.e && ((Tn.e = Zn) != null ? Yi.style.setProperty("color", Zn) : Yi.style.removeProperty("color")), tr !== Tn.t && Er(Bn, Tn.t = tr), Tn;
        }, { e: void 0, t: void 0 }), Pi;
      })() })), Nn;
    } }), null), Le(bi, Ee(Ut, { get when() {
      return Y();
    }, get fallback() {
      return nzv();
    }, get children() {
      var Nn = zqv();
      return xn(() => lo(Nn, "src", Y())), Nn;
    } })), Le(yn, Ee(Ut, { get when() {
      return C();
    }, get children() {
      return [(() => {
        var Nn = Vqv(), ci = Nn.firstChild;
        return Le(Nn, () => C()?.refCount, ci), Nn;
      })(), (() => {
        var Nn = Kqv(), ci = Nn.firstChild;
        return Le(Nn, () => C()?.estimatedTokens, ci), Nn;
      })()];
    } }), Ln), Ln.addEventListener("click", () => te(!Q())), Le(Ln, () => Q() ? "Hide" : "Show"), Le(Qn, Ee(Ut, { get when() {
      return Q();
    }, get children() {
      var Nn = Xqv();
      return Le(Nn, Ee(Ut, { get when() {
        return S();
      }, get fallback() {
        return izv();
      }, get children() {
        var ci = Yqv();
        return Le(ci, S), ci;
      } })), Nn;
    } }), null), Si.addEventListener("input", (Nn) => V(parseInt(Nn.currentTarget.value) || 10)), Si.style.setProperty("width", "50px"), Ui.addEventListener("click", Ce), Le(Ui, () => O() ? "..." : "Run"), Le(xi, Ee(Ut, { get when() {
      return P().length > 0;
    }, get children() {
      var Nn = Zqv(), ci = Nn.firstChild, Pi = ci.firstChild, vi = Pi.nextSibling;
      return Le(vi, Ee(Su, { get each() {
        return P();
      }, children: (Yi) => (() => {
        var Bn = rzv(), Tn = Bn.firstChild, Zn = Tn.nextSibling, tr = Zn.nextSibling;
        return Le(Tn, () => Yi.name), Le(Zn, () => mLs(Yi.avgLatencyMs)), Le(tr, () => mLs(Yi.p95LatencyMs)), xn((hi) => (hi = Auc(Yi.avgLatencyMs)) != null ? Zn.style.setProperty("color", hi) : Zn.style.removeProperty("color")), Bn;
      })() })), Nn;
    } }), null), xn((Nn) => {
      var ci = f() || !i(), Pi = f() || !i(), vi = f() || !i(), Yi = f() || !i(), Bn = f() || !i(), Tn = f() || !i() || !d(), Zn = f() || !i() || !d(), tr = f() || !i() || !d() || !p(), hi = f() || !i(), ui = f() || !i(), Ni = f() || !i(), cr = f() || !i(), fs = f() || !i(), mi = f() || !i(), di = f() || !i(), Mr = O() || !i();
      return ci !== Nn.e && (Oe.disabled = Nn.e = ci), Pi !== Nn.t && (ct.disabled = Nn.t = Pi), vi !== Nn.a && (Ve.disabled = Nn.a = vi), Yi !== Nn.o && (Xe.disabled = Nn.o = Yi), Bn !== Nn.i && (lt.disabled = Nn.i = Bn), Tn !== Nn.n && (Be.disabled = Nn.n = Tn), Zn !== Nn.s && (Ue.disabled = Nn.s = Zn), tr !== Nn.h && (dt.disabled = Nn.h = tr), hi !== Nn.r && (kt.disabled = Nn.r = hi), ui !== Nn.d && (xt.disabled = Nn.d = ui), Ni !== Nn.l && (Dt.disabled = Nn.l = Ni), cr !== Nn.u && (Vt.disabled = Nn.u = cr), fs !== Nn.c && (tn.disabled = Nn.c = fs), mi !== Nn.w && (un.disabled = Nn.w = mi), di !== Nn.m && (kn.disabled = Nn.m = di), Mr !== Nn.f && (Ui.disabled = Nn.f = Mr), Nn;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0, c: void 0, w: void 0, m: void 0, f: void 0 }), xn(() => xe.value = c()), xn(() => ot.value = d()), xn(() => pt.value = p()), xn(() => Si.value = K()), Pe;
  } });
}
var Hqv, Wqv, Gqv, qqv, zqv, Vqv, Kqv, Yqv, Xqv, Zqv, Qqv, Jqv, ezv, tzv, nzv, izv, rzv, Ruc, 