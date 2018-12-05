const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const db = require('../models');
const expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

let request;


describe('GET /api/examples', function () {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function () {
    request = chai.request(server);
  });

  it('should find all examples', function (done) {



    request.get('/api/users').end(function (err, res) {
      //Save the response
      let responseStatus = res.status;
      let responseBody = res.body;


      //Write test expectations
      expect(err).to.be.null;

      expect(responseStatus).to.equal(200);

      expect(responseBody)
        .to.be.an('array')
        .that.has.lengthOf(1)

      expect(responseBody[0])
        .to.be.an('object')
        .to.have.key('name')


        done();


    });

  });
});

  // expect to show user the name of the restaurant
  // expect to show user the rating of the restaurant
  // expect to show user the location of the restaurant
  // expect to allow the user to make a reservation to the restaurant