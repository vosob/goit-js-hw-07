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
                <img class="gallery__image" 
                src="${preview}" 
                data-source="${original}"
                alt="${description}"/>
            </a>
        </li>`;
    })
    .join("");
}
parentUlContainer.innerHTML = galleryMarkup;
parentUlContainer.addEventListener("click", onImageClick);

// ! ф-ція в якій відбувається магія
function onImageClick(event) {
  blockAction(event);

  // ! перевірка на картинку
  if (event.target.nodeName !== "IMG") {
    return;
  }

  // ! бібліотека basic lightbox
  const instance = basicLightbox.create(
    ` <img src="${event.target.dataset.source}" width="800" height="600">`
  );

  instance.show();

  // ! ф-ція закриття по ESC
  parentUlContainer.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

// ! ф-ція яка для відміни дій браузера по стандарту
function blockAction(event) {
  event.preventDefault();
}
