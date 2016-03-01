'use strict';

describe('Controller: inscriptionController', function () {

  // load the controller's module
  beforeEach(module('tp1App'));

  var inscriptionController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    inscriptionController = $controller('inscriptionController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should initialize default show values', function () {
    expect(scope.showForm).toBe(true);
  });
});
