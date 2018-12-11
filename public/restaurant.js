// let showMoreCount = 0;
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

  $('#submit').on('click', getRestaurantList);



  const showMore = function(e){
    e.preventDefault();
    // showMoreCount++
    $.get(`api/restaurant/${$('#location').val()}`)
    .then( function(data){
        for (let i = showMoreCount * 10 + 1; i < showMoreCount * 10 + 11; i++) {
     
        $('#restaurant').append(` <a target="_blank" href="${data[i].url}"<div class="response">${data[i].name}</a><div>`)
      }
    }
    )
  }

  $('#btn-showMore').on('click', showMore);


//   showMore = function() {
//       showMoreCount++;
//       for (i = (showMoreCount * 10) + 1; i < (showMoreCount * 10) + 1; i++
//   }