const sinon = require('sinon');
const { expect } = require('chai');
const salesService = require('../../../services/salesService');
const salesController = require('../../../controllers/salesController');

describe('Testando o salesController', () => {
  describe('quando a função getAll', async () => {
    const res = {};
    const req = {};
    const resolve = [{ id: 1, name: 'pão de queijo' }];

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'getAll').resolves(resolve);
    });

    afterEach(() => {
      salesService.getAll.restore();
    });

    it('Testa se retorna status 200', async () => {
      await salesController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('Testa se retorna um array', async () => {
      await salesController.getAll(req, res);
      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });
});
