// `react` for our modules: the agent window's own React instance (a second
// copy would break hooks). Vite aliases `react` here; see vite.config.ts.
import type * as ReactTypes from 'react';
import { cursorHost } from './cursorHost.js';

const React: typeof ReactTypes = cursorHost().react;

export default React;
export const {
	Children,
	Component,
	Fragment,
	PureComponent,
	StrictMode,
	Suspense,
	cloneElement,
	createContext,
	createElement,
	createRef,
	forwardRef,
	isValidElement,
	lazy,
	memo,
	startTransition,
	use,
	useCallback,
	useContext,
	useDebugValue,
	useDeferredValue,
	useEffect,
	useId,
	useImperativeHandle,
	useInsertionEffect,
	useLayoutEffect,
	useMemo,
	useReducer,
	useRef,
	useState,
	useSyncExternalStore,
	useTransition,
} = React;
