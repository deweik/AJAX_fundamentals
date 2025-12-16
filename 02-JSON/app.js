// in order to learn about JSON, you need to understand OBJECTS and ARRAYS.

// Objects:
let car = {
    make: "bmw",
    year: 2025,
    color: "red"
};

console.log(car.make);

// Arrays:
let coolCars = ["bmw", "audi", "ferrari"];
console.log(coolCars[2]);

// lastly, you can combine them:
let cars = `[
    { make: "bmw", year: 2025, color: "red" },
    { make: "audi", year: 2024, color: "blue" },
    { make: "ferrari", year: 2023, color: "yellow" }
]`;

console.log(cars[2].color);