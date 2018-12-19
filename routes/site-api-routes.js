/**
 * @fileoverview Backend file to obtain data from Google Places API.
 * @author Veronica Lee
 */

/**
 * Must require dotenv in order to utilize protected API keys.
 */

const $ = require('axios');
require('dotenv').config();

module.exports = function (app) {

/**
 * GET request to retrieve points of interest from Google Places API.
 */

    app.get('/api/sites/search/:location', function (req, res) {
        $.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=
        ${req.params.location}+point+of+interest&language=en&key=${process.env.PLACES_API}`)
            .then(function (response) {
                
                res.json(response.data)
                
            })
            .catch(function (err) {
                res.json(err);
            });
    })

/**
 * GET request to return the page token results.
 */
    app.get('/api/sites/more/:pagetoken', function (req, res) {
        $.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?language=en&key=${process.env.PLACES_API}&pagetoken=${req.params.pagetoken}`)
            .then(function (response) {
                
                res.json(response.data);
            })
            .catch(function (err) {
                res.json(err);
            });
    })
}