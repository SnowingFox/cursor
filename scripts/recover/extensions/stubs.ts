/**
 * Stub modules for workspace packages and npm dependencies that the shipped
 * app artifact does not contain. The exported NAMES are real (they appear in
 * the shipped cursor-computer-use sources); shapes are unknown, so values are
 * typed any and every module carries a TODO(stub) note.
 *
 * Generated into recovered/extensions/cursor-computer-use/stubs/ by adopt.ts.
 */

const NOW = new Date().toISOString();
const RUN_ID = 'ext-p0';

function header(pkg: string, why: string): string {
	return [
		'// @recovered-by cursor-re',
		'// module: stub for ' + pkg,
		'// basis: inferred confidence: C',
		'// method: stub',
		'// run: ' + RUN_ID + ' ' + NOW,
		'// TODO(stub): ' + why,
		'',
	].join('\n');
}

function valueAndType(names: string[]): string[] {
	return names.flatMap((name) => ['export type ' + name + '<T = any, U = any, V = any> = any;', 'export const ' + name + ': any;']);
}

const PROTOCOL_NAMES = [
	'COMPUTER_USE_BATCH_MAX_KEYBOARD_STEPS', 'COMPUTER_USE_BATCH_MAX_STEPS', 'COMPUTER_USE_CANVASES',
	'COMPUTER_USE_CANVAS_WIN32', 'COMPUTER_USE_DRAG_PATH_MAX_POINTS', 'COMPUTER_USE_DRAG_PATH_MIN_POINTS',
	'COMPUTER_USE_ESCALATIONS', 'COMPUTER_USE_REFUSAL_CODES', 'COMPUTER_USE_REFUSAL_ESCALATIONS',
	'COMPUTER_USE_VISION_TOKEN_BUDGET', 'COMPUTER_USE_ZOOM_MAX_EDGE_PX', 'COMPUTER_USE_ZOOM_MAX_MAGNIFICATION',
	'COMPUTER_USE_ZOOM_MAX_REGION_LONG_EDGE_PX', 'COMPUTER_USE_ZOOM_MIN_REGION', 'COMPUTER_USE_ZOOM_PADDING',
	'SIDECAR_HANDSHAKE_MAX_BYTES', 'SIDECAR_HANDSHAKE_TIMEOUT_MS', 'SIDECAR_HANDSHAKE_VERSION',
	'SIDECAR_LAUNCH_TOKEN_BYTES', 'SIDECAR_LAUNCH_TOKEN_HEX_LENGTH', 'SIDECAR_PROTOCOL_MAJOR',
	'CompanionSidecarToolCallSchema', 'CompanionSidecarToolName', 'ComputerUseMode', 'ComputerUseRefusalCode',
	'PermissionKind', 'PortableMouseButton', 'RemoteSidecarToolCallSchema', 'SidecarHandshakeReplySchema',
	'SidecarRequestSchema', 'SidecarResponseSchema', 'SidecarServiceStateSchema',
	'computerUseBatchStepsAllowed', 'computerUseCanvasForPlatform', 'computerUseRefusal',
	'computerUseZoomRegionFitsOutput', 'computerUseZoomRegionWidened', 'defaultEscalationReason', 'zoomOutputFits',
	'ComputerUseBatchStepTool', 'ComputerUseRefusal', 'SidecarHandshakeReply', 'SidecarPermissionSettingsResult',
	'SidecarPermissionStatus', 'SidecarRequest', 'SidecarResponse', 'SidecarToolImage', 'SidecarToolResult',
	'CompanionSidecarToolCall', 'RemoteSidecarToolCall', 'RemoteSidecarToolName', 'ComputerUseEscalation',
	'ComputerUseZoomRegion',
];

const CURSOR_TYPE_NAMES = ['McpProvider', 'McpProviderTurnEnd'];
const PROTO_NAMES = [
	'AiService', 'ComputerUseAxElement', 'ComputerUseDecideNextActionRequest', 'ComputerUseDecideNextActionResponse',
	'ComputerUsePastAction', 'ComputerUseTreeDiff', 'ComputerUseActionChoice',
];

export const STUBS: Record<string, string> = {
	'anysphere-computer-use-protocol.d.ts':
		header('@anysphere/computer-use/protocol', 'shipped as packages/computer-use/protocol/sidecar-protocol.ts, not included in the app artifact') +
		valueAndType(PROTOCOL_NAMES).join('\n') + '\n',
	'anysphere-context.d.ts':
		header('@anysphere/context', 'workspace package @anysphere/context is not shipped') +
		[
			'export type Context<T = any> = any;',
			'export type LogEntry = any;',
			'export type LoggerBackend = any;',
			'export function createContext<T = void>(...args: any[]): any;',
			'export function createKey<T = any>(...args: any[]): any;',
			'export function createLogger(...args: any[]): any;',
			'export const loggerKey: any;',
		].join('\n') + '\n',
	'anysphere-utils.d.ts':
		header('@anysphere/utils', 'workspace package @anysphere/utils is not shipped') +
		'export function delay(ms: number, options?: any): Promise<void>;\n',
	'anysphere-utils-image-resize.d.ts':
		header('@anysphere/utils/image-resize', 'workspace package @anysphere/utils is not shipped') +
		[
			'export const MAX_IMAGE_SIZE_BYTES: number;',
			'export const WEBP_PASSTHROUGH_DIMENSIONS: any;',
			'export function resizeImageBufferIfNeeded(...args: any[]): any;',
		].join('\n') + '\n',
	'anysphere-utils-jimp-minimal.d.ts':
		header('@anysphere/utils/jimp-minimal', 'workspace package @anysphere/utils is not shipped') +
		'export function getMinimalJimp(...args: any[]): any;\n',
	'cursor-types.d.ts':
		header('@cursor/types', 'src/vs/platform/reactivestorage/common/reactiveStorageTypes is not shipped') +
		CURSOR_TYPE_NAMES.map((name) => 'export type ' + name + ' = any;').join('\n') + '\n',
	'jsquash-webp.d.ts':
		header('@jsquash/webp', 'npm dependency @jsquash/webp is not installed in the workspace') +
		[
			'export type EncodeOptions = any;',
			'export type WebPModule = any;',
			'export const initWebpDecoder: any;',
			'export const defaultOptions: any;',
			'export const initEmscriptenModule: any;',
			'declare const simdEncoderFactory: any;',
			'export default simdEncoderFactory;',
		].join('\n') + '\n',
	'proto-aiserver.d.ts':
		header('proto/aiserver/v1/*', 'generated protobuf sources under src/proto are not shipped') +
		valueAndType(PROTO_NAMES).join('\n') + '\n',
	'vscode.d.ts':
		header('vscode', 'VS Code extension host API d.ts files are not shipped') +
		[
			'export interface ExtensionContext { subscriptions: any[]; extensionPath: string; [key: string]: any }',
			'export interface OutputChannel { appendLine(value: string): void; show(): void; dispose(): void; [key: string]: any }',
			'export const window: any;',
			'export const commands: any;',
			'export const env: any;',
			'export const cursor: any;',
			'export const cursorVersion: any;',
		].join('\n') + '\n',
	'yauzl.d.ts':
		header('yauzl', 'npm dependency yauzl is installed only as untyped JS inside app/node_modules') +
		[
			'export type Entry = any;',
			'export type ZipFile = any;',
			'export function fromBuffer(buffer: any, callback: (error: any, zip: any) => void): void;',
			'export function fromBuffer(buffer: any, options: any, callback: (error: any, zip: any) => void): void;',
		].join('\n') + '\n',
	'connectrpc.d.ts':
		header('@connectrpc/connect', 'Connect RPC packages are not installed at the repo root') +
		[
			'export type Interceptor = any;',
			'export type PromiseClient<T = any> = any;',
			'export type Transport = any;',
			'export function createPromiseClient<T = any>(service: any, transport: any, options?: any): any;',
			'export const compressionGzip: any;',
			'export function createConnectTransport(options: any): any;',
		].join('\n') + '\n',
	'computer-use-product-profile.json': '{}\n',
};

export const STUB_README = [
	'# Stubs',
	'',
	'These modules stand in for workspace packages and npm dependencies that the',
	'app artifact does not ship. Every stub carries a TODO(stub) header and types',
	'values as any: the exported NAMES are real (they appear in the shipped',
	'extension sources), but their shapes/behaviour are unknown and no API is',
	'invented.',
	'',
	'Consequences for verification:',
	'- tsc checks the recovered extension code against these placeholders only.',
	'- Runtime tests that depend on real protocol constants/util behaviour will fail;',
	'  see docs/recovery/runs/ext-p0/REPORT.md.',
].join('\n') + '\n';
