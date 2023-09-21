const add = document.getElementById("add");
const inputValue = document.getElementById("textInput");
const taskList = document.querySelector(".task-list");
const taskListArray = [];

add.addEventListener("click", () => {
  const realValue = inputValue.value;

  taskListArray.push(realValue);
  console.log(taskListArray);

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

const save = document.getElementById("save");
const date = document.getElementById("date");
const savedToDoBox = document.getElementById("savedToDo");

save.addEventListener("click", () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("savedItem");
  newDiv.innerHTML = `
  <div>
  <span>To-Do List
    <img class="img" src="/img-resources/to-do-list.png" alt="" /></span>
</div>

<div id="showSavedDate">
  <span>Date : </span>
  <span id="placeDate">${date.value}</span>
</div>
`;

  for (let i = 0; i < taskListArray.length; i++) {
    const savedContent = document.createElement("div");
    savedContent.classList.add("savedContent");
    savedContent.innerHTML = `
  <label for="myCheckbox" class="custom-checkbox">
   <input type="checkbox" id="myCheckbox">
  </label>
   <p>${taskListArray[i]} </p>`;
    newDiv.appendChild(savedContent);
  }

  savedToDoBox.appendChild(newDiv);

  taskListArray.length = 0;
  taskList.innerHTML = "";
});


