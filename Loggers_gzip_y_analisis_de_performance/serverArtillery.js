import express from "express";
import cluster from "cluster";
import { cpus } from "os";
import apiArtilleryRoutes from "./src/routes/apiArtilleryRoutes.js";


const PORT = parseInt(process.argv[2]) || 8082;
const modoCluster = process.argv[3] == "CLUSTER";


if (modoCluster && cluster.isPrimary) {
    const numCPUs = cpus().length

    console.log(`Número de procesadores: ${numCPUs}`)
    console.log(`PID MASTER ${process.pid}`)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        console.log('Worker', worker.process.pid, 'died', new Date().toLocaleString())
        cluster.fork()
    })
} else {
    const app = express()

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/", apiArtilleryRoutes);

    app.listen(PORT, () => {
        console.log(`Servidor express escuchando en el puerto ${PORT}`)
        console.log(`PID WORKER ${process.pid}`)
    })
}