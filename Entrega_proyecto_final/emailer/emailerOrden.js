const nodemailer = require("nodemailer");

//Función Principal de Transport
const createTrans = () => {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "d33b7d11a5ffd1",
            pass: "3cf81f43fbddcf",
        },
    });
    return transport;
};


const sendMail = async (orden) => {
    const transporter = createTrans();
    const info = await transporter.sendMail({
        from: '"e-Shop" <ventas@eShop.com>',
        to: `usuario@correo.com`,
        subject: `Orden ${orden._id}`,
        html: `<h2>Estimado cliente, gracias por su compra!</h2>
            <br>     
     <p>Su orden fue registrada con el número ${orden._id} el día ${orden.createdAt}</p>
             
      <hr>
            <h3>eShop</h3>


       `,
    });

    console.log("Message sent: %s", info.messageId);
    return;
};
exports.sendMail = (orden) => sendMail(orden);