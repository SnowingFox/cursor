import { createCipheriv } from "node:crypto";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import {
	computerUseCanvasForPlatform,
	type SidecarToolImage,
} from "@anysphere/computer-use/protocol";
import {
	MAX_IMAGE_SIZE_BYTES,
	resizeImageBufferIfNeeded,
	WEBP_PASSTHROUGH_DIMENSIONS,
} from "@anysphere/utils/image-resize";
import { getMinimalJimp } from "@anysphere/utils/jimp-minimal";
import encoderFactory, {
	type EncodeOptions,
	type WebPModule,
} from "@jsquash/webp/codec/enc/webp_enc.js";
import decodeWebp, { init as initWebpDecoder } from "@jsquash/webp/decode.js";
import { defaultOptions } from "@jsquash/webp/meta.js";
import { initEmscriptenModule } from "@jsquash/webp/utils.js";
import { beforeAll, describe, expect, it, vi } from "vitest";
import {
	encodeModelScreenshot,
	encodeZoomImage,
	flatRunFraction,
	isFlatUi,
	prefersLossless,
	sampledColourCountExceeds,
} from "./screenshot-codec";

const moduleRequire = createRequire(__filename);

// The codec validates against the canvas of the sidecar on this machine.
const CANVAS = computerUseCanvasForPlatform(process.platform);
const WIN32_CANVAS = computerUseCanvasForPlatform("win32");

/** The scalar libwebp build, loaded directly: the reference the codec's output is compared with. */
let scalarEncoder: WebPModule;

function encodeReference(pixels: Buffer, size: { width: number; height: number }, options: Partial<EncodeOptions>): Buffer {
	const encoded = scalarEncoder.encode(pixels, size.width, size.height, { ...defaultOptions, ...options });
	if (encoded === null) {
		throw new Error("reference encode failed");
	}
	return Buffer.from(encoded);
}

/**
 * The codec as it was before the Windows path diverged, on the scalar
 * encoder: lossless (exact) when the flat-UI check passes, else quality 80 at
 * libwebp's default effort. This is what macOS must keep producing, byte for
 * byte.
 */
function encodeLegacy(pixels: Buffer, size: { width: number; height: number }): Buffer {
	if (isFlatUi(pixels, size)) {
		const lossless = encodeReference(pixels, size, { lossless: 1, exact: 1 });
		if (lossless.length <= MAX_IMAGE_SIZE_BYTES) {
			return lossless;
		}
	}
	return encodeReference(pixels, size, { quality: 80, lossless: 0 });
}

async function createPng(
	width: number,
	height: number,
	pixels: Buffer
): Promise<SidecarToolImage> {
	const Jimp = await getMinimalJimp();
	const png = await Jimp.fromBitmap({
		data: pixels,
		width,
		height,
	}).getBuffer("image/png");
	return { data: png.toString("base64"), mimeType: "image/png" };
}

function patternedPixels(width: number, height: number): Buffer {
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

function highEntropyPixels(width: number, height: number): Buffer {
	const pixels = Buffer.alloc(width * height * 4);
	const randomRgb = createCipheriv(
		"aes-256-ctr",
		Buffer.alloc(32, 0x42),
		Buffer.alloc(16, 0x24)
	).update(Buffer.alloc(width * height * 3));
	for (let offset = 0; offset < pixels.length; offset += 4) {
		const rgbOffset = (offset / 4) * 3;
		pixels[offset] = randomRgb[rgbOffset];
		pixels[offset + 1] = randomRgb[rgbOffset + 1];
		pixels[offset + 2] = randomRgb[rgbOffset + 2];
		pixels[offset + 3] = 255;
	}
	return pixels;
}

/**
 * A dark editor: a sidebar, a status bar, and rows of glyph strokes in six
 * token colours whose edges are blended at 1/3 and 2/3 coverage — the
 * antialiasing that gives a real UI screenshot thousands of distinct colours
 * while leaving its runs of identical pixels intact.
 */
function flatUiPixels(width: number, height: number): Buffer {
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
			const inTextRow = y % 14 >= 3 && y % 14 < 12 && x > sidebarWidth + 20 && y < height - 40;
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

/**
 * A desktop stand-in with texture: smooth panel gradients crossed by bands of
 * small high-contrast glyphs, under mild grain — the grain is what makes a
 * lossless encode overrun the cap while a few 12-bit colour buckets would
 * still call it flat.
 */
function texturedPixels(width: number, height: number): Buffer {
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

/**
 * A light document page with a photo set into it: white margins and panels
 * (76 %+ of adjacent pixels identical, so the flat-UI check passes), rows of
 * dark antialiased glyph strokes, and a smooth, lightly grained photo block
 * covering a fifth of the frame — a colour per pixel. The frame kind the
 * audited Edge pages were: flat by run fraction, photographic by colour count.
 */
function photoInsetPixels(width: number, height: number): Buffer {
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
				// Browser chrome.
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
				// Body text: 6 px glyph cells, edge columns blended into the page.
				const column = (x - photo.right - 40) % 7;
				seed = Math.floor(y / 18) * 7919 + Math.floor((x - photo.right - 40) / 7);
				if (random() > 0.3 && column < 4) {
					const coverage = column === 0 || column === 3 ? 0.4 : 1;
					const ink = 30;
					r = g = b = Math.round(255 * (1 - coverage) + ink * coverage);
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

async function decodedDimensions(
	webp: Buffer
): Promise<{ width: number; height: number }> {
	const bytes = Uint8Array.from(webp);
	const decoded = await decodeWebp(bytes.buffer);
	return { width: decoded.width, height: decoded.height };
}

/** The codec loaded with `process.platform` reporting `platform`. */
async function loadAs(platform: NodeJS.Platform): Promise<typeof import("./screenshot-codec")> {
	const original = process.platform;
	Object.defineProperty(process, "platform", {
		value: platform,
		configurable: true,
	});
	vi.resetModules();
	try {
		return await import("./screenshot-codec");
	} finally {
		Object.defineProperty(process, "platform", {
			value: original,
			configurable: true,
		});
	}
}

beforeAll(async () => {
	await initWebpDecoder({
		wasmBinary: await readFile(
			moduleRequire.resolve("@jsquash/webp/codec/dec/webp_dec.wasm")
		),
	});
	scalarEncoder = await initEmscriptenModule(encoderFactory, undefined, {
		wasmBinary: await readFile(
			moduleRequire.resolve("@jsquash/webp/codec/enc/webp_enc.wasm")
		),
	});
});

// The flat-UI check is the one decision the codec makes, so its input rule is
// pinned on frames small enough to reason about by hand.
describe("flatRunFraction", () => {
	function rows(width: number, lines: number[][]): Buffer {
		const pixels = Buffer.alloc(width * lines.length * 4);
		lines.forEach((line, y) => {
			line.forEach((value, x) => {
				const offset = (y * width + x) * 4;
				pixels[offset] = value;
				pixels[offset + 1] = value;
				pixels[offset + 2] = value;
				pixels[offset + 3] = 255;
			});
		});
		return pixels;
	}

	it("counts identical horizontal neighbours", () => {
		const oneRow = { width: 4, height: 1 };
		expect(flatRunFraction(rows(4, [[9, 9, 9, 9]]), oneRow)).toBe(1);
		expect(flatRunFraction(rows(4, [[1, 2, 1, 2]]), oneRow)).toBe(0);
		// Three pairs, one of them equal.
		expect(flatRunFraction(rows(4, [[5, 5, 6, 7]]), oneRow)).toBeCloseTo(1 / 3);
	});

	it("samples every fourth row and ignores the rest", () => {
		// Rows 0 and 4 are flat; rows 1–3 are noise the sample never reads.
		const pixels = rows(4, [
			[1, 1, 1, 1],
			[1, 2, 3, 4],
			[4, 3, 2, 1],
			[1, 2, 1, 2],
			[7, 7, 7, 7],
		]);
		expect(flatRunFraction(pixels, { width: 4, height: 5 })).toBe(1);
	});

	it("compares colour, not alpha, and treats a degenerate frame as textured", () => {
		const pixels = rows(2, [[3, 3]]);
		pixels[3] = 0;
		expect(flatRunFraction(pixels, { width: 2, height: 1 })).toBe(1);
		expect(flatRunFraction(Buffer.alloc(4), { width: 1, height: 1 })).toBe(0);
	});

	it("draws the flat line where the synthetic frames fall", () => {
		expect(isFlatUi(flatUiPixels(CANVAS.width, CANVAS.height), CANVAS)).toBe(true);
		expect(isFlatUi(texturedPixels(CANVAS.width, CANVAS.height), CANVAS)).toBe(false);
		expect(isFlatUi(highEntropyPixels(CANVAS.width, CANVAS.height), CANVAS)).toBe(false);
		// Flat by runs — the photo is a fifth of the frame, the rest is page.
		expect(isFlatUi(photoInsetPixels(CANVAS.width, CANVAS.height), CANVAS)).toBe(true);
	});
});

// The colour count is the second input to the Windows decision. It reads the
// same sampled rows as the run fraction, counts exact colours, and only ever
// answers "more than the limit or not".
describe("sampledColourCountExceeds", () => {
	function pixelsOf(colours: Array<[number, number, number]>, width: number): Buffer {
		const pixels = Buffer.alloc(width * 4);
		colours.forEach(([r, g, b], x) => {
			pixels[x * 4] = r;
			pixels[x * 4 + 1] = g;
			pixels[x * 4 + 2] = b;
			pixels[x * 4 + 3] = 255;
		});
		return pixels;
	}

	it("counts distinct RGB colours against the limit, exclusive", () => {
		const row = pixelsOf([[1, 2, 3], [1, 2, 3], [4, 5, 6], [7, 8, 9]], 4);
		const size = { width: 4, height: 1 };
		expect(sampledColourCountExceeds(row, size, 3)).toBe(false);
		expect(sampledColourCountExceeds(row, size, 2)).toBe(true);
		expect(sampledColourCountExceeds(row, size, 0)).toBe(true);
	});

	it("tells colours apart by every channel and ignores alpha", () => {
		const row = pixelsOf([[0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0]], 4);
		row[3] = 0;
		row[7] = 128;
		expect(sampledColourCountExceeds(row, { width: 4, height: 1 }, 3)).toBe(true);
		expect(sampledColourCountExceeds(row, { width: 4, height: 1 }, 4)).toBe(false);
		// Black and white are far apart in every channel and are two colours.
		const extremes = pixelsOf([[0, 0, 0], [255, 255, 255]], 2);
		expect(sampledColourCountExceeds(extremes, { width: 2, height: 1 }, 1)).toBe(true);
		expect(sampledColourCountExceeds(extremes, { width: 2, height: 1 }, 2)).toBe(false);
	});

	it("reads every fourth row, like the run fraction", () => {
		const width = 2;
		const pixels = Buffer.alloc(width * 5 * 4);
		// Rows 1–3 carry colours the sample never sees.
		for (let y = 1; y <= 3; y++) {
			pixels[y * width * 4] = 10 * y;
			pixels[y * width * 4 + 4] = 20 * y;
		}
		expect(sampledColourCountExceeds(pixels, { width, height: 5 }, 1)).toBe(false);
	});

	it("handles many colours without a limit-sized table overflowing", () => {
		// 4,097 distinct colours in a row: one past a 4,096 limit.
		const width = 4097;
		const pixels = Buffer.alloc(width * 4);
		for (let x = 0; x < width; x++) {
			pixels[x * 4] = x & 0xff;
			pixels[x * 4 + 1] = (x >> 8) & 0xff;
			pixels[x * 4 + 2] = 77;
			pixels[x * 4 + 3] = 255;
		}
		expect(sampledColourCountExceeds(pixels, { width, height: 1 }, 4096)).toBe(true);
		expect(sampledColourCountExceeds(pixels, { width, height: 1 }, 4097)).toBe(false);
		expect(sampledColourCountExceeds(Buffer.alloc(0), { width: 0, height: 0 }, 4)).toBe(false);
		// No 24-bit frame can exceed 2^24 colours; such a limit answers at once.
		expect(sampledColourCountExceeds(pixels, { width, height: 1 }, 1 << 24)).toBe(false);
	});

	it("separates the frame kinds the Windows decision is about", () => {
		const limit = 4096;
		expect(sampledColourCountExceeds(flatUiPixels(WIN32_CANVAS.width, WIN32_CANVAS.height), WIN32_CANVAS, limit)).toBe(false);
		expect(sampledColourCountExceeds(patternedPixels(WIN32_CANVAS.width, WIN32_CANVAS.height), WIN32_CANVAS, limit)).toBe(false);
		expect(sampledColourCountExceeds(photoInsetPixels(WIN32_CANVAS.width, WIN32_CANVAS.height), WIN32_CANVAS, limit)).toBe(true);
		expect(sampledColourCountExceeds(highEntropyPixels(WIN32_CANVAS.width, WIN32_CANVAS.height), WIN32_CANVAS, limit)).toBe(true);
	});
});

describe("encodeModelScreenshot", () => {
	// A computer-use frame is a coordinate space, so any resize downstream of the
	// sidecar moves every pixel out from under the coordinates the model was told
	// to point at. The Windows canvas is deliberately larger than the transport
	// cap, so what has to hold is exemption, not fitting. Assert the coupling
	// directly — without it the drift surfaces as a silently rescaled frame.
	it("is exempt from the shared webp dimension cap", () => {
		expect(
			WEBP_PASSTHROUGH_DIMENSIONS.some(
				d => d.width === CANVAS.width && d.height === CANVAS.height
			)
		).toBe(true);
	});

	it("emits an exact-size WebP unchanged by both shared resize passes", async () => {
		const image = await createPng(
			CANVAS.width,
			CANVAS.height,
			patternedPixels(
				CANVAS.width,
				CANVAS.height
			)
		);

		const encodedImage = await encodeModelScreenshot(image);
		const encoded = Buffer.from(encodedImage.data, "base64");

		expect(encodedImage.mimeType).toBe("image/webp");
		expect(encoded.length).toBeLessThanOrEqual(MAX_IMAGE_SIZE_BYTES);
		await expect(decodedDimensions(encoded)).resolves.toEqual({
			width: CANVAS.width,
			height: CANVAS.height,
		});

		const firstPass = await resizeImageBufferIfNeeded(encoded);
		const secondPass = await resizeImageBufferIfNeeded(
			Buffer.from(firstPass.data)
		);
		expect(firstPass.mimeType).toBe("image/webp");
		expect(secondPass.mimeType).toBe("image/webp");
		expect(Buffer.from(firstPass.data).equals(encoded)).toBe(true);
		expect(Buffer.from(secondPass.data).equals(encoded)).toBe(true);
	});

	// One pass, picked by texture. Flat UI — panels and antialiased text, the
	// frames a coding desktop mostly produces — goes lossless, where the
	// encoder is both smaller and faster and small text stays exact. Textured
	// frames (a photo wallpaper, a grainy gradient, noise) go straight to lossy;
	// a lossless pass on those overruns the cap and would be a second encode
	// for nothing. Either way the frame stays the canvas size and under the cap.
	it("encodes flat UI lossless and textured frames lossy, in one pass each", async () => {
		const cases: Array<[string, Buffer, "VP8L" | "VP8 "]> = [
			["flat blocks", patternedPixels(CANVAS.width, CANVAS.height), "VP8L"],
			["antialiased text on panels", flatUiPixels(CANVAS.width, CANVAS.height), "VP8L"],
			["grainy gradient with text", texturedPixels(CANVAS.width, CANVAS.height), "VP8 "],
			["noise", highEntropyPixels(CANVAS.width, CANVAS.height), "VP8 "],
		];
		for (const [label, pixels, chunk] of cases) {
			const image = await createPng(CANVAS.width, CANVAS.height, pixels);

			const encoded = Buffer.from(
				(await encodeModelScreenshot(image)).data,
				"base64"
			);

			expect(encoded.toString("ascii", 12, 16), label).toBe(chunk);
			expect(encoded.length, label).toBeLessThanOrEqual(MAX_IMAGE_SIZE_BYTES);
			await expect(decodedDimensions(encoded), label).resolves.toEqual({
				width: CANVAS.width,
				height: CANVAS.height,
			});
		}
	});

	// The lossless choice is worth having only if it is the smaller output on
	// the frames it is chosen for — otherwise lossy-everywhere would be simpler.
	it("makes a flat UI frame far smaller than its lossy encode would be", async () => {
		const pixels = flatUiPixels(CANVAS.width, CANVAS.height);
		const encoded = Buffer.from(
			(await encodeModelScreenshot(await createPng(CANVAS.width, CANVAS.height, pixels))).data,
			"base64"
		);
		// A lossy encode of the same frame measures ~200 KB; lossless under 10 KB.
		expect(encoded.length).toBeLessThan(20_000);
	});

	it("rejects a source PNG outside the shared canvas contract", async () => {
		const wrongWidth = CANVAS.width - 1;
		const image = await createPng(
			wrongWidth,
			CANVAS.height,
			patternedPixels(wrongWidth, CANVAS.height)
		);

		await expect(encodeModelScreenshot(image)).rejects.toThrow(
			`must be ${CANVAS.width}×${CANVAS.height}, received ${wrongWidth}×${CANVAS.height}`
		);
	});

	it("rejects non-PNG sidecar screenshots", async () => {
		await expect(
			encodeModelScreenshot({
				data: "",
				mimeType: "image/jpeg",
			})
		).rejects.toThrow("must be image/png, received image/jpeg");
	});
});

// A zoom image is a coordinate space at its own size, not the canvas's. What
// has to hold is that every size the sidecar can produce reaches the model
// untouched by the shared resize, and that a size it cannot have produced is
// refused here rather than rescaled downstream.
describe("encodeZoomImage", () => {
	it("keeps a zoom image at its own size through both shared resize passes", async () => {
		const image = await createPng(1216, 616, patternedPixels(1216, 616));

		const encodedImage = await encodeZoomImage(image);
		const encoded = Buffer.from(encodedImage.data, "base64");

		expect(encodedImage.mimeType).toBe("image/webp");
		// A zoom of flat UI is the legibility case: it stays lossless (VP8L).
		expect(encoded.toString("ascii", 12, 16)).toBe("VP8L");
		expect(encoded.length).toBeLessThanOrEqual(MAX_IMAGE_SIZE_BYTES);
		await expect(decodedDimensions(encoded)).resolves.toEqual({
			width: 1216,
			height: 616,
		});

		const firstPass = await resizeImageBufferIfNeeded(encoded);
		const secondPass = await resizeImageBufferIfNeeded(
			Buffer.from(firstPass.data)
		);
		expect(Buffer.from(firstPass.data).equals(encoded)).toBe(true);
		expect(Buffer.from(secondPass.data).equals(encoded)).toBe(true);
	});

	it("carries the largest zoom edge and the smallest zoom image whole", async () => {
		for (const [width, height] of [
			[1280, 810],
			[393, 1280],
			[8, 8],
		]) {
			const image = await createPng(width, height, patternedPixels(width, height));
			const encoded = Buffer.from((await encodeZoomImage(image)).data, "base64");
			await expect(decodedDimensions(encoded)).resolves.toEqual({ width, height });
			const forwarded = await resizeImageBufferIfNeeded(encoded);
			expect(Buffer.from(forwarded.data).equals(encoded), `${width}×${height}`).toBe(true);
		}
	});

	it("encodes a textured zoom image lossy without a wasted lossless pass", async () => {
		const image = await createPng(1280, 800, highEntropyPixels(1280, 800));

		const encoded = Buffer.from((await encodeZoomImage(image)).data, "base64");

		expect(encoded.toString("ascii", 12, 16)).toBe("VP8 ");
		expect(encoded.length).toBeLessThanOrEqual(MAX_IMAGE_SIZE_BYTES);
		await expect(decodedDimensions(encoded)).resolves.toEqual({
			width: 1280,
			height: 800,
		});
	});

	it("refuses a frame the transport would rescale", async () => {
		for (const [width, height] of [
			[1281, 100],
			[100, 1281],
			[1280, 1280],
			[7, 100],
		]) {
			const image = await createPng(width, height, patternedPixels(width, height));
			await expect(encodeZoomImage(image), `${width}×${height}`).rejects.toThrow(
				`must fit 1280px on its long edge and the vision budget, received ${width}×${height}`
			);
		}
	});

	it("rejects non-PNG zoom images", async () => {
		await expect(
			encodeZoomImage({ data: "", mimeType: "image/webp" })
		).rejects.toThrow("zoom image must be image/png, received image/webp");
	});
});

// The decision the codec makes on this platform. On macOS it is the flat-UI
// check alone; the Windows-only colour gate is covered below under win32.
describe("prefersLossless", () => {
	it("follows the flat-UI check on this platform", () => {
		expect(prefersLossless(flatUiPixels(CANVAS.width, CANVAS.height), CANVAS)).toBe(true);
		expect(prefersLossless(texturedPixels(CANVAS.width, CANVAS.height), CANVAS)).toBe(false);
		if (process.platform !== "win32") {
			expect(prefersLossless(photoInsetPixels(CANVAS.width, CANVAS.height), CANVAS)).toBe(true);
		}
	});
});

// Everything above runs as this VM's platform. The canvas and the encoding
// path are per-platform, so the branch that matters — Windows — is only
// covered by loading the codec with `process.platform` reporting win32.
describe("encodeModelScreenshot on Windows", () => {
	const loadAsWin32 = () => loadAs("win32");

	it("accepts the raised Windows canvas and survives the resize pipeline", async () => {
		const { encodeModelScreenshot: encodeOnWin32 } = await loadAsWin32();
		const image = await createPng(1456, 840, patternedPixels(1456, 840));

		const encodedImage = await encodeOnWin32(image);
		const encoded = Buffer.from(encodedImage.data, "base64");

		expect(encodedImage.mimeType).toBe("image/webp");
		expect(encoded.length).toBeLessThanOrEqual(MAX_IMAGE_SIZE_BYTES);
		await expect(decodedDimensions(encoded)).resolves.toEqual({
			width: 1456,
			height: 840,
		});

		// The frame is above the transport cap, so this is the assertion that the
		// passthrough exemption actually reaches the shared resize.
		const forwarded = await resizeImageBufferIfNeeded(encoded);
		expect(Buffer.from(forwarded.data).equals(encoded)).toBe(true);
	});

	it("rejects the other platforms' canvas rather than accepting either", async () => {
		const { encodeModelScreenshot: encodeOnWin32 } = await loadAsWin32();
		const image = await createPng(1280, 800, patternedPixels(1280, 800));

		await expect(encodeOnWin32(image)).rejects.toThrow(
			"must be 1456×840, received 1280×800"
		);
	});

	// The Windows decision adds the colour gate: a frame that is flat by runs
	// but photographic by colour — the audited Edge pages, a slide with a
	// picture, a ribbon of icon bitmaps — goes lossy; genuinely flat UI keeps
	// its lossless pass.
	it("sends a flat frame with a photo lossy and keeps flat UI lossless", async () => {
		const { prefersLossless: prefersOnWin32, encodeModelScreenshot: encodeOnWin32 } =
			await loadAsWin32();
		const { width, height } = WIN32_CANVAS;
		const flat = flatUiPixels(width, height);
		const inset = photoInsetPixels(width, height);

		expect(prefersOnWin32(flat, WIN32_CANVAS)).toBe(true);
		expect(prefersOnWin32(patternedPixels(width, height), WIN32_CANVAS)).toBe(true);
		expect(prefersOnWin32(inset, WIN32_CANVAS)).toBe(false);
		expect(prefersOnWin32(texturedPixels(width, height), WIN32_CANVAS)).toBe(false);

		const flatWebp = Buffer.from((await encodeOnWin32(await createPng(width, height, flat))).data, "base64");
		const insetWebp = Buffer.from((await encodeOnWin32(await createPng(width, height, inset))).data, "base64");
		expect(flatWebp.toString("ascii", 12, 16)).toBe("VP8L");
		expect(insetWebp.toString("ascii", 12, 16)).toBe("VP8 ");
		for (const webp of [flatWebp, insetWebp]) {
			expect(webp.length).toBeLessThanOrEqual(MAX_IMAGE_SIZE_BYTES);
			await expect(decodedDimensions(webp)).resolves.toEqual({ width, height });
		}
		// The point of the gate: the lossy inset is well under what its lossless
		// encode would have cost.
		expect(insetWebp.length * 2).toBeLessThan(
			encodeReference(inset, WIN32_CANVAS, { lossless: 1, exact: 1 }).length
		);
	});

	// libwebp's SIMD build is the scalar encoder compiled with wasm-simd128;
	// its output is bit-exact. Windows loads it, so its lossless bytes must
	// equal the scalar encoder's and its lossy bytes the scalar encoder's at
	// the same quality and effort — a divergence here would mean the two
	// builds are not the same encoder.
	it("produces the same bytes from the SIMD build as the scalar encoder", async () => {
		const { encodeModelScreenshot: encodeOnWin32 } = await loadAsWin32();
		const { width, height } = WIN32_CANVAS;
		const flat = flatUiPixels(width, height);
		const inset = photoInsetPixels(width, height);

		const flatWebp = Buffer.from((await encodeOnWin32(await createPng(width, height, flat))).data, "base64");
		expect(flatWebp.equals(encodeReference(flat, WIN32_CANVAS, { lossless: 1, exact: 1 }))).toBe(true);

		const insetWebp = Buffer.from((await encodeOnWin32(await createPng(width, height, inset))).data, "base64");
		expect(insetWebp.equals(encodeReference(inset, WIN32_CANVAS, { quality: 80, lossless: 0, method: 2 }))).toBe(true);
	});

	// A repeated PNG — the sidecar resends the previous frame's bytes when an
	// action left the desktop pixel-identical — costs no decode and no encode:
	// the previous result comes back as is. A different PNG is encoded anew.
	it("returns the previous result for a repeated sidecar PNG", async () => {
		const { encodeModelScreenshot: encodeOnWin32 } = await loadAsWin32();
		const { width, height } = WIN32_CANVAS;
		const first = await createPng(width, height, patternedPixels(width, height));
		const second = await createPng(width, height, flatUiPixels(width, height));

		const firstResult = await encodeOnWin32(first);
		expect(await encodeOnWin32({ ...first })).toBe(firstResult);

		const secondResult = await encodeOnWin32(second);
		expect(secondResult).not.toBe(firstResult);
		expect(secondResult.data).not.toBe(firstResult.data);
		expect(await encodeOnWin32(second)).toBe(secondResult);
		// The memo is one deep: the frame before the previous one is encoded
		// again, to equal bytes.
		const firstAgain = await encodeOnWin32(first);
		expect(firstAgain).not.toBe(firstResult);
		expect(firstAgain.data).toBe(firstResult.data);
	});
});

// The Windows path is Windows-only. Loaded as darwin, the codec must keep
// producing exactly the bytes the previous algorithm produced: the scalar
// encoder, lossless (exact) for a flat frame — colour count ignored — and
// quality 80 at libwebp's default effort otherwise, with no memo.
describe("encodeModelScreenshot on macOS is byte-identical to the previous codec", () => {
	const DARWIN_CANVAS = computerUseCanvasForPlatform("darwin");

	it("encodes every frame kind to the legacy bytes", async () => {
		const { encodeModelScreenshot: encodeOnDarwin, prefersLossless: prefersOnDarwin } =
			await loadAs("darwin");
		const { width, height } = DARWIN_CANVAS;
		const kinds: Array<[string, Buffer]> = [
			["flat blocks", patternedPixels(width, height)],
			["antialiased text on panels", flatUiPixels(width, height)],
			["page with a photo inset", photoInsetPixels(width, height)],
			["grainy gradient with text", texturedPixels(width, height)],
			["noise", highEntropyPixels(width, height)],
		];
		for (const [label, pixels] of kinds) {
			const encoded = Buffer.from(
				(await encodeOnDarwin(await createPng(width, height, pixels))).data,
				"base64"
			);
			expect(encoded.equals(encodeLegacy(pixels, DARWIN_CANVAS)), label).toBe(true);
		}
		// The colour gate does not exist on macOS: the photo inset stays lossless.
		expect(prefersOnDarwin(photoInsetPixels(width, height), DARWIN_CANVAS)).toBe(true);
	});

	it("does not memoise", async () => {
		const { encodeModelScreenshot: encodeOnDarwin } = await loadAs("darwin");
		const { width, height } = DARWIN_CANVAS;
		const image = await createPng(width, height, patternedPixels(width, height));
		const first = await encodeOnDarwin(image);
		const second = await encodeOnDarwin(image);
		expect(second).not.toBe(first);
		expect(second.data).toBe(first.data);
	});
});
