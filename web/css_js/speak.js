const font = new FontFace("myFont", "url(css_js/font/rg.ttf)", {
    style: "normal",
    weight: "400",
    stretch: "condensed",
});
font.load();
document.fonts.add(font);
document.body.classList.add("fonts-loaded");

var text;
let i = 1;
let char;



function speak() {
    let fps = 100 + Math.random() * 10;
    char = text.substring(0, i);
    cc.clearRect(0, can.height / 1.5, can.width, can.height / 1.5);
    cc.beginPath();
    cc.fillStyle = 'black';
    cc.rect(0, can.height / 1.5, can.width, can.height / 1.5);
    cc.fill();
    cc.font = "20px myFont ";
    cc.fillStyle = 'white'
    cc.fillText(char, 150, can.height / 1.3);
    if (i <= text.length) {
        setTimeout(speak, fps)
        i++
    }
}