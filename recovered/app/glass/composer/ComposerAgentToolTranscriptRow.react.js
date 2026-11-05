// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerAgentToolTranscriptRow.react.js range:31996464..32000108
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, Pu, Ei, Bme, zIt, jB, _s, ZB, Pl, eCe, nks, X5f, U6l
// wrapper-init: tFf
// hoisted-owner: computerUseActionText.js (app-out-vs-workbench-workbench-glass-main-js:6012); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

tFf = L({ "ComposerAgentToolTranscriptRow.react.js"() {
  "use strict";
  E(), Mt(), Pu(), Ei(), Bme(), zIt(), jB(), _s(), ZB(), Pl(), eCe(), nks(), X5f(), U6l(), H6l = "glass_project_agent_tool_rows", eFf = { kind: "agent", agentId: void 0 };
} });
function bTw(t) {
  switch (t) {
    case Upn.UP:
      return "up";
    case Upn.DOWN:
      return "down";
    case Upn.LEFT:
      return "left";
    case Upn.RIGHT:
      return "right";
    default:
      return "down";
  }
}
function nFf(t, e, n) {
  const i = t.action.case;
  if (!i) return "Unknown action";
  switch (i) {
    case "mouseMove": {
      const r = t.action.value.coordinate, s = e ? "Moved" : n ? "Moving" : "Move";
      return r ? `${s} mouse to (${r.x}, ${r.y})` : `${s} mouse`;
    }
    case "click": {
      const { coordinate: r, button: s, count: o } = t.action.value, a = o === 2 ? "Double-" : o === 3 ? "Triple-" : "", l = s === w4t.RIGHT ? "Right-" : s === w4t.MIDDLE ? "Middle-" : "", c = e ? `${a}${l}Clicked` : n ? `${a}${l}Clicking` : `${a}${l}Click`;
      return r ? `${c} at (${r.x}, ${r.y})` : c;
    }
    case "drag": {
      const { path: r } = t.action.value, s = e ? "Dragged" : n ? "Dragging" : "Drag";
      if (r.length >= 2) {
        const o = r[0], a = r[r.length - 1];
        return `${s} from (${o.x}, ${o.y}) to (${a.x}, ${a.y})`;
      }
      return s;
    }
    case "scroll": {
      const { direction: r } = t.action.value, s = bTw(r);
      return `${e ? "Scrolled" : n ? "Scrolling" : "Scroll"} ${s}`;
    }
    case "type": {
      const r = t.action.value.text, s = r.length > 30 ? r.substring(0, 30) + "..." : r;
      return `${e ? "Typed" : n ? "Typing" : "Type"} "${s}"`;
    }
    case "key":
      return `${e ? "Pressed" : n ? "Pressing" : "Press"} ${t.action.value.key}`;
    case "wait": {
      const { durationMs: r } = t.action.value;
      return `${e ? "Waited" : n ? "Waiting" : "Wait"} ${r}ms`;
    }
    case "screenshot":
      return `${e ? "Captured" : n ? "Capturing" : "Capture"} screenshot`;
    case "cursorPosition":
      return `${e ? "Got" : n ? "Getting" : "Get"} cursor position`;
    case "mouseDown":
      return `${e ? "Pressed" : n ? "Pressing" : "Press"} mouse button down`;
    case "mouseUp":
      return `${e ? "Released" : n ? "Releasing" : "Release"} mouse button`;
    default:
      return "Unknown action";
  }
}
function yTw(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    const n = t[e], i = n?.action?.case;
    if (i) switch (i) {
      case "click": {
        const r = n.action.value.coordinate;
        if (r) return { x: r.x, y: r.y, type: "click" };
        break;
      }
      case "mouseMove": {
        const r = n.action.value.coordinate;
        if (r) return { x: r.x, y: r.y, type: "move" };
        break;
      }
      case "drag": {
        const { path: r } = n.action.value;
        if (r.length > 0) {
          const s = r[r.length - 1];
          return { x: s.x, y: s.y, type: "drag" };
        }
        break;
      }
    }
  }
}
function STw(t, e, n) {
  return t.length === 0 ? n ? "Executing computer action..." : "Computer action" : t.length === 1 ? nFf(t[0], e, n) : `${e ? "Executed" : n ? "Executing" : "Execute"} ${t.length} actions`;
}
function iFf(t) {
  if (t === void 0 || t.length === 0) return;
  const e = t.filter((n) => n.action.case);
  return e.length > 0 ? [...e] : void 0;
}
function kTw(t) {
  if (!t) return [];
  try {
    return [...Zei.fromJsonString(t, { ignoreUnknownFields: true }).actions];
  } catch {
    return [];
  }
}
function wTw(t) {
  return iFf(t.paramsActions) ?? iFf(t.fallbackActions) ?? kTw(t.rawArgs);
}
