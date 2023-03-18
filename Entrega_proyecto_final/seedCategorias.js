const mongoose = require("mongoose");
const Categoria = require("./models/categoria");

mongoose
    .connect(
        "mongodb+srv://Dbojedaweb:rdo0j3d6@cluster0.tsqrh.mongodb.net/eShop",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("Mongo Connection OPEN!!!!");
    })
    .catch((err) => {
        console.log(err);
    });

const seedCategorias = [
    {
        nombre: "Zapatillas",
        usuario: "634b3dcdbcb8103f4c78533b",
    },
    {
        nombre: "Remeras",
        usuario: "634b3dcdbcb8103f4c78533b",
    },
    {
        nombre: "Camperas",
        usuario: "634b3dcdbcb8103f4c78533b",
    },
];

const seedDB = async () => {
    await Categoria.deleteMany({});
    await Categoria.insertMany(seedCategorias);
};

seedDB().then(() => {
    mongoose.connection.close();
});

// name file seeds.js
