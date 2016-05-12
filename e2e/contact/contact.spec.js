describe("contact tests", function(){
	beforeEach(function(){
		browser.get("/contact");
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
	
	it("should display confirmatino when form is valid", function(){
		var isVisible;
		element(by.model("usernameM")).sendKeys("a");
		element(by.model("reasonM")).sendKeys("Problème technique");
		element(by.model("emailM")).sendKeys("a@b");
		element(by.model("messageM")).sendKeys("a");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeTruthy();
		});
	});
	
	it("should not validate if emailM is not formated", function(){
		var isVisible;
		element(by.model("usernameM")).sendKeys("a");
		element(by.model("reasonM")).sendKeys("Problème technique");
		element(by.model("emailM")).sendKeys("a");
		element(by.model("messageM")).sendKeys("a");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeFalsy();
		});
		element(by.model("emailM")).clear();
		element(by.model("emailM")).sendKeys("aName@myMail.com");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeTruthy();
		});
  	});
  	
  	it("should not validate if any field is left blank", function(){
		element(by.model("usernameM")).sendKeys("a");
		element(by.model("emailM")).sendKeys("a@b");
		element(by.model("messageM")).sendKeys("a");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeFalsy();
		});
		element(by.model("usernameM")).clear();
		element(by.model("reasonM")).sendKeys("Problème technique");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeFalsy();
		});
  		element(by.model("emailM")).clear();
		element(by.model("usernameM")).sendKeys("a");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeFalsy();
		});
  		element(by.model("messageM")).clear();
		element(by.model("emailM")).sendKeys("a@c");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeFalsy();
		});
  		element(by.model("messageM")).sendKeys("a");
  		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeTruthy();
		});
  	});
});
