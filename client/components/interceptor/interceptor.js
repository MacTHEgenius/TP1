angular.module('webApp').config(['$httpProvider', 'jwtInterceptorProvider', function ($httpProvider, jwtInterceptorProvider)
{
    jwtInterceptorProvider.tokenGetter = ['config', 'jwtHelper', '$http', 'action', 'ConnectionService', function(config, jwtHelper, $http, action, ConnectionService) {
 
    // Do not use token to get .html templates
    //console.log(config);
    if (config.url.indexOf("api/comments") ==-1 && config.url.indexOf("api/favs") ==-1 && config.url.indexOf("api/actions") ==-1)
    {
      return null;
    }
    var jwt=JSON.parse(localStorage.getItem("globals.user"));
	//console.log("1");
    if(jwt==null)
    {
      return null;
    }
	jwt=jwt.userJwt;
	if(jwt==null)
	{
		return null;
	}
	//console.log(jwt);
    if (jwtHelper.isTokenExpired(jwt))
    {
      //console.log("Token Expired !", jwtHelper.getTokenExpirationDate(jwt));
      return null;
    }
    else
    {
      //console.log("Token not expired", jwtHelper.getTokenExpirationDate(jwt));
      return jwt;
    }
  }];
  $httpProvider.interceptors.push('jwtInterceptor');
 
}]) ;
