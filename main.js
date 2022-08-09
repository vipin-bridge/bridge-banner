
const team1 = document.querySelector("#team1");
const team2 = document.querySelector("#team-2");
const textT1 = document.querySelector("#team1-textbox");
const textT2 = document.querySelector("#team2-text");

function textDisplayNone(){
    textT1.style.visibility ="hidden";
    textT1.style.opacity = 0;
    textT1.style.transform = "translateY(100px)";
    console.log('test');
}


function textDisplay(){
    textT2.style.visibility ="visible";
    textT2.style.opacity = 1;
    textT2.style.transform = "translateX(0)";
    console.log('test');
}
team2.addEventListener("click", function(){
    textDisplay();
    textDisplayNone();
    team1.setAttribute('transform','translate(110,0)');
})