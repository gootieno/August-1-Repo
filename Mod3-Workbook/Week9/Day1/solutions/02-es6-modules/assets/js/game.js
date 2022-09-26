import { getIndex, removeIndex } from "./utilities.js";
// import { mrPotatoHeadQuotes } from "./quotes/mrPotatoHead.js";
import { mrPotatoHeadQuotes as banana } from "./quotes/mrPotatoHead.js";
import mrsPotatoHeadQuotes from "./quotes/mrsPotatoHead.js";
// remove index is just a demo. Does nothing :)

class Game {
  start() {
    document.getElementById("hello").addEventListener("click", () => {
      const index = getIndex();
      const messageContainer = document.getElementById("message");
      if (index === 1) {
        messageContainer.innerText = banana["hello"];
      } else {
        messageContainer.innerText = mrsPotatoHeadQuotes["hello"];
      }
    });

    document.getElementById("bye").addEventListener("click", () => {
      const index = getIndex();
      const messageContainer = document.getElementById("message");
      if (index === 1) {
        messageContainer.innerText = banana["bye"];
      } else {
        messageContainer.innerText = mrsPotatoHeadQuotes["bye"];
      }
    });

    document.getElementById("swap").addEventListener("click", () => {
      const index = getIndex();
      const image = document.getElementById("image");
      const messageContainer = document.getElementById("message");
      const wrapper = document.getElementById("wrapper");
      if (index === 1) {
        image.src = "./assets/images/potatohead2.png";
        wrapper.dataset.index = "2";
      } else {
        image.src = "./assets/images/potatohead1.png";
        wrapper.dataset.index = "1";
      }
      messageContainer.innerText = "";
    });
  }
}

export default Game;
