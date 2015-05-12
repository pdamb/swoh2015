app.directive('ohAvatar', function(){
	return {
		restrict: 'E',
		scope: {
			user: '=', // passing reference to object
			size: '@' // passing just a string value
		},
		replace: true,
		templateUrl: '/app/templates/avatar-template.html'
	};
});