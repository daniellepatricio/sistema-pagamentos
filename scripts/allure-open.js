const { existsSync, readFileSync } = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const latestPath = path.join('allure-reports', 'latest.json');

if (!existsSync(latestPath)) {
  console.error('Nenhum relatorio Allure encontrado. Rode yarn allure:generate antes.');
  process.exit(1);
}

const { reportDir } = JSON.parse(readFileSync(latestPath, 'utf8'));
const allureBin = path.join(
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'allure.cmd' : 'allure'
);

const result = spawnSync(allureBin, ['open', reportDir], {
  stdio: 'inherit',
  shell: process.platform === 'win32'
});

process.exit(result.status || 0);
