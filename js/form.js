class Form{
    constructor(){
        this.input= createInput("Enter Name");
        this.button=createButton("Start");
        this.title=createElement("h1");
        this.greeting=createElement("h2");
        this.reset=createButton("Restart");
}
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.reset.hide();
      
    }

   show(){
      this.title.html("Fruit Catcher Game");
      this.title.position(350,50);
      this.title.style("font-size","70px");
      this.title.style("color","skyblue");
      
      this.input.position(550,200);
      this.input.style("width","200px");
      this.input.style("height","20px");
      this.input.style("background","lavender");

      this.button.position(560,300);
      this.button.style("width","200px");
      this.button.style("height","40px");
      this.button.style("background","lightpink");


      this.reset.position(900,100);
      this.reset.style("width","100px");
      this.reset.style("height","20px");
      this.reset.style("background","lightpink");

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
       player.name= this.input.value();
       playerCount+=1;
       player.index= playerCount;
       player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello "+ player.name);
      this.greeting.position(400,250);
      this.greeting.style("color","white")
      this.greeting.style("font-size","100px")

    })

    this.reset.mousePressed(()=>{
    database.ref("/").update({
        gameState:0,
        playerCount:0
    })
    })
      
   }
}