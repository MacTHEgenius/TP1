'use strict';

angular.module('webApp')
  .service('comment', function ($resource) {
    var restAPIurl =  'http://127.0.0.1:8000';
    return $resource(restAPIurl + '/api/comments/:id',
                     { id: '@id' },
                     { update: { method: 'PUT' } });
  });
