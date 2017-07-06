import myapp.Disciplina
import myapp.User

class BootStrap {

    def init = { servletContext ->
        def user = new User(lastName: "Doe",dob: new Date(),firstName: "John",password: "test").save(failOnError:true)

        def disc = new Disciplina(codigo: "005-24", nome: "Algebra Linear", departamento: "DM", ementa:"Capeta em forma de disciplina", dataInicio: new Date(), dataFim: new Date()).save(failOnError:true)

    }
    def destroy = {
    }
}
