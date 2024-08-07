let arr = ["rock","paper","scissors"]
let indexer = 0;
function getComputerChoice(){
    
    let s = Math.floor(Math.random() * 3)
    return arr[s]
}


function changeHumanChoice(){
    let select = document.querySelector(".select")
    select.textContent = arr[indexer%3]
    indexer++
}
function getHumanChoice(){
    let select = document.querySelector(".select")

    return select.textContent
}



let humanScore = 0;
let AI_score = 0;


function check(){
   
    let AI_choice = getComputerChoice()
    let humanChoice = getHumanChoice()
    if(humanChoice=="🫥"){
        
        return
    }
    
    document.querySelector(".player.ai").firstChild.textContent = AI_choice
    
    
    if(AI_choice == humanChoice){
        console.log("Tie")
        humanScore++
        AI_score++
        update()
        return
    }

    if(humanChoice == arr[0]){
        if(AI_choice ==arr[1]){
            console.log("you lose and AI won")
            AI_score++
            update()
            return
        }
       
    }
    if(humanChoice == arr[1]){


        if(AI_choice == arr[2]){
            console.log("you lose and AI won")
            AI_score++
            update()
            return
        }
        
    }

    if(humanChoice == arr[2]){
        if(AI_choice == arr[0]){
            console.log("you lose and AI won")
            AI_score++
            update()
            return
        }
    }

    console.log("you won and AI lose")
    humanScore++
    update()

}

function reset(){
    AI_score =0
    humanScore = 0
    let ai = document.querySelector("#ai-Score")
    let hu = document.querySelector("#hu-Score")

    ai.textContent = AI_score
    hu.textContent = humanScore
}

function update(){
    if(AI_score>=5 && humanScore>=5){
        alert("tie match")
        reset()
        return
    }
    if(humanScore>=5){
        alert("you won the match")
        reset()
        return
    }
    else if(AI_score>=5){
        alert("the AI won the match")
        reset()
        return
    }
    
    let ai = document.querySelector("#ai-Score")
    let hu = document.querySelector("#hu-Score")

    ai.textContent = AI_score
    hu.textContent = humanScore


}


