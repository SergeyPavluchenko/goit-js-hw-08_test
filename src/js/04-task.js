console.log('task 1');

setTimeout(() => {
  console.log('task 2: 4sec');
}, 4000);

// function onClick() {
//   setTimeout(() => {
//     console.log('click');
//   }, 2000);
// }
let total = 0;
function onClick() {
  setAmount = setInterval(() => {
    for (let i = 0; i < 5; i++) {
      total += 1;
      console.log(total);
      //   console.log(element);
    }
    if (total === 30) {
      clearInterval(setAmount);
      console.log('Interval stop');
    }
  }, 1000);
}

const btn = document.querySelector('.btn-class');
btn.addEventListener('click', onClick);
