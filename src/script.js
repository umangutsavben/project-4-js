const button = document.getElementById("add-btn");
const input = document.getElementById("txt");
const box = document.getElementById("container");

button.addEventListener("click",addTodo);

let todos = [];

function addTodo(){
    if(input.value.trim() === "") return;
    const todo = {
        id:Date.now(),
        data: input.value,
        flag:false
    }
    todos.push(todo);
    saveTodo();
    render();
    input.value = "";
}

function saveTodo(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

function render(){
    box.innerHTML = "";
    todos = JSON.parse(localStorage.getItem("todos")) || [];
    //todos = todos.filter()
    todos.forEach((todo) => {
        
        const div = document.createElement("div");
        const span = document.createElement("span");
        const btn = document.createElement("button");
        span.innerText = todo.data;
        btn.innerText = "delete";
        div.style.display = "flex";
        div.style.justifyContent = "space-evenly"
        btn.classList.add("butt");
        if(todo.flag === true) {
            span.style.textDecoration = "line-through";
        }
        span.dataset.id = todo.id;
        btn.dataset.id = todo.id;
        span.addEventListener("click",toggle);
        btn.addEventListener("click",deleteTodo);
        div.append(span,btn);
        box.appendChild(div);
    })
}
function toggle(event){
    const id = Number(event.target.dataset.id);
    todos = todos.map((todo) =>{
        if(todo.id === id){
            todo.flag = !todo.flag;
        }
        return todo;
    })
    saveTodo();
    render();
}
function deleteTodo(event){
    const id = Number(event.target.dataset.id);
    todos = todos.filter(todo => todo.id !== id);
    saveTodo();
    render();
}





document.addEventListener("DOMContentLoaded", () => {
    todos = JSON.parse(localStorage.getItem("todos")) || [];
    render();
});