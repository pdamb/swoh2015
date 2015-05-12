/// <reference path="../bower_components/angular/angular.js" />

// Create Module
var app = angular.module('openhouse', []);

// Create Controller in Module
app.controller('TicketsController', TicketsController);

// Controller's Constructor Function
function TicketsController($http){
  
  var vm = this;
  
  vm.headline = 'Active tickets';
  vm.selectedUser = null;
  vm.selectedTicket = 0;
  vm.tickets = [
    {
      number: 1,
      user: {
        name: "pdamb",
        displayName: "Petr Damborsky",
        avatarUrl: "/images/avatars/dummy-200x200-Wardrobe-plain.jpg"
      },
      title: "It's broken.",
      message: "HELP! I need a code review right now! Lorem ipsum dolor sit amet and some more radditodes ndsd snd sndsajdfn;lkjg anfdsklfj dfiorewn fkldf kjndfslnf dsifdj fdnfmsd."
    },
    {
      number: 2,
      user: {
        name: "charlie",
        displayName: "Charlie Chaplin",
        avatarUrl: "/images/avatars/dummy-200x200-CharlieChaplin-plain.jpg"
      },
      title: "It's broken.",
      message: "HELP! I need a code review right now! Lorem ipsum dolor sit amet and some more radditodes ndsd snd sndsajdfn;lkjg anfdsklfj dfiorewn fkldf kjndfslnf dsifdj fdnfmsd."
    },
    {
      number: 3,
      user: {
        name: "pdamb",
        displayName: "Petr Damborsky",
        avatarUrl: "/images/avatars/dummy-200x200-Wardrobe-plain.jpg"
      },
      title: "It's broken.",
      message: "HELP! I need a code review right now! Lorem ipsum dolor sit amet and some more radditodes ndsd snd sndsajdfn;lkjg anfdsklfj dfiorewn fkldf kjndfslnf dsifdj fdnfmsd."
    }
  ];
  
  this.highlight = function(ticket){
    this.selectedTicket = ticket.number;
    this.selectedUser = ticket.user;
    console.log(this.selectedTicket,this.selectedUser);
  };
  
  $http.get('/data/tickets.json').then(function(response){
    console.log(response.data);
    vm.tickets = response.data;
  });
}