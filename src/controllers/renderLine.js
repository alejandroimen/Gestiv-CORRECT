function renderLine(object){
    let lista = document.getElementById("listaProds");

    let linea = document.createElement("li");
    let name = document.createElement("h1");
    let cantidad = document.createElement("p");
    let precio = document.createElement("p");
    let descripcion = document.createElement("p");

    name.textContent = object.value.nombre;
    cantidad.textContent = object.value.cantidad;
    precio.textContent = object.value.precio;
    descripcion.classList.add("descripcionText");
    descripcion.textContent = object.value.descripcion

    linea.appendChild(name);
    linea.appendChild(cantidad);
    linea.appendChild(precio);
    linea.appendChild(descripcion);

    lista.appendChild(linea);
}

export default renderLine;