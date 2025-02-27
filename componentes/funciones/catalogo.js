import { productos } from "./productos/itemProducto.js";

function cargarProductos() {

    let cargarProductos = document.createElement('div');
    cargarProductos.className = "papa"
    cargarProductos.appendChild(productos());

    return cargarProductos;

}

export { cargarProductos }