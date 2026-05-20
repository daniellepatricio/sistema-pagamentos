class ServicoPagamento {
  constructor() {
    this.pagamentos = [];
  }

  realizarPagamento(codigoBarras, empresa, valor) {
    const pagamento = {
      codigoBarras,
      empresa,
      valor,
      categoria: valor > 100 ? 'cara' : 'padrão'
    };

    this.pagamentos.push(pagamento);

    return pagamento;
  }

  consultarUltimoPagamento() {
    if (this.pagamentos.length === 0) {
      return 'Nenhum pagamento realizado.';
    }

    return this.pagamentos[this.pagamentos.length - 1];
  }
}

module.exports = ServicoPagamento;
