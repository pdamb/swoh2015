### SolarWinds Open House 2015
## Using AngularJS to replace ASP.NET User Controls

__start branch__

This is a starting point if you want to try what was done during the presentation.

TODO:
- create a module
- create a controller 
- load/init dummy data in controller
- link both module and controller with HTML (`ng-app` and `ng-controller` directives)
- use `ng-repeat` to loop through data
- add highlight function which will set the selected ticket and user
- make individual 'tickets' clickable (`ng-click`) and run the highlight function
- apply highlighted class to selected ticket
- show selected user in profile sidebar
- fill his ticket history by fake data (e.g. characters of name)
- add 'no results' message when filter removes all items
- update tickets count in header
- connect the edit fields with user properties (`ng-model`)
- use the filter input to apply the filter on data in ng-repeat
- create directive for user avatar with 2 atrributes: user, size
- create directive for individual ticket
- create directive for profile