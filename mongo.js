//criando um banco de dados chamado BancoTiago

// Criando uma coleção chamada usuarios
db.createCollection("usuarios")

// Inserindo dados na coleção usuarios
db.usuarios.insertOne({
    nome: "Tiago",idade: 25, email: "tiagotas@fatec.sp.gov.br",cidade: "São Paulo"})

// Inserindo vários dados na coleção usuarios
db.usuarios.insertMany([
    {nome: "João",idade: 30, email: "joaogames@gmail.com",cidade: "São Paulo"},
    {nome: "Maria",idade: 20, email: "Mariadugrau@gmail.com",cidade: "Rio de Janeiro"},
    {nome: "Pedro",idade: 40, email: "pedringames@mail.com  ",cidade: "Curitiba"},])

    // Buscando todos os dados da coleção usuarios
db.usuarios.find( { idade: 25}).pretty();

// Buscando todos os dados da coleção usuarios
db.usuarios.find( {cidade:"São Paulo" } ,{nome: 1})

// Buscando todos os dados da coleção usuarios
db.usuarios.uptadeOne({nome: "Tiago"},{$set: {idade: 26}})

// Atualizando vários dados da coleção usuarios
db.usuarios.uptadeMany({cidade: "São Paulo"},{$set: {estado: "SP"}})

// Adicionando um novo campo hobbies na coleção usuarios
db.usuarios.uptadeOne({nome: "Tiago"},{ $push: {hobbies: "Futebol"}})

// Removendo um campo hobbies na coleção usuarios
db.usuarios.uptadeOne({nome: "Tiago"},{ $pull: {hobbies: "Futebol"}})

// Removendo um campo 
db.usuarios.deleteOne({nome: "Tiago"})

// Removendo vários campos
db.usuarios.deleteMany({cidade: "São Paulo"},{cidade: "Curitiba"})  

//

//use loja

db.createCollection("produtos")

db.produtos.insertMany([
    {
        "_id": 1,
        "nome": "Notebook Dell",
        "categoria": "Eletrônicos",
        "preco": 4500,
        "estoque": 15,
        "avaliacao": 4.7
    },
    {
        "_id": 2,
        "nome": "Smartphone Samsung",
        "categoria": "Eletrônicos",
        "preco": 2500,
        "estoque": 30,
        "avaliacao": 4.5
    },
    {
        "_id": 3,
        "nome": "Smart TV LG",
        "categoria": "Eletrônicos",
        "preco": 3500,
        "estoque": 5,
        "avaliacao": 4.9
    }]);

    db.produtos.insertOne({
        "_id": 4,
        "nome": "Cadeira Gamer",
        "categoria": "Móveis",
        "preco": 1200,
        "estoque": 10,
        "avaliacao": 4.0
    });

//operadores de comparação
$eq // igual a
db.produtos.find({"preco": {"$eq": 3500}})

$ne // diferente de
db.produtos.find({"preco": {"$ne": 3500}})

$gt // maior que
db.produtos.find({"preco": {"$gt": 3500}})

$lt   // menor que  
db.produtos.find({"preco": {"$lt": 3500}})

$gte  // maior ou igual a
db.produtos.find({"preco": {"$gte": 3500}})

$lte    // menor ou igual a
db.produtos.find({"preco": {"$lte": 3500}})

$and    // e
db.produtos.find({
    "$and" :[ 
        {"categoria": "Eletrônicos"}, 
        {"preco": {"$gt": 2500} } 
    ]
});

$or // ou
db.produtos.find({
    "$or" :[ 
        {"categoria": "Eletrônicos"}, 
        {"preco": {"$gt": 2500} } 
    ]
})

$not // não
db.produtos.find({
    "categoria": {"$not": {"$eq": "Eletrônicos"}}
})

$nor // nem 
db.produtos.find({
    "$nor" :[ 
        {"categoria": "Eletrônicos"}, 
        {"preco": {"$gt": 2500} } 
    ]
})

$exists // existe
db.produtos.find({
    "avaliacao": {"$exists": true}
})

$type // tipo
db.produtos.find({
    "avaliacao": {"$type": "double"}
})


// 1  utilize o operador $gte para buscar os produtos com preco maior ou igual a 2000
db.produtos.find({"preco": {"$gte": 2000}})

// 2  filtre os produtos que pertencema categoria "moveis" e possuem avaliacao superior a 4.5 usando $and
db.produtos.find({
    "$and" :[ 
        {"categoria": "Móveis"}, 
        {"avaliacao": {"$gte": 4.5} } 
    ]
});

// 3  use $or para retornar todos os produtos que custam menos de 2000 ou que tenham estoque menor que 20
db.produtos.find({
    "$or" :[ 
        {"preco": {"$lt": 2000}}, 
        {"estoque": {"$lt": 20} } 
    ]
})

// 4  escreva uma consulta que retorne apenas produtos que possuem o campo avaliacao
db.produtos.find({
    "avaliacao": {"$exists": true}
})

// 5  utilize $nor para excluir da busca os produtos da categoria "Eletrônicos" e que tenham preco maior que 3000
db.produtos.find({
    "$nor" :[ 
        {"categoria": "Eletrônicos"}, 
        {"preco": {"$gt": 3000} } 
    ]
})

// 6  utilize $type para buscar os produtos que possuem o campo avaliacao do tipo double
db.produtos.find({
    "avaliacao": {"$type": "double"}
})