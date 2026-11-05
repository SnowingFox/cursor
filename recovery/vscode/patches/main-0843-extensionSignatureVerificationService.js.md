# Patch evidence: extensionSignatureVerificationService.js

- module: app-out-main-js:0843
- bundle: app/out/main.js range 2503426..2506690
- upstream: src/vs/platform/extensionManagement/node/extensionSignatureVerificationService.ts sha256:c43e2cafa4ae1073e27e6d1754b77c691f1a527584e65f5b1912a057a9110475
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.667; shared rare anchors: 9
- bundle-only anchors: 13; upstream anchors absent from bundle: 20

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| node-ovsx-sign | 2504433..2504447 | yes | ngPromise; } async resolveSignModule() { return import("node-ovsx-sign"); } mapErrorCode(e) { if (!e) return ks.UnknownError; |
| PackageIsInvalidZip | 2504550..2504569 | no (exists elsewhere upstream) | if (!e) return ks.UnknownError; switch (e) { case "PackageIsInvalidZip": return ks.PackageIsInvalidZip; case "SignatureArc |
| SignatureArchiveIsInvalidZip | 2504627..2504655 | no (exists elsewhere upstream) | IsInvalidZip": return ks.PackageIsInvalidZip; case "SignatureArchiveIsInvalidZip": return ks.SignatureArchiveIsInvalidZip; case "Sig |
| SignatureIsMissing | 2504722..2504740 | no (exists elsewhere upstream) | Zip": return ks.SignatureArchiveIsInvalidZip; case "SignatureIsMissing": return ks.SignatureIsMissing; case "SignatureMani |
| SignatureManifestIsMissing | 2504797..2504823 | no (exists elsewhere upstream) | tureIsMissing": return ks.SignatureIsMissing; case "SignatureManifestIsMissing": return ks.SignatureManifestIsMissing; case "Signa |
| SignatureManifestIsInvalid | 2504888..2504914 | no (exists elsewhere upstream) | ssing": return ks.SignatureManifestIsMissing; case "SignatureManifestIsInvalid": return ks.SignatureManifestIsInvalid; case "Exten |
| ExtensionManifestIsInvalid | 2504979..2505005 | yes | valid": return ks.SignatureManifestIsInvalid; case "ExtensionManifestIsInvalid": return ks.PackageIsUnreadable; case "SignatureIsI |
| SignatureIsInvalid | 2505063..2505081 | no (exists elsewhere upstream) | estIsInvalid": return ks.PackageIsUnreadable; case "SignatureIsInvalid": case "SignatureIsNotValid": return ks.SignatureIs |
| SignatureIsNotValid | 2505098..2505117 | no (exists elsewhere upstream) | PackageIsUnreadable; case "SignatureIsInvalid": case "SignatureIsNotValid": return ks.SignatureIsInvalid; default: |
| Could not load node-ovsx-sign module | 2505486..2505522 | yes | s.getSignModule(); } catch (d) { this.logService.error("Could not load node-ovsx-sign module", We(d)); return; } const a = (/* @__PURE__ */ ne |
| marketplace.cursorapi.com | 2506276..2506301 | yes | .output}`), { code: o.code }; } }, xu.SIGNING_REGISTRY_MAP = { "marketplace.cursorapi.com": "https://open-vsx.org", "open-vsx.org": "https://open-vsx.org" }, x |
| https://open-vsx.org | 2506305..2506325 | yes | } }, xu.SIGNING_REGISTRY_MAP = { "marketplace.cursorapi.com": "https://open-vsx.org", "open-vsx.org": "https://open-vsx.org" }, xu = B([w(0, Z), w(1, et) |
| open-vsx.org | 2506313..2506325 | yes | }, xu.SIGNING_REGISTRY_MAP = { "marketplace.cursorapi.com": "https://open-vsx.org", "open-vsx.org": "https://open-vsx.org" }, xu = B([w(0, Z), w(1, et) |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| @vscode/vsce-sign | 70 |
| Could not load vsce-sign module | 80 |
| sandy081 | 105 |
| Extension signature verification event | 106 |
| SystemMetaData | 107 |
| extensionsignature:verification | 124 |

