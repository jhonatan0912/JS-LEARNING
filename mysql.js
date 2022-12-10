let mysql = require('mysql');

export class PalacioChinoConection{

  constructor(){
  this.con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "proyecto_modular"
});
 }
 static consulta(sql){
  respuesta=this.con.query(sql);
  tabla=[];
  while(fila = mysql_fetch_assoc(respuesta)){
    tabla=fila;
  }
  return tabla;
 }

}