/**
 * Minimal JSX runtime type stubs for the `react-jsx` transform.
 *
 * The canvas runtime supplies the actual implementation; this declaration
 * lets `"jsx": "react-jsx"` resolve without a full `@types/react`.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

export namespace JSX {
  type ElementType = string | import("./index.js").JSXElementConstructor<any>;
  type Element = import("./index.js").ReactElement;
  interface IntrinsicElements {
    [tag: string]: any;
  }
  /**
   * React treats `key` as a reserved JSX attribute, not a component prop.
   * Canvas tsconfig uses `"jsx": "react-jsx"`, so TypeScript reads this
   * namespace from `react/jsx-runtime`. `key` must be declared on this
   * interface itself — a heritage `extends Attributes` left it empty
   * here and tsc still rejected `<Pill key={...} />`.
   */
  interface IntrinsicAttributes {
    key?: import("./index.js").Key | null;
  }
}

export { Fragment } from "./index.js";

export function jsx(type: any, props: any, key?: string): JSX.Element;
export function jsxs(type: any, props: any, key?: string): JSX.Element;
export function jsxDEV(type: any, props: any, key?: string): JSX.Element;
