/*

Create a Dice object

create a "side" property that can be changed on definition

create a method that rolls the dice and returns a number between 1 and the side.
—---
create 2 instances of dice, one with 6 sides and one with 12 sides and run the methods on each.

*/

const dice = {
    side: 6,
    roll(){
        return(Math.ceil(Math.random()*this.side))
    }
}

console.log("the firt dice rolls at "+ dice.roll())



class Dice {
    constructor(side= 3){
        this.side = side;
    }

    roll(){
        return(Math.ceil(Math.random()*this.side))
    }
}

let dice1 = new Dice(6)
let dice2 = new Dice(12)

console.log("the 6-side dice rolls at "+dice1.roll());
console.log("the 12-side dice rolls at "+dice2.roll());

