const getSiteList = function (e) {
    e.preventDefault();
    $('#sites').empty();
    $.get(`api/sites/${$('#location').val()}`)
        .then(function (data) {
            for (let i = 0; i < 10; i++) {
                $('#sites').append(`<div class="response">${data[i].name}<div>`)
                $('#sites').append(`<div class="response-address">${data[i].formatted_address}<div>`)
            }
        })
}

const showMoreSites = function (e) {
    e.preventDefault();
    $.get(`api/sites/${$('#location').val()}`)
        .then(function (data) {
            for (let i = 11; i < 21; i++) {
                $('#sites').append(`<div class="response">${data[i].name}<div>`)
                $('#sites').append(`<div class="response-address">${data[i].formatted_address}<div>`)
            }
        })
}

$('#submit').on('click', getSiteList);
$('#btn-showMore').on('click', showMoreSites);