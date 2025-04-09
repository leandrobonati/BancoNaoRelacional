for (let i = 0; i < 100; i++) {
  db.pet.insertOne({
    nome: `usuario${i}`,
    idade: Math.floor(Math.random() * 20) ,
    raca: `raca${i}`,
    cuidador: `cuidador${i}`,
    celular: `celular${i}`
  });
}

db.usuarios.CreateIndex({nome:1});

//criar um index para exibir os usuários com idade maior que 50
db.usuarios.CreateIndex({idade:1});
db.usuarios.find({idade:{"$gt":50}}).explain("executionStats");

db.usuarios.CreateIndex({email:1});
//criar um index para exibir os usuários com email que contenha a palavra gmail
db.usuarios.find({email:{"$regex":"gmail"}}).explain("executionStats");