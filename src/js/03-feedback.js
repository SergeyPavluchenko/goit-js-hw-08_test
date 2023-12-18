import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
console.log(form);

const LOCAL_KEY = 'feedback-form-state';
const dataForm = {
  email: '',
  message: '',
};

getDataForm();

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));

function onInput(evt) {
  dataForm[evt.target.name] = evt.target.value;
  console.log('dataForm', dataForm);
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function onSubmit(evt) {
  evt.preventDefault();
  if (dataForm.email === '') {
    return alert('Заповніть поле Email');
  }
  localStorage.removeItem(LOCAL_KEY);
  evt.target.reset();
}

function getDataForm() {
  const getLocalStorageData = localStorage.getItem(LOCAL_KEY);
  const parseLocalKey = JSON.parse(getLocalStorageData);

  if (getLocalStorageData) {
    form[0].value = parseLocalKey.email || '';
    form[1].value = parseLocalKey.message || '';
  }
}
