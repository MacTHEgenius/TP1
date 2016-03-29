var myApp = angular.module('webApp');
myApp.factory('ConnectionService', function($rootScope, $cookies)
{
	var clear=function(){
		var user={userEmail:"Connexion", userConnected:false};
		if($rootScope.globals===undefined)$rootScope.globals={};
		$rootScope.globals.user=user;
		$cookies.putObject("globals.user", user);
	}
	return {
		setUser:function(user){
			if($rootScope.globals===undefined)$rootScope.globals={};
			$rootScope.globals.user=user;
			$cookies.putObject("globals.user", user);
			$rootScope.$broadcast('updateUser');
		},
		getUser:function(){
			if($rootScope.globals===undefined)
			{
				$rootScope.globals={};
				$rootScope.globals.user=$cookies.getObject("globals.user");
			}
			else if($rootScope.globals.user===undefined)
			{
				$rootScope.globals.user=$cookies.getObject("globals.user");
			}
			if($rootScope.globals.user===undefined)//no cookies
			{
				clear();
			}
			return $rootScope.globals.user;
		},
		clearUser:function(){
			clear();
			$rootScope.$broadcast('updateUser');
		}
	};
});
