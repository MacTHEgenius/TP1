describe("inscription tests", function(){
	beforeEach(function(){
		browser.get("#/search");
	});
	
	it("should not display any error at first", function() {
		element(by.id('emptyErrorId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
  		element(by.id('noResultErrorId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
	});
	
	it("should show error when notified", function(){
		element(by.id("submitButtonId")).click();
		element(by.id('emptyErrorId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeTruthy();
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
  		element(by.id('noResultErrorId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
		
	});
});
