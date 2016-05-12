var myApp=angular.module('myApp',[]);//定义一个模块
myApp.controller('UserController',function($scope){
	var user={};
	$scope.user=user;
	user.name="johnhery";
	user.email="john@lvdot.com";
	user.subscribe=function(){
		
		console.log(user.name+"您订阅的邮件已经发送到您的邮箱"+user.email+"请查收");
	}
});