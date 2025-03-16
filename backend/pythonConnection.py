# Python
from pymongo import MongoClient

# Replace with your actual connection string
mongo_uri = "mongodb+srv://kfortuna04:SEI9zaSJXRQ0j4R4@thegoldenbill.xr8wk.mongodb.net/The-Golden-Bill?retryWrites=true&w=majority"

# Connect to MongoDB
client = MongoClient(mongo_uri)
db = client["The-Golden-Bill"]
collection = db["transactions"]
collection = db["budget"]

# Fetch sample data
data = collection.find_one()
print(data)
