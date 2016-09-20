angular.module('mainApp', ['ngRoute', 'ngResource'])

.config(function ($routeProvider) {

    //---------------
    // Routes
    //---------------
    $routeProvider
      .when('/', {
          templateUrl: '/javascripts/foodseaten.html',
          controller: 'FoodEatenController'
      })

      .when('/foods', {
          templateUrl: '/javascripts/ListOfFoods.html',
          controller: 'ListFoodController'
      })
})

.run([function() {
    console.log("Run hook executed Marc")
}])

//--------------
// Services
//---------------

.factory('FoodsEaten', ['$resource', function ($resource) {
    return $resource('/foodseaten/');
}])

.factory('ListFoods', ['$resource', function ($resource) {
    return $resource('/listfoods');
}])

//---------------
// Controllers
//---------------

.controller('FoodEatenController', ['$scope', 'FoodsEaten', function ($scope, FoodsEaten) {

    $scope.foodseaten = FoodsEaten.query();

    $scope.enterFood = function() {

	    if (!$scope.dateValStr || $scope.dateValStr.length < 1) return;
	    if (!$scope.mealTypeStr || $scope.mealTypeStr.length < 1) return;
	    if (!$scope.amountStr || $scope.amountStr.length < 1) return;
	    if (!$scope.foodStr || $scope.foodStr.length < 1) return;

        console.log("just before new foodeaten");
	    var foodeaten = new FoodsEaten({
		    date: $scope.dateValStr, mealType: $scope.mealTypeStr,
		    amount: $scope.amountStr, foodItem: $scope.foodStr
	    });
	    console.log("After new foodeaten");

        foodeaten.$save(function(){
          $scope.foodseaten.push(foodeaten);
        });
   }

}])


.controller('ListFoodController', ['$scope', 'ListFoods', function ($scope, ListFoods) {

    console.log("Inside ListFoodController");

    $scope.listfoods = ListFoods.query();

    $scope.enterFood = function () {

        console.log("Inside EnterFood for ListFoodController");

        if (!$scope.nameOfFoodStr || $scope.nameOfFoodStr.length < 1) return;
        if (!$scope.caloriesStr || $scope.caloriesStr.length < 1) return;
        if (!$scope.carbsStr || $scope.carbsStr.length < 1) return;

        console.log("just before new list food");
        var listfood = new ListFoods({
            name: $scope.nameOfFoodStr, calories: $scope.caloriesStr,
            carbs: $scope.carbsStr
        });
        console.log("After new ListFoodeaten");

        listfood.$save(function () {
            $scope.listfoods.push(listfood);
        });
    }

}])
