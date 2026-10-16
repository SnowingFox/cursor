/**
 * Entry point of local mode in the agent window.
 *
 * Loaded by the glass bundle's host loader (build/patches/inject/glass-host.js):
 * in production from app/out/vs/workbench/contrib/localMode/browser/localMode.js,
 * under `bun run dev` straight from the Vite dev server. Registering the
 * implementation (again, on every hot update) swaps what the bundle's patch
 * sites call and re-renders the mounted views.
 */
import { cursorHost, type LocalModeImpl } from '../../../../glass/host/cursorHost.js';
import { CustomProvidersSettings } from './components/CustomProvidersSettings.js';
import { ThinkingDetails, TurnDetails, TurnStatusSuffix } from './components/TurnStatus.js';
import styles from './localMode.css?inline';
import { refreshModels } from './modelCatalog.js';
import { inferenceConfig, routeTurn } from './turnRouting.js';
import { turnBegin, turnKeyFromRows, turnUpdate } from './turnStats.js';

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
		TurnDetails,
		TurnStatusSuffix,
		ThinkingDetails,
	},
	refreshModels,
	routeTurn,
	inferenceConfig,
	turnBegin,
	turnUpdate,
	turnKeyFromRows,
} satisfies LocalModeImpl;

export type LocalMode = typeof impl;

installStyles();
cursorHost().register(impl);

if (import.meta.hot) {
	// Any change below this module bubbles up here: re-run it, which re-registers
	// the new implementation without reloading the window.
	import.meta.hot.accept();
}
