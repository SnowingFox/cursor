// @recovered-by cursor-re
// W1-3 entry point: upstream index + nls map + module map + report.
import { stageModules } from './modules';
import { stageReport } from './report';

await stageModules();
stageReport();
