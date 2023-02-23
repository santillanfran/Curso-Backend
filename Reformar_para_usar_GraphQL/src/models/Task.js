const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model("Task", taskSchema);