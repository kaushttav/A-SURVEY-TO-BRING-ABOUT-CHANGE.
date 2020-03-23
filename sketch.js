var button , greeting;
function setup(){
  var canvas = createCanvas(displayWidth/2,displayHeight/2);

  // The First Coloumn

  button = createButton("YES");
  button.position(550,160);
  button.mouseClicked(vote1);
  button = createButton("NO");
  button.position(550,190);
  button.mouseClicked(vote1);
  greeting = createElement("h3");
  greeting.html("Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
  greeting.position(500,100);

  // The Second Coloumn

  button = createButton("YES");
  button.position(550,300);
  button.mouseClicked(vote2);
  button = createButton("NO");
  button.position(550,330);
  button.mouseClicked(vote2);
  greeting = createElement("h3");
  greeting.html("Would you be willing to contribute a small amount every month for such a program?");
  greeting.position(500,250);

  // The Third Coloumn

  button = createButton("100");
  button.position(550,460);
  button.mouseClicked(vote3);
  button = createButton("500");
  button.position(550,490);
  button.mouseClicked(vote3);
  button = createButton("1000");
  button.position(550,520);
  button.mouseClicked(vote3);
  button = createButton("5000");
  button.position(550,550);
  button.mouseClicked(vote3);
  button = createButton("MORE");
  button.position(550,580);
  button.mouseClicked(vote4);
  greeting = createElement("h3");
  greeting.html("How much per month would you be willing to pay?");
  greeting.position(500,400);
  input = createInput("Name");
  input.position(750,50);
  
}
function draw(){

}
function vote1(){
  greeting = createElement("h2");
  greeting.html("VOTED!");
  greeting.position(800,165);
}
function vote2(){
  greeting = createElement("h2");
  greeting.html("VOTED!");
  greeting.position(800,320);
}
function vote3(){
  greeting = createElement("h2");
  greeting.html("THANKS FOR YOUR DONATION! :)");
  greeting.position(700,500);
}
function vote4(){
  input = createInput("AMOUNT PLEASE!");
  input.position(700,500);
  button = createButton("SUBMIT");
  button.position(880,500);
  button.mouseClicked(vote5);
}
function vote5(){
  greeting = createElement("h2");
  greeting.html("THANKS FOR YOUR DONATION! :)");
  greeting.position(700,500);
}