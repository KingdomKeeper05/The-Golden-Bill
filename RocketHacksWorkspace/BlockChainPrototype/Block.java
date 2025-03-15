
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.nio.charset.StandardCharsets;

public class Block {
    private int index;
    private String previousHash;
    private long timestamp;
    private Transaction transaction;
    private String hash;
    private Date date;
    private String type;

    // types of transaction: dining, shopping, utilities, income, investment
    // 

    public Block(int index, String previousHash, long timestamp, Transaction transaction, Date date, String type) {
        this.setIndex(index);
        this.setPreviousHash(previousHash);
        this.setTimestamp(timestamp);
        this.setTransaction(transaction);
        this.setHash(calculateHash());
        this.setDate(date);
        this.setType(type);
        
    }

    String calculateHash() {
        String dataString = getIndex() + previousHash + getTimestamp() + getTransaction().toString();
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hashBytes = digest.digest(dataString.getBytes(StandardCharsets.UTF_8));
            return bytesToHex(hashBytes);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }

    private String bytesToHex(byte[] hashBytes) {
        StringBuilder hexString = new StringBuilder();
        for (byte b : hashBytes) {
            String hex = Integer.toHexString(0xff & b);
            if (hex.length() == 1) hexString.append('0');
            hexString.append(hex);
        }
        return hexString.toString();
    }

    public String getHash() {
        return hash;
    }

    public String getPreviousHash() {
        return previousHash;
    }

    @Override
    public String toString() {
        return "Block{" +
                "index = " + getIndex() +
                ", timestamp = " + getTimestamp() +
                ", transaction = " + getTransaction() +
                '}';
    }

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}
	
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	public long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}

	public Transaction getTransaction() {
		return transaction;
	}

	public void setTransaction(Transaction transaction) {
		this.transaction = transaction;
	}

	public void setPreviousHash(String previousHash) {
		this.previousHash = previousHash;
	}

	public void setHash(String hash) {
		this.hash = hash;
	}
	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}

class Transaction {
    private double amount;
    private String description;

    public Transaction(double amount, String description) {
        this.amount = amount;
        this.description = description;
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "amount=" + amount +
                ", description='" + description + '\'' +
                '}';
    }
}

class Blockchain {
    private Block[] chain;
    int size;

    public Blockchain() {
        this.chain = new Block[100]; // Initial size
        this.size = 0;
        createGenesisBlock();
    }

    private void createGenesisBlock() {
        Block genesisBlock = new Block(0, "0", System.currentTimeMillis(), new Transaction(0, "Genesis Block"), new Date(), "test");
        chain[size++] = genesisBlock;
    }

    public Block getLatestBlock() {
        return chain[size - 1];
    }

    public void addBlock(Block newBlock) {
        newBlock.setPreviousHash(getLatestBlock().getHash());
        newBlock.setHash(newBlock.calculateHash());
        if (size == chain.length) {
            // Resize array if necessary
            Block[] newChain = new Block[chain.length * 2];
            System.arraycopy(chain, 0, newChain, 0, chain.length);
            chain = newChain;
        }
        chain[size++] = newBlock;
    }

    public boolean isValid() {
        for (int i = 1; i < size; i++) {
            Block currentBlock = chain[i];
            Block previousBlock = chain[i - 1];
            if (!currentBlock.getHash().equals(currentBlock.calculateHash())) {
                return false;
            }
            if (!currentBlock.getPreviousHash().equals(previousBlock.getHash())) {
                return false;
            }
        }
        return true;
    }

    public void printBlockchain() {
        for (int i = 1; i < size; i++) {
            Block block = chain[i];
            System.out.println("Block " + block.getIndex() + " - Hash: " + block.getHash());
            SimpleDateFormat formatter = new SimpleDateFormat("EEE MMM dd yyyy");
            System.out.println("Category: " + block.getType() + ", Transaction: " + block.getTransaction() + ", Date of Transaction: " + formatter.format(block.getDate()));
            System.out.println("-".repeat(50));
        }
    }
}
