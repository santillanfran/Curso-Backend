const Chat = require("../models/chat");

const getMensajes = (req, res) => {
    Chat.find({}, (error, chats) => {
        //console.log(chats);
        res.send(chats);
    });
};

const getMensaje = (req, res) => {
    const user = req.params.email;
    Chat.find({ email: user }, (err, mensajes) => {
        res.send(mensajes);
    });
};

const addMensaje = async (req, res) => {
    try {
        const chat = new Chat(req.body);
        await chat.save();
        res.sendStatus(200);
        return;
        //Emit the event
        io.emit("chat", req.body);
    } catch (error) {
        res.sendStatus(500);
        console.error(error);
    }
};

module.exports = { getMensaje, getMensajes, addMensaje };
