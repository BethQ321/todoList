import "./styles.css";
import { formsPopUp } from "./formsPopUp.js";
import { projects } from "./index.js";

function addButtons() {
    // creates add buttons div
    const addButtonsDiv = document.createElement("div");
    addButtonsDiv.classList.add("addButtonsDiv");
    container.appendChild(addButtonsDiv);

    // creates div for adding a project
    const projectButtonDiv = document.createElement("div");
    projectButtonDiv.classList.add("buttonDiv");
    addButtonsDiv.appendChild(projectButtonDiv);

    // creates content for add project
    const projectAddText = document.createElement("h2");
    projectAddText.classList.add("addDescription");
    projectAddText.innerHTML = "Add a project";
    projectButtonDiv.appendChild(projectAddText);

    const projectButton = document.createElement("button");
    projectButton.classList.add("addButton");
    projectButton.innerHTML = "+";
    projectButtonDiv.appendChild(projectButton);

    projectButton.addEventListener("click", () => formsPopUp("project"));

    // creates div for adding a todo
    const todoButtonDiv = document.createElement("div");
    todoButtonDiv.classList.add("buttonDiv");
    addButtonsDiv.appendChild(todoButtonDiv);

    // creates content for add todo
    const todoAddText = document.createElement("h2");
    todoAddText.classList.add("addDescription");
    todoAddText.innerHTML = "Add a todo";
    todoButtonDiv.appendChild(todoAddText);

    const todoButton = document.createElement("button");
    todoButton.classList.add("addButton");
    todoButton.innerHTML = "+";
    todoButtonDiv.appendChild(todoButton);

    todoButton.addEventListener("click", () => formsPopUp("todo"));
}

export { addButtons };