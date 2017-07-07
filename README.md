# P2 Desenvolvimento web

####Cristian Pendenza 489115<br>Vinícius Barbosa 

**Baseado no projeto Grails-3.1-AngularJS**
https://github.com/sapanparikh18/Grails-3.1-AngularJS.git

####Descrição
 - Classe domínio 'Disciplina'
 - Controlador DisciplinaController
 - Views [disciplina]
 - Bootstrap inicializado com 2 disciplinas

####Instruções para execução:
1. Dentro do Intellij 'New' -> 'Project from version control' -> 'Git'
2. Cole este endereço https://github.com/crispendenza/Grails-3.1-AngularJS.git
3. Dê avançar nas próximas etapas e crie localmente a aplicação
4. Execute o script do BD do MySql
5. Configure o arquivo '/conf/application.yml' se necessário
3. Run!

#####OBS.: Caso dê algum problema de depêndencia do *gradle*, utilize a aplicação 'gradlew' (na raiz do projeto) para limpar os caminhos e dependências:
###### Linux: do terminal, vá até a raiz do projeto e execute 
    $ chmod 755 gradlew
    $ ./gradlew clean
    $ ./gradlew bowerRefresh
###### Windows: abra o cmd, vá até a raiz do projeto e execute
    > gradlew.bat clean
   
#### /conf/application.yml
    driverClassName: 
    username: <seu_nome_usuario_mysql>
    password: <seu_password_mysql>
    
####Script BD (MySql)
    CREATE NEW DATABASE
    
