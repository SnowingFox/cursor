/**
 * `stopChild` is teardown's only way to end a sidecar, and a rejection from it
 * used to poison the retirement chain. The chain now guards against that, so
 * this file pins the other half directly: `stopChild` must be total.
 */

import { spawn, type ChildProcess } from "node:child_process";
import { afterEach, describe, expect, it } from "vitest";
import { stopChild } from "./transport";

describe("stopChild", () => {
	let children: ChildProcess[] = [];

	afterEach(() => {
		for (const child of children) {
			try {
				child.kill("SIGKILL");
			} catch {
				// Already reaped.
			}
		}
		children = [];
	});

	function livingChild(): ChildProcess {
		const child = spawn(process.execPath, ["-e", "setInterval(() => {}, 1000)"], {
			stdio: ["ignore", "ignore", "ignore"],
		});
		children.push(child);
		return child;
	}

	it("stops a living child and reports the exit", async () => {
		const child = livingChild();
		await expect(stopChild(child)).resolves.toBe(true);
		expect(child.exitCode !== null || child.signalCode !== null).toBe(true);
	});

	it("resolves rather than rejecting when kill() throws", async () => {
		// The timer handles used to be declared after the `try`, so this catch
		// path read them in the temporal dead zone; the ReferenceError escaped
		// the promise executor and `stopChild` returned a rejected promise.
		// Node throws here on UV_EINVAL/UV_ENOSYS, and when a second kill finds
		// no `error` listener left on the child.
		const child = livingChild();
		const real = child.kill.bind(child);
		child.kill = ((signal?: NodeJS.Signals) =>
			signal === undefined
				? (() => {
					throw new Error("kill EPERM");
				})()
				: real(signal)) as typeof child.kill;

		// `false`, not a throw and not a claimed exit: nothing was signalled,
		// so the caller must not be told the child is gone.
		await expect(stopChild(child)).resolves.toBe(false);
	});

	it("is a no-op for a child that has already exited", async () => {
		const child = livingChild();
		await expect(stopChild(child)).resolves.toBe(true);
		await expect(stopChild(child)).resolves.toBe(true);
	});
});
