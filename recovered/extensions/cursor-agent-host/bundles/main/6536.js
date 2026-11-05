// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 6536 range:461130..462597
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6536: (e, t, r) => {
    "use strict";
    r.d(t, { q: () => s, r: () => o });
    var n = r(8032);
    function s(e2) {
      switch (e2) {
        case 400:
          return n.C.Internal;
        case 401:
          return n.C.Unauthenticated;
        case 403:
          return n.C.PermissionDenied;
        case 404:
          return n.C.Unimplemented;
        case 429:
        case 502:
        case 503:
        case 504:
          return n.C.Unavailable;
        default:
          return n.C.Unknown;
      }
    }
    function o(e2) {
      switch (e2) {
        case n.C.Canceled:
          return 499;
        case n.C.Unknown:
          return 500;
        case n.C.InvalidArgument:
          return 400;
        case n.C.DeadlineExceeded:
          return 504;
        case n.C.NotFound:
          return 404;
        case n.C.AlreadyExists:
          return 409;
        case n.C.PermissionDenied:
          return 403;
        case n.C.ResourceExhausted:
          return 429;
        case n.C.FailedPrecondition:
          return 400;
        case n.C.Aborted:
          return 409;
        case n.C.OutOfRange:
          return 400;
        case n.C.Unimplemented:
          return 501;
        case n.C.Internal:
          return 500;
        case n.C.Unavailable:
          return 503;
        case n.C.DataLoss:
          return 500;
        case n.C.Unauthenticated:
          return 401;
        default:
          return 500;
      }
    }
  }