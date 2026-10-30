class Ball{
    constructor(x,y,color){
        this.x=x;
        this.y=y;
        this.color=this.randomColor();
        this.radius=30;
    }
    draw(canvas){
        let ctx=canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fillStyle=this.color;
        ctx.fill();
    }
    randomColor(){
        let x=Math.floor(Math.random()*255);
        let y=Math.floor(Math.random()*255);
        let z=Math.floor(Math.random()*255);
        return `rbg(${x},${y},${z})`;
    };
}