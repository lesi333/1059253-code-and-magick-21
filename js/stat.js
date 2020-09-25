'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const SCALE_WIDTH = 40;
const HEIGHT_GISTAGRAMM = 150;
const TEXT_HEIGHT = 20;
const GAP = 10;
const VERTICAL_MARGIN = 45;
const GORIZONTAL_MARGIN = 50;
const GISTAGRAMM_INIT_Y = VERTICAL_MARGIN + HEIGHT_GISTAGRAMM + TEXT_HEIGHT + 2 * GAP;
const TEXT_INIT_Y = 2 * VERTICAL_MARGIN + HEIGHT_GISTAGRAMM + GAP;
const TEXT_HEADER_INIT_X = 20;
const TEXT_HEADER_INIT_Y = 30;


const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const renderResults = (ctx, x, y, color, font, text) => {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(text, x, y);
};

const getMaxElement = (arr) => {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

const renderGistagramm = (ctx, players, times, maxTime) => {
  for (let j = 0; j < players.length; j++) {
    let randomColor = Math.floor(Math.random() * 100) + 1;
    ctx.fillStyle = players[j] === `Вы` ? `#f00` : `hsl(240,` + randomColor + `%, 50%)`;
    ctx.fillRect(
        CLOUD_X + GORIZONTAL_MARGIN + (SCALE_WIDTH + GORIZONTAL_MARGIN) * j,
        CLOUD_Y + GISTAGRAMM_INIT_Y,
        SCALE_WIDTH,
        -(HEIGHT_GISTAGRAMM * times[j]) / maxTime
    );
  }
};

const renderDataGistagramm = (ctx, players, times, maxTime) => {
  for (let i = 0; i < players.length; i++) {
    ctx.fillText(
        players[i],
        CLOUD_X + GORIZONTAL_MARGIN + (SCALE_WIDTH + GORIZONTAL_MARGIN) * i,
        CLOUD_Y + TEXT_INIT_Y
    );

    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + GORIZONTAL_MARGIN + (SCALE_WIDTH + GORIZONTAL_MARGIN) * i,
        CLOUD_HEIGHT - (HEIGHT_GISTAGRAMM * times[i]) / maxTime - TEXT_HEIGHT - GAP
    );
  }
};

window.renderStatistics = (ctx, players, times) => {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.3)`
  );

  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  renderResults(
      ctx,
      CLOUD_X + TEXT_HEADER_INIT_X,
      CLOUD_Y + TEXT_HEADER_INIT_Y,
      `#000`,
      `16px PT Mono`,
      `Ура вы победили!`
  );

  renderResults(
      ctx,
      CLOUD_X + TEXT_HEADER_INIT_X,
      CLOUD_Y + TEXT_HEADER_INIT_Y + TEXT_HEIGHT,
      `#000`,
      `16px PT Mono`,
      `Список результатов:`
  );

  let maxTime = getMaxElement(times);

  renderDataGistagramm(ctx, players, times, maxTime);
  renderGistagramm(ctx, players, times, maxTime);
};
