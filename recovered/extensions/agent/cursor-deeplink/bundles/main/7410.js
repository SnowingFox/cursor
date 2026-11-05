// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 7410 range:696103..708601
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7410: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(9963).a, r2 = A2(9428).d, o2 = A2(9428).t, s = A2(7784), i = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"], a = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(i);
    function c(e3, t3, A3) {
      const n3 = {};
      this._baseState = n3, n3.name = A3, n3.enc = e3, n3.parent = t3 || null, n3.children = null, n3.tag = null, n3.args = null, n3.reverseArgs = null, n3.choice = null, n3.optional = false, n3.any = false, n3.obj = false, n3.use = null, n3.useDecoder = null, n3.key = null, n3.default = null, n3.explicit = null, n3.implicit = null, n3.contains = null, n3.parent || (n3.children = [], this._wrap());
    }
    e2.exports = c;
    const l = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
    c.prototype.clone = function() {
      const e3 = this._baseState, t3 = {};
      l.forEach(function(A4) {
        t3[A4] = e3[A4];
      });
      const A3 = new this.constructor(t3.parent);
      return A3._baseState = t3, A3;
    }, c.prototype._wrap = function() {
      const e3 = this._baseState;
      a.forEach(function(t3) {
        this[t3] = function() {
          const A3 = new this.constructor(this);
          return e3.children.push(A3), A3[t3].apply(A3, arguments);
        };
      }, this);
    }, c.prototype._init = function(e3) {
      const t3 = this._baseState;
      s(null === t3.parent), e3.call(this), t3.children = t3.children.filter(function(e4) {
        return e4._baseState.parent === this;
      }, this), s.equal(t3.children.length, 1, "Root node can have only one child");
    }, c.prototype._useArgs = function(e3) {
      const t3 = this._baseState, A3 = e3.filter(function(e4) {
        return e4 instanceof this.constructor;
      }, this);
      e3 = e3.filter(function(e4) {
        return !(e4 instanceof this.constructor);
      }, this), 0 !== A3.length && (s(null === t3.children), t3.children = A3, A3.forEach(function(e4) {
        e4._baseState.parent = this;
      }, this)), 0 !== e3.length && (s(null === t3.args), t3.args = e3, t3.reverseArgs = e3.map(function(e4) {
        if ("object" != typeof e4 || e4.constructor !== Object) return e4;
        const t4 = {};
        return Object.keys(e4).forEach(function(A4) {
          A4 == (0 | A4) && (A4 |= 0);
          const n3 = e4[A4];
          t4[n3] = A4;
        }), t4;
      }));
    }, ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach(function(e3) {
      c.prototype[e3] = function() {
        const t3 = this._baseState;
        throw new Error(e3 + " not implemented for encoding: " + t3.enc);
      };
    }), i.forEach(function(e3) {
      c.prototype[e3] = function() {
        const t3 = this._baseState, A3 = Array.prototype.slice.call(arguments);
        return s(null === t3.tag), t3.tag = e3, this._useArgs(A3), this;
      };
    }), c.prototype.use = function(e3) {
      s(e3);
      const t3 = this._baseState;
      return s(null === t3.use), t3.use = e3, this;
    }, c.prototype.optional = function() {
      return this._baseState.optional = true, this;
    }, c.prototype.def = function(e3) {
      const t3 = this._baseState;
      return s(null === t3.default), t3.default = e3, t3.optional = true, this;
    }, c.prototype.explicit = function(e3) {
      const t3 = this._baseState;
      return s(null === t3.explicit && null === t3.implicit), t3.explicit = e3, this;
    }, c.prototype.implicit = function(e3) {
      const t3 = this._baseState;
      return s(null === t3.explicit && null === t3.implicit), t3.implicit = e3, this;
    }, c.prototype.obj = function() {
      const e3 = this._baseState, t3 = Array.prototype.slice.call(arguments);
      return e3.obj = true, 0 !== t3.length && this._useArgs(t3), this;
    }, c.prototype.key = function(e3) {
      const t3 = this._baseState;
      return s(null === t3.key), t3.key = e3, this;
    }, c.prototype.any = function() {
      return this._baseState.any = true, this;
    }, c.prototype.choice = function(e3) {
      const t3 = this._baseState;
      return s(null === t3.choice), t3.choice = e3, this._useArgs(Object.keys(e3).map(function(t4) {
        return e3[t4];
      })), this;
    }, c.prototype.contains = function(e3) {
      const t3 = this._baseState;
      return s(null === t3.use), t3.contains = e3, this;
    }, c.prototype._decode = function(e3, t3) {
      const A3 = this._baseState;
      if (null === A3.parent) return e3.wrapResult(A3.children[0]._decode(e3, t3));
      let n3, r3 = A3.default, s2 = true, i2 = null;
      if (null !== A3.key && (i2 = e3.enterKey(A3.key)), A3.optional) {
        let n4 = null;
        if (null !== A3.explicit ? n4 = A3.explicit : null !== A3.implicit ? n4 = A3.implicit : null !== A3.tag && (n4 = A3.tag), null !== n4 || A3.any) {
          if (s2 = this._peekTag(e3, n4, A3.any), e3.isError(s2)) return s2;
        } else {
          const n5 = e3.save();
          try {
            null === A3.choice ? this._decodeGeneric(A3.tag, e3, t3) : this._decodeChoice(e3, t3), s2 = true;
          } catch (e4) {
            s2 = false;
          }
          e3.restore(n5);
        }
      }
      if (A3.obj && s2 && (n3 = e3.enterObject()), s2) {
        if (null !== A3.explicit) {
          const t4 = this._decodeTag(e3, A3.explicit);
          if (e3.isError(t4)) return t4;
          e3 = t4;
        }
        const n4 = e3.offset;
        if (null === A3.use && null === A3.choice) {
          let t4;
          A3.any && (t4 = e3.save());
          const n5 = this._decodeTag(e3, null !== A3.implicit ? A3.implicit : A3.tag, A3.any);
          if (e3.isError(n5)) return n5;
          A3.any ? r3 = e3.raw(t4) : e3 = n5;
        }
        if (t3 && t3.track && null !== A3.tag && t3.track(e3.path(), n4, e3.length, "tagged"), t3 && t3.track && null !== A3.tag && t3.track(e3.path(), e3.offset, e3.length, "content"), A3.any || (r3 = null === A3.choice ? this._decodeGeneric(A3.tag, e3, t3) : this._decodeChoice(e3, t3)), e3.isError(r3)) return r3;
        if (A3.any || null !== A3.choice || null === A3.children || A3.children.forEach(function(A4) {
          A4._decode(e3, t3);
        }), A3.contains && ("octstr" === A3.tag || "bitstr" === A3.tag)) {
          const n5 = new o2(r3);
          r3 = this._getUse(A3.contains, e3._reporterState.obj)._decode(n5, t3);
        }
      }
      return A3.obj && s2 && (r3 = e3.leaveObject(n3)), null === A3.key || null === r3 && true !== s2 ? null !== i2 && e3.exitKey(i2) : e3.leaveKey(i2, A3.key, r3), r3;
    }, c.prototype._decodeGeneric = function(e3, t3, A3) {
      const n3 = this._baseState;
      return "seq" === e3 || "set" === e3 ? null : "seqof" === e3 || "setof" === e3 ? this._decodeList(t3, e3, n3.args[0], A3) : /str$/.test(e3) ? this._decodeStr(t3, e3, A3) : "objid" === e3 && n3.args ? this._decodeObjid(t3, n3.args[0], n3.args[1], A3) : "objid" === e3 ? this._decodeObjid(t3, null, null, A3) : "gentime" === e3 || "utctime" === e3 ? this._decodeTime(t3, e3, A3) : "null_" === e3 ? this._decodeNull(t3, A3) : "bool" === e3 ? this._decodeBool(t3, A3) : "objDesc" === e3 ? this._decodeStr(t3, e3, A3) : "int" === e3 || "enum" === e3 ? this._decodeInt(t3, n3.args && n3.args[0], A3) : null !== n3.use ? this._getUse(n3.use, t3._reporterState.obj)._decode(t3, A3) : t3.error("unknown tag: " + e3);
    }, c.prototype._getUse = function(e3, t3) {
      const A3 = this._baseState;
      return A3.useDecoder = this._use(e3, t3), s(null === A3.useDecoder._baseState.parent), A3.useDecoder = A3.useDecoder._baseState.children[0], A3.implicit !== A3.useDecoder._baseState.implicit && (A3.useDecoder = A3.useDecoder.clone(), A3.useDecoder._baseState.implicit = A3.implicit), A3.useDecoder;
    }, c.prototype._decodeChoice = function(e3, t3) {
      const A3 = this._baseState;
      let n3 = null, r3 = false;
      return Object.keys(A3.choice).some(function(o3) {
        const s2 = e3.save(), i2 = A3.choice[o3];
        try {
          const A4 = i2._decode(e3, t3);
          if (e3.isError(A4)) return false;
          n3 = { type: o3, value: A4 }, r3 = true;
        } catch (t4) {
          return e3.restore(s2), false;
        }
        return true;
      }, this), r3 ? n3 : e3.error("Choice not matched");
    }, c.prototype._createEncoderBuffer = function(e3) {
      return new r2(e3, this.reporter);
    }, c.prototype._encode = function(e3, t3, A3) {
      const n3 = this._baseState;
      if (null !== n3.default && n3.default === e3) return;
      const r3 = this._encodeValue(e3, t3, A3);
      return void 0 === r3 || this._skipDefault(r3, t3, A3) ? void 0 : r3;
    }, c.prototype._encodeValue = function(e3, t3, A3) {
      const r3 = this._baseState;
      if (null === r3.parent) return r3.children[0]._encode(e3, t3 || new n2());
      let o3 = null;
      if (this.reporter = t3, r3.optional && void 0 === e3) {
        if (null === r3.default) return;
        e3 = r3.default;
      }
      let s2 = null, i2 = false;
      if (r3.any) o3 = this._createEncoderBuffer(e3);
      else if (r3.choice) o3 = this._encodeChoice(e3, t3);
      else if (r3.contains) s2 = this._getUse(r3.contains, A3)._encode(e3, t3), i2 = true;
      else if (r3.children) s2 = r3.children.map(function(A4) {
        if ("null_" === A4._baseState.tag) return A4._encode(null, t3, e3);
        if (null === A4._baseState.key) return t3.error("Child should have a key");
        const n3 = t3.enterKey(A4._baseState.key);
        if ("object" != typeof e3) return t3.error("Child expected, but input is not object");
        const r4 = A4._encode(e3[A4._baseState.key], t3, e3);
        return t3.leaveKey(n3), r4;
      }, this).filter(function(e4) {
        return e4;
      }), s2 = this._createEncoderBuffer(s2);
      else if ("seqof" === r3.tag || "setof" === r3.tag) {
        if (!r3.args || 1 !== r3.args.length) return t3.error("Too many args for : " + r3.tag);
        if (!Array.isArray(e3)) return t3.error("seqof/setof, but data is not Array");
        const A4 = this.clone();
        A4._baseState.implicit = null, s2 = this._createEncoderBuffer(e3.map(function(A5) {
          const n3 = this._baseState;
          return this._getUse(n3.args[0], e3)._encode(A5, t3);
        }, A4));
      } else null !== r3.use ? o3 = this._getUse(r3.use, A3)._encode(e3, t3) : (s2 = this._encodePrimitive(r3.tag, e3), i2 = true);
      if (!r3.any && null === r3.choice) {
        const e4 = null !== r3.implicit ? r3.implicit : r3.tag, A4 = null === r3.implicit ? "universal" : "context";
        null === e4 ? null === r3.use && t3.error("Tag could be omitted only for .use()") : null === r3.use && (o3 = this._encodeComposite(e4, i2, A4, s2));
      }
      return null !== r3.explicit && (o3 = this._encodeComposite(r3.explicit, false, "context", o3)), o3;
    }, c.prototype._encodeChoice = function(e3, t3) {
      const A3 = this._baseState, n3 = A3.choice[e3.type];
      return n3 || s(false, e3.type + " not found in " + JSON.stringify(Object.keys(A3.choice))), n3._encode(e3.value, t3);
    }, c.prototype._encodePrimitive = function(e3, t3) {
      const A3 = this._baseState;
      if (/str$/.test(e3)) return this._encodeStr(t3, e3);
      if ("objid" === e3 && A3.args) return this._encodeObjid(t3, A3.reverseArgs[0], A3.args[1]);
      if ("objid" === e3) return this._encodeObjid(t3, null, null);
      if ("gentime" === e3 || "utctime" === e3) return this._encodeTime(t3, e3);
      if ("null_" === e3) return this._encodeNull();
      if ("int" === e3 || "enum" === e3) return this._encodeInt(t3, A3.args && A3.reverseArgs[0]);
      if ("bool" === e3) return this._encodeBool(t3);
      if ("objDesc" === e3) return this._encodeStr(t3, e3);
      throw new Error("Unsupported tag: " + e3);
    }, c.prototype._isNumstr = function(e3) {
      return /^[0-9 ]*$/.test(e3);
    }, c.prototype._isPrintstr = function(e3) {
      return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(e3);
    };
  }