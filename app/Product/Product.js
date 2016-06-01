'use strict';

angular.module('app.Product', [])
  .controller('ProductCtrl', ['$scope', 'Product', function($scope, Product){
    console.log(Product.all());
    $scope.products = Product.all();

  }]);
