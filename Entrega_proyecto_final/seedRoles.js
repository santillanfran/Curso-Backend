const mongoose = require("mongoose");
const Role = require("./models/role");

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

const seedRoles = [
    {
        rol: "ADMIN_ROLE"
    },
    {
        rol: "USER_ROLE"
    },
    {
        rol: "VENTAS_ROLE"
    },
    {
        rol: "PRUEBA_ROLE"
    },
    {
        rol: "PRUEBA1"
    }
];

const seedDB = async () => {
    await Role.deleteMany({});
    await Role.insertMany(seedRoles);
};

seedDB().then(() => {
    mongoose.connection.close();
});

// name file seeds.js
