import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SavingAccount } from './class/SavingAccount'


console.log("_________PeopleAccount______________\n")
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount.getName())
console.log(peopleAccount.getBalance())
peopleAccount.deposit(10)
console.log(peopleAccount.getBalance())
peopleAccount.withdraw(10)


console.log("_________CompanyAccount______________\n")
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.getName())
console.log(companyAccount.getBalance())
companyAccount.getLoan(1000)
console.log(companyAccount.getBalance())
companyAccount.withdraw(10)


console.log("_________SavingAccount______________\n")
const savingAccount: SavingAccount = new SavingAccount('Maria', 30)
 console.log(savingAccount.getName())
savingAccount.deposit(100)
console.log(savingAccount.getBalance())
savingAccount.withdraw(30)
console.log(savingAccount.getBalance())
