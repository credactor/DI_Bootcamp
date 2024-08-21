# Exercise: Bank Account Management System
# Overview
# You will create an BankAccount class that represents a bank account with advanced features. This class will manage different account types, track transactions, and include more complex class methods for account management.
# Requirements
# 1. Class Attributes and Methods: 
# 2. The class should keep track of the total number of bank accounts created and maintain a list of all accounts. 
# 3. Implement a class method to find an account by its account number. 
# 4. Implement a class method to summarize total balances across all accounts.
# 5. Instance Attributes and Methods:
# 6. Use a @property to manage access to the account balance. 
# 7. Use a @property and @setter to handle and validate the account type. 
# 8. Include a transaction history that logs deposits and withdrawals. 
# 9. Implement a method to calculate and add interest to the account balance (specific to savings accounts). 
# 10. Implement methods for depositing and withdrawing money, with validation checks. 
# Implementation Details
# 1. Class Attributes: 
# 2. total_accounts: Tracks the total number of bank accounts created. 
# 3. all_accounts: A list that stores references to all BankAccount instances. 
# 4. interest_rate: A class attribute to define the default interest rate for savings accounts.
# 5. Class Methods:
# 6. get_total_accounts(cls): Returns the total number of accounts. 
# 7. find_account_by_number(cls, account_number): Finds and returns an account by its account number. 
# 8. total_balances(cls): Returns the sum of balances across all accounts.
# 9. Properties:
# 10. balance: Provides access to the account balance. 
# 11. account_type: Manages the type of account with validation logic. 
# 12. transaction_history: A list that logs all transactions (deposits and withdrawals).
# 13. Methods:
# 14. deposit(amount): Adds money to the account and logs the transaction. 
# 15. withdraw(amount): Withdraws money, ensuring the balance doesn’t go negative, and logs the transaction. 
# 16. apply_interest(): Applies interest to savings accounts.
# Tasks to Complete
# 1. Create the BankAccount class with the provided class and instance attributes. 
# 2. Implement class methods to manage and interact with the accounts collectively. 
# 3. Implement the @property and @setter for the account balance and account type. 
# 4. Track transaction history within each account. 
# 5. Test your class by creating multiple accounts, performing various transactions, and applying interest. 
# Expected Output
# When you run the example usage:
# The account balances should update correctly based on deposits, withdrawals, and interest application. 
# The total number of accounts created and total balances should be tracked and displayed accurately. 
# The find_account_by_number method should correctly identify accounts by their unique account number. 
# The transaction history for each account should log all actions taken. 

class BankAccount:
    # Class attributes to track total accounts, all accounts, and a default interest rate
    total_accounts = 0
    all_accounts = []
    interest_rate = 0.03  # 3% interest rate for savings accounts

    def __init__(self, account_type: str, initial_balance: float = 0.0):
        self._balance = initial_balance
        self.account_type = account_type
        self.transaction_history = []
        self.account_number = BankAccount.total_accounts + 1
        BankAccount.total_accounts += 1
        BankAccount.all_accounts.append(self)

    @property
    def balance(self):
        """Provides read-only access to the account balance."""
        return self._balance

    @property
    def account_type(self):
        """Getter for account_type. Ensures the account type is valid."""
        return self._account_type

    @account_type.setter
    def account_type(self, value):
        """Setter for account_type. Validates the account type before setting it."""
        if not BankAccount.validate_account_type(value):
            raise ValueError("Invalid account type. Must be 'savings' or 'checking'.")
        self._account_type = value

    @classmethod
    def get_total_accounts(cls):
        """Returns the total number of accounts created."""
        return cls.total_accounts

    @classmethod
    def find_account_by_number(cls, account_number):
        """Finds and returns an account by its account number."""
        for account in cls.all_accounts:
            if account.account_number == account_number:
                return account
        return None

    @classmethod
    def total_balances(cls):
        """Returns the sum of balances across all accounts."""
        return sum(account.balance for account in cls.all_accounts)

    @staticmethod
    def validate_account_type(account_type):
        """Validates the account type to ensure it's either 'savings' or 'checking'."""
        return account_type in ["savings", "checking"]

    def deposit(self, amount):
        """Adds money to the account and logs the transaction."""
        if amount > 0:
            self._balance += amount
            self.transaction_history.append(f"Deposited: ${amount}")
        else:
            raise ValueError("Deposit amount must be positive.")

    def withdraw(self, amount):
        """Withdraws money from the account if the balance allows, and logs the transaction."""
        if amount > self._balance:
            raise ValueError("Insufficient balance.")
        self._balance -= amount
        self.transaction_history.append(f"Withdrew: ${amount}")

    def apply_interest(self):
        """Applies interest to savings accounts and logs the interest application."""
        if self._account_type == "savings":
            self._balance += self._balance * BankAccount.interest_rate
            self.transaction_history.append(f"Interest applied at rate: {BankAccount.interest_rate * 100}%")

if __name__ == "__main__":
    # Create bank accounts
    account1 = BankAccount("savings", 1000)
    account2 = BankAccount("checking", 500)
    account3 = BankAccount("savings", 2000)
    # account4 = BankAccount("bla-bla-bla", 700) # false account type

    # Deposit and withdraw money
    account1.deposit(300)
    account2.withdraw(200)
    account2.deposit(500)

    # Apply interest to the savings accounts
    account1.apply_interest()
    account3.apply_interest()

    # Find account by account number
    found_account = BankAccount.find_account_by_number(2)
    if found_account:
        print(f"Found account #{found_account.account_number} with balance: ${found_account.balance}")

    # Display total balances across all accounts
    print(f"Total balances across all accounts: ${BankAccount.total_balances()}")

    # Display total accounts created
    print(f"Total accounts created: {BankAccount.get_total_accounts()}")

    # Display balances
    print ("Balance of", account1.account_type,":", account1._balance)
    print ("Balance of", account2.account_type,":", account2._balance)
    print ("Balance of", account3.account_type,":", account3._balance)

    # Track transaction history
    print ("Transaction history:", account1.account_type,":", account1.transaction_history)
    print ("Transaction history:", account2.account_type,":", account2.transaction_history)
    print ("Transaction history:", account3.account_type,":", account3.transaction_history)
    