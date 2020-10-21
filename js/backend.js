'use strict';

const URL_DOWNLOAD = `https://21.javascript.pages.academy/code-and-magick/data`;
const URL_UPLOAD = `https://21.javascript.pages.academy/code-and-magick`;

const TIMEOUT_IN_MS = 10000;

const createXHR = (onLoad, onError) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = `json`;

  xhr.addEventListener(`load`, () => {
    switch (xhr.status) {
      case 200:
        onLoad(xhr.response);
        break;
      case 400:
        onError(`Произошла ошибка сервера: неверный запрос`);
        break;
      case 401:
        onError(`Произошла ошибка сервера: пользователь не авторизован`);
        break;
      case 404:
        onError(`Произошла ошибка сервера: запрашиваемый ресурс не найден`);
        break;
      case 500:
        onError(`Произошла внутренняя ошибка сервера`);
        break;
      default:
        onError(`Произошла ошибка сервера: ` + xhr.status + ` ` + xhr.statusText);
    }
  });

  xhr.addEventListener(`error`, () => {
    onError(`Произошла ошибка соединения`);
  });

  xhr.addEventListener(`timeout`, () => {
    onError(`Запрос не успел выполниться за ` + xhr.timeout + `мс`);
  });

  xhr.timeout = TIMEOUT_IN_MS;
  return xhr;
};

const loadData = (onLoad, onError) => {
  const xhr = createXHR(onLoad, onError);
  xhr.open(`GET`, URL_DOWNLOAD);
  xhr.send();
};

const saveData = function (data, onLoad, onError) {
  const xhr = createXHR(onLoad, onError);
  xhr.open(`POST`, URL_UPLOAD);
  xhr.send(data);
};

window.backend = {
  load: loadData,
  save: saveData
};
