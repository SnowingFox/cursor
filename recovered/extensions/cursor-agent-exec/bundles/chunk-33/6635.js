// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/33.js sha256:0578e78d5607b8b353029c5d245d24e3c43207abe1be65b2efe4aaae28326339
// module: 6635 range:71..5182
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6635: (e, t, n) => {
  n.r(t), n.d(t, { SignatureV4MultiRegion: () => u, signatureV4CrtContainer: () => d });
  var i = n(84329);
  n(32022), n(70542);
  const o = "X-Amz-S3session-Token", r = o.toLowerCase();
  class s extends i.B {
    async signWithCredentials(e2, t2, n2) {
      const i2 = a(t2);
      e2.headers[r] = t2.sessionToken;
      return c(this, i2), this.signRequest(e2, n2 ?? {});
    }
    async presignWithCredentials(e2, t2, n2) {
      const i2 = a(t2);
      delete e2.headers[r], e2.headers[o] = t2.sessionToken, e2.query = e2.query ?? {}, e2.query[o] = t2.sessionToken;
      return c(this, i2), this.presign(e2, n2);
    }
  }
  function a(e2) {
    return { accessKeyId: e2.accessKeyId, secretAccessKey: e2.secretAccessKey, expiration: e2.expiration };
  }
  function c(e2, t2) {
    const n2 = setTimeout(() => {
      throw new Error("SignatureV4S3Express credential override was created but not called.");
    }, 10), i2 = e2.credentialProvider;
    e2.credentialProvider = () => (clearTimeout(n2), e2.credentialProvider = i2, Promise.resolve(t2));
  }
  var l = n(16936);
  const d = { CrtSignerV4: null };
  class u {
    sigv4aSigner;
    sigv4Signer;
    signerOptions;
    static sigv4aDependency() {
      return "function" == typeof d.CrtSignerV4 ? "crt" : "function" == typeof l.d.SignatureV4a ? "js" : "none";
    }
    constructor(e2) {
      this.sigv4Signer = new s(e2), this.signerOptions = e2;
    }
    async sign(e2, t2 = {}) {
      return "*" === t2.signingRegion ? this.getSigv4aSigner().sign(e2, t2) : this.sigv4Signer.sign(e2, t2);
    }
    async signWithCredentials(e2, t2, n2 = {}) {
      if ("*" === n2.signingRegion) {
        const i2 = this.getSigv4aSigner(), o2 = d.CrtSignerV4;
        if (o2 && i2 instanceof o2) return i2.signWithCredentials(e2, t2, n2);
        throw new Error(`signWithCredentials with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
      }
      return this.sigv4Signer.signWithCredentials(e2, t2, n2);
    }
    async presign(e2, t2 = {}) {
      if ("*" === t2.signingRegion) {
        const n2 = this.getSigv4aSigner(), i2 = d.CrtSignerV4;
        if (i2 && n2 instanceof i2) return n2.presign(e2, t2);
        throw new Error(`presign with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
      }
      return this.sigv4Signer.presign(e2, t2);
    }
    async presignWithCredentials(e2, t2, n2 = {}) {
      if ("*" === n2.signingRegion) throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
      return this.sigv4Signer.presignWithCredentials(e2, t2, n2);
    }
    getSigv4aSigner() {
      if (!this.sigv4aSigner) {
        const e2 = d.CrtSignerV4, t2 = l.d.SignatureV4a;
        if ("node" === this.signerOptions.runtime) {
          if (!e2 && !t2) throw new Error("Neither CRT nor JS SigV4a implementation is available. Please load either @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
          if (e2 && "function" == typeof e2) this.sigv4aSigner = new e2({ ...this.signerOptions, signingAlgorithm: 1 });
          else {
            if (!t2 || "function" != typeof t2) throw new Error("Available SigV4a implementation is not a valid constructor. Please ensure you've properly imported @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a.For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
            this.sigv4aSigner = new t2({ ...this.signerOptions });
          }
        } else {
          if (!t2 || "function" != typeof t2) throw new Error("JS SigV4a implementation is not available or not a valid constructor. Please check whether you have installed the @aws-sdk/signature-v4a package explicitly. The CRT implementation is not available for browsers. You must also register the package by calling [require('@aws-sdk/signature-v4a');] or an ESM equivalent such as [import '@aws-sdk/signature-v4a';]. For more information please go to https://github.com/aws/aws-sdk-js-v3#using-javascript-non-crt-implementation-of-sigv4a");
          this.sigv4aSigner = new t2({ ...this.signerOptions });
        }
      }
      return this.sigv4aSigner;
    }
  }
}