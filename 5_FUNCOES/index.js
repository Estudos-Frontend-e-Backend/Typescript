"use strict";
//1 - void
function withOutReturn() {
    console.log("esta função não tem retorno");
}
withOutReturn();
//2 - callback como argumento
function greeting(name) {
    return `ola ${name}`;
}
function preGreeting(f, userName) {
    console.log("preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Matheus");
preGreeting(greeting, "Jão");
//3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
function mergeObject(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObject({ name: "Matheus" }, { age: 30, job: "Programmer" });
console.log(newObject);
//4 -  constrains
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber('12', '5'));
