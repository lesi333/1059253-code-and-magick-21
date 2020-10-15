'use strict';

(() => {

  let coatColor = `rgb(101, 137, 164)`;
  let eyesColor = `black`;
  let fireballColor = `ee4830`;
  let wizards = [];

  const getRank = (wizard) => {
    let rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    if (wizard.colorFireball === fireballColor) {
      rank += 1;
    }
    return rank;
  };

  const namesComparator = (left, right) => {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  const updateWizards = () => {
    window.getSimilarWizards(wizards.sort((left, right) => {
      let rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.wizard.setCoatChangeHandler((color) => {
    coatColor = color;
    window.debounce(updateWizards);
  });

  window.wizard.setEyesChangeHandler((color) => {
    eyesColor = color;
    window.debounce(updateWizards);
  });

  window.wizard.setFireBallChangeHandler((color) => {
    fireballColor = color;
    window.debounce(updateWizards);
  });

  const onSimilarWizardsLoadSuccess = (data) => {
    wizards = data;
    updateWizards();
  };

  window.backend.load(onSimilarWizardsLoadSuccess, window.util.onShowError);
})();
