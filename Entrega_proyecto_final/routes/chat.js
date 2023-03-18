const { Router } = require("express");
const { getMensaje, getMensajes, addMensaje } = require("../controllers/chat");

const router = Router();

router.get('/', getMensajes);
router.get('/:email', getMensaje);
router.post('/', addMensaje);


module.exports = router