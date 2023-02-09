import mongoose from "mongoose";

export const cartModel = new mongoose.Schema({
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products",
            },
            amount: {
                type: Number,
                required: true,
                default: 1,
            },
        },
    ],
}, {
    timestamps: true,
    versionKey: false
});