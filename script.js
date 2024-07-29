import { barcelona, roma, paris, londres } from './ciudades.js'
// obtener los elementos del Dom (los enlaces)
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')
// Añadir un evento CLICK
enlaces.forEach(function(enlace){
                enlace.addEventListener('click', function (){
                                //Quitar el active
                                enlaces.forEach(function(enlace) {
                                                enlace.classList.remove('active');
                                });
                                
                                //añadir Active al enlace actual
                                this.classList.add('active');

                                //Obtener el contenido correspondiente segun el enlace
                                let contenido = obtenerContenido(this.textContent.trim());
                               
                                //Mostrar el contenido en el dom
                                tituloElemento.innerHTML = contenido.titulo
                                subTituloElemento.innerHTML = contenido.subtitulo
                                parrafoElemento.innerHTML = contenido.parrafo               
                                precioElemento.innerHTML = contenido.precio               
                });
});   
//Funcion para traer la información correcta desde ciudades.js
function obtenerContenido(enlace){
                let contenido = {
                                'Barcelona': barcelona,
                                'Roma': roma,
                                'París': paris,
                                'Londres': londres,
                };
                return contenido[enlace];
}