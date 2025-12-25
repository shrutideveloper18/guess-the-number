let randomNumber = Math.floor(Math.random() * 100) + 1;
let count=0;

function checknumber(){
    usernumber=Number(document.getElementById("num").value)
    count++;
    if(usernumber>100 || usernumber<1){
        document.getElementById("result").innerText="Enter a number between 1 and 100 pls.";
    }
    else if(usernumber>randomNumber){
        document.getElementById("result").innerText="My Number is lower";
    }
    else if(usernumber<randomNumber){
        document.getElementById("result").innerText="My Number is higher";
    }
    else if(usernumber==randomNumber){
    document.getElementById("result").innerText="YOU WIN! \n You guessed it in "+count+" turns.";
    document.getElementById("replayBtn").style.display = "inline-block";
    document.getElementById("result").classList.add("win");
    
     
}

    
    
    
    document.getElementById("num").value = "";

}
function replay(){
    randomNumber = Math.floor(Math.random() * 100) + 1; // new number
    count = 0;
    document.getElementById("result").innerText = "";
    document.getElementById("num").value = "";
    document.getElementById("replayBtn").style.display = "none"; // hide replay again
    alert("New Game Started! Guess again 🎯");

}
