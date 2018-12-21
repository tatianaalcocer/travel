/**
 * @fileoverview Appends the restaurants in the city.
 * @author Winson Mahathre
 */ 


/**
 * Using GET request, appends first 10 results from Yelp-Fusion API to the page.
 */
const getRestaurantList = function(e){
  e.preventDefault();
  $('#restaurant').empty();
  $('#restaurant').append(`<div class="search-topic"><h1>Restaurant</h1><div>`)
  $.get(`api/restaurant/${$('#location').val()}`)
  .then( function(data){
    for (let i = 0; i < 10; i++){
      $('#restaurant').append(` <a target="_blank" href="${data[i].url}"<div class="response">${data[i].name}</a><div>`)
    }
  }
  )
}

/**
 * submit button enables the app to upload the requested data (first ten items)
 */

$('#submit').on('click', getRestaurantList);
const showMore = function(e){
  e.preventDefault();


  /**
 * Using GET request, appends next 10 results from Yelp-Fusion API using the backend-logic.
 */
  
  $.get(`api/restaurant/${$('#location').val()}`)
  .then( function(data){
      for (let i = 0; i < data.length; i++){
   
      $('#restaurant').append(` <a target="_blank" href="${data[i].url}"<div class="response">${data[i].name}</a><div>`)
    }
  }
  )
}

/**
 * btn-showmore enables the app to upload the requested data (next ten items)
 */

$('#btn-showMore').on('click', showMore);