//1 - void

function withOutReturn():void {
    console.log("esta função não tem retorno")
}

withOutReturn()

//2 - callback como argumento

function greeting(name: string) {
    return `ola ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
    console.log("preparando a função")

    const greet = f(userName)
    console.log(greet)
}

preGreeting(greeting, "Matheus")
preGreeting(greeting, "Jão")

//3 - generic function

function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1,2,3]))
console.log(firstElement(["a", "b", "c"]))

function mergeObject<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObject({name: "Matheus"}, {age: 30, job: "Programmer"})

console.log(newObject)

//4 -  constrains

function biggestNumber<T extends number | string>(a:T, b:T):T {
    let biggest: T
    
    if(+a > +b) {
        biggest = a
    }else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(5, 3))
console.log(biggestNumber('12', '5'))

//5 - especificar tipo de argumento

function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}

console.log(mergeArrays<number | string>([1,2,3], ["teste", "testando"]))

//6 - opcionais
function modernGreeting(name: string, greet?: string) {
    
    if(greet){
    return `Ola ${greet} ${name}, tudo bem ?`
    }

    return `Ola ${name}, tudo bem ?`
   
}

console.log(modernGreeting("Matheus"))
console.log(modernGreeting("Matheus", "Dr."))

//7 - parametro default
function somaDefault(n: number, m = 10):number {
    return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(7,11))

//8 - unknown

function doSomething(x: unknown) {
    if(Array.isArray(x)) {
        console.log(x[0])
    } else if(typeof x === "number") {
        console.log("X é um numero")
    }
}

doSomething([1,2,3])
doSomething(5)

//9 - never

function showErrorMessage(msg: string) {
    throw new Error(msg)
}

//showErrorMessage("Algum erro")

//10 - rest operator

function sumAll(...n: number[]) {
    return n.reduce((number, sum) => sum + number )
}

console.log(sumAll(1,2,3,4,5))
console.log(sumAll(5, 348, 2348))
// console.log(sumAll("teste"))

//11 - destructuring com parametro

function showProductDetails({name, price}: {name: string, price: number}) {
    return `O nome do produto é ${name} e ele custa R$ ${price}`

}

const shirt = {name: "camisa", price: 49.99}

console.log(showProductDetails(shirt))
// console.log(showProductDetails({name: "teste", age: 30}))
console.log