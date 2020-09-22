'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SCALE_WIDTH = 40;
var HEIGHT_GISTAGRAMM = 150;
var TEXT_HEIGHT = 20;
var GAP = 10;
var VERTICAL_MARGIN = 45;
var GORIZONTAL_MARGIN = 50;
var GISTAGRAMM_INIT_Y = VERTICAL_MARGIN + HEIGHT_GISTAGRAMM + TEXT_HEIGHT + 2 * GAP;
var TEXT_INIT_Y = 2 * VERTICAL_MARGIN + HEIGHT_GISTAGRAMM + GAP;
var TEXT_HEADER_INIT_X = 20;
var TEXT_HEADER_INIT_Y = 30;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      'rgba(0, 0, 0, 0.3)'
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      '#fff'
  );

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText(
      'Ура вы победили!',
      CLOUD_X + TEXT_HEADER_INIT_X,
      CLOUD_Y + TEXT_HEADER_INIT_Y
  );

  ctx.fillText(
      'Список результатов:',
      CLOUD_X + TEXT_HEADER_INIT_X,
      CLOUD_Y + TEXT_HEADER_INIT_Y + TEXT_HEIGHT
  );

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
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

  for (var j = 0; j < players.length; j++) {
    let randomColor = Math.floor(Math.random() * 100) + 1;
    if (players[j] === 'Вы') {
      ctx.fillStyle = '#f00';
    } else {
      ctx.fillStyle = 'hsl(240,' + randomColor + '%, 50%)';
    }

    ctx.fillRect(
        CLOUD_X + GORIZONTAL_MARGIN + (SCALE_WIDTH + GORIZONTAL_MARGIN) * j,
        CLOUD_Y + GISTAGRAMM_INIT_Y,
        SCALE_WIDTH,
        -(HEIGHT_GISTAGRAMM * times[j]) / maxTime
    );
  }
};
