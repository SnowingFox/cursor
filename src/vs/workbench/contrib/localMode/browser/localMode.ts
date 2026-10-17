/**
 * Entry point of local mode in the agent window.
 *
 * Loaded by the glass bundle's host loader (build/patches/inject/glass-host.js):
 * in production from app/out/vs/workbench/contrib/localMode/browser/localMode.js,
 * under `bun run dev` straight from the Vite dev server. Registering the
 * implementation (again, on every hot update) swaps what the bundle's patch
 * sites call and re-renders the mounted views.
 */
import { cursorHost, type LocalModeImpl, type RequestedModel } from '../../../../glass/host/cursorHost.js';
import { sampleUsage } from '../common/sampleUsage.js';
import { CustomProvidersSettings } from './components/CustomProvidersSettings.js';
import { DevTool } from './components/DevTool.js';
import { ThinkingDetails, TurnDetails, TurnStatusSuffix } from './components/TurnStatus.js';
import { UsagePage } from './components/UsagePage.js';
import styles from './localMode.css?inline';
import { refreshModels } from './modelCatalog.js';
import { inferenceConfig, routeTurn } from './turnRouting.js';
import * as turnStats from './turnStats.js';
import { addUsageRecords, clearUsage, type TurnContext, usageBegin, usageUpdate } from './usageStore.js';

const STYLE_ID = 'cursor-local-mode-styles';

function installStyles(): void {
	let style = document.getElementById(STYLE_ID);
	if (style === null) {
		style = document.createElement('style');
		style.id = STYLE_ID;
		document.head.append(style);
	}
	style.textContent = styles;
}

export const impl = {
	views: {
		CustomProvidersSettings,
		DevTool,
		TurnDetails,
		TurnStatusSuffix,
		ThinkingDetails,
		UsagePage,
	},
	refreshModels,
	routeTurn,
	inferenceConfig,
	turnBegin(
		conversationId: string,
		action: Parameters<typeof turnStats.turnBegin>[1],
		requestedModel: RequestedModel | undefined,
		context?: TurnContext,
	): string | undefined {
		const key = turnStats.turnBegin(conversationId, action, requestedModel);
		usageBegin(key, conversationId, action, requestedModel, context);
		return key;
	},
	turnUpdate(key: string | undefined, update: turnStats.InteractionUpdate): void {
		turnStats.turnUpdate(key, update);
		usageUpdate(key, update);
	},
	turnKeyFromRows: turnStats.turnKeyFromRows,
	/** Also reachable from the console: `__cursorLocalMode.impl.debug`. */
	debug: {
		seedUsage: (days = 120) => addUsageRecords(sampleUsage(Date.now(), days)),
		clearUsage,
	},
} satisfies LocalModeImpl;

export type LocalMode = typeof impl;

installStyles();
cursorHost().register(impl);

if (import.meta.hot) {
	// Any change below this module bubbles up here: re-run it, which re-registers
	// the new implementation without reloading the window.
	import.meta.hot.accept();
}
