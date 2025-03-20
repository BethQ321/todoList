import "./formStyles.css";

const projectFormHTML = `
    <h2>New Project</h2>
    <form>
        <label for="title">Title: </label>
        <input type="text" id="title" name="title"><br><br>
        <label for="description">Description: </label>
        <input type="text" id="description" name="description">
        <button type="submit">Submit</button>
    </form>
`

function formsPopUp(formType) {
    //Pop up container
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    container.appendChild(overlay);

    //Form container & content
    const formPopUp = document.createElement("div");
    formPopUp.classList.add("formPopUp");
    if(formType === "project") {
        formPopUp.innerHTML = projectFormHTML;
    }
    container.appendChild(formPopUp);

    overlay.style.display = "block";
    formPopUp.style.display = "block";

    function closeForm() {
        overlay.style.display = "none";
        formPopUp.style.display = "none";
    }

    overlay.addEventListener("click", closeForm);
}

export { formsPopUp };