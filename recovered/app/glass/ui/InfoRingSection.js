// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: InfoRingSection.js range:39172892..39188221
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.732Z
klC = L({ "InfoRingSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), gs(), ta(), HKv(), mk(), xen = wt("<span>"), WKv = wt('<div class="flex gap-1 items-center cursor-pointer"><span>Hover me</span><span>'), GKv = wt('<button class="px-2 py-1 rounded bg-button-background hover:bg-button-hoverBackground flex gap-1 items-center"><span>Help</span><span>'), qKv = wt('<div class="flex flex-col gap-8"><div class="flex flex-col gap-2"><h3 class="text-sm font-medium">Basic Info Rings</h3><div class="flex gap-4 items-center"></div></div><div class="flex flex-col gap-2"><h3 class="text-sm font-medium">Custom Content Info Rings</h3><div class="flex gap-4 items-center"></div></div><div class="flex flex-col gap-2"><h3 class="text-sm font-medium">Positioned Info Rings</h3><div class="flex gap-4 items-center">');
} }), wlC = L({ "inlineDiffServiceDebug.css"() {
} });
function ClC(t) {
  if (t.composerMetadata?.composerId) return t.composerMetadata.toolCallId ? { label: "Agent Edit", color: "var(--vscode-terminal-ansiBlue)", description: `Composer agent edit (tool call: ${t.composerMetadata.toolCallId.substring(0, 8)}...)` } : { label: "Composer", color: "var(--vscode-terminal-ansiCyan)", description: `Composer edit (composer: ${t.composerMetadata.composerId.substring(0, 8)}...)` };
  if (t.attachedToPromptBar) return { label: "Cmd+K", color: "var(--vscode-terminal-ansiMagenta)", description: "Cmd+K inline edit attached to prompt bar" };
  if (t.source) switch (t.source) {
    case "speculative-full-file":
      return { label: "Speculative", color: "var(--vscode-terminal-ansiYellow)", description: "Speculative full-file edit" };
    case "cmd-k":
    case "cmdk":
      return { label: "Cmd+K", color: "var(--vscode-terminal-ansiMagenta)", description: "Cmd+K inline edit" };
    case "tab":
    case "cursor-tab":
      return { label: "Tab", color: "var(--vscode-terminal-ansiGreen)", description: "Cursor Tab completion" };
    default:
      return { label: t.source, color: "var(--vscode-terminal-ansiCyan)", description: `Source: ${t.source}` };
  }
  return t.toolCallId ? { label: "Tool Call", color: "var(--vscode-terminal-ansiBlue)", description: `Tool call edit (${t.toolCallId.substring(0, 8)}...)` } : t.hideDeletionViewZones && !t.hideDecorations ? { label: "Cmd+K", color: "var(--vscode-terminal-ansiMagenta)", description: "Likely Cmd+K edit (hideDeletionViewZones=true)" } : t.hideDecorations ? { label: "Hidden", color: "var(--vscode-descriptionForeground)", description: "Diff with hidden decorations" } : { label: "Unknown", color: "var(--vscode-descriptionForeground)", description: "Unknown diff source" };
}
function zKv(t) {
  return t.split("/").pop() ?? t;
}
function TlC(t) {
  return `L${t.startLineNumber}-${t.endLineNumberExclusive - 1}`;
}
function ElC(t) {
  return t ? new Date(t).toLocaleString() : "N/A";
}
function pre(t) {
  return (() => {
    var e = KKv(), n = e.firstChild, i = n.firstChild, r = n.nextSibling;
    return Le(n, () => t.label, i), Le(r, () => typeof t.value == "boolean" ? t.value ? "Yes" : "No" : t.value), xn(() => Er(r, `detail-value ${t.mono ? "mono" : ""}`)), e;
  })();
}
function IlC(t) {
  const e = () => t.change.removedLinesOriginalRange.startLineNumber === t.change.removedLinesOriginalRange.endLineNumberExclusive ? "Insert" : t.change.addedRange.startLineNumber === t.change.addedRange.endLineNumberExclusive ? "Delete" : "Modify", n = () => t.newTextLines.slice(t.change.addedRange.startLineNumber - 1, t.change.addedRange.endLineNumberExclusive - 1);
  return (() => {
    var i = ZKv(), r = i.firstChild, s = r.firstChild, o = s.nextSibling, a = r.nextSibling, l = a.firstChild, c = l.firstChild, u = c.nextSibling, d = u.nextSibling, h = l.nextSibling, p = h.firstChild, g = p.nextSibling, f = g.nextSibling;
    return Le(r, () => t.index + 1, o), Le(o, e), Le(l, () => t.change.removedLinesOriginalRange.startLineNumber, u), Le(l, () => t.change.removedLinesOriginalRange.endLineNumberExclusive - 1, null), Le(h, () => t.change.addedRange.startLineNumber, g), Le(h, () => t.change.addedRange.endLineNumberExclusive - 1, null), Le(i, Ee(Ut, { get when() {
      return t.change.removedTextLines.length > 0;
    }, get children() {
      var _ = YKv(), b = _.firstChild, y = b.firstChild, S = y.nextSibling, k = S.nextSibling;
      return Le(b, () => t.change.removedTextLines.length, S), Le(_, Ee(Su, { get each() {
        return t.change.removedTextLines;
      }, children: (C) => (() => {
        var T = QKv(), I = T.firstChild, A = I.nextSibling;
        return Le(A, C || " "), T;
      })() }), null), _;
    } }), null), Le(i, Ee(Ut, { get when() {
      return n().length > 0;
    }, get children() {
      var _ = XKv(), b = _.firstChild, y = b.firstChild, S = y.nextSibling, k = S.nextSibling;
      return Le(b, () => n().length, S), Le(_, Ee(Su, { get each() {
        return n();
      }, children: (C) => (() => {
        var T = JKv(), I = T.firstChild, A = I.nextSibling;
        return Le(A, C || " "), T;
      })() }), null), _;
    } }), null), xn(() => Er(o, `change-type change-type-${e().toLowerCase()}`)), i;
  })();
}
function VKv(t) {
  return (() => {
    var e = eYv(), n = e.firstChild, i = n.firstChild, r = i.firstChild, s = r.nextSibling, o = s.nextSibling, a = n.nextSibling;
    return Le(n, () => t.title, i), Le(i, () => t.lines.length, s), Le(a, Ee(Ut, { get when() {
      return t.lines.length > 0;
    }, get fallback() {
      return tYv();
    }, get children() {
      return Ee(Su, { get each() {
        return t.lines;
      }, children: (l, c) => (() => {
        var u = nYv(), d = u.firstChild, h = d.nextSibling;
        return Le(d, () => c() + 1), Le(h, l || " "), xn(() => Er(u, `code-line ${t.variant === "new" ? "code-line-new" : ""} ${t.variant === "context" ? "code-line-context" : ""}`)), u;
      })() });
    } })), e;
  })();
}
function xlC(t) {
  const e = ClC(t.diff), n = t.diff.activeLine !== void 0;
  return (() => {
    var i = aYv(), r = i.firstChild, s = r.firstChild, o = s.nextSibling, a = o.nextSibling, l = a.nextSibling, c = l.nextSibling, u = c.firstChild, d = r.nextSibling, h = d.nextSibling, p = h.firstChild, g = p.firstChild, f = p.nextSibling, _ = f.firstChild, b = f.nextSibling, y = b.firstChild, S = b.nextSibling, k = S.firstChild, C = h.nextSibling, T = C.firstChild, I = T.firstChild, A = I.nextSibling, P = A.firstChild, M = P.nextSibling, O = M.nextSibling, N = T.nextSibling;
    return Le(s, () => e.label), Le(o, () => zKv(t.diff.uri.toString())), Le(a, () => TlC(t.diff.currentRange)), Er(l, `card-status ${n ? "status-streaming" : "status-complete"}`), Le(l, n ? "⏳ Streaming" : "✓ Complete"), Le(c, () => t.diff.id.substring(0, 8), null), Le(d, () => e.description), Le(p, Ee(pre, { label: "ID", get value() {
      return t.diff.id;
    }, mono: true }), null), Le(p, Ee(pre, { label: "Generation UUID", get value() {
      return t.diff.generationUUID;
    }, mono: true }), null), Le(p, Ee(Ut, { get when() {
      return t.diff.cellId;
    }, get children() {
      return Ee(pre, { label: "Cell ID", get value() {
        return t.diff.cellId;
      }, mono: true });
    } }), null), Le(p, Ee(pre, { label: "Created At", get value() {
      return ElC(t.diff.createdAt);
    } }), null), Le(p, Ee(Ut, { get when() {
      return t.diff.source;
    }, get children() {
      return Ee(pre, { label: "Source", get value() {
        return t.diff.source;
      } });
    } }), null), Le(f, Ee(pre, { label: "Current Range", get value() {
      return `L${t.diff.currentRange.startLineNumber} - L${t.diff.currentRange.endLineNumberExclusive - 1}`;
    } }), null), Le(f, Ee(Ut, { get when() {
      return t.diff.pendingRange;
    }, get children() {
      return Ee(pre, { label: "Pending Range", get value() {
        return `L${t.diff.pendingRange.startLineNumber} - L${t.diff.pendingRange.endLineNumberExclusive - 1}`;
      } });
    } }), null), Le(f, Ee(Ut, { get when() {
      return t.diff.activeLine !== void 0;
    }, get children() {
      return Ee(pre, { label: "Active Line", get value() {
        return t.diff.activeLine;
      } });
    } }), null), Le(b, Ee(pre, { label: "Hide Deletion Zones", get value() {
      return t.diff.hideDeletionViewZones;
    } }), null), Le(b, Ee(pre, { label: "Hide Decorations", get value() {
      return t.diff.hideDecorations ?? false;
    } }), null), Le(b, Ee(pre, { label: "Native Accept/Reject", get value() {
      return t.diff.showNativeAcceptReject;
    } }), null), Le(b, Ee(pre, { label: "Attached to Prompt Bar", get value() {
      return t.diff.attachedToPromptBar ?? false;
    } }), null), Le(b, Ee(pre, { label: "Can Undo Updates", get value() {
      return t.diff.canUndoUpdates;
    } }), null), Le(S, Ee(pre, { label: "onAccept", get value() {
      return t.diff.onAccept ? "Defined" : "Not defined";
    } }), null), Le(S, Ee(pre, { label: "onReject", get value() {
      return t.diff.onReject ? "Defined" : "Not defined";
    } }), null), Le(S, Ee(Ut, { get when() {
      return t.diff.composerMetadata?.composerId;
    }, get children() {
      return Ee(pre, { label: "Composer ID", get value() {
        return t.diff.composerMetadata?.composerId;
      }, mono: true });
    } }), null), Le(S, Ee(Ut, { get when() {
      return t.diff.toolCallId;
    }, get children() {
      return Ee(pre, { label: "Tool Call ID", get value() {
        return t.diff.toolCallId;
      }, mono: true });
    } }), null), Le(i, Ee(Ut, { get when() {
      return t.diff.prompt;
    }, get children() {
      var U = iYv(), j = U.firstChild, $ = j.firstChild, H = $.nextSibling, G = H.firstChild, q = G.nextSibling, K = q.nextSibling, V = j.nextSibling;
      return Le(H, () => t.diff.prompt.length, q), Le(V, () => t.diff.prompt), U;
    } }), C), Le(i, Ee(Ut, { get when() {
      return t.showTextContent;
    }, get children() {
      return [Ee(VKv, { title: "Original Text Lines", get lines() {
        return t.diff.originalTextLines;
      }, variant: "original" }), Ee(VKv, { title: "New Text Lines", get lines() {
        return t.diff.newTextLines;
      }, variant: "new" }), Ee(Ut, { get when() {
        return t.diff.extraContextLinesAbove?.length || t.diff.extraContextLinesBelow?.length;
      }, get children() {
        var U = oYv(), j = U.firstChild;
        return Le(U, Ee(Ut, { get when() {
          return t.diff.extraContextLinesAbove?.length;
        }, get children() {
          var $ = rYv(), H = $.firstChild, G = H.firstChild, q = G.nextSibling, K = q.nextSibling, V = H.nextSibling;
          return Le(H, () => t.diff.extraContextLinesAbove?.length, q), Le(V, Ee(Su, { get each() {
            return t.diff.extraContextLinesAbove;
          }, children: (Y) => (() => {
            var J = Quc(), Q = J.firstChild;
            return Le(Q, Y || " "), J;
          })() })), $;
        } }), null), Le(U, Ee(Ut, { get when() {
          return t.diff.extraContextLinesBelow?.length;
        }, get children() {
          var $ = sYv(), H = $.firstChild, G = H.firstChild, q = G.nextSibling, K = q.nextSibling, V = H.nextSibling;
          return Le(H, () => t.diff.extraContextLinesBelow?.length, q), Le(V, Ee(Su, { get each() {
            return t.diff.extraContextLinesBelow;
          }, children: (Y) => (() => {
            var J = Quc(), Q = J.firstChild;
            return Le(Q, Y || " "), J;
          })() })), $;
        } }), null), U;
      } })];
    } }), C), Le(A, () => t.diff.changes.length, M), Le(N, Ee(Ut, { get when() {
      return t.diff.changes.length > 0;
    }, get fallback() {
      return lYv();
    }, get children() {
      return Ee(Su, { get each() {
        return t.diff.changes;
      }, children: (U, j) => Ee(IlC, { change: U, get index() {
        return j();
      }, get newTextLines() {
        return t.diff.newTextLines;
      } }) });
    } })), xn((U) => {
      var j = e.color, $ = e.color, H = t.diff.uri.toString(), G = t.diff.id;
      return j !== U.e && ((U.e = j) != null ? i.style.setProperty("border-left-color", j) : i.style.removeProperty("border-left-color")), $ !== U.t && ((U.t = $) != null ? s.style.setProperty("background-color", $) : s.style.removeProperty("background-color")), H !== U.a && lo(o, "title", U.a = H), G !== U.o && lo(c, "title", U.o = G), U;
    }, { e: void 0, t: void 0, a: void 0, o: void 0 }), i;
  })();
}
function AlC() {
  const t = Gr(), e = t.inlineDiffService, n = t.editorService, i = jp(), [r, s] = Wt(i.get(o6n));
  On(i.sub(o6n, () => s(i.get(o6n))));
  const [o, a] = Wt(i.get(a6n));
  On(i.sub(a6n, () => a(i.get(a6n))));
  const [l, c] = Wt(i.get(Aen));
  On(i.sub(Aen, () => c(i.get(Aen))));
  const [u, d] = Wt(i.get(rBi));
  On(i.sub(rBi, () => d(i.get(rBi))));
  const [h, p] = Wt(i.get(yLs));
  On(i.sub(yLs, () => p(i.get(yLs))));
  const g = (y) => i.set(a6n, y), f = (y) => i.set(rBi, y), _ = () => {
    const y = e.inlineDiffs.nonReactive();
    i.set(o6n, [...y]);
  }, b = () => {
    const S = n.activeEditor?.resource;
    i.set(Aen, S?.toString() ?? null);
  };
  return Xc(() => {
    _(), b();
    const y = e.inlineDiffs.event(() => {
      _();
    }), S = n.onDidActiveEditorChange(() => {
      b();
    });
    On(() => {
      y.dispose(), S.dispose();
    });
  }), Ee(pk, { title: "Inline Diff Service Debug", style: { display: "flex", "flex-direction": "column", gap: "16px", padding: "16px", height: "100%" }, get children() {
    return [cYv(), (() => {
      var y = dYv(), S = y.firstChild, k = S.firstChild, C = S.nextSibling, T = C.firstChild, I = T.nextSibling, A = C.nextSibling;
      return Le(y, Ee(ol, { onClick: _, variant: "secondary", children: "Refresh" }), S), k.addEventListener("change", (P) => f(P.currentTarget.checked)), T.addEventListener("change", (P) => g(P.currentTarget.checked)), Le(C, Ee(Ut, { get when() {
        return zr(() => !!o())() && l();
      }, get children() {
        var P = uYv(), M = P.firstChild, O = M.nextSibling, N = O.nextSibling;
        return Le(P, () => zKv(l() ?? ""), O), xn(() => lo(P, "title", l() ?? "")), P;
      } }), null), Le(A, Ee(Ut, { get when() {
        return h().length !== r().length;
      }, get fallback() {
        return [zr(() => r().length), " diff", zr(() => r().length !== 1 ? "s" : "")];
      }, get children() {
        return [zr(() => h().length), " / ", zr(() => r().length), " diffs"];
      } })), xn(() => k.checked = u()), xn(() => T.checked = o()), y;
    })(), (() => {
      var y = pYv();
      return Le(y, Ee(Ut, { get when() {
        return h().length > 0;
      }, get fallback() {
        return (() => {
          var S = mYv();
          return Le(S, Ee(Ut, { get when() {
            return r().length > 0;
          }, fallback: "No inline diffs. Generate some diffs using Cmd+K or Composer to see them here.", children: "No diffs match the current filter." })), S;
        })();
      }, get children() {
        var S = hYv();
        return Le(S, Ee(Su, { get each() {
          return h();
        }, children: (k) => Ee(xlC, { diff: k, get showTextContent() {
          return u();
        } }) })), S;
      } })), y;
    })()];
  } });
}
var KKv, YKv, XKv, ZKv, QKv, JKv, eYv, tYv, nYv, iYv, rYv, sYv, oYv, aYv, Quc, lYv, cYv, uYv, dYv, hYv, pYv, mYv, o6n, a6n, Aen, rBi, yLs, 