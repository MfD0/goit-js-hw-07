import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  }).join('');
}

const galleryMarkup = createGalleryMarkup(galleryItems);
const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


console.log(galleryItems);
