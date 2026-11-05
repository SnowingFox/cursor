# Patch evidence: accessibilitySignalService.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0602
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 2449142..2467698
- upstream: src/vs/platform/accessibilitySignal/browser/accessibilitySignalService.ts sha256:7e5beaaf79439b4e12c0c63fa6ab797e54eb08dea8dfbb057103b04d31b6cae1
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.733; shared rare anchors: 215
- bundle-only anchors: 7; upstream anchors absent from bundle: 160

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| suspended | 2452058..2452067 | no (exists elsewhere upstream) | his.audioContext = void 0; }))), this.audioContext.state === "suspended") { if (this.audioContextResumeBlocked) return; t |
| running | 2452715..2452722 | no (exists elsewhere upstream) | } } } return this.audioContext.state === "running" ? this.audioContext : void 0; } } async playViaWebAudi |
| http:// | 2454270..2454277 | no (exists elsewhere upstream) | this.playingCustomSounds.add(e); let n; if (e.startsWith("http://") \|\| e.startsWith("https://")) n = e; else { let i; |
| https:// | 2454297..2454305 | no (exists elsewhere upstream) | d(e); let n; if (e.startsWith("http://") \|\| e.startsWith("https://")) n = e; else { let i; e.startsWith("file://") |
| file:// | 2454366..2454373 | no (exists elsewhere upstream) | "https://")) n = e; else { let i; e.startsWith("file://") ? i = Ee.parse(e) : (e.startsWith("/") \|\| /^[a-zA-Z]:/.test(e), i = |
| Error while playing custom sound | 2455016..2455048 | yes | s("play() can only be initiated by a user gesture") \|\| console.error("Error while playing custom sound", i), i; } finally { this.playingCustomSounds.delete(e) |
| done1.mp3 | 2458379..2458388 | yes | { fileName: "editsUndone.mp3" }), i_.done1 = i_.register({ fileName: "done1.mp3" }), Aw = i_, b4c = class { constructor(e) { this.randomOne |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| diffEditor.cursorPositionChanged | 55 |
| , announcement:  | 95 |
| announcement | 108 |
| signal | 139 |
| ) + (isScreenReaderOptimized ?  | 156 |
| hediet | 168 |
| SystemMetaData | 170 |
| This data is collected to understand how signals are used and if more signals should be added. | 174 |
| signal.played | 175 |
| accessibility.signalOptions.volume | 183 |
| number | 184 |
| play() can only be initiated by a user gesture | 211 |
| Error while playing sound | 213 |
| accessibility.signalOptions.debouncePositionChanges | 257 |
| positional | 261 |
| accessibility.signalOptions.experimental.delays.errorAtPosition | 262 |
| accessibility.signalOptions.experimental.delays.warningAtPosition | 264 |
| accessibility.signalOptions.experimental.delays.general | 266 |
|  \|\| state ===  | 274 |
| error.mp3 | 317 |
| warning.mp3 | 318 |
| success.mp3 | 319 |
| foldedAreas.mp3 | 320 |
| break.mp3 | 321 |
| quickFixes.mp3 | 322 |
| taskCompleted.mp3 | 323 |
| taskFailed.mp3 | 324 |
| terminalBell.mp3 | 325 |
| diffLineInserted.mp3 | 326 |
| diffLineDeleted.mp3 | 327 |
| diffLineModified.mp3 | 328 |
| requestSent.mp3 | 329 |
| responseReceived1.mp3 | 330 |
| responseReceived2.mp3 | 331 |
| responseReceived3.mp3 | 332 |
| responseReceived4.mp3 | 333 |
| clear.mp3 | 334 |
| save.mp3 | 335 |
| format.mp3 | 336 |
| voiceRecordingStarted.mp3 | 337 |

