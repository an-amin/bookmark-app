/*
 * AngularAPP
 */

var myApp = angular.module('myModule', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl	:'pg/index.html',
			controller	:'myCtrl'
		})
		.when('/sign-in', {
			templateUrl	:'pg/sign-in.html',
			controller	:'signinCtrl'
		})
		.when('/sign-up', {
			templateUrl	:'pg/sign-up.html',
			controller	:'signupCtrl'
		});
});

var myCtrl = function($scope){
	$scope.meta_title = 'Bookmark App';
	$scope.subTitle = 'Practice 8 (angular route)';
	
};

var signinCtrl = function($scope){
	$scope.meta_title = 'Sign-in | Bookmark App';
	$scope.subTitle = 'Sign-in';
};

var signupCtrl = function($scope){
	$scope.meta_title = 'Sign-up | Bookmark App';
	$scope.subTitle = 'Sign-up';
};

myApp.controller('myCtrl', myCtrl);
myApp.controller('signinCtrl', signinCtrl);
myApp.controller('signupCtrl', signupCtrl);