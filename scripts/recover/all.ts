import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './lib/paths';
import { sdkReady, vscodeReady } from './lib/artifacts';

function run(script: string, args: string[] = []): void {
  const result = spawnSync(process.execPath, [join(ROOT, script), ...args], {
    cwd: ROOT,
    stdio: 'inherit',
  });
  if (result.status !== 0) {
    throw new Error(script + ' failed with ' + String(result.status));
  }
}

function main(): void {
  if (!sdkReady() || !vscodeReady()) {
    run('scripts/recover/fetch-artifacts.ts');
  }
  run('scripts/recover/inventory/index.ts');
  run('scripts/recover/inventory/sdk-analysis.ts');
  run('scripts/recover/mappings/basename-index.ts');
  run('scripts/recover/mappings/glass-tree.ts');
  run('scripts/recover/verify.ts', ['--split']);
  if (existsSync(join(ROOT, 'packages', 'cursor-sdk'))) {
    run('scripts/recover/sdk/verify.ts');
  } else {
    console.log('[recover] packages/cursor-sdk not present yet; skipping sdk:verify');
  }
  run('scripts/recover/audit.ts');
  run('scripts/recover/report.ts');
}

main();
