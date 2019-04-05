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

//Ejecuta boton publicar
const form = document.querySelector('#submit-post');
const datePublished = '18 de abril';
const btnPublish = document.querySelector('#publish');

  btnPublish.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection("post").add({
      comment: form.comment.value
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  })
  
  form.comment.value = '';


//Publica los post

const postList = document.querySelector('#post-list');

function createPost(doc){
  let div = document.createElement('div');
  let comment = document.createElement('div');
  let date = document.createElement('div');
  
  div.setAttribute('data-id', doc.id);
  div.setAttribute('id', 'each-post')
  comment.textContent = doc.data().comment;
  date.textContent = doc.data().date;

  div.appendChild(comment);
  div.appendChild(date);

  postList.appendChild(div);
}

const db = firebase.firestore();
db.collection("post").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
  createPost(doc);
  });
});
}

export default {
  homeEvents,
  wallEvents
}
