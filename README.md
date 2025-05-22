# Projeto TCC esperança sobre rodas

- Ana Julia Dias Barreto - 2212188
- Breno Cappelle de Almeida - 2221510
- Maria Vitoria Matos Costa Beber - 2211107
- Vitoria Oliveira Gomes Melo - 2210249

#Esperança sobre Rodas - Projeto de Transporte Voluntário

- **Backend**: .NET 8.0
- **Banco de Dados**: SQL Server

# Possibilidade de troca do backend para maior facilidade de desenvolvimento e integração

Nossa aplicação foi desenvolvida em .net, a seguir vamos incluir algumas recomendações para o que
seja possível a realização dos testes:
1. É necessário que tenha o Docker instalado na máquina, extensão live server para rodar o frontend;
2. Faça o clone do nosso repositório;
3. Navegue até a pasta raiz do projeto, onde está localizado o arquivo docker-compose.yml;
4. No terminal execute o comando para iniciar os containers: docker-compose up
5. Utilizar o entity framework para rodar uma atualização do banco de dados: Update-Database;
6. Coloque a API para rodar;
7. Abra o arquivo da aplicação do front com o Open with Live Server;
8. Acesse a aplicação pelo navegador e faça o teste com as informações. 

#Como iniciar o projeto:

Backend
1. Abrir visual studio 
2. Abrir solução -> ir ate a pasta que vc tem a .sln 
esperancasobrerodasAPI.sln
3. Abrir terminal (certifique-se de estar na pasta que tem o docker-compose.yml)
4. Digite o comando docker compose up
5. Iniciar o back

Frontend
1. Abrir o  VSCODE
2. Clica em abrir pasta
3. Vai ate a pasta do front 
4. Iniciar o front em live
