const p = document.querySelector(".pText");

function changeText(element, text) {
  element.innerText = text;
}
p.addEventListener("click", (e) => {
  changeText(e.target, "Text Changed");
});

// Changing Styles - სტილის შეცვლა

const btn1 = document.querySelector(".firstBtn");
btn1.addEventListener("click", () => {
  btn1.style.color = "white";
  btn1.style.backgroundColor = "red";
});
// Creating Elements - ელემენტების შექმნა

const div = document.querySelector(".firstDiv");
const btn2 = document.createElement("button");

btn2.innerText = "Click to change Text";
div.append(btn2);

function changeHtml() {
  const p = document.createElement("p");
  p.innerText = "ახალი აბზაცი";
  div.append(p);
}

btn2.addEventListener("click", () => changeHtml());

// Event Handling
const btn3 = document.querySelector(".thirdBtn");
btn3.innerText = "click Me!";

btn3.addEventListener("click", () => {
  alert("ღილაკზე დაწკაპუნება");
});
//Form Validation - ფორმის ვალიდაცია
const sendBtn = document.querySelector(".sendData");
const inp = document.querySelector(".name");
const spn = document.querySelector("span");

let inpRegex = /.*[A-Za-z].*/;

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!inpRegex.test(inp.value)) {
    spn.innerText = "Please fill out the input!";
  } else {
    spn.innerText = "Information sent!";
  }
});

// Dynamic List Management - დინამიური სიის მართვა
let inpRegex2 = /.*[A-Za-z].*/;
const addBtn = document.querySelector(".add");
const newItemInp = document.querySelector(".newItem");
const list = document.querySelector("ul");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inpRegex2.test(newItemInp.value)) {
    let newItem = document.createElement("li");
    let p = document.createElement("p");
    let btn = document.createElement("button");
    btn.textContent = "X";
    btn.classList.add("btn");
    btn.style.marginLeft = "10rem";
    p.innerText = newItemInp.value;
    p.append(btn);
    newItem.append(p);
    list.append(newItem);
    newItemInp.value = "";
  } else alert("Please fill out the form");
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    let targetItem = e.target.closest("li");
    targetItem.remove();
  }
});
