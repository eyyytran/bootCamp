class BankAccount:
    def __init__(self, accountNumber, balance = 0):
        self.accountNumber = accountNumber
        self.balance = balance
    def deposit(self, deposit):
        self.balance += deposit
        print('Your balance is ' + str(self.balance) + ' USD.')
    def withdraw(self, withdrawal):
        self.balance -= withdrawal
        print('Your balance is ' + str(self.balance) + ' USD.')
    def transfer(self, transferFunds, BankAccount):
        self.balance -= transferFunds
        print('Your balance in ' + self.accountNumber + ' is now: ' + str(self.balance) + ' USD.')
        BankAccount.balance += transferFunds
        print('Your balance in ' + BankAccount.accountNumber + ' is: ' + str(BankAccount.balance) + ' USD.')

checking_account = BankAccount("FD332", 100)
other_account = BankAccount("FD123", 0)
checking_account.transfer(50, other_account)

