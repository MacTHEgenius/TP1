'use strict';

angular.module('webApp')
  .service('comment', function ($resource) {
    var restAPIurl =  'https://crispesh.herokuapp.com';
    return $resource(restAPIurl + '/api/comments/:id',
                     { id: '@id'},
                     { update: { method: 'PUT' } });
  });
