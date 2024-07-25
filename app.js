let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = 0;
let intentos = 1;

/*let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Juego del Número Secreto';

let parrafo = document.querySelector ('p');
parrafo.innerHTML = 'Escoge un número entre 1 y 10';*/
function asignarElementoTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        console.log (listaNumerosSorteados);
        console.log (numeroGenerado);
    if(listaNumerosSorteados.length==numeroMaximo){
asignarElementoTexto("p","Ya se sortearon todos los números posibles");
    }else{
            if (listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function verificarIntento(){
        let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   if(numeroDeUsuario===numeroSecreto) {
    asignarElementoTexto("p",`Has acertado el numero Secreto en ${intentos} ${(intentos === 1) ? "intento!!!" : "intentos!"}`);
   
   document.getElementById("reiniciar").removeAttribute("disabled"); 
   }else {
    /*El usuario no acerto*/
    if (numeroDeUsuario>numeroSecreto){
        asignarElementoTexto("p","El numero secreto es menor");
    }else{
        asignarElementoTexto("p","El número secreto es mayor");
        intentos++; 
    }   
}       
limpiarCaja();
       return;
}

function limpiarCaja (){
    document.querySelector("#valorUsuario").value ="";
}

function condicionesIniciales(){
    asignarElementoTexto("h1","Juego del Número Secreto");
    asignarElementoTexto("p",`Escoge un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego() {
    //limpiar la  caja
    limpiarCaja();
    //indicar mensaje de intervalos de números
    condicionesIniciales();
    //generar numero aleatorio
    //deshabilitar el boton de nuevo juego

    //reiniciar boton de intentos
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    }
    condicionesIniciales();
