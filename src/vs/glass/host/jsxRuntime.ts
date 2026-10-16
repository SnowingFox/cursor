// `react/jsx-runtime` for our modules, backed by the agent window's React.
import type * as JsxRuntimeTypes from 'react/jsx-runtime';
import { cursorHost } from './cursorHost.js';

const runtime: typeof JsxRuntimeTypes = cursorHost().jsxRuntime;

export default runtime;
export const { Fragment, jsx, jsxs } = runtime;
