const todo_ul = document.getElementsByClassName("todo-ul")[0];
const todo_data = document.getElementById("todo-data");

const addTodo = ()=>{
    if(todo_data.value === ""){
        alert("Plss Enter Some Thing...");
    }else{
        const li = document.createElement("li");
        li.innerHTML = todo_data.value;
        todo_ul.appendChild(li);
        li.classList.toggle("todo-li");

        const span = document.createElement("span");;
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    
    todo_data.value = "";
    saveData();
}

todo_ul.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


const saveData = ()=>{
    window.localStorage.setItem("data", todo_ul.innerHTML);
}
const showData = ()=>{
    todo_ul.innerHTML = localStorage.getItem("data");
}
showData();