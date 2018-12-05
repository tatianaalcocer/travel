const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const db = require('../models');
const expect = chai.expect;

chai.use(chaiHttp);

let request;

describe('GET /api/events', function() {
    beforeEach(function () {
        request = chai.request(server);
    });

    it('should find any event around the specified area', function (done) {
         //Request the route to return the examples
    request.get('/api/users').end(function(err, res) {
        let responseStatus = res.status;
        let responseBody =  res.body;

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
        .to.be.an('array')
        .that.has.lengthOf(1);

        expect(responseBody[0])
          .to.be.an('object')
          .to.have.key('name')
<<<<<<< HEAD

          done();
=======
>>>>>>> 13f3c919e899dc728e861044007e350f2a008bb2
    })
    });
});