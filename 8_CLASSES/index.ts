//1- Generics
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("Testando generics"))
console.log(showData(true))
console.log(showData(["teste"]))

//2- constrainst em generics

function showProductName<T extends {name: string}>(obj: T) {
  return `O nome do produto é: ${obj.name}`
}

const myObj = {name: "Porta"}

console.log(showProductName(myObj))

//3- Interface com generics

interface myObject<T, U, Q> {
  name: string
  wheels: T
  engine: U
  color: Q
}

type Car = myObject<number, number, string>
type Pen = myObject<boolean, boolean, string>

const myCar:Car = {name: "Fusca", wheels: 4, engine: 1.0, color: "Vermelho"}
const myPen:Pen ={name: "Caneta BIC", wheels: false, engine: false, color: "Azul"}

console.log(myCar)
console.log(myPen)

//4- Type paramaters

function getSomeKey<T, K extends keyof T>(obj: T, key: K){
  //return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
  hd: '2TB',
  ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))

//5- keyof Type Operator


type Character = {name: string, age: number, hasDriveLicence: boolean}

type C = keyof Character

function showCharName(obj: Character, name: C): string {
  return `${obj[name]}`
}

const myChar: Character = {
  name: "Matheus",
  age: 30,
  hasDriveLicence: true
}

console.log(showCharName(myChar, 'name'))

//6- typeof type operator

const userName: string = "Matheus"

const userName2: typeof userName = "Joao"

type x = typeof userName

const username4: x = "Joaquim"


//7- indexed access types

type Truck = {km: number, kg: number, description: string}

type km = Truck['km']

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: "Caminhão para pouca carga"
}

function showKm(km: km) {
  console.log(`Oveiculo tem a km de: ${km}`)
}

showKm(newTruck.km)

//8- Conditional expressions type

interface A {}

interface B extends A {}

interface Teste {
  showName(): string
}

              //--------> if(?)    else(:) ---> ternario
type myType = B extends A ? number : string

const someVar:myType = 5

type myTypeB = Teste extends {showNumber(): number} ? string : boolean

//9- Template literals type

type testA = "text"

type CustomType = `some ${testA}`

type a1 = "testando"
type a2 = "union"

type a3 = `${a1}` | `${a2}`