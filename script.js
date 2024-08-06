const todoInput = document.getElementById("todoInput");
const addbtn = document.getElementById("AddTodoBtn");
const todoList = document.getElementById("todoList");


addbtn.addEventListener('click',addTodo);

todoInput.addEventListener('keypress', function (e){
    if(e.key == 'Enter'){
        addTodo();
    }

});


function addTodo() {
    const itext = todoInput.value.trim();

    if(itext !== ''){
        const li = document.createElement('li');
        li.textContent = itext;
        todoList.appendChild(li);
        todoInput.value = '';
    }
}

const closebtn = document.getElementById("clearbtn");

closebtn.addEventListener('click', closeTodo);

function closeTodo() {
    todoList.innerHTML='';
}

const storebtn = document.getElementById("store");

storebtn.addEventListener('click',Storetodo);

function Storetodo() {
    const items = [];
    const listitems = document.querySelectorAll('#todoList li');
    listitems.forEach((i )=> {
        items.push(i.textContent); 
    });
    localStorage.setItem('todoList',JSON.stringify(items));
    alert("Todo List stored successfully!");
}

const retbtn = document.getElementById("retreive");

retbtn.addEventListener('click', Rettodo);

function Rettodo(){
    const storeditems = JSON.parse(localStorage.getItem('todoList'));
    if(storeditems){
        storeditems.forEach((item)=>{
            const li = document.createElement("li");
            li.textContent = item;
            todoList.appendChild(li);
        })
    }
}