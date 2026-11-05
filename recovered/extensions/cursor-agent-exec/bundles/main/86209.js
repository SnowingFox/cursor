// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 86209 range:11011582..11015185
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
86209: (e, t, r) => {
    "use strict";
    r.d(t, { G0: () => i, G4: () => l, R4: () => c, SR: () => u, ih: () => a });
    var n = r(36038), s = r(8592);
    class o extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class i extends o {
      constructor(e2) {
        super(), this.apiKey = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new i().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new i().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new i().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(i, e2, t2);
      }
      static $() {
        return ["ApiKeyCredentials|1 api_key 9|2 base_url 9?"];
      }
    }
    class a extends o {
      constructor(e2) {
        super(), this.apiKey = "", this.baseUrl = "", this.deployment = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new a().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new a().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new a().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(a, e2, t2);
      }
      static $() {
        return ["AzureCredentials|1 api_key 9|2 base_url 9|3 deployment 9"];
      }
    }
    class c extends o {
      constructor(e2) {
        super(), this.accessKey = "", this.secretKey = "", this.region = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new c().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new c().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new c().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(c, e2, t2);
      }
      static $() {
        return ["BedrockCredentials|1 access_key 9|2 secret_key 9|3 region 9|4 session_token 9?"];
      }
    }
    class l extends o {
      constructor(e2) {
        super(), this.modelId = "", this.maxMode = false, this.parameters = [], this.credentials = { case: void 0 }, this.builtInModel = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new l().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new l().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new l().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(l, e2, t2);
      }
      static $() {
        return ["RequestedModel|1 model_id 9|2 max_mode 8|3 parameters #0*|4 api_key_credentials #1 credentials|5 azure_credentials #2 credentials|6 bedrock_credentials #3 credentials|7 built_in_model 8", u, i, a, c];
      }
    }
    class u extends o {
      constructor(e2) {
        super(), this.id = "", this.value = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new u().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new u().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new u().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(u, e2, t2);
      }
      static $() {
        return ["RequestedModel.ModelParameterValue|1 id 9|2 value 9"];
      }
    }
  }