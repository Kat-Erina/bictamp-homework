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
