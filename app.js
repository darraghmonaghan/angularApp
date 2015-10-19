
var app = angular.module("ngApp", ['ngRoute']);

////////////
// ROUTES //
////////////

app.config(function($routeProvider, $locationProvider){

    $routeProvider .when('/', {
        templateUrl: '/templates/people.html', 
        controller: "PeopleController" 
    })

    .when('/profile/:id', {
        templateUrl: 'templates/profile.html', 
        controller: "PersonController" 
    })

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

})


/////////////////
// CONTROLLERS //
/////////////////

app.controller("PeopleController", function($scope, PeopleService) {
    console.log("Persons Index");
    $scope.people = PeopleService.query();
})

app.controller('PersonController', function($scope, PeopleService, $routeParams) {
  console.log("Single Person Show");
  $scope.person = PeopleService.get($routeParams.id);
})



////////////
// MODELS //
////////////

app.factory('PeopleService', function(){

  var PeopleService = {};

  PeopleService.query = function(){
    return ALL_PEOPLE;
  }

  PeopleService.get = function(id){
    var id = parseInt(id);
    return ALL_PEOPLE.find(function(person){
      return person.id == id;
    });
  }

  return PeopleService;

})



ALL_PEOPLE = [
        {
            id: 1,
            image: '/pics/tommy.png',
            Name: 'Tommy',
            Company: 'Facebook',
            Interests: "Golf, Swimming, Drugs, Beer, Football, Chicken Wings",
            City: "San Francisco",
            Gender: "Male",
            DOB: '26th April 1988',
            Drugs: "Yes, cant get enough",
            Met: "A conference"
        },
        {
            id: 2,
            image: '/pics/heather.png',
            Name: 'Heather',
            Company: "Google",
            Interests: "Cooking, Photography, Reading, Writing Clean Code",
            City: "San Francisco",
            Gender: "Female",
            DOB: 'N/A',
            Drugs: "Pablo Escobar",
            Met: "GA - Project 2"
        },
        {
            id: 3,
            image: '/pics/peter.png',
            Name: 'Peter',
            Company: 'Social Layover',
            Interests: "Jessica Alba",
            City: "San Francisco",
            Gender: "Male",
            DOB: 'Unknown',
            Drugs: "Breaking Bad Style",
            Met: "Networking event for dating app inventors"
        },
        {
            id: 4,
            image: '/pics/nathan.png',
            Name: 'Nathan',
            Company: 'General Assembly',
            Interests: "Cooking, Photography, Drugs, Beer, Football, Chicken Wings",
            City: "San Francisco",
            Gender: "Male",
            DOB: '26th April 1988',
            Drugs: "Only on days ending in 'Y' ",
            Met: "Met Nathan at General Assembly SF, during WDI 21 course in August 2015"
        }
];

