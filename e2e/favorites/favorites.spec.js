describe("favorites tests", function(){
	beforeEach(function(){
		browser.executeScript('window.localStorage.clear();');
		browser.get("#/favorites");
		
	});
	
/*	it("should not display any error at first", function() {
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
	});*/
	//false sans connexion internet
});
