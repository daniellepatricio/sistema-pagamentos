# Sistema de Pagamentos
Projeto desenvolvido como trabalho de pós-graduação em Automação de Testes, com foco na implementação de um serviço de pagamentos utilizando Javascript e aplicação de boas práticas de desenvolvimento, organização de código e testes automatizados.

## Objetivo do Projeto

Este projeto tem como objetivo praticar e demonstrar conhecimentos em:

- Lógica de programação
- Testes de código utilizando Mocha e Node Assert
- Geração de relatórios de execução de testes com Allure Report;
- Integração contínua (CI) com GitHub Actions;
- Versionamento de código utilizando Git e GitHub.


## Funcionalidades:
- Realizar pagamentos;
- Consultar o último pagamento realizado.


## Tecnologias Utilizadas:
- JavaScript (Node.js);
- Mocha;
- Node Assert;
- Allure Report;
- Git;
- GitHub.

## Execução dos Testes:

Para executar todos os testes automatizados:
```bash
yarn test
```

ou

```bash
npm test
```

## Geração de Relatórios com Allure:

O projeto utiliza o Allure Report para geração de relatórios detalhados da execução dos testes automatizados.

### Executar os testes gerando resultados do Allure:
```bash
yarn test:allure
```

Após a execução, será criada a pasta:

- allure-results/

aonde serão guardados os resultados brutos dos testes.

### Gerar o relatório HTML:
```bash
yarn allure:generate
```

Será criada a pasta:

- allure-reports/

com o relatório consolidado.

### Abrir o relatório:
```bash
yarn allure:open
```

O relatório será aberto automaticamente no navegador.

### Executar todo o processo:
```bash
yarn report
```

Este comando:

Executa os testes;
1. Gera os resultados do Allure;
2. Cria o relatório HTML;
3. Abre o relatório no navegador.
4. Informações Apresentadas no Relatório

O relatório Allure fornece:

- Quantidade total de testes executados;
- Testes aprovados;
- Testes reprovados;
- Tempo de execução;
- Histórico das execuções;
- Detalhamento dos erros encontrados;
- Evidências de execução;
- Métricas de qualidade dos testes.

### Exemplo de Execução

```bash
yarn report
```

### Resultado esperado:

✔ Testes executados com sucesso

✔ Resultados gerados em allure-results

✔ Relatório HTML criado em allure-reports

✔ Relatório aberto no navegador
