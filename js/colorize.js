'use strict';

(() => {
  const setupWizardCoat = document.querySelector(`.wizard-coat`);
  const setupWizardEyes = document.querySelector(`.wizard-eyes`);
  const setupWizardFireball = document.querySelector(`.setup-fireball-wrap`);

  const onCoatClick = () => {
    const coatColor = window.util.getRandomElement(window.util.mags.WIZARD_COAT_COLORS);
    setupWizardCoat.style.fill = coatColor;
    document.querySelector(`input[name="coat-color"]`).setAttribute(`value`, coatColor);
  };

  const onEyesClick = () => {
    const eyesColor = window.util.getRandomElement(window.util.mags.WIZARD_EYES_COLORS);
    setupWizardEyes.style.fill = eyesColor;
    document.querySelector(`input[name="eyes-color"]`).setAttribute(`value`, eyesColor);
  };

  const onFireballClick = () => {
    const fireballColor = window.util.getRandomElement(window.util.mags.WIZARD_FIREBALL_COLOR);
    setupWizardFireball.setAttribute(`style`, `background-color: ` + fireballColor);
    document.querySelector(`input[name="fireball-color"`).setAttribute(`value`, fireballColor);
  };

  setupWizardCoat.addEventListener(`click`, onCoatClick);
  setupWizardEyes.addEventListener(`click`, onEyesClick);
  setupWizardFireball.addEventListener(`click`, onFireballClick);
})();
