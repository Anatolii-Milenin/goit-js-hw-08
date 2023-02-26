import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(e => {
    const objectToSave = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Заповніть всі поля!');
  }

  console.log({ email: email.value, message: message.value });

  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageData = load(LOCALSTORAGE_KEY);
if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
}

// import '../css/common.css';
// import '../css/03-feedback.css';

// const STORAGE_KEY = 'feedback-msg';

// const refs = {
//   form: document.querySelector('.feedback-form');
//   textarea: document.querySelector('.feedback-form textarea');
//   populateTextarea();
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// function onFormSubmit(e) {
//   e.preventDefault();

//   console.log(Отправляем форму);
//   e.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// };

// function onTextareaInput(e) {
//   const message = e.currentTarget.value;

//   localStorage.setItem(STORAGE_KEY, message);
// };

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     console.log(savedMessage);
//     refs.textarea.value = savedMessage;
//   }
// }
