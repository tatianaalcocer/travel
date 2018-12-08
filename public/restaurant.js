const getRestaurantList = function(e){
    e.preventDefault();
    $('#restaurant').empty();
    $.get(`api/restaurant/${$('#location').val()}`)
    .then( function(data){
      for (let i = 0; i < 10; i++){
        $('#restaurant').append(`<div class="response">${data[i].name}<div>`)
      }
    }
    )
  }
  
  $('#submit').on('click', getRestaurantList);