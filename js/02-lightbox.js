import { galleryItems } from "./gallery-items.js";

const parentUlContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryImagesMarkup(galleryItems);

// ! ф-ція рендерінгу макету
function createGalleryImagesMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `;
    })
    .join("");
}

parentUlContainer.innerHTML = galleryMarkup;

// ! бібліотека basic simplelightbox
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
