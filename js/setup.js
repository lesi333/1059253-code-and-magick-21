'use strict';

(() => {
  const setup = document.querySelector(`.setup`);

  const createWizard = (template, wizard) => {
    let wizardElement = template.cloneNode(true);
    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    return wizardElement;
  };

  const onSimilarWizardsLoadSuccess = (wizards) => {
    const similarListElement = document.querySelector(`.setup-similar-list`);
    const fragment = document.createDocumentFragment();
    const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
    for (let i = 0; i < window.util.mags.WIZARD_NUMBERS; i++) {
      fragment.appendChild(createWizard(similarWizardTemplate, wizards[i]));
    }

    similarListElement.appendChild(fragment);
    setup.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };

  window.backend.load(onSimilarWizardsLoadSuccess, window.util.onShowError);
})();
