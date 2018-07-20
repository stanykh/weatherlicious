'use strict';
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('HTTP routes test', () => {
  describe('/GET /owm/city/Kuala%20Lumpur', () => {
      it('it should found the route /owm/city', (done) => {
        chai.request(app)
            .get('/owm/city/Kuala%20Lumpur')
              .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                done();
              });
      });
  });
});
