db.heroes.insertMany([
    { _id : 1, name :"Spiderman", city : "New York" , power : ["Agility", "Web_Shooting"] , defeatedVillains : 50 },
    {_id : 2, name:"Batman", city : "Gotham", power : ["Martial_Arts", "Detective_Skills"] , defeatedVillains : 500 },
    { _id : 3, name:"Wonder Woman", city : "Themyscira", power : ["Super_Strength", "Lasso"] , defeatedVillains : 120 }
]);

//Adicionar o novo superpoder sentido arranhar para o Spiderman

db.heroes.find({name: {"$eq": "Spiderman"}})

db.heroes.updateOne(
    {name:"Spiderman"},
    {$push:{power:"Sentido aranha aprimorado"}});

//o batman prendeu mais 10 vilões

db.heroes.find({name: {"$eq": "Batman"}})

db.heroes.updateOne(
    {name:"Batman"},
    {$inc:{defeatedVillains:10}}
)
//o nome da mulher maravilha foi alterado para amazona

db.heroes.find({name: {"$eq": "Wonder Woman"}})


db.heroes.updateOne(
    {name:"Wonder Woman"},
    {$set:{name:"Amazona"}}
)

db.heroes.find({name: {"$eq": "Amazona"}})
//o batman desaprendeu a habilidade de detetive

db.heroes.find({name: {"$eq": "Batman"}})

db.heroes.updateOne(
    {name:"Batman"},
    {$pull:{power:"Detective_Skills"}}
)

db.menu.insertMany([
    {_id: 1, name: "pizza",ingredients:["Dough","Tomato Sauce","Cheese"], price: 30},
    {_id: 2 , name :"Sushi", ingredients:["Rice","Salmon","Seaweed"], price: 40},
    {_id3: 3, name: "Taco", ingredients:["Tortilla","beef","Cheese"], price: 15}
]);

//o restaurante aumentou o preço de todos os pratos em 10%
db.menu.updateMany(
    {},
    {$mul:{price:1.1}}
)
//o taco agora vem com guacamole adicione o novo ingrediente ao taco
db.menu.updateOne(
    {name: "Taco"},
    {$push:{ingredients:"Guacamole"}}
)

//o sushi teve um reajuste de preço e agora custa 35 reais
db.menu.updateOne(
    {name: "Sushi"},
    {$set:{price:35}}
)
//o restaurante trocou beef por chicken no taco
db.menu.updateOne(
    {name: "Taco"},
    {$set:{ingredients:["Tortilla","Chicken","Cheese","Guacamole"]}}
)
