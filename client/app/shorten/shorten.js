angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(link) {
    return Links.addOne(link).then(function(result) { return result; });
  };
});
