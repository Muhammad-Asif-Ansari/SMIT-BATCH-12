
function addTodo(){
    var list = document.getElementById("list");
    var todo = document.getElementById("todo");
    list.innerHTML = `
    <li>${todo.value}
    <button onclick = "delTodo()">Delete</button>
    <button onclick = "editTodo()">Edit</button>
    </li>`
}