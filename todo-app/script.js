let todos = [];

const savedTodos = JSON.parse(localStorage.getItem("todos"));

if (savedTodos) {
  todos = savedTodos;
}

const today = new Date();

document.getElementById("date").innerText = today.toLocaleDateString();

const todoInput = document.getElementById("todoInput");

const addBtn = document.getElementById("addBtn");

const todoList = document.getElementById("todoList");

// Todo 생성 함수
function createTodo(text, completed = false) {
  const li = document.createElement("li");

  if (completed) {
    li.classList.add("completed");
  }

  // 텍스트
  const span = document.createElement("span");

  span.innerText = text;

  // 수정 버튼
  const editBtn = document.createElement("button");

  editBtn.innerText = "수정";

  editBtn.addEventListener("click", () => {
    const newText = prompt("수정할 내용을 입력하세요");

    if (newText === "") return;

    span.innerText = newText;

    saveTodos();
  });

  // 완료 버튼
  const completeBtn = document.createElement("button");

  completeBtn.innerText = "완료";

  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");

    saveTodos();

    updateCount();
  });

  // 삭제 버튼
  const deleteBtn = document.createElement("button");

  deleteBtn.innerText = "삭제";

  deleteBtn.addEventListener("click", () => {
    li.remove();

    saveTodos();

    updateCount();
  });

  // 버튼 박스
  const buttonBox = document.createElement("div");

  buttonBox.appendChild(editBtn);

  buttonBox.appendChild(completeBtn);

  buttonBox.appendChild(deleteBtn);

  // li 추가
  li.appendChild(span);

  li.appendChild(buttonBox);

  todoList.appendChild(li);
}

// 저장 함수
function saveTodos() {
  const todoElements = document.querySelectorAll("li");

  todos = [];

  todoElements.forEach((li) => {
    todos.push({
      text: li.querySelector("span").innerText,

      completed: li.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

// 남은 할 일
function updateCount() {
  const todos = document.querySelectorAll("li:not(.completed)");

  document.getElementById("count").innerText = `남은 할 일: ${todos.length}개`;
}

// 추가 버튼
addBtn.addEventListener("click", () => {
  const text = todoInput.value;

  if (text === "") return;

  createTodo(text);

  saveTodos();

  updateCount();

  todoInput.value = "";
});

// 엔터키
todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

// 저장된 Todo 불러오기
todos.forEach((todo) => {
  createTodo(todo.text, todo.completed);
});

// 초기 개수
updateCount();
