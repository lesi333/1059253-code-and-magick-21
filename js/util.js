'use strict';

(() => {
  window.util = {
    mags: {
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
    }
  };
})();
