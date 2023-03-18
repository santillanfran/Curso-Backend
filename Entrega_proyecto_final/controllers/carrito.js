const Carrito = require("../models/carrito");

// agrega un nuevo cliente
const nuevoCarrito = async (req, res, next) => {
    try {
        const carrito = new Carrito(req.body);
        await carrito.save();
        res.status(201).json({ message: "Carrito creado con éxito" });
    } catch (err) {
        res.status(500).json({ message: err.message });
        next();
    }
};

// Muestra todos los carritos
const mostrarCarritos = async (req, res, next) => {
    try {
        const carritos = await Carrito.find({});
        carritos
            ? res.status(200).json(carritos)
            : res.status(404).json({ message: "No hay carritos disponibles" });
    } catch (err) {
        res.status(500).json({ message: err.message });
        next();
    }
};

// Muestra un carrito por su ID
const mostrarCarrito = async (req, res, next) => {
    try {
        const carrito = await Carrito.findById(req.params.idCarrito);
        carrito
            ? res.status(200).json(carrito)
            : res.status(404).json({
                message: "Carrito no encontrado. id: " + req.params.idCarrito,
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//Agregar productos en carrito
const carritoAgregarProductos = async (req, res) => {
    try {
        const carrito = await Carrito.findById(req.params.id);
        const productos = req.body; // array de objetos
        if (carrito && productos) {
            const carritoUpdate = await agregarProductos(carrito, productos);
            const nuevoCarrito = await Carrito.findById(carritoUpdate._id);
            res.status(201).json({
                message: "Productos agregados con éxito",
                carrito: nuevoCarrito,
            });
        }
        if (!carrito) {
            res
                .status(404)
                .json({ message: "Carrito no encontrado. id: " + req.params.id });
        }
        if (!productos) {
            res.status(404).json({ message: "La lista de productos está vacía" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message, line: err.line });
    }
};

// Eliminar un producto de un carrito
const carritoEliminarProducto = async (req, res) => {
    try {
        const carrito = await Carrito.findById(req.params.idCarrito);
        const productoId = req.params.productoId;
        if (carrito && productoId) {
            const carritoUpdate = await eliminarProducto(carrito, productoId);
            const nuevoCarrito = await Carrito.findById(carritoUpdate._id);
            res.status(200).json({
                message: "Producto eliminado con éxito",
                carrito: nuevoCarrito,
            });
        }
        if (!carrito) {
            res
                .status(404)
                .json({ message: "Carrito no encontrado. id: " + req.params.id });
        }
        if (!productoId) {
            res.status(404).json({ message: "El producto no existe" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    nuevoCarrito,
    mostrarCarrito,
    mostrarCarritos,
    carritoEliminarProducto,
    carritoAgregarProductos,
};