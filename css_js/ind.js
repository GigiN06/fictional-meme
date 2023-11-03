var can = document.querySelector('canvas');
can.width = window.innerWidth;
can.height = window.innerHeight;
var cc = can.getContext('2d');

window.addEventListener('resize', function() {
    can.width = window.innerWidth;
    can.height = window.innerHeight;
});
let particlesArray = [];
const mouse = {
    x: undefined,
    y: undefined,
}

can.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 8 + Math.random() * 6;
        this.sa = Math.PI * 1.1
        this.ea = Math.PI * 1.4
        this.dy = Math.random() * 3 + 1;
        this.dx = Math.random() * 2 + 1;
        this.color = 'rgb(255,255,255,0.5)';
    }

    update() {

        this.x += this.dx;
        this.y -= this.dy;
        if (this.x > can.width + 15) {
            this.x = -32;
        }
        if (this.y <= 0) {
            this.size = 8 + Math.random() * 6;
            this.y = can.height;
            this.x = Math.random() * can.width - 1;
            this.color = 'rgb(255,255,255,0.5)';
        }

        var a = 15 + Math.random() * 5 + 1;
        if (this.size <= a) { this.size += 0.05; }
    }
    draw() {
        cc.strokeStyle = this.color;
        cc.lineWidth = 2;
        cc.beginPath();
        cc.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        cc.stroke();
        cc.strokeStyle = this.color;
        cc.lineWidth = 2;
        cc.beginPath();
        cc.arc(this.x, this.y, this.size - 4, this.sa, this.ea);
        cc.stroke();
    }
}


function mPop() {
    for (i = 0; i <= 20; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (mouse.y > particlesArray[i].y - particlesArray[i].size && mouse.y < particlesArray[i].y + particlesArray[i].size) {
            if (mouse.x > particlesArray[i].x - particlesArray[i].size && mouse.x < particlesArray[i].x + particlesArray[i].size) {
                particlesArray[i].color = 'rgba(255,255,255,0)';
            }
        }
    }

}

for (let i = 0; i <= 40; i++) {
    let stx = Math.random() * can.width;
    let sty = can.height + Math.random() * 100 + 45;
    particlesArray.push(new Bubble(stx, sty));
}



function animate() {
    cc.clearRect(0, 0, can.width, can.height);
    mPop();
    requestAnimationFrame(animate)
}

animate();