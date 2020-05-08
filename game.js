//Team one//
let shotone = document.querySelector("#teamone-numshots")
let goalone = document.querySelector("#teamone-numgoals")
let teamoneshootbutton =document.querySelector("teamone-shoot-button")

//Team two//
let shottwo = document.querySelector("#teamtwo-numshots")
let goalone = document.querySelector("#teamtwo-numgoals")
let teamoneshootbutton =document.querySelector("teamtwo-shoot-button"

//Team one shots and goals//

teamoneshootbutton.addEventListener("click", function() {

    console.log("teamoneshootbutton button clicked");
    let teamonenumshots =Number(shotone.innerHTML) = 1;
    shotone.innerHTML = teamonenumshots

    teamonenumgoals =Number(goalone.innerHTML) = 1;

    if (Math.ramdom() >= 0.5) {
        goalone.innerHTML =teamonenumgoals;
    }

    //Team two shots and goals//

    teamtwoshootbutton.addEventListener("click", function (){

        console.log("teamtwoshootbutton button clicked");
        let teamtwonumshots =Number(shotstwo.innerHTML) + 1;
        shotstwo.innerHTML =teamtwonumshots

        teamtwonumgoals = Number(goalstwo.innerHTML) + 1;

        if (Math.ramdom() >= 0.5) {
            goalstwo.innerHTML = teamtwonumgoals;
        }

        else {goalstwo.innerHTML =teamtwonumgoals;
        }

    )}
