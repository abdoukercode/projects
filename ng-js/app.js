var app1 = angular.module('app1', []);

app1.controller('cntrl1', function ($scope) {
    $scope.first = 1;
    $scope.second = 1;

    $scope.updateValue = function () {
        $scope.calculation = $scope.first + '+' + $scope.second + " = " + (+$scope.first + +$scope.second)
    }
})

app1.controller('cntrl2', ($scope) => {
    return (
        $scope.value = Math.floor((Math.random() * 10) + 1)
    )
})

app1.controller('feelings', function($scope) {
   
        
        var badFeelings = [ "😠", "😡","😫","😞"]
         var goodFeelings = [ "😀", "🤣","😆","😜"]

        $scope.sad = badFeelings[Math.floor((Math.random() * 4))]
        $scope.happy = goodFeelings[Math.floor((Math.random() *4 ))]

    
})
