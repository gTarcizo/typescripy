import isEmail from 'validator/lib/isEmail';

const showErrorMessageClass = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const user = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  hideErrorMessages(this);
  checkEmptyFields(user, email, password, password2);
  checkEmail(email);
  checkEqualPassword(password, password2);
  if (shouldSubmit(this)) form.submit();
});

const checkEmptyFields = (...inputs: HTMLInputElement[]): void => {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Preenche os campos aí mano!');
  });
};

const checkEmail = (input: HTMLInputElement): void => {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email não é válido!');
};

const checkEqualPassword = (
  password1: HTMLInputElement,
  password2: HTMLInputElement,
): void => {
  if (password1.value !== password2.value) {
    showErrorMessage(password1, 'Senhas não são iguais');
    showErrorMessage(password2, 'Senhas não são iguais');
  }
};

const hideErrorMessages = (form: HTMLFormElement): void => {
  form
    .querySelectorAll('.' + showErrorMessageClass)
    .forEach((item) => item.classList.remove(showErrorMessageClass));
};

const showErrorMessage = (input: HTMLInputElement, msg: string): void => {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(showErrorMessageClass);
};

const shouldSubmit = (form: HTMLFormElement): boolean => {
  let submit = true;
  form.querySelectorAll('.' + showErrorMessageClass).forEach(() => (submit = false));
  return submit;
};
