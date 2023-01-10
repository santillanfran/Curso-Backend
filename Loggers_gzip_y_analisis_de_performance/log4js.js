import express from "express";
import log4js from "log4js";

const app = express();

log4js.configure({
    appenders: {
        logsConsola: { type: "console" },
        logsFileWarn: { type: "file", filename: "warn.log" },
        logsFileError: { type: "file", filename: "error.log" },
    },
    categories: {
        default: { appenders: ["logsConsola"], level: "all" },
        console: { appenders: ["logsConsola"], level: "info" },
        archivo: { appenders: ["logsFileWarn"], level: "info" },
        error: { appenders: ["logsFileError"], level: "error" },
    },
});

const logPrueba = log4js.getLogger("archivo");

const PORT = 3000;

app.listen(PORT, () => {
    //console.log(`Escuchando en puerto ${PORT}`);
    logPrueba.warn(process.arv + "Warn");
    logPrueba.debug("Debug");
    logPrueba.error(process.arv + "Error");
    logPrueba.info(process.arv + "Info");
});