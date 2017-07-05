package myapp

class Disciplina {

    //static belongsTo = [User]

    int codigo
    String nome
    String departamento
    String professor
    Date dataInicio
    Date dataFim
    String ementa

    static constraints = {
        codigo nullable: false, blank: false
        nome nullable: false
        departamento nullable: true
        professor nullable: true
        dataInicio nullable: true
        dataFim nullable: true
        ementa nullable: true
    }

    static mapping ={
        id column: 'codigo', type: 'integer'
    }

}
