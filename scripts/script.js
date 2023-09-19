const add = document.getElementById("add");
const inputValue = document.getElementById("textInput");
const taskList = document.querySelector(".task-list");

add.addEventListener("click", () => {
  const realValue = inputValue.value;
  const divElement = document.createElement("div");
  divElement.classList.add("content");
  divElement.innerHTML = `<p>${realValue}</p> <button id = "remove">X</button>`;
  taskList.appendChild(divElement);

  inputValue.value = "";
  inputValue.focus();
});

taskList.addEventListener("click", (event) => {
  let tagname = event.target.tagName;

  if (tagname.toLowerCase() === "button") {
    const parentDiv = event.target.closest(".content");

    if (parentDiv) {
      taskList.removeChild(parentDiv);
    }
  }
});
