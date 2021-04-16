class Game{
    constructor(){

    }

    getState(){
        var getStateRef=database.ref("gameState");
        gameStateRef.on("value",function (data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref("/").update({
        gameState:state
        })
    }

    async start(){
        if(gameState===0){
           player=new Player();
           var plaerCountRef=await database.ref("playerCount").once("value");
           if(playerCountRef.exists()){
              playerCount=plaerCountRef.val();
              player.getCount();
           }
           form=new Form();
           form.display();  
        }

        player1=createSprite(200,500);
        player1=
    }
}