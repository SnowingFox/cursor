// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PlanRichTextEditor.react.js range:32048277..32056356
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt
// wrapper-init: hEw -> planRichTextEditorModuleInit
// hoisted-owner: usePlanEditorState.js (app-out-vs-workbench-workbench-glass-main-js:6024); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: hEw -> planRichTextEditorModuleInit (apply-map AST equivalent)

var planRichTextEditorModuleInit = L({
  "PlanRichTextEditor.react.js"() {
    "use strict";

    E(), Mt();
  }
});
function pEw(t) {
  const {
      input: e,
      resource: n
    } = t,
    i = Gr(),
    [r, s] = Wt(null),
    [o, a] = Wt(""),
    [l, c] = Wt([]),
    [u, d] = Wt("Untitled Plan"),
    [h, p] = Wt(""),
    [g, f] = Wt(false),
    [_, b] = Wt([]),
    [y, S] = Wt(false),
    [k, C] = Wt(null),
    T = {
      isWriting: false,
      lastWrittenBody: null,
      lastWrittenTodosJson: null
    };
  let I;
  const A = new G6e(),
    P = {
      todoWrite: void 0
    },
    M = vt(() => {
      const Q = r();
      if (Q) try {
        const te = i.composerDataService.getHandleIfLoadedReactive(Q);
        return te && te.data.hasLoaded ? te : void 0;
      } catch {
        return;
      }
    }),
    O = vt(() => {
      const Q = M();
      if (!Q) return false;
      const te = i.composerDataService.getToolFormer(Q);
      if (!te) return false;
      const ee = n.toString(),
        re = Q.data.fullConversationHeadersOnly,
        ie = re.length,
        oe = Q.data.status;
      return ks(() => {
        for (let se = ie - 1; se >= 0; se--) {
          const le = re[se],
            ce = te.getBubbleData(le.bubbleId);
          if (ce?.tool === Ct.CREATE_PLAN) {
            const ae = ce.additionalData?.planUri;
            if (ae && ae === ee) return ce.status === "loading";
          }
        }
        return false;
      });
    }),
    N = Q => Q.map(te => ({
      ...te,
      dependencies: te.dependencies ?? []
    })),
    U = Q => Q.replace(/\r\n/g, `
`).replace(/([^\n])(```)/g, `$1

$2`),
    j = Q => U(Q).replace(/[ \t]+$/gm, ""),
    $ = Q => JSON.stringify(Q.map(te => ({
      id: te.id,
      content: te.content,
      status: te.status
    }))),
    H = async () => {
      const Q = i.modelService.getModel(n);
      return Q && (i.textFileService.files.get(n)?.isDirty() ?? false) ? Q.getValue() : (await i.fileService.readFile(n)).value.toString();
    },
    G = async () => {
      try {
        const te = (await i.fileService.readFile(n)).value.toString(),
          ee = Tze(te);
        if (ee) {
          const ie = ee.frontmatter;
          d(ie.name || "Untitled Plan"), p(ie.overview || ""), f(ie.isProject ?? false);
          const oe = N(ie.todos || []);
          if (c(oe), ie.isProject && ie.phases && ie.phases.length > 0) {
            const se = ie.phases.map(le => ({
              name: le.name,
              todos: N(le.todos || [])
            }));
            b(se);
          } else b([]);
          a(U(ee.body)), S(true);
        } else {
          const ie = FTi(te),
            oe = ie.frontmatter;
          d(oe.name || "Untitled Plan"), p(oe.overview || ""), f(oe.isProject ?? false);
          const se = N(oe.todos || []);
          c(se), b([]), a(U(ie.body)), S(true);
        }
        const re = await i.composerPlanService.getRegistryEntry(n);
        re && s(re.createdBy);
      } catch (Q) {
        console.error("[usePlanEditorState] Error parsing plan:", Q), S(true);
      }
    },
    q = async () => {
      T.isWriting = true;
      try {
        const Q = l(),
          te = g(),
          ee = _(),
          re = {
            todos: Q,
            isProject: te,
            phases: te && ee && ee.length > 0 ? ee.map(ce => ({
              name: ce.name,
              todos: ce.todos
            })) : void 0
          },
          ie = e.getCachedFrontmatter();
        ie && e.setCachedFrontmatter({
          ...ie,
          ...re
        });
        const oe = r();
        let se = await i.planStorageService.getRegistryEntry(n);
        se || (se = await i.planStorageService.registerExistingPlan(n, oe ?? void 0));
        const le = o();
        T.lastWrittenBody = le, T.lastWrittenTodosJson = $(Q), await i.planStorageService.updatePlanMetadataWithBody(n, re, le, oe ?? void 0), e.setFrontmatterDirty(false);
      } catch (Q) {
        console.error("[usePlanEditorState] Error updating todos:", Q), T.lastWrittenBody = null, T.lastWrittenTodosJson = null;
      } finally {
        T.isWriting = false;
      }
    },
    K = async () => {
      if (T.isWriting) return;
      const Q = A.bump("reload");
      try {
        const te = await H();
        if (!Q.isCurrent()) return;
        const ee = Tze(te),
          re = ee ? void 0 : FTi(te),
          ie = ee ? ee.body : re?.body ?? te,
          oe = U(ie),
          se = (ee ? ee.frontmatter : re?.frontmatter) ?? {
            name: "Untitled Plan",
            overview: "",
            todos: []
          },
          le = N(se.todos || []),
          ce = $(le);
        if (T.lastWrittenBody !== null && j(oe) === j(T.lastWrittenBody) && ce === T.lastWrittenTodosJson) return;
        const ae = o(),
          de = l(),
          he = !Zm(le, de, (De, Ne) => De.id === Ne.id && De.content === Ne.content && De.status === Ne.status),
          ge = se.isProject ?? false,
          pe = se.phases ?? [],
          ve = g(),
          fe = _(),
          Te = ge !== ve,
          _e = pe.length !== fe.length || pe.some((De, Ne) => De.name !== fe[Ne]?.name || De.todos?.length !== fe[Ne]?.todos?.length),
          Ce = u(),
          Se = h(),
          Pe = se.name ?? "Untitled Plan",
          we = se.overview ?? "";
        if (oe === ae && !he && !(Pe !== Ce) && !(we !== Se) && !Te && !_e) return;
        if (e.isDirty() && !i.composerPlanService.isPlanBeingStreamed(n)) {
          e.setConflictMode(true), I || (I = i.notificationService.prompt(Yn.Warning, D(5357, null), [{
            label: D(5358, null),
            run: () => {
              I?.close(), I = void 0, e.setConflictMode(false), e.save(0).catch(() => {});
            }
          }, {
            label: D(5359, null),
            run: () => {
              I?.close(), I = void 0, e.setConflictMode(false), e.revert(0).then(() => G()).catch(() => {});
            }
          }], {
            sticky: true,
            onCancel: () => {
              I = void 0;
            }
          }), I.onDidClose(() => {
            I = void 0;
          }));
          return;
        }
        if (he && c(le), !e.isFrontmatterDirty()) {
          const De = e.getCachedFrontmatter();
          De && e.setCachedFrontmatter({
            ...De,
            name: Pe,
            overview: we,
            todos: le,
            isProject: ge,
            phases: ge ? pe : void 0
          });
        }
        if (oe !== ae && (a(oe), e.applyExternalBodyUpdate(oe)), Pe !== u() && d(Pe), we !== h() && p(we), ge !== g() && f(ge), ge) {
          const De = pe.map(Ne => ({
            name: Ne.name,
            todos: N(Ne.todos || [])
          }));
          b(De);
        } else b([]);
      } catch (te) {
        console.error("[usePlanEditorState] Error checking file for reload:", te);
      }
    },
    V = Q => {
      a(Q), e.setContent(Q);
    },
    Y = Q => {
      c(Q), e.setFrontmatterDirty(true), P.todoWrite?.schedule();
    },
    J = (Q, te) => {
      if (!g() || !_()) return;
      const ee = _().slice();
      if (Q >= 0 && Q < ee.length) {
        ee[Q] = {
          ...ee[Q],
          todos: te
        }, b(ee);
        const re = ee.flatMap(ie => ie.todos);
        c(re), e.setFrontmatterDirty(true), P.todoWrite?.schedule();
      }
    };
  return Xc(() => {
    P.todoWrite = new Yu(() => {
      ks(() => {
        q();
      });
    }, 300), G();
    let Q, te;
    const ee = () => {
        const de = i.modelService.getModel(n);
        de && !Q && (Q = de.onDidChangeContent(() => {
          T.isWriting || ks(() => {
            K();
          });
        }));
      },
      re = () => {
        const de = e.getBodyModel();
        de && !te && (te = de.onDidChangeContent(() => {
          T.isWriting || ks(() => {
            const he = de.getValue();
            he !== o() && a(he);
          });
        }));
      },
      ie = () => {
        Q && (Q.dispose(), Q = void 0);
      },
      oe = () => {
        te && (te.dispose(), te = void 0);
      };
    ee(), re();
    const se = i.modelService.onModelAdded(de => {
        de.uri.toString() === n.toString() && ee();
        const he = e.getBodyModel();
        he && de.uri.toString() === he.uri.toString() && re();
      }),
      le = i.modelService.onModelRemoved(de => {
        de.uri.toString() === n.toString() && ie();
        const he = e.getBodyModel();
        he && de.uri.toString() === he.uri.toString() && oe();
      }),
      ce = e.onWillSave(() => {
        T.isWriting = true, P.todoWrite?.isScheduled() && P.todoWrite.flush(), ks(() => {
          T.lastWrittenBody = o(), T.lastWrittenTodosJson = $(l());
        });
      }),
      ae = e.onDidSave(() => {
        T.isWriting = false;
      });
    On(() => {
      ie(), oe(), se.dispose(), le.dispose(), ce.dispose(), ae.dispose();
    });
  }), On(() => {
    P.todoWrite?.isScheduled() && P.todoWrite.flush(), P.todoWrite?.dispose(), A.clear(), I?.close(), I = void 0;
  }), {
    markdownContent: o,
    todos: l,
    planName: u,
    planOverview: h,
    isProject: g,
    phases: _,
    isStreaming: O,
    hasLoadedInitialContent: y,
    composerId: r,
    setMarkdownContent: V,
    setTodos: Y,
    setPhaseTodos: J,
    reload: K,
    setReactEditorRef: C,
    reactEditorRef: k
  };
}
