const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connections');
const salesModel = require('../../../models/salesModel');

describe('Consultar as vendas no Banco de Dados', () => {
  const resolve = [[{ id: 1, name: 'pão de queijo' }]];

  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves(resolve);
  });

  afterEach(() => {
    connection.execute.restore();
  });

  it('Testando todas as vendas se são retornadas', async () => {
    const prod = await salesModel.getAll();
    expect(prod).to.be.equal(resolve[0]);
  });
});
