app.controller('meetupsController', ['$scope',  '$resource', 
	function($scope, $resource){
	var CostTable = $resource('/api/price');
  CostTable.query(function (results) {
  $scope.pricelist = results;
  });

  $scope.pricelist = []

  $scope.createPrice = function () {
    var price = new CostTable();
    price.cost = $scope.priceBox;
    price.id = "CTVFTB1"
    price.$save(function (result) {
      $scope.pricelist.push(result);
      $scope.priceBox = '';
    });
  }
}]);