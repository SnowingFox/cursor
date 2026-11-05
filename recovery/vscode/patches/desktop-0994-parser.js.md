# Patch evidence: parser.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0994
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 4008906..4028215
- upstream: src/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/parser.ts sha256:183ff30e8ba1e211687cf7e07b52dcd74f0232b70c6c014f757ec1794da6f462
- basis: anchor-overlap confidence: B classification: upstream-modified
- dependency overlap: 0; shared rare anchors: 2
- bundle-only anchors: 30; upstream anchors absent from bundle: 25

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| newline | 4009762..4009769 | no (exists elsewhere upstream) | switch (this.type = t, yield* this.step(), t) { case "newline": this.atNewLine = true, this.indent = 0, this.onNewLine |
| space | 4009917..4009922 | no (exists elsewhere upstream) | onNewLine(this.offset + e.length); break; case "space": this.atNewLine && e[0] === " " && (this.indent += e.len |
| explicit-key-ind | 4010033..4010049 | yes | " " && (this.indent += e.length); break; case "explicit-key-ind": case "map-value-ind": case "seq-item-ind": |
| map-value-ind | 4010068..4010081 | yes | break; case "explicit-key-ind": case "map-value-ind": case "seq-item-ind": this.atNewLine && (this. |
| seq-item-ind | 4010100..4010112 | yes | e "explicit-key-ind": case "map-value-ind": case "seq-item-ind": this.atNewLine && (this.indent += e.length); |
| doc-mode | 4010207..4010215 | yes | Line && (this.indent += e.length); break; case "doc-mode": case "flow-error-end": return; defa |
| flow-error-end | 4010234..4010248 | yes | ength); break; case "doc-mode": case "flow-error-end": return; default: this.atNewLine = |
| doc-end | 4010833..4010840 | yes | *step() { const e = this.peek(1); if (this.type === "doc-end" && e?.type !== "doc-end") { for (; this.stack.length > 0; ) |
| document | 4011122..4011130 | no (exists elsewhere upstream) | e) return yield* this.stream(); switch (e.type) { case "document": return yield* this.document(e); case "alias": |
| alias | 4011189..4011194 | no (exists elsewhere upstream) | e "document": return yield* this.document(e); case "alias": case "scalar": case "single-quoted-scalar": |
| single-quoted-scalar | 4011234..4011254 | yes | cument(e); case "alias": case "scalar": case "single-quoted-scalar": case "double-quoted-scalar": return yield* this.s |
| double-quoted-scalar | 4011271..4011291 | yes | case "scalar": case "single-quoted-scalar": case "double-quoted-scalar": return yield* this.scalar(e); case "block-scalar" |
| block-scalar | 4011348..4011360 | yes | quoted-scalar": return yield* this.scalar(e); case "block-scalar": return yield* this.blockScalar(e); case "block-ma |
| block-map | 4011422..4011431 | yes | k-scalar": return yield* this.blockScalar(e); case "block-map": return yield* this.blockMap(e); case "block-seq": |
| block-seq | 4011490..4011499 | yes | "block-map": return yield* this.blockMap(e); case "block-seq": return yield* this.blockSequence(e); case "flow-c |
| flow-collection | 4011563..4011578 | yes | ck-seq": return yield* this.blockSequence(e); case "flow-collection": return yield* this.flowCollection(e); case "doc-e |
| indent | 4009045..4009051 | no (exists elsewhere upstream) | tructor(e) { this.atNewLine = true, this.atScalar = false, this.indent = 0, this.offset = 0, this.onKeyLine = false, this.stack = [], this.s |
| comment | 4013701..4013708 | no (exists elsewhere upstream) | .start) === -1 && (t.indent === 0 \|\| i.start.every((r) => r.type !== "comment" \|\| r.indent < t.indent)) && (n.type === "document" ? n.end = i.start |
| directive-line | 4013920..4013934 | yes | } } *stream() { switch (this.type) { case "directive-line": yield { type: "directive", offset: this.offset, source: t |
| directive | 4013920..4013929 | yes | } } *stream() { switch (this.type) { case "directive-line": yield { type: "directive", offset: this.offset, sour |
| byte-order-mark | 4014050..4014065 | yes | : this.offset, source: this.source }; return; case "byte-order-mark": case "space": case "comment": case "newline |
| doc-start | 4014229..4014238 | yes | sourceToken; return; case "doc-mode": case "doc-start": { const e = { type: "document", offset: this.offset, star |
| anchor | 4014852..4014858 | no (exists elsewhere upstream) | art.push(this.sourceToken); return; } case "anchor": case "tag": case "space": case "comment": |
| Unexpected block-seq-ind on same line with key | 4020929..4020975 | yes | yield* this.pop({ type: "error", offset: this.offset, message: "Unexpected block-seq-ind on same line with key", source: this.source }); return; } |
| comma | 4023099..4023104 | yes | f (e.end.length === 0) { switch (this.type) { case "comma": case "explicit-key-ind": !t \|\| t.sep ? e.item |
| flow-map-end | 4024167..4024179 | yes | { key: i, sep: [] }); return; } case "flow-map-end": case "flow-seq-end": e.end.push(this.sourceTo |
| flow-seq-end | 4024198..4024210 | yes | return; } case "flow-map-end": case "flow-seq-end": e.end.push(this.sourceToken); return; |
| block-scalar-header | 4025640..4025659 | yes | d-scalar": return this.flowScalar(this.type); case "block-scalar-header": return { type: "block-scalar", offset: this.offset, inden |
| flow-map-start | 4025800..4025814 | yes | : this.indent, props: [this.sourceToken], source: "" }; case "flow-map-start": case "flow-seq-start": return { type: "flow-colle |
| flow-seq-start | 4025831..4025845 | yes | rceToken], source: "" }; case "flow-map-start": case "flow-seq-start": return { type: "flow-collection", offset: this.offset, in |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| Not supported | 52 |
| unexpected | 176 |

