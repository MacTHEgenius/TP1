describe("inscription tests", function(){
	beforeEach(function(){
		browser.get("#/inscription");
	});
	
	it("should not display confirmation when form is invalid", function() {
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
	});
	
	it("should display confirmatino when form is valid", function(){
		element(by.model("firstName")).sendKeys("a");
		element(by.model("nameM")).sendKeys("a");
		element(by.model("emailM")).sendKeys("a@b");
		element(by.model("passwordM")).sendKeys("a");
		element(by.model("confirmPasswordM")).sendKeys("a");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeTruthy();
  		});
	});
	
	it("should not validate if passwords are different", function(){
		element(by.model("firstName")).sendKeys("a");
		element(by.model("nameM")).sendKeys("a");
		element(by.model("emailM")).sendKeys("a@b");
		element(by.model("passwordM")).sendKeys("a");
		element(by.model("confirmPasswordM")).sendKeys("b");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
		element(by.model("confirmPasswordM")).clear();
		element(by.model("confirmPasswordM")).sendKeys("a");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeTruthy();
  		});
	});
	
	it("should not validate if email is not formated", function(){
		element(by.model("firstName")).sendKeys("a");
		element(by.model("nameM")).sendKeys("a");
		element(by.model("emailM")).sendKeys("a");
		element(by.model("passwordM")).sendKeys("a");
		element(by.model("confirmPasswordM")).sendKeys("a");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
		element(by.model("emailM")).clear();
		element(by.model("emailM")).sendKeys("aName@myMail.com");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeTruthy();
  		});
  	});
  	
  	it("should not validate if any field is left blank", function(){
		element(by.model("nameM")).sendKeys("a");
		element(by.model("emailM")).sendKeys("a@b");
		element(by.model("passwordM")).sendKeys("a");
		element(by.model("confirmPasswordM")).sendKeys("a");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
		element(by.model("nameM")).clear();
		element(by.model("firstName")).sendKeys("a");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
  		element(by.model("emailM")).clear();
		element(by.model("nameM")).sendKeys("a");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
  		element(by.model("passwordM")).clear();
		element(by.model("emailM")).sendKeys("a@c");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
  		element(by.model("confirmPasswordM")).clear();
		element(by.model("passwordM")).sendKeys("a");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
  		element(by.model("confirmPasswordM")).sendKeys("a");
  		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeTruthy();
  		});
  	});
});
