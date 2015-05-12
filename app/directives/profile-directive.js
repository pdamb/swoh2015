app.directive('ohProfile', function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {
			user: '='
		},
		templateUrl: '/app/templates/profile-template.html'
	};
});