'use strict';

const wizardElement = document.querySelector(`.setup-wizard`);
const wizardCoatElement = wizardElement.querySelector(`.wizard-coat`);
const wizardEyesElement = wizardElement.querySelector(`.wizard-eyes`);
const setupWizardFireball = document.querySelector(`.setup-fireball-wrap`);
const wizardCoatInput = document.querySelector(`input[name="coat-color"]`);
const wizardEyesInput = document.querySelector(`input[name="eyes-color"]`);
const wizardFireballInput = document.querySelector(`input[name="fireball-color"]`);

let wizard = {
  onEyesChange(color) {
    return color;
  },
  onCoatChange(color) {
    return color;
  },
  onFireBallChange(color) {
    return color;
  }
};

wizardCoatElement.addEventListener(`click`, () => {
  const newColor = window.util.getRandomElement(window.util.mags.WIZARD_COAT_COLORS);
  wizardCoatElement.style.fill = newColor;
  wizardCoatInput.value = newColor;
  wizard.onCoatChange(newColor);
});

wizardEyesElement.addEventListener(`click`, () => {
  const newColor = window.util.getRandomElement(window.util.mags.WIZARD_EYES_COLORS);
  wizardEyesElement.style.fill = newColor;
  wizardEyesInput.value = newColor;
  wizard.onEyesChange(newColor);
});

setupWizardFireball.addEventListener(`click`, () => {
  const newColor = window.util.getRandomElement(window.util.mags.WIZARD_FIREBALL_COLOR);
  setupWizardFireball.style.backgroundColor = newColor;
  wizardFireballInput.value = newColor;
  wizard.onFireBallChange(newColor);
});

window.wizard = {
  setCoatChangeHandler: (cb) => {
    wizard.onCoatChange = cb;
  },

  setEyesChangeHandler: (cb) => {
    wizard.onEyesChange = cb;
  },

  setFireBallChangeHandler: (cb) => {
    wizard.onFireBallChange = cb;
  }
};
