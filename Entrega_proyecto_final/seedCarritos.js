const mongoose = require("mongoose");
const Carrito = require("./models/carrito");
const producto = require("./models/producto");

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

const seedCarritos = [
    {
        productos: [
            {
                producto: "634c8e5abf386c5168b2dcd1",
                monto: "32999",
            },
            {
                producto: "634c8e5abf386c5168b2dcd5",
                monto: "8799",
            },
            {
                producto: "634c8e5abf386c5168b2dcd8",
                monto: "12999",
            },
        ],
    },
    {
        productos: [
            {
                producto: "634c8e5abf386c5168b2dcd6",
                monto: "6499",
            },
            {
                producto: "634c8e5abf386c5168b2dcd2",
                monto: "26399",
            },
        ],
    },
    {
        productos: [
            {
                producto: "634c8e5abf386c5168b2dcd4",
                monto: "9499",
            },
        ],
    },
    {
        productos: [
            {
                producto: "634c8e5abf386c5168b2dcd6",
                monto: "6499",
            },
            {
                producto: "634c8e5abf386c5168b2dcd6",
                monto: "6499",
            },
            {
                producto: "634c8e5abf386c5168b2dcd8",
                monto: "12999",
            },
            {
                producto: "634c8e5abf386c5168b2dcd8",
                monto: "12999",
            },
        ],
    },
];

const seedDB = async () => {
    await Carrito.deleteMany({});
    await Carrito.insertMany(seedCarritos);
};

seedDB().then(() => {
    mongoose.connection.close();
});

// name file seeds.js