
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
            Name: 'Bob',
            Interests: "Golf, Swimming, Drugs, Beer, Football, Chicken Wings",
            City: "San Francisco",
            Gender: "Male",
            DOB: '26th April 1988',
            Drugs: "Yes, cant get enough",
            Met: "A conference"
        },
        {
            id: 2,
            Name: 'Simon',
            Interests: "Cooking, Photography, Drugs, Beer, Football, Chicken Wings",
            City: "San Francisco",
            Gender: "Male",
            DOB: '26th April 1988',
            Drugs: "No",
            Met: "A Bar"
        },
        {
            id: 3,
            Name: 'Jenny',
            Interests: "Cooking, Photography, Doing Drugs, Beer, Football, Chicken Wings",
            City: "San Francisco",
            Gender: "Male",
            DOB: '26th April 1988',
            Drugs: "No",
            Met: "Social Layover - Phonenix Airport"
        },
        {
            id: 4,
            Name: 'Sally',
            Interests: "Cooking, Photography, Drugs, Beer, Football, Chicken Wings",
            City: "San Francisco",
            Gender: "Male",
            DOB: '26th April 1988',
            Drugs: "No",
            Met: "A conference"
        },
        {
            id: 5,
            Name: 'President Obama',
            Interests: "Cooking, Photography, Drugs, Beer, Football, Chicken Wings",
            City: "San Francisco",
            Gender: "Male",
            DOB: '26th April 1988',
            Drugs: "No",
            Met: "The White House"
        }
];

