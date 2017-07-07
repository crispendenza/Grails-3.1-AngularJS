//= wrapped

angular
    .module("myapp.disciplina")
    .factory("disciplinaDataFactoryService", disciplinaDataFactoryService);

function disciplinaDataFactoryService(DomainServiceFactory) {
    return DomainServiceFactory('/disciplina/:action/:disciplinaId',{disciplinaId:'@id',action:'@action'},
        {"show": {method: "GET"}},
        {"save": {method: "POST"}},
        {"delete": {method: "DELETE"}}
    );
}