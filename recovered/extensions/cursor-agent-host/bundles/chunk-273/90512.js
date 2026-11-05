// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/273.js sha256:918321c092763b0f5509b45d1560ac236164a596e0ab5a603460d95abe18903b
// module: 90512 range:75047..78640
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
90512: (e, t, i) => {
  var a = i(52421), n = i(14333), r = i(67676);
  function o(e2, t2, i2, a2, n2, r2, o2) {
    this.startMarker = e2, this.tags = t2, this.imageSize = i2, this.thumbnailOffset = a2, this.thumbnailLength = n2, this.thumbnailType = r2, this.app1Offset = o2;
  }
  function s(e2) {
    this.stream = e2, this.flags = { readBinaryTags: false, resolveTagNames: true, simplifyValues: true, imageSize: true, hidePointers: true, returnTags: true };
  }
  o.prototype = { hasThumbnail: function(e2) {
    return !(!this.thumbnailOffset || !this.thumbnailLength) && ("string" != typeof e2 || ("image/jpeg" === e2.toLowerCase().trim() ? 6 === this.thumbnailType : "image/tiff" === e2.toLowerCase().trim() && 1 === this.thumbnailType));
  }, getThumbnailOffset: function() {
    return this.app1Offset + 6 + this.thumbnailOffset;
  }, getThumbnailLength: function() {
    return this.thumbnailLength;
  }, getThumbnailBuffer: function() {
    return this._getThumbnailStream().nextBuffer(this.thumbnailLength);
  }, _getThumbnailStream: function() {
    return this.startMarker.openWithOffset(this.getThumbnailOffset());
  }, getImageSize: function() {
    return this.imageSize;
  }, getThumbnailSize: function() {
    var e2, t2 = this._getThumbnailStream();
    return a.parseSections(t2, function(t3, i2) {
      "SOF" === a.getSectionName(t3).name && (e2 = a.getSizeFromSOFSection(i2));
    }), e2;
  } }, s.prototype = { enableBinaryFields: function(e2) {
    return this.flags.readBinaryTags = !!e2, this;
  }, enablePointers: function(e2) {
    return this.flags.hidePointers = !e2, this;
  }, enableTagNames: function(e2) {
    return this.flags.resolveTagNames = !!e2, this;
  }, enableImageSize: function(e2) {
    return this.flags.imageSize = !!e2, this;
  }, enableReturnTags: function(e2) {
    return this.flags.returnTags = !!e2, this;
  }, enableSimpleValues: function(e2) {
    return this.flags.simplifyValues = !!e2, this;
  }, parse: function() {
    var e2, t2, s2, f, p, m, l, c, u, d = this.stream.mark(), h = d.openWithOffset(0), g = this.flags;
    return g.resolveTagNames && (l = i(4015)), g.resolveTagNames ? (e2 = {}, c = function(t3) {
      return e2[t3.name];
    }, u = function(t3, i2) {
      e2[t3.name] = i2;
    }) : (e2 = [], c = function(t3) {
      var i2;
      for (i2 = 0; i2 < e2.length; ++i2) if (e2[i2].type === t3.type && e2[i2].section === t3.section) return e2.value;
    }, u = function(t3, i2) {
      var a2;
      for (a2 = 0; a2 < e2.length; ++a2) if (e2[a2].type === t3.type && e2[a2].section === t3.section) return void (e2.value = i2);
    }), a.parseSections(h, function(i2, o2) {
      var c2 = o2.offsetFrom(d);
      225 === i2 ? n.parseTags(o2, function(t3, i3, a2, o3) {
        if (g.readBinaryTags || 7 !== o3) {
          if (513 === i3) {
            if (s2 = a2[0], g.hidePointers) return;
          } else if (514 === i3) {
            if (f = a2[0], g.hidePointers) return;
          } else if (259 === i3 && (p = a2[0], g.hidePointers)) return;
          if (g.returnTags) if (g.simplifyValues && (a2 = r.simplifyValue(a2, o3)), g.resolveTagNames) {
            var m2 = (t3 === n.GPSIFD ? l.gps : l.exif)[i3];
            m2 || (m2 = l.exif[i3]), e2.hasOwnProperty(m2) || (e2[m2] = a2);
          } else e2.push({ section: t3, type: i3, value: a2 });
        }
      }) && (m = c2) : g.imageSize && "SOF" === a.getSectionName(i2).name && (t2 = a.getSizeFromSOFSection(o2));
    }), g.simplifyValues && (r.castDegreeValues(c, u), r.castDateValues(c, u)), new o(d, e2, t2, s2, f, p, m);
  } }, e.exports = s;
}