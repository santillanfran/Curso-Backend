const { Schema, model } = require("mongoose");

const ClienteSchema = Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "El nombre es obligatorio"],
    },

    email: {
        type: String,
        trim: true,
        required: [true, "El correo es obligatorio"],
        unique: true,
    },

    password: {
        type: String,
        trim: true,
        required: [true, "La contraseña es obligatoria"],
    },

    year: {
        type: Number,
        trim: true,
        maxlenght: 2,
    },

    shippingAddress: {
        fullName: { type: String, trim: true },
        address: { type: String, trim: true },
        city: { type: String, trim: true },
        country: { type: String, trim: true },
    },

    phone: {
        type: String,
        trim: true,
        maxlenght: 11,
    },

    photo: {
        type: String,
        trim: true,
    },

    role: {
        type: String,
        enum: ["ADMIN_ROLE", "USER_ROLE", "VENTAS_ROLE"],
    },

    google: {
        type: Boolean,
        default: false,
    },

    state: {
        type: Boolean,
        default: true,
    },
});

ClienteSchema.methods.toJSON = function () {
    const { __v, password, _id, ...cliente } = this.toObject();
    cliente.uid = _id;
    return cliente;
};

module.exports = model("Cliente", ClienteSchema);
