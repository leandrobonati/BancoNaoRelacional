db.users.insertMany([
    {
        id: 1,
        username: "joao",
        age: 24,
        active: true, 
        premium: false,
        hobbies: ["reading", "soccer"],
        tasks: [{title:"study MongoDB", status: "pending"}]
    },
    {
        id: 2,
        username: "maria",
        age: 30,
        active: false,
        premium: false,
        hobbies: ["cooking", "yoga"],
        tasks: [{title:"workout", status: "done"}]
    },
    {
        id: 3,
        username: "carlos",
        age: 35,
        active: true,
        premium: false,
        hobbies: ["gaming", "music"],
        tasks: [{title:"write report", status: "pending"}]
    }
]);

db.users.find({"age": {"$eq": 30}})


db.users.replaceOne(
    {username: "maria"},
    {
        id: 2,
        username: "maria",
        age: 31,
        active: false,
        premium: false,
        hobbies: []
    });


db.users.UpdateOne(
    {username: "carlos"},
    {$unset: {premium:""}}
);

db.users.updateOne(
    {username: "maria"},
    {$rename: {"age": "yeasOld"}}
);


db.users.find({"yearsOld": {"$eq": 31}})

db.users.updateOne(
    {username: "joao"},
    {$inc: {age: 1}}
);

db.users.updateOne(
    {username: "carlos"},
    {$mul: {age: 1.2}}
);

db.users.updateOne(
    {username: "joao"},
    {$min: {age: 23}}
);

db.users.updateOne(
    {username: "maria"},
    {$max: {yearsOld: 30}}
);

db.users.updateOne(
    {username: "joao"},
    {$push: {hobbies: "guitar"}}
);

