// Your code here

// add the DOMContentLoaded event listener
window.addEventListener("DOMContentLoaded", () => {
  // select add button, input element, and shopping list element
  const addButton = document.getElementById("add");

  console.log("add button ", addButton);
  // add a click event on the button

  addButton.addEventListener("click", (event) => {
    event.preventDefault();

    //input
    const name = document.getElementById("name");
    //type
    const type = document.getElementById("type");
    //list
    const shoppingList = document.getElementById("shopping-list");

    // get the input value

    const option = document.querySelector("option");

    console.log(option.getAttribute("value"));
    // get the input type value
    // create a list element
    const li = document.createElement("li");

    // set the data-* and list element value to the input value
    li.innerText = name.value;
    li.dataset.type = type.value;
    // append list element to the shopping list element
    shoppingList.append(li);

    name.value = "";
  });
});
