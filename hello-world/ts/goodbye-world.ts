console.log("I'm not ready yet!!!");

let a: number = 0;

enum TrafficLights {
    "Red" = 0, "Yellow" = 1, "Green" = 2
};

let tl: TrafficLights = TrafficLights.Green;

//let wrong: TrafficLights = "Blue";

let udefined: string;

class PropertyExample {
    _name: string = "";

    get name() {
        return this._name;
    }

    set name(aName: string) {
        this._name = aName;
    }
}

let pe = new PropertyExample();

pe.name = "Bootcamp";

let bc: string = pe.name;

console.log(bc);

const log = (message: string) => {
    console.log(message);
}