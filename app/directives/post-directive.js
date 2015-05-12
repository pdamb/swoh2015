app.directive('ohPost', function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {
			ticket: '='
		},
		templateUrl: '/app/templates/post-template.html'
	};
});