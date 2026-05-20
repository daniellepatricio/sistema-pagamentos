const ServicoPagamento = require('./ServicoPagamento');

const servico = new ServicoPagamento();

servico.realizarPagamento('0987-7656-3475', 'Samar', 156.87);

console.log(servico.consultarUltimoPagamento());
