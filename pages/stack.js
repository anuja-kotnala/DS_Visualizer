const btn=document.getElementById("home");
btn.addEventListener("click",function(){
    window.location.href="../home.html";
});


const stackEle= document.getElementById("stack");
const pushBtn= document.getElementById("push");
const popBtn= document.getElementById("pop");
const topBtn= document.getElementById("top");
const resetBtn= document.getElementById("re");
const message=document.getElementById("message");
const inputVal=document.getElementById("inputVal");
const sizeInput=document.getElementById("Size");

let stack=[];


inputVal.addEventListener("keypress", function(e){
    if(e.key==="Enter")pushBtn.click();
});


function render(){
    stackEle.innerHTML="";
    
    stack.forEach((val,index)=>{
        const div=document.createElement("div");
        div.classList.add("block");
        div.innerText=val;

        if(index===stack.length-1){
            div.classList.add("top");
        }
        stackEle.appendChild(div);
    });
}


pushBtn.addEventListener("click",()=>{
    let rawSize=sizeInput.value;

if(rawSize===""){
    message.innerHTML="Enter a valid max size";
    return;
}

maxSize=Number(rawSize);

    if(inputVal.value.trim()===""){
        message.innerText="Enter a value";
        return;
    }

    if(stack.length===maxSize){
        message.innerText="Stack overflow!!"
        return;
    }
    const value=Number(inputVal.value);  

    stack.push(value);
    message.innerText="Pushed "+value;
    render();
    inputVal.value="";
});


popBtn.addEventListener("click",()=>{
    if(stack.length===0){
        message.innerHTML="Stack is Empty";
        return;
    }

    const removed=stack.pop();
    message.innerText="Popped "+removed;
    render();
});

topBtn.addEventListener("click", ()=>{
    if(stack.length===0){
        message.innerText="Stack is empty";
        return;
    }
    message.innerText="Top is "+ stack[stack.length-1];
});

resetBtn.addEventListener("click",()=>{
    stack=[];
    message.innerText="Stack has been cleared";
    render();
});
