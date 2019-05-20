let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;
let ctx = canvas.getContext('2d');

playerArray = [];

let mouse = {
    x: undefined,
    y: undefined
};


function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    tick()

    for (let i=0; i < playerArray.length; i++) {
        playerArray[i].update()
    }
}


animate()
