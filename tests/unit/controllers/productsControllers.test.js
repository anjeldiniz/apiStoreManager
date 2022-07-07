const sinon = require('sinon');
const { expect } = require('chai');
const ProductsService = require('../../../services/productsService');
const ProductsController = require('../../../controllers/productsController');

describe('Testando o productsController', () => {
  const res = {};
  const req = {};
   const resolve = [{ id: 1, name: 'pão de queijo' }];

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(ProductsService, 'getAll').resolves(resolve);
  });

  afterEach(() => {
    ProductsService.getAll.restore();
  });

  it('Testa se retorna status 200', async () => {
    await ProductsController.getAll(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
  });

  it('Testa se retorna um array', async () => {
    await ProductsController.getAll(req, res);
    expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
  });
});
