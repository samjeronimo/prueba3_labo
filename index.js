import { mostrarMenu } from "./componentes/header/header.js";
import { productos } from "./componentes/funciones/productos/itemProducto.js";

function iniciarApp() {

    let DOM = document.querySelector('#root');
    DOM.appendChild(mostrarMenu());
    DOM.appendChild(productos());

    return DOM;

}

iniciarApp();

export { iniciarApp }