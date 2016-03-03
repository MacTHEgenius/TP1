describe("contact tests", function(){
	beforeEach(function(){
		browser.get("/contact");
	});
	
	it("should not display confirmation when form is invalid", function() {
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
	});
	
	it("should display confirmatino when form is valid", function(){
		element(by.model("username")).sendKeys("a");
		element(by.model("reason")).sendKeys("Problème technique");
		element(by.model("email")).sendKeys("a@b");
		element(by.model("message")).sendKeys("a");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeTruthy();
  		});
	});
	
	it("should not validate if email is not formated", function(){
		element(by.model("username")).sendKeys("a");
		element(by.model("reason")).sendKeys("Problème technique");
		element(by.model("email")).sendKeys("a");
		element(by.model("message")).sendKeys("a");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
		element(by.model("email")).clear();
		element(by.model("email")).sendKeys("aName@myMail.com");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeTruthy();
  		});
  	});
  	
  	it("should not validate if any field is left blank", function(){
		element(by.model("username")).sendKeys("a");
		element(by.model("email")).sendKeys("a@b");
		element(by.model("message")).sendKeys("a");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
		element(by.model("username")).clear();
		element(by.model("reason")).sendKeys("Problème technique");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
  		element(by.model("email")).clear();
		element(by.model("username")).sendKeys("a");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
  		element(by.model("message")).clear();
		element(by.model("email")).sendKeys("a@c");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeFalsy();
  		});
  		element(by.model("message")).sendKeys("a");
  		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		expect(visible).toBeTruthy();
  		});
  	});
});
