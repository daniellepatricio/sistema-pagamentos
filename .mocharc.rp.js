const { config, missingRequiredEnv } = require('./reportportal.conf');

const mochaConfig = {
  extension: ['js'],
  spec: 'test/**/*.test.js'
};

if (missingRequiredEnv.length === 0) {
  mochaConfig.reporter = '@reportportal/agent-js-mocha';
  mochaConfig.reporterOptions = config;
} else {
  console.warn(
    `ReportPortal desabilitado. Configure ${missingRequiredEnv.join(', ')} para publicar os resultados.`
  );
}

module.exports = mochaConfig;
