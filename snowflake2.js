export default class Snowflake2 {
	constructor(screenWidth, screenHeight) {
		this.screenWidth = screenWidth;
		this.screenHeight = screenHeight;
		this.imgNormal = document.querySelector("#imgNormal");
		this.position = {
			x: 100,
			y: 100
		};
		this.width = 100;
		this.height = 100;
	}

	draw(context) {
		context.drawImage(this.imgNormal, this.position.x, this.position.y, this.width, this.height)
	}
}