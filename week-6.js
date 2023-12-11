// 1

function getRandomNumber(num1, num2) {
  const randomNumber = num1 + Math.random() * (num2 - num1);

  return Math.floor(randomNumber);
}

const result = getRandomNumber(10, 30);

console.log(result);

// // 2
let sent = "jvjv jhvjh, jgj j.";

function capitalizeWords(sent) {
  let res = sent.split(" ").map((el) => {
    return el.replace(el[0], el[0].toUpperCase());
  });
  return res.join(" ");
}
console.log(capitalizeWords(sent));

// //3

let objArray = [
  { name: "Kato", age: 30, city: "Tbilisi" },
  { name: "Nato", age: 33, city: "Berlin" },
  { name: "Rati", age: 32, city: "Kutaisi" },
];

function allValues(param, prop) {
  return param.map((el) => {
    return el[prop];
  });
}

console.log(allValues(objArray, "age"));

// // //4
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

let sent2 = "abcdefffff ghijklmnopqrstvuwxyz";

function checkIfTrue(str, alp) {
  let res = str.split("");

  let res2 = alp.every((el) => res.includes(el));
  return res2;
}

console.log(checkIfTrue(sent2, alp));

// //5
let sente =
  "Note that sets do not have indexes, and the order of elements is based on insertion order. If you need an ordered collection with indexes";

function uniqueWords(param) {
  let arr = param.split(" ");
  let res = new Set(arr);
  let sth = Array.from(res).map((el) => el.toLowerCase());

  let finalResult = sth.filter((item) => {
    return item != "the" && item != "a" && item != "is";
  });
  return finalResult.sort();
}

console.log(uniqueWords(sente));

// //6
let arr = ["kato", true, false, "", 0, 35, undefined, null, NaN];
let fileteredArr = arr.filter((el) => !el);
console.log(fileteredArr);
//7

let sente2 =
  "Note that sets do not have indexes, and the order of elements is based on insertion order. If you need an ordered collection with indexes";

function sortArray(param) {
  let arr = param.split(" ");
  return arr.reverse().join(" ");
}

console.log(sortArray(sente2));

// //8

let word1 = "racecar";
function checkPalindrome(param1) {
  let testRes = param1.split("");
  let arr = [];
  testRes.forEach((element) => {
    return arr.unshift(element.toLowerCase());
  });
  let test3 = arr.join("");
  return param1.toLowerCase() == test3;
}

console.log(checkPalindrome(word1));

// //9

let numsarray = [1, 101, 230, 0.5, -10, 23, 65];

function biggestNumber(arr) {
  let num = 0;
  for (let item of arr) {
    if (item > num) {
      num = item;
    }
  }
  return num;
}

console.log(biggestNumber(numsarray));

// //10

function calculateSum(arr) {
  let num = 0;
  for (let item of arr) {
    num += item;
  }
  return num;
}

console.log(calculateSum(numsarray));
