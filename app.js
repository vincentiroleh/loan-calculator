// Listen for submit
const loanForm = document.querySelector('#loan-form');
loanForm.addEventListener('submit', calculateResults);


// Calculate Results 
function calculateResults(e) {

    // UI VARS
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterested = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterested, calculatedPayment);
    const monthly = (principal * x * calculatedInterested) / (x - 1);

    if(isFinite(monthly)) {
        monthlyPayment.value= monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly* calculatedPayment)-principal).toFixed(2);
    } else {
        showError('Pleas check your numbers');
    }

    e.preventDefault();
}

// Show Error Message
const showError = (error)=> {
    // Create a div
    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add class
    errorDiv.className = 'alert alert-danger';

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 2 seconds
    setTimeout(clearError, 2000);

}

// clear error 
const clearError = ()=> {
    document.querySelector('.alert').remove();
}