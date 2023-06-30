import throttle from "lodash.throttle";

const KEY_INPUT = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const emailInput = form.firstElementChild.firstElementChild;
const feedbackInput = form.firstElementChild.nextElementSibling.firstElementChild;
const submitBtn = form.lastElementChild;

const LSel = JSON.parse(localStorage.getItem(KEY_INPUT));
const feedback = LSel ?? { email: '', feedback: '' };

emailInput.value = feedback.email;
feedbackInput.value = feedback.feedback;

emailInput.addEventListener('input', emailInputUpdate);
feedbackInput.addEventListener('input', feedbackInputUpdate);
form.addEventListener('submit', formSubmit);

function emailInputUpdate(evt) {
  const currentText = evt.currentTarget.value;
  feedback.email = currentText;
  localStorage.setItem(KEY_INPUT, JSON.stringify(feedback));
}


function feedbackInputUpdate(evt) {
  const currentText = evt.currentTarget.value;
  feedback.feedback = currentText;
  localStorage.setItem(KEY_INPUT, JSON.stringify(feedback));
}


function formSubmit(evt) {
    evt.preventDefault();

    console.log(feedback);
    feedback.email = '';
    feedback.feedback = '';
    localStorage.setItem(KEY_INPUT, JSON.stringify(feedback));
    emailInput.value = feedback.email;
    feedbackInput.value = feedback.feedback;
};

