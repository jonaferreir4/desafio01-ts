export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.balance >= value){
        this.balance -= value
    } else {
      console.log("status false or value greater than balance")
    } 
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (value: number) => {
    this.balance += value
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
