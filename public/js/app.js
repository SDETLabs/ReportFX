var app = angular.module("FormApp", []);
app.controller("FormController", 
	function($scope, $http){
	$http.get("/api/form")
	.success(function(response){
		$scope.forms = response;

	});
})