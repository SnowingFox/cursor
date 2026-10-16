import { readFile } from "node:fs/promises";
import * as path from "node:path";
import {
	COMPUTER_USE_ZOOM_MAX_EDGE_PX,
	computerUseCanvasForPlatform,
	zoomOutputFits,
	type SidecarToolImage,
} from "@anysphere/computer-use/protocol";
import { MAX_IMAGE_SIZE_BYTES } from "@anysphere/utils/image-resize";
import { getMinimalJimp } from "@anysphere/utils/jimp-minimal";
import encoderFactory, {
	type EncodeOptions,
	type WebPModule,
} from "@jsquash/webp/codec/enc/webp_enc.js";
import simdEncoderFactory from "@jsquash/webp/codec/enc/webp_enc_simd.js";
import { defaultOptions } from "@jsquash/webp/meta.js";
import { initEmscriptenModule } from "@jsquash/webp/utils.js";

// The sidecar runs on this machine, so its canvas is this platform's.
const CANVAS = computerUseCanvasForPlatform(process.platform);
/**
 * The Windows sidecar's frames take the faster path below (SIMD encoder,
 * colour-count gate on lossless, method-2 lossy, memoised repeat frames). The
 * macOS path is deliberately left byte-for-byte as it was: every branch keyed
 * on this constant leaves the other platform's bytes unchanged, and the codec
 * tests hold the darwin output to the previous algorithm.
 */
const WINDOWS = process.platform === "win32";

const SIDECAR_SCREENSHOT_MIME_TYPE = "image/png";
const MODEL_SCREENSHOT_MIME_TYPE = "image/webp";
const LOSSY_QUALITIES = [80, 60, 40, 20, 0] as const;
/**
 * Every fourth row is sampled for the flat-UI check: enough of a 1456×840
 * canvas (210 rows, ~300k pixel pairs, under 3 ms) to read its texture, and
 * rows rather than a pixel grid because the check is about horizontal runs.
 */
const FLAT_UI_ROW_STRIDE = 4;
/**
 * A frame is flat UI when at least this fraction of horizontally adjacent
 * pixels are identical. Measured on synthetic canvases: a dark IDE with
 * antialiased text reads 78–86 %, a terminal full of text after the area
 * downscale 60 %, a flat window over a photo wallpaper 30 %, a grainy gradient
 * 4 %, noise 0 %. The lossless encoder is tiny and fast above the line
 * (1–8 KB, ~40 ms) and huge and slow below it (0.7–2.7 MB, 0.4–1.6 s).
 */
const FLAT_UI_MIN_RUN_FRACTION = 0.5;
/**
 * Windows only: a flat frame with more distinct colours than this in the
 * sampled rows is sent lossy anyway.
 *
 * The run fraction reads flatness, not what the flat parts frame. A browser
 * page or a slide is 76–88 % runs — white margins, panels — yet the lossless
 * encoder's cost is set by what interrupts the runs, and a photo interrupts
 * them with a distinct colour per pixel. Measured on 5120×2756 desktops
 * composited to the canvas (`windows-cua-frame-pipeline.md`): frames whose
 * sampled rows hold ≤ 2,400 colours (Settings 614, Explorer 512, Excel 761, a
 * Word page 613, a dark IDE 2,355, a text-only article 1,688) encode lossless
 * in 45–113 ms at 16–210 KB; frames holding ≥ 6,100 (Excel with icon
 * bitmaps 7,653, a slide with a photo 17,033, a news page 24,391) take
 * 316–492 ms and 72–253 KB lossless against 34–102 KB at quality 80. The
 * line sits in the gap. The audited production frames this is for — Edge
 * pages at 339–418 KB, all VP8L — were the second kind.
 */
const LOSSLESS_MAX_SAMPLED_COLOURS = 4096;
/**
 * Windows only: libwebp effort level for the lossy pass. The default (4)
 * spends its extra time on rate–distortion mode search that buys 3–6 % on
 * size at the same quantiser; on the canvas that is 71–104 ms against
 * 30–49 ms at level 2 with the SIMD encoder, for a frame the model reads
 * once. Quality stays 80 either way.
 */
const WINDOWS_LOSSY_METHOD = 2;
const LOSSY_OPTIONS: Partial<EncodeOptions> = WINDOWS
	? { method: WINDOWS_LOSSY_METHOD }
	: {};

/** One of the two libwebp builds the package ships. */
type EncoderBuild = "scalar" | "simd";

let encoderPromise: Promise<WebPModule> | undefined;

async function readWasm(file: string): Promise<Buffer> {
	// Do not use require.resolve here. webpack treats that as a context module
	// and tries to parse README.md / .ts next to the wasm.
	const relativeDirs = [
		".",
		"../../node_modules/@jsquash/webp/codec/enc",
		"../../../node_modules/@jsquash/webp/codec/enc",
		"../../../../node_modules/@jsquash/webp/codec/enc",
	];
	let lastError: unknown;
	for (const dir of relativeDirs) {
		try {
			return await readFile(path.join(__dirname, dir, file));
		} catch (error) {
			lastError = error;
		}
	}
	throw lastError;
}

async function loadEncoder(build: EncoderBuild): Promise<WebPModule> {
	if (build === "simd") {
		return initEmscriptenModule(simdEncoderFactory, undefined, {
			wasmBinary: await readWasm("webp_enc_simd.wasm"),
		});
	}
	return initEmscriptenModule(encoderFactory, undefined, {
		wasmBinary: await readWasm("webp_enc.wasm"),
	});
}

/**
 * The encoder for this platform. macOS loads the scalar build it always has.
 * Windows loads libwebp's SIMD build — the same encoder compiled with
 * `wasm-simd128`, bit-exact with the scalar one (libwebp keeps its SIMD paths
 * identical to C, and the codec tests compare the two here) and ~35 % faster
 * on the lossy pass — falling back to the scalar build on a runtime whose
 * WebAssembly cannot instantiate it.
 */
function getEncoder(): Promise<WebPModule> {
	if (encoderPromise === undefined) {
		const pending = WINDOWS
			? loadEncoder("simd").catch(() => loadEncoder("scalar"))
			: loadEncoder("scalar");
		pending.catch(() => {
			if (encoderPromise === pending) {
				encoderPromise = undefined;
			}
		});
		encoderPromise = pending;
	}
	return encoderPromise;
}

export interface Dimensions {
	width: number;
	height: number;
}

function encode(
	encoder: WebPModule,
	data: Buffer,
	size: Dimensions,
	options: EncodeOptions
): Buffer {
	const encoded = encoder.encode(data, size.width, size.height, options);
	if (encoded === null) {
		throw new Error("Failed to encode computer-use screenshot as WebP");
	}
	return Buffer.from(encoded);
}

async function decodeSidecarPng(
	image: SidecarToolImage,
	what: string
): Promise<{ data: Buffer; width: number; height: number }> {
	if (image.mimeType !== SIDECAR_SCREENSHOT_MIME_TYPE) {
		throw new Error(
			`Computer-use ${what} must be ${SIDECAR_SCREENSHOT_MIME_TYPE}, received ${image.mimeType}`
		);
	}
	const Jimp = await getMinimalJimp();
	const decoded = await Jimp.read(Buffer.from(image.data, "base64"));
	return {
		data: decoded.bitmap.data,
		width: decoded.bitmap.width,
		height: decoded.bitmap.height,
	};
}

/**
 * The fraction of horizontally adjacent pixel pairs, on every
 * `FLAT_UI_ROW_STRIDE`th row, whose RGB is identical. Alpha is ignored: the
 * frames are opaque.
 *
 * This is a proxy for how the lossless encoder will fare, chosen over a
 * palette or unique-colour count because those cannot tell texture from
 * flatness: a grainy gradient quantizes into a few dozen 12-bit buckets and
 * still costs 1.3 MB and 1.6 s losslessly, while a screenshot of antialiased
 * text has thousands of distinct colours and costs 8 KB. Runs of identical
 * pixels are what flat UI has and photos, blur, and grain do not.
 */
export function flatRunFraction(data: Buffer, size: Dimensions): number {
	const { width, height } = size;
	if (width < 2 || height < 1) {
		return 0;
	}
	let equal = 0;
	let total = 0;
	for (let y = 0; y < height; y += FLAT_UI_ROW_STRIDE) {
		let previous = y * width * 4;
		for (let x = 1; x < width; x++) {
			const current = previous + 4;
			total++;
			if (
				data[current] === data[previous] &&
				data[current + 1] === data[previous + 1] &&
				data[current + 2] === data[previous + 2]
			) {
				equal++;
			}
			previous = current;
		}
	}
	return equal / total;
}

/** Whether a frame is flat UI, for which lossless is the smaller and faster encode. */
export function isFlatUi(data: Buffer, size: Dimensions): boolean {
	return flatRunFraction(data, size) >= FLAT_UI_MIN_RUN_FRACTION;
}

/**
 * Whether the sampled rows (the same every-fourth-row sample the flat-UI
 * check reads) hold more than `limit` distinct RGB colours. Exact — no
 * quantisation, so grain and gradients count as the many colours they are —
 * and it stops at the first colour past the limit, so a photo is recognised
 * within its first rows while a flat frame costs one pass over the sample.
 * The count lives in a fixed open-addressing table sized for the limit.
 */
export function sampledColourCountExceeds(
	data: Buffer,
	size: Dimensions,
	limit: number
): boolean {
	const { width, height } = size;
	// A 24-bit frame cannot hold more than 2^24 colours, so a limit that high
	// is never exceeded (and would size the table beyond reason).
	if (width < 1 || height < 1 || limit < 0 || limit >= 1 << 24) {
		return false;
	}
	// Twice the limit, rounded up to a power of two, so the table stays under
	// half full and the probe sequences short; `limit + 1` colours fit.
	let capacityBits = 1;
	while (1 << capacityBits < (limit + 1) * 2) {
		capacityBits++;
	}
	const capacity = 1 << capacityBits;
	const mask = capacity - 1;
	const shift = 32 - capacityBits;
	// Slots hold `colour + 1`; 0 is empty.
	const table = new Uint32Array(capacity);
	let count = 0;
	for (let y = 0; y < height; y += FLAT_UI_ROW_STRIDE) {
		let offset = y * width * 4;
		for (let x = 0; x < width; x++, offset += 4) {
			const colour = ((data[offset] << 16) | (data[offset + 1] << 8) | data[offset + 2]) + 1;
			// Fibonacci hashing of the 24-bit key.
			let slot = Math.imul(colour, 0x9e3779b1) >>> shift;
			while (table[slot] !== 0 && table[slot] !== colour) {
				slot = (slot + 1) & mask;
			}
			if (table[slot] === 0) {
				table[slot] = colour;
				count++;
				if (count > limit) {
					return true;
				}
			}
		}
	}
	return false;
}

/**
 * Whether the lossless encoder is the right pass for this frame. On macOS
 * the flat-UI check alone, as it always was. On Windows the frame must also
 * be flat in colour: a flat frame that holds a photo, an icon strip or any
 * other patch with a colour per pixel is sent lossy, because on such frames
 * lossless is both the slower pass and the larger output
 * (`LOSSLESS_MAX_SAMPLED_COLOURS`).
 */
export function prefersLossless(data: Buffer, size: Dimensions): boolean {
	if (!isFlatUi(data, size)) {
		return false;
	}
	return !WINDOWS || !sampledColourCountExceeds(data, size, LOSSLESS_MAX_SAMPLED_COLOURS);
}

/**
 * WebP at the image's own size, kept under the transport's byte cap. Never
 * changes the pixel size: every frame this encodes is a coordinate space.
 *
 * One pass, chosen by the frame's texture. Flat UI (panels, text, a terminal)
 * goes lossless: on such frames the lossless encoder is both the smaller
 * output and the faster pass, and it keeps small text exact. Everything else
 * — a photo wallpaper, an acrylic blur, a page of images — goes straight to
 * lossy at the top quality: a lossless pass there overruns the byte cap and
 * is discarded, which is a second encode for nothing. The lower qualities
 * exist only for a frame that overruns the cap even at the top quality (noise
 * does); a real desktop never reaches them, so no real frame is encoded
 * twice.
 */
async function encodeWebp(
	data: Buffer,
	size: Dimensions,
	what: string
): Promise<SidecarToolImage> {
	const encoder = await getEncoder();
	if (prefersLossless(data, size)) {
		const lossless = encode(encoder, data, size, {
			...defaultOptions,
			lossless: 1,
			exact: 1,
		});
		if (lossless.length <= MAX_IMAGE_SIZE_BYTES) {
			return {
				data: lossless.toString("base64"),
				mimeType: MODEL_SCREENSHOT_MIME_TYPE,
			};
		}
	}

	for (const quality of LOSSY_QUALITIES) {
		const lossy = encode(encoder, data, size, {
			...defaultOptions,
			...LOSSY_OPTIONS,
			quality,
			lossless: 0,
		});
		if (lossy.length <= MAX_IMAGE_SIZE_BYTES) {
			return {
				data: lossy.toString("base64"),
				mimeType: MODEL_SCREENSHOT_MIME_TYPE,
			};
		}
	}

	throw new Error(
		`Computer-use ${what} cannot fit within ${MAX_IMAGE_SIZE_BYTES} bytes as a ${size.width}×${size.height} WebP`
	);
}

/**
 * Windows only: the last canvas frame encoded, keyed on the sidecar's PNG
 * bytes. The sidecar sends the same PNG again when an action left the desktop
 * pixel-identical to the frame the model last saw (a no-op key, a click that
 * did nothing), and the decode + encode — the extension's whole share of the
 * frame path — is skipped for it. One entry: a repeat is only ever of the
 * frame immediately before.
 */
let lastScreenshot: { png: string; webp: SidecarToolImage } | undefined;

export async function encodeModelScreenshot(
	image: SidecarToolImage
): Promise<SidecarToolImage> {
	if (WINDOWS && lastScreenshot !== undefined && lastScreenshot.png === image.data) {
		return lastScreenshot.webp;
	}
	const decoded = await decodeSidecarPng(image, "screenshot");
	if (decoded.width !== CANVAS.width || decoded.height !== CANVAS.height) {
		throw new Error(
			`Computer-use screenshot must be ${CANVAS.width}×${CANVAS.height}, received ${decoded.width}×${decoded.height}`
		);
	}
	const webp = await encodeWebp(decoded.data, CANVAS, "screenshot");
	if (WINDOWS) {
		lastScreenshot = { png: image.data, webp };
	}
	return webp;
}

/**
 * A zoom image keeps its own size — it is a coordinate space for `zoom_id`
 * actions — so the only contract is the shared fit predicate: a frame the
 * transport would rescale is refused here rather than silently moved out from
 * under the model's coordinates downstream.
 */
export async function encodeZoomImage(
	image: SidecarToolImage
): Promise<SidecarToolImage> {
	const decoded = await decodeSidecarPng(image, "zoom image");
	if (!zoomOutputFits(decoded.width, decoded.height)) {
		throw new Error(
			`Computer-use zoom image must fit ${COMPUTER_USE_ZOOM_MAX_EDGE_PX}px on its long edge and the vision budget, received ${decoded.width}×${decoded.height}`
		);
	}
	return encodeWebp(decoded.data, decoded, "zoom image");
}
