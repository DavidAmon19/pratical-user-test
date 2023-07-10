<h1 align="center">:file_cabinet: Cadastro de motoristas FullStack</h1>

## :memo: Descrição
O projeto consiste em uma tela com opções de cadastro de usuario, com os campos de nome, documento, placa e veiculo, ao clicar em salvar essas informações irão para o Grid abaixo e esse grid possui as opções de editar e excluir o usuario, também temos um campo de pesquisa para pesquisar um usuario.
## :books: Funcionalidades
* <b>Cadastro</b>: Cadastro de usuarios com informações do tipo nome, documento, placa e veiculo.
* <b>Pesquisa de Usuario</b>: Campo de pesquisa de usuarios.
* <b>Grid com informações</b>: Grid que possui os campos de nome, documento, placa e veiculo com o nome de forma alfabética e duas opções, uma de editar e outra para deletar.

## :wrench: Tecnologias utilizadas
* React;
* CSS;
* Node;
* Axios;
* Mysql;

## :rocket: Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo, e abrir dois teminais, um para rodar o frontend e o outro para rodar o api, lembrando que se faz necessário o uso do backup do banco de dados para o teste, utilizando o seguinte comando
```
Frontend
yarn start

Backend
yarn start

Mysql
ALTER USER 'root'@'localhost' INDENTIFIED WITH mysql_native_password BY 'abc12345';


```


