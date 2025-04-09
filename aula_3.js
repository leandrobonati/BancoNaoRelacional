
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
        "_id": 4,
        "nome": "Cadeira Gamer",
        "categoria": "Móveis",
        "preco": 1200,
        "estoque": 10,
        "avaliacao": 4.0
    }]);

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