/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementClick", function() { return elementClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__templates_logIn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_register__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_wall__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events__ = __webpack_require__(4);





// import buttons from './firebase.js'

const contentDiv = document.querySelector('.content');

let routes = {
  '/': {
    template: __WEBPACK_IMPORTED_MODULE_0__templates_logIn__["a" /* default */],
    events: __WEBPACK_IMPORTED_MODULE_3__events__["a" /* default */].homeEvents
  },
  '/index.html': {
    template: __WEBPACK_IMPORTED_MODULE_0__templates_logIn__["a" /* default */],
    events: __WEBPACK_IMPORTED_MODULE_3__events__["a" /* default */].homeEvents
  },
  '/ingresar':  {
    template: __WEBPACK_IMPORTED_MODULE_0__templates_logIn__["a" /* default */],
    events: __WEBPACK_IMPORTED_MODULE_3__events__["a" /* default */].homeEvents
  },
  '/registrar':  {
    template: __WEBPACK_IMPORTED_MODULE_1__templates_register__["a" /* default */],
    events: __WEBPACK_IMPORTED_MODULE_3__events__["a" /* default */].homeEvents
  },
  '/muro': {
    template: __WEBPACK_IMPORTED_MODULE_2__templates_wall__["a" /* default */],
    events: __WEBPACK_IMPORTED_MODULE_3__events__["a" /* default */].wallEvents
  },
};

window.onpopstate = function () {
// contentDiv.innerHTML = routes[window.location.pathname].template;
// routes[pathName].events();
}

let elementClick = (pathName) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  window.history.pushState({}, pathName, window.location.origin + pathName);
  window.history.back();
  contentDiv.innerHTML = routes[pathName].template;
  routes[pathName].events();

}

contentDiv.innerHTML = routes[window.location.pathname].template;

__WEBPACK_IMPORTED_MODULE_3__events__["a" /* default */].homeEvents();



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let logInTemplate = `
<section class="tabs">
  <button class="logInWindow">Iniciar Sesión</button>
  <button class="registerWindow">Registrarse</button>
</section>

<div class="container-tabs">
  <section class="flex-user" id='containerlogIn'>
    <input id='emailIn' type="text">
    <input id='passwordIn' type="password">
    <button class='btn-logIn'>Iniciar Sesión</button>
  </section>
</div>
`;

/* harmony default export */ __webpack_exports__["a"] = (logInTemplate);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let registerTemplate = `
<section class="tabs">
  <button class="logInWindow">Iniciar Sesión</button>
  <button class="registerWindow">Registrarse</button>
</section>

<div class="container-tabs">
  <section class='flex-user' id='container'>
    <input id='email' type="text">
    <input id='password' type="password">
    <button class='btn-register'>Register</button>
  </section>
</div>
`;

/* harmony default export */ __webpack_exports__["a"] = (registerTemplate);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let wallTemplate = `
<div>
<textarea placeholder='escribe aqui'></textarea>

<button id='publicar'>publicar</button>
</div>


<section id='login'>
  <p id='saludo'></p>
  <button id='logout'>Cerrar sesión</button>
</section>
`;

/* harmony default export */ __webpack_exports__["a"] = (wallTemplate);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase__ = __webpack_require__(5);



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
    Object(__WEBPACK_IMPORTED_MODULE_0__index__["elementClick"])('/ingresar');
  }

  function registerOption(event) {
    event.preventDefault();
    Object(__WEBPACK_IMPORTED_MODULE_0__index__["elementClick"])('/registrar');
  }


if (btnSignUp) {
  btnSignUp.addEventListener('click', __WEBPACK_IMPORTED_MODULE_1__firebase__["c" /* signUp */]);
}



if (btnLogIn) {
  btnLogIn.addEventListener('click', __WEBPACK_IMPORTED_MODULE_1__firebase__["a" /* logIn */]);
}
}

function wallEvents() {
  const logOutBtn = document.querySelector('#logout');
  if (logOutBtn) {
    logOutBtn.addEventListener('click', __WEBPACK_IMPORTED_MODULE_1__firebase__["b" /* logOut */]);
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  homeEvents,
  wallEvents
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = signUp;
/* harmony export (immutable) */ __webpack_exports__["a"] = logIn;
/* harmony export (immutable) */ __webpack_exports__["b"] = logOut;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__templates_logIn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_register__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_wall__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(0);






firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      Object(__WEBPACK_IMPORTED_MODULE_3__index__["elementClick"])('/muro');
      var user = firebase.auth().currentUser;
      if(user != null){
      const emailId = user.email;
      console.log(emailId);
      document.getElementById('saludo').innerHTML = 'hola bienvenido' + emailId;
      }
    } else {
      // No user is signed in.
      Object(__WEBPACK_IMPORTED_MODULE_3__index__["elementClick"])('/ingresar');
    }
  });


  //Registrar Usuario con correo y contraseña
// document.querySelector('.btn-register').addEventListener('click', signUp);
function signUp () {
const emailSignUp = document.getElementById('email').value;
const passwordSignUp = document.getElementById('password').value;
firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ...
  });
}

// Iniciar sesión

// document.querySelector('.btn-logIn').addEventListener('click', logIn);
function logIn() {
    const emailLogIn = document.getElementById('emailIn').value;
    const passwordLogIn = document.getElementById('passwordIn').value;
    firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
    }





// Cerrar sesión
// document.getElementById('logout').addEventListener('click',logOut);
function logOut() {
    firebase.auth().signOut();
}

// document.getElementById("logInWindow").addEventListener('click',logInOption);
// function logInOption () {
//     console.log("holis login");
//     elementClick('/ingresar');
// }
//
// document.getElementById("registerWindow").addEventListener('click',registerOption);
// function registerOption () {
//   console.log("holi registrar");
//     elementClick('/registrar');
// }


// export default {
//   signUp,
//   logIn,
//   logOut
// }


/***/ })
/******/ ]);