class TodoApp {
    constructor() {
      this.todoInput = document.getElementById("todo-input");
      this.todoList = document.getElementById("todo-list");
      this.filterButtons = document.getElementById("filter-buttons");
      this.searchInput = document.getElementById("search");
  
      this.todos = JSON.parse(localStorage.getItem("todos")) || [];
  
      this.renderTodos();
      this.addEventListeners();
    }
  
    renderTodos() {
      this.todoList.innerHTML = "";
      this.todos.forEach((todo, index) => {
        const todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");
        todoItem.innerHTML = `
          <span class="${todo.completed ? "completed" : ""}" data-index="${index}">${todo.title}</span>
          <button class="delete-btn" data-index="${index}">Xóa</button>
        `;
        this.todoList.appendChild(todoItem);
      });
    }
  
    addTodo() {
      const title = this.todoInput.value.trim();
      if (title === "") return;
  
      const newTodo = {
        title: title,
        completed: false
      };
  
      this.todos.push(newTodo);
      this.saveData();
      this.renderTodos();
      this.todoInput.value = "";
    }
  
    deleteTodo(index) {
      this.todos.splice(index, 1);
      this.saveData();
      this.renderTodos();
    }
  
    toggleTodoStatus(index) {
      this.todos[index].completed = !this.todos[index].completed;
      this.saveData();
      this.renderTodos();
    }
  
    filterTodos(status) {
      let filteredTodos = [];
      if (status === "all") {
        filteredTodos = this.todos;
      } else if (status === "active") {
        filteredTodos = this.todos.filter(todo => !todo.completed);
      } else if (status === "completed") {
        filteredTodos = this.todos.filter(todo => todo.completed);
      }
      this.renderFilteredTodos(filteredTodos);
    }
  
    renderFilteredTodos(filteredTodos) {
      this.todoList.innerHTML = "";
      filteredTodos.forEach((todo, index) => {
        const todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");
        todoItem.innerHTML = `
          <span class="${todo.completed ? "completed" : ""}" data-index="${index}">${todo.title}</span>
          <button class="delete-btn" data-index="${index}">Xóa</button>
        `;
        this.todoList.appendChild(todoItem);
      });
    }
  
    searchTodos(keyword) {
      const filteredTodos = this.todos.filter(todo =>
        todo.title.toLowerCase().includes(keyword.toLowerCase())
      );
      this.renderFilteredTodos(filteredTodos);
    }
  
    addEventListeners() {
      this.todoInput.addEventListener("keyup", event => {
        if (event.keyCode === 13) {
          this.addTodo();
        }
      });
  
      this.todoList.addEventListener("click", event => {
        if (event.target.tagName === "SPAN") {
          const index = event.target.dataset.index;
          this.toggleTodoStatus(index);
        } else if (event.target.classList.contains("delete-btn")) {
          const index = event.target.dataset.index;
          this.deleteTodo(index);
        }
      });
  
      this.filterButtons.addEventListener("click", event => {
        if (event.target.tagName === "BUTTON") {
          const status = event.target.id;
          this.filterTodos(status);
        }
      });
  
      this.searchInput.addEventListener("input", () => {
        const keyword = this.searchInput.value.trim();
        this.searchTodos(keyword);
      });
    }
  
    saveData() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }
  
  const todoApp = new TodoApp();
  