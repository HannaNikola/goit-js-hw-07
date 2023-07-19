// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект
//  посилання на мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із
// зображенням з прикладів бібліотеки

// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку.
// Заборони цю поведінку за замовчуванням.

// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки
// відкрите модальне вікно.Бібліотека basicLightbox містить метод для програмного закриття модального вікна.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const imgEl = document.querySelector(".gallery");
// console.log(imgEl);

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
// console.log(imagesList);

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

