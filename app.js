function onReady() {
  let id = 0;
  let toDos = [];

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteToDoBtns = document.getElementByClass('deleteToDo');

  function createNewToDo() {
    if (!newToDoText.value) { return; }

      toDos.push({
        title: newToDoText.value,
        complete: false,
        id: id++
      });

    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';
    deleteToDoBtns.addEventListener('click', event => {
      event.preventDefault();
    });

  function deleteToDo(id) {
    let toDos = toDos.filter(item => item.id !== id);
    deleteToDo(toDo.id);
    renderTheUI();
  }

// Use the forEach method to loop through each to do item
// Create new li element for the to-do
// Create an input element that has a type of checkbox
// Create a span element that's text content is the title of the to-do
// Append the span and input to the li
    toDos.forEach(function(toDo){
      const newToDo = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const title = document.createElement('span');
      title.textContent = toDo.title;

      toDoList.appendChild(newToDo);
      newToDo.appendChild(checkbox);
      newToDo.appendChild(title);
    });

  }

// Add event listener and call prevent default to prevent the page from reloading
// Clear the text input with new to do text value
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
