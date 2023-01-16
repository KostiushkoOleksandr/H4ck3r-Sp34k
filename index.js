
const btn = document.getElementById("btn");
const novva = document.getElementById("main-output");

function myFunction(e) {
    e.preventDefault();
    let input = document.getElementById("user-input").value;
    input = input.toLowerCase()
    let output = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "a") {
            output += 4;
        } else if (input[i] === "e") {
            output += 3;
        } else if (input[i] === "i") {
            output += 1;
        } else if (input[i] === "0") {
            output += 0;
        } else {
            output += input[i];
        }
    }

    novva.textContent = output;
}

btn.addEventListener("click", myFunction);