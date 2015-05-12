/// <reference path="../bower_components/angular/angular.js" />

// Create Module
var app = angular.module('openhouse', []);

// Create Controller in Module
app.controller('FeedController', FeedController);

// Controller's Constructor Function
function FeedController(){
  this.headline = 'Your daily feed';
  this.feed = [
    {
      user: {
        name: "pdamb",
        displayName: "Petr Damborsky",
        avatarUrl: "/images/avatars/dummy-200x200-Wardrobe-plain.jpg"
      },
      message: "HELP! I need a code review right now!"
    }
  ]
}