import "./formStyles.css";
import { projects } from "./index.js";

const projectFormHTML = `
    <h2>New Project</h2>
    <form id="projForm">
        <label for="projTitle">Title: </label>
        <input type="text" id="projTitle" name="projTitle"><br><br>
        <label for="projDesc">Description: </label>
        <input type="text" id="projDesc" name="projDesc">
        <button type="submit">Submit</button>
    </form>
`;

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
                const projDesc = document.getElementById("projDesc").value.trim();

                const project = {
                    projTitle,
                    projDesc,
                    todos: []
                }

                projects.push(project);

                console.log("Project added:", project);
                console.log("All projects:", projects);

                closeForm();
            }

            form.addEventListener("submit", handleSubmit);
                
        }, 0);
    }
}

export { formsPopUp };