# P2 Desenvolvimento web

####Cristian Pendenza 489115<br>Vinícius Barbosa 

**Baseado no projeto Grails-3.1-AngularJS**
https://github.com/sapanparikh18/Grails-3.1-AngularJS.git

####Descrição
 - Classe domínio 'Disciplina'
 - Controlador DisciplinaController
 - Views [disciplina]
 - Controladores, templates e rotas do Angular criadas com os comandos create-ng(*)
 - Bootstrap inicializado com 1 disciplina

####Instruções para execução:

1 - Crie o banco 'devweb' no Mysql: 
```
CREATE DATABASE devweb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
2 - Abra o Intellij clique em 'New' -> 'Project from version control' -> 'Git' e cole este endereço 
```
https://github.com/crispendenza/Grails-3.1-AngularJS.git
```
3 - Dê avançar nas próximas etapas e crie localmente a aplicação

4 - Run!

#####OBS.: Caso dê algum problema de depêndencia do *gradle*, utilize a aplicação 'gradlew' (na raiz do projeto) para limpar os caminhos e dependências:
###### Linux: do terminal, vá até a raiz do projeto e execute 
    $ chmod 755 gradlew
    $ ./gradlew clean
    $ ./gradlew bowerRefresh
###### Windows: abra o cmd, vá até a raiz do projeto e execute
    > gradlew.bat clean
     
