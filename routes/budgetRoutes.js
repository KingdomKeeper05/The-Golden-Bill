const express = require('express');
const { 
    saveBudgetEntry, 
    getAllBudgetEntries, 
    getBudgetByUser, 
    getTotalSpending, 
    getSpendingByCategory, 
    getSavingsProgress, 
    updateBudgetEntry, 
    deleteBudgetEntry 
} = require('../controllers/budgetController');

const router = express.Router();

router.post('/save', saveBudgetEntry);
router.get('/get', getAllBudgetEntries);
router.get('/get/user/:userId', getBudgetByUser);
router.get('/get/total-spending', getTotalSpending);
router.get('/get/spending-by-category', getSpendingByCategory);
router.get('/get/savings-progress', getSavingsProgress);
router.put('/update/:id', updateBudgetEntry);
router.delete('/delete/:id', deleteBudgetEntry);

module.exports = router;
