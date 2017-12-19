function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo () {
    toDos.push({
      title: newToDoText.value,
      complete: false

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  })
    });
  }
}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
