let pxt = document.getElementById("p1");
let pd = document.getElementById("p2");
let pxpc = document.getElementById("m1");
let mcls = document.getElementById("close");
let imt = document.getElementById("imty");
let imtp = document.getElementById("imt");
let img = document.createElement("img");
let title = document.getElementById("title");
let desc = document.getElementById("des");
let mov = document.getElementById("mov");
let mov1 = document.getElementById("mov1");
let fk = document.getElementById("f1");
var loc;
var fir = 0,
    las = 0;
const pxl = ['#ff0044', '#48da00', '#730000', '#001567', '#3f2631', '#4a0156', '#f6fe00', '#a22732', '#8f0026', '#11016b', '#3639ff', '#4c0174', '#cbfef9']
const pxlt = ['Portal Page Cover', 'Cult Symbol', 'Mask(f)', 'Mask(m)', 'Blacksmith', 'Game Mascot', 'Mask(o)', 'Tavern', 'Pumpkin Massacre', 'Cloudy Walks', 'Professor Gore', 'Just Another Demon', 'Wandering Oracle'];
const nmlc = ['#7c3234', '#380001', '#616060', '#d3d3d3', '#720100', '#ff7300', '#440f2f', '#71010b', '#0f5a00'];
const nml = ['Man Bug', 'Dream', 'False God', 'Affectionate Corpse', 'Bait', 'Lovecraftian Creatures', 'Dru', 'Eye Candy', 'Hungry Frog'];
const fktl = ['Friend(dropped)', 'Hand & Ball(dropped)', 'Carnivore Tree(dropped)', 'Gunned Down(in prog)', 'Revival(in prog)', 'IDK(dropped)', 'Fleshed Out(dropped)', 'Face Off(in prog)', 'Hands(dropped)']
title.style.visibility = 'hidden';
desc.style.visibility = 'hidden';
var imgtyp = 1;
pxpc.style.opacity = 0;
pxpc.style.visibility = 'hidden';
mcls.addEventListener('click', function() {
    pxpc.style.opacity = 0;
    pxpc.style.visibility = 'hidden';
});
mcls.addEventListener('mouseover', function() {
    if (loc === 'fkt') {
        imtp.style.backgroundColor = 'black';
    }
    if (chanstyl === 3)
        imtp.style.backgroundColor = 'black';
})
mcls.addEventListener('mouseout', function() {
    if (loc === 'fkt') {
        imtp.style.backgroundColor = 'white';
    }
    if (chanstyl === 3)
        imtp.style.backgroundColor = 'white';
})
let ph = pd.offsetHeight;
let pw = pd.offsetWidth;
pxt.addEventListener('mouseover', function() {
    pd.classList.add('pixhov');
    pxt.classList.add('pxthov');
    pxt.style.cursor = 'context-menu';
    pxt.addEventListener('transitionend', function() {
        pxt.style.cursor = 'pointer';
        pxt.innerText = "Click Me";
        pxt.addEventListener('click', function() {
            if (chanstyl != 3)
                imtp.style.backgroundColor = '#ff0044'
            imgtyp = 1;
            fir = 1;
            las = 13;
            imtp.style.opacity = '0.5'
            loc = 'pixlart';
            title.innerText = pxlt[imgtyp - 1]
            img.src = 'css_js/misc/pixlart/' + imgtyp + '.png';
            imt.appendChild(img);
            pxpc.style.opacity = 1;
            pxpc.style.visibility = 'visible';
        })
    })
});
window.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
        if (imgtyp === fir) {
            imgtyp = las;
        } else {
            imgtyp--;
        }
    } else if (event.key === 'ArrowRight') {
        if (imgtyp === las) { imgtyp = fir; } else {
            imgtyp++;
        }
    }
    changeImage();

})

function changeImage() {
    if (loc === 'pixlart') {
        title.innerText = pxlt[imgtyp - 1];
        if (chanstyl != 3)
            imtp.style.backgroundColor = pxl[imgtyp - 1];
    } else if (loc === 'norm') {
        title.innerText = nml[imgtyp - 1];
        if (chanstyl != 3)
            imtp.style.backgroundColor = nmlc[imgtyp - 1];
    } else {
        title.innerText = fktl[imgtyp - 1];
    }
    img.src = 'css_js/misc/' + loc + '/' + imgtyp + '.png';
    imt.appendChild(img);
}


imtp.addEventListener('mouseover', function() {
    imtp.style.opacity = 1
    title.style.opacity = 1;
    title.style.visibility = 'visible';
    desc.style.opacity = 1;
    desc.style.visibility = 'visible';
    mov.style.opacity = 0;
    mov.style.visibility = 'hidden';
    mov1.style.opacity = 0;
    mov1.style.visibility = 'hidden';
});
imtp.addEventListener('mouseout', function() {
    imtp.style.opacity = 0.5;
    title.style.opacity = 0;
    title.style.visibility = 'hidden';
    desc.style.opacity = 0;
    desc.style.visibility = 'hidden';
    mov.style.opacity = 1;
    mov.style.visibility = 'visible';
    mov1.style.opacity = 1;
    mov1.style.visibility = 'visible';
});
pxt.addEventListener('mouseout', function() {
    pd.classList.remove('pixhov');
    pxt.classList.remove('pxthov');
    pxt.style.cursor = 'context-menu';
    pxt.innerText = "Pixel Art";
    pxt.addEventListener('transitionend', function() {
        pxt.innerText = "Pixel Art";
    })
})


let nmt = document.getElementById("n1");
let nmd = document.getElementById("n2");


nmt.addEventListener('mouseover', function() {
    nmt.style.cursor = 'context-menu';
    nmd.classList.add('nmhov');
    nmt.addEventListener('animationend', function() {
        nmt.style.cursor = 'pointer';
        nmt.addEventListener('click', function() {
            if (chanstyl != 3)
                imtp.style.backgroundColor = '#7c3234'
            imgtyp = 1
            fir = 1;
            las = 9;
            imtp.style.opacity = '0.5'
            loc = 'norm';
            title.innerText = nml[imgtyp - 1]
            img.src = 'css_js/misc/norm/' + imgtyp + '.png';
            imt.appendChild(img);
            pxpc.style.opacity = 1;
            pxpc.style.visibility = 'visible';
        })
    });
})


nmt.addEventListener('mouseout', function() {
    nmd.classList.remove('nmhov');
    nmt.innerText = 'Digital Art'
})


fk.addEventListener('mouseover', function() {
    fk.style.cursor = 'context-menu';
    fk.addEventListener('animationend', function() {
        fk.style.cursor = 'pointer';
        fk.addEventListener('click', function() {
            imtp.style.backgroundColor = 'white'
            imgtyp = 1
            fir = 1;
            las = 9;
            imtp.style.opacity = '0.5'
            loc = 'fkt';
            title.innerText = fktl[imgtyp - 1];
            img.src = 'css_js/misc/fkt/' + imgtyp + '.png';
            imt.appendChild(img);
            img.style.objectFit = 'cover'
            pxpc.style.opacity = 1;
            pxpc.style.visibility = 'visible';
        })
    });
})
var chanstyl = 1;
let thm = document.getElementById('thm');
let tics = document.getElementById('tcs');
tics.style.cursor = 'pointer'
tics.addEventListener('click', function() {
    chanstyl++;
    if (chanstyl > 3) {
        chanstyl = 1;
    }
    changeStyle();
})

function changeStyle() {
    if (chanstyl === 1)
        thm.setAttribute('href', 'css_js/artsy.css');
    else if (chanstyl === 2)
        thm.setAttribute('href', 'css_js/artsycf.css');
    else {
        imtp.style.backgroundColor = 'white'
        thm.setAttribute('href', 'css_js/artsywip.css');
    }
}