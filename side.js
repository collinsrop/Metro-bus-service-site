"use strict";
let menu =document.querySelector(".menu");
let box = document.querySelector(".box");
menu.onclick=function(){
	menu.classList.toggle("active");
	box.classList.toggle("active");
}
document.onclick=function(e){
    if(!menu.contains(e.target)&& !box.contains(e.target)){
		menu.classList.remove("active");
        box.classList.remove("active");
	}
}
//instagram
let insta=document.querySelector("#insta");
insta.addEventListener("click",()=>{
let linkToOpen1 = "https://www.instagram.com/";
window.open(linkToOpen1, "_blank");
})
//x.com
let tweeter=document.querySelector("#tweeter");
tweeter.addEventListener("click",()=>{
	let linkToOpen2 = "https://x.com";
	window.open(linkToOpen2, "_blank");
})
//whatsapp.com
let whatsapp = document.querySelector("#whatsapp");
whatsapp.addEventListener("click",()=>{
	let linkToOpen3 = "https://whatsapp.com";
	window.open(linkToOpen3, "_blank"); 
})
//mail
let mail = document.querySelector("#mail");
mail.addEventListener("click",()=>{
	let linkToOpen4 = "mailto:";
	window.open(linkToOpen4, "_blank");
})
let pin=document.querySelector("#pins");
pin.addEventListener("click",()=>{
	let linkToOpen5="http//www.pintrest.com"
	window.open(linkToOpen5, "_blank");
});
//time assistant
let hrs= document.querySelector(".hrs");
let mins= document.querySelector(".mins");
let secs= document.querySelector(".secs");
setInterval(()=>{
	hrs.innerHTML = new Date().getHours();
	mins.innerHTML=new Date().getMinutes();
	secs.innerHTML=new Date().getSeconds();
},1000);
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function getWeekdayName() {
  return weekdays[weekdayNumber];
}
//let date1 = new Date();
let weekdayNumber = new Date().getDay();
let weekdayName = getWeekdayName(weekdayNumber);
document.querySelector(".day").innerHTML = weekdayName;
document.querySelector(".day").style.fontSize="20px";
document.querySelector(".time").style.border="2px solid black";
document.querySelector(".time").style.padding="6px";
document.querySelector(".time").style.borderRadius="10px";
