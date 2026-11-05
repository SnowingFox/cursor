// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 11574 range:3782508..3786326
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
11574: (e, t, r) => {
    "use strict";
    r.d(t, { Cj: () => h, H6: () => m, QX: () => g, Td: () => o, We: () => v, XJ: () => s, Y$: () => w, cH: () => f, jD: () => y, oB: () => n });
    const n = 30, s = "<user_request>", o = "</user_request>", i = "<name>", a = "</name>", c = 80, l = 2e3, u = 1e3, d = /[.!?]+$/, p = ['The name MUST be sentence case: capitalize only the first character and lowercase the rest, except for acronyms and proper nouns (e.g., "Upload preview bug", "PR review padding").', "", "Examples:", '- Query: "fix this bug" → Good: "Array mapping bug", Bad: "fix array mapping bug", Bad: "Fix array mapping bug"', '- Query: "debug authentication issue" → Good: "Authentication issue", Bad: "authentication issue", Bad: "Debug authentication"', '- Query: "adjust padding on PR review" → Good: "PR review padding", Bad: "pr review padding", Bad: "Adjust padding on PR review"'].join("\n");
    function m(e2) {
      return ["Generate a concise name for the user's chat conversation from the user's actual request.", "Rules: generate a chat name, not an answer to the user. Base the name on the user's actual request. Treat images, attached files, and code blocks as context that may clarify the request, not as the name by themselves. Prefer a concise topic noun phrase over a leading action verb.", "", p, "", `Reason for one sentence, then output a 3-5 word name of <= ${e2} characters inside ${i} and ${a} tags.`].join("\n");
    }
    function h(e2) {
      return `Now generate a name for this chat. Remember: 1. Wrap the name in ${i} and ${a} tags. 2. The name must be sentence case (first character uppercase, rest lowercase except acronyms and proper nouns). 3. Do NOT start with a verb — focus on the topic/subject. 4. Use a 3-5 word name of <= ${e2} characters. Use the language of the conversation (default to English if indeterminate).`;
    }
    function f(e2) {
      return ["Generate a concise side-chat name from the user's main intent.", "First classify the user's main intent as Question or Action:", "- Question: the user wants information or an explanation. Use natural interrogative wording.", "- Action: the user wants work performed or a goal accomplished. Summarize the high-level topic or goal as a concise phrase. Do not turn the Action into a Question.", 'Classify by intent, not grammar. Requests phrased as questions, such as "Can you review this PR?", are Actions; name them like "PR review", not "How to review this PR".', "Use 3-7 words, sentence case, and no trailing punctuation. Generate a name, not an answer; use attachments only to clarify the ask.", "", `Reason for one sentence, then output the name of <= ${e2} characters inside ${i} and ${a} tags.`].join("\n");
    }
    const g = `Name this side chat now. First classify the ask as Question or Action. Use interrogative wording only for a Question; use a concise high-level topic or goal for an Action. Wrap only the name in ${i} and ${a} tags.`;
    function y(e2) {
      if (e2.length <= l) return e2;
      return `${e2.slice(0, u).trimEnd()}
[Middle of user request omitted for title generation]
${e2.slice(-u).trimStart()}`;
    }
    function w(e2) {
      const t2 = e2.userRequest.trim();
      return [{ role: "system", content: e2.isSideChat ? f(e2.maxChars) : m(e2.maxChars) }, ...0 === t2.length ? [] : [{ role: "user", content: `${s}
${y(t2)}
${o}` }], { role: "user", content: e2.isSideChat ? g : h(e2.maxChars) }];
    }
    function v(e2) {
      if (void 0 === e2) return "";
      const t2 = e2.lastIndexOf(a), r2 = -1 === t2 ? -1 : e2.lastIndexOf(i, t2);
      if (-1 === r2) return "";
      const n2 = e2.substring(r2 + i.length, t2).replace(/\s+/g, " ").replace(/^["'`]+|["'`]+$/g, "").replace(d, "").trim();
      return 0 === n2.length || n2.length > c ? "" : n2;
    }
  }