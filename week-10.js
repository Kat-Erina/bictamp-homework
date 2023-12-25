// პროექტი 57 - Who’s in Space? - ვინ არის კოსმოსში?

async function whoIsInSpace() {
  try {
    const response = await fetch("http://api.open-notify.org/astros.json");
    if (!response.ok) {
      throw new Error("Oops, could not fetch data");
    }
    let { people } = await response.json();
    console.log("| Name   | Age | City           |");
    console.log("|--------|-----|----------------|");
    people.forEach((human) => {
      console.log(`| ${human.name} | ${human.craft}`);
    });
  } catch (error) {
    console.error(error);
  }
}

whoIsInSpace();
// პროექტი 58 - Grabbing the Weather - ამინდის გაგება

let place = document.querySelector("#location");
let buttonTemp = document.querySelector(".getTemperature");
let myApiKey = "e8f06bae3a5f7650294b6fa2b3228380";
async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${myApiKey}`
    );
    if (!response.ok) {
      throw new Error("Oops, could not fetch Weather for this location");
    }
    let data = await response.json();
    let { temp } = data.main;
    let celsiusTemp = (temp - 273.15).toFixed(1);
    alert(`Now, it is ${celsiusTemp} C in ${location}`);
  } catch (error) {
    console.error(error);
  }
}

buttonTemp.addEventListener("click", () => {
  getWeather(place.value);
});

// პროექტი 59 - Flickr Photo Search - ფოტოს ძებნა Flickr-ზე
let mykey = "XWNJiOSqyOfQH8MvjySVVlnnqTA870BkJVM3PKlNfWQ";
const btnPhoto = document.querySelector(".getPhotos");
const photoDiv = document.querySelector(".photoDiv");
const photoInput = document.querySelector("#photo");

async function fetchPhotos(searchParam) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?&client_id=XWNJiOSqyOfQH8MvjySVVlnnqTA870BkJVM3PKlNfWQ&query=${searchParam}`
    );
    if (!response.ok) {
      throw new Error("Oops, could not fetch photos");
    }
    const data = await response.json();
    console.log(data);
    let { results } = data;
    for (let image of results) {
      let img = document.createElement("img");
      img.src = image.urls.small;
      photoDiv.append(img);
    }
  } catch (error) {
    console.error(error);
  }
}
btnPhoto.addEventListener("click", () => {
  fetchPhotos(photoInput.value);
});

// პროექტი 60 - Movie Recommendations - ფილმის რეკომენდაციები

const btnMovie = document.querySelector(".getMovie");
const movieInput = document.querySelector("#movie");

let key2 = "c4be60c";
async function fetchFilms(key, param2) {
  console.log(key);
  let response = await fetch(
    `http://www.omdbapi.com?apikey=${key}&t=${param2}`
  );
  if (!response.ok) {
    throw new Error("Oops, could not fetch movies");
  }
  let data = await response.json();
  console.log(data);
  let { Title, Year, Rated, imdbRating, Runtime, Plot } = data;
  let recommendation =
    Number(imdbRating) < 5
      ? "It iss better if you do not wtahc this film at all! :))"
      : "Please watch it RIGHT NOW!!! <3";

  console.log(
    `Title: ${Title}\nYear:${Year}\nRating: ${Rated}\nRunning Time: ${Runtime}\nDescription: ${Plot}\n${recommendation}`
  );
}

btnMovie.addEventListener("click", () => {
  fetchFilms(key2, movieInput.value);
});

// savarjishoebi

// #1
// use this endpoint http://localhost:3000/users
async function getUser(userId) {
  try {
    const response = await fetch(`http://localhost:3000/users?id=${userId}`);
    if (!response.ok) {
      throw new Error("Opps, could not get the user :(");
    }
    const [data] = await response.json();
    if (!data) {
      console.log("User does not exist");
      return;
    }
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// getUser(22);

//2
// use this endpoint http://localhost:3000/blogs
// aq validation ic sheidzleboda damematebina ubralod ar itxovda davaeba,
const postName = document.querySelector("#name");
const author = document.querySelector("#author");
const plot = document.querySelector("#post");
const btnPost = document.querySelector(".postBtn");

console.log(postName, author, plot);

async function sendNewPost(param1, param2, param3) {
  try {
    let newObj = {
      name: param1,
      author: param2,
      plot: param3,
    };
    console.log(newObj);
    const response = await fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    });
    if (!response.ok) {
      throw new Error("Oops, could not send a new post");
    }
  } catch (error) {
    console.error(error);
  }
}

btnPost.addEventListener("click", (e) => {
  sendNewPost(postName.value, author.value, plot.value);
});

//3

const product = document.querySelector(".productId");
const deleteBtn = document.querySelector(".delete");

async function deleteProduct(productId) {
  try {
    const deleteResponse = await fetch(
      `http://localhost:3000/products/${productId}`,
      {
        method: "DELETE",
      }
    );
    if (!deleteResponse.ok) {
      throw new Error("Oops, sth went wrong");
    }
  } catch (error) {
    console.error(error);
  }
}

deleteBtn.addEventListener("click", () => {
  deleteProduct(product.value);
});
//4

const contactInput = document.querySelector(".contact");
const updateBtn = document.querySelector(".update");

async function updateContact(contact, id) {
  try {
    const response = await fetch(
      `http://localhost:3000/registeredUsers/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactPhone: contact,
        }),
      }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

updateBtn.addEventListener("click", () => {
  updateContact(contactInput.value, 1);
});

//6

const recipe = document.querySelector("#recipe");
const updateRcp = document.querySelector(".updateRecipe");
const mealName = document.querySelector("#mealName");

async function updateRecipe(updatedContent, name) {
  try {
    const getRecipe = await fetch(
      `http://localhost:3000/recipes?name=${name.toLowerCase()}`
    );
    const [data] = await getRecipe.json();
    const response = await fetch(`http://localhost:3000/recipes/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipe: updatedContent,
      }),
    });
  } catch (error) {
    console.error(error);
  }
}

updateRcp.addEventListener("click", () => {
  updateRecipe(recipe.value, mealName.value);
});
