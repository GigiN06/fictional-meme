import { Player } from './player.js';
import { InputHandler } from './input.js';
window.addEventListener('load', function() {
    var can = document.getElementById("l1");
    can.width = document.getElementById("ply").offsetWidth;
    can.height = document.getElementById("ply").offsetHeight;
    window.addEventListener('resize', function() {
        window.location.reload();
        can.width = document.getElementById("ply").offsetWidth;
        can.height = document.getElementById("ply").offsetHeight;
    });
    var cc = can.getContext('2d');

    const mouse = {
        x: undefined,
        y: undefined,
    }

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler();

        }
        update() {
            this.player.update()
        }
        draw(context) {
            this.player.draw(context);
        }

    }

    const game = new Game(can.width, can.height);
    console.log(game);

    function animate() {
        cc.clearRect(0, 0, can.width, can.height);
        game.update();
        game.draw(cc);
        requestAnimationFrame(animate);
    }
    animate();
});