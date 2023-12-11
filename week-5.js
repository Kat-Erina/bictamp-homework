// //1-eli da meore davaleba

let person = {
  name: "Kato",
  age: 30,
  lastName: "Nalchevanidze",
};

//2
person.sayHello = function () {
  console.log(this.name);
};
person.sayHello();
// //3

delete person.age;
// //4
person.job = "web-developer";

// //5
person.getJobLength = function () {
  console.log(this.job.length);
};

person.getJobLength();

// //6

let methodsAmount = Object.values(person).filter((key) => {
  return typeof key === "function";
});

console.log(methodsAmount.length);
//7
if (!person.hasOwnProperty("gender property")) {
  person["gender property"] = "female";
}

//8

for (let property in person) {
  console.log(property);
}

//9 aq tu methodebic igulisxmeboda qveda kodia swori
for (let property in person) {
  console.log(person[property]);
}
// tu ar igulisxmoeboda mashin qveda kodia swori
for (let property in person) {
  if (typeof person[property] != "function") {
    console.log(person[property]);
  }
}

//პროექტი 54 - Filtering Values - მნიშვნელობათა გაფილტვრა

let numbers = prompt("Enter a list of numbers, separated by spaces:");

function findEvenNumbers(nums) {
  let numsArray = nums.split(" ");
  let evenNumbers = numsArray.filter((num) => {
    return Number(num) % 2 == 0;
  });
  return evenNumbers;
}

let res = findEvenNumbers(numbers);

console.log(`The even numbers are: ${res.join(" ")}.`);

//პროექტი 55 - Sorting Records - ჩანაწერების დალაგება

let objectsArray = [
  {
    firstName: "John",
    lastName: "Johnson",
    position: "Manager",
    ["Separation date"]: "2016-12-31",
  },
  {
    firstName: "Tou",
    lastName: "Xiong",
    position: "Software Engineer",
    ["Separation date"]: "2016-10-05",
  },
  {
    firstName: "Michaela",
    lastName: "Michaelson",
    position: "District Manager",
    ["Separation date"]: "2015-12-19",
  },
  {
    firstName: "Jake",
    lastName: "Jacobson",
    position: "Programmer",
    ["Separation date"]: "",
  },
  {
    firstName: "Jacquelyn",
    lastName: "Jackson",
    position: "DBA",
    ["Separation date"]: "",
  },
  {
    firstName: "Sally",
    lastName: "Webber",
    position: "Web Developer",
    ["Separation date"]: "2015-12-18",
  },
];

// აქვე ვამატებ დამატებიტ გამოწვევას და კოდი ამასაც მოიცავს

let param = prompt(
  "How would you like to sort data; by Date, by lastname or by position?"
);

let usersChoice = "";
if (param.toLowerCase() == "date") {
  usersChoice = "Separation date";
} else if (param.toLowerCase() == "position") {
  usersChoice = "position";
} else if (param.toLowerCase() == "lastname") {
  usersChoice = "lastName";
} else {
  alert("invalid input");
}

function sortByName(param, criteria) {
  let sortedArray = param.sort((element1, element2) => {
    return element1[criteria].localeCompare(element2[criteria]);
  });
  return sortedArray;
}

let result = sortByName(objectsArray, usersChoice);

for (let obj of result) {
  console.log(
    `${obj.firstName} ${obj.lastName} | ${obj.position} | ${obj["Separation date"]}`
  );
}

//პროექტი 56 - Filtering Records - ჩანაწერების გაფილტვრა

let searchCriteria = prompt("Enter a search string:");

function filterData(array, criteria) {
  let criteriaLower = criteria.toLowerCase();
  let filteredArray = [];
  let sth = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i].firstName.toLowerCase().includes(criteriaLower) ||
      array[i].lastName.toLowerCase().includes(criteriaLower)
    ) {
      filteredArray.push(array[i]);
      sth = filteredArray.sort((element1, element2) => {
        return element1["firstName"].localeCompare(element2["firstName"]);
      });
    }
  }
  return filteredArray;
}

let result = filterData(objectsArray, searchCriteria);
for (let obj of result) {
  console.log(
    `${obj.firstName} ${obj.lastName} | ${obj.position} | ${obj["Separation date"]}`
  );
}
