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