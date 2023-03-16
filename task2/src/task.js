class Account {
    constructor(Acc_no = 0, Balance = 0) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    debitAmount() {
    }
    creditAmount() {
    }
    getBalancet() {
    }
}
class Savingaccount extends Account {
    constructor(Acc_no = 0, Balance = 0) {
        super(Acc_no, Balance);
    }
    addAccount() {
        throw new Error("Method not implemented.");
    }
    removeAccount() {
        throw new Error("Method not implemented.");
    }
    MinBalancet() {
    }
}
class Currentaccount extends Account {
    constructor(Acc_no = 0, Balance = 0) {
        super(Acc_no, Balance);
    }
    addAccount() {
        throw new Error("Method not implemented.");
    }
    removeAccount() {
        throw new Error("Method not implemented.");
    }
    interestrate() {
    }
}
