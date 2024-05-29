import { bst } from "./dependencies.js";
import appendContainer from "./appendContainer.js";
import close from "./close.js";
import renderResult from "./renderResult.js";
import renderLine from "./renderLine.js";

function abrirProds () {
    appendContainer();
    let container = document.getElementById("containerForm");
    
    let btnClose = document.createElement("button");
    btnClose.id = "btnClose";
    btnClose.textContent = "←"
    btnClose.addEventListener("click", close);


    let seleccionador = document.createElement("select");
    let opcion1 = document.createElement("option");
    opcion1.textContent = "Mostrar";
    let selMax = document.createElement("option");
    selMax.textContent = "Mayor";
    selMax.value = "1";
    let selMin = document.createElement("option");
    selMin.textContent = "Menor";
    selMin.value = "2";
    seleccionador.addEventListener("change", () => {
        if(seleccionador.value == "1"){
            renderResult(bst.maxValue());
            console.log(bst.maxValue())
        }else if(seleccionador.value == "2"){
            renderResult(bst.minValue());
            console.log(bst.minValue())
        }else{
            renderProds();
            console.log("regreso")
        }
    })

    seleccionador.appendChild(opcion1);
    seleccionador.appendChild(selMax);
    seleccionador.appendChild(selMin);

    let input = document.createElement("input");
    input.placeholder = "Buscar";
    input.id = "inputBuscar";

    let btnSearch = document.createElement("button");
    btnSearch.textContent = "Buscar";
    btnSearch.addEventListener("click", searchProd);

    let lineInput = document.createElement("div");
    lineInput.id = "lineInput"

    lineInput.appendChild(seleccionador);
    lineInput.appendChild(input);
    lineInput.appendChild(btnSearch);

    container.appendChild(btnClose);
    container.appendChild(lineInput); 

    renderProds();
}

function renderProds(){   
    let container = document.getElementById("containerForm");
    
    if(document.getElementById("listaProds")){
        document.getElementById("listaProds").remove();
    }

    let lista = document.createElement("ol");
    lista.id = "listaProds";
    container.appendChild(lista);
    
    
    renderLine({ value: {nombre: "Nombre", cantidad: "Cantidad", precio: "Precio ($)", descripcion: "Descripción"} });

    container.appendChild(lista);

    bst.inorder(renderLine);
}

function searchProd(){
    let aBuscar = document.getElementById("inputBuscar").value;

    renderResult(bst.search(aBuscar));
}

export default abrirProds;