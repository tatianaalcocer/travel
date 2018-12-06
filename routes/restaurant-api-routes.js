module.exports = function (app) {


    module.exports = function (app) {

        'use strict';
     
        const yelp = require('yelp-fusion');
         
        const client = yelp.client(process.env.YELP_API);
         
        client.search({
          term:'Four Barrel Coffee',
          location: 'san francisco, ca'
        }).then(response => {
          console.log(response.jsonBody.businesses[0].name);
        }).catch(e => {
          console.log(e);
        });
    
    
    }
}