import { Snowflake } from "./snowflake.js";

const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;

const canvas = document.getElementById("screen");
canvas.width = SCREEN_WIDTH;
canvas.height = SCREEN_HEIGHT;
const context = canvas.getContext("2d");

const imgBack = document.getElementById("imgBack"); //背景写真

const snowflakes = [];

for (var i = 0; i < 90; i++) {
	snowflakes.push(new Snowflake(SCREEN_WIDTH, SCREEN_HEIGHT));
	snowflakes[i].randomize();
}


function mainLoop() {

	context.drawImage(imgBack, 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

	for (let snowflake of snowflakes) {
		snowflake.update();
		snowflake.draw(context);
	}

	window.requestAnimationFrame(mainLoop);
}

mainLoop();