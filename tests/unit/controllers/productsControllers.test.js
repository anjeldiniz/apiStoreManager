const sinon = require('sinon');
const { expect } = require('chai');
const ProductsService = require('../../../services/productsService');
const ProductsController = require('../../../controllers/productsController');

describe('Ao chamar o controller', () => {
  describe('quando o payload informado não é válido', async () => {
    const res = {};
    const req = {};
    // const mock = [
    //   { id: 1, name: 'pão de queijo' },
    //   { id: 2, name: 'brigadeiro' },
    // ];

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.send = sinon.stub().returns();

      // sinon.stub(ProductsService, 'getAll').resolves(mock);
    });

    afterEach(() => {
      ProductsService.getAll.restore();
    });

    it('Testa se retorna status 200', async () => {
      await ProductsController.getAll(res, req);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('Testa se retorna um array', async () => {
      await ProductsController.getAll(res, req);
      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });
});
