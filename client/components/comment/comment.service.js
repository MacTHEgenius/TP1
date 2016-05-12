'use strict';

angular.module('webApp')
  .service('comment', function ($resource, action) {
    var restAPIurl =  'http://127.0.0.1:8000';
    action.save({body:"Comment sent"});
    return $resource(restAPIurl + '/api/comments/:id',
                     { id: '@id' },
                     { update: { method: 'PUT' } });
  });
