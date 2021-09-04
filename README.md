REPROGRAMA
PROJETO LIVRE
Avaliação

O objetivo do projeto livre é reunir os conceitos estudados durante o curso de back-end da {reprograma} e desafiar as alunas a colocar os seus conhecimentos em prática.

Nome Projeto
# Procura PSI 🕵🏼🕵🏼‍♀️ (PSIcologia, PSIquiatria, PSIcanálise)


Problema

Devido a procura crescente por Psicoterapia devido a pandemia e ao confinamento da população, esta API, começou a tomar forma a partir de um causo que sua autora vivenciou no período citado, além de ter amigos que estavam ou ainda estão com o mesmo problema: dificuldade na busca de informações sobre profissionais disponíveis para atendimento presencial e/ou online, através de algumas das plataformas disponibilizadas pelos planos de saúde para atendimento nas cidades de Olinda e/ou Recife, e quando retorna resultado de busca os dados nem sempre são completos ou atualizados.


Solução

A API cadastrará psicólogos e seus serviços, por exemplo: tipo de abordagem, se é conveniado a algum plano, se atende particular, onde atende, valor de consulta nas cidades de Recife e Olinda, etc.… a ideia é que a API seja alimentada pelos profissionais de saúde e que o banco de dados seja utilizado em um aplicativo de celular pelos mesmos, de forma a facilitar a atualização de seus serviços, como também a consulta das informações pelos usuários. A pesquisa foi feita nos principais planos utilizados: Unimed, Amil, Hapvida e SulAmérica.

Rotas/EndPoints

**_Estudios - Rotas_**

**_{GET}_**

[x] /terapeuta/todos
Rota que retorna uma lista com todos os profissionais cadastrados.

[ ] /terapeuta/:id/especialidade
Rota que retorna os detalhes sobre alguma informação de algum dos profissionais cadastrados, baseado no seu id.

[ ] /terapeuta/:id/abordagem
Rota que retorna os detalhes sobre alguma informação de algum dos profissionais cadastrados, baseado no seu id.

[ ] /terapeuta/:id/convenio
Rota que retorna os detalhes sobre alguma informação de algum dos profissionais cadastrados, baseado no seu id.

**_{POST}_**

[x] /terapeuta/create
Rota que recebe um novo profissional ou informação, adiciona ao banco e retorna o que foi criado.

[ ] /admin/create
Rota que cria um novo administrador, adiciona ao banco e o retorna.

**_{PATCH}_**

[ ] /terapeuta/:id
Rota que atualiza um parâmetro e retorna o item atualizado.

[ ] /admin/:id
Rota que atualiza um administrador e o retorna atualizado.

**_{DELETE}_**

[ ] /:id
Rota que deleta um item baseado em seu id.

[ ] /terapeuta/:id
Rota que deleta um local baseado em seu id.

[ ] /admin/:id
Rota que deleta um administrador baseado em seu id.

REGRAS DE NEGÓCIO

Não deverá ser possível cadastrar profissional com mesmos dados já inseridos uma vez.

Desenvolvimento
Observações a mais 
No futuro, integrar o back com o front, criando a interface visual da API para aplicativo mobile.
Descrição sobre algum ponto a destacar da aluna

Considerações - BTL
Data 30/08/2021

O assunto e suas especificidades são regulamentados pela Resolução CFP nº 013/2007, pelo Conselho Federal de Tecnologia.

As especialidades concedidas atualmente são as seguintes:

– Psicologia Escolar/Educacional;

– Psicologia Organizacional e do Trabalho;

– Psicologia de Trânsito;

– Psicologia Jurídica;

– Psicologia do Esporte;

– Psicologia Clínica;

– Psicologia Hospitalar;

– Psicopedagogia;

– Psicomotricidade;

– Psicologia Social;

– Neuropsicologia;

– Psicologia em Saúde;

– Avaliação Psicológica.