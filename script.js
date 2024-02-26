function addTodo() {
  const newTodoText = document.getElementById("new-todo").value;

  // 새로운 To-Do 항목 생성
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.textContent = newTodoText;

  // 체크박스 추가
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("todo-checkbox");
  newTodo.appendChild(checkbox);

  // 삭제 버튼 추가
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("todo-delete-button");
  deleteButton.textContent = "삭제";
  deleteButton.onclick = function() {
	newTodo.parentNode.removeChild(newTodo);
  };
  newTodo.appendChild(deleteButton);

  // To-Do 목록에 추가
  const todoList = document.getElementById("todo-list");
  todoList.appendChild(newTodo);

  // 입력 필드 초기화
  document.getElementById("new-todo").value = "";
}
