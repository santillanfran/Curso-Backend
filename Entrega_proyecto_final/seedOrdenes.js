const mongoose = require("mongoose");
const Orden = require("./models/orden");


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

const seedOrdenes = [
    {
        usuario: "634c963dc88c6f5bfcc6c697",
        orden: [
            {
                carrito: "634c99eeef90483240748e0e",
                cantidad: 3,
            },
        ],
        total: 54797,
    },
    {
        usuario: "634c963dc88c6f5bfcc6c698",
        orden: [
            {
                carrito: "634c99eeef90483240748e12",
                cantidad: 2,
            },
        ],
        total: 54797,
    },
    {
        usuario: "634c963dc88c6f5bfcc6c69a",
        orden: [
            {
                carrito: "634c99eeef90483240748e15",
                cantidad: 1,
            },
        ],
        total: 9499,
    },
    {
        usuario: "634c963dc88c6f5bfcc6c69b",
        orden: [
            {
                carrito: "634c99eeef90483240748e17",
                cantidad: 4,
            },
        ],
        total: 38996
    }

];

const seedDB = async () => {
    await Orden.deleteMany({});
    await Orden.insertMany(seedOrdenes);
};

seedDB().then(() => {
    mongoose.connection.close();
});

// name file seeds.js