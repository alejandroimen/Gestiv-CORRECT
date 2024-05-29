function appendContainer(){
    let container = document.createElement("div");
    container.id = "containerForm";
    container.classList.add("container");
    document.body.appendChild(container);
}

export default appendContainer;