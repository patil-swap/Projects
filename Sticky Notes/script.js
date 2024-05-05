const appContainer = document.getElementById("app");
const addNoteButton = appContainer.querySelector(".add-note");

getNotes().forEach((note) => {
  createNote(note.id, note.content);
});

addNoteButton.addEventListener("click", () => addNote());

function addNote() {
  const notes = getNotes();
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };
  createNote(noteObj.id, noteObj.content);

  notes.push(noteObj);
  saveNotes(notes);
}

function getNotes() {
  return JSON.parse(localStorage.getItem("note-ap") || "[]");
}

function createNote(id, content) {
  let noteContainer = createContainer();
  appContainer.insertBefore(noteContainer, addNoteButton);
  const noteElement = createNoteElement(id, content);
  noteContainer.appendChild(noteElement);
  const deleteButton = createDeleteButton(id, noteContainer);
  noteContainer.appendChild(deleteButton);
  const decorateTextButtons = createTextDecorationButtons();
  decorateTextButtons.forEach((e) => {
    noteContainer.appendChild(e);
  });
}

function saveNotes(notes) {
  localStorage.setItem("note-ap", JSON.stringify(notes));
}

function createContainer() {
  const divElement = document.createElement("div");
  divElement.classList.add("note-container");
  return divElement;
}

function createNoteElement(id, content) {
  const divElement = document.createElement("div");
  divElement.classList.add("note");
  divElement.textContent = content ? content : "Empty Note";
  divElement.setAttribute("contenteditable", "true");

  divElement.addEventListener("keydown", () => {
    updateNote(id, divElement.textContent);
  });
  divElement.addEventListener("click", (e) => {
    if (divElement.textContent == "Empty Note") {
      divElement.textContent = "";
    }
  });

  return divElement;
}

function createDeleteButton(id, element) {
  const elementDelete = document.createElement("button");
  elementDelete.classList.add("deleteBtn");
  const image = document.createElement("img");
  image.setAttribute("src", "assets/deleteIcon.png");
  image.setAttribute("alt", "Delete");

  elementDelete.appendChild(image);
  elementDelete.addEventListener("click", () => {
    deleteNote(id, element);
  });
  return elementDelete;
}

function createTextDecorationButtons() {
  const boldBtn = createButton("bold");
  const underlineBtn = createButton("underline");
  const italicBtn = createButton("italic");
  return [boldBtn, underlineBtn, italicBtn];
}

function updateNote(id, newContent) {
  const notes = getNotes();
  const target = notes.filter((note) => note.id == id)[0];

  target.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  appContainer.removeChild(element);
}

function transform(style) {
  if (document.getSelection()) {
    var span = document.createElement("span");
    span.classList.add(style);
    var text = document.getSelection();
    if (text.rangeCount) {
      var range = text.getRangeAt(0).cloneRange();
      range.surroundContents(span);
      text.removeAllRanges();
      text.addRange(range);
    }
  }
}

function createButton(style) {
  btn = document.createElement("button");
  btn.classList.add("btn");
  btn.classList.add(style + "Btn");
  btn.textContent = style[0].toUpperCase();
  btn.addEventListener("click", () => {
    transform(style);
  });
  return btn;
}
