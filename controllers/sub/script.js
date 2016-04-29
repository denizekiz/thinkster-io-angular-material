var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController',['$scope',function($scope){
	$scope.greeting = 'Hola!';
}]);

myApp.controller('DoubleController', ['$scope', function($scope) {
	$scope.num = 0;
	$scope.double = function(value) { return value * 2; };
}]);

myApp.controller('SpicyController',['$scope',function($scope){
	$scope.customSpice = "wasabi";
	$scope.spice = 'very';
	$scope.chiliSpicy = function(){
		$scope.spice = 'chili';
	}
	$scope.jalapenoSpicy = function(){
		$scope.spice = 'jalapeno';
	}
	}]);