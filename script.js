//your code here
const inputTodo = document.getElementById('newTodoInput');
const todoList = document.getElementById('todoList');
const addHandler = () => {
    if (inputTodo.value.trim() === "") {
        return;
    }
    const node = document.createElement('li');
    const textNode = document.createTextNode(inputTodo.value);
    node.appendChild(textNode);
    todoList.appendChild(node);
    inputTodo.innerText = "";
    inputTodo.innerHTML = "";
    inputTodo.value = "";

}