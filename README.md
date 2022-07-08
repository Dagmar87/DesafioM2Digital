## Desafio M2 Digital 

Esse projeto front-end foi desenvolvido por José Dagmar Florentino da Silva Sobrinho para o Desafio da M2 Digital. O projeto consiste na criação de um carrinho de compras desenvolvida em Vue.js com todas as
funcionalidades do CRUD nas partes de produto e de carrinho.

### Tecnologias Utilizadas

- VueJS
- JSON Server
- Bulma
- Axios
- Font Awesome

### Entidades

Esse projeto consiste em duas entidades que foram criadas em .json com valores já definidos: Produto e Carrinho.

#### Produto/Carrinho

- ID
- Nome
- Preço
- Categoria
- Quantidade

### Requisitos de API

#### Requisitos do Produto

##### GetProdutoItems

URL do Requisito: http://localhost:3000/produtos

#### Requisitos do Carrinho

##### GetCarrinhoItems

URL do Requisito: http://localhost:3000/carrinho

##### AddCarrinhoItem

URL do Requisito: http://localhost:3000/carrinho

##### RemoveCarrinhoItem

URL do Requisito: http://localhost:3000/carrinho/{id}

##### RemoveAllCarrinhoItems

URL do Requisito: http://localhost:3000/carrinho

### Instruções de Acesso

#### Acesso para rodar o Json Server:

- cd vue-carrinho-compras
- npm install json-server (se não tiver instalado)
- json-server --watch data.json

#### Acesso para rodar o projeto VueJS:

- cd vue-carrinho-compras
- npm install
- npm run serve