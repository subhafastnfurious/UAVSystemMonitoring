var appctrl = angular.module('appctrl',[])
appctrl.controller('usersCtrl',[
  '$scope',
  'userService',
  'locationService',
  '$interval',
  '$state',
  '$mdDialog',
  function(
    $scope,
    userService,
    locationService,
    $interval,
    $state,
    $mdDialog){
	var self =  this;
	userService.list().then(function(promise){
		$scope.users = promise.data;
	},function(error){

	})
  $scope.showChart = function($event,dname) {
    $mdDialog.show({
        templateUrl: '/static/showchart.html',
        controller: 'elevationCtrl',
        parent: angular.element(document.body),
        targetEvent: $event,
        resolve: {
          chartResponse: function(){
            return locationService.getAltitude($scope.count,dname);
          }
        },
        clickOutsideToClose: true
    })
  };
	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 1 };
  $scope.marker = {
    id: 1,
    coords: {
      latitude:45.1451,
      longitude: -73.6680
    },
    options: { draggable: true,
    	animation: 1,
    	label: "1",
    	title: 'UAV1'
    }
  }
  $scope.marker2 = {
    id: 2,
    coords: {
      latitude:43.1451,
      longitude: -71.6680
    },
    options: { draggable: true,
	 animation: 1,
	 label: "2",
	 title: 'UAV2'}
  }
  $scope.Timer = null;
  $scope.startGettingLocation = function(){
    $scope.count = 1;
    $scope.Timer = $interval(function(){
      locationService.getLocation($scope.count).then(function(promise){
        promise.data.forEach(function(locobj) {
            if(locobj.name == 'UAV1'){
              var point = locobj.coordinate.split(", ");
              var lat = point[0];
              var lng = point[1];
              $scope.marker.coords.latitude = lat;
              $scope.marker.coords.longitude = lng;
            }
            if(locobj.name == 'UAV2'){
              var point = locobj.coordinate.split(", ");
              var lat = point[0];
              var lng = point[1];
              $scope.marker2.coords.latitude = lat;
              $scope.marker2.coords.longitude = lng;
            }
        });
      },function(error){

      })
      $scope.count = $scope.count + 1;
    },3000)

  }
  $scope.StopTimer = function () {
    //Cancel the Timer.
    if (angular.isDefined($scope.Timer)) {
        $interval.cancel($scope.Timer);
    }
  };
  $scope.user = {};
  $scope.adduser = function(){
     userService.create($scope.user).then(function(promise){
      $state.go('home');
     },function(error){

     })
  }
  $scope.deleteuser = function(usrid){
     userService.removusr(usrid).then(function(promise){
      $state.reload();
     },function(error){

     })
  }
}])
.controller('elevationCtrl',[
  '$scope',
  'locationService',
  'chartResponse',
  function(
    $scope,
    locationService,
    chartResponse
    ){
      $scope.chartUrl = chartResponse.data;
      console.log($scope.chartUrl)

}])
