

import { galleryItems } from "./gallery-items.js";


const imgEl = document.querySelector(".gallery");


const imagesList = galleryItems
  .map((item) => {
    return ` <li class="gallery__item">
        <a class = "gallery__link" href ="${item.original}">
    <img class="gallery__image" 
        src=" ${item.preview}"
        data-source="${item.original}"
                alt="${item.description}"
            />
            </a>
        </li>
        `;
  })
  .join("");

imgEl.insertAdjacentHTML("beforeend", imagesList);


imgEl.addEventListener("click", showPhoto);

function showPhoto(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  function closePhoto(event) {
    if (event.code === "Escape") {
      modal.close();
    }
  }

  const modal = basicLightbox.create(
    `
   <img src="${event.target.dataset.source}" width="800" height="600">

`,
    {
      onShow: () => window.addEventListener("keydown", closePhoto),
      onClose: () => window.removeEventListener("keydown", closePhoto),
    }
  );

  modal.show();

  console.log(modal);
}








// Второй вариант 
// const openModal = (event) => {

//     const onEscClick = (event) => {
//       if (event.code === "Escape") {
//         modal.close();
//       }
//     };

//   const modal = basicLightbox.create(
//     `
//     <img src="${event.target.dataset.source}" width="800" height="600">

//  `,
//     {
//       onShow: () => {
//         document.addEventListener("keydown", onEscClick);
//       },

//       onClose: () => document.removeEventListener("keydown", onEscClick),
//     }
//   );
//   modal.show();
// };

// const onImgClick = (event) => {
//   event.preventDefault();
//   if (event.target.nodeName === "IMG") {
//     openModal(event);
//   }
// };

// imgEl.addEventListener("click", onImgClick);

