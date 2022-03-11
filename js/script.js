/* ====================================== */
/*             menu  navigation           */
/* ====================================== */

const burguer = document.querySelector('.burguer')
const menu = document.querySelector('.menu_navigation')

//console.log(menu);
//console.log(burguer);

burguer.addEventListener('click',() => {
     menu.classList.toggle('spread')
})

window.addEventListener('click',e =>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != burguer ){
        menu.classList.toggle('spread')
    } 
})




/* ====================================== */
/*           lightbox - galery            */
/* ====================================== */

const images = document.querySelectorAll('.img_galery');
const imagesLight = document.querySelector('.ajouter_img');
const containerLight = document.querySelector('.imagen_ligth');
const burguer1 = document.querySelector('.burguer')


images.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        viewImagen(imagen.getAttribute('src'))
    })
});

containerLight.addEventListener('click',(e)=>{

    if (e.target !== imagesLight){
        containerLight.classList.toggle('show')
        imagesLight.classList.toggle('showImage')
        burguer1.style.opacity='1'
        
    }
})

const viewImagen = (imagen)=>{
    imagesLight.src = imagen
    containerLight.classList.toggle('show')
    imagesLight.classList.toggle('showImage')
    burguer1.style.opacity='0';
}



