const { Router } = require("express");

const {
    nuevoCarrito,
    mostrarCarrito,
    mostrarCarritos,
    carritoEliminarProducto,
    carritoAgregarProductos,
} = require("../controllers/carrito.js");

const router = Router();

router.get("/", mostrarCarritos);

router.get("/:id", mostrarCarrito);

router.post("/", nuevoCarrito);

router.post("/:id/productos", carritoAgregarProductos);

router.delete("/:id/productos/:productoId", carritoEliminarProducto);

module.exports = router;