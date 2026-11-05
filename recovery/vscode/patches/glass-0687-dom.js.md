# Patch evidence: dom.js

- module: app-out-vs-workbench-workbench-glass-main-js:0687
- bundle: app/out/vs/workbench/workbench.glass.main.js range 2614362..2630064
- upstream: src/vs/base/browser/dom.ts sha256:140c7a5011729a09e09a408ddb95a55829046b32851be67905304f472179b5f2
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.737; shared rare anchors: 145
- bundle-only anchors: 20; upstream anchors absent from bundle: 188

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| blockquote | 2623383..2623393 | no (exists elsewhere upstream) | Ot.https, Ot.command], W5d = Object.freeze(["a", "abbr", "b", "bdo", "blockquote", "br", "caption", "cite", "code", "col", "colgroup", "dd", "del", "d |
| caption | 2623403..2623410 | no (exists elsewhere upstream) | ], W5d = Object.freeze(["a", "abbr", "b", "bdo", "blockquote", "br", "caption", "cite", "code", "col", "colgroup", "dd", "del", "details", "dfn", " |
| colgroup | 2623437..2623445 | no (exists elsewhere upstream) | ", "b", "bdo", "blockquote", "br", "caption", "cite", "code", "col", "colgroup", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "figcaption |
| figcaption | 2623505..2623515 | no (exists elsewhere upstream) | "colgroup", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "figcaption", "figure", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "in |
| label | 2623606..2623611 | no (exists elsewhere upstream) | 2", "h3", "h4", "h5", "h6", "hr", "i", "img", "input", "ins", "kbd", "label", "li", "mark", "ol", "p", "pre", "q", "rp", "rt", "ruby", "samp", "s |
| small | 2623680..2623685 | no (exists elsewhere upstream) | l", "li", "mark", "ol", "p", "pre", "q", "rp", "rt", "ruby", "samp", "small", "small", "source", "span", "strike", "strong", "sub", "summary", "s |
| strike | 2623716..2623722 | no (exists elsewhere upstream) | "q", "rp", "rt", "ruby", "samp", "small", "small", "source", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", |
| strong | 2623726..2623732 | no (exists elsewhere upstream) | "rt", "ruby", "samp", "small", "small", "source", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "th |
| summary | 2623743..2623750 | no (exists elsewhere upstream) | amp", "small", "small", "source", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr" |
| tbody | 2623770..2623775 | no (exists elsewhere upstream) | urce", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr", "tt", "u", "ul", "var", |
| tfoot | 2623785..2623790 | no (exists elsewhere upstream) | "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr", "tt", "u", "ul", "var", "video", "wbr" |
| thead | 2623800..2623805 | no (exists elsewhere upstream) | ng", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr", "tt", "u", "ul", "var", "video", "wbr"]), cAy = Objec |
| video | 2623847..2623852 | no (exists elsewhere upstream) | "td", "tfoot", "th", "thead", "time", "tr", "tt", "u", "ul", "var", "video", "wbr"]), cAy = Object.freeze({ ALLOWED_TAGS: ["a", "button", "block |
| data-href | 2624109..2624118 | no (exists elsewhere upstream) | ", "span", "strong", "textarea", "ul", "ol"], ALLOWED_ATTR: ["href", "data-href", "data-command", "target", "title", "name", "src", "alt", "class", " |
| data-command | 2624122..2624134 | no (exists elsewhere upstream) | trong", "textarea", "ul", "ol"], ALLOWED_ATTR: ["href", "data-href", "data-command", "target", "title", "name", "src", "alt", "class", "id", "role", "ta |
| data-code | 2624223..2624232 | no (exists elsewhere upstream) | ", "name", "src", "alt", "class", "id", "role", "tabindex", "style", "data-code", "width", "height", "align", "x-dispatch", "required", "checked", "p |
| x-dispatch | 2624264..2624274 | no (exists elsewhere upstream) | role", "tabindex", "style", "data-code", "width", "height", "align", "x-dispatch", "required", "checked", "placeholder", "type", "start"], RETURN_DOM: |
| required | 2624278..2624286 | no (exists elsewhere upstream) | ex", "style", "data-code", "width", "height", "align", "x-dispatch", "required", "checked", "placeholder", "type", "start"], RETURN_DOM: false, RETU |
| checked | 2624290..2624297 | no (exists elsewhere upstream) | , "data-code", "width", "height", "align", "x-dispatch", "required", "checked", "placeholder", "type", "start"], RETURN_DOM: false, RETURN_DOM_FRAG |
| placeholder | 2624301..2624312 | no (exists elsewhere upstream) | e", "width", "height", "align", "x-dispatch", "required", "checked", "placeholder", "type", "start"], RETURN_DOM: false, RETURN_DOM_FRAGMENT: false, RE |

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

