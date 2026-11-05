# Patch evidence: encryptionMainService.js

- module: app-out-main-js:0347
- bundle: app/out/main.js range 854725..857685
- upstream: src/vs/platform/encryption/electron-main/encryptionMainService.ts sha256:23cc938b313ac837db301e630a252f4edbdb16b7b6f59f8ae883a076b06991ab
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.667; shared rare anchors: 14
- bundle-only anchors: 2; upstream anchors absent from bundle: 4

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| dpapi | 856322..856327 | no (exists elsewhere upstream) | } getKeyStorageProvider() { if (ee) return Promise.resolve("dpapi"); if (q) return Promise.resolve("keychain_access"); if ( |
| keychain_access | 856368..856383 | no (exists elsewhere upstream) | return Promise.resolve("dpapi"); if (q) return Promise.resolve("keychain_access"); if (ya.getSelectedStorageBackend) try { this.logServ |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| electron | 18 |
| password-store | 27 |
| [EncryptionMainService] setting usePlainTextEncryption to true... | 28 |
| [EncryptionMainService] set usePlainTextEncryption to true | 30 |
| [EncryptionMainService] Encrypting value... | 35 |
| [EncryptionMainService] Encrypted value. | 38 |
| [EncryptionMainService] Decrypting value... | 55 |
| [EncryptionMainService] Decrypted value. | 57 |
| [EncryptionMainService] Checking if encryption is available... | 66 |
| [EncryptionMainService] Encryption is available:  | 68 |
| [EncryptionMainService] Getting selected storage backend... | 81 |
| [EncryptionMainService] Selected storage backend:  | 83 |
| Setting plain text encryption is not supported on Windows. | 94 |
| Setting plain text encryption is not supported on macOS. | 98 |
| Setting plain text encryption is not supported. | 102 |
| [EncryptionMainService] Setting usePlainTextEncryption to true... | 105 |
| [EncryptionMainService] Set usePlainTextEncryption to true | 107 |

