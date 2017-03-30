
const c= document.getElementById('canvas');
c.width=window.innerWidth;
c.height=600;
const ctx = c.getContext('2d');
var text='';



window.onload= function(){
    const environment = new Environment(c, ctx);
    // const move = new Move(move.x,move.y,ctx);

    var info=[];

    $.ajax({
        url:"http://api.open-notify.org/astros.json",
        dataType:'json',
        success: function(response){
            info=response.people;
            console.log(info);


        }


    })
    space();

    var i=0;
    function space(){
        ctx.fillRect(0,0,c.width,c.height);
        environment.update();
        environment.render();
        ctx.save();
        ctx.translate(c.width/ 2,c.height/ 2);
        ctx.rotate(i / 800);
        ctx.translate(100, 0);
        ctx.font="15px Georgia";
        ctx.fillStyle="white";
        for(var j=0;j<info.length;j++){
            text=info[j].name;
            ctx.fillText(text,environment.bgWidth/50,60+20*j);

            }


            ctx.restore();

            i++;


        window.requestAnimationFrame(space);
    }
     window.requestAnimationFrame(space);

}
