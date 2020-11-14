class Bin{
   constructor(x,y,width,hiegth){
      var options = {
       'isStatic': true

      }
      this.bodyb = Bodies.rectangle(x,y,width,hiegth,options);
      World.add(world,this.bodyb);
      this.bodyl = Bodies.rectangle((x-(width/2)),(y-(hiegth*2)),hiegth);
      World.add(world,this.bodyl);
      this.bodyr = Bodies.rectangle((x+(width/2)),(y-(hiegth*2)),hiegth);
      World.add(world,this.bodyr);
      this.bodyb.width = width
      this.bodyb.hiegth = hiegth
   }
   display(){
   fill("white");
   rect(this.bodyb.position.x,this.bodyb.position.y,this.bodyb.width,this.bodyb.hiegth);
   rect((this.bodyb.position.x-(this.bodyb.width/2)),(this.bodyb.position.y-(this.bodyb.width/2)))
   rect((this.bodyb.position.x+(this.bodyb.width/2)),(this.bodyb.position.y+(this.bodyb.width/2)))
 }
}