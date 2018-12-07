const $ = require('axios');
require('dotenv').config()

module.exports = function (app) {
    console.log("api-route")
    app.get('/api/events/:location', function(req,res){
        console.log("city")
        $.get(`https://app.ticketmaster.com/discovery/v2/events.json?city=${req.params.location}&apikey=${process.env.TICKET_API}`)
        .then(function(response){
            res.json(response.data._embedded.events);
          })
    })
}