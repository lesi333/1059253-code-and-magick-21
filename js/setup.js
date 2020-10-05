'use strict';

(() => {
  const setup = document.querySelector(`.setup`);

  const generateWizards = () => {
    let wizards = [];
    for (let i = 0; i < window.util.mags.WIZARD_NUMBERS; i++) {
      wizards[i] = {
        name: window.util.getRandomElement(window.util.mags.WIZARD_NAMES) + ` ` + window.util.getRandomElement(window.util.mags.WIZARD_SURNAMES),
        coatColor: window.util.getRandomElement(window.util.mags.WIZARD_COAT_COLORS),
        eyesColor: window.util.getRandomElement(window.util.mags.WIZARD_EYES_COLORS)
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
})();
