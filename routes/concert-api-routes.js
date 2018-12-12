const $ = require('axios');
require('dotenv').config()

module.exports = function (app) {
   
    app.get('/api/events/:location', function(req,res){
        $.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=100&city=${req.params.location}&apikey=${process.env.TICKET_API}`)
        .then(function(response){
            res.json(response.data._embedded.events);
          })
          .catch(function (err) {
            res.json(err);
        });

    })
}