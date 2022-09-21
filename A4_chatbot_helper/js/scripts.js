// chatbot helper

const the_date = new Date()
const [month, day, year] = [the_date.getMonth()+1,the_date.getDate(),the_date.getFullYear()]
const [hour,minute] = [the_date.getHours(),the_date.getMinutes()]
//console.log(the_date)

const ai ={
    date_today : "year: "+year+"  month: "+month + "  day: "+day,
    time_now : hour +":"+ minute,
    other_question: "No idea.",

    checkQuestion(the_question){
          for (const key in the_question){
            //console.log(key + ":"+the_question[key])

            if (the_question[0]== "d"){
                return(this.date_today);
            }
            else if (the_question[0]== "t"){
                return(this.time_now)
            }
            else {
                return(this.other_question)
            }
        }
     }
}

let question = prompt("ask me a one-word question");
let ans = ai.checkQuestion(question);
console.log(ans)