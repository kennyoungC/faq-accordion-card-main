`use strict`;

const faqTextBox = document.querySelectorAll(`.faq-text`);
const arrowOpen = document.querySelectorAll(`.arrow-open`);
const headerBox = document.querySelectorAll(`.header-box`);
headerBox.forEach((head) =>
  head.addEventListener(`click`, function (e) {
    console.log(e.target);
    e.target.classList.toggle(`faq-active`);
    e.target.classList.remove(`hidden`);
  })
);
