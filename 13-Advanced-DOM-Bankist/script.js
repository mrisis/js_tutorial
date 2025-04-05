'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// selecting elements

// console.log(document.documentElement);

// console.log(document.head);

// console.log(document.body);

// const header = document.querySelector('.header');
// console.log(header);

// const allSections = document.querySelectorAll('.section');

// console.log(allSections);

// console.log(document.getElementById('section--1'));

// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// // creating and inserting elements

// const message = document.createElement('div');

// message.classList.add('cookie-message');
// message.innerHTML =
//   "reza amin welcome back <button class = 'btn btn--close--cookie'>Got it !</button>";

// header.prepend(message);
// header.append(message);

// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

//delete elements

// document
//   .querySelector('.btn--close--cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// // styles

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).color);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// console.log(message.style.height);

// // attributes

// const logo = document.querySelector('.nav__logo');

// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// logo.alt = 'reza amin is here!!!';
// console.log(logo.alt);

// logo.setAttribute('company', 'reza company');

// console.log(logo.getAttribute('company'));

// //data attributes

// console.log(logo.dataset.versionNumber);

// // classes

// logo.classList.add('c', 'd');
// logo.classList.remove('c', 'd');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// // don't use it

// // logo.className = 'reza';

//

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  //scrolling

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('hello reza ');

  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

h1.onmousemove = function (e) {
  alert('hihi');
};
