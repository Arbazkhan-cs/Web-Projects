// Function that display the value
const disp = (val)=>{
    document.getElementById("show").value += val
}

// Delete Function
const del = ()=>{
    val = document.getElementById("show").value;
    document.getElementById("show").value = Math.floor(val/10);
}

// Clear Screen Function
function clr() {
    document.getElementById("show").value = ""
}

// Function To Solve The Given Equation
function solve() {
    let x = document.getElementById("show").value;
    let y = math.evaluate(x)
    document.getElementById("show").value = y
}

// This is the function when we are executing the operation by enter key.
var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("show").value
        console.log(x);
        solve();
    }
}

// Adding Sound to the buttons
for(let i=0; i<12; i++){
    document.getElementsByClassName("btnNum")[i].addEventListener('click', ()=>{
                let sound = new Audio('btn_sound.mp3');
                sound.play();
    });
}

// Adding Sound to the Operators Buttons
for(let i=0; i<5; i++){
    document.getElementsByClassName("operator")[i].addEventListener('click', ()=>{
                let sound = new Audio('btn_sound.mp3');
                sound.play();
    });
}

