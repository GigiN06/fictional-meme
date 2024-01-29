function mod() {
    document.getElementById("d1").style.visibility = 'hidden';
    document.getElementById("d1").style.opacity = 0;
}

function mud() {
    document.getElementById("d1").style.visibility = 'visible';
    document.getElementById("d1").style.opacity = 1;
}
var bix = 0;
window.addEventListener('scroll', function() {
    let header = document.getElementById("navd");
    let txt = document.getElementById("navp");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    header.style.opacity = 1 - scrollTop / 500;
    if (header.style.opacity <= 0 && txt.textContent.includes('Intro')) {
        txt.classList.add('ani');
        setTimeout(function() {
            txt.innerText = "Things I Do and Love";
            txt.classList.remove('ani')
        }, 600)

    } else if (header.style.opacity > 0 && txt.textContent.includes('Things I Do and Love')) {
        txt.classList.add('ani');
        setTimeout(function() {
            txt.innerText = "Intro";
            txt.classList.remove('ani')
        }, 600)
    }
});
var likes = document.getElementById("ifo");

function def() {
    likes.classList.add('anif');
    let text = "Hover on the buttons on the left to reveal more info";
    setTimeout(function() {
        likes.innerText = text;
        likes.style.backgroundColor = 'white';
        if (bix == 1)
            likes.style.boxShadow = '10px 0 #9AD0C2, 0 10px #9AD0C2, -10px 0 #9AD0C2, 0 -10px #9AD0C2,20px 0px black, 10px 10px black, 10px -10px black, -20px 0 black, -10px 10px black, -10px -10px black, 0 20px black, 0 -20px black'
        else if (bix == 2)
            likes.style.boxShadow = '10px 0 #F8BDEB, 0 10px #F8BDEB, -10px 0 #F8BDEB, 0 -10px #F8BDEB,20px 0px black, 10px 10px black, 10px -10px black, -20px 0 black, -10px 10px black, -10px -10px black, 0 20px black, 0 -20px black'
        else if (bix == 3)
            likes.style.boxShadow = '10px 0 #FFFB73, 0 10px #FFFB73, -10px 0 #FFFB73, 0 -10px #FFFB73,20px 0px black, 10px 10px black, 10px -10px black, -20px 0 black, -10px 10px black, -10px -10px black, 0 20px black, 0 -20px black'
        likes.classList.remove('anif')
    }, 1000)
}

function art() {
    let text = "A series of digital artwork I have done throughout my life";
    bix = 1;
    likes.classList.add('anif');
    setTimeout(function() {
        likes.innerText = text;
        likes.style.backgroundColor = '#9AD0C2';
        likes.style.boxShadow = '10px 0 #2D9596, 0 10px #2D9596, -10px 0 #2D9596, 0 -10px #2D9596,20px 0px black, 10px 10px black, 10px -10px black, -20px 0 black, -10px 10px black, -10px -10px black, 0 20px black, 0 -20px black'
        likes.classList.remove('anif')

    }, 1000)
}

function mu() {
    let text = "The genres in music that I like to listen too ";
    bix = 2;
    likes.classList.add('anif');
    setTimeout(function() {
        likes.innerText = text;
        likes.style.backgroundColor = '#F8BDEB';
        likes.style.boxShadow = '10px 0 #FF8F8F, 0 10px #FF8F8F, -10px 0 #FF8F8F, 0 -10px #FF8F8F,20px 0px black, 10px 10px black, 10px -10px black, -20px 0 black, -10px 10px black, -10px -10px black, 0 20px black, 0 -20px black'
        likes.classList.remove('anif')
    }, 1000)
}

function ga() {
    let text = "Here I talk about my favorite video games I have played";
    bix = 3;
    likes.classList.add('anif');
    setTimeout(function() {
        likes.innerText = text;
        likes.style.backgroundColor = '#FFFB73';
        likes.style.boxShadow = '10px 0 #FFC436, 0 10px #FFC436, -10px 0 #FFC436, 0 -10px #FFC436,20px 0px black, 10px 10px black, 10px -10px black, -20px 0 black, -10px 10px black, -10px -10px black, 0 20px black, 0 -20px black'
        likes.classList.remove('anif')
    }, 1000)
}

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
        if (this.y <= -20) {
            this.size = 8 + Math.random() * 6;
            this.y = can.height + Math.random() * 20 + 10;
            this.x = Math.random() * can.width - 1;
            if (cancel == 1 && bl > 30) {
                bl--;
                audio.volume = 0.1;
                audio.play();
            }
        }

        var a = 15 + Math.random() * 5 + 1;
        if (this.size <= a) { this.size += 0.05; }
    }
    draw() {

        cc.lineWidth = 2;
        cc.beginPath();
        cc.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        cc.stroke();

        cc.lineWidth = 2;
        cc.beginPath();
        cc.arc(this.x, this.y, this.size - 4, this.sa, this.ea);
        cc.stroke();
    }
}

var audio = new Audio('css_js/misc/pop.wav'),
    aud1;
var cancel = 1;
var bl = 20;

function fun() {

    if (cancel == 1) {
        cancel = 0;
        audio = new Audio('css_js/misc/pop.wav')
        audio.volume = 0;
        audio.play();
        aud1 = new Audio('css_js/misc/funfact.mp3')
        aud1.volume = 0.5;
        aud1.play();
        bl = 60;
        aud1.addEventListener('ended', function() {
            cancel = 1
            aud1.currentTime = 0;
        });
    } else {
        cancel = 1;
        aud1.pause();
        aud1.currentTime = 0
    }

}
let hue = 0;

function mPop() {
    for (i = 0; i <= bl; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (cancel == 0) {
            cc.strokeStyle = 'hsl(' + hue + ',100%,50%)';
            hue += 0.1;
            //particlesArray[i].color = changeColor();
        } else if (cancel == 1) {
            cc.strokeStyle = 'white';

        }
        if (mouse.y > particlesArray[i].y - particlesArray[i].size && mouse.y < particlesArray[i].y + particlesArray[i].size) {
            if (mouse.x > particlesArray[i].x - particlesArray[i].size && mouse.x < particlesArray[i].x + particlesArray[i].size) {
                audio.volume = 0.3;
                audio.play();
                particlesArray[i].y = can.height + 20 + Math.random() * 100;
                particlesArray[i].x = Math.random() * can.width;
                particlesArray[i].size = 8 + Math.random() * 6;
            }
        }
    }

}

for (let i = 0; i <= 60; i++) {
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