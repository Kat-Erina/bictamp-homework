// Changing Text Content - ტექსტის შეცვლა

const p = document.createElement("p");

document.body.append(p);
function changeText(element, text) {
  element.innerText = text;
}

changeText(p, "Hello");
// an meore versiad clickze moxdes es yvelaferi
p.innerText = "Click Me";
p.addEventListener("click", () => {
  changeText.call(p, p, "Hello There");
});

// Changing Styles - სტილის შეცვლა

const btn = document.createElement("button");
document.body.append(btn);
btn.innerText = "Click Me";
btn.addEventListener("click", () => {
  btn.style.color = "white";
  btn.style.backgroundColor = "red";
});

// Creating Elements - ელემენტების შექმნა

const div = document.createElement("div");
const btn = document.createElement("button");

document.body.append(btn);
document.body.append(div);
btn.innerText = "Click Me";

btn.addEventListener("click", insertElement);
function insertElement() {
  const p = document.createElement("p");
  p.innerText = "ახალი აბზაცი";
  div.append(p);
}

// Event Handling
const btn = document.createElement("button");
document.body.append(btn);
btn.innerText = "click Me!";

btn.addEventListener("click", () => {
  alert("ღილაკზე დაწკაპუნება");
});

// Form Validation - ფორმის ვალიდაცია
const btn = document.querySelector("button");
const inp = document.querySelector("input");
const spn = document.querySelector("span");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inp.value == "") {
    spn.innerText = "Please fill out the input!";
  } else {
    spn.innerText = "Information sent!";
  }
});

//an aseve ufro martivad sheidzleba Regex is gamoyenebit romelic amowmebs 1 asos mainc tu sheicavs

let inpRegex = /.*[A-Za-z].*/;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!inpRegex.test(inp.value)) {
    spn.innerText = "Please fill out the input!";
  } else {
    spn.innerText = "Information sent!";
  }
});

// Dynamic List Management - დინამიური სიის მართვა
let inpRegex = /.*[A-Za-z].*/;
const btn = document.querySelector("button");
const inp = document.querySelector("input");
const list = document.querySelector("ul");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inpRegex.test(inp.value)) {
    let newItem = document.createElement("li");
    let p = document.createElement("p");
    let btn = document.createElement("button");
    btn.textContent = "X";
    btn.classList.add("btn");
    btn.style.marginLeft = "10rem";
    p.innerText = inp.value;
    p.append(btn);
    newItem.append(p);
    list.append(newItem);
    inp.value = "";
  } else alert("Please fill out the form");
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    let targetItem = e.target.closest("li");
    targetItem.remove();
  }
});
