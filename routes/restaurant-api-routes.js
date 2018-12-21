/**
 * @author Winson Mahathre
 * use Yelp-Fusion API to retrieve restaurants data
 */

/**
 *Protect API keys using dotenv
 */
require('dotenv').config()
const yelp = require('yelp-fusion');
  
/**
 *use cachedLocation to store the city name
 */

let cachedLocation = ''
let currentOffset = 0
         const client = yelp.client(`${process.env.YELP_API}`);
        
         module.exports = function (app) {
         
 /**
 * GET request to retrieve restaurant location.
 * use limit to return only 10 results
 * offset allows to return the next set of 10
 * if statement changes currentOffset back to 0 when a new city is entered
 */
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