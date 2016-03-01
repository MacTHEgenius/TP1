'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('tp1App'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Sample Test', function () {
    expect(true).toBe(true);
  });
});
