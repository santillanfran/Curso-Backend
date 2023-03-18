const { Schema, model } = require('mongoose');

const chatSchema = Schema({
    email: { type: String },
    tipoPregunta: { type: String, default: "USER_ROLE" },
    mensaje: { type: String }

}, {
    timestamps: true
});

module.exports = model("Chat", chatSchema);