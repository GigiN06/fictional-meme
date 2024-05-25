var al = document.getElementById("a1");
var fc = document.getElementById("face");
var est = 0;
var sh1 = document.getElementsByClassName("s1"),
    sh2 = document.getElementsByClassName("s2"),
    obj = document.getElementById("obj"),
    the = document.getElementById("theme"),
    fig = document.getElementById("fight"),
    ext = document.getElementById("extras"),
    Che = document.getElementById("cheep"),
    bue = document.getElementById("bye"),
    estfnd = document.getElementById("estfnd"),
    mod1 = document.getElementById("et1"),
    win1 = document.getElementById("win1");
var audio, meem,
    pl = 0,
    volume = .5,
    interval = 5;
var opcy = 0.1;
var est = [],
    idName = ['bye', 'cheep', 'extras', 'face', 'mark', 'obj', 'shrine', 'theme', 'fight']
flag = 1;


function estEgg(name) {
    for (i = 0; i < idName.length; i++) {
        if (idName[i] === name) { flag = 1; break; } else { flag = 0; }
    }
    for (i = 0; i < est.length; i++) {
        if (est[i] === name) {
            flag = 0;
            break;
        }
    }
    if (flag === 1) {
        est.push(name);
        opcy += 0.1
        a1.style.opacity = opcy
        al.innerHTML = "You have collected " + est.length + "/9 hidden items"
        estfnd.innerHTML = "Hidden item found " + name + "<br>Remaining " + est.length + "/9"
        mod1.style.opacity = 1;
        mod1.style.visibility = "visible";

    }
}

document.addEventListener('click', function(event) {

    if (!audio) {
        audio = new Audio('css_js/misc/about/bgs/' + event.target.id + '.mp3');
        estEgg(event.target.id);
        audio.currentTime = 0
        window.onload = audio.play();
        audio.volume = .5;
        audio.play();
        audio.addEventListener('ended', function() {
            mod1.style.opacity = 0;
            mod1.style.visibility = "hidden"
        })
        document.addEventListener('click', function(ev) {
            if (!audio.paused || ev.target.id === "cls") {
                var fadeout = setInterval(
                    function() {
                        if (volume >= 0.01) {
                            volume -= 0.01;
                            audio.volume = volume;
                            mod1.style.opacity = volume;
                        } else {
                            audio.pause()
                            clearInterval(fadeout);
                        }
                        mod1.style.opacity = 0;
                        mod1.style.visibility = "hidden"
                    }, interval);
            } else {
                audio = new Audio('css_js/misc/about/bgs/' + ev.target.id + '.mp3');
                estEgg(ev.target.id);
                volume = .5
                audio.volume = volume;
                audio.currentTime = 0;
                audio.play();
            }
        })

    }

    if (est.length >= 9) {
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                document.getElementById('notif').style.opacity = 1;
                document.getElementById('notif').style.visibility = "visible"
            } else {
                document.getElementById('notif').style.opacity = 0;
                document.getElementById('notif').style.visibility = "hidden"
            }
        })
        al.classList.add('ppp')

        al.innerHTML = "You have collected all the hidden items<br>*Press enter to collect reward*"
        window.addEventListener('keyup', e => {

            if (e.key === 'Enter') weiner();

        })
    }
})


function weiner() {
    meem = Math.floor(Math.random() * 7 + 1)
    document.getElementById('victory').innerHTML = "Congratulations You have collected all the secret items in the webpage<br><br><br> "
    win1.style.opacity = 1;
    win1.style.visibility = "visible"
    var img = document.createElement("img");
    img.src = "css_js/misc/about/meme/" + meem + ".jpeg";
    img.style.alignSelf = 'center'
    document.getElementById('victory').appendChild(img);
    var tyxt = document.createElement("p")
    tyxt.innerHTML = "<br><br><br>*Press escape to leave*"
    document.getElementById('victory').appendChild(tyxt)
    if (!audio.paused) {
        audio.pause();
    }
    audio = new Audio('css_js/misc/about/bgs/Flyaway.mp3')
    audio.volume = 1;
    audio.play()
    audio.addEventListener('ended', () => {
        win1.style.opacity = 0;
        win1.style.visibility = "hidden"
    })
    window.addEventListener('keyup', e => {
        if (e.key === 'Escape') {

            if (!audio.paused) {
                audio.pause()
                win1.style.opacity = 0;
                win1.style.visibility = "hidden"
            }
        }
    })

}
