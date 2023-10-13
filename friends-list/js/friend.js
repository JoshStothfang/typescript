"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Friend = void 0;
class Friend {
    name;
    age;
    email;
    bff;
    constructor(name, age, email, bff) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
    display() {
        let message = `${this.name} is my ${this.bff ? "BFF" : "friend"}. Their age is ${this.age}. Their email address is ${this.email}.`;
        console.log(message);
    }
}
exports.Friend = Friend;
