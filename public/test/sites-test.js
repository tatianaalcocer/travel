describe('render to the page', function() {

    beforeEach (function () {
        $('#sites').empty();
    });

    it('renders 10 sites to the page', function () {
        $('#location').val('Atlanta');
        $('#submit').trigger('click');
        expect($('.response').length).to.equal(10);
    });

    it('prints no results for an invalid input', function () {
        $('#location').val('dlksdha');
        $('#submit').trigger('click');
        expect('#sites').text().to.equal('no results');
    });
    
});