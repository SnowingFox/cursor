# Patch evidence: dom.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0290
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 699416..715814
- upstream: src/vs/base/browser/dom.ts sha256:140c7a5011729a09e09a408ddb95a55829046b32851be67905304f472179b5f2
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.737; shared rare anchors: 147
- bundle-only anchors: 20; upstream anchors absent from bundle: 186

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| blockquote | 708519..708529 | no (exists elsewhere upstream) | gt.https, gt.command], AYr = Object.freeze(["a", "abbr", "b", "bdo", "blockquote", "br", "caption", "cite", "code", "col", "colgroup", "dd", "del", "d |
| caption | 708539..708546 | no (exists elsewhere upstream) | ], AYr = Object.freeze(["a", "abbr", "b", "bdo", "blockquote", "br", "caption", "cite", "code", "col", "colgroup", "dd", "del", "details", "dfn", " |
| colgroup | 708573..708581 | no (exists elsewhere upstream) | ", "b", "bdo", "blockquote", "br", "caption", "cite", "code", "col", "colgroup", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "figcaption |
| figcaption | 708641..708651 | no (exists elsewhere upstream) | "colgroup", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "figcaption", "figure", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "in |
| label | 708742..708747 | no (exists elsewhere upstream) | 2", "h3", "h4", "h5", "h6", "hr", "i", "img", "input", "ins", "kbd", "label", "li", "mark", "ol", "p", "pre", "q", "rp", "rt", "ruby", "samp", "s |
| small | 708816..708821 | no (exists elsewhere upstream) | l", "li", "mark", "ol", "p", "pre", "q", "rp", "rt", "ruby", "samp", "small", "small", "source", "span", "strike", "strong", "sub", "summary", "s |
| strike | 708852..708858 | no (exists elsewhere upstream) | "q", "rp", "rt", "ruby", "samp", "small", "small", "source", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", |
| strong | 708862..708868 | no (exists elsewhere upstream) | "rt", "ruby", "samp", "small", "small", "source", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "th |
| summary | 708879..708886 | no (exists elsewhere upstream) | amp", "small", "small", "source", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr" |
| tbody | 708906..708911 | no (exists elsewhere upstream) | urce", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr", "tt", "u", "ul", "var", |
| tfoot | 708921..708926 | no (exists elsewhere upstream) | "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr", "tt", "u", "ul", "var", "video", "wbr" |
| thead | 708936..708941 | no (exists elsewhere upstream) | ng", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr", "tt", "u", "ul", "var", "video", "wbr"]), XDc = Objec |
| video | 708983..708988 | no (exists elsewhere upstream) | "td", "tfoot", "th", "thead", "time", "tr", "tt", "u", "ul", "var", "video", "wbr"]), XDc = Object.freeze({ ALLOWED_TAGS: ["a", "button", "block |
| data-href | 709245..709254 | no (exists elsewhere upstream) | ", "span", "strong", "textarea", "ul", "ol"], ALLOWED_ATTR: ["href", "data-href", "data-command", "target", "title", "name", "src", "alt", "class", " |
| data-command | 709258..709270 | no (exists elsewhere upstream) | trong", "textarea", "ul", "ol"], ALLOWED_ATTR: ["href", "data-href", "data-command", "target", "title", "name", "src", "alt", "class", "id", "role", "ta |
| data-code | 709359..709368 | no (exists elsewhere upstream) | ", "name", "src", "alt", "class", "id", "role", "tabindex", "style", "data-code", "width", "height", "align", "x-dispatch", "required", "checked", "p |
| x-dispatch | 709400..709410 | no (exists elsewhere upstream) | role", "tabindex", "style", "data-code", "width", "height", "align", "x-dispatch", "required", "checked", "placeholder", "type", "start"], RETURN_DOM: |
| required | 709414..709422 | no (exists elsewhere upstream) | ex", "style", "data-code", "width", "height", "align", "x-dispatch", "required", "checked", "placeholder", "type", "start"], RETURN_DOM: false, RETU |
| checked | 709426..709433 | no (exists elsewhere upstream) | , "data-code", "width", "height", "align", "x-dispatch", "required", "checked", "placeholder", "type", "start"], RETURN_DOM: false, RETURN_DOM_FRAG |
| placeholder | 709437..709448 | no (exists elsewhere upstream) | e", "width", "height", "align", "x-dispatch", "required", "checked", "placeholder", "type", "start"], RETURN_DOM: false, RETURN_DOM_FRAGMENT: false, RE |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| number | 56 |
| window has focus | 144 |
| mousedown | 262 |
| keydown | 263 |
| keypress | 264 |
| pointerdown | 266 |
| pointermove | 267 |
| pointerup | 268 |
| idle-until-urgent | 340 |
| Unable to figure out browser width and height | 646 |
| border-left-width | 663 |
| border-right-width | 666 |
| border-top-width | 669 |
| border-bottom-width | 672 |
| padding-left | 676 |
| padding-right | 679 |
| padding-top | 682 |
| padding-bottom | 685 |
| margin-left | 689 |
| margin-top | 692 |
| margin-right | 695 |
| margin-bottom | 698 |
| object | 728 |
| parentFlowToElementId | 918 |
| string | 930 |
| auxclick | 1215 |
| dblclick | 1216 |
| mouseup | 1217 |
| mouseover | 1219 |
| mousemove | 1220 |
| mouseout | 1221 |
| mouseenter | 1222 |
| mouseleave | 1223 |
| pointerleave | 1228 |
| contextmenu | 1229 |
| beforeunload | 1237 |
| unload | 1238 |
| pageshow | 1239 |
| pagehide | 1240 |
| resize | 1244 |

