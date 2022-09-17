// 1. Create a function that searches a string and find if it contains a pattern. eg. life

const my_quote = "The answer of the Great Queation of Life, the Universe and Everything is Forty-two";

function findMatch(string,pattern){
    //write your search code and reture yes/no
    // for(word of string) {
    //     if (word === pattern){
    //         reture("yes")
    //     }
    // }
    let word = string.search(pattern);
    if(word){ return(console.log("yes"))}
}

let out = findMatch(my_quote,"life");
console.log (out)



// 2. when match found, provide a callback that changes that matched part of the string in some way eg. make it all uppercase or wraps it quotes

function findMatch2(string, pattern, callb){
	//write your search code and return yes/no
	//if match found, run callback to it
    let word = string.search(pattern);
    
    if(word) {
        console.log(callb(pattern));

    } else{
        console.log("not working")
    } 
}


function callb_function(str){
    return(str.toUpperCase());
}


findMatch2(my_quote,"life",callb_function);