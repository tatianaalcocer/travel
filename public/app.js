$(document).ready(function(){
	$('#results').hide();
    $('#btn-showMore').hide();

    $('#submit').on('click', function(){
        $('#btn-showMore').show();
        $('#landing').hide();
        $('#results').show();
    });
})