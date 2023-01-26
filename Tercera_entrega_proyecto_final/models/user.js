const { Schema, model } = require("mongoose");

const UserSchema = Schema({
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

    role: {
        type: String,
        enum: ["ADMIN_ROLE", "USER_ROLE", "VENTAS_ROLE"]
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

UserSchema.methods.toJSON = function () {
    const { __v, password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
};

module.exports = model("User", UserSchema);