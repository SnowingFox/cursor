import { createCipheriv } from "node:crypto";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import {
	computerUseCanvasForPlatform,
	type SidecarToolImage,
} from "@anysphere/computer-use/protocol";
import { MAX_IMAGE_SIZE_BYTES } from "@anysphere/utils/image-resize";
import { getMinimalJimp } from "@anysphere/utils/jimp-minimal";
import encoderFactory, {
	type EncodeOptions,
	type WebPModule,
} from "@jsquash/webp/codec/enc/webp_enc.js";
import { defaultOptions } from "@jsquash/webp/meta.js";
import { initEmscriptenModule } from "@jsquash/webp/utils.js";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { encodeModelScreenshot } from "./screenshot-codec";

// A screenshot is produced on every input action, so its WebP encode is paid
// once per loop step. This harness records the cost of the two ways to reach a
// sub-cap frame, and what the shipping codec chose, so a change can show the
// number moved:
//
//   lossless-first: a lossless pass, then a quality-80 pass only if lossless
//                   overran the byte cap (the original codec).
//   quality-80:     a single lossy pass, no lossless attempt (the codec after
//                   the lossy-first change).
//   shipping:       `encodeModelScreenshot` as it is now — one pass, lossless
//                   for flat UI, quality-80 otherwise, chosen by the flat-UI
//                   check.
//
// It runs against four frame kinds, because they disagree: a patterned frame
// and a flat-UI frame (panels and antialiased text — lossless's home ground,
// where it is both smaller and faster), and a screenshot-like frame (smooth
// panels plus text edges and grain) and noise, where lossless is the larger
// and slower encode. The point is the printed figures, not a threshold.

const moduleRequire = createRequire(__filename);
const CANVAS = computerUseCanvasForPlatform(process.platform);
const WIN32_CANVAS = computerUseCanvasForPlatform("win32");
const QUALITY_80 = 80;

let encoder: WebPModule;

function encode(pixels: Buffer, options: EncodeOptions, size = CANVAS): Buffer {
	const encoded = encoder.encode(pixels, size.width, size.height, options);
	if (encoded === null) {
		throw new Error("WebP encode returned null");
	}
	return Buffer.from(encoded);
}

/** Mirrors `encodeModelScreenshot`: lossless, then quality-80 if it overran. */
function losslessFirst(pixels: Buffer): Buffer {
	const lossless = encode(pixels, { ...defaultOptions, lossless: 1, exact: 1 });
	if (lossless.length <= MAX_IMAGE_SIZE_BYTES) {
		return lossless;
	}
	return encode(pixels, { ...defaultOptions, quality: QUALITY_80, lossless: 0 });
}

function quality80(pixels: Buffer): Buffer {
	return encode(pixels, { ...defaultOptions, quality: QUALITY_80, lossless: 0 });
}

// Large flat blocks with hard edges: trivially compressible, so lossless is
// small and fast here — its best case, not a desktop's.
function patternedPixels(size = CANVAS): Buffer {
	const { width, height } = size;
	const pixels = Buffer.alloc(width * height * 4);
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			const offset = (y * width + x) * 4;
			const cell = ((x >> 5) + (y >> 5)) % 4;
			pixels[offset] = cell * 61;
			pixels[offset + 1] = 255 - cell * 47;
			pixels[offset + 2] = cell % 2 === 0 ? 32 : 224;
			pixels[offset + 3] = 255;
		}
	}
	return pixels;
}

// A dark editor: sidebar, status bar, rows of glyph strokes in six token
// colours with 1/3 and 2/3 coverage at their edges — antialiasing gives it
// thousands of distinct colours, but its runs of identical pixels are intact.
// This is the frame kind the flat-UI check sends to the lossless encoder.
function flatUiPixels(size = CANVAS): Buffer {
	const { width, height } = size;
	const pixels = Buffer.alloc(width * height * 4);
	const background = [30, 30, 30];
	const sidebar = [37, 37, 38];
	const status = [0, 122, 204];
	const tokens = [
		[220, 220, 170],
		[86, 156, 214],
		[206, 145, 120],
		[78, 201, 176],
		[197, 134, 192],
		[212, 212, 212],
	];
	let seed = 12345;
	const random = (): number => {
		seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
		return seed / 0xffffffff;
	};
	const sidebarWidth = Math.round(width / 6);
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			const offset = (y * width + x) * 4;
			let colour = x < sidebarWidth ? sidebar : background;
			if (y > height - 22) {
				colour = status;
			}
			const inTextRow =
				y % 14 >= 3 && y % 14 < 12 && x > sidebarWidth + 20 && y < height - 40;
			if (inTextRow) {
				const cell = Math.floor((x - sidebarWidth - 20) / 8);
				seed = Math.floor(y / 14) * 977 + cell;
				const glyph = random();
				const column = (x - sidebarWidth - 20) % 8;
				if (glyph > 0.35 && column < 5) {
					const token = tokens[Math.floor(random() * tokens.length)];
					const edge = column === 0 || column === 4 || y % 14 === 3 || y % 14 === 11;
					const coverage = edge ? (random() > 0.5 ? 1 / 3 : 2 / 3) : 1;
					colour = colour.map((channel, i) =>
						Math.round(channel * (1 - coverage) + token[i] * coverage)
					);
				}
			}
			pixels[offset] = colour[0];
			pixels[offset + 1] = colour[1];
			pixels[offset + 2] = colour[2];
			pixels[offset + 3] = 255;
		}
	}
	return pixels;
}

// Noise with no structure for either encoder to find (a keyed cipher stream,
// not an LCG, whose low bits repeat): the frame that overruns the cap even at
// quality 80, which is what the lower quality rungs exist for.
function noisePixels(size = CANVAS): Buffer {
	const { width, height } = size;
	const pixels = Buffer.alloc(width * height * 4);
	const rgb = createCipheriv(
		"aes-256-ctr",
		Buffer.alloc(32, 0x42),
		Buffer.alloc(16, 0x24)
	).update(Buffer.alloc(width * height * 3));
	for (let offset = 0, source = 0; offset < pixels.length; offset += 4, source += 3) {
		pixels[offset] = rgb[source];
		pixels[offset + 1] = rgb[source + 1];
		pixels[offset + 2] = rgb[source + 2];
		pixels[offset + 3] = 255;
	}
	return pixels;
}

// A desktop-screenshot stand-in: smooth panel gradients (compressible) crossed
// by bands of small high-contrast glyphs (text edges) and mild grain. The
// grain is what makes lossless large and slow on real screenshots, while the
// gradients let quality-80 stay small — the case lossy-first targets.
function screenshotLikePixels(size = CANVAS): Buffer {
	const { width, height } = size;
	const pixels = Buffer.alloc(width * height * 4);
	let seed = 0x9e3779b9;
	const grain = (): number => {
		seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
		return (seed / 0xffffffff - 0.5) * 12;
	};
	const clamp = (value: number): number => Math.max(0, Math.min(255, value)) | 0;
	for (let y = 0; y < height; y++) {
		const inTextBand = y % 48 < 16;
		for (let x = 0; x < width; x++) {
			const offset = (y * width + x) * 4;
			let r = 40 + (x / width) * 60;
			let g = 44 + (y / height) * 70;
			let b = 60 + ((x + y) / (width + height)) * 80;
			if (inTextBand && x % 7 < 4 && (((x >> 1) ^ y) & 1) === 1) {
				r = 230;
				g = 232;
				b = 235;
			}
			const noise = grain();
			pixels[offset] = clamp(r + noise);
			pixels[offset + 1] = clamp(g + noise);
			pixels[offset + 2] = clamp(b + noise);
			pixels[offset + 3] = 255;
		}
	}
	return pixels;
}

/** Median of a few runs, so a single scheduling hiccup does not dominate. */
function median(runs: number, body: () => Buffer): { ms: number; bytes: number } {
	const samples: number[] = [];
	let bytes = 0;
	for (let i = 0; i < runs; i++) {
		const started = performance.now();
		bytes = body().length;
		samples.push(performance.now() - started);
	}
	samples.sort((a, b) => a - b);
	return { ms: samples[Math.floor(samples.length / 2)], bytes };
}

async function createPng(pixels: Buffer): Promise<SidecarToolImage> {
	const Jimp = await getMinimalJimp();
	const png = await Jimp.fromBitmap({
		data: pixels,
		width: CANVAS.width,
		height: CANVAS.height,
	}).getBuffer("image/png");
	return { data: png.toString("base64"), mimeType: "image/png" };
}

function isCanvasWebpUnderCap(bytes: Buffer): boolean {
	return (
		bytes.length <= MAX_IMAGE_SIZE_BYTES &&
		bytes.toString("ascii", 0, 4) === "RIFF" &&
		bytes.toString("ascii", 8, 12) === "WEBP"
	);
}

beforeAll(async () => {
	const wasm = await readFile(
		moduleRequire.resolve("@jsquash/webp/codec/enc/webp_enc.wasm")
	);
	encoder = await initEmscriptenModule(encoderFactory, undefined, {
		wasmBinary: wasm,
	});
}, 120_000);

describe("screenshot encode loop tax", () => {
	it(
		"records lossless-first, quality-80, and the shipping codec for each frame kind",
		async () => {
			for (const [label, pixels] of [
				["patterned", patternedPixels()],
				["flat-ui", flatUiPixels()],
				["screenshot-like", screenshotLikePixels()],
				["noise", noisePixels()],
			] as const) {
				const losslessFirstResult = median(3, () => losslessFirst(pixels));
				const lossyResult = median(3, () => quality80(pixels));

				// Both strategies must land a valid canvas WebP under the cap.
				expect(isCanvasWebpUnderCap(losslessFirst(pixels))).toBe(true);
				expect(isCanvasWebpUnderCap(quality80(pixels))).toBe(true);

				// The raw lossless size explains the story: on the screenshot-like
				// frame it overruns the cap, so lossless-first discards it and its
				// final bytes equal quality-80's — it just paid an extra pass to
				// get there. On the patterned and flat-UI frames lossless fits,
				// is a fraction of the lossy size, and is the faster pass.
				const rawLossless = encode(pixels, {
					...defaultOptions,
					lossless: 1,
					exact: 1,
				}).length;

				// What ships: the decode is excluded so the figure is the encode
				// choice alone, comparable with the two strategies above.
				const png = await createPng(pixels);
				const shippingStarted = performance.now();
				const shipping = Buffer.from((await encodeModelScreenshot(png)).data, "base64");
				const shippingMs = performance.now() - shippingStarted;
				expect(isCanvasWebpUnderCap(shipping)).toBe(true);

				// Printed, not asserted: the numbers the codec's choices are
				// measured against.
				console.log(
					`[bench] encode ${label} ${CANVAS.width}x${CANVAS.height}: ` +
					`lossless-first ${losslessFirstResult.ms.toFixed(1)}ms (${losslessFirstResult.bytes} bytes), ` +
					`quality-80 ${lossyResult.ms.toFixed(1)}ms (${lossyResult.bytes} bytes), ` +
					`shipping ${shipping.toString("ascii", 12, 16).trim()} ${shippingMs.toFixed(1)}ms incl. decode (${shipping.length} bytes); ` +
					`raw lossless ${rawLossless} bytes` +
					(rawLossless > MAX_IMAGE_SIZE_BYTES ? " (over cap, discarded)" : " (fits)")
				);
			}
		},
		120_000
	);

	// End-to-end guard on the shipping function: whatever quality strategy
	// `encodeModelScreenshot` uses, a canvas frame must come back a valid,
	// canvas-sized WebP under the transport cap.
	it("keeps encodeModelScreenshot producing a sub-cap canvas WebP", async () => {
		const encoded = await encodeModelScreenshot(await createPng(patternedPixels()));
		const bytes = Buffer.from(encoded.data, "base64");
		expect(encoded.mimeType).toBe("image/webp");
		expect(isCanvasWebpUnderCap(bytes)).toBe(true);
	}, 120_000);
});

// The bench above runs the host canvas — on CI the 1280x800 default — so the
// 1456x840 Windows canvas the model actually sees never gets a figure. This
// pins the shipping codec on that canvas: a realistic desktop frame must still
// come back a valid WebP under the transport cap, and its size and time are
// printed so a regression in the one-pass flat-UI choice is visible on the
// dimension Windows ships. Loading the codec under win32 is what makes its
// CANVAS 1456x840; `encodeModelScreenshot` refuses a frame of any other size.
describe("screenshot encode loop tax on the Windows canvas", () => {
	const WIN = computerUseCanvasForPlatform("win32");

	// A screenshot-like frame at an arbitrary size: smooth panel gradients
	// (compressible) crossed by bands of small high-contrast glyphs and mild
	// grain — the case a real desktop presents, and the one the flat-UI check
	// sends to lossy.
	function screenshotLike(width: number, height: number): Buffer {
		const pixels = Buffer.alloc(width * height * 4);
		let seed = 0x9e3779b9;
		const grain = (): number => {
			seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
			return (seed / 0xffffffff - 0.5) * 12;
		};
		const clamp = (value: number): number => Math.max(0, Math.min(255, value)) | 0;
		for (let y = 0; y < height; y++) {
			const inTextBand = y % 48 < 16;
			for (let x = 0; x < width; x++) {
				const offset = (y * width + x) * 4;
				let r = 40 + (x / width) * 60;
				let g = 44 + (y / height) * 70;
				let b = 60 + ((x + y) / (width + height)) * 80;
				if (inTextBand && x % 7 < 4 && (((x >> 1) ^ y) & 1) === 1) {
					r = 230;
					g = 232;
					b = 235;
				}
				const noise = grain();
				pixels[offset] = clamp(r + noise);
				pixels[offset + 1] = clamp(g + noise);
				pixels[offset + 2] = clamp(b + noise);
				pixels[offset + 3] = 255;
			}
		}
		return pixels;
	}

	async function pngOfSize(
		pixels: Buffer,
		width: number,
		height: number
	): Promise<SidecarToolImage> {
		const Jimp = await getMinimalJimp();
		const png = await Jimp.fromBitmap({ data: pixels, width, height }).getBuffer(
			"image/png"
		);
		return { data: png.toString("base64"), mimeType: "image/png" };
	}

	// A light page with a photo set into it: flat by run fraction (white
	// margins), photographic by colour count — the frame kind the audited Edge
	// pages were, and the one the Windows colour gate exists for. The flat-UI
	// check alone sends it lossless at 3–5x the lossy size and time.
	function photoInset(width: number, height: number): Buffer {
		const pixels = Buffer.alloc(width * height * 4);
		let seed = 0x2545f491;
		const random = (): number => {
			seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
			return seed / 0xffffffff;
		};
		const clamp = (value: number): number => Math.max(0, Math.min(255, value)) | 0;
		const photo = {
			left: Math.round(width * 0.1),
			top: Math.round(height * 0.3),
			right: Math.round(width * 0.55),
			bottom: Math.round(height * 0.75),
		};
		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				const offset = (y * width + x) * 4;
				let r = 255;
				let g = 255;
				let b = 255;
				if (y < 40) {
					r = 232;
					g = 236;
					b = 241;
				} else if (x >= photo.left && x < photo.right && y >= photo.top && y < photo.bottom) {
					const u = (x - photo.left) / (photo.right - photo.left);
					const v = (y - photo.top) / (photo.bottom - photo.top);
					const grain = (random() - 0.5) * 6;
					r = clamp(90 + 120 * u + grain);
					g = clamp(70 + 90 * v + grain);
					b = clamp(110 + 60 * (u + v) * 0.5 + grain);
				} else if (y % 18 >= 4 && y % 18 < 13 && x > photo.right + 40 && x < width - 60) {
					const column = (x - photo.right - 40) % 7;
					seed = Math.floor(y / 18) * 7919 + Math.floor((x - photo.right - 40) / 7);
					if (random() > 0.3 && column < 4) {
						const coverage = column === 0 || column === 3 ? 0.4 : 1;
						r = g = b = Math.round(255 * (1 - coverage) + 30 * coverage);
					}
				}
				pixels[offset] = r;
				pixels[offset + 1] = g;
				pixels[offset + 2] = b;
				pixels[offset + 3] = 255;
			}
		}
		return pixels;
	}

	it("keeps every 1456x840 frame kind a valid sub-cap WebP, and records the figures", async () => {
		const realPlatform = process.platform;
		Object.defineProperty(process, "platform", { value: "win32" });
		vi.resetModules();
		try {
			const { encodeModelScreenshot: encodeWin } = await import("./screenshot-codec");
			for (const [label, pixels] of [
				["patterned", patternedPixels(WIN)],
				["flat-ui", flatUiPixels(WIN)],
				["photo-inset", photoInset(WIN.width, WIN.height)],
				["screenshot-like", screenshotLike(WIN.width, WIN.height)],
				["noise", noisePixels(WIN)],
			] as const) {
				// The scalar encoder's two passes at this canvas, for the comparison
				// the Windows choice is judged against.
				const lossless = median(3, () =>
					encode(pixels, { ...defaultOptions, lossless: 1, exact: 1 }, WIN)
				);
				const lossy = median(3, () =>
					encode(pixels, { ...defaultOptions, quality: QUALITY_80, lossless: 0 }, WIN)
				);

				const png = await pngOfSize(pixels, WIN.width, WIN.height);
				const started = performance.now();
				const encoded = await encodeWin(png);
				const ms = performance.now() - started;
				const bytes = Buffer.from(encoded.data, "base64");
				expect(encoded.mimeType, label).toBe("image/webp");
				expect(isCanvasWebpUnderCap(bytes), label).toBe(true);
				console.log(
					`[bench] encode ${label} ${WIN.width}x${WIN.height} (win32): shipping ` +
					`${bytes.toString("ascii", 12, 16).trim()} ${ms.toFixed(1)}ms incl. decode (${bytes.length} bytes); ` +
					`scalar lossless ${lossless.ms.toFixed(1)}ms (${lossless.bytes} bytes), ` +
					`scalar quality-80 ${lossy.ms.toFixed(1)}ms (${lossy.bytes} bytes)`
				);
			}
		} finally {
			Object.defineProperty(process, "platform", { value: realPlatform });
			vi.resetModules();
		}
	}, 120_000);
});
