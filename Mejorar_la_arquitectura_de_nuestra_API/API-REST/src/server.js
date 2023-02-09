import express from 'express'
import productsRoutes from './routes/productsRoutes.js'
import cartsRoutes from './routes/cartsRoutes.js'
const app = express()

//Middlewares
app.use(express.json())

//Routes
app.use('/products', productsRoutes)
app.use('/carts', cartsRoutes)

const PORT = process.env.PORT || 4000;

/** CONNECTION SERVER */
try {
    app.listen(PORT);
    console.log(`Servidor conectado a puerto ${PORT}...`)
} catch (error) {
    console.log('Error de conexión con el servidor...', error)
}
