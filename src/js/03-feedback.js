import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
console.log(form);

const LOCAL_KEY = 'feedback-form-state';
const dataForm = {};

getDataForm();

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));

function onInput(evt) {
  dataForm[evt.target.name] = evt.target.value;
  console.log(dataForm);
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function onSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(LOCAL_KEY);
}

function getDataForm() {
  const getLocalStorageData = localStorage.getItem(LOCAL_KEY);
  const parseLocalKey = JSON.parse(getLocalStorageData);
  if (getLocalStorageData) {
    console.log(parseLocalKey);
    if (parseLocalKey.email) {
      form[0].value = parseLocalKey.email;
    }
    if (parseLocalKey.message) {
      form[1].value = parseLocalKey.message;
    }
  }
}
