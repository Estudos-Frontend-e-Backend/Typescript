"use strict";
//1 - arrays
let numbers = [1, 2, 3];
console.log(numbers[2]);
// numbers = "teste"
const nomes = ["Matheus", "Maria"];
console.log(nomes);
// nomes.push("2")
// 2- outras sintaxe array
//outra sintaxe do array
const nums = [100, 200];
//o metodo push vai adivionar novos valores ao nosso array
nums.push(300, 400);
console.log(nums[0]);
//3 - any
const arri = [1, "teste", true, [], { nome: "matheus" }];
console.log(arri);
arri.push(2, 3, "cachorro");
console.log(arri);
//4 - tipo de parametro de funções
function adicao(a, b) {
    console.log(a + b);
}
adicao(3, 7);
//5 - returno de função
function great(name) {
    return `Ola ${name}`;
}
console.log(great("Matheus"));
//5 - função anonimas
setTimeout(function () {
    const salary = 1000;
    //console.log((salary))
}, 2000);
//7 - tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
//passCoordinates()
const pessoaObj = { nome: "Matheus", surname: "Alencar" };
//8 - propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    console.log("C: " + c);
    if (c) {
        console.log("C: " + c);
    }
}
//showNumbers(1,2,3)
showNumbers(4, 5);
//9 - validação de parametro opcional
function advanceGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Ola, ${firstName} ${lastName}, "tudo bem?`;
    }
    return `ola ${firstName}, tudo bem?`;
}
console.log(advanceGreeting("Matheus", "Alencar"));
console.log(advanceGreeting("Jao"));
