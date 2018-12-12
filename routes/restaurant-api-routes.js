'use strict';
require('dotenv').config()

        const yelp = require('yelp-fusion');
         
let cachedLocation = ''
let currentOffset = 0

        const client = yelp.client(`${process.env.YELP_API}`);
        
         module.exports = function (app) {

        
        app.get('/api/restaurant/:location/', function (req, res) {
            if (cachedLocation != req.params.location) {
                currentOffset = 0;
            }
            client.search({ 
            term:'food',
            location: req.params.location,
            limit: 10,
            offset: currentOffset * 10
            }).then(response => {
            res.json(response.jsonBody.businesses);
            }).catch(e => {
            res.json(e);
            });
            currentOffset++;
            cachedLocation = req.params.location;
    });
    
}