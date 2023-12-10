const display = document.getElementById ('display'),
$btn = document.querySelectorAll('.btn');
let arr = [];
let accum = null;

function calculate(btnValue) {
    let value = btnValue.innerText;

    if(value === "AC"){
        arr = [];
        display.value = ""
        
    } else if(value === "←"){
        arr.pop();
        display.value = arr.join("");

    } else if(value === "=") {
        display.value = eval(accum);
        arr = []; 

    }    
    else {
        arr.push(value)
        //console.log('arr', arr)//
        accum = arr.join("")
        display.value = arr.join("");
       
    }
}

$btn.forEach(item => item.addEventListener('click', (event) => {
    let btnValue = event.target;
    calculate(event.target);
}))





