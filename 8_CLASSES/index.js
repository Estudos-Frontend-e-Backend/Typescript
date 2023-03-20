"use strict";
//1- Generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("Testando generics"));
console.log(showData(true));
console.log(showData(["teste"]));
//2- constrainst em generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta" };
console.log(showProductName(myObj));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Vermelho" };
const myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
//4- Type paramaters
function getSomeKey(obj, key) {
    //return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Matheus",
    age: 30,
    hasDriveLicence: true
};
console.log(showCharName(myChar, 'name'));
//6- typeof type operator
const userName = "Matheus";
const userName2 = "Joao";
const username4 = "Joaquim";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log(`Oveiculo tem a km de: ${km}`);
}
showKm(newTruck.km);
const someVar = 5;
