let container = document.querySelector(".container");
let spin = document.querySelector("#spin");
let reset = document.querySelector("#reset");
let result = document.querySelector("#result");
let arrow = document.querySelector(".arrow");
let currentRotation = 0;
let counter = 1;
function f1(){
    currentRotation += Math.floor(Math.random() * 360) + 360;
    container.style.transition = "rotate 5s ease";
    container.style.rotate = `${currentRotation}deg`;
}
function f2(){
    if(counter % 3 == 0){
        spin.disabled = true;
        reset.disabled = false;
    }
}
spin.addEventListener("click", () => {
    if(counter % 2 == 0){
        f1();
        f2();
        ++counter;
    }
    else{
        f1();
        f2();
        ++counter;
    }
});
reset.addEventListener("click", () => {
    container.style.transition = "rotate 0.5s ease";
    container.style.rotate = `0deg`;
    spin.disabled = false;
    reset.disabled = true;
});