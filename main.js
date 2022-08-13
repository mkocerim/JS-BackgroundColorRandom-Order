const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const colors = ["black","green", "blue", "red", "pink", "yellow","#4287f5","#5c24b5", "#b5247d", "#fff" ];
const colorss = ["gray", "lightgreen", "lightblue","lightred","#d1a5c0", "#d1bea5", "#d1c7a5","#d0d1a5", "#b5d1a5","#a5d1ad","#a5d1c7", "#a6dde3", "#a6c3e3","#c0a6e3" ]
btn1.addEventListener("click", changeBackground);
btn1.addEventListener("click", changeButtonColor);



function changeBackground( ){

const rndmZahl= Math.floor(Math.random() * colors.length);
const chosenColor = colors[rndmZahl]; 

console.log(rndmZahl,chosenColor);

div1.style.backgroundColor = chosenColor;
btn1.style.color =chosenColor;

}
function changeButtonColor(){
 
 const rndmZahl1 = Math.floor(Math.random()* colorss.length);
 
 const chosenColors = colorss[rndmZahl1];

 console.log(rndmZahl1,chosenColors);

 
btn1.style.backgroundColor = chosenColors;

}
btn2.addEventListener("click", changeBackgroundOrder);
btn2.addEventListener("click", changeButtonColorOrder);

let ordr = 0;


function changeBackgroundOrder(){
    ordr++;
    if (ordr == colors.length) ordr = 0;
    const chosenColor1 = colors[ordr];
    console.log(ordr,chosenColor1);
    div2.style.backgroundColor = chosenColor1;
    btn2.style.color =chosenColor1;
}
function changeButtonColorOrder(){
    
  
    const chosenColors1 = colorss[ordr];
    console.log(ordr,chosenColors1);

  
}
    

