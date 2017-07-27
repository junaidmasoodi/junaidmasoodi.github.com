var canvas = document.getElementById('snow'),
  ctx = canvas.getContext('2d'),
  width = ctx.canvas.width = document.body.offsetWidth,
  height = ctx.canvas.height = document.body.offsetHeight,
  animFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame,
  snowflakes = [];

window.onresize = function() {
  width = ctx.canvas.width = document.body.offsetWidth,
    height = ctx.canvas.height = document.body.offsetHeight;
}

function update() {
  for (var i = 0; i < snowflakes.length; i++) {
    snowflakes[i].update();
  }
}

function Snow() {
  this.x = random(0, width);
  this.y = random(-height, 0);
  this.radius = random(0.5, 3.0);
  this.speed = random(1, 3);
  this.wind = random(-0.5, 3.0);
}

Snow.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.closePath();
}

Snow.prototype.update = function() {
  this.y += this.speed;
  this.x += this.wind;

  if (this.y > ctx.canvas.height) {
    this.y = 0;
    this.x = random(0, width);
  }
}

function createSnow(count) {
  for (var i = 0; i < count; i++) {
    snowflakes[i] = new Snow();
  }
}

function draw() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  for (var i = 0; i < snowflakes.length; i++) {
    snowflakes[i].draw();
  }
}

function loop() {
  draw();
  update();
  animFrame(loop);
}

function random(min, max) {
  var rand = (min + Math.random() * (max - min)).toFixed(1);
  rand = Math.round(rand);
  return rand;
}

createSnow(150);
loop();