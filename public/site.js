/**
 * @fileoverview Appends to page the names and street addresses for sites of interest (e.g., museums) listed in Google Places API for the user-inputted US city.
 * @author Veronica Lee
 */

/**
 * Creates global variable in order to loop through additional results upon clicking 'More' button.
 */
let showMoreCount = 0;

/**
 * Using GET request, appends first 10 results (name and formatted address only) from Google Places API to the page.
 */
const getSiteList = function (e) {
    e.preventDefault();
    $('#sites').empty();
    $('#sites').append(`<div class="search-topic"><h1>Sites</h1><div>`)
    $.get(`api/sites/${$('#location').val()}`)
        .then(function (data) {
            for (let i = 0; i < 10; i++) {
                $('#sites').append(`<div class="response">${data[i].name}<div>`)
                $('#sites').append(`<div class="response-address">${data[i].formatted_address}<div>`)
            }
        })
}

/**
 * Using GET request, appends next 10 results from Google Places API.
 */
const showMoreSites = function (e) {
    e.preventDefault();
    showMoreCount++;
    $.get(`api/sites/${$('#location').val()}`)
        .then(function (data) {
            for (let i = showMoreCount * 10 + 1; i < showMoreCount * 10 + 11; i++) {
                $('#sites').append(`<div class="response">${data[i].name}<div>`)
                $('#sites').append(`<div class="response-address">${data[i].formatted_address}<div>`)
            }
        })
}

/**
 * Upon clicking 'submit' button on index, the getSiteList function runs in order to append results to the page.
 */
$('#submit').on('click', getSiteList);
/**
 * Upon clicking 'more' button, additional results append to the page.
 */
$('#btn-showMore').on('click', showMoreSites);