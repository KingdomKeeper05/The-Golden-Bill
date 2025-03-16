// Get all input elements
const budgetForm = document.getElementById('budgetInfo');
const salaryInput = document.getElementById('salary');
const savingsGoalInput = document.getElementById('savingsGoal');
const savingsBudgetInput = document.getElementById('savingsBudget');
const shoppingBudgetInput = document.getElementById('shoppingBudget');

// Function to handle click events
function handleInputClick(inputName) {
    console.log(`Clicked on ${inputName} input`);
    // Add your popup logic here
}


// If you want to handle all inputs at once, you can do this instead:
const allInputs = document.querySelectorAll('input');
// ... existing code ...

allInputs.forEach(input => {
    input.addEventListener('focus', () => {
        if(input.id === 'salary') {
            budgetForm.innerHTML = `
                <div style="padding: 10px; border-radius: 5px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <h4 style="color: #2c3e50; margin-bottom: 8px;">Monthly Income</h4>
                    <p style="color: #34495e; margin-bottom: 8px;">Enter your total monthly income before taxes. Include your regular salary, freelance income, and any other consistent sources of income.</p>
                    <div style="padding: 8px; border-left: 4px solid #3498db; margin-top: 8px;">
                        <strong>💡 Pro Tip:</strong> Remember to include all income sources:
                        <ul style="margin-top: 5px;">
                            <li>Regular salary</li>
                            <li>Bonuses</li>
                            <li>Side hustles</li>
                            <li>Investment income</li>
                        </ul>
                    </div>
                </div>`;
        }
        else if(input.id === 'savingsGoal') {
            budgetForm.innerHTML = `
                <div style="padding: 10px; border-radius: 5px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <h4 style="color: #2c3e50; margin-bottom: 8px;">Savings Goal</h4>
                    <p style="color: #34495e; margin-bottom: 8px;">Set your target savings amount for your financial goals.</p>
                    <div style="padding: 8px; border-left: 4px solid #3498db; margin-top: 8px;">
                        <strong>🎯 Recommended Goals:</strong>
                        <ul style="margin-top: 5px;">
                            <li>Emergency Fund: 3-6 months of expenses</li>
                            <li>Retirement: 15% of annual income</li>
                            <li>Major Purchase: Set specific target amount</li>
                        </ul>
                    </div>
                </div>`;
        }
        else if(input.id === 'savingsBudget') {
            budgetForm.innerHTML = `
                <div style="padding: 10px; border-radius: 5px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <h4 style="color: #2c3e50; margin-bottom: 8px;">Monthly Savings</h4>
                    <p style="color: #34495e; margin-bottom: 8px;">Enter your planned monthly savings amount.</p>
                    <div style="padding: 8px; border-left: 4px solid #3498db; margin-top: 8px;">
                        <strong>📊 Savings Guidelines:</strong>
                        <ul style="margin-top: 5px;">
                            <li>Ideal: 20% of monthly income</li>
                            <li>Minimum: 10% of monthly income</li>
                            <li>Aggressive: 30% or more</li>
                        </ul>
                    </div>
                </div>`;
        }
        else if(input.id === 'shoppingBudget') {
            budgetForm.innerHTML = `
                <div style="padding: 10px; border-radius: 5px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <h4 style="color: #2c3e50; margin-bottom: 8px;">Discretionary Budget</h4>
                    <p style="color: #34495e; margin-bottom: 8px;">Set your monthly budget for non-essential spending.</p>
                    <div style="padding: 8px; border-left: 4px solid #3498db; margin-top: 8px;">
                        <strong>💰 Budget Tips:</strong>
                        <ul style="margin-top: 5px;">
                            <li>Recommended: 20-30% of income after savings</li>
                            <li>Track entertainment expenses</li>
                            <li>Include dining out & shopping</li>
                        </ul>
                    </div>
                </div>`;
        } else if (input.id === 'itemDesc') {
            transactionInfo.innerHTML = `
                <div style="padding: 10px; border-radius: 5px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <h4 style="color: #2c3e50; margin-bottom: 8px;">Transaction Description</h4>
                    <p style="color: #34495e; margin-bottom: 8px;">Provide a clear, specific description of your transaction.</p>
                    <div style="padding: 8px; border-left: 4px solid #3498db; margin-top: 8px;">
                        <strong>✍️ Good Examples:</strong>
                        <ul style="margin-top: 5px;">
                            <li>"Grocery shopping - Walmart"</li>
                            <li>"Monthly Netflix subscription"</li>
                            <li>"Gas station - Shell"</li>
                        </ul>
                    </div>
                </div>`;
        } else if (input.id === 'category') {
            transactionInfo.innerHTML = `
                <div style="padding: 10px; border-radius: 5px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <h4 style="color: #2c3e50; margin-bottom: 8px;">Transaction Category</h4>
                    <p style="color: #34495e; margin-bottom: 8px;">Select the most appropriate category for your transaction.</p>
                    <div style="padding: 8px; border-left: 4px solid #3498db; margin-top: 8px;">
                        <strong>📑 Common Categories:</strong>
                        <ul style="margin-top: 5px;">
                            <li>Housing & Utilities</li>
                            <li>Food & Groceries</li>
                            <li>Transportation</li>
                            <li>Healthcare</li>
                            <li>Entertainment</li>
                        </ul>
                    </div>
                </div>`;
        } else if (input.id === 'amount') {
            transactionInfo.innerHTML = `
                <div style="padding: 10px; border-radius: 5px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <h4 style="color: #2c3e50; margin-bottom: 8px;">Transaction Amount</h4>
                    <p style="color: #34495e; margin-bottom: 8px;">Enter the exact amount of your transaction.</p>
                    <div style="padding: 8px; border-left: 4px solid #3498db; margin-top: 8px;">
                        <strong>🔢 Format Tips:</strong>
                        <ul style="margin-top: 5px;">
                            <li>Use numbers only</li>
                            <li>Include cents (e.g., 10.99)</li>
                            <li>Don't use currency symbols</li>
                        </ul>
                    </div>
                </div>`;
        } else if (input.id === 'date') {
            transactionInfo.innerHTML = `
                <div style="padding: 10px; border-radius: 5px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <h4 style="color: #2c3e50; margin-bottom: 8px;">Transaction Date</h4>
                    <p style="color: #34495e; margin-bottom: 8px;">Select when the transaction occurred.</p>
                    <div style="padding: 8px; border-left: 4px solid #3498db; margin-top: 8px;">
                        <strong>📅 Best Practices:</strong>
                        <ul style="margin-top: 5px;">
                            <li>Use actual transaction date</li>
                            <li>Enter transactions promptly</li>
                            <li>Check statements for accuracy</li>
                        </ul>
                    </div>
                </div>`;
        }
    });
});