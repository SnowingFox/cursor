/**
 * Minimal React type stubs for canvas files.
 *
 * The canvas runtime provides React at execution time; these declarations
 * give TypeScript enough surface to type-check `.canvas.tsx` JSX without
 * shipping the full `@types/react` package into the canvases directory.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */

/** React list key. Not a component prop — see `JSX.IntrinsicAttributes`. */
export type Key = string | number | bigint;

export type ReactNode = string | number | boolean | null | undefined | ReactElement | ReactNode[];

export interface ReactElement {
  type: any;
  props: any;
  key: Key | null;
}

export interface Attributes {
  key?: Key | null;
}

export type PropsWithChildren<P = unknown> = P & { children?: ReactNode };

export interface FunctionComponent<P = {}> {
  (props: P): ReactNode;
}
export type FC<P = {}> = FunctionComponent<P>;
export type JSXElementConstructor<P = any> = (props: P) => ReactNode;

/**
 * Namespace form (not a type alias) so TypeScript can resolve
 * `JSX.IntrinsicAttributes` the same way `@types/react` does.
 */
export namespace JSX {
  type ElementType = string | JSXElementConstructor<any>;
  type Element = ReactElement;
  interface IntrinsicElements {
    [tag: string]: any;
  }
  /** Lets `<Foo key={...} />` type-check without putting `key` on Foo's props. */
  interface IntrinsicAttributes {
    key?: Key | null;
  }
}

export type CSSProperties = Record<string, any>;

export type RefObject<T> = { readonly current: T | null };

export type Dispatch<A> = (value: A) => void;
export type SetStateAction<S> = S | ((prevState: S) => S);

/**
 * Event shapes follow `@types/react`: `T` is the element the handler is
 * attached to, `E` the DOM event behind `nativeEvent`. The `globalThis.*`
 * references are the `lib.dom` interfaces, which the module-level names
 * below would otherwise shadow.
 */
export interface SyntheticEvent<T = Element, E = Event> {
  nativeEvent: E;
  target: EventTarget & T;
  currentTarget: EventTarget & T;
  type: string;
  timeStamp: number;
  bubbles: boolean;
  cancelable: boolean;
  defaultPrevented: boolean;
  isTrusted: boolean;
  preventDefault(): void;
  isDefaultPrevented(): boolean;
  stopPropagation(): void;
  isPropagationStopped(): boolean;
  persist(): void;
}

export interface UIEvent<T = Element, E = globalThis.UIEvent> extends SyntheticEvent<T, E> {
  detail: number;
}

export interface MouseEvent<T = Element, E = globalThis.MouseEvent> extends UIEvent<T, E> {
  button: number;
  buttons: number;
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
  screenX: number;
  screenY: number;
  movementX: number;
  movementY: number;
  relatedTarget: EventTarget | null;
  altKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  shiftKey: boolean;
  getModifierState(key: string): boolean;
}

export interface PointerEvent<T = Element> extends MouseEvent<T, globalThis.PointerEvent> {
  pointerId: number;
  pointerType: "mouse" | "pen" | "touch";
  isPrimary: boolean;
  pressure: number;
  tangentialPressure: number;
  tiltX: number;
  tiltY: number;
  twist: number;
  width: number;
  height: number;
}

export interface KeyboardEvent<T = Element> extends UIEvent<T, globalThis.KeyboardEvent> {
  key: string;
  code: string;
  location: number;
  repeat: boolean;
  altKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  shiftKey: boolean;
  getModifierState(key: string): boolean;
}

export interface FocusEvent<Target = Element, RelatedTarget = Element> extends SyntheticEvent<
  Target,
  globalThis.FocusEvent
> {
  relatedTarget: (EventTarget & RelatedTarget) | null;
}

export interface ChangeEvent<T = Element> extends SyntheticEvent<T> {}

export interface FormEvent<T = Element> extends SyntheticEvent<T> {}

export function Fragment(props: { children?: ReactNode }): ReactElement;

export function createElement(type: any, props?: any, ...children: ReactNode[]): ReactElement;

export function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
export function useEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
export function useLayoutEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
export function useCallback<T extends (...args: any[]) => any>(
  callback: T,
  deps: readonly any[],
): T;
export function useMemo<T>(factory: () => T, deps: readonly any[]): T;
export function useRef<T>(initialValue: T): { current: T };
export function useRef<T>(initialValue: T | null): RefObject<T>;
export function useId(): string;
/** `[]` = no-action dispatch; `[A]` = `dispatch(action: A)`. */
type AnyActionArg = [] | [any];
type ActionDispatch<A extends AnyActionArg> = (...args: A) => void;
export function useReducer<S, A extends AnyActionArg>(
  reducer: (prevState: S, ...args: A) => S,
  initialState: S,
): [S, ActionDispatch<A>];
export function useReducer<S, I, A extends AnyActionArg>(
  reducer: (prevState: S, ...args: A) => S,
  initialArg: I,
  init: (arg: I) => S,
): [S, ActionDispatch<A>];

declare const React: {
  readonly Fragment: typeof Fragment;
  readonly createElement: typeof createElement;
  readonly useState: typeof useState;
  readonly useEffect: typeof useEffect;
  readonly useLayoutEffect: typeof useLayoutEffect;
  readonly useCallback: typeof useCallback;
  readonly useMemo: typeof useMemo;
  readonly useRef: typeof useRef;
  readonly useId: typeof useId;
  readonly useReducer: typeof useReducer;
};
export default React;
