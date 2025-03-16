import pickle
from flask import Flask, request, jsonify
import numpy as np
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for all domains
CORS(app)

# Load the label encoder and model from disk
with open('label_encoder.pkl', 'rb') as le_file:
    label_encoder = pickle.load(le_file)

with open('model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

# Define route for making predictions
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get data from the request (JSON format)
        data = request.get_json()

        # Extract features from the input data
        amount = data['amount']
        savings_budget = data['savingsBudget']
        shopping_budget = data['shoppingBudget']
        salary = data['salary']
        savings_goal = data['savingsGoal']
        category = data['category']

        # Encode the 'category' label
        encoded_category = label_encoder.transform([category])[0]  # Ensure category is encoded

        # Prepare input features for prediction
        X = np.array([[amount, savings_budget, shopping_budget, salary, savings_goal, encoded_category]])

        # Make the prediction using the model
        prediction = model.predict(X)

        # Return the prediction as a JSON response
        return jsonify({'prediction': prediction[0]})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

# Define route for label encoder classes (optional)
@app.route('/get_labels', methods=['GET'])
def get_labels():
    return jsonify({'labels': label_encoder.classes_.tolist()})

# Define a test route for the items (as per your original code)
@app.route('/api/items', methods=['GET'])
def get_items():
    return jsonify({"items": ["item1", "item2", "item3"]})

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
