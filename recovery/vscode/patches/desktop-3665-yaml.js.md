# Patch evidence: yaml.js

- module: app-out-vs-workbench-workbench-desktop-main-js:3665
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 21754174..21765591
- upstream: src/vs/base/common/yaml.ts sha256:6a1b91e893b0ae191cd218956170a6477f6fe3dcd25df36b1b40f59805f1fbe8
- basis: anchor-overlap confidence: B classification: upstream-modified
- dependency overlap: 0; shared rare anchors: 4
- bundle-only anchors: 22; upstream anchors absent from bundle: 105

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| resolve | 21754608..21754615 | no (exists elsewhere upstream) | " + Doh(this, t); }, BX = wOn, eah = u9v, tah = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName |
| instanceOf | 21754632..21754642 | yes | BX = wOn, eah = u9v, tah = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAl |
| predicate | 21754646..21754655 | no (exists elsewhere upstream) | = u9v, tah = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"], nah |
| representName | 21754672..21754685 | yes | ti", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"], nah = ["scalar", "sequence", "mapp |
| defaultStyle | 21754689..21754701 | yes | construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"], nah = ["scalar", "sequence", "mapping"], sG = h9v, |
| styleAliases | 21754705..21754717 | yes | tanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"], nah = ["scalar", "sequence", "mapping"], sG = h9v, Mvo.prototype.e |
| There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported. | 21755437..21755548 | yes | ct."); if (s.loadKind && s.loadKind !== "scalar") throw new BX("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported."); if (s.multi) throw new BX("There is a multi type in the impl |
| There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit. | 21755585..21755683 | yes | g of such types is not supported."); if (s.multi) throw new BX("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit."); }), i.forEach(function(s) { if (!(s instanceof sG)) thro |
| lowercase | 21756741..21756750 | yes | icate: f9v, represent: { canonical: function() { return "~"; }, lowercase: function() { return "null"; }, uppercase: function() { ret |
| FALSE | 21757186..21757191 | yes | ue" : "false"; }, uppercase: function(e) { return e ? "TRUE" : "FALSE"; }, camelcase: function(e) { return e ? "True" : "False"; } |
| False | 21757249..21757254 | no (exists elsewhere upstream) | UE" : "FALSE"; }, camelcase: function(e) { return e ? "True" : "False"; } }, defaultStyle: "lowercase" }), jvo = new sG("tag:yaml.org,200 |
| decimal | 21757612..21757619 | no (exists elsewhere upstream) | e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1); }, decimal: function(e) { return e.toString(10); }, hexadecimal: function( |
| YAML directive accepts exactly one argument | 21760179..21760222 | yes | && a_(t, "duplication of %YAML directive"), i.length !== 1 && a_(t, "YAML directive accepts exactly one argument"), r = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), r === null && a_(t, "ill-fo |
| ill-formed argument of the YAML directive | 21760286..21760327 | yes | gument"), r = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), r === null && a_(t, "ill-formed argument of the YAML directive"), s = parseInt(r[1], 10), o = parseInt(r[2], 10), s !== 1 && a_(t, " |
| unacceptable YAML version of the document | 21760397..21760438 | yes | "), s = parseInt(r[1], 10), o = parseInt(r[2], 10), s !== 1 && a_(t, "unacceptable YAML version of the document"), t.version = i[0], t.checkLineBreaks = o < 2, o !== 1 && o !== 2 && |
| unsupported YAML version of the document | 21760517..21760557 | yes | sion = i[0], t.checkLineBreaks = o < 2, o !== 1 && o !== 2 && dKi(t, "unsupported YAML version of the document"); }, TAG: function(t, n, i) { var r, s; i.length !== 2 && |
| TAG directive accepts exactly two arguments | 21760634..21760677 | yes | , TAG: function(t, n, i) { var r, s; i.length !== 2 && a_(t, "TAG directive accepts exactly two arguments"), r = i[0], s = i[1], o_o.test(r) \|\| a_(t, "ill-formed tag handle (f |
| tag prefix is malformed:  | 21761042..21761067 | yes | try { s = decodeURIComponent(s); } catch { a_(t, "tag prefix is malformed: " + s); } t.tagMap[r] = s; } }, pah = s6v, mah = o6v, d_o = |
| safeLoad | 21762292..21762300 | yes | vo, int: jvo, merge: Qvo, omap: e_o, seq: $vo, str: Uvo }, zah = Fvo("safeLoad", "load"), Kah = Fvo("safeLoadAll", "loadAll"), Yah = Fvo("safeDump", |
| safeLoadAll | 21762323..21762334 | yes | e_o, seq: $vo, str: Uvo }, zah = Fvo("safeLoad", "load"), Kah = Fvo("safeLoadAll", "loadAll"), Yah = Fvo("safeDump", "dump"), Xah = { Type: Oah, Schem |
| loadAll | 21761139..21761146 | yes | + s); } t.tagMap[r] = s; } }, pah = s6v, mah = o6v, d_o = { loadAll: pah, load: mah }, h_o = Object.prototype.toString, p_o = Object.prot |
| safeDump | 21762360..21762368 | yes | ("safeLoad", "load"), Kah = Fvo("safeLoadAll", "loadAll"), Yah = Fvo("safeDump", "dump"), Xah = { Type: Oah, Schema: Fah, FAILSAFE_SCHEMA: Bah, JSON |

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

