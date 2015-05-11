// Create Module
var app = angular.module('openhouse', []);

// Create Controller in Module
app.controller('FeedController', FeedController);

// Controller's Constructor Function
function FeedController(){
	this.headline = 'Your daily feed';
}


