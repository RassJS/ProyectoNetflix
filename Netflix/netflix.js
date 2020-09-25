const fila = document.querySelector('.contenedor-carrousel');
const peliculas = document.querySelectorAll('.pelicula');  /* Ponemos all porque queremos que nos de todas las peliculas de otra forma solo nos dara 1  */

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');


/* Eventos para la flecha derecha */

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');
}
});




/* Eventos para la flecha izquierda */

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');
}
});



/* Paginacion */

const numeroPaginas = Math.ceil(peliculas.length / 5);  /* Ojo si dividimos peliculas.length que vale 20 entre 5 nos da 4 cierto? si tenemos que peliculas.length = 21 y dividimos entre 5 nos dara 4.2 pero esto no nos va a servir para hacer la paginacion porque queremos numeros enteros asi que para ello usamos Math.ceil que lo que hace es redondear siempre hacia arriba los numeros decimales */
for(let i = 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');

    if(i == 0){
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indicador);

    indicador.addEventListener('click', (e) =>{
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

/* Hover */

peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        });
    }, 300);
});

fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});
