document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    navegacionFija();
    crearGaleria();
    scrollNav();
}

function navegacionFija(){
    const barra= document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function(){

        if(sobreFestival.getBoundingClientRect().bottom < 0){
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        }else{
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });
}

function scrollNav(){
    const enlaces= document.querySelectorAll('.navegacion-principal');
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            const seccionScrol =  e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScrol);
            seccion.scrollIntoView({behavior: "smooth"});
        });
    });
}
// function crearGaleria(){
//     const galeria = document.querySelector('.galeria-imagenes');

//     for(let i =1; i<=12; i++){
//         const imagen = document.createElement('img');
//         imagen.innerHTML = `
//         <img width= 200 height=300 src="src/img/thumb/${i}.jpg" alt="Imagen Vocalista festival">
//         `;
//         galeria.appendChild(imagen);
//     }
// }

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('img');
        imagen.setAttribute('width', '200');
        imagen.setAttribute('height', '300');
        imagen.setAttribute('src', `src/img/thumb/${i}.jpg`);
        imagen.setAttribute('alt', 'Imagen Vocalista festival');

        imagen.onclick = function(){
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(id){
    const imagen = document.createElement('img');
        imagen.setAttribute('width', '200');
        imagen.setAttribute('height', '300');
        imagen.setAttribute('src', `src/img/grande/${id}.jpg`);
        imagen.setAttribute('alt', 'Imagen Vocalista festival');


        //Crea el Overlay con la imagen
        const overlay = document.createElement('div');
        overlay.appendChild(imagen);
        overlay.classList.add('overlay');
        overlay.onclick = function(){
            const body = document.querySelector('body');
            body.classList.remove('fijar-body');
            overlay.remove();
        }
        //Boton para cerrar el modal
        const cerrarModal = document.createElement('p');
        cerrarModal.textContent = 'X';
        cerrarModal.classList.add('btn-cerrar');
        cerrarModal.onclick = function(){
            const body = document.querySelector('body');
            body.classList.remove('fijar-body');
            overlay.remove();
        };
        overlay.appendChild(cerrarModal);

        //Añadir al html
        const body = document.querySelector('body');
        body.appendChild(overlay);
        body.classList.add('fijar-body');
}