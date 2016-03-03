'use strict';

describe('Controller: mainCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('mainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Sample Test', function () {
    expect(true).toBe(true);
  });
});
