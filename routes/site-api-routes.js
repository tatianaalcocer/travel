const $ = require('axios');
require('dotenv').config();

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