document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||
        e.keyCode == 32
    ) {
        window.location.href = "intro.html";
    }
}
var can = document.querySelector('canvas');
can.width = window.innerWidth;
can.height = window.innerHeight;
var cc = can.getContext('2d');
window.addEventListener('resize', function() {
    can.width = window.innerWidth;
    can.height = window.innerHeight;
});
const particlesArray = [];
let hue = 0;
const mouse = {
    x: undefined,
    y: undefined,
}

window.addEventListener('click', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 10; i++) {
        particlesArray.push(new Particle());
    }
});

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle());
    }
});


class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        //this.x = can.width / 2;
        //this.y = can.height / 2;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue + ',100%,50%)';

    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) {
            this.size -= 0.1;
        }
    }
    draw() {
        cc.strokeStyle = this.color;
        cc.lineWidth = Math.random() * 0.5;
        cc.beginPath();
        cc.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        cc.stroke();
    }
}

function init() {
    for (let i = 0; i < 100; i++) {
        particlesArray.push(new Particle());
    }
}

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        for (j = i; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                cc.beginPath();
                cc.fillStyle = particlesArray[i].color;
                cc.lineWidth = particlesArray[i].size
                cc.moveTo(particlesArray[i].x, particlesArray[i].y);
                cc.lineTo(particlesArray[j].x, particlesArray[j].y)
                cc.fill()
            }
        }
        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    //cc.fillStyle = 'rgba(0,0,0,0.1)';
    //cc.fillRect(0, 0, can.width, can.height);
    cc.clearRect(0, 0, can.width, can.height);
    handleParticles();
    hue += 2;
    requestAnimationFrame(animate);
}
init();
animate();