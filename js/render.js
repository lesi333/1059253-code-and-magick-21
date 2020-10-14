'use strict';

(() => {
  const MAX_SIMILAR_WIZARD_COUNT = 4;

  const setup = document.querySelector(`.setup`);
  const similarListElement = document.querySelector(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
  setup.querySelector(`.setup-similar`).classList.remove(`hidden`);

  const createWizard = (wizard) => {
    const wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.getSimilarWizards = (wizards) => {
    const fragment = document.createDocumentFragment();
    similarListElement.innerHTML = ``;

    const takeNumber = wizards.length > MAX_SIMILAR_WIZARD_COUNT ? MAX_SIMILAR_WIZARD_COUNT : wizards.length;

    for (let i = 0; i < takeNumber; i++) {
      fragment.appendChild(createWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };
})();
