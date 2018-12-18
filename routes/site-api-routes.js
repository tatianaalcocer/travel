/**
 * @fileoverview Backend file to obtain data from Google Places API.
 * @author Veronica Lee
 */

/**
 * Must require dotenv in order to utilize protected API keys.
 */
const $ = require('axios');
require('dotenv').config();

/**
 * GET request to retrieve points of interest from Google Places API.
 */
module.exports = function (app) {
    app.get('/api/sites/:location', function (req, res) {
        $.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.params.location}+point+of+interest&language=en&key=${process.env.PLACES_API}`)
            .then(function (response) {
                res.json(response.data.results);
            })
            .catch(function (err) {
                res.json(err);
            });
    })
}