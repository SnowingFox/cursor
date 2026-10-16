import type { WindowsSidecarArch } from './release-manifest';

const PE_MACHINE_AMD64 = 0x8664;
const PE_MACHINE_ARM64 = 0xaa64;
const PE_OPTIONAL_HEADER_PE32_PLUS = 0x20b;

/**
 * Structural sanity for a downloaded image, before Authenticode is asked
 * about it: an `MZ` stub, a `PE\0\0` signature where the stub points, a
 * PE32+ optional header, and the machine field for `arch`. Cheap, and it
 * turns an arm64 build handed to an x64 host into a clear refusal rather than
 * a spawn failure.
 */
export function verifyWindowsExecutableImage(
	bytes: Buffer,
	arch: WindowsSidecarArch
): void {
	if (bytes.length < 0x40 || bytes.readUInt16LE(0) !== 0x5a4d) {
		throw new Error('no MZ header');
	}
	const peOffset = bytes.readUInt32LE(0x3c);
	if (
		peOffset + 26 > bytes.length ||
		bytes.readUInt32LE(peOffset) !== 0x00004550
	) {
		throw new Error('no PE signature');
	}
	const machine = bytes.readUInt16LE(peOffset + 4);
	const expected = arch === 'x64' ? PE_MACHINE_AMD64 : PE_MACHINE_ARM64;
	if (machine !== expected) {
		throw new Error(
			`machine 0x${machine.toString(16)} is not ${arch} (0x${expected.toString(16)})`
		);
	}
	if (bytes.readUInt16LE(peOffset + 24) !== PE_OPTIONAL_HEADER_PE32_PLUS) {
		throw new Error('not a PE32+ (64-bit) image');
	}
}
