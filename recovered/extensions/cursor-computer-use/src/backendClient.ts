// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/src/backendClient.ts sha256:15442791672c29b15e2c1e979094a09e79c7dd1d50955be0cc184c7f42bcd785
// module: (adopted file)
// basis: shipped-source confidence: A
// method: adopted-source
// run: ext-p0 2026-11-05T10:09:48.889Z

import { randomUUID } from 'node:crypto';
import { createPromiseClient, type Interceptor, type PromiseClient, type Transport } from '@connectrpc/connect';
import { compressionGzip, createConnectTransport } from '@connectrpc/connect-node';
import * as vscode from 'vscode';
import { AiService } from 'proto/aiserver/v1/aiserver_connectweb.js';

/** The local backend's self-signed certificate is only accepted for local hosts. */
function isLocalBackend(baseUrl: string): boolean {
	const host = new URL(baseUrl).hostname;
	return host === 'localhost' || host === '127.0.0.1' || host.endsWith('.lclhst.build'); // pragma: allowlist secret
}

/**
 * `AiService` over the signed-in user's Cursor credentials. Creds and token
 * are read at each call: this extension calls the backend only from tool
 * calls, long after sign-in, so there is no startup race to wait out. One
 * client per backend URL.
 */
export class BackendClientService {
	private aiClient: { baseUrl: string; client: PromiseClient<typeof AiService> } | undefined;

	async getAIClient(): Promise<PromiseClient<typeof AiService>> {
		const cursorCreds = vscode.cursor.getCursorCreds();
		if (cursorCreds === undefined || !vscode.cursor.getCursorAuthToken()) {
			throw new Error('Sign in to Cursor to use this tool.');
		}
		if (this.aiClient?.baseUrl !== cursorCreds.backendUrl) {
			const transport = this.createTransport({ baseUrl: cursorCreds.backendUrl });
			this.aiClient = { baseUrl: cursorCreds.backendUrl, client: createPromiseClient(AiService, transport) };
		}
		return this.aiClient.client;
	}

	private createTransport(args: { baseUrl: string }): Transport {
		const bearerTokenInterceptor: Interceptor = next => async req => {
			req.header.set('Authorization', `Bearer ${vscode.cursor.getCursorAuthToken()}`);
			return await next(req);
		};
		const addHeaders: Interceptor = next => async req => {
			vscode.cursor.getAllRequestHeadersExceptAccessToken({ req, backupRequestId: randomUUID() });
			return await next(req);
		};
		return createConnectTransport({
			httpVersion: '1.1',
			baseUrl: args.baseUrl,
			useBinaryFormat: true,
			interceptors: [bearerTokenInterceptor, addHeaders],
			sendCompression: compressionGzip,
			acceptCompression: [compressionGzip],
			nodeOptions: isLocalBackend(args.baseUrl) ? { rejectUnauthorized: false } : {},
		});
	}
}
