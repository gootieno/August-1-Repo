/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    console.log("data from json ", data);

    const url = data.message; // URL of new dog image
    console.log("dog url ", url);
    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    // Your code here
    const urlParts = url.split("/");
    console.log("url parts ", urlParts);

    // let tempBreed = url.split("breeds/");
    // let breed = tempBreed[1].split("/")[0];
    // console.log(breed);

    const breedName = urlParts[urlParts.length - 2];
    console.log("breed name ", breedName);
    /*------------ Create new dog card with the url above ------------- */

    // <li>
    //     <figure>
    //         <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg" />
    //         <figcaption>hound-afghan</figcaption>
    //     </figure>
    // </li>

    // select a live element on the page to append to
    const ul = document.querySelector("ul");
    console.log("ul ", ul);

    // removing attributes
    ul.removeAttribute("id");
    // create elements
    const li = document.createElement("li");
    li.style.border = "4px solid red";

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.id = "dog-image";

    const figCaption = document.createElement("figcaption");
    figCaption.innerText = breedName;

    figure.append(img, figCaption); // append 1 or more

    // append child returns the child
    const node = li.appendChild(figure);
    console.log("node ", node);
    ul.appendChild(li);
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here

    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */
  // Your code here
  const firstDog = document.querySelector("li");
  console.log("first dog ", firstDog);
  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
  firstDog.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here
  const dogsList = document.querySelectorAll("li");
  console.log("dogs list ", dogsList);

  const lastDog = dogsList[dogsList.length - 1];
  console.log("last dog ", lastDog);
  lastDog.remove();
  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
});
