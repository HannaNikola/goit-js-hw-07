import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const lightbox = new SimpleLightbox('.gallery a');


const imgEl = document.querySelector('.gallery');
// console.log(imgEl);


const imagesList = galleryItems.map((item) => {
    return` <li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>
        `
}).join('');

imgEl.insertAdjacentHTML('beforeend', imagesList);


imgEl.addEventListener('click', showPhoto);

function showPhoto(event) {
    console.log(event.target.tagName);
    if (event.target.tagName === 'IMG') {
        return  ;
    }
}