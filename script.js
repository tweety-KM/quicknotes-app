// ---------- 1. Select the elements ----------
const form = document.querySelector("#note-form");
const input = document.querySelector("#note-input");
const categorySelect = document.querySelector("#note-category");
const list = document.querySelector("#notes-list");
const count = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");
const searchInput = document.querySelector("#search-input");

// ---------- 2. Data ----------
let notes = [];

// ---------- 3. Draw the notes ----------
function render() {
  list.replaceChildren();

  notes.forEach((note) => {
    const li = document.createElement("li");
    li.classList.add("note", `category-${note.category}`);

    const text = document.createElement("p");
    text.classList.add("note-text");
    text.textContent = note.text;

    const meta = document.createElement("div");
    meta.classList.add("note-meta");

    const label = document.createElement("span");
    label.classList.add("category-label");
    label.textContent =
      note.category.charAt(0).toUpperCase() + note.category.slice(1);

    const date = document.createElement("span");
    date.textContent = note.createdAt;

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.classList.add("delete-btn");

    meta.append(label, date, del);
    li.append(text, meta);
    list.appendChild(li);
  });
}

// ---------- 4. Add a note ----------
function addNote(text, category) {
  notes.push({
    id: Date.now(),
    text: text,
    category: category,
    createdAt: new Date().toLocaleString(),
  });
  render();
}

// ---------- 5. Form ----------
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addNote(input.value.trim(), categorySelect.value);
  input.value = "";
  input.focus();
});

render();