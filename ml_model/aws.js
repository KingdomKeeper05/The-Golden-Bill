const AWS = require('aws-sdk');
const secretsManager = new AWS.SecretsManager();

async function getAWSCredentials() {
  try {
    const data = await secretsManager.getSecretValue({ SecretId: 'your-secret-id' }).promise();
    const secret = JSON.parse(data.SecretString);

    const accessKeyId = secret.AWS_ACCESS_KEY_ID;
    const secretAccessKey = secret.AWS_SECRET_ACCESS_KEY;

    const s3 = new AWS.S3({ accessKeyId, secretAccessKey });
  } catch (err) {
    console.log('Error retrieving secret:', err);
  }
}


module.exports = AWS;
