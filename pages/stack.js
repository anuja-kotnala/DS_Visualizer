const btn=document.getElementById("home");
btn.addEventListener("click",function(){
    window.location.href="../home.html";
});


const stackEle= document.getElementById("stack");
const pushBtn= document.getElementById("push");
const popBtn= document.getElementById("pop");
const topBtn= document.getElementById("top");
const resetBtn= document.getElementById("re");

let stack=[];
