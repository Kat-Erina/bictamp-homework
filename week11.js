// //1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let person1 = new Person("Kato", 30);
console.log(person1);

//2
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}

let person2 = new Student("Natia", 30, "12");
console.log(person2);

//3 Encapsulation

class BankAccount {
  #balance;
  constructor(balance) {
    this.#balance = balance;
  }

  deposit(amount) {
    return (this.#balance += amount);
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Not enough money");
      return;
    }
    return (this.#balance -= amount);
  }
}

let acc1 = new BankAccount(0);
acc1.deposit(200);
acc1.deposit(1200);
console.log(acc1);
acc1.withdraw(2200);
console.log(acc1);

//4

class Shape {
  calculateArea() {
    return;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    return +(this.radius ** 2 * Math.PI).toFixed(2);
  }
}

let cir = new Circle(20);
console.log(cir);
console.log(cir.calculateArea());

class Rectangle extends Shape {
  //1 gza konstruqtorishi propertyebi davamato
  // constructor(length, width) {
  //   super();
  //   this.length = length;
  //   this.width = width;
  // }
  // calculateArea() {
  //   return this.length * this.width;
  // }
  // tu propertebi ar gvchirdeba
  calculateArea(length, width) {
    return length * width;
  }
}

let rec = new Rectangle();
console.log(rec.calculateArea(15, 10));

//5
class Calculator {
  static add(num1, num2) {
    return num1 + num2;
  }
}

console.log(Calculator.add(2, 7));

//6

class Temperature {
  #celsius;
  #farenheit;
  constructor(celsius, farenheit) {
    this.#farenheit = farenheit;
    this.#celsius = celsius;
  }
  get getCelsius() {
    return this.#celsius;
  }
  set setCelsius(val) {
    this.#celsius = (val - 32) * (5 / 9);
  }
  get farenheit() {
    return this.#farenheit;
  }
  set setFarenheit(cel) {
    this.#farenheit = (9 / 5) * cel + 32;
  }
}

let cels = new Temperature(20, 80);
console.log(cels);
console.log(cels.getCelsius, cels.farenheit);
console.log((cels.setCelsius = cels.farenheit));
console.log(cels);
// aq shegvidzlia Celsiusu gadavcet, an saertod sxva value
cels.setFarenheit = cels.getCelsius;
cels.setFarenheit = 200;
console.log(cels);
cels.setCelsius = cels.farenheit;
console.log(cels);

//7
class ArrayHelper {
  reverseArray(arr) {
    return arr.reverse();
  }
}
let arr = [1, 2, -5, -111, 22, 10, 12, 36];
let arr2 = ["Mzia", "dkbkjb", "Niko"];

let newSth = new ArrayHelper();
console.log(newSth.reverseArray(arr2));

//8
function createCircle(rad) {
  return new Circle(rad);
}
let newOb = createCircle(10);
console.log(newOb);

// 9 Shopping Cart:
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  getTotalPrice() {
    return this.price * this.quantity;
  }
}

class ShoppingCart {
  constructor(products) {
    this.products = products;
  }
  addProduct(item) {
    return this.products.push(item);
  }
  removeProduct(product) {
    return (this.products = this.products.filter(
      (element) => element.id !== product.id
    ));
  }
  calculateTotal() {
    return this.products.reduce(
      (acc, current) => acc + current.getTotalPrice(),
      0
    );
  }

  checkout() {
    console.log(...this.products, `Total price: ${this.calculateTotal()}`);
  }
  emptyCart() {
    return (this.products = []);
  }
}

let product1 = new Product(1, "book", 5, 3);

let product2 = new Product(2, "chair", 50, 10);
let product3 = new Product(3, "TV", 150, 7);

let shoppingCart1 = new ShoppingCart([]);

shoppingCart1.addProduct(product2);

shoppingCart1.addProduct(product3);
console.log(shoppingCart1);

shoppingCart1.removeProduct(product2);
shoppingCart1.addProduct(product1);
console.log(shoppingCart1.calculateTotal());

shoppingCart1.emptyCart();
console.log(shoppingCart1);
