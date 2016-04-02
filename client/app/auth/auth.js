// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.signinAttempt = false;
  $scope.signupAttempt = false; 

  $scope.signin = function (isValid) {
    if (isValid) {
      Auth.signin($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          $scope.signinAttempt = true;
          console.error(error);
        });
    } else {
      $scope.signinAttempt = true;
    }
  };

  $scope.signup = function (isValid) {
    if (isValid) {
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          $scope.signupAttempt = true;
          console.error(error);
        });
    } else {
      $scope.signupAttempt = true;
    }
  };
});
