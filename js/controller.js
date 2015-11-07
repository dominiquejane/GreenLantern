angular.module('giphy').controller('giphyCtrl', function($scope, giphyGotServed) {

	$scope.test = "Hello world!"

	$scope.types = ['7/11s', 'restaurant', 'strip-clubs', 'zoos', 'bars', 'deli', 'barbers/salon', 'time-machines', 'prison'];

	$scope.postBiz = function() {
	    giphyGotServed.postBiz($scope.biz);
	    $scope.biz = '';
	}
	
	$scope.getBiz = function() {
	    giphyGotServed.getBiz().then(function(res) {
	      $scope.biznesses = res.data.results;
	      console.log($scope.biznesses);
	   });
	};
});
