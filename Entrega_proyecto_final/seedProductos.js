const mongoose = require("mongoose");
const Producto = require("./models/producto");

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

const seedProductos = [
    {
        nombre: "Nike Waffles One",
        usuario: "634b3dcdbcb8103f4c78533b",
        descripcion:
            "Con un diseño inspirado en algo tan sencillo como una waflera de hierro, una idea que revolucionó al cofundador de Nike. ",
        precio: 32999,
        img: "https://res.cloudinary.com/ojedaweb/image/upload/v1664937294/zapatillas_nike_waffle_one_jsbcva.jpg",
        categoria: "634c8db9e89d544ad8f2b73b",
    },
    {
        nombre: "Nike Air Max Thea",
        usuario: "634b3dcdbcb8103f4c78533b",
        descripcion:
            "Para vos que te gusta estar en constante contacto con la naturaleza y disfrutar del aire con cada kilómetro que recorrés.",
        precio: 26399,
        img: "https://res.cloudinary.com/ojedaweb/image/upload/v1664937319/zapatillas_nike_air_max_thea_veordk.jpg",
        categoria: "634c8db9e89d544ad8f2b73b",
    },

    {
        nombre: "Nike React Miler 2",
        usuario: "634b3dcdbcb8103f4c78533b",
        descripcion:
            "Para vos que recorrés las calles de la ciudad, las Zapatillas Nike React Miler 2 son ideales por su diseño inspirado en las pistas de atletismo.",
        precio: 40999,
        img: "https://res.cloudinary.com/ojedaweb/image/upload/v1664937328/zapatillas_nike_react_miler_2_fmncjs.jpg",
        categoria: "634c8db9e89d544ad8f2b73b",
    },
    {
        nombre: "Adidas Essentials",
        usuario: "634b3dcdbcb8103f4c78533b",
        descripcion:
            "La Remera adidas Essentials tiene un logo camuflado en el frente para darle estilo a una prenda de todos los días. Su corte clásico te permite moverte cómodamente y está elaborada en algodón para brindarte la suavidad y el confort que buscas.",
        precio: 9499,
        img: "https://res.cloudinary.com/ojedaweb/image/upload/v1647978232/remera-adidas-essentials.jpg",
        categoria: "634c8db9e89d544ad8f2b73c",
    },
    {
        nombre: "Puma Essential Heather",
        usuario: "634b3dcdbcb8103f4c78533b",
        descripcion:
            "Lucí un estilo relajado y casual con la Remera Puma Essential Heather, confeccionada en algodón y poliéster y con un diseño sencillo para que puedas combinarla con todas tus prendas. Su cuello redondo y calce regular la vuelven una remera ideal para acompañarte en tu día a día.",
        precio: 8799,
        img: "https://res.cloudinary.com/ojedaweb/image/upload/v1647978232/remera-puma-essentials-heather.jpg",
        categoria: "634c8db9e89d544ad8f2b73c",
    },

    {
        nombre: "Converse Classic Fit",
        usuario: "634b3dcdbcb8103f4c78533b",
        descripcion:
            "La remera Converse Classic Fit está confeccionada en tela suave de algodón para una sensación de máxima comodidad. De corte regular, con cuello redondo y mangas cortas, su diseño lleva el estampado con el logo tradicional de la marca para que la vistas todos los días.",
        precio: 6499,
        img: "https://res.cloudinary.com/ojedaweb/image/upload/v1647978232/remera-converse-classic-fit.jpg",
        categoria: "634c8db9e89d544ad8f2b73c",
    },

    {
        nombre: "Nike Repel Miler",
        usuario: "634b3dcdbcb8103f4c78533b",
        descripcion:
            "No dejes que el frío te detenga con la Campera Nike Repel Miler. Una prenda para corredores elaborada en 100% poliéster reciclado, capucha para protegerte del frío y la lluvia y bolsillos para que puedas. llevar lo necesario con vos en tu rutina de running. Además cuenta con detalles reflectivos para que no pierdas tu oportunidad de ejercitarte a cualquier hora.",
        precio: 14999,
        img: "https://res.cloudinary.com/ojedaweb/image/upload/v1647978248/campera-nike-repel-miler.jpg",
        categoria: "634c8db9e89d544ad8f2b73d",
    },
    {
        nombre: "Nike Yoga Dri-Fit",
        usuario: "634b3dcdbcb8103f4c78533b",
        descripcion:
            "La campera Nike Yoga Dri-Fit está confeccionada en algodón y posee tecnología Dri-FIT que trabaja para mantenerte fresco y seco al mismo tiempo que sentís una absoluta comodidad y suavidad. La capucha de gran tamaño mejora la calidez y cobertura mientras caminas por la ciudad. El cierre frontal completo te permite una apertura y calce rápido y bajo tus necesidades.",
        precio: 12999,
        img: "https://res.cloudinary.com/ojedaweb/image/upload/v1647978248/campera-nike-yoga-dri-fit.jpg",
        categoria: "634c8db9e89d544ad8f2b73d",
    },
    {
        nombre: "Adidas Tokyo Run",
        usuario: "634b3dcdbcb8103f4c78533b",
        descripcion:
            "El éxito no siempre lo medís por las medallas o reconocimiento que tenés también cuenta la distancia y el recorrido en tu camino, la Campera adidas Tokyo Run se convertirá en parte de tu éxito gracias a su diseño ligeramente ajustado, cuello alto y codos performados te da la ligereza y libertad de movimientos que necesitás mientras te ejercitas.",
        precio: 13999,
        img: "https://res.cloudinary.com/ojedaweb/image/upload/v1647978248/campera-adidas-tokyo-run.jpg",
        categoria: "634c8db9e89d544ad8f2b73d",
    },
];

const seedDB = async () => {
    await Producto.deleteMany({});
    await Producto.insertMany(seedProductos);
};

seedDB().then(() => {
    mongoose.connection.close();
});

// name file seeds.js 