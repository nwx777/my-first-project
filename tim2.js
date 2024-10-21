
let a=document.getElementById("info")
let btn=document.getElementById("btn")
btn.onclick=function() {
    a.style.cssText=`
        transform: translate(50%, 50%);
        transition: transform 3s ease-in-out;
    `
}