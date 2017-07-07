//= wrapped

angular.module("myapp.disciplina")
    .config(function($routeProvider) {
        $routeProvider.
        when('/disciplina', {
            templateUrl: "/myapp/disciplina/disciplina.html",
            controller: "DisciplinaListController as ctrl"
        }).
        when('/disciplina/create', {
            templateUrl: "/myapp/disciplina/create.html",
            controller: "DisciplinaCreateController as ctrl"
        }).
        when('/disciplina/edit/:disciplinaId', {
            templateUrl: "/myapp/disciplina/create.html",
            controller: "DisciplinaCreateController as ctrl"
        }).
        when('/disciplina/:disciplinaId', {
            templateUrl: "/myapp/disciplina/show.html",
            controller: "DisciplinaShowController as ctrl"
        })
    });