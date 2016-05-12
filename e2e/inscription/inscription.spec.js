describe("inscription tests", function(){
	beforeEach(function(){
		browser.get("#/inscription");
	});
	
	it("should not display confirmation when form is invalid", function() {
		var isVisible;
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeFalsy();
		});
	});
	//missing httpBackEnd
	it("should display confirmation when form is valid", function(){
		var isVisible;
		element(by.model("firstName")).sendKeys("aaa");
		element(by.model("nameM")).sendKeys("aaa");
		element(by.model("emailM")).sendKeys("a@a.a");
		element(by.model("passwordM")).sendKeys("aaa");
		element(by.model("confirmPasswordM")).sendKeys("aaa");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeTruthy();
		});
	});
	
	it("should not validate if passwords are different", function(){
		var isVisible;
		element(by.model("firstName")).sendKeys("aaa");
		element(by.model("nameM")).sendKeys("aaa");
		element(by.model("emailM")).sendKeys("a@a.a");
		element(by.model("passwordM")).sendKeys("aaa");
		element(by.model("confirmPasswordM")).sendKeys("aab");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeFalsy();
		});
		element(by.model("confirmPasswordM")).clear();
		element(by.model("confirmPasswordM")).sendKeys("aaa");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeTruthy();
		});
	});
	
	it("should not validate if email is not formated", function(){
		var isVisible;
		element(by.model("firstName")).sendKeys("aaa");
		element(by.model("nameM")).sendKeys("aaa");
		element(by.model("emailM")).sendKeys("a");
		element(by.model("passwordM")).sendKeys("aaa");
		element(by.model("confirmPasswordM")).sendKeys("aaa");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeFalsy();
		});
		element(by.model("emailM")).clear();
		element(by.model("emailM")).sendKeys("a@a.a");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeTruthy();
		});
  	});
  	
  	it("should not validate if any field is left blank", function(){
		var isVisible;
		element(by.model("nameM")).sendKeys("aaa");
		element(by.model("emailM")).sendKeys("a@a.a");
		element(by.model("passwordM")).sendKeys("aaa");
		element(by.model("confirmPasswordM")).sendKeys("aaa");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeFalsy();
		});
		element(by.model("nameM")).clear();
		element(by.model("firstName")).sendKeys("aaa");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeFalsy();
		});
  		element(by.model("emailM")).clear();
		element(by.model("nameM")).sendKeys("aaa");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeFalsy();
		});
  		element(by.model("passwordM")).clear();
		element(by.model("emailM")).sendKeys("a@a.a");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeFalsy();
		});
  		element(by.model("confirmPasswordM")).clear();
		element(by.model("passwordM")).sendKeys("aaa");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeFalsy();
		});
  		element(by.model("confirmPasswordM")).sendKeys("aaa");
  		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeTruthy();
		});
  	});
});
