function renderResult(result){
    if(result){
        let container = document.getElementById("containerForm");
        let listaVieja = document.getElementById("listaProds");

        if(listaVieja){
            listaVieja.remove();
        }

        let lista = document.createElement("ol");
        lista.id = "listaProds";

        let cabecera = document.createElement("li");
        cabecera.classList.add("cabeceraLista")
        let nombre = document.createElement("p");
        let cant = document.createElement("p");
        let price = document.createElement("p");
        let descrip = document.createElement("p");

        nombre.textContent = "Nombre";
        nombre.id = "nombre";
        cant.textContent = "cant"
        price.textContent = "price ($)";
        descrip.id = "descripText";
        descrip.textContent = "Descripción";

        cabecera.appendChild(nombre);
        cabecera.appendChild(cant);
        cabecera.appendChild(price);
        cabecera.appendChild(descrip);

        lista.appendChild(cabecera);

        container.appendChild(lista);



        let linea = document.createElement("li");
        let name = document.createElement("h1");
        let cantidad = document.createElement("p");
        let precio = document.createElement("p");
        let descripcion = document.createElement("p");

        name.textContent = result.value.nombre;
        cantidad.textContent = result.value.cantidad;
        precio.textContent = ("$ "+result.value.precio);
        descripcion.id = "descripcionText";
        descripcion.textContent = result.value.descripcion

        linea.appendChild(name);
        linea.appendChild(cantidad);
        linea.appendChild(precio);
        linea.appendChild(descripcion);

        lista.appendChild(linea);

        container.appendChild(lista);
    }else{
        let container = document.getElementById("containerForm");

        if(document.getElementById("listaProds")){
           document.getElementById("listaProds").remove();
        }
        let lista = document.createElement("ol");
        lista.id = "listaProds";

        let mje = document.createElement("span");
        mje.textContent = "No existe este producto";
        
        lista.appendChild(mje);

        container.appendChild(lista);
    }

}

export default renderResult;