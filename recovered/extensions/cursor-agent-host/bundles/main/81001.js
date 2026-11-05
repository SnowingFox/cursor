// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 81001 range:11682220..11685227
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
81001: (e, t, r) => {
    "use strict";
    r.d(t, { P: () => s, q: () => n });
    class n {
      constructor(e2) {
        if (e2.startsWith("file://")) {
          if (!this.isValidFileUrl(e2)) throw new Error(`Invalid file URL: ${e2}`);
          this.urlString = e2;
        } else {
          const t2 = this.resolvePath(e2);
          this.urlString = this.pathToFileUrl(t2);
        }
      }
      isValidFileUrl(e2) {
        try {
          return "file:" === new URL(e2).protocol;
        } catch {
          return false;
        }
      }
      resolvePath(e2) {
        if (e2.includes("\\") && (e2 = e2.replace(/\\/g, "/")), /^[a-zA-Z]:\//.test(e2) || /^\//.test(e2)) return e2;
        const t2 = e2.split("/"), r2 = [];
        for (let e3 = 0; e3 < t2.length; e3++) {
          const n2 = t2[e3];
          ".." === n2 ? r2.pop() : "." !== n2 && "" !== n2 && r2.push(n2);
        }
        return 0 === r2.length ? "." : `/${r2.join("/")}`;
      }
      pathToFileUrl(e2) {
        if (/^[a-zA-Z]:\//.test(e2)) {
          return `file:///${e2.charAt(0).toLowerCase()}:${e2.substring(2).replace(/\\/g, "/")}`;
        }
        e2.startsWith("/") || (e2 = `/${e2}`);
        return `file://${encodeURIComponent(e2).replace(/%2F/g, "/")}`;
      }
      fileUrlToPath(e2) {
        try {
          const t2 = new URL(e2);
          if (t2.pathname.startsWith("/") && /^\/[a-zA-Z]:\//.test(t2.pathname)) {
            const e3 = t2.pathname[1].toUpperCase();
            return `${e3}:${t2.pathname.substring(3)}`;
          }
          return decodeURIComponent(t2.pathname);
        } catch {
          throw new Error(`Invalid file URL format: ${e2}`);
        }
      }
      get fsPath() {
        return this.toPath();
      }
      static fromPath(e2) {
        return new n(e2);
      }
      static fromUrl(e2) {
        if (!e2.startsWith("file://")) throw new Error(`Expected file:// URL, got: ${e2}`);
        return new n(e2);
      }
      static fromString(e2) {
        return new n(e2);
      }
      toPath() {
        return this.fileUrlToPath(this.urlString);
      }
      toString() {
        return this.urlString;
      }
      serialize() {
        return this.toString();
      }
      toURL() {
        try {
          return new URL(this.urlString);
        } catch {
          throw new Error(`Invalid URL format: ${this.urlString}`);
        }
      }
      getFilename() {
        const e2 = this.toPath(), t2 = e2.includes("\\") ? "\\" : "/";
        return e2.split(t2).pop() || "";
      }
      getDirectory() {
        const e2 = this.toPath(), t2 = e2.includes("\\") ? "\\" : "/", r2 = e2.lastIndexOf(t2);
        return -1 === r2 ? e2 : e2.substring(0, r2);
      }
      equals(e2) {
        return this.urlString === e2.urlString;
      }
      toJSON() {
        return this.toString();
      }
    }
    const s = { isFileUrl: (e2) => e2.startsWith("file://"), pathToUrl: (e2) => new n(e2).toString(), urlToPath: (e2) => new n(e2).toPath() };
  }