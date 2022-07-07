const sinon = require('sinon');
const { expect } = require('chai');

const productsService = require('../../../services/productsService');
const productsModels = require('../../../models/productsModel');

describe('Consulta os Produtos no BD e retorna todos os dados encontrados', () => {
  const resolve = [{ id: 1, name: 'pão de queijo' }];

  beforeEach(() => {
    sinon.stub(productsModels, 'getAll').resolves(resolve);
  });

  afterEach(() => {
    productsModels.getAll.restore();
  });
  
  it('Retorna todos os produtos', async () => {
    const prod = await productsService.getAll();
    expect(prod).to.be.equal(resolve);
  });
});
