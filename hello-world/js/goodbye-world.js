"use strict";
console.log("I'm not ready yet!!!");
let a = 0;
var TrafficLights;
(function (TrafficLights) {
    TrafficLights[TrafficLights["Red"] = 0] = "Red";
    TrafficLights[TrafficLights["Yellow"] = 1] = "Yellow";
    TrafficLights[TrafficLights["Green"] = 2] = "Green";
})(TrafficLights || (TrafficLights = {}));
;
let tl = TrafficLights.Green;
//let wrong: TrafficLights = "Blue";
let udefined;
class PropertyExample {
    _name = "";
    get name() {
        return this._name;
    }
    set name(aName) {
        this._name = aName;
    }
}
let pe = new PropertyExample();
pe.name = "Bootcamp";
let bc = pe.name;
console.log(bc);
const log = (message) => {
    console.log(message);
};
