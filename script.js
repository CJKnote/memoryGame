const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

//This function and below were written by Caroline Knote, the rest is starter code.

//init a counter value.
let moveCount = 0;
let firstPick;
let secondPick;

//to prevent clicking a third card before turn is over
let turnFinished = true;


function handleCardClick(event) {
  //let card = event.target
  if(moveCount ==0 && turnFinished){
    firstPick = event.target;
    firstPick.style.backgroundColor = event.target.classList[0];

    //console.log(firstPick);
    moveCount=1;
    turnFinished =true;
  }
  //second conditional disallows double clicking one card and waits until a second card is picked
  else if((moveCount ==1) && event.target!=firstPick &&turnFinished){
    turnFinished =false;
    secondPick = event.target;

    secondPick.style.backgroundColor = event.target.classList[0];

    console.log("first", firstPick.style.backgroundColor);
    console.log("second", secondPick.style.backgroundColor);
    if(firstPick.style.backgroundColor != secondPick.style.backgroundColor ){
      setTimeout(function(){
        //reset
        firstPick.style.backgroundColor = "white";
        secondPick.style.backgroundColor = "white";
        firstPick = undefined;
        secondPick = undefined;
        moveCount = 0;
        turnFinished = true;
      },1000);
    }
    else{
      setTimeout(function(){
        moveCount=0;
        turnFinished=true;
      },1000);
  }
    
    

  }



  
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
}

// when the DOM loads
createDivsForColors(shuffledColors);
