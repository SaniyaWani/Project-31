class Plinko{
    constructor(x,y){
    var options ={
        restitution:0.4,
        isStatic:false

        
    } 
    
    this.body=Bodies.circle(x,y,10,options);
    this.colour=color(random(0,225), random(0,225), random(0,225));
    World.add(world,this.body);
    
    
    }
    display(){

        var pos =this.body.position;
        var angle=this.body.angle;

     

      
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.colour);
        ellipseMode(RADIUS);
        ellipse(0,0,10,10);
        pop();
      
      
      
      
       
    
    
        
    
    
    
    }
    
    
    }