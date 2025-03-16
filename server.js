require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Serve static files (e.g., frontend HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Home route (renders a simple page)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Catch-all for unknown routes
app.use((req, res) => {
    res.status(404).send("Page not found");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));

// ADDITION

const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://kfortuna04:SEI9zaSJXRQ0j4R4@thegoldenbill.xr8wk.mongodb.net/The-Golden-Bill?retryWrites=true&w=majority'; // Replace with your MongoDB URL
const dbName = 'The-Golden-Bill'; 

MongoClient.connect(url, function(err, client) {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to MongoDB');
      const db = client.db(dbName);
    }
  });

//const Web3 = require('web3');
//const web3 = new Web3(new Web3.providers.HttpProvider('YOUR_ETHERUM_NODE_URL'));

const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "blockIndex",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "transactionType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TransactionAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "transType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "transactionDate",
				"type": "uint256"
			}
		],
		"name": "addTransaction",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllBlocks",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "indices",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "types",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "descriptions",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "dates",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getBlock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "blockIndex",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "previousHash",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "blockHash",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "transactionType",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBlockchainSize",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isValid",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contract = new web3.eth.Contract(contractABI, contractAddress);
contract.events.EventName((error, event) => {
  if (error) console.error(error);
  else {
    // Process event data and save it to MongoDB
    const db = client.db(dbName);
    db.collection('events').insertOne(event, (err, result) => {
      if (err) throw err;
      console.log('Event saved to MongoDB');
    });
  }
});

//FRONT END ADDITION

const express = require('express');
const appp = express();
const port = 3000;

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url, function(err, client) {
    if (err){
        console.log(err);
    } else {
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        const eventsCollection = db.collection('events');

        app.get('/events', async (req,res) => {
        try{
            const events = await eventsCollection.find().toArray();
            res.json(events);
        } catch (err){
            console.error(err);
            res.status(500).json({message: 'Error fetching events'});
        }

        });

        app.listen(port, () => {
            console.log('Server running on port ${port}');
        });
    }
});

router.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        console.log(items); // Log items to see what data is coming back
        res.json(items); // Send the data as JSON
    } catch (error) {
        res.status(500).send('Error fetching items');
    }
});
