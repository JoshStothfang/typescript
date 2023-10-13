"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const friend_1 = require("./friend");
let larry = new friend_1.Friend("Larry", 50, "larry@3stooges.com", false);
let curly = new friend_1.Friend("Curly", 35, "curly@3stooges.com", false);
let moe = new friend_1.Friend("Moe", 65, "moe@3stooges.com", true);
let friends = [];
friends.push(larry);
friends.push(curly);
friends.push(moe);
for (let f of friends) {
    f.display();
}
