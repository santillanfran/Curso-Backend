console.clear()
const Contenedor = require('./Contenedor');

const productos = new Contenedor('contenedor.txt');

const test = async () => {
	const data = await productos.save({ name: "name", lastName: "last name" });
	console.log(productos.objects);
}

test();