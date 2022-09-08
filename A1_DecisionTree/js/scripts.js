// convert my decision tree into simple code structure

let check_answer = prompt("Do I have class tomorrow?")

if(check_answer=='yes'){
    let check_answer = prompt("Is is at 9 am?")
    if(check_answer == 'yes'){
        console.log("I need to take the shuttle at 8:05 am.")
        console.log("Set the alarm clock to 7:20 am")
    } else{ let check_answer=prompt("Do I want to spend 20 minutes walking to the Path station?")
            if 
            (check_answer=='yes'){
                console.log("Don't take the shuttle and leave one hour before the class.")
            } else {console.log("Take the shuttle at 9:05 am.")
                    console.log("Set the alarm clock to 8:20 am.")}}
} else {console.log("Stay up late and chill")}