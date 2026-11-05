// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 7898 range:75905..259143
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7898: function(e) {
    var t;
    t = function() {
      return (function(e2) {
        var t2 = {};
        function r(n) {
          if (t2[n]) return t2[n].exports;
          var o = t2[n] = { exports: {}, id: n, loaded: false };
          return e2[n].call(o.exports, o, o.exports, r), o.loaded = true, o.exports;
        }
        return r.m = e2, r.c = t2, r.p = "", r(0);
      })([function(e2, t2, r) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true });
        var n = r(1), o = r(3), s = r(8), i = r(15);
        function a(e3, t3, r2) {
          var i2 = null, a2 = function(e4, t4) {
            r2 && r2(e4, t4), i2 && i2.visit(e4, t4);
          }, l2 = "function" == typeof r2 ? a2 : null, c = false;
          if (t3) {
            c = "boolean" == typeof t3.comment && t3.comment;
            var u = "boolean" == typeof t3.attachComment && t3.attachComment;
            (c || u) && ((i2 = new n.CommentHandler()).attach = u, t3.comment = true, l2 = a2);
          }
          var d, p = false;
          t3 && "string" == typeof t3.sourceType && (p = "module" === t3.sourceType), d = t3 && "boolean" == typeof t3.jsx && t3.jsx ? new o.JSXParser(e3, t3, l2) : new s.Parser(e3, t3, l2);
          var h = p ? d.parseModule() : d.parseScript();
          return c && i2 && (h.comments = i2.comments), d.config.tokens && (h.tokens = d.tokens), d.config.tolerant && (h.errors = d.errorHandler.errors), h;
        }
        t2.parse = a, t2.parseModule = function(e3, t3, r2) {
          var n2 = t3 || {};
          return n2.sourceType = "module", a(e3, n2, r2);
        }, t2.parseScript = function(e3, t3, r2) {
          var n2 = t3 || {};
          return n2.sourceType = "script", a(e3, n2, r2);
        }, t2.tokenize = function(e3, t3, r2) {
          var n2, o2 = new i.Tokenizer(e3, t3);
          n2 = [];
          try {
            for (; ; ) {
              var s2 = o2.getNextToken();
              if (!s2) break;
              r2 && (s2 = r2(s2)), n2.push(s2);
            }
          } catch (e4) {
            o2.errorHandler.tolerate(e4);
          }
          return o2.errorHandler.tolerant && (n2.errors = o2.errors()), n2;
        };
        var l = r(2);
        t2.Syntax = l.Syntax, t2.version = "4.0.1";
      }, function(e2, t2, r) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true });
        var n = r(2), o = (function() {
          function e3() {
            this.attach = false, this.comments = [], this.stack = [], this.leading = [], this.trailing = [];
          }
          return e3.prototype.insertInnerComments = function(e4, t3) {
            if (e4.type === n.Syntax.BlockStatement && 0 === e4.body.length) {
              for (var r2 = [], o2 = this.leading.length - 1; o2 >= 0; --o2) {
                var s = this.leading[o2];
                t3.end.offset >= s.start && (r2.unshift(s.comment), this.leading.splice(o2, 1), this.trailing.splice(o2, 1));
              }
              r2.length && (e4.innerComments = r2);
            }
          }, e3.prototype.findTrailingComments = function(e4) {
            var t3 = [];
            if (this.trailing.length > 0) {
              for (var r2 = this.trailing.length - 1; r2 >= 0; --r2) {
                var n2 = this.trailing[r2];
                n2.start >= e4.end.offset && t3.unshift(n2.comment);
              }
              return this.trailing.length = 0, t3;
            }
            var o2 = this.stack[this.stack.length - 1];
            if (o2 && o2.node.trailingComments) {
              var s = o2.node.trailingComments[0];
              s && s.range[0] >= e4.end.offset && (t3 = o2.node.trailingComments, delete o2.node.trailingComments);
            }
            return t3;
          }, e3.prototype.findLeadingComments = function(e4) {
            for (var t3, r2 = []; this.stack.length > 0 && ((s = this.stack[this.stack.length - 1]) && s.start >= e4.start.offset); ) t3 = s.node, this.stack.pop();
            if (t3) {
              for (var n2 = (t3.leadingComments ? t3.leadingComments.length : 0) - 1; n2 >= 0; --n2) {
                var o2 = t3.leadingComments[n2];
                o2.range[1] <= e4.start.offset && (r2.unshift(o2), t3.leadingComments.splice(n2, 1));
              }
              return t3.leadingComments && 0 === t3.leadingComments.length && delete t3.leadingComments, r2;
            }
            for (n2 = this.leading.length - 1; n2 >= 0; --n2) {
              var s;
              (s = this.leading[n2]).start <= e4.start.offset && (r2.unshift(s.comment), this.leading.splice(n2, 1));
            }
            return r2;
          }, e3.prototype.visitNode = function(e4, t3) {
            if (!(e4.type === n.Syntax.Program && e4.body.length > 0)) {
              this.insertInnerComments(e4, t3);
              var r2 = this.findTrailingComments(t3), o2 = this.findLeadingComments(t3);
              o2.length > 0 && (e4.leadingComments = o2), r2.length > 0 && (e4.trailingComments = r2), this.stack.push({ node: e4, start: t3.start.offset });
            }
          }, e3.prototype.visitComment = function(e4, t3) {
            var r2 = "L" === e4.type[0] ? "Line" : "Block", n2 = { type: r2, value: e4.value };
            if (e4.range && (n2.range = e4.range), e4.loc && (n2.loc = e4.loc), this.comments.push(n2), this.attach) {
              var o2 = { comment: { type: r2, value: e4.value, range: [t3.start.offset, t3.end.offset] }, start: t3.start.offset };
              e4.loc && (o2.comment.loc = e4.loc), e4.type = r2, this.leading.push(o2), this.trailing.push(o2);
            }
          }, e3.prototype.visit = function(e4, t3) {
            "LineComment" === e4.type || "BlockComment" === e4.type ? this.visitComment(e4, t3) : this.attach && this.visitNode(e4, t3);
          }, e3;
        })();
        t2.CommentHandler = o;
      }, function(e2, t2) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Syntax = { AssignmentExpression: "AssignmentExpression", AssignmentPattern: "AssignmentPattern", ArrayExpression: "ArrayExpression", ArrayPattern: "ArrayPattern", ArrowFunctionExpression: "ArrowFunctionExpression", AwaitExpression: "AwaitExpression", BlockStatement: "BlockStatement", BinaryExpression: "BinaryExpression", BreakStatement: "BreakStatement", CallExpression: "CallExpression", CatchClause: "CatchClause", ClassBody: "ClassBody", ClassDeclaration: "ClassDeclaration", ClassExpression: "ClassExpression", ConditionalExpression: "ConditionalExpression", ContinueStatement: "ContinueStatement", DoWhileStatement: "DoWhileStatement", DebuggerStatement: "DebuggerStatement", EmptyStatement: "EmptyStatement", ExportAllDeclaration: "ExportAllDeclaration", ExportDefaultDeclaration: "ExportDefaultDeclaration", ExportNamedDeclaration: "ExportNamedDeclaration", ExportSpecifier: "ExportSpecifier", ExpressionStatement: "ExpressionStatement", ForStatement: "ForStatement", ForOfStatement: "ForOfStatement", ForInStatement: "ForInStatement", FunctionDeclaration: "FunctionDeclaration", FunctionExpression: "FunctionExpression", Identifier: "Identifier", IfStatement: "IfStatement", ImportDeclaration: "ImportDeclaration", ImportDefaultSpecifier: "ImportDefaultSpecifier", ImportNamespaceSpecifier: "ImportNamespaceSpecifier", ImportSpecifier: "ImportSpecifier", Literal: "Literal", LabeledStatement: "LabeledStatement", LogicalExpression: "LogicalExpression", MemberExpression: "MemberExpression", MetaProperty: "MetaProperty", MethodDefinition: "MethodDefinition", NewExpression: "NewExpression", ObjectExpression: "ObjectExpression", ObjectPattern: "ObjectPattern", Program: "Program", Property: "Property", RestElement: "RestElement", ReturnStatement: "ReturnStatement", SequenceExpression: "SequenceExpression", SpreadElement: "SpreadElement", Super: "Super", SwitchCase: "SwitchCase", SwitchStatement: "SwitchStatement", TaggedTemplateExpression: "TaggedTemplateExpression", TemplateElement: "TemplateElement", TemplateLiteral: "TemplateLiteral", ThisExpression: "ThisExpression", ThrowStatement: "ThrowStatement", TryStatement: "TryStatement", UnaryExpression: "UnaryExpression", UpdateExpression: "UpdateExpression", VariableDeclaration: "VariableDeclaration", VariableDeclarator: "VariableDeclarator", WhileStatement: "WhileStatement", WithStatement: "WithStatement", YieldExpression: "YieldExpression" };
      }, function(e2, t2, r) {
        "use strict";
        var n, o = this && this.__extends || (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
          e3.__proto__ = t3;
        } || function(e3, t3) {
          for (var r2 in t3) t3.hasOwnProperty(r2) && (e3[r2] = t3[r2]);
        }, function(e3, t3) {
          function r2() {
            this.constructor = e3;
          }
          n(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r2.prototype = t3.prototype, new r2());
        });
        Object.defineProperty(t2, "__esModule", { value: true });
        var s = r(4), i = r(5), a = r(6), l = r(7), c = r(8), u = r(13), d = r(14);
        function p(e3) {
          var t3;
          switch (e3.type) {
            case a.JSXSyntax.JSXIdentifier:
              t3 = e3.name;
              break;
            case a.JSXSyntax.JSXNamespacedName:
              var r2 = e3;
              t3 = p(r2.namespace) + ":" + p(r2.name);
              break;
            case a.JSXSyntax.JSXMemberExpression:
              var n2 = e3;
              t3 = p(n2.object) + "." + p(n2.property);
          }
          return t3;
        }
        u.TokenName[100] = "JSXIdentifier", u.TokenName[101] = "JSXText";
        var h = (function(e3) {
          function t3(t4, r2, n2) {
            return e3.call(this, t4, r2, n2) || this;
          }
          return o(t3, e3), t3.prototype.parsePrimaryExpression = function() {
            return this.match("<") ? this.parseJSXRoot() : e3.prototype.parsePrimaryExpression.call(this);
          }, t3.prototype.startJSX = function() {
            this.scanner.index = this.startMarker.index, this.scanner.lineNumber = this.startMarker.line, this.scanner.lineStart = this.startMarker.index - this.startMarker.column;
          }, t3.prototype.finishJSX = function() {
            this.nextToken();
          }, t3.prototype.reenterJSX = function() {
            this.startJSX(), this.expectJSX("}"), this.config.tokens && this.tokens.pop();
          }, t3.prototype.createJSXNode = function() {
            return this.collectComments(), { index: this.scanner.index, line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart };
          }, t3.prototype.createJSXChildNode = function() {
            return { index: this.scanner.index, line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart };
          }, t3.prototype.scanXHTMLEntity = function(e4) {
            for (var t4 = "&", r2 = true, n2 = false, o2 = false, i2 = false; !this.scanner.eof() && r2 && !n2; ) {
              var a2 = this.scanner.source[this.scanner.index];
              if (a2 === e4) break;
              if (n2 = ";" === a2, t4 += a2, ++this.scanner.index, !n2) switch (t4.length) {
                case 2:
                  o2 = "#" === a2;
                  break;
                case 3:
                  o2 && (r2 = (i2 = "x" === a2) || s.Character.isDecimalDigit(a2.charCodeAt(0)), o2 = o2 && !i2);
                  break;
                default:
                  r2 = (r2 = r2 && !(o2 && !s.Character.isDecimalDigit(a2.charCodeAt(0)))) && !(i2 && !s.Character.isHexDigit(a2.charCodeAt(0)));
              }
            }
            if (r2 && n2 && t4.length > 2) {
              var l2 = t4.substr(1, t4.length - 2);
              o2 && l2.length > 1 ? t4 = String.fromCharCode(parseInt(l2.substr(1), 10)) : i2 && l2.length > 2 ? t4 = String.fromCharCode(parseInt("0" + l2.substr(1), 16)) : o2 || i2 || !d.XHTMLEntities[l2] || (t4 = d.XHTMLEntities[l2]);
            }
            return t4;
          }, t3.prototype.lexJSX = function() {
            var e4 = this.scanner.source.charCodeAt(this.scanner.index);
            if (60 === e4 || 62 === e4 || 47 === e4 || 58 === e4 || 61 === e4 || 123 === e4 || 125 === e4) return { type: 7, value: a2 = this.scanner.source[this.scanner.index++], lineNumber: this.scanner.lineNumber, lineStart: this.scanner.lineStart, start: this.scanner.index - 1, end: this.scanner.index };
            if (34 === e4 || 39 === e4) {
              for (var t4 = this.scanner.index, r2 = this.scanner.source[this.scanner.index++], n2 = ""; !this.scanner.eof() && (l2 = this.scanner.source[this.scanner.index++]) !== r2; ) n2 += "&" === l2 ? this.scanXHTMLEntity(r2) : l2;
              return { type: 8, value: n2, lineNumber: this.scanner.lineNumber, lineStart: this.scanner.lineStart, start: t4, end: this.scanner.index };
            }
            if (46 === e4) {
              var o2 = this.scanner.source.charCodeAt(this.scanner.index + 1), i2 = this.scanner.source.charCodeAt(this.scanner.index + 2), a2 = 46 === o2 && 46 === i2 ? "..." : ".";
              return t4 = this.scanner.index, this.scanner.index += a2.length, { type: 7, value: a2, lineNumber: this.scanner.lineNumber, lineStart: this.scanner.lineStart, start: t4, end: this.scanner.index };
            }
            if (96 === e4) return { type: 10, value: "", lineNumber: this.scanner.lineNumber, lineStart: this.scanner.lineStart, start: this.scanner.index, end: this.scanner.index };
            if (s.Character.isIdentifierStart(e4) && 92 !== e4) {
              for (t4 = this.scanner.index, ++this.scanner.index; !this.scanner.eof(); ) {
                var l2 = this.scanner.source.charCodeAt(this.scanner.index);
                if (s.Character.isIdentifierPart(l2) && 92 !== l2) ++this.scanner.index;
                else {
                  if (45 !== l2) break;
                  ++this.scanner.index;
                }
              }
              return { type: 100, value: this.scanner.source.slice(t4, this.scanner.index), lineNumber: this.scanner.lineNumber, lineStart: this.scanner.lineStart, start: t4, end: this.scanner.index };
            }
            return this.scanner.lex();
          }, t3.prototype.nextJSXToken = function() {
            this.collectComments(), this.startMarker.index = this.scanner.index, this.startMarker.line = this.scanner.lineNumber, this.startMarker.column = this.scanner.index - this.scanner.lineStart;
            var e4 = this.lexJSX();
            return this.lastMarker.index = this.scanner.index, this.lastMarker.line = this.scanner.lineNumber, this.lastMarker.column = this.scanner.index - this.scanner.lineStart, this.config.tokens && this.tokens.push(this.convertToken(e4)), e4;
          }, t3.prototype.nextJSXText = function() {
            this.startMarker.index = this.scanner.index, this.startMarker.line = this.scanner.lineNumber, this.startMarker.column = this.scanner.index - this.scanner.lineStart;
            for (var e4 = this.scanner.index, t4 = ""; !this.scanner.eof(); ) {
              var r2 = this.scanner.source[this.scanner.index];
              if ("{" === r2 || "<" === r2) break;
              ++this.scanner.index, t4 += r2, s.Character.isLineTerminator(r2.charCodeAt(0)) && (++this.scanner.lineNumber, "\r" === r2 && "\n" === this.scanner.source[this.scanner.index] && ++this.scanner.index, this.scanner.lineStart = this.scanner.index);
            }
            this.lastMarker.index = this.scanner.index, this.lastMarker.line = this.scanner.lineNumber, this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
            var n2 = { type: 101, value: t4, lineNumber: this.scanner.lineNumber, lineStart: this.scanner.lineStart, start: e4, end: this.scanner.index };
            return t4.length > 0 && this.config.tokens && this.tokens.push(this.convertToken(n2)), n2;
          }, t3.prototype.peekJSXToken = function() {
            var e4 = this.scanner.saveState();
            this.scanner.scanComments();
            var t4 = this.lexJSX();
            return this.scanner.restoreState(e4), t4;
          }, t3.prototype.expectJSX = function(e4) {
            var t4 = this.nextJSXToken();
            7 === t4.type && t4.value === e4 || this.throwUnexpectedToken(t4);
          }, t3.prototype.matchJSX = function(e4) {
            var t4 = this.peekJSXToken();
            return 7 === t4.type && t4.value === e4;
          }, t3.prototype.parseJSXIdentifier = function() {
            var e4 = this.createJSXNode(), t4 = this.nextJSXToken();
            return 100 !== t4.type && this.throwUnexpectedToken(t4), this.finalize(e4, new i.JSXIdentifier(t4.value));
          }, t3.prototype.parseJSXElementName = function() {
            var e4 = this.createJSXNode(), t4 = this.parseJSXIdentifier();
            if (this.matchJSX(":")) {
              var r2 = t4;
              this.expectJSX(":");
              var n2 = this.parseJSXIdentifier();
              t4 = this.finalize(e4, new i.JSXNamespacedName(r2, n2));
            } else if (this.matchJSX(".")) for (; this.matchJSX("."); ) {
              var o2 = t4;
              this.expectJSX(".");
              var s2 = this.parseJSXIdentifier();
              t4 = this.finalize(e4, new i.JSXMemberExpression(o2, s2));
            }
            return t4;
          }, t3.prototype.parseJSXAttributeName = function() {
            var e4, t4 = this.createJSXNode(), r2 = this.parseJSXIdentifier();
            if (this.matchJSX(":")) {
              var n2 = r2;
              this.expectJSX(":");
              var o2 = this.parseJSXIdentifier();
              e4 = this.finalize(t4, new i.JSXNamespacedName(n2, o2));
            } else e4 = r2;
            return e4;
          }, t3.prototype.parseJSXStringLiteralAttribute = function() {
            var e4 = this.createJSXNode(), t4 = this.nextJSXToken();
            8 !== t4.type && this.throwUnexpectedToken(t4);
            var r2 = this.getTokenRaw(t4);
            return this.finalize(e4, new l.Literal(t4.value, r2));
          }, t3.prototype.parseJSXExpressionAttribute = function() {
            var e4 = this.createJSXNode();
            this.expectJSX("{"), this.finishJSX(), this.match("}") && this.tolerateError("JSX attributes must only be assigned a non-empty expression");
            var t4 = this.parseAssignmentExpression();
            return this.reenterJSX(), this.finalize(e4, new i.JSXExpressionContainer(t4));
          }, t3.prototype.parseJSXAttributeValue = function() {
            return this.matchJSX("{") ? this.parseJSXExpressionAttribute() : this.matchJSX("<") ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute();
          }, t3.prototype.parseJSXNameValueAttribute = function() {
            var e4 = this.createJSXNode(), t4 = this.parseJSXAttributeName(), r2 = null;
            return this.matchJSX("=") && (this.expectJSX("="), r2 = this.parseJSXAttributeValue()), this.finalize(e4, new i.JSXAttribute(t4, r2));
          }, t3.prototype.parseJSXSpreadAttribute = function() {
            var e4 = this.createJSXNode();
            this.expectJSX("{"), this.expectJSX("..."), this.finishJSX();
            var t4 = this.parseAssignmentExpression();
            return this.reenterJSX(), this.finalize(e4, new i.JSXSpreadAttribute(t4));
          }, t3.prototype.parseJSXAttributes = function() {
            for (var e4 = []; !this.matchJSX("/") && !this.matchJSX(">"); ) {
              var t4 = this.matchJSX("{") ? this.parseJSXSpreadAttribute() : this.parseJSXNameValueAttribute();
              e4.push(t4);
            }
            return e4;
          }, t3.prototype.parseJSXOpeningElement = function() {
            var e4 = this.createJSXNode();
            this.expectJSX("<");
            var t4 = this.parseJSXElementName(), r2 = this.parseJSXAttributes(), n2 = this.matchJSX("/");
            return n2 && this.expectJSX("/"), this.expectJSX(">"), this.finalize(e4, new i.JSXOpeningElement(t4, n2, r2));
          }, t3.prototype.parseJSXBoundaryElement = function() {
            var e4 = this.createJSXNode();
            if (this.expectJSX("<"), this.matchJSX("/")) {
              this.expectJSX("/");
              var t4 = this.parseJSXElementName();
              return this.expectJSX(">"), this.finalize(e4, new i.JSXClosingElement(t4));
            }
            var r2 = this.parseJSXElementName(), n2 = this.parseJSXAttributes(), o2 = this.matchJSX("/");
            return o2 && this.expectJSX("/"), this.expectJSX(">"), this.finalize(e4, new i.JSXOpeningElement(r2, o2, n2));
          }, t3.prototype.parseJSXEmptyExpression = function() {
            var e4 = this.createJSXChildNode();
            return this.collectComments(), this.lastMarker.index = this.scanner.index, this.lastMarker.line = this.scanner.lineNumber, this.lastMarker.column = this.scanner.index - this.scanner.lineStart, this.finalize(e4, new i.JSXEmptyExpression());
          }, t3.prototype.parseJSXExpressionContainer = function() {
            var e4, t4 = this.createJSXNode();
            return this.expectJSX("{"), this.matchJSX("}") ? (e4 = this.parseJSXEmptyExpression(), this.expectJSX("}")) : (this.finishJSX(), e4 = this.parseAssignmentExpression(), this.reenterJSX()), this.finalize(t4, new i.JSXExpressionContainer(e4));
          }, t3.prototype.parseJSXChildren = function() {
            for (var e4 = []; !this.scanner.eof(); ) {
              var t4 = this.createJSXChildNode(), r2 = this.nextJSXText();
              if (r2.start < r2.end) {
                var n2 = this.getTokenRaw(r2), o2 = this.finalize(t4, new i.JSXText(r2.value, n2));
                e4.push(o2);
              }
              if ("{" !== this.scanner.source[this.scanner.index]) break;
              var s2 = this.parseJSXExpressionContainer();
              e4.push(s2);
            }
            return e4;
          }, t3.prototype.parseComplexJSXElement = function(e4) {
            for (var t4 = []; !this.scanner.eof(); ) {
              e4.children = e4.children.concat(this.parseJSXChildren());
              var r2 = this.createJSXChildNode(), n2 = this.parseJSXBoundaryElement();
              if (n2.type === a.JSXSyntax.JSXOpeningElement) {
                var o2 = n2;
                if (o2.selfClosing) {
                  var s2 = this.finalize(r2, new i.JSXElement(o2, [], null));
                  e4.children.push(s2);
                } else t4.push(e4), e4 = { node: r2, opening: o2, closing: null, children: [] };
              }
              if (n2.type === a.JSXSyntax.JSXClosingElement) {
                e4.closing = n2;
                var l2 = p(e4.opening.name);
                if (l2 !== p(e4.closing.name) && this.tolerateError("Expected corresponding JSX closing tag for %0", l2), !(t4.length > 0)) break;
                s2 = this.finalize(e4.node, new i.JSXElement(e4.opening, e4.children, e4.closing)), (e4 = t4[t4.length - 1]).children.push(s2), t4.pop();
              }
            }
            return e4;
          }, t3.prototype.parseJSXElement = function() {
            var e4 = this.createJSXNode(), t4 = this.parseJSXOpeningElement(), r2 = [], n2 = null;
            if (!t4.selfClosing) {
              var o2 = this.parseComplexJSXElement({ node: e4, opening: t4, closing: n2, children: r2 });
              r2 = o2.children, n2 = o2.closing;
            }
            return this.finalize(e4, new i.JSXElement(t4, r2, n2));
          }, t3.prototype.parseJSXRoot = function() {
            this.config.tokens && this.tokens.pop(), this.startJSX();
            var e4 = this.parseJSXElement();
            return this.finishJSX(), e4;
          }, t3.prototype.isStartOfExpression = function() {
            return e3.prototype.isStartOfExpression.call(this) || this.match("<");
          }, t3;
        })(c.Parser);
        t2.JSXParser = h;
      }, function(e2, t2) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true });
        var r = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ };
        t2.Character = { fromCodePoint: function(e3) {
          return e3 < 65536 ? String.fromCharCode(e3) : String.fromCharCode(55296 + (e3 - 65536 >> 10)) + String.fromCharCode(56320 + (e3 - 65536 & 1023));
        }, isWhiteSpace: function(e3) {
          return 32 === e3 || 9 === e3 || 11 === e3 || 12 === e3 || 160 === e3 || e3 >= 5760 && [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].indexOf(e3) >= 0;
        }, isLineTerminator: function(e3) {
          return 10 === e3 || 13 === e3 || 8232 === e3 || 8233 === e3;
        }, isIdentifierStart: function(e3) {
          return 36 === e3 || 95 === e3 || e3 >= 65 && e3 <= 90 || e3 >= 97 && e3 <= 122 || 92 === e3 || e3 >= 128 && r.NonAsciiIdentifierStart.test(t2.Character.fromCodePoint(e3));
        }, isIdentifierPart: function(e3) {
          return 36 === e3 || 95 === e3 || e3 >= 65 && e3 <= 90 || e3 >= 97 && e3 <= 122 || e3 >= 48 && e3 <= 57 || 92 === e3 || e3 >= 128 && r.NonAsciiIdentifierPart.test(t2.Character.fromCodePoint(e3));
        }, isDecimalDigit: function(e3) {
          return e3 >= 48 && e3 <= 57;
        }, isHexDigit: function(e3) {
          return e3 >= 48 && e3 <= 57 || e3 >= 65 && e3 <= 70 || e3 >= 97 && e3 <= 102;
        }, isOctalDigit: function(e3) {
          return e3 >= 48 && e3 <= 55;
        } };
      }, function(e2, t2, r) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true });
        var n = r(6), o = function(e3) {
          this.type = n.JSXSyntax.JSXClosingElement, this.name = e3;
        };
        t2.JSXClosingElement = o;
        var s = function(e3, t3, r2) {
          this.type = n.JSXSyntax.JSXElement, this.openingElement = e3, this.children = t3, this.closingElement = r2;
        };
        t2.JSXElement = s;
        var i = function() {
          this.type = n.JSXSyntax.JSXEmptyExpression;
        };
        t2.JSXEmptyExpression = i;
        var a = function(e3) {
          this.type = n.JSXSyntax.JSXExpressionContainer, this.expression = e3;
        };
        t2.JSXExpressionContainer = a;
        var l = function(e3) {
          this.type = n.JSXSyntax.JSXIdentifier, this.name = e3;
        };
        t2.JSXIdentifier = l;
        var c = function(e3, t3) {
          this.type = n.JSXSyntax.JSXMemberExpression, this.object = e3, this.property = t3;
        };
        t2.JSXMemberExpression = c;
        var u = function(e3, t3) {
          this.type = n.JSXSyntax.JSXAttribute, this.name = e3, this.value = t3;
        };
        t2.JSXAttribute = u;
        var d = function(e3, t3) {
          this.type = n.JSXSyntax.JSXNamespacedName, this.namespace = e3, this.name = t3;
        };
        t2.JSXNamespacedName = d;
        var p = function(e3, t3, r2) {
          this.type = n.JSXSyntax.JSXOpeningElement, this.name = e3, this.selfClosing = t3, this.attributes = r2;
        };
        t2.JSXOpeningElement = p;
        var h = function(e3) {
          this.type = n.JSXSyntax.JSXSpreadAttribute, this.argument = e3;
        };
        t2.JSXSpreadAttribute = h;
        var m = function(e3, t3) {
          this.type = n.JSXSyntax.JSXText, this.value = e3, this.raw = t3;
        };
        t2.JSXText = m;
      }, function(e2, t2) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.JSXSyntax = { JSXAttribute: "JSXAttribute", JSXClosingElement: "JSXClosingElement", JSXElement: "JSXElement", JSXEmptyExpression: "JSXEmptyExpression", JSXExpressionContainer: "JSXExpressionContainer", JSXIdentifier: "JSXIdentifier", JSXMemberExpression: "JSXMemberExpression", JSXNamespacedName: "JSXNamespacedName", JSXOpeningElement: "JSXOpeningElement", JSXSpreadAttribute: "JSXSpreadAttribute", JSXText: "JSXText" };
      }, function(e2, t2, r) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true });
        var n = r(2), o = function(e3) {
          this.type = n.Syntax.ArrayExpression, this.elements = e3;
        };
        t2.ArrayExpression = o;
        var s = function(e3) {
          this.type = n.Syntax.ArrayPattern, this.elements = e3;
        };
        t2.ArrayPattern = s;
        var i = function(e3, t3, r2) {
          this.type = n.Syntax.ArrowFunctionExpression, this.id = null, this.params = e3, this.body = t3, this.generator = false, this.expression = r2, this.async = false;
        };
        t2.ArrowFunctionExpression = i;
        var a = function(e3, t3, r2) {
          this.type = n.Syntax.AssignmentExpression, this.operator = e3, this.left = t3, this.right = r2;
        };
        t2.AssignmentExpression = a;
        var l = function(e3, t3) {
          this.type = n.Syntax.AssignmentPattern, this.left = e3, this.right = t3;
        };
        t2.AssignmentPattern = l;
        var c = function(e3, t3, r2) {
          this.type = n.Syntax.ArrowFunctionExpression, this.id = null, this.params = e3, this.body = t3, this.generator = false, this.expression = r2, this.async = true;
        };
        t2.AsyncArrowFunctionExpression = c;
        var u = function(e3, t3, r2) {
          this.type = n.Syntax.FunctionDeclaration, this.id = e3, this.params = t3, this.body = r2, this.generator = false, this.expression = false, this.async = true;
        };
        t2.AsyncFunctionDeclaration = u;
        var d = function(e3, t3, r2) {
          this.type = n.Syntax.FunctionExpression, this.id = e3, this.params = t3, this.body = r2, this.generator = false, this.expression = false, this.async = true;
        };
        t2.AsyncFunctionExpression = d;
        var p = function(e3) {
          this.type = n.Syntax.AwaitExpression, this.argument = e3;
        };
        t2.AwaitExpression = p;
        var h = function(e3, t3, r2) {
          var o2 = "||" === e3 || "&&" === e3;
          this.type = o2 ? n.Syntax.LogicalExpression : n.Syntax.BinaryExpression, this.operator = e3, this.left = t3, this.right = r2;
        };
        t2.BinaryExpression = h;
        var m = function(e3) {
          this.type = n.Syntax.BlockStatement, this.body = e3;
        };
        t2.BlockStatement = m;
        var f = function(e3) {
          this.type = n.Syntax.BreakStatement, this.label = e3;
        };
        t2.BreakStatement = f;
        var g = function(e3, t3) {
          this.type = n.Syntax.CallExpression, this.callee = e3, this.arguments = t3;
        };
        t2.CallExpression = g;
        var y = function(e3, t3) {
          this.type = n.Syntax.CatchClause, this.param = e3, this.body = t3;
        };
        t2.CatchClause = y;
        var v = function(e3) {
          this.type = n.Syntax.ClassBody, this.body = e3;
        };
        t2.ClassBody = v;
        var w = function(e3, t3, r2) {
          this.type = n.Syntax.ClassDeclaration, this.id = e3, this.superClass = t3, this.body = r2;
        };
        t2.ClassDeclaration = w;
        var b = function(e3, t3, r2) {
          this.type = n.Syntax.ClassExpression, this.id = e3, this.superClass = t3, this.body = r2;
        };
        t2.ClassExpression = b;
        var _ = function(e3, t3) {
          this.type = n.Syntax.MemberExpression, this.computed = true, this.object = e3, this.property = t3;
        };
        t2.ComputedMemberExpression = _;
        var S = function(e3, t3, r2) {
          this.type = n.Syntax.ConditionalExpression, this.test = e3, this.consequent = t3, this.alternate = r2;
        };
        t2.ConditionalExpression = S;
        var x = function(e3) {
          this.type = n.Syntax.ContinueStatement, this.label = e3;
        };
        t2.ContinueStatement = x;
        var k = function() {
          this.type = n.Syntax.DebuggerStatement;
        };
        t2.DebuggerStatement = k;
        var E = function(e3, t3) {
          this.type = n.Syntax.ExpressionStatement, this.expression = e3, this.directive = t3;
        };
        t2.Directive = E;
        var T = function(e3, t3) {
          this.type = n.Syntax.DoWhileStatement, this.body = e3, this.test = t3;
        };
        t2.DoWhileStatement = T;
        var C = function() {
          this.type = n.Syntax.EmptyStatement;
        };
        t2.EmptyStatement = C;
        var I = function(e3) {
          this.type = n.Syntax.ExportAllDeclaration, this.source = e3;
        };
        t2.ExportAllDeclaration = I;
        var A = function(e3) {
          this.type = n.Syntax.ExportDefaultDeclaration, this.declaration = e3;
        };
        t2.ExportDefaultDeclaration = A;
        var P = function(e3, t3, r2) {
          this.type = n.Syntax.ExportNamedDeclaration, this.declaration = e3, this.specifiers = t3, this.source = r2;
        };
        t2.ExportNamedDeclaration = P;
        var M = function(e3, t3) {
          this.type = n.Syntax.ExportSpecifier, this.exported = t3, this.local = e3;
        };
        t2.ExportSpecifier = M;
        var R = function(e3) {
          this.type = n.Syntax.ExpressionStatement, this.expression = e3;
        };
        t2.ExpressionStatement = R;
        var O = function(e3, t3, r2) {
          this.type = n.Syntax.ForInStatement, this.left = e3, this.right = t3, this.body = r2, this.each = false;
        };
        t2.ForInStatement = O;
        var D = function(e3, t3, r2) {
          this.type = n.Syntax.ForOfStatement, this.left = e3, this.right = t3, this.body = r2;
        };
        t2.ForOfStatement = D;
        var N = function(e3, t3, r2, o2) {
          this.type = n.Syntax.ForStatement, this.init = e3, this.test = t3, this.update = r2, this.body = o2;
        };
        t2.ForStatement = N;
        var F = function(e3, t3, r2, o2) {
          this.type = n.Syntax.FunctionDeclaration, this.id = e3, this.params = t3, this.body = r2, this.generator = o2, this.expression = false, this.async = false;
        };
        t2.FunctionDeclaration = F;
        var L = function(e3, t3, r2, o2) {
          this.type = n.Syntax.FunctionExpression, this.id = e3, this.params = t3, this.body = r2, this.generator = o2, this.expression = false, this.async = false;
        };
        t2.FunctionExpression = L;
        var U = function(e3) {
          this.type = n.Syntax.Identifier, this.name = e3;
        };
        t2.Identifier = U;
        var B = function(e3, t3, r2) {
          this.type = n.Syntax.IfStatement, this.test = e3, this.consequent = t3, this.alternate = r2;
        };
        t2.IfStatement = B;
        var $ = function(e3, t3) {
          this.type = n.Syntax.ImportDeclaration, this.specifiers = e3, this.source = t3;
        };
        t2.ImportDeclaration = $;
        var q = function(e3) {
          this.type = n.Syntax.ImportDefaultSpecifier, this.local = e3;
        };
        t2.ImportDefaultSpecifier = q;
        var j = function(e3) {
          this.type = n.Syntax.ImportNamespaceSpecifier, this.local = e3;
        };
        t2.ImportNamespaceSpecifier = j;
        var J = function(e3, t3) {
          this.type = n.Syntax.ImportSpecifier, this.local = e3, this.imported = t3;
        };
        t2.ImportSpecifier = J;
        var z = function(e3, t3) {
          this.type = n.Syntax.LabeledStatement, this.label = e3, this.body = t3;
        };
        t2.LabeledStatement = z;
        var H = function(e3, t3) {
          this.type = n.Syntax.Literal, this.value = e3, this.raw = t3;
        };
        t2.Literal = H;
        var W = function(e3, t3) {
          this.type = n.Syntax.MetaProperty, this.meta = e3, this.property = t3;
        };
        t2.MetaProperty = W;
        var G = function(e3, t3, r2, o2, s2) {
          this.type = n.Syntax.MethodDefinition, this.key = e3, this.computed = t3, this.value = r2, this.kind = o2, this.static = s2;
        };
        t2.MethodDefinition = G;
        var Y = function(e3) {
          this.type = n.Syntax.Program, this.body = e3, this.sourceType = "module";
        };
        t2.Module = Y;
        var V = function(e3, t3) {
          this.type = n.Syntax.NewExpression, this.callee = e3, this.arguments = t3;
        };
        t2.NewExpression = V;
        var K = function(e3) {
          this.type = n.Syntax.ObjectExpression, this.properties = e3;
        };
        t2.ObjectExpression = K;
        var Z = function(e3) {
          this.type = n.Syntax.ObjectPattern, this.properties = e3;
        };
        t2.ObjectPattern = Z;
        var X = function(e3, t3, r2, o2, s2, i2) {
          this.type = n.Syntax.Property, this.key = t3, this.computed = r2, this.value = o2, this.kind = e3, this.method = s2, this.shorthand = i2;
        };
        t2.Property = X;
        var Q = function(e3, t3, r2, o2) {
          this.type = n.Syntax.Literal, this.value = e3, this.raw = t3, this.regex = { pattern: r2, flags: o2 };
        };
        t2.RegexLiteral = Q;
        var ee = function(e3) {
          this.type = n.Syntax.RestElement, this.argument = e3;
        };
        t2.RestElement = ee;
        var te = function(e3) {
          this.type = n.Syntax.ReturnStatement, this.argument = e3;
        };
        t2.ReturnStatement = te;
        var re = function(e3) {
          this.type = n.Syntax.Program, this.body = e3, this.sourceType = "script";
        };
        t2.Script = re;
        var ne = function(e3) {
          this.type = n.Syntax.SequenceExpression, this.expressions = e3;
        };
        t2.SequenceExpression = ne;
        var oe = function(e3) {
          this.type = n.Syntax.SpreadElement, this.argument = e3;
        };
        t2.SpreadElement = oe;
        var se = function(e3, t3) {
          this.type = n.Syntax.MemberExpression, this.computed = false, this.object = e3, this.property = t3;
        };
        t2.StaticMemberExpression = se;
        var ie = function() {
          this.type = n.Syntax.Super;
        };
        t2.Super = ie;
        var ae = function(e3, t3) {
          this.type = n.Syntax.SwitchCase, this.test = e3, this.consequent = t3;
        };
        t2.SwitchCase = ae;
        var le = function(e3, t3) {
          this.type = n.Syntax.SwitchStatement, this.discriminant = e3, this.cases = t3;
        };
        t2.SwitchStatement = le;
        var ce = function(e3, t3) {
          this.type = n.Syntax.TaggedTemplateExpression, this.tag = e3, this.quasi = t3;
        };
        t2.TaggedTemplateExpression = ce;
        var ue = function(e3, t3) {
          this.type = n.Syntax.TemplateElement, this.value = e3, this.tail = t3;
        };
        t2.TemplateElement = ue;
        var de = function(e3, t3) {
          this.type = n.Syntax.TemplateLiteral, this.quasis = e3, this.expressions = t3;
        };
        t2.TemplateLiteral = de;
        var pe = function() {
          this.type = n.Syntax.ThisExpression;
        };
        t2.ThisExpression = pe;
        var he = function(e3) {
          this.type = n.Syntax.ThrowStatement, this.argument = e3;
        };
        t2.ThrowStatement = he;
        var me = function(e3, t3, r2) {
          this.type = n.Syntax.TryStatement, this.block = e3, this.handler = t3, this.finalizer = r2;
        };
        t2.TryStatement = me;
        var fe = function(e3, t3) {
          this.type = n.Syntax.UnaryExpression, this.operator = e3, this.argument = t3, this.prefix = true;
        };
        t2.UnaryExpression = fe;
        var ge = function(e3, t3, r2) {
          this.type = n.Syntax.UpdateExpression, this.operator = e3, this.argument = t3, this.prefix = r2;
        };
        t2.UpdateExpression = ge;
        var ye = function(e3, t3) {
          this.type = n.Syntax.VariableDeclaration, this.declarations = e3, this.kind = t3;
        };
        t2.VariableDeclaration = ye;
        var ve = function(e3, t3) {
          this.type = n.Syntax.VariableDeclarator, this.id = e3, this.init = t3;
        };
        t2.VariableDeclarator = ve;
        var we = function(e3, t3) {
          this.type = n.Syntax.WhileStatement, this.test = e3, this.body = t3;
        };
        t2.WhileStatement = we;
        var be = function(e3, t3) {
          this.type = n.Syntax.WithStatement, this.object = e3, this.body = t3;
        };
        t2.WithStatement = be;
        var _e = function(e3, t3) {
          this.type = n.Syntax.YieldExpression, this.argument = e3, this.delegate = t3;
        };
        t2.YieldExpression = _e;
      }, function(e2, t2, r) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true });
        var n = r(9), o = r(10), s = r(11), i = r(7), a = r(12), l = r(2), c = r(13), u = "ArrowParameterPlaceHolder", d = (function() {
          function e3(e4, t3, r2) {
            void 0 === t3 && (t3 = {}), this.config = { range: "boolean" == typeof t3.range && t3.range, loc: "boolean" == typeof t3.loc && t3.loc, source: null, tokens: "boolean" == typeof t3.tokens && t3.tokens, comment: "boolean" == typeof t3.comment && t3.comment, tolerant: "boolean" == typeof t3.tolerant && t3.tolerant }, this.config.loc && t3.source && null !== t3.source && (this.config.source = String(t3.source)), this.delegate = r2, this.errorHandler = new o.ErrorHandler(), this.errorHandler.tolerant = this.config.tolerant, this.scanner = new a.Scanner(e4, this.errorHandler), this.scanner.trackComment = this.config.comment, this.operatorPrecedence = { ")": 0, ";": 0, ",": 0, "=": 0, "]": 0, "||": 1, "&&": 2, "|": 3, "^": 4, "&": 5, "==": 6, "!=": 6, "===": 6, "!==": 6, "<": 7, ">": 7, "<=": 7, ">=": 7, "<<": 8, ">>": 8, ">>>": 8, "+": 9, "-": 9, "*": 11, "/": 11, "%": 11 }, this.lookahead = { type: 2, value: "", lineNumber: this.scanner.lineNumber, lineStart: 0, start: 0, end: 0 }, this.hasLineTerminator = false, this.context = { isModule: false, await: false, allowIn: true, allowStrictDirective: true, allowYield: true, firstCoverInitializedNameError: null, isAssignmentTarget: false, isBindingElement: false, inFunctionBody: false, inIteration: false, inSwitch: false, labelSet: {}, strict: false }, this.tokens = [], this.startMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }, this.lastMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }, this.nextToken(), this.lastMarker = { index: this.scanner.index, line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart };
          }
          return e3.prototype.throwError = function(e4) {
            for (var t3 = [], r2 = 1; r2 < arguments.length; r2++) t3[r2 - 1] = arguments[r2];
            var o2 = Array.prototype.slice.call(arguments, 1), s2 = e4.replace(/%(\d)/g, function(e5, t4) {
              return n.assert(t4 < o2.length, "Message reference must be in range"), o2[t4];
            }), i2 = this.lastMarker.index, a2 = this.lastMarker.line, l2 = this.lastMarker.column + 1;
            throw this.errorHandler.createError(i2, a2, l2, s2);
          }, e3.prototype.tolerateError = function(e4) {
            for (var t3 = [], r2 = 1; r2 < arguments.length; r2++) t3[r2 - 1] = arguments[r2];
            var o2 = Array.prototype.slice.call(arguments, 1), s2 = e4.replace(/%(\d)/g, function(e5, t4) {
              return n.assert(t4 < o2.length, "Message reference must be in range"), o2[t4];
            }), i2 = this.lastMarker.index, a2 = this.scanner.lineNumber, l2 = this.lastMarker.column + 1;
            this.errorHandler.tolerateError(i2, a2, l2, s2);
          }, e3.prototype.unexpectedTokenError = function(e4, t3) {
            var r2, n2 = t3 || s.Messages.UnexpectedToken;
            if (e4 ? (t3 || (n2 = 2 === e4.type ? s.Messages.UnexpectedEOS : 3 === e4.type ? s.Messages.UnexpectedIdentifier : 6 === e4.type ? s.Messages.UnexpectedNumber : 8 === e4.type ? s.Messages.UnexpectedString : 10 === e4.type ? s.Messages.UnexpectedTemplate : s.Messages.UnexpectedToken, 4 === e4.type && (this.scanner.isFutureReservedWord(e4.value) ? n2 = s.Messages.UnexpectedReserved : this.context.strict && this.scanner.isStrictModeReservedWord(e4.value) && (n2 = s.Messages.StrictReservedWord))), r2 = e4.value) : r2 = "ILLEGAL", n2 = n2.replace("%0", r2), e4 && "number" == typeof e4.lineNumber) {
              var o2 = e4.start, i2 = e4.lineNumber, a2 = this.lastMarker.index - this.lastMarker.column, l2 = e4.start - a2 + 1;
              return this.errorHandler.createError(o2, i2, l2, n2);
            }
            return o2 = this.lastMarker.index, i2 = this.lastMarker.line, l2 = this.lastMarker.column + 1, this.errorHandler.createError(o2, i2, l2, n2);
          }, e3.prototype.throwUnexpectedToken = function(e4, t3) {
            throw this.unexpectedTokenError(e4, t3);
          }, e3.prototype.tolerateUnexpectedToken = function(e4, t3) {
            this.errorHandler.tolerate(this.unexpectedTokenError(e4, t3));
          }, e3.prototype.collectComments = function() {
            if (this.config.comment) {
              var e4 = this.scanner.scanComments();
              if (e4.length > 0 && this.delegate) for (var t3 = 0; t3 < e4.length; ++t3) {
                var r2 = e4[t3], n2 = void 0;
                n2 = { type: r2.multiLine ? "BlockComment" : "LineComment", value: this.scanner.source.slice(r2.slice[0], r2.slice[1]) }, this.config.range && (n2.range = r2.range), this.config.loc && (n2.loc = r2.loc);
                var o2 = { start: { line: r2.loc.start.line, column: r2.loc.start.column, offset: r2.range[0] }, end: { line: r2.loc.end.line, column: r2.loc.end.column, offset: r2.range[1] } };
                this.delegate(n2, o2);
              }
            } else this.scanner.scanComments();
          }, e3.prototype.getTokenRaw = function(e4) {
            return this.scanner.source.slice(e4.start, e4.end);
          }, e3.prototype.convertToken = function(e4) {
            var t3 = { type: c.TokenName[e4.type], value: this.getTokenRaw(e4) };
            if (this.config.range && (t3.range = [e4.start, e4.end]), this.config.loc && (t3.loc = { start: { line: this.startMarker.line, column: this.startMarker.column }, end: { line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart } }), 9 === e4.type) {
              var r2 = e4.pattern, n2 = e4.flags;
              t3.regex = { pattern: r2, flags: n2 };
            }
            return t3;
          }, e3.prototype.nextToken = function() {
            var e4 = this.lookahead;
            this.lastMarker.index = this.scanner.index, this.lastMarker.line = this.scanner.lineNumber, this.lastMarker.column = this.scanner.index - this.scanner.lineStart, this.collectComments(), this.scanner.index !== this.startMarker.index && (this.startMarker.index = this.scanner.index, this.startMarker.line = this.scanner.lineNumber, this.startMarker.column = this.scanner.index - this.scanner.lineStart);
            var t3 = this.scanner.lex();
            return this.hasLineTerminator = e4.lineNumber !== t3.lineNumber, t3 && this.context.strict && 3 === t3.type && this.scanner.isStrictModeReservedWord(t3.value) && (t3.type = 4), this.lookahead = t3, this.config.tokens && 2 !== t3.type && this.tokens.push(this.convertToken(t3)), e4;
          }, e3.prototype.nextRegexToken = function() {
            this.collectComments();
            var e4 = this.scanner.scanRegExp();
            return this.config.tokens && (this.tokens.pop(), this.tokens.push(this.convertToken(e4))), this.lookahead = e4, this.nextToken(), e4;
          }, e3.prototype.createNode = function() {
            return { index: this.startMarker.index, line: this.startMarker.line, column: this.startMarker.column };
          }, e3.prototype.startNode = function(e4, t3) {
            void 0 === t3 && (t3 = 0);
            var r2 = e4.start - e4.lineStart, n2 = e4.lineNumber;
            return r2 < 0 && (r2 += t3, n2--), { index: e4.start, line: n2, column: r2 };
          }, e3.prototype.finalize = function(e4, t3) {
            if (this.config.range && (t3.range = [e4.index, this.lastMarker.index]), this.config.loc && (t3.loc = { start: { line: e4.line, column: e4.column }, end: { line: this.lastMarker.line, column: this.lastMarker.column } }, this.config.source && (t3.loc.source = this.config.source)), this.delegate) {
              var r2 = { start: { line: e4.line, column: e4.column, offset: e4.index }, end: { line: this.lastMarker.line, column: this.lastMarker.column, offset: this.lastMarker.index } };
              this.delegate(t3, r2);
            }
            return t3;
          }, e3.prototype.expect = function(e4) {
            var t3 = this.nextToken();
            7 === t3.type && t3.value === e4 || this.throwUnexpectedToken(t3);
          }, e3.prototype.expectCommaSeparator = function() {
            if (this.config.tolerant) {
              var e4 = this.lookahead;
              7 === e4.type && "," === e4.value ? this.nextToken() : 7 === e4.type && ";" === e4.value ? (this.nextToken(), this.tolerateUnexpectedToken(e4)) : this.tolerateUnexpectedToken(e4, s.Messages.UnexpectedToken);
            } else this.expect(",");
          }, e3.prototype.expectKeyword = function(e4) {
            var t3 = this.nextToken();
            4 === t3.type && t3.value === e4 || this.throwUnexpectedToken(t3);
          }, e3.prototype.match = function(e4) {
            return 7 === this.lookahead.type && this.lookahead.value === e4;
          }, e3.prototype.matchKeyword = function(e4) {
            return 4 === this.lookahead.type && this.lookahead.value === e4;
          }, e3.prototype.matchContextualKeyword = function(e4) {
            return 3 === this.lookahead.type && this.lookahead.value === e4;
          }, e3.prototype.matchAssign = function() {
            if (7 !== this.lookahead.type) return false;
            var e4 = this.lookahead.value;
            return "=" === e4 || "*=" === e4 || "**=" === e4 || "/=" === e4 || "%=" === e4 || "+=" === e4 || "-=" === e4 || "<<=" === e4 || ">>=" === e4 || ">>>=" === e4 || "&=" === e4 || "^=" === e4 || "|=" === e4;
          }, e3.prototype.isolateCoverGrammar = function(e4) {
            var t3 = this.context.isBindingElement, r2 = this.context.isAssignmentTarget, n2 = this.context.firstCoverInitializedNameError;
            this.context.isBindingElement = true, this.context.isAssignmentTarget = true, this.context.firstCoverInitializedNameError = null;
            var o2 = e4.call(this);
            return null !== this.context.firstCoverInitializedNameError && this.throwUnexpectedToken(this.context.firstCoverInitializedNameError), this.context.isBindingElement = t3, this.context.isAssignmentTarget = r2, this.context.firstCoverInitializedNameError = n2, o2;
          }, e3.prototype.inheritCoverGrammar = function(e4) {
            var t3 = this.context.isBindingElement, r2 = this.context.isAssignmentTarget, n2 = this.context.firstCoverInitializedNameError;
            this.context.isBindingElement = true, this.context.isAssignmentTarget = true, this.context.firstCoverInitializedNameError = null;
            var o2 = e4.call(this);
            return this.context.isBindingElement = this.context.isBindingElement && t3, this.context.isAssignmentTarget = this.context.isAssignmentTarget && r2, this.context.firstCoverInitializedNameError = n2 || this.context.firstCoverInitializedNameError, o2;
          }, e3.prototype.consumeSemicolon = function() {
            this.match(";") ? this.nextToken() : this.hasLineTerminator || (2 === this.lookahead.type || this.match("}") || this.throwUnexpectedToken(this.lookahead), this.lastMarker.index = this.startMarker.index, this.lastMarker.line = this.startMarker.line, this.lastMarker.column = this.startMarker.column);
          }, e3.prototype.parsePrimaryExpression = function() {
            var e4, t3, r2, n2 = this.createNode();
            switch (this.lookahead.type) {
              case 3:
                (this.context.isModule || this.context.await) && "await" === this.lookahead.value && this.tolerateUnexpectedToken(this.lookahead), e4 = this.matchAsyncFunction() ? this.parseFunctionExpression() : this.finalize(n2, new i.Identifier(this.nextToken().value));
                break;
              case 6:
              case 8:
                this.context.strict && this.lookahead.octal && this.tolerateUnexpectedToken(this.lookahead, s.Messages.StrictOctalLiteral), this.context.isAssignmentTarget = false, this.context.isBindingElement = false, t3 = this.nextToken(), r2 = this.getTokenRaw(t3), e4 = this.finalize(n2, new i.Literal(t3.value, r2));
                break;
              case 1:
                this.context.isAssignmentTarget = false, this.context.isBindingElement = false, t3 = this.nextToken(), r2 = this.getTokenRaw(t3), e4 = this.finalize(n2, new i.Literal("true" === t3.value, r2));
                break;
              case 5:
                this.context.isAssignmentTarget = false, this.context.isBindingElement = false, t3 = this.nextToken(), r2 = this.getTokenRaw(t3), e4 = this.finalize(n2, new i.Literal(null, r2));
                break;
              case 10:
                e4 = this.parseTemplateLiteral();
                break;
              case 7:
                switch (this.lookahead.value) {
                  case "(":
                    this.context.isBindingElement = false, e4 = this.inheritCoverGrammar(this.parseGroupExpression);
                    break;
                  case "[":
                    e4 = this.inheritCoverGrammar(this.parseArrayInitializer);
                    break;
                  case "{":
                    e4 = this.inheritCoverGrammar(this.parseObjectInitializer);
                    break;
                  case "/":
                  case "/=":
                    this.context.isAssignmentTarget = false, this.context.isBindingElement = false, this.scanner.index = this.startMarker.index, t3 = this.nextRegexToken(), r2 = this.getTokenRaw(t3), e4 = this.finalize(n2, new i.RegexLiteral(t3.regex, r2, t3.pattern, t3.flags));
                    break;
                  default:
                    e4 = this.throwUnexpectedToken(this.nextToken());
                }
                break;
              case 4:
                !this.context.strict && this.context.allowYield && this.matchKeyword("yield") ? e4 = this.parseIdentifierName() : !this.context.strict && this.matchKeyword("let") ? e4 = this.finalize(n2, new i.Identifier(this.nextToken().value)) : (this.context.isAssignmentTarget = false, this.context.isBindingElement = false, this.matchKeyword("function") ? e4 = this.parseFunctionExpression() : this.matchKeyword("this") ? (this.nextToken(), e4 = this.finalize(n2, new i.ThisExpression())) : e4 = this.matchKeyword("class") ? this.parseClassExpression() : this.throwUnexpectedToken(this.nextToken()));
                break;
              default:
                e4 = this.throwUnexpectedToken(this.nextToken());
            }
            return e4;
          }, e3.prototype.parseSpreadElement = function() {
            var e4 = this.createNode();
            this.expect("...");
            var t3 = this.inheritCoverGrammar(this.parseAssignmentExpression);
            return this.finalize(e4, new i.SpreadElement(t3));
          }, e3.prototype.parseArrayInitializer = function() {
            var e4 = this.createNode(), t3 = [];
            for (this.expect("["); !this.match("]"); ) if (this.match(",")) this.nextToken(), t3.push(null);
            else if (this.match("...")) {
              var r2 = this.parseSpreadElement();
              this.match("]") || (this.context.isAssignmentTarget = false, this.context.isBindingElement = false, this.expect(",")), t3.push(r2);
            } else t3.push(this.inheritCoverGrammar(this.parseAssignmentExpression)), this.match("]") || this.expect(",");
            return this.expect("]"), this.finalize(e4, new i.ArrayExpression(t3));
          }, e3.prototype.parsePropertyMethod = function(e4) {
            this.context.isAssignmentTarget = false, this.context.isBindingElement = false;
            var t3 = this.context.strict, r2 = this.context.allowStrictDirective;
            this.context.allowStrictDirective = e4.simple;
            var n2 = this.isolateCoverGrammar(this.parseFunctionSourceElements);
            return this.context.strict && e4.firstRestricted && this.tolerateUnexpectedToken(e4.firstRestricted, e4.message), this.context.strict && e4.stricted && this.tolerateUnexpectedToken(e4.stricted, e4.message), this.context.strict = t3, this.context.allowStrictDirective = r2, n2;
          }, e3.prototype.parsePropertyMethodFunction = function() {
            var e4 = this.createNode(), t3 = this.context.allowYield;
            this.context.allowYield = true;
            var r2 = this.parseFormalParameters(), n2 = this.parsePropertyMethod(r2);
            return this.context.allowYield = t3, this.finalize(e4, new i.FunctionExpression(null, r2.params, n2, false));
          }, e3.prototype.parsePropertyMethodAsyncFunction = function() {
            var e4 = this.createNode(), t3 = this.context.allowYield, r2 = this.context.await;
            this.context.allowYield = false, this.context.await = true;
            var n2 = this.parseFormalParameters(), o2 = this.parsePropertyMethod(n2);
            return this.context.allowYield = t3, this.context.await = r2, this.finalize(e4, new i.AsyncFunctionExpression(null, n2.params, o2));
          }, e3.prototype.parseObjectPropertyKey = function() {
            var e4, t3 = this.createNode(), r2 = this.nextToken();
            switch (r2.type) {
              case 8:
              case 6:
                this.context.strict && r2.octal && this.tolerateUnexpectedToken(r2, s.Messages.StrictOctalLiteral);
                var n2 = this.getTokenRaw(r2);
                e4 = this.finalize(t3, new i.Literal(r2.value, n2));
                break;
              case 3:
              case 1:
              case 5:
              case 4:
                e4 = this.finalize(t3, new i.Identifier(r2.value));
                break;
              case 7:
                "[" === r2.value ? (e4 = this.isolateCoverGrammar(this.parseAssignmentExpression), this.expect("]")) : e4 = this.throwUnexpectedToken(r2);
                break;
              default:
                e4 = this.throwUnexpectedToken(r2);
            }
            return e4;
          }, e3.prototype.isPropertyKey = function(e4, t3) {
            return e4.type === l.Syntax.Identifier && e4.name === t3 || e4.type === l.Syntax.Literal && e4.value === t3;
          }, e3.prototype.parseObjectProperty = function(e4) {
            var t3, r2 = this.createNode(), n2 = this.lookahead, o2 = null, a2 = null, l2 = false, c2 = false, u2 = false, d2 = false;
            if (3 === n2.type) {
              var p = n2.value;
              this.nextToken(), l2 = this.match("["), o2 = (d2 = !(this.hasLineTerminator || "async" !== p || this.match(":") || this.match("(") || this.match("*") || this.match(","))) ? this.parseObjectPropertyKey() : this.finalize(r2, new i.Identifier(p));
            } else this.match("*") ? this.nextToken() : (l2 = this.match("["), o2 = this.parseObjectPropertyKey());
            var h = this.qualifiedPropertyName(this.lookahead);
            if (3 === n2.type && !d2 && "get" === n2.value && h) t3 = "get", l2 = this.match("["), o2 = this.parseObjectPropertyKey(), this.context.allowYield = false, a2 = this.parseGetterMethod();
            else if (3 === n2.type && !d2 && "set" === n2.value && h) t3 = "set", l2 = this.match("["), o2 = this.parseObjectPropertyKey(), a2 = this.parseSetterMethod();
            else if (7 === n2.type && "*" === n2.value && h) t3 = "init", l2 = this.match("["), o2 = this.parseObjectPropertyKey(), a2 = this.parseGeneratorMethod(), c2 = true;
            else if (o2 || this.throwUnexpectedToken(this.lookahead), t3 = "init", this.match(":") && !d2) !l2 && this.isPropertyKey(o2, "__proto__") && (e4.value && this.tolerateError(s.Messages.DuplicateProtoProperty), e4.value = true), this.nextToken(), a2 = this.inheritCoverGrammar(this.parseAssignmentExpression);
            else if (this.match("(")) a2 = d2 ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction(), c2 = true;
            else if (3 === n2.type) if (p = this.finalize(r2, new i.Identifier(n2.value)), this.match("=")) {
              this.context.firstCoverInitializedNameError = this.lookahead, this.nextToken(), u2 = true;
              var m = this.isolateCoverGrammar(this.parseAssignmentExpression);
              a2 = this.finalize(r2, new i.AssignmentPattern(p, m));
            } else u2 = true, a2 = p;
            else this.throwUnexpectedToken(this.nextToken());
            return this.finalize(r2, new i.Property(t3, o2, l2, a2, c2, u2));
          }, e3.prototype.parseObjectInitializer = function() {
            var e4 = this.createNode();
            this.expect("{");
            for (var t3 = [], r2 = { value: false }; !this.match("}"); ) t3.push(this.parseObjectProperty(r2)), this.match("}") || this.expectCommaSeparator();
            return this.expect("}"), this.finalize(e4, new i.ObjectExpression(t3));
          }, e3.prototype.parseTemplateHead = function() {
            n.assert(this.lookahead.head, "Template literal must start with a template head");
            var e4 = this.createNode(), t3 = this.nextToken(), r2 = t3.value, o2 = t3.cooked;
            return this.finalize(e4, new i.TemplateElement({ raw: r2, cooked: o2 }, t3.tail));
          }, e3.prototype.parseTemplateElement = function() {
            10 !== this.lookahead.type && this.throwUnexpectedToken();
            var e4 = this.createNode(), t3 = this.nextToken(), r2 = t3.value, n2 = t3.cooked;
            return this.finalize(e4, new i.TemplateElement({ raw: r2, cooked: n2 }, t3.tail));
          }, e3.prototype.parseTemplateLiteral = function() {
            var e4 = this.createNode(), t3 = [], r2 = [], n2 = this.parseTemplateHead();
            for (r2.push(n2); !n2.tail; ) t3.push(this.parseExpression()), n2 = this.parseTemplateElement(), r2.push(n2);
            return this.finalize(e4, new i.TemplateLiteral(r2, t3));
          }, e3.prototype.reinterpretExpressionAsPattern = function(e4) {
            switch (e4.type) {
              case l.Syntax.Identifier:
              case l.Syntax.MemberExpression:
              case l.Syntax.RestElement:
              case l.Syntax.AssignmentPattern:
                break;
              case l.Syntax.SpreadElement:
                e4.type = l.Syntax.RestElement, this.reinterpretExpressionAsPattern(e4.argument);
                break;
              case l.Syntax.ArrayExpression:
                e4.type = l.Syntax.ArrayPattern;
                for (var t3 = 0; t3 < e4.elements.length; t3++) null !== e4.elements[t3] && this.reinterpretExpressionAsPattern(e4.elements[t3]);
                break;
              case l.Syntax.ObjectExpression:
                for (e4.type = l.Syntax.ObjectPattern, t3 = 0; t3 < e4.properties.length; t3++) this.reinterpretExpressionAsPattern(e4.properties[t3].value);
                break;
              case l.Syntax.AssignmentExpression:
                e4.type = l.Syntax.AssignmentPattern, delete e4.operator, this.reinterpretExpressionAsPattern(e4.left);
            }
          }, e3.prototype.parseGroupExpression = function() {
            var e4;
            if (this.expect("("), this.match(")")) this.nextToken(), this.match("=>") || this.expect("=>"), e4 = { type: u, params: [], async: false };
            else {
              var t3 = this.lookahead, r2 = [];
              if (this.match("...")) e4 = this.parseRestElement(r2), this.expect(")"), this.match("=>") || this.expect("=>"), e4 = { type: u, params: [e4], async: false };
              else {
                var n2 = false;
                if (this.context.isBindingElement = true, e4 = this.inheritCoverGrammar(this.parseAssignmentExpression), this.match(",")) {
                  var o2 = [];
                  for (this.context.isAssignmentTarget = false, o2.push(e4); 2 !== this.lookahead.type && this.match(","); ) {
                    if (this.nextToken(), this.match(")")) {
                      this.nextToken();
                      for (var s2 = 0; s2 < o2.length; s2++) this.reinterpretExpressionAsPattern(o2[s2]);
                      n2 = true, e4 = { type: u, params: o2, async: false };
                    } else if (this.match("...")) {
                      for (this.context.isBindingElement || this.throwUnexpectedToken(this.lookahead), o2.push(this.parseRestElement(r2)), this.expect(")"), this.match("=>") || this.expect("=>"), this.context.isBindingElement = false, s2 = 0; s2 < o2.length; s2++) this.reinterpretExpressionAsPattern(o2[s2]);
                      n2 = true, e4 = { type: u, params: o2, async: false };
                    } else o2.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
                    if (n2) break;
                  }
                  n2 || (e4 = this.finalize(this.startNode(t3), new i.SequenceExpression(o2)));
                }
                if (!n2) {
                  if (this.expect(")"), this.match("=>") && (e4.type === l.Syntax.Identifier && "yield" === e4.name && (n2 = true, e4 = { type: u, params: [e4], async: false }), !n2)) {
                    if (this.context.isBindingElement || this.throwUnexpectedToken(this.lookahead), e4.type === l.Syntax.SequenceExpression) for (s2 = 0; s2 < e4.expressions.length; s2++) this.reinterpretExpressionAsPattern(e4.expressions[s2]);
                    else this.reinterpretExpressionAsPattern(e4);
                    var a2 = e4.type === l.Syntax.SequenceExpression ? e4.expressions : [e4];
                    e4 = { type: u, params: a2, async: false };
                  }
                  this.context.isBindingElement = false;
                }
              }
            }
            return e4;
          }, e3.prototype.parseArguments = function() {
            this.expect("(");
            var e4 = [];
            if (!this.match(")")) for (; ; ) {
              var t3 = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAssignmentExpression);
              if (e4.push(t3), this.match(")")) break;
              if (this.expectCommaSeparator(), this.match(")")) break;
            }
            return this.expect(")"), e4;
          }, e3.prototype.isIdentifierName = function(e4) {
            return 3 === e4.type || 4 === e4.type || 1 === e4.type || 5 === e4.type;
          }, e3.prototype.parseIdentifierName = function() {
            var e4 = this.createNode(), t3 = this.nextToken();
            return this.isIdentifierName(t3) || this.throwUnexpectedToken(t3), this.finalize(e4, new i.Identifier(t3.value));
          }, e3.prototype.parseNewExpression = function() {
            var e4, t3 = this.createNode(), r2 = this.parseIdentifierName();
            if (n.assert("new" === r2.name, "New expression must start with `new`"), this.match(".")) if (this.nextToken(), 3 === this.lookahead.type && this.context.inFunctionBody && "target" === this.lookahead.value) {
              var o2 = this.parseIdentifierName();
              e4 = new i.MetaProperty(r2, o2);
            } else this.throwUnexpectedToken(this.lookahead);
            else {
              var s2 = this.isolateCoverGrammar(this.parseLeftHandSideExpression), a2 = this.match("(") ? this.parseArguments() : [];
              e4 = new i.NewExpression(s2, a2), this.context.isAssignmentTarget = false, this.context.isBindingElement = false;
            }
            return this.finalize(t3, e4);
          }, e3.prototype.parseAsyncArgument = function() {
            var e4 = this.parseAssignmentExpression();
            return this.context.firstCoverInitializedNameError = null, e4;
          }, e3.prototype.parseAsyncArguments = function() {
            this.expect("(");
            var e4 = [];
            if (!this.match(")")) for (; ; ) {
              var t3 = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAsyncArgument);
              if (e4.push(t3), this.match(")")) break;
              if (this.expectCommaSeparator(), this.match(")")) break;
            }
            return this.expect(")"), e4;
          }, e3.prototype.parseLeftHandSideExpressionAllowCall = function() {
            var e4, t3 = this.lookahead, r2 = this.matchContextualKeyword("async"), n2 = this.context.allowIn;
            for (this.context.allowIn = true, this.matchKeyword("super") && this.context.inFunctionBody ? (e4 = this.createNode(), this.nextToken(), e4 = this.finalize(e4, new i.Super()), this.match("(") || this.match(".") || this.match("[") || this.throwUnexpectedToken(this.lookahead)) : e4 = this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression); ; ) if (this.match(".")) {
              this.context.isBindingElement = false, this.context.isAssignmentTarget = true, this.expect(".");
              var o2 = this.parseIdentifierName();
              e4 = this.finalize(this.startNode(t3), new i.StaticMemberExpression(e4, o2));
            } else if (this.match("(")) {
              var s2 = r2 && t3.lineNumber === this.lookahead.lineNumber;
              this.context.isBindingElement = false, this.context.isAssignmentTarget = false;
              var a2 = s2 ? this.parseAsyncArguments() : this.parseArguments();
              if (e4 = this.finalize(this.startNode(t3), new i.CallExpression(e4, a2)), s2 && this.match("=>")) {
                for (var l2 = 0; l2 < a2.length; ++l2) this.reinterpretExpressionAsPattern(a2[l2]);
                e4 = { type: u, params: a2, async: true };
              }
            } else if (this.match("[")) this.context.isBindingElement = false, this.context.isAssignmentTarget = true, this.expect("["), o2 = this.isolateCoverGrammar(this.parseExpression), this.expect("]"), e4 = this.finalize(this.startNode(t3), new i.ComputedMemberExpression(e4, o2));
            else {
              if (10 !== this.lookahead.type || !this.lookahead.head) break;
              var c2 = this.parseTemplateLiteral();
              e4 = this.finalize(this.startNode(t3), new i.TaggedTemplateExpression(e4, c2));
            }
            return this.context.allowIn = n2, e4;
          }, e3.prototype.parseSuper = function() {
            var e4 = this.createNode();
            return this.expectKeyword("super"), this.match("[") || this.match(".") || this.throwUnexpectedToken(this.lookahead), this.finalize(e4, new i.Super());
          }, e3.prototype.parseLeftHandSideExpression = function() {
            n.assert(this.context.allowIn, "callee of new expression always allow in keyword.");
            for (var e4 = this.startNode(this.lookahead), t3 = this.matchKeyword("super") && this.context.inFunctionBody ? this.parseSuper() : this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression); ; ) if (this.match("[")) {
              this.context.isBindingElement = false, this.context.isAssignmentTarget = true, this.expect("[");
              var r2 = this.isolateCoverGrammar(this.parseExpression);
              this.expect("]"), t3 = this.finalize(e4, new i.ComputedMemberExpression(t3, r2));
            } else if (this.match(".")) this.context.isBindingElement = false, this.context.isAssignmentTarget = true, this.expect("."), r2 = this.parseIdentifierName(), t3 = this.finalize(e4, new i.StaticMemberExpression(t3, r2));
            else {
              if (10 !== this.lookahead.type || !this.lookahead.head) break;
              var o2 = this.parseTemplateLiteral();
              t3 = this.finalize(e4, new i.TaggedTemplateExpression(t3, o2));
            }
            return t3;
          }, e3.prototype.parseUpdateExpression = function() {
            var e4, t3 = this.lookahead;
            if (this.match("++") || this.match("--")) {
              var r2 = this.startNode(t3), n2 = this.nextToken();
              e4 = this.inheritCoverGrammar(this.parseUnaryExpression), this.context.strict && e4.type === l.Syntax.Identifier && this.scanner.isRestrictedWord(e4.name) && this.tolerateError(s.Messages.StrictLHSPrefix), this.context.isAssignmentTarget || this.tolerateError(s.Messages.InvalidLHSInAssignment);
              var o2 = true;
              e4 = this.finalize(r2, new i.UpdateExpression(n2.value, e4, o2)), this.context.isAssignmentTarget = false, this.context.isBindingElement = false;
            } else if (e4 = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall), !this.hasLineTerminator && 7 === this.lookahead.type && (this.match("++") || this.match("--"))) {
              this.context.strict && e4.type === l.Syntax.Identifier && this.scanner.isRestrictedWord(e4.name) && this.tolerateError(s.Messages.StrictLHSPostfix), this.context.isAssignmentTarget || this.tolerateError(s.Messages.InvalidLHSInAssignment), this.context.isAssignmentTarget = false, this.context.isBindingElement = false;
              var a2 = this.nextToken().value;
              o2 = false, e4 = this.finalize(this.startNode(t3), new i.UpdateExpression(a2, e4, o2));
            }
            return e4;
          }, e3.prototype.parseAwaitExpression = function() {
            var e4 = this.createNode();
            this.nextToken();
            var t3 = this.parseUnaryExpression();
            return this.finalize(e4, new i.AwaitExpression(t3));
          }, e3.prototype.parseUnaryExpression = function() {
            var e4;
            if (this.match("+") || this.match("-") || this.match("~") || this.match("!") || this.matchKeyword("delete") || this.matchKeyword("void") || this.matchKeyword("typeof")) {
              var t3 = this.startNode(this.lookahead), r2 = this.nextToken();
              e4 = this.inheritCoverGrammar(this.parseUnaryExpression), e4 = this.finalize(t3, new i.UnaryExpression(r2.value, e4)), this.context.strict && "delete" === e4.operator && e4.argument.type === l.Syntax.Identifier && this.tolerateError(s.Messages.StrictDelete), this.context.isAssignmentTarget = false, this.context.isBindingElement = false;
            } else e4 = this.context.await && this.matchContextualKeyword("await") ? this.parseAwaitExpression() : this.parseUpdateExpression();
            return e4;
          }, e3.prototype.parseExponentiationExpression = function() {
            var e4 = this.lookahead, t3 = this.inheritCoverGrammar(this.parseUnaryExpression);
            if (t3.type !== l.Syntax.UnaryExpression && this.match("**")) {
              this.nextToken(), this.context.isAssignmentTarget = false, this.context.isBindingElement = false;
              var r2 = t3, n2 = this.isolateCoverGrammar(this.parseExponentiationExpression);
              t3 = this.finalize(this.startNode(e4), new i.BinaryExpression("**", r2, n2));
            }
            return t3;
          }, e3.prototype.binaryPrecedence = function(e4) {
            var t3 = e4.value;
            return 7 === e4.type ? this.operatorPrecedence[t3] || 0 : 4 === e4.type && ("instanceof" === t3 || this.context.allowIn && "in" === t3) ? 7 : 0;
          }, e3.prototype.parseBinaryExpression = function() {
            var e4 = this.lookahead, t3 = this.inheritCoverGrammar(this.parseExponentiationExpression), r2 = this.lookahead, n2 = this.binaryPrecedence(r2);
            if (n2 > 0) {
              this.nextToken(), this.context.isAssignmentTarget = false, this.context.isBindingElement = false;
              for (var o2 = [e4, this.lookahead], s2 = t3, a2 = this.isolateCoverGrammar(this.parseExponentiationExpression), l2 = [s2, r2.value, a2], c2 = [n2]; !((n2 = this.binaryPrecedence(this.lookahead)) <= 0); ) {
                for (; l2.length > 2 && n2 <= c2[c2.length - 1]; ) {
                  a2 = l2.pop();
                  var u2 = l2.pop();
                  c2.pop(), s2 = l2.pop(), o2.pop();
                  var d2 = this.startNode(o2[o2.length - 1]);
                  l2.push(this.finalize(d2, new i.BinaryExpression(u2, s2, a2)));
                }
                l2.push(this.nextToken().value), c2.push(n2), o2.push(this.lookahead), l2.push(this.isolateCoverGrammar(this.parseExponentiationExpression));
              }
              var p = l2.length - 1;
              t3 = l2[p];
              for (var h = o2.pop(); p > 1; ) {
                var m = o2.pop(), f = h && h.lineStart;
                d2 = this.startNode(m, f), u2 = l2[p - 1], t3 = this.finalize(d2, new i.BinaryExpression(u2, l2[p - 2], t3)), p -= 2, h = m;
              }
            }
            return t3;
          }, e3.prototype.parseConditionalExpression = function() {
            var e4 = this.lookahead, t3 = this.inheritCoverGrammar(this.parseBinaryExpression);
            if (this.match("?")) {
              this.nextToken();
              var r2 = this.context.allowIn;
              this.context.allowIn = true;
              var n2 = this.isolateCoverGrammar(this.parseAssignmentExpression);
              this.context.allowIn = r2, this.expect(":");
              var o2 = this.isolateCoverGrammar(this.parseAssignmentExpression);
              t3 = this.finalize(this.startNode(e4), new i.ConditionalExpression(t3, n2, o2)), this.context.isAssignmentTarget = false, this.context.isBindingElement = false;
            }
            return t3;
          }, e3.prototype.checkPatternParam = function(e4, t3) {
            switch (t3.type) {
              case l.Syntax.Identifier:
                this.validateParam(e4, t3, t3.name);
                break;
              case l.Syntax.RestElement:
                this.checkPatternParam(e4, t3.argument);
                break;
              case l.Syntax.AssignmentPattern:
                this.checkPatternParam(e4, t3.left);
                break;
              case l.Syntax.ArrayPattern:
                for (var r2 = 0; r2 < t3.elements.length; r2++) null !== t3.elements[r2] && this.checkPatternParam(e4, t3.elements[r2]);
                break;
              case l.Syntax.ObjectPattern:
                for (r2 = 0; r2 < t3.properties.length; r2++) this.checkPatternParam(e4, t3.properties[r2].value);
            }
            e4.simple = e4.simple && t3 instanceof i.Identifier;
          }, e3.prototype.reinterpretAsCoverFormalsList = function(e4) {
            var t3, r2 = [e4], n2 = false;
            switch (e4.type) {
              case l.Syntax.Identifier:
                break;
              case u:
                r2 = e4.params, n2 = e4.async;
                break;
              default:
                return null;
            }
            t3 = { simple: true, paramSet: {} };
            for (var o2 = 0; o2 < r2.length; ++o2) (i2 = r2[o2]).type === l.Syntax.AssignmentPattern ? i2.right.type === l.Syntax.YieldExpression && (i2.right.argument && this.throwUnexpectedToken(this.lookahead), i2.right.type = l.Syntax.Identifier, i2.right.name = "yield", delete i2.right.argument, delete i2.right.delegate) : n2 && i2.type === l.Syntax.Identifier && "await" === i2.name && this.throwUnexpectedToken(this.lookahead), this.checkPatternParam(t3, i2), r2[o2] = i2;
            if (this.context.strict || !this.context.allowYield) for (o2 = 0; o2 < r2.length; ++o2) {
              var i2;
              (i2 = r2[o2]).type === l.Syntax.YieldExpression && this.throwUnexpectedToken(this.lookahead);
            }
            if (t3.message === s.Messages.StrictParamDupe) {
              var a2 = this.context.strict ? t3.stricted : t3.firstRestricted;
              this.throwUnexpectedToken(a2, t3.message);
            }
            return { simple: t3.simple, params: r2, stricted: t3.stricted, firstRestricted: t3.firstRestricted, message: t3.message };
          }, e3.prototype.parseAssignmentExpression = function() {
            var e4;
            if (!this.context.allowYield && this.matchKeyword("yield")) e4 = this.parseYieldExpression();
            else {
              var t3 = this.lookahead, r2 = t3;
              if (e4 = this.parseConditionalExpression(), 3 === r2.type && r2.lineNumber === this.lookahead.lineNumber && "async" === r2.value && (3 === this.lookahead.type || this.matchKeyword("yield"))) {
                var n2 = this.parsePrimaryExpression();
                this.reinterpretExpressionAsPattern(n2), e4 = { type: u, params: [n2], async: true };
              }
              if (e4.type === u || this.match("=>")) {
                this.context.isAssignmentTarget = false, this.context.isBindingElement = false;
                var o2 = e4.async, a2 = this.reinterpretAsCoverFormalsList(e4);
                if (a2) {
                  this.hasLineTerminator && this.tolerateUnexpectedToken(this.lookahead), this.context.firstCoverInitializedNameError = null;
                  var c2 = this.context.strict, d2 = this.context.allowStrictDirective;
                  this.context.allowStrictDirective = a2.simple;
                  var p = this.context.allowYield, h = this.context.await;
                  this.context.allowYield = true, this.context.await = o2;
                  var m = this.startNode(t3);
                  this.expect("=>");
                  var f = void 0;
                  if (this.match("{")) {
                    var g = this.context.allowIn;
                    this.context.allowIn = true, f = this.parseFunctionSourceElements(), this.context.allowIn = g;
                  } else f = this.isolateCoverGrammar(this.parseAssignmentExpression);
                  var y = f.type !== l.Syntax.BlockStatement;
                  this.context.strict && a2.firstRestricted && this.throwUnexpectedToken(a2.firstRestricted, a2.message), this.context.strict && a2.stricted && this.tolerateUnexpectedToken(a2.stricted, a2.message), e4 = o2 ? this.finalize(m, new i.AsyncArrowFunctionExpression(a2.params, f, y)) : this.finalize(m, new i.ArrowFunctionExpression(a2.params, f, y)), this.context.strict = c2, this.context.allowStrictDirective = d2, this.context.allowYield = p, this.context.await = h;
                }
              } else if (this.matchAssign()) {
                if (this.context.isAssignmentTarget || this.tolerateError(s.Messages.InvalidLHSInAssignment), this.context.strict && e4.type === l.Syntax.Identifier) {
                  var v = e4;
                  this.scanner.isRestrictedWord(v.name) && this.tolerateUnexpectedToken(r2, s.Messages.StrictLHSAssignment), this.scanner.isStrictModeReservedWord(v.name) && this.tolerateUnexpectedToken(r2, s.Messages.StrictReservedWord);
                }
                this.match("=") ? this.reinterpretExpressionAsPattern(e4) : (this.context.isAssignmentTarget = false, this.context.isBindingElement = false);
                var w = (r2 = this.nextToken()).value, b = this.isolateCoverGrammar(this.parseAssignmentExpression);
                e4 = this.finalize(this.startNode(t3), new i.AssignmentExpression(w, e4, b)), this.context.firstCoverInitializedNameError = null;
              }
            }
            return e4;
          }, e3.prototype.parseExpression = function() {
            var e4 = this.lookahead, t3 = this.isolateCoverGrammar(this.parseAssignmentExpression);
            if (this.match(",")) {
              var r2 = [];
              for (r2.push(t3); 2 !== this.lookahead.type && this.match(","); ) this.nextToken(), r2.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
              t3 = this.finalize(this.startNode(e4), new i.SequenceExpression(r2));
            }
            return t3;
          }, e3.prototype.parseStatementListItem = function() {
            var e4;
            if (this.context.isAssignmentTarget = true, this.context.isBindingElement = true, 4 === this.lookahead.type) switch (this.lookahead.value) {
              case "export":
                this.context.isModule || this.tolerateUnexpectedToken(this.lookahead, s.Messages.IllegalExportDeclaration), e4 = this.parseExportDeclaration();
                break;
              case "import":
                this.context.isModule || this.tolerateUnexpectedToken(this.lookahead, s.Messages.IllegalImportDeclaration), e4 = this.parseImportDeclaration();
                break;
              case "const":
                e4 = this.parseLexicalDeclaration({ inFor: false });
                break;
              case "function":
                e4 = this.parseFunctionDeclaration();
                break;
              case "class":
                e4 = this.parseClassDeclaration();
                break;
              case "let":
                e4 = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({ inFor: false }) : this.parseStatement();
                break;
              default:
                e4 = this.parseStatement();
            }
            else e4 = this.parseStatement();
            return e4;
          }, e3.prototype.parseBlock = function() {
            var e4 = this.createNode();
            this.expect("{");
            for (var t3 = []; !this.match("}"); ) t3.push(this.parseStatementListItem());
            return this.expect("}"), this.finalize(e4, new i.BlockStatement(t3));
          }, e3.prototype.parseLexicalBinding = function(e4, t3) {
            var r2 = this.createNode(), n2 = this.parsePattern([], e4);
            this.context.strict && n2.type === l.Syntax.Identifier && this.scanner.isRestrictedWord(n2.name) && this.tolerateError(s.Messages.StrictVarName);
            var o2 = null;
            return "const" === e4 ? this.matchKeyword("in") || this.matchContextualKeyword("of") || (this.match("=") ? (this.nextToken(), o2 = this.isolateCoverGrammar(this.parseAssignmentExpression)) : this.throwError(s.Messages.DeclarationMissingInitializer, "const")) : (!t3.inFor && n2.type !== l.Syntax.Identifier || this.match("=")) && (this.expect("="), o2 = this.isolateCoverGrammar(this.parseAssignmentExpression)), this.finalize(r2, new i.VariableDeclarator(n2, o2));
          }, e3.prototype.parseBindingList = function(e4, t3) {
            for (var r2 = [this.parseLexicalBinding(e4, t3)]; this.match(","); ) this.nextToken(), r2.push(this.parseLexicalBinding(e4, t3));
            return r2;
          }, e3.prototype.isLexicalDeclaration = function() {
            var e4 = this.scanner.saveState();
            this.scanner.scanComments();
            var t3 = this.scanner.lex();
            return this.scanner.restoreState(e4), 3 === t3.type || 7 === t3.type && "[" === t3.value || 7 === t3.type && "{" === t3.value || 4 === t3.type && "let" === t3.value || 4 === t3.type && "yield" === t3.value;
          }, e3.prototype.parseLexicalDeclaration = function(e4) {
            var t3 = this.createNode(), r2 = this.nextToken().value;
            n.assert("let" === r2 || "const" === r2, "Lexical declaration must be either let or const");
            var o2 = this.parseBindingList(r2, e4);
            return this.consumeSemicolon(), this.finalize(t3, new i.VariableDeclaration(o2, r2));
          }, e3.prototype.parseBindingRestElement = function(e4, t3) {
            var r2 = this.createNode();
            this.expect("...");
            var n2 = this.parsePattern(e4, t3);
            return this.finalize(r2, new i.RestElement(n2));
          }, e3.prototype.parseArrayPattern = function(e4, t3) {
            var r2 = this.createNode();
            this.expect("[");
            for (var n2 = []; !this.match("]"); ) if (this.match(",")) this.nextToken(), n2.push(null);
            else {
              if (this.match("...")) {
                n2.push(this.parseBindingRestElement(e4, t3));
                break;
              }
              n2.push(this.parsePatternWithDefault(e4, t3)), this.match("]") || this.expect(",");
            }
            return this.expect("]"), this.finalize(r2, new i.ArrayPattern(n2));
          }, e3.prototype.parsePropertyPattern = function(e4, t3) {
            var r2, n2, o2 = this.createNode(), s2 = false, a2 = false;
            if (3 === this.lookahead.type) {
              var l2 = this.lookahead;
              r2 = this.parseVariableIdentifier();
              var c2 = this.finalize(o2, new i.Identifier(l2.value));
              if (this.match("=")) {
                e4.push(l2), a2 = true, this.nextToken();
                var u2 = this.parseAssignmentExpression();
                n2 = this.finalize(this.startNode(l2), new i.AssignmentPattern(c2, u2));
              } else this.match(":") ? (this.expect(":"), n2 = this.parsePatternWithDefault(e4, t3)) : (e4.push(l2), a2 = true, n2 = c2);
            } else s2 = this.match("["), r2 = this.parseObjectPropertyKey(), this.expect(":"), n2 = this.parsePatternWithDefault(e4, t3);
            return this.finalize(o2, new i.Property("init", r2, s2, n2, false, a2));
          }, e3.prototype.parseObjectPattern = function(e4, t3) {
            var r2 = this.createNode(), n2 = [];
            for (this.expect("{"); !this.match("}"); ) n2.push(this.parsePropertyPattern(e4, t3)), this.match("}") || this.expect(",");
            return this.expect("}"), this.finalize(r2, new i.ObjectPattern(n2));
          }, e3.prototype.parsePattern = function(e4, t3) {
            var r2;
            return this.match("[") ? r2 = this.parseArrayPattern(e4, t3) : this.match("{") ? r2 = this.parseObjectPattern(e4, t3) : (!this.matchKeyword("let") || "const" !== t3 && "let" !== t3 || this.tolerateUnexpectedToken(this.lookahead, s.Messages.LetInLexicalBinding), e4.push(this.lookahead), r2 = this.parseVariableIdentifier(t3)), r2;
          }, e3.prototype.parsePatternWithDefault = function(e4, t3) {
            var r2 = this.lookahead, n2 = this.parsePattern(e4, t3);
            if (this.match("=")) {
              this.nextToken();
              var o2 = this.context.allowYield;
              this.context.allowYield = true;
              var s2 = this.isolateCoverGrammar(this.parseAssignmentExpression);
              this.context.allowYield = o2, n2 = this.finalize(this.startNode(r2), new i.AssignmentPattern(n2, s2));
            }
            return n2;
          }, e3.prototype.parseVariableIdentifier = function(e4) {
            var t3 = this.createNode(), r2 = this.nextToken();
            return 4 === r2.type && "yield" === r2.value ? this.context.strict ? this.tolerateUnexpectedToken(r2, s.Messages.StrictReservedWord) : this.context.allowYield || this.throwUnexpectedToken(r2) : 3 !== r2.type ? this.context.strict && 4 === r2.type && this.scanner.isStrictModeReservedWord(r2.value) ? this.tolerateUnexpectedToken(r2, s.Messages.StrictReservedWord) : (this.context.strict || "let" !== r2.value || "var" !== e4) && this.throwUnexpectedToken(r2) : (this.context.isModule || this.context.await) && 3 === r2.type && "await" === r2.value && this.tolerateUnexpectedToken(r2), this.finalize(t3, new i.Identifier(r2.value));
          }, e3.prototype.parseVariableDeclaration = function(e4) {
            var t3 = this.createNode(), r2 = this.parsePattern([], "var");
            this.context.strict && r2.type === l.Syntax.Identifier && this.scanner.isRestrictedWord(r2.name) && this.tolerateError(s.Messages.StrictVarName);
            var n2 = null;
            return this.match("=") ? (this.nextToken(), n2 = this.isolateCoverGrammar(this.parseAssignmentExpression)) : r2.type === l.Syntax.Identifier || e4.inFor || this.expect("="), this.finalize(t3, new i.VariableDeclarator(r2, n2));
          }, e3.prototype.parseVariableDeclarationList = function(e4) {
            var t3 = { inFor: e4.inFor }, r2 = [];
            for (r2.push(this.parseVariableDeclaration(t3)); this.match(","); ) this.nextToken(), r2.push(this.parseVariableDeclaration(t3));
            return r2;
          }, e3.prototype.parseVariableStatement = function() {
            var e4 = this.createNode();
            this.expectKeyword("var");
            var t3 = this.parseVariableDeclarationList({ inFor: false });
            return this.consumeSemicolon(), this.finalize(e4, new i.VariableDeclaration(t3, "var"));
          }, e3.prototype.parseEmptyStatement = function() {
            var e4 = this.createNode();
            return this.expect(";"), this.finalize(e4, new i.EmptyStatement());
          }, e3.prototype.parseExpressionStatement = function() {
            var e4 = this.createNode(), t3 = this.parseExpression();
            return this.consumeSemicolon(), this.finalize(e4, new i.ExpressionStatement(t3));
          }, e3.prototype.parseIfClause = function() {
            return this.context.strict && this.matchKeyword("function") && this.tolerateError(s.Messages.StrictFunction), this.parseStatement();
          }, e3.prototype.parseIfStatement = function() {
            var e4, t3 = this.createNode(), r2 = null;
            this.expectKeyword("if"), this.expect("(");
            var n2 = this.parseExpression();
            return !this.match(")") && this.config.tolerant ? (this.tolerateUnexpectedToken(this.nextToken()), e4 = this.finalize(this.createNode(), new i.EmptyStatement())) : (this.expect(")"), e4 = this.parseIfClause(), this.matchKeyword("else") && (this.nextToken(), r2 = this.parseIfClause())), this.finalize(t3, new i.IfStatement(n2, e4, r2));
          }, e3.prototype.parseDoWhileStatement = function() {
            var e4 = this.createNode();
            this.expectKeyword("do");
            var t3 = this.context.inIteration;
            this.context.inIteration = true;
            var r2 = this.parseStatement();
            this.context.inIteration = t3, this.expectKeyword("while"), this.expect("(");
            var n2 = this.parseExpression();
            return !this.match(")") && this.config.tolerant ? this.tolerateUnexpectedToken(this.nextToken()) : (this.expect(")"), this.match(";") && this.nextToken()), this.finalize(e4, new i.DoWhileStatement(r2, n2));
          }, e3.prototype.parseWhileStatement = function() {
            var e4, t3 = this.createNode();
            this.expectKeyword("while"), this.expect("(");
            var r2 = this.parseExpression();
            if (!this.match(")") && this.config.tolerant) this.tolerateUnexpectedToken(this.nextToken()), e4 = this.finalize(this.createNode(), new i.EmptyStatement());
            else {
              this.expect(")");
              var n2 = this.context.inIteration;
              this.context.inIteration = true, e4 = this.parseStatement(), this.context.inIteration = n2;
            }
            return this.finalize(t3, new i.WhileStatement(r2, e4));
          }, e3.prototype.parseForStatement = function() {
            var e4, t3, r2, n2 = null, o2 = null, a2 = null, c2 = true, u2 = this.createNode();
            if (this.expectKeyword("for"), this.expect("("), this.match(";")) this.nextToken();
            else if (this.matchKeyword("var")) {
              n2 = this.createNode(), this.nextToken();
              var d2 = this.context.allowIn;
              this.context.allowIn = false;
              var p = this.parseVariableDeclarationList({ inFor: true });
              if (this.context.allowIn = d2, 1 === p.length && this.matchKeyword("in")) {
                var h = p[0];
                h.init && (h.id.type === l.Syntax.ArrayPattern || h.id.type === l.Syntax.ObjectPattern || this.context.strict) && this.tolerateError(s.Messages.ForInOfLoopInitializer, "for-in"), n2 = this.finalize(n2, new i.VariableDeclaration(p, "var")), this.nextToken(), e4 = n2, t3 = this.parseExpression(), n2 = null;
              } else 1 === p.length && null === p[0].init && this.matchContextualKeyword("of") ? (n2 = this.finalize(n2, new i.VariableDeclaration(p, "var")), this.nextToken(), e4 = n2, t3 = this.parseAssignmentExpression(), n2 = null, c2 = false) : (n2 = this.finalize(n2, new i.VariableDeclaration(p, "var")), this.expect(";"));
            } else if (this.matchKeyword("const") || this.matchKeyword("let")) {
              n2 = this.createNode();
              var m = this.nextToken().value;
              this.context.strict || "in" !== this.lookahead.value ? (d2 = this.context.allowIn, this.context.allowIn = false, p = this.parseBindingList(m, { inFor: true }), this.context.allowIn = d2, 1 === p.length && null === p[0].init && this.matchKeyword("in") ? (n2 = this.finalize(n2, new i.VariableDeclaration(p, m)), this.nextToken(), e4 = n2, t3 = this.parseExpression(), n2 = null) : 1 === p.length && null === p[0].init && this.matchContextualKeyword("of") ? (n2 = this.finalize(n2, new i.VariableDeclaration(p, m)), this.nextToken(), e4 = n2, t3 = this.parseAssignmentExpression(), n2 = null, c2 = false) : (this.consumeSemicolon(), n2 = this.finalize(n2, new i.VariableDeclaration(p, m)))) : (n2 = this.finalize(n2, new i.Identifier(m)), this.nextToken(), e4 = n2, t3 = this.parseExpression(), n2 = null);
            } else {
              var f = this.lookahead;
              if (d2 = this.context.allowIn, this.context.allowIn = false, n2 = this.inheritCoverGrammar(this.parseAssignmentExpression), this.context.allowIn = d2, this.matchKeyword("in")) this.context.isAssignmentTarget && n2.type !== l.Syntax.AssignmentExpression || this.tolerateError(s.Messages.InvalidLHSInForIn), this.nextToken(), this.reinterpretExpressionAsPattern(n2), e4 = n2, t3 = this.parseExpression(), n2 = null;
              else if (this.matchContextualKeyword("of")) this.context.isAssignmentTarget && n2.type !== l.Syntax.AssignmentExpression || this.tolerateError(s.Messages.InvalidLHSInForLoop), this.nextToken(), this.reinterpretExpressionAsPattern(n2), e4 = n2, t3 = this.parseAssignmentExpression(), n2 = null, c2 = false;
              else {
                if (this.match(",")) {
                  for (var g = [n2]; this.match(","); ) this.nextToken(), g.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                  n2 = this.finalize(this.startNode(f), new i.SequenceExpression(g));
                }
                this.expect(";");
              }
            }
            if (void 0 === e4 && (this.match(";") || (o2 = this.parseExpression()), this.expect(";"), this.match(")") || (a2 = this.parseExpression())), !this.match(")") && this.config.tolerant) this.tolerateUnexpectedToken(this.nextToken()), r2 = this.finalize(this.createNode(), new i.EmptyStatement());
            else {
              this.expect(")");
              var y = this.context.inIteration;
              this.context.inIteration = true, r2 = this.isolateCoverGrammar(this.parseStatement), this.context.inIteration = y;
            }
            return void 0 === e4 ? this.finalize(u2, new i.ForStatement(n2, o2, a2, r2)) : c2 ? this.finalize(u2, new i.ForInStatement(e4, t3, r2)) : this.finalize(u2, new i.ForOfStatement(e4, t3, r2));
          }, e3.prototype.parseContinueStatement = function() {
            var e4 = this.createNode();
            this.expectKeyword("continue");
            var t3 = null;
            if (3 === this.lookahead.type && !this.hasLineTerminator) {
              var r2 = this.parseVariableIdentifier();
              t3 = r2;
              var n2 = "$" + r2.name;
              Object.prototype.hasOwnProperty.call(this.context.labelSet, n2) || this.throwError(s.Messages.UnknownLabel, r2.name);
            }
            return this.consumeSemicolon(), null !== t3 || this.context.inIteration || this.throwError(s.Messages.IllegalContinue), this.finalize(e4, new i.ContinueStatement(t3));
          }, e3.prototype.parseBreakStatement = function() {
            var e4 = this.createNode();
            this.expectKeyword("break");
            var t3 = null;
            if (3 === this.lookahead.type && !this.hasLineTerminator) {
              var r2 = this.parseVariableIdentifier(), n2 = "$" + r2.name;
              Object.prototype.hasOwnProperty.call(this.context.labelSet, n2) || this.throwError(s.Messages.UnknownLabel, r2.name), t3 = r2;
            }
            return this.consumeSemicolon(), null !== t3 || this.context.inIteration || this.context.inSwitch || this.throwError(s.Messages.IllegalBreak), this.finalize(e4, new i.BreakStatement(t3));
          }, e3.prototype.parseReturnStatement = function() {
            this.context.inFunctionBody || this.tolerateError(s.Messages.IllegalReturn);
            var e4 = this.createNode();
            this.expectKeyword("return");
            var t3 = (this.match(";") || this.match("}") || this.hasLineTerminator || 2 === this.lookahead.type) && 8 !== this.lookahead.type && 10 !== this.lookahead.type ? null : this.parseExpression();
            return this.consumeSemicolon(), this.finalize(e4, new i.ReturnStatement(t3));
          }, e3.prototype.parseWithStatement = function() {
            this.context.strict && this.tolerateError(s.Messages.StrictModeWith);
            var e4, t3 = this.createNode();
            this.expectKeyword("with"), this.expect("(");
            var r2 = this.parseExpression();
            return !this.match(")") && this.config.tolerant ? (this.tolerateUnexpectedToken(this.nextToken()), e4 = this.finalize(this.createNode(), new i.EmptyStatement())) : (this.expect(")"), e4 = this.parseStatement()), this.finalize(t3, new i.WithStatement(r2, e4));
          }, e3.prototype.parseSwitchCase = function() {
            var e4, t3 = this.createNode();
            this.matchKeyword("default") ? (this.nextToken(), e4 = null) : (this.expectKeyword("case"), e4 = this.parseExpression()), this.expect(":");
            for (var r2 = []; !(this.match("}") || this.matchKeyword("default") || this.matchKeyword("case")); ) r2.push(this.parseStatementListItem());
            return this.finalize(t3, new i.SwitchCase(e4, r2));
          }, e3.prototype.parseSwitchStatement = function() {
            var e4 = this.createNode();
            this.expectKeyword("switch"), this.expect("(");
            var t3 = this.parseExpression();
            this.expect(")");
            var r2 = this.context.inSwitch;
            this.context.inSwitch = true;
            var n2 = [], o2 = false;
            for (this.expect("{"); !this.match("}"); ) {
              var a2 = this.parseSwitchCase();
              null === a2.test && (o2 && this.throwError(s.Messages.MultipleDefaultsInSwitch), o2 = true), n2.push(a2);
            }
            return this.expect("}"), this.context.inSwitch = r2, this.finalize(e4, new i.SwitchStatement(t3, n2));
          }, e3.prototype.parseLabelledStatement = function() {
            var e4, t3 = this.createNode(), r2 = this.parseExpression();
            if (r2.type === l.Syntax.Identifier && this.match(":")) {
              this.nextToken();
              var n2 = r2, o2 = "$" + n2.name;
              Object.prototype.hasOwnProperty.call(this.context.labelSet, o2) && this.throwError(s.Messages.Redeclaration, "Label", n2.name), this.context.labelSet[o2] = true;
              var a2 = void 0;
              if (this.matchKeyword("class")) this.tolerateUnexpectedToken(this.lookahead), a2 = this.parseClassDeclaration();
              else if (this.matchKeyword("function")) {
                var c2 = this.lookahead, u2 = this.parseFunctionDeclaration();
                this.context.strict ? this.tolerateUnexpectedToken(c2, s.Messages.StrictFunction) : u2.generator && this.tolerateUnexpectedToken(c2, s.Messages.GeneratorInLegacyContext), a2 = u2;
              } else a2 = this.parseStatement();
              delete this.context.labelSet[o2], e4 = new i.LabeledStatement(n2, a2);
            } else this.consumeSemicolon(), e4 = new i.ExpressionStatement(r2);
            return this.finalize(t3, e4);
          }, e3.prototype.parseThrowStatement = function() {
            var e4 = this.createNode();
            this.expectKeyword("throw"), this.hasLineTerminator && this.throwError(s.Messages.NewlineAfterThrow);
            var t3 = this.parseExpression();
            return this.consumeSemicolon(), this.finalize(e4, new i.ThrowStatement(t3));
          }, e3.prototype.parseCatchClause = function() {
            var e4 = this.createNode();
            this.expectKeyword("catch"), this.expect("("), this.match(")") && this.throwUnexpectedToken(this.lookahead);
            for (var t3 = [], r2 = this.parsePattern(t3), n2 = {}, o2 = 0; o2 < t3.length; o2++) {
              var a2 = "$" + t3[o2].value;
              Object.prototype.hasOwnProperty.call(n2, a2) && this.tolerateError(s.Messages.DuplicateBinding, t3[o2].value), n2[a2] = true;
            }
            this.context.strict && r2.type === l.Syntax.Identifier && this.scanner.isRestrictedWord(r2.name) && this.tolerateError(s.Messages.StrictCatchVariable), this.expect(")");
            var c2 = this.parseBlock();
            return this.finalize(e4, new i.CatchClause(r2, c2));
          }, e3.prototype.parseFinallyClause = function() {
            return this.expectKeyword("finally"), this.parseBlock();
          }, e3.prototype.parseTryStatement = function() {
            var e4 = this.createNode();
            this.expectKeyword("try");
            var t3 = this.parseBlock(), r2 = this.matchKeyword("catch") ? this.parseCatchClause() : null, n2 = this.matchKeyword("finally") ? this.parseFinallyClause() : null;
            return r2 || n2 || this.throwError(s.Messages.NoCatchOrFinally), this.finalize(e4, new i.TryStatement(t3, r2, n2));
          }, e3.prototype.parseDebuggerStatement = function() {
            var e4 = this.createNode();
            return this.expectKeyword("debugger"), this.consumeSemicolon(), this.finalize(e4, new i.DebuggerStatement());
          }, e3.prototype.parseStatement = function() {
            var e4;
            switch (this.lookahead.type) {
              case 1:
              case 5:
              case 6:
              case 8:
              case 10:
              case 9:
                e4 = this.parseExpressionStatement();
                break;
              case 7:
                var t3 = this.lookahead.value;
                e4 = "{" === t3 ? this.parseBlock() : "(" === t3 ? this.parseExpressionStatement() : ";" === t3 ? this.parseEmptyStatement() : this.parseExpressionStatement();
                break;
              case 3:
                e4 = this.matchAsyncFunction() ? this.parseFunctionDeclaration() : this.parseLabelledStatement();
                break;
              case 4:
                switch (this.lookahead.value) {
                  case "break":
                    e4 = this.parseBreakStatement();
                    break;
                  case "continue":
                    e4 = this.parseContinueStatement();
                    break;
                  case "debugger":
                    e4 = this.parseDebuggerStatement();
                    break;
                  case "do":
                    e4 = this.parseDoWhileStatement();
                    break;
                  case "for":
                    e4 = this.parseForStatement();
                    break;
                  case "function":
                    e4 = this.parseFunctionDeclaration();
                    break;
                  case "if":
                    e4 = this.parseIfStatement();
                    break;
                  case "return":
                    e4 = this.parseReturnStatement();
                    break;
                  case "switch":
                    e4 = this.parseSwitchStatement();
                    break;
                  case "throw":
                    e4 = this.parseThrowStatement();
                    break;
                  case "try":
                    e4 = this.parseTryStatement();
                    break;
                  case "var":
                    e4 = this.parseVariableStatement();
                    break;
                  case "while":
                    e4 = this.parseWhileStatement();
                    break;
                  case "with":
                    e4 = this.parseWithStatement();
                    break;
                  default:
                    e4 = this.parseExpressionStatement();
                }
                break;
              default:
                e4 = this.throwUnexpectedToken(this.lookahead);
            }
            return e4;
          }, e3.prototype.parseFunctionSourceElements = function() {
            var e4 = this.createNode();
            this.expect("{");
            var t3 = this.parseDirectivePrologues(), r2 = this.context.labelSet, n2 = this.context.inIteration, o2 = this.context.inSwitch, s2 = this.context.inFunctionBody;
            for (this.context.labelSet = {}, this.context.inIteration = false, this.context.inSwitch = false, this.context.inFunctionBody = true; 2 !== this.lookahead.type && !this.match("}"); ) t3.push(this.parseStatementListItem());
            return this.expect("}"), this.context.labelSet = r2, this.context.inIteration = n2, this.context.inSwitch = o2, this.context.inFunctionBody = s2, this.finalize(e4, new i.BlockStatement(t3));
          }, e3.prototype.validateParam = function(e4, t3, r2) {
            var n2 = "$" + r2;
            this.context.strict ? (this.scanner.isRestrictedWord(r2) && (e4.stricted = t3, e4.message = s.Messages.StrictParamName), Object.prototype.hasOwnProperty.call(e4.paramSet, n2) && (e4.stricted = t3, e4.message = s.Messages.StrictParamDupe)) : e4.firstRestricted || (this.scanner.isRestrictedWord(r2) ? (e4.firstRestricted = t3, e4.message = s.Messages.StrictParamName) : this.scanner.isStrictModeReservedWord(r2) ? (e4.firstRestricted = t3, e4.message = s.Messages.StrictReservedWord) : Object.prototype.hasOwnProperty.call(e4.paramSet, n2) && (e4.stricted = t3, e4.message = s.Messages.StrictParamDupe)), "function" == typeof Object.defineProperty ? Object.defineProperty(e4.paramSet, n2, { value: true, enumerable: true, writable: true, configurable: true }) : e4.paramSet[n2] = true;
          }, e3.prototype.parseRestElement = function(e4) {
            var t3 = this.createNode();
            this.expect("...");
            var r2 = this.parsePattern(e4);
            return this.match("=") && this.throwError(s.Messages.DefaultRestParameter), this.match(")") || this.throwError(s.Messages.ParameterAfterRestParameter), this.finalize(t3, new i.RestElement(r2));
          }, e3.prototype.parseFormalParameter = function(e4) {
            for (var t3 = [], r2 = this.match("...") ? this.parseRestElement(t3) : this.parsePatternWithDefault(t3), n2 = 0; n2 < t3.length; n2++) this.validateParam(e4, t3[n2], t3[n2].value);
            e4.simple = e4.simple && r2 instanceof i.Identifier, e4.params.push(r2);
          }, e3.prototype.parseFormalParameters = function(e4) {
            var t3;
            if (t3 = { simple: true, params: [], firstRestricted: e4 }, this.expect("("), !this.match(")")) for (t3.paramSet = {}; 2 !== this.lookahead.type && (this.parseFormalParameter(t3), !this.match(")")) && (this.expect(","), !this.match(")")); ) ;
            return this.expect(")"), { simple: t3.simple, params: t3.params, stricted: t3.stricted, firstRestricted: t3.firstRestricted, message: t3.message };
          }, e3.prototype.matchAsyncFunction = function() {
            var e4 = this.matchContextualKeyword("async");
            if (e4) {
              var t3 = this.scanner.saveState();
              this.scanner.scanComments();
              var r2 = this.scanner.lex();
              this.scanner.restoreState(t3), e4 = t3.lineNumber === r2.lineNumber && 4 === r2.type && "function" === r2.value;
            }
            return e4;
          }, e3.prototype.parseFunctionDeclaration = function(e4) {
            var t3 = this.createNode(), r2 = this.matchContextualKeyword("async");
            r2 && this.nextToken(), this.expectKeyword("function");
            var n2, o2 = !r2 && this.match("*");
            o2 && this.nextToken();
            var a2 = null, l2 = null;
            if (!e4 || !this.match("(")) {
              var c2 = this.lookahead;
              a2 = this.parseVariableIdentifier(), this.context.strict ? this.scanner.isRestrictedWord(c2.value) && this.tolerateUnexpectedToken(c2, s.Messages.StrictFunctionName) : this.scanner.isRestrictedWord(c2.value) ? (l2 = c2, n2 = s.Messages.StrictFunctionName) : this.scanner.isStrictModeReservedWord(c2.value) && (l2 = c2, n2 = s.Messages.StrictReservedWord);
            }
            var u2 = this.context.await, d2 = this.context.allowYield;
            this.context.await = r2, this.context.allowYield = !o2;
            var p = this.parseFormalParameters(l2), h = p.params, m = p.stricted;
            l2 = p.firstRestricted, p.message && (n2 = p.message);
            var f = this.context.strict, g = this.context.allowStrictDirective;
            this.context.allowStrictDirective = p.simple;
            var y = this.parseFunctionSourceElements();
            return this.context.strict && l2 && this.throwUnexpectedToken(l2, n2), this.context.strict && m && this.tolerateUnexpectedToken(m, n2), this.context.strict = f, this.context.allowStrictDirective = g, this.context.await = u2, this.context.allowYield = d2, r2 ? this.finalize(t3, new i.AsyncFunctionDeclaration(a2, h, y)) : this.finalize(t3, new i.FunctionDeclaration(a2, h, y, o2));
          }, e3.prototype.parseFunctionExpression = function() {
            var e4 = this.createNode(), t3 = this.matchContextualKeyword("async");
            t3 && this.nextToken(), this.expectKeyword("function");
            var r2, n2 = !t3 && this.match("*");
            n2 && this.nextToken();
            var o2, a2 = null, l2 = this.context.await, c2 = this.context.allowYield;
            if (this.context.await = t3, this.context.allowYield = !n2, !this.match("(")) {
              var u2 = this.lookahead;
              a2 = this.context.strict || n2 || !this.matchKeyword("yield") ? this.parseVariableIdentifier() : this.parseIdentifierName(), this.context.strict ? this.scanner.isRestrictedWord(u2.value) && this.tolerateUnexpectedToken(u2, s.Messages.StrictFunctionName) : this.scanner.isRestrictedWord(u2.value) ? (o2 = u2, r2 = s.Messages.StrictFunctionName) : this.scanner.isStrictModeReservedWord(u2.value) && (o2 = u2, r2 = s.Messages.StrictReservedWord);
            }
            var d2 = this.parseFormalParameters(o2), p = d2.params, h = d2.stricted;
            o2 = d2.firstRestricted, d2.message && (r2 = d2.message);
            var m = this.context.strict, f = this.context.allowStrictDirective;
            this.context.allowStrictDirective = d2.simple;
            var g = this.parseFunctionSourceElements();
            return this.context.strict && o2 && this.throwUnexpectedToken(o2, r2), this.context.strict && h && this.tolerateUnexpectedToken(h, r2), this.context.strict = m, this.context.allowStrictDirective = f, this.context.await = l2, this.context.allowYield = c2, t3 ? this.finalize(e4, new i.AsyncFunctionExpression(a2, p, g)) : this.finalize(e4, new i.FunctionExpression(a2, p, g, n2));
          }, e3.prototype.parseDirective = function() {
            var e4 = this.lookahead, t3 = this.createNode(), r2 = this.parseExpression(), n2 = r2.type === l.Syntax.Literal ? this.getTokenRaw(e4).slice(1, -1) : null;
            return this.consumeSemicolon(), this.finalize(t3, n2 ? new i.Directive(r2, n2) : new i.ExpressionStatement(r2));
          }, e3.prototype.parseDirectivePrologues = function() {
            for (var e4 = null, t3 = []; ; ) {
              var r2 = this.lookahead;
              if (8 !== r2.type) break;
              var n2 = this.parseDirective();
              t3.push(n2);
              var o2 = n2.directive;
              if ("string" != typeof o2) break;
              "use strict" === o2 ? (this.context.strict = true, e4 && this.tolerateUnexpectedToken(e4, s.Messages.StrictOctalLiteral), this.context.allowStrictDirective || this.tolerateUnexpectedToken(r2, s.Messages.IllegalLanguageModeDirective)) : !e4 && r2.octal && (e4 = r2);
            }
            return t3;
          }, e3.prototype.qualifiedPropertyName = function(e4) {
            switch (e4.type) {
              case 3:
              case 8:
              case 1:
              case 5:
              case 6:
              case 4:
                return true;
              case 7:
                return "[" === e4.value;
            }
            return false;
          }, e3.prototype.parseGetterMethod = function() {
            var e4 = this.createNode(), t3 = false, r2 = this.context.allowYield;
            this.context.allowYield = true;
            var n2 = this.parseFormalParameters();
            n2.params.length > 0 && this.tolerateError(s.Messages.BadGetterArity);
            var o2 = this.parsePropertyMethod(n2);
            return this.context.allowYield = r2, this.finalize(e4, new i.FunctionExpression(null, n2.params, o2, t3));
          }, e3.prototype.parseSetterMethod = function() {
            var e4 = this.createNode(), t3 = false, r2 = this.context.allowYield;
            this.context.allowYield = true;
            var n2 = this.parseFormalParameters();
            1 !== n2.params.length ? this.tolerateError(s.Messages.BadSetterArity) : n2.params[0] instanceof i.RestElement && this.tolerateError(s.Messages.BadSetterRestParameter);
            var o2 = this.parsePropertyMethod(n2);
            return this.context.allowYield = r2, this.finalize(e4, new i.FunctionExpression(null, n2.params, o2, t3));
          }, e3.prototype.parseGeneratorMethod = function() {
            var e4 = this.createNode(), t3 = this.context.allowYield;
            this.context.allowYield = true;
            var r2 = this.parseFormalParameters();
            this.context.allowYield = false;
            var n2 = this.parsePropertyMethod(r2);
            return this.context.allowYield = t3, this.finalize(e4, new i.FunctionExpression(null, r2.params, n2, true));
          }, e3.prototype.isStartOfExpression = function() {
            var e4 = true, t3 = this.lookahead.value;
            switch (this.lookahead.type) {
              case 7:
                e4 = "[" === t3 || "(" === t3 || "{" === t3 || "+" === t3 || "-" === t3 || "!" === t3 || "~" === t3 || "++" === t3 || "--" === t3 || "/" === t3 || "/=" === t3;
                break;
              case 4:
                e4 = "class" === t3 || "delete" === t3 || "function" === t3 || "let" === t3 || "new" === t3 || "super" === t3 || "this" === t3 || "typeof" === t3 || "void" === t3 || "yield" === t3;
            }
            return e4;
          }, e3.prototype.parseYieldExpression = function() {
            var e4 = this.createNode();
            this.expectKeyword("yield");
            var t3 = null, r2 = false;
            if (!this.hasLineTerminator) {
              var n2 = this.context.allowYield;
              this.context.allowYield = false, (r2 = this.match("*")) ? (this.nextToken(), t3 = this.parseAssignmentExpression()) : this.isStartOfExpression() && (t3 = this.parseAssignmentExpression()), this.context.allowYield = n2;
            }
            return this.finalize(e4, new i.YieldExpression(t3, r2));
          }, e3.prototype.parseClassElement = function(e4) {
            var t3 = this.lookahead, r2 = this.createNode(), n2 = "", o2 = null, a2 = null, l2 = false, c2 = false, u2 = false, d2 = false;
            if (this.match("*")) this.nextToken();
            else if (l2 = this.match("["), "static" === (o2 = this.parseObjectPropertyKey()).name && (this.qualifiedPropertyName(this.lookahead) || this.match("*")) && (t3 = this.lookahead, u2 = true, l2 = this.match("["), this.match("*") ? this.nextToken() : o2 = this.parseObjectPropertyKey()), 3 === t3.type && !this.hasLineTerminator && "async" === t3.value) {
              var p = this.lookahead.value;
              ":" !== p && "(" !== p && "*" !== p && (d2 = true, t3 = this.lookahead, o2 = this.parseObjectPropertyKey(), 3 === t3.type && "constructor" === t3.value && this.tolerateUnexpectedToken(t3, s.Messages.ConstructorIsAsync));
            }
            var h = this.qualifiedPropertyName(this.lookahead);
            return 3 === t3.type ? "get" === t3.value && h ? (n2 = "get", l2 = this.match("["), o2 = this.parseObjectPropertyKey(), this.context.allowYield = false, a2 = this.parseGetterMethod()) : "set" === t3.value && h && (n2 = "set", l2 = this.match("["), o2 = this.parseObjectPropertyKey(), a2 = this.parseSetterMethod()) : 7 === t3.type && "*" === t3.value && h && (n2 = "init", l2 = this.match("["), o2 = this.parseObjectPropertyKey(), a2 = this.parseGeneratorMethod(), c2 = true), !n2 && o2 && this.match("(") && (n2 = "init", a2 = d2 ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction(), c2 = true), n2 || this.throwUnexpectedToken(this.lookahead), "init" === n2 && (n2 = "method"), l2 || (u2 && this.isPropertyKey(o2, "prototype") && this.throwUnexpectedToken(t3, s.Messages.StaticPrototype), !u2 && this.isPropertyKey(o2, "constructor") && (("method" !== n2 || !c2 || a2 && a2.generator) && this.throwUnexpectedToken(t3, s.Messages.ConstructorSpecialMethod), e4.value ? this.throwUnexpectedToken(t3, s.Messages.DuplicateConstructor) : e4.value = true, n2 = "constructor")), this.finalize(r2, new i.MethodDefinition(o2, l2, a2, n2, u2));
          }, e3.prototype.parseClassElementList = function() {
            var e4 = [], t3 = { value: false };
            for (this.expect("{"); !this.match("}"); ) this.match(";") ? this.nextToken() : e4.push(this.parseClassElement(t3));
            return this.expect("}"), e4;
          }, e3.prototype.parseClassBody = function() {
            var e4 = this.createNode(), t3 = this.parseClassElementList();
            return this.finalize(e4, new i.ClassBody(t3));
          }, e3.prototype.parseClassDeclaration = function(e4) {
            var t3 = this.createNode(), r2 = this.context.strict;
            this.context.strict = true, this.expectKeyword("class");
            var n2 = e4 && 3 !== this.lookahead.type ? null : this.parseVariableIdentifier(), o2 = null;
            this.matchKeyword("extends") && (this.nextToken(), o2 = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall));
            var s2 = this.parseClassBody();
            return this.context.strict = r2, this.finalize(t3, new i.ClassDeclaration(n2, o2, s2));
          }, e3.prototype.parseClassExpression = function() {
            var e4 = this.createNode(), t3 = this.context.strict;
            this.context.strict = true, this.expectKeyword("class");
            var r2 = 3 === this.lookahead.type ? this.parseVariableIdentifier() : null, n2 = null;
            this.matchKeyword("extends") && (this.nextToken(), n2 = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall));
            var o2 = this.parseClassBody();
            return this.context.strict = t3, this.finalize(e4, new i.ClassExpression(r2, n2, o2));
          }, e3.prototype.parseModule = function() {
            this.context.strict = true, this.context.isModule = true, this.scanner.isModule = true;
            for (var e4 = this.createNode(), t3 = this.parseDirectivePrologues(); 2 !== this.lookahead.type; ) t3.push(this.parseStatementListItem());
            return this.finalize(e4, new i.Module(t3));
          }, e3.prototype.parseScript = function() {
            for (var e4 = this.createNode(), t3 = this.parseDirectivePrologues(); 2 !== this.lookahead.type; ) t3.push(this.parseStatementListItem());
            return this.finalize(e4, new i.Script(t3));
          }, e3.prototype.parseModuleSpecifier = function() {
            var e4 = this.createNode();
            8 !== this.lookahead.type && this.throwError(s.Messages.InvalidModuleSpecifier);
            var t3 = this.nextToken(), r2 = this.getTokenRaw(t3);
            return this.finalize(e4, new i.Literal(t3.value, r2));
          }, e3.prototype.parseImportSpecifier = function() {
            var e4, t3, r2 = this.createNode();
            return 3 === this.lookahead.type ? (t3 = e4 = this.parseVariableIdentifier(), this.matchContextualKeyword("as") && (this.nextToken(), t3 = this.parseVariableIdentifier())) : (t3 = e4 = this.parseIdentifierName(), this.matchContextualKeyword("as") ? (this.nextToken(), t3 = this.parseVariableIdentifier()) : this.throwUnexpectedToken(this.nextToken())), this.finalize(r2, new i.ImportSpecifier(t3, e4));
          }, e3.prototype.parseNamedImports = function() {
            this.expect("{");
            for (var e4 = []; !this.match("}"); ) e4.push(this.parseImportSpecifier()), this.match("}") || this.expect(",");
            return this.expect("}"), e4;
          }, e3.prototype.parseImportDefaultSpecifier = function() {
            var e4 = this.createNode(), t3 = this.parseIdentifierName();
            return this.finalize(e4, new i.ImportDefaultSpecifier(t3));
          }, e3.prototype.parseImportNamespaceSpecifier = function() {
            var e4 = this.createNode();
            this.expect("*"), this.matchContextualKeyword("as") || this.throwError(s.Messages.NoAsAfterImportNamespace), this.nextToken();
            var t3 = this.parseIdentifierName();
            return this.finalize(e4, new i.ImportNamespaceSpecifier(t3));
          }, e3.prototype.parseImportDeclaration = function() {
            this.context.inFunctionBody && this.throwError(s.Messages.IllegalImportDeclaration);
            var e4, t3 = this.createNode();
            this.expectKeyword("import");
            var r2 = [];
            if (8 === this.lookahead.type) e4 = this.parseModuleSpecifier();
            else {
              if (this.match("{") ? r2 = r2.concat(this.parseNamedImports()) : this.match("*") ? r2.push(this.parseImportNamespaceSpecifier()) : this.isIdentifierName(this.lookahead) && !this.matchKeyword("default") ? (r2.push(this.parseImportDefaultSpecifier()), this.match(",") && (this.nextToken(), this.match("*") ? r2.push(this.parseImportNamespaceSpecifier()) : this.match("{") ? r2 = r2.concat(this.parseNamedImports()) : this.throwUnexpectedToken(this.lookahead))) : this.throwUnexpectedToken(this.nextToken()), !this.matchContextualKeyword("from")) {
                var n2 = this.lookahead.value ? s.Messages.UnexpectedToken : s.Messages.MissingFromClause;
                this.throwError(n2, this.lookahead.value);
              }
              this.nextToken(), e4 = this.parseModuleSpecifier();
            }
            return this.consumeSemicolon(), this.finalize(t3, new i.ImportDeclaration(r2, e4));
          }, e3.prototype.parseExportSpecifier = function() {
            var e4 = this.createNode(), t3 = this.parseIdentifierName(), r2 = t3;
            return this.matchContextualKeyword("as") && (this.nextToken(), r2 = this.parseIdentifierName()), this.finalize(e4, new i.ExportSpecifier(t3, r2));
          }, e3.prototype.parseExportDeclaration = function() {
            this.context.inFunctionBody && this.throwError(s.Messages.IllegalExportDeclaration);
            var e4, t3 = this.createNode();
            if (this.expectKeyword("export"), this.matchKeyword("default")) if (this.nextToken(), this.matchKeyword("function")) {
              var r2 = this.parseFunctionDeclaration(true);
              e4 = this.finalize(t3, new i.ExportDefaultDeclaration(r2));
            } else this.matchKeyword("class") ? (r2 = this.parseClassDeclaration(true), e4 = this.finalize(t3, new i.ExportDefaultDeclaration(r2))) : this.matchContextualKeyword("async") ? (r2 = this.matchAsyncFunction() ? this.parseFunctionDeclaration(true) : this.parseAssignmentExpression(), e4 = this.finalize(t3, new i.ExportDefaultDeclaration(r2))) : (this.matchContextualKeyword("from") && this.throwError(s.Messages.UnexpectedToken, this.lookahead.value), r2 = this.match("{") ? this.parseObjectInitializer() : this.match("[") ? this.parseArrayInitializer() : this.parseAssignmentExpression(), this.consumeSemicolon(), e4 = this.finalize(t3, new i.ExportDefaultDeclaration(r2)));
            else if (this.match("*")) {
              if (this.nextToken(), !this.matchContextualKeyword("from")) {
                var n2 = this.lookahead.value ? s.Messages.UnexpectedToken : s.Messages.MissingFromClause;
                this.throwError(n2, this.lookahead.value);
              }
              this.nextToken();
              var o2 = this.parseModuleSpecifier();
              this.consumeSemicolon(), e4 = this.finalize(t3, new i.ExportAllDeclaration(o2));
            } else if (4 === this.lookahead.type) {
              switch (r2 = void 0, this.lookahead.value) {
                case "let":
                case "const":
                  r2 = this.parseLexicalDeclaration({ inFor: false });
                  break;
                case "var":
                case "class":
                case "function":
                  r2 = this.parseStatementListItem();
                  break;
                default:
                  this.throwUnexpectedToken(this.lookahead);
              }
              e4 = this.finalize(t3, new i.ExportNamedDeclaration(r2, [], null));
            } else if (this.matchAsyncFunction()) r2 = this.parseFunctionDeclaration(), e4 = this.finalize(t3, new i.ExportNamedDeclaration(r2, [], null));
            else {
              var a2 = [], l2 = null, c2 = false;
              for (this.expect("{"); !this.match("}"); ) c2 = c2 || this.matchKeyword("default"), a2.push(this.parseExportSpecifier()), this.match("}") || this.expect(",");
              this.expect("}"), this.matchContextualKeyword("from") ? (this.nextToken(), l2 = this.parseModuleSpecifier(), this.consumeSemicolon()) : c2 ? (n2 = this.lookahead.value ? s.Messages.UnexpectedToken : s.Messages.MissingFromClause, this.throwError(n2, this.lookahead.value)) : this.consumeSemicolon(), e4 = this.finalize(t3, new i.ExportNamedDeclaration(null, a2, l2));
            }
            return e4;
          }, e3;
        })();
        t2.Parser = d;
      }, function(e2, t2) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.assert = function(e3, t3) {
          if (!e3) throw new Error("ASSERT: " + t3);
        };
      }, function(e2, t2) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true });
        var r = (function() {
          function e3() {
            this.errors = [], this.tolerant = false;
          }
          return e3.prototype.recordError = function(e4) {
            this.errors.push(e4);
          }, e3.prototype.tolerate = function(e4) {
            if (!this.tolerant) throw e4;
            this.recordError(e4);
          }, e3.prototype.constructError = function(e4, t3) {
            var r2 = new Error(e4);
            try {
              throw r2;
            } catch (e5) {
              Object.create && Object.defineProperty && (r2 = Object.create(e5), Object.defineProperty(r2, "column", { value: t3 }));
            }
            return r2;
          }, e3.prototype.createError = function(e4, t3, r2, n) {
            var o = "Line " + t3 + ": " + n, s = this.constructError(o, r2);
            return s.index = e4, s.lineNumber = t3, s.description = n, s;
          }, e3.prototype.throwError = function(e4, t3, r2, n) {
            throw this.createError(e4, t3, r2, n);
          }, e3.prototype.tolerateError = function(e4, t3, r2, n) {
            var o = this.createError(e4, t3, r2, n);
            if (!this.tolerant) throw o;
            this.recordError(o);
          }, e3;
        })();
        t2.ErrorHandler = r;
      }, function(e2, t2) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Messages = { BadGetterArity: "Getter must not have any formal parameters", BadSetterArity: "Setter must have exactly one formal parameter", BadSetterRestParameter: "Setter function argument must not be a rest parameter", ConstructorIsAsync: "Class constructor may not be an async method", ConstructorSpecialMethod: "Class constructor may not be an accessor", DeclarationMissingInitializer: "Missing initializer in %0 declaration", DefaultRestParameter: "Unexpected token =", DuplicateBinding: "Duplicate binding %0", DuplicateConstructor: "A class may only have one constructor", DuplicateProtoProperty: "Duplicate __proto__ fields are not allowed in object literals", ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer", GeneratorInLegacyContext: "Generator declarations are not allowed in legacy contexts", IllegalBreak: "Illegal break statement", IllegalContinue: "Illegal continue statement", IllegalExportDeclaration: "Unexpected token", IllegalImportDeclaration: "Unexpected token", IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list", IllegalReturn: "Illegal return statement", InvalidEscapedReservedWord: "Keyword must not contain escaped characters", InvalidHexEscapeSequence: "Invalid hexadecimal escape sequence", InvalidLHSInAssignment: "Invalid left-hand side in assignment", InvalidLHSInForIn: "Invalid left-hand side in for-in", InvalidLHSInForLoop: "Invalid left-hand side in for-loop", InvalidModuleSpecifier: "Unexpected token", InvalidRegExp: "Invalid regular expression", LetInLexicalBinding: "let is disallowed as a lexically bound name", MissingFromClause: "Unexpected token", MultipleDefaultsInSwitch: "More than one default clause in switch statement", NewlineAfterThrow: "Illegal newline after throw", NoAsAfterImportNamespace: "Unexpected token", NoCatchOrFinally: "Missing catch or finally after try", ParameterAfterRestParameter: "Rest parameter must be last formal parameter", Redeclaration: "%0 '%1' has already been declared", StaticPrototype: "Classes may not have static property named prototype", StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode", StrictDelete: "Delete of an unqualified identifier in strict mode.", StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block", StrictFunctionName: "Function name may not be eval or arguments in strict mode", StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode", StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode", StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode", StrictModeWith: "Strict mode code may not include a with statement", StrictOctalLiteral: "Octal literals are not allowed in strict mode.", StrictParamDupe: "Strict mode function may not have duplicate parameter names", StrictParamName: "Parameter name eval or arguments is not allowed in strict mode", StrictReservedWord: "Use of future reserved word in strict mode", StrictVarName: "Variable name may not be eval or arguments in strict mode", TemplateOctalLiteral: "Octal literals are not allowed in template strings.", UnexpectedEOS: "Unexpected end of input", UnexpectedIdentifier: "Unexpected identifier", UnexpectedNumber: "Unexpected number", UnexpectedReserved: "Unexpected reserved word", UnexpectedString: "Unexpected string", UnexpectedTemplate: "Unexpected quasi %0", UnexpectedToken: "Unexpected token %0", UnexpectedTokenIllegal: "Unexpected token ILLEGAL", UnknownLabel: "Undefined label '%0'", UnterminatedRegExp: "Invalid regular expression: missing /" };
      }, function(e2, t2, r) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true });
        var n = r(9), o = r(4), s = r(11);
        function i(e3) {
          return "0123456789abcdef".indexOf(e3.toLowerCase());
        }
        function a(e3) {
          return "01234567".indexOf(e3);
        }
        var l = (function() {
          function e3(e4, t3) {
            this.source = e4, this.errorHandler = t3, this.trackComment = false, this.isModule = false, this.length = e4.length, this.index = 0, this.lineNumber = e4.length > 0 ? 1 : 0, this.lineStart = 0, this.curlyStack = [];
          }
          return e3.prototype.saveState = function() {
            return { index: this.index, lineNumber: this.lineNumber, lineStart: this.lineStart };
          }, e3.prototype.restoreState = function(e4) {
            this.index = e4.index, this.lineNumber = e4.lineNumber, this.lineStart = e4.lineStart;
          }, e3.prototype.eof = function() {
            return this.index >= this.length;
          }, e3.prototype.throwUnexpectedToken = function(e4) {
            return void 0 === e4 && (e4 = s.Messages.UnexpectedTokenIllegal), this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, e4);
          }, e3.prototype.tolerateUnexpectedToken = function(e4) {
            void 0 === e4 && (e4 = s.Messages.UnexpectedTokenIllegal), this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, e4);
          }, e3.prototype.skipSingleLineComment = function(e4) {
            var t3, r2, n2 = [];
            for (this.trackComment && (n2 = [], t3 = this.index - e4, r2 = { start: { line: this.lineNumber, column: this.index - this.lineStart - e4 }, end: {} }); !this.eof(); ) {
              var s2 = this.source.charCodeAt(this.index);
              if (++this.index, o.Character.isLineTerminator(s2)) {
                if (this.trackComment) {
                  r2.end = { line: this.lineNumber, column: this.index - this.lineStart - 1 };
                  var i2 = { multiLine: false, slice: [t3 + e4, this.index - 1], range: [t3, this.index - 1], loc: r2 };
                  n2.push(i2);
                }
                return 13 === s2 && 10 === this.source.charCodeAt(this.index) && ++this.index, ++this.lineNumber, this.lineStart = this.index, n2;
              }
            }
            return this.trackComment && (r2.end = { line: this.lineNumber, column: this.index - this.lineStart }, i2 = { multiLine: false, slice: [t3 + e4, this.index], range: [t3, this.index], loc: r2 }, n2.push(i2)), n2;
          }, e3.prototype.skipMultiLineComment = function() {
            var e4, t3, r2 = [];
            for (this.trackComment && (r2 = [], e4 = this.index - 2, t3 = { start: { line: this.lineNumber, column: this.index - this.lineStart - 2 }, end: {} }); !this.eof(); ) {
              var n2 = this.source.charCodeAt(this.index);
              if (o.Character.isLineTerminator(n2)) 13 === n2 && 10 === this.source.charCodeAt(this.index + 1) && ++this.index, ++this.lineNumber, ++this.index, this.lineStart = this.index;
              else if (42 === n2) {
                if (47 === this.source.charCodeAt(this.index + 1)) {
                  if (this.index += 2, this.trackComment) {
                    t3.end = { line: this.lineNumber, column: this.index - this.lineStart };
                    var s2 = { multiLine: true, slice: [e4 + 2, this.index - 2], range: [e4, this.index], loc: t3 };
                    r2.push(s2);
                  }
                  return r2;
                }
                ++this.index;
              } else ++this.index;
            }
            return this.trackComment && (t3.end = { line: this.lineNumber, column: this.index - this.lineStart }, s2 = { multiLine: true, slice: [e4 + 2, this.index], range: [e4, this.index], loc: t3 }, r2.push(s2)), this.tolerateUnexpectedToken(), r2;
          }, e3.prototype.scanComments = function() {
            var e4;
            this.trackComment && (e4 = []);
            for (var t3 = 0 === this.index; !this.eof(); ) {
              var r2 = this.source.charCodeAt(this.index);
              if (o.Character.isWhiteSpace(r2)) ++this.index;
              else if (o.Character.isLineTerminator(r2)) ++this.index, 13 === r2 && 10 === this.source.charCodeAt(this.index) && ++this.index, ++this.lineNumber, this.lineStart = this.index, t3 = true;
              else if (47 === r2) if (47 === (r2 = this.source.charCodeAt(this.index + 1))) {
                this.index += 2;
                var n2 = this.skipSingleLineComment(2);
                this.trackComment && (e4 = e4.concat(n2)), t3 = true;
              } else {
                if (42 !== r2) break;
                this.index += 2, n2 = this.skipMultiLineComment(), this.trackComment && (e4 = e4.concat(n2));
              }
              else if (t3 && 45 === r2) {
                if (45 !== this.source.charCodeAt(this.index + 1) || 62 !== this.source.charCodeAt(this.index + 2)) break;
                this.index += 3, n2 = this.skipSingleLineComment(3), this.trackComment && (e4 = e4.concat(n2));
              } else {
                if (60 !== r2 || this.isModule) break;
                if ("!--" !== this.source.slice(this.index + 1, this.index + 4)) break;
                this.index += 4, n2 = this.skipSingleLineComment(4), this.trackComment && (e4 = e4.concat(n2));
              }
            }
            return e4;
          }, e3.prototype.isFutureReservedWord = function(e4) {
            switch (e4) {
              case "enum":
              case "export":
              case "import":
              case "super":
                return true;
              default:
                return false;
            }
          }, e3.prototype.isStrictModeReservedWord = function(e4) {
            switch (e4) {
              case "implements":
              case "interface":
              case "package":
              case "private":
              case "protected":
              case "public":
              case "static":
              case "yield":
              case "let":
                return true;
              default:
                return false;
            }
          }, e3.prototype.isRestrictedWord = function(e4) {
            return "eval" === e4 || "arguments" === e4;
          }, e3.prototype.isKeyword = function(e4) {
            switch (e4.length) {
              case 2:
                return "if" === e4 || "in" === e4 || "do" === e4;
              case 3:
                return "var" === e4 || "for" === e4 || "new" === e4 || "try" === e4 || "let" === e4;
              case 4:
                return "this" === e4 || "else" === e4 || "case" === e4 || "void" === e4 || "with" === e4 || "enum" === e4;
              case 5:
                return "while" === e4 || "break" === e4 || "catch" === e4 || "throw" === e4 || "const" === e4 || "yield" === e4 || "class" === e4 || "super" === e4;
              case 6:
                return "return" === e4 || "typeof" === e4 || "delete" === e4 || "switch" === e4 || "export" === e4 || "import" === e4;
              case 7:
                return "default" === e4 || "finally" === e4 || "extends" === e4;
              case 8:
                return "function" === e4 || "continue" === e4 || "debugger" === e4;
              case 10:
                return "instanceof" === e4;
              default:
                return false;
            }
          }, e3.prototype.codePointAt = function(e4) {
            var t3 = this.source.charCodeAt(e4);
            if (t3 >= 55296 && t3 <= 56319) {
              var r2 = this.source.charCodeAt(e4 + 1);
              r2 >= 56320 && r2 <= 57343 && (t3 = 1024 * (t3 - 55296) + r2 - 56320 + 65536);
            }
            return t3;
          }, e3.prototype.scanHexEscape = function(e4) {
            for (var t3 = "u" === e4 ? 4 : 2, r2 = 0, n2 = 0; n2 < t3; ++n2) {
              if (this.eof() || !o.Character.isHexDigit(this.source.charCodeAt(this.index))) return null;
              r2 = 16 * r2 + i(this.source[this.index++]);
            }
            return String.fromCharCode(r2);
          }, e3.prototype.scanUnicodeCodePointEscape = function() {
            var e4 = this.source[this.index], t3 = 0;
            for ("}" === e4 && this.throwUnexpectedToken(); !this.eof() && (e4 = this.source[this.index++], o.Character.isHexDigit(e4.charCodeAt(0))); ) t3 = 16 * t3 + i(e4);
            return (t3 > 1114111 || "}" !== e4) && this.throwUnexpectedToken(), o.Character.fromCodePoint(t3);
          }, e3.prototype.getIdentifier = function() {
            for (var e4 = this.index++; !this.eof(); ) {
              var t3 = this.source.charCodeAt(this.index);
              if (92 === t3) return this.index = e4, this.getComplexIdentifier();
              if (t3 >= 55296 && t3 < 57343) return this.index = e4, this.getComplexIdentifier();
              if (!o.Character.isIdentifierPart(t3)) break;
              ++this.index;
            }
            return this.source.slice(e4, this.index);
          }, e3.prototype.getComplexIdentifier = function() {
            var e4, t3 = this.codePointAt(this.index), r2 = o.Character.fromCodePoint(t3);
            for (this.index += r2.length, 92 === t3 && (117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(), ++this.index, "{" === this.source[this.index] ? (++this.index, e4 = this.scanUnicodeCodePointEscape()) : null !== (e4 = this.scanHexEscape("u")) && "\\" !== e4 && o.Character.isIdentifierStart(e4.charCodeAt(0)) || this.throwUnexpectedToken(), r2 = e4); !this.eof() && (t3 = this.codePointAt(this.index), o.Character.isIdentifierPart(t3)); ) r2 += e4 = o.Character.fromCodePoint(t3), this.index += e4.length, 92 === t3 && (r2 = r2.substr(0, r2.length - 1), 117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(), ++this.index, "{" === this.source[this.index] ? (++this.index, e4 = this.scanUnicodeCodePointEscape()) : null !== (e4 = this.scanHexEscape("u")) && "\\" !== e4 && o.Character.isIdentifierPart(e4.charCodeAt(0)) || this.throwUnexpectedToken(), r2 += e4);
            return r2;
          }, e3.prototype.octalToDecimal = function(e4) {
            var t3 = "0" !== e4, r2 = a(e4);
            return !this.eof() && o.Character.isOctalDigit(this.source.charCodeAt(this.index)) && (t3 = true, r2 = 8 * r2 + a(this.source[this.index++]), "0123".indexOf(e4) >= 0 && !this.eof() && o.Character.isOctalDigit(this.source.charCodeAt(this.index)) && (r2 = 8 * r2 + a(this.source[this.index++]))), { code: r2, octal: t3 };
          }, e3.prototype.scanIdentifier = function() {
            var e4, t3 = this.index, r2 = 92 === this.source.charCodeAt(t3) ? this.getComplexIdentifier() : this.getIdentifier();
            if (3 != (e4 = 1 === r2.length ? 3 : this.isKeyword(r2) ? 4 : "null" === r2 ? 5 : "true" === r2 || "false" === r2 ? 1 : 3) && t3 + r2.length !== this.index) {
              var n2 = this.index;
              this.index = t3, this.tolerateUnexpectedToken(s.Messages.InvalidEscapedReservedWord), this.index = n2;
            }
            return { type: e4, value: r2, lineNumber: this.lineNumber, lineStart: this.lineStart, start: t3, end: this.index };
          }, e3.prototype.scanPunctuator = function() {
            var e4 = this.index, t3 = this.source[this.index];
            switch (t3) {
              case "(":
              case "{":
                "{" === t3 && this.curlyStack.push("{"), ++this.index;
                break;
              case ".":
                ++this.index, "." === this.source[this.index] && "." === this.source[this.index + 1] && (this.index += 2, t3 = "...");
                break;
              case "}":
                ++this.index, this.curlyStack.pop();
                break;
              case ")":
              case ";":
              case ",":
              case "[":
              case "]":
              case ":":
              case "?":
              case "~":
                ++this.index;
                break;
              default:
                ">>>=" === (t3 = this.source.substr(this.index, 4)) ? this.index += 4 : "===" === (t3 = t3.substr(0, 3)) || "!==" === t3 || ">>>" === t3 || "<<=" === t3 || ">>=" === t3 || "**=" === t3 ? this.index += 3 : "&&" === (t3 = t3.substr(0, 2)) || "||" === t3 || "==" === t3 || "!=" === t3 || "+=" === t3 || "-=" === t3 || "*=" === t3 || "/=" === t3 || "++" === t3 || "--" === t3 || "<<" === t3 || ">>" === t3 || "&=" === t3 || "|=" === t3 || "^=" === t3 || "%=" === t3 || "<=" === t3 || ">=" === t3 || "=>" === t3 || "**" === t3 ? this.index += 2 : (t3 = this.source[this.index], "<>=!+-*%&|^/".indexOf(t3) >= 0 && ++this.index);
            }
            return this.index === e4 && this.throwUnexpectedToken(), { type: 7, value: t3, lineNumber: this.lineNumber, lineStart: this.lineStart, start: e4, end: this.index };
          }, e3.prototype.scanHexLiteral = function(e4) {
            for (var t3 = ""; !this.eof() && o.Character.isHexDigit(this.source.charCodeAt(this.index)); ) t3 += this.source[this.index++];
            return 0 === t3.length && this.throwUnexpectedToken(), o.Character.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), { type: 6, value: parseInt("0x" + t3, 16), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e4, end: this.index };
          }, e3.prototype.scanBinaryLiteral = function(e4) {
            for (var t3, r2 = ""; !this.eof() && ("0" === (t3 = this.source[this.index]) || "1" === t3); ) r2 += this.source[this.index++];
            return 0 === r2.length && this.throwUnexpectedToken(), this.eof() || (t3 = this.source.charCodeAt(this.index), (o.Character.isIdentifierStart(t3) || o.Character.isDecimalDigit(t3)) && this.throwUnexpectedToken()), { type: 6, value: parseInt(r2, 2), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e4, end: this.index };
          }, e3.prototype.scanOctalLiteral = function(e4, t3) {
            var r2 = "", n2 = false;
            for (o.Character.isOctalDigit(e4.charCodeAt(0)) ? (n2 = true, r2 = "0" + this.source[this.index++]) : ++this.index; !this.eof() && o.Character.isOctalDigit(this.source.charCodeAt(this.index)); ) r2 += this.source[this.index++];
            return n2 || 0 !== r2.length || this.throwUnexpectedToken(), (o.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || o.Character.isDecimalDigit(this.source.charCodeAt(this.index))) && this.throwUnexpectedToken(), { type: 6, value: parseInt(r2, 8), octal: n2, lineNumber: this.lineNumber, lineStart: this.lineStart, start: t3, end: this.index };
          }, e3.prototype.isImplicitOctalLiteral = function() {
            for (var e4 = this.index + 1; e4 < this.length; ++e4) {
              var t3 = this.source[e4];
              if ("8" === t3 || "9" === t3) return false;
              if (!o.Character.isOctalDigit(t3.charCodeAt(0))) return true;
            }
            return true;
          }, e3.prototype.scanNumericLiteral = function() {
            var e4 = this.index, t3 = this.source[e4];
            n.assert(o.Character.isDecimalDigit(t3.charCodeAt(0)) || "." === t3, "Numeric literal must start with a decimal digit or a decimal point");
            var r2 = "";
            if ("." !== t3) {
              if (r2 = this.source[this.index++], t3 = this.source[this.index], "0" === r2) {
                if ("x" === t3 || "X" === t3) return ++this.index, this.scanHexLiteral(e4);
                if ("b" === t3 || "B" === t3) return ++this.index, this.scanBinaryLiteral(e4);
                if ("o" === t3 || "O" === t3) return this.scanOctalLiteral(t3, e4);
                if (t3 && o.Character.isOctalDigit(t3.charCodeAt(0)) && this.isImplicitOctalLiteral()) return this.scanOctalLiteral(t3, e4);
              }
              for (; o.Character.isDecimalDigit(this.source.charCodeAt(this.index)); ) r2 += this.source[this.index++];
              t3 = this.source[this.index];
            }
            if ("." === t3) {
              for (r2 += this.source[this.index++]; o.Character.isDecimalDigit(this.source.charCodeAt(this.index)); ) r2 += this.source[this.index++];
              t3 = this.source[this.index];
            }
            if ("e" === t3 || "E" === t3) if (r2 += this.source[this.index++], "+" !== (t3 = this.source[this.index]) && "-" !== t3 || (r2 += this.source[this.index++]), o.Character.isDecimalDigit(this.source.charCodeAt(this.index))) for (; o.Character.isDecimalDigit(this.source.charCodeAt(this.index)); ) r2 += this.source[this.index++];
            else this.throwUnexpectedToken();
            return o.Character.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), { type: 6, value: parseFloat(r2), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e4, end: this.index };
          }, e3.prototype.scanStringLiteral = function() {
            var e4 = this.index, t3 = this.source[e4];
            n.assert("'" === t3 || '"' === t3, "String literal must starts with a quote"), ++this.index;
            for (var r2 = false, i2 = ""; !this.eof(); ) {
              var a2 = this.source[this.index++];
              if (a2 === t3) {
                t3 = "";
                break;
              }
              if ("\\" === a2) if ((a2 = this.source[this.index++]) && o.Character.isLineTerminator(a2.charCodeAt(0))) ++this.lineNumber, "\r" === a2 && "\n" === this.source[this.index] && ++this.index, this.lineStart = this.index;
              else switch (a2) {
                case "u":
                  if ("{" === this.source[this.index]) ++this.index, i2 += this.scanUnicodeCodePointEscape();
                  else {
                    var l2 = this.scanHexEscape(a2);
                    null === l2 && this.throwUnexpectedToken(), i2 += l2;
                  }
                  break;
                case "x":
                  var c = this.scanHexEscape(a2);
                  null === c && this.throwUnexpectedToken(s.Messages.InvalidHexEscapeSequence), i2 += c;
                  break;
                case "n":
                  i2 += "\n";
                  break;
                case "r":
                  i2 += "\r";
                  break;
                case "t":
                  i2 += "	";
                  break;
                case "b":
                  i2 += "\b";
                  break;
                case "f":
                  i2 += "\f";
                  break;
                case "v":
                  i2 += "\v";
                  break;
                case "8":
                case "9":
                  i2 += a2, this.tolerateUnexpectedToken();
                  break;
                default:
                  if (a2 && o.Character.isOctalDigit(a2.charCodeAt(0))) {
                    var u = this.octalToDecimal(a2);
                    r2 = u.octal || r2, i2 += String.fromCharCode(u.code);
                  } else i2 += a2;
              }
              else {
                if (o.Character.isLineTerminator(a2.charCodeAt(0))) break;
                i2 += a2;
              }
            }
            return "" !== t3 && (this.index = e4, this.throwUnexpectedToken()), { type: 8, value: i2, octal: r2, lineNumber: this.lineNumber, lineStart: this.lineStart, start: e4, end: this.index };
          }, e3.prototype.scanTemplate = function() {
            var e4 = "", t3 = false, r2 = this.index, n2 = "`" === this.source[r2], i2 = false, a2 = 2;
            for (++this.index; !this.eof(); ) {
              var l2 = this.source[this.index++];
              if ("`" === l2) {
                a2 = 1, i2 = true, t3 = true;
                break;
              }
              if ("$" === l2) {
                if ("{" === this.source[this.index]) {
                  this.curlyStack.push("${"), ++this.index, t3 = true;
                  break;
                }
                e4 += l2;
              } else if ("\\" === l2) if (l2 = this.source[this.index++], o.Character.isLineTerminator(l2.charCodeAt(0))) ++this.lineNumber, "\r" === l2 && "\n" === this.source[this.index] && ++this.index, this.lineStart = this.index;
              else switch (l2) {
                case "n":
                  e4 += "\n";
                  break;
                case "r":
                  e4 += "\r";
                  break;
                case "t":
                  e4 += "	";
                  break;
                case "u":
                  if ("{" === this.source[this.index]) ++this.index, e4 += this.scanUnicodeCodePointEscape();
                  else {
                    var c = this.index, u = this.scanHexEscape(l2);
                    null !== u ? e4 += u : (this.index = c, e4 += l2);
                  }
                  break;
                case "x":
                  var d = this.scanHexEscape(l2);
                  null === d && this.throwUnexpectedToken(s.Messages.InvalidHexEscapeSequence), e4 += d;
                  break;
                case "b":
                  e4 += "\b";
                  break;
                case "f":
                  e4 += "\f";
                  break;
                case "v":
                  e4 += "\v";
                  break;
                default:
                  "0" === l2 ? (o.Character.isDecimalDigit(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(s.Messages.TemplateOctalLiteral), e4 += "\0") : o.Character.isOctalDigit(l2.charCodeAt(0)) ? this.throwUnexpectedToken(s.Messages.TemplateOctalLiteral) : e4 += l2;
              }
              else o.Character.isLineTerminator(l2.charCodeAt(0)) ? (++this.lineNumber, "\r" === l2 && "\n" === this.source[this.index] && ++this.index, this.lineStart = this.index, e4 += "\n") : e4 += l2;
            }
            return t3 || this.throwUnexpectedToken(), n2 || this.curlyStack.pop(), { type: 10, value: this.source.slice(r2 + 1, this.index - a2), cooked: e4, head: n2, tail: i2, lineNumber: this.lineNumber, lineStart: this.lineStart, start: r2, end: this.index };
          }, e3.prototype.testRegExp = function(e4, t3) {
            var r2 = e4, n2 = this;
            t3.indexOf("u") >= 0 && (r2 = r2.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function(e5, t4, r3) {
              var o2 = parseInt(t4 || r3, 16);
              return o2 > 1114111 && n2.throwUnexpectedToken(s.Messages.InvalidRegExp), o2 <= 65535 ? String.fromCharCode(o2) : "￿";
            }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "￿"));
            try {
              RegExp(r2);
            } catch (e5) {
              this.throwUnexpectedToken(s.Messages.InvalidRegExp);
            }
            try {
              return new RegExp(e4, t3);
            } catch (e5) {
              return null;
            }
          }, e3.prototype.scanRegExpBody = function() {
            var e4 = this.source[this.index];
            n.assert("/" === e4, "Regular expression literal must start with a slash");
            for (var t3 = this.source[this.index++], r2 = false, i2 = false; !this.eof(); ) if (t3 += e4 = this.source[this.index++], "\\" === e4) e4 = this.source[this.index++], o.Character.isLineTerminator(e4.charCodeAt(0)) && this.throwUnexpectedToken(s.Messages.UnterminatedRegExp), t3 += e4;
            else if (o.Character.isLineTerminator(e4.charCodeAt(0))) this.throwUnexpectedToken(s.Messages.UnterminatedRegExp);
            else if (r2) "]" === e4 && (r2 = false);
            else {
              if ("/" === e4) {
                i2 = true;
                break;
              }
              "[" === e4 && (r2 = true);
            }
            return i2 || this.throwUnexpectedToken(s.Messages.UnterminatedRegExp), t3.substr(1, t3.length - 2);
          }, e3.prototype.scanRegExpFlags = function() {
            for (var e4 = ""; !this.eof(); ) {
              var t3 = this.source[this.index];
              if (!o.Character.isIdentifierPart(t3.charCodeAt(0))) break;
              if (++this.index, "\\" !== t3 || this.eof()) e4 += t3;
              else if ("u" === (t3 = this.source[this.index])) {
                ++this.index;
                var r2 = this.index, n2 = this.scanHexEscape("u");
                if (null !== n2) for (e4 += n2; r2 < this.index; ++r2) this.source[r2];
                else this.index = r2, e4 += "u";
                this.tolerateUnexpectedToken();
              } else this.tolerateUnexpectedToken();
            }
            return e4;
          }, e3.prototype.scanRegExp = function() {
            var e4 = this.index, t3 = this.scanRegExpBody(), r2 = this.scanRegExpFlags();
            return { type: 9, value: "", pattern: t3, flags: r2, regex: this.testRegExp(t3, r2), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e4, end: this.index };
          }, e3.prototype.lex = function() {
            if (this.eof()) return { type: 2, value: "", lineNumber: this.lineNumber, lineStart: this.lineStart, start: this.index, end: this.index };
            var e4 = this.source.charCodeAt(this.index);
            return o.Character.isIdentifierStart(e4) ? this.scanIdentifier() : 40 === e4 || 41 === e4 || 59 === e4 ? this.scanPunctuator() : 39 === e4 || 34 === e4 ? this.scanStringLiteral() : 46 === e4 ? o.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1)) ? this.scanNumericLiteral() : this.scanPunctuator() : o.Character.isDecimalDigit(e4) ? this.scanNumericLiteral() : 96 === e4 || 125 === e4 && "${" === this.curlyStack[this.curlyStack.length - 1] ? this.scanTemplate() : e4 >= 55296 && e4 < 57343 && o.Character.isIdentifierStart(this.codePointAt(this.index)) ? this.scanIdentifier() : this.scanPunctuator();
          }, e3;
        })();
        t2.Scanner = l;
      }, function(e2, t2) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.TokenName = {}, t2.TokenName[1] = "Boolean", t2.TokenName[2] = "<end>", t2.TokenName[3] = "Identifier", t2.TokenName[4] = "Keyword", t2.TokenName[5] = "Null", t2.TokenName[6] = "Numeric", t2.TokenName[7] = "Punctuator", t2.TokenName[8] = "String", t2.TokenName[9] = "RegularExpression", t2.TokenName[10] = "Template";
      }, function(e2, t2) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.XHTMLEntities = { quot: '"', amp: "&", apos: "'", gt: ">", nbsp: " ", iexcl: "¡", cent: "¢", pound: "£", curren: "¤", yen: "¥", brvbar: "¦", sect: "§", uml: "¨", copy: "©", ordf: "ª", laquo: "«", not: "¬", shy: "­", reg: "®", macr: "¯", deg: "°", plusmn: "±", sup2: "²", sup3: "³", acute: "´", micro: "µ", para: "¶", middot: "·", cedil: "¸", sup1: "¹", ordm: "º", raquo: "»", frac14: "¼", frac12: "½", frac34: "¾", iquest: "¿", Agrave: "À", Aacute: "Á", Acirc: "Â", Atilde: "Ã", Auml: "Ä", Aring: "Å", AElig: "Æ", Ccedil: "Ç", Egrave: "È", Eacute: "É", Ecirc: "Ê", Euml: "Ë", Igrave: "Ì", Iacute: "Í", Icirc: "Î", Iuml: "Ï", ETH: "Ð", Ntilde: "Ñ", Ograve: "Ò", Oacute: "Ó", Ocirc: "Ô", Otilde: "Õ", Ouml: "Ö", times: "×", Oslash: "Ø", Ugrave: "Ù", Uacute: "Ú", Ucirc: "Û", Uuml: "Ü", Yacute: "Ý", THORN: "Þ", szlig: "ß", agrave: "à", aacute: "á", acirc: "â", atilde: "ã", auml: "ä", aring: "å", aelig: "æ", ccedil: "ç", egrave: "è", eacute: "é", ecirc: "ê", euml: "ë", igrave: "ì", iacute: "í", icirc: "î", iuml: "ï", eth: "ð", ntilde: "ñ", ograve: "ò", oacute: "ó", ocirc: "ô", otilde: "õ", ouml: "ö", divide: "÷", oslash: "ø", ugrave: "ù", uacute: "ú", ucirc: "û", uuml: "ü", yacute: "ý", thorn: "þ", yuml: "ÿ", OElig: "Œ", oelig: "œ", Scaron: "Š", scaron: "š", Yuml: "Ÿ", fnof: "ƒ", circ: "ˆ", tilde: "˜", Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ", Epsilon: "Ε", Zeta: "Ζ", Eta: "Η", Theta: "Θ", Iota: "Ι", Kappa: "Κ", Lambda: "Λ", Mu: "Μ", Nu: "Ν", Xi: "Ξ", Omicron: "Ο", Pi: "Π", Rho: "Ρ", Sigma: "Σ", Tau: "Τ", Upsilon: "Υ", Phi: "Φ", Chi: "Χ", Psi: "Ψ", Omega: "Ω", alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν", xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigmaf: "ς", sigma: "σ", tau: "τ", upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω", thetasym: "ϑ", upsih: "ϒ", piv: "ϖ", ensp: " ", emsp: " ", thinsp: " ", zwnj: "‌", zwj: "‍", lrm: "‎", rlm: "‏", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", sbquo: "‚", ldquo: "“", rdquo: "”", bdquo: "„", dagger: "†", Dagger: "‡", bull: "•", hellip: "…", permil: "‰", prime: "′", Prime: "″", lsaquo: "‹", rsaquo: "›", oline: "‾", frasl: "⁄", euro: "€", image: "ℑ", weierp: "℘", real: "ℜ", trade: "™", alefsym: "ℵ", larr: "←", uarr: "↑", rarr: "→", darr: "↓", harr: "↔", crarr: "↵", lArr: "⇐", uArr: "⇑", rArr: "⇒", dArr: "⇓", hArr: "⇔", forall: "∀", part: "∂", exist: "∃", empty: "∅", nabla: "∇", isin: "∈", notin: "∉", ni: "∋", prod: "∏", sum: "∑", minus: "−", lowast: "∗", radic: "√", prop: "∝", infin: "∞", ang: "∠", and: "∧", or: "∨", cap: "∩", cup: "∪", int: "∫", there4: "∴", sim: "∼", cong: "≅", asymp: "≈", ne: "≠", equiv: "≡", le: "≤", ge: "≥", sub: "⊂", sup: "⊃", nsub: "⊄", sube: "⊆", supe: "⊇", oplus: "⊕", otimes: "⊗", perp: "⊥", sdot: "⋅", lceil: "⌈", rceil: "⌉", lfloor: "⌊", rfloor: "⌋", loz: "◊", spades: "♠", clubs: "♣", hearts: "♥", diams: "♦", lang: "⟨", rang: "⟩" };
      }, function(e2, t2, r) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true });
        var n = r(10), o = r(12), s = r(13), i = (function() {
          function e3() {
            this.values = [], this.curly = this.paren = -1;
          }
          return e3.prototype.beforeFunctionExpression = function(e4) {
            return ["(", "{", "[", "in", "typeof", "instanceof", "new", "return", "case", "delete", "throw", "void", "=", "+=", "-=", "*=", "**=", "/=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", ",", "+", "-", "*", "**", "/", "%", "++", "--", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&", "||", "?", ":", "===", "==", ">=", "<=", "<", ">", "!=", "!=="].indexOf(e4) >= 0;
          }, e3.prototype.isRegexStart = function() {
            var e4 = this.values[this.values.length - 1], t3 = null !== e4;
            switch (e4) {
              case "this":
              case "]":
                t3 = false;
                break;
              case ")":
                var r2 = this.values[this.paren - 1];
                t3 = "if" === r2 || "while" === r2 || "for" === r2 || "with" === r2;
                break;
              case "}":
                if (t3 = false, "function" === this.values[this.curly - 3]) t3 = !!(n2 = this.values[this.curly - 4]) && !this.beforeFunctionExpression(n2);
                else if ("function" === this.values[this.curly - 4]) {
                  var n2;
                  t3 = !(n2 = this.values[this.curly - 5]) || !this.beforeFunctionExpression(n2);
                }
            }
            return t3;
          }, e3.prototype.push = function(e4) {
            7 === e4.type || 4 === e4.type ? ("{" === e4.value ? this.curly = this.values.length : "(" === e4.value && (this.paren = this.values.length), this.values.push(e4.value)) : this.values.push(null);
          }, e3;
        })(), a = (function() {
          function e3(e4, t3) {
            this.errorHandler = new n.ErrorHandler(), this.errorHandler.tolerant = !!t3 && "boolean" == typeof t3.tolerant && t3.tolerant, this.scanner = new o.Scanner(e4, this.errorHandler), this.scanner.trackComment = !!t3 && "boolean" == typeof t3.comment && t3.comment, this.trackRange = !!t3 && "boolean" == typeof t3.range && t3.range, this.trackLoc = !!t3 && "boolean" == typeof t3.loc && t3.loc, this.buffer = [], this.reader = new i();
          }
          return e3.prototype.errors = function() {
            return this.errorHandler.errors;
          }, e3.prototype.getNextToken = function() {
            if (0 === this.buffer.length) {
              var e4 = this.scanner.scanComments();
              if (this.scanner.trackComment) for (var t3 = 0; t3 < e4.length; ++t3) {
                var r2 = e4[t3], n2 = this.scanner.source.slice(r2.slice[0], r2.slice[1]), o2 = { type: r2.multiLine ? "BlockComment" : "LineComment", value: n2 };
                this.trackRange && (o2.range = r2.range), this.trackLoc && (o2.loc = r2.loc), this.buffer.push(o2);
              }
              if (!this.scanner.eof()) {
                var i2 = void 0;
                this.trackLoc && (i2 = { start: { line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart }, end: {} });
                var a2 = "/" === this.scanner.source[this.scanner.index] && this.reader.isRegexStart() ? this.scanner.scanRegExp() : this.scanner.lex();
                this.reader.push(a2);
                var l = { type: s.TokenName[a2.type], value: this.scanner.source.slice(a2.start, a2.end) };
                if (this.trackRange && (l.range = [a2.start, a2.end]), this.trackLoc && (i2.end = { line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart }, l.loc = i2), 9 === a2.type) {
                  var c = a2.pattern, u = a2.flags;
                  l.regex = { pattern: c, flags: u };
                }
                this.buffer.push(l);
              }
            }
            return this.buffer.shift();
          }, e3;
        })();
        t2.Tokenizer = a;
      }]);
    }, e.exports = t();
  }