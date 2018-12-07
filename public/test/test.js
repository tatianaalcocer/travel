
describe('renders to the page', function (){

    beforeEach(function () {
      $("#restaurant").empty();
    });
  
    it('renders 10 restaurant to the page', function () {
      $('#location').val('atlanta');
      $('#sumbit').trigger('click');
      expect($('.response').length).to.equal(10);
  
    });
  
    it('prints no results for an invalid input', function() {
      $('#location').val('gibberish');
      $('#sumbit').trigger('click');
      expect($('#restaurant').text()).to.equal('no results');
    });
  });