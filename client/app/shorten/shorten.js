angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $location.path('/shorten');
  $scope.addLink = function(link) {
    console.log('Link in shorten.js', link);
    var url = {url: link};
    Links.addOne(url).then(function(result) { 
      $scope.url = '';
      console.log('this is the result from shorten: ', result);
    }).catch(function(err) {
      console.error(err);
    });
  };
});
