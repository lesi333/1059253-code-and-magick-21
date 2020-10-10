'use strict';

(() => {
  const setup = document.querySelector(`.setup`);
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = setup.querySelector(`.setup-close`);
  const userNameInput = document.querySelector(`.setup-user-name`);
  const formWizard = setup.querySelector(`.setup-wizard-form`);
  const dialogHandle = setup.querySelector(`.upload`);

  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 25;
  const POSITION_POPUP_X = `50%`;
  const POSITION_POPUP_Y = `80px`;

  const onPopupEscPress = (evt) => {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      setup.classList.add(`hidden`);
    }
  };

  const openPopup = () => {
    setup.classList.remove(`hidden`);
    document.addEventListener(`keydown`, onPopupEscPress);
  };

  const closePopup = () => {
    setup.classList.add(`hidden`);
    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  setupOpen.addEventListener(`click`, function () {
    openPopup();
  });

  setupOpen.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Enter`) {
      setup.classList.remove(`hidden`);
    }
  });

  setupClose.addEventListener(`click`, function () {
    closePopup();
  });

  setupClose.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Enter`) {
      setup.classList.add(`hidden`);
    }
  });

  const validateUserName = () => {
    const valueLength = userNameInput.value.length;

    if (valueLength < MIN_NAME_LENGTH) {
      userNameInput.setCustomValidity(`Ещё ` + (MIN_NAME_LENGTH - valueLength) + `симв.`);
    } else if (valueLength > MAX_NAME_LENGTH) {
      userNameInput.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + `симв.`);
    } else {
      userNameInput.setCustomValidity(``);
    }

    userNameInput.reportValidity();
  };

  userNameInput.addEventListener(`input`, validateUserName);

  const onFormSendSuccess = () => {
    setup.classList.add(`hidden`);
  };

  const onFormSendError = (errorMessage) => {
    window.util.showError(errorMessage);
  };

  formWizard.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    window.backend.save(new FormData(formWizard), onFormSendSuccess, onFormSendError);
  });

  dialogHandle.addEventListener(`mousedown`, (evt) => {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let dragged = false;

    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();
      dragged = true;

      const shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + `px`;
      setup.style.left = (setup.offsetLeft - shift.x) + `px`;
    };

    const onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);

      if (dragged) {
        const onClickPreventDefault = (draggedEvt) => {
          draggedEvt.preventDefault();
          dialogHandle.removeEventListener(`click`, onClickPreventDefault);
        };
        dialogHandle.addEventListener(`click`, onClickPreventDefault);
      }
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);

    const restartPositionPopup = () => {
      setup.style.top = POSITION_POPUP_Y;
      setup.style.left = POSITION_POPUP_X;
    };

    setupOpen.addEventListener(`click`, restartPositionPopup);
  });
})();
