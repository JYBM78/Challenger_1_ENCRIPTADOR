var botonEncriptar = document.querySelector(".btn-encriptar"); // Recupera un elemento html la clase .btn-encriptar
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");
var munieco = document.querySelector(".contenedor-munieco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");


botonEncriptar.onclick = encriptar; // Al dar click, hace lo que diga la función. El nombre de la función sin paréntesis
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;                                    
/*
* Recuparar el texto escrito para encriptar
* Al dar click va ocultar toda el área del muñeco
*/
function encriptar(){ 
    ocultarAdelante();
    resultado.textContent = encriptarTexto(recuperarTexto());    
}

function desencriptar(){
    ocultarAdelante();
    resultado.textContent = desencriptarTexto(recuperarTexto());
}

function copiar(){
    ocultarAdelante();
    textoFinal.textContent = copiarTexto(recuperarTexto());
}

function recuperarTexto(){ 
    var area = document.querySelector(".area"); // variable que recupera el texto de la clase .area
    return area.value;
}

function ocultarAdelante(){ // Al llamar a la función, va agregar la clase ocultar a mumieco, h3, parrafo 
    munieco.classList.add("ocultar"); // agregar una clase
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++ ){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
       var texto = mensaje;
       var textoFinal = "";
    
       for(var i = 0; i < texto.length; i++ ){
           if(texto[i] == "a"){
               textoFinal = textoFinal + "a";
               i = i+1;
           }
           else if(texto[i] == "e"){
               textoFinal = textoFinal + "e";
               i = i+4;
           }
           else if(texto[i] == "i"){
               textoFinal = textoFinal + "i";
               i = i+3;
           }
           else if(texto[i] == "o"){
               textoFinal = textoFinal + "o";
               i = i+3;
           }
           else if(texto[i] == "u"){
               textoFinal = textoFinal + "u";
               i = i+3;
           }
           else{
               textoFinal = textoFinal + texto[i];
           }
       }
       return textoFinal;

}
