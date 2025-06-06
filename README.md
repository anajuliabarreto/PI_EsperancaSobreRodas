﻿# Projeto TCC esperança sobre rodas

- Ana Julia Dias Barreto - 2212188
- Breno Cappelle de Almeida - 2221510
- Maria Vitoria Matos Costa Beber - 2211107
- Vitoria Oliveira Gomes Melo - 2210249

#Esperança sobre Rodas - Projeto de Transporte Voluntário

- **Backend**: .NET 8.0
- **Banco de Dados**: SQL Server

# Objetivos:
- Facilitar o acesso de pacientes ao tratamento oncológico.
- Criar uma rede de motoristas voluntários e doadores;
- Garantir a privacidade e segurança dos dados dos usuários;
- Desenvolver uma plataforma amigável e responsiva;
- Reduzir riscos de infecções por neutropenia;
- Evitar interrupção de tratamentos;
- Promover o engajamento comunitário em causas humanitárias.

# Com a implementação do sistema "Esperança sobre Rodas", espera-se proporcionar um
meio de transporte seguro, gratuito e eficiente para crianças e adolescentes em tratamento
oncológico. A disponibilidade desse serviço pretende reduzir significativamente o número
de faltas às sessões de quimioterapia e radioterapia, fortalecendo a continuidade terapêutica
e melhorando as chances de sucesso clínico.
O aplicativo deverá otimizar a logística de transporte ao conectar pacientes a
motoristas voluntários disponíveis de forma ágil e inteligente, minimizando tempos de
espera e garantindo maior eficiência no atendimento. Além disso, o sistema será
desenvolvido com foco em alta segurança da informação, assegurando a privacidade e a
proteção dos dados sensíveis dos usuários, o que deverá aumentar a confiança e a adesão à
plataforma.
Outro resultado esperado é a criação de uma experiência de usuário intuitiva e
amigável, capaz de incentivar tanto os pacientes quanto os motoristas a utilizarem a
ferramenta de maneira constante. Com a consolidação da rede de voluntariado, pretende-se
mobilizar ativamente a sociedade civil, fortalecendo laços comunitários e promovendo a
solidariedade social.
Espera-se também que o sistema contribua para ampliar a capacidade de
atendimento dos hospitais, ao possibilitar que mais pacientes completem seus tratamentos
sem interrupções. A coleta de dados de uso da plataforma poderá oferecer informações
relevantes para futuras melhorias no serviço, além de servir de subsídio para o
desenvolvimento de políticas públicas voltadas ao suporte de pacientes oncológicos.
Finalmente, ao reduzir os índices de abandono terapêutico e as complicações médicas
associadas, o projeto poderá ajudar a diminuir os custos indiretos do sistema público de
saúde.

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
