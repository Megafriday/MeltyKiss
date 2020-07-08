import Snowflake from "./snowflake2.js";

const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;

const imgBack = document.querySelector("#imgBack");
const canvas = document.querySelector("canvas");
canvas.width = SCREEN_WIDTH;
canvas.height = SCREEN_HEIGHT;
const context = canvas.getContext("2d");

const snowflake = new Snowflake(SCREEN_WIDTH, SCREEN_HEIGHT);

function mainLoop() {
	context.drawImage(imgBack, 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
	snowflake.draw(context);

	window.requestAnimationFrame(mainLoop);
}

mainLoop();
