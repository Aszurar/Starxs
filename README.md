# Controle Escolar | LaunchBase
 O projeto de Controle Escolar é uma plataforma simples de um markplace, em que há 3 produtos distintos e o usuário poderá adicionar ao carrinho esses produtos promovendo um desconto caso escolha determinado produto e realizar o submit do pedido
<h2 align="center">Starxs</h2>

___

<h3 align="center">
  <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#package-como-baixar-e-executar-o-projeto">Baixar e Executar</a>&nbsp;
</h3>

___

<div align="center" ><img src="https://i.imgur.com/acLzzpO.png" width="600"></div> 

<div align="center" ><img src="https://i.imgur.com/SIfDls5.png" width="600"></div> 


___
## :seedling: Requisitos Mínimos

Node.js, Nunjucks, Express, Browser-sync, npm-run-all e method-override.
___
## :rocket: Tecnologias Utilizadas 

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [Node.js](https://nodejs.org/en/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Nunjucks](https://mozilla.github.io/nunjucks/)

___
## :package: Como baixar e executar o projeto

  - Clonar o projeto:
```bash
  $ git clone https://github.com/Aszurar/Starxs.git
```
- Entrar na pasta do projeto:
```bash
  $ cd NomedaPasta
```
- Após instalar o Node.js, executar o npm:
```bash
  $ npm init -y
```
- Instalar o Express:
```bash
  $ npm install express
```
- Instalar o Nodemon:
```bash
  $ npm install -D nodemon  
```
- Após isso configure o script do arquivo package.json assim:
```json
  "scripts": {
      "start": "nodemon server.js"
    }
```
- Instalar o Nunjucks:
```bash
  $ npm install nunjucks
```
- Instalar o Method-Override
  ```bash
  $ npm install method-override
  ```
 - Instalar o  Browser-sync e npm-run-all:
```bash
  $ npm install browser-sync npm-run-all -D
```
 - Após isso configure o script do arquivo package.json assim:
 ```bash
   "scripts": {
    "start": "npm-run-all -p nodemon browsersync",
    "nodemon": "nodemon server.js",
    "browsersync": "browser-sync start --proxy http://localhost:5022 --files 'public,views'"
  },
```
 - Execução:
 ```bash
  $ npm start
```
- A utilização d o browser-sync e npm-run-all basicamente serve para que o site seja aberto automaticamente assim que executamos o projeto, que a página na web se atualize cada veze que realizarmos alguma mudança no projeto, ou seja, a sincronia estea totalmente automática, facilitando o desenvolvimento.
- As configurações no serve.js já estão feitas para utilizarem essas ferramentas.
```json
{   
    "ignore": ["*.json"] 
}
```
- Isso previne o projeto de ficar em loop de carregamento "infinito" no navegador quando uma mudança for feita no arquivo json de dados.
___
Desenvolvido por :star2: Lucas de Lima Martins de Souza.
