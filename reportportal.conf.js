const RPClient = require('@reportportal/client-javascript');

module.exports = {
  token: 'SEU_TOKEN',
  endpoint: 'https://reportportal.seudominio.com/api/v1',
  launch: 'Mocha Launch',
  project: 'default_personal',
  description: 'Execução automatizada com Mocha',
  attributes: [
    {
      key: 'framework',
      value: 'mocha'
    }
  ]
};