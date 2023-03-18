const { Schema, model } = require("mongoose");

const CarritoSchema = Schema(
    {
        productos: [
            {
                producto: {
                    type: Schema.Types.ObjectId,
                    ref: "Producto",
                    required: true,
                },
                monto: {
                    type: Number,
                    required: true,
                    default: 1,
                },
                cantidad: {
                    type: Number,
                    required: true,
                },
            },
        ],
        total: { type: Number }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);


module.exports = model("Carrito", CarritoSchema);