function resaltarProducto() {

    let producto = event.currentTarget;
    producto.classList.toggle("resaltado");

}

function eliminarProducto() {

    this.parentElement.classList.add('ocultar');
    
}


export { resaltarProducto, eliminarProducto }