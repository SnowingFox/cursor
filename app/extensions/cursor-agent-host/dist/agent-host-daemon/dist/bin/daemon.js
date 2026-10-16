#!/usr/bin/env node
import { runDaemonProcess } from "../run-process.js";
const enteredAtMs = performance.now();
process.stderr.write(`agent-host-daemon entered at ${enteredAtMs.toFixed(1)}ms
`);
void runDaemonProcess(process.argv.slice(2)).then((exitCode) => {
  if (exitCode !== 0) {
    process.exit(exitCode);
  }
});
