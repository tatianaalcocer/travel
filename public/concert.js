const getEventList = function (e) {
  e.preventDefault();
  $('#event').empty();
  $('#event').append(`<div class="search-topic"><h1>Events</h1><div>`)
  $.get(`/api/events/${$('#location').val()}`)
    .then(function (data) {
      console.log('events hit')
      for (let i = 0; i <= 10; i++) {
        console.log('events loop hit')
        $('#event').append(`<div class="response"><a href='${data[i].url}'target='_blank'>${data[i].name}</a><div>`)
      }
    })
}

const showMoreEvents = function (e) {
  e.preventDefault();
  console.log('show more events hit')
  $.get(`/api/events/${$('#location').val()}`)
    .then(function (data) {
      console.log(data);
      for (let i = showMoreCount * 10 + 1; i < showMoreCount * 10 + 11; i++) {
        console.log('show more events loop hit')

        $('#event').append(`<div class="response"><a href='${data[i].url}'target='_blank'>${data[i].name}</a><div>`)
      }
    })
}

$('#submit').on('click', getEventList);
$('#btn-showMore').on('click', showMoreEvents);