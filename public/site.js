/**
 * @fileoverview Appends to page the names and street addresses for sites of interest (e.g., museums) listed in Google Places API for the user-inputted US city.
 * @author Veronica Lee
 */ 
 
 
 /**
 * Creates global variable in order to store the token and the remaing results of the data.
 */
let token = "";
let remainingResults = []; 
const getSiteList = function (e) {
    e.preventDefault();
    $('#sites').empty();
    $('#sites').append(`<div class="search-topic"><h1>Sites</h1><div>`)
    $.get(`api/sites/search/${$('#location').val()}`)
    
        .then(function (data) {

            token = data.next_page_token;
 /**
 * Renders the first 10 and saves the next 10 in remainingResults
 */
            for (let i = 0; i < 10; i++) {
            
                $('#sites').append(`<div class="response">${data.results[i].name}<div>`)
                $('#sites').append(`<div class="response-address">${data.results[i].formatted_address}<div>`)
            }
            remainingResults = data.results.slice(10); 
        })
}

/**
 * Renders the remaining results if there is any left
 * Empty the array at the end so it does not duplicate
 */
const showMoreSites = function (e) {
    e.preventDefault();
     
     if (remainingResults.length > 0) { 
        for (let i = 0; i < 10; i++) {
            console.log('sites loop hit')
                $('#sites').append(`<div class="response">${remainingResults[i].name}<div>`)
                $('#sites').append(`<div class="response-address">${remainingResults[i].formatted_address}<div>`)
            }
            remainingResults = []; 
     }
     else {
/**
 * Using the next page token appends the first 10 and saves the next 10 in remainingResults
 * Runs through the if statement and empty the array at the end
 */
    $.get(`api/sites/more/${token}`)   
        .then(function (data) {
                 console.log('show more sites loop hit')
                 console.log(data);
                 token = data.next_page_token;
            for (let i = 0; i < 10; i++) {
                $('#sites').append(`<div class="response">${data.results[i].name}<div>`)
                $('#sites').append(`<div class="response-address">${data.results[i].formatted_address}<div>`)
            }
            remainingResults = data.results.slice(10); 
        })
    }
}

/**
 * submit button enables the app to upload the requested data (first ten items)
 */

$('#submit').on('click', getSiteList);

/**
 * btn-showmore enables the app to upload the requested data (next ten items)
 */
$('#btn-showMore').on('click', showMoreSites);