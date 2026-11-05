// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 34175 range:2921469..2926541
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34175: (e, t, r) => {
    "use strict";
    r.d(t, { E$: () => u, I0: () => c, Is: () => d, Or: () => a, UC: () => l, U_: () => p, gd: () => i });
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
        super(), this.name = "", this.providerIdentifier = "", this.toolName = "", this.description = "", n.proto3.util.initPartial(e2, this);
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
        return ["McpToolDefinition|1 name 9|4 provider_identifier 9|5 tool_name 9|2 description 9|3 input_schema #0|6 input_schema_json 9?|7 output_schema_json 9?|8 annotations_json 9?|9 meta_json 9?", n.Value];
      }
    }
    class a extends o {
      constructor(e2) {
        super(), this.mcpTools = [], n.proto3.util.initPartial(e2, this);
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
        return ["McpTools|1 mcp_tools #0*", i];
      }
    }
    class c extends o {
      constructor(e2) {
        super(), this.serverName = "", this.instructions = "", this.serverIdentifier = "", n.proto3.util.initPartial(e2, this);
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
        return ["McpInstructions|1 server_name 9|2 instructions 9|3 server_identifier 9"];
      }
    }
    class l extends o {
      constructor(e2) {
        super(), this.serverName = "", this.serverIdentifier = "", this.tools = [], n.proto3.util.initPartial(e2, this);
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
        return ["McpDescriptor|1 server_name 9|2 server_identifier 9|3 folder_path 9?|4 server_use_instructions 9?|5 tools #0*|7 plugin 9?|8 marketplace 9?|9 plugin_db_id 9?|10 marketplace_id 9?", u];
      }
    }
    class u extends o {
      constructor(e2) {
        super(), this.toolName = "", n.proto3.util.initPartial(e2, this);
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
        return ["McpToolDescriptor|1 tool_name 9|2 definition_path 9?|3 description 9?|4 input_schema #0?|5 input_schema_json 9?|6 annotations_json 9?", n.Value];
      }
    }
    class d extends o {
      constructor(e2) {
        super(), this.enabled = false, this.workspaceProjectDir = "", this.mcpDescriptors = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new d().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new d().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new d().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(d, e2, t2);
      }
      static $() {
        return ["McpFileSystemOptions|1 enabled 8|2 workspace_project_dir 9|3 mcp_descriptors #0*", l];
      }
    }
    class p extends o {
      constructor(e2) {
        super(), this.enabled = false, this.mcpDescriptors = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new p().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new p().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new p().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(p, e2, t2);
      }
      static $() {
        return ["McpMetaToolOptions|1 enabled 8|2 mcp_descriptors #0*", l];
      }
    }
  }