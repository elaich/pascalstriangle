var app = angular.module('pascal', []);

app.controller('PascalController', function PascalController($scope) {

    $scope.triangle = calculateTriangle(parseInt(localStorage.rows))

    $scope.calculateTriangle = function() {
        localStorage.rows = $scope.rows
        $scope.triangle = calculateTriangle($scope.rows);
    }

});

function calculateTriangle(rowNumbers) {
    var colors = [
        'red',
        'blue',
        'orange',
        'green'
    ];

    var triangle = [];
    for (i = 0; i < rowNumbers; i++) {
        var color = colors[i % 4];
        var row = {color: color};
        row.line = [1];

        for (j = 0; j < i; j++) {
            row.line.push(row.line[j] * (i - j) / (j + 1))
        }
        triangle.push(row);
    }

    return triangle
}
