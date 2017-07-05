package myapp

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class DisciplinaController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Disciplina.list(params), model:[disciplinaCount: Disciplina.count()]
    }

    def show(Disciplina disciplina) {
        respond disciplina
    }

    @Transactional
    def save(Disciplina disciplina) {
        if (disciplina == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (disciplina.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond disciplina.errors, view:'create'
            return
        }

        disciplina.save flush:true

        respond disciplina, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(Disciplina disciplina) {
        if (disciplina == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (disciplina.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond disciplina.errors, view:'edit'
            return
        }

        disciplina.save flush:true

        respond disciplina, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Disciplina disciplina) {

        if (disciplina == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        disciplina.delete flush:true

        render status: NO_CONTENT
    }
}
