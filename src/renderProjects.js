import "./renderProjects.css";
import { projects } from "./index.js";

function renderProjects() {

    const projectsDiv = document.querySelector(".projectsDiv");
    projectsDiv.innerHTML = "";

    function renderProject(project, projIndex) {
        const eachProject = document.createElement("div");
        eachProject.id = "project" + projIndex;
        eachProject.classList.add("eachProject");
        eachProject.innerHTML = `<h3>Project Title: ${project.projTitle}</h3>`;
        const todoList = document.createElement("ul");
        todoList.classList.add("todoList");
        eachProject.appendChild(todoList);
        projectsDiv.appendChild(eachProject);

        function renderTodos(todo, todoIndex) {
            console.log(todo);
            const eachTodo = document.createElement("li");
            eachTodo.id = "project" + projIndex + "todo" + todoIndex;
            eachTodo.classList.add("todo");
            eachTodo.innerHTML = `<p>${todo.todoTitle}</p>`;
            todoList.appendChild(eachTodo);
        }

        project.todos.forEach((todo, todoIndex) => {

            renderTodos(todo, todoIndex)
        
        });
    }

    projects.forEach((project, projIndex) => renderProject(project, projIndex));
}

export { renderProjects };