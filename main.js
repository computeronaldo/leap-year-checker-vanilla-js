const date = document.querySelector("input");
const submitButton = document.querySelector("button");
const targetDiv = document.querySelector(".target");

let enteredYear = null;

const checkLeapYear = (year) => {
  return year % 400 == 0 || (year % 100 != 0 && year % 4 == 0);
};

submitButton.addEventListener("click", () => {
  enteredYear = parseInt(date.value.split("-")[0]);

  if (isNaN(enteredYear)) {
    alert("Please pick a date first.");
    return;
  }

  const isLeapYear = checkLeapYear(enteredYear);
  if (isLeapYear) {
    targetDiv.innerText = "Yayy your birth year is a leap year 😁";
  } else {
    targetDiv.innerText = "Oops your birth year is not a leap year 😣";
  }
});
