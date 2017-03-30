const Environment = function(c, ctx){
  this.c = c;
  this.ctx = ctx;
  this.bgPos = 0;
  this.fgPos = 0;
  this.bgSpeed = 0.2;
  this.bgWidth = 882;
  this.bgheight=600;
  this.bgImg = document.getElementById('bgpic');
  this.earthpic=document.getElementById('earthpic');
};
Environment.prototype.update = function(){
    this.bgPos -= this.bgSpeed;
    if (this.bgPos < -this.bgWidth)
    this.bgPos = 0;
};
Environment.prototype.render = function(){
  for(let i =0; i <= this.c.width/this.bgWidth+1; i++)
    this.ctx.drawImage(this.bgImg, this.bgPos+i*this.bgWidth, 0);
     this.ctx.drawImage(this.earthpic,(this.bgWidth/2)-128,(this.bgheight/2)-128);

};
