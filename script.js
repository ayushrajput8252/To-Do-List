const todoList = document.getElementById("ToDoList");
const newToDoInput = document.getElementById("newToDoInput");
const addToDoBtn = document.getElementById("addToDoBtn"); // Ensure the id matches

addToDoBtn.addEventListener("click", () => {
    const newTodoText = newToDoInput.value;

    if (newTodoText !== "") {
        const newTodoItem = document.createElement("li");
        newTodoItem.innerText = newTodoText;

        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerText = "X";

        deleteTodoBtn.classList.add("delete-todo-btn");
        deleteTodoBtn.addEventListener("click", function(){
            newTodoItem.remove();
        });

        newTodoItem.appendChild(deleteTodoBtn);
        todoList.appendChild(newTodoItem);
        newToDoInput.value = "";
    }
});
