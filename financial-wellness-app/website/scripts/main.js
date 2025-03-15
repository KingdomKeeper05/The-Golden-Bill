// This file contains the JavaScript code for the website, handling user interactions and dynamic content.

document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = 'Welcome to the Financial Wellness App!';

    const calculateButton = document.getElementById('calculate-button');
    calculateButton.addEventListener('click', calculateSavings);

    function calculateSavings() {
        const amountInput = document.getElementById('amount-input').value;
        const interestRateInput = document.getElementById('interest-rate-input').value;
        const yearsInput = document.getElementById('years-input').value;

        const amount = parseFloat(amountInput);
        const interestRate = parseFloat(interestRateInput) / 100;
        const years = parseInt(yearsInput);

        if (!isNaN(amount) && !isNaN(interestRate) && !isNaN(years)) {
            const futureValue = amount * Math.pow((1 + interestRate), years);
            const resultMessage = `In ${years} years, your investment will grow to $${futureValue.toFixed(2)}.`;
            document.getElementById('result-message').textContent = resultMessage;
        } else {
            document.getElementById('result-message').textContent = 'Please enter valid numbers.';
        }
    }
});