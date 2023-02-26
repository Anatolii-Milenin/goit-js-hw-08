// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const renderList = () =>
  galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div><a class="gallery__link" href="${original}">   <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    /></a></div>`
    )
    .join('');

const insertListItem = string => {
  const galleryItems = document.querySelector('.gallery');
  galleryItems.insertAdjacentHTML('beforeend', string);
};

insertListItem(renderList(galleryItems));

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
