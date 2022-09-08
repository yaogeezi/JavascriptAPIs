// 1. Conditions:
// Define a number variable (can be random) and then create a condition to check if that variable  is odd or even.  
// (This is the same exercise we worked during class. - I have added it here so everyone can complete and submit). 

let random_number = Math.floor(Math.random()*100)
//console.log(random_number)

if(random_number%2){
    // this number is odd
    console.log("number ",random_number," is odd.")
} else {
    // this number is even
    console.log("number ",random_number," is even.")
}


// 2. Conditions/Random:
// Use the below rolling dice generator to create a random number between 1 and 6. 
// Then write a condition (or conditions) to check that number and do something for each check 
// eg. return the value back to console using console.log(...). Consider using the switch operator for it.

let diceNum = Math.ceil(Math.random()*6)
console.log(diceNum)

switch(diceNum){
    case(1):
    console.log("You rolled a 1. Very sad.");
    break;

    case(2):
    console.log("You rolled a 2. Sad.");
    break;

    case(3):
    console.log("You rolled a 3. Soso");
    break;

    case(4):
    console.log("You rolled a 4. Aha");
    break;

    case(5):
    console.log("You rolled a 5. Wow");
    break;

    case(6):
    console.log("You rolled a 6. Yeah!");
    break;
}


// 3. Loops:
// Use the same random dice generator as above to generate a number between 1 and 6. 
// Now create a loop that keep rolling until the number generated is more than 3. 
// As soon as you get a number more than three, the loop should end. 
// Output how many times the loop ran before it reached this number. 
// Be careful with this - if you create a loop that has no way to end (due to a faulty check), it will easily crash your browser!

// Question!!! sometime it shows "I rolled  0  times."

let dice = Math.ceil(Math.random()*6);
let times = 0;

while(dice<=3){
    dice = Math.ceil(Math.random()*6);
    console.log(dice);
    times++;
}

console.log("I rolled ",times," times.");







// 4.  Loops:
// Find the factorial (Links to an external site.) of a random number using loops. 
// Start with a number (random or fixed) and find its factorial. 
// A factorial is a number you get by multiplying all the numbers preceding it, 
// starting with 1 eg. factorial of 5 is 1  * 2 * 3 * 4 * 5 = 120.

let num = Math.ceil(Math.random()*12);
let factorial = 1;
console.log("Number: ",num);

while (num>0){
    factorial= factorial * num;
    num--; 
}

console.log("Its factorial is ",factorial);




// 5. Loops
// Using loops , create a triangular pattern (using console.log statements only for now) like this:
// #
// ##
// ###
// ####


let my_array = [];

for(let i = 0; i<4; i++){
    my_array[i]="#"
    console.log(my_array);
}



// 6. Loops and Conditions:
// Using more loops and conditions, create a chess board using # and space ' ' using console.log statements. 
// You could consider using a loop inside a loop to create the alternative pattern. 
// A chess board  has  8 x 8 = 64 squares.

let board1 = ["  #   #   #   #"];
let board2 = ["#   #   #   #   "];

for(i=0;i<8;i++){
    if(i%2){
        console.log(board1);
    } else{
        console.log(board2);
    }
}





