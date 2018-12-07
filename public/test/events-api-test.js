describe('renders to the page', function (){
    beforeEach(function (){
        $("#concert").empty();
    });

    it('render to events to the page', function (){
        $('#location').val('atlanta');
        $('#submit').trigger('click');
        expect($('.response').length).to.equal(10);
    });

    it('prints no results for an invalid input', function() {
        $('#location').val('nxsnjcnsjxnsj');
        $('#submit').trigger('click');
        expect($('#concert').text().to.equal('no results'));
    })
})