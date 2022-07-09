var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
//c is stands for context 
var c=canvas.getContext('2d');

//line

// c.beginPath();
// c.moveTo(00,00);
// c.lineTo(500,00);
// c.lineTo(500,500);
// c.lineTo(00,500)
// c.lineTo(00,00)
// c.strokeStyle="blue";
// c.stroke();

//Arc- Circle

// c.beginPath();
// // c.arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean)
// c.arc(300, 300, 30, 0, Math.PI*22, false);
// c.strokeStyle="red";
// // c.fillStyle='rgba(0,255,0,0.85)';
// c.stroke();

//  multiple circle

// for (let i = 0; i < 100; i++) {
//     var x=Math.random() * window.innerWidth;
//     var y=Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI*22, false);
//     c.strokeStyle="red";
//     c.stroke();
// }

// circle Animation
function circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.draw=function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.strokeStyle='red';
        c.stroke();
        c.fill();
    }
    this.update=function(){
        if (this.x + this.radius > innerWidth || this.x-this.radius<0) {
            this.dx=-this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y-this.radius<0) {
            this.dy=-this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;
        this.draw()
    }
}

var circleArray=[];

for (let i = 0; i <100; i++) {
    var x=Math.random() * (innerWidth-radius*2)+radius;
    var y= Math.random() * (innerHeight-radius*2)+radius;
    // var dx= (Math.random()-0.8)*8;
    // var dy= (Math.random()-0.8)*8;
    var dx= 4;
    var dy= 4;
    var radius=60;
    circleArray.push(new circle(x,y,dx,dy,radius));

}
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}
animate();