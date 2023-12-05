// 1)დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა რიცხვის ჯამი.

let numbersarray = [10, 21, 56, 10, -5, 36];

function calculateSum(arr) {
  let sum = 0;

  for (number of arr) {
    sum += number;
  }
  return sum;
}

console.log(calculateSum(numbersarray));

// 2)დაწერეთ პროგრამა მასივში რიცხვების საშუალოს საპოვნელად.

let numbersarray = [10, 21, 56, 10, -5, 36];

function findAverage(arr) {
  let sum = 0;
  for (number of arr) {
    sum += number;
  }
  return Number((sum / arr.length).toFixed(2));
}
console.log(findAverage(numbersarray));

// 3)დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.

let numbersarray = [10, 21, 56, 1, 13, 10, -5, 36, 12, 0, 5.23];

function sortarray(arr) {
  let newArray = arr.sort((a, b) => a - b);
  return newArray;
}

console.log(sortarray(numbersarray));

// 4)დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.
let numbersarray = [10, 21, 56, 1, 13, 10, -5, 36, 111, 12, 0, 5.23];

function findTheBiggestNumber(arr) {
  let biggestNumber = 0;
  for (number of arr) {
    if (number > biggestNumber) {
      biggestNumber = number;
    }
  }
  return biggestNumber;
}

console.log(findTheBiggestNumber(numbersarray));

// 5)დ)აწერეთ პროგრამა მასივის ყველაზე პატარა ელემენტის მოსაძებნად.

let numbersarray = [
  10, 21, -5.25, -35, 56, 1, 13, 10, -5, 36, 111, 12, 0, 5.23,
];

function findTheSmallestNumber(arr) {
  let biggestNumber = 0;
  for (number of arr) {
    if (number < biggestNumber) {
      biggestNumber = number;
    }
  }
  return biggestNumber;
}

console.log(findTheSmallestNumber(numbersarray));

// 6)დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.

let numbersarray = [
  10, 21, -5.25, -35, 56, 1, 13, 10, -5, 36, 111, 12, 0, 5.23,
];

function findIfIncludes(arr, element) {
  //pirveli varinaati includes() is gamoyenebit;
  // if (arr.includes(element)) {
  //   return true;
  // }
  // return false;
  // meore varianti includes()-is gareshe
  for (number of arr) {
    if (number == element) {
      return true;
    }
  }
  return false;
}

console.log(findIfIncludes(numbersarray, 10));

// 7)დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.

let numbersarray = [10, -5.25, -35, 13, true, 1, 13, 10, -5, "me", 12, 0, 5.23];

function getItem(arr, item) {
  let newArr = Array.from(new Set(arr));
  let index = arr.indexOf(item);
  console.log(newArr);
  newArr.splice(index, 1);
  return newArr;
}

console.log(getItem(numbersarray, 13));
// 8)დაწერეთ პროგრამა მასივში კონკრეტული ელემენტის გავრცელების რაოდენობის დასათვლელად.

let numbersarray = [
  10,
  -35,
  true,
  1,
  13,
  13,
  10,
  -5,
  "me",
  13,
  "isini",
  12,
  12,
];
function elementPosition(arr, element) {
  let count = 0;
  for (let item of arr) {
    if (item === element) {
      count++;
    }
  }
  return count;
}

console.log(elementPosition(numbersarray, -1));

// 9)დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი.

let array = [2, 56, 3, 11, 0.25, 8, 12, 33, 16];

function findSumOfEvenNumbers(arr) {
  let sum = 0;
  for (let number of arr) {
    if (number % 2 == 0) {
      sum += number;
    }
  }
  return sum;
}
console.log(findSumOfEvenNumbers(array));
// 10)დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.
let array = [2, 56, 3, 110, 0.25, 8, -12, 33, 16];

function findSecondBigNumber(arr) {
  let newarray = arr.sort((a, b) => a - b);
  return newarray[newarray.length - 2];
}

console.log(findSecondBigNumber(array));

// 11)დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.
let array1 = [9, 3, 110, 0.25, 8, -12, 33, 16];
let array2 = [9, 3, 0.25, 8, 110, -12, 33, 16];

function checkTwoArrays(arr1, arr2) {
  if (arr1.length == arr2.length) {
    for (let item of arr1) {
      if (!arr2.includes(item)) {
        console.log("these 2 arrays do not match");
        return;
      }
    }
  } else {
    console.log("These 2 arrays do not match");
    return;
  }
  console.log("These 2 arrays match");
}

checkTwoArrays(array1, array2);

// 12)დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.

let array1 = [2, 56, 3, -110, 0.25, 8, -12, 33, 16];
let array2 = [56, 19, 3, 0.25, -8, 101, -14, 35, 26];

function giveMeSortedArray(arr1, arr2) {
  let newArray1 = arr1.sort((a, b) => a - b);
  let newArray2 = arr2.sort((a, b) => a - b);
  let newArray3 = [...newArray1, ...newArray2].sort((a, b) => a - b);
  return newArray3;
}

console.log(giveMeSortedArray(array1, array2));

// 13)დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად

let array = ["me", "nika", "ilia", "rati", "erekle", "lam-pari", "elza", "ala"];

function sortArray(param) {
  param.forEach((el) => {
    return el.toLowerCase();
  });
  console.log(param);
  return param.sort();
}

console.log(sortArray(array));
//14) დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.

let array1 = [1, 10, 2, 3, 50, 25];
let array2 = [10, -2, 3, 5, 2.5];
let array3 = [2, 3, 50, 10, 250];
let array = [-1, -2, 11, 10, 3, -50, 25];

function checkCommonElements(...arrs) {
  let updatedArray = [...arrs];
  let [firstarray] = updatedArray;

  const elements = firstarray.filter((element) => {
    return updatedArray.every((array) => {
      return array.includes(element);
    });
  });
  return elements;
}

console.log(checkCommonElements(array1, array2, array3, array));

// 15) შექმენით ობიექტი სახელწოდებით car თვისებებით მარკის, მოდელისა და წლისთვის. დაბეჭდეთ ობიექტი კონსოლზე.

let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};

console.log(car);
// 16)დაამატეთ მეთოდი car ობიექტს სახელწოდებით start, რომელიც ბეჭდავს "The car is starting!" როდესაც გამოძახება. გამოიძახეთ დაწყების მეთოდი.

car.start = () => {
  console.log("The Car is starting");
};
car.start();

// 17)შექმენით სხვა ობიექტი სახელად Person სახელის, ასაკისა და ქალაქის თვისებებით. დაბეჭდეთ სახელის თვისება წერტილის გამოყენებით.

let person = {
  name: "Kato",
  age: 30,
  city: "Tbilisi",
};

console.log(person.name);

//18) დაამატეთ ახალი თვისება სახელწოდებით job, Person ობიექტს და მიანიჭეთ მას მნიშვნელობა. დაბეჭდეთ განახლებული ობიექტი.

person.job = "Web-Developer";
console.log(person);

//პროექტი 48 - Magic 8 Ball

let answers = ["Yes", "No", "Ask Again Later"];
let question = prompt("Whats your question?");

function answerQuestion(param) {
  if (param != "") {
    let randomNumber = Math.floor(Math.random() * 3);
    let answer = answers[randomNumber];

    console.log(answer);
  } else if (param == "") {
    console.log("Question field can not be ampty");
  }
}

answerQuestion(question);

// პროექტი 49 - Picking a Winner - გამარჯვებულის არჩევა

function whoIswinner() {
  let array = ["Kato", "Rati", "Magda", "Natia", "Maka", "Zura", "Nino"];

  while (array.length != 0) {
    let question = prompt("Enter a name...");
    if (question == "") {
      let random = Math.floor(Math.random() * array.length);
      console.log(`The winner is ${array[random]}`);
      array.splice(random, 1);
    }
  }
  return array;
}

whoIswinner();

// პროექტი 50 - Password Generator
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialCharacters = ["/", ">", "$", "%", "!", "~", "-", "_"];
let alp = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let length = Number(prompt("Whats the minimum length?"));
let number = Number(prompt("How many numbers?"));
let chars = Number(prompt("How many special characters?"));

function findNumbers(param, param2) {
  let resultNumber = [];
  if (param.length == "" || isNaN(param) || param == 0) {
    console.log("Please write digits only");
    return;
  } else {
    for (let i = 0; i < param; i++) {
      resultNumber.push(param2[Math.floor(Math.random() * param2.length)]);
    }
  }

  return resultNumber;
}

function findChars(param1, param2) {
  let resultChars = [];
  if (param1.length == "" || isNaN(param1) || param1 == 0) {
    console.log("Please write digints only");
    return;
  } else {
    for (let i = 0; i < param1; i++) {
      resultChars.push(param2[Math.floor(Math.random() * param2.length)]);
    }
  }

  return resultChars;
}

function generatePassword(leng) {
  let chosenChars = findChars(chars, specialCharacters);
  let chosenNumbers = findNumbers(number, numbers);

  let password = "";

  if (
    chosenChars == undefined ||
    chosenNumbers == undefined ||
    leng == "" ||
    leng == 0
  ) {
    console.log("Sth went wrong");
  } else {
    let result = [...chosenChars, ...chosenNumbers];
    if (leng < result.length) {
      console.log("password must be longer");
      return;
    } else {
      let alpLength = leng + 1 - chosenChars.length - chosenNumbers.length;
      for (let i = 0; i < alpLength; i++) {
        result.push(alp[Math.floor(Math.random() * alp.length)]);
      }
    }

    while (result.length != 0) {
      let index = Math.floor(Math.random() * result.length);
      let symbol = result.splice(index, 1);
      password += symbol;
    }
  }
  return password;
}

console.log(generatePassword(length));

// პროექტი 51 - Nutrition Facts - ფაქტები ნუტრიციაზე
let fruits = [
  {
    name: "apple",
    calories: "130",
  },
  { name: "avocado", calories: "50" },
  { name: "banana", calories: "110" },
  { name: "cantaloupe", calories: "50" },
  { name: "grapefruit", calories: "60" },
  { name: "grapes", calories: "90" },
  { name: "honeydew", calories: "50" },
  { name: "kiwifruit", calories: "90" },
  { name: "lemon", calories: "15" },
  { name: "lime", calories: "20" },
  { name: "nectarine", calories: "60" },
  { name: "orange", calories: "80" },
  { name: "peach", calories: "60" },
  { name: "pear", calories: "100" },
  { name: "pineapple", calories: "50" },
  { name: "plums", calories: "70" },
  { name: "strawberries", calories: "50" },
  { name: "sweet cherries", calories: "100" },
  { name: "tangerine", calories: "50" },
  { name: "watermelon", calories: "80" },
];

let fruit = prompt("Item:");

function findCalories(item, array) {
  let result = "";
  let targetItem = array.find((element) => {
    return Object.values(element)[0] === item;
  });
  if (!targetItem) {
    result = "Incorret Input";
    return result;
  } else {
    result = `Calories: ${targetItem.calories}`;
    return result;
  }
}

console.log(findCalories(fruit, fruits));

// პროექტი 52 - Employee List Removal - თანამშრომლის სიიდან ამოღება

let employees = [
  "John Smith",
  "Jackie Jackson",
  "Chris Jones",
  "Amanda Cullen",
  "Jeremy Goodwin",
];

function removeEmployer(param) {
  let result = `There are ${employees.length} employees;\n ${param.map(
    (elemenet) => {
      return `${elemenet}\n`;
    }
  )}`;
  let empName = prompt(
    `${result.replaceAll(",", " ")}\n  Enter an employee name to remove:`
  );

  if (param.includes(empName)) {
    let index = param.indexOf(empName);
    param.splice(index, 1);
    console.log(`There are ${param.length} employees:`);
    param.forEach((elemenet) => {
      console.log(elemenet);
    });
  } else {
    console.log("Please put correct name");
  }
}

removeEmployer(employees);

// პროექტი 53 - Computing Statistics - სტატისტიკის წარმოება

let array = [];

let answer;
while (answer !== "done") {
  answer = prompt("Enter number:").toLowerCase();
  if (!isNaN(Number(answer)) && Number(answer) != 0 && answer != "") {
    array.push(Number(answer));
  }
}

function statistics(param) {
  let min = Math.min(...param);

  let max = Math.max(...param);

  let sum = param.reduce((acc, element) => {
    return acc + element;
  }, 0);
  let average = sum / param.length;

  let deviation = 0;
  for (let item of param) {
    deviation += (item - average) ** 2;
  }

  let averageDeviation = Math.sqrt(deviation / param.length);
  console.log(
    `The numbers are: ${[...param]},\nthe average is ${average.toFixed(
      3
    )}\n The minimum is ${min}\n The Maximum is ${max}\n The standard deviation is ${averageDeviation.toFixed(
      3
    )}`
  );
}

statistics(array);
