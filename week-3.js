// week3
//1
// 1)დაწერეთ პროგრამა რომელიც კონსოლში გამოპრინტავს რიცხვებს 0 დან 10 ის ჩათვლით.

for (let i = 0; i < 11; i++) {
  console.log(i);
}

// 2)დაწერეთ პროგრამა წინადადებაში ყველაზე გრძელი სიტყვის სიგრძის საპოვნელად.

let sent =
  "me minda viyo ksjsbdnnnnnnnnnnnnnnnnnnnnkwjb kqwjjdbkhhhhhhhhhwqb ksjscsbk"; // le sentArray;

function findLongestWord(param) {
  let sentArray = param.split(" ");
  let leng = 1;
  let longestWord = sentArray[0];
  for (let i = 0; i < sentArray.length; i++) {
    if (sentArray[i].length > leng) {
      leng = sentArray[i].length;
      longestWord = sentArray[i];
    }
  }
  return longestWord.length;
}

console.log(findLongestWord(sent));

// 3)დაწერეთ პროგრამა, რომელიც ბეჭდავს ლუწ რიცხვებს 1-დან 20-მდე for loop-ის გამოყენებით.

for (let i = 0; i < 21; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 4)დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს შეიყვანოს რიცხვი და დაბეჭდოს "Hello!" იმდენჯერ რამდენსაც უდრის ეს  შეყვანილი რიცხვი.

let qnt = +prompt("enter any number");
let cur = 0;
while (cur < qnt) {
  console.log("Hello");
  cur++;
}

// 5)დაწერეთ პროგრამა, რომელიც გამოთვლის რიცხვების ჯამს 1-დან 100-მდე for loop-ის გამოყენებით და დაბეჭდავს შედეგს.

let num = 0;
for (let i = 0; i < 101; i++) {
  num += i;
}

// console.log(num);

// 6)დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.

let num = +prompt("enter number between 1-12");

switch (num) {
  case 1: {
    console.log("It is January, there are 31 days");
    break;
  }
  case 2: {
    console.log("It is February, there are 29 days");
    break;
  }
  case 3: {
    console.log("It is March, there are 31 days");
    break;
  }
  case 4: {
    console.log("It is April, there are 30 days");
    break;
  }
  case 5: {
    console.log("It is May, there are 31 days");
    break;
  }
  case 6: {
    console.log("It is June, there are 30 days");
    break;
  }
  case 7: {
    console.log("It is July, there are 31 days");
    break;
  }
  case 8: {
    console.log("It is August, there are 31 days");
    break;
  }
  case 9: {
    console.log("It is September, there are 30 days");
    break;
  }
  case 10: {
    console.log("It is October, there are 31 days");
    break;
  }
  case 11: {
    console.log("It is November, there are 30 days");
    break;
  }
  case 12: {
    console.log("It is December, there are 31 days");
    break;
  }
  default: {
    console.log("Opps enter a valid number");
  }
}

// 7)დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს გამოიცნოს საიდუმლო რიცხვი 1-დან 10-მდე. განაგრძეთ გამოცნობის მოთხოვნა, სანამ ისინი სწორად გამოიცნობენ, while loop-ის გამოყენებით.

let secretNumber = 9;
let usersNumber = +prompt("Write down the secret number");
while (usersNumber !== secretNumber) {
  usersNumber = +prompt("Write down the secret number");
}

console.log("Congrats!");

// 8)დაწერეთ პროგრამა, რომელიც მიიღებს შეფასებას (A, B, C, D ან F) ინფუთის სახით და დაბეჭდავს შესაბამის შეტყობინებას switch/case-ის გამოყენებით. მაგალითად, თუ ინფუთი არის "A", უნდა დაბეჭდოს "შესანიშნავი!"

let grade = prompt("Enter the grade").toUpperCase();

switch (grade) {
  case "A": {
    console.log("Wonderful");
    break;
  }
  case "B": {
    console.log("Good Job!");
    break;
  }
  case "C": {
    console.log("You can do much better!");
    break;
  }
  case "D": {
    console.log("Dont Give us, you can do better!");
    break;
  }
  case "F": {
    console.log("Oops, sorry, you failed! :(");
    break;
  }
  default:
    console.log("Enter a valid grade, pls");
}

9)დაწერეთ პროგრამა, რომელიც მოუწოდებს მომხმარებელს შეიყვანოს პაროლი. პროგრამამ უნდა გააგრძელოს პაროლის მოთხოვნა სწორი პაროლის შეყვანამდე. სწორი პაროლის შეყვანის შემდეგ აჩვენეთ წარმატების შეტყობინება. სწორი პაროლი არის "12345".

let correctPassword = "12345";

let usersPassword = prompt("Enter the password");

while (usersPassword != correctPassword) {
  usersPassword = prompt("Enter the password one more time:");
}

console.log("Password is correct");

// 10)დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.

let usersNumber = +prompt("Enter at least 2 digit number");

function sumDigits(num) {
  let strNumber = String(num);
  let sum = 0;
  for (let i = 0; i < strNumber.length; i++) {
    sum += Number(strNumber[i]);
  }
  return sum;
}

let testResult = sumDigits(usersNumber);
console.log(testResult);

// 11)დაწერეთ ფუნქცია სახელად countBs, რომელიც იღებს სტრიქონს თავის ერთადერთ არგუმენტად და აბრუნებს სტრიქონში დიდი "B" სიმბოლოების რაოდენობას.

let str = "AA  BB kBsksdbdaskjbB skjdbB BB qsB B B BBqwldkhl B";

function countBs(param) {
  let count = 0;
  for (let i = 0; i < param.length; i++) {
    if (param[i] == "B") {
      count++;
    }
  }
  return count;
}

let bResult = countBs(str);
console.log(bResult);

// 36- Anagram Checker - ანაგრამის შემმოწმებელი
let firstStr = prompt("enter the first string:").trim();
let secondStr = prompt("enter the second string:").trim();
let matches = 0;

if (firstStr.length == secondStr.length) {
  for (let i = 0; i < firstStr.length; i++) {
    if (secondStr.includes(firstStr[i])) {
      matches++;
    }
  }
}

if (matches == firstStr.length) {
  console.log("They are anagrams");
} else console.log("They are not anagrams");

// პროექტი 37 - Password Strength Indicator - პაროლის სიძლიერის შემფასებელი

let userPassword = prompt("Enter password");
let veryWeekPassword = /^\d{1,7}$/;
let weekPassword = /^^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{1,7}$/;
let strongPassword = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

let veryStrong = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,}$/;

function passwordValidator(param) {
  if (veryWeekPassword.test(param)) {
    console.log("It is a very week password");
  } else if (weekPassword.test(param)) {
    console.log("It is a week password, but not too week");
  } else if (strongPassword.test(param)) {
    console.log("It is a strong password");
  } else if (!param.includes(" ") && veryStrong.test(param)) {
    console.log("It is a very strong password");
  } else console.log("Password does not satisfy the requirements");
  return param;
}

passwordValidator(userPassword);

// პროექტი 38 - Months to Pay Off a Credit Card - საკრედიტო ბარათის დაფარვისთვის საჭირო თვეები

let credit = +prompt("What is your balance?"); // loan amount

let annualInterest = +prompt("What is APR on the card (as a percent)?"); // annual interest rate
let monthlyPayment = +prompt("What is the monthly payment you can make?"); // monthly payment

function countMonthsUntilPaidOff(balance, apr, monthlyPayment) {
  let daily = apr / 100 / 365;
  let months = Math.ceil(
    (-1 / 30) *
      (Math.log(1 + (balance / monthlyPayment) * (1 - (1 + daily) ** 30)) /
        Math.log(1 + daily))
  );

  return months;
}

let result = countMonthsUntilPaidOff(credit, annualInterest, monthlyPayment);

alert(`it will take ${result} months to pay off this card.`);

// პროექტი 39 - Validating Inputs - Input-ების ვალიდაცია

//meechveba ramdenad sworad wavedi, logika mushaobs magram dzaan grdzeli kodia, 

let name = prompt("Enter name");
let lastName = prompt("Enter lastname");
let zip = prompt("Enter zip");
let id = prompt("Enter id");
let idRegex = /^[A-Za-z]{2}-\d{3,4}$/;
let zipRegex = /^\d{2,}$/;
let validStatus = false;
// es aris pirveli gza,  grdzeli kodi
function checkName(param) {
  if (param == "") {
    console.log(`The name must be filled in.`);
    validStatus = false;
  } else if (param.length == 1) {
    console.log(`name is too short`);
    validStatus = false;
  } else {
    validStatus = true;
  }

  return validStatus;
}

function checkLastName(param) {
  if (param.length == 0) {
    console.log("The lastname must be filled in.");
    validStatus = false;
  } else if (param.length == 1) {
    console.log("lastname is too short");
    validStatus = false;
  }

  return validStatus;
}

function checkId(param) {
  if (idRegex.test(param)) {
    validStatus = true;
  } else {
    console.log("Invalid ID");
    validStatus = false;
  }
  return validStatus;
}

function checkZip(param) {
  if (zipRegex.test(param)) {
    validStatus = true;
  } else {
    console.log("The ZIP code must be numeric.");
    validStatus = false;
  }
  return validStatus;
}

function validateInput(name,lastName,zip,id) {
  let nameVal = checkName(name);
  let lastNameVal = checkLastName(lastName);
  let idVal = checkId(id);
  let zipVal = checkZip(zip);

  if (nameVal && lastNameVal && idVal && zipVal) {
    console.log("No errors found");
  } else {
    checkName(name);
    checkLastName(lastName);
    checkId(id);
    checkZip(zip);
  }
}

validateInput(name,lastName,zip,id)

// es aris shedarebit mokle gza , meore varianti
function validateInput(...params) {
  let [name, lastName, zip, id] = [...params];

  if (name.length == 1) {
    console.log("name is too short");
  } else if (name.length == 0) {
    console.log("Please fill out the name field");
  } else if (lastName.length == 1) {
    console.log("lastname is too short");
  } else if (lastName.length == 0) {
    console.log("Please fill out the lastname filed");
  } else if (!zipRegex.test(zip)) {
    if (zip == "") {
      console.log(`zip can not be empty`);
    } else console.log(`${zip} is not a valid zip`);
  } else if (!idRegex.test(id)) {
    if (id == "") {
      console.log("ID can not be empty");
    } else console.log(`${id} is not a valid id`);
  } else console.log("No errors found");
}

validateInput(name, lastName, zip, id);



// პროექტი 40 - Camel Case

let usersVariable = prompt("Enter a variable name as a camelCase:");
let reg = /^[a-z]+$/;

function camelCase(param) {
  let result = "";
  if (reg.test(param)) {
    result = param;
  } else {
    for (let i = 0; i < param.length; i++) {
      if (reg.test(param[i])) {
        result += param[i];
      } else if (param[i] == " ") {
        console.log("You can not write 'spaces'");
        return;
      } else {
        result += `_${param[i].toLowerCase()}`;
      }
    }
  }
  return result;
}

console.log(camelCase(usersVariable));

// პროექტი 41 - Coke Machine - კოკა-კოლის მანქანა

let coinAmount = +prompt("Insert the coin");
let maxSum = 50;
let sum = 0;

while (maxSum <= 50 && maxSum != 0) {
  if (coinAmount == 5 || coinAmount == 10 || coinAmount == 25) {
    sum += coinAmount;
    maxSum -= coinAmount;
    if (maxSum > 0) {
      coinAmount = +prompt(`You paid ${sum} cents Amount due ${maxSum} cents`);
    } else if (maxSum < 0) {
      console.log(
        `You paid  ${sum} cents here is your charge:${maxSum * -1} cents`
      );
      break;
    } else console.log("Charged owned:0");
  } else coinAmount = +prompt(`Please put either 5, 10 or 15 cents`);
}

// პროექტი 42 - Just setting up my twttr - ჩემი twttr-ის დაყენება

let inp = prompt("Enter input").toLowerCase();
let result = "";
for (let i = 0; i < inp.length; i++) {
  if (
    inp[i] == "i" ||
    inp[i] == "a" ||
    inp[i] == "e" ||
    inp[i] == "o" ||
    inp[i] == "u"
  ) {
    continue;
  } else result += inp[i];
}

console.log(result);

// პროექტი 43 - Vanity Plates - სანომრე ნიშნები

let plateNumber = prompt("plate number").toUpperCase();
let strRegex = /^[A-Z]$/;
let symbolRegex = /^[\W]$/;
let numRegex = /^[\d]$/;

if (plateNumber.length < 2 || plateNumber.length > 6) {
  console.log("invalid");
} else {
  if (strRegex.test(plateNumber[0]) && strRegex.test(plateNumber[1])) {
    if (plateNumber.length == 2) {
      console.log("Valid");
    } else if (
      plateNumber.length > 2 &&
      strRegex.test(plateNumber[plateNumber.length - 1])
    ) {
      let result = "valid";
      for (let i = 0; i < plateNumber.length; i++) {
        if (numRegex.test(plateNumber[i]) || symbolRegex.test(plateNumber[i])) {
          result = "invalid";
        } else continue;
      }
      console.log(result);
    } else if (plateNumber.length > 2) {
      let result = "valid";
      for (let i = 0; i < plateNumber.length; i++) {
        if (
          symbolRegex.test(plateNumber[i]) ||
          (plateNumber[i] == 0 && strRegex.test(plateNumber[i - 1]))
        ) {
          result = "invalid";
        } else continue;
      }
      console.log(result);
    }
  } else {
    console.log("invalid");
  }
}

// პროექტი 44 - Handling Bad Input - ცუდი Input-ის მართვა

let year;

let userInput;
do {
  userInput = prompt(" What is the rate of return?");

  if (isNaN(userInput) || userInput === "0" || userInput == 0) {
    alert("this is not a valid input");
  } else {
    year = 72 / userInput;
    alert(`It will take ${year} years to double your initial investment.`);
  }
} while (isNaN(userInput) || userInput === "0" || userInput == 0);

// პროექტი 45 - Multiplication Table - გამრავლების ტაბულა
let max = 13;

for (let i = 0; i < max; i++) {
  for (let j = 0; j < 13; j++) {
    console.log(`${i}*${j}=${i * j}`);
  }
}

// პროექტი 46 - Karvonen Heart Rate
// es pirveli gza
let restingHeart;
let age;
do {
  restingHeart = +prompt("enter pulse");
  age = +prompt("enter age");

  if (
    isNaN(restingHeart) ||
    isNaN(age) ||
    restingHeart == " " ||
    age == " " ||
    restingHeart == 0 ||
    age == 0
  ) {
    alert("Please write numbers only");
  } else {
    for (let i = 55; i < 100; i += 5) {
      let targetHeartRate =
        (220 - age - restingHeart) * (i / 100) + restingHeart;

      console.log(`${i} : ${Math.round(targetHeartRate)} bpm`);
    }
  }
} while (
  isNaN(restingHeart) ||
  isNaN(age) ||
  restingHeart == " " ||
  age == " " ||
  restingHeart == 0 ||
  age == 0
);

// es meore gza 
let restingHeart;
let age;
let invalidValue;
do {
  restingHeart = +prompt("enter pulse");
  age = +prompt("enter age");

  invalidValue =
    isNaN(restingHeart) ||
    isNaN(age) ||
    restingHeart == "" ||
    age == "" ||
    restingHeart == 0 ||
    age == 0;

  if (invalidValue) {
    alert("Please write numbers only");
  } else {
    for (let i = 55; i < 100; i += 5) {
      let targetHeartRate =
        (220 - age - restingHeart) * (i / 100) + restingHeart;

      console.log(`${i} : ${Math.round(targetHeartRate)} bpm`);
    }
  }
} while (invalidValue);

// პროექტი 47 - Guess The Number Game - თამაში რიცხვის გამოცნობაზე

alert("Lets Play 'guess the number'");
let level;
let attempts;
let num;
let question;
let valid;

do {
  level = Number(prompt("Pick a difficulty level (1, 2, or 3):"));
  attempts = 0;
  if (level == 1) {
    num = Math.floor(Math.random() * 10) + 1;
  } else if (level == 2) {
    num = Math.floor(Math.random() * 100) + 1;
  } else if (level == 3) {
    num = Math.floor(Math.random() * 1000) + 1;
  }

  let usersGuess = Number(prompt("I have my number. What's your guess?"));

  if (!isNaN(usersGuess) || isNaN(usersGuess)) {
    while (usersGuess != num) {
      if (usersGuess > num) {
        usersGuess = Number(prompt("Too high. Guess again:"));
        attempts++;
      } else if (usersGuess < num && usersGuess != 0) {
        usersGuess = Number(prompt("Too low. Guess again:"));
        attempts++;
      } else if (isNaN(usersGuess)) {
        usersGuess = Number(prompt("Not correct Input. What's your guess?"));
        attempts++;
      } else if (usersGuess == 0 || usersGuess == " ") {
        usersGuess = Number(prompt("Not correct Input. What's your guess?"));
        attempts++;
      }
    }

    if (usersGuess == num) {
      attempts++;
      alert(`You got it in ${attempts} guesses!`);

      question = prompt("Play again?");
      if (question == "n") {
        alert("Goodbye!");
        valid = false;
      } else if (question == "y") {
        valid = true;
      }
    }
  }
} while (valid);



