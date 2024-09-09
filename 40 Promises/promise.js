// ---------------------------------------- FETCH ----------------------------------------------

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// -------------------------------------- PROMISES ------------------------------------------------

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: Something Went Wrong.....");
    }
  }, 1000);
});

// -------------------------------------- .then .catch .finnaly ------------------------------------------------

// myPromise
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Finnaly Occured ... ");
//   });

// -------------------------------------- async await ------------------------------------------------

async function consumeMyPromis() {
  try {
    const response = await myPromise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumeMyPromis();

// --------------------------------------------------------------------------------------
