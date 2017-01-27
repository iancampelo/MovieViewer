angular.module('starter', ['ionic'])

.controller('MainCtrl', function($scope, $http, $ionicLoading) {
  $scope.show = function() {
    $ionicLoading.show({
      template: 'Loading...'
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
  };
  
  $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c6768baa56bd7dc9fb570f26f20cfc08')
  .then(function(resp) {
    console.log('Success', resp.data.results);
    $scope.dados = resp.data.results;
    $scope.hide = function(){
      $ionicLoading.hide().then(function(){
        console.log("The loading indicator is now hidden");
      });
    };
  }, function(err) {
    console.error('ERR', err);
  })
})