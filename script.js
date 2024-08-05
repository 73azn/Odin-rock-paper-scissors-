let arr = ["rock","paper","scissors"]
function getComputerChoice(){
    
    let s = Math.floor(Math.random() * 3)
    return arr[s]
}

function getHumanChoice(){
    return arr[Number(prompt("what is your choice ?\n1:rock\n2:paper\n3:scissors"))-1]
}


let AI_choice
let humanChoice 
let humanScore = 0;
let AI_score = 0;
function check(){
    if(humanChoice == undefined || humanChoice>3){
        console.log("invalid input")
        return
    }
    console.log(`the human are ${humanChoice} the AI are ${AI_choice}`)
    if(AI_choice == humanChoice){
        console.log("Tie")
        return
    }

    if(humanChoice == arr[0]){
        if(AI_choice ==arr[1]){
            console.log("you lose and AI won")
            AI_score++
            return
        }
       
    }
    if(humanChoice == arr[1]){
        if(AI_choice == arr[2]){
            console.log("you lose and AI won")
            AI_score++
            return
        }
        
    }

    if(humanChoice == arr[2]){
        if(AI_choice == arr[0]){
            console.log("you lose and AI won")
            AI_score++
            return
        }
    }

    console.log("you won and AI lose")
    humanScore++
}
console.log("best of 3")
while(humanScore < 3 && AI_score <3){
AI_choice = getComputerChoice()
humanChoice = getHumanChoice()
check()
console.log(`human score ${humanScore} AI score ${AI_score}`)

}
