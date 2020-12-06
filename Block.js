
class Block{
    constructor(x,y,width,height){
            var options={
                isStatic:false,
                restitution:0.1,
                density:0.04,
                friction:2
            }
            this.width=width;
            this.height=height;
            this.body=Bodies.rectangle(x,y,width,height,options);
            World.add(world,this.body);
        } 
        display(){
            
            var pos= this.body.position;
            var angle= this.body.angle;

            push();
            strokeWeight(3);
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0,this.width,this.height);
            pop();
        }
    }