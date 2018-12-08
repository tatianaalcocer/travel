let showMoreCount = 0;

const getSiteList = function (e) {
    e.preventDefault();
    $('#sites').empty();
    $.get(`api/sites/${$('#location').val()}`)
        .then(function (data) {
            for (let i = 0; i < 10; i++) {
                $('#sites').append(`<div class="response">${data[i].name}<div>`)
                $('#sites').append(`<div class="response-address">${data[i].formatted_address}<div>`)
            }
            // if (data = false) {
            //     const noResults = 'No results found';
            //     noResults();
            // }
        })
}

const showMoreSites = function (e) {
    e.preventDefault();
    showMoreCount++;
    $.get(`api/sites/${$('#location').val()}`)
        .then(function (data) {
            for (let i = showMoreCount * 10 + 1; i < showMoreCount * 10 + 11; i++) {
                $('#sites').append(`<div class="response">${data[i].name}<div>`)
                $('#sites').append(`<div class="response-address">${data[i].formatted_address}<div>`)
            }
        })
}

$('#submit').on('click', getSiteList);
$('#btn-showMore').on('click', showMoreSites);