const getRestaurantList = function(e){
    e.preventDefault();
    $('#restaurant').empty();
    $.get(`api/restaurant/${$('#location').val()}`)
    .then( function(data){
      for (let i = 0; i < 10; i++){
        $('#restaurant').append(` <a target="_blank" href="${data[i].url}"<div class="response">${data[i].name}</a><div>`)
      }
    }
    )
  }

  $('#submit').on('click', getRestaurantList);