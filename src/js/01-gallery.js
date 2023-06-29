// Add imports above this line
import { galleryItems } from './gallery-items';
import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const list = document.querySelector('.gallery');

const markup = galleryItems.map(createMarkup).join('');
list.insertAdjacentHTML('beforeend', markup);

new simpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});

function createMarkup(param) {
    return `
<li class="gallery__item">
   <a class="gallery__link" href="${param.original}">
      <img class="gallery__image" src="${param.preview}" alt="${param.description}" />
   </a>
</li>
    `;
};