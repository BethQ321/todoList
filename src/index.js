import "./styles.css";
import { addButtons } from "./addButtons";

const container = document.getElementById("container");

// header
const headerDiv = document.createElement("div");
headerDiv.classList.add("header");
headerDiv.innerHTML = "<h1>Todo List</h1>";
container.appendChild(headerDiv);

// run function for add buttons
addButtons();

// create function for containing todo objects
// needs title, desc, date, priority
// 6.1) create todo object function

// create function for containing project object 
// needs title, desc, array of todo objects
// 3) connect project form to project object & display in console

// create button for adding new project
// 2.1) be able to create a pop up form and ensure it is displaying info to console

// create button for adding new todo
// new project button will call project object and feed info into it
// 6.2) create pop up form and ensure info is displayed to console

// create pop up form for new project
// responds to event listener when button is pushed
// 2.2) be able to create a pop up form and ensure it is displaying info to console

// create pop up form for new todo
// responds to event listener when button is pushed
// contains form info feeding into todo object
// 6.3) create pop up form and ensure info is displayed to console

// create render for single project
// contains info for rendering a single project card
// 4) create built-in "main" project and display
// 7) add rendering for todo objects

// create render for all projects
// contains info for rendering all project cards
// 5) display all projects


















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