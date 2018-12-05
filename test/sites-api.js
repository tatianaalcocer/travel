const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const db = require('../models');
const expect = chai.expect;

chai.use(chaiHttp);

let request;

describe('GET /api/sites', function () {

    beforeEach(function () {
        request = chai.request(server);
    });

    it('should return points of interest', function(done) {

        request.get('/api/sites').end(function(err, res) {
            let responseStatus = res.status;
            let responseBody = res.body;

            expect(err).to.be.null;

            expect(responseStatus).to.equal(200);

            expect(responseBody)
                .to.be.an('array')
                .that.has.lengthOf(1);
            
            expect(responseBody[0])
                .to.be.an('object')
                .that.has.all.keys({ type: point_of_interest });

        done();

        })
    })
})