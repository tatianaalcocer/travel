/**
 * @author Banesa Guaderrama
 * use TicketMaster Developer API to retrieve events data
 */

/**
 *Protect API keys using dotenv
 */
const $ = require('axios');
require('dotenv').config()

module.exports = function (app) {
/** 
 * Get method to contact TicketMaster information through its developer API
 */   
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