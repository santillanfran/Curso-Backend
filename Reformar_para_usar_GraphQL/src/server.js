const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { resolvers } = require("./graphql/resolvers");
const { typeDefs } = require('./graphql/typeDefs');
const { connectDB } = require('./db/db');

const PORT = process.env.PORT || 3000;

const app = express()
connectDB()

app.get('/', (req, res) => {
    res.send('Bienvenido a mi API')
})

async function start() {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    app.use((req, res, next) => {
        res.status(404).send("not found");
    });

    /** CONNECTION SERVER */

    try {
        app.listen(PORT);
        console.log(`Servidor conectado a puerto ${PORT}...`);
    } catch (error) {
        console.log("Error de conexión con el servidor...", error);
    }
}

start()