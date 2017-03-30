
window.onload= function(){
    const c= document.getElementById('canvas');
    c.width=window.innerWidth;
    c.height=600;
    const ctx = c.getContext('2d');
    const environment = new Environment(c, ctx);
    var info=[];
    var text='';
    $.ajax({
        url:"http://api.open-notify.org/astros.json",
        dataType:'json',
        success: function(response){
            info=response.people;
            console.log(info);


        }


    })
    space();


    function space(){
        ctx.fillRect(0,0,c.width,c.height);
        environment.update();
        environment.render();
        ctx.font="15px Georgia";
        ctx.fillStyle="white";
        for(var i=0;i<info.length;i++){
            text=info[i].name;
            ctx.fillText(text,environment.bgWidth/2,100+20*i);

            }



        window.requestAnimationFrame(space);
    }

}
