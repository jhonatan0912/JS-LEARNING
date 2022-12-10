// First
function first(string){
 console.log(string.split("").reverse().join(""));
}
first("Hola Mundo");
// End first

//! Second
function second(string,word){
  let i=0,
  contador = 0;
  while(i !== -1){
    i=string.indexOf(word,i);
    if(i !== -1){
      i++;
      contador++;
    }
  }
  return console.log(`the word ${word} its repeat ${contador} times`)
}
second("Hola mundo adios mundo hello mundo bye mundo","mundo");
//! End second
//* Third 
const third=(string)=>{
  if(!string) return console.warn("no se ingreso la frase");
  string.toLowerCase();
  let toReverse = string.split("").reverse().join("");
  return (string === toReverse)
  ?console.log(`La palabra ${string} SI es palindroma. Resultado= ${toReverse}`)
  :console.log(`La palabra ${string} NO es palindroma. Resultado= ${toReverse}`);
}
third("salas");
//* End third 
