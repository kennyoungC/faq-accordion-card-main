`use strict`;

const headerBox = document.querySelectorAll(`.header-box`);
const faqContainer = document.querySelector(`.faq--1`);
const faqText = document.getElementsByClassName(`faq-text`);
const arrowOpen = document.getElementsByClassName(`arrow-open`);
console.log(arrowOpen);

for (let i = 0; i < arrowOpen.length; i++) {
  arrowOpen[i].addEventListener(
    `click`,
    () => {
      for (let i = 0; i < faqText.length; i++) {
        faqText[i].classList.toggle(`hidden`);
      }
    },
    false
  );
}
