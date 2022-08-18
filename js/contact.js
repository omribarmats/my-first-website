//Submit button not active until all inputs are filled
const submitBtn = document.getElementById("submit");
const requiredInputs = document.getElementsByClassName("required-inputs");

document.addEventListener("change", function () {
    for (let i = 0; i <= requiredInputs.length - 1; i++) {
        if (requiredInputs[i].value == "") break;
        if (i === requiredInputs.length - 1) submitBtn.removeAttribute("disabled");
    }
});
