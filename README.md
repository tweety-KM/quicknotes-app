# QuickNotes

QuickNotes is a simple note-taking web app built with HTML, CSS and JavaScript. You can add short notes with a category, search through them and delete the ones you no longer need. Your notes are saved in the browser so they are still there after a refresh.

## Features

- Add notes (up to 200 characters) with a Personal, Work or Study category
- Validation with clear error messages for empty or over-long notes
- Delete individual notes
- Live search that is not case-sensitive
- Note count with correct wording for zero, one and many notes
- Notes saved with localStorage
- Responsive layout that works on phones

## How to run locally

1. Clone the repository: `git clone https://github.com/tweety-KM/quicknotes-app.git`
2. Open the `quicknotes-app` folder.
3. Open `index.html` in a browser (or use the Live Server extension in VS Code).

No installation or build step is needed.

## What I learned

- How to build elements with createElement and textContent so user text is never inserted as HTML.
- How to keep data in an array, save it with JSON.stringify and load it again with JSON.parse.
- How the render pattern works: change the data, save it, then redraw the list.
- How to use Flexbox, CSS classes and a media query to make a page responsive.
- How to make small, meaningful Git commits as each feature is finished.