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
app.controller("LoginController", function ($scope, $http) {

  $scope.data = {
    user: {},
    message: "",
    orderHistory: []
  };

  // LOGIN
  $scope.login = function () {
    $http.get("/api/user/users/" + $scope.data.name)
      .then(function (response) {
        $scope.data.user = response.data;
        $scope.data.message = "Login successful";
        $scope.loadOrders();
      }, function () {
        $scope.data.message = "Invalid user";
      });
  };

  // REGISTER
  $scope.register = function () {
    if ($scope.data.password !== $scope.data.password2) {
      $scope.data.message = "Passwords do not match";
      return;
    }

    const user = {
      username: $scope.data.name,
      name: $scope.data.name,
      email: $scope.data.email
    };

    $http.post("/api/user/users", user)
      .then(function (response) {
        $scope.data.user = response.data;
        $scope.data.message = "Registration successful";
      });
  };

  // MOCK ORDER HISTORY (Robot-Shop style demo)
  $scope.loadOrders = function () {
    $scope.data.orderHistory = [
      {
        orderid: "TS-1001",
        cart: {
          items: [
            { name: "Ferrari F40" },
            { name: "Naruto Figure" }
          ],
          total: 7800
        }
      }
    ];
  };
});
