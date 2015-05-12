/// <reference path="../bower_components/angular/angular.js" />

// Create Module
var app = angular.module('openhouse', []);

// Create Controller in Module
app.controller('TicketsController', TicketsController);

// Controller's Constructor Function
function TicketsController($http){
  
  var vm = this;
  
  // public 
  
  vm.headline = 'Active tickets';
  vm.selectedUser = null;
  vm.selectedTicket = 0;
  
  this.highlight = function(ticket){
    this.selectedTicket = ticket.number;
    this.selectedUser = ticket.user;
  };
  
  // private

  $http.get('/data/tickets.json').then(function(response){
    vm.tickets = response.data;
  });

}