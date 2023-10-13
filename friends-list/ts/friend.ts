export class Friend {
    name: string;
    age: number;
    email: string;
    bff: boolean;

    constructor(name: string, age: number, email: string, bff: boolean) {
        this.name = name
        this.age = age;
        this.email = email;
        this.bff = bff;
    }

    display() {
        let message: string = `${this.name} is my ${this.bff ? "BFF" : "friend"}. Their age is ${this.age}. Their email address is ${this.email}.`;
        console.log(message);
    }
}