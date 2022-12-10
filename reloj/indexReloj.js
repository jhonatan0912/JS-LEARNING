import { digitalClock,alarm } from "./reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
  digitalClock("#reloj","#activar-reloj","#desactivar-reloj");

});