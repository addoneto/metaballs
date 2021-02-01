let canvas, ctx, width, height;

let balls = new Array();
const BALLS_COUNT = 15;

window.onload = () => {
    canvas = document.getElementsByTagName('canvas')[0];
    ctx = canvas.getContext('2d');

    //width  = window.innerWidth;
    //height = window.innerHeight;
    width = 900;
    height = 600;

    canvas.width = width;
    canvas.height = height;

    for(let i = 0; i < BALLS_COUNT; i++){
        let radius = random(5, 30);
        balls.push(new Ball(Math.floor(random(radius + 10, width - radius - 10)), Math.floor(random(radius + 10, height - radius - 10)), radius));
    }

    update();
}

function update(){

    canvasImg = ctx.getImageData(0, 0, canvas.width, canvas.height);
    pixels = canvasImg.data;

    for(x = 0; x < canvasImg.width; x++){
        for(y = 0; y < canvasImg.height; y++){
            pixelIndex = (x + y * canvasImg.width) * 4;

            let sumColor = 0;

            for(ball of balls){
                let dist = distance(x, y, ball.pos.x, ball.pos.y);
                sumColor += 100 * ball.radius / dist;
            }

            let color = sumColor;

            pixels[pixelIndex + 0] = color;
            pixels[pixelIndex + 1] = color;
            pixels[pixelIndex + 2] = color;
            pixels[pixelIndex + 3] = 255;
        }
    }

    ctx.putImageData(canvasImg, 0, 0);

    for(ball of balls){
        ball.update();
        // ball.draw();
    }

    requestAnimationFrame(update)
}

function distance(_x1, _y1, _x2, _y2){
    return Math.sqrt( (_x2 - _x1) * (_x2 - _x1) + (_y2 - _y1) * (_y2 - _y1) );
}

class Ball {
    constructor (_x, _y, _r) {
        this.pos = {x: _x, y: _y};
        this.radius = _r;
        this.vel = {x: random(-2,2), y: random(-2,2)};
    }

    update(){
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;

        if(this.pos.x + this.radius > width || this.pos.x - this.radius < 0){
            this.vel.x *= -1;
        }

        if(this.pos.y + this.radius > height || this.pos.y - this.radius < 0){
            this.vel.y *= -1;
        }
    }

    draw(){
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'green';
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
    }
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}
  