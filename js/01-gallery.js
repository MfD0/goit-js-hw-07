import { galleryItems } from './gallery-items.js';

function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  }).join('');
}

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const source = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
  `);

  instance.show();
}

const galleryMarkup = createGalleryMarkup(galleryItems);
const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener('click', openModal);


console.log(galleryItems);