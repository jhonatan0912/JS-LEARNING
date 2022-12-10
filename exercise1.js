
//? First 
function miFuncion(a){
  return a.length;
}
console.log(miFuncion("jhonatan"));
//? End first 

//! Second
function miFuncion2(a="Hola Mundo",b=4){
  return a.substr(a,b);
}
console.log(miFuncion2());
//! End second

//* Third 
function miFuncion3(a='hola que tal',b=' '){
  return a.split(b);
}
console.log(miFuncion3());
//* End third 

// Fourth 
function miFuncion4(a='Hola Mundo',b=3){
  return a.repeat(b) ;
}
console.log(miFuncion4());
// End fourth 