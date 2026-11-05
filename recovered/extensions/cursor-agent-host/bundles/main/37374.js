// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 37374 range:7326051..7333573
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
37374: (e, t, r) => {
    "use strict";
    r.d(t, { UD: () => u });
    var n = r(55461), s = r(80686);
    const o = "CURSOR_TREE_SITTER_STUBBED";
    let i;
    function a() {
      if (void 0 !== i) return i;
      try {
        const e2 = new n();
        e2.setLanguage(s), i = e2;
      } catch (e2) {
        if (!(function(e3) {
          return "object" == typeof e3 && null !== e3 && e3.code === o;
        })(e2)) throw e2;
        i = null, console.warn("shell-parser: tree-sitter natives are unavailable in this artifact; shell command analysis degrades to parsingFailed");
      }
      return i;
    }
    const c = /* @__PURE__ */ new Set(["file_redirect", "heredoc_redirect", "herestring_redirect", "heredoc", "here_string", "redirect", "redirection"]), l = /* @__PURE__ */ new Set(["<", ">", ">>", ">|", "<>", "<&", ">&", "&>", "&>>"]);
    function u(e2) {
      const t2 = a();
      if (null === t2) return { legacy: { simpleCommands: [], hasInputRedirect: false, hasOutputRedirect: false }, structured: { parsingFailed: true, executableCommands: [], hasRedirects: false, hasCommandSubstitution: false, redirects: [] } };
      const r2 = t2.parse(e2), n2 = /* @__PURE__ */ new WeakSet();
      let s2 = false, o2 = true;
      const i2 = { simpleCommands: [], hasInputRedirect: false, hasOutputRedirect: false }, u2 = { parsingFailed: false, executableCommands: [], hasRedirects: false, hasCommandSubstitution: false, redirects: [] }, d = (e3) => {
        s2 = true, u2.hasRedirects = true, o2 = o2 && e3;
      }, p = (e3) => {
        if (e3 && /^\d+$/.test(e3.text)) return Number.parseInt(e3.text, 10);
      }, m = () => ({ fdTargets: /* @__PURE__ */ new Map([[0, "original-stdin"], [1, "original-stdout"], [2, "original-stderr"]]) }), h = (e3, t3) => {
        if ("&>" === t3 || "&>>" === t3) return [1, 2];
        const r3 = ((e4) => p(e4.children.find((e5) => "file_descriptor" === e5.type)))(e3);
        return void 0 !== r3 ? [r3] : t3.startsWith("<") ? [0] : [1];
      }, f = (e3) => {
        var t3;
        t3 = e3.text, /(^|\s)[0-9]*<<?<?/.test(t3) && (i2.hasInputRedirect = true), (/(^|\s)[0-9]*>>/.test(t3) || /(^|\s)[0-9]*>(\||&)?/.test(t3) || /(^|\s)&>/.test(t3) || /(^|\s)[0-9]+>&[0-9]+/.test(t3)) && (i2.hasOutputRedirect = true), "heredoc_redirect" !== e3.type && "herestring_redirect" !== e3.type || (i2.hasInputRedirect = true);
      }, g = (e3, t3) => {
        const r3 = ((e4) => {
          const t4 = e4.children, r4 = t4.findIndex((e5) => l.has(e5.type));
          if (-1 !== r4) return { operator: t4[r4]?.type ?? "", target: t4.slice(r4 + 1).find((e5) => "comment" !== e5.type) };
        })(e3);
        if (!r3) return false;
        const { operator: n3, target: s3 } = r3, o3 = h(e3, n3), i3 = ((e4) => {
          if (e4) {
            if ("word" === e4.type) return 0 === e4.namedChildren.length ? e4.text : void 0;
            if ("number" === e4.type) return e4.text;
            if ("raw_string" === e4.type) {
              if (e4.text.length < 2) return;
              return e4.text.slice(1, -1);
            }
            if ("string" === e4.type) {
              const t4 = e4.namedChildren;
              if (0 === t4.length || t4.some((e5) => "string_content" !== e5.type)) return;
              return t4.map((e5) => e5.text).join("");
            }
          }
        })(s3), a2 = { operator: n3, destinationFds: o3, targetNodeType: s3?.type ?? "" };
        if (void 0 !== i3 && (a2.targetText = i3), u2.redirects.push(a2), ">&" === n3) {
          const e4 = p(s3), r4 = void 0 === e4 ? void 0 : t3.fdTargets.get(e4);
          if (!/* @__PURE__ */ ((e5) => "original-stdout" === e5 || "original-stderr" === e5 || "dev-null" === e5)(r4)) {
            for (const e5 of o3) t3.fdTargets.set(e5, "unsafe");
            return false;
          }
          for (const e5 of o3) t3.fdTargets.set(e5, r4);
          return true;
        }
        if ("<&" === n3) {
          const e4 = p(s3), r4 = void 0 === e4 ? void 0 : t3.fdTargets.get(e4);
          if ("dev-null" !== r4) {
            for (const e5 of o3) t3.fdTargets.set(e5, "unsafe");
            return false;
          }
          for (const e5 of o3) t3.fdTargets.set(e5, r4);
          return true;
        }
        if (!((e4) => {
          if (!e4) return false;
          if ("word" === e4.type) return "/dev/null" === e4.text;
          if ("raw_string" === e4.type) return "'/dev/null'" === e4.text;
          if ("string" === e4.type) {
            const t4 = e4.namedChildren;
            return 1 === t4.length && "string_content" === t4[0]?.type && "/dev/null" === t4[0].text;
          }
          return false;
        })(s3)) {
          for (const e4 of o3) t3.fdTargets.set(e4, "unsafe");
          return false;
        }
        for (const e4 of o3) t3.fdTargets.set(e4, "dev-null");
        return true;
      }, y = (e3, t3) => {
        if (!n2.has(e3)) {
          if (n2.add(e3), f(e3), "heredoc_redirect" === e3.type) {
            const { redirect: t4, isAllowlistSafe: r3 } = ((e4) => {
              const t5 = ((e5) => {
                const t6 = e5.parent;
                if ("redirected_statement" !== t6?.type) return;
                const r5 = t6.children.find((e6) => "command" === e6.type), n4 = r5?.childForFieldName("name");
                return n4?.text;
              })(e4), r4 = void 0 !== t5 && !((e5) => {
                let t6 = e5.parent;
                for (; t6; ) {
                  if ("command_substitution" === t6.type && "string" !== t6.parent?.type) return true;
                  t6 = t6.parent;
                }
                return false;
              })(e4), n3 = { operator: r4 ? "<<" : "", destinationFds: r4 ? [0] : [], targetNodeType: e4.type };
              return r4 && (n3.targetText = t5), { redirect: n3, isAllowlistSafe: r4 };
            })(e3);
            return u2.redirects.push(t4), void d(r3);
          }
          if ("file_redirect" !== e3.type) return u2.redirects.push({ operator: "", destinationFds: [], targetNodeType: e3.type }), void d(false);
          d(g(e3, t3));
        }
      };
      return (function e3(t3) {
        const r3 = t3.type;
        if (((e4) => {
          const t4 = m();
          for (const r4 of e4.children) c.has(r4.type) && y(r4, t4);
        })(t3), c.has(r3) && !n2.has(t3) && y(t3, m()), "command" === r3) {
          const e4 = t3.childForFieldName("name");
          if (null === e4) u2.parsingFailed = true;
          else {
            i2.simpleCommands.push(e4.text);
            let r4 = e4.text;
            const n3 = [];
            for (const e5 of t3.childrenForFieldName("argument")) n3.push({ type: e5.type, value: e5.text }), r4 += ` ${e5.text}`;
            u2.executableCommands.push({ name: e4.text, args: n3, fullText: r4 });
          }
        }
        if ("command_name" === r3 || "simple_command" === r3) if ("command_name" !== r3 || i2.simpleCommands.includes(t3.text)) {
          if ("simple_command" === r3) {
            const e4 = t3.firstNamedChild;
            e4 && "command_name" === e4.type ? i2.simpleCommands.includes(e4.text) || i2.simpleCommands.push(e4.text) : i2.simpleCommands.push(t3.text);
          }
        } else i2.simpleCommands.push(t3.text);
        "command_substitution" !== r3 && "process_substitution" !== r3 || (u2.hasCommandSubstitution = true);
        for (const r4 of t3.children) e3(r4);
      })(r2.rootNode), s2 && (u2.allRedirectsAreDevNull = o2), { legacy: i2, structured: u2 };
    }
  }