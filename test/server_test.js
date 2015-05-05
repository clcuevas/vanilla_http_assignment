'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

require('../server.js');

describe('our server', function() {
  it('should respond to a get request', function(done) {
    chai.request('localhost:3000')
      .get('/greet')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        expect(res).to.be.text;
        //expect(res.body.msg).to.eql({msg: 'hello world'}); 
        done();
      });
  });

  it('should greet by name for post requests', function(done) {
    chai.request('localhost:3000')
      .get('/greet/claudia')
      //.send({msg: 'hello claudia'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.be.json;
        //expect(res).to.eql('hello claudia');
        done();
      });
  });

  it('should have a 404 page', function(done) {
    chai.request('localhost:3000')
      .get('/somepagethatdoesnotexist')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(404);
        expect(res.body.msg).to.eql('404 Page Not Found');
        done();
      });
  });
});