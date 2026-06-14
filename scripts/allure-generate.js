const { existsSync, mkdirSync, readFileSync, writeFileSync } = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const latestPath = path.join('allure-results', 'latest.json');

if (!existsSync(latestPath)) {
  console.error('Nenhuma execucao Allure encontrada. Rode yarn test:allure antes.');
  process.exit(1);
}

const { runId, resultsDir } = JSON.parse(readFileSync(latestPath, 'utf8'));
const reportDir = path.join('allure-report', runId);

mkdirSync('allure-report', { recursive: true });
writeFileSync(
  path.join('allure-report', 'latest.json'),
  JSON.stringify({ runId, reportDir }, null, 2)
);

const allureBin = path.join(
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'allure.cmd' : 'allure'
);

const result = spawnSync(
  allureBin,
  ['generate', resultsDir, '-o', reportDir],
  {
    stdio: 'inherit',
    shell: process.platform === 'win32'
  }
);

process.exit(result.status || 0);
