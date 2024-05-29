import close from "./close.js";
import appendContainer from "./appendContainer.js";
import { bst } from "./dependencies.js";
import Producto from "../models/BST/Producto.js";

function abrirForm () {
    appendContainer();
    let container = document.getElementById("containerForm")
    let form = document.createElement("form");
    let btnClose = document.createElement("button");
    let titulo = document.createElement("h1");
    let inputName = document.createElement("input");
    let inputPrice = document.createElement("input");
    let inputCant = document.createElement("input");
    let inputDescription = document.createElement("textarea");
    let btnAdd = document.createElement("button");

    form.id = "formAdd";

    btnClose.id = "btnClose";
    btnClose.textContent = "←"
    btnClose.addEventListener("click", close);

    titulo.textContent = "Agregar Producto";

    inputName.id = "nameInput";
    inputName.placeholder = "Nombre";
    inputPrice.id = "priceInput";
    inputPrice.placeholder = "Precio ($)";
    inputCant.id = "cantInput";
    inputCant.placeholder = "Cantidad"
    inputDescription.id = "descriptionInput";
    inputDescription.placeholder = "Descripcion";

    btnAdd.type = "button";
    btnAdd.id = "addBtn";
    btnAdd.textContent = "Agregar";
    btnAdd.addEventListener("click", addProd);

    form.appendChild(btnClose);
    form.appendChild(titulo);
    form.appendChild(inputName);
    form.appendChild(inputPrice);
    form.appendChild(inputCant);
    form.appendChild(inputDescription);
    form.appendChild(btnAdd);

    container.appendChild(form);
}

function addProd(){
    let name = document.getElementById("nameInput").value;
    let price = document.getElementById("priceInput").value;
    let cant = document.getElementById("cantInput").value;
    let descripcion = document.getElementById("descriptionInput").value;

    if(bst.add(new Producto(name, price, cant, descripcion)) && name && price && cant && descripcion){
        alert("Producto agregado con exito")
        close();
    }else{
        alert("Por favor llene todos los campos solicitados")
    }
}

export default abrirForm;