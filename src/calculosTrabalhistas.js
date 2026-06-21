class ServicoDePagamentoBancario {

  constructor() {
    this.pagamentos = [];
  }

  pagar(codigoBarras, empresa, valor) {

    const categoria = valor > 100 ? 'cara' : 'padrão';

    const pagamento = {
      codigoBarras,
      empresa,
      valor,
      categoria
    };

    this.pagamentos.push(pagamento);
    return 'Pagamento realizado com sucesso.';
  }

  consultarUltimoPagamento() {

    if (this.pagamentos.length === 0) {
      return 'Nenhum pagamento efetuado.';
    }

    return this.pagamentos[this.pagamentos.length - 1];
  }
}

export default ServicoDePagamentoBancario;
