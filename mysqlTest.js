var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "proyecto_modular"
});

con.connect(function(err) {
  if (err) throw err;
  
  con.query("SELECT * FROM proyecto_modular.clientes", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});