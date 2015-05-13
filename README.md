### SolarWinds Open House 2015
## Using AngularJS to replace ASP.NET User Controls

__start branch__

This is a starting point if you want to try what was done during the presentation.

Main tasks:
- create a module
- create a controller 
- load JSON data in controller (`$http.get()`)
- link both module and controller with HTML (`ng-app` and `ng-controller as` directives)
- use `ng-repeat` to loop through data
- add highlight function which will set the selected ticket and user
- make individual 'tickets' clickable (`ng-click`) and run the highlight function
- show selected user in profile sidebar
- connect the edit fields with user properties (`ng-model`)
- create directive for user avatar with 2 atrributes: user, size

Optional tasks:
- _apply highlighted class to selected ticket_
- _fill user's ticket history by fake data (e.g. characters of his name)_
- _use the filter input to apply a filter on data in ng-repeat_
- _add 'no results' message when filter removes all items_
- _update tickets count in header_
- _create directive for individual ticket_
- _create directive for profile_