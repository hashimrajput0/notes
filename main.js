let addBtn = document.querySelector(".add-btn");
let addDialog = document.querySelector(".add-notes-dialog");
let closeDialog = document.querySelector(".cancel-notes-button");
addBtn.addEventListener("click", () => {
    addDialog.showModal();
});
closeDialog.addEventListener("click", () => {
    addDialog.close();
})

addEventListener("DOMContentLoaded", () => {
    createnotes();
});


let saveTitle = document.querySelector(".add-notesTitle-input");
let saveNoteMsg = document.querySelector(".add-notesMsg-input");
let addNotes = document.querySelector(".add-notes-button");
let notes = JSON.parse(localStorage.getItem("notes")) || [];





let msg = document.createElement("p");
let containerDialog = document.querySelector(".container-dialog");
containerDialog.prepend(msg);
msg.style.textAlign = "center";




addNotes.addEventListener("click", () => {

    let userInputTitle = saveTitle.value;
    let userInputMsg = saveNoteMsg.value;

    if (userInputTitle == "") {
        msg.innerHTML = "<b>*</b>Title is Necessary<b>*</b>";
    } else {
        msg.innerHTML = "";
        notes.push({ title: userInputTitle, msg: userInputMsg });
        localStorage.setItem("notes", JSON.stringify(notes));
        createnotes()
        addDialog.close();
        saveTitle.value = "";
        saveNoteMsg.value = "";
    }
})




function createnotes() {
    let main = document.querySelector("main");
    main.innerHTML = "";
    notes.forEach((note, index) => {

        let container = document.createElement("div")
        let notesHeading = document.createElement("h2");
        let notesMsg = document.createElement("p");
        let delBtn = document.createElement("button");
        delBtn.classList.add("deleteBtn")
        notesHeading.classList.add("notes-heading");
        notesMsg.classList.add("notes-p");
        container.classList.add("notes-container");
        main.prepend(container);
        notesHeading.innerText = note.title;
        notesMsg.innerText = note.msg;
        delBtn.innerText = "✖";
        container.appendChild(notesHeading);
        container.appendChild(notesMsg);
        container.appendChild(delBtn);

        delBtn.addEventListener("click", () => {
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            createnotes();
        })


    });
}