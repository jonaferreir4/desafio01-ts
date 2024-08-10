import { DioAccount } from "./DioAccount";

class SavingAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (value: number): void => {
        this.setBalance(value + 10)
    }
}

export { SavingAccount }