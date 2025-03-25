import "./formStyles.css";
import { projects } from "./index.js";
import { renderProjects } from "./renderProjects.js";

const projectFormHTML = `
    <h3>New Project</h3>
    <form id="projForm">
        <label for="projTitle">Title: </label>
        <input type="text" id="projTitle" name="projTitle"><br><br>
        <label for="projDesc">Description: </label>
        <input type="text" id="projDesc" name="projDesc">
        <button type="submit">Submit</button>
    </form>
`;

const todoFormHTML = `
    <h3>New Todo</h3>
    <form id="todoForm">
        <label for="todoProjectDD">Project Title: </label>
        <select id="todoProjectDD" name="todoProjectDD"></select><br><br>
        <label for="todoTitle">Todo: </label>
        <input type="text" id="todoTitle" name="todoTitle"><br><br>
        <label for="todoDesc">Description: </label>
        <input type="text" id="todoDesc" name="todoDesc">
        <button type="submit">Submit</button>
    </form>
`

function formsPopUp(formType) {
    // Overlay div for fading background & easy exit out of form
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    container.appendChild(overlay);

    // Form container & content
    const formPopUp = document.createElement("div");
    formPopUp.classList.add("formPopUp");
    if(formType === "project") {
        formPopUp.innerHTML = projectFormHTML;
    } else if(formType === "todo") {
        formPopUp.innerHTML = todoFormHTML;
    } else {
        return;
    }
    container.appendChild(formPopUp);

    // Control the display of opening and closing the pop up
    overlay.style.display = "block";
    formPopUp.style.display = "block";

    function closeForm() {
        overlay.style.display = "none";
        formPopUp.style.display = "none";
        overlay.remove();
        formPopUp.remove();
        renderProjects(projects);
    }

    overlay.addEventListener("click", closeForm);

    // Handle form submission
    if(formType === "project") {
        setTimeout(() => {
            const form = document.getElementById("projForm");
            if (!form) return;

            form.removeEventListener("submit", handleSubmit);

            function handleSubmit(event) {
                event.preventDefault();

                const projTitle = document.getElementById("projTitle").value.trim();
                const projId = projTitle.replaceAll(' ', '');
                const projDesc = document.getElementById("projDesc").value.trim();

                const project = {
                    projId,
                    projTitle,
                    projDesc,
                    todos: []
                }

                projects.push(project);

                closeForm();
            }

            console.log("Updated project list", projects)

            form.addEventListener("submit", handleSubmit);
            // renderProjects(projects);
                
        }, 0);
    } else if(formType === "todo") {        
        setTimeout(() => {
            const form = document.getElementById("todoForm");
            if (!form) return;

            // Create the dropdown menu options
            const projectDropdown = document.getElementById("todoProjectDD");
            if (!projectDropdown) return;

            projectDropdown.innerHTML = "";

            projects.forEach((project) => {
                const option = document.createElement("option");
                option.value = project.projTitle;
                option.textContent = project.projTitle;
                projectDropdown.appendChild(option);
            });

            // Handle the submission of the new todo
            form.removeEventListener("submit", handleSubmit);

            function handleSubmit(event) {
                event.preventDefault();

                const project = document.getElementById("todoProjectDD").value.trim();
                const todoTitle = document.getElementById("todoTitle").value.trim();
                const todoDesc = document.getElementById("todoDesc").value.trim();

                const newTodo = {
                    project,
                    todoTitle,
                    todoDesc
                }

                // Push the todo to the correct project
                projects.forEach((project) => {
                    if(project.projTitle === newTodo.project) {
                        project.todos.push(newTodo);
                    } 
                })

                closeForm();
            }

            console.log("Updated project list", projects)

            form.addEventListener("submit", handleSubmit);
            //renderProjects(projects);
                
        }, 0);
    } else {
        return;
    }
}

export { formsPopUp };