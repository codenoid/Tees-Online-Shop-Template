/*angular.module('app', [
	'ngRoute',
	'app.controllers'
])
  .config(['$routeProvider', function ($routeProvider) {
  	$routeProvider.when('/', {
  		templateUrl: 'part/productlist.html',
  		controller: 'ProductController'
  	}).otherwise({
  		redirectTo: '/'
  	});
  }]);

angular.module('app.controllers', [])
	.controller('ProductController', ['$scope','$http', function ($scope) {
		$http.get('data/products.json').success(function (data) {
			$scope.products = data;
		});
	}]);*/
var app = angular.module('app', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("data/products.json")
    .then(function (response) {
    	$scope.products = response.data.records;
    });
});