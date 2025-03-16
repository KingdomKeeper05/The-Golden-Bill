const BudgetModel = require('../models/BudgetModel');
const AWS = require('aws-sdk');

// Function to get user data from MongoDB
async function getUserDataFromMongoDB(userId) {
    try {
        const userData = await BudgetModel.find({ userId }); // Adjust the query as needed for user data
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw new Error('Error fetching user data');
    }
}

// Function to get financial insights by invoking SageMaker
async function getFinancialInsights(req, res) {
    const { userId } = req.params;
    try {
        const userData = await getUserDataFromMongoDB(userId); // Fetch user data from MongoDB

        // Prepare the data for SageMaker (Convert to JSON or appropriate format)
        const payload = JSON.stringify(userData);

        // Initialize AWS SDK and set up SageMaker
        const sagemaker = new AWS.SageMakerRuntime();
        const params = {
            EndpointName: 'your-sagemaker-endpoint-name',  // Replace with your endpoint
            Body: payload,
            ContentType: 'application/json',
        };

        // Send data to SageMaker for prediction
        const result = await sagemaker.invokeEndpoint(params).promise();

        // Parse the result from SageMaker
        const prediction = JSON.parse(result.Body.toString());

        // Send the prediction back to the client
        res.json(prediction);
    } catch (error) {
        console.error('Error getting financial insights:', error);
        res.status(500).send('Error getting financial insights');
    }
}

module.exports = { getUserDataFromMongoDB, getFinancialInsights };

