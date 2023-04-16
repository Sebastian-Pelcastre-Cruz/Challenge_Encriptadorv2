function leertexto(){
var text = document.getElementById("input-text").value;
var textrad = document.getElementById("mostrar-texto");
const soloLetras ='^[a-z A-Z !ñ]+$';
    
    let encriptado = textrad.value = '';
    let minuscula = text.toLowerCase();
    let convertir = minuscula.split(' ');
    let traducido = [];
    
    if(text.match(soloLetras)!=null){
    
    for (let palabra of convertir) {
      palabra = palabra.replaceAll('e','enter');
      palabra = palabra.replaceAll('i','imes');
      palabra = palabra.replaceAll('a','ai');
      palabra = palabra.replaceAll('o','ober');
      palabra = palabra.replaceAll('u','ufat');      
      
      traducido.push(palabra);    
    }
    const resultado = traducido.join(' ');
    
    textrad.value = resultado;
  }
    else{
    alert("Debe ingresar un texto, sólo se aceptan letras sin acentos...");
} 
}
function desencriptartexto(){
var text = document.getElementById("input-text").value;
var textrad = document.getElementById("mostrar-texto");
const soloLetras ='^[a-z A-Z !ñ]+$';
    let encriptado = textrad.value = '';
    let minuscula = text.toLowerCase();
    let convertir = minuscula.split(' ');
    let traducido = [];
    
    if(text.match(soloLetras)!=null){
    
    for (let palabra of convertir) {
      palabra = palabra.replaceAll('enter','e');
      palabra = palabra.replaceAll('imes','i');
      palabra = palabra.replaceAll('ai','a');
      palabra = palabra.replaceAll('ober','o');
      palabra = palabra.replaceAll('ufat','u');      
      
      traducido.push(palabra);    
    }
    const resultado = traducido.join(' ');
    
    textrad.value = resultado;
  }
    else{
    alert("Debe ingresar un texto, sólo se aceptan letras sin acentos...");
} 
}

function copiar(){
    var textrad = document.getElementById("mostrar-texto").value;
    const copiado = textrad;
    
    navigator.clipboard.writeText(copiado);
}