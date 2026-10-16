(() => {
  "use strict";
  var t, e = { 181: (t2) => {
    t2.exports = require("buffer");
  }, 2203: (t2) => {
    t2.exports = require("stream");
  }, 2613: (t2) => {
    t2.exports = require("assert");
  }, 3106: (t2) => {
    t2.exports = require("zlib");
  }, 9023: (t2) => {
    t2.exports = require("util");
  }, 9896: (t2) => {
    t2.exports = require("fs");
  } }, n = {};
  function r(t2) {
    var o2 = n[t2];
    if (void 0 !== o2) return o2.exports;
    var s2 = n[t2] = { exports: {} };
    return e[t2](s2, s2.exports, r), s2.exports;
  }
  r.m = e, r.d = (t2, e2) => {
    for (var n2 in e2) r.o(e2, n2) && !r.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: e2[n2] });
  }, r.f = {}, r.e = (t2) => Promise.all(Object.keys(r.f).reduce((e2, n2) => (r.f[n2](t2, e2), e2), [])), r.u = (t2) => t2 + ".js", r.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r.r = (t2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
  }, t = { 606: 1 }, r.f.require = (e2, n2) => {
    t[e2] || ((e3) => {
      var n3 = e3.modules, o2 = e3.ids, s2 = e3.runtime;
      for (var i2 in n3) r.o(n3, i2) && (r.m[i2] = n3[i2]);
      s2 && s2(r);
      for (var a2 = 0; a2 < o2.length; a2++) t[o2[a2]] = 1;
    })(require("./" + r.u(e2)));
  };
  var o = {};
  r.r(o), r.d(o, { BrowserAutomationMcpProvider: () => $t, BrowserSnapshotPushController: () => At, activate: () => Ot, deactivate: () => Lt, doEmit: () => Dt });
  const s = require("vscode"), i = class t2 {
    constructor(t3) {
      this.identifier = t3;
    }
    static init() {
      this.outputChannel || (this.outputChannel = s.window.createOutputChannel("Cursor IDE Browser Automation"));
    }
    static getLogger(e2) {
      return this.loggers.has(e2) || this.loggers.set(e2, new t2(e2)), this.loggers.get(e2);
    }
    static debug(t3) {
      this.log("DEBUG", "general", t3);
    }
    static info(t3) {
      this.log("INFO", "general", t3);
    }
    static warn(t3) {
      this.log("WARN", "general", t3);
    }
    static error(t3, e2) {
      const n2 = e2 ? `${t3}: ${e2.message}` : t3;
      this.log("ERROR", "general", n2), e2?.stack && this.log("ERROR", "general", e2.stack);
    }
    info(e2) {
      t2.log("INFO", this.identifier, e2);
    }
    warn(e2) {
      t2.log("WARN", this.identifier, e2);
    }
    error(e2, n2) {
      const r2 = n2 ? `${e2}: ${n2.message}` : e2;
      t2.log("ERROR", this.identifier, r2), n2?.stack && t2.log("ERROR", this.identifier, n2.stack);
    }
    static log(t3, e2, n2) {
      if (this.outputChannel) {
        const r2 = (/* @__PURE__ */ new Date()).toISOString();
        this.outputChannel.appendLine(`[${r2}] [${t3}] [${e2}] ${n2}`);
      }
    }
  };
  i.loggers = /* @__PURE__ */ new Map();
  let a = i;
  class l {
    constructor() {
      this.viewsByTurn = /* @__PURE__ */ new Map();
    }
    record(t2, e2) {
      let n2 = this.viewsByTurn.get(t2);
      if (!n2 && (n2 = /* @__PURE__ */ new Map(), this.viewsByTurn.set(t2, n2), this.viewsByTurn.size > 64)) {
        const t3 = this.viewsByTurn.keys().next().value;
        void 0 !== t3 && this.viewsByTurn.delete(t3);
      }
      n2.set(e2.viewId, e2);
    }
    take(t2) {
      const e2 = this.viewsByTurn.get(t2);
      return this.viewsByTurn.delete(t2), e2 ? [...e2.values()] : [];
    }
  }
  const c = `
function getParentElementAcrossShadow(element) {
    if (!element) return null;
    if (element.parentElement) return element.parentElement;
    const root = element.getRootNode ? element.getRootNode() : null;
    if (root && root.host && root.host.nodeType === Node.ELEMENT_NODE) {
        return root.host;
    }
    return null;
}

function walkComposedElements(root, visitor) {
    function visitContainer(container) {
        const children = container && container.children ? Array.from(container.children) : [];
        for (const child of children) {
            if (visitElement(child)) {
                return true;
            }
        }
        return false;
    }

    function visitElement(element) {
        if (visitor(element)) {
            return true;
        }
        if (element.shadowRoot && element.shadowRoot.mode === 'open') {
            if (visitContainer(element.shadowRoot)) {
                return true;
            }
        }
        return visitContainer(element);
    }

    return visitContainer(root);
}

function querySelectorAllIncludingOpenShadowRoots(selector) {
    const matches = [];
    walkComposedElements(document, (element) => {
        try {
            if (element.matches && element.matches(selector)) {
                matches.push(element);
            }
        } catch (_) { }
        return false;
    });
    return matches;
}

function findElementByIdAcrossRoots(id, preferredRoot) {
    if (!id) return null;

    function findElementByIdWithinRoot(root) {
        let match = null;
        walkComposedElements(root, (element) => {
            if (element.id === id) {
                match = element;
                return true;
            }
            return false;
        });
        return match;
    }

    const rootsToSearch = [];
    if (preferredRoot) {
        rootsToSearch.push(preferredRoot);
    }
    if (preferredRoot !== document) {
        rootsToSearch.push(document);
    }
    for (const root of rootsToSearch) {
        try {
            if (root && typeof root.getElementById === 'function') {
                const element = root.getElementById(id);
                if (element) {
                    return element;
                }
            }
            if (root && typeof root.querySelector === 'function') {
                const element = root.querySelector('#' + CSS.escape(String(id)));
                if (element) {
                    return element;
                }
            }
            const nestedElement = findElementByIdWithinRoot(root);
            if (nestedElement) {
                return nestedElement;
            }
        } catch (_) { }
    }
    return null;
}

function isElementHiddenForAria(element) {
    if (!element) return true;
    const tag = element.tagName?.toUpperCase();
    if (['STYLE', 'SCRIPT', 'NOSCRIPT', 'TEMPLATE'].includes(tag)) return true;
    if (element.getAttribute('aria-hidden') === 'true') return true;

    const style = window.getComputedStyle(element);
    if (!style) return false;

    if (style.visibility === 'hidden' || style.visibility === 'collapse') return true;
    if (style.display === 'none') return true;

    let parent = getParentElementAcrossShadow(element);
    while (parent && parent !== document.body) {
        if (parent.getAttribute('aria-hidden') === 'true') return true;
        const parentStyle = window.getComputedStyle(parent);
        if (parentStyle?.display === 'none') return true;
        parent = getParentElementAcrossShadow(parent);
    }

    return false;
}

function getTextFromIds(ids, preferredRoot) {
    try {
        if (!ids) return '';
        const parts = [];
        ids.split(/\\s+/).forEach(id => {
            const el = findElementByIdAcrossRoots(id, preferredRoot);
            if (el) {
                const t = (el.innerText || el.textContent || '').trim();
                if (t) parts.push(t);
            }
        });
        return parts.join(' ').trim();
    } catch (_) { return ''; }
}

function getVisibleText(el) {
    try {
        const parts = [];
        const state = { length: 0, maxLength: 240 };

        function collectVisibleTextParts(node) {
            if (!node || state.length > state.maxLength) {
                return;
            }

            if (node.nodeType === Node.TEXT_NODE) {
                const parent = node.parentElement;
                if (parent && isElementHiddenForAria(parent)) {
                    return;
                }
                const text = node.textContent || '';
                const clean = text.replace(/\\s+/g, ' ').trim();
                if (clean) {
                    parts.push(clean);
                    state.length += clean.length + 1;
                }
                return;
            }

            if (node.nodeType !== Node.ELEMENT_NODE && node.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
                return;
            }

            if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node;
                const tag = element.tagName?.toUpperCase();
                if (['STYLE', 'SCRIPT', 'NOSCRIPT', 'TEMPLATE'].includes(tag)) {
                    return;
                }
                if (isElementHiddenForAria(element)) {
                    return;
                }
                if (tag === 'SLOT') {
                    const assignedNodes = typeof element.assignedNodes === 'function'
                        ? element.assignedNodes({ flatten: true })
                        : [];
                    const slotChildren = assignedNodes.length > 0 ? assignedNodes : Array.from(element.childNodes || []);
                    for (const child of slotChildren) {
                        collectVisibleTextParts(child);
                        if (state.length > state.maxLength) {
                            break;
                        }
                    }
                    return;
                }
                if (element.shadowRoot && element.shadowRoot.mode === 'open') {
                    collectVisibleTextParts(element.shadowRoot);
                    return;
                }
            }

            const children = Array.from(node.childNodes || []);
            for (const child of children) {
                collectVisibleTextParts(child);
                if (state.length > state.maxLength) {
                    break;
                }
            }
        }

        collectVisibleTextParts(el);
        if (parts.length) {
            return parts.join(' ').trim().substring(0, 200);
        }
        const fallback = (el.innerText || el.textContent || '').replace(/\\s+/g, ' ').trim();
        return fallback.substring(0, 200);
    } catch (_) {
        try {
            const text = (el.innerText || '').replace(/\\s+/g, ' ').trim();
            return text.substring(0, 200);
        } catch (_) {
            return '';
        }
    }
}

function getLabelsText(el) {
    try {
        const labels = (el.labels && Array.from(el.labels)) || [];
        if (!labels.length) return '';
        const labelText = labels
            .map(label => getVisibleText(label) || (label.textContent || '').trim())
            .filter(Boolean)
            .join(' ')
            .trim();
        return labelText.substring(0, 200);
    } catch (_) {
        return '';
    }
}

function getImplicitRole(el) {
    try {
        const tag = el.tagName ? el.tagName.toLowerCase() : '';
        switch (tag) {
            case 'a':
                return el.hasAttribute('href') ? 'link' : null;
            case 'area':
                return el.hasAttribute('href') ? 'link' : null;
            case 'article':
                return 'article';
            case 'aside':
                return 'complementary';
            case 'button':
                return 'button';
            case 'datalist':
                return 'listbox';
            case 'details':
                return 'group';
            case 'dialog':
                return 'dialog';
            case 'h1': case 'h2': case 'h3': case 'h4': case 'h5': case 'h6':
                return 'heading';
            case 'hr':
                return 'separator';
            case 'img':
                return (el.getAttribute('alt') === '' && !el.getAttribute('title')) ? null : 'img';
            case 'input': {
                const type = (el.type || el.getAttribute('type') || 'text').toLowerCase();
                if (type === 'button' || type === 'submit' || type === 'reset' || type === 'image') return 'button';
                if (type === 'checkbox') return 'checkbox';
                if (type === 'radio') return 'radio';
                if (type === 'range') return 'slider';
                if (type === 'number') return 'spinbutton';
                if (type === 'search') return el.hasAttribute('list') ? 'combobox' : 'searchbox';
                if (type === 'hidden') return null;
                if (['email', 'tel', 'text', 'url', 'password', ''].includes(type)) {
                    const list = el.getAttribute('list');
                    if (list) {
                        const datalist = findElementByIdAcrossRoots(list, el.getRootNode ? el.getRootNode() : document);
                        if (datalist && datalist.tagName === 'DATALIST') return 'combobox';
                    }
                    return 'textbox';
                }
                return 'textbox';
            }
            case 'li':
                return 'listitem';
            case 'main':
                return 'main';
            case 'math':
                return 'math';
            case 'menu':
                return 'list';
            case 'meter':
                return 'meter';
            case 'nav':
                return 'navigation';
            case 'ol': case 'ul':
                return 'list';
            case 'optgroup':
                return 'group';
            case 'option':
                return 'option';
            case 'output':
                return 'status';
            case 'progress':
                return 'progressbar';
            case 'search':
                return 'search';
            case 'select':
                return el.hasAttribute('multiple') || (el.size > 1) ? 'listbox' : 'combobox';
            case 'summary':
                return 'button';
            case 'table':
                return 'table';
            case 'tbody': case 'tfoot': case 'thead':
                return 'rowgroup';
            case 'td':
                return 'cell';
            case 'textarea':
                return 'textbox';
            case 'th':
                return 'columnheader';
            case 'tr':
                return 'row';
            case 'section':
                return (el.hasAttribute('aria-label') || el.hasAttribute('aria-labelledby')) ? 'region' : null;
            case 'form':
                return (el.hasAttribute('aria-label') || el.hasAttribute('aria-labelledby')) ? 'form' : null;
            case 'header':
                return 'banner';
            case 'footer':
                return 'contentinfo';
            case 'svg':
                return 'img';
            default:
                return null;
        }
    } catch (_) {
        return null;
    }
}

function getAriaRole(el) {
    const explicitRole = el.getAttribute('role');
    if (explicitRole) {
        const roles = explicitRole.split(' ').map(r => r.trim()).filter(Boolean);
        if (roles.length > 0) return roles[0];
    }
    return getImplicitRole(el);
}

function computeAccessibleName(el, role) {
    try {
        if (!el || el.getAttribute('aria-hidden') === 'true') {
            return '';
        }

        const labelledBy = el.getAttribute('aria-labelledby');
        const fromLabelledBy = getTextFromIds(labelledBy, el.getRootNode ? el.getRootNode() : document);
        if (fromLabelledBy) return fromLabelledBy.substring(0, 200);

        const ariaLabel = (el.getAttribute('aria-label') || '').trim();
        if (ariaLabel) return ariaLabel.substring(0, 200);

        const ariaPlaceholder = (el.getAttribute('aria-placeholder') || '').trim();
        if (ariaPlaceholder) return ariaPlaceholder.substring(0, 200);

        const labelsText = getLabelsText(el);
        if (labelsText) return labelsText.substring(0, 200);

        const tag = el.tagName ? el.tagName.toLowerCase() : '';

        if (tag === 'img') {
            const alt = (el.getAttribute('alt') || '').trim();
            if (alt) return alt.substring(0, 200);
        }

        if (tag === 'input') {
            const type = (el.getAttribute('type') || 'text').toLowerCase();
            const value = el.value || el.getAttribute('value') || '';
            const placeholder = (el.getAttribute('placeholder') || '').trim();
            if (type === 'button' || type === 'submit' || type === 'reset') {
                if (value) return String(value).substring(0, 200);
            }
            if (placeholder) return placeholder.substring(0, 200);
            if (value && type !== 'password') return String(value).substring(0, 200);
        }

        if (tag === 'textarea') {
            const placeholder = (el.getAttribute('placeholder') || '').trim();
            if (placeholder) return placeholder.substring(0, 200);
            if (el.value) return String(el.value).substring(0, 200);
        }

        if (tag === 'select') {
            const selected = Array.from(el.selectedOptions || [])
                .map(option => getVisibleText(option) || (option.textContent || '').trim())
                .filter(Boolean)
                .join(', ')
                .trim();
            if (selected) return selected.substring(0, 200);
        }

        const roleLower = (role || '').toLowerCase();
        const interactiveRoles = new Set(['button', 'link', 'menuitem', 'option', 'tab', 'checkbox', 'radio', 'switch', 'combobox', 'textbox', 'listbox', 'slider', 'spinbutton', 'cell', 'gridcell', 'row', 'columnheader', 'rowheader']);
        const interactiveTags = new Set(['button', 'a', 'summary', 'label', 'option', 'textarea', 'select', 'time']);
        const headingTags = new Set(['h1','h2','h3','h4','h5','h6']);
        if (interactiveRoles.has(roleLower) || interactiveTags.has(tag) || headingTags.has(tag)) {
            const visible = getVisibleText(el);
            if (visible) return visible.substring(0, 200);
        }

        if (tag === 'p' || tag === 'li' || roleLower === 'heading') {
            const visible = getVisibleText(el);
            if (visible) return visible.substring(0, 200);
        }

        const title = (el.getAttribute('title') || '').trim();
        if (title) return title.substring(0, 200);

        return '';
    } catch (_) {
        return '';
    }
}

function buildPageSnapshot(options = {}) {
    const maxDepth = options.maxDepth || 30;
    const interactiveOnly = options.interactive || false;
    const compact = options.compact || false;
    const selector = options.selector || null;

    function collectElementStates(el, role) {
        const states = [];
        try {
            if (document.activeElement === el) {
                states.push('active');
                states.push('focused');
            }
            if (el.matches && el.matches(':checked')) states.push('checked');
            const ariaChecked = el.getAttribute('aria-checked');
            if (ariaChecked === 'true') states.push('checked');
            if (ariaChecked === 'mixed') states.push('indeterminate');
            if (el.matches && el.matches(':disabled')) states.push('disabled');
            if (el.disabled) states.push('disabled');
            let parent = getParentElementAcrossShadow(el);
            while (parent) {
                if (parent.tagName === 'FIELDSET' && parent.disabled) {
                    states.push('disabled');
                    break;
                }
                parent = getParentElementAcrossShadow(parent);
            }
            if (el.matches && el.matches(':required')) states.push('required');
            if (el.matches && el.matches(':read-only') && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) states.push('readonly');
            if (el.readOnly) states.push('readonly');
            if (el.selected) states.push('selected');
            const ariaSelected = el.getAttribute('aria-selected');
            if (ariaSelected === 'true') states.push('selected');
            const ariaExpanded = el.getAttribute('aria-expanded');
            if (ariaExpanded === 'true') states.push('expanded');
            if (ariaExpanded === 'false') states.push('collapsed');
            const ariaPressed = el.getAttribute('aria-pressed');
            if (ariaPressed === 'true') states.push('pressed');
            if (ariaPressed === 'false') states.push('released');
            if (el.getAttribute && el.getAttribute('aria-current')) states.push('current');
            if (el.getAttribute && el.getAttribute('aria-invalid') === 'true') states.push('invalid');
            if (el.getAttribute && el.getAttribute('aria-busy') === 'true') states.push('busy');
        } catch (_) { }
        return Array.from(new Set(states));
    }

    function collectElementDetails(el, role) {
        const details = {};
        try {
            const tag = el.tagName ? el.tagName.toLowerCase() : '';
            const ariaDescription = (el.getAttribute('aria-description') || '').trim();
            if (ariaDescription) {
                details.description = ariaDescription.substring(0, 200);
            }
            const describedBy = getTextFromIds(el.getAttribute('aria-describedby'), el.getRootNode ? el.getRootNode() : document);
            if (describedBy) {
                details.description = details.description
                    ? (details.description + ' ' + describedBy.substring(0, 200)).trim()
                    : describedBy.substring(0, 200);
            }
            if (tag === 'a' && el.hasAttribute('href')) {
                details.url = el.getAttribute('href');
            }
            if ((tag === 'img' || tag === 'svg') && el.hasAttribute('src')) {
                details.src = el.getAttribute('src');
            }
            if (tag === 'input' || tag === 'textarea') {
                const type = (el.getAttribute('type') || 'text').toLowerCase();
                const value = el.value || el.getAttribute('value') || '';
                if (value && (tag !== 'input' || type !== 'password')) {
                    details.value = String(value).substring(0, 200);
                }
                const placeholder = (el.getAttribute('placeholder') || '').trim();
                if (placeholder) {
                    details.placeholder = placeholder.substring(0, 200);
                }
            }
            if (tag === 'select') {
                const selected = Array.from(el.selectedOptions || [])
                    .map(option => getVisibleText(option) || (option.textContent || '').trim())
                    .filter(Boolean);
                if (selected.length) {
                    details.value = selected.join(', ').substring(0, 200);
                }
                const allOptions = Array.from(el.options || []);
                if (allOptions.length > 0 && allOptions.length <= 20) {
                    details.options = allOptions.map(opt => {
                        const label = (opt.textContent || '').trim();
                        const value = opt.value;
                        const disabled = opt.disabled;
                        let optStr = label;
                        if (value && value !== label) {
                            optStr += ' (value: ' + value + ')';
                        }
                        if (disabled) {
                            optStr += ' [disabled]';
                        }
                        return optStr;
                    }).join(', ');
                } else if (allOptions.length > 20) {
                    details.options = allOptions.slice(0, 10).map(opt => {
                        const label = (opt.textContent || '').trim();
                        return label;
                    }).join(', ') + '... (' + allOptions.length + ' total options)';
                }
            }
            if (role === 'combobox' && el.getAttribute('aria-activedescendant')) {
                details.activeDescendant = el.getAttribute('aria-activedescendant');
            }
        } catch (_) { }
        return details;
    }

    function shouldIncludeElement(el) {
        try {
            if (!el || el.getAttribute('aria-hidden') === 'true') {
                return false;
            }
            const tag = el.tagName ? el.tagName.toLowerCase() : '';
            const role = el.getAttribute('role') || getImplicitRole(el);
            const meaningfulTags = new Set(['a', 'button', 'input', 'select', 'textarea', 'img', 'svg', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'nav', 'main', 'header', 'footer', 'section', 'article', 'form', 'label', 'ul', 'ol', 'li', 'p', 'strong', 'em', 'small', 'time', 'option', 'summary', 'details']);
            if (meaningfulTags.has(tag)) {
                return true;
            }
            if (role && role !== 'generic') {
                return true;
            }
            if (el.getAttribute('aria-label') || el.getAttribute('aria-labelledby')) {
                return true;
            }
            if (el.matches && el.matches('[contenteditable="true"]')) {
                return true;
            }
            if (el.querySelector && el.querySelector('a, button, input, select, textarea, [role], [contenteditable="true"]')) {
                return true;
            }
        } catch (_) {
            return true;
        }
        return false;
    }

    const INTERACTIVE_ROLES = new Set([
        'button', 'link', 'textbox', 'checkbox', 'radio', 'combobox', 'listbox',
        'menuitem', 'menuitemcheckbox', 'menuitemradio', 'option', 'slider',
        'spinbutton', 'switch', 'tab', 'treeitem', 'searchbox'
    ]);

    function isValidRef(ref) {
        return typeof ref === 'string' && /^e\\d+$/.test(ref);
    }

    function getMaxRefIndex() {
        let maxIndex = -1;
        const existing = querySelectorAllIncludingOpenShadowRoots('[data-cursor-ref]');
        for (const el of existing) {
            const ref = el.getAttribute('data-cursor-ref');
            if (isValidRef(ref)) {
                const num = parseInt(ref.substring(1), 10);
                if (!Number.isNaN(num)) {
                    maxIndex = Math.max(maxIndex, num);
                }
            }
        }
        return maxIndex;
    }

    let refCounter = 0;

    class RoleNameTracker {
        constructor() {
            this.counts = new Map();
            this.refsByKey = new Map();
        }
        getKey(role, name) {
            return role + '::' + (name || '');
        }
        getNextIndex(role, name) {
            const key = this.getKey(role, name);
            const current = this.counts.get(key) || 0;
            this.counts.set(key, current + 1);
            return current;
        }
        trackRef(role, name, ref) {
            const key = this.getKey(role, name);
            const refs = this.refsByKey.get(key) || [];
            refs.push(ref);
            this.refsByKey.set(key, refs);
        }
        getDuplicateKeys() {
            const duplicates = new Set();
            for (const [key, refs] of this.refsByKey) {
                if (refs.length > 1) {
                    duplicates.add(key);
                }
            }
            return duplicates;
        }
    }

    function buildInteractiveSnapshot() {
        const tracker = new RoleNameTracker();
        const elements = [];
        const usedRefs = new Set();
        const interactiveSet = new Set();

        const interactiveSelector = [
            'input', 'textarea', 'select', 'button', 'a[href]',
            '[role="button"]', '[role="link"]', '[role="textbox"]', '[role="checkbox"]',
            '[role="radio"]', '[role="combobox"]', '[role="listbox"]', '[role="menuitem"]',
            '[role="menuitemcheckbox"]', '[role="menuitemradio"]', '[role="option"]',
            '[role="slider"]', '[role="spinbutton"]', '[role="switch"]', '[role="tab"]',
            '[role="treeitem"]', '[role="searchbox"]', '[contenteditable="true"]',
            'summary', '[tabindex]:not([tabindex="-1"])'
        ].join(', ');

        const allInteractive = querySelectorAllIncludingOpenShadowRoots(interactiveSelector);

        for (const el of allInteractive) {
            if (el.getAttribute('aria-hidden') === 'true') continue;
            const style = window.getComputedStyle(el);
            if (style.display === 'none' || style.visibility === 'hidden') continue;
            const rect = el.getBoundingClientRect();
            if (rect.width === 0 && rect.height === 0) continue;

            const tag = el.tagName.toLowerCase();
            interactiveSet.add(el);
            const roleAttr = el.getAttribute('role') || '';
            const implicitRole = getImplicitRole(el);
            const role = roleAttr || implicitRole || 'generic';

            if (!INTERACTIVE_ROLES.has(role) && role !== 'generic') continue;

            const name = computeAccessibleName(el, role);
            const existingRef = el.getAttribute('data-cursor-ref');
            let ref = null;
            if (isValidRef(existingRef) && !usedRefs.has(existingRef)) {
                ref = existingRef;
            } else {
                ref = 'e' + refCounter++;
            }
            el.setAttribute('data-cursor-ref', ref);
            usedRefs.add(ref);

            const nth = tracker.getNextIndex(role, name);
            tracker.trackRef(role, name, ref);

            const node = { ref, role, name, tag };

            const states = collectElementStates(el, role);
            if (states.length) node.states = states;

            const details = collectElementDetails(el, role);
            for (const key in details) {
                if (details[key] !== undefined && details[key] !== '') {
                    node[key] = details[key];
                }
            }

            node._nth = nth;

            elements.push(node);
        }

        const duplicateKeys = tracker.getDuplicateKeys();
        for (const el of elements) {
            const key = tracker.getKey(el.role, el.name);
            if (duplicateKeys.has(key) && el._nth > 0) {
                el.nth = el._nth;
            }
            delete el._nth;
        }

        return { elements, tracker, usedRefs, interactiveSet };
    }

    function buildContentElements(interactiveSet, usedRefs) {
        const elements = [];
        const contentSelector = [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'label', '[role="heading"]', 'p', 'li',
            'article', 'nav', 'main', 'header', 'footer', 'section',
            '[role="article"]', '[role="region"]', '[role="main"]', '[role="navigation"]',
            '[role="cell"]', '[role="gridcell"]', '[role="columnheader"]', '[role="rowheader"]',
            '[role="listitem"]'
        ].join(', ');
        const allContent = querySelectorAllIncludingOpenShadowRoots(contentSelector);

        for (const el of allContent) {
            if (el.getAttribute('aria-hidden') === 'true') continue;
            if (interactiveSet.has(el)) continue;

            const style = window.getComputedStyle(el);
            if (style.display === 'none' || style.visibility === 'hidden') continue;

            const tag = el.tagName.toLowerCase();
            const role = el.getAttribute('role') || getImplicitRole(el);
            const name = computeAccessibleName(el, role);

            if (!name) continue;

            const existingRef = el.getAttribute('data-cursor-ref');
            let ref = null;
            if (isValidRef(existingRef) && !usedRefs.has(existingRef)) {
                ref = existingRef;
            } else {
                ref = 'e' + refCounter++;
            }
            el.setAttribute('data-cursor-ref', ref);
            usedRefs.add(ref);

            const node = { ref, role, name, tag };

            if (role === 'heading') {
                const ariaLevel = parseInt(el.getAttribute('aria-level') || '', 10);
                const tagLevelMatch = tag.match(/^h([1-6])$/);
                const tagLevel = tagLevelMatch ? parseInt(tagLevelMatch[1], 10) : undefined;
                const level = !Number.isNaN(ariaLevel) ? ariaLevel : tagLevel;
                if (level) node.level = level;
            }

            elements.push(node);
        }

        return elements;
    }

    refCounter = getMaxRefIndex() + 1;

    const { elements: interactiveElements, tracker, usedRefs, interactiveSet } = buildInteractiveSnapshot();
    const contentElements = interactiveOnly ? [] : buildContentElements(interactiveSet, usedRefs);

    const allElements = [...interactiveElements, ...contentElements];

    querySelectorAllIncludingOpenShadowRoots('[data-cursor-ref]').forEach(el => {
        const ref = el.getAttribute('data-cursor-ref');
        if (!isValidRef(ref) || !usedRefs.has(ref)) {
            el.removeAttribute('data-cursor-ref');
        }
    });

    const tree = {
        role: 'document',
        ref: 'root',
        name: document.title || '',
        children: allElements
    };

    return {
        tree,
        stats: {
            totalRefs: allElements.length,
            interactiveRefs: interactiveElements.length,
            maxDepth: maxDepth
        }
    };
}
`, d = require("fs/promises"), u = require("path"), p = require("os");
  function f() {
  }
  function m(t2, e2, n2, r2, o2) {
    for (var s2, i2 = []; e2; ) i2.push(e2), s2 = e2.previousComponent, delete e2.previousComponent, e2 = s2;
    i2.reverse();
    for (var a2 = 0, l2 = i2.length, c2 = 0, d2 = 0; a2 < l2; a2++) {
      var u2 = i2[a2];
      if (u2.removed) {
        if (u2.value = t2.join(r2.slice(d2, d2 + u2.count)), d2 += u2.count, a2 && i2[a2 - 1].added) {
          var p2 = i2[a2 - 1];
          i2[a2 - 1] = i2[a2], i2[a2] = p2;
        }
      } else {
        if (!u2.added && o2) {
          var f2 = n2.slice(c2, c2 + u2.count);
          f2 = f2.map(function(t3, e3) {
            var n3 = r2[d2 + e3];
            return n3.length > t3.length ? n3 : t3;
          }), u2.value = t2.join(f2);
        } else u2.value = t2.join(n2.slice(c2, c2 + u2.count));
        c2 += u2.count, u2.added || (d2 += u2.count);
      }
    }
    var m2 = i2[l2 - 1];
    return l2 > 1 && "string" == typeof m2.value && (m2.added || m2.removed) && t2.equals("", m2.value) && (i2[l2 - 2].value += m2.value, i2.pop()), i2;
  }
  f.prototype = { diff: function(t2, e2) {
    var n2, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = r2.callback;
    "function" == typeof r2 && (o2 = r2, r2 = {}), this.options = r2;
    var s2 = this;
    function i2(t3) {
      return o2 ? (setTimeout(function() {
        o2(void 0, t3);
      }, 0), true) : t3;
    }
    t2 = this.castInput(t2), e2 = this.castInput(e2), t2 = this.removeEmpty(this.tokenize(t2));
    var a2 = (e2 = this.removeEmpty(this.tokenize(e2))).length, l2 = t2.length, c2 = 1, d2 = a2 + l2;
    r2.maxEditLength && (d2 = Math.min(d2, r2.maxEditLength));
    var u2 = null !== (n2 = r2.timeout) && void 0 !== n2 ? n2 : 1 / 0, p2 = Date.now() + u2, f2 = [{ oldPos: -1, lastComponent: void 0 }], h2 = this.extractCommon(f2[0], e2, t2, 0);
    if (f2[0].oldPos + 1 >= l2 && h2 + 1 >= a2) return i2([{ value: this.join(e2), count: e2.length }]);
    var g2 = -1 / 0, w2 = 1 / 0;
    function b2() {
      for (var n3 = Math.max(g2, -c2); n3 <= Math.min(w2, c2); n3 += 2) {
        var r3 = void 0, o3 = f2[n3 - 1], d3 = f2[n3 + 1];
        o3 && (f2[n3 - 1] = void 0);
        var u3 = false;
        if (d3) {
          var p3 = d3.oldPos - n3;
          u3 = d3 && 0 <= p3 && p3 < a2;
        }
        var b3 = o3 && o3.oldPos + 1 < l2;
        if (u3 || b3) {
          if (r3 = !b3 || u3 && o3.oldPos + 1 < d3.oldPos ? s2.addToPath(d3, true, void 0, 0) : s2.addToPath(o3, void 0, true, 1), h2 = s2.extractCommon(r3, e2, t2, n3), r3.oldPos + 1 >= l2 && h2 + 1 >= a2) return i2(m(s2, r3.lastComponent, e2, t2, s2.useLongestToken));
          f2[n3] = r3, r3.oldPos + 1 >= l2 && (w2 = Math.min(w2, n3 - 1)), h2 + 1 >= a2 && (g2 = Math.max(g2, n3 + 1));
        } else f2[n3] = void 0;
      }
      c2++;
    }
    if (o2) !(function t3() {
      setTimeout(function() {
        if (c2 > d2 || Date.now() > p2) return o2();
        b2() || t3();
      }, 0);
    })();
    else for (; c2 <= d2 && Date.now() <= p2; ) {
      var y2 = b2();
      if (y2) return y2;
    }
  }, addToPath: function(t2, e2, n2, r2) {
    var o2 = t2.lastComponent;
    return o2 && o2.added === e2 && o2.removed === n2 ? { oldPos: t2.oldPos + r2, lastComponent: { count: o2.count + 1, added: e2, removed: n2, previousComponent: o2.previousComponent } } : { oldPos: t2.oldPos + r2, lastComponent: { count: 1, added: e2, removed: n2, previousComponent: o2 } };
  }, extractCommon: function(t2, e2, n2, r2) {
    for (var o2 = e2.length, s2 = n2.length, i2 = t2.oldPos, a2 = i2 - r2, l2 = 0; a2 + 1 < o2 && i2 + 1 < s2 && this.equals(e2[a2 + 1], n2[i2 + 1]); ) a2++, i2++, l2++;
    return l2 && (t2.lastComponent = { count: l2, previousComponent: t2.lastComponent }), t2.oldPos = i2, a2;
  }, equals: function(t2, e2) {
    return this.options.comparator ? this.options.comparator(t2, e2) : t2 === e2 || this.options.ignoreCase && t2.toLowerCase() === e2.toLowerCase();
  }, removeEmpty: function(t2) {
    for (var e2 = [], n2 = 0; n2 < t2.length; n2++) t2[n2] && e2.push(t2[n2]);
    return e2;
  }, castInput: function(t2) {
    return t2;
  }, tokenize: function(t2) {
    return t2.split("");
  }, join: function(t2) {
    return t2.join("");
  } };
  new f();
  var h = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/, g = /\S/, w = new f();
  w.equals = function(t2, e2) {
    return this.options.ignoreCase && (t2 = t2.toLowerCase(), e2 = e2.toLowerCase()), t2 === e2 || this.options.ignoreWhitespace && !g.test(t2) && !g.test(e2);
  }, w.tokenize = function(t2) {
    for (var e2 = t2.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), n2 = 0; n2 < e2.length - 1; n2++) !e2[n2 + 1] && e2[n2 + 2] && h.test(e2[n2]) && h.test(e2[n2 + 2]) && (e2[n2] += e2[n2 + 2], e2.splice(n2 + 1, 2), n2--);
    return e2;
  };
  var b = new f();
  b.tokenize = function(t2) {
    this.options.stripTrailingCr && (t2 = t2.replace(/\r\n/g, "\n"));
    var e2 = [], n2 = t2.split(/(\n|\r\n)/);
    n2[n2.length - 1] || n2.pop();
    for (var r2 = 0; r2 < n2.length; r2++) {
      var o2 = n2[r2];
      r2 % 2 && !this.options.newlineIsToken ? e2[e2.length - 1] += o2 : (this.options.ignoreWhitespace && (o2 = o2.trim()), e2.push(o2));
    }
    return e2;
  };
  var y = new f();
  y.tokenize = function(t2) {
    return t2.split(/(\S.+?[.!?])(?=\s+|$)/);
  };
  var v = new f();
  function x(t2) {
    return x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
      return typeof t3;
    } : function(t3) {
      return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
    }, x(t2);
  }
  function E(t2) {
    return (function(t3) {
      if (Array.isArray(t3)) return k(t3);
    })(t2) || (function(t3) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t3)) return Array.from(t3);
    })(t2) || (function(t3, e2) {
      if (!t3) return;
      if ("string" == typeof t3) return k(t3, e2);
      var n2 = Object.prototype.toString.call(t3).slice(8, -1);
      "Object" === n2 && t3.constructor && (n2 = t3.constructor.name);
      if ("Map" === n2 || "Set" === n2) return Array.from(t3);
      if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return k(t3, e2);
    })(t2) || (function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function k(t2, e2) {
    (null == e2 || e2 > t2.length) && (e2 = t2.length);
    for (var n2 = 0, r2 = new Array(e2); n2 < e2; n2++) r2[n2] = t2[n2];
    return r2;
  }
  v.tokenize = function(t2) {
    return t2.split(/([{}:;,]|\s+)/);
  };
  var S = Object.prototype.toString, R = new f();
  function C(t2, e2, n2, r2, o2) {
    var s2, i2;
    for (e2 = e2 || [], n2 = n2 || [], r2 && (t2 = r2(o2, t2)), s2 = 0; s2 < e2.length; s2 += 1) if (e2[s2] === t2) return n2[s2];
    if ("[object Array]" === S.call(t2)) {
      for (e2.push(t2), i2 = new Array(t2.length), n2.push(i2), s2 = 0; s2 < t2.length; s2 += 1) i2[s2] = C(t2[s2], e2, n2, r2, o2);
      return e2.pop(), n2.pop(), i2;
    }
    if (t2 && t2.toJSON && (t2 = t2.toJSON()), "object" === x(t2) && null !== t2) {
      e2.push(t2), i2 = {}, n2.push(i2);
      var a2, l2 = [];
      for (a2 in t2) t2.hasOwnProperty(a2) && l2.push(a2);
      for (l2.sort(), s2 = 0; s2 < l2.length; s2 += 1) i2[a2 = l2[s2]] = C(t2[a2], e2, n2, r2, a2);
      e2.pop(), n2.pop();
    } else i2 = t2;
    return i2;
  }
  R.useLongestToken = true, R.tokenize = b.tokenize, R.castInput = function(t2) {
    var e2 = this.options, n2 = e2.undefinedReplacement, r2 = e2.stringifyReplacer, o2 = void 0 === r2 ? function(t3, e3) {
      return void 0 === e3 ? n2 : e3;
    } : r2;
    return "string" == typeof t2 ? t2 : JSON.stringify(C(t2, null, null, o2), o2, "  ");
  }, R.equals = function(t2, e2) {
    return f.prototype.equals.call(R, t2.replace(/,([\r\n])/g, "$1"), e2.replace(/,([\r\n])/g, "$1"));
  };
  var T = new f();
  function I(t2, e2, n2, r2, o2, s2, i2) {
    i2 || (i2 = {}), void 0 === i2.context && (i2.context = 4);
    var a2 = (function(t3, e3, n3) {
      return b.diff(t3, e3, n3);
    })(n2, r2, i2);
    if (a2) {
      a2.push({ value: "", lines: [] });
      for (var l2 = [], c2 = 0, d2 = 0, u2 = [], p2 = 1, f2 = 1, m2 = function(t3) {
        var e3 = a2[t3], o3 = e3.lines || e3.value.replace(/\n$/, "").split("\n");
        if (e3.lines = o3, e3.added || e3.removed) {
          var s3;
          if (!c2) {
            var m3 = a2[t3 - 1];
            c2 = p2, d2 = f2, m3 && (u2 = i2.context > 0 ? g2(m3.lines.slice(-i2.context)) : [], c2 -= u2.length, d2 -= u2.length);
          }
          (s3 = u2).push.apply(s3, E(o3.map(function(t4) {
            return (e3.added ? "+" : "-") + t4;
          }))), e3.added ? f2 += o3.length : p2 += o3.length;
        } else {
          if (c2) if (o3.length <= 2 * i2.context && t3 < a2.length - 2) {
            var h3;
            (h3 = u2).push.apply(h3, E(g2(o3)));
          } else {
            var w2, b2 = Math.min(o3.length, i2.context);
            (w2 = u2).push.apply(w2, E(g2(o3.slice(0, b2))));
            var y2 = { oldStart: c2, oldLines: p2 - c2 + b2, newStart: d2, newLines: f2 - d2 + b2, lines: u2 };
            if (t3 >= a2.length - 2 && o3.length <= i2.context) {
              var v2 = /\n$/.test(n2), x2 = /\n$/.test(r2), k2 = 0 == o3.length && u2.length > y2.oldLines;
              !v2 && k2 && n2.length > 0 && u2.splice(y2.oldLines, 0, "\\ No newline at end of file"), (v2 || k2) && x2 || u2.push("\\ No newline at end of file");
            }
            l2.push(y2), c2 = 0, d2 = 0, u2 = [];
          }
          p2 += o3.length, f2 += o3.length;
        }
      }, h2 = 0; h2 < a2.length; h2++) m2(h2);
      return { oldFileName: t2, newFileName: e2, oldHeader: o2, newHeader: s2, hunks: l2 };
    }
    function g2(t3) {
      return t3.map(function(t4) {
        return " " + t4;
      });
    }
  }
  function A(t2) {
    if (Array.isArray(t2)) return t2.map(A).join("\n");
    var e2 = [];
    t2.oldFileName == t2.newFileName && e2.push("Index: " + t2.oldFileName), e2.push("==================================================================="), e2.push("--- " + t2.oldFileName + (void 0 === t2.oldHeader ? "" : "	" + t2.oldHeader)), e2.push("+++ " + t2.newFileName + (void 0 === t2.newHeader ? "" : "	" + t2.newHeader));
    for (var n2 = 0; n2 < t2.hunks.length; n2++) {
      var r2 = t2.hunks[n2];
      0 === r2.oldLines && (r2.oldStart -= 1), 0 === r2.newLines && (r2.newStart -= 1), e2.push("@@ -" + r2.oldStart + "," + r2.oldLines + " +" + r2.newStart + "," + r2.newLines + " @@"), e2.push.apply(e2, r2.lines);
    }
    return e2.join("\n") + "\n";
  }
  function D(t2, e2, n2, r2, o2, s2) {
    return (function(t3, e3, n3, r3, o3, s3, i2) {
      return A(I(t3, e3, n3, r3, o3, s3, i2));
    })(t2, t2, e2, n2, r2, o2, s2);
  }
  let _;
  function $() {
    if (void 0 === _) {
      const t2 = (async function() {
        const [{ createJimp: t3 }, { default: e2 }, { default: n2 }, { default: o2, msBmp: s2 }, { default: i2 }, { default: a2 }, { methods: l2 }] = await Promise.all([Promise.all([r.e(746), r.e(716), r.e(273)]).then(r.bind(r, 5273)), r.e(621).then(r.bind(r, 7621)), r.e(502).then(r.bind(r, 6502)), Promise.all([r.e(716), r.e(691)]).then(r.bind(r, 3691)), r.e(46).then(r.bind(r, 3046)), r.e(928).then(r.bind(r, 9928)), Promise.all([r.e(746), r.e(853)]).then(r.bind(r, 5853))]);
        return t3({ formats: [e2, n2, o2, s2, i2, a2], plugins: [l2] });
      })().catch((e2) => {
        throw _ === t2 && (_ = void 0), e2;
      });
      _ = t2;
    }
    return _;
  }
  T.tokenize = function(t2) {
    return t2.slice();
  }, T.join = T.removeEmpty = function(t2) {
    return t2;
  };
  const P = 1024, N = 1048576, M = /* @__PURE__ */ new Map();
  function O(t2) {
    const e2 = t2.match(/^data:([^;]+);base64,(.+)$/);
    if (e2) return { mimeType: e2[1], base64Data: e2[2] };
  }
  function L(t2) {
    return /^image\//i.test(t2);
  }
  function B(t2) {
    const e2 = O(t2);
    if (e2 && L(e2.mimeType)) return { type: "image", data: e2.base64Data, mimeType: e2.mimeType };
  }
  async function F(t2, e2) {
    const n2 = O(t2);
    if (n2 && L(n2.mimeType)) try {
      const r2 = Buffer.from(n2.base64Data, "base64"), o2 = await $(), s2 = await o2.read(r2), i2 = (function(t3, e3) {
        return (function(t4) {
          switch (t4) {
            case "image/png":
            case "image/bmp":
            case "image/tiff":
            case "image/x-ms-bmp":
            case "image/gif":
            case "image/jpeg":
              return true;
            default:
              return false;
          }
        })(t3.mime) ? t3.mime : "image/jpeg" === e3 ? e3 : "image/png";
      })(s2, n2.mimeType), a2 = s2.width, l2 = s2.height, c2 = (function(t3, e3) {
        let n3 = t3, r3 = e3;
        return t3 > e3 ? t3 > P && (n3 = P, r3 = Math.max(1, Math.round(e3 * P / t3))) : e3 > P && (r3 = P, n3 = Math.max(1, Math.round(t3 * P / e3))), { width: n3, height: r3 };
      })(a2, l2), d2 = c2.width !== a2 || c2.height !== l2;
      let u2 = r2, p2 = a2, f2 = l2;
      if (d2 || r2.length > N) {
        const t3 = s2.clone();
        for (d2 && t3.resize({ w: c2.width, h: c2.height }), u2 = await t3.getBuffer(i2), p2 = t3.width, f2 = t3.height; u2.length > N && p2 > 1 && f2 > 1; ) p2 = Math.max(1, Math.round(0.8 * p2)), f2 = Math.max(1, Math.round(0.8 * f2)), t3.resize({ w: p2, h: f2 }), u2 = await t3.getBuffer(i2);
      }
      return { originalDataUrl: t2, imageContent: { type: "image", data: u2.toString("base64"), mimeType: i2 }, metadata: { ...e2, originalImageWidth: a2, originalImageHeight: l2, sentImageWidth: p2, sentImageHeight: f2, mimeType: i2 } };
    } catch {
      return;
    }
  }
  function Y(t2) {
    M.delete(t2);
  }
  const X = 20480, V = u.join(p.homedir(), ".cursor", "browser-logs"), H = "cursor.browserView.getURL", j = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
  function U(t2) {
    if (!t2) return t2;
    const e2 = t2.trim();
    return e2.startsWith("@") ? e2.substring(1) : e2.startsWith("ref=") ? e2.substring(4) : e2;
  }
  const q = `
function getParentElementAcrossShadow(element) {
	if (!element) return null;
	if (element.parentElement) return element.parentElement;
	const root = element.getRootNode ? element.getRootNode() : null;
	if (root && root.host && root.host.nodeType === Node.ELEMENT_NODE) {
		return root.host;
	}
	return null;
}

function composedContains(ancestor, node) {
	let current = node;
	while (current) {
		if (current === ancestor) {
			return true;
		}
		current = getParentElementAcrossShadow(current);
	}
	return false;
}

function getDeepElementFromPoint(root, x, y) {
	if (!root || typeof root.elementFromPoint !== 'function') {
		return null;
	}
	let element = root.elementFromPoint(x, y);
	while (element && element.shadowRoot && element.shadowRoot.mode === 'open' && typeof element.shadowRoot.elementFromPoint === 'function') {
		const nested = element.shadowRoot.elementFromPoint(x, y);
		if (!nested || nested === element) {
			break;
		}
		element = nested;
	}
	return element;
}

function walkComposedElements(root, visitor) {
	function visitContainer(container) {
		const children = container && container.children ? Array.from(container.children) : [];
		for (const child of children) {
			if (visitElement(child)) {
				return true;
			}
		}
		return false;
	}

	function visitElement(element) {
		if (visitor(element)) {
			return true;
		}
		if (element.shadowRoot && element.shadowRoot.mode === 'open') {
			if (visitContainer(element.shadowRoot)) {
				return true;
			}
		}
		return visitContainer(element);
	}

	return visitContainer(root);
}

function querySelectorAllIncludingOpenShadowRoots(selector) {
	const matches = [];
	walkComposedElements(document, (element) => {
		try {
			if (element.matches && element.matches(selector)) {
				matches.push(element);
			}
		} catch (_) { }
		return false;
	});
	return matches;
}

function findElementByRef(ref) {
	let element = null;
	walkComposedElements(document, (candidate) => {
		if (candidate.getAttribute && candidate.getAttribute('data-cursor-ref') === ref) {
			element = candidate;
			return true;
		}
		return false;
	});
	if (element) {
		return { element, method: 'ref-attribute' };
	}
	return { element: null, method: 'not-found' };
}

function getElementDescription(element) {
	if (!element) return '';
	const tag = element.tagName?.toLowerCase() || '';
	const role = element.getAttribute('role') || '';
	const ariaLabel = element.getAttribute('aria-label') || '';
	const text = (element.textContent || '').trim().substring(0, 50);
	const parts = [];
	if (tag) parts.push(tag);
	if (role) parts.push('role=' + role);
	if (ariaLabel) parts.push('aria-label="' + ariaLabel + '"');
	else if (text) parts.push('text="' + text + '"');
	return parts.length > 0 ? ' (' + parts.join(', ') + ')' : '';
}

function assertDescriptionMatches(element, ref, expectedDescription) {
	const actualDescription = getElementDescription(element);
	if (expectedDescription) {
		const expectedLower = expectedDescription.toLowerCase();
		const actualLower = actualDescription.toLowerCase();

		const actualTextMatch = actualLower.match(/text="([^"]+)"/);
		const actualText = actualTextMatch ? actualTextMatch[1] : '';

		const actualTag = element.tagName?.toLowerCase() || '';
		const actualRole = element.getAttribute?.('role')?.toLowerCase() || '';

		const expectedMentionsButton = expectedLower.includes('button');
		const actualIsButton = actualTag === 'button' || actualRole === 'button' || actualLower.includes('button');

		if (expectedMentionsButton && !actualIsButton) {
			throw new Error('Stale element reference: ' + ref + ' expected a button but found ' + actualDescription + '. The page may have changed. Take a new snapshot.');
		}

		const expectedWords = expectedLower.replace(/button|link|input|checkbox|radio/g, '').trim().split(/\\s+/).filter(w => w.length > 2);
		if (expectedWords.length > 0 && actualText) {
			const hasMatchingWord = expectedWords.some(word => actualText.includes(word));
			if (!hasMatchingWord) {
				throw new Error('Stale element reference: ' + ref + ' now points to' + actualDescription + ' but was expected to be "' + expectedDescription + '". The page may have changed. Take a new snapshot.');
			}
		}
	}
}

function validateElementForInteraction(element, ref, action, expectedDescription) {
	if (!element) {
		throw new Error('Element not found: ' + ref + '. Take a snapshot to get updated refs.');
	}

	assertDescriptionMatches(element, ref, expectedDescription);

	const actualDescription = getElementDescription(element);

	const rect = element.getBoundingClientRect();
	if (rect.width === 0 && rect.height === 0) {
		throw new Error('Element ' + ref + actualDescription + ' is not visible (zero dimensions). It may be hidden or collapsed.');
	}

	const style = window.getComputedStyle(element);
	if (style.display === 'none') {
		throw new Error('Element ' + ref + actualDescription + ' is hidden (display: none).');
	}
	if (style.visibility === 'hidden') {
		throw new Error('Element ' + ref + actualDescription + ' is hidden (visibility: hidden).');
	}
	if (parseFloat(style.opacity) === 0) {
		throw new Error('Element ' + ref + actualDescription + ' is not visible (opacity: 0). Wait for it to appear.');
	}
	if (style.pointerEvents === 'none' && action !== 'type' && action !== 'fill') {
		throw new Error('Element ' + ref + actualDescription + ' has pointer-events: none and cannot receive ' + action + ' interactions. Try clicking a parent element or waiting for a loading state to complete.');
	}

	if (element.disabled) {
		throw new Error('Element ' + ref + actualDescription + ' is disabled and cannot be interacted with. Enable the element first or interact with a different element.');
	}
	let parent = getParentElementAcrossShadow(element);
	while (parent) {
		if (parent.tagName === 'FIELDSET' && parent.disabled) {
			throw new Error('Element ' + ref + actualDescription + ' is inside a disabled fieldset and cannot be interacted with. Enable the fieldset first or interact with elements outside it.');
		}
		parent = getParentElementAcrossShadow(parent);
	}

	if (action === 'type' || action === 'fill') {
		const tag = element.tagName?.toLowerCase();
		const isContentEditable = element.isContentEditable || element.getAttribute('contenteditable') === 'true';
		const isReadonly = element.readOnly || element.getAttribute('readonly') !== null;
		const isTextInput = (tag === 'input' && !['button', 'submit', 'reset', 'checkbox', 'radio', 'file', 'image', 'hidden'].includes(element.type?.toLowerCase())) ||
			tag === 'textarea' ||
			isContentEditable;
		if (!isTextInput) {
			throw new Error('Element ' + ref + actualDescription + ' is not a text input, textarea, or contenteditable element. Use browser_cdp with DOM and Input commands if you want to interact with this element.');
		}
		if (isReadonly && !isContentEditable) {
			throw new Error('Element ' + ref + actualDescription + ' is readonly and cannot be modified. The value is set programmatically and cannot be changed by user input.');
		}
	}

	return true;
}

function previewNode(element) {
	if (!element) return 'null';
	const tag = element.tagName?.toLowerCase() || 'unknown';
	const attrs = [];
	if (element.id) attrs.push('id="' + element.id + '"');
	if (element.className && typeof element.className === 'string') {
		const classes = element.className.trim().split(/\\s+/).slice(0, 2).join(' ');
		if (classes) attrs.push('class="' + classes + '"');
	}
	if (element.getAttribute && element.getAttribute('role')) {
		attrs.push('role="' + element.getAttribute('role') + '"');
	}
	if (element.getAttribute && element.getAttribute('data-cursor-ref')) {
		attrs.push('ref="' + element.getAttribute('data-cursor-ref') + '"');
	}
	const text = (element.textContent || '').trim().substring(0, 30);
	const textPart = text ? '>' + text + '...' : '';
	return '<' + tag + (attrs.length ? ' ' + attrs.join(' ') : '') + textPart + '>';
}

function expectHitTarget(hitPoint, targetElement, targetRef) {
	const doc = hitPoint.ownerDocument || document;
	let hitElement = getDeepElementFromPoint(doc, hitPoint.x, hitPoint.y);

	if (!hitElement) {
		return {
			hit: false,
			interceptedBy: 'nothing (coordinates outside viewport)',
			error: 'Click coordinates (' + hitPoint.x + ', ' + hitPoint.y + ') are outside the visible viewport.',
			suggestion: 'The element may be scrolled out of view. Use browser_cdp with Runtime.evaluate or DOM commands to scroll it into view first.'
		};
	}

	if (hitElement === targetElement || composedContains(targetElement, hitElement)) {
		return { hit: true };
	}

	if (composedContains(targetElement, getParentElementAcrossShadow(hitElement))) {
		return { hit: true };
	}

	function isScrollContainer(el) {
		const style = window.getComputedStyle(el);
		const overflowY = style.overflowY;
		const overflowX = style.overflowX;
		return (overflowY === 'auto' || overflowY === 'scroll' || overflowX === 'auto' || overflowX === 'scroll') &&
			(el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth);
	}

	function isElementClippedByContainer(el, container) {
		const elRect = el.getBoundingClientRect();
		const containerRect = container.getBoundingClientRect();
		return elRect.top < containerRect.top || elRect.bottom > containerRect.bottom ||
			elRect.left < containerRect.left || elRect.right > containerRect.right;
	}

	let current = hitElement;
	while (current && current !== targetElement && current !== document.body) {
		const tagName = current.tagName?.toLowerCase() || '';
		const role = current.getAttribute?.('role') || '';
		const style = window.getComputedStyle(current);
		const position = style.position;
		const zIndex = parseInt(style.zIndex, 10);
		const hasHighZIndex = !isNaN(zIndex) && zIndex > 100;
		const isFixed = position === 'fixed' || position === 'absolute';

		const isDialog = tagName === 'dialog' || role === 'dialog' || role === 'alertdialog';
		const isModal = current.getAttribute?.('aria-modal') === 'true';
		const isIframe = tagName === 'iframe';
		const isNavOrHeader = tagName === 'nav' || tagName === 'header' || role === 'navigation' || role === 'banner';

		if (isIframe) {
			const hitRef = current.getAttribute('data-cursor-ref');
			const preview = previewNode(current);
			return {
				hit: false,
				interceptedBy: preview,
				interceptedRef: hitRef || undefined,
				blockingType: 'iframe',
				error: 'Click would hit an iframe instead of the target element.',
				suggestion: 'The target is behind an iframe. Iframe content cannot be interacted with directly. ' + (hitRef ? 'The iframe has ref ' + hitRef + '.' : 'Navigate to the iframe URL directly if you need to interact with its content.')
			};
		}

		if (isDialog || isModal) {
			const hitRef = current.getAttribute('data-cursor-ref');
			const preview = previewNode(current);
			return {
				hit: false,
				interceptedBy: preview,
				interceptedRef: hitRef || undefined,
				blockingType: 'modal',
				error: 'Click would hit a modal/dialog instead of the target element.',
				suggestion: 'A modal or dialog is blocking the target. Close it first with browser_cdp using Runtime.evaluate or by clicking its close button.'
			};
		}

		if (isScrollContainer(current)) {
			if (targetElement.closest && composedContains(current, targetElement)) {
				if (isElementClippedByContainer(targetElement, current)) {
					const hitRef = current.getAttribute('data-cursor-ref');
					const preview = previewNode(current);
					return {
						hit: false,
						interceptedBy: preview,
						interceptedRef: hitRef || undefined,
						blockingType: 'scroll-container',
						error: 'The target element is clipped by a scroll container (' + preview + '). The element exists but is not visible within its scrollable parent.',
						suggestion: 'Use browser_cdp with Runtime.evaluate to scroll the element into view within its container.' + (hitRef ? ' The scroll container has ref ' + hitRef + '.' : '')
					};
				}
			}
		}

		if (isNavOrHeader && isFixed) {
			const hitRef = current.getAttribute('data-cursor-ref');
			const preview = previewNode(current);
			return {
				hit: false,
				interceptedBy: preview,
				interceptedRef: hitRef || undefined,
				blockingType: 'fixed-header',
				error: 'Click would hit a fixed header/navigation bar instead of the target.',
				suggestion: 'A fixed header/navigation bar is blocking the target. Try scrolling the page so the target is not behind the fixed element, or click directly on the header element if that is the intent.'
			};
		}

		if (hasHighZIndex && isFixed && !isScrollContainer(current)) {
			const hitRef = current.getAttribute('data-cursor-ref');
			const preview = previewNode(current);
			return {
				hit: false,
				interceptedBy: preview,
				interceptedRef: hitRef || undefined,
				blockingType: 'overlay',
				error: 'Click would hit an overlay element (' + preview + ') instead of the target.',
				suggestion: hitRef
					? 'An overlay (ref: ' + hitRef + ') is blocking the target. Either click that element directly, or dismiss/close the overlay first.'
					: 'An overlay element is blocking the target. Close or dismiss this overlay before interacting with elements behind it. Try pressing Escape or looking for a close button.'
			};
		}

		current = getParentElementAcrossShadow(current);
	}

	if (current !== targetElement && !composedContains(targetElement, hitElement)) {
		const hitRef = hitElement.getAttribute('data-cursor-ref');
		const preview = previewNode(hitElement);
		const targetRect = targetElement.getBoundingClientRect();
		const isTargetOffscreen = targetRect.bottom < 0 || targetRect.top > window.innerHeight ||
			targetRect.right < 0 || targetRect.left > window.innerWidth;

		if (isTargetOffscreen) {
			return {
				hit: false,
				interceptedBy: preview,
				interceptedRef: hitRef || undefined,
				blockingType: 'offscreen',
				error: 'The target element is outside the visible viewport.',
				suggestion: 'Use browser_cdp with Runtime.evaluate to bring the target into view first.'
			};
		}

		const hitElementStyle = window.getComputedStyle(hitElement);
		const hitTagName = hitElement.tagName?.toLowerCase() || '';
		const isHitScrollContainer = isScrollContainer(hitElement);

		if (isHitScrollContainer && composedContains(hitElement, targetElement)) {
			return {
				hit: false,
				interceptedBy: preview,
				interceptedRef: hitRef || undefined,
				blockingType: 'scroll-container',
				error: 'The target is inside a scroll container but not in the visible scroll area. The click would hit the scroll container instead.',
				suggestion: 'Use browser_cdp with Runtime.evaluate to scroll the element into view within its container.'
			};
		}

		return {
			hit: false,
			interceptedBy: preview,
			interceptedRef: hitRef || undefined,
			blockingType: 'sibling',
			error: 'Click would hit a different element (' + preview + ') instead of the target.',
			suggestion: hitRef
				? 'The element at the click position has ref ' + hitRef + '. Click that ref if it is the intended target, or take a snapshot to see updated element positions.'
				: 'Another element is at the click position. Take a snapshot to see the current page layout and find the correct element ref.'
		};
	}

	return { hit: true };
}
`, J = [{ patterns: ["element not found", "cannot find"], getMessage: (t2) => "Element not found" + (t2?.ref ? `: ${t2.ref}` : ""), suggestion: "Take a snapshot first to see the current page state and available element refs. The refs might have changed since the last snapshot.", recovery: "browser_snapshot" }, { patterns: ["is not a text input", "use click instead"], getMessage: (t2) => "Element is not a text input" + (t2?.ref ? `: ${t2.ref}` : ""), suggestion: "This element cannot accept text input. If you need to interact with it, use browser_cdp with DOM and Runtime.evaluate commands. If you need to type, find the actual input element.", recovery: "browser_cdp or browser_snapshot to find correct input" }, { patterns: ["timeout", "timed out"], getMessage: () => "Operation timed out", suggestion: "The page might be slow to respond. Try waiting a bit and then taking a snapshot to check the current state.", recovery: "browser_cdp polling with Runtime.evaluate" }, { patterns: ["not visible", "hidden", "obscured", "zero dimensions"], getMessage: (t2) => "Element is not visible or interactable" + (t2?.ref ? `: ${t2.ref}` : ""), suggestion: "The element might be hidden, covered by another element, or outside the viewport. Try scrolling to bring it into view, or dismiss any overlays first.", recovery: "browser_cdp with Runtime.evaluate" }, { patterns: ["multiple elements", "ambiguous"], getMessage: (t2) => "Multiple elements match the selector" + (t2?.selector ? `: ${t2.selector}` : ""), suggestion: "Use a more specific selector or take a snapshot to see the element refs, then use the ref directly.", recovery: "browser_snapshot to get specific refs" }, { patterns: ["pointer-events: none", "pointer-events:none"], getMessage: (t2) => "Element has pointer-events: none CSS property" + (t2?.ref ? `: ${t2.ref}` : ""), suggestion: "This element cannot receive pointer events due to its CSS. The element may be decorative or the interaction should target a different element.", recovery: "browser_snapshot to find an alternative clickable element" }, { patterns: ["blocked by an overlay", "blocked by a modal"], getMessage: (t2, e2) => e2 || "Element is blocked by an overlay or modal" + (t2?.ref ? `: ${t2.ref}` : ""), suggestion: "Close the modal or overlay first before interacting with elements behind it. If no modal is visible, try taking a fresh snapshot as element refs may be stale.", recovery: "browser_snapshot to refresh refs, or browser_cdp with Runtime.evaluate" }, { patterns: ["failed to focus"], getMessage: (t2, e2) => e2 || "Failed to focus element" + (t2?.ref ? `: ${t2.ref}` : ""), suggestion: "The element could not receive focus. Check if another element is covering it, if it has a negative tabindex, or if it is disabled. Take a snapshot to verify current element state.", recovery: "browser_snapshot to check element state" }, { patterns: ["navigation", "redirect"], getMessage: () => "Navigation occurred during the operation", suggestion: "Wait for navigation to complete and take a new snapshot to see the updated page state.", recovery: "browser_snapshot after navigation completes" }, { patterns: ["detached", "stale"], getMessage: () => "Element reference is stale (page has changed)", suggestion: "The page content has changed since the last snapshot. Take a new snapshot to get updated refs.", recovery: "browser_snapshot" }, { patterns: ["disabled fieldset"], getMessage: (t2) => "Element is inside a disabled fieldset" + (t2?.ref ? `: ${t2.ref}` : ""), suggestion: "The element is inside a <fieldset disabled> and cannot be interacted with. Enable the fieldset first or interact with elements outside of it.", recovery: "browser_snapshot to find alternative elements" }, { patterns: ["opacity: 0", "opacity:0"], getMessage: (t2) => "Element has opacity: 0 and is not visible" + (t2?.ref ? `: ${t2.ref}` : ""), suggestion: "This element is invisible due to CSS opacity. Wait for it to become visible or interact with a different element.", recovery: "browser_cdp polling or browser_snapshot" }, { patterns: ["option", "not found"], allRequired: true, getMessage: () => "Option value not found in select element", suggestion: "Take a snapshot to see the available options in the select element.", recovery: "browser_snapshot" }, { patterns: ["readonly", "disabled"], getMessage: (t2) => "Element is readonly or disabled" + (t2?.ref ? `: ${t2.ref}` : ""), suggestion: "This element cannot be modified directly. Check if there is a way to enable it first.", recovery: "Check element states in snapshot" }, { patterns: ["clipped by a scroll container", "scroll container"], getMessage: (t2, e2) => e2 || "Element is clipped by a scroll container" + (t2?.ref ? `: ${t2.ref}` : ""), suggestion: "The element is inside a scrollable container but not in the visible scroll area. Use browser_cdp with Runtime.evaluate to scroll it into view.", recovery: "browser_cdp with Runtime.evaluate" }, { patterns: ["coordinates", "outside", "viewport"], allRequired: true, getMessage: (t2) => "Click coordinates are outside the visible viewport" + (t2?.ref ? ` for element ${t2.ref}` : ""), suggestion: "The element may be in a nested scroll container. Try using browser_cdp with Runtime.evaluate to scroll it into view first.", recovery: "browser_cdp with Runtime.evaluate" }];
  function z(t2, e2) {
    const n2 = "string" == typeof t2 ? t2 : t2.message, r2 = n2.toLowerCase();
    if (r2.includes("strict mode violation") || r2.includes("resolved to") && r2.includes("elements")) {
      const t3 = n2.match(/resolved to (\d+) elements/i);
      return { message: `Selector matched ${t3 ? t3[1] : "multiple"} elements${e2?.selector ? ` (${e2.selector})` : ""}`, suggestion: "Take a snapshot to get specific refs for each element, then use the ref directly instead of the selector.", recovery: "browser_snapshot to get specific refs with nth disambiguation" };
    }
    if (r2.includes("intercepted") || r2.includes("would hit") || r2.includes("instead of target")) {
      const t3 = n2.match(/ref:\s*(\w+)/), e3 = t3 ? t3[1] : null, o2 = r2.includes("overflow") || r2.includes("scroll") || r2.includes("container");
      let s2 = e3 ? `Click the intercepting element (ref: ${e3}) directly if that is the intended target, or take a snapshot to see the updated element positions.` : "Take a snapshot to see which element is at the click position and use that ref instead.";
      return o2 && (s2 += " The element may be inside a scrollable container - try using browser_cdp to scroll the target into view first."), { message: "Click was intercepted by another element" + (e3 ? ` (ref: ${e3})` : ""), suggestion: s2, recovery: o2 ? "browser_cdp to scroll target ref, or browser_snapshot" : e3 ? `browser_cdp with DOM/Input for ref ${e3}` : "browser_snapshot" };
    }
    if (r2.includes("option") && r2.includes("disabled") && r2.includes("cannot be selected")) {
      const t3 = n2.match(/"([^"]+)".*disabled/i);
      return { message: `Option "${t3 ? t3[1] : "the requested option"}" is disabled and cannot be selected`, suggestion: "The specific option you tried to select is disabled. Check the snapshot for available (non-disabled) options, or wait for the option to become enabled.", recovery: "browser_snapshot to see available options, or select a different option" };
    }
    for (const t3 of J) {
      if (t3.allRequired ? t3.patterns.every((t4) => r2.includes(t4)) : t3.patterns.some((t4) => r2.includes(t4))) return { message: t3.getMessage(e2, n2), suggestion: t3.suggestion, recovery: t3.recovery };
    }
    return { message: n2, suggestion: "An unexpected error occurred. Try taking a snapshot to understand the current page state.", recovery: "browser_snapshot" };
  }
  function G(t2) {
    const e2 = [`Error: ${t2.message}`];
    return e2.push(`
Suggestion: ${t2.suggestion}`), t2.recovery && e2.push(`
Recovery action: ${t2.recovery}`), e2.join("");
  }
  async function Z(t2, e2, n2) {
    const r2 = await s.commands.executeCommand(H, e2, { ownerAgentId: n2?.ownerAgentId });
    await s.commands.executeCommand("cursor.browserOriginAllowlist.ensurePageOriginAllowed", { toolName: t2, url: r2 });
  }
  function Q(t2, e2 = 0) {
    const n2 = "  ".repeat(e2), r2 = [];
    if (t2.role && r2.push(`${n2}- role: ${t2.role}`), t2.name) {
      const e3 = String(t2.name).replace(/\n/g, " ").trim();
      e3.includes(":") || e3.includes('"') || e3.includes("[") ? r2.push(`${n2}  name: "${e3.replace(/"/g, '\\"')}"`) : r2.push(`${n2}  name: ${e3}`);
    }
    if (t2.ref && r2.push(`${n2}  ref: ${t2.ref}`), void 0 !== t2.nth && t2.nth > 0 && r2.push(`${n2}  nth: ${t2.nth}`), void 0 !== t2.value && "" !== t2.value) {
      const e3 = String(t2.value).replace(/\n/g, "\\n").substring(0, 100);
      e3.includes(":") || e3.includes('"') || e3.includes("[") ? r2.push(`${n2}  value: "${e3.replace(/"/g, '\\"')}"`) : r2.push(`${n2}  value: ${e3}`);
    }
    if (void 0 !== t2.placeholder && "" !== t2.placeholder && r2.push(`${n2}  placeholder: ${t2.placeholder}`), void 0 !== t2.options && "" !== t2.options) {
      const e3 = String(t2.options).replace(/\n/g, " ").substring(0, 300);
      e3.includes(":") || e3.includes('"') ? r2.push(`${n2}  options: "${e3.replace(/"/g, '\\"')}"`) : r2.push(`${n2}  options: [${e3}]`);
    }
    if (void 0 !== t2.level && r2.push(`${n2}  level: ${t2.level}`), t2.states && t2.states.length > 0 && r2.push(`${n2}  states: [${t2.states.join(", ")}]`), t2.children && t2.children.length > 0) {
      r2.push(`${n2}  children:`);
      for (const n3 of t2.children) r2.push(Q(n3, e2 + 2));
    }
    return r2.join("\n");
  }
  async function tt(t2) {
    await d.mkdir(V, { recursive: true });
    const e2 = `snapshot-${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-")}-${Math.random().toString(36).slice(2, 8)}.log`, n2 = u.join(V, e2), r2 = t2.split("\n"), o2 = r2.length, s2 = r2.slice(0, Math.min(50, o2));
    return await d.writeFile(n2, t2, "utf8"), a.info(`Large snapshot redirected to: ${n2} (${o2} lines, ${s2.length} preview lines)`), { filePath: n2, previewLines: s2, totalLines: o2 };
  }
  async function et(t2, e2, n2, r2) {
    try {
      return await s.commands.executeCommand("cursor.browserView.executeJavaScript", t2, e2, { headless: n2, ownerAgentId: r2?.ownerAgentId });
    } catch (t3) {
      throw a.error("Failed to execute JavaScript in browser:", t3), t3;
    }
  }
  function nt(t2, e2) {
    if (null == t2) throw new Error("Browser execution returned null or undefined");
    if ("object" != typeof t2) throw new Error("Browser execution returned non-object: " + typeof t2);
    const n2 = t2;
    if ("boolean" != typeof n2.success) throw new Error('Browser result missing required "success" field');
    for (const t3 of e2) if (!(t3 in n2)) throw new Error(`Browser result missing required field: ${String(t3)}`);
    return t2;
  }
  async function rt(t2) {
    const { action: e2, detailLines: n2, pageState: r2, viewId: o2, snapshotYaml: s2, includeSnapshotDiff: i2, context: l2 } = t2;
    if (r2?.snapshot) {
      const t3 = s2 ?? Q(r2.snapshot), c3 = r2.url, d2 = r2.title, u2 = o2 ? K.get(o2) : void 0;
      o2 && (!(function(t4, e3, n3) {
        W.set(t4, { url: e3, title: n3 });
      })(o2, c3, d2), K.set(o2, t3));
      const p2 = (function(t4, e3, n3, r3) {
        if (t4) return { viewId: t4, postUrl: e3, postTitle: n3, postSnapshotYaml: r3 };
      })(o2, c3, d2, t3), f2 = Boolean(i2 && u2 && u2 !== t3), m2 = f2 && u2 ? D("snapshot", u2, t3, "previous", "current", { context: 2 }) : void 0, h2 = m2 ? Buffer.byteLength(m2, "utf8") : 0, g2 = void 0 !== m2 && h2 > 0 && h2 <= X, w2 = Buffer.byteLength(t3, "utf8");
      if (w2 > 25600) try {
        const { filePath: r3, previewLines: s3, totalLines: i3 } = await tt(t3), a2 = [];
        a2.push(`### Action: ${e2}`), n2 && n2.length > 0 && a2.push(...n2), o2 && a2.push(`- Browser View ID: ${o2}`), a2.push("\n### Page state", `- Page URL: ${c3}`, `- Page Title: ${d2}`, `- Page Snapshot: Large snapshot (${w2} bytes, ${i3} lines) written to file`, `- Snapshot File: [${r3}](file://${r3})`, `- Preview (first ${s3.length} lines):`, "```yaml", s3.join("\n"), "```", `
... (${i3 - s3.length} more lines in file)`), g2 && m2 ? a2.push("\n### Snapshot diff (previous vs current)", "```diff", m2, "```") : f2 && h2 > X && a2.push("\n### Snapshot diff (previous vs current)", `- Diff too large to include inline (${h2} bytes).`);
        const u3 = [{ type: "text", text: a2.join("\n") }];
        return o2 && u3.push(await lt(o2, { title: d2, url: c3 }, l2)), { content: u3, browserTelemetry: p2 };
      } catch (t4) {
        a.error("Failed to write snapshot to file, returning inline:", t4);
      }
      const b2 = [];
      b2.push(`### Action: ${e2}`), n2 && n2.length > 0 && b2.push(...n2), o2 && b2.push(`- Browser View ID: ${o2}`), b2.push("\n### Page state", `- Page URL: ${c3}`, `- Page Title: ${d2}`, "- Page Snapshot:", "```yaml", t3, "```"), g2 && m2 ? b2.push("\n### Snapshot diff (previous vs current)", "```diff", m2, "```") : f2 && h2 > X && b2.push("\n### Snapshot diff (previous vs current)", `- Diff too large to include inline (${h2} bytes).`);
      const y2 = [{ type: "text", text: b2.join("\n") }];
      return o2 && y2.push(await lt(o2, { title: d2, url: c3 }, l2)), { content: y2, browserTelemetry: p2 };
    }
    const c2 = [{ type: "text", text: JSON.stringify(t2) }];
    return o2 && c2.push(await lt(o2, void 0, l2)), { content: c2 };
  }
  async function ot(t2, e2) {
    const n2 = await s.commands.executeCommand("cursor.browserView.listTabs", { ownerAgentId: e2?.ownerAgentId });
    let r2;
    return r2 = t2 ? n2?.tabs?.includes(t2) ? t2 : void 0 : n2?.lastInteractedTab ?? n2?.activeTab ?? n2?.tabs?.[0], r2;
  }
  async function st(t2, e2, n2, r2) {
    if ((function(t3) {
      const e3 = j.get(t3);
      return !e3 || Date.now() - e3 > 1e4;
    })(t2)) {
      if (a.info(`Auto-snapshotting view ${t2} (stale or missing)`), !n2) throw new Error("browserUtils must be provided for ensureFreshSnapshot");
      const o2 = `${n2} buildPageSnapshot();`;
      await et(o2, t2, e2, r2), j.set(t2, Date.now());
    }
  }
  async function it(t2, e2) {
    try {
      const n2 = await s.commands.executeCommand(H, t2);
      await s.commands.executeCommand("cursor.browserView.updateScreenshot", t2, e2, n2);
    } catch (t3) {
      a.warn(`Failed to update screenshot service: ${t3}`);
    }
  }
  async function at(t2, e2, n2) {
    if (Y(t2), !n2?.cacheViewportScreenshot) return B(e2);
    try {
      const r2 = await et("\n	(() => ({\n		viewportCssWidth: window.innerWidth,\n		viewportCssHeight: window.innerHeight,\n		url: window.location.href,\n	}))();\n", t2, n2.headless, n2.context), o2 = Number(r2.viewportCssWidth), s2 = Number(r2.viewportCssHeight), i2 = "string" == typeof r2.url ? r2.url : "";
      if (!Number.isFinite(o2) || !Number.isFinite(s2) || 0 === i2.length) throw new Error("Viewport screenshot metrics were incomplete");
      const a2 = await F(e2, { viewportCssWidth: Math.round(o2), viewportCssHeight: Math.round(s2), url: i2 });
      if (!a2) throw new Error("Viewport screenshot could not be normalized");
      return (function(t3, e3) {
        M.set(t3, e3);
      })(t2, a2.metadata), a2.imageContent;
    } catch (t3) {
      return a.warn(`Failed to normalize viewport screenshot: ${t3}`), B(e2);
    }
  }
  async function lt(t2, e2, n2) {
    const r2 = await s.commands.executeCommand("cursor.browserView.isLocked", t2, { ownerAgentId: n2?.ownerAgentId });
    return { type: "metadata", viewId: t2, title: e2?.title, url: e2?.url, locked: r2 ?? false };
  }
  async function ct(t2, e2, n2, r2) {
    if (!n2) return t2;
    const o2 = await (async function(t3, e3) {
      try {
        a.info(`[getScreenshot] viewId=${t3}, taking screenshot`);
        const n3 = await s.commands.executeCommand("cursor.browserView.takeScreenshot", { viewId: t3, type: "png", fullPage: false, ownerAgentId: e3?.ownerAgentId });
        return n3.success && n3.dataUrl ? (await it(t3, n3.dataUrl), at(t3, n3.dataUrl, { cacheViewportScreenshot: true, context: e3 })) : void a.warn(`Failed to take screenshot: ${n3.error}`);
      } catch (t4) {
        return void a.warn(`Error taking screenshot: ${t4}`);
      }
    })(e2, r2);
    return o2 && t2.content.push(o2), t2;
  }
  const dt = "\nfunction setNativeValue(el, val) {\n	const elTagName = el.tagName.toUpperCase();\n	let valueSetter = null;\n\n	if (elTagName === 'INPUT') {\n		valueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;\n	} else if (elTagName === 'TEXTAREA') {\n		valueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value')?.set;\n	}\n\n	if (valueSetter) {\n		valueSetter.call(el, val);\n	} else {\n		el.value = val;\n	}\n}\n";
  const ut = "\nasync function dispatchMouseClickSequenceInBrowser(element, options) {\n	const globals = globalThis;\n	const browserDocument = globals.document;\n	const button = options.button ?? 'left';\n	const modifiers = options.modifiers ?? [];\n\n	let buttonValue = 0;\n	let buttonsValue = 1;\n	let clickEventType = 'click';\n	if (button === 'right') {\n		buttonValue = 2;\n		buttonsValue = 2;\n		clickEventType = 'contextmenu';\n	} else if (button === 'middle') {\n		buttonValue = 1;\n		buttonsValue = 4;\n		clickEventType = 'auxclick';\n	}\n\n	const pointerEventOptions = {\n		bubbles: true,\n		cancelable: true,\n		view: globals.window,\n		button: buttonValue,\n		buttons: buttonsValue,\n		ctrlKey: modifiers.includes('Control') || modifiers.includes('ControlOrMeta'),\n		shiftKey: modifiers.includes('Shift'),\n		altKey: modifiers.includes('Alt'),\n		metaKey: modifiers.includes('Meta') || modifiers.includes('ControlOrMeta'),\n		clientX: options.x,\n		clientY: options.y,\n		pointerId: 1,\n		pointerType: 'mouse',\n		isPrimary: true,\n	};\n\n	const mouseEventOptions = {\n		bubbles: true,\n		cancelable: true,\n		view: globals.window,\n		button: buttonValue,\n		buttons: buttonsValue,\n		ctrlKey: modifiers.includes('Control') || modifiers.includes('ControlOrMeta'),\n		shiftKey: modifiers.includes('Shift'),\n		altKey: modifiers.includes('Alt'),\n		metaKey: modifiers.includes('Meta') || modifiers.includes('ControlOrMeta'),\n		clientX: options.x,\n		clientY: options.y,\n	};\n\n	const previousActiveElement = browserDocument?.activeElement;\n	if (previousActiveElement && previousActiveElement !== element && previousActiveElement !== browserDocument?.body) {\n		if (typeof previousActiveElement.blur === 'function') {\n			previousActiveElement.blur();\n		}\n	}\n\n	if (typeof element.focus === 'function') {\n		element.focus();\n	}\n\n	await new Promise((resolve) => {\n		globals.setTimeout(resolve, 0);\n	});\n\n	element.dispatchEvent(new globals.PointerEvent('pointerover', pointerEventOptions));\n	element.dispatchEvent(new globals.PointerEvent('pointerenter', { ...pointerEventOptions, bubbles: false }));\n	element.dispatchEvent(new globals.MouseEvent('mouseover', mouseEventOptions));\n	element.dispatchEvent(new globals.MouseEvent('mouseenter', { ...mouseEventOptions, bubbles: false }));\n	element.dispatchEvent(new globals.PointerEvent('pointermove', pointerEventOptions));\n	element.dispatchEvent(new globals.MouseEvent('mousemove', mouseEventOptions));\n	element.dispatchEvent(new globals.PointerEvent('pointerdown', pointerEventOptions));\n	element.dispatchEvent(new globals.MouseEvent('mousedown', mouseEventOptions));\n\n	if (typeof element.focus === 'function') {\n		element.focus();\n	}\n\n	if ((options.holdDurationMs ?? 0) > 0) {\n		await new Promise((resolve) => {\n			globals.setTimeout(resolve, options.holdDurationMs);\n		});\n	}\n\n	element.dispatchEvent(new globals.PointerEvent('pointerup', pointerEventOptions));\n	element.dispatchEvent(new globals.MouseEvent('mouseup', mouseEventOptions));\n	element.dispatchEvent(new globals.MouseEvent(clickEventType, mouseEventOptions));\n\n	if (options.doubleClick) {\n		element.dispatchEvent(new globals.PointerEvent('pointerdown', pointerEventOptions));\n		element.dispatchEvent(new globals.MouseEvent('mousedown', mouseEventOptions));\n		element.dispatchEvent(new globals.PointerEvent('pointerup', pointerEventOptions));\n		element.dispatchEvent(new globals.MouseEvent('mouseup', mouseEventOptions));\n		element.dispatchEvent(new globals.MouseEvent(clickEventType, mouseEventOptions));\n		if (clickEventType === 'click') {\n			element.dispatchEvent(new globals.MouseEvent('dblclick', mouseEventOptions));\n		}\n	}\n\n	await new Promise((resolve) => {\n		globals.setTimeout(resolve, 0);\n	});\n}\n", pt = "\nfunction getScrollableAncestors(el) {\n	const ancestors = [];\n	let current = el.parentElement;\n	while (current && current !== document.body && current !== document.documentElement) {\n		const style = window.getComputedStyle(current);\n		const overflowY = style.overflowY;\n		const overflowX = style.overflowX;\n		const isScrollable = (\n			(overflowY === 'auto' || overflowY === 'scroll' || overflowX === 'auto' || overflowX === 'scroll') &&\n			(current.scrollHeight > current.clientHeight || current.scrollWidth > current.clientWidth)\n		);\n		if (isScrollable) {\n			ancestors.push(current);\n		}\n		current = current.parentElement;\n	}\n	if (document.scrollingElement && (document.scrollingElement.scrollHeight > window.innerHeight || document.scrollingElement.scrollWidth > window.innerWidth)) {\n		ancestors.push(document.scrollingElement);\n	}\n	return ancestors;\n}\n\nfunction safeRound(val) {\n	if (typeof val !== 'number' || !Number.isFinite(val)) return 0;\n	return Math.round(val);\n}\n\nfunction getScrollContainerInfo(container) {\n	const rect = container.getBoundingClientRect();\n	const ref = container.getAttribute ? (container.getAttribute('data-cursor-ref') || null) : null;\n	const tag = container.tagName?.toLowerCase() || '';\n	const id = container.id || null;\n	const classes = container.className && typeof container.className === 'string'\n		? container.className.trim().split(/\\s+/).slice(0, 2).join(' ')\n		: '';\n	return {\n		ref,\n		tag,\n		id,\n		classes,\n		scrollTop: safeRound(container.scrollTop),\n		scrollLeft: safeRound(container.scrollLeft),\n		scrollHeight: safeRound(container.scrollHeight),\n		scrollWidth: safeRound(container.scrollWidth),\n		clientHeight: safeRound(container.clientHeight),\n		clientWidth: safeRound(container.clientWidth),\n		canScrollDown: container.scrollTop + container.clientHeight < container.scrollHeight - 5,\n		canScrollUp: container.scrollTop > 5,\n		canScrollRight: container.scrollLeft + container.clientWidth < container.scrollWidth - 5,\n		canScrollLeft: container.scrollLeft > 5,\n		boundingBox: {\n			top: safeRound(rect.top),\n			left: safeRound(rect.left),\n			width: safeRound(rect.width),\n			height: safeRound(rect.height)\n		}\n	};\n}\n\nfunction isElementVisibleInContainer(el, container) {\n	const elRect = el.getBoundingClientRect();\n	const containerRect = container === document.scrollingElement\n		? { top: 0, left: 0, bottom: window.innerHeight, right: window.innerWidth }\n		: container.getBoundingClientRect();\n	const padding = 10;\n	return (\n		elRect.top >= containerRect.top - padding &&\n		elRect.bottom <= containerRect.bottom + padding &&\n		elRect.left >= containerRect.left - padding &&\n		elRect.right <= containerRect.right + padding\n	);\n}\n\nfunction scrollElementIntoContainer(el, container) {\n	const elRect = el.getBoundingClientRect();\n	const containerRect = container === document.scrollingElement\n		? { top: 0, left: 0, bottom: window.innerHeight, right: window.innerWidth, width: window.innerWidth, height: window.innerHeight }\n		: container.getBoundingClientRect();\n\n	let scrollTopDelta = 0;\n	let scrollLeftDelta = 0;\n\n	if (elRect.bottom > containerRect.bottom) {\n		scrollTopDelta = elRect.bottom - containerRect.bottom + 20;\n	} else if (elRect.top < containerRect.top) {\n		scrollTopDelta = elRect.top - containerRect.top - 20;\n	}\n\n	if (elRect.right > containerRect.right) {\n		scrollLeftDelta = elRect.right - containerRect.right + 20;\n	} else if (elRect.left < containerRect.left) {\n		scrollLeftDelta = elRect.left - containerRect.left - 20;\n	}\n\n	if (Math.abs(scrollTopDelta) > 5 || Math.abs(scrollLeftDelta) > 5) {\n		container.scrollBy({ top: scrollTopDelta, left: scrollLeftDelta, behavior: 'instant' });\n		return { scrolled: true, deltaY: safeRound(scrollTopDelta), deltaX: safeRound(scrollLeftDelta) };\n	}\n	return { scrolled: false, deltaY: 0, deltaX: 0 };\n}\n\nfunction isInViewport(rect) {\n	if (!rect || !Number.isFinite(rect.top) || !Number.isFinite(rect.bottom)) return false;\n	const padding = 10;\n	return (\n		rect.top >= -padding &&\n		rect.left >= -padding &&\n		rect.bottom <= window.innerHeight + padding &&\n		rect.right <= window.innerWidth + padding\n	);\n}\n\nfunction getSafeRect(element) {\n	const rect = element.getBoundingClientRect();\n	return {\n		top: safeRound(rect.top),\n		left: safeRound(rect.left),\n		bottom: safeRound(rect.bottom),\n		right: safeRound(rect.right),\n		width: safeRound(rect.width),\n		height: safeRound(rect.height)\n	};\n}\n\nasync function ensureElementInView(element, maxAttempts) {\n	const attempts = maxAttempts || 5;\n	const scrollableAncestors = getScrollableAncestors(element);\n	let totalScrolledContainers = 0;\n\n	for (let attempt = 0; attempt < attempts; attempt++) {\n		const rect = getSafeRect(element);\n\n		if (isInViewport(rect)) {\n			return {\n				success: true,\n				attempts: attempt + 1,\n				scrolledContainers: totalScrolledContainers,\n				containerCount: scrollableAncestors.length\n			};\n		}\n\n		let didScroll = false;\n\n		for (let i = 0; i < scrollableAncestors.length; i++) {\n			const container = scrollableAncestors[i];\n			if (!isElementVisibleInContainer(element, container)) {\n				const scrollResult = scrollElementIntoContainer(element, container);\n				if (scrollResult.scrolled) {\n					totalScrolledContainers++;\n					didScroll = true;\n					await new Promise(r => setTimeout(r, 100));\n				}\n			}\n		}\n\n		if (didScroll) {\n			await new Promise(r => setTimeout(r, 50));\n			continue;\n		}\n\n		const newRect = getSafeRect(element);\n		if (!isInViewport(newRect)) {\n			try {\n				element.scrollIntoView({ block: 'center', inline: 'center', behavior: 'instant' });\n				await new Promise(r => setTimeout(r, 100));\n			} catch (e) {\n				element.scrollIntoView(true);\n				await new Promise(r => setTimeout(r, 100));\n			}\n		}\n\n		const finalRect = getSafeRect(element);\n		if (isInViewport(finalRect)) {\n			return {\n				success: true,\n				attempts: attempt + 1,\n				scrolledContainers: totalScrolledContainers,\n				containerCount: scrollableAncestors.length\n			};\n		}\n\n		for (let i = scrollableAncestors.length - 1; i >= 0; i--) {\n			const container = scrollableAncestors[i];\n			const scrollResult = scrollElementIntoContainer(element, container);\n			if (scrollResult.scrolled) {\n				totalScrolledContainers++;\n				await new Promise(r => setTimeout(r, 100));\n			}\n		}\n	}\n\n	const finalRect = getSafeRect(element);\n	const finalContainerInfos = scrollableAncestors.map(c => getScrollContainerInfo(c));\n\n	return {\n		success: false,\n		attempts: attempts,\n		rect: finalRect,\n		viewportSize: { width: window.innerWidth, height: window.innerHeight },\n		scrollContainers: finalContainerInfos,\n		scrolledContainers: totalScrolledContainers,\n		containerCount: scrollableAncestors.length\n	};\n}\n", ft = [];
  function mt(t2) {
    ft.push({ ...t2, timestamp: Date.now() }), ft.length > 100 && ft.shift();
    const e2 = "success" === t2.outcome ? "[OK]" : "retry" === t2.outcome ? "[RETRY]" : "[FAIL]", n2 = t2.attempts > 1 ? ` (attempt ${t2.attempts})` : "", r2 = `${e2} ${t2.actionType}: ${t2.targetDescription}${n2}`;
    "failure" === t2.outcome ? a.warn(r2 + (t2.error ? ` - ${t2.error}` : "")) : a.info(r2);
  }
  async function ht(t2, e2, n2) {
    const r2 = t2.actionType ?? "safeClick", o2 = await ot(t2.viewId, n2);
    if (!o2) return mt({ actionType: r2, targetDescription: t2.ref, attempts: 1, outcome: "failure", error: "No browser tab available" }), { content: [{ type: "text", text: "No browser tab available. Please navigate to a page first." }] };
    try {
      await Z("browser_click", o2, n2), await st(o2, t2.headless, c, n2);
      const s2 = U(t2.ref), i2 = t2.element || "", a2 = t2.maxScrollAttempts ?? 5, l2 = t2.retryOnStaleRef ?? true, d2 = t2.autoCloseDropdowns ?? true, u2 = t2.retryWithOffset ?? true, p2 = `
			${q}
			${c}
			${pt}
			
function isDropdownElement(el) {
	if (!el) return false;
	const tag = el.tagName?.toLowerCase() || '';
	const role = el.getAttribute?.('role') || '';

	const dropdownRoles = ['listbox', 'menu', 'combobox', 'tree', 'grid'];
	const dropdownClasses = ['dropdown', 'select-options', 'autocomplete', 'suggestions', 'popover', 'menu-list', 'option-list'];

	if (dropdownRoles.includes(role)) return true;
	if (tag === 'select' || tag === 'datalist') return true;

	const ariaHaspopup = el.getAttribute?.('aria-haspopup');
	const ariaExpanded = el.getAttribute?.('aria-expanded');
	if (ariaHaspopup && ariaHaspopup !== 'false') return true;
	if (ariaExpanded === 'true') return true;

	const classList = el.className && typeof el.className === 'string' ? el.className.toLowerCase() : '';
	if (dropdownClasses.some(cls => classList.includes(cls))) return true;

	const style = window.getComputedStyle(el);
	const isAbsoluteOrFixed = style.position === 'absolute' || style.position === 'fixed';
	const hasHighZIndex = parseInt(style.zIndex, 10) > 10;
	const hasOptions = el.querySelectorAll('[role="option"], [role="menuitem"], option, li').length > 0;

	if (isAbsoluteOrFixed && hasHighZIndex && hasOptions) return true;

	return false;
}

function findDropdownAncestor(el) {
	let current = el;
	while (current && current !== document.body) {
		if (isDropdownElement(current)) {
			return current;
		}
		current = current.parentElement;
	}
	return null;
}

async function attemptDropdownClose(dropdownEl) {
	const result = {
		attempted: true,
		method: null,
		success: false
	};

	document.body.dispatchEvent(new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window,
		clientX: 0,
		clientY: 0
	}));
	result.method = 'click-body';

	await new Promise(r => setTimeout(r, 100));

	const style = window.getComputedStyle(dropdownEl);
	if (style.display === 'none' || style.visibility === 'hidden' || parseFloat(style.opacity) === 0) {
		result.success = true;
		return result;
	}

	document.dispatchEvent(new KeyboardEvent('keydown', {
		key: 'Escape',
		code: 'Escape',
		keyCode: 27,
		bubbles: true,
		cancelable: true
	}));
	result.method = 'press-escape';

	await new Promise(r => setTimeout(r, 100));

	const styleAfterEsc = window.getComputedStyle(dropdownEl);
	if (styleAfterEsc.display === 'none' || styleAfterEsc.visibility === 'hidden' || parseFloat(styleAfterEsc.opacity) === 0) {
		result.success = true;
	}

	return result;
}

			
function getBlockingElementInfo(hitElement, targetElement) {
	if (!hitElement) {
		return null;
	}

	const tag = hitElement.tagName?.toLowerCase() || '';
	const id = hitElement.id || null;
	const classes = hitElement.className && typeof hitElement.className === 'string'
		? hitElement.className.trim().split(/\\s+/).filter(Boolean)
		: [];
	const role = hitElement.getAttribute?.('role') || null;
	const rect = hitElement.getBoundingClientRect();
	const ref = hitElement.getAttribute?.('data-cursor-ref') || null;

	const nonInteractiveTags = ['p', 'span', 'div', 'label', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'td', 'th', 'caption', 'figcaption', 'legend', 'small', 'strong', 'em', 'b', 'i', 'u', 'mark', 'del', 'ins', 'sub', 'sup', 'code', 'pre', 'blockquote', 'cite', 'q', 'abbr', 'address', 'time'];
	const interactiveRoles = ['button', 'link', 'checkbox', 'radio', 'textbox', 'combobox', 'listbox', 'menuitem', 'tab', 'switch', 'slider', 'spinbutton', 'option'];
	const dropdownRoles = ['listbox', 'menu', 'combobox', 'tree', 'grid'];

	const isNonInteractive = (
		nonInteractiveTags.includes(tag) &&
		!role &&
		!hitElement.onclick &&
		!hitElement.hasAttribute('tabindex') &&
		hitElement.getAttribute('contenteditable') !== 'true'
	);

	const isInteractiveByRole = role && interactiveRoles.includes(role);
	const isInteractiveByTag = ['a', 'button', 'input', 'select', 'textarea', 'summary'].includes(tag);

	const dropdownAncestor = findDropdownAncestor ? findDropdownAncestor(hitElement) : null;
	const isDropdownOption = role === 'option' || role === 'menuitem' || tag === 'option' ||
		(dropdownAncestor && dropdownAncestor !== hitElement);

	const info = {
		tag,
		id,
		classes,
		role,
		ref,
		isNonInteractiveText: isNonInteractive && !isInteractiveByRole && !isInteractiveByTag,
		isDropdownOption: isDropdownOption,
		dropdownAncestorRef: dropdownAncestor ? (dropdownAncestor.getAttribute?.('data-cursor-ref') || null) : null,
		boundingBox: {
			top: Math.round(rect.top),
			left: Math.round(rect.left),
			width: Math.round(rect.width),
			height: Math.round(rect.height),
			bottom: Math.round(rect.bottom),
			right: Math.round(rect.right)
		}
	};

	if (tag === 'iframe') {
		info.iframe = getIframeInfo(hitElement);
	}

	if (isNonInteractive && targetElement) {
		const targetRect = targetElement.getBoundingClientRect();
		const hitRect = rect;

		info.clickOffsetSuggestion = null;

		if (hitRect.bottom <= targetRect.bottom && hitRect.top >= targetRect.top) {
			if (hitRect.right < targetRect.right - 10) {
				info.clickOffsetSuggestion = { offsetX: Math.round(targetRect.width - 5), description: 'right edge' };
			} else if (hitRect.left > targetRect.left + 10) {
				info.clickOffsetSuggestion = { offsetX: 5, description: 'left edge' };
			}
		}
		if (!info.clickOffsetSuggestion) {
			if (hitRect.bottom < targetRect.bottom - 10) {
				info.clickOffsetSuggestion = { offsetY: Math.round(targetRect.height - 5), description: 'bottom edge' };
			} else if (hitRect.top > targetRect.top + 10) {
				info.clickOffsetSuggestion = { offsetY: 5, description: 'top edge' };
			}
		}
	}

	return info;
}

function getIframeInfo(iframe) {
	if (!iframe || iframe.tagName?.toLowerCase() !== 'iframe') {
		return null;
	}

	const src = iframe.getAttribute('src') || null;
	const sandbox = iframe.getAttribute('sandbox') || null;
	const title = iframe.getAttribute('title') || null;
	const name = iframe.getAttribute('name') || null;
	const allow = iframe.getAttribute('allow') || null;

	let isSameOrigin = false;
	try {
		if (src) {
			const iframeUrl = new URL(src, window.location.href);
			isSameOrigin = iframeUrl.origin === window.location.origin;
		}
	} catch (e) {
		isSameOrigin = false;
	}

	return {
		src,
		sandbox,
		title,
		name,
		allow,
		isSameOrigin
	};
}

			
function attemptRefRecovery(ref, expectedRole, expectedName) {
	const allElements = querySelectorAllIncludingOpenShadowRoots('[data-cursor-ref]');
	let bestMatch = null;
	let bestScore = 0;

	for (const el of allElements) {
		const elRole = el.getAttribute('role') || getImplicitRole(el);
		const elName = computeAccessibleName(el, elRole);

		let score = 0;

		if (expectedRole && elRole === expectedRole) {
			score += 50;
		}

		if (expectedName && elName) {
			const expectedLower = expectedName.toLowerCase();
			const actualLower = elName.toLowerCase();

			if (actualLower === expectedLower) {
				score += 50;
			} else if (actualLower.includes(expectedLower) || expectedLower.includes(actualLower)) {
				score += 25;
			}
		}

		if (score > bestScore) {
			bestScore = score;
			bestMatch = el;
		}
	}

	if (bestMatch && bestScore >= 50) {
		return {
			success: true,
			element: bestMatch,
			newRef: bestMatch.getAttribute('data-cursor-ref'),
			matchScore: bestScore
		};
	}

	return { success: false };
}

function parseExpectedDescription(description) {
	if (!description) return { role: null, name: null };

	const desc = description.toLowerCase();
	let role = null;
	let name = null;

	const rolePatterns = [
		/role=["']?([^"',)]+)/,
		/^(button|link|textbox|checkbox|radio|combobox|listbox|menuitem|option|slider|switch|tab)/
	];

	for (const pattern of rolePatterns) {
		const match = desc.match(pattern);
		if (match) {
			role = match[1].trim();
			break;
		}
	}

	const namePatterns = [
		/(?:aria-label|text|name)=["']?([^"']+)["']?/,
		/["']([^"']+)["']/
	];

	for (const pattern of namePatterns) {
		const match = description.match(pattern);
		if (match) {
			name = match[1].trim();
			break;
		}
	}

	if (!name && description) {
		name = description.replace(/(.*)/, '').trim();
	}

	return { role, name };
}

			${ut}
			(async function() {
				const ref = ${JSON.stringify(s2)};
				const expectedDescription = ${JSON.stringify(i2)};
				const maxScrollAttempts = ${a2};
				const retryOnStaleRef = ${l2};
				const autoCloseDropdowns = ${d2};
				const retryWithOffset = ${u2};
				let offsetX = ${t2.offsetX ?? "null"};
				let offsetY = ${t2.offsetY ?? "null"};
				const holdDurationMs = ${t2.holdDurationMs ?? 0};

				let element = null;
				let usedRef = ref;
				let recoveryAttempted = false;
				let dropdownRecovery = null;
				let offsetRetry = null;

				const findResult = findElementByRef(ref);
				element = findResult.element;

				if (!element && retryOnStaleRef && expectedDescription) {
					const { role: expectedRole, name: expectedName } = parseExpectedDescription(expectedDescription);
					const recovery = attemptRefRecovery(ref, expectedRole, expectedName);

					if (recovery.success) {
						element = recovery.element;
						usedRef = recovery.newRef;
						recoveryAttempted = true;
					}
				}

				if (!element) {
					return {
						success: false,
						error: 'Element not found: ' + ref + '. Take a snapshot to get updated refs.',
						staleRef: true,
						recoveryAttempted: recoveryAttempted
					};
				}

				try {
					validateElementForInteraction(element, usedRef, 'click', expectedDescription);
				} catch (validationError) {
					return {
						success: false,
						error: validationError.message,
						validationFailed: true
					};
				}

				const scrollResult = await ensureElementInView(element, maxScrollAttempts);

				if (!scrollResult.success) {
					let errorMsg = 'Could not scroll element into view after ' + scrollResult.attempts + ' attempts.';
					if (scrollResult.containerCount > 0) {
						errorMsg += ' Found ' + scrollResult.containerCount + ' scroll container(s).';
					}
					if (scrollResult.rect) {
						const r = scrollResult.rect;
						const vp = scrollResult.viewportSize;
						const belowBy = r.bottom - vp.height;
						const aboveBy = -r.top;
						if (Number.isFinite(belowBy) && belowBy > 0) {
							errorMsg += ' Element is ' + Math.round(belowBy) + 'px below viewport.';
						} else if (Number.isFinite(aboveBy) && aboveBy > 0) {
							errorMsg += ' Element is ' + Math.round(aboveBy) + 'px above viewport.';
						}
					}

					return {
						success: false,
						error: errorMsg,
						scrollFailed: true,
						elementRect: scrollResult.rect,
						viewportSize: scrollResult.viewportSize,
						scrollContainers: scrollResult.scrollContainers,
						scrolledContainers: scrollResult.scrolledContainers,
						containerCount: scrollResult.containerCount
					};
				}

				const rect = element.getBoundingClientRect();
				let cx, cy;

				function computeClickCoords(oX, oY) {
					let x, y;
					if (oX !== null && oY !== null) {
						x = Math.round(rect.left + oX);
						y = Math.round(rect.top + oY);
					} else if (oX !== null) {
						x = Math.round(rect.left + oX);
						y = Math.round(rect.top + rect.height / 2);
					} else if (oY !== null) {
						x = Math.round(rect.left + rect.width / 2);
						y = Math.round(rect.top + oY);
					} else {
						x = Math.round(rect.left + rect.width / 2);
						y = Math.round(rect.top + rect.height / 2);
					}
					return { x, y };
				}

				const coords = computeClickCoords(offsetX, offsetY);
				cx = coords.x;
				cy = coords.y;

				let hitCheck = expectHitTarget({ x: cx, y: cy }, element, usedRef);

				if (!hitCheck.hit) {
					const doc = document;
					const hitElement = getDeepElementFromPoint(doc, cx, cy);
					const blockingInfo = getBlockingElementInfo(hitElement, element);

					if (autoCloseDropdowns && blockingInfo && (blockingInfo.isDropdownOption || blockingInfo.dropdownAncestorRef)) {
						const dropdownEl = blockingInfo.dropdownAncestorRef
							? findElementByRef(blockingInfo.dropdownAncestorRef).element
							: findDropdownAncestor(hitElement);

						if (dropdownEl) {
							dropdownRecovery = {
								detected: true,
								dropdownRef: dropdownEl.getAttribute('data-cursor-ref') || null,
								dropdownTag: dropdownEl.tagName?.toLowerCase() || '',
								dropdownRole: dropdownEl.getAttribute('role') || null,
								recoveryAttempted: true,
								recoverySucceeded: false
							};

							const closeResult = await attemptDropdownClose(dropdownEl);
							dropdownRecovery.recoveryAction = closeResult.method;
							dropdownRecovery.recoverySucceeded = closeResult.success;

							if (closeResult.success) {
								await new Promise(r => setTimeout(r, 50));
								hitCheck = expectHitTarget({ x: cx, y: cy }, element, usedRef);
							}
						}
					}

					if (!hitCheck.hit && retryWithOffset && blockingInfo && blockingInfo.isNonInteractiveText && blockingInfo.clickOffsetSuggestion) {
						const suggestion = blockingInfo.clickOffsetSuggestion;
						offsetRetry = {
							attempted: true,
							suggestedOffset: { x: suggestion.offsetX, y: suggestion.offsetY },
							retrySucceeded: false
						};

						const newOffsetX = suggestion.offsetX !== undefined ? suggestion.offsetX : offsetX;
						const newOffsetY = suggestion.offsetY !== undefined ? suggestion.offsetY : offsetY;
						const newCoords = computeClickCoords(newOffsetX, newOffsetY);

						const retryHitCheck = expectHitTarget({ x: newCoords.x, y: newCoords.y }, element, usedRef);
						if (retryHitCheck.hit) {
							cx = newCoords.x;
							cy = newCoords.y;
							offsetX = newOffsetX;
							offsetY = newOffsetY;
							hitCheck = retryHitCheck;
							offsetRetry.retrySucceeded = true;
						}
					}
				}

				if (!hitCheck.hit) {
					const doc = document;
					const hitElement = getDeepElementFromPoint(doc, cx, cy);
					const blockingInfo = getBlockingElementInfo(hitElement, element);

					let blockingType = hitCheck.blockingType;
					if (blockingInfo && (blockingInfo.isDropdownOption || blockingInfo.dropdownAncestorRef)) {
						blockingType = 'dropdown';
					}

					return {
						success: false,
						hitTargetFailed: true,
						error: hitCheck.error || 'Click would not reach the intended element.',
						interceptedBy: hitCheck.interceptedBy,
						interceptedRef: hitCheck.interceptedRef,
						blockingType: blockingType,
						blockingElementInfo: blockingInfo,
						suggestion: hitCheck.suggestion,
						targetRef: usedRef,
						targetPreview: previewNode(element),
						scrollAttempts: scrollResult.attempts,
						dropdownRecovery: dropdownRecovery,
						offsetRetry: offsetRetry,
						pageState: {
							url: window.location.href,
							title: document.title,
							snapshot: buildPageSnapshot().tree
						}
					};
				}

				await dispatchMouseClickSequenceInBrowser(element, {
					x: cx,
					y: cy,
					button: ${JSON.stringify(t2.button ?? "left")},
					modifiers: ${JSON.stringify(t2.modifiers || [])},
					doubleClick: ${JSON.stringify(t2.doubleClick ?? false)},
					holdDurationMs: holdDurationMs
				});

				const snapshotResult = buildPageSnapshot();
				return {
					success: true,
					usedRef: usedRef,
					refRecovered: recoveryAttempted,
					scrollAttempts: scrollResult.attempts,
					scrolledContainers: scrollResult.scrolledContainers || 0,
					doubleClick: ${JSON.stringify(t2.doubleClick)} || false,
					button: ${JSON.stringify(t2.button)} || 'left',
					offsetUsed: offsetX !== null || offsetY !== null,
					holdDuration: holdDurationMs,
					dropdownRecovery: dropdownRecovery,
					offsetRetry: offsetRetry,
					pageState: {
						url: window.location.href,
						title: document.title,
						snapshot: snapshotResult.tree
					}
				};
			})();
		`, f2 = nt(await e2(p2, o2, t2.headless, n2), []);
      if (!f2.success) {
        const e3 = [];
        if (f2.hitTargetFailed && f2.blockingElementInfo) e3.push("Error: Click target intercepted"), e3.push(""), e3.push((function(t3) {
          const e4 = [];
          t3.isNonInteractiveText ? e4.push(`Click intercepted by non-interactive text element: <${t3.tag}>`) : (e4.push(`Click intercepted by: <${t3.tag}`), t3.id && (e4[e4.length - 1] += ` id="${t3.id}"`), t3.classes && t3.classes.length > 0 && (e4[e4.length - 1] += ` class="${t3.classes.slice(0, 3).join(" ")}"`), t3.role && (e4[e4.length - 1] += ` role="${t3.role}"`), e4[e4.length - 1] += ">");
          t3.boundingBox && e4.push(`Position: top=${t3.boundingBox.top}, left=${t3.boundingBox.left}, ${t3.boundingBox.width}x${t3.boundingBox.height}`);
          t3.ref && e4.push(`Blocking element ref: ${t3.ref}`);
          if (t3.isNonInteractiveText && t3.clickOffsetSuggestion) {
            e4.push("");
            const n3 = t3.clickOffsetSuggestion;
            void 0 !== n3.offsetX ? e4.push(`Suggestion: Use offsetX=${n3.offsetX} to click the ${n3.description} of the target element.`) : void 0 !== n3.offsetY && e4.push(`Suggestion: Use offsetY=${n3.offsetY} to click the ${n3.description} of the target element.`);
          }
          if (t3.iframe) {
            const n3 = t3.iframe;
            e4.push(""), e4.push("Iframe details:"), e4.push(`  src: ${n3.src || "(none)"}`), e4.push(`  title: ${n3.title || "(none)"}`), e4.push(`  sandbox: ${n3.sandbox || "(none)"}`), e4.push(`  same-origin: ${n3.isSameOrigin}`), n3.name && e4.push(`  name: ${n3.name}`), n3.allow && e4.push(`  allow: ${n3.allow}`), n3.isSameOrigin && n3.src && (e4.push(""), e4.push(`Suggestion: This iframe is same-origin. You can navigate directly to: ${n3.src}`));
          }
          return e4.join("\n");
        })(f2.blockingElementInfo));
        else if (f2.scrollFailed) {
          if (e3.push(`Error: ${f2.error}`), f2.scrollContainers && f2.scrollContainers.length > 0) {
            e3.push(""), e3.push("Scroll containers found:");
            for (const t3 of f2.scrollContainers) {
              const n3 = t3.ref ? `ref="${t3.ref}"` : `<${t3.tag}${t3.id ? ` id="${t3.id}"` : ""}${t3.classes ? ` class="${t3.classes}"` : ""}>`, r3 = [];
              t3.canScrollDown && r3.push("can scroll down"), t3.canScrollUp && r3.push("can scroll up"), e3.push(`  - ${n3} (${r3.length > 0 ? r3.join(", ") : "at scroll limit"})`);
            }
          }
          f2.elementRect && f2.viewportSize && (e3.push(""), e3.push(`Element position: top=${Math.round(f2.elementRect.top)}, bottom=${Math.round(f2.elementRect.bottom)}`), e3.push(`Viewport: ${f2.viewportSize.width}x${f2.viewportSize.height}`));
        } else f2.error && e3.push(`Error: ${f2.error}`);
        if (f2.dropdownRecovery && f2.dropdownRecovery.detected && (e3.push(""), e3.push("Dropdown recovery attempted:"), e3.push(`  - Dropdown element: <${f2.dropdownRecovery.dropdownTag}${f2.dropdownRecovery.dropdownRole ? ` role="${f2.dropdownRecovery.dropdownRole}"` : ""}>`), f2.dropdownRecovery.dropdownRef && e3.push(`  - Dropdown ref: ${f2.dropdownRecovery.dropdownRef}`), e3.push(`  - Recovery action: ${f2.dropdownRecovery.recoveryAction}`), e3.push("  - Recovery result: " + (f2.dropdownRecovery.recoverySucceeded ? "succeeded but click still blocked" : "failed"))), f2.offsetRetry && f2.offsetRetry.attempted) {
          if (e3.push(""), e3.push("Offset click retry attempted:"), f2.offsetRetry.suggestedOffset) {
            const t3 = f2.offsetRetry.suggestedOffset;
            e3.push(`  - Suggested offset: (${t3.x ?? "center"}, ${t3.y ?? "center"})`);
          }
          e3.push("  - Retry result: " + (f2.offsetRetry.retrySucceeded ? "succeeded" : "failed"));
        }
        f2.suggestion && (e3.push(""), e3.push(`Suggestion: ${f2.suggestion}`));
        let i3 = "browser_snapshot to see current element positions";
        if (f2.scrollFailed && f2.scrollContainers && f2.scrollContainers.length > 0) {
          const t3 = f2.scrollContainers.find((t4) => t4.canScrollDown || t4.canScrollUp);
          i3 = t3 && t3.ref ? `browser_scroll with ref="${t3.ref}" and direction="down" to scroll the container, then retry click` : "browser_scroll with target ref and scrollIntoView: true, or manually scroll the nearest container";
        } else "modal" === f2.blockingType ? i3 = 'browser_press_key with key "Escape" to close modal, or browser_snapshot to find close button' : "offscreen" === f2.blockingType || "scroll-container" === f2.blockingType ? i3 = "browser_scroll with ref and scrollIntoView: true" : "dropdown" === f2.blockingType ? i3 = 'browser_press_key with key "Escape" to close dropdown, or browser_click outside the dropdown area' : "iframe" === f2.blockingType ? i3 = f2.blockingElementInfo?.iframe?.isSameOrigin && f2.blockingElementInfo?.iframe?.src ? `browser_navigate to ${f2.blockingElementInfo.iframe.src}` : "browser_navigate to iframe URL if accessible, or browser_snapshot to see alternative elements" : f2.interceptedRef && (i3 = `browser_click with ref "${f2.interceptedRef}" if that is the target, or browser_snapshot`);
        if (e3.push(""), e3.push(`Recovery action: ${i3}`), mt({ actionType: r2, targetDescription: `${s2}${t2.element ? ` (${t2.element})` : ""}`, attempts: f2.scrollAttempts ?? 1, outcome: "failure", error: f2.error, blockingInfo: f2.blockingElementInfo }), f2.pageState) {
          j.set(o2, Date.now());
          return ct(await rt({ action: `${r2} (failed)`, detailLines: e3, pageState: f2.pageState, viewId: o2, context: n2 }), o2, t2.take_screenshot_afterwards ?? false, n2);
        }
        return { content: [{ type: "text", text: e3.join("\n") }] };
      }
      const m2 = [];
      if (m2.push("- Click type: " + (f2.doubleClick ? "double-click" : "single-click")), m2.push(`- Button: ${f2.button || "left"}`), f2.refRecovered && m2.push(`- Ref recovered: original "${s2}" -> used "${f2.usedRef}"`), f2.scrollAttempts && f2.scrollAttempts > 1 && m2.push(`- Scroll attempts: ${f2.scrollAttempts}`), f2.scrolledContainers && f2.scrolledContainers > 0 && m2.push(`- Scrolled ${f2.scrolledContainers} nested container(s)`), f2.offsetUsed && m2.push(`- Position: offset (${t2.offsetX ?? "center"}, ${t2.offsetY ?? "center"})`), f2.holdDuration && f2.holdDuration > 0 && m2.push(`- Hold duration: ${f2.holdDuration}ms`), f2.dropdownRecovery && f2.dropdownRecovery.detected && (m2.push("- Dropdown recovery: " + (f2.dropdownRecovery.recoverySucceeded ? "succeeded" : "attempted")), f2.dropdownRecovery.dropdownRef && m2.push(`  - Dropdown ref: ${f2.dropdownRecovery.dropdownRef}`), m2.push(`  - Recovery action: ${f2.dropdownRecovery.recoveryAction}`)), f2.offsetRetry && f2.offsetRetry.attempted && (m2.push("- Offset retry: " + (f2.offsetRetry.retrySucceeded ? "succeeded" : "attempted")), f2.offsetRetry.suggestedOffset)) {
        const t3 = f2.offsetRetry.suggestedOffset;
        m2.push(`  - Used offset: (${t3.x ?? "center"}, ${t3.y ?? "center"})`);
      }
      mt({ actionType: r2, targetDescription: `${f2.usedRef || s2}${t2.element ? ` (${t2.element})` : ""}`, attempts: f2.scrollAttempts ?? 1, outcome: "success" }), j.set(o2, Date.now());
      return ct(await rt({ action: r2, detailLines: m2, pageState: f2.pageState, viewId: o2, context: n2 }), o2, t2.take_screenshot_afterwards ?? false, n2);
    } catch (e3) {
      const n3 = z(e3 instanceof Error ? e3 : new Error(String(e3)), { ref: t2.ref, action: r2 });
      return mt({ actionType: r2, targetDescription: t2.ref, attempts: 1, outcome: "failure", error: n3.message }), { content: [{ type: "text", text: G(n3) }] };
    }
  }
  async function gt(t2, e2, n2) {
    const r2 = "click at position", o2 = Math.round(t2.x), s2 = Math.round(t2.y), i2 = `(${o2}, ${s2})`;
    if (!Number.isFinite(o2) || !Number.isFinite(s2)) return { content: [{ type: "text", text: "Error: x and y must be finite numbers.\n\nUse coordinates from a fresh viewport screenshot." }] };
    const a2 = await ot(t2.viewId, n2);
    if (!a2) return mt({ actionType: r2, targetDescription: `(${o2}, ${s2})`, attempts: 1, outcome: "failure", error: "No browser tab available" }), { content: [{ type: "text", text: "No browser tab available. Please navigate to a page first." }] };
    const l2 = (function(t3) {
      return M.get(t3);
    })(a2);
    if (!l2) return mt({ actionType: r2, targetDescription: i2, attempts: 1, outcome: "failure", error: "No recent viewport screenshot available" }), { content: [{ type: "text", text: "Error: browser_mouse_click_xy needs a fresh screenshot for this tab.\n\nTake a screenshot right before this call. Other browser tool calls clear the cache." }] };
    const d2 = (function(t3, e3, n3) {
      const r3 = n3.viewportCssWidth / n3.sentImageWidth, o3 = n3.viewportCssHeight / n3.sentImageHeight;
      return { mappedX: Math.round(t3 * r3), mappedY: Math.round(e3 * o3), scaleX: r3, scaleY: o3 };
    })(o2, s2, l2);
    try {
      await Z("browser_mouse_click_xy", a2, n2);
      const u2 = `
			${q}
			${c}
			${ut}
			(async function() {
				const screenshotX = ${o2};
				const screenshotY = ${s2};
				const mappedX = ${d2.mappedX};
				const mappedY = ${d2.mappedY};
				const cachedUrl = ${JSON.stringify(l2.url)};
				const sentImageWidth = ${l2.sentImageWidth};
				const sentImageHeight = ${l2.sentImageHeight};

				if (window.location.href !== cachedUrl) {
					const snapshotResult = buildPageSnapshot();
					return {
						success: false,
						staleScreenshot: true,
						error: 'browser_mouse_click_xy needs a fresh screenshot. The page changed since the last one.',
						suggestion: 'Take a new screenshot for this tab, then retry with coordinates from it.',
						pageState: {
							url: window.location.href,
							title: document.title,
							snapshot: snapshotResult.tree
						}
					};
				}

				const targetElement = getDeepElementFromPoint(document, mappedX, mappedY);

				if (!targetElement) {
					const snapshotResult = buildPageSnapshot();
					return {
						success: false,
						error: 'The coordinates are outside the visible viewport.',
						suggestion: 'Take a new screenshot for this tab, then retry with coordinates from it.',
						screenshotCoordinates: { x: screenshotX, y: screenshotY },
						mappedCoordinates: { x: mappedX, y: mappedY },
						screenshotSize: { width: sentImageWidth, height: sentImageHeight },
						pageState: {
							url: window.location.href,
							title: document.title,
							snapshot: snapshotResult.tree
						}
					};
				}

				await dispatchMouseClickSequenceInBrowser(targetElement, {
					x: mappedX,
					y: mappedY,
					button: ${JSON.stringify(t2.button ?? "left")}
				});

				const snapshotResult = buildPageSnapshot();
				return {
					success: true,
					button: ${JSON.stringify(t2.button ?? "left")},
					screenshotCoordinates: { x: screenshotX, y: screenshotY },
					mappedCoordinates: { x: mappedX, y: mappedY },
					screenshotSize: { width: sentImageWidth, height: sentImageHeight },
					targetPreview: previewNode(targetElement),
					targetRef: targetElement.getAttribute ? (targetElement.getAttribute('data-cursor-ref') || undefined) : undefined,
					pageState: {
						url: window.location.href,
						title: document.title,
						snapshot: snapshotResult.tree
					}
				};
			})();
		`, p2 = nt(await e2(u2, a2, t2.headless, n2), []);
      if (!p2.success) {
        const e3 = [`Error: ${p2.error || `Failed to click at coordinates (${o2}, ${s2}).`}`];
        if (p2.screenshotCoordinates && p2.mappedCoordinates && (e3.push(`- Screenshot position: (${p2.screenshotCoordinates.x}, ${p2.screenshotCoordinates.y})`), e3.push(`- Mapped viewport position: (${p2.mappedCoordinates.x}, ${p2.mappedCoordinates.y})`)), p2.screenshotSize && e3.push(`- Screenshot size: ${p2.screenshotSize.width}x${p2.screenshotSize.height}`), p2.suggestion && e3.push("", `Suggestion: ${p2.suggestion}`), p2.staleScreenshot && Y(a2), mt({ actionType: r2, targetDescription: i2, attempts: 1, outcome: "failure", error: p2.error }), p2.pageState) {
          j.set(a2, Date.now());
          return ct(await rt({ action: `${r2} (failed)`, detailLines: e3, pageState: p2.pageState, viewId: a2, context: n2 }), a2, t2.take_screenshot_afterwards ?? false, n2);
        }
        return { content: [{ type: "text", text: e3.join("\n") }] };
      }
      const f2 = [`- Screenshot position: (${o2}, ${s2})`];
      d2.mappedX === o2 && d2.mappedY === s2 || f2.push(`- Viewport position: (${d2.mappedX}, ${d2.mappedY})`), p2.targetPreview && f2.push(`- Target: ${p2.targetPreview}`), p2.targetRef && f2.push(`- Target ref: ${p2.targetRef}`), mt({ actionType: r2, targetDescription: p2.targetPreview ?? `${i2} -> (${d2.mappedX}, ${d2.mappedY})`, attempts: 1, outcome: "success" }), Y(a2), j.set(a2, Date.now());
      return ct(await rt({ action: r2, detailLines: f2, pageState: p2.pageState, viewId: a2, context: n2 }), a2, t2.take_screenshot_afterwards ?? false, n2);
    } catch (t3) {
      const e3 = z(t3 instanceof Error ? t3 : new Error(String(t3)), { action: r2 });
      return mt({ actionType: r2, targetDescription: `(${o2}, ${s2})`, attempts: 1, outcome: "failure", error: e3.message }), { content: [{ type: "text", text: G(e3) }] };
    }
  }
  async function wt(t2, e2, n2) {
    const r2 = t2.actionType ?? "hoverAndWait", o2 = await ot(t2.viewId, n2);
    if (!o2) return mt({ actionType: r2, targetDescription: t2.ref, attempts: 1, outcome: "failure", error: "No browser tab available" }), { content: [{ type: "text", text: "No browser tab available. Please navigate to a page first." }] };
    try {
      await Z("browser_hover", o2, n2), await st(o2, t2.headless, c, n2);
      const s2 = U(t2.ref), i2 = t2.element || "", a2 = t2.maxWaitMs ?? 3e3, l2 = t2.pollIntervalMs ?? 200, d2 = t2.waitForSelector ?? null, u2 = t2.waitForText ?? null, p2 = t2.fullSnapshot ?? false, f2 = t2.verifyHoverContent ?? false, m2 = `
			${q}
			${c}
			${pt}
			
const HOVER_WAIT_INTERVALS = [100, 200, 300];

const DEFAULT_HOVER_SELECTORS = [
	'[role="tooltip"]',
	'[role="menu"]',
	'[role="listbox"]',
	'.tooltip',
	'.dropdown-menu',
	'.popover',
	'.submenu',
	'[data-tooltip]',
	'[aria-describedby]',
	'[data-state="open"]',
	'[data-radix-popper-content-wrapper]'
];

function isElementVisibleAndSized(el) {
	if (!el) return false;
	const style = window.getComputedStyle(el);
	if (style.display === 'none' || style.visibility === 'hidden' || parseFloat(style.opacity) === 0) {
		return false;
	}
	const rect = el.getBoundingClientRect();
	return rect.width > 0 && rect.height > 0;
}

function findNewlyVisibleElements(selectors, previouslyFound) {
	const found = [];
	for (const selector of selectors) {
		try {
			const elements = document.querySelectorAll(selector);
			for (const el of elements) {
				if (isElementVisibleAndSized(el)) {
					const ref = el.getAttribute('data-cursor-ref');
					const role = el.getAttribute('role') || '';
					const tag = el.tagName?.toLowerCase() || '';
					const classes = el.className && typeof el.className === 'string'
						? el.className.trim().split(/\\s+/).slice(0, 2).join(' ')
						: '';
					const desc = '<' + tag + (role ? ' role="' + role + '"' : '') + (ref ? ' ref="' + ref + '"' : '') + (classes ? ' class="' + classes + '"' : '') + '>';
					if (!previouslyFound.has(desc)) {
						found.push({ desc, ref, tag, role });
						previouslyFound.add(desc);
					}
				}
			}
		} catch (e) {}
	}
	return found;
}

async function verifyHoverContentAsync(options) {
	const waitIntervals = HOVER_WAIT_INTERVALS;
	const maxChecks = options.maxChecks || 3;
	const selectors = options.selectors && options.selectors.length > 0
		? options.selectors
		: DEFAULT_HOVER_SELECTORS;
	const textPatterns = options.textPatterns || [];

	const result = {
		verified: false,
		checksPassed: 0,
		totalChecks: maxChecks,
		foundElements: [],
		waitIntervals: [],
		totalWaitMs: 0,
		snapshotsChecked: 0
	};

	const previouslyFound = new Set();

	for (let i = 0; i < maxChecks; i++) {
		const waitMs = waitIntervals[i] || waitIntervals[waitIntervals.length - 1];
		result.waitIntervals.push(waitMs);
		result.totalWaitMs += waitMs;

		await new Promise(r => setTimeout(r, waitMs));
		result.checksPassed++;
		result.snapshotsChecked++;

		const newElements = findNewlyVisibleElements(selectors, previouslyFound);
		for (const el of newElements) {
			result.foundElements.push(el.desc);
			result.verified = true;
		}

		if (textPatterns.length > 0) {
			const bodyText = document.body.innerText || '';
			for (const pattern of textPatterns) {
				const patternKey = 'text: "' + pattern.substring(0, 30) + '"';
				if (bodyText.includes(pattern) && !previouslyFound.has(patternKey)) {
					result.verified = true;
					result.foundElements.push(patternKey);
					previouslyFound.add(patternKey);
				}
			}
		}

		if (result.verified) {
			break;
		}
	}

	return result;
}

			(async function() {
				const ref = ${JSON.stringify(s2)};
				const expectedDescription = ${JSON.stringify(i2)};
				const maxWaitMs = ${a2};
				const pollIntervalMs = ${l2};
				const waitForSelector = ${JSON.stringify(d2)};
				const waitForText = ${JSON.stringify(u2)};
				const useFullSnapshot = ${p2};
				const shouldVerifyHover = ${f2};

				const { element } = findElementByRef(ref);
				if (!element) {
					return {
						success: false,
						error: 'Element not found: ' + ref + '. Take a snapshot to get updated refs.'
					};
				}

				try {
					validateElementForInteraction(element, ref, 'hover', expectedDescription);
				} catch (e) {
					return { success: false, error: e.message };
				}

				const scrollResult = await ensureElementInView(element, 3);
				if (!scrollResult.success) {
					return {
						success: false,
						error: 'Could not scroll element into view.'
					};
				}

				const rect = element.getBoundingClientRect();
				const cx = Math.round(rect.left + rect.width / 2);
				const cy = Math.round(rect.top + rect.height / 2);

				const hitCheck = expectHitTarget({ x: cx, y: cy }, element, ref);
				if (!hitCheck.hit) {
					return {
						success: false,
						hitTargetFailed: true,
						error: hitCheck.error || 'Hover would not reach the intended element.',
						interceptedBy: hitCheck.interceptedBy,
						interceptedRef: hitCheck.interceptedRef,
						suggestion: hitCheck.suggestion
					};
				}

				const eventOptions = {
					bubbles: true,
					cancelable: true,
					view: window,
					clientX: cx,
					clientY: cy,
					pointerId: 1,
					pointerType: 'mouse',
					isPrimary: true
				};

				element.dispatchEvent(new PointerEvent('pointerover', eventOptions));
				element.dispatchEvent(new PointerEvent('pointerenter', { ...eventOptions, bubbles: false }));
				element.dispatchEvent(new MouseEvent('mouseover', eventOptions));
				element.dispatchEvent(new MouseEvent('mouseenter', { ...eventOptions, bubbles: false }));
				element.dispatchEvent(new PointerEvent('pointermove', eventOptions));
				element.dispatchEvent(new MouseEvent('mousemove', eventOptions));

				let waitedMs = 0;
				let foundTarget = false;
				let waitIterations = 0;
				let verificationResult = null;

				if (shouldVerifyHover) {
					const intervals = HOVER_WAIT_INTERVALS;
					let totalMs = 0;
					let checksNeeded = 0;
					for (let i = 0; totalMs < maxWaitMs; i++) {
						const interval = intervals[Math.min(i, intervals.length - 1)];
						totalMs += interval;
						checksNeeded++;
					}
					checksNeeded = Math.max(checksNeeded, 1);

					const verifyOptions = {
						maxChecks: checksNeeded,
						selectors: waitForSelector ? [waitForSelector] : undefined,
						textPatterns: waitForText ? [waitForText] : undefined
					};
					verificationResult = await verifyHoverContentAsync(verifyOptions);
					foundTarget = verificationResult.verified;
					waitedMs = verificationResult.totalWaitMs;
					waitIterations = verificationResult.checksPassed;
				} else if (waitForSelector || waitForText) {
					const startTime = Date.now();

					while (waitedMs < maxWaitMs) {
						waitIterations++;

						if (waitForSelector) {
							const target = document.querySelector(waitForSelector);
							if (target) {
								const style = window.getComputedStyle(target);
								if (style.display !== 'none' && style.visibility !== 'hidden' && parseFloat(style.opacity) > 0) {
									foundTarget = true;
									break;
								}
							}
						}

						if (waitForText) {
							const bodyText = document.body.innerText || '';
							if (bodyText.includes(waitForText)) {
								foundTarget = true;
								break;
							}
						}

						const currentInterval = Math.min(pollIntervalMs * Math.pow(1.5, waitIterations - 1), 500);
						await new Promise(r => setTimeout(r, currentInterval));
						waitedMs = Date.now() - startTime;
					}
				} else {
					await new Promise(r => setTimeout(r, 100));
					foundTarget = true;
				}

				const snapshotResult = buildPageSnapshot({ compact: !useFullSnapshot });
				return {
					success: true,
					waitedMs,
					waitIterations,
					foundTarget,
					waitCondition: waitForSelector ? 'selector: ' + waitForSelector : (waitForText ? 'text: ' + waitForText : 'none'),
					snapshotMode: useFullSnapshot ? 'full' : 'compact',
					verificationResult: verificationResult,
					pageState: {
						url: window.location.href,
						title: document.title,
						snapshot: snapshotResult.tree
					}
				};
			})();
		`, h2 = nt(await e2(m2, o2, t2.headless, n2), []);
      if (!h2.success) {
        mt({ actionType: r2, targetDescription: s2, attempts: 1, outcome: "failure", error: h2.error });
        return { content: [{ type: "text", text: G(z(h2.error || "Hover failed", { ref: t2.ref, action: r2 })) }] };
      }
      const g2 = [];
      g2.push(`- Hovered over element: ${s2}`), h2.waitCondition && "none" !== h2.waitCondition && (g2.push(`- Wait condition: ${h2.waitCondition}`), g2.push("- Target found: " + (h2.foundTarget ? "yes" : "no")), g2.push(`- Waited: ${h2.waitedMs}ms (${h2.waitIterations} iterations)`)), h2.snapshotMode && g2.push(`- Snapshot mode: ${h2.snapshotMode}`), h2.verificationResult && (g2.push("- Hover verification: " + (h2.verificationResult.verified ? "passed" : "failed")), g2.push(`- Checks: ${h2.verificationResult.checksPassed}/${h2.verificationResult.totalChecks}`), h2.verificationResult.foundElements.length > 0 && g2.push(`- Found elements: ${h2.verificationResult.foundElements.join(", ")}`), g2.push(`- Wait intervals: [${h2.verificationResult.waitIntervals.join("ms, ")}ms]`), h2.verificationResult.verified || (g2.push(""), g2.push("Hover content verification failed:"), g2.push(`  - Checked ${h2.verificationResult.snapshotsChecked || h2.verificationResult.checksPassed} snapshots at intervals [100ms, 200ms, 300ms]`), g2.push("  - No tooltip, menu, or submenu elements appeared"), g2.push(`  - Snapshot mode used: ${h2.snapshotMode || "compact"}`), g2.push(""), g2.push("Suggestions:"), g2.push("  - Try using fullSnapshot: true for more detailed element detection"), g2.push("  - The hover target may not have hover-triggered content"), g2.push("  - Check if the element requires a longer hover duration")));
      const w2 = h2.verificationResult ? h2.verificationResult.verified : h2.foundTarget;
      mt({ actionType: r2, targetDescription: s2, attempts: 1, outcome: w2 ? "success" : "failure", error: w2 ? void 0 : "Hover content not detected after verification" }), j.set(o2, Date.now());
      return ct(await rt({ action: r2, detailLines: g2, pageState: h2.pageState, viewId: o2, context: n2 }), o2, t2.take_screenshot_afterwards ?? false, n2);
    } catch (e3) {
      const n3 = z(e3 instanceof Error ? e3 : new Error(String(e3)), { ref: t2.ref, action: r2 });
      return mt({ actionType: r2, targetDescription: t2.ref, attempts: 1, outcome: "failure", error: n3.message }), { content: [{ type: "text", text: G(n3) }] };
    }
  }
  function bt(t2) {
    return { async navigate(e2, n2) {
      await (async function(t3) {
        await s.commands.executeCommand("cursor.browserOriginAllowlist.ensureNavigationAllowed", { url: t3 });
      })(e2.url), e2.headless && !e2.viewId && n2?.ownerAgentId && (e2 = { ...e2, viewId: `${n2.ownerAgentId}:headless` }), a.info(`Navigating to ${e2.url}${e2.headless ? " (headless)" : ""}`);
      const r2 = { ownerAgentId: n2?.ownerAgentId }, o2 = await s.commands.executeCommand("cursor.browserView.listTabs", r2), i2 = o2?.tabs ?? [], l2 = new Set(o2?.headlessTabs ?? []);
      let c2 = false;
      if (e2.viewId) {
        const r3 = i2.includes(e2.viewId);
        if (!r3 && e2.headless) {
          a.info(`Creating headless tab with viewId: ${e2.viewId}`);
          const r4 = await s.commands.executeCommand("cursor.browserView.newHeadlessTab", e2.url, e2.viewId, n2?.ownerAgentId);
          return r4?.browserId ? t2.snapshot({ viewId: r4.browserId, headless: true, take_screenshot_afterwards: e2.take_screenshot_afterwards }, n2) : { content: [{ type: "text", text: "Failed to create headless browser tab" }] };
        }
        if (!r3) return { content: [{ type: "text", text: `Browser view not found: ${e2.viewId}. Use browser_navigate without a viewId to create a new tab.` }] };
        let o3;
        try {
          j.delete(e2.viewId), await s.commands.executeCommand("cursor.browserView.navigate", e2.url, e2.viewId, { headless: e2.headless, preserveFocus: true, trackingId: "mcp_tool", ownerAgentId: n2?.ownerAgentId }), o3 = e2.viewId;
        } catch (t3) {
          if (e2.headless) throw t3;
          a.warn(`Navigate to viewId ${e2.viewId} failed, creating a new tab: ${t3 instanceof Error ? t3.message : String(t3)}`), c2 = true;
        }
        if (o3) return await t2.snapshot({ viewId: o3, headless: e2.headless, take_screenshot_afterwards: e2.take_screenshot_afterwards }, n2);
      }
      if (!c2 && i2.length > 0 && !e2.headless && !e2.newTab) {
        const r3 = i2.find((t3) => !l2.has(t3));
        if (r3) {
          let o3 = false;
          try {
            j.delete(r3), await s.commands.executeCommand("cursor.browserView.navigate", e2.url, r3, { preserveFocus: true, trackingId: "mcp_tool", ownerAgentId: n2?.ownerAgentId }), o3 = true;
          } catch (t3) {
            a.warn(`Reuse of tab ${r3} failed, creating a new tab: ${t3 instanceof Error ? t3.message : String(t3)}`);
          }
          if (o3) return await t2.snapshot({ viewId: r3, take_screenshot_afterwards: e2.take_screenshot_afterwards }, n2);
        }
      }
      if (e2.headless) {
        const r3 = await s.commands.executeCommand("cursor.browserView.newHeadlessTab", e2.url, void 0, n2?.ownerAgentId);
        return r3?.browserId ? t2.snapshot({ viewId: r3.browserId, headless: true, take_screenshot_afterwards: e2.take_screenshot_afterwards }, n2) : { content: [{ type: "text", text: "Failed to create headless browser tab" }] };
      }
      const d2 = { preserveFocus: void 0 === e2.position, trackingId: "mcp_tool", agentId: n2?.ownerAgentId };
      e2.position && (d2.position = e2.position);
      const u2 = await s.commands.executeCommand("cursor.browserView.newTab", e2.url, d2);
      return u2?.browserId ? t2.snapshot({ viewId: u2.browserId, take_screenshot_afterwards: e2.take_screenshot_afterwards }, n2) : { content: [{ type: "text", text: "Failed to create new browser tab" }] };
    }, async tabs(e2, n2) {
      const r2 = { ownerAgentId: n2?.ownerAgentId };
      switch (e2.action) {
        case "list": {
          const t3 = await s.commands.executeCommand("cursor.browserView.listTabs", r2);
          if (!t3 || !t3.tabs) return { content: [{ type: "text", text: "Open tabs:\n(none)" }] };
          return { content: [{ type: "text", text: `Open tabs:
${(await Promise.all(t3.tabs.map(async (t4, e3) => {
            const [n3, o2] = await Promise.all([s.commands.executeCommand("cursor.browserView.getURL", t4, r2), s.commands.executeCommand("cursor.browserView.getTitle", t4, r2)]);
            return `[${e3}] "${o2 || "New Tab"}" - ${n3 || "about:blank"} (viewId: ${t4})`;
          }))).join("\n")}` }] };
        }
        case "new": {
          const t3 = { preserveFocus: void 0 === e2.position, trackingId: "mcp_tool", agentId: n2?.ownerAgentId };
          e2.position && (t3.position = e2.position);
          const r3 = await s.commands.executeCommand("cursor.browserView.newTab", void 0, t3), o2 = r3?.browserId, i2 = [{ type: "text", text: "Created new tab" + ("side" === e2.position ? " on the side" : "") }];
          return o2 && i2.push({ type: "metadata", viewId: o2, title: "New Tab", url: "about:blank" }), { content: i2 };
        }
        case "close": {
          const o2 = await s.commands.executeCommand("cursor.browserView.listTabs", r2), i2 = o2?.tabs ?? [], a2 = void 0 !== e2.index ? i2[e2.index] : void 0;
          let l2 = "Tab", c2 = "";
          if (a2) {
            const [t3, e3] = await Promise.all([s.commands.executeCommand("cursor.browserView.getTitle", a2, r2), s.commands.executeCommand("cursor.browserView.getURL", a2, r2)]);
            l2 = t3 || "Tab", c2 = e3 || "";
          }
          await s.commands.executeCommand("cursor.browserView.closeTab", a2, r2);
          const d2 = await s.commands.executeCommand("cursor.browserView.listTabs", r2), u2 = d2?.activeTab ?? d2?.lastInteractedTab;
          return u2 ? t2.snapshot({ viewId: u2 }, n2) : { content: [{ type: "text", text: "Tab closed. No remaining tabs." }, { type: "metadata", viewId: a2 || "", title: l2, url: c2 }] };
        }
        case "select": {
          if (void 0 === e2.index) throw new Error("Tab index is required");
          const o2 = await s.commands.executeCommand("cursor.browserView.listTabs", r2), i2 = (o2?.tabs ?? [])[e2.index];
          if (!i2) throw new Error(`Tab ${e2.index} not found`);
          await s.commands.executeCommand("cursor.browserView.selectTab", i2, { preserveFocus: true, ownerAgentId: n2?.ownerAgentId });
          const [a2, l2] = await Promise.all([s.commands.executeCommand("cursor.browserView.getTitle", i2, r2), s.commands.executeCommand("cursor.browserView.getURL", i2, r2)]), c2 = await t2.snapshot({ viewId: i2 }, n2), d2 = c2.content?.find((t3) => "metadata" === t3.type);
          return d2 && "metadata" === d2.type && (d2.title = a2 || "New Tab", d2.url = l2 || "about:blank"), c2;
        }
        default:
          throw new Error(`Unknown action: ${e2.action}`);
      }
    } };
  }
  function yt(t2) {
    return { async snapshot(t3, e2) {
      const n2 = await ot(t3.viewId, e2);
      if (!n2) return { content: [{ type: "text", text: "No browser tab available. Please navigate to a page first." }] };
      await Z("browser_snapshot", n2, e2);
      const r2 = { interactive: t3.interactive ?? false, maxDepth: t3.maxDepth ?? 20, compact: t3.compact ?? false, selector: t3.selector ?? null }, o2 = `
				${c}
				(function() {
					const options = ${JSON.stringify(r2)};
					const result = buildPageSnapshot(options);
					return {
						success: true,
						pageState: {
							url: window.location.href,
							title: document.title,
							snapshot: result.tree
						},
						stats: result.stats
					};
				})();
			`, s2 = await et(o2, n2, t3.headless, e2);
      if (!s2?.pageState || !s2.stats) throw new Error("Browser tab is detached or unresponsive. Retry browser_navigate to recreate it.");
      j.set(n2, Date.now());
      const i2 = [];
      s2.stats && (i2.push(`- Total refs: ${s2.stats.totalRefs}`), i2.push(`- Interactive refs: ${s2.stats.interactiveRefs}`), t3.interactive && i2.push("- Filter: interactive only"), t3.compact && i2.push("- Filter: compact mode"), t3.selector && i2.push(`- Selector: ${t3.selector}`));
      const a2 = Q(s2.pageState.snapshot), l2 = await rt({ action: "snapshot", detailLines: i2.length > 0 ? i2 : void 0, pageState: s2.pageState, viewId: n2, snapshotYaml: a2, includeSnapshotDiff: t3.includeDiff ?? false, context: e2 });
      return (function(t4, e3) {
        K.set(t4, e3);
      })(n2, a2), ct(l2, n2, t3.take_screenshot_afterwards ?? false, e2);
    } };
  }
  const vt = u.join(p.homedir(), ".cursor", "browser-logs");
  async function xt(t2, e2) {
    await d.mkdir(vt, { recursive: true });
    const n2 = u.join(vt, (function(t3) {
      const e3 = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-"), n3 = t3.replace(/[^a-zA-Z0-9.-]/g, "_");
      return `${"Profiler.stop" === t3 ? "cdp-profile" : "cdp-response"}-${n3}-${e3}.json`;
    })(t2));
    return await d.writeFile(n2, e2, "utf8"), { filePath: n2, sizeBytes: Buffer.byteLength(e2, "utf8") };
  }
  const Et = (function() {
    const t2 = {}, e2 = bt(t2), n2 = yt(), r2 = /* @__PURE__ */ (function(t3) {
      return { async cdp(e3, n3) {
        const r3 = await ot(e3.viewId, n3);
        if (!r3) return { content: [{ type: "text", text: "No browser tab available. Please navigate to a page first." }] };
        await Z("browser_cdp", r3, n3);
        const o3 = await s.commands.executeCommand("cursor.browserView.sendCDPCommand", e3.method, e3.params ?? {}, r3, { ownerAgentId: n3?.ownerAgentId }), i3 = JSON.stringify(o3 ?? {}, null, 2);
        let a2;
        if ((function(t4, e4) {
          return "Profiler.stop" === t4 || e4.length > 25e3;
        })(e3.method, i3)) {
          const { filePath: t4, sizeBytes: n4 } = await xt(e3.method, i3);
          a2 = { content: [{ type: "text", text: `${"Profiler.stop" === e3.method ? "Profile data can be large, so it was saved to a file instead of being inlined." : "CDP response exceeded 25000 characters, so it was saved to a file instead of being inlined."}
File: ${t4}` }, { type: "log_file", file: t4, size: n4 }, { type: "metadata", viewId: r3 }] };
        } else a2 = { content: [{ type: "text", text: i3 }, { type: "metadata", viewId: r3 }] };
        if (!e3.take_screenshot_afterwards) return a2;
        const l2 = await t3.takeScreenshot({ viewId: r3, headless: e3.headless }, n3);
        return { content: [...a2.content, ...l2.content] };
      }, async takeScreenshot(t4, e3) {
        const n3 = await ot(t4.viewId, e3);
        if (!n3) return { content: [{ type: "text", text: "No browser tab available. Please navigate to a page first." }] };
        await Z("browser_take_screenshot", n3, e3);
        let r3 = { ...t4, viewId: n3, headless: t4.headless, ownerAgentId: e3?.ownerAgentId };
        if (t4.filename && !/\.[a-zA-Z0-9]+$/.test(t4.filename)) {
          const e4 = t4.type || "png";
          r3 = { ...r3, filename: `${t4.filename}.${e4}` };
        }
        const o3 = new Promise((t5) => {
          setTimeout(() => {
            t5({ success: false, error: "screen shot timed out, please try again" });
          }, 5e3);
        }), i3 = s.commands.executeCommand("cursor.browserView.takeScreenshot", r3), a2 = await Promise.race([i3, o3]);
        if (!a2.success || a2.error) return { content: [{ type: "text", text: `Screenshot failed: ${a2.error || "Unknown error"}` }] };
        if (a2.dataUrl) {
          await it(n3, a2.dataUrl);
          const o4 = await at(n3, a2.dataUrl, { cacheViewportScreenshot: (l2 = r3, !l2.fullPage && !l2.ref && !l2.element), headless: t4.headless, context: e3 });
          if (o4) {
            const t5 = ["Screenshot captured successfully"];
            return a2.filename && t5.push(`Filename: ${a2.filename}`), a2.savedPath && t5.push(`Saved to: ${a2.savedPath}`), { content: [{ type: "text", text: t5.join("\n") }, o4, { type: "metadata", viewId: n3 }] };
          }
        }
        var l2;
        return { content: [{ type: "text", text: a2.savedPath ? `Screenshot saved to: ${a2.savedPath}` : "Screenshot captured but no image data available" }, { type: "metadata", viewId: n3 }] };
      }, async scroll(t4, e3) {
        const n3 = await ot(t4.viewId, e3);
        if (!n3) return { content: [{ type: "text", text: "No browser tab available. Please navigate to a page first." }] };
        await Z("browser_scroll", n3, e3);
        let r3 = t4.deltaX ?? 0, o3 = t4.deltaY ?? 0;
        const s2 = t4.amount ?? 300;
        if (t4.direction) switch (t4.direction) {
          case "up":
            o3 = -s2;
            break;
          case "down":
            o3 = s2;
            break;
          case "left":
            r3 = -s2;
            break;
          case "right":
            r3 = s2;
        }
        const i3 = t4.scrollIntoView ?? (t4.ref && 0 === r3 && 0 === o3), a2 = t4.ref ? U(t4.ref) : void 0, l2 = `
				(async function() {
					${q}

					const ref = ${JSON.stringify(a2)};
					const deltaX = ${r3};
					const deltaY = ${o3};
					const scrollIntoView = ${i3};

					function getScrollableAncestors(el) {
						const ancestors = [];
						let current = el.parentElement;
						while (current && current !== document.body && current !== document.documentElement) {
							const style = window.getComputedStyle(current);
							const overflowY = style.overflowY;
							const overflowX = style.overflowX;
							const isScrollable = (
								(overflowY === 'auto' || overflowY === 'scroll' || overflowX === 'auto' || overflowX === 'scroll') &&
								(current.scrollHeight > current.clientHeight || current.scrollWidth > current.clientWidth)
							);
							if (isScrollable) {
								ancestors.push(current);
							}
							current = current.parentElement;
						}
						return ancestors;
					}

					function isElementVisibleInContainer(el, container) {
						const elRect = el.getBoundingClientRect();
						const containerRect = container.getBoundingClientRect();
						const padding = 10;
						return (
							elRect.top >= containerRect.top - padding &&
							elRect.bottom <= containerRect.bottom + padding &&
							elRect.left >= containerRect.left - padding &&
							elRect.right <= containerRect.right + padding
						);
					}

					function scrollElementIntoContainer(el, container) {
						const elRect = el.getBoundingClientRect();
						const containerRect = container.getBoundingClientRect();

						let scrollTopDelta = 0;
						let scrollLeftDelta = 0;

						const elCenterY = elRect.top + elRect.height / 2;
						const containerCenterY = containerRect.top + containerRect.height / 2;
						const elCenterX = elRect.left + elRect.width / 2;
						const containerCenterX = containerRect.left + containerRect.width / 2;

						scrollTopDelta = elCenterY - containerCenterY;
						scrollLeftDelta = elCenterX - containerCenterX;

						if (Math.abs(scrollTopDelta) > 5 || Math.abs(scrollLeftDelta) > 5) {
							container.scrollBy({ top: scrollTopDelta, left: scrollLeftDelta, behavior: 'instant' });
							return true;
						}
						return false;
					}

					if (ref) {
						const { element } = findElementByRef(ref);
						if (!element) {
							return {
								success: false,
								error: 'Element not found: ' + ref + '. Take a snapshot to get updated refs.'
							};
						}

						if (scrollIntoView) {
							const scrollableAncestors = getScrollableAncestors(element);
							let scrolledContainers = 0;

							for (const container of scrollableAncestors) {
								if (!isElementVisibleInContainer(element, container)) {
									scrollElementIntoContainer(element, container);
									scrolledContainers++;
									await new Promise(r => setTimeout(r, 100));
								}
							}

							element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
							await new Promise(r => setTimeout(r, 200));

							const finalRect = element.getBoundingClientRect();
							const isVisible = finalRect.top >= 0 && finalRect.bottom <= window.innerHeight &&
								finalRect.left >= 0 && finalRect.right <= window.innerWidth;

							return {
								success: true,
								action: 'scrollIntoView',
								ref: ref,
								scrolledContainers: scrolledContainers,
								isNowVisible: isVisible,
								message: 'Scrolled element into view' + (scrolledContainers > 0 ? ' (scrolled ' + scrolledContainers + ' nested container(s))' : '') + (isVisible ? '' : ' (element may still be partially obscured)')
							};
						} else {
							const scrollableParent = getScrollableAncestors(element)[0];

							if (scrollableParent) {
								const beforeX = scrollableParent.scrollLeft;
								const beforeY = scrollableParent.scrollTop;
								scrollableParent.scrollBy({ left: deltaX, top: deltaY, behavior: 'smooth' });
								await new Promise(r => setTimeout(r, 200));
								const actualDeltaX = scrollableParent.scrollLeft - beforeX;
								const actualDeltaY = scrollableParent.scrollTop - beforeY;

								const containerRef = scrollableParent.getAttribute('data-cursor-ref');
								return {
									success: true,
									action: 'scrollContainer',
									ref: ref,
									containerRef: containerRef || undefined,
									scrolled: { deltaX: actualDeltaX, deltaY: actualDeltaY },
									message: 'Scrolled container by (' + actualDeltaX + ', ' + actualDeltaY + ') pixels'
								};
							} else {
								return {
									success: false,
									error: 'Element ' + ref + ' is not inside a scrollable container.',
									suggestion: 'Use scrollIntoView: true to scroll the element into view using the standard scrollIntoView method, or omit the ref to scroll the main page.'
								};
							}
						}
					} else {
						const beforeX = window.scrollX;
						const beforeY = window.scrollY;
						window.scrollBy({ left: deltaX, top: deltaY, behavior: 'smooth' });
						await new Promise(r => setTimeout(r, 200));
						const actualDeltaX = window.scrollX - beforeX;
						const actualDeltaY = window.scrollY - beforeY;

						if (actualDeltaX === 0 && actualDeltaY === 0 && (deltaX !== 0 || deltaY !== 0)) {
							return {
								success: true,
								action: 'scroll',
								warning: 'Page may have reached scroll boundary',
								message: 'Attempted to scroll page, but no scroll occurred (may be at edge)'
							};
						}

						return {
							success: true,
							action: 'scroll',
							scrolled: { deltaX: actualDeltaX, deltaY: actualDeltaY },
							message: 'Scrolled page by (' + actualDeltaX + ', ' + actualDeltaY + ') pixels'
						};
					}
				})();
			`, c2 = nt(await et(l2, n3, t4.headless, e3), []);
        if (!c2.success) return { content: [{ type: "text", text: G(z(c2.error || "Unknown scroll error", { ref: t4.ref })) }] };
        const d2 = ["### Action: scroll"];
        return d2.push(`- ${c2.message}`), c2.scrolled && d2.push(`- Actual scroll: (${c2.scrolled.deltaX}px, ${c2.scrolled.deltaY}px)`), c2.warning && d2.push(`- Warning: ${c2.warning}`), ct({ content: [{ type: "text", text: d2.join("\n") }, { type: "metadata", viewId: n3 }] }, n3, t4.take_screenshot_afterwards ?? false, e3);
      }, async getBoundingBox(t4, e3) {
        const n3 = await ot(t4.viewId, e3);
        if (!n3) return { content: [{ type: "text", text: "No browser tab available. Please navigate to a page first." }] };
        try {
          await Z("browser_get_bounding_box", n3, e3), await st(n3, t4.headless, c, e3);
          const r3 = U(t4.ref), o3 = t4.element || "", s2 = `
					${q}
					(function() {
						const ref = ${JSON.stringify(r3)};
						const expectedDescription = ${JSON.stringify(o3)};
						const { element } = findElementByRef(ref);
						if (!element) {
							return { success: false, error: 'Element not found: ' + ref + '. Take a snapshot to get updated refs.' };
						}
						assertDescriptionMatches(element, ref, expectedDescription);
						const rect = element.getBoundingClientRect();
						const x = rect.left + window.scrollX;
						const y = rect.top + window.scrollY;
						return {
							success: true,
							box: {
								x,
								y,
								width: rect.width,
								height: rect.height,
								top: rect.top,
								left: rect.left,
								right: rect.right,
								bottom: rect.bottom
							}
						};
					})();
				`, i3 = nt(await et(s2, n3, t4.headless, e3), ["box"]).box;
          return { content: [{ type: "text", text: `Bounding box: x=${Math.round(i3.x)}, y=${Math.round(i3.y)}, w=${Math.round(i3.width)}, h=${Math.round(i3.height)}` }, { type: "metadata", viewId: n3 }] };
        } catch (e4) {
          return { content: [{ type: "text", text: G(z(e4 instanceof Error ? e4 : new Error(String(e4)), { ref: t4.ref, action: "get_bounding_box" })) }] };
        }
      }, async highlight(t4, e3) {
        const n3 = await ot(t4.viewId, e3);
        if (!n3) return { content: [{ type: "text", text: "No browser tab available. Please navigate to a page first." }] };
        try {
          await Z("browser_highlight", n3, e3), await st(n3, t4.headless, c, e3);
          const r3 = U(t4.ref), o3 = t4.element || "", s2 = t4.durationMs ?? 2e3, i3 = `
					${q}
					(function() {
						const ref = ${JSON.stringify(r3)};
						const expectedDescription = ${JSON.stringify(o3)};
						const durationMs = ${s2};
						const { element } = findElementByRef(ref);
						if (!element) {
							return { success: false, error: 'Element not found: ' + ref + '. Take a snapshot to get updated refs.' };
						}
						assertDescriptionMatches(element, ref, expectedDescription);

						const styleId = 'cursor-highlight-style';
						if (!document.getElementById(styleId)) {
							const style = document.createElement('style');
							style.id = styleId;
							style.textContent = '.cursor-highlighted { outline: 2px solid #ff6a00; box-shadow: 0 0 0 2px rgba(255, 106, 0, 0.4); }';
							document.head.appendChild(style);
						}

						element.classList.add('cursor-highlighted');
						setTimeout(() => {
							element.classList.remove('cursor-highlighted');
						}, durationMs);

						return { success: true, durationMs };
					})();
				`;
          return { content: [{ type: "text", text: `Highlighted element for ${nt(await et(i3, n3, t4.headless, e3), ["durationMs"]).durationMs}ms` }, { type: "metadata", viewId: n3 }] };
        } catch (e4) {
          return { content: [{ type: "text", text: G(z(e4 instanceof Error ? e4 : new Error(String(e4)), { ref: t4.ref, action: "highlight" })) }] };
        }
      }, async lock(t4, e3) {
        const n3 = await ot(t4.viewId, e3);
        if (!n3) return { content: [{ type: "text", text: "No browser tab available. Please navigate to a page first." }] };
        const r3 = "unlock" === t4.action, o3 = await s.commands.executeCommand("cursor.browserView.setLocked", n3, !r3, { ownerAgentId: e3?.ownerAgentId });
        return o3?.success ? { content: [{ type: "text", text: r3 ? "Browser unlocked." : "Browser locked." }, await lt(n3, void 0, e3)] } : { content: [{ type: "text", text: r3 ? "Failed to unlock browser." : "Failed to lock browser." }] };
      } };
    })(t2), o2 = { async type(t3, e3) {
      const n3 = await ot(t3.viewId, e3);
      if (!n3) return { content: [{ type: "text", text: "No browser tab available. Please navigate to a page first." }] };
      try {
        await Z("browser_type", n3, e3), await st(n3, t3.headless, c, e3);
        const r3 = U(t3.ref), o3 = t3.element || "", s2 = `
					${q}
					${c}
					${dt}
					(async function() {
						const ref = ${JSON.stringify(r3)};
						const expectedDescription = ${JSON.stringify(o3)};
						const { element } = findElementByRef(ref);
						validateElementForInteraction(element, ref, 'type', expectedDescription);

						const rect = element.getBoundingClientRect();
						const scrollPadding = 50;
						const needsScroll = rect.top < scrollPadding || rect.left < scrollPadding ||
							rect.bottom > window.innerHeight - scrollPadding || rect.right > window.innerWidth - scrollPadding;
						if (needsScroll) {
							element.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
							await new Promise(r => setTimeout(r, 300));
						}

						const tagName = element.tagName.toUpperCase();
						const isContentEditable = element.isContentEditable;

						const valueBefore = isContentEditable ? element.textContent : element.value;

						const previousActiveElement = document.activeElement;
						if (previousActiveElement && previousActiveElement !== element && previousActiveElement !== document.body) {
							if (typeof previousActiveElement.blur === 'function') {
								previousActiveElement.blur();
							}
						}

						element.focus();

						await new Promise(r => setTimeout(r, 0));

						if (document.activeElement !== element) {
							element.click();
							element.focus();
							await new Promise(r => setTimeout(r, 0));
						}

						if (document.activeElement !== element) {
							const elementTag = element.tagName?.toLowerCase() || 'element';
							const focusBlockers = [];

							const style = window.getComputedStyle(element);
							if (element.tabIndex < 0) focusBlockers.push('negative tabindex');
							if (style.display === 'none') focusBlockers.push('display: none');
							if (style.visibility === 'hidden') focusBlockers.push('visibility: hidden');
							if (element.disabled) focusBlockers.push('disabled attribute');

							const hitCheck = document.elementFromPoint(
								rect.left + rect.width / 2,
								rect.top + rect.height / 2
							);
							if (hitCheck && hitCheck !== element && !element.contains(hitCheck)) {
								const hitPreview = hitCheck.tagName?.toLowerCase() + (hitCheck.getAttribute('data-cursor-ref') ? ' (ref: ' + hitCheck.getAttribute('data-cursor-ref') + ')' : '');
								focusBlockers.push('another element at position: ' + hitPreview);
							}

							const reason = focusBlockers.length > 0
								? ' Possible reasons: ' + focusBlockers.join(', ') + '.'
								: ' The element may not be focusable, or another element may be intercepting focus.';
							throw new Error('Failed to focus ' + elementTag + ' ' + ref + '.' + reason + ' Try taking a fresh snapshot to verify the element state.');
						}

						const text = ${JSON.stringify(t3.text)};
						const clearFirst = ${JSON.stringify(t3.clear)} || false;
						const slowly = ${JSON.stringify(t3.slowly)} || false;
						const submit = ${JSON.stringify(t3.submit)} || false;

						function dispatchInputEvent(el) {
							const inputEvent = new InputEvent('input', { bubbles: true, cancelable: true, inputType: 'insertText', data: text });
							el.dispatchEvent(inputEvent);
						}

						if (clearFirst) {
							if (isContentEditable) {
								element.textContent = '';
							} else {
								setNativeValue(element, '');
							}
							element.dispatchEvent(new Event('input', { bubbles: true }));
						}

						if (slowly) {
							const delay = 50;
							const existingValue = clearFirst ? '' : (isContentEditable ? (element.textContent || '') : (element.value || ''));
							for (let i = 0; i < text.length; i++) {
								const char = text[i];
								if (isContentEditable) {
									const selection = window.getSelection();
									const range = document.createRange();
									range.selectNodeContents(element);
									range.collapse(false);
									selection.removeAllRanges();
									selection.addRange(range);
									document.execCommand('insertText', false, char);
								} else {
									setNativeValue(element, existingValue + text.substring(0, i + 1));
								}
								element.dispatchEvent(new KeyboardEvent('keydown', { key: char, bubbles: true, cancelable: true }));
								dispatchInputEvent(element);
								element.dispatchEvent(new KeyboardEvent('keyup', { key: char, bubbles: true, cancelable: true }));
								await new Promise(r => setTimeout(r, delay));
							}
						} else {
							if (isContentEditable) {
								const existingContent = clearFirst ? '' : (element.textContent || '');
								element.textContent = existingContent + text;
								element.dispatchEvent(new Event('input', { bubbles: true }));
							} else {
								const existingValue = clearFirst ? '' : (element.value || '');
								setNativeValue(element, existingValue + text);
								dispatchInputEvent(element);
							}
						}

						element.dispatchEvent(new Event('change', { bubbles: true }));

						if (submit) {
							element.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13, code: 'Enter', which: 13, bubbles: true, cancelable: true }));
							element.dispatchEvent(new KeyboardEvent('keypress', { key: 'Enter', keyCode: 13, code: 'Enter', which: 13, bubbles: true, cancelable: true }));
							element.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', keyCode: 13, code: 'Enter', which: 13, bubbles: true, cancelable: true }));
						}

						const valueAfter = isContentEditable ? element.textContent : element.value;
						const valueChanged = valueBefore !== valueAfter;
						const valueMatchesExpected = isContentEditable
							? (element.textContent || '').includes(text)
							: element.value === text || element.value.endsWith(text);

						const maxLength = element.maxLength;
						const hasMaxLength = maxLength > 0 && maxLength !== 2147483647;
						const exceedsMaxLength = hasMaxLength && (valueAfter?.length || 0) > maxLength;

						const snapshotResult = buildPageSnapshot();
						return {
							success: true,
							slowly,
							submitted: submit,
							textLength: text.length,
							valueChanged,
							valueMatchesExpected,
							actualValue: valueAfter ? String(valueAfter).substring(0, 100) : '',
							maxLength: hasMaxLength ? maxLength : null,
							exceedsMaxLength,
							pageState: {
								url: window.location.href,
								title: document.title,
								snapshot: snapshotResult.tree
							}
						};
					})();
				`, i3 = await et(s2, n3, t3.headless, e3), a2 = [];
        return a2.push(`- Characters typed: ${i3.textLength}`), a2.push("- Typing mode: " + (i3.slowly ? "slow (character-by-character)" : "fast")), t3.clear && a2.push("- Cleared existing content: yes"), i3.submitted && a2.push("- Form submitted: yes (Enter key pressed)"), i3.valueChanged || a2.push("- WARNING: Value did not change after typing"), !i3.valueMatchesExpected && i3.valueChanged && a2.push(`- Note: Final value differs from input (actual: "${i3.actualValue}")`), i3.exceedsMaxLength && null !== i3.maxLength && a2.push(`- Note: Input exceeds maxlength attribute (${i3.maxLength}). Browser automation bypasses maxlength validation. Server-side validation may still reject this value.`), j.set(n3, Date.now()), ct(await rt({ action: "type", detailLines: a2, pageState: i3.pageState, viewId: n3, context: e3 }), n3, t3.take_screenshot_afterwards ?? false, e3);
      } catch (e4) {
        return { content: [{ type: "text", text: G(z(e4 instanceof Error ? e4 : new Error(String(e4)), { ref: t3.ref, action: "type" })) }] };
      }
    }, async fill(t3, e3) {
      const n3 = await ot(t3.viewId, e3);
      if (!n3) return { content: [{ type: "text", text: "No browser tab available. Please navigate to a page first." }] };
      try {
        await Z("browser_fill", n3, e3), await st(n3, t3.headless, c, e3);
        const r3 = U(t3.ref), o3 = t3.element || "", s2 = `
					${q}
					${c}
					${dt}
					(async function() {
						const ref = ${JSON.stringify(r3)};
						const expectedDescription = ${JSON.stringify(o3)};
						const { element } = findElementByRef(ref);
						validateElementForInteraction(element, ref, 'fill', expectedDescription);

						const rect = element.getBoundingClientRect();
						const scrollPadding = 50;
						const needsScroll = rect.top < scrollPadding || rect.left < scrollPadding ||
							rect.bottom > window.innerHeight - scrollPadding || rect.right > window.innerWidth - scrollPadding;
						if (needsScroll) {
							element.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
							await new Promise(r => setTimeout(r, 300));
						}

						const tagName = element.tagName.toUpperCase();
						const isContentEditable = element.isContentEditable;

						const previousActiveElement = document.activeElement;
						if (previousActiveElement && previousActiveElement !== element && previousActiveElement !== document.body) {
							if (typeof previousActiveElement.blur === 'function') {
								previousActiveElement.blur();
							}
						}

						element.focus();
						await new Promise(r => setTimeout(r, 0));

						if (document.activeElement !== element) {
							element.click();
							element.focus();
							await new Promise(r => setTimeout(r, 0));
						}

						const value = ${JSON.stringify(t3.value)};

						if (isContentEditable) {
							element.textContent = '';
							element.textContent = value;
						} else {
							setNativeValue(element, '');
							setNativeValue(element, value);
						}

						element.dispatchEvent(new Event('input', { bubbles: true }));
						element.dispatchEvent(new Event('change', { bubbles: true }));

						const snapshotResult = buildPageSnapshot();
						return {
							success: true,
							value: value,
							pageState: {
								url: window.location.href,
								title: document.title,
								snapshot: snapshotResult.tree
							}
						};
					})();
				`, i3 = await et(s2, n3, t3.headless, e3);
        return j.set(n3, Date.now()), ct(await rt({ action: "fill", detailLines: [`- Filled with value: "${i3.value.substring(0, 50)}${i3.value.length > 50 ? "..." : ""}"`], pageState: i3.pageState, viewId: n3, context: e3 }), n3, t3.take_screenshot_afterwards ?? false, e3);
      } catch (e4) {
        return { content: [{ type: "text", text: G(z(e4 instanceof Error ? e4 : new Error(String(e4)), { ref: t3.ref, action: "fill" })) }] };
      }
    }, async fillForm(t3, e3) {
      const n3 = await ot(t3.viewId, e3);
      if (!n3) return { content: [{ type: "text", text: "No browser tab available. Please navigate to a page first." }] };
      if (!t3.fields || !Array.isArray(t3.fields)) return { content: [{ type: "text", text: 'Error: Missing required "fields" parameter.\n\nThe browser_fill_form tool requires a "fields" array containing the fields to fill.\n\nExample usage:\n{ fields: [{ ref: "e123", value: "John Doe" }, { ref: "e456", value: "john@example.com" }] }\n\nEach field should have a "ref" (element reference) and "value" (text to fill).' }] };
      if (0 === t3.fields.length) return { content: [{ type: "text", text: 'Error: Empty "fields" array provided.\n\nProvide at least one field to fill. Take a snapshot to identify the form fields and their refs.' }] };
      try {
        await Z("browser_fill_form", n3, e3), await st(n3, t3.headless, c, e3);
        const r3 = t3.fields.map((t4) => ({ ref: U(t4.ref), value: t4.value, element: t4.element || "", clear: t4.clear })), o3 = `
					${q}
					${c}
					${dt}
					(async function() {
						const fields = ${JSON.stringify(r3)};
						const filled = [];
						const failed = [];

						for (const field of fields) {
							const ref = field.ref;
							const expectedDescription = field.element || '';
							try {
								const { element } = findElementByRef(ref);
								validateElementForInteraction(element, ref, 'fill', expectedDescription);

								const rect = element.getBoundingClientRect();
								const scrollPadding = 50;
								const needsScroll = rect.top < scrollPadding || rect.left < scrollPadding ||
									rect.bottom > window.innerHeight - scrollPadding || rect.right > window.innerWidth - scrollPadding;
								if (needsScroll) {
									element.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
									await new Promise(r => setTimeout(r, 300));
								}

								const isContentEditable = element.isContentEditable;
								const clearFirst = field.clear !== undefined ? field.clear : true;
								const value = String(field.value);

								if (clearFirst) {
									if (isContentEditable) {
										element.textContent = '';
									} else {
										setNativeValue(element, '');
									}
								}

								if (isContentEditable) {
									const existingContent = clearFirst ? '' : (element.textContent || '');
									element.textContent = existingContent + value;
								} else {
									const existingValue = clearFirst ? '' : (element.value || '');
									setNativeValue(element, existingValue + value);
								}

								element.dispatchEvent(new Event('input', { bubbles: true }));
								element.dispatchEvent(new Event('change', { bubbles: true }));

								const preview = value.length > 60 ? value.substring(0, 60) + '...' : value;
								filled.push({ ref, valuePreview: preview });
							} catch (err) {
								const message = err instanceof Error ? err.message : String(err);
								failed.push({ ref, error: message });
							}
						}

						const snapshotResult = buildPageSnapshot();
						return {
							success: failed.length === 0,
							filled,
							failed,
							pageState: {
								url: window.location.href,
								title: document.title,
								snapshot: snapshotResult.tree
							}
						};
					})();
				`, s2 = nt(await et(o3, n3, t3.headless, e3), ["filled", "failed", "pageState"]), i3 = [];
        if (i3.push(`- Fields filled: ${s2.filled.length}`), s2.failed.length > 0) {
          i3.push(`- Fields failed: ${s2.failed.length}`);
          const t4 = s2.failed.slice(0, 5).map((t5) => `${t5.ref}: ${t5.error}`);
          i3.push(`- Failed refs: ${t4.join("; ")}`);
        }
        return j.set(n3, Date.now()), ct(await rt({ action: "fill_form", detailLines: i3, pageState: s2.pageState, viewId: n3, context: e3 }), n3, t3.take_screenshot_afterwards ?? false, e3);
      } catch (t4) {
        return { content: [{ type: "text", text: G(z(t4 instanceof Error ? t4 : new Error(String(t4)), { action: "fill_form" })) }] };
      }
    }, async selectOption(t3, e3) {
      const n3 = await ot(t3.viewId, e3);
      if (!n3) return { content: [{ type: "text", text: "No browser tab available. Please navigate to a page first." }] };
      if (!t3.values || !Array.isArray(t3.values)) return { content: [{ type: "text", text: 'Error: Missing required "values" parameter.\n\nThe browser_select_option tool requires a "values" array containing the option(s) to select.\n\nExample usage:\n- Single select: { ref: "e123", values: ["optionValue"] }\n- Multi-select: { ref: "e123", values: ["value1", "value2"] }\n\nValues can be option values or labels. Take a snapshot to see available options.' }] };
      if (0 === t3.values.length) return { content: [{ type: "text", text: 'Error: Empty "values" array provided.\n\nProvide at least one value to select. Take a snapshot to see available options for this select element.' }] };
      try {
        await Z("browser_select_option", n3, e3), await st(n3, t3.headless, c, e3);
        const r3 = U(t3.ref), o3 = `
					${q}
					${c}
					(async function() {
						const ref = ${JSON.stringify(r3)};
						const { element } = findElementByRef(ref);
						if (!element) throw new Error('Element not found: ' + ref + '. Take a snapshot to get updated refs.');

						const selectElement = element;
						if (selectElement.tagName.toUpperCase() !== 'SELECT') {
							throw new Error('Element ' + ref + ' is not a select element (found: ' + selectElement.tagName.toLowerCase() + ').');
						}

						if (selectElement.disabled) {
							throw new Error('Select element ' + ref + ' is disabled and cannot be interacted with.');
						}

						const rect = selectElement.getBoundingClientRect();
						const scrollPadding = 50;
						const needsScroll = rect.top < scrollPadding || rect.left < scrollPadding ||
							rect.bottom > window.innerHeight - scrollPadding || rect.right > window.innerWidth - scrollPadding;
						if (needsScroll) {
							selectElement.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
							await new Promise(r => setTimeout(r, 300));
						}

						selectElement.focus();
						await new Promise(r => setTimeout(r, 0));

						const values = ${JSON.stringify(t3.values)};

						const availableOptions = Array.from(selectElement.options).map(o => ({
							value: o.value,
							label: o.textContent?.trim() || o.label || '',
							disabled: o.disabled
						}));

						if (values.length > 1 && !selectElement.multiple) {
							throw new Error('Cannot select multiple values on a single-select dropdown. The select element does not have the "multiple" attribute. Use a single value instead, or interact with the correct multi-select element.');
						}

						if (!selectElement.multiple) {
							selectElement.value = '';
						} else {
							Array.from(selectElement.options).forEach(option => {
								option.selected = false;
							});
						}

						const selectedValues = [];
						const matchedBy = [];
						for (const value of values) {
							let optionFound = false;
							for (const option of selectElement.options) {
								if (option.value === value) {
									if (option.disabled) {
										throw new Error('Option "' + value + '" is disabled and cannot be selected.');
									}
									option.selected = true;
									selectedValues.push(option.value);
									matchedBy.push('value');
									optionFound = true;
									break;
								}
							}
							if (!optionFound) {
								for (const option of selectElement.options) {
									const labelText = (option.textContent?.trim() || option.label || '').toLowerCase();
									if (labelText === value.toLowerCase()) {
										if (option.disabled) {
											throw new Error('Option with label "' + value + '" is disabled and cannot be selected.');
										}
										option.selected = true;
										selectedValues.push(option.value);
										matchedBy.push('label');
										optionFound = true;
										break;
									}
								}
							}
							if (!optionFound) {
								for (const option of selectElement.options) {
									const labelText = (option.textContent?.trim() || option.label || '').toLowerCase();
									if (labelText.includes(value.toLowerCase())) {
										if (option.disabled) {
											throw new Error('Option containing "' + value + '" is disabled and cannot be selected.');
										}
										option.selected = true;
										selectedValues.push(option.value);
										matchedBy.push('partial label');
										optionFound = true;
										break;
									}
								}
							}
							if (!optionFound) {
								const optionList = availableOptions.slice(0, 8).map(o =>
									'"' + o.label + '"' + (o.value !== o.label ? ' (value: ' + o.value + ')' : '') + (o.disabled ? ' [disabled]' : '')
								).join(', ');
								const isMultiple = selectElement.multiple ? ' (multi-select)' : ' (single-select)';
								throw new Error('Option "' + value + '" not found in select element' + isMultiple + '. Available options: ' + optionList + (availableOptions.length > 8 ? '...' : '') + '. Try using the exact option value or label.');
							}
						}

						selectElement.dispatchEvent(new Event('input', { bubbles: true }));
						selectElement.dispatchEvent(new Event('change', { bubbles: true }));

						const snapshotResult = buildPageSnapshot();
						return {
							success: true,
							selectedValues,
							matchedBy,
							availableOptions: availableOptions.slice(0, 10),
							pageState: {
								url: window.location.href,
								title: document.title,
								snapshot: snapshotResult.tree
							}
						};
					})();
				`, s2 = nt(await et(o3, n3, t3.headless, e3), ["selectedValues", "matchedBy", "pageState"]), i3 = [];
        if (s2.selectedValues.length > 0) {
          const t4 = s2.selectedValues.map((t5, e4) => `${t5} (matched by ${s2.matchedBy[e4] || "value"})`);
          i3.push(`- Selected: ${t4.join(", ")}`);
        } else i3.push("- Selected values: (none)");
        return j.set(n3, Date.now()), ct(await rt({ action: "select_option", detailLines: i3, pageState: s2.pageState, viewId: n3, context: e3 }), n3, t3.take_screenshot_afterwards ?? false, e3);
      } catch (e4) {
        return { content: [{ type: "text", text: G(z(e4 instanceof Error ? e4 : new Error(String(e4)), { ref: t3.ref, action: "selectOption" })) }] };
      }
    }, async pressKey(t3, e3) {
      const n3 = await ot(t3.viewId, e3);
      if (!n3) return { content: [{ type: "text", text: "No browser tab available. Please navigate to a page first." }] };
      await Z("browser_press_key", n3, e3);
      const r3 = `
				(function() {
					const keyInput = ${JSON.stringify(t3.key)};

					const keyCodeMap = {
						'PageDown': 34, 'PageUp': 33, 'End': 35, 'Home': 36,
						'ArrowLeft': 37, 'ArrowUp': 38, 'ArrowRight': 39, 'ArrowDown': 40,
						'Enter': 13, 'Escape': 27, 'Tab': 9, 'Backspace': 8, 'Delete': 46,
						'Space': 32, ' ': 32, 'F1': 112, 'F2': 113, 'F3': 114, 'F4': 115,
						'F5': 116, 'F6': 117, 'F7': 118, 'F8': 119, 'F9': 120, 'F10': 121,
						'F11': 122, 'F12': 123, 'Insert': 45, 'NumLock': 144, 'ScrollLock': 145,
						'Pause': 19, 'CapsLock': 20
					};

					const codeMap = {
						'a': 'KeyA', 'b': 'KeyB', 'c': 'KeyC', 'd': 'KeyD', 'e': 'KeyE',
						'f': 'KeyF', 'g': 'KeyG', 'h': 'KeyH', 'i': 'KeyI', 'j': 'KeyJ',
						'k': 'KeyK', 'l': 'KeyL', 'm': 'KeyM', 'n': 'KeyN', 'o': 'KeyO',
						'p': 'KeyP', 'q': 'KeyQ', 'r': 'KeyR', 's': 'KeyS', 't': 'KeyT',
						'u': 'KeyU', 'v': 'KeyV', 'w': 'KeyW', 'x': 'KeyX', 'y': 'KeyY', 'z': 'KeyZ',
						'0': 'Digit0', '1': 'Digit1', '2': 'Digit2', '3': 'Digit3', '4': 'Digit4',
						'5': 'Digit5', '6': 'Digit6', '7': 'Digit7', '8': 'Digit8', '9': 'Digit9',
						' ': 'Space', 'Space': 'Space',
						'Enter': 'Enter', 'Tab': 'Tab', 'Escape': 'Escape', 'Backspace': 'Backspace',
						'Delete': 'Delete', 'Insert': 'Insert',
						'ArrowUp': 'ArrowUp', 'ArrowDown': 'ArrowDown', 'ArrowLeft': 'ArrowLeft', 'ArrowRight': 'ArrowRight',
						'Home': 'Home', 'End': 'End', 'PageUp': 'PageUp', 'PageDown': 'PageDown',
						'F1': 'F1', 'F2': 'F2', 'F3': 'F3', 'F4': 'F4', 'F5': 'F5', 'F6': 'F6',
						'F7': 'F7', 'F8': 'F8', 'F9': 'F9', 'F10': 'F10', 'F11': 'F11', 'F12': 'F12',
						'-': 'Minus', '=': 'Equal', '[': 'BracketLeft', ']': 'BracketRight',
						'\\\\': 'Backslash', ';': 'Semicolon', "'": 'Quote', ',': 'Comma',
						'.': 'Period', '/': 'Slash', '\`': 'Backquote'
					};

					const scrollAmounts = {
						'PageDown': { x: 0, y: window.innerHeight * 0.8 },
						'PageUp': { x: 0, y: -window.innerHeight * 0.8 },
						'ArrowDown': { x: 0, y: 40 },
						'ArrowUp': { x: 0, y: -40 },
						'End': { x: 0, y: document.documentElement.scrollHeight - window.scrollY },
						'Home': { x: 0, y: -window.scrollY },
						'Space': { x: 0, y: window.innerHeight * 0.8 },
						' ': { x: 0, y: window.innerHeight * 0.8 },
					};

					const modifierAliases = {
						'Control': ['Control', 'Ctrl', 'control', 'ctrl'],
						'Shift': ['Shift', 'shift'],
						'Alt': ['Alt', 'alt', 'Option', 'option'],
						'Meta': ['Meta', 'meta', 'Command', 'command', 'Cmd', 'cmd', 'Win', 'win']
					};

					function parseKeyCombo(input) {
						const parts = input.split('+').map(p => p.trim());
						const modifiers = { ctrlKey: false, shiftKey: false, altKey: false, metaKey: false };
						let mainKey = '';

						for (const part of parts) {
							let isModifier = false;
							for (const [mod, aliases] of Object.entries(modifierAliases)) {
								if (aliases.includes(part)) {
									if (mod === 'Control') modifiers.ctrlKey = true;
									else if (mod === 'Shift') modifiers.shiftKey = true;
									else if (mod === 'Alt') modifiers.altKey = true;
									else if (mod === 'Meta') modifiers.metaKey = true;
									isModifier = true;
									break;
								}
							}
							if (!isModifier) {
								mainKey = part;
							}
						}

						return { modifiers, mainKey };
					}

					const { modifiers, mainKey } = parseKeyCombo(keyInput);
					const key = mainKey || keyInput;

					const keyLower = key.toLowerCase();
					const code = codeMap[key] || codeMap[keyLower] || (key.length === 1 ? 'Key' + key.toUpperCase() : key);
					const keyCode = keyCodeMap[key] || (key.length === 1 ? key.toUpperCase().charCodeAt(0) : 0);

					const activeElement = document.activeElement || document.body;

					const scrollKeys = ['PageDown', 'PageUp', 'Home', 'End'];
					if (scrollKeys.includes(key) && !modifiers.ctrlKey && !modifiers.altKey && !modifiers.metaKey) {
						const isScrollable = (el) => {
							if (!el || !(el instanceof HTMLElement)) return false;
							const style = getComputedStyle(el);
							const overflowY = style.overflowY;
							return (overflowY === 'auto' || overflowY === 'scroll') && el.scrollHeight > el.clientHeight;
						};

						let scrollable = null;
						let current = activeElement;
						while (current && current !== document.body) {
							if (isScrollable(current)) {
								scrollable = current;
								break;
							}
							current = current.parentElement;
						}

						if (!scrollable) {
							scrollable = document.scrollingElement || document.documentElement;
						}

						const viewportHeight = scrollable.clientHeight;

						switch (key) {
							case 'PageDown':
								scrollable.scrollBy({ top: viewportHeight, behavior: 'instant' });
								break;
							case 'PageUp':
								scrollable.scrollBy({ top: -viewportHeight, behavior: 'instant' });
								break;
							case 'Home':
								scrollable.scrollTo({ top: 0, behavior: 'instant' });
								break;
							case 'End':
								scrollable.scrollTo({ top: scrollable.scrollHeight, behavior: 'instant' });
								break;
						}
					} else if (scrollAmounts[key] && !modifiers.ctrlKey && !modifiers.altKey && !modifiers.metaKey) {
						window.scrollBy({ left: scrollAmounts[key].x, top: scrollAmounts[key].y, behavior: 'smooth' });
					}

					const eventInit = {
						key: key,
						code: code,
						keyCode: keyCode,
						which: keyCode,
						bubbles: true,
						cancelable: true,
						ctrlKey: modifiers.ctrlKey,
						shiftKey: modifiers.shiftKey,
						altKey: modifiers.altKey,
						metaKey: modifiers.metaKey
					};

					activeElement.dispatchEvent(new KeyboardEvent('keydown', eventInit));

					if (key.length === 1 && !modifiers.ctrlKey && !modifiers.altKey && !modifiers.metaKey) {
						activeElement.dispatchEvent(new KeyboardEvent('keypress', eventInit));

						if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable) {
							const inputEvent = new InputEvent('beforeinput', {
								bubbles: true,
								cancelable: true,
								inputType: 'insertText',
								data: key
							});
							activeElement.dispatchEvent(inputEvent);
						}
					}

					activeElement.dispatchEvent(new KeyboardEvent('keyup', eventInit));

					const modifierStr = [
						modifiers.ctrlKey ? 'Ctrl' : '',
						modifiers.shiftKey ? 'Shift' : '',
						modifiers.altKey ? 'Alt' : '',
						modifiers.metaKey ? 'Meta' : ''
					].filter(Boolean).join('+');

					return {
						action: 'press_key',
						success: true,
						key: key,
						code: code,
						modifiers: modifierStr || 'none',
						fullCombo: modifierStr ? modifierStr + '+' + key : key
					};
				})();
			`, o3 = nt(await et(r3, n3, t3.headless, e3), ["key", "code", "fullCombo"]);
      return o3.success ? ct({ content: [{ type: "text", text: `Successfully pressed key: ${o3.fullCombo} (code: ${o3.code})` }, { type: "metadata", viewId: n3 }] }, n3, t3.take_screenshot_afterwards ?? false, e3) : { content: [{ type: "text", text: `Failed to press key: ${o3.key}` }] };
    } }, i2 = { click: async (t3, e3) => ht({ ...t3, retryWithOffset: false, actionType: "click" }, et, e3), safeClick: async (t3, e3) => ht(t3, et, e3), mouseClickXY: async (t3, e3) => gt(t3, et, e3), hover: async (t3, e3) => wt({ ...t3, actionType: "hover" }, et, e3), hoverAndWait: async (t3, e3) => wt(t3, et, e3), async drag(t3, e3) {
      const n3 = await ot(t3.viewId, e3);
      if (!n3) return { content: [{ type: "text", text: "No browser tab available. Please navigate to a page first." }] };
      try {
        await Z("browser_drag", n3, e3), await st(n3, t3.headless, c, e3);
        const r3 = U(t3.sourceRef), o3 = t3.targetRef ? U(t3.targetRef) : void 0;
        if (!o3 && (void 0 === t3.targetX || void 0 === t3.targetY)) return { content: [{ type: "text", text: "Error: Either targetRef or both targetX and targetY must be provided for drag operation.\n\nSuggestion: Specify where to drop the element using targetRef (for element-to-element drag) or targetX/targetY coordinates." }] };
        const s2 = `
					(async function() {
						${q}

						const sourceRef = ${JSON.stringify(r3)};
						const targetRef = ${JSON.stringify(o3)};
						const targetX = ${t3.targetX ?? "null"};
						const targetY = ${t3.targetY ?? "null"};

						const { element: sourceElement } = findElementByRef(sourceRef);
						if (!sourceElement) {
							return {
								success: false,
								error: 'Source element not found: ' + sourceRef + '. Take a snapshot to get updated refs.',
								suggestion: 'The source element reference may be stale. Take a new snapshot to get current element refs.'
							};
						}

						const sourceStyle = window.getComputedStyle(sourceElement);
						const isDraggable = sourceElement.draggable || sourceElement.getAttribute('draggable') === 'true';
						if (!isDraggable && sourceStyle.cursor !== 'grab' && sourceStyle.cursor !== 'move') {
							return {
								success: false,
								error: 'Source element ' + sourceRef + ' does not appear to be draggable. It lacks the draggable attribute.',
								suggestion: 'Verify the element is meant to be dragged. Check if it has draggable="true" attribute or is part of a drag-and-drop library that uses different mechanisms.'
							};
						}

						let targetElement = null;
						if (targetRef) {
							const targetResult = findElementByRef(targetRef);
							targetElement = targetResult.element;
							if (!targetElement) {
								return {
									success: false,
									error: 'Target element not found: ' + targetRef + '. Take a snapshot to get updated refs.',
									suggestion: 'The target element reference may be stale. Take a new snapshot to get current element refs.'
								};
							}
						}

						const sourceRect = sourceElement.getBoundingClientRect();
						const startX = Math.round(sourceRect.left + sourceRect.width / 2);
						const startY = Math.round(sourceRect.top + sourceRect.height / 2);

						let dropX, dropY;
						if (targetElement) {
							const targetRect = targetElement.getBoundingClientRect();
							dropX = Math.round(targetRect.left + targetRect.width / 2);
							dropY = Math.round(targetRect.top + targetRect.height / 2);
						} else {
							dropX = targetX;
							dropY = targetY;
						}

						try {
							const dataTransfer = new DataTransfer();
							dataTransfer.effectAllowed = 'all';

							const pointerOpts = {
								bubbles: true,
								cancelable: true,
								view: window,
								pointerId: 1,
								pointerType: 'mouse',
								isPrimary: true,
								button: 0,
								buttons: 1
							};

							sourceElement.dispatchEvent(new PointerEvent('pointerover', { ...pointerOpts, clientX: startX, clientY: startY }));
							sourceElement.dispatchEvent(new PointerEvent('pointerenter', { ...pointerOpts, clientX: startX, clientY: startY, bubbles: false }));
							sourceElement.dispatchEvent(new MouseEvent('mouseover', { bubbles: true, clientX: startX, clientY: startY }));
							sourceElement.dispatchEvent(new MouseEvent('mouseenter', { bubbles: false, clientX: startX, clientY: startY }));

							sourceElement.dispatchEvent(new PointerEvent('pointerdown', { ...pointerOpts, clientX: startX, clientY: startY }));
							sourceElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, clientX: startX, clientY: startY, button: 0 }));

							await new Promise(r => setTimeout(r, 50));

							const dragStartEvent = new DragEvent('dragstart', {
								bubbles: true,
								cancelable: true,
								clientX: startX,
								clientY: startY,
								dataTransfer: dataTransfer
							});
							const dragStarted = sourceElement.dispatchEvent(dragStartEvent);

							if (!dragStarted) {
								return {
									success: false,
									error: 'Drag start was prevented by the page.',
									suggestion: 'The page may have event handlers preventing drag. Try using browser_evaluate to trigger the drag programmatically.'
								};
							}

							sourceElement.dispatchEvent(new DragEvent('drag', {
								bubbles: true,
								cancelable: true,
								clientX: startX,
								clientY: startY,
								dataTransfer: dataTransfer
							}));

							await new Promise(r => setTimeout(r, 50));

							const dropTarget = targetElement || document.elementFromPoint(dropX, dropY);
							if (!dropTarget) {
								return {
									success: false,
									error: 'No element found at drop coordinates (' + dropX + ', ' + dropY + ').',
									suggestion: 'Verify the target coordinates are within the viewport and point to a valid drop zone.'
								};
							}

							dropTarget.dispatchEvent(new DragEvent('dragenter', {
								bubbles: true,
								cancelable: true,
								clientX: dropX,
								clientY: dropY,
								dataTransfer: dataTransfer
							}));

							const dragOverEvent = new DragEvent('dragover', {
								bubbles: true,
								cancelable: true,
								clientX: dropX,
								clientY: dropY,
								dataTransfer: dataTransfer
							});
							dropTarget.dispatchEvent(dragOverEvent);

							await new Promise(r => setTimeout(r, 50));

							const dropEvent = new DragEvent('drop', {
								bubbles: true,
								cancelable: true,
								clientX: dropX,
								clientY: dropY,
								dataTransfer: dataTransfer
							});
							const dropAccepted = dropTarget.dispatchEvent(dropEvent);

							sourceElement.dispatchEvent(new DragEvent('dragend', {
								bubbles: true,
								cancelable: false,
								clientX: dropX,
								clientY: dropY,
								dataTransfer: dataTransfer
							}));

							sourceElement.dispatchEvent(new PointerEvent('pointerup', { ...pointerOpts, clientX: dropX, clientY: dropY }));
							sourceElement.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: dropX, clientY: dropY }));

							return {
								success: true,
								action: 'drag',
								source: sourceRef,
								target: targetRef || ('(' + dropX + ', ' + dropY + ')'),
								dropAccepted: dropAccepted,
								message: 'Drag completed from ' + sourceRef + ' to ' + (targetRef || 'coordinates (' + dropX + ', ' + dropY + ')') + (dropAccepted ? '' : ' (drop may not have been accepted by target)')
							};
						} catch (err) {
							return {
								success: false,
								error: 'Drag operation failed: ' + (err instanceof Error ? err.message : String(err)),
								suggestion: 'The drag-and-drop may use a library (like react-dnd or sortablejs) that requires specific event sequences. Try using browser_evaluate to interact with the library directly.'
							};
						}
					})();
				`, i3 = nt(await et(s2, n3, t3.headless, e3), []);
        return i3.success ? ct({ content: [{ type: "text", text: `### Action: drag
- ${i3.message}
- Source: ${i3.source}
- Target: ${i3.target}` }, { type: "metadata", viewId: n3 }] }, n3, t3.take_screenshot_afterwards ?? false, e3) : { content: [{ type: "text", text: `Error: ${i3.error || "Unknown drag error"}

Suggestion: ${i3.suggestion || "Take a snapshot to verify the elements are draggable."}

Recovery action: browser_snapshot` }] };
      } catch (e4) {
        return { content: [{ type: "text", text: G(z(e4 instanceof Error ? e4 : new Error(String(e4)), { ref: t3.sourceRef, action: "drag" })) }] };
      }
    } };
    return Object.assign(t2, e2), Object.assign(t2, n2), Object.assign(t2, r2), Object.assign(t2, o2), Object.assign(t2, i2), t2;
  })();
  function kt(t2, e2, n2, r2 = Math.random) {
    const o2 = e2 * 2 ** t2, s2 = Math.min(o2, n2);
    return r2() * s2;
  }
  const St = /* @__PURE__ */ new Set(["retry", "recovery_backfill", "watchdog_backfill"]);
  function Rt(t2, e2, n2 = "distribution", r2) {
    try {
      const o2 = ["mcp_version:snapshots", "serverIdentifier:cursor-ide-browser", ...r2 ?? []];
      "distribution" === n2 ? s.cursor.metricsDistribution({ stat: t2, value: e2, tags: o2 }) : s.cursor.metricsIncrement({ stat: t2, value: e2, tags: o2 });
    } catch {
    }
  }
  function Ct(t2) {
    if (null == t2) return "null";
    if ("string" == typeof t2 || "number" == typeof t2 || "boolean" == typeof t2) return JSON.stringify(t2);
    if (Array.isArray(t2)) return `[${t2.map(Ct).join(",")}]`;
    if ("object" == typeof t2) {
      const e2 = t2;
      return `{${Object.keys(e2).sort().map((t3) => `${JSON.stringify(t3)}:${Ct(e2[t3])}`).join(",")}}`;
    }
    return "null";
  }
  function Tt(t2) {
    try {
      return JSON.parse(t2);
    } catch {
      return {};
    }
  }
  function It(t2) {
    const e2 = Tt(t2);
    if (!e2 || "object" != typeof e2) return [];
    const n2 = e2, r2 = new Set(n2.required ?? []);
    return Object.keys(n2.properties ?? {}).sort().map((t3) => ({ name: t3, description: n2.properties?.[t3]?.description, required: r2.has(t3) }));
  }
  class At {
    constructor(t2) {
      this.snapshotRevision = 0, this.isDisposed = false, this.refreshDirty = false, this.retryAttempt = 0, this.recoveryAttempt = 0, this.getProvider = t2.getProvider, this.pushSnapshots = t2.pushSnapshots ?? ((t3) => s.cursor.pushMcpSnapshots(t3)), this.retryBaseDelayMs = t2.retryBaseDelayMs ?? 1e3, this.retryMaxDelayMs = t2.retryMaxDelayMs ?? 3e4, this.maxRetryAttempts = t2.maxRetryAttempts ?? 5, this.recoveryBaseDelayMs = t2.recoveryBaseDelayMs ?? 3e4, this.recoveryMaxDelayMs = t2.recoveryMaxDelayMs ?? 12e4, this.snapshotEpoch = Date.now();
    }
    requestPush(t2) {
      if (!this.isDisposed) return this.inFlightPush ? (this.refreshDirty = true, void (this.refreshDirtyReason = t2)) : void (this.inFlightPush = this.flush(t2).finally(() => {
        if (this.inFlightPush = void 0, this.isDisposed || !this.refreshDirty) return;
        const t3 = this.refreshDirtyReason;
        this.refreshDirty = false, this.refreshDirtyReason = void 0, t3 && this.requestPush(t3);
      }));
    }
    async flush(t2) {
      if (this.isDisposed) return;
      const e2 = Date.now();
      try {
        const n2 = this.getProvider();
        if (!n2) return;
        const r2 = this.snapshotRevision + 1, o2 = await n2.listOfferings();
        if (this.isDisposed) return;
        const s2 = (function(t3, e3, n3, r3) {
          return { serverIdentifier: t3.id, serverName: t3.id, snapshotEpoch: n3, snapshotRevision: r3, status: "connected", tools: e3.tools.map((t4) => ({ name: t4.name, description: t4.description, inputSchema: Tt(t4.parameters), outputSchema: t4.outputSchema ? Tt(t4.outputSchema) : void 0 })), resources: e3.resources?.map((t4) => ({ uri: t4.uri, name: t4.name, description: t4.description, mimeType: t4.mimeType })) ?? [], prompts: e3.prompts.map((t4) => ({ name: t4.name, description: t4.description, arguments: It(t4.parameters) })), instructions: t3.instructions };
        })(n2, o2, this.snapshotEpoch, r2), i2 = (function(t3) {
          return Ct({ serverIdentifier: t3.serverIdentifier, serverName: t3.serverName, status: t3.status, statusDetail: t3.statusDetail, tools: t3.tools.map((t4) => ({ name: t4.name, description: t4.description, inputSchema: t4.inputSchema, outputSchema: t4.outputSchema })).sort((t4, e3) => t4.name.localeCompare(e3.name)), resources: t3.resources.map((t4) => ({ uri: t4.uri, name: t4.name, description: t4.description, mimeType: t4.mimeType })).sort((t4, e3) => t4.uri.localeCompare(e3.uri)), prompts: t3.prompts.map((t4) => ({ name: t4.name, description: t4.description, arguments: (t4.arguments ?? []).map((t5) => ({ name: t5.name, description: t5.description, required: t5.required })).sort((t5, e3) => t5.name.localeCompare(e3.name)) })).sort((t4, e3) => t4.name.localeCompare(e3.name)), instructions: t3.instructions });
        })(s2), a2 = i2 === this.lastPushedFingerprint, l2 = a2 && (function(t3) {
          return St.has(t3);
        })(t2);
        if (a2 && !l2) return void Rt("mcp.snapshot.browser_provider_push_duration_ms", Date.now() - e2, "distribution", [`reason:${t2}`, "outcome:noop", "unchanged:true"]);
        l2 && Rt("mcp.snapshot.browser_provider_push_forced_unchanged_delivery_count", 1, "increment", [`reason:${t2}`]), this.pushSnapshots([s2]), this.snapshotRevision = r2, this.lastPushedFingerprint = i2, this.clearRetryState(), this.clearRecoveryLoop("drained"), Rt("mcp.snapshot.browser_provider_push_duration_ms", Date.now() - e2, "distribution", [`reason:${t2}`, "outcome:success", "unchanged:" + (a2 ? "true" : "false")]);
      } catch (n2) {
        Rt("mcp.snapshot.browser_provider_push_duration_ms", Date.now() - e2, "distribution", [`reason:${t2}`, "outcome:error"]), Rt("mcp.snapshot.browser_provider_push_error_count", 1, "increment", [`reason:${t2}`]), a.debug(`Browser snapshot push failed (${t2}): ${n2 instanceof Error ? n2.message : String(n2)}`), this.scheduleRetry(t2);
      }
    }
    scheduleRetry(t2) {
      if (this.isDisposed) return;
      if (this.retryAttempt += 1, this.retryAttempt > this.maxRetryAttempts) return Rt("mcp.snapshot.browser_provider_push_retry_exhausted_count", 1, "increment", [`reason:${t2}`]), a.warn(`Browser snapshot push retries exhausted (${t2}); entering recovery backfill loop`), this.clearRetryState(), void this.scheduleRecoveryLoop();
      this.retryTimer && clearTimeout(this.retryTimer);
      const e2 = Math.max(this.retryBaseDelayMs, kt(this.retryAttempt - 1, this.retryBaseDelayMs, this.retryMaxDelayMs));
      this.retryTimer = setTimeout(() => {
        this.retryTimer = void 0, this.requestPush("retry");
      }, e2);
    }
    clearRetryState() {
      this.retryAttempt = 0, this.retryTimer && (clearTimeout(this.retryTimer), this.retryTimer = void 0);
    }
    scheduleRecoveryLoop() {
      if (this.isDisposed || this.recoveryTimer) return;
      const t2 = Math.max(this.recoveryBaseDelayMs, kt(this.recoveryAttempt, this.recoveryBaseDelayMs, this.recoveryMaxDelayMs));
      this.recoveryTimer = setTimeout(() => {
        this.recoveryTimer = void 0, this.isDisposed || (this.recoveryAttempt += 1, Rt("mcp.snapshot.browser_provider_push_recovery_backfill_count", 1, "increment", [`attempt:${this.recoveryAttempt}`]), this.requestPush("recovery_backfill"), this.scheduleRecoveryLoop());
      }, t2);
    }
    clearRecoveryLoop(t2) {
      this.recoveryTimer && (clearTimeout(this.recoveryTimer), this.recoveryTimer = void 0), this.recoveryAttempt = 0;
    }
    dispose() {
      this.isDisposed = true, this.refreshDirty = false, this.refreshDirtyReason = void 0, this.clearRetryState(), this.clearRecoveryLoop("disposed");
    }
  }
  async function Dt(t2, e2, n2, r2) {
    const o2 = r2?.viewId ?? await ot("string" == typeof e2.viewId ? e2.viewId : void 0) ?? "unknown", i2 = r2?.postSnapshotYaml ?? (function(t3) {
      return K.get(t3);
    })(o2), a2 = void 0 === r2 ? (function(t3) {
      return W.get(t3);
    })(o2) : void 0, l2 = { ...e2 };
    delete l2.take_screenshot_afterwards, s.commands.executeCommand("cursor.internal.recordBrowserTelemEvent", { viewId: o2, toolName: t2, argsJson: JSON.stringify(l2), success: n2, snapshotYaml: i2, url: r2?.postUrl ?? a2?.url, title: r2?.postTitle ?? a2?.title });
  }
  const _t = "cursor.browserAutomation.requestSnapshotBackfill";
  class $t {
    constructor() {
      this.id = "cursor-ide-browser", this.cdpTurnTracker = new l(), this.featureGateName = void 0, this.instructions = `The cursor-ide-browser MCP server provides a Cursor-owned browser tab plus a raw Chrome DevTools Protocol command tool.

CORE WORKFLOW:
1. Start by understanding the user's goal and what success looks like on the page.
2. Use browser_tabs with action "list" to inspect open tabs and URLs before acting.
3. Use browser_navigate to create or navigate the target tab. Omit the position parameter for background automation so focus is preserved.
4. Use browser_lock before longer automation on an existing tab, then browser_lock with action "unlock" when finished.
5. Use browser_snapshot for accessibility context and browser_take_screenshot for visual verification.
6. Use browser_click, browser_type, browser_fill, browser_select_option, browser_press_key, browser_scroll, and browser_drag for page interactions.
7. Use browser_highlight and browser_get_bounding_box for visual grounding and coordinate diagnostics.
8. Use browser_cdp for page inspection, profiling, runtime evaluation, DOM/CSS queries, and performance data.

AVOID RABBIT HOLES:
1. Do not repeat the same failing action more than once without new evidence such as a fresh snapshot, a different ref, a changed page state, or a clear new hypothesis.
2. IMPORTANT: If four attempts fail or progress stalls, stop acting and report what you observed, what blocked progress, and the most likely next step.
3. Prefer gathering evidence over brute force. If the page is confusing, use browser_snapshot, browser_take_screenshot, or CDP inspection before trying more actions.
4. If you encounter a blocker such as login, passkey/manual user interaction, permissions, captchas, destructive confirmations, missing data, or an unexpected state, stop and report it instead of improvising repeated actions.
5. Do not get stuck in wait-action-wait loops. Every retry should be justified by something newly observed.

CRITICAL - Lock/unlock workflow:
1. browser_lock requires an existing browser tab - you CANNOT call browser_lock with action: "lock" before browser_navigate
2. Correct order: browser_navigate -> browser_lock({ action: "lock" }) -> (interactions) -> browser_lock({ action: "unlock" })
3. If a browser tab already exists (check with browser_tabs list), call browser_lock with action: "lock" FIRST before any interactions
4. Only call browser_lock with action: "unlock" when completely done with ALL browser operations for this turn

IMPORTANT - Waiting strategy:
When waiting for page changes, prefer short CDP polling loops with Runtime.evaluate, DOM queries, Page lifecycle signals, or browser_snapshot checks rather than a single long wait.

CDP USAGE:
- Use browser_cdp with a DevTools Protocol method and params object, for example Runtime.evaluate, DOM.getDocument, CSS.getComputedStyleForNode, Profiler.start/stop, Performance.getMetrics, Log.enable, and Network.enable.
- Do not use browser_cdp with CDP Input.* methods. They are denied because they are focus-sensitive in Electron webviews and can route input to Cursor UI instead of the browser page.
- Use browser_click, browser_type, browser_fill, browser_select_option, browser_press_key, browser_scroll, and browser_drag for clicks, typing, filling inputs, selecting options, keyboard actions, scrolling, and drag-and-drop.
- Use Runtime.evaluate for advanced DOM-scoped interactions that the dedicated browser tools do not cover.
- For profiling, call Profiler.enable, Profiler.start, reproduce the behavior, then Profiler.stop. The profile is saved to a file and returned as a log_file; read that file only when you need to inspect details.
- For JavaScript evaluation, prefer Runtime.evaluate with returnByValue when possible.
- Device emulation you set with Emulation.setDeviceMetricsOverride, Emulation.setTouchEmulationEnabled, or Emulation.setUserAgentOverride (for example for a phone-sized screenshot) lasts only for the current turn: it is cleared when your turn ends, and the user can reset it from the browser tab at any time. Send Emulation.clearDeviceMetricsOverride yourself once you are done with it within a turn.
- Some browser-wide or sensitive CDP methods are denied, especially cookie, storage, permission, download, target-management, filesystem-backed file-input commands, system-level commands, and CDP navigation/history navigation commands.
- Large CDP responses are saved to files instead of being inlined. Prefer using the returned file path over immediately stuffing large payloads into context; read focused sections only when needed.

VISION:
- browser_take_screenshot attaches an image result that the model can inspect. CDP Page.captureScreenshot returns data inside JSON and should not replace browser_take_screenshot when visual verification is needed.

NOTES:
- browser_snapshot returns snapshot YAML and is the main source of truth for page structure.
- Refs are opaque handles tied to the latest browser_snapshot for that tab.
- Iframe content is not accessible - only elements outside iframes can be interacted with.
- When you stop to report a blocker, include the current page, the target you were trying to reach, the blocker you observed, and the best next action. If the blocker requires manual user interaction, ask the user to take over at that point rather than assuming it in advance.
`, this.tools = [{ name: "browser_navigate", description: "Navigate to a URL. By default reuses an existing tab; set newTab: true to open in a new tab.", parameters: JSON.stringify({ type: "object", properties: { url: { type: "string", description: "The URL to navigate to" }, viewId: { type: "string", description: "Target browser tab ID. If omitted, uses the last interacted tab." }, position: { type: "string", enum: ["active", "side"], description: 'Only set when the user explicitly asks to reveal, show, focus, or open the browser visibly. Set to "active" for visible/revealed browser UI, or "side" if the user mentions "side", "beside", "side panel", or "side by side". Omit this parameter for background automation so focus is preserved.' }, take_screenshot_afterwards: { type: "boolean", description: "When true, takes a screenshot after navigation completes. Defaults to false." }, newTab: { type: "boolean", description: "When true, creates a new tab before navigating instead of reusing an existing tab. Defaults to false." } }, required: ["url"] }) }, { name: "browser_snapshot", description: "Capture accessibility snapshot of the current page, this is better than screenshot", parameters: JSON.stringify({ type: "object", properties: { viewId: { type: "string", description: "Target browser tab ID. If omitted, uses the last interacted tab." }, interactive: { type: "boolean", description: "When true, only include interactive elements in the snapshot. Defaults to false." }, maxDepth: { type: "number", description: "Maximum depth for snapshot output. Defaults to 20." }, compact: { type: "boolean", description: "When true, outputs a more compact snapshot format. Defaults to false." }, selector: { type: "string", description: "Optional CSS selector to scope the snapshot to a subtree." }, includeDiff: { type: "boolean", description: "When true, include a diff vs the previous snapshot for this tab. Defaults to false." }, take_screenshot_afterwards: { type: "boolean", description: "When true, takes a screenshot after snapshot completes. Defaults to false." } }, required: [] }) }, { name: "browser_click", description: "Click an element by ref from browser_snapshot. Use this instead of CDP Input.* methods.", parameters: JSON.stringify({ type: "object", properties: { ref: { type: "string", description: "Element ref from browser_snapshot." }, element: { type: "string", description: "Human-readable description of the element." }, offsetX: { type: "number", description: "Optional x offset from the element center." }, offsetY: { type: "number", description: "Optional y offset from the element center." }, doubleClick: { type: "boolean", description: "When true, double-click the element." }, button: { type: "string", enum: ["left", "right", "middle"], description: "Mouse button. Defaults to left." }, modifiers: { type: "array", items: { type: "string", enum: ["Control", "Shift", "Alt", "Meta", "ControlOrMeta"] }, description: "Optional modifier keys." }, holdDurationMs: { type: "number", description: "Optional mouse hold duration before release." }, viewId: { type: "string", description: "Target browser tab ID. If omitted, uses the last interacted tab." }, take_screenshot_afterwards: { type: "boolean", description: "When true, takes a screenshot after the click completes. Defaults to false." } }, required: ["ref"] }) }, { name: "browser_mouse_click_xy", description: "Click at viewport coordinates. Prefer browser_click with refs when possible.", parameters: JSON.stringify({ type: "object", properties: { x: { type: "number", description: "Viewport x coordinate." }, y: { type: "number", description: "Viewport y coordinate." }, button: { type: "string", enum: ["left", "right", "middle"], description: "Mouse button. Defaults to left." }, viewId: { type: "string", description: "Target browser tab ID. If omitted, uses the last interacted tab." }, take_screenshot_afterwards: { type: "boolean", description: "When true, takes a screenshot after the click completes. Defaults to false." } }, required: ["x", "y"] }) }, { name: "browser_type", description: "Type text into an input, textarea, or contenteditable element by ref.", parameters: JSON.stringify({ type: "object", properties: { ref: { type: "string", description: "Element ref from browser_snapshot." }, text: { type: "string", description: "Text to type." }, element: { type: "string", description: "Human-readable description of the element." }, clear: { type: "boolean", description: "When true, clear existing text first." }, submit: { type: "boolean", description: "When true, press Enter after typing." }, slowly: { type: "boolean", description: "When true, type character by character." }, viewId: { type: "string", description: "Target browser tab ID. If omitted, uses the last interacted tab." }, take_screenshot_afterwards: { type: "boolean", description: "When true, takes a screenshot after typing completes. Defaults to false." } }, required: ["ref", "text"] }) }, { name: "browser_fill", description: "Set the value of an input, textarea, or contenteditable element by ref.", parameters: JSON.stringify({ type: "object", properties: { ref: { type: "string", description: "Element ref from browser_snapshot." }, value: { type: "string", description: "Value to set." }, element: { type: "string", description: "Human-readable description of the element." }, viewId: { type: "string", description: "Target browser tab ID. If omitted, uses the last interacted tab." }, take_screenshot_afterwards: { type: "boolean", description: "When true, takes a screenshot after filling completes. Defaults to false." } }, required: ["ref", "value"] }) }, { name: "browser_select_option", description: "Select one or more options in a select element by ref.", parameters: JSON.stringify({ type: "object", properties: { ref: { type: "string", description: "Element ref from browser_snapshot." }, values: { type: "array", items: { type: "string" }, description: "Option values or labels to select." }, element: { type: "string", description: "Human-readable description of the element." }, viewId: { type: "string", description: "Target browser tab ID. If omitted, uses the last interacted tab." }, take_screenshot_afterwards: { type: "boolean", description: "When true, takes a screenshot after selection completes. Defaults to false." } }, required: ["ref", "values"] }) }, { name: "browser_press_key", description: "Press a key in the browser page using DOM keyboard events.", parameters: JSON.stringify({ type: "object", properties: { key: { type: "string", description: "Key to press, for example Enter, Escape, Tab, ArrowDown, or a single character." }, viewId: { type: "string", description: "Target browser tab ID. If omitted, uses the last interacted tab." }, take_screenshot_afterwards: { type: "boolean", description: "When true, takes a screenshot after the key press completes. Defaults to false." } }, required: ["key"] }) }, { name: "browser_scroll", description: "Scroll the page, a scrollable container, or an element into view. Use this instead of CDP Input.* wheel events.", parameters: JSON.stringify({ type: "object", properties: { ref: { type: "string", description: "Optional element ref from browser_snapshot." }, direction: { type: "string", enum: ["up", "down", "left", "right"], description: "Scroll direction." }, amount: { type: "number", description: "Scroll amount in pixels. Defaults to 300." }, deltaX: { type: "number", description: "Explicit horizontal scroll delta." }, deltaY: { type: "number", description: "Explicit vertical scroll delta." }, scrollIntoView: { type: "boolean", description: "When true, scroll the ref into view." }, viewId: { type: "string", description: "Target browser tab ID. If omitted, uses the last interacted tab." }, take_screenshot_afterwards: { type: "boolean", description: "When true, takes a screenshot after scrolling completes. Defaults to false." } }, required: [] }) }, { name: "browser_drag", description: "Drag an element by ref to another ref or viewport coordinates.", parameters: JSON.stringify({ type: "object", properties: { sourceRef: { type: "string", description: "Source element ref from browser_snapshot." }, targetRef: { type: "string", description: "Optional target element ref from browser_snapshot." }, targetX: { type: "number", description: "Optional target viewport x coordinate." }, targetY: { type: "number", description: "Optional target viewport y coordinate." }, viewId: { type: "string", description: "Target browser tab ID. If omitted, uses the last interacted tab." }, take_screenshot_afterwards: { type: "boolean", description: "When true, takes a screenshot after drag completes. Defaults to false." } }, required: ["sourceRef"] }) }, { name: "browser_get_bounding_box", description: "Get the viewport bounding box for an element ref.", parameters: JSON.stringify({ type: "object", properties: { ref: { type: "string", description: "Element ref from browser_snapshot." }, element: { type: "string", description: "Human-readable description of the element." }, viewId: { type: "string", description: "Target browser tab ID. If omitted, uses the last interacted tab." } }, required: ["ref"] }) }, { name: "browser_highlight", description: "Highlight an element by ref in the browser page for visual grounding.", parameters: JSON.stringify({ type: "object", properties: { ref: { type: "string", description: "Element ref from browser_snapshot." }, element: { type: "string", description: "Human-readable description of the element." }, durationMs: { type: "number", description: "Highlight duration in milliseconds. Defaults to 2000." }, viewId: { type: "string", description: "Target browser tab ID. If omitted, uses the last interacted tab." } }, required: ["ref"] }) }, { name: "browser_tabs", description: "List, create, close, or select a browser tab", parameters: JSON.stringify({ type: "object", properties: { action: { type: "string", enum: ["list", "new", "close", "select"], description: "Operation to perform" }, index: { type: "number", description: 'Tab index. Required for "select". Optional for "close" (defaults to current tab).' }, position: { type: "string", enum: ["active", "side"], description: 'Only set for action "new" when the user explicitly asks to reveal, show, focus, or open the browser visibly. Set to "active" for visible/revealed browser UI, or "side" if the user mentions "side", "beside", "side panel", or "side by side". Omit this parameter for background automation so focus is preserved.' } }, required: ["action"] }) }, { name: "browser_cdp", description: "Send a Chrome DevTools Protocol command to the target browser tab. Do not use CDP Input.* methods; use dedicated browser tools for clicks, text input, key presses, scrolling, and drag-and-drop. Browser-wide, storage, cookie, permission, download, target-management, and system-level commands are denied.", parameters: JSON.stringify({ type: "object", properties: { method: { type: "string", description: "CDP method name, for example Runtime.evaluate, DOM.getDocument, Profiler.start, or Performance.getMetrics." }, params: { type: "object", description: "CDP params object. Omit or pass {} when the command takes no params." }, viewId: { type: "string", description: "Target browser tab ID. If omitted, uses the last interacted tab." }, take_screenshot_afterwards: { type: "boolean", description: "When true, takes a screenshot after the CDP command completes. Defaults to false." } }, required: ["method"] }) }, { name: "browser_take_screenshot", description: "Take a screenshot of the current page. You can't perform actions based on the screenshot, use browser_snapshot for actions.", parameters: JSON.stringify({ type: "object", properties: { type: { type: "string", description: "Image format for the screenshot. Default is png." }, filename: { type: "string", description: "File name to save the screenshot to. Defaults to page-{timestamp}.{png|jpeg} if not specified." }, element: { type: "string", description: "Description of the element, if taking a screenshot of an element" }, ref: { type: "string", description: "CSS selector for the element, if taking a screenshot of an element" }, fullPage: { type: "boolean", description: "When true, takes a screenshot of the full scrollable page, instead of the currently visible viewport. Cannot be used with element screenshots." }, viewId: { type: "string", description: "Target browser tab ID. If omitted, uses the last interacted tab." } }, required: [] }) }, { name: "browser_lock", description: 'Lock or unlock the browser to control whether the user can interact while you work. Set action to "lock" or "unlock". When locked, the user can still click "Take Control" to unlock if needed.', parameters: JSON.stringify({ type: "object", properties: { action: { type: "string", enum: ["lock", "unlock"], description: "Whether to lock or unlock the browser for user interaction." }, viewId: { type: "string", description: "Target browser tab ID. If omitted, uses the last interacted tab." } }, required: ["action"] }) }];
    }
    async initialize(t2) {
      a.info("Browser Automation MCP Provider initialized with direct execution");
    }
    async listOfferings() {
      return { tools: [...this.tools], prompts: [], resources: [] };
    }
    async callTool(t2, e2, n2) {
      a.info(`Executing tool: ${t2} with args: ${JSON.stringify(e2)}`);
      let r2, o2 = true;
      try {
        const o3 = { ownerAgentId: n2?.composerId };
        switch (t2) {
          case "browser_navigate": {
            const t3 = e2;
            r2 = await Et.navigate(t3, o3);
            break;
          }
          case "browser_snapshot":
            r2 = await Et.snapshot(e2, o3);
            break;
          case "browser_take_screenshot":
            r2 = await Et.takeScreenshot(e2, o3);
            break;
          case "browser_cdp": {
            r2 = await Et.cdp(e2, o3);
            const t3 = (function(t4) {
              return t4?.conversationId ?? t4?.composerId;
            })(n2), s2 = (function(t4) {
              for (const e3 of t4.content) if ("metadata" === e3.type) return e3.viewId;
            })(r2);
            void 0 !== t3 && void 0 !== s2 && this.cdpTurnTracker.record(t3, { viewId: s2, ownerAgentId: o3.ownerAgentId });
            break;
          }
          case "browser_click":
            r2 = await Et.click(e2, o3);
            break;
          case "browser_mouse_click_xy":
            r2 = await Et.mouseClickXY(e2, o3);
            break;
          case "browser_type":
            r2 = await Et.type(e2, o3);
            break;
          case "browser_fill":
            r2 = await Et.fill(e2, o3);
            break;
          case "browser_select_option":
            r2 = await Et.selectOption(e2, o3);
            break;
          case "browser_press_key":
            r2 = await Et.pressKey(e2, o3);
            break;
          case "browser_scroll":
            r2 = await Et.scroll(e2, o3);
            break;
          case "browser_drag":
            r2 = await Et.drag(e2, o3);
            break;
          case "browser_get_bounding_box":
            r2 = await Et.getBoundingBox(e2, o3);
            break;
          case "browser_highlight":
            r2 = await Et.highlight(e2, o3);
            break;
          case "browser_tabs": {
            const t3 = e2;
            r2 = await Et.tabs(t3, o3);
            break;
          }
          case "browser_lock":
            r2 = await Et.lock(e2, o3);
            break;
          default:
            throw new Error(`Unknown tool: ${t2}`);
        }
        return r2;
      } catch (e3) {
        throw o2 = false, a.error(`Error executing tool ${t2}:`, e3), e3;
      } finally {
        !(function(t3, e3, n3, r3) {
          try {
            Promise.resolve(s.cursor.checkFeatureGate("browser_cpp_telemetry")).then((o3) => {
              if (o3) return Dt(t3, e3, n3, r3);
            }).catch(() => {
            });
          } catch {
          }
        })(t2, e2, o2, r2?.browserTelemetry);
      }
    }
    async onTurnEnded(t2) {
      for (const e2 of this.cdpTurnTracker.take(t2.conversationId)) try {
        await s.commands.executeCommand("cursor.browserView.clearAgentDeviceEmulation", e2.viewId, { ownerAgentId: e2.ownerAgentId });
      } catch (t3) {
        a.warn(`Failed to clear device emulation on ${e2.viewId} at the end of a turn: ${String(t3)}`);
      }
    }
    async dispose() {
      a.info("Browser Automation MCP Provider disposed");
    }
  }
  let Pt, Nt;
  async function Mt() {
    a.info("injectBrowserUIScript called");
    try {
      const e2 = (t2 = "browser-tab-id", `
(function() {
	// Prevent double injection
	if (window.__cursorBrowserAutomationInjected) {
		return;
	}

	// Only inject in top-level frame
	if (window !== window.top) {
		return;
	}

	window.__cursorBrowserAutomationInjected = true;

	const tabId = ${JSON.stringify(t2)};

	// =============================================================================
	// Area Screenshot Selection
	// =============================================================================
	// IMPORTANT: BrowserEditorContent.tsx may also inject area screenshot handling
	// via BROWSER_AREA_SCREENSHOT_SCRIPT. Check if it's already injected to avoid
	// duplicate screenshot captures.

	const areaScreenshotAlreadyInjected = window.__cursorAreaScreenshotInjected === true;

	let isDragging = false;
	let dragStartX = null;
	let dragStartY = null;
	let dragSelectionBox = null;
	let areaDragListeners = null;

	function enableAreaSelection() {
		// Skip if BrowserEditorContent already handles area screenshots
		if (areaScreenshotAlreadyInjected) {
			return;
		}

		const mousedownListener = (e) => {
			if (!e.isTrusted) return;
			// Only start drag if not clicking on any overlay elements
			if (e.target.getAttribute &&
				e.target.getAttribute('data-cursor-overlay') === 'true'
			) {
				return;
			}

			e.preventDefault();
			e.stopPropagation();

			isDragging = true;
			dragStartX = e.clientX;
			dragStartY = e.clientY;

			// Hide any existing overlays
			const overlays = document.querySelectorAll('[data-cursor-overlay="true"]');
			overlays.forEach(el => el.style.display = 'none');

			if (!dragSelectionBox) {
				dragSelectionBox = document.createElement('div');
				dragSelectionBox.style.cssText = 'position:fixed;background:rgba(58,150,221,0.1);border:2px dashed #3a96dd;pointer-events:none;z-index:2147483647;';
				document.body.appendChild(dragSelectionBox);
			}
			dragSelectionBox.style.left = dragStartX + 'px';
			dragSelectionBox.style.top = dragStartY + 'px';
			dragSelectionBox.style.width = '0px';
			dragSelectionBox.style.height = '0px';
		};

		const mousemoveListener = (e) => {
			if (!isDragging || !dragSelectionBox) return;

			const currentX = e.clientX;
			const currentY = e.clientY;

			const left = Math.min(dragStartX, currentX);
			const top = Math.min(dragStartY, currentY);
			const width = Math.abs(currentX - dragStartX);
			const height = Math.abs(currentY - dragStartY);

			dragSelectionBox.style.left = left + 'px';
			dragSelectionBox.style.top = top + 'px';
			dragSelectionBox.style.width = width + 'px';
			dragSelectionBox.style.height = height + 'px';
		};

		const mouseupListener = (e) => {
			if (!isDragging || !e.isTrusted) return;
			e.preventDefault();
			e.stopPropagation();

			const currentX = e.clientX;
			const currentY = e.clientY;

			const left = Math.min(dragStartX, currentX);
			const top = Math.min(dragStartY, currentY);
			const width = Math.abs(currentX - dragStartX);
			const height = Math.abs(currentY - dragStartY);

			if (width > 5 || height > 5) {
				const bounds = {
					x: Math.round(left),
					y: Math.round(top),
					width: Math.round(width),
					height: Math.round(height)
				};

				if (dragSelectionBox) {
					dragSelectionBox.remove();
					dragSelectionBox = null;
				}

				disableAreaSelection();

				// Send area screenshot selection
				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						if (window.cursorBrowser) {
							window.cursorBrowser.send('area-screenshot-selected', {
								bounds: bounds
							});
						}

						// Area selection is complete, element selection will continue to work
						// No need to re-enable as the overlay system maintains its own state
					});
				});
			} else {
				if (dragSelectionBox) {
					dragSelectionBox.remove();
					dragSelectionBox = null;
				}
			}

			isDragging = false;
		};

		document.addEventListener('mousedown', mousedownListener, true);
		document.addEventListener('mousemove', mousemoveListener);
		document.addEventListener('mouseup', mouseupListener, true);

		areaDragListeners = {
			mousedown: mousedownListener,
			mousemove: mousemoveListener,
			mouseup: mouseupListener
		};
	}

	function disableAreaSelection() {
		// Skip if BrowserEditorContent already handles area screenshots
		if (areaScreenshotAlreadyInjected) {
			return;
		}

		isDragging = false;
		dragStartX = null;
		dragStartY = null;

		if (dragSelectionBox) {
			dragSelectionBox.remove();
			dragSelectionBox = null;
		}

		if (areaDragListeners) {
			const { mousedown, mousemove, mouseup } = areaDragListeners;
			document.removeEventListener('mousedown', mousedown, true);
			document.removeEventListener('mousemove', mousemove);
			document.removeEventListener('mouseup', mouseup, true);
			areaDragListeners = null;
		}
	}

	// =============================================================================
	// Message Handling
	// =============================================================================

	function onAreaScreenshotCommand(data) {
		if (!data || !data.type) {
			return;
		}
		if (data.type === 'enable-element-selection') {
			if (data.enableAreaSelection) {
				enableAreaSelection();
			}
		} else if (data.type === 'disable-element-selection') {
			disableAreaSelection();
		} else if (data.type === 'start-area-screenshot') {
			enableAreaSelection();
		} else if (data.type === 'stop-area-screenshot') {
			disableAreaSelection();
		}
	}
	if (typeof window.__cursorAreaScreenshotCommand !== 'function') {
		window.__cursorAreaScreenshotCommand = onAreaScreenshotCommand;
	}

	// =============================================================================
	// Keyboard Shortcuts
	// =============================================================================

	document.addEventListener('keydown', (e) => {
		const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
		const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

		if (cmdOrCtrl && !e.altKey) {
			if (e.key === 'a' && !e.shiftKey) {
				e.preventDefault();
				e.stopPropagation();

				const target = e.target;
				if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
					target.select();
				} else if (target instanceof HTMLElement && target.isContentEditable) {
					const selection = window.getSelection();
					const range = document.createRange();
					range.selectNodeContents(target);
					selection?.removeAllRanges();
					selection?.addRange(range);
				} else {
					document.execCommand('selectAll');
				}
				return;
			}
		}
	}, true);

})();
`);
      await s.commands.executeCommand("cursor.browserView.executeJavaScriptInIsolatedWorld", e2), a.info("Browser UI script injected successfully");
    } catch (t3) {
      a.error("Failed to inject browser UI script:", t3);
    }
    var t2;
  }
  async function Ot(t2) {
    a.init(), a.info("Cursor Browser Automation extension activated"), a.info("Using Browser MCP provider");
    const e2 = new $t();
    await e2.initialize(t2.globalStorageUri.fsPath), Pt = e2, Nt = new At({ getProvider: () => Pt }), t2.subscriptions.push(new s.Disposable(() => {
      Nt?.dispose(), Nt = void 0;
    }));
    const n2 = s.cursor.registerMcpProvider(Pt);
    t2.subscriptions.push(n2), Nt.requestPush("activation"), t2.subscriptions.push(s.window.onDidChangeActiveColorTheme(() => {
      Nt?.requestPush("theme_change");
    }));
    const r2 = s.commands.registerCommand(_t, () => {
      Nt?.requestPush("watchdog_backfill");
    });
    t2.subscriptions.push(r2);
    const o2 = s.commands.registerCommand("cursor.browserAutomation.reinjectUIScript", Mt);
    t2.subscriptions.push(o2), Mt().catch(() => {
    });
  }
  async function Lt() {
    Nt?.dispose(), Nt = void 0, Pt && (await Pt.dispose(), Pt = void 0);
  }
  var Bt = exports;
  for (var Ft in o) Bt[Ft] = o[Ft];
  o.__esModule && Object.defineProperty(Bt, "__esModule", { value: true });
})();
