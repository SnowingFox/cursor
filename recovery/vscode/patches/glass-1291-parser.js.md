# Patch evidence: parser.js

- module: app-out-vs-workbench-workbench-glass-main-js:1291
- bundle: app/out/vs/workbench/workbench.glass.main.js range 5614517..5633826
- upstream: src/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/parser.ts sha256:183ff30e8ba1e211687cf7e07b52dcd74f0232b70c6c014f757ec1794da6f462
- basis: anchor-overlap confidence: B classification: upstream-modified
- dependency overlap: 0; shared rare anchors: 2
- bundle-only anchors: 32; upstream anchors absent from bundle: 25

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| scalar | 5615211..5615217 | no (exists elsewhere upstream) | return; } const e = z4y(t); if (e) if (e === "scalar") this.atNewLine = false, this.atScalar = true, this.type = "scalar"; |
| newline | 5615373..5615380 | no (exists elsewhere upstream) | switch (this.type = e, yield* this.step(), e) { case "newline": this.atNewLine = true, this.indent = 0, this.onNewLine |
| space | 5615528..5615533 | no (exists elsewhere upstream) | onNewLine(this.offset + t.length); break; case "space": this.atNewLine && t[0] === " " && (this.indent += t.len |
| explicit-key-ind | 5615644..5615660 | yes | " " && (this.indent += t.length); break; case "explicit-key-ind": case "map-value-ind": case "seq-item-ind": |
| map-value-ind | 5615679..5615692 | yes | break; case "explicit-key-ind": case "map-value-ind": case "seq-item-ind": this.atNewLine && (this. |
| seq-item-ind | 5615711..5615723 | yes | e "explicit-key-ind": case "map-value-ind": case "seq-item-ind": this.atNewLine && (this.indent += t.length); |
| doc-mode | 5615818..5615826 | yes | Line && (this.indent += t.length); break; case "doc-mode": case "flow-error-end": return; defa |
| flow-error-end | 5615845..5615859 | yes | ength); break; case "doc-mode": case "flow-error-end": return; default: this.atNewLine = |
| error | 5615850..5615855 | no (exists elsewhere upstream) | ); break; case "doc-mode": case "flow-error-end": return; default: this.atNewLi |
| doc-end | 5616444..5616451 | yes | *step() { const t = this.peek(1); if (this.type === "doc-end" && t?.type !== "doc-end") { for (; this.stack.length > 0; ) |
| document | 5616733..5616741 | no (exists elsewhere upstream) | t) return yield* this.stream(); switch (t.type) { case "document": return yield* this.document(t); case "alias": |
| alias | 5616800..5616805 | no (exists elsewhere upstream) | e "document": return yield* this.document(t); case "alias": case "scalar": case "single-quoted-scalar": |
| single-quoted-scalar | 5616845..5616865 | yes | cument(t); case "alias": case "scalar": case "single-quoted-scalar": case "double-quoted-scalar": return yield* this.s |
| double-quoted-scalar | 5616882..5616902 | yes | case "scalar": case "single-quoted-scalar": case "double-quoted-scalar": return yield* this.scalar(t); case "block-scalar" |
| block-scalar | 5616959..5616971 | yes | quoted-scalar": return yield* this.scalar(t); case "block-scalar": return yield* this.blockScalar(t); case "block-ma |
| block-map | 5617033..5617042 | yes | k-scalar": return yield* this.blockScalar(t); case "block-map": return yield* this.blockMap(t); case "block-seq": |
| block-seq | 5617101..5617110 | yes | "block-map": return yield* this.blockMap(t); case "block-seq": return yield* this.blockSequence(t); case "flow-c |
| flow-collection | 5617174..5617189 | yes | ck-seq": return yield* this.blockSequence(t); case "flow-collection": return yield* this.flowCollection(t); case "doc-e |
| indent | 5614656..5614662 | no (exists elsewhere upstream) | tructor(t) { this.atNewLine = true, this.atScalar = false, this.indent = 0, this.offset = 0, this.onKeyLine = false, this.stack = [], this.s |
| comment | 5619312..5619319 | no (exists elsewhere upstream) | .start) === -1 && (e.indent === 0 \|\| i.start.every((r) => r.type !== "comment" \|\| r.indent < e.indent)) && (n.type === "document" ? n.end = i.start |
| directive-line | 5619531..5619545 | yes | } } *stream() { switch (this.type) { case "directive-line": yield { type: "directive", offset: this.offset, source: t |
| directive | 5619531..5619540 | yes | } } *stream() { switch (this.type) { case "directive-line": yield { type: "directive", offset: this.offset, sour |
| byte-order-mark | 5619661..5619676 | yes | : this.offset, source: this.source }; return; case "byte-order-mark": case "space": case "comment": case "newline |
| doc-start | 5619840..5619849 | yes | sourceToken; return; case "doc-mode": case "doc-start": { const t = { type: "document", offset: this.offset, star |
| anchor | 5620463..5620469 | no (exists elsewhere upstream) | art.push(this.sourceToken); return; } case "anchor": case "tag": case "space": case "comment": |
| Unexpected block-seq-ind on same line with key | 5626540..5626586 | yes | yield* this.pop({ type: "error", offset: this.offset, message: "Unexpected block-seq-ind on same line with key", source: this.source }); return; } |
| comma | 5628710..5628715 | yes | f (t.end.length === 0) { switch (this.type) { case "comma": case "explicit-key-ind": !e \|\| e.sep ? t.item |
| flow-map-end | 5629778..5629790 | yes | { key: i, sep: [] }); return; } case "flow-map-end": case "flow-seq-end": t.end.push(this.sourceTo |
| flow-seq-end | 5629809..5629821 | yes | return; } case "flow-map-end": case "flow-seq-end": t.end.push(this.sourceToken); return; |
| block-scalar-header | 5631251..5631270 | yes | d-scalar": return this.flowScalar(this.type); case "block-scalar-header": return { type: "block-scalar", offset: this.offset, inden |
| flow-map-start | 5631411..5631425 | yes | : this.indent, props: [this.sourceToken], source: "" }; case "flow-map-start": case "flow-seq-start": return { type: "flow-colle |
| flow-seq-start | 5631442..5631456 | yes | rceToken], source: "" }; case "flow-map-start": case "flow-seq-start": return { type: "flow-collection", offset: this.offset, in |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| Not supported | 52 |
| unexpected | 176 |

