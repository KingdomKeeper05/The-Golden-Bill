// Setup connection to MongoDB
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 5000;

// Setup express app and middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../')));

// Connect to MongoDB
mongoose.connect('mongodb+srv://kfortuna04:SEI9zaSJXRQ0j4R4@thegoldenbill.xr8wk.mongodb.net/The-Golden-Bill?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB.');
});

const budgetSchema = new mongoose.Schema({
    salary: Number,
    savingsGoal: Number,
    savingsBudget: Number,
    shoppingBudget: Number
});

const transactionSchema = new mongoose.Schema({
    itemDesc: String,
    amount: Number,
    date: Date,
    category: String
});

// Create models
const Budget = mongoose.model('Budget', budgetSchema);
const Transaction = mongoose.model('Transaction', transactionSchema);

// Post budget
app.post('/post-budget', async (req, res) => {
    console.log(req.body);
    const { salary, savingsGoal, savingsBudget, shoppingBudget } = req.body;
    const newBudget = new Budget({ salary, savingsGoal, savingsBudget, shoppingBudget });
    await newBudget.save();
    console.log('Budget saved successfully!');
    res.send('Budget saved successfully!');
});

app.post('/post-transaction', async (req, res) => {
    console.log(req.body);
    const { itemDesc, amount, date, category } = req.body;
    const newTransaction = new Transaction({ itemDesc, amount, date, category });
    await newTransaction.save();
    console.log('Transaction saved successfully!');
    res.send('Transaction saved successfully!');
});

// Get index.html
app.get('/', (req, res) => {
    console.log(path.join(__dirname, '../../website/'));
    res.sendFile(path.join(__dirname, '../../website/index.html'));
});

// Listen on port 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
