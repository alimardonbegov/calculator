console.log("index js is working");

const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");
let displayValue = "0";
let pendingValue;
let evalStringArray = [];

for (const button of buttons) {
    button.addEventListener("click", function (event) {
        const value = event.target.dataset.value;

        if (value === "+" || value === "-" || value === "*" || value === "/" || value === ".") {
            pendingValue = displayValue;
            displayValue = "0";
            evalStringArray.push(pendingValue);
            evalStringArray.push(value);
        } else if (value === "=") {
            evalStringArray.push(displayValue);
            const evaluation = eval(evalStringArray.join(" "));
            displayValue = evaluation + "";
            evalStringArray = [];
        } else if (value === "C") {
            displayValue = "0";
            pendingValue = undefined;
            evalStringArray = [];
        } else {
            displayValue === "0" ? (displayValue = value) : (displayValue += value);
        }

        display.textContent = displayValue;
    });
}
