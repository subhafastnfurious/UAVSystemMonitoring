var app = angular.module('toolbarDemo2', ['ngMaterial','ui.router','uiGmapgoogle-maps','appctrl']);
app
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function (
        $stateProvider,
        $urlRouterProvider
    ) {	
    	$stateProvider
            .state('home', {
                url: "",
                templateUrl: "static/home.html",
                controller: "usersCtrl"
            })
            .state('user-add', {
                url: "/users/add",
                templateUrl: "static/adduser.html",
                controller: "usersCtrl"
            })
    }
])
.service('userService',['$http',function($http){
	return {
        list : function() {
          return $http({
            method: 'GET',
            url: 'api/users/'
          });
        },
        create : function(data) {
          return $http({
            method: 'POST',
            url: 'api/users/',
            data: data
          });
        },
        removusr : function(usrid) {
          return $http({
            method: 'DELETE',
            url: 'api/users/' + usrid + '/'
          });
        }
    }
}])
.service('locationService',['$http',function($http){
  return {
        getLocation : function(count) {
          var data = {};
          data.count = count;
          return $http({
            method: 'GET',
            url: 'api/uvs/',
            params: data
          });
        },
        getAltitude : function(nofloc,dname) {
          var data = {};
          data.nofloc = nofloc;
          data.dname = dname;
          return $http({
            method: 'GET',
            url: 'api/uvs/altitude/',
            params: data
          });
        }
    }
}])


/*promise.data[0].coordinate.split(", ")
*/
   /* $scope.marker2 = {
      id: 1,
      coords: {
        latitude:44.1451,
        longitude: -72.6680
      },
      options: { draggable: true,
		 animation: 1,
		 label: "2",
		 title: 'UAV2'}
    }	
    $scope.marker3 = {
      id: 2,
      coords: {
        latitude:46.1451,
        longitude: -74.6680
      },
      options: { draggable: true,
		 animation: 1,
		 label: "3",
		 title: 'UAV3'}
    }
    $scope.marker4 = {
      id: 2,
      coords: {
        latitude:43.1451,
        longitude: -73.6680
      },
      options: { draggable: true,
		 animation: 1,
		 label: "4",
		 title: 'UAV4'}
    }

*/











 


