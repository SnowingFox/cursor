# Patch evidence: yaml.js

- module: app-out-vs-workbench-workbench-glass-main-js:3986
- bundle: app/out/vs/workbench/workbench.glass.main.js range 23270894..23282334
- upstream: src/vs/base/common/yaml.ts sha256:6a1b91e893b0ae191cd218956170a6477f6fe3dcd25df36b1b40f59805f1fbe8
- basis: anchor-overlap confidence: B classification: upstream-modified
- dependency overlap: 0; shared rare anchors: 4
- bundle-only anchors: 22; upstream anchors absent from bundle: 105

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| resolve | 23271329..23271336 | no (exists elsewhere upstream) | " + ezm(this, e); }, rle = vCi, wzm = Rnk, Czm = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName |
| instanceOf | 23271353..23271363 | yes | le = vCi, wzm = Rnk, Czm = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAl |
| predicate | 23271367..23271376 | no (exists elsewhere upstream) | = Rnk, Czm = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"], Tzm |
| representName | 23271393..23271406 | yes | ti", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"], Tzm = ["scalar", "sequence", "mapp |
| defaultStyle | 23271410..23271422 | yes | construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"], Tzm = ["scalar", "sequence", "mapping"], PJ = Mnk, |
| styleAliases | 23271426..23271438 | yes | tanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"], Tzm = ["scalar", "sequence", "mapping"], PJ = Mnk, qQa.prototype.e |
| There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported. | 23272161..23272272 | yes | t."); if (s.loadKind && s.loadKind !== "scalar") throw new rle("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported."); if (s.multi) throw new rle("There is a multi type in the imp |
| There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit. | 23272310..23272408 | yes | of such types is not supported."); if (s.multi) throw new rle("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit."); }), i.forEach(function(s) { if (!(s instanceof PJ)) thro |
| lowercase | 23273467..23273476 | yes | icate: Onk, represent: { canonical: function() { return "~"; }, lowercase: function() { return "null"; }, uppercase: function() { ret |
| FALSE | 23273912..23273917 | yes | ue" : "false"; }, uppercase: function(t) { return t ? "TRUE" : "FALSE"; }, camelcase: function(t) { return t ? "True" : "False"; } |
| False | 23273975..23273980 | no (exists elsewhere upstream) | UE" : "FALSE"; }, camelcase: function(t) { return t ? "True" : "False"; } }, defaultStyle: "lowercase" }), rJa = new PJ("tag:yaml.org,200 |
| decimal | 23274338..23274345 | no (exists elsewhere upstream) | t >= 0 ? "0o" + t.toString(8) : "-0o" + t.toString(8).slice(1); }, decimal: function(t) { return t.toString(10); }, hexadecimal: function( |
| YAML directive accepts exactly one argument | 23276905..23276948 | yes | && sS(e, "duplication of %YAML directive"), i.length !== 1 && sS(e, "YAML directive accepts exactly one argument"), r = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), r === null && sS(e, "ill-fo |
| ill-formed argument of the YAML directive | 23277012..23277053 | yes | gument"), r = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), r === null && sS(e, "ill-formed argument of the YAML directive"), s = parseInt(r[1], 10), o = parseInt(r[2], 10), s !== 1 && sS(e, " |
| unacceptable YAML version of the document | 23277123..23277164 | yes | "), s = parseInt(r[1], 10), o = parseInt(r[2], 10), s !== 1 && sS(e, "unacceptable YAML version of the document"), e.version = i[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && |
| unsupported YAML version of the document | 23277243..23277283 | yes | sion = i[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Sts(e, "unsupported YAML version of the document"); }, TAG: function(e, n, i) { var r, s; i.length !== 2 && |
| TAG directive accepts exactly two arguments | 23277360..23277403 | yes | , TAG: function(e, n, i) { var r, s; i.length !== 2 && sS(e, "TAG directive accepts exactly two arguments"), r = i[0], s = i[1], bJa.test(r) \|\| sS(e, "ill-formed tag handle (f |
| tag prefix is malformed:  | 23277768..23277793 | yes | try { s = decodeURIComponent(s); } catch { sS(e, "tag prefix is malformed: " + s); } e.tagMap[r] = s; } }, Ozm = Tik, Fzm = Eik, CJa = |
| safeLoad | 23279035..23279043 | yes | Ja, int: rJa, merge: dJa, omap: pJa, seq: JQa, str: QQa }, fVm = XQa("safeLoad", "load"), vVm = XQa("safeLoadAll", "loadAll"), _Vm = XQa("safeDump", |
| safeLoadAll | 23279066..23279077 | yes | pJa, seq: JQa, str: QQa }, fVm = XQa("safeLoad", "load"), vVm = XQa("safeLoadAll", "loadAll"), _Vm = XQa("safeDump", "dump"), bVm = { Type: sVm, Schem |
| loadAll | 23277865..23277872 | yes | + s); } e.tagMap[r] = s; } }, Ozm = Tik, Fzm = Eik, CJa = { loadAll: Ozm, load: Fzm }, TJa = Object.prototype.toString, EJa = Object.prot |
| safeDump | 23279103..23279111 | yes | ("safeLoad", "load"), vVm = XQa("safeLoadAll", "loadAll"), _Vm = XQa("safeDump", "dump"), bVm = { Type: sVm, Schema: oVm, FAILSAFE_SCHEMA: aVm, JSON |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| scalar | 56 |
| sequence | 66 |
| single | 129 |
| rawValue | 201 |
|  \|\| this.input[this.pos] ===  | 258 |
|  \|\| this.peekChar() ===  | 267 |
|  && this.input[this.pos + 1] ===  | 270 |
|  \|\| c3 ===  | 283 |
|  && c1 ===  | 284 |
|  && this.input[this.pos] !==  | 310 |
|  && this.peekChar() !==  | 323 |
|  \|\| ch ===  | 368 |
|  \|\| next ===  | 382 |
|  && ch ===  | 441 |
| : value +=  | 453 |
| ': value += ' | 456 |
|  + (next ??  | 509 |
|  \|\| c ===  | 534 |
|  && this.pos > start && (this.input[this.pos - 1] ===  | 584 |
|  && ch !==  | 588 |
|  && c <=  | 610 |
|  \|\| this.input[p] ===  | 615 |
|  or folded  | 623 |
|  && chomping ===  | 642 |
| trimmed | 764 |
|  \|\| line[0] ===  | 773 |
| literal | 848 |
|  && this.input[p] !==  | 892 |
| - single multiline\n - sequence entry | 1199 |
| unexpectedIndentation | 1277 |
| unexpected-indentation | 1280 |
| duplicateKey | 1293 |
| duplicate-key | 1296 |
| , properties, style:  | 1304 |
| expectedColon | 1320 |
| missingValue | 1358 |
| foo:\n- 42 | 1365 |
| - - value | 1449 |
| s an inline mapping after  | 1460 |
| missingSeqItemValue | 1471 |

