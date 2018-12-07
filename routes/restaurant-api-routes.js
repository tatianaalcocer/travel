'use strict';
require('dotenv').config()

        const yelp = require('yelp-fusion');
         
        const client = yelp.client(`${process.env.YELP_API}`);
        
         module.exports = function (app) {

        
        app.get('/api/restaurant/:location', function (req, res) {

            client.search({ 
            term:'food',
            location: req.params.location
            }).then(response => {
            res.json(response.jsonBody.businesses);
            }).catch(e => {
            res.json(e);
            });
    
    });
    
}