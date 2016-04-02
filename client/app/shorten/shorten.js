angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $location.path('/shorten');
  $scope.addLink = function(link) {
    Links.addOne(link).then(function(result) { 
      $scope.url = '';
      console.log('this is the result from shorten: ', result);
    }).catch(function(err) {
      console.error(err);
    });
  };
});
