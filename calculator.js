 window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() { 
  const values = { amount: 10000,  years: 10, rate: 4.5};
  const amountUI = document.querySelector("#loan-amount");
  const yearsUI = document.querySelector("#loan-years");
  const rateUI = document.querySelector("#loan-rate");
    amountUI.value = values.amount;
    yearsUI.value = values.years;
    rateUI.value = values.rate; 
  
           update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
   
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    const rate = (values.rate / 100) / 12;
    const numOfPayments = Math.floor(values.years * 12);

    return (
      (values.amount * rate) /
      (1 - (1 + rate) ** -numOfPayments)).toFixed(2);
      
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentUI = document.querySelector("#monthly-payment");
  monthlyPaymentUI.innerText = `${'$' + monthly}`
}
