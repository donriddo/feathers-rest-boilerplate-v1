'use strict';

const chai = require('chai');
const chaiHTTP = require('chai-http');
const should = chai.should(),
      expect = chai.expect,
      assert = chai.assert;
const app = require('../src/app.test');
chai.use(chaiHTTP);


describe('Feathers application tests', function() {
  before(function(done) {
    this.server = app.listen(3030);
    this.server.once('listening', () => done());
  });

  after(function(done) {
    this.server.close(done);
  });

  it('should return 200: App loaded successfully', function(done) {
      chai.request(app)
      .get('/')
      .end((err, res) => {
          expect(res).to.have.status(200);
          done();
      });
  });

  describe('404', function() {
    it('should return 404: Page not found', function(done) {
        chai.request(app)
        .get('/path/to/nowhere')
        .end((err, res) => {
            expect(res).to.have.status(404);
            expect(res.body).to.have.property('name');
            expect(res.body.name).to.equal('NotFound');
            done();
        });
    });

  });
});
