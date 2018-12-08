const getEventList = function(e){
  e.preventDefault();
  $.get(`api/event/${$('#location').val()}`)
  .then( function(data){
    for (let i = 0; i < 10; i++){
      $('#event').append(`<div class="response">${data[i].name}<div>`)
    }
  }
  )
}

$('#submit').on('click', getEventList);
