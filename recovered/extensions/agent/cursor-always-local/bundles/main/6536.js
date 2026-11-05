// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6536 range:3678387..3679887
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6536: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { q: () => s2, r: () => i2 });
    var n2 = r2(8032);
    function s2(t3) {
      switch (t3) {
        case 400:
          return n2.C.Internal;
        case 401:
          return n2.C.Unauthenticated;
        case 403:
          return n2.C.PermissionDenied;
        case 404:
          return n2.C.Unimplemented;
        case 429:
        case 502:
        case 503:
        case 504:
          return n2.C.Unavailable;
        default:
          return n2.C.Unknown;
      }
    }
    function i2(t3) {
      switch (t3) {
        case n2.C.Canceled:
          return 499;
        case n2.C.Unknown:
          return 500;
        case n2.C.InvalidArgument:
          return 400;
        case n2.C.DeadlineExceeded:
          return 504;
        case n2.C.NotFound:
          return 404;
        case n2.C.AlreadyExists:
          return 409;
        case n2.C.PermissionDenied:
          return 403;
        case n2.C.ResourceExhausted:
          return 429;
        case n2.C.FailedPrecondition:
          return 400;
        case n2.C.Aborted:
          return 409;
        case n2.C.OutOfRange:
          return 400;
        case n2.C.Unimplemented:
          return 501;
        case n2.C.Internal:
          return 500;
        case n2.C.Unavailable:
          return 503;
        case n2.C.DataLoss:
          return 500;
        case n2.C.Unauthenticated:
          return 401;
        default:
          return 500;
      }
    }
  }