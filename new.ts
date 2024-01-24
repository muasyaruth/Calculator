class User{
// short hand initialization
    constructor(public name, public age){

        this.name=name;
        this.age=age;

    }
}


class BankAccount{
    readonly account_no: number;
    public name: string;
    private branch: string;

    constructor(account: number, name:string, branch:string){
        this.name=name
        this.account_no= account
        this.branch= branch
    }
}

// let me=new BankAccount("hbghjkhk")

let myAccount= new BankAccount(24433, "Ruth","Nyeri")

