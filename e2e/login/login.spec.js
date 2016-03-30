describe("login tests", function(){
	beforeEach(function(){
		browser.manage().deleteAllCookies();
		browser.get("#/login");
	});
	//missing httpbackend
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
	
	it("should display confirmation when form is valid", function(){
		var isVisible;
		element(by.model("emailM")).sendKeys("a@a.a");
		element(by.model("passwordM")).sendKeys("aaa");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeTruthy();
		});
	});
	
	it("should not validate if passwords is smaller than 3 charaters", function(){
		var isVisible;
		element(by.model("emailM")).sendKeys("a@a.a");
		element(by.model("passwordM")).sendKeys("aa");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeFalsy();
		});
		element(by.model("passwordM")).clear();
		element(by.model("passwordM")).sendKeys("aaa");
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
		element(by.model("emailM")).sendKeys("a");
		element(by.model("passwordM")).sendKeys("aaa");
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
		element(by.model("passwordM")).sendKeys("aaa");
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
		element(by.model("passwordM")).sendKeys("aaa");
		element(by.id("idSubmitButton")).click();
		element(by.id('confirmationId')).isDisplayed().then(function(visible) {
    		isVisible=visible;
  		});
  		element(by.id('serverErrorId')).isDisplayed().then(function(visible) {
			expect(visible||isVisible).toBeTruthy();
		});
  	});
	
	//missing httpBackEnd
	/*it("should display confirmation when form is valid", function(){
		element(by.model("firstName")).sendKeys("aaa");
		element(by.model("nameM")).sendKeys("aaa");
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
  	});*/
});
