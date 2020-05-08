// initiate the canvas variable
var canvas;
var answer = [];
var database;
var voterIndex;
var voterCount;
var voteState;
function setup(){
  // create the canvas
  canvas = createCanvas(1200,200);
  // canvas.parent("#canvascontainer");
  
  // create the form
  form = new Form();
  select("#nameInput");
  select("#emailInput");
  voter = new Voter();
  vote = new Vote();
  
  database = firebase.database();
}
function draw(){
  vote.getState();
  
  fill("red");
  textSize(32);
  text("Please click on 'Submit' button to vote");
  voter.getCount();
  form.display();
}