const { mkdirSync, writeFileSync } = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const runId = new Date().toISOString().replace(/[:.]/g, '-');
const resultsDir = path.join('allure-results', runId);

mkdirSync(resultsDir, { recursive: true });
writeFileSync(
  path.join('allure-results', 'latest.json'),
  JSON.stringify({ runId, resultsDir }, null, 2)
);

const mochaBin = path.join(
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'mocha.cmd' : 'mocha'
);

const result = spawnSync(
  mochaBin,
  [
    'test/**/*.test.js',
    '--reporter',
    'allure-mocha',
    '--reporter-option',
    `resultsDir=${resultsDir.replace(/\\/g, '/')}`
  ],
  {
    stdio: 'inherit',
    shell: process.platform === 'win32'
  }
);

process.exit(result.status || 0);
