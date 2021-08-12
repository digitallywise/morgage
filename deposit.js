const reasonForBuying = document.getElementsByName("reason");
const depositElement = document.getElementById("deposit");
const result = document.getElementById("result");

/*
    This function calcualtes the total deposit required for a mortgage.
*/
function calculateDeposit(depositAmount, propertyPrice) {
    const parsedDepositAmount = Number(depositAmount);
    const parsedPropertyPrice = Number(propertyPrice);

    return parsedDepositAmount / 100 * parsedPropertyPrice;

}

function onSubmitDepositForm() {
  const depositAmount = document.getElementsByName("deposit")[0].value;
  const propertyPrice = document.getElementsByName("price")[0].value;

  const calculatedResult = calculateDeposit(depositAmount, propertyPrice);

  result.innerHTML = `£${calculatedResult.toFixed(2)}`;

  return false;
}

if (reasonForBuying && reasonForBuying.length > 0) {
  reasonForBuying[0].addEventListener("change", function (event) {
    const selectedOption = event.target.value;

    if (selectedOption === "first") {
      depositElement.value = "5";
    } else if (selectedOption === "second") {
      depositElement.value = "15";
    } else {
      depositElement.value = "";
    }
  });
}