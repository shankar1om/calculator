let operandButtons = document.querySelectorAll(".num-buttons");
let operatorButtons = document.querySelectorAll(".operator-button");
let inputArea = document.querySelector(".input-field");
let evalBtn = document.querySelector("#eval-btn");
let clearBtn = document.querySelector(".clear-button");
let eval = "";
for (let btn of operandButtons) {
    btn.addEventListener("click", function () {
        eval += btn.textContent;
        inputArea.textContent = eval;
        console.log("hello");
    });
}
for (let opBtn of operatorButtons) {
    opBtn.addEventListener("click", function () {
        eval += opBtn.textContent;
        inputArea.textContent = eval;
        console.log("op hello");
    });
}
evalBtn.addEventListener("click", function () {
    let temp = checkInfinity(eval);
    let isValid = checkValidity(eval);
    if (temp || isValid) {
        alert("your expression leads to infinity enter valid expression !!!");
        eval = "";
        inputArea.textContent = eval;
    } else {
        eval = new Function('return ' + eval)();
        inputArea.textContent = eval;
        console.log("final");
    }
})
clearBtn.addEventListener("click", function () {
    eval = "";
    inputArea.textContent = eval;
    console.log("cleared");
});

function checkInfinity(exp) {
    if (eval.includes("/")) {
        let idx = exp.indexOf("/");
        if (exp[idx + 1] == "0") {
            return true;
        } else {
            return false;
        }
    }
}
function checkValidity(exp) {
    let operators = ["+", "-", "/", '*']
    if (operators.includes(exp[exp.length - 1])) {
        alert("oh! pls enter valid exp[ression !!");
        eval = "";
        inputArea.textContent = eval;
        return true;
    } else {
        for (let i = 0; i < exp.length; i++) {
            if (operators.includes(exp[i]) && operators.includes(exp[i + 1])) {
                alert("oh! plss enter valid exp[ression !!");
                eval = "";
                inputArea.textContent = eval;
                return true;
            }
        }
    }
    return false;
}