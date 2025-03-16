import React, { useState } from "react";

function FinancialPredictionForm() {
  const [formData, setFormData] = useState({
    amount: 0,
    category: "",
    savingsBudget: 0,
    shoppingBudget: 0,
    salary: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/predict/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    alert(`Predicted expense: ${data.predicted_expense}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        onChange={handleChange}
        value={formData.amount}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        onChange={handleChange}
        value={formData.category}
      />
      <input
        type="number"
        name="savingsBudget"
        placeholder="Savings Budget"
        onChange={handleChange}
        value={formData.savingsBudget}
      />
      <input
        type="number"
        name="shoppingBudget"
        placeholder="Shopping Budget"
        onChange={handleChange}
        value={formData.shoppingBudget}
      />
      <input
        type="number"
        name="salary"
        placeholder="Salary"
        onChange={handleChange}
        value={formData.salary}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FinancialPredictionForm;