//1 - arrays

let numbers: number[] = [1, 2, 3]


console.log(numbers[2])


// numbers = "teste"

const nomes: string[] = ["Matheus","Maria"]

console.log(nomes)

// nomes.push("2")

// 2- outras sintaxe array

//outra sintaxe do array
const nums: Array<number> = [100, 200]

//o metodo push vai adivionar novos valores ao nosso array
nums.push(300, 400)

console.log(nums[0])

//3 - any

const arri: any = [1, "teste",true,[],{nome: "matheus"}]

console.log(arri)

arri.push(2,3,"cachorro")

console.log(arri)

//4 - tipo de parametro de funções

function adicao(a: number, b: number) {
    console.log(a + b)
}
adicao(3, 7)


//5 - returno de função

function great(name: string) {
    return `Ola ${name}`
}

console.log(great("Matheus"))


//5 - função anonimas

setTimeout(function() {
    const salary: number = 1000

    //console.log((salary))
}, 2000)

//7 - tipos de objetos

function passCoordinates(coord: {x: number, y: number}) {
    console.log("X coordinates: " + coord.x)
    console.log("Y coordinates: " + coord.y)
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)
//passCoordinates()

const pessoaObj:{nome: string, surname: string} = {nome: "Matheus", surname: "Alencar"}

//8 - propriedades opcionais

function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    console.log("C: " + c)
    if(c) {
        console.log("C: " + c)
    }
}

//showNumbers(1,2,3)
showNumbers(4,5)

//9 - validação de parametro opcional

function advanceGreeting(firstName: string, lastName?: string) {
    if(lastName !== undefined) {
     return `Ola, ${firstName} ${lastName}, "tudo bem?`
    }
    return `ola ${firstName}, tudo bem?`
}

console.log(advanceGreeting("Matheus", "Alencar"))
console.log(advanceGreeting("Jao"))

//10- union type

function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$ ${balance}`)
}

showBalance(100)
showBalance('500')

const arr2: Array<number | string> = [1, "teste"]


//11- avançado em union types
function showUserRole(role: boolean | string) {
    if(typeof role === "boolean") {
        return "Usuario não aprovado"
    }

    return `A função do usuario é : ${role}` 
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

//12- type alias

type ID = string | number

function showId(id: ID) {
    console.log`O id é: ${id}`
}

showId(1)
showId("200")
showId(123)

//13- interface

interface Point {
    x: number
    y: number
    z: number
}


function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj: Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)

//14- type alias x interface

interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Matheus", age: 28 }

console.log(somePerson)

//15- literal types
let test: "testando"

test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center"){
    console.log(`A direção é: ${direction}`)
}

showDirection("left")
showDirection("right")
showDirection("center")

//16 - non null assertion

const p = document.getElementById("some-p")

console.log(p?.innerText)

//17 - bigInt

let n : bigint

n = 1000n

console.log(n)
console.log(typeof n)
console.log(n + 100n)

//18 - sybol
let symbolA:symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)