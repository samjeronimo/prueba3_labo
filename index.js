import { mostrarMenu } from "./componentes/header/header.js";
import { cargarProductos } from "./componentes/funciones/catalogo.js";

function iniciarApp() {

    let DOM = document.querySelector('#root');
    DOM.appendChild(mostrarMenu());
    DOM.appendChild(cargarProductos());

    return DOM;

}

iniciarApp();

export { iniciarApp }