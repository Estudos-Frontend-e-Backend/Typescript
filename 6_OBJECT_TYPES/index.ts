//1- tipo de objeto para função com  interface

interface Product {
  name: string;
  price: number;
  isAvaliable: true | false;
}

function showProduct(product: Product) {
  console.log(
    `O nome do produto é ${product.name} e seu preço é  $ ${product.price} dolares`
  );
  if (product.isAvaliable) {
    console.log("O produto está disponivel");
  } else {
    console.log("Infelizmente não temos o produto em estoque");
  }
}

const shirt: Product = {
  name: "Camisa",
  price: 20.0,
  isAvaliable: true,
};

showProduct(shirt);

const hat: Product = {
  name: "Bone",
  price: 15.99,
  isAvaliable: true,
};

showProduct(hat);

const longShirt: Product = {
  name: "Camiseta manga longa",
  price: 30.99,
  isAvaliable: false,
};

showProduct(longShirt);

const shorts: Product = {
  name: "short NBA oficial",
  price: 100.0,
  isAvaliable: true,
};

showProduct(shorts);

//2 - propriedade opcional em interface

interface User {
  email: string;
  role?: string;
}

function showUser(user: User) {
  console.log(`O usuario tem o email: ${user.email}`);

  if (user.role) {
    console.log(`A função role da minha interface ${user.role}`);
  }
}

const job: User = {
  email: "malencar@gmail.com",
  role: "Developer Frontend React/React Native",
};

showUser(job);

const intern: User = {
  email: "malencar@gamil.com",
};

showUser(intern);

//3 - readonly
interface Car {
  brand: string;
  readonly wheels: number;
}

const gol: Car = {
  brand: "Vw",
  wheels: 4,
};

console.log(gol);

//4 - index signature

interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
};

coords.y = 15;
console.log(coords);
coords.z = 20;
console.log(coords);
coords.a = 25;
console.log(coords);

//5 - extending interface
interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  powers: string[];
  weakness: string[];
}

const normal: Human = {
  name: "Jose",
  age: 25,
};

const superman: SuperHuman = {
  name: "Clark",
  age: 37,
  powers: ["Super Força", "Super Velocidade", "Raio Laiser", "Voo"],
  weakness: ["Criptonita"],
};

const wolverine: SuperHuman = {
  name: "Logan",
  age: 37,
  powers: ["Super Força", "Auto cura", "Garras"],
  weakness: ["Não tem"],
};

console.log(normal);
console.log(superman);
console.log(wolverine);

//6 - intersection types
interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const sylvester: HumanWithGun = {
  name: "Rambo",
  type: "Shotgun",
  caliber: 12,
};

console.log(sylvester);

//7 - readonly array

let myArray: ReadonlyArray<string> = ["Maça", "Uva", "Maracuja"];

//myArray[3] = "Melancia"

console.log(myArray);

myArray.forEach((item) => {
  console.log("Fruta: " + item);
});

//8- Tuplas
type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];


console.log(myNumberArray);

type nameAndAge = [string, number]

const anotherUser:nameAndAge = ["Matheus", 29]

console.log(anotherUser)

//9- readonly

function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1, 2])

//10- Generics 