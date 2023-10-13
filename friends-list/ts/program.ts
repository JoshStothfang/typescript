import { Friend } from "./friend";

let larry = new Friend("Larry", 50, "larry@3stooges.com", false);
let curly = new Friend("Curly", 35, "curly@3stooges.com", false);
let moe = new Friend("Moe", 65, "moe@3stooges.com", true);

let friends: Friend[] = [];
friends.push(larry);
friends.push(curly);
friends.push(moe);

for (let f of friends) {
    f.display();
}

