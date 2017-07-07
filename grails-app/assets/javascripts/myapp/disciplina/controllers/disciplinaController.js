//= wrapped

angular
    .module("myapp.disciplina")
    .controller("DisciplinaListController", ['disciplinaDataFactoryService',DisciplinaListController])
    .controller("DisciplinaShowController", ['disciplinaDataFactoryService','$routeParams','$location',DisciplinaShowController])
    .controller("DisciplinaCreateController", ['disciplinaDataFactoryService','$routeParams','$location',DisciplinaCreateController])
function DisciplinaListController(disciplinaService) {

    var self = this;
    disciplinaService.list(function(items){
        self.disciplinas = items;
    });

}
function DisciplinaShowController(disciplinaService,$routeParams,$location){
    var self = this;
    disciplinaService.show({disciplinaId:$routeParams.disciplinaId,action:'show'},function(disciplina){
        self.disciplina = disciplina;
    });
    self.delete = function(disciplina){
        if(confirm("Are you sure you want to delete this disciplina?")) {
            disciplinaService.delete({action: 'delete',disciplinaId:$routeParams.disciplinaId}, disciplina, function (res) {
                $location.path("/disciplina/");

            })
        }
    }
}

function DisciplinaCreateController(disciplinaService,$routeParams,$location){
    var self = this;
    if($routeParams.disciplinaId){
        disciplinaService.show({disciplinaId:$routeParams.disciplinaId,action:'show'},function(disciplina){
            self.disciplina = disciplina;
        });
    }
    self.save = function(disciplina){
        disciplinaService.save({action:'save'},disciplina,function(res){
            if(res.id){
                $location.path("/disciplina/"+res.id);
            }else{
                alert("Unknown error occured");
            }
        })
    }
}

