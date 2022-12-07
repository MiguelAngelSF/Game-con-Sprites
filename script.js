const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600
const spriteWidth = 575;
const spriteHeight = 523;
const player = new Image();

player.src = 'shadow_dog.png'

let clic = 0;
let frameX = 0
let frameY = 0
let x = 0;
let y = 0;
let iter = 0;
let maxSpeed = 0;

window.addEventListener('keydown', e => {
    if (e.key == 'ArrowRight') {
        frameY++;
        if (frameY > 9) {
            frameY = 0;
            animateTwo();
            animate();
        } else {
            animateTwo();
            animate();
        }
    }
    if (e.key == 'ArrowLeft') {
        frameY--;
        if (frameY < 0) {
            frameY = 0;
            animateTwo();
            animate();
        } else {
            animateTwo();
            animate();
        }
    }
})

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(player, frameX * spriteWidth, frameY * spriteHeight,
        spriteWidth, spriteHeight,
        0, 0, spriteWidth, spriteHeight);

    if (frameX < iter) frameX++
    else frameX = 0;
    x++;
    requestAnimationFrame(animate);
}

animate();

function animateTwo() {
    if (frameY == 0) iter = 0;
    else if (frameY == 1) iter = 2;
    else if (frameY == 2) iter = 2;
    else if (frameY == 3) iter = 2;
    else if (frameY == 4) iter = 2;
    else if (frameY == 5) iter = 2;
    else if (frameY == 6) iter = 2;
    else if (frameY == 7) iter = 2;
    else if (frameY == 8) iter = 2;
    else if (frameY == 9) iter = 2;
}
