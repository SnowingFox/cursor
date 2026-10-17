/**
 * The Subscriptions provider's requests to the extension host, which runs the
 * CLIProxyAPI sidecar (extensions/cursor-agent-exec/src/subscriptions.ts).
 */
import type { LocalInferenceService } from '../../../../glass/host/cursorHost.js';
import type { CustomProvider, ListedModel } from '../common/localMode.js';
import { sidecarConfig } from '../common/providers.js';
import type {
	AccountPatch,
	AccountType,
	LoginStart,
	LoginStatus,
	ProxyCheck,
	Quota,
	SubscriptionsRequest,
	SubscriptionsStatus,
} from '../common/subscriptions.js';

/** The app's user data folder, from the window configuration the preload exposes. */
export function userDataDir(): string {
	const dir = (globalThis as any).vscode?.context?.configuration?.()?.userDataDir;
	if (typeof dir !== 'string' || dir === '') {
		throw new Error('The user data folder is unknown: the window configuration is missing.');
	}
	return dir;
}

type DistributiveOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;
type Body = DistributiveOmit<SubscriptionsRequest, 'sidecar'>;

export interface SubscriptionsClient {
	status(): Promise<SubscriptionsStatus>;
	login(type: AccountType): Promise<LoginStart>;
	loginStatus(state: string): Promise<LoginStatus>;
	loginCallback(state: string, input: string): Promise<LoginStatus>;
	loginCancel(state: string): Promise<LoginStatus>;
	update(name: string, patch: AccountPatch): Promise<SubscriptionsStatus>;
	remove(name: string): Promise<SubscriptionsStatus>;
	resetCooldown(name: string): Promise<SubscriptionsStatus>;
	quota(name: string): Promise<Quota>;
	models(): Promise<ListedModel[]>;
	checkProxy(proxyUrl: string, type: AccountType): Promise<ProxyCheck>;
}

/** Requests go out with the provider as currently edited (port, key, proxy, routing), saved or not. */
export function subscriptionsClient(
	inference: LocalInferenceService,
	provider: Pick<CustomProvider, 'port' | 'apiKey' | 'strategy' | 'proxyUrl' | 'routing'>,
): SubscriptionsClient {
	const call = <T>(body: Body): Promise<T> =>
		inference.fetchLocalProviderModels({
			cursorLocalSubscriptions: { ...body, sidecar: sidecarConfig(provider, userDataDir()) },
		}) as Promise<T>;
	return {
		status: () => call({ op: 'status' }),
		login: (type) => call({ op: 'login', type }),
		loginStatus: (state) => call({ op: 'login-status', state }),
		loginCallback: (state, input) => call({ op: 'login-callback', state, input }),
		loginCancel: (state) => call({ op: 'login-cancel', state }),
		update: (name, patch) => call({ op: 'update', name, patch }),
		remove: (name) => call({ op: 'remove', name }),
		resetCooldown: (name) => call({ op: 'reset-cooldown', name }),
		quota: (name) => call({ op: 'quota', name }),
		models: async () => {
			const r = await call<{ cursorLocalModels?: ListedModel[] }>({ op: 'models' });
			if (!Array.isArray(r?.cursorLocalModels)) {
				throw new Error('the agent runtime did not return a model list');
			}
			return r.cursorLocalModels;
		},
		checkProxy: (proxyUrl, type) => call({ op: 'check-proxy', proxyUrl, type }),
	};
}
