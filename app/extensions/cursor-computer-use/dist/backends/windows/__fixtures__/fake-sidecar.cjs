"use strict";
const { randomUUID } = require("node:crypto"), fs = require("node:fs"), net = require("node:net"), [socketPath, tokenPath, optionsJson] = process.argv.slice(2), options = optionsJson ? JSON.parse(optionsJson) : {};
let boundToken;
try {
  boundToken = fs.readFileSync(tokenPath, "utf8").trim();
} catch {
  process.stderr.write("cursor-cua-sidecar: refusing to listen without a launch binding: no token file\n"), process.exit(1);
}
options.squatted && (process.stderr.write(`cursor-cua-sidecar: failed to create pipe ${socketPath} (possible squatter): name in use
`), process.exit(1));
const reportedPid = "number" == typeof options.reportPid ? options.reportPid : process.pid;
"number" == typeof options.exitDelayMs && process.on("SIGTERM", () => {
  setTimeout(() => process.exit(0), options.exitDelayMs);
});
const denyAfter = "number" == typeof options.denyAfter ? options.denyAfter : 1 / 0;
let admittedCount = 0;
const server = net.createServer((e) => {
  let o = "", t = false;
  e.setEncoding("utf8"), e.on("data", (r) => {
    o += r;
    let s = o.indexOf("\n");
    for (; s >= 0; ) {
      const r2 = o.slice(0, s);
      if (o = o.slice(s + 1), s = o.indexOf("\n"), t) handleRpc(e, r2);
      else {
        if (!acceptHandshake(e, r2)) return;
        t = true;
      }
    }
  }), e.on("error", () => {
  });
});
function acceptHandshake(e, o) {
  let t;
  process.stderr.write(`cursor-cua-sidecar: handshake line ${o.length}b
`);
  try {
    t = JSON.parse(o);
  } catch {
    return deny(e);
  }
  return options.rejectAll || admittedCount >= denyAfter || "hello" !== t.cua || 1 !== t.version || "string" != typeof t.token || t.token !== boundToken ? deny(e) : (admittedCount += 1, e.write(`${JSON.stringify({ cua: "welcome", version: 1, pid: reportedPid })}
`), true);
}
function deny(e) {
  return e.write(`${JSON.stringify({ cua: "denied", reason: "handshake rejected" })}
`), e.end(), false;
}
function handleRpc(e, o) {
  let t;
  try {
    t = JSON.parse(o);
  } catch {
    return void e.write(`${JSON.stringify({ id: null, error: "bad json" })}
`);
  }
  "string" == typeof options.requestLog && fs.appendFileSync(options.requestLog, `${JSON.stringify({ at: Date.now(), method: t.method, name: t.name, timeoutSeconds: t.timeoutSeconds, deadlineEpochSeconds: t.deadlineEpochSeconds })}
`), "ping" !== t.method ? "control/start" !== t.method && "control/release" !== t.method ? (process.stderr.write(`cursor-cua-sidecar: tools/call ${String(t.name)}
`), options.dropAfterRequest ? e.destroy() : options.garbageAfterRequest ? e.write("this is not a response\n") : "number" != typeof options.oversizedAfterRequest ? options.envelope ? e.write(`${JSON.stringify({ id: t.id, error: options.envelope.message, errorCode: options.envelope.code, escalation: { recommended: options.envelope.recommended ?? "retry", reason: options.envelope.reason ?? "fixture reason" } })}
`) : options.refuse ? e.write(`${JSON.stringify({ id: t.id, result: { message: options.refuse.message, structuredContent: { tool: t.name, status: "error", message: options.refuse.message, code: options.refuse.code, escalation: { recommended: options.refuse.recommended ?? "ask_user", reason: options.refuse.reason ?? "fixture reason" }, error: { type: "operation_failed" } }, isError: true } })}
`) : "string" != typeof options.legacyError ? e.write(`${JSON.stringify({ id: t.id, result: { message: JSON.stringify({ name: t.name, arguments: t.arguments, mode: t.mode }), isError: false } })}
`) : e.write(`${JSON.stringify({ id: t.id, result: { message: options.legacyError, isError: true } })}
`) : e.write(Buffer.alloc(options.oversizedAfterRequest, 120))) : handleLease(e, t) : e.write(`${JSON.stringify({ id: t.id, ok: true })}
`);
}
function handleLease(e, o) {
  "string" == typeof options.leaseLog && fs.appendFileSync(options.leaseLog, `${JSON.stringify(o)}
`), options.noLease ? e.write(`${JSON.stringify({ id: o.id, error: `Unknown RPC method: ${o.method}`, errorCode: "unsupported_request", escalation: { recommended: "ask_user", reason: "The client sent a request this sidecar cannot serve." } })}
`) : "control/start" !== o.method ? e.write(`${JSON.stringify({ id: o.id, ok: true })}
`) : e.write(`${JSON.stringify({ id: o.id, ok: true, sessionId: randomUUID() })}
`);
}
fs.rmSync(socketPath, { force: true }), server.listen(socketPath, () => {
  process.stderr.write(`cursor-cua-sidecar: listening on ${socketPath}
`);
}), server.on("error", (e) => {
  process.stderr.write(`cursor-cua-sidecar: accept failed: ${e.message}
`), process.exit(1);
});
