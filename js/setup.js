'use strict';

// const userDialog = document.querySelector(`.setup`);
const setupOpen = document.querySelector(`.setup-open`);
const setup = document.querySelector(`.setup`);
const setupClose = setup.querySelector(`.setup-close`);
const setupWizardCoat = document.querySelector(`.wizard-coat`);
const setupWizardEyes = document.querySelector(`.wizard-eyes`);
const setupWizardFireball = document.querySelector(`.setup-fireball-wrap`);
const userNameInput = document.querySelector(`.setup-user-name`);

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

// userDialog.classList.remove(`hidden`);

const mags = {
  WIZARD_NAMES: [
    `Иван`,
    `Хуан Себастьян`,
    `Мария`,
    `Кристоф`,
    `Виктор`,
    `Юлия`,
    `Люпита`,
    `Вашингтон`
  ],

  WIZARD_SURNAMES: [
    `да Марья`,
    `Верон`,
    `Мирабелла`,
    `Вальц`,
    `Онопко`,
    `Топольницкая`,
    `Нионго`,
    `Ирвинг`
  ],

  WIZARD_COAT_COLORS: [
    `rgb(101, 137, 164)`,
    `rgb(241, 43, 107)`,
    `rgb(146, 100, 161)`,
    `rgb(56, 159, 117)`,
    `rgb(215, 210, 55)`,
    `rgb(0, 0, 0)`
  ],

  WIZARD_EYES_COLORS: [
    `black`,
    `red`,
    `blue`,
    `yellow`,
    `green`
  ],

  WIZARD_FIREBALL_COLOR: [
    `#ee4830`,
    `#30a8ee`,
    `#5ce6c0`,
    `#e848d5`,
    `#e6e848`
  ],

  WIZARD_NUMBERS: 4
};

const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const generateWizards = () => {
  let wizards = [];
  for (let i = 0; i < mags.WIZARD_NUMBERS; i++) {
    wizards[i] = {
      name: getRandomElement(mags.WIZARD_NAMES) + ` ` + getRandomElement(mags.WIZARD_SURNAMES),
      coatColor: getRandomElement(mags.WIZARD_COAT_COLORS),
      eyesColor: getRandomElement(mags.WIZARD_EYES_COLORS)
    };
  }
  return wizards;
};

const createWizard = (template, wizard) => {
  let wizardElement = template.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const getSimilarWizards = (wizards) => {
  let similarListElement = document.querySelector(`.setup-similar-list`);
  let fragment = document.createDocumentFragment();
  let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
  for (let i = 0; i < wizards.length; i++) {
    fragment.appendChild(createWizard(similarWizardTemplate, wizards[i]));
  }

  similarListElement.appendChild(fragment);
  setup.querySelector(`.setup-similar`).classList.remove(`hidden`);
};

getSimilarWizards(generateWizards());

const onPopupEscPress = (evt) => {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    setup.classList.add(`hidden`);
  }
};

const openPopup = () => {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = () => {
  setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    setup.classList.remove(`hidden`);
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    setup.classList.add(`hidden`);
  }
});

userNameInput.addEventListener(`input`, function () {
  const valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Ещё ` + (MIN_NAME_LENGTH - valueLength) + `симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + `симв.`);
  } else {
    userNameInput.setCustomValidity(``);
  }

  userNameInput.reportValidity();
});

const onCoatClick = () => {
  const coatColor = getRandomElement(mags.WIZARD_COAT_COLORS);
  setupWizardCoat.style.fill = coatColor;
  document.querySelector(`input[name="coat-color"]`).setAttribute(`value`, coatColor);
};

const onEyesClick = () => {
  const eyesColor = getRandomElement(mags.WIZARD_EYES_COLORS);
  setupWizardEyes.style.fill = eyesColor;
  document.querySelector(`input[name="eyes-color"]`).setAttribute(`value`, eyesColor);
};

const onFireballClick = () => {
  const fireballColor = getRandomElement(mags.WIZARD_FIREBALL_COLOR);
  setupWizardFireball.setAttribute(`style`, `background-color: ` + fireballColor);
  // console.log(fireballColor);
  document.querySelector(`input[name="fireball-color"`).setAttribute(`value`, fireballColor);
};

setupWizardCoat.addEventListener(`click`, onCoatClick);
setupWizardEyes.addEventListener(`click`, onEyesClick);
setupWizardFireball.addEventListener(`click`, onFireballClick);
