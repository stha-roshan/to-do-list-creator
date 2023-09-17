const add = document.getElementById("add");
const inputValue = document.getElementById("textInput");
const taskList = document.querySelector(".task-list");

add.addEventListener("click", () => {
  const realValue = inputValue.value;
  const divElement = document.createElement("div");
  divElement.classList.add("content");
  divElement.innerHTML = `<p>${realValue}</p> <button>X</button>`;
  taskList.appendChild(divElement);

  inputValue.value = "";
});
