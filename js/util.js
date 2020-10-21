'use strict';

window.util = {
  mags: {
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
  },

  getRandomElement: (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  getMaxElement: (arr) => {
    let maxElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  },

  onShowError: (errorMessage) => {
    const node = document.createElement(`div`);

    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  }
};
