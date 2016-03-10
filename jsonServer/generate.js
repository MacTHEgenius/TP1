module.exports = function(){
     var faker = require("faker");
     var _ = require("lodash");
     return {
       comments: _.times(10, function (n) {
          return {
              id: n,
              body: faker.lorem.sentences(),
              createdAt: faker.data.past(),
              userId: 7
         }
       })
     }
}
