import {
	COMPUTER_USE_CANVAS_WIN32,
	computerUseZoomRegionFitsOutput,
	computerUseZoomRegionWidened,
	zoomOutputFits,
	type ComputerUseZoomRegion,
} from "@anysphere/computer-use/protocol";
import { describe, expect, it } from "vitest";
import { conformanceSuite } from "../backends/windows/conformance-vectors.test-support";

interface Size {
	width: number;
	height: number;
}

interface RegionCase {
	input: { region: ComputerUseZoomRegion };
	expect: { region?: ComputerUseZoomRegion; widenedFrom?: Size; error?: string };
	note: string;
}

interface FitCase {
	input: Size;
	expect: Size | null;
	note: string;
}

interface RemapCase {
	input: { display: Size; region: unknown; point?: unknown };
	expect: { image?: Size; error?: string };
	note: string;
}

function isSize(value: unknown): value is Size {
	return (
		typeof value === "object" &&
		value !== null &&
		typeof (value as Size).width === "number" &&
		typeof (value as Size).height === "number"
	);
}

// The client's half of the zoom contract is the frame: the sidecar sizes a
// zoom image (`zoom::fit_output`) and the codec accepts exactly the sizes the
// transport carries untouched (`zoomOutputFits`). Both read these cases, so
// neither side can move the cap without turning the other red.
describe("zoom conformance vectors", () => {
	it("accepts every output the sidecar's fit rule produces, and nothing it refuses", () => {
		const cases = conformanceSuite("zoom-output-fit") as FitCase[];
		for (const { input, expect: fitted, note } of cases) {
			expect(isSize(input), note).toBe(true);
			if (fitted === null) {
				expect(zoomOutputFits(input.width, input.height), note).toBe(false);
				continue;
			}
			expect(isSize(fitted), note).toBe(true);
			expect(zoomOutputFits(fitted.width, fitted.height), note).toBe(true);
		}
	});

	// The argument contract runs on both sides — the client refuses an
	// oversize region before the RPC and widens a small one before sending,
	// the sidecar does both again for a client that predates them — so both
	// read the same cases.
	it("applies the region contract exactly as the sidecar does", () => {
		const cases = conformanceSuite("zoom-region") as RegionCase[];
		let widened = 0;
		for (const { input, expect: expected, note } of cases) {
			const { x1, y1, x2, y2 } = input.region;
			const width = Math.floor(x2) - Math.floor(x1) + 1;
			const height = Math.floor(y2) - Math.floor(y1) + 1;
			if (expected.error !== undefined) {
				expect(expected.error, note).toBe("TooLarge");
				expect(computerUseZoomRegionFitsOutput({ width, height }), note).toBe(false);
				continue;
			}
			expect(computerUseZoomRegionFitsOutput({ width, height }), note).toBe(true);
			const result = computerUseZoomRegionWidened(input.region, COMPUTER_USE_CANVAS_WIN32);
			expect(result.region, note).toEqual(expected.region);
			expect(result.widenedFrom, note).toEqual(expected.widenedFrom);
			if (expected.widenedFrom !== undefined) {
				widened += 1;
			}
		}
		expect(widened).toBeGreaterThan(0);
	});

	it("accepts the image size of every planned zoom in the remap vectors", () => {
		const cases = conformanceSuite("zoom-remap") as RemapCase[];
		let planned = 0;
		for (const { expect: expected, note } of cases) {
			if (expected.image === undefined) {
				// A planning refusal names its rule and has no image to carry.
				expect(typeof expected.error, note).toBe("string");
				continue;
			}
			planned += 1;
			expect(isSize(expected.image), note).toBe(true);
			expect(zoomOutputFits(expected.image.width, expected.image.height), note).toBe(true);
		}
		expect(planned).toBeGreaterThan(0);
	});
});
