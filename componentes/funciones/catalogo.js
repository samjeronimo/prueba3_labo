import { dataProductos } from "./data.js";
import { productos } from "./productos/itemProducto.js";

function cargarProductos() {

    let cargarProductos = document.createElement('div');
    cargarProductos.className = "catalogo";
    
    dataProductos.forEach((e) => {
        cargarProductos.appendChild(productos(e));
    })

    return cargarProductos;

}

export { cargarProductos }