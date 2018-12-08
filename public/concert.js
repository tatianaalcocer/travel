let showMoreCount = 0;
const getEventList = function(e){
    e.preventDefault();
    $('#event').empty();
    $.get(`/api/events/${$('#location').val()}`)
    .then( function(data){
      for (let i = 0; i < 10; i++){
        $('#event').append(`<div class="response"><a href='${data[i].url}'target='_blank'>${data[i].name}</a><div>`)
      }
    })
  }

const showMoreEvents = function(e){
    e.preventDefault();
    showMoreCount++;
    $.get(`/api/events/${$('#location').val()}`)
    .then( function(data){
      console.log(data);
      for (let i = showMoreCount * 10 + 1; i < showMoreCount * 10 + 11; i++) {
        $('#event').append(`<div class="response"><a href='${data[i].url}'target='_blank'>${data[i].name}</a><div>`)
        }
      })
  }
  
  $('#submit').on('click', getEventList);
  $('#btn-showMore').on('click', showMoreEvents);