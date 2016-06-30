var listApp = angular.module("listApp", [])       
    .controller("default", function ($scope) {
        $scope.tracks = tracks;
    })

    .directive('myDirective', function() {
        return {
            restrict: 'A',
        	template: "<ul id=\"plList\"> <li ng-repeat=\"track in tracks\" ng-click=\"changeOnClickTrack(track.id)\"> \
        	<div class=\"plItem\">\
            <div class=\"plNum\">{{track.id}}</div> \
        	<div class=\"plTitle\">{{track.name}} </div>\
        	<div class=\"plLength\">{{track.length}} </div>\
            </div></li></ul>"
        };
    });
          
    listApp.run(function($rootScope) {
        $rootScope.changeOnClickTrack = function(id) {
            index = parseInt(id) - 1;
            loadAudio(index);
        };
    });
  
        
