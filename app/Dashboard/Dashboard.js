'use strict';

angular.module('app.Dashboard', [])
  .controller('DashboardCtrl', ['$scope', 'News', function($scope, News){
    console.log(News.all());
    $scope.news = News.all();

  }]);
