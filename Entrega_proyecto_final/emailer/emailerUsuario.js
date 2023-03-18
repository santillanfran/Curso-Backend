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
}

const sendMail = async (user) => {
    const transporter = createTrans()
    const info = await transporter.sendMail({
        from: '"e-Shop" <registro@eShop.com>',
        to: `${user.correo}`,
        subject: `Registro de usuario ${user.nombre}`,
        html: `<h1>Hola ${user.nombre}</h1>
            <hr>
            <h2>Bienvenido a nuestro sitio e-Shop</h2>
            </br>
            <p>Gracias, por registrarse.</p>
            </br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ullamcorper nisi, eget auctor nisi. Mauris id commodo turpis. Quisque in congue massa, eu euismod orci. Praesent condimentum sodales massa, placerat vestibulum nibh congue non. In semper est in urna posuere, in fringilla diam sodales. </p>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    return
}

exports.sendMail = (user) => sendMail(user)