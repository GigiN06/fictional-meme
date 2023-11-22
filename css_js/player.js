export class Player {
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 91.3
        this.x = 0;
        this.y = this.game.height - this.height;
        this.image = document.getElementById('player');
        this.Speed = 0;
        this.Jump = 0;
        this.weight = 1;
        this.maxSpeed = 4;
        this.frameX = 0;
        this.frameY = 0;
    }
    update(input) {
        this.x += this.Speed;
        if (input.includes('ArrowRight')) {
            this.Speed = this.maxSpeed;
        } else if (input.includes('ArrowLeft')) {
            this.Speed = -this.maxSpeed;
            this.frameY = 2;
        } else this.Speed = 0;
        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        if (input.includes('ArrowUp') && this.onGround()) this.Jump = -15;
        this.y += this.Jump
        if (!this.onGround()) this.Jump += this.weight;
        else this.Jump = 0;

    }
    draw(context) {
        context.drawImage(this.image, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    onGround() {
        return this.y >= this.game.height - this.height;
    }

}