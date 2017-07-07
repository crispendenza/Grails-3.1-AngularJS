import myapp.Disciplina
import myapp.User

class BootStrap {

    def init = { servletContext ->
        def user = new User(lastName: "Doe",dob: new Date(),firstName: "John",password: "test").save(failOnError:true)

        def disc = new Disciplina(codigo: "005-24", nome: "Algebra Linear", departamento: "DM", ementa:"Só sei que não passei", dataInicio: "21/08/2017", dataFim: "22/12/2017").save(failOnError:true)

    }
    def destroy = {
    }
}
