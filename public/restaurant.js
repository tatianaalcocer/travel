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



  const showMore = function(e){
    e.preventDefault();
    
    $.get(`api/restaurant/${$('#location').val()}`)
    .then( function(data){
        
      for (let i = 0; i < data.length; i++){
        $('#restaurant').append(` <a target="_blank" href="${data[i].url}"<div class="response">${data[i].name}</a><div>`)
      }
    }
    )
  }

  $('#btn-showMore').on('click', showMore);