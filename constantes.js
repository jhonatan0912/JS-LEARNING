export const PI=Math.PI;

export let user = "Jhonatan";
/**
 * Cuando exportamos variables por default 
 * tenemos que hacer la exportacion en otra linea
 */
const password = "qwerty";
export default password;

const hello = ()=>{
  console.log("hola");
}
/**
 * al poner export DEFAULT se exporta predeterminadamente
 * y no se necesita llamar en el import.
 * Solo se puede tener una exportacion por default
 * las unicas que permiten las export default en la misma linea
 * son las funciones y las clases
 */
export  function saludar(){ 
  console.log("Hola modular +ES6");
}
