import { Router } from "express";

const router = Router();

const info = {
    "Node Versión": process.version,
    Platform: process.platform,
    "Directorio de Ejecución": process.cwd(),
    "ID del proceso": process.pid,
    "Uso de la memoria": process.memoryUsage(),
    "Memoria total reservada": process.memoryUsage().rss,
    "Path de ejecución": process.execPath,
    "Argumentos de entrada": process.argv,
};


function getRandom(cant) {
    const numeros = [];
    for (let i = 0; i < cant; i++) {
        numeros.push(Math.floor(Math.random() * 1000) + 1);
    }
    const cnt = numeros.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
    return cnt;
}

router.get("/info-debug", (req, res) => {
    res.send(info);
});

router.get("/info-nodebug", (req, res) => {
    console.log(info);
    res.send(info);
});

router.get('/api/randoms-debug', (req, res) => {
    const cant = req.query.cant || 10000;
    const resultado = getRandom(cant);
    res.json({ randoms: resultado })

})

router.get("/api/randoms-nodebug", (req, res) => {
    const cant = req.query.cant || 10000;
    const resultado = getRandom(cant);
    console.log(resultado);
    res.json({ randoms: resultado });
});

export default router