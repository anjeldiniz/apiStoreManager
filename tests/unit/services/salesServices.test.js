const sinon = require('sinon');
const { expect } = require('chai');

const salesService = require('../../../services/salesService');
const salesModels = require('../../../models/salesModel');

describe('Consulta as vendas no BD e retorna todos os dados encontrados', () => {
  const resolve = [{ id: 1, name: 'pão de queijo' }];

  beforeEach(() => {
    sinon.stub(salesModels, 'getAll').resolves(resolve);
  });

  afterEach(() => {
    salesModels.getAll.restore();
  });

  it('Retorna todos as vendas', async () => {
    const prod = await salesService.getAll();
    expect(prod).to.be.equal(resolve);
  });
});
