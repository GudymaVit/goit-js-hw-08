// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

// console.log(galleryItems);
const galleryConteiner = document.querySelector('.gallery');
const ImagesCard = createImagesCard(galleryItems);
// console.log(ImagesCard);

galleryConteiner.insertAdjacentHTML('beforeend', ImagesCard);

galleryConteiner.addEventListener('click', onGalleryConteinerClick)

const gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });

function createImagesCard(images) {
    return images.map(({ description, original, preview }) => {
      return `
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src= ${preview}
        data-source= ${original}
        alt= ${description} 
      />
  </a>`
}).join('');
};

function onGalleryConteinerClick(event) {
    event.preventDefault();
        // if (event.target.nodeName !== 'IMG'){
        // return gallery;
    // }    
}; 