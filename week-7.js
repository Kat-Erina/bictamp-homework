// Changing Text Content - ტექსტის შეცვლა

const p = document.querySelector("p");

p.addEventListener("click", () => {
  p.innerText = "Hello Dom!";
});

// es meore gza
p.addEventListener("click", () => {
  changeText.call(p, p);
});

function changeText(param) {
  console.log(param);
  param.innerText = "Hello Dom!";
}

// Changing Styles - სტილის შეცვლა

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.style.color = "white";
  btn.style.backgroundColor = "red";
});

// Creating Elements - ელემენტების შექმნა

const div = document.querySelector("div");
const btn = document.querySelector("button");

btn.addEventListener("click", insertElement);
function insertElement() {
  const p = document.createElement("p");
  p.innerText = "ახალი აბზაცი";
  div.append(p);
}

// Event Handling
const btn = document.querySelector("button");
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
    inp.value = "";
    spn.innerText = "";
  }
});

// Dynamic List Management - დინამიური სიის მართვა
const btn = document.querySelector("button");
const inp = document.querySelector("input");
const list = document.querySelector("ul");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inp.value != "") {
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
