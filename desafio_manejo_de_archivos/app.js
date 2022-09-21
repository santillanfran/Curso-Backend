console.clear();

const fs = require('fs');

class Contenedor {
    constructor(fileName) {
        this.fileName = fileName;
    }
    static objetos = [];
    save(obj) {
        obj.id = Contenedor.objetos.length + 1;
        Contenedor.objetos.push(obj);
        fs.writeFileSync(
            this.fileName,
            JSON.stringify(Contenedor.objetos, null, 2)
        );
        return obj.id;
    }
    getByID(id) {
        const productos = JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
        const obj = productos.find((o) => o.id === id);
        return obj ? obj : null;
    }
    getAll() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    }
    deleteByID(id) {
        const arr = this.getAll();
        const obj = arr.find((o) => o.id === id);
        const newArr = arr.filter((o) => o.id != obj.id);
        Contenedor.objetos = newArr;
        fs.writeFileSync(this.fileName, JSON.stringify(newArr, null, 2));
    }
    deleteAll() {
        Contenedor.objetos = [];
        fs.writeFileSync(
            this.fileName,
            JSON.stringify(Contenedor.objetos, null, 2)
        );
    }
}

const productos = new Contenedor('productos.txt');

productos.save({
    title: 'Pelota de Futbol',
    price: 2.000,
    thumbnail: 'https://ar.pinterest.com/pin/601863937692344623/',
});

productos.save({
    title: 'Pelota de Basquet',
    price: 1.500,
    thumbnail: 'https://ar.pinterest.com/pin/601582462741335411/',
});

console.log('Producto 1: ', productos.getByID(1));
console.log('Productos: ', productos.getAll());

productos.deleteByID(2);

productos.save({
    title: 'Pelota de Tenis',
    price: 880,
    thumbnail: 'https://ar.pinterest.com/pin/433682639129056922/',
});

productos.save({
    title: 'Pelota de Rugby',
    price: 1.950,
    thumbnail: 'https://ar.pinterest.com/pin/597149231824217461/',
});

console.log('Productos: ', productos.getAll());
productos.deleteAll();
console.log('Productos: ', productos.getAll());