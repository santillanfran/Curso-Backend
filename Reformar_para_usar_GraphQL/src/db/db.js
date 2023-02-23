require("dotenv").config();

const mongoose = require("mongoose");

const url = process.env.MONGO_URI;

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectDB = async () => {
    try {
        await mongoose.connect(url, connectionParams);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = { connectDB };