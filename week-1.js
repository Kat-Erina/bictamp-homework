// week1-st projets

// პროექტი 1 - Saying Hello - გამარჯობა
let name = prompt("What is your name?");
console.log(`Hello, ${name}`);

// პროექტი 2 - Counting the Number of Characters - სიმბოლოების რაოდენობის დათვლა
let inp = prompt("Please write anything you like");
console.log(`Your provided string consists of ${inp.length} symbols`);

// პროექტი 3 - Printing Quotes - ციტატების ბეჭდვა

let str = prompt("What is the quote?");
let author = prompt("Who said it");

console.log(
  `What is the quote? ${str},\nWho said that? ${author}.\n${author} says, '${str}'`
);

// პროექტი 4 - Indoor Voice - ჩუმი ხმა

let val = prompt("Please write anything");
console.log(val.toLowerCase());

// პროექტი 5 - Playback Speed - საუბრის სიჩქარე

let val2 = prompt("Please write anything");

console.log(val2.replaceAll(" ", "..."));

// პროექტი 6 - Making Faces - სახეების მიღება

let val3 = prompt("Put any string and emoji");
function convert(param) {
  if (param.includes(":(") && param.includes(":)")) {
    let newWord = param.replaceAll(":(", "🙁");
    return newWord.replaceAll(":)", "🙂");
  } else if (param.includes(":(")) {
    return param.replaceAll(":(", "🙁");
  } else if (param.includes(":)")) {
    return param.replaceAll(":)", "🙂");
  }
}

function main(param) {
  return convert(param);
}

let res = main(val3);
console.log(res);
