import BST from "../models/BST/BST.js";
import Producto from "../models/BST/Producto.js";

let bst = new BST();

bst.add(new Producto("Led", 20, 5, "Emiten luz cuando se aplica una corriente eléctrica."));
bst.add(new Producto("Diodo infrarrojo", 21, 12, "Mandan señakes a traves de infrarrojo"));
bst.add(new Producto("Diodo puente", 15, 15, "Convierte corriente alterna (CA) en corriente continua (CC)."));
bst.add(new Producto("Relevador", 20, 15, "Regula circuitos de alta potencia."));
bst.add(new Producto("Puente H", 31, 53, "Controla el sentido de giro de un motor (CC)."));
bst.add(new Producto("Terminales", 10, 3, "Permite la unión de cables."));
bst.add(new Producto("Resistencia", 62, 1, "Limita el flujo de corriente eléctrica en un circuito."));
bst.add(new Producto("Capacitores", 30, 10, "Almacena y liberan energía eléctrica."));
bst.add(new Producto("Circuitos integrados", 12, 25, "Se encargan de realizar diversas funciones."));
bst.add(new Producto("Fusibles", 12, 7, "Interrumpen el flujo de corriente cuando ésta excede la variable."))

export {
    bst
};