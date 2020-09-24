'use strict';

let userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

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
  userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
};

getSimilarWizards(generateWizards());
