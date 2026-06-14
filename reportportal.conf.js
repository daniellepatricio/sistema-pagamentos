const requiredEnv = ['RP_ENDPOINT', 'RP_API_KEY', 'RP_PROJECT'];

module.exports = {
  missingRequiredEnv: requiredEnv.filter((name) => !process.env[name]),
  config: {
    apiKey: process.env.RP_API_KEY,
    endpoint: process.env.RP_ENDPOINT,
    project: process.env.RP_PROJECT,
    launch: process.env.RP_LAUNCH || 'Sistema Pagamentos - Mocha',
    description: 'Execucao automatizada com Mocha',
    attributes: [
      {
        key: 'framework',
        value: 'mocha'
      },
      {
        key: 'type',
        value: 'unit'
      }
    ]
  }
};
