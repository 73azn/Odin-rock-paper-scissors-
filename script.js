let arr = ["rock","paper","scissors"]
function getComputerChoice(){
    
    let s = Math.floor(Math.random() * 3)
    return arr[s]
}

function getHumanChoice(){
    return arr[Number(prompt("what is your choice ?\n1:rock\n2:paper\n3:scissors"))-1]
}


const AI_choice = getComputerChoice()
const humanChoice = getHumanChoice()

function check(){
    console.log(`the human are ${humanChoice} the AI are ${AI_choice}`)
    if(AI_choice == humanChoice){
        console.log("Tie")
        return
    }
    

    if(humanChoice == arr[0]){
        if(AI_choice ==arr[1]){
            console.log("you lose and AI won")
            return
        }
       
    }
    if(humanChoice == arr[1]){
        if(AI_choice == arr[2]){
            console.log("you lose and AI won")
            return
        }
        
    }

    if(humanChoice == arr[2]){
        if(AI_choice == arr[0]){
            console.log("you lose and AI won")
            return
        }
    }

    console.log("you won and AI lose")
    

}

check()