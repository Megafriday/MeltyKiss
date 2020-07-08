function getRandomDouble(min, max) {
	return Math.random() * (max - min) + min;
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class Snowflake {
	constructor(screenWidth, screenHeight) {
		this.screenWidth = screenWidth;
		this.screenHeight = screenHeight;
		this.imgNormal = document.getElementById("imgNormal");
		this.imgMatcha = document.getElementById("imgMatcha");
		this.imgIchigo = document.getElementById("imgIchigo");
		this.r = getRandomDouble(8, 25);
		this.width = this.r * 2;
		this.height = this.r * 2;
		this.alpha = this.changeScale(this.r, 8, 25, 0.5, 1);
		this.xoff = 0;
		this.dir = (Math.random() > 0.5) ? 1 : -1;
		this.index = getRandomInt(1, 3);
		this.melty = this.pickMelty(this.index);
	}

	randomize() {
		this.position = {
			x: getRandomDouble(0, this.screenWidth),
			y: getRandomDouble(-this.screenHeight, -50)
		};

		this.speed = Math.sqrt(this.r) * 0.4;
		this.angle = getRandomDouble(0, 2 * Math.PI);
	}

	update() {

		//メルティキッスが下へ落ちていく動作
		this.position.y += this.speed;

		this.xoff = Math.sin(this.angle) + Math.sin(3 * this.angle);

		//左右に少しずれる
		this.position.x += (this.xoff * 0.1);

		if (this.position.y >= this.screenHeight + this.r) {
			this.randomize();
		}

	}

	changeScale(value, minOld, maxOld, minNew, maxNew) {
		return ((maxNew - minNew) / (maxOld - minOld)) * (value - maxOld) + maxNew;

	}

	drawRotatedImage(context, image, xa, ya) {

		// 現在の座標システムを保存
		context.save();

		//回転したい画像の中心へと移動
		context.translate(xa, ya);

		// 移動した点を起点に画像を回転
		context.rotate(this.angle);

		// 元の場所へ戻る
		context.translate(-xa, -ya);

		//画像を描画
		context.drawImage(image, this.position.x, this.position.y, this.width, this.height);

		// 座標を復元
		context.restore();

		this.angle += (this.dir * this.index * 0.003);

	}

	pickMelty(key) {
		switch (key) {
			case 1:
				return this.imgNormal;
			case 2:
				return this.imgIchigo;
			case 3:
				return this.imgMatcha;

			default:
				return this.imgNormal;
		}
	}

	draw(context) {

		this.drawRotatedImage(context, this.melty, this.position.x + this.r, this.position.y + this.r);

	}
}
