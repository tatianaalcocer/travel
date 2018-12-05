const $ = require('axios');
require('dotenv').config()

module.exports = function (app) {
    console.log("api-route")
    app.get('api/events/:location', function(req,res){
        console.log("city")
        $.get(`https://app.ticketmaster.com/discovery/v2/events.json?city=US${req.params.location}&apikey=${process.env.TICKET_API}`)
        // $.get(`https://app.ticketmaster.eu/mfxapi/v1/events.json?city=US${req.params.location}&apikey=${process.env.TICKET_API}`)
        .then(function(response){
            res.json(response.data);
          })
    })
}

//Example
// const $ = require('axios');
// require('dotenv').config()

// module.exports = function (app) {
//   app.get('FILL IN THE BLANK HERE WITH YOUR ROUTE AND PARAMETER', function(req,res){
//     $.get(`https://myqueryURL/stuffgoeshere/get-this-from-documentation&location=${req.params.location}&apikey=${process.env.TICKET_API}`)
//     .then(function(response){
//       res.json(response);
//     })
//   })
// }