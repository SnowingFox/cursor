# Patch evidence: ps.js

- module: app-out-vs-workbench-workbench-desktop-main-js:2779
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 16735477..16738381
- upstream: src/vs/base/node/ps.ts sha256:ae3c7062800908f9ae9d6fe220851e51e04616af30a8cc500ed322a4145e0fd5
- basis: anchor-overlap confidence: B classification: upstream-modified
- dependency overlap: 0; shared rare anchors: 3
- bundle-only anchors: 17; upstream anchors absent from bundle: 34

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| UUIDv4 | 16735861..16735867 | yes | "بریښنالیک", url: "یو آر ال", emoji: "ایموجي", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cui |
| UUIDv6 | 16735879..16735885 | yes | "یو آر ال", emoji: "ایموجي", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: |
| nanoid | 16735888..16735894 | yes | ", emoji: "ایموجي", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", |
| cuid2 | 16735934..16735939 | yes | Dv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "نیټه ا |
| invalid_type | 16736410..16736422 | yes | y: "ارې" }; return (r) => { switch (r.code) { case "invalid_type": { const s = i[r.expected] ?? r.expected, o = Ey(r.input), |
| invalid_value | 16736696..16736709 | yes | سم ورودي: باید ${s} وای, مګر ${a} ترلاسه شو`; } case "invalid_value": return r.values.length === 1 ? `ناسم ورودي: باید ${zb(r.v |
| too_big | 16736867..16736874 | yes | `ناسم انتخاب: باید یو له ${mh(r.values, "\|")} څخه وای`; case "too_big": { const s = r.inclusive ? "<=" : "<", o = t(r.origin); |
| too_small | 16737155..16737164 | yes | ارزښت"} باید ${s}${r.maximum.toString()} وي`; } case "too_small": { const s = r.inclusive ? ">=" : ">", o = t(r.origin); |
| invalid_format | 16737414..16737428 | yes | origin} باید ${s}${r.minimum.toString()} وي`; } case "invalid_format": { const s = r; return s.format === "starts_with |
| starts_with | 16737487..16737498 | yes | alid_format": { const s = r; return s.format === "starts_with" ? `ناسم متن: باید د "${s.prefix}" سره پیل شي` : s.format === "ends_w |
| ends_with | 16737562..16737571 | yes | s_with" ? `ناسم متن: باید د "${s.prefix}" سره پیل شي` : s.format === "ends_with" ? `ناسم متن: باید د "${s.suffix}" سره پای ته ورسيږي` : s.format === |
| regex | 16735768..16735773 | no (exists elsewhere upstream) | function t(r) { return e[r] ?? null; } const n = { regex: "ورودي", email: "بریښنالیک", url: "یو آر ال", emoji: "ایموجي", uuid: |
| not_multiple_of | 16737829..16737844 | yes | ولري` : `${n[s.format] ?? r.format} ناسم دی`; } case "not_multiple_of": return `ناسم عدد: باید د ${r.divisor} مضرب وي`; c |
| unrecognized_keys | 16737919..16737936 | yes | return `ناسم عدد: باید د ${r.divisor} مضرب وي`; case "unrecognized_keys": return `ناسم ${r.keys.length > 1 ? "کلیډونه" : "کلیډ"}: $ |
| invalid_key | 16738041..16738052 | yes | length > 1 ? "کلیډونه" : "کلیډ"}: ${mh(r.keys, ", ")}`; case "invalid_key": return `ناسم کلیډ په ${r.origin} کې`; case "inval |
| invalid_union | 16738117..16738130 | yes | d_key": return `ناسم کلیډ په ${r.origin} کې`; case "invalid_union": return "ناسمه ورودي"; case "invalid_element": |
| invalid_element | 16738179..16738194 | yes | case "invalid_union": return "ناسمه ورودي"; case "invalid_element": return `ناسم عنصر په ${r.origin} کې`; default: |

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

