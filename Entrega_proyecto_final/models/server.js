const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: "/api/auth",
            buscar: "/api/buscar",
            categorias: "/api/categorias",
            productos: "/api/productos",
            usuarios: "/api/usuarios",
            uploads: "/api/uploads",
            ordenes: "/api/ordenes",
            carritos: "/api/carritos",
            chat: "/api/chat"
        };

        //Sockets
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        //Sockets
        this.sockets()
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        this.app.use(express.urlencoded({ extended: true }))
        // Directorio Público
        this.app.use(express.static("public"));

        // Fileupload - Carga de archivos
        this.app.use(
            fileUpload({
                useTempFiles: true,
                tempFileDir: "/tmp/",
                createParentPath: true,
            })
        );
    }

    routes() {
        this.app.use(this.paths.auth, require("../routes/auth"));
        this.app.use(this.paths.buscar, require("../routes/buscar"));
        this.app.use(this.paths.categorias, require("../routes/categorias"));
        this.app.use(this.paths.productos, require("../routes/productos"));
        this.app.use(this.paths.usuarios, require("../routes/usuarios"));
        this.app.use(this.paths.uploads, require("../routes/uploads"));
        this.app.use(this.paths.ordenes, require("../routes/ordenes"));
        this.app.use(this.paths.carritos, require("../routes/carritos"));
        this.app.use(this.paths.chat, require("../routes/chat"));
    }

    sockets() {
        this.io.on('connection', socket => {
            console.log('Cliente conectado', socket.id);

            socket.on('disconnect', () => {
                console.log('Cliente desconectado')
            })
        });
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log("Servidor corriendo en puerto", this.port);
        });
    }
}



module.exports = Server;