# W3 audit

Owner: subagent audit
Owned paths: docs/recovery/runs/audit/**, docs/recovery/AUDIT.md

Read first: docs/recovery/PLAN.md, TRACE.md, CONVENTIONS.md, INVENTORY.md, all TASKS files, then inspect recovered/**, packages/**, recovery/inventory/**, recovery/mappings/**, docs/recovery/runs/*/REPORT.md.

## Goal

Independently verify that the recovery outputs are artifact-faithful, provenance-complete, and free of invented code. You do not implement recovery; you test and report.

## Checks

1. Split reassembly: run bun run recover:verify --split and confirm all bundles reassemble byte-for-byte.
2. Provenance: every source file under recovered/ and packages/ that came from an artifact must start with the provenance header defined in CONVENTIONS.md. Report missing/malformed headers and files whose confidence is stronger than their basis.
3. AST equivalence: for every rename map under scripts/recover/** or recovery/mappings/**, re-apply it in dry-run mode and confirm equivalence; report failures.
4. Sampling: pick at least 30 recovered modules across bundles/extensions, compare their bodies against the original artifact slices (char ranges in the provenance header). Confirm no statements were added, removed, or reordered; rename-only differences are allowed only if a rename map exists and passes AST equivalence.
5. SDK: run bun run sdk:verify if packages/cursor-sdk exists; record output. For packages with vendored shims, confirm they are explicitly marked and not presented as recovered implementations.
6. Repo hygiene: git status should show no changes under app/ and no .vendor/ tracked; check .gitignore covers generated output.
7. Coverage: compare recovery/mappings/*.json and docs/recovery/runs/*/REPORT.md claims against actual files; flag claims without files or files without claims.

## Output

- docs/recovery/AUDIT.md: method, commands, pass/fail table, violations with file:line, sampled modules and their evidence ranges, residual unknowns.
- docs/recovery/runs/audit/TRACE.md: commands and outputs.
- Return a <=30 line summary with pass/fail counts and the top risks.

## Do not

- Do not edit recovered/**, packages/**, scripts/**, app/, or other agents' traces.
- Do not fix violations; report them for the main thread.
- No network, no commit.
