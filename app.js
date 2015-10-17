
var app = angular.module("ngApp", []);

app.controller("PeopleController", function($scope) {

	$scope.update = function(user) {
        $scope.people = angular.copy(user);
      };

    $scope.people = [
    	{
    		Name: 'Bob',
    		Interests: "Golf, Swimming, Drugs, Beer, Football, Chicken Wings",
    		City: "San Francisco",
    		Gender: "Male",
    		DOB: '26th April 1988',
    		Drugs: "Yes, cant get enough",
    		Met: "A conference"
    	},
    	{
    		Name: 'Simon',
    		Interests: "Cooking, Photography, Drugs, Beer, Football, Chicken Wings",
    		City: "San Francisco",
    		Gender: "Male",
    		DOB: '26th April 1988',
    		Drugs: "No",
    		Met: "A Bar"
    	},
    	{
    		Name: 'Jenny',
    		Interests: "Cooking, Photography, Doing Drugs, Beer, Football, Chicken Wings",
    		City: "San Francisco",
    		Gender: "Male",
    		DOB: '26th April 1988',
    		Drugs: "No",
    		Met: "Social Layover - Phonenix Airport"
    	},
    	{
    		Name: 'Sally',
    		Interests: "Cooking, Photography, Drugs, Beer, Football, Chicken Wings",
    		City: "San Francisco",
    		Gender: "Male",
    		DOB: '26th April 1988',
    		Drugs: "No",
    		Met: "A conference"
    	},
    	{
    		Name: 'President Obama',
    		Interests: "Cooking, Photography, Drugs, Beer, Football, Chicken Wings",
    		City: "San Francisco",
    		Gender: "Male",
    		DOB: '26th April 1988',
    		Drugs: "No",
    		Met: "The White House"
    	}
    ];
});

