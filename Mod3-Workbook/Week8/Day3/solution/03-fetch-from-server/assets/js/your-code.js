export function getAllDogs() {
  // Your code here
  return fetch("/dogs");
}

export function getDogNumberTwo() {
  // Your code here
  return fetch("/dogs/2");
}

export function postNewDog() {
  // Your code here
//   const url = "/dogs";

//   const headers = { "Content-Type": "application/x-www-form-urlencoded" };

//   const body = new URLSearchParams({
//     name: "Hachi Roku",
//     age: 86,
//   });

//   const options = {
//     method: "POST",
//     headers: headers,
//     body: body,
//   };

  // return fetch(url, options);
  return fetch("/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      name: "Hachi Roku",
      age: 86,
    }),
  });
}

export function postNewDogV2(name, age) {
  // Your code here
  const url = "/dogs";

  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  /*
    const variable1 = "yo"
    const variable2 = "hi"
    const object = {variable1, variable2}
    object
    { variable1: 'yo', variable2: 'hi' }
  */
  const body = new URLSearchParams({
    name,
    age,
  });

  const options = {
    method: "POST",
    headers: headers,
    body: body,
  };

  return fetch(url, options);
}

export function deleteDog(id) {
  // Your code here
  return fetch(`/dogs/${id}/delete`, {
    method: "POST",
    headers: {
      AUTH: "ckyut5wau0000jyv5bsrud90y",
    },
  });
}
