const emailInput = document.getElementById("email");
const emailError = document.getElementById("requiredEmail");
const emptyError = document.getElementById("requiredError");
const icon = document.getElementById("button");
const icon2 = document.getElementById("button2");
const mainDiv = document.getElementById("main");
const thanksDiv = document.getElementById("thanks");
const emailEnteredSpan = document.getElementById("emailEntered");

function updateEmailEntered() {
  emailEnteredSpan.textContent = emailInput.value;
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function showThanksDiv() {
  mainDiv.style.display = "none";
  thanksDiv.style.display = "grid";
}

function dissmissThanksDiv() {
  mainDiv.style.display = "grid";
  thanksDiv.style.display = "none";
  location.reload();
}

function checkError() {
  if (emailInput.value === "") {
    emailInput.classList.add("blankError");
    emptyError.style.display = "block";
  } else if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("blankError");
    emailError.style.display = "block";
  } else {
    showThanksDiv();
  }
}

function clearErrors() {
  emailInput.classList.remove("blankError");
  emailError.style.display = "none";
  emptyError.style.display = "none";
}

function main() {
  clearErrors();
  checkError();
}

emailInput.addEventListener("input", updateEmailEntered);
icon.addEventListener("click", main);
icon2.addEventListener("click", dissmissThanksDiv);

email.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    main();
  }
});
