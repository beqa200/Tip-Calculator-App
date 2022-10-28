//variables
let bill = document.querySelector(".bill-input input");
let tips = document.querySelectorAll(".click-tip");
let prices = document.getElementsByClassName("price");
let people = document.querySelector(".people-input input");
let validation = document.querySelector(".validation");
let custom = document.querySelector(".for-flex input");
let reset = document.querySelector(".reset");
let percent = 0;

// main function that calculating tip amount and total amount per person, also styling people input
function calculate() {
  //validation for people number
  if (people.value > 0) {
    const tip =
      "$" + (((percent / 100) * bill.value) / people.value).toFixed(2);
    prices[0].textContent = tip;
    const total =
      "$" +
      ((+bill.value + (percent / 100) * bill.value) / people.value).toFixed(2);
    prices[1].textContent = total;

    people.style.border = "";
    validation.innerHTML = "";
  } else {
    people.style.border = "2px solid #E17052";
    validation.innerHTML = "Can’t be zero";
  }
}

bill.addEventListener("input", () => {
  if (people.value > 0) {
    const tip =
      "$" + (((percent / 100) * bill.value) / people.value).toFixed(2);
    prices[0].textContent = tip;
    const total =
      "$" +
      ((+bill.value + (percent / 100) * bill.value) / people.value).toFixed(2);
    prices[1].textContent = total;

    //not val while making bill input
    people.style.border = "";
    validation.innerHTML = "";
  }

  //reset button styling
  reset.classList.add("for-hover");
  reset.style.cursor = "pointer";
});

//listener function for buttons and input
function event(e) {
  //get tip
  if (e.target.type === "submit") {
    percent = parseInt(e.target.textContent);
  } else {
    percent = parseInt(e.target.value);
    if (e.target.value === "") {
      percent = 0;
    }
  }

  //calculating
  calculate();

  //button click and input styling
  for (var k = 0; k < tips.length; k++) {
    tips[k].style.background = "";
    tips[k].style.color = "";
  }
  custom.style.border = "";
  e.target.style.background = "#26C2AE";
  e.target.style.color = "#00474B";

  //reset button styling
  reset.style.cursor = "pointer";
  reset.classList.add("for-hover");
}

//add listeners to buttons and input
for (var i = 0; i < tips.length; i++) {
  tips[i].addEventListener("click", event);
  tips[i].addEventListener("input", event);
}

//styling for input
function forCustom() {
  for (var k = 0; k < tips.length; k++) {
    tips[k].style.background = "";
  }
  custom.style.border = "2px solid #26C2AE";
}

custom.addEventListener("input", forCustom);
custom.addEventListener("click", forCustom);

people.addEventListener("input", () => {
  calculate();

  //reset button styling
  reset.classList.add("for-hover");
  reset.style.cursor = "pointer";
});

reset.addEventListener("click", () => {
  bill.value = "";
  for (var k = 0; k < tips.length; k++) {
    tips[k].style.background = "";
    tips[k].style.color = "";
  }
  people.value = "";
  prices[0].textContent = "$0.00";
  prices[1].textContent = "$0.00";

  reset.classList.remove("for-hover");
  reset.style.cursor = "";
  people.style.border = "";
  custom.style.border = "";
  custom.value = "";
  validation.innerHTML = "";
});