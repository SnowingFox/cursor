// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ReactStore.js range:5949702..5952365
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.952Z
z_n = L({ "ReactStore.js"() {
  E(), sQo(), TW(), Jy(), jv(), vA(), B8t = class extends nRr {
    constructor(t, e = {}, n) {
      super(t), this.context = e, this.selectors = n;
    }
    useSyncedValue(t, e) {
      F8t.useDebugValue(t);
      const n = this;
      su(() => {
        n.state[t] !== e && n.set(t, e);
      }, [n, t, e]);
    }
    useSyncedValueWithCleanup(t, e) {
      const n = this;
      su(() => (n.state[t] !== e && n.set(t, e), () => {
        n.set(t, void 0);
      }), [n, t, e]);
    }
    useSyncedValues(t) {
      const e = this;
      if (process.env.NODE_ENV !== "production") {
        F8t.useDebugValue(t, (s) => Object.keys(s));
        const i = F8t.useRef(Object.keys(t)).current, r = Object.keys(t);
        (i.length !== r.length || i.some((s, o) => s !== r[o])) && console.error("ReactStore.useSyncedValues expects the same prop keys on every render. Keys should be stable.");
      }
      const n = Object.values(t);
      su(() => {
        e.update(t);
      }, [e, ...n]);
    }
    useControlledProp(t, e) {
      F8t.useDebugValue(t);
      const n = this, i = e !== void 0;
      if (su(() => {
        i && !Object.is(n.state[t], e) && n.setState({ ...n.state, [t]: e });
      }, [n, t, e, i]), process.env.NODE_ENV !== "production") {
        const r = this.controlledValues ?? (this.controlledValues = /* @__PURE__ */ new Map());
        r.has(t) || r.set(t, i);
        const s = r.get(t);
        s !== void 0 && s !== i && console.error(`A component is changing the ${i ? "" : "un"}controlled state of ${t.toString()} to be ${i ? "un" : ""}controlled. Elements should not switch from uncontrolled to controlled (or vice versa).`);
      }
    }
    select(t, e, n, i) {
      const r = this.selectors[t];
      return r(this.state, e, n, i);
    }
    useState(t, e, n, i) {
      return F8t.useDebugValue(t), Ic(this, this.selectors[t], e, n, i);
    }
    useContextCallback(t, e) {
      F8t.useDebugValue(t);
      const n = pu(e ?? Ax);
      this.context[t] = n;
    }
    useStateSetter(t) {
      const e = F8t.useRef(void 0);
      return e.current === void 0 && (e.current = (n) => {
        this.set(t, n);
      }), e.current;
    }
    observe(t, e) {
      let n;
      typeof t == "function" ? n = t : n = this.selectors[t];
      let i = n(this.state);
      return e(i, i, this), this.subscribe((r) => {
        const s = n(r);
        if (!Object.is(i, s)) {
          const o = i;
          i = s, e(s, o, this);
        }
      });
    }
  };
} });
function GHe(...t) {
  return () => {
    for (let e = 0; e < t.length; e += 1) {
      const n = t[e];
      n && n();
    }
  };
}
