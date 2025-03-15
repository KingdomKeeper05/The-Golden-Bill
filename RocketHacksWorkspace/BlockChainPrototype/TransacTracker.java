import java.util.Calendar;
import java.util.Date;
import java.util.Scanner;

public class TransacTracker {
    public static void main(String[] args) {
        Blockchain transacTracker = new Blockchain();
        Scanner scanner = new Scanner(System.in);
        String[] validTransTypes = {"dining", "shopping", "utility", "income", "investment"};

        while (true) {
            System.out.println("\n1. Add Transaction\n2. View Previous Transactions\n3. Exit");
            System.out.print("Choose an option: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline left-over

            // categories of transaction: dining, shopping, utilities, income, investment
            // date bought
            //date  created
            
            switch (choice) {
            //convert switches to buttons in website
                case 1:
                    System.out.print("Enter transaction amount: ");
                    double amount = scanner.nextDouble();
                    scanner.nextLine(); // Consume newline left-over
                    System.out.print("Enter transaction type:  ");
                    String type = scanner.nextLine(); //create loop to make sure it is one of 4 valid types
                   
                    while (!isValidType(type, validTransTypes))
                    {
                    	System.out.print("Invalid Transaction Type\nPlease type in 'dining', 'income', 'investment', 'shopping', or 'utilities':  ");
                    	type = scanner.nextLine();
                    }
                    
                    System.out.print("Enter transaction description: ");
                    String itemDesc = scanner.nextLine();
                    Date createdAt = new Date(); 
                    System.out.print("Enter the month (in number form), day, and year of the purchase:  ");;
                    Date date = entryDate();
                    Transaction transaction = new Transaction(amount, itemDesc);
                    Block newBlock = new Block(transacTracker.size, transacTracker.getLatestBlock().getHash(), System.currentTimeMillis(), transaction, date, type);
                    transacTracker.addBlock(newBlock);
                    System.out.println("Transaction added successfully.");
                    break;
                case 2:
                    transacTracker.printBlockchain();
                    break;
                case 3:
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid choice. Please choose again.");
            }
        }
    }
    @SuppressWarnings("deprecation")
	public static Date entryDate() {
    	Scanner sc = new Scanner(System.in);
        Calendar calendar = Calendar.getInstance();
    	int month = sc.nextInt() - 1;
    	int day = sc.nextInt();
    	int year = sc.nextInt();
    	calendar.set(year, month, day); // Month is 0-based in Calendar
        return calendar.getTime();
    }
    
    public static boolean isValidType(String type, String[] types) {
    	for (int i = 0; i < types.length; i++) {
    		if (types[i].equals(type)) {
    			return true;
    		}
    	}
    	return false;
    }
}
