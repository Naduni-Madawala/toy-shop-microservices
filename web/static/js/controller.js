var app = angular.module("ToyShopApp", []);

app.controller("MainController", function ($scope, $http) {

  $scope.data = {
    products: [],
    cart: { items: [], total: 0 },
    user: {},
    message: "",
    orderHistory: []
  };
  
  $scope.selectProduct = function (product) {
  $scope.data.selectedProduct = product;
};


  /* ---------------- CATALOGUE ---------------- */
  $scope.loadCatalogue = function () {
    $http.get("/api/catalogue")
      .then(res => $scope.data.products = res.data);
  };

  /* ---------------- CART ---------------- */
  $scope.addToCart = function (product) {
    $scope.data.cart.items.push(product);
    $scope.data.cart.total += product.price;
  };

  /* ---------------- PAYMENT ---------------- */
  $scope.pay = function () {
    $http.post("/api/payment/pay", $scope.data.cart)
      .then(() => alert("Payment successful"));
  };

  /* ---------------- SHIPPING ---------------- */
  $scope.getShipping = function () {
    $http.get("/api/shipping/ship")
      .then(res => $scope.data.shipping = res.data);
  };

  /* ---------------- INIT ---------------- */
  $scope.loadCatalogue();
});

/* ---------------- LOGIN CONTROLLER ---------------- */
app.controller("LoginController", function ($scope, $http) {

  $scope.data = {
    user: {},
    message: "",
    orderHistory: []
  };

  $scope.login = function () {
    $http.get("/api/user/users/" + $scope.data.name)
      .then(res => {
        $scope.data.user = res.data;
        $scope.data.message = "Login successful";
        $scope.loadOrders();
      }, () => $scope.data.message = "Invalid user");
  };

  $scope.register = function () {
    if ($scope.data.password !== $scope.data.password2) {
      $scope.data.message = "Passwords do not match";
      return;
    }

    $http.post("/api/user/users", {
      username: $scope.data.name,
      name: $scope.data.name,
      email: $scope.data.email
    }).then(res => {
      $scope.data.user = res.data;
      $scope.data.message = "Registration successful";
    });
  };

  $scope.loadOrders = function () {
    $scope.data.orderHistory = [{
      orderid: "TS-1001",
      cart: {
        items: [{ name: "Ferrari SF-24 Diecast Model Car 2024 Formula 1" }, { name: "Steve Harrington Funko Pop" }],
        total: 7800
      }
    }];
  };
});
