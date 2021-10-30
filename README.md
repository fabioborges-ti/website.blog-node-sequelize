# Blog do Programador 
Novamente, trata-se de aplicação simples, para cadastro de artigos, porém com uma arquitetura **MVC** (*Model, View, Controller*) e a divisão clara de responsabilidades de cada camada do projeto. 

### 🔥 Para baixar:
> Clone repository:
> `https://git@github.com:fabioborges-ti/website.blog-node-sequelize.git`

### 💻 Tecnologias
Lista das principais tecnologias envolvidas no projeto:
- **NodeJs** (https://nodejs.org/en/)
- **ExpressJs** (https://expressjs.com/pt-br/)
- **Sequelize ORM** (https://sequelize.org/)
- **Postgres** (https://hub.docker.com/_/postgres)
- **EJS** (https://ejs.co/)

### 📋 Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Git]([https://git-scm.com](https://git-scm.com/)), [Node.js]([https://nodejs.org/en/](https://nodejs.org/en/)) e o [Docker]([https://docs.docker.com/desktop/](https://docs.docker.com/desktop/)). Além disto, sugiro que você utilize um bom editor de código, como o [VSCode]([https://code.visualstudio.com/]  (https://code.visualstudio.com/)), porque irá oferecer muitas extensões que farão toda diferença.

### 📦 Dependências do projeto
Tudo instalado, vamos seguir?? Se sim, chegou a hora de baixarmos as dependências do projeto. Para isso, você deve abrir seu terminal, na pasta da solução e executar o comando abaixo; este fará o _download_ dos pacotes necessários:
```bash
$ npm install
```
### ⚡ Ah... Importante!
Devemos falar do banco de dados, né?
Observe o arquivo **.env** na pasta raiz do projeto; trata-se do arquivo com todas as variáveis de ambiente que serão usadas ao longo do projeto e, principalmente para acesso ao banco de dados. 

### 🔨 Sequelize ORM
Segundo o site oficial, é um **ORM** para Node.js baseado em Promises, para os bancos PostgreSQL, MySQL, MariaDB, SQLite e MS SQL Server. O projeto está configurado para usar o Postgres, contudo você pode usar qualquer uma das opções acima. 

Recomendo que tenha um com um nome à sua escolha, mas não se preocupe em criar tabelas, o Sequelize vai cuidar disso pra gente. Você deve ter é instalado previamente o banco de dados e informar os dados de conexão no arquivo  **.env** na pasta raiz do projeto.

### ✔️ Vamos testar?
Agora que você já tem tudo pronto, chegou a hora de testar... **vamo testar**?? Para isso, você deve abrir seu terminal e entrar na pasta da solução, onde estão os arquivos e seguir os seguintes passos:

1. Para instalação do CLI (*command-line interface*) do Sequelize;
```bash
$ npm i sequelize-cli
```
2. Criação do banco de dados;
```bash
$ npx sequelize db:create 
```
3. Executar as migrações;
```bash
$ npx sequelize db:migrate  
```
4. E por fim, executar a rotina de carga de dados;
```bash
$ npx sequelize db:seed:all
```
Se tudo correu bem, seu banco de dados foi criado e agora já tem dados criados de forma automática; e já pode começar seus estudos. Sugiro que não deixe de abrir o site oficial do Sequelize e conhecer uma série de recursos disponíveis, como criação de novos ***Models***, novos relacionamentos e novas migrações. 

## 📚 Para mais informações:
Se você não conhece muito sobre este processo e quer mais detalhes, consulte em: https://sequelize.org/

E bom estudos! 🚀
