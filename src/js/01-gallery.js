// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');
// console.log(list);

const listImg = galleryItems
  .map(
    ({ description, original, preview }) => `
    <li class='gallery-list'>
        <a class='gallery-link' href="${original}">
            <img class='gallery-image' src="${preview}" alt="${description}">
        </a>
    </li>
`
  )

  .join(' ');

list.insertAdjacentHTML('beforeend', listImg);

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

//////////////////////

// const list = document.querySelector('.gallery');
// const allImg = murkup(galleryItems);

// function murkup(items) {
//   return items
//     .map(
//       ({ description, original, preview }) => `
//     <li class='gallery-list'>
//         <a class='gallery-link' href="${original}">
//             <img class='gallery-image' src="${preview}" alt="${description}">
//         </a>
//     </li>
// `
//     )
//     .join(' ');
// }

// list.insertAdjacentHTML('beforeend', allImg);

// let lightbox = new SimpleLightbox('.gallery a', {
//   captionDelay: 250,
//   captionsData: 'alt',
//
// });
