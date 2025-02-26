function mostrarMenu() {

    let menu = document.createElement('div');
    menu.className = "header-menu";

    let img = document.createElement('img');
    img.src = "https://img.freepik.com/vector-gratis/mejor-almacenador-etiquetas-productos-naturales-qaulity_1017-26203.jpg";
    img.alt = "logo";
    menu.appendChild(img);

    let h2 = document.createElement('h1');
    h2.textContent = "Productos marcados";
    menu.appendChild(h2);

    let circle = document.createElement('div');
    circle.className = "circulo-num";
    menu.appendChild(circle);

    let num = document.createElement('h1');
    num.className = "num";
    num.textContent = "5";
    circle.appendChild(num);

    return menu;

}

export { mostrarMenu }