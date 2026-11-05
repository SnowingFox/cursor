# Patch evidence: ps.js

- module: app-out-vs-workbench-workbench-glass-main-js:0427
- bundle: app/out/vs/workbench/workbench.glass.main.js range 1001656..1004560
- upstream: src/vs/base/node/ps.ts sha256:ae3c7062800908f9ae9d6fe220851e51e04616af30a8cc500ed322a4145e0fd5
- basis: anchor-overlap confidence: B classification: upstream-modified
- dependency overlap: 0; shared rare anchors: 3
- bundle-only anchors: 17; upstream anchors absent from bundle: 34

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| UUIDv4 | 1002040..1002046 | yes | "بریښنالیک", url: "یو آر ال", emoji: "ایموجي", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cui |
| UUIDv6 | 1002058..1002064 | yes | "یو آر ال", emoji: "ایموجي", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: |
| nanoid | 1002067..1002073 | yes | ", emoji: "ایموجي", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", |
| cuid2 | 1002113..1002118 | yes | Dv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "نیټه ا |
| invalid_type | 1002589..1002601 | yes | y: "ارې" }; return (r) => { switch (r.code) { case "invalid_type": { const s = i[r.expected] ?? r.expected, o = Qk(r.input), |
| invalid_value | 1002875..1002888 | yes | سم ورودي: باید ${s} وای, مګر ${a} ترلاسه شو`; } case "invalid_value": return r.values.length === 1 ? `ناسم ورودي: باید ${rk(r.v |
| too_big | 1003046..1003053 | yes | `ناسم انتخاب: باید یو له ${om(r.values, "\|")} څخه وای`; case "too_big": { const s = r.inclusive ? "<=" : "<", o = e(r.origin); |
| too_small | 1003334..1003343 | yes | ارزښت"} باید ${s}${r.maximum.toString()} وي`; } case "too_small": { const s = r.inclusive ? ">=" : ">", o = e(r.origin); |
| invalid_format | 1003593..1003607 | yes | origin} باید ${s}${r.minimum.toString()} وي`; } case "invalid_format": { const s = r; return s.format === "starts_with |
| starts_with | 1003666..1003677 | yes | alid_format": { const s = r; return s.format === "starts_with" ? `ناسم متن: باید د "${s.prefix}" سره پیل شي` : s.format === "ends_w |
| ends_with | 1003741..1003750 | yes | s_with" ? `ناسم متن: باید د "${s.prefix}" سره پیل شي` : s.format === "ends_with" ? `ناسم متن: باید د "${s.suffix}" سره پای ته ورسيږي` : s.format === |
| regex | 1001947..1001952 | no (exists elsewhere upstream) | function e(r) { return t[r] ?? null; } const n = { regex: "ورودي", email: "بریښنالیک", url: "یو آر ال", emoji: "ایموجي", uuid: |
| not_multiple_of | 1004008..1004023 | yes | ولري` : `${n[s.format] ?? r.format} ناسم دی`; } case "not_multiple_of": return `ناسم عدد: باید د ${r.divisor} مضرب وي`; c |
| unrecognized_keys | 1004098..1004115 | yes | return `ناسم عدد: باید د ${r.divisor} مضرب وي`; case "unrecognized_keys": return `ناسم ${r.keys.length > 1 ? "کلیډونه" : "کلیډ"}: $ |
| invalid_key | 1004220..1004231 | yes | length > 1 ? "کلیډونه" : "کلیډ"}: ${om(r.keys, ", ")}`; case "invalid_key": return `ناسم کلیډ په ${r.origin} کې`; case "inval |
| invalid_union | 1004296..1004309 | yes | d_key": return `ناسم کلیډ په ${r.origin} کې`; case "invalid_union": return "ناسمه ورودي"; case "invalid_element": |
| invalid_element | 1004358..1004373 | yes | case "invalid_union": return "ناسمه ورودي"; case "invalid_element": return `ناسم عنصر په ${r.origin} کې`; default: |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| electron-crash-reporter | 57 |
| conpty-agent | 62 |
| --type=xxxx | 65 |
| renderer | 68 |
| utility | 70 |
| utility-network-service | 72 |
| utility-process | 75 |
| extensionHost | 76 |
| extension-host | 77 |
| \\\\?\\ | 101 |
| \\??\\ | 103 |
| "\\\\?\\ | 105 |
| "\\??\\ | 107 |
| @vscode/windows-process-tree | 114 |
| vs/base/node/cpuUsage.sh | 180 |
|  + pids.join( | 181 |
| which ps | 203 |
| vs/base/node/ps.sh | 208 |
| -ax -o pid=,ppid=,pcpu=,pmem=,command= | 220 |
| en_US.UTF-8 | 223 |
| screen size is bogus | 225 |

