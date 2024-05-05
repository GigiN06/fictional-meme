let cass = document.getElementById("pp");
let m1 = document.getElementById("m1");
let cls = document.getElementById("close");
let pp = document.getElementById("spty");
let sel = document.getElementById("pltxt");
let movl = document.getElementById("mov");
let movr = document.getElementById("mov1");
let modal = document.getElementById("imt");
let img = document.createElement("img");
let title = document.getElementById("title");
let desc = document.getElementById("des");
let imt = document.getElementById("imty");
var imgtyp = 1;
var audio = new Audio;
var loc;
var arw = 0;
var fir, las;
var gencol = ['#7a5677', ' #402e30', '#bb283c']
var genst = ['lofi', 'break', 'met']
var genttl = ['Lo-Fi', 'BreakCore', 'Metal']
window.onSpotifyIframeApiReady = (IFrameAPI) => {

};


modal.addEventListener('mouseover', function() {
    modal.style.opacity = 1
    title.style.opacity = 1;
    title.style.visibility = 'visible';
    desc.style.opacity = 1;
    desc.style.visibility = 'visible';
    movl.style.opacity = 0;
    movr.style.opacity = 0;
    modal.style.opacity = 1;
})
modal.addEventListener('mouseout', function() {
    modal.style.opacity = 0.5;
    title.style.opacity = 0;
    title.style.visibility = 'hidden';
    desc.style.opacity = 0;
    desc.style.visibility = 'hidden';
    movl.style.opacity = 1;
    movr.style.opacity = 1;
    modal.style.opacity = 0.3;
})
cls.addEventListener('click', function() {
    m1.style.opacity = 0;
    m1.style.visibility = 'hidden'
    arw = 0;
    audio.pause();
    sel.innerText = 'Insert';
})

sel.addEventListener('click', function() {
    pp.src = '';
    sel.innerText = '';
    audio.src = 'css_js/misc/genre/m' + imgtyp + '.mp3';
    audio.load();
    arw = 1;
    audio.volume = 0.3;
    audio.play();
    m1.style.opacity = 1;
    m1.style.visibility = "visible"
    fir = 1;
    las = 3;
    modal.classList.add("lofi");
    modal.style.opacity = '0.5'
    loc = 'genre';
    title.innerText = genttl[imgtyp - 1]
    img.src = 'css_js/misc/genre/' + imgtyp + '.png';
    imt.appendChild(img);
    img.classList.add("anipl");
    img.addEventListener('mouseover', function() {
        img.classList.remove("anipl");
        img.src = 'css_js/misc/' + loc + '/' + imgtyp + 'h.gif';
        imt.appendChild(img);
        audio.volume = 0.6;
        modal.classList.remove(genst[imgtyp - 1]);
        modal.style.backgroundColor = gencol[imgtyp - 1];
    })
    img.addEventListener('mouseout', function() {
        audio.volume = 0.3;
        img.src = 'css_js/misc/' + loc + '/' + imgtyp + '.png';
        imt.appendChild(img);
        modal.classList.add(genst[imgtyp - 1]);
    })
    img.addEventListener('click', function() {
        m1.style.opacity = 0;
        m1.style.visibility = 'hidden'
        arw = imgtyp + 1;
        audio.pause();
        sel.innerText = genttl[imgtyp - 1]
        sngc = 0;
        pp.src = song[arw - 2][sngc];
    })

});





window.addEventListener('keyup', event => {
    if (arw === 1) {
        if (event.key === 'ArrowLeft') {
            if (imgtyp === fir) {
                modal.classList.remove(genst[fir - 1])
                imgtyp = las;
                modal.classList.add(genst[las - 1])
                changeImageg();
            } else {
                modal.classList.remove(genst[imgtyp - 1])
                imgtyp--;
                modal.classList.add(genst[imgtyp - 1])
                changeImageg();
            }
        } else if (event.key === 'ArrowRight') {
            if (imgtyp === las) {
                modal.classList.remove(genst[las - 1])
                imgtyp = fir;
                modal.classList.add(genst[fir - 1])
                changeImageg();
            } else {
                modal.classList.remove(genst[imgtyp - 1])
                imgtyp++;
                modal.classList.add(genst[imgtyp - 1])
                changeImageg();
            }

        }
    }
});


function changeImageg() {
    if (arw === 1) {
        if (loc === 'genre') {
            img.classList.add("anipl");
            title.innerText = genttl[imgtyp - 1];
            modal.remove = gencol[imgtyp - 1];
        }

        audio.src = 'css_js/misc/genre/m' + imgtyp + '.mp3';
        audio.load();
        audio.volume = 0.3;
        audio.play();
        img.src = 'css_js/misc/' + loc + '/' + imgtyp + '.png';
        imt.appendChild(img);
    }
}

audio.addEventListener('ended', function() {
    audio.currentTime = 0;
    audio.play();
})

var song = [
    ['https://open.spotify.com/embed/track/6eqJgmBGMs4L3mc2ffYsPv?utm_source=generator', 'https://open.spotify.com/embed/track/3maoWBYRMQdKm7tUqaCRs9?utm_source=generator', 'https://open.spotify.com/embed/track/72j1jY006wieT3AdwLdLFl?utm_source=generator', 'https://open.spotify.com/embed/track/5LWPoN6kTetRM7t6jYVaEO?utm_source=generator', 'https://open.spotify.com/embed/track/5nCuMtT4a5VPtx8FydbbnA?utm_source=generator'],
    ['https://open.spotify.com/embed/track/4YVzvyYEu9D35JlBs4GVfi?utm_source=generator', 'https://open.spotify.com/embed/track/197NViGw2gfXEKMJEQFWPE?utm_source=generator', 'https://open.spotify.com/embed/track/5gTGFOB8RIihsPxfIC0OtH?utm_source=generator', 'https://open.spotify.com/embed/track/6bVOt7v3VjCCbmx17bgSEv?utm_source=generator', 'https://open.spotify.com/embed/track/30DnockD2UyU4uiwlCjc9L?utm_source=generator'],
    ['https://open.spotify.com/embed/track/5ckPzLLUUjNJsTeYoqsauw?utm_source=generator', 'https://open.spotify.com/embed/track/5ghMfHMHakVS0omjj2cBSA?utm_source=generator', 'https://open.spotify.com/embed/track/1Xg7jlby9SeGLiHYyeq2Ya?utm_source=generator', 'https://open.spotify.com/embed/track/27fezkZZsAqAenj5QLbA3C?utm_source=generator', 'https://open.spotify.com/embed/track/2UmeEtzkKhjs1qLlODXU1I?utm_source=generator']
];
var ls = 4;
var sngc = 0;

srgt.addEventListener('click', function() {
    if (arw >= 2) {
        console.log(arw);
        sngc++;
        if (sngc > ls)
            sngc = 0
        changeSong();
    }
})
slft.addEventListener('click', function() {
    if (arw >= 2) {
        sngc--;
        if (sngc < 0)
            sngc = ls;
        changeSong();
    }
})

function changeSong() {
    pp.src = song[arw - 2][sngc];
}