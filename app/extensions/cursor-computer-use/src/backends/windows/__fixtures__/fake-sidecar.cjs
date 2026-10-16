"use strict";
const { randomUUID } = require("node:crypto");
const fs = require("node:fs");
const net = require("node:net");
const [socketPath, tokenPath, optionsJson] = process.argv.slice(2);
const options = optionsJson ? JSON.parse(optionsJson) : {};
let boundToken;
try {
  boundToken = fs.readFileSync(tokenPath, "utf8").trim();
} catch {
  process.stderr.write(
    "cursor-cua-sidecar: refusing to listen without a launch binding: no token file\n"
  );
  process.exit(1);
}
if (options.squatted) {
  process.stderr.write(
    `cursor-cua-sidecar: failed to create pipe ${socketPath} (possible squatter): name in use
`
  );
  process.exit(1);
}
const reportedPid = typeof options.reportPid === "number" ? options.reportPid : process.pid;
if (typeof options.exitDelayMs === "number") {
  process.on("SIGTERM", () => {
    setTimeout(() => process.exit(0), options.exitDelayMs);
  });
}
const denyAfter = typeof options.denyAfter === "number" ? options.denyAfter : Infinity;
let admittedCount = 0;
const server = net.createServer((connection) => {
  let buffered = "";
  let admitted = false;
  connection.setEncoding("utf8");
  connection.on("data", (chunk) => {
    buffered += chunk;
    let newlineIndex = buffered.indexOf("\n");
    while (newlineIndex >= 0) {
      const line = buffered.slice(0, newlineIndex);
      buffered = buffered.slice(newlineIndex + 1);
      newlineIndex = buffered.indexOf("\n");
      if (!admitted) {
        if (!acceptHandshake(connection, line)) {
          return;
        }
        admitted = true;
        continue;
      }
      handleRpc(connection, line);
    }
  });
  connection.on("error", () => {
  });
});
function acceptHandshake(connection, line) {
  process.stderr.write(`cursor-cua-sidecar: handshake line ${line.length}b
`);
  let frame;
  try {
    frame = JSON.parse(line);
  } catch {
    return deny(connection);
  }
  if (options.rejectAll || admittedCount >= denyAfter || frame.cua !== "hello" || frame.version !== 1 || typeof frame.token !== "string" || frame.token !== boundToken) {
    return deny(connection);
  }
  admittedCount += 1;
  connection.write(
    `${JSON.stringify({ cua: "welcome", version: 1, pid: reportedPid })}
`
  );
  return true;
}
function deny(connection) {
  connection.write(
    `${JSON.stringify({ cua: "denied", reason: "handshake rejected" })}
`
  );
  connection.end();
  return false;
}
function handleRpc(connection, line) {
  let request;
  try {
    request = JSON.parse(line);
  } catch {
    connection.write(`${JSON.stringify({ id: null, error: "bad json" })}
`);
    return;
  }
  if (typeof options.requestLog === "string") {
    fs.appendFileSync(
      options.requestLog,
      `${JSON.stringify({
        at: Date.now(),
        method: request.method,
        name: request.name,
        timeoutSeconds: request.timeoutSeconds,
        deadlineEpochSeconds: request.deadlineEpochSeconds
      })}
`
    );
  }
  if (request.method === "ping") {
    connection.write(`${JSON.stringify({ id: request.id, ok: true })}
`);
    return;
  }
  if (request.method === "control/start" || request.method === "control/release") {
    handleLease(connection, request);
    return;
  }
  process.stderr.write(
    `cursor-cua-sidecar: tools/call ${String(request.name)}
`
  );
  if (options.dropAfterRequest) {
    connection.destroy();
    return;
  }
  if (options.garbageAfterRequest) {
    connection.write("this is not a response\n");
    return;
  }
  if (typeof options.oversizedAfterRequest === "number") {
    connection.write(Buffer.alloc(options.oversizedAfterRequest, 120));
    return;
  }
  if (options.envelope) {
    connection.write(
      `${JSON.stringify({
        id: request.id,
        error: options.envelope.message,
        errorCode: options.envelope.code,
        escalation: {
          recommended: options.envelope.recommended ?? "retry",
          reason: options.envelope.reason ?? "fixture reason"
        }
      })}
`
    );
    return;
  }
  if (options.refuse) {
    connection.write(
      `${JSON.stringify({
        id: request.id,
        result: {
          message: options.refuse.message,
          structuredContent: {
            tool: request.name,
            status: "error",
            message: options.refuse.message,
            code: options.refuse.code,
            escalation: {
              recommended: options.refuse.recommended ?? "ask_user",
              reason: options.refuse.reason ?? "fixture reason"
            },
            error: { type: "operation_failed" }
          },
          isError: true
        }
      })}
`
    );
    return;
  }
  if (typeof options.legacyError === "string") {
    connection.write(
      `${JSON.stringify({
        id: request.id,
        result: { message: options.legacyError, isError: true }
      })}
`
    );
    return;
  }
  connection.write(
    `${JSON.stringify({
      id: request.id,
      result: {
        message: JSON.stringify({
          name: request.name,
          arguments: request.arguments,
          mode: request.mode
        }),
        isError: false
      }
    })}
`
  );
}
function handleLease(connection, request) {
  if (typeof options.leaseLog === "string") {
    fs.appendFileSync(options.leaseLog, `${JSON.stringify(request)}
`);
  }
  if (options.noLease) {
    connection.write(
      `${JSON.stringify({
        id: request.id,
        error: `Unknown RPC method: ${request.method}`,
        errorCode: "unsupported_request",
        escalation: {
          recommended: "ask_user",
          reason: "The client sent a request this sidecar cannot serve."
        }
      })}
`
    );
    return;
  }
  if (request.method === "control/start") {
    connection.write(
      `${JSON.stringify({
        id: request.id,
        ok: true,
        sessionId: randomUUID()
      })}
`
    );
    return;
  }
  connection.write(`${JSON.stringify({ id: request.id, ok: true })}
`);
}
fs.rmSync(socketPath, { force: true });
server.listen(socketPath, () => {
  process.stderr.write(`cursor-cua-sidecar: listening on ${socketPath}
`);
});
server.on("error", (error) => {
  process.stderr.write(`cursor-cua-sidecar: accept failed: ${error.message}
`);
  process.exit(1);
});
