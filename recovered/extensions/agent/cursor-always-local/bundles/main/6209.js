// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6209 range:2830999..2834635
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6209: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { G0: () => o2, G4: () => c, R4: () => u, SR: () => l, ih: () => a });
    var n2 = r2(6038), s2 = r2(8592);
    class i2 extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class o2 extends i2 {
      constructor(t3) {
        super(), this.apiKey = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new o2().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new o2().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new o2().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(o2, t3, e3);
      }
      static $() {
        return ["ApiKeyCredentials|1 api_key 9|2 base_url 9?"];
      }
    }
    class a extends i2 {
      constructor(t3) {
        super(), this.apiKey = "", this.baseUrl = "", this.deployment = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new a().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new a().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new a().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(a, t3, e3);
      }
      static $() {
        return ["AzureCredentials|1 api_key 9|2 base_url 9|3 deployment 9"];
      }
    }
    class u extends i2 {
      constructor(t3) {
        super(), this.accessKey = "", this.secretKey = "", this.region = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new u().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new u().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new u().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(u, t3, e3);
      }
      static $() {
        return ["BedrockCredentials|1 access_key 9|2 secret_key 9|3 region 9|4 session_token 9?"];
      }
    }
    class c extends i2 {
      constructor(t3) {
        super(), this.modelId = "", this.maxMode = false, this.parameters = [], this.credentials = { case: void 0 }, this.builtInModel = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new c().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new c().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new c().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(c, t3, e3);
      }
      static $() {
        return ["RequestedModel|1 model_id 9|2 max_mode 8|3 parameters #0*|4 api_key_credentials #1 credentials|5 azure_credentials #2 credentials|6 bedrock_credentials #3 credentials|7 built_in_model 8", l, o2, a, u];
      }
    }
    class l extends i2 {
      constructor(t3) {
        super(), this.id = "", this.value = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new l().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new l().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new l().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(l, t3, e3);
      }
      static $() {
        return ["RequestedModel.ModelParameterValue|1 id 9|2 value 9"];
      }
    }
  }