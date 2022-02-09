const header= document.getElementById("container");
header.style.backgroundColor="red";
const classs= document.getElementsByClassName("emergency-tasks")[0];
classs.style.backgroundColor="black";
const hh3= document.querySelectorAll(".no-emergency-tasks h3");
for (let index=0;index<hh3.length;index+=1){
    hh3[index].style.backgroundColor="blue";
}
const foot=document.getElementById("footer-container");
foot.style.backgroundColor="yellow";

