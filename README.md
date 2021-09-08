REPROGRAMA 🚀 | Turma On12 BACKEND | PROJETO FINAL 🚀

<span style="display:block;text-align:center">![Logo do Projeto](https://github.com/omahin/Projeto-Final/blob/main/src/img/logoprocurapsi.png)</span>


<!-- <p align="center">
![Logo do Projeto](https://github.com/omahin/Projeto-Final/blob/main/src/img/logoprocurapsi.png) 
</p> -->

<h3 align="center">Status do Projeto: Concluído</h3>

## 💻 Sobre o Projeto 

### Problema

Devido a procura crescente por Psicoterapia devido a pandemia e ao confinamento da população, esta API, começou a tomar forma a partir de um causo que sua autora vivenciou no período citado, além de ter amigos que estavam ou ainda estão com o mesmo problema: dificuldade na busca de informações sobre profissionais disponíveis para atendimento presencial e/ou online, através de algumas das plataformas disponibilizadas pelos planos de saúde para atendimento nas cidades de Olinda e/ou Recife, e quando há retorno nos resultados de busca os dados nem sempre são completos ou atualizados.

### Solução

A API cadastrará psicólogos e seus serviços, por exemplo: tipo de abordagem, se é conveniado a algum plano, se atende particular, onde atende, valor de consulta nas cidades de Recife e Olinda, etc.… A ideia é que a API seja alimentada pelos profissionais de saúde e que o banco de dados seja utilizado em um aplicativo de celular pelos mesmos, de forma a facilitar a atualização de seus serviços, como também a consulta das informações pelos usuários.

## Tabela de Conteúdo

<!--ts-->
   * [Descrição do Projeto](#descricao-do-projeto)
      * [Problema](#problema)
      * [Solução](#solucao)
   * [Tabela de Conteudo](#tabela-de-conteudo)
   * [Instalação](#instalacao)
   * [Como usar](#como-usar)
      * [Pre Requisitos](#pre-requisitos)
      * [Local files](#local-files)
      * [Remote files](#remote-files)
      * [Multiple files](#multiple-files)
      * [Combo](#combo)
   * [Tests](#testes)
   * [Tecnologias](#tecnologias)
<!--te-->

## ⚙️ Funcionalidades

- [x] Os profissionais de saúde irão se cadastrar na plataforma através da criação de um usuário com senha de administrador (onde ele poderá inserir e atualizar seus dados ) e informar os dados de seus serviços que ficarão visíveis para o público.

- [x] O usuário a procura de um profissional de saúde da área irá se cadastrar na plataforma, e logado poderá visualizar e filtrar os dados cadastrados pelo profissionais.

## Rotas 

**_terapeuta_** / **_abordagem_** / **_especialidade_** /**_convenio_** /**_adm_** /**_usuario_**

|      **_{GET}_**         |  Retorna  |
| ------------------- | :-------------------: |
|  /terapeuta/todos |  Lista todos os profissionais cadastrados |
|  /terapeuta/:especialidade |  Lista todos os profissionais cadastrados por especialidade |
|  /terapeuta/abordagem/:abordagem |  Lista todos os profissionais cadastrados por abordagem |
|  /terapeuta/convenio/:convenio |  Lista todos os profissionais cadastrados por convênio |
| /terapeuta/id/:id |  Lista todos os profissionais cadastrados por id específico |
|  /abordagem/todos |  Lista todos as abordagens cadastradas |
|  /abordagem/:id |  Lista todos as abordagens cadastradas por id específico |
|  /especialidade/todos |  Célula de conteúdoLista todos as especialidades cadastradas |
|  /especialidade/:id |  Lista todos as especialidades cadastradas por id específico |
|  /convenio/todos |  Lista todos os convenios cadastrados |
|  /convenio/:id |  Lista todos os convenios cadastrados por id específico |

|      **_{POST}_**         |  Retorna  |
| ------------------- | :-------------------: |
|  /terapeuta/criar |  Recebe um novo profissional, adiciona ao banco e retorna o que foi criado |
|  /abordagem/criar |  Recebe uma nova abordagem, adiciona ao banco e retorna o que foi criado |
|  /especialidade/criar |  Recebe uma nova especialidade, adiciona ao banco e retorna o que foi criado |
|  /convenio/criar |  Recebe um novo convênio, adiciona ao banco e retorna o que foi criado |
| /adm/criar |  Recebe um novo usuário administrador |
|  /adm/login |  Faz login do usuário cadastrado |
| /usuario/criar |  Recebe um novo usuário |
|  /usuario/login |  Faz login do usuário cadastrado |

|      **_{PATCH}_**  |        Retorna      |
| ------------------- | :-------------------: |
|  /terapeuta/:id |  Atualiza um parâmetro e retorna o item atualizado |

|      **_{DELETE}_**         |  Retorna  |
| ------------------- | :-------------------: |
|  /terapeuta/:id |  Deleta um terapeuta baseado em seu id |

## Regras de Negócio

* Não deverá ser possível cadastrar profissional com mesmos dados já inseridos uma vez.

* Todas as rotas estão autenticadas.

* O usuário adminitrador tem permissão de acesso para todas as rotas.

* O usuário cadastrado não poderá criar, atualizar ou deletar dados, apenas visualizá-los e filtrá-los.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como o [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/omahin/Projeto-Final>

# Acesse a pasta do projeto no terminal
$ cd procurapsi

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute o servidor
$ npm start

# O servidor inciará na porta:3333 - acesse <mongodb://localhost:27017/procura-psi>
```
## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Mongo](https://www.mongodb.com/pt-br)
- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

## Pacotes Utilizados

* express
* nodemon
* dotenv
* mongoose
* bcrypt
* jsonwebtoken
* cors
## Implementações Futuras 

No futuro, integrar o back com o front, criando a interface visual da API para aplicativo mobile.

## Gostaria de contribuir?

1 - Fork o projeto;

2 - Crie uma branch para realizar suas alterações: git checkout -b feature/nome-da-sua-branch;

3 - Commit suas alterações e abra um pull request

## Licença

## Desenvolvedora

---

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/79282971?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Olga Mahin</b></sub></a> <a >🚀</a>

Feito com ❤️ 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-OlgaMahin-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/omahin/)](https://www.linkedin.com/in/omahin/) 
[![Gmail Badge](https://img.shields.io/badge/-olga.mahin@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:olga.mahin@gmail.com)](mailto:olga.mahin@gmail.com)