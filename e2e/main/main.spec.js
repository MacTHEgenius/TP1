'use strict';

describe("index page e2e tests", function(){

	beforeEach(function(){
		browser.executeScript('window.localStorage.clear();');
		browser.get("/");
	});
	
	it("should display the right title", function() {
		expect(browser.getTitle()).toBe("Web App");
	});
	
	it("should should go to main page when clicked", function(){
		element(by.linkText("Accueil")).click();
		expect(browser.getCurrentUrl()).toBe("http://localhost:9000/");
	});
	
	it("should should go to inscription page when clicked", function(){
		element(by.linkText("Inscription")).click();
		expect(browser.getCurrentUrl()).toBe("http://localhost:9000/inscription");
	});
	
	it("should should go to search page when clicked", function(){
		element(by.linkText("Recherche")).click();
		expect(browser.getCurrentUrl()).toBe("http://localhost:9000/search");
	});
	
	it("should should go to newMovies page when clicked", function(){
		element(by.linkText("Nouveautés")).click();
		expect(browser.getCurrentUrl()).toBe("http://localhost:9000/newMovies");
	});
	
	it("should should go to login page when clicked", function(){
		element(by.linkText("Connexion")).click();
		expect(browser.getCurrentUrl()).toBe("http://localhost:9000/login");
	});
	//access navbar and expect it to ge to the right pages
});
