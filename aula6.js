//aggregate exemplo



db.orders.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "id",
            as: "user_info"
        }
    }
 ]); 
 
//group 

db.orders.aggregate([
    {
        $group:{
            _id: "$product_id", //agrupa por product_id
            total_orders: {$sum: 1},
            total_quantity: {$sum: "$quantity"}
        }
}
]);

//pipeline
db.vendas.aggregate([
    {$match: {ano: 2023}},
    {$group: {_id: "$mes", total: {$sum: "$valor"}}},
    {$sort: {total: -1}}
]);

//project
db.vendas.aggregate([
    {$project: {nome: 1, valor: 1,_id: 0}}
]);

db.vendas.aggregate([
    {$sort: {valor: -1}},
    {$limit: 5}
]);

//unwind 
db.pedidos.aggregate([
    {$unwind: "$itens"}
]);

//facet

db.vendas.aggregate([
    {
        $facet: {
           total_vendas: [{$count:"count"}],
           soma_total: [{$group: {_id: null, total: {$sum: "$valor"}}}]
        }
    }
]);

//bucket

db.vendas.aggregate([
    {
        $bucket: {
            groupBy: "$valor",
            boundaries: [0, 100, 200, 300],
            default: "Mais de 300",
            output: {
            total_vendas:{$sum:1},soma_valores: {$sum: "$valor"}
            }
        }
    }
]);

//addFields

db.vendas.aggregate([
    {$addFields: {
        total: {$multiply: ["$quantidade", "$preco_unitario"]}
    }}
]);

//count

db.vendas.aggregate([
    {$count: "total_vendas"}
]);

//como testar 

db.vendas.aggregate([
    {$match: {ano: 2023}},
    {$group: {_id: "$mes", total_vendas: {$sum: "$valor"}}},
    {$sort: {total: -1}}
]).explain("executionStats");


/*
$sum soma os valores
$avg calcula a média
$min retorna o menor valor
$max retorna o maior valor
$first retorna o primeiro
$last retorna o último
*/


db.vendas.aggregate([
    {$group: {_id: "$produto", media_vendas: {$avg: "$valor"}}}
]);

//cond estrutura condicional
//ifNull retorna o valor se não for nulo ou indefinido
//switch implementa uma serie de condições