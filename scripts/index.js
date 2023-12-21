import deleteAll from "./deleteAll.js";
import deleteOne from "./deleteOne.js";
import loopCreator from "./loopCreator.js";
import { selector } from "./selector.js";
import solveExpression from "./solveExpression.js";
import { buttons, bannedList } from "./variables.js";

const buttonsArea = selector("#buttonsArea");

loopCreator(
  buttonsArea,
  "li",
  buttons,
  "text-white text-3xl list-none flex justify-center items-center tShadow rounded-lg hover:scale-95 hover:border-4 hover:border-purple-500/50 transition-all"
);

const history = selector("#history");
const current = selector("#current");

buttonsArea.addEventListener("click", (e) => {
  current.innerText.includes("Error")
    ? (current.innerText = "")
    : current.innerText;
  if (!bannedList.includes(e.target.innerText)) {
    current.innerText == 0 ? (current.innerText = "") : e.target.innerText;
    current.innerText += e.target.innerText;
  }
  if (e.target.innerText == "AC") {
    deleteAll([history, current]);
  }
  if (e.target.innerText == "DEL") {
    current.innerText.length == 1
      ? (current.innerText = 0)
      : (current.innerText = deleteOne(current.innerText));
  }
  if (e.target.innerText == "=") {
    history.innerText = current.innerText;
    let res = solveExpression(current.innerText);
    current.innerText = res;
  }
});
