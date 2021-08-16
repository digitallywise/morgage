const applicants1Element = document.getElementById("applicants1");
const applicants2Element = document.getElementById("applicants2");
const application2Wrapper = document.getElementById("income2-wrapper");
const result = document.getElementById("result");

/*
  This function calcualtes total amount yearly required for a mortgage income 1
*/
function calculateIncomeTotal(amount, duration) {

  const parsedAmount = Number(amount);

  if(duration === "yearly") {
    return parsedAmount;
  } else if(duration === "monthly") {
    return parsedAmount * 12;
  } else {
    return 0;
  }

}

/*
    This function handles the form submit of mortgage calculator
    
*/
function onSubmitMortgageForm() {

  const income1 = document.getElementsByName("income1")[0].value;
  const income1duration = document.getElementsByName("income1duration")[0].value;

  const income2 = document.getElementsByName("income2")[0].value;
  const income2duration = document.getElementsByName("income2duration")[0].value;

  const expenditure = document.getElementsByName("expenditure")[0].value;
  const expenditureDuration = document.getElementsByName("expenditureduration")[0].value;

  const deposit = document.getElementsByName("deposit")[0].value;

  const income1TotalAmount = calculateIncomeTotal(income1, income1duration);
  const income2TotalAmount = calculateIncomeTotal(income2, income2duration);
  const totalExpenditure = calculateIncomeTotal(expenditure, expenditureDuration);
  
  const totalBorrowingAvailable = (income1TotalAmount + income2TotalAmount) * 5;
  const totalDeposit = Number(deposit);
  const calculatedResult = totalBorrowingAvailable - totalDeposit - totalExpenditure;

  result.innerHTML = `£${calculatedResult.toFixed(2)}`;


  return false;
}

if (applicants1Element) {
  applicants1Element.addEventListener("click", function () {
    document.getElementsByName("income2")[0].value = "";
    application2Wrapper.style.display = "none";
  });
}

if (applicants2Element) {
  applicants2Element.addEventListener("click", function () {
    application2Wrapper.style.display = "block";
  });
}
