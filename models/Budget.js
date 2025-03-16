const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    amount: { type: Number, default: 0 },  // Amount spent or saved - From BlockChain
    category: { type: String, default: 0 },  // Expense category (e.g., food, rent, shopping) - From BlockChain
    date: { type: Date, default: Date.now },  // Transaction date - From BlockChain
    itemDesc: { type: String },  // Description of the expense/item - From BlockChain
    savingsBudget: { type: Number, default: 0 },  // Budget set for savings - From Website
    shoppingBudget: { type: Number, default: 0 },  // Budget allocated for shopping - From Website
    salary: { type: Number, default: 0 },  // User's salary - From Website
    savingsGoal: { type: Number, default: 0 },  // User's savings target - From Website
});

module.exports = mongoose.model('Transaction Tracker', BudgetSchema);
