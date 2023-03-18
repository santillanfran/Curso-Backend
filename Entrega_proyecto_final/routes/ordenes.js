const { Router } = require("express");

const {
    nuevaOrden,
    mostrarOrdenes,
    mostrarOrden,
    actualizarOrden,
    eliminarOrden

} = require("../controllers/ordenes.js");

const router = Router();

router.post("/", nuevaOrden);

router.get("/", mostrarOrdenes)

router.get("/:idOrden", mostrarOrden)

router.put("/:idOrden", actualizarOrden)

router.delete("/:idOrden", eliminarOrden)

module.exports = router;