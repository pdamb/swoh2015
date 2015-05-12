/// <reference path="../bower_components/angular/angular.js" />

// Create Module
var app = angular.module('openhouse', []);

// Create Controller in Module
app.controller('FeedController', FeedController);

// Controller's Constructor Function
function FeedController(){
  this.headline = 'Active tickets';
  this.feed = [
    {
      user: {
        name: "pdamb",
        displayName: "Petr Damborsky",
        avatarUrl: "/images/avatars/dummy-200x200-Wardrobe-plain.jpg"
      },
      message: "HELP! I need a code review right now! Lorem ipsum dolor sit amet and some more radditodes ndsd snd sndsajdfn;lkjg anfdsklfj dfiorewn fkldf kjndfslnf dsifdj fdnfmsd."
    },
    {
      user: {
        name: "pdamb",
        displayName: "Petr Damborsky",
        avatarUrl: "/images/avatars/dummy-200x200-Wardrobe-plain.jpg"
      },
      message: "HELP! I need a code review right now! Lorem ipsum dolor sit amet and some more radditodes ndsd snd sndsajdfn;lkjg anfdsklfj dfiorewn fkldf kjndfslnf dsifdj fdnfmsd."
    },
    {
      user: {
        name: "pdamb",
        displayName: "Petr Damborsky",
        avatarUrl: "/images/avatars/dummy-200x200-Wardrobe-plain.jpg"
      },
      message: "HELP! I need a code review right now! Lorem ipsum dolor sit amet and some more radditodes ndsd snd sndsajdfn;lkjg anfdsklfj dfiorewn fkldf kjndfslnf dsifdj fdnfmsd."
    },
    {
      user: {
        name: "pdamb",
        displayName: "Petr Damborsky",
        avatarUrl: "/images/avatars/dummy-200x200-Wardrobe-plain.jpg"
      },
      message: "HELP! I need a code review right now! Lorem ipsum dolor sit amet and some more radditodes ndsd snd sndsajdfn;lkjg anfdsklfj dfiorewn fkldf kjndfslnf dsifdj fdnfmsd."
    }
  ]
}