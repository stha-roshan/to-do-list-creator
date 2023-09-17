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
});


taskList.addEventListener("click", (event) => {
    const getItem = event.target.tagName; 
    getItem.toLowerCase();
    if(getItem === "button"){
        taskList.removeChild(divElement);
    }
})