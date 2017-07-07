package myapp



class Disciplina {

    //static belongsTo = [User]

    String codigo
    String nome
    String departamento
    String dataInicio
    String dataFim
    String ementa

    static constraints = {
        codigo nullable: false, blank: false
        nome nullable: false
        departamento nullable: true
        dataInicio nullable: true
        dataFim nullable: true
        ementa nullable: true
    }


}
