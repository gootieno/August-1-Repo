// Your code here
window.addEventListener("DOMContentLoaded", () => {
  //    alert('DOM HAS LOADED')
  const redInput = document.getElementById("red-input");

  const changeToRed = (event) => {
    // console.log("event target", event.target);
    const color = redInput.value;
    console.log("red input value ", color);

    if (color === "red") {
      redInput.style.backgroundColor = "red";
    } else {
      redInput.style.backgroundColor = "";
    }
  };
  redInput.addEventListener("input", changeToRed);

  const addItemButton = document.getElementById("add-item");

  const addItems = () => {
    console.log("add item button clicked");

    const listInput = document.getElementById("list-add");
    const listValue = listInput.value;

    console.log("list input value", listValue);

    const ul = document.getElementsByTagName("ul")[0];

    const listItem = document.createElement("li");
    listItem.innerText = listValue;

    ul.appendChild(listItem);

    listInput.value = "";
  };

  addItemButton.addEventListener("click", addItems);

  const colorSelect = document.getElementById("color-select");

  colorSelect.addEventListener(
    "change",
    (dexWins = () => {
      const colorSelectSection = document.getElementById("section-3");

      colorSelectSection.style.backgroundColor = colorSelect.value;
    })
  );

  const removeListenerButton = document.getElementById("remove-listeners");

  removeListenerButton.addEventListener("click", () => {
    // redInput.addEventListener("input", changeToRed)
    redInput.removeEventListener("input", changeToRed);
    redInput.style.backgroundColor = "";
    colorSelect.removeEventListener("change", dexWins);
    addItemButton.removeEventListener("click", addItems);
  });
});
