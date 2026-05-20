const assert = require('assert');
const ServicoPagamento = require('../src/ServicoPagamento');

describe('ServicoPagamento', function () {
  it('deve realizar um pagamento com categoria padrão quando valor for menor ou igual a 100', function () {
    const servico = new ServicoPagamento();

    const pagamento = servico.realizarPagamento(
      '123456789',
      'Empresa A',
      80
    );

    assert.strictEqual(pagamento.codigoBarras, '123456789');
    assert.strictEqual(pagamento.empresa, 'Empresa A');
    assert.strictEqual(pagamento.valor, 80);
    assert.strictEqual(pagamento.categoria, 'padrão');
  });

  it('deve realizar um pagamento com categoria cara quando valor for maior que 100', function () {
    const servico = new ServicoPagamento();

    const pagamento = servico.realizarPagamento(
      '987654321',
      'Empresa B',
      150
    );

    assert.strictEqual(pagamento.codigoBarras, '987654321');
    assert.strictEqual(pagamento.empresa, 'Empresa B');
    assert.strictEqual(pagamento.valor, 150);
    assert.strictEqual(pagamento.categoria, 'cara');
  });

  it('deve consultar apenas o último pagamento realizado', function () {
    const servico = new ServicoPagamento();

    servico.realizarPagamento('111', 'Empresa A', 50);
    servico.realizarPagamento('222', 'Empresa B', 200);

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento.codigoBarras, '222');
    assert.strictEqual(ultimoPagamento.empresa, 'Empresa B');
    assert.strictEqual(ultimoPagamento.valor, 200);
    assert.strictEqual(ultimoPagamento.categoria, 'cara');
  });

  it('deve retornar mensagem quando não houver pagamento realizado', function () {
    const servico = new ServicoPagamento();

    const resultado = servico.consultarUltimoPagamento();

    assert.strictEqual(resultado, 'Nenhum pagamento realizado.');
  });
});
