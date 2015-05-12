app.directive('ohAvatar', function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {
			user: '=', // passing reference to object
			size: '@' // passing just a string value
		},
		templateUrl: '/app/templates/avatar-template.html'
	};
});