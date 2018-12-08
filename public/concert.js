const getEventList = function(e){
    e.preventDefault();
    $('#event').empty();
    $.get(`/api/events/${$('#location').val()}`)
    .then( function(data){
      for (let i = 0; i < 10; i++){
        $('#event').append(`<div class="response"><a href='${data[i].url}'target='_blank'>${data[i].name}</a><div>`)
      }
    }
    )
  }
  
  $('#submit').on('click', getEventList);