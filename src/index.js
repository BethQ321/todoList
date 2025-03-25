import "./styles.css";
import { addButtons } from "./addButtons";
import { renderProjects } from "./renderProjects.js"

const container = document.getElementById("container");
const projects = [{
    projId: "Main",
    projTitle: "Main",
    projDesc: "General todo list",
    todos: [{project: 'Main', todoTitle: "wash dishes", todoDesc: "get dishes washed for dinner"}, 
        {project: 'Main', todoTitle: "mow lawn", todoDesc: "neighbors keep giving us dirty looks"}, 
        {project: 'Main', todoTitle: "paint nails", todoDesc: "Date night!!"}
    ]
}];

// header
const headerDiv = document.createElement("div");
headerDiv.classList.add("header");
headerDiv.innerHTML = "<h1>Todo List</h1>";
container.appendChild(headerDiv);

// run function for add buttons
addButtons();

// run function to render projects
function renderProjectsDiv() {
    const projectsDiv = document.createElement("div");
    projectsDiv.classList.add("projectsDiv");
    projectsDiv.innerHTML = "<h2>Current Projects</h2>";
    container.appendChild(projectsDiv);

    renderProjects();
}
renderProjectsDiv();

export { projects };
















// function createTodo (
//     title,
//     description = "",
//     dueDate = "",
//     priority = "low",
//     completed = false
// ) {
//     return {
//         title,
//         description,
//         dueDate,
//         priority,
//         completed
//     };
// }   

// function createTodoForm() {
//     const form = document.createElement("form");
//     form.innerHTML = `
//         <input type="text" placeholder="Title" required>
//         <textarea placeholder="Description"></textarea>
//         <input type="date">
//         <select>
//             <option value="low">Low</option>
//             <option value="medium">Medium</option>
//             <option value="high">High</option>
//         </select>
//         <button type="submit">Add Todo</button>
//     `;
//     return form;
// }

// function createProject (name) {
//     return {
//         name,
//         todos: []
//     };
// }   

// function addTodoToProject (project, todo) {
//     project.todos.push(todo);
// }

// function removeTodoFromProject (project, todo) {
//     const index = project.todos.indexOf(todo);
//     if (index > -1) {
//         project.todos.splice(index, 1);
//     }
// }

// function toggleTodoCompletion (todo) {
//     todo.completed = !todo.completed;
//     renderProjects(); 
// }

// function updateProjectDropdown() {
//     const projectSelect = document.getElementById("project-select");
//     projectSelect.innerHTML = ""; // Clear existing options

//     projects.forEach((project, index) => {
//         const option = document.createElement("option");
//         option.value = index;
//         option.textContent = project.name;
//         projectSelect.appendChild(option);
//     });
// }

// function renderProject(project) {
//     const projectContainer = document.createElement("div");
//     projectContainer.classList.add("project");

//     const projectTitle = document.createElement("h2");
//     projectTitle.textContent = project.name;
//     projectContainer.appendChild(projectTitle);

//     const todoList = document.createElement("ul");
//     project.todos.forEach(todo => {
//         const todoItem = document.createElement("li");
//         todoItem.textContent = `${todo.title} - ${todo.completed ? "Completed" : "Not Completed"}`;
//         todoItem.addEventListener("click", () => toggleTodoCompletion(todo));
//         todoList.appendChild(todoItem);
//     });
//     projectContainer.appendChild(todoList);

//     return projectContainer;
// }

// function renderProjects() {
//     const projectsContainer = document.querySelector(".projects");
//     if (!projectsContainer) return;

//     projectsContainer.innerHTML = "";

//     projects.forEach(project => {
//         const projectElement = renderProject(project);
//         projectsContainer.appendChild(projectElement);
//     });

// }

// // Main application logic
// const projects = [];
// const appContainer = document.getElementById("app");
// const projectForm = document.createElement("form");
// projectForm.innerHTML = `
//     <input type="text" id="project-name" placeholder="Project Name" required />
//     <button type="submit">Add Project</button>
// `;
// projectForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const projectName = document.getElementById("project-name").value;
//     if (projectName.trim() === "") return; 
//     const newProject = createProject(projectName);
//     projects.push(newProject);
//     renderProjects();
//     projectForm.reset();
// });
// appContainer.appendChild(projectForm);

// const todoForm = createTodoForm();
// todoForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const title = todoForm.querySelector("todo-title").value;
//     const description = todoForm.querySelector("todo-description").value;
//     const dueDate = todoForm.querySelector("todo-due-date").value;
//     const priority = todoForm.querySelector("todo-priority").value;

//     if (title.trim() === "") return; 

//     const selectedProjectIndex = document.getElementById("project-select").selectedIndex; 
//     const selectedProject = projects[selectedProjectIndex];
    
//     if (selectedProject) {
//         const newTodo = createTodo(title, description, dueDate, priority);
//         addTodoToProject(selectedProject, newTodo);
//         renderProjects();
//         todoForm.reset();
//     }
// });
// appContainer.appendChild(todoForm);

// renderProjects();