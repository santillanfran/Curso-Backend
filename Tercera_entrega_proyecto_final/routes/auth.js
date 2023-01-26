const { Router } = require("express");
const { check } = require("express-validator");
const { login } = require("../controllers/auth.js");
const { register } = require("../controllers/auth.js")
const { esRoleValido } = require("../helpers/db-validators.js");

const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.post(
    "/login",
    [
        check("email", "El correo es obligatorio").isEmail(),
        check("password", "El password es obligatorio").not().isEmpty(),
        validarCampos
    ],
    login
);
router.post(
    "/register",
    [
        check("name", "El nombre es obligatorio").not().isEmpty(),
        check("email", "El correo es obligatorio").isEmail(),
        check("password", "El password es obligatorio").not().isEmpty(),
        check("role").custom(esRoleValido),
        validarCampos
    ],
    register
);


module.exports = router;