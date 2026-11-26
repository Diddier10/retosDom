const contadorElemento = document.getElementById('contador');
const botonSumar = document.getElementById('btn-sumar');
const botonReiniciar = document.getElementById('btn-reiniciar');

let contador = 0;

function actualizarContador(){
    contadorElemento.textContent = contador;
    if(contador>=10){
        contadorElemento.classList.add('contador-verde');
    } else{
        contadorElemento.classList.remove('contador-verde');
    }
}

botonSumar.addEventListener('click', function(){
    contador++;
    actualizarContador();
});

botonReiniciar.addEventListener('click', function(){
    contador = 0
    actualizarContador();

});