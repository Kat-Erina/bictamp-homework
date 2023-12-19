// Callback Basics: Write a function that takes a callback as an argument and calls it after a delay of 1 second.

// es pirveli varianti
function takesCallback(childFn, arg1, arg2) {
  setTimeout(() => {
    let result = childFn(arg1, arg2);
    console.log(result);
  }, 1000);
}

function callBk(param1, param2) {
  return param1 - param2;
}

takesCallback(callBk, 8, 5);

// es meore varianti
function parent(success, failure, arg1) {
  setTimeout(() => {
    if (2 * 2 != 4) {
      success(arg1);
    } else failure(arg1);
  }, 1000);
}

function onSuccess(param) {
  console.log(`Good Job ${param}`);
}

function failure(param) {
  console.log(`Too Bad :(  ${param}`);
}

parent(onSuccess, failure, "Kato");

//Promise Basics: Create a promise that resolves after 2 seconds and logs a success message.

function createPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (2 + 3 == 5) {
        resolve("Nicely Done!");
      } else reject("Try Again!");
    }, 2000);
  });
}

createPromise()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//Promise Chain: Create a chain of promises where each resolves after 1 second and logs a message.

async function fetchData(country) {
  try {
    let response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!response.ok) {
      throw new Error("Oops, sth went wrong, try again!");
    }

    let data = await response.json();
    let { capital } = data[0];
    return capital;
  } catch (error) {
    throw error;
  }
}

function secondFunction(capital) {
  return new Promise((resolve, reject) => {
    let [capital2] = capital;
    resolve(capital2);
  });
}

fetchData("italy")
  .then((data) => secondFunction(data))
  .then((result) => console.log(result))
  .catch((error) => alert(error));

//   Async/Await: Write an asynchronous function using async/await that simulates fetching data from an API after 2 seconds.
// aertianebs Error Handling: Modify the previous example to include error handling using try/catch. && Fetch API: Use the Fetch API to make a simple GET request to a mock API and log the response.

async function fetchData2(url) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Sth went wrong!`);
        }
        let data = await response.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
}

fetchData2("https://jsonplaceholder.typicode.com/posts")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//Async Function with Fetch: Create an asynchronous function that uses the Fetch API to get data from an API and log it.

async function fetchData3(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("Could not fetch Data :(");
    }
    let data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

fetchData3("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
