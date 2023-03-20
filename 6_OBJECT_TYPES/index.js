"use strict";
//1- tipo de objeto para função com  interface
function showProduct(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é  $ ${product.price} dolares`);
    if (product.isAvaliable) {
        console.log("O produto está disponivel");
    }
    else {
        console.log("Infelizmente não temos o produto em estoque");
    }
}
const shirt = {
    name: "Camisa",
    price: 20.0,
    isAvaliable: true,
};
showProduct(shirt);
const hat = {
    name: "Bone",
    price: 15.99,
    isAvaliable: true,
};
showProduct(hat);
const longShirt = {
    name: "Camiseta manga longa",
    price: 30.99,
    isAvaliable: false,
};
showProduct(longShirt);
const shorts = {
    name: "short NBA oficial",
    price: 100.0,
    isAvaliable: true,
};
showProduct(shorts);
function showUser(user) {
    console.log(`O usuario tem o email: ${user.email}`);
    if (user.role) {
        console.log(`A função role da minha interface ${user.role}`);
    }
}
const job = {
    email: "malencar@gmail.com",
    role: "Developer Frontend React/React Native",
};
showUser(job);
const intern = {
    email: "malencar@gamil.com",
};
showUser(intern);
const gol = {
    brand: "Vw",
    wheels: 4,
};
console.log(gol);
let coords = {
    x: 10,
};
coords.y = 15;
console.log(coords);
coords.z = 20;
console.log(coords);
coords.a = 25;
console.log(coords);
const normal = {
    name: "Jose",
    age: 25,
};
const superman = {
    name: "Clark",
    age: 37,
    powers: ["Super Força", "Super Velocidade", "Raio Laiser", "Voo"],
    weakness: ["Criptonita"],
};
const wolverine = {
    name: "Logan",
    age: 37,
    powers: ["Super Força", "Auto cura", "Garras"],
    weakness: ["Não tem"],
};
console.log(normal);
console.log(superman);
console.log(wolverine);
const sylvester = {
    name: "Rambo",
    type: "Shotgun",
    caliber: 12,
};
console.log(sylvester);
//7 - readonly array
let myArray = ["Maça", "Uva", "Maracuja"];
//myArray[3] = "Melancia"
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
const myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
const anotherUser = ["Matheus", 29];
console.log(anotherUser);
//9- readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
