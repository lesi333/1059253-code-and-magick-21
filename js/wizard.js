'use strict';

(() => {
  const wizardElement = document.querySelector(`.setup-wizard`);
  const wizardCoatElement = wizardElement.querySelector(`.wizard-coat`);
  const wizardEyesElement = wizardElement.querySelector(`.wizard-eyes`);
  const setupWizardFireball = document.querySelector(`.setup-fireball-wrap`);

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
    wizard.onCoatChange(newColor);
  });

  wizardEyesElement.addEventListener(`click`, () => {
    const newColor = window.util.getRandomElement(window.util.mags.WIZARD_EYES_COLORS);
    wizardEyesElement.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  setupWizardFireball.addEventListener(`click`, () => {
    const newColor = window.util.getRandomElement(window.util.mags.WIZARD_FIREBALL_COLOR);
    setupWizardFireball.style.backgroundColor = newColor;
    wizard.onFireBallChange(newColor);
  });

  window.wizard = {
    setCoatChangeHandler: ((cb) => {
      wizard.onCoatChange = cb;
    }),

    setEyesChangeHandler: ((cb) =>{
      wizard.onEyesChange = cb;
    }),

    setFireBallChangeHandler: ((cb) => {
      wizard.onFireBallChange = cb;
    })
  };
})();
