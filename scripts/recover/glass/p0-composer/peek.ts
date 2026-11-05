import { readFileSync } from 'node:fs';
const picks = [
  ['AgentTranscriptActivityGroup.js', 'sXh'],
  ['AgentTranscriptConnectScmCard.js', 'k1n'],
  ['AgentTranscriptHumanAttachmentStrip.js', 'rSa'],
  ['AgentTranscriptNotification.js', 'AXh'],
  ['AgentTranscriptSentMessageActions.js', 'P9r'],
];
for (const [file, fn] of picks) {
  const text = readFileSync('recovered/app/glass/composer/' + file, 'utf8');
  const i = text.indexOf('function ' + fn + '(');
  console.log('##### ' + file + ' :: ' + fn);
  console.log(text.slice(i, i + 900).split('\n').slice(0, 16).map((l) => l.slice(0, 220)).join('\n'));
}
