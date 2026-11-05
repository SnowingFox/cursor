# Stubs

These modules stand in for workspace packages and npm dependencies that the
app artifact does not ship. Every stub carries a TODO(stub) header and types
values as any: the exported NAMES are real (they appear in the shipped
extension sources), but their shapes/behaviour are unknown and no API is
invented.

Consequences for verification:
- tsc checks the recovered extension code against these placeholders only.
- Runtime tests that depend on real protocol constants/util behaviour will fail;
  see docs/recovery/runs/ext-p0/REPORT.md.
