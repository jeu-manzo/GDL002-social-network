import { elementClick } from './index';
import { signUp, logIn, logOut } from './firebase';

function homeEvents() {
  const logInTab = document.querySelector('.logInWindow');
  const signUpTab = document.querySelector('.registerWindow');
  const btnSignUp = document.querySelector('.btn-register');
  const btnLogIn = document.querySelector('.btn-logIn');


  if (logInTab) {
    logInTab.addEventListener('click', logInOption);
  }

  if (signUpTab) {
    signUpTab.addEventListener('click', registerOption);

  }

  function logInOption(event) {
    event.preventDefault();
    console.log('loginoption');
    elementClick('/ingresar');
  }

  function registerOption(event) {
    event.preventDefault();
    elementClick('/registrar');
  }


if (btnSignUp) {
  btnSignUp.addEventListener('click', signUp);
}



if (btnLogIn) {
  btnLogIn.addEventListener('click', logIn);
}
}

function wallEvents() {
  const logOutBtn = document.querySelector('#logout');
  if (logOutBtn) {
    logOutBtn.addEventListener('click', logOut);
  }
}

export default {
  homeEvents,
  wallEvents
}
