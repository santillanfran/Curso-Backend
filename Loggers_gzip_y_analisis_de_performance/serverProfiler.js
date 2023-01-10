import express from "express";
import apiArtilleryRoutes from "./src/routes/apiArtilleryRoutes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", apiArtilleryRoutes);

const PORT = parseInt(process.argv[2]) || 8081;

const server = app.listen(PORT, () => {
  console.log(`Escuchando en puerto ${PORT} - PID WORKER ${process.pid}`);
});
server.on("error", (err) => console.log(err));