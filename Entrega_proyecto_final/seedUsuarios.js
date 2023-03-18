const mongoose = require("mongoose");
const Usuario = require("./models/usuario");

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

const seedUsuarios = [
    {
        nombre: "Daniel Alvarez",
        correo: "daniel@correo.com",
        password: "123456",
    },
    {
        nombre: "Maria Planes",
        correo: "maria@correo.com",
        password: "456789",
    },
    {
        nombre: "Josefina De la Plaza",
        correo: "josefina@correo.com",
        password: "789012",
    },
    {
        nombre: "Carlos Vazquez",
        correo: "carlos@correo.com",
        password: "456678",
    },
    {
        nombre: "Luisa Gomez",
        correo: "luisa@correo.com",
        password: "089234",
    },
    {
        nombre: "Roberto Ojeda",
        correo: "roberto@correo.com",
        password: "018975",
        rol: "ADMIN_ROLE"
    },
];

const seedDB = async () => {
    await Usuario.deleteMany({});
    await Usuario.insertMany(seedUsuarios);
};

seedDB().then(() => {
    mongoose.connection.close();
});

// name file seeds.js