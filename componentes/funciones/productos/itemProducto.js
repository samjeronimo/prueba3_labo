import { dataProductos } from "../data.js";
import { resaltarProducto } from "../funcionesProductos.js";

function productos() {

    let cuadro = document.createElement('div');
    cuadro.className = "producto-papa";
    
    let producto = document.createElement('div');
    producto.className = "cuadro-producto";
    producto.addEventListener("click", resaltarProducto); // Agregar evento de clic
    cuadro.appendChild(producto);

    let img_producto = document.createElement('img');
    img_producto.src = "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/03/07/17098165627875.jpg";
    img_producto.alt = "img";
    img_producto.className = "img-producto";
    producto.appendChild(img_producto);

    let nombre_producto = document.createElement('h1');
    nombre_producto.textContent = "Tomate";
    nombre_producto.className = "nombre-producto"
    producto.appendChild(nombre_producto);

    let precio_producto = document.createElement('p');
    precio_producto.innerHTML = "Q 1.50";
    producto.appendChild(precio_producto);

    let btn_producto = document.createElement('a');
    btn_producto.className = "btn-producto";
    btn_producto.innerHTML = "eliminar"
    btn_producto.href = "#";
    precio_producto.appendChild(btn_producto);


    return cuadro;

}

export { productos }