let bill = document.querySelector(".input-box1 input");
let buttons = document.querySelectorAll(".tip-selector .buttons button");
let people = document.querySelector(".input-box2 input");

let tipAmount = document.querySelector(".viewer .tip-amount .s-col .money");
let total = document.querySelector(".viewer .total .s-col .money");

let resetbtn = document.querySelector(".viewer #reset")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let billVal = +bill.value;
        let peopleVal = +people.value;
        /* tipAmount = document.querySelector(".viewer .tip-amount .s-col .money");
        total = document.querySelector(".viewer .total .s-col .money"); */
        switch (button.id) {
            case "btn5":
                let tip5 = 0.05*(billVal)/(peopleVal);
                tipAmount.textContent = tip5.toFixed(2);

                let total5 = ((tip5*peopleVal)+billVal)/peopleVal;
                total.textContent = +total5.toFixed(2);
                break;
            case "btn10":
                let tip10 = 0.10*(billVal)/(peopleVal);
                tipAmount.textContent = tip10.toFixed(2);
                let total10 = ((tip10*peopleVal)+billVal)/peopleVal;
                total.textContent = +total10.toFixed(2);
                break;
            case "btn15":
                let tip15 = 0.15*(billVal)/(peopleVal);
                tipAmount.textContent = tip15.toFixed(2);
                let total15 = ((tip15*peopleVal)+billVal)/peopleVal;
                total.textContent = +total15.toFixed(2);
                break;
            case "btn25":
                let tip25 = 0.25*(billVal)/(peopleVal);
                tipAmount.textContent = tip25.toFixed(2);
                let total25 = ((tip25*peopleVal)+billVal)/peopleVal;
                total.textContent = +total25.toFixed(2);
                break;
            case "btn50":
                let tip50 = 0.50*(billVal)/(peopleVal);
                tipAmount.textContent = tip50.toFixed(2);
                let total50 = ((tip50*peopleVal)+billVal)/peopleVal;
                total.textContent = +total50.toFixed(2);
                break;

        }
    })
});

function resetVal() {
    buttons.forEach(button => {
        button.classList.remove("selected");
    })
    tipAmount.textContent = 0.0;
    total.textContent = 0.0;
    people.value = " ";
    bill.value = " ";
}

resetbtn.addEventListener("click",()=> {
    resetVal();
});
resetVal();