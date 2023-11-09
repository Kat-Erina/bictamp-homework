// Project#1

// let name = prompt("What is your name?");
// console.log(`Hello, ${name}`);

//#2
// let inp = prompt("Please write anything you like");
// console.log(`Your provided string consists of ${inp.length} symbols`);

//#3

// let str = prompt("What is the quote?");
// let author = prompt("Who said it");

// console.log(
//   `What is the quote? ${str},\nWho said that? ${author}.\n${author} says, '${str}'`
// );

//4

// let val = prompt("Please write anything");
// console.log(val.toLowerCase());

//5

// let val2 = prompt("Please write anything");

// console.log(val2.replaceAll(" ", "..."));

// 6

// let val3 = prompt("Put any string and emoji");
// function convert(param) {
//   //   let updatedVal=param.replace(":)")
//   if (param.includes(":)")) {
//     return param.replaceAll(":)", "🙂");
//   } else if (param.includes(":(")) {
//     return param.replaceAll(":(", "🙁");
//   }
// }

// function main(param) {
//   return convert(param);
// }

// let res = main(val3);
// console.log(res);

//Week 2

//#1 Mad Libs

// let noun = prompt("Enter a noun:");
// let verb = prompt("Enter a verb:");
// let adj = prompt("Enter a adjective:");
// let adverb = prompt("Enter a adverb:");
// let adjective = prompt("Enter a adjective:");

// let res = `${noun} ${verb} ${adj} ${adverb} ${adjective}? That is hilarious!`;
// console.log(res);

//2

// let score = +prompt("Enter the student's score");

// if (score >= 90 && score <= 100) {
//   console.log(`Student's Score : ${score},\n Grade: "A`);
// } else if (score >= 80 && score <= 89) {
//   console.log(`Student's Score : ${score},\n Grade: "B`);
// } else if (score >= 70 && score <= 79) {
//   console.log(`Student's Score : ${score},\n Grade: "C`);
// } else if (score >= 60 && score <= 69) {
//   console.log(`Student's Score : ${score},\n Grade: "D`);
// } else if (score <= 59) {
//   console.log(`Student's Score : ${score},\n Grade: "E`);
// } else {
//   console.log("Please put correct score between 0-100");
// }

//3 Simple Math

// let num1 = +prompt("Please enter the first number");
// let num2 = +prompt("Please enter the second number");

// let sum = num1 + num2;
// let diff = num1 - num2;
// let mult = num1 * num2;
// let div = num1 / num2;

// console.log(sum, diff, mult, div);

//4 Einstein
// let mass = prompt("Enter mass in KGs:");

// function calculateEn(param) {
//   if (param.includes(".") || param.includes(",")) {
//     console.log("Please put integers");
//   } else {
//     return 300000000 * +param;
//   }
// }

// let result = calculateEn(mass);
// console.log(result);

//5 Tip Calculator

// let mealcost = prompt(" How much was the meal?");
// function convertPrice(param) {
//   return param.substring(1);
// }

// let percentage = prompt("What percentage would you like to tip");
// function converTip(param) {
//   return Number(param.substring(0, param.length - 1)) / 100;
// }

// let res1 = convertPrice(mealcost);
// let res2 = converTip(percentage);

// let tip = res1 * res2;

// console.log(`Tip: ${tip}`);
// 6

// let year = new Date().getFullYear();
// console.log(year);
// let age = +prompt("What is your current age?");
// let pensionYear = +prompt("At what age would you like to retire?");

// console.log(
//   `You have ${
//     pensionYear - age
//   } years left until you can retire.\n It's ${year},so you can retire in ${
//     year + (pensionYear - age)
//   }.`
// );

//7

// let length = +prompt("What is the length of the room in feet?");
// let width = +prompt("What is the width of the room in feet?");
// let areaFt = length * width;
// let areaM = (areaFt * 0.09290304).toFixed(3);

// console.log(
//   `You entered dimensions of ${length} feet by ${width} feet.\nThe area is ${areaFt}.\n ${areaM} square meters`
// );

//8
// let people = +prompt(" How many people?");

// let pizza = +prompt(" How many pizza?");

// let pieces = +prompt(" How many pieces per pizza?");

// let totalpcs = pizza * pieces;
// let int = Math.floor(totalpcs / people);
// let leftovers = totalpcs % people;

// let pcsWord = int > 1 ? "pieces" : "piece";

// let result = `${people} with ${pizza} pizzas.\nEach person gets ${int} ${pcsWord} of Pizza.\n ${leftovers} leftovers left`;

// console.log(result);

//9

// let ceilingLength = +prompt("enter ceil's length");
// let ceilwidth = +prompt("enter ceil's width");
// let sq = ceilingLength * ceilwidth;
// let neededGalloons = Math.ceil(sq / 350);

// console.log(
//   ` You will need to purchase ${neededGalloons} gallons of paint to cover ${sq} square feet`
// );

//10

// let firstItemPrice = +prompt("Enter the price of item 1");
// let firstItemAmount = +prompt("Enter the quantity of item 1");
// let secondItemPrice = +prompt("Enter the price of item 2");
// let secondItemAmount = +prompt("Enter the quantity of item 2");
// let thirdItemPrice = +prompt("Enter the price of item 3");
// let thirdItemAmount = +prompt("Enter the quantity of item 3");

// let totalCost =
//   firstItemAmount * firstItemPrice +
//   secondItemAmount * secondItemPrice +
//   thirdItemAmount * thirdItemPrice;

// let tax = (totalCost * 5.5) / 100;
// let totalPrice = totalCost + tax;

// console.log(`
//  Subtotal: $${totalCost}
// > Tax: $${tax}
// > Total: $${totalPrice}`);

//11

// let amount = +prompt("How many euros are you exchanging");
// let rate = +prompt("What is the exchange rate? ");
// let result3 = amount * rate;

// console.log(
//   `${amount} euros at an exchange rate of ${rate} is ${result3} dollars.`
// );

//12
// let principal = +prompt("enter the principal");
// let interest = +prompt("enter the interest");
// let year = +prompt("enter the number of years");
// let yearInterest = principal * (interest / 100) * year;

// let result4 = principal + yearInterest;
// console.log(
//   `after ${year} years at ${interest}, the investment will be worth ${result4}`
// );

//13

//14

// let inp = prompt(
//   "What is the answer to the Great Question of Life, the Universe, and Everything?"
// );

// let inp2 = inp.toLowerCase();
// if (inp2 == "42" || inp2 == "forty-two" || inp2 == "forty two") {
//   console.log("yes");
// } else {
//   console.log("no");
// }

//15

// let greeting = prompt("Greeting");
// let grt = greeting.trim().toLowerCase();
// console.log(grt);

// if (grt == "hello") {
//   console.log(0);
// } else if (grt.charAt(0) == "h" && grt != "hello") {
//   console.log("$20");
// } else {
//   console.log("$100");
// }

//16

// let str = prompt("File name").toLowerCase();

// if (str.slice(-5) == ".jpeg") {
//   console.log("image/jpeg");
// } else if (str.slice(-4) == ".gif") {
//   console.log("image/gif");
// } else if (str.slice(-4) == ".jpg") {
//   console.log("image/jpeg");
// } else if (str.slice(-4) == ".png") {
//   console.log("image/png");
// } else if (str.slice(-4) == ".pdf") {
//   console.log("application/pdf");
// } else if (str.slice(-4) == ".txt") {
//   console.log("text/plain");
// } else if (str.slice(-4) == ".zip") {
//   console.log("application/zip");
// } else {
//   console.log("application / octet - stream");
// }

//17

// let pro = prompt("enter numbers");
// let numVal = eval(pro);
// console.log(numVal.toFixed(2));

//18

// let time = prompt("What time is it?");
// let timenum = +time.replace(":", ".");
// console.log(time, timenum);

// if (timenum >= 7 && timenum <= 8) {
//   console.log(`time ${time}, it is Breakfast time`);
// } else if (timenum >= 12 && timenum <= 13) {
//   console.log(`time ${time}, it is dinner time`);
// } else if (timenum >= 18 && timenum <= 19) {
//   console.log(`time ${time}, it is supper time`);
// }

//19

// let orderAmount = +prompt("What is the order amount?");
// let state = prompt("what is the state?");
// let tax = 5.5;

// if (state !== "WI") {
//   console.log(`The total is $${orderAmount}`);
// } else {
//   let taxAmount = (Number(orderAmount) * tax) / 100;
//   let total = orderAmount + taxAmount;
//   console.log(
//     `the subtotal is ${orderAmount}, tax is ${taxAmount}, total is ${total}`
//   );
// }

//20
// let correctPassword = "AttackOnTitans!!!20";
// let inputPassword = prompt("What is the password?");

// if (correctPassword == inputPassword) {
//   console.log("Welcome!");
// } else {
//   console.log("I do not know you.");
// }

//21
// let legalAge = 16;
// let userAge = +prompt("What is your age?");

// legalAge <= userAge
//   ? console.log("You are old enough to legally drive.")
//   : console.log("You are not old enough to legally drive.");

//22

// let gender = prompt("Please write your gender");
// let mass = +prompt("Please write your weight");
// let alcAmount = +prompt(
//   "Please write amount of Alcohol you drank, please wrote it in ounces"
// );
// let lastTime = +prompt("How long ago did you drink alcohol?");

// let ind = gender == "female" ? 0.66 : 0.73;

// let bac = (alcAmount * 5.14) / (mass * ind) - 0.15 * lastTime;
// if (bac >= 0.8) {
//   console.log(`your BAC is ${bac}, you are not allowed to drive `);
// } else {
//   console.log(
//     "Your bac is less than the allowed bac, you are allowed to drive"
//   );
// }

//23

// let choice = prompt(
//   "Press C to convert from Fahrenheit to Celsius,\nPress F to convert from Celsius to Fahrenheit. "
// ).toLowerCase();

// console.log(`your choise is ${choice}`);

// if (choice === "c") {
//   let tempF = prompt("Please enter the temperature in Farenheit:");
//   let resC = ((tempF - 32) * 5) / 9;
//   console.log(`Temperature in Celsius is ${resC}`);
// } else if (choice === "f") {
//   let tempC = +prompt("Please enter the temperature in Celsius:");
//   let resF = (tempC * 9) / 5 + 32;
//   console.log(`Temperature in Farenheit is ${resF}`);
// }

//24
// let weight = +prompt("Please put your weight");
// let hght = +prompt("Please put your height");
// let resBmi = (weight / (hght * hght)) * 703;

// if (resBmi >= 18.5 && resBmi <= 25) {
//   console.log(
//     `Your bmi is ${resBmi}.\n You are within the ideal weight range.`
//   );
// } else if (resBmi < 18.5) {
//   console.log(
//     `Your bmi is ${resBmi}.\n You are underweight, please visit the doctor.`
//   );
// } else {
//   console.log(
//     `Your bmi is ${resBmi}.\n You are overweight, please visit the doctor.`
//   );
// }

//25

// let orderAmount = +prompt("What is the order amount?");
// let state = prompt(" What state do you live in?").toLowerCase();
// let tax;
// let totalTax;
// let totalOrder;

// if (state == "wisconsin") {
//   let county = prompt("What county do you live in?").toLowerCase();
//   if (county == "dunn") {
//     tax = 0.004;
//     totalTax = orderAmount * tax;
//     totalOrder = totalTax + orderAmount;
//     console.log(`The tax is ${totalTax},The total is ${totalOrder}`);
//   } else if (county == "eau claire") {
//     tax = 0.005;
//     totalTax = orderAmount * tax;
//     totalOrder = totalTax + orderAmount;
//     console.log(`The tax is ${totalTax},The total is ${totalOrder}`);
//   } else {
//     console.log(`The total is ${orderAmount}`);
//   }
// } else if (state == "illinois") {
//   tax = 0.08;
//   totalTax = orderAmount * tax;
//   totalOrder = totalTax + orderAmount;
//   console.log(`The tax is ${totalTax},The total is ${totalOrder}`);
// } else {
//   console.log(`The total is ${orderAmount}`);
// }

//26

// let numb = +prompt("Please put a number");

// switch (numb) {
//   case 1:
//     {
//       console.log("The name of the month is January");
//     }
//     break;
//   case 2:
//     {
//       console.log("The name of the month is February");
//     }
//     break;
//   case 3:
//     {
//       console.log("The name of the month is March");
//     }
//     break;
//   case 4:
//     {
//       console.log("The name of the month is April");
//     }
//     break;
//   case 5:
//     {
//       console.log("The name of the month is May");
//     }
//     break;
//   case 6:
//     {
//       console.log("The name of the month is June");
//     }
//     break;
//   case 7:
//     {
//       console.log("The name of the month is July");
//     }
//     break;
//   case 8:
//     {
//       console.log("The name of the month is August");
//     }
//     break;
//   case 9:
//     {
//       console.log("The name of the month is September");
//     }
//     break;
//   case 10:
//     {
//       console.log("The name of the month is December");
//     }
//     break;
//   case 11:
//     {
//       console.log("The name of the month is November");
//     }
//     break;
//   case 12:
//     {
//       console.log("The name of the month is December");
//     }
//     break;
//   default: {
//     console.log("Please put a valid number");
//   }
// }

//27

// let firstNum = +prompt("Enter the first number");
// let secondNum = +prompt("Enter the second number");
// let thirdNum = +prompt("Enter the third number");

// if (firstNum !== secondNum && firstNum !== thirdNum && secondNum !== thirdNum) {
//   if (firstNum > secondNum && firstNum > thirdNum) {
//     console.log(`${firstNum} is the bggest number`);
//   } else if (secondNum > firstNum && secondNum > thirdNum) {
//     console.log(`${secondNum} is the bggest number`);
//   } else {
//     console.log(`${thirdNum} is the bggest number`);
//   }
// } else {
//   console.log("Please note that numbers must be different");
// }

//28
// let response = prompt("Does the engine start?");

// if (response == "y") {
//   response = prompt("Are all wheels in good condition");
//   if (response == "y") {
//     response = prompt("Does the steering wheel work?");
//     if (response == "y") {
//       console.log("Please have this car checked bby profs");
//     } else {
//       console.log("steering wheel might need to be fixed");
//     }
//   } else {
//     response = prompt("Is any of the  wheels damaged?");
//     if (response == "y") {
//       console.log("Looks like it needs to be checked by the professional");
//     } else {
//       response = prompt("Does this car have oil?");
//       if (response == "y") {
//         console.log("I am sorry, it needs to be checked by the professional");
//       } else {
//         console.log("it might be caused due to lack of oil");
//       }
//     }
//   }
// } else {
//   console.log("OOps, looks like it needs professionals' help!");
// }
