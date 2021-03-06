/**
 * @author Banesa Guaderrama
 * Retrieve events data from TIcketMaster trough its developer API
 */


 /**
 * Creates global variable in order to loop through additional results upon clicking 'More' button.
 */
let showMoreCount = 0;


/**
 * 
 * @param {*} e prevents the default action of uploading data after 
 * using the loop to load more data and take just ten items though the GET method
 */
const getEventList = function (e) {
  e.preventDefault();
  $('#event').empty();
  $('#event').append(`<div class="search-topic"><h1>Events</h1><div>`)
  $.get(`/api/events/${$('#location').val()}`)
    .then(function (data) {
      console.log('events hit')
      for (let i = 0; i < 10; i++) {
        console.log('events loop hit')
        $('#event').append(`<div class="response"><a href='${data[i].url}'target='_blank'>${data[i].name}</a><div>`)
      }
    })
}

/**
 * 
 * @param {*} e prevents the default action of uploading data after 
 * using the loop to load more data and take just the next ten items through the GET method
 */
const showMoreEvents = function (e) {
  e.preventDefault();
  showMoreCount++;
  $.get(`/api/events/${$('#location').val()}`)
    .then(function (data) {
      
      for (let i = showMoreCount * 10 + 1; i < showMoreCount * 10 + 11; i++) {
       

        $('#event').append(`<div class="response"><a href='${data[i].url}'target='_blank'>${data[i].name}</a><div>`)
      }
    })
}

/**
 * submit button enables the app to upload the requested data (first ten items)
 */
$('#submit').on('click', getEventList);
/**
 * btn-showmore enables the app to upload the requested data (next ten items)
 */
$('#btn-showMore').on('click', showMoreEvents);