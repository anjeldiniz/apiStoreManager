const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connections');
const productsModel = require('../../../models/productsModel');

describe('Consulta um produto no Banco de Dados', () => {
  const resolve = [[{ id: 1, name: 'pão de queijo' }]];
  
  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves(resolve);
  });

  afterEach(() => {
    connection.execute.restore();
  });

  it('Testando se todos os produtos são retornados', async () => {
    const prod = await productsModel.getAll();
    expect(prod).to.be.equal(resolve[0]);
  });
});