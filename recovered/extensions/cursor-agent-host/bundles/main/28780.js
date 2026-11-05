// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 28780 range:4868285..4868747
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28780: (e, t, r) => {
    "use strict";
    function n(e2) {
      switch (e2.action.case) {
        case "userMessageAction":
        case "subscriptionNotificationAction":
        case "resumeAction":
        case "executePlanAction":
        case "backgroundTaskCompletionAction":
        case "asyncAskQuestionCompletionAction":
          return e2.action.value.requestContext;
        default:
          return;
      }
    }
    r.d(t, { D: () => n });
  }