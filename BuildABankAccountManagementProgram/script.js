class Transaction {
    static availableTypes = Object.freeze(['deposit', 'withdraw']);

    constructor(type, amount){
        if(!Transaction.availableTypes.includes(type)) throw new Error('Transaction type not available');
        if(!Number.isFinite(amount) || amount <= 0) throw new Error('Transaction amount must be a positive finite number');
        this.type = type;
        this.amount = amount;
        this.timestamp = new Date();
    }
}

class BankAccount {
    constructor(){
        this.balance = 0;
        this.transactions = [];
    }

    deposit(amount){
        if(Number.isFinite(amount) && amount > 0){
            this.transactions.push(new Transaction('deposit', amount));
            this.balance += amount;
            return `Successfully deposited $${amount}. New balance: $${this.balance}`;
        }
        return "Deposit amount must be greater than zero.";
    }

    withdraw(amount){
        if(Number.isFinite(amount) && amount > 0 && amount <= this.balance){
            this.transactions.push(new Transaction('withdraw', amount));
            this.balance -= amount;
            return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
        }
        return "Insufficient balance or invalid amount.";
    }

    checkBalance(){
        return `Current balance: $${this.balance}`;
    }

    listAllDeposits(){
        return `Deposits: ${this.transactions.filter(t => t.type === 'deposit').map(t => t.amount).join(',')}`;
    }

    listAllWithdrawals(){
        return `Withdrawals: ${this.transactions.filter(t => t.type === 'withdraw').map(t => t.amount).join(',')}`;
    }
}

const myAccount = new BankAccount();
myAccount.deposit(1000);
console.log(myAccount.deposit(10));
myAccount.deposit(10);
console.log(myAccount.withdraw(10));
myAccount.withdraw(10);
console.log(myAccount.checkBalance());
console.log(myAccount.listAllWithdrawals());
console.log(myAccount.listAllDeposits());
