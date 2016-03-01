describe("index page e2e tests", function(){
	describe("sample test", function() {
		it("should display the right title", function() {
			browser.get("#/");
			expect(browser.getTitle()).toBe("TP1 OMDB Index");
		});
	});
});
