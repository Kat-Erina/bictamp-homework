Week 2

// homework

// 1)დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი.

let checkingnum = 4;

if (checkingnum % 2 === 0) {
  console.log(`${checkingnum} არის ლუწი`);
} else {
  console.log(`${checkingnum} არის კენტი`);
}

// 2)დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი დადებითია, უარყოფითი თუ ნული.

let checkingnum2 = 0;

if (checkingnum2 > 0) {
  console.log(`${checkingnum2} არის დადებითი`);
} else if (checkingnum2 < 0) {
  console.log(`${checkingnum2} არის უარყოფითი`);
} else {
  console.log(`${checkingnum2} არის 0-ის ტოლი`);
}

//  3)დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა რიცხვი გასაყოფი სხვა რიცხვზე.

let testNum1 = 25;
let testNum2 = 2.2;

if (testNum1 % testNum2 == 0) {
  console.log(`${testNum1} არის გასაყოფი`);
} else {
  console.log(`${testNum1} არ არის გასაყოფი`);
}
// 4)დაწერეთ პროგრამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა.

function checkIfEmpty(param) {
  if (param.length === 0) {
    console.log(`${param} is empty`);
  } else {
    console.log(`${param} is not empty`);
  }
}

checkIfEmpty("lo");

let str = "";

if (str.length === 0) {
  console.log("It is empty");
} else {
  console.log("It is not empty");
}

// 5)დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა სტრიქონი კონკრეტულ სიტყვას.

let testingSub = "film";
let str2 =
  "ur corporate film shows Hapag-Lloyd’s global shipping activities emphasizing our worldwide services";

if (str2.includes(testingSub)) {
  console.log(`${str2} includes ${testingSub}`);
} else {
  console.log(`${str2} does not include ${testingSub}`);
}

// 6)დაწერეთ პროგრამა, რომ იპოვოთ მინიმალური ორი რიცხვიდან.

function checkMin(param1, param2) {
  return Math.min(param1, param2);
}

let res = checkMin(23, 36);
console.log(res);

// პროექტი 7 - თამაში Mad Libs

let noun = prompt("Enter a noun:");
let verb = prompt("Enter a verb:");
let adj = prompt("Enter a adjective:");
let adverb = prompt("Enter a adverb:");
let adjective = prompt("Enter a adjective:");

let res = `${noun} ${verb} ${adj} ${adverb} ${adjective}? That is hilarious!`;
console.log(res);

// პროექტი 8 - ქულების გამომთვლელი

let score = +prompt("Enter the student's score");

if (score >= 90 && score <= 100) {
  console.log(`Student's Score : ${score},\n Grade: "A"`);
} else if (score >= 80 && score <= 89) {
  console.log(`Student's Score : ${score},\n Grade: "B"`);
} else if (score >= 70 && score <= 79) {
  console.log(`Student's Score : ${score},\n Grade: "C"`);
} else if (score >= 60 && score <= 69) {
  console.log(`Student's Score : ${score},\n Grade: "D"`);
} else if (score <= 59) {
  console.log(`Student's Score : ${score},\n Grade: "E"`);
} else {
  console.log("Please put correct score between 0-100");
}

// პროექტი 9 - Simple Math - მარტივი მათემატიკა

let num1 = +prompt("Please enter the first number");
let num2 = +prompt("Please enter the second number");

let sum = num1 + num2;
let diff = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

console.log(sum, diff, mult, div);

// პროექტი 10 - Einstein - აინშტაინი
let mass = prompt("Enter mass in KGs:");

function calculateEn(param) {
  if (param.includes(".") || param.includes(",")) {
    console.log("Please put integers");
  } else {
    return 300000000 ** 2 * +param;
  }
}

let result = calculateEn(mass);
console.log(result);

// პროექტი 11 - Tip Calculator - "ჩაის" კალკულატორი

let mealcost = prompt(" How much was the meal?");
function convertPrice(param) {
  return param.substring(1);
}

let percentage = prompt("What percentage would you like to tip");
function converTip(param) {
  return Number(param.substring(0, param.length - 1)) / 100;
}

let res1 = convertPrice(mealcost);
let res2 = converTip(percentage);

let tip = res1 * res2;

console.log(`Tip: ${tip}`);
// პროექტი 12 - Retirement Calculator - საპენსიო კალკულატორი

let year = new Date().getFullYear();
console.log(year);
let age = +prompt("What is your current age?");
let pensionYear = +prompt("At what age would you like to retire?");

console.log(
  `You have ${
    pensionYear - age
  } years left until you can retire.\n It's ${year},so you can retire in ${
    year + (pensionYear - age)
  }.`
);

// პროექტი 13 - Area of a Rectangular Room - მართკუთხა ოთახის ფართობი

let length = +prompt("What is the length of the room in feet?");
let width = +prompt("What is the width of the room in feet?");
let areaFt = length * width;
let areaM = (areaFt * 0.09290304).toFixed(3);

console.log(
  `You entered dimensions of ${length} feet by ${width} feet.\nThe area is ${areaFt}.\n ${areaM} square meters`
);

// პროექტი 14 - Pizza Party - პიცის წვეულება
let people = +prompt(" How many people?");

let pizza = +prompt(" How many pizza?");

let pieces = +prompt(" How many pieces per pizza?");

let totalpcs = pizza * pieces;
let int = Math.floor(totalpcs / people);
let leftovers = totalpcs % people;

let pcsWord = int > 1 ? "pieces" : "piece";

let result = `${people} with ${pizza} pizzas.\nEach person gets ${int} ${pcsWord} of Pizza.\n ${leftovers} leftovers left`;

console.log(result);

// პროექტი 15 - Paint Calculator - საღებავის კალკულატორი

let ceilingLength = +prompt("enter ceil's length");
let ceilwidth = +prompt("enter ceil's width");
let sq = ceilingLength * ceilwidth;
let neededGalloons = Math.ceil(sq / 350);

console.log(
  ` You will need to purchase ${neededGalloons} gallons of paint to cover ${sq} square feet`
);

// პროექტი 16 - Self-Checkout - თვით-გადახდა

let firstItemPrice = +prompt("Enter the price of item 1");
let firstItemAmount = +prompt("Enter the quantity of item 1");
let secondItemPrice = +prompt("Enter the price of item 2");
let secondItemAmount = +prompt("Enter the quantity of item 2");
let thirdItemPrice = +prompt("Enter the price of item 3");
let thirdItemAmount = +prompt("Enter the quantity of item 3");

let totalCost =
  firstItemAmount * firstItemPrice +
  secondItemAmount * secondItemPrice +
  thirdItemAmount * thirdItemPrice;

let tax = totalCost * 0.055;
let totalPrice = totalCost + tax;

console.log(`
 Subtotal: $${totalCost}
> Tax: $${tax}
> Total: $${totalPrice}`);

// პროექტი 17 - Currency Conversion - ვალუტის კონვერტაცია

let amountEuro = +prompt("How many euros are you exchanging");
let rateFrom = +prompt("What is the exchange rate for Euro? ");
let rateTo = +prompt("What is the exchange rate for dollar? ");
let amountInDollar = (amountEuro * rateFrom) / rateTo;

console.log(
  `${amountEuro} euros at an exchange rate of ${rateFrom} is ${amountInDollar} dollars.`
);

// პროექტი 18 - Computing Simple Interest - მარტივი პროცენტის გამოთვლა
let principal = +prompt("enter the principal");
let interest = +prompt("enter the interest");
let year = +prompt("enter the number of years");
let result = principal * ((interest / 100) * year + 1);

console.log(
  `after ${year} years at ${interest}, the investment will be worth ${result}`
);

// პროექტი 19 - Computing Simple Interest - მარტივი პროცენტის გამოთვლა

let initialAmount = +prompt("Enter the initial amount");
let years = +prompt("Enter years");
let percentage = +prompt("Enter the interest") / 100;
let quantity = +prompt("Enter how many times should you get additioanl money");

let finalAmount =
  initialAmount * (1 + percentage / quantity) ** (quantity * years);

console.log(finalAmount);

// პროექტი 20 - Deep Thought - ღრმა ფიქრი

let inp = prompt(
  "What is the answer to the Great Question of Life, the Universe, and Everything?"
);

let inp2 = inp.toLowerCase();
if (inp2 == "42" || inp2 == "forty-two" || inp2 == "forty two") {
  console.log("yes");
} else {
  console.log("no");
}

// პროექტი 21 - Home Federal Saving Bank - ფედერალური ბანკი

let greeting = prompt("Greeting");
let grt = greeting.trim().toLowerCase();

if (grt == "hello") {
  console.log("$0");
} else if (grt.charAt(0) == "h" && grt != "hello") {
  console.log("$20");
} else {
  console.log("$100");
}

// პროექტი 22 - File Extensions - ფაილის ტიპები

let str = prompt("File name").toLowerCase();

if (str.slice(-5) == ".jpeg") {
  console.log("image/jpeg");
} else if (str.slice(-4) == ".gif") {
  console.log("image/gif");
} else if (str.slice(-4) == ".jpg") {
  console.log("image/jpeg");
} else if (str.slice(-4) == ".png") {
  console.log("image/png");
} else if (str.slice(-4) == ".pdf") {
  console.log("application/pdf");
} else if (str.slice(-4) == ".txt") {
  console.log("text/plain");
} else if (str.slice(-4) == ".zip") {
  console.log("application/zip");
} else {
  console.log("application / octet - stream");
}

// პროექტი 23 - Math Interpreter - მათემატიკური ინტერპრეტატორი


// es pirveli gza eval()-it
let pro = prompt("enter numbers");

let numArrat = pro.split(" ");
let x = numArrat[0];
let y = numArrat[1];
let z = numArrat[2];

if (y == "/" && z == "0") {
  console.log("OOps we can ot devide number by 0");
} else {
  console.log(eval(x + y + z));
}

// es meore gza eval()-is gareshe 

let pro = prompt("enter numbers");

let numArrat = pro.split(" ");
let x = Number(numArrat[0]);
let y = numArrat[1];
let z = Number(numArrat[2]);
let result = 0;
if (y == "/" && z == "0") {
  console.log("OOps we can ot devide number by 0");
} else {
  switch (y) {
    case "+": {
      result = x + z;
      console.log(result);
      break;
    }
    case "-": {
      result = x - z;
      console.log(result);
      break;
    }
    case "/": {
      result = x / z;
      console.log(result);
      break;
    }
    case "*": {
      result = x * z;
      console.log(result);
      break;
    }
    default: {
      console.log("invalid operator");
    }
  }
}


// პროექტი 24 - Meal Time - კვების დრო

let time = prompt("What time is it?");

function convert(param) {
  let timenum = param.split(":");
  let whole = +timenum[0];
  let decimal = Number(timenum[1]);
  let newDecimal = Math.floor((decimal / 60) * 100);
  let newTime = `${whole}.${newDecimal}`;

  if (newTime >= 7 && newTime <= 8) {
    console.log(`time ${time}, it is Breakfast time`);
  } else if (newTime >= 12 && newTime <= 13) {
    console.log(`time ${time}, it is dinner time`);
  } else if (newTime >= 18 && newTime <= 19) {
    console.log(`time ${time}, it is supper time`);
  }

  return newTime;
}

console.log(convert(time));

// პროექტი 25 Adding Numbers
let sum = 0;
for (let i = 0; i < 5; i++) {
  let num = +prompt("White the number");
  sum += num;
}
console.log(sum);

// პროექტი 26 - Tax Calculator - გადასახადის კალკულატორი

let orderAmount = +prompt("What is the order amount?");
let state = prompt("what is the state?").toUpperCase();
let tax = 5.5;

if (state !== "WI") {
  console.log(`The total is $${orderAmount}`);
} else {
  let taxAmount = (Number(orderAmount) * tax) / 100;
  let total = orderAmount + taxAmount;
  console.log(
    `the subtotal is $${orderAmount}, tax is $${taxAmount}, total is $${total}`
  );
}

// პროექტი 27 - Password Validation - პაროლის ვალიდაცია
let correctPassword = "AttackOnTitans!!!20";
let inputPassword = prompt("What is the password?");

if (correctPassword == inputPassword) {
  console.log("Welcome!");
} else {
  console.log("I do not know you.");
}

// პროექტი 28 - Legal Driving Age - მართვის კანონიერი ასაკი
let legalAge = 16;
let userAge = +prompt("What is your age?");

legalAge <= userAge
  ? console.log("You are old enough to legally drive.")
  : console.log("You are not old enough to legally drive.");

// პროექტი 29 - Blood Alcohol Calculator - სისხლში ალკოჰოლის შემცველობის კალკულატორი

let gender = prompt("Please write your gender");
let mass = +prompt("Please write your weight");
let alcAmount = +prompt(
  "Please write amount of Alcohol you drank, please write it in ounces"
);
let lastTime = +prompt("How long ago did you drink alcohol?");

let ind = gender == "female" ? 0.66 : 0.73;

let bac = (alcAmount * 5.14) / (mass * ind) - 0.15 * lastTime;
if (bac >= 0.8) {
  console.log(`your BAC is ${bac}, you are not allowed to drive `);
} else {
  console.log(
    "Your bac is less than the allowed bac, you are allowed to drive"
  );
}

// პროექტი 30 - Temperature Converter - ტემპერატურის კონვერტაცია

let choice = prompt(
  "Press C to convert from Fahrenheit to Celsius,\nPress F to convert from Celsius to Fahrenheit. "
).toLowerCase();

console.log(`your choise is ${choice}`);

if (choice === "c") {
  let tempF = prompt("Please enter the temperature in Farenheit:");
  let resC = ((tempF - 32) * 5) / 9;
  console.log(`Temperature in Celsius is ${resC}`);
} else if (choice === "f") {
  let tempC = +prompt("Please enter the temperature in Celsius:");
  let resF = (tempC * 9) / 5 + 32;
  console.log(`Temperature in Farenheit is ${resF}`);
}

// პროექტი 31 - BMI Calculator - სხეულის მასის ინდექსის კალკულატორი
let weight = +prompt("Please put your weight");
let hght = +prompt("Please put your height");
let resBmi = (weight / (hght * hght)) * 703;

if (resBmi >= 18.5 && resBmi <= 25) {
  console.log(
    `Your bmi is ${resBmi}.\n You are within the ideal weight range.`
  );
} else if (resBmi < 18.5) {
  console.log(
    `Your bmi is ${resBmi}.\n You are underweight, please visit the doctor.`
  );
} else {
  console.log(
    `Your bmi is ${resBmi}.\n You are overweight, please visit the doctor.`
  );
}

// პროექტი 32 - Multistate Sales Tax Calculator - შტატშორისი გაყიდვების გადასახადის კალკულატორი

let orderAmount = +prompt("What is the order amount?");
let state = prompt(" What state do you live in?").toLowerCase();
let tax;
let totalTax;
let totalOrder;

if (state == "wisconsin") {
  let county = prompt("What county do you live in?").toLowerCase();
  if (county == "dunn") {
    tax = 0.004;
    totalTax = orderAmount * tax;
    totalOrder = totalTax + orderAmount;
    console.log(`The tax is $${totalTax},The total is $${totalOrder}`);
  } else if (county == "eau claire") {
    tax = 0.005;
    totalTax = orderAmount * tax;
    totalOrder = totalTax + orderAmount;
    console.log(`The tax is $${totalTax},The total is $${totalOrder}`);
  } else {
    console.log(`The total is $${orderAmount}`);
  }
} else if (state == "illinois") {
  tax = 0.08;
  totalTax = orderAmount * tax;
  totalOrder = totalTax + orderAmount;
  console.log(`The tax is $${totalTax},The total is $${totalOrder}`);
} else {
  console.log(`The total is $${orderAmount}`);
}

// პროექტი 33 - Numbers to Names - რიცხვები სიტყვებში

let numb = prompt("Please put a number");

switch (numb) {
  case "1":
    {
      console.log("The name of the month is January");
    }
    break;
  case "2":
    {
      console.log("The name of the month is February");
    }
    break;
  case "3":
    {
      console.log("The name of the month is March");
    }
    break;
  case "4":
    {
      console.log("The name of the month is April");
    }
    break;
  case "5":
    {
      console.log("The name of the month is May");
    }
    break;
  case "6":
    {
      console.log("The name of the month is June");
    }
    break;
  case "7":
    {
      console.log("The name of the month is July");
    }
    break;
  case "8":
    {
      console.log("The name of the month is August");
    }
    break;
  case "9":
    {
      console.log("The name of the month is September");
    }
    break;
  case "10":
    {
      console.log("The name of the month is December");
    }
    break;
  case "11":
    {
      console.log("The name of the month is November");
    }
    break;
  case "12":
    {
      console.log("The name of the month is December");
    }
    break;
  default: {
    console.log("Please put a valid number");
  }
}

// პროექტი 34 - Comparing Numbers - რიცხვების შედარება

let firstNum = +prompt("Enter the first number");
let secondNum = +prompt("Enter the second number");
let thirdNum = +prompt("Enter the third number");

if (!isNaN(firstNum) && !isNaN(secondNum) && !isNaN(thirdNum)) {
  if (
    firstNum !== secondNum &&
    firstNum !== thirdNum &&
    secondNum !== thirdNum
  ) {
    if (firstNum > secondNum && firstNum > thirdNum) {
      console.log(`${firstNum} is the bggest number`);
    } else if (secondNum > firstNum && secondNum > thirdNum) {
      console.log(`${secondNum} is the bggest number`);
    } else {
      console.log(`${thirdNum} is the bggest number`);
    }
  } else {
    console.log("Please note that numbers must be different");
  }
} else console.log("Please usee only digits/numbers");

// პროექტი 35 - Troubleshooting Car Issues - მანქანის პრობლემების მოგვარება
let response = prompt("Does the engine start?");

if (response == "y") {
  response = prompt("Are all wheels in good condition");
  if (response == "y") {
    response = prompt("Does the steering wheel work?");
    if (response == "y") {
      console.log("Please have this car checked bby profs");
    } else {
      console.log("steering wheel might need to be fixed");
    }
  } else {
    response = prompt("Is any of the  wheels damaged?");
    if (response == "y") {
      console.log("Looks like it needs to be checked by the professional");
    } else {
      response = prompt("Does this car have oil?");
      if (response == "y") {
        console.log("I am sorry, it needs to be checked by the professional");
      } else {
        console.log("it might be caused due to lack of oil");
      }
    }
  }
} else {
  console.log("OOps, looks like it needs professionals' help!");
}
