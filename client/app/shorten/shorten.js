angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $location.path('/shorten');
  $scope.addLink = function(link, event) {
    var url = {url: link};
    Links.addOne(url).then(function(result) { 
      $scope.url = '';
    }).catch(function(err) {
      console.error(err);
    });
  };
});
