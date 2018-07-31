var app = angular.module("todoApp", ["ngRoute"]);
app.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "partials/home.html",
        controller: "PostsCntrl"
      })
      .when("/comments/:id", {
        templateUrl: "partials/comments.html",
        controller: "commentsCtrl"
      })
      .otherwise({
        redirectTo: "/"
      });
  }
]);


 
