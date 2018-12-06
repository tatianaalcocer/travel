const $ = require('axios');
require('dotenv').config()

module.exports = function (app) {
    app.get('/api/sites/:location', function (req, res) {
        $.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?location=${req.params.location}+points_of_interest&apikey=${process.env.PLACES_API}`)
            .then(function (response) {
                res.json(response.data);
            })
    })
}