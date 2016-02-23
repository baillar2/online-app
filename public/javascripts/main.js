angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', '$http', function($scope, $http){
		
	$scope.postUser = function(){
		$http.post('/applicant', $scope.user)
			 .then(function(serverData){
			 	$scope.user = {}
			 })
	}

	$scope.getUser = function(){

	}


	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', '$http',  function($scope,$http){
		

		$http.get('/api/applicants')
			 .then(function(serverData){
			 $scope.list = serverData.data
		 	 //$scope.list.extend(serverData.data)
			 	console.log(serverData.data)
			 	console.log($scope.list)
			 })
	}]);
