document.addEventListener('DOMContentLoaded', () => {
  const noteInput = document.getElementById('noteInput');
  const addNoteBtn = document.getElementById('addNoteBtn');
  const noteList = document.getElementById('noteList');

  // Function to create a new note item
  function createNoteItem(noteText) {
    const li = document.createElement('li');
    li.classList.add('note-item');

    const noteContent = document.createElement('span');
    noteContent.textContent = noteText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      noteList.removeChild(li);
    });

    li.appendChild(noteContent);
    li.appendChild(deleteBtn);
    return li;
  }

  // Function to add a new note
  function addNote() {
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
      const newNote = createNoteItem(noteText);
      noteList.appendChild(newNote);
      noteInput.value = ''; // Clear the input after adding the note
    }
  }

  // Add note on button click
  addNoteBtn.addEventListener('click', addNote);

  // Add note on Enter key press
  noteInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && noteInput.value.trim() !== '') {
      addNote();
    }
  });
});
