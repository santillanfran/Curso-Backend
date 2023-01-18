import express from 'express';
import cors from 'cors';
import routesUsers from '../routes/user.js'
import routesProducts from '../routes/products.js';
import routesCarts from '../routes/carts.js'
import morgan from 'morgan';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        this.productsPath = '/api/products';
        this.cartsPath = '/api/carts';

        this.middlewares();

        //Rutas
        this.routes();

    }
    // Middlewares
    middlewares() {
        // Cors 
        this.app.use(cors())
        //Directorio público
        this.app.use(express.static('public'));
        //Lectura y parseo del body 
        this.app.use(express.json())
        //Morgan 
        this.app.use(morgan('dev'));
        //
        this.app.use(express.urlencoded({ extended: true }));
    }

    routes() {
        this.app.use(this.usersPath, routesUsers)
        this.app.use(this.productsPath, routesProducts);
        this.app.use(this.cartsPath, routesCarts);
    }

    // Ejecutando server
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto:', this.port);
        });
    }


}

export default Server;