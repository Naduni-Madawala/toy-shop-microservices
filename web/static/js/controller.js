var app = angular.module("ToyShopApp", []);

app.controller("MainController", function ($scope, $http) {

  $scope.products = [];
  $scope.cart = [];

  $scope.loadCatalogue = function () {
    $http.get("/api/catalogue")
      .then(function (response) {
        $scope.products = response.data;
      });
  };

  $scope.addToCart = function (product) {
    $http.post("/api/cart", product)
      .then(function () {
        alert("Added to cart");
      });
  };

  $scope.loadCatalogue();
});
