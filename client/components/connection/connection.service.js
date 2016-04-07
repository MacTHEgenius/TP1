var myApp = angular.module('webApp');
myApp.factory('ConnectionService', function($rootScope)
{
	//{userJwt: token, userEmail:a@a.a, userConnected:1/0}
	var clear=function(){
		var user={userEmail:"Connexion", userConnected:false};
		if($rootScope.globals===undefined)$rootScope.globals={};
		$rootScope.globals.user=user;
		localStorage.setItem("globals.user", JSON.stringify(user));
	}
	return {
		setUser:function(user){
			if($rootScope.globals===undefined)$rootScope.globals={};
			$rootScope.globals.user=user;
			localStorage.setItem("globals.user", JSON.stringify(user));
			$rootScope.$broadcast('updateUser');
		},
		getUser:function(){
			if($rootScope.globals===undefined)
			{
				$rootScope.globals={};
				$rootScope.globals.user=JSON.parse(localStorage.getItem("globals.user"));
			}
			else if($rootScope.globals.user===undefined)
			{
				$rootScope.globals.user=JSON.parse(localStorage.getItem("globals.user"));
			}
			if($rootScope.globals.user==null)//no localStorage
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
