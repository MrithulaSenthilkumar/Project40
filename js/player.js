class Player{
    constructor(){
        // we always write property by using the command called this
        // index= player1, player2  here 1 and 2 is index 
           this.index=null;
           // distance travelled by the player
           this.distance=0;
           // name of the player
           this.name=null;
           // score 
           this.score=0;
 
    }
      
    //  (data)=>{
       //anonyms function == work sholid happen immeditly 
    // }
      getCount(){
      var getPlayerCount= database.ref("playerCount");
      getPlayerCount.on("value",(data)=>{
        playerCount= data.val()
      })
 }
 
 
 
      updateCount(count){
       database.ref("/").update({
          playerCount:count, 
       })
      }
 
      update(){
          // players/player + this.index
          // players/player+ 1  = players/player1
          // players/player+ 2= players/player2
       var playerIndex= "players/player"+  this.index;
       database.ref(playerIndex).set({
           name:this.name,
           distance:this.distance,
           score:this.score,
       })
      }
 
      static getPlayerInfo(){
       // im going to add all the information to allplayer - player1, player2 
       var playerInfo=database.ref("players")
       playerInfo.on("value",(data)=>{
           allPlayer=data.val()
           
       })
      }
 }
 
 
 
 